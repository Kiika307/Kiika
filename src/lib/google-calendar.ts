/**
 * Google Calendar integration — OAuth + event push + free/busy.
 *
 * Uses raw fetch against Google's REST APIs (no googleapis SDK
 * dependency). Tokens are stored on the praticien's profile row;
 * access tokens are refreshed on demand from the long-lived
 * refresh token Google returns on the first consent.
 *
 * OAuth client setup (Google Cloud Console → Credentials → Web client):
 *   - Authorized redirect URI: https://kiika.intio.fr/api/google-calendar/callback
 *   - Required env vars on Vercel:
 *       GOOGLE_CALENDAR_CLIENT_ID
 *       GOOGLE_CALENDAR_CLIENT_SECRET
 */

import { createClient as createServiceClient } from "@supabase/supabase-js";

const SCOPES = [
  "https://www.googleapis.com/auth/calendar.events",
  "https://www.googleapis.com/auth/calendar.readonly",
  "openid",
  "email",
];

function configured(): { clientId: string; clientSecret: string } | null {
  const clientId = process.env.GOOGLE_CALENDAR_CLIENT_ID;
  const clientSecret = process.env.GOOGLE_CALENDAR_CLIENT_SECRET;
  if (!clientId || !clientSecret) return null;
  return { clientId, clientSecret };
}

export function isGoogleCalendarConfigured(): boolean {
  return configured() !== null;
}

export function buildAuthorizeUrl(opts: {
  redirectUri: string;
  state: string;
}): string | null {
  const c = configured();
  if (!c) return null;
  const params = new URLSearchParams({
    client_id: c.clientId,
    redirect_uri: opts.redirectUri,
    response_type: "code",
    scope: SCOPES.join(" "),
    access_type: "offline",
    // Force the consent screen so we always get a refresh_token, even if
    // the user has already granted these scopes to KIIKA via Sign-In.
    prompt: "consent",
    include_granted_scopes: "true",
    state: opts.state,
  });
  return `https://accounts.google.com/o/oauth2/v2/auth?${params.toString()}`;
}

interface TokenResponse {
  access_token?: string;
  refresh_token?: string;
  expires_in?: number;
  id_token?: string;
  token_type?: string;
  scope?: string;
  error?: string;
  error_description?: string;
}

export async function exchangeCodeForTokens(opts: {
  code: string;
  redirectUri: string;
}): Promise<{
  refreshToken: string;
  accessToken: string;
  expiry: Date;
  email: string | null;
} | null> {
  const c = configured();
  if (!c) return null;
  const body = new URLSearchParams({
    code: opts.code,
    client_id: c.clientId,
    client_secret: c.clientSecret,
    redirect_uri: opts.redirectUri,
    grant_type: "authorization_code",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const json = (await res.json()) as TokenResponse;
  if (!res.ok || !json.access_token || !json.refresh_token) {
    console.error("[google-calendar] token exchange failed", json);
    return null;
  }
  const email = decodeIdTokenEmail(json.id_token);
  const expiry = new Date(Date.now() + (json.expires_in ?? 3500) * 1000);
  return {
    refreshToken: json.refresh_token,
    accessToken: json.access_token,
    expiry,
    email,
  };
}

function decodeIdTokenEmail(idToken: string | undefined): string | null {
  if (!idToken) return null;
  const parts = idToken.split(".");
  if (parts.length !== 3) return null;
  try {
    const payload = JSON.parse(
      Buffer.from(parts[1], "base64url").toString("utf8"),
    ) as { email?: string };
    return typeof payload.email === "string" ? payload.email : null;
  } catch {
    return null;
  }
}

interface ServiceClientLike {
  from: (table: string) => ReturnType<
    ReturnType<typeof createServiceClient>["from"]
  >;
}

function service(): ServiceClientLike | null {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return null;
  return createServiceClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  }) as ServiceClientLike;
}

/**
 * Fetch a usable access token for `userId`. Refreshes if expired.
 * Returns null if the user is not connected or the refresh failed.
 */
export async function getAccessToken(userId: string): Promise<string | null> {
  const c = configured();
  if (!c) return null;
  const supabase = service();
  if (!supabase) return null;

  const { data } = await supabase
    .from("profiles")
    .select(
      "google_calendar_refresh_token, google_calendar_access_token, google_calendar_expiry",
    )
    .eq("id", userId)
    .maybeSingle();
  if (!data?.google_calendar_refresh_token) return null;

  const expiry = data.google_calendar_expiry
    ? new Date(data.google_calendar_expiry)
    : null;
  // 60-second guard band: refresh slightly early to avoid mid-call expiry.
  if (
    data.google_calendar_access_token &&
    expiry &&
    expiry.getTime() > Date.now() + 60_000
  ) {
    return data.google_calendar_access_token;
  }

  // Refresh.
  const body = new URLSearchParams({
    client_id: c.clientId,
    client_secret: c.clientSecret,
    refresh_token: data.google_calendar_refresh_token,
    grant_type: "refresh_token",
  });
  const res = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: body.toString(),
  });
  const json = (await res.json()) as TokenResponse;
  if (!res.ok || !json.access_token) {
    console.error("[google-calendar] refresh failed", json);
    // If the refresh_token itself was revoked (invalid_grant), wipe
    // the stored credentials so the user knows to reconnect.
    if (json.error === "invalid_grant") {
      await supabase
        .from("profiles")
        .update({
          google_calendar_refresh_token: null,
          google_calendar_access_token: null,
          google_calendar_expiry: null,
          google_calendar_sync_enabled: false,
        })
        .eq("id", userId);
    }
    return null;
  }
  const newExpiry = new Date(Date.now() + (json.expires_in ?? 3500) * 1000);
  await supabase
    .from("profiles")
    .update({
      google_calendar_access_token: json.access_token,
      google_calendar_expiry: newExpiry.toISOString(),
    })
    .eq("id", userId);
  return json.access_token;
}

