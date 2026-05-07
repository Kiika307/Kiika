"use server";

import { redirect } from "next/navigation";
import { headers } from "next/headers";
import { createClient } from "@/lib/supabase/server";
import { getStripe, STRIPE_PRICE_ID, STRIPE_TRIAL_DAYS } from "@/lib/stripe";

async function originFromHeaders(): Promise<string> {
  const h = await headers();
  const proto = h.get("x-forwarded-proto") ?? "https";
  const host = h.get("x-forwarded-host") ?? h.get("host") ?? "kiika.intio.fr";
  return `${proto}://${host}`;
}

/**
 * Create a Stripe Checkout session for the current praticien and
 * redirect the browser to it. The session embeds a 14-day free trial
 * (`trial_period_days`) so the customer is not billed until day 15.
 *
 * If the user already has a stripe_customer_id we reuse it so their
 * payment methods + history stay attached to a single Customer object.
 */
export async function startCheckoutAction(): Promise<void> {
  const stripe = getStripe();
  if (!stripe) redirect("/subscription?error=stripe_not_configured");
  if (!STRIPE_PRICE_ID) redirect("/subscription?error=stripe_price_missing");

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/subscription");

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id, full_name")
    .eq("id", auth.user.id)
    .maybeSingle();

  const origin = await originFromHeaders();

  // Create or reuse the Stripe Customer. Doing this server-side (rather
  // than letting Checkout create one) lets us bind it to the praticien
  // BEFORE checkout completes, so the webhook always finds a profile.
  let customerId = profile?.stripe_customer_id ?? null;
  if (!customerId) {
    const customer = await stripe!.customers.create({
      email: auth.user.email ?? undefined,
      name: profile?.full_name ?? undefined,
      metadata: { supabase_user_id: auth.user.id },
    });
    customerId = customer.id;
    await supabase
      .from("profiles")
      .update({ stripe_customer_id: customerId })
      .eq("id", auth.user.id);
  }

  const session = await stripe!.checkout.sessions.create({
    mode: "subscription",
    customer: customerId,
    line_items: [{ price: STRIPE_PRICE_ID, quantity: 1 }],
    subscription_data: {
      trial_period_days: STRIPE_TRIAL_DAYS,
      metadata: { supabase_user_id: auth.user.id },
    },
    metadata: { supabase_user_id: auth.user.id },
    success_url: `${origin}/subscription?status=success`,
    cancel_url: `${origin}/subscription?status=cancel`,
    allow_promotion_codes: true,
    locale: "fr",
  });

  if (!session.url) redirect("/subscription?error=session");
  redirect(session.url);
}

/**
 * Open the Stripe-hosted Customer Portal so the user can update card,
 * invoice, or cancel without us re-implementing the UI. The portal is
 * the canonical way to manage a Stripe subscription.
 */
export async function openBillingPortalAction(): Promise<void> {
  const stripe = getStripe();
  if (!stripe) redirect("/subscription?error=stripe_not_configured");

  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) redirect("/login?redirect=/subscription");

  const { data: profile } = await supabase
    .from("profiles")
    .select("stripe_customer_id")
    .eq("id", auth.user.id)
    .maybeSingle();

  if (!profile?.stripe_customer_id) {
    redirect("/subscription?error=no_customer");
  }

  const origin = await originFromHeaders();
  const session = await stripe!.billingPortal.sessions.create({
    customer: profile.stripe_customer_id,
    return_url: `${origin}/subscription`,
  });
  redirect(session.url);
}
