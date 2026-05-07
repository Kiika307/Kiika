import Stripe from "stripe";

/**
 * Lazy-initialised Stripe client. Returns null when STRIPE_SECRET_KEY is
 * missing so dev environments and Storybook don't crash on import.
 */
let cached: Stripe | null | undefined;

export function getStripe(): Stripe | null {
  if (cached !== undefined) return cached;
  const key = process.env.STRIPE_SECRET_KEY;
  if (!key) {
    cached = null;
    return null;
  }
  // Pin the API version so a future Stripe-side bump doesn't change shapes
  // under our feet. Update intentionally when we re-test the integration.
  cached = new Stripe(key, { apiVersion: "2026-04-22.dahlia" });
  return cached;
}

export const STRIPE_PRICE_ID = process.env.STRIPE_PRICE_ID ?? "";
export const STRIPE_TRIAL_DAYS = 14;

/**
 * "Active" for the purpose of UI gating includes the trial period —
 * the user has access to the app while they decide whether to keep it.
 */
const ACTIVE_STATUSES = new Set([
  "trialing",
  "active",
  "past_due", // Stripe still considers this active for ~3-4 retries
]);

export function isSubscriptionActive(status: string | null | undefined): boolean {
  if (!status) return false;
  return ACTIVE_STATUSES.has(status);
}
