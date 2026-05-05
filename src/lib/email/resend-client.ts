import { Resend } from "resend";

/**
 * Lazy-initialized Resend client.
 * Returns null when RESEND_API_KEY is not configured (e.g. local dev without
 * the secret). Callers must handle the null case and fall back to the
 * mailto:/copy flow.
 */
let cached: Resend | null | undefined;

export function getResend(): Resend | null {
  if (cached !== undefined) return cached;
  const key = process.env.RESEND_API_KEY;
  if (!key) {
    cached = null;
    return null;
  }
  cached = new Resend(key);
  return cached;
}

/**
 * Returns the verified "From" address used by KIIKA for transactional mail.
 *
 * Set EMAIL_FROM env var to override (must be on a Resend-verified domain).
 * Default uses Resend's onboarding sender, which only works for the account
 * owner's email — useful for early dev.
 */
export function emailFrom(): string {
  return process.env.EMAIL_FROM ?? "KIIKA <onboarding@resend.dev>";
}
