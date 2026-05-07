-- 0027 — Calendar sync (iCal subscription + Google Calendar bidirectional)
--
-- Two distinct surfaces:
--
-- 1. iCal feed: public read-only URL (kiika.intio.fr/ical/{ical_token}.ics)
--    that Apple Calendar / Outlook / any RFC 5545-compliant client can
--    subscribe to. Token is rotatable so a leaked URL can be revoked.
--
-- 2. Google Calendar OAuth: per-praticien refresh_token / access_token
--    cache populated by /api/google-calendar/callback. We push every
--    KIIKA appointment as a Google event (event_id mirrored back onto
--    the appointments row), and read FreeBusy on the booking page to
--    block out-of-app personal events from the slot grid.

alter table public.profiles
  add column if not exists ical_token uuid not null default gen_random_uuid(),
  add column if not exists google_calendar_refresh_token text,
  add column if not exists google_calendar_access_token text,
  add column if not exists google_calendar_expiry timestamptz,
  add column if not exists google_calendar_id text default 'primary',
  add column if not exists google_calendar_sync_enabled boolean not null default false,
  add column if not exists google_calendar_email text;

-- iCal feed lookups happen via the public route (no auth context),
-- so we index the token column to keep the lookup O(1).
create unique index if not exists profiles_ical_token_idx
  on public.profiles(ical_token);

-- Track which Google Calendar event mirrors each KIIKA appointment so
-- updates / cancels can target the right Google event id.
alter table public.appointments
  add column if not exists google_event_id text;

create index if not exists appointments_google_event_idx
  on public.appointments(google_event_id) where google_event_id is not null;
