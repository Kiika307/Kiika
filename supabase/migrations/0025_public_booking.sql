-- 0025 — Public booking page (Calendly-like)
--
-- Each praticien gets a unique slug (e.g. "varinka-robert") and exposes
-- a public page at /rdv/{slug} where prospects can book a session
-- directly without creating an account first. The booking creates a
-- client + an appointment + a "compte_rendu" note containing the
-- anamnesis the prospect filled in.

alter table public.profiles
  add column if not exists booking_slug text,
  add column if not exists booking_enabled boolean not null default false,
  add column if not exists booking_default_duration int not null default 60,
  add column if not exists booking_buffer int not null default 15,
  add column if not exists booking_timezone text not null default 'Europe/Paris',
  add column if not exists booking_intro text,
  add column if not exists booking_advance_days int not null default 30,
  -- Working hours per weekday. Stored as { mon: [{from, to}, …], tue: […], … }.
  -- "from" / "to" are HH:MM strings in the praticien's timezone.
  add column if not exists booking_working_hours jsonb not null default $${
    "mon": [{"from": "09:00", "to": "12:00"}, {"from": "14:00", "to": "18:00"}],
    "tue": [{"from": "09:00", "to": "12:00"}, {"from": "14:00", "to": "18:00"}],
    "wed": [{"from": "09:00", "to": "12:00"}, {"from": "14:00", "to": "18:00"}],
    "thu": [{"from": "09:00", "to": "12:00"}, {"from": "14:00", "to": "18:00"}],
    "fri": [{"from": "09:00", "to": "12:00"}, {"from": "14:00", "to": "18:00"}],
    "sat": [],
    "sun": []
  }$$::jsonb;

-- Slug uniqueness: enforced as a partial unique index so NULL slugs
-- (praticiens who haven't set one yet) are allowed and don't conflict.
create unique index if not exists profiles_booking_slug_idx
  on public.profiles(booking_slug) where booking_slug is not null;

-- Slug format check: lowercase letters, digits, dashes, 3-60 chars.
-- We reject reserved app paths (api, login, …) at the application level.
alter table public.profiles
  drop constraint if exists profiles_booking_slug_format;
alter table public.profiles
  add constraint profiles_booking_slug_format
  check (
    booking_slug is null
    or booking_slug ~ '^[a-z0-9][a-z0-9-]{1,58}[a-z0-9]$'
  );
