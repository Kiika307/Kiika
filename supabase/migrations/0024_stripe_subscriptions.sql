-- 0024 — Stripe subscription state on the praticien profile
--
-- Schema is intentionally flat (no separate subscriptions table) because
-- KIIKA is "one therapist = one subscription". If we later support
-- cabinets with multiple therapists on a single billing account this
-- can be split out without breaking the API.
--
-- Trust contract: the source of truth is Stripe; these columns are a
-- cache populated by the Stripe webhook. Never trust them for billing
-- amounts — only for gating UI access.

alter table public.profiles
  add column if not exists stripe_customer_id text,
  add column if not exists stripe_subscription_id text,
  add column if not exists subscription_status text,
  add column if not exists subscription_price_id text,
  add column if not exists current_period_end timestamptz,
  add column if not exists trial_end timestamptz,
  add column if not exists cancel_at_period_end boolean not null default false;

create index if not exists profiles_stripe_customer_idx
  on public.profiles(stripe_customer_id) where stripe_customer_id is not null;
create index if not exists profiles_stripe_subscription_idx
  on public.profiles(stripe_subscription_id) where stripe_subscription_id is not null;
