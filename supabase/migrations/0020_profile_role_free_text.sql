-- 0020 — Free-text role/title on profiles
-- The original CHECK constraint on profiles.role only allowed
-- 'therapist' | 'admin', which blocked therapists from setting a custom
-- display title (e.g. "Hypnothérapeute", "Praticien PNL"). The role column
-- is now used purely for display + the legacy 'admin' marker, with no
-- system code relying on the CHECK.
--
-- Drop the CHECK so updateProfile() can persist arbitrary titles up to 80 chars.
alter table public.profiles drop constraint if exists profiles_role_check;
