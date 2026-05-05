"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import {
  rankProtocolsForClient,
  deepAnalyzeWithLLM,
  type ScoredProtocol,
  type LLMDeepAnalysis,
} from "@/lib/matching";
import { getClientsRich, getProtocols } from "@/lib/data";
import type {
  ClientInfo,
  NoteKind,
  PlanStatus,
  ProfileAxes,
  InvoiceStatut,
  ModeFinancement,
  DocumentCategory,
  SignatureMethod,
} from "@/lib/types";

// === Server-side input limits ===
// These guards complement RLS and are not display hints.
const MAX_NOTE_BODY = 50_000;
const MAX_NOTE_TITLE = 200;
const MAX_TASK_TITLE = 200;
const MAX_TASK_DESC = 5_000;
const MAX_TASK_FEEDBACK = 5_000;
const MAX_INVOICE_NUMERO = 50;
const MAX_INVOICE_NOTES = 2_000;
const MAX_INVOICE_AMOUNT = 99_999;
const MAX_DOC_FILENAME = 255;
const MAX_DOC_DESCRIPTION = 1_000;
const MAX_DOC_SIZE_BYTES = 50 * 1024 * 1024; // 50 MB
const MAX_TEXT_LONG = 5_000;
const MAX_TEXT_SHORT = 500;

const ALLOWED_DOC_MIME = new Set<string>([
  "application/pdf",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/heic",
  "image/heif",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "application/vnd.ms-excel",
  "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
  "text/plain",
  "text/csv",
]);

function validMoney(v: number, max: number): boolean {
  return Number.isFinite(v) && v >= 0 && v <= max;
}

export async function markAppointmentDone(appointmentId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("appointments")
    .update({ status: "done" })
    .eq("id", appointmentId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };

  revalidatePath("/");
  revalidatePath("/agenda");
  return { ok: true };
}

export async function updateClientInfo(
  clientId: string,
  info: ClientInfo,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Length guards on free-text PHI fields to prevent DB bloat / DoS.
  const longFields: Array<string | null | undefined> = [
    info.antecedentsMedicaux,
    info.antecedentsPsy,
    info.traitementsEnCours,
  ];
  for (const v of longFields) {
    if (v && v.length > MAX_TEXT_LONG)
      return { ok: false, error: "Champ trop long (5000 caractères max)" };
  }
  const shortFields: Array<string | null | undefined> = [
    info.profession,
    info.situationFamiliale,
    info.adresse,
    info.medecinTraitant,
    info.personneReferente,
  ];
  for (const v of shortFields) {
    if (v && v.length > MAX_TEXT_SHORT)
      return { ok: false, error: "Champ trop long (500 caractères max)" };
  }

  const { error } = await supabase
    .from("clients")
    .update({
      date_naissance: info.dateNaissance,
      sexe: info.sexe,
      profession: info.profession,
      situation_familiale: info.situationFamiliale,
      adresse: info.adresse,
      medecin_traitant: info.medecinTraitant,
      personne_referente: info.personneReferente,
      antecedents_medicaux: info.antecedentsMedicaux,
      antecedents_psy: info.antecedentsPsy,
      traitements_en_cours: info.traitementsEnCours,
    })
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };

  revalidatePath("/clients");
  return { ok: true };
}

export async function cancelAppointment(appointmentId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("appointments")
    .update({ status: "cancelled" })
    .eq("id", appointmentId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };

  revalidatePath("/");
  revalidatePath("/agenda");
  return { ok: true };
}

