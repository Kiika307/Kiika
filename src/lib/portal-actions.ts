"use server";

import { randomBytes } from "node:crypto";
import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
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
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data: client } = await supabase
    .from("clients")
    .select("id, user_id, portal_invite_expires_at, cgu_accepted_at, cgv_accepted_at, rgpd_accepted_at")
    .eq("portal_invite_token", inviteToken)
    .maybeSingle();

  if (!client) return { ok: false, error: "Lien d'invitation invalide" };

  if (
    client.portal_invite_expires_at &&
    new Date(client.portal_invite_expires_at).getTime() < Date.now()
  ) {
    return { ok: false, error: "Lien expiré — demandez à votre praticien·ne de le renvoyer" };
  }

  // Si la fiche est déjà liée à un autre auth user, refuser pour éviter le piratage
  if (client.user_id && client.user_id !== auth.user.id) {
    return { ok: false, error: "Ce lien est déjà lié à un autre compte" };
  }

  const { error } = await supabase
    .from("clients")
    .update({
      user_id: auth.user.id,
      portal_invite_token: null,
      portal_invite_expires_at: null,
    })
    .eq("id", client.id);

  if (error) return { ok: false, error: error.message };

  const needsTerms = !(client.cgu_accepted_at && client.cgv_accepted_at && client.rgpd_accepted_at);
  return { ok: true, needsTerms };
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

  const now = new Date().toISOString();
  const { error } = await supabase
    .from("clients")
    .update({
      cgu_accepted_at: now,
      cgv_accepted_at: now,
      rgpd_accepted_at: now,
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

  // RLS s'occupe du contrôle d'accès
  const { error } = await supabase
    .from("client_tasks")
    .update(patch)
    .eq("id", input.taskId);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/portail/devoirs");
  revalidatePath("/clients");
  return { ok: true };
}
