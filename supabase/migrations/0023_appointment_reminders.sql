-- 0023 — Appointment email reminders + public cancel link
--
-- Architecture:
--   pg_cron runs every 5 minutes inside Supabase. Each tick it POSTs a
--   bearer-authenticated request to the Next.js endpoint
--   /api/cron/send-reminders (hosted on Vercel). The endpoint queries the
--   DB with the service role, fetches appointments due for an h-24 or
--   h-1 reminder, generates a single-use cancel token, sends the email
--   via the existing SiteGround SMTP transport, then writes a row in
--   appointment_reminders so the same reminder is never sent twice.
--
--   The endpoint URL and the bearer secret live in cron_config — they
--   are NOT in the migration so the secret never lands in git. After
--   running this migration, see scripts/setup-cron-config.example.sql.

-- Per-client opt-out (the praticien can disable rappels for a noisy /
-- nervous client without touching their global default).
alter table public.clients
  add column if not exists reminders_disabled boolean not null default false;

-- Per-praticien global toggle (default ON; opt-out).
alter table public.profiles
  add column if not exists reminders_enabled boolean not null default true;

-- Track which reminders have been sent. The unique (appointment_id, kind)
-- constraint is what makes the cron idempotent — we can re-fire safely.
create table if not exists public.appointment_reminders (
  id uuid primary key default gen_random_uuid(),
  appointment_id uuid not null references public.appointments(id) on delete cascade,
  kind text not null check (kind in ('h24', 'h1')),
  sent_at timestamptz not null default now(),
  email_to text not null,
  unique (appointment_id, kind)
);
create index if not exists appointment_reminders_appointment_idx
  on public.appointment_reminders(appointment_id);

alter table public.appointment_reminders enable row level security;
drop policy if exists "appointment_reminders_owner_all"
  on public.appointment_reminders;
create policy "appointment_reminders_owner_all" on public.appointment_reminders
  for all
  using (
    exists (
      select 1 from public.appointments a
      where a.id = appointment_id
        and a.therapist_id = (select auth.uid())
    )
  )
  with check (
    exists (
      select 1 from public.appointments a
      where a.id = appointment_id
        and a.therapist_id = (select auth.uid())
    )
  );

-- One-shot cancel tokens that the public cancel page consumes.
-- The token is the URL component sent in the reminder email — we use
-- a base64url 32-byte secret on the application side, but here the
-- column is just text so we do not impose a format on the token.
create table if not exists public.appointment_cancel_tokens (
  token text primary key,
  appointment_id uuid not null references public.appointments(id) on delete cascade,
  created_at timestamptz not null default now(),
  expires_at timestamptz not null,
  used_at timestamptz,
  used_by_email text
);
create index if not exists appointment_cancel_tokens_appointment_idx
  on public.appointment_cancel_tokens(appointment_id);

alter table public.appointment_cancel_tokens enable row level security;
drop policy if exists "appointment_cancel_tokens_owner_all"
  on public.appointment_cancel_tokens;
create policy "appointment_cancel_tokens_owner_all" on public.appointment_cancel_tokens
  for all
  using (
    exists (
      select 1 from public.appointments a
      where a.id = appointment_id
        and a.therapist_id = (select auth.uid())
    )
  )
  with check (
    exists (
      select 1 from public.appointments a
      where a.id = appointment_id
        and a.therapist_id = (select auth.uid())
    )
  );

-- Cron config: URL of the reminder endpoint + bearer secret.
-- This table is read only by pg_cron's stored job; never exposed to
-- the API. Keep RLS off — it's a private operational table.
create table if not exists public.cron_config (
  key text primary key,
  value text not null
);

-- Extensions provided by Supabase. Both already enabled by default in
-- recent projects but we guard with `if not exists` for portability.
create extension if not exists pg_cron;
create extension if not exists pg_net;

-- Refresh the schedule if this migration is re-run.
do $$
begin
  if exists (select 1 from cron.job where jobname = 'kiika_send_reminders') then
    perform cron.unschedule('kiika_send_reminders');
  end if;
end $$;

-- Every 5 minutes: POST the reminder endpoint. The job is a no-op when
-- cron_config is missing (e.g. right after migration before secrets are
-- inserted) — the WHERE clause filters out the call entirely.
select cron.schedule(
  'kiika_send_reminders',
  '*/5 * * * *',
  $cron$
  select net.http_post(
    url := (select value from public.cron_config where key = 'reminder_url'),
    headers := jsonb_build_object(
      'Content-Type', 'application/json',
      'Authorization', 'Bearer ' || (select value from public.cron_config where key = 'cron_secret')
    ),
    body := '{}'::jsonb,
    timeout_milliseconds := 30000
  ) as request_id
  where exists (select 1 from public.cron_config where key = 'reminder_url')
    and exists (select 1 from public.cron_config where key = 'cron_secret');
  $cron$
);
