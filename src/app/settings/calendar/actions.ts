"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import { revokeRefreshToken } from "@/lib/google-calendar";

export async function disconnectGoogleCalendarAction(): Promise<{
  ok: boolean;
  error?: string;
}> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { data } = await supabase
    .from("profiles")
    .select("google_calendar_refresh_token")
    .eq("id", auth.user.id)
    .maybeSingle();

  if (data?.google_calendar_refresh_token) {
    // Best-effort revoke at Google's side. We always wipe the column
    // regardless of whether the revoke succeeded.
    await revokeRefreshToken(data.google_calendar_refresh_token);
  }

  const { error } = await supabase
    .from("profiles")
    .update({
      google_calendar_refresh_token: null,
      google_calendar_access_token: null,
      google_calendar_expiry: null,
      google_calendar_email: null,
      google_calendar_sync_enabled: false,
    })
    .eq("id", auth.user.id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/settings/calendar");
  return { ok: true };
}

export async function setGoogleCalendarSyncEnabledAction(
  enabled: boolean,
): Promise<{ ok: boolean; error?: string }> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  const { error } = await supabase
    .from("profiles")
    .update({ google_calendar_sync_enabled: enabled })
    .eq("id", auth.user.id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/settings/calendar");
  return { ok: true };
}

/**
 * Rotate the iCal subscription token so existing subscribers stop
 * receiving updates. Use when a leaked URL needs to be revoked.
 * Returns the new token so the UI can show it immediately.
 */
export async function rotateIcalTokenAction(): Promise<{
  ok: boolean;
  error?: string;
  token?: string;
}> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return { ok: false, error: "Non authentifié" };

  // We mint a fresh UUID v4 client-side; the column has a uniqueness
  // constraint so a collision would surface as an error (negligible
  // probability with 122 random bits).
  const newToken = crypto.randomUUID();
  const { error } = await supabase
    .from("profiles")
    .update({ ical_token: newToken })
    .eq("id", auth.user.id);
  if (error) return { ok: false, error: error.message };

  revalidatePath("/settings/calendar");
  return { ok: true, token: newToken };
}
