"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { createPublicClient } from "@/lib/supabase/public";
import { calculateSeleneScores, buildSeleneProfile } from "@/lib/selene-scoring";
import type { SeleneDimension } from "@/lib/selene-data";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { getSmtpTransporter, emailFrom } from "@/lib/email/smtp-client";
import {
  renderSeleneInvitationHtml,
  renderSeleneInvitationSubject,
  renderSeleneInvitationText,
} from "@/lib/email/templates/selene-invitation";

// ============================================================
// Génération de lien d'invitation au test (thérapeute)
// ============================================================

function randomToken(): string {
  // 32 chars URL-safe random
  const bytes = new Uint8Array(24);
  crypto.getRandomValues(bytes);
  return Array.from(bytes)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
}

export async function createSeleneInvitation(
  clientId: string,
): Promise<{ ok: boolean; token?: string; url?: string; expiresAt?: string; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Vérifier ownership du client
  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name")
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!client) return { ok: false, error: "Client introuvable" };

  const token = randomToken();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();

  const { error } = await supabase.from("selene_invitations").insert({
    token,
    therapist_id: auth.user.id,
    client_id: clientId,
    expires_at: expiresAt,
  });

  if (error) return { ok: false, error: error.message };

  // Construit l'URL absolue à partir du Site URL Supabase ou du domaine de prod connu.
  const baseUrl =
    process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
  const url = `${baseUrl}/selene/${token}`;

  revalidatePath("/clients");
  return { ok: true, token, url, expiresAt };
}

// ============================================================
// Envoi par email via SMTP SiteGround (KIIKA -> client, Reply-To: thérapeute)
// ============================================================

export interface SendSeleneEmailResult {
  ok: boolean;
  error?: string;
  sentTo?: string;
}

/**
 * Generate a fresh Selene invitation and email it to the client via the
 * configured SMTP server (SiteGround mailbox), branded as KIIKA. Reply-To
 * is set to the therapist's address so any client reply lands in the
 * therapist's inbox.
 *
 * Falls back to ok:false with a descriptive error when:
 * - SMTP is not configured (missing SMTP_HOST/SMTP_USER/SMTP_PASSWORD)
 * - The client has no email on file
 */
export async function sendSeleneInvitationByEmail(
  clientId: string,
): Promise<SendSeleneEmailResult> {
  const transporter = getSmtpTransporter();
  if (!transporter) {
    return {
      ok: false,
      error:
        "L'envoi automatique n'est pas encore configuré sur ce serveur. Utilisez « Copier le lien » en attendant.",
    };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Therapist info: use full_name from user metadata when available, else email.
  const therapistEmail = auth.user.email ?? "";
  const therapistFullName =
    (auth.user.user_metadata?.full_name as string | undefined) ||
    therapistEmail ||
    "Votre praticien·ne";

  // Client must have an email and belong to the current therapist.
  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name, email")
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!client) return { ok: false, error: "Client introuvable" };
  if (!client.email) {
    return {
      ok: false,
      error: "Le client n'a pas d'adresse e-mail enregistrée. Renseignez-la dans la fiche.",
    };
  }

  // Generate a fresh invitation. We do not reuse a previously generated one
  // because the user expects "Envoyer" to mean "envoyer maintenant" with a
  // visible new audit trail entry.
  const token = randomToken();
  const expiresAt = new Date(Date.now() + 30 * 24 * 60 * 60 * 1000).toISOString();
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
  const url = `${baseUrl}/selene/${token}`;

  const { data: invitation, error: insertError } = await supabase
    .from("selene_invitations")
    .insert({
      token,
      therapist_id: auth.user.id,
      client_id: clientId,
      expires_at: expiresAt,
    })
    .select("id")
    .single();

  if (insertError || !invitation) {
    return { ok: false, error: insertError?.message ?? "Impossible de créer l'invitation" };
  }

  const firstName = (client.full_name ?? "").split(" ")[0] || "vous";
  const data = {
    clientFirstName: firstName,
    therapistFullName,
    testUrl: url,
    expiresAtIso: expiresAt,
  };

  try {
    await transporter.sendMail({
      from: emailFrom(),
      to: client.email,
      subject: renderSeleneInvitationSubject(data),
      html: renderSeleneInvitationHtml(data),
      text: renderSeleneInvitationText(data),
      replyTo: therapistEmail || undefined,
      headers: {
        "X-KIIKA-Type": "selene_invitation",
        "X-KIIKA-Therapist-Id": auth.user.id,
      },
    });
  } catch (e) {
    // Common SMTP failures: bad creds, connection refused, mailbox over quota,
    // recipient rejected. Bubble up the message verbatim — therapist can read
    // and decide whether to retry or use the copy-link fallback.
    return {
      ok: false,
      error: e instanceof Error ? e.message : "Échec de l'envoi de l'e-mail",
    };
  }

  // Stamp the row with the send metadata for the audit trail.
  await supabase
    .from("selene_invitations")
    .update({
      sent_at: new Date().toISOString(),
      sent_to_email: client.email,
      send_method: "kiika_email",
    })
    .eq("id", invitation.id);

  revalidatePath("/clients");
  return { ok: true, sentTo: client.email };
}

