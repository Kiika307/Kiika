import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return NextResponse.json({ ok: false, error: "Non authentifié" }, { status: 401 });
  }

  let body: { endpoint?: string };
  try {
    body = (await request.json()) as { endpoint?: string };
  } catch {
    return NextResponse.json({ ok: false, error: "Bad payload" }, { status: 400 });
  }
  if (!body.endpoint) {
    return NextResponse.json({ ok: false, error: "Bad payload" }, { status: 400 });
  }

  // Only delete the row if it belongs to the caller — RLS enforces this
  // anyway but the explicit eq() makes intent clear.
  const { error } = await supabase
    .from("push_subscriptions")
    .delete()
    .eq("endpoint", body.endpoint)
    .eq("user_id", auth.user.id);
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
