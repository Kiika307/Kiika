"use server";

import { redirect } from "next/navigation";
import { createClient as createServiceClient } from "@supabase/supabase-js";

function service() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Service role not configured");
  return createServiceClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

/**
 * Confirm a public cancel-link click. Validates the token, marks the
 * appointment cancelled, marks the token used. Idempotent: re-submitting
 * the same token is safe (it just returns the same confirmation screen).
 */
export async function confirmCancelAction(formData: FormData): Promise<void> {
  const token = String(formData.get("token") ?? "").trim();
  if (!token) redirect(`/rdv/_/cancel?error=1`);

  const supabase = service();

  const { data: tokenRow } = await supabase
    .from("appointment_cancel_tokens")
    .select("token, appointment_id, expires_at, used_at")
    .eq("token", token)
    .maybeSingle();

  if (!tokenRow) redirect(`/rdv/${encodeURIComponent(token)}/cancel?error=1`);
  if (new Date(tokenRow!.expires_at).getTime() < Date.now()) {
    redirect(`/rdv/${encodeURIComponent(token)}/cancel`);
  }

  // If already used, treat as success (idempotent).
  if (tokenRow!.used_at) {
    redirect(`/rdv/${encodeURIComponent(token)}/cancel?confirmed=1`);
  }

  // Cancel the appointment + mark the token used in one go. We do not
  // wrap these in a transaction (Supabase JS doesn't expose one) but
  // both are idempotent so re-submission converges.
  const { error: updateErr } = await supabase
    .from("appointments")
    .update({ status: "cancelled" })
    .eq("id", tokenRow!.appointment_id);
  if (updateErr) {
    redirect(`/rdv/${encodeURIComponent(token)}/cancel?error=1`);
  }

  await supabase
    .from("appointment_cancel_tokens")
    .update({ used_at: new Date().toISOString() })
    .eq("token", token);

  redirect(`/rdv/${encodeURIComponent(token)}/cancel?confirmed=1`);
}
