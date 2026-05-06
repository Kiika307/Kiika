-- 0022 — KIIKA care plans (parcours 10 séances) per client
--
-- Different from client_kiika_analyses (which is the matching/re-ranking
-- output). This table stores a full "conseil KIIKA" run: a session-by-session
-- accompaniment plan suggested by the IA from the client profile, objectives
-- and the protocol library.
--
-- Each row is immutable; older rows form a history the praticien can browse.

create table if not exists public.client_kiika_care_plans (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  generated_at timestamptz not null default now(),

  -- Snapshot of the client's stated direction at the time of the conseil,
  -- so the plan stays interpretable even after the fiche is edited.
  -- Shape: { themes: string[], objectifs: string[], blocages: string[],
  --          dominante: string|null }
  context jsonb not null default '{}'::jsonb,

  -- Initial reading of the profile (markdown, ~200-300 words).
  diagnostic text,

  -- One-line strategic direction for the accompaniment.
  direction text,

  -- The 10-session journey. Each session shape:
  -- { num: 1..10, title: string, objective: string,
  --   protocolIds: number[], homework: string|null,
  --   signals: string[] }
  sessions jsonb not null default '[]'::jsonb,

  -- Indicators the praticien should track to measure evolution.
  metrics jsonb not null default '[]'::jsonb,

  -- Flags that warrant medical / psychological re-orientation.
  red_flags jsonb not null default '[]'::jsonb,

  model text not null default 'claude-sonnet-4-6'
);

create index if not exists client_kiika_care_plans_client_idx
  on public.client_kiika_care_plans(client_id, generated_at desc);

alter table public.client_kiika_care_plans enable row level security;

drop policy if exists "client_kiika_care_plans_owner_all"
  on public.client_kiika_care_plans;
create policy "client_kiika_care_plans_owner_all"
  on public.client_kiika_care_plans
  for all
  using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);
