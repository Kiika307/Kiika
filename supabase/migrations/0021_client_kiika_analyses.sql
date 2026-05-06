-- 0021 — KIIKA analyses persisted per client
--
-- Each LLM-driven analysis run is saved as an immutable record on the client
-- file. The most recent row drives the "Direction d'accompagnement KIIKA"
-- panel; older rows form a history the praticien can scroll through.

create table if not exists public.client_kiika_analyses (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  generated_at timestamptz not null default now(),

  -- Snapshot of the client's stated direction at analysis time, so the
  -- recommendation stays interpretable even if the praticien edits the
  -- fiche later. Shape: { themes: string[], objectifs: string[],
  -- blocages: string[], dominante: string|null }
  objectives jsonb not null default '{}'::jsonb,

  -- The LLM's curated top, validated server-side. Shape:
  -- [{ protocolId: int, rank: int, reasoning: string }]
  recommended jsonb not null default '[]'::jsonb,

  insight text,
  alternative_angles jsonb not null default '[]'::jsonb,
  caution_points jsonb not null default '[]'::jsonb,

  -- How many candidates the LLM saw (for transparency / debugging).
  candidates_count int not null default 0,
  model text not null default 'claude-sonnet-4-6'
);

create index if not exists client_kiika_analyses_client_idx
  on public.client_kiika_analyses(client_id, generated_at desc);

alter table public.client_kiika_analyses enable row level security;

drop policy if exists "client_kiika_analyses_owner_all"
  on public.client_kiika_analyses;
create policy "client_kiika_analyses_owner_all" on public.client_kiika_analyses
  for all
  using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);