export async function addClientNote(input: {
  clientId: string;
  appointmentId?: string | null;
  kind: NoteKind;
  title?: string | null;
  body: string;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };
  if (!input.body.trim()) return { ok: false, error: "Note vide" };
  if (input.body.length > MAX_NOTE_BODY) return { ok: false, error: "Note trop longue" };
  if (input.title && input.title.length > MAX_NOTE_TITLE) return { ok: false, error: "Titre trop long" };

  const { data, error } = await supabase
    .from("client_notes")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      appointment_id: input.appointmentId ?? null,
      kind: input.kind,
      title: input.title ?? null,
      body: input.body,
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function updateClientNote(
  noteId: string,
  patch: { title?: string | null; body?: string },
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };
  if (patch.body !== undefined && patch.body.length > MAX_NOTE_BODY)
    return { ok: false, error: "Note trop longue" };
  if (patch.title && patch.title.length > MAX_NOTE_TITLE)
    return { ok: false, error: "Titre trop long" };

  const { error } = await supabase
    .from("client_notes")
    .update(patch)
    .eq("id", noteId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function deleteClientNote(noteId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("client_notes")
    .delete()
    .eq("id", noteId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function assignProtocolToClient(input: {
  clientId: string;
  protocolId: number;
  sessionsTotal?: number | null;
  notes?: string | null;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data, error } = await supabase
    .from("client_protocols")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      protocol_id: input.protocolId,
      sessions_total: input.sessionsTotal ?? null,
      notes: input.notes ?? null,
      status: "planned",
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function updateClientProtocol(
  planId: string,
  patch: {
    status?: PlanStatus;
    sessionsDone?: number;
    sessionsTotal?: number | null;
    notes?: string | null;
  },
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const update: Record<string, unknown> = {};
  if (patch.status !== undefined) {
    update.status = patch.status;
    if (patch.status === "in_progress") update.started_at = new Date().toISOString();
    if (patch.status === "done") update.completed_at = new Date().toISOString();
  }
  if (patch.sessionsDone !== undefined) update.sessions_done = patch.sessionsDone;
  if (patch.sessionsTotal !== undefined) update.sessions_total = patch.sessionsTotal;
  if (patch.notes !== undefined) update.notes = patch.notes;

  const { error } = await supabase
    .from("client_protocols")
    .update(update)
    .eq("id", planId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function removeClientProtocol(planId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("client_protocols")
    .delete()
    .eq("id", planId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function recordProfileSnapshot(input: {
  clientId: string;
  axes: ProfileAxes;
  dominante?: string | null;
  note?: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase.from("client_profile_snapshots").insert({
    therapist_id: auth.user.id,
    client_id: input.clientId,
    axes: input.axes,
    dominante: input.dominante ?? null,
    note: input.note ?? null,
  });

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function recordAppointmentMood(
  appointmentId: string,
  patch: { moodBefore?: number | null; moodAfter?: number | null; moodNote?: string | null },
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const update: Record<string, unknown> = {};
  if (patch.moodBefore !== undefined) update.mood_before = patch.moodBefore;
  if (patch.moodAfter !== undefined) update.mood_after = patch.moodAfter;
  if (patch.moodNote !== undefined) update.mood_note = patch.moodNote;

  const { error } = await supabase
    .from("appointments")
    .update(update)
    .eq("id", appointmentId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function addClientTask(input: {
  clientId: string;
  title: string;
  description?: string | null;
  dueDate?: string | null;
  appointmentId?: string | null;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };
  if (!input.title.trim()) return { ok: false, error: "Titre requis" };
  if (input.title.length > MAX_TASK_TITLE) return { ok: false, error: "Titre trop long" };
  if (input.description && input.description.length > MAX_TASK_DESC)
    return { ok: false, error: "Description trop longue" };

  const { data, error } = await supabase
    .from("client_tasks")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      title: input.title.trim(),
      description: input.description ?? null,
      due_date: input.dueDate ?? null,
      appointment_id: input.appointmentId ?? null,
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function updateClientTask(
  taskId: string,
  patch: {
    title?: string;
    description?: string | null;
    dueDate?: string | null;
    clientFeedback?: string | null;
  },
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  if (patch.title !== undefined && patch.title.length > MAX_TASK_TITLE)
    return { ok: false, error: "Titre trop long" };
  if (patch.description && patch.description.length > MAX_TASK_DESC)
    return { ok: false, error: "Description trop longue" };
  if (patch.clientFeedback && patch.clientFeedback.length > MAX_TASK_FEEDBACK)
    return { ok: false, error: "Retour client trop long" };

  const update: Record<string, unknown> = {};
  if (patch.title !== undefined) update.title = patch.title;
  if (patch.description !== undefined) update.description = patch.description;
  if (patch.dueDate !== undefined) update.due_date = patch.dueDate;
  if (patch.clientFeedback !== undefined) update.client_feedback = patch.clientFeedback;

  const { error } = await supabase
    .from("client_tasks")
    .update(update)
    .eq("id", taskId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function toggleClientTaskDone(
  taskId: string,
  done: boolean,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("client_tasks")
    .update({ completed_at: done ? new Date().toISOString() : null })
    .eq("id", taskId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function deleteClientTask(taskId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("client_tasks")
    .delete()
    .eq("id", taskId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function addInvoice(input: {
  clientId: string;
  appointmentId?: string | null;
  numero: string;
  montant: number;
  modeFinancement?: ModeFinancement | null;
  dateEmission?: string | null;
  dateEcheance?: string | null;
  notes?: string | null;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };
  if (!input.numero.trim()) return { ok: false, error: "Numéro requis" };
  if (input.numero.trim().length > MAX_INVOICE_NUMERO)
    return { ok: false, error: "Numéro de facture trop long" };
  if (!validMoney(input.montant, MAX_INVOICE_AMOUNT))
    return { ok: false, error: "Montant invalide" };
  if (input.notes && input.notes.length > MAX_INVOICE_NOTES)
    return { ok: false, error: "Notes trop longues" };

  const { data, error } = await supabase
    .from("invoices")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      appointment_id: input.appointmentId ?? null,
      numero: input.numero.trim(),
      montant: input.montant,
      mode_financement: input.modeFinancement ?? null,
      date_emission: input.dateEmission ?? new Date().toISOString().slice(0, 10),
      date_echeance: input.dateEcheance ?? null,
      notes: input.notes ?? null,
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function updateInvoice(
  invoiceId: string,
  patch: {
    numero?: string;
    montant?: number;
    montantRegle?: number;
    modeFinancement?: ModeFinancement | null;
    statut?: InvoiceStatut;
    dateEmission?: string;
    dateEcheance?: string | null;
    dateReglement?: string | null;
    notes?: string | null;
  },
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };
  if (patch.numero !== undefined && patch.numero.trim().length > MAX_INVOICE_NUMERO)
    return { ok: false, error: "Numéro de facture trop long" };
  if (patch.montant !== undefined && !validMoney(patch.montant, MAX_INVOICE_AMOUNT))
    return { ok: false, error: "Montant invalide" };
  if (patch.montantRegle !== undefined && !validMoney(patch.montantRegle, MAX_INVOICE_AMOUNT))
    return { ok: false, error: "Montant réglé invalide" };
  if (patch.notes && patch.notes.length > MAX_INVOICE_NOTES)
    return { ok: false, error: "Notes trop longues" };

  const update: Record<string, unknown> = {};
  if (patch.numero !== undefined) update.numero = patch.numero;
  if (patch.montant !== undefined) update.montant = patch.montant;
  if (patch.montantRegle !== undefined) update.montant_regle = patch.montantRegle;
  if (patch.modeFinancement !== undefined) update.mode_financement = patch.modeFinancement;
  if (patch.statut !== undefined) {
    update.statut = patch.statut;
    if (patch.statut === "reglee" && patch.dateReglement === undefined) {
      update.date_reglement = new Date().toISOString();
    }
  }
  if (patch.dateEmission !== undefined) update.date_emission = patch.dateEmission;
  if (patch.dateEcheance !== undefined) update.date_echeance = patch.dateEcheance;
  if (patch.dateReglement !== undefined) update.date_reglement = patch.dateReglement;
  if (patch.notes !== undefined) update.notes = patch.notes;

  const { error } = await supabase
    .from("invoices")
    .update(update)
    .eq("id", invoiceId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function deleteInvoice(invoiceId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("invoices")
    .delete()
    .eq("id", invoiceId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function recordClientDocument(input: {
  clientId: string;
  storagePath: string;
  filename: string;
  mimeType?: string | null;
  sizeBytes?: number | null;
  category?: DocumentCategory | null;
  description?: string | null;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  if (!input.filename.trim()) return { ok: false, error: "Nom de fichier requis" };
  if (input.filename.length > MAX_DOC_FILENAME)
    return { ok: false, error: "Nom de fichier trop long" };
  if (input.sizeBytes != null && input.sizeBytes > MAX_DOC_SIZE_BYTES)
    return { ok: false, error: "Fichier trop volumineux (max 50 Mo)" };
  if (input.mimeType && !ALLOWED_DOC_MIME.has(input.mimeType))
    return { ok: false, error: "Type de fichier non autorisé" };
  if (input.description && input.description.length > MAX_DOC_DESCRIPTION)
    return { ok: false, error: "Description trop longue" };
  // Path must live under the caller's auth.uid() folder (defense in depth — Storage RLS already enforces).
  if (!input.storagePath.startsWith(`${auth.user.id}/`))
    return { ok: false, error: "Chemin de stockage invalide" };

  const { data, error } = await supabase
    .from("client_documents")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      storage_path: input.storagePath,
      filename: input.filename,
      mime_type: input.mimeType ?? null,
      size_bytes: input.sizeBytes ?? null,
      category: input.category ?? null,
      description: input.description ?? null,
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

export async function deleteClientDocument(documentId: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Fetch to get storage_path
  const { data: doc } = await supabase
    .from("client_documents")
    .select("storage_path")
    .eq("id", documentId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!doc) return { ok: false, error: "Document introuvable" };

  // Remove from storage first
  await supabase.storage.from("documents").remove([doc.storage_path]);

  // Then delete metadata
  const { error } = await supabase
    .from("client_documents")
    .delete()
    .eq("id", documentId)
    .eq("therapist_id", auth.user.id);

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true };
}

export async function recordClientConsent(input: {
  clientId: string;
  version?: string;
  signatureMethod: SignatureMethod;
  notes?: string | null;
}): Promise<{ ok: boolean; error?: string; id?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data, error } = await supabase
    .from("client_consents")
    .insert({
      therapist_id: auth.user.id,
      client_id: input.clientId,
      version: input.version ?? "v1",
      signature_method: input.signatureMethod,
      notes: input.notes ?? null,
    })
    .select("id")
    .single();

  if (error) return { ok: false, error: error.message };
  revalidatePath("/clients");
  return { ok: true, id: data.id };
}

// ============================================================
// RGPD art. 17 — Droit à l'effacement
// ============================================================

function computeInitials(fullName: string): string {
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return "?";
  if (parts.length === 1) return parts[0]!.charAt(0).toUpperCase() + ".";
  return (
    parts[0]!.charAt(0).toUpperCase() +
    "." +
    parts[parts.length - 1]!.charAt(0).toUpperCase() +
    "."
  );
}

export async function eraseClient(input: {
  clientId: string;
  confirmName: string;
  reason?: string | null;
}): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data: client, error: fetchError } = await supabase
    .from("clients")
    .select("id, full_name")
    .eq("id", input.clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (fetchError) return { ok: false, error: fetchError.message };
  if (!client) return { ok: false, error: "Client introuvable" };

  if (input.confirmName.trim().toLowerCase() !== client.full_name.trim().toLowerCase()) {
    return { ok: false, error: "Le nom saisi ne correspond pas. Effacement annulé." };
  }

  const folder = `${auth.user.id}/${input.clientId}`;
  const { data: files } = await supabase.storage.from("documents").list(folder, { limit: 1000 });
  if (files && files.length > 0) {
    const paths = files.map((f) => `${folder}/${f.name}`);
    await supabase.storage.from("documents").remove(paths);
  }

  const { error: delError } = await supabase
    .from("clients")
    .delete()
    .eq("id", input.clientId)
    .eq("therapist_id", auth.user.id);

  if (delError) return { ok: false, error: delError.message };

  const initials = computeInitials(client.full_name);
  await supabase.from("client_erasures").insert({
    therapist_id: auth.user.id,
    client_id_erased: input.clientId,
    client_initials: initials,
    reason: input.reason ?? null,
  });

  revalidatePath("/clients");
  revalidatePath("/agenda");
  revalidatePath("/messagerie");
  return { ok: true };
}

// ============================================================
// RGPD art. 20 — Portabilité (gated by KIIKA_ENABLE_DATA_EXPORT)
// ============================================================

interface ClientExport {
  exportedAt: string;
  exportFormat: "kiika.client.v1";
  client: Record<string, unknown> | null;
  notes: unknown[];
  plans: unknown[];
  snapshots: unknown[];
  tasks: unknown[];
  appointments: unknown[];
  invoices: unknown[];
  documents: unknown[];
  consents: unknown[];
  messages: unknown[];
}

export async function exportClientData(
  clientId: string,
): Promise<{ ok: boolean; data?: ClientExport; error?: string }> {
  if (process.env.KIIKA_ENABLE_DATA_EXPORT !== "true") {
    return {
      ok: false,
      error:
        "Export désactivé. Pour activer la portabilité des données, contactez l'éditeur (INTIO).",
    };
  }

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data: client } = await supabase
    .from("clients")
    .select("*")
    .eq("id", clientId)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!client) return { ok: false, error: "Client introuvable" };

  // Defence-in-depth: each sub-query is filtered by therapist_id in addition to
  // the RLS policies, so a misconfigured RLS policy on any one table cannot leak
  // another therapist's client data.
  const tid = auth.user.id;
  const [notes, plans, snapshots, tasks, appointments, invoices, documents, consents, messages] =
    await Promise.all([
      supabase.from("client_notes").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("client_protocols").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("client_profile_snapshots").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("client_tasks").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("appointments").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("invoices").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("client_documents").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("client_consents").select("*").eq("client_id", clientId).eq("therapist_id", tid),
      supabase.from("messages").select("*").eq("client_id", clientId).eq("therapist_id", tid),
    ]);

  return {
    ok: true,
    data: {
      exportedAt: new Date().toISOString(),
      exportFormat: "kiika.client.v1",
      client,
      notes: notes.data ?? [],
      plans: plans.data ?? [],
      snapshots: snapshots.data ?? [],
      tasks: tasks.data ?? [],
      appointments: appointments.data ?? [],
      invoices: invoices.data ?? [],
      documents: documents.data ?? [],
      consents: consents.data ?? [],
      messages: messages.data ?? [],
    },
  };
}

// ============================================================
// KIIKA Assistant — matching protocoles
// ============================================================

export interface KiikaAnalysisResult {
  ok: boolean;
  error?: string;
  clientName?: string;
  clientInitials?: string;
  ranked?: ScoredProtocol[];
  generatedAt?: string;
}

export async function analyzeClientWithKiika(
  clientId: string,
): Promise<KiikaAnalysisResult> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // RLS scopes both queries to the caller — no manual therapist_id filter needed.
  const [clients, protocols] = await Promise.all([getClientsRich(), getProtocols()]);
  const client = clients.find((c) => c.id === clientId);
  if (!client) return { ok: false, error: "Client introuvable" };

  const ranked = rankProtocolsForClient(client, protocols, { topN: 5 });

  return {
    ok: true,
    clientName: client.name,
    clientInitials: client.initials,
    ranked,
    generatedAt: new Date().toISOString(),
  };
}

export async function deepAnalyzeClientWithLLM(
  clientId: string,
): Promise<{ ok: boolean; error?: string; analysis?: LLMDeepAnalysis }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const [clients, protocols] = await Promise.all([getClientsRich(), getProtocols()]);
  const client = clients.find((c) => c.id === clientId);
  if (!client) return { ok: false, error: "Client introuvable" };

  const ranked = rankProtocolsForClient(client, protocols, { topN: 5 });
  const analysis = await deepAnalyzeWithLLM(client, ranked);

  return { ok: analysis.ok, error: analysis.error, analysis };
}

