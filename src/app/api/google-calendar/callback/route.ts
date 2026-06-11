import { NextResponse, type NextRequest } from "next/server";
import crypto from "node:crypto";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { exchangeCodeForTokens } from "@/lib/google-calendar";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

function timingSafeEqualString(a: string, b: string): boolean {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  if (A.length !== B.length) return false;
  return crypto.timingSafeEqual(A, B);
}

function verifyState(state: string): string | null {
  const stateSecret = process.env.CRON_SECRET;
  if (!stateSecret) return null;
  const parts = state.split(".");
  if (parts.length !== 3) return null;
  const [userId, nonce, sig] = parts;
  const expected = crypto
    .createHmac("sha256", stateSecret)
    .update(`${userId}.${nonce}`)
    .digest("base64url");
  if (!timingSafeEqualString(sig, expected)) return null;
  if (!/^[0-9a-f-]{36}$/i.test(userId)) return null;
  return userId;
}

export async function GET(request: NextRequest) {
  const url = new URL(request.url);
  const code = url.searchParams.get("code");
  const state = url.searchParams.get("state");
  const error = url.searchParams.get("error");

  const settingsUrl = new URL("/settings/calendar", url);

  if (error) {
    settingsUrl.searchParams.set("error", error);
    return NextResponse.redirect(settingsUrl);
  }
  if (!code || !state) {
    settingsUrl.searchParams.set("error", "missing_code");
    return NextResponse.redirect(settingsUrl);
  }
  const userId = verifyState(state);
  if (!userId) {
    settingsUrl.searchParams.set("error", "invalid_state");
    return NextResponse.redirect(settingsUrl);
  }

  // Identique au connect : redirect_uri figé via env var, jamais dérivé d'un
  // header client (sinon exfiltration possible du code OAuth).
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL ?? "https://kiika.intio.fr";
  const redirectUri = `${baseUrl}/api/google-calendar/callback`;

  const tokens = await exchangeCodeForTokens({ code, redirectUri });
  if (!tokens) {
    settingsUrl.searchParams.set("error", "exchange_failed");
    return NextResponse.redirect(settingsUrl);
  }

  const supaUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supaUrl || !serviceKey) {
    settingsUrl.searchParams.set("error", "server_misconfigured");
    return NextResponse.redirect(settingsUrl);
  }
  const supabase = createServiceClient(supaUrl, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { error: dbError } = await supabase
    .from("profiles")
    .update({
      google_calendar_refresh_token: tokens.refreshToken,
      google_calendar_access_token: tokens.accessToken,
      google_calendar_expiry: tokens.expiry.toISOString(),
      google_calendar_email: tokens.email,
      google_calendar_sync_enabled: true,
      updated_at: new Date().toISOString(),
    })
    .eq("id", userId);
  if (dbError) {
    settingsUrl.searchParams.set("error", "db_failed");
    return NextResponse.redirect(settingsUrl);
  }

  settingsUrl.searchParams.set("status", "connected");
  return NextResponse.redirect(settingsUrl);
}
