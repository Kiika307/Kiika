"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { checkRateLimit, clientIp } from "@/lib/rate-limit";
import { getSmtpTransporter, emailFrom } from "@/lib/email/smtp-client";
import {
  renderPortalInvitationSubject,
  renderPortalInvitationText,
  renderPortalInvitationHtml,
} from "@/lib/email/templates/portal-invitation";

const INVITE_TTL_MS = 14 * 24 * 60 * 60 * 1000; // 14 jours

function token(): string {
  return randomBytes(24).toString("base64url");
}

function appUrl(): string {
  return process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
}

// ============================================================
// 1. INVITER LE CLIENT (côté thérapeute)
// ============================================================

export interface InviteClientResult {
  ok: boolean;
  error?: string;
  inviteUrl?: string;
  sent?: boolean;
}

export async function inviteClientToPortal(
  clientId: string,
): Promise<InviteClientResult> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const therapistEmail = auth.user.email ?? "";
  const therapistFullName =
    (auth.user.user_metadata?.full_name as string | undefined) ||
    therapistEmail ||
    "Votre praticien·ne";

  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name, email")
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!client) return { ok: false, error: "Client introuvable" };
  if (!client.email)
    return {
      ok: false,
      error: "Le client n'a pas d'adresse e-mail. Renseignez-la d'abord dans la fiche.",
    };

  const inviteToken = token();
  const expiresAt = new Date(Date.now() + INVITE_TTL_MS).toISOString();

  const { error: updErr } = await supabase
    .from("clients")
    .update({
      portal_invite_token: inviteToken,
      portal_invite_expires_at: expiresAt,
      portal_invited_at: new Date().toISOString(),
    })
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id);

  if (updErr) return { ok: false, error: updErr.message };

  const url = `${appUrl()}/portail/invitation/${inviteToken}`;

  const transporter = getSmtpTransporter();
  if (!transporter) {
    revalidatePath(`/clients`);
    return { ok: true, inviteUrl: url, sent: false };
  }

  const firstName = (client.full_name ?? "").split(" ")[0] || "vous";
  const data = {
    clientFirstName: firstName,
    therapistFullName,
    portalUrl: url,
    expiresAtIso: expiresAt,
  };

  try {
    await transporter.sendMail({
      from: emailFrom(),
      to: client.email,
      subject: renderPortalInvitationSubject(data),
      html: renderPortalInvitationHtml(data),
      text: renderPortalInvitationText(data),
      replyTo: therapistEmail || undefined,
      headers: {
        "X-KIIKA-Type": "portal_invitation",
        "X-KIIKA-Therapist-Id": auth.user.id,
      },
    });
  } catch (e) {
    return {
      ok: true,
      inviteUrl: url,
      sent: false,
      error:
        e instanceof Error
          ? `E-mail non envoyé (${e.message}). Lien copiable disponible.`
          : "E-mail non envoyé. Lien copiable disponible.",
    };
  }

  revalidatePath(`/clients`);
  return { ok: true, inviteUrl: url, sent: true };
}

// ============================================================
// 2. CLAIM (le client a cliqué le lien et s'est authentifié)
// ============================================================

export interface ClaimResult {
  ok: boolean;
  error?: string;
  needsTerms?: boolean;
}

