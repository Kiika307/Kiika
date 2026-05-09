import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";

export async function GET(_req: Request, ctx: { params: Promise<{ id: string }> }) {
  const { id } = await ctx.params;
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return NextResponse.json({ error: "auth" }, { status: 401 });

  // RLS s'occupe du contrôle d'accès via client_documents_client_read
  const { data: doc, error } = await supabase
    .from("client_documents")
    .select("storage_path")
    .eq("id", id)
    .maybeSingle();

  if (error || !doc) return NextResponse.json({ error: "not_found" }, { status: 404 });

  const { data: signed } = await supabase.storage
    .from("documents")
    .createSignedUrl(doc.storage_path, 600);

  if (!signed?.signedUrl) {
    return NextResponse.json({ error: "signed_url_failed" }, { status: 500 });
  }
  return NextResponse.redirect(signed.signedUrl, { status: 303 });
}