// ============================================================
// Soumission du test (client final, public)
// ============================================================

export interface SeleneInvitationContext {
  ok: boolean;
  invitationId?: string;
  clientId?: string;
  clientFirstName?: string;
  expiresAt?: string;
  alreadyUsed?: boolean;
  error?: string;
}

export async function loadSeleneInvitation(token: string): Promise<SeleneInvitationContext> {
  // Rate limit: 30 lookups per minute per IP. Protects against brute-force
  // enumeration of invitation tokens.
  const ip = await clientIp();
  if (!(await checkRateLimit(`selene:load:${ip}`, 30, 60_000))) {
    return { ok: false, error: "Trop de requêtes. Réessayez dans une minute." };
  }

  const supabase = await createPublicClient();
  const { data, error } = await supabase
    .rpc("get_selene_invitation", { p_token: token })
    .single();

  if (error || !data) {
    return { ok: false, error: "Invitation invalide ou expirée." };
  }
  const row = data as {
    invitation_id: string;
    client_id: string;
    client_first_name: string;
    expires_at: string;
    already_used: boolean;
  };

  return {
    ok: true,
    invitationId: row.invitation_id,
    clientId: row.client_id,
    clientFirstName: row.client_first_name,
    expiresAt: row.expires_at,
    alreadyUsed: row.already_used,
  };
}

export async function submitSeleneResponses(
  token: string,
  responses: Record<string, number>,
): Promise<{ ok: boolean; error?: string; dominante?: string }> {
  // Rate limit: 5 attempts per IP per hour for a costly write+RPC path.
  const ip = await clientIp();
  if (!(await checkRateLimit(`selene:submit:${ip}`, 5, 60 * 60 * 1000))) {
    return { ok: false, error: "Trop de tentatives de soumission. Réessayez plus tard." };
  }

  // Validation basique côté serveur
  const ids = Object.keys(responses);
  if (ids.length < 100) return { ok: false, error: "Réponses incomplètes" };
  for (const id of ids) {
    const v = responses[id];
    if (typeof v !== "number" || v < 1 || v > 7 || !Number.isFinite(v)) {
      return { ok: false, error: `Réponse invalide pour ${id}` };
    }
  }

  // Calcul du score côté serveur (autorité, le client peut être falsifié)
  const scoreResults = calculateSeleneScores(responses);
  const profile = buildSeleneProfile(scoreResults);

  const scoresMap: Record<string, number> = {};
  for (const r of scoreResults) {
    scoresMap[r.dimension] = r.scoreNormalise;
  }
  const top3: SeleneDimension[] = profile.top3.map((s) => s.dimension);

  const supabase = await createPublicClient();
  const { data, error } = await supabase
    .rpc("submit_selene_response", {
      p_token: token,
      p_responses: responses,
      p_scores: scoresMap,
      p_dominante: profile.dimensionDominante,
      p_top3: top3,
    })
    .single();

  if (error) return { ok: false, error: error.message };
  const row = data as { success: boolean; message: string };
  if (!row.success) return { ok: false, error: row.message };

  return { ok: true, dominante: profile.dimensionDominante };
}
