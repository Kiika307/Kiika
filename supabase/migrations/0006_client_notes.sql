-- Phase 2: Client notes (journal libre + comptes-rendus de séance)
create table if not exists public.client_notes (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  appointment_id uuid references public.appointments(id) on delete set null,
  kind text not null check (kind in ('libre', 'compte_rendu')),
  title text,
  body text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_notes_client_idx on public.client_notes(client_id, created_at desc);
create index if not exists client_notes_appointment_idx on public.client_notes(appointment_id);

alter table public.client_notes enable row level security;

drop policy if exists "client_notes_owner_all" on public.client_notes;
create policy "client_notes_owner_all" on public.client_notes
  for all using (therapist_id = auth.uid())
  with check (therapist_id = auth.uid());

create or replace function public.touch_client_notes_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_client_notes_updated_at on public.client_notes;
create trigger trg_client_notes_updated_at
  before update on public.client_notes
  for each row execute function public.touch_client_notes_updated_at();
