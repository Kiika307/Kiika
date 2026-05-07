-- 0026 — Web Push subscriptions per praticien
--
-- Each browser/device that subscribes to push gets one row. The
-- `endpoint` column is the deduplication key (Push API guarantees
-- it is unique per browser install).

create table if not exists public.push_subscriptions (
  id uuid primary key default gen_random_uuid(),
  user_id uuid not null references auth.users(id) on delete cascade,
  endpoint text not null unique,
  p256dh text not null,
  auth text not null,
  user_agent text,
  created_at timestamptz not null default now(),
  last_used_at timestamptz
);

create index if not exists push_subscriptions_user_idx
  on public.push_subscriptions(user_id);

alter table public.push_subscriptions enable row level security;

drop policy if exists "push_subscriptions_owner_all"
  on public.push_subscriptions;
create policy "push_subscriptions_owner_all" on public.push_subscriptions
  for all
  using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));
