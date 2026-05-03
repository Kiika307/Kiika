"use server";

import { createClient } from "@/lib/supabase/server";

const BUCKET = "documents";

async function assertOwnsStoragePath(
  storagePath: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // Defense in depth: even though Storage RLS already enforces
  // (storage.foldername(name))[1] = auth.uid(), we verify via the
  // metadata table that this exact path is registered to the caller.
  const { data: doc } = await supabase
    .from("client_documents")
    .select("id")
    .eq("storage_path", storagePath)
    .eq("therapist_id", auth.user.id)
    .maybeSingle();

  if (!doc) return { ok: false, error: "Document introuvable" };
  return { ok: true };
}

export async function getDocumentSignedUrl(
  storagePath: string,
  expiresInSeconds = 600,
): Promise<{ ok: boolean; url?: string; error?: string }> {
  const owned = await assertOwnsStoragePath(storagePath);
  if (!owned.ok) return owned;

  const supabase = await createClient();
  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(storagePath, expiresInSeconds);

  if (error || !data) return { ok: false, error: error?.message ?? "Erreur signed URL" };
  return { ok: true, url: data.signedUrl };
}

export async function deleteDocumentObject(storagePath: string): Promise<{ ok: boolean; error?: string }> {
  const owned = await assertOwnsStoragePath(storagePath);
  if (!owned.ok) return owned;

  const supabase = await createClient();
  const { error } = await supabase.storage.from(BUCKET).remove([storagePath]);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
