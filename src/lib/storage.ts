"use server";

import { createClient } from "@/lib/supabase/server";

const BUCKET = "documents";

export async function getDocumentSignedUrl(
  storagePath: string,
  expiresInSeconds = 600,
): Promise<{ ok: boolean; url?: string; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data, error } = await supabase.storage
    .from(BUCKET)
    .createSignedUrl(storagePath, expiresInSeconds);

  if (error || !data) return { ok: false, error: error?.message ?? "Erreur signed URL" };
  return { ok: true, url: data.signedUrl };
}

export async function deleteDocumentObject(storagePath: string): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase.storage.from(BUCKET).remove([storagePath]);
  if (error) return { ok: false, error: error.message };
  return { ok: true };
}
