-- 0035 — Météo émotionnelle (self-report client) + Journal de bord client
--
-- Inspiré d'EPhi-Bilan : engagement du client entre les séances. Le praticien
-- garde déjà mood_before/after sur les RDV (saisie praticien) ; ici c'est le
-- CLIENT qui s'exprime depuis son portail.

-- ============================================================
-- 1. Météo émotionnelle — check-in ponctuel par le client (échelle 1-5)
-- ============================================================
create table if not exists public.client_mood_checkins (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  therapist_id uuid not null references auth.users(id) on delete cascade,
  score int not null check (score between 1 and 5),
  note text check (note is null or char_length(note) <= 2000),
  created_at timestamptz not null default now()
);

create index if not exists client_mood_checkins_client_idx
  on public.client_mood_checkins(client_id, created_at desc);

alter table public.client_mood_checkins enable row level security;

-- Praticien : lecture de ses fiches
drop policy if exists "mood_therapist_read" on public.client_mood_checkins;
create policy "mood_therapist_read" on public.client_mood_checkins
  for select using ((select auth.uid()) = therapist_id);

-- Client : lecture de ses propres check-ins
drop policy if exists "mood_client_read" on public.client_mood_checkins;
create policy "mood_client_read" on public.client_mood_checkins
  for select using (
    exists (select 1 from public.clients c
            where c.id = client_mood_checkins.client_id and c.user_id = (select auth.uid()))
  );

-- Client : insertion (le therapist_id doit correspondre à sa fiche)
drop policy if exists "mood_client_insert" on public.client_mood_checkins;
create policy "mood_client_insert" on public.client_mood_checkins
  for insert with check (
    exists (select 1 from public.clients c
            where c.id = client_mood_checkins.client_id
              and c.user_id = (select auth.uid())
              and c.therapist_id = client_mood_checkins.therapist_id)
  );

-- ============================================================
-- 2. Journal de bord — entrées du client, partageables avec le praticien
-- ============================================================
create table if not exists public.client_journal (
  id uuid primary key default gen_random_uuid(),
  client_id uuid not null references public.clients(id) on delete cascade,
  therapist_id uuid not null references auth.users(id) on delete cascade,
  title text check (title is null or char_length(title) <= 200),
  body text not null check (char_length(body) between 1 and 20000),
  shared boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_journal_client_idx
  on public.client_journal(client_id, created_at desc);

alter table public.client_journal enable row level security;

-- Client : CRUD complet sur ses propres entrées
drop policy if exists "journal_client_all" on public.client_journal;
create policy "journal_client_all" on public.client_journal
  for all using (
    exists (select 1 from public.clients c
            where c.id = client_journal.client_id and c.user_id = (select auth.uid()))
  )
  with check (
    exists (select 1 from public.clients c
            where c.id = client_journal.client_id
              and c.user_id = (select auth.uid())
              and c.therapist_id = client_journal.therapist_id)
  );

-- Praticien : lecture des entrées PARTAGÉES uniquement
drop policy if exists "journal_therapist_read_shared" on public.client_journal;
create policy "journal_therapist_read_shared" on public.client_journal
  for select using (
    (select auth.uid()) = therapist_id and shared = true
  );

create or replace function public.touch_client_journal_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;

revoke execute on function public.touch_client_journal_updated_at() from public, anon, authenticated;

drop trigger if exists trg_client_journal_updated_at on public.client_journal;
create trigger trg_client_journal_updated_at
  before update on public.client_journal
  for each row execute function public.touch_client_journal_updated_at();
