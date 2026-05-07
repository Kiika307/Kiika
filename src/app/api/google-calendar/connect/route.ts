import { NextResponse, type NextRequest } from "next/server";
import crypto from "node:crypto";
import { createClient } from "@/lib/supabase/server";
import { buildAuthorizeUrl } from "@/lib/google-calendar";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Kick off the Google OAuth flow for Calendar API access. We sign a
 * short-lived state token with the praticien's user_id so the callback
 * can match the returning Google response back to our user without a
 * server-side session lookup. Token is HMAC'd with CRON_SECRET (already
 * present on the deployment) so an attacker can't forge a state value.
 */
export async function GET(request: NextRequest) {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) {
    return NextResponse.redirect(new URL("/login?redirect=/settings/calendar", request.url));
  }

  const proto = request.headers.get("x-forwarded-proto") ?? "https";
  const host =
    request.headers.get("x-forwarded-host") ??
    request.headers.get("host") ??
    "kiika.intio.fr";
  const redirectUri = `${proto}://${host}/api/google-calendar/callback`;

  const stateSecret = process.env.CRON_SECRET ?? "";
  if (!stateSecret) {
    return NextResponse.redirect(
      new URL("/settings/calendar?error=server_misconfigured", request.url),
    );
  }
  const userId = auth.user.id;
  const nonce = crypto.randomBytes(8).toString("base64url");
  const payload = `${userId}.${nonce}`;
  const sig = crypto
    .createHmac("sha256", stateSecret)
    .update(payload)
    .digest("base64url");
  const state = `${payload}.${sig}`;

  const url = buildAuthorizeUrl({ redirectUri, state });
  if (!url) {
    return NextResponse.redirect(
      new URL("/settings/calendar?error=google_not_configured", request.url),
    );
  }
  return NextResponse.redirect(url);
}
