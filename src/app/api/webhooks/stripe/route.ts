import { NextResponse, type NextRequest } from "next/server";
import {
  createClient as createServiceClient,
  type SupabaseClient,
} from "@supabase/supabase-js";
import { getStripe } from "@/lib/stripe";
import type Stripe from "stripe";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

/**
 * Stripe webhook endpoint.
 *
 * Stripe POSTs lifecycle events here (subscription created/updated/cancelled,
 * invoice paid/failed, …). We verify the signature with STRIPE_WEBHOOK_SECRET
 * and mirror the relevant fields onto profiles. The DB is a cache; Stripe
 * remains the source of truth.
 */
export async function POST(request: NextRequest) {
  const stripe = getStripe();
  if (!stripe) {
    return NextResponse.json(
      { ok: false, error: "Stripe not configured" },
      { status: 500 },
    );
  }
  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) {
    return NextResponse.json(
      { ok: false, error: "Webhook secret missing" },
      { status: 500 },
    );
  }

  const sig = request.headers.get("stripe-signature");
  if (!sig) {
    return NextResponse.json({ ok: false, error: "Missing signature" }, { status: 400 });
  }

  // Stripe needs the raw body for signature verification — we cannot use .json()
  // because it re-serialises and breaks the HMAC.
  const rawBody = await request.text();

  let event: Stripe.Event;
  try {
    event = stripe.webhooks.constructEvent(rawBody, sig, webhookSecret);
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Unknown signature error";
    return NextResponse.json({ ok: false, error: msg }, { status: 400 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return NextResponse.json(
      { ok: false, error: "Service role not configured" },
      { status: 500 },
    );
  }
  const supabase = createServiceClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  try {
    switch (event.type) {
      case "checkout.session.completed": {
        const session = event.data.object as Stripe.Checkout.Session;
        // The subscription ID is set on completion. Fetch the full sub
        // object so we can mirror its trial_end / current_period_end.
        if (session.subscription && typeof session.subscription === "string") {
          const sub = await stripe.subscriptions.retrieve(session.subscription);
          await mirrorSubscription(supabase, sub);
        }
        break;
      }
      case "customer.subscription.created":
      case "customer.subscription.updated":
      case "customer.subscription.trial_will_end":
      case "customer.subscription.deleted": {
        const sub = event.data.object as Stripe.Subscription;
        await mirrorSubscription(supabase, sub);
        break;
      }
      case "invoice.payment_failed": {
        const invoice = event.data.object as Stripe.Invoice;
        const subId = (invoice as unknown as { subscription?: string })
          .subscription;
        if (subId) {
          const sub = await stripe.subscriptions.retrieve(subId);
          await mirrorSubscription(supabase, sub);
        }
        break;
      }
      default:
        // No-op for events we don't care about (price.created, …).
        break;
    }
  } catch (err) {
    console.error("[stripe webhook]", event.type, err);
    return NextResponse.json(
      { ok: false, error: "Handler failed", type: event.type },
      { status: 500 },
    );
  }

  return NextResponse.json({ received: true, type: event.type });
}

// Untyped Supabase client — we don't generate Database types, and the
// strict ones from supabase-js conflict with our hand-shaped patches.
type AnyDb = SupabaseClient<any, any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

async function mirrorSubscription(
  supabase: AnyDb,
  sub: Stripe.Subscription,
): Promise<void> {
  const customerId =
    typeof sub.customer === "string" ? sub.customer : sub.customer.id;
  if (!customerId) return;

  // Stripe v2025-09 returns numeric epochs for current_period_end / trial_end.
  // Convert to ISO so the DB column (timestamptz) gets a valid value.
  const cpeRaw = (sub as unknown as { current_period_end?: number })
    .current_period_end;
  const trialEndRaw = (sub as unknown as { trial_end?: number | null }).trial_end;

  const patch: Record<string, unknown> = {
    stripe_subscription_id: sub.id,
    subscription_status: sub.status,
    subscription_price_id: sub.items?.data?.[0]?.price?.id ?? null,
    cancel_at_period_end: sub.cancel_at_period_end ?? false,
    current_period_end:
      typeof cpeRaw === "number" ? new Date(cpeRaw * 1000).toISOString() : null,
    trial_end:
      typeof trialEndRaw === "number"
        ? new Date(trialEndRaw * 1000).toISOString()
        : null,
    updated_at: new Date().toISOString(),
  };

  await supabase.from("profiles").update(patch).eq("stripe_customer_id", customerId);
}
