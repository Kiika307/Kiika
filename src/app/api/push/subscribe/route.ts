import { NextResponse, type NextRequest } from "next/server";
import { createClient } from "@/lib/supabase/server";

export const runtime = "nodejs";

interface Body {
  endpoint?: string;
  keys?: { p256dh?: string; auth?: string };
}

export async function POST(request: NextRequest) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return NextResponse.json({ ok: false, error: "Non authentifié" }, { status: 401 });
  }

  let body: Body;
  try {
    body = (await request.json()) as Body;
  } catch {
    return NextResponse.json({ ok: false, error: "Bad payload" }, { status: 400 });
  }

  if (!body.endpoint || !body.keys?.p256dh || !body.keys?.auth) {
    return NextResponse.json({ ok: false, error: "Bad payload" }, { status: 400 });
  }

  const userAgent = request.headers.get("user-agent")?.slice(0, 255) ?? null;

  // Upsert by endpoint — if the same browser re-subscribes, we update
  // the keys and rebind to the current user (handles "user logs out
  // then logs in as someone else on the same device").
  const { error } = await supabase
    .from("push_subscriptions")
    .upsert(
      {
        user_id: auth.user.id,
        endpoint: body.endpoint,
        p256dh: body.keys.p256dh,
        auth: body.keys.auth,
        user_agent: userAgent,
      },
      { onConflict: "endpoint" },
    );
  if (error) {
    return NextResponse.json({ ok: false, error: error.message }, { status: 500 });
  }
  return NextResponse.json({ ok: true });
}
