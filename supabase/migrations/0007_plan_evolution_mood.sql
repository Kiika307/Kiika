-- Phase 3: plan de soin, évolution des scores, auto-éval humeur

-- 1. Plan de soin (protocoles assignés à un client)
create table if not exists public.client_protocols (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  protocol_id int not null references public.protocols(id) on delete restrict,
  status text not null default 'planned' check (status in ('planned', 'in_progress', 'done', 'abandoned')),
  sessions_done int not null default 0,
  sessions_total int,
  notes text,
  started_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_protocols_client_idx on public.client_protocols(client_id);

alter table public.client_protocols enable row level security;
drop policy if exists "client_protocols_owner_all" on public.client_protocols;
create policy "client_protocols_owner_all" on public.client_protocols
  for all using (therapist_id = auth.uid())
  with check (therapist_id = auth.uid());

create or replace function public.touch_client_protocols_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_client_protocols_updated_at on public.client_protocols;
create trigger trg_client_protocols_updated_at
  before update on public.client_protocols
  for each row execute function public.touch_client_protocols_updated_at();

-- 2. Snapshots du profil psychométrique (évolution dans le temps)
create table if not exists public.client_profile_snapshots (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  axes jsonb not null,
  dominante text,
  note text,
  taken_at timestamptz not null default now()
);

create index if not exists client_profile_snapshots_client_idx
  on public.client_profile_snapshots(client_id, taken_at);

alter table public.client_profile_snapshots enable row level security;
drop policy if exists "client_profile_snapshots_owner_all" on public.client_profile_snapshots;
create policy "client_profile_snapshots_owner_all" on public.client_profile_snapshots
  for all using (therapist_id = auth.uid())
  with check (therapist_id = auth.uid());

-- 3. Auto-éval humeur sur les séances
alter table public.appointments
  add column if not exists mood_before int check (mood_before between 1 and 10),
  add column if not exists mood_after int check (mood_after between 1 and 10),
  add column if not exists mood_note text;