interface CreateEventInput {
  userId: string;
  calendarId?: string;
  summary: string;
  description?: string | null;
  location?: string | null;
  startsAt: Date;
  endsAt: Date;
  attendeeEmail?: string | null;
}

interface GoogleEvent {
  id: string;
}

export async function createGoogleEvent(
  input: CreateEventInput,
): Promise<string | null> {
  const token = await getAccessToken(input.userId);
  if (!token) return null;
  const calendarId = encodeURIComponent(input.calendarId ?? "primary");
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        summary: input.summary,
        description: input.description ?? undefined,
        location: input.location ?? undefined,
        start: { dateTime: input.startsAt.toISOString() },
        end: { dateTime: input.endsAt.toISOString() },
        // We do NOT add the client as an attendee by default — that
        // would send them a Google invite that's redundant with the
        // KIIKA confirmation email and exposes the praticien's
        // calendar metadata.
        guestsCanInviteOthers: false,
        guestsCanModify: false,
        reminders: { useDefault: true },
      }),
    },
  );
  if (!res.ok) {
    const text = await res.text();
    console.error("[google-calendar] create failed", res.status, text);
    return null;
  }
  const event = (await res.json()) as GoogleEvent;
  return event.id ?? null;
}

interface UpdateEventInput extends CreateEventInput {
  eventId: string;
}

export async function updateGoogleEvent(
  input: UpdateEventInput,
): Promise<boolean> {
  const token = await getAccessToken(input.userId);
  if (!token) return false;
  const calendarId = encodeURIComponent(input.calendarId ?? "primary");
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${encodeURIComponent(input.eventId)}`,
    {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        summary: input.summary,
        description: input.description ?? undefined,
        location: input.location ?? undefined,
        start: { dateTime: input.startsAt.toISOString() },
        end: { dateTime: input.endsAt.toISOString() },
      }),
    },
  );
  return res.ok;
}

export async function deleteGoogleEvent(opts: {
  userId: string;
  eventId: string;
  calendarId?: string;
}): Promise<boolean> {
  const token = await getAccessToken(opts.userId);
  if (!token) return false;
  const calendarId = encodeURIComponent(opts.calendarId ?? "primary");
  const res = await fetch(
    `https://www.googleapis.com/calendar/v3/calendars/${calendarId}/events/${encodeURIComponent(opts.eventId)}`,
    {
      method: "DELETE",
      headers: { Authorization: `Bearer ${token}` },
    },
  );
  // 404 = already gone (idempotent), 410 = deleted, both are fine.
  return res.ok || res.status === 404 || res.status === 410;
}

export interface BusyInterval {
  start: Date;
  end: Date;
}

/**
 * Returns the praticien's external busy intervals from Google Calendar
 * across the given window. Used to subtract personal events from the
 * public booking grid so prospects can't book over off-hours.
 */
export async function getGoogleBusy(opts: {
  userId: string;
  calendarId?: string;
  from: Date;
  to: Date;
}): Promise<BusyInterval[]> {
  const token = await getAccessToken(opts.userId);
  if (!token) return [];
  const res = await fetch("https://www.googleapis.com/calendar/v3/freeBusy", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      timeMin: opts.from.toISOString(),
      timeMax: opts.to.toISOString(),
      items: [{ id: opts.calendarId ?? "primary" }],
    }),
  });
  if (!res.ok) {
    console.error("[google-calendar] freeBusy failed", res.status);
    return [];
  }
  const json = (await res.json()) as {
    calendars?: Record<
      string,
      { busy?: Array<{ start: string; end: string }> }
    >;
  };
  const calendarKey = opts.calendarId ?? "primary";
  const busy = json.calendars?.[calendarKey]?.busy ?? [];
  return busy
    .map((b) => ({ start: new Date(b.start), end: new Date(b.end) }))
    .filter((b) => !Number.isNaN(b.start.getTime()) && !Number.isNaN(b.end.getTime()));
}

export async function revokeRefreshToken(refreshToken: string): Promise<void> {
  try {
    await fetch("https://oauth2.googleapis.com/revoke", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams({ token: refreshToken }).toString(),
    });
  } catch (e) {
    // Best-effort — even if the revoke call fails Google will eventually
    // expire the token. We always wipe the column locally either way.
    console.error("[google-calendar] revoke failed", e);
  }
}