export async function claimClientInvitation(
  inviteToken: string,
): Promise<ClaimResult> {
  const ip = await clientIp();
  if (!(await checkRateLimit(`portal:claim:${ip}`, 10, 60_000))) {
    return { ok: false, error: "Trop de tentatives. Réessayez dans une minute." };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Le claim passe par une RPC SECURITY DEFINER : avant la liaison, la RLS
  // empêche le client de lire/écrire sa fiche par token. La RPC valide aussi
  // la correspondance d'e-mail (anti-détournement de lien).
  const { data, error } = await supabase.rpc("claim_portal_invitation", {
    p_token: inviteToken,
  });

  if (error) return { ok: false, error: error.message };

  const result = (data ?? {}) as { ok?: boolean; error?: string; needsTerms?: boolean };
  if (!result.ok) {
    return { ok: false, error: result.error ?? "Lien d'invitation invalide" };
  }
  return { ok: true, needsTerms: result.needsTerms ?? false };
}

// ============================================================
// 3. ACCEPTATION CGU / CGV / RGPD
// ============================================================

export async function acceptPortalTerms(input: {
  cgu: boolean;
  cgv: boolean;
  rgpd: boolean;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  if (!input.cgu || !input.cgv || !input.rgpd) {
    return { ok: false, error: "Les trois consentements sont obligatoires" };
  }

  // Garde applicative : si les consentements sont déjà enregistrés, ne pas
  // réécrire (la date initiale fait foi — RGPD art. 7). Le trigger DB
  // fn_lock_client_self_update applique aussi cette immutabilité (write-once).
  const { data: existing } = await supabase
    .from("clients")
    .select("cgu_accepted_at, cgv_accepted_at, rgpd_accepted_at")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (!existing) return { ok: false, error: "Fiche introuvable" };

  if (existing.cgu_accepted_at && existing.cgv_accepted_at && existing.rgpd_accepted_at) {
    revalidatePath("/portail");
    return { ok: true };
  }

  const now = new Date().toISOString();
  const { error } = await supabase
    .from("clients")
    .update({
      cgu_accepted_at: existing.cgu_accepted_at ?? now,
      cgv_accepted_at: existing.cgv_accepted_at ?? now,
      rgpd_accepted_at: existing.rgpd_accepted_at ?? now,
    })
    .eq("user_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail");
  return { ok: true };
}

// ============================================================
// 4. MESSAGERIE — envoi
// ============================================================

export async function sendPortalMessage(input: {
  body: string;
  /** Côté client : ignoré (on ré-extrait du auth user). Côté thérapeute : requis. */
  clientId?: string;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const body = input.body.trim();
  if (!body) return { ok: false, error: "Message vide" };
  if (body.length > 10000) return { ok: false, error: "Message trop long" };

  // Cas client : la fiche dont user_id = auth.user.id détermine therapist_id
  const { data: clientByUser } = await supabase
    .from("clients")
    .select("id, therapist_id")
    .eq("user_id", auth.user.id)
    .maybeSingle();

  if (clientByUser) {
    const { error } = await supabase.from("client_messages").insert({
      client_id: clientByUser.id,
      therapist_id: clientByUser.therapist_id,
      sender_role: "client",
      body,
    });
    if (error) return { ok: false, error: error.message };
    revalidatePath("/portail/messagerie");
    revalidatePath("/clients");
    revalidatePath("/messagerie");
    return { ok: true };
  }

  // Cas thérapeute : clientId requis, fiche doit lui appartenir
  if (!input.clientId) return { ok: false, error: "clientId requis" };
  const { data: clientByTherapist } = await supabase
    .from("clients")
    .select("id, therapist_id")
    .eq("id", input.clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();
  if (!clientByTherapist) return { ok: false, error: "Client introuvable" };

  const { error } = await supabase.from("client_messages").insert({
    client_id: clientByTherapist.id,
    therapist_id: clientByTherapist.therapist_id,
    sender_role: "therapist",
    body,
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  revalidatePath("/messagerie");
  revalidatePath("/portail/messagerie");
  return { ok: true };
}

// ============================================================
// 5. RETOUR CLIENT SUR UNE TÂCHE
// ============================================================

export async function submitTaskFeedback(input: {
  taskId: string;
  feedback: string;
  markCompleted: boolean;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const feedback = input.feedback.trim().slice(0, 5000);
  const patch: Record<string, unknown> = { client_feedback: feedback || null };
  if (input.markCompleted) patch.completed_at = new Date().toISOString();

  // Contrôle d'accès explicite (défense en profondeur, en plus de la RLS +
  // du trigger fn_lock_client_task_update qui empêche de toucher d'autres
  // colonnes) : la tâche doit appartenir à la fiche du client connecté.
  const { data: clientRow } = await supabase
    .from("clients")
    .select("id")
    .eq("user_id", auth.user.id)
    .maybeSingle();
  if (!clientRow) return { ok: false, error: "Non autorisé" };

  const { error } = await supabase
    .from("client_tasks")
    .update(patch)
    .eq("id", input.taskId)
    .eq("client_id", clientRow.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail/devoirs");
  revalidatePath("/clients");
  return { ok: true };
}

// ============================================================
// 6. MÉTÉO ÉMOTIONNELLE (client)
// ============================================================

async function clientForUser(supabase: Awaited<ReturnType<typeof createClient>>, userId: string) {
  const { data } = await supabase
    .from("clients")
    .select("id, therapist_id")
    .eq("user_id", userId)
    .maybeSingle();
  return data;
}

export async function logMoodCheckin(input: {
  score: number;
  note?: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const score = Math.round(Number(input.score));
  if (!Number.isFinite(score) || score < 1 || score > 5) {
    return { ok: false, error: "Score invalide (1 à 5)" };
  }
  const note = input.note?.trim().slice(0, 2000) || null;

  const client = await clientForUser(supabase, auth.user.id);
  if (!client) return { ok: false, error: "Non autorisé" };

  const { error } = await supabase.from("client_mood_checkins").insert({
    client_id: client.id,
    therapist_id: client.therapist_id,
    score,
    note,
  });
  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail");
  revalidatePath("/clients");
  return { ok: true };
}

// ============================================================
// 7. JOURNAL DE BORD (client)
// ============================================================

export async function saveJournalEntry(input: {
  id?: string;
  title?: string | null;
  body: string;
  shared: boolean;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const body = input.body.trim();
  if (!body) return { ok: false, error: "Entrée vide" };
  if (body.length > 20000) return { ok: false, error: "Entrée trop longue" };
  const title = input.title?.trim().slice(0, 200) || null;

  const client = await clientForUser(supabase, auth.user.id);
  if (!client) return { ok: false, error: "Non autorisé" };

  if (input.id) {
    const { error } = await supabase
      .from("client_journal")
      .update({ title, body, shared: input.shared })
      .eq("id", input.id)
      .eq("client_id", client.id);
    if (error) return { ok: false, error: error.message };
    revalidatePath("/portail/journal");
    revalidatePath("/clients");
    return { ok: true, id: input.id };
  }

  const { data, error } = await supabase
    .from("client_journal")
    .insert({
      client_id: client.id,
      therapist_id: client.therapist_id,
      title,
      body,
      shared: input.shared,
    })
    .select("id")
    .single();
  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail/journal");
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function deleteJournalEntry(
  id: string,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const client = await clientForUser(supabase, auth.user.id);
  if (!client) return { ok: false, error: "Non autorisé" };

  const { error } = await supabase
    .from("client_journal")
    .delete()
    .eq("id", id)
    .eq("client_id", client.id);
  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail/journal");
  return { ok: true };
}
