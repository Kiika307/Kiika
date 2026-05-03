-- Phase 4: Tâches/exercices inter-séances
create table if not exists public.client_tasks (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  appointment_id uuid references public.appointments(id) on delete set null,
  title text not null,
  description text,
  due_date date,
  completed_at timestamptz,
  client_feedback text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists client_tasks_client_idx on public.client_tasks(client_id, due_date);

alter table public.client_tasks enable row level security;
drop policy if exists "client_tasks_owner_all" on public.client_tasks;
create policy "client_tasks_owner_all" on public.client_tasks
  for all using (therapist_id = auth.uid())
  with check (therapist_id = auth.uid());

create or replace function public.touch_client_tasks_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists trg_client_tasks_updated_at on public.client_tasks;
create trigger trg_client_tasks_updated_at
  before update on public.client_tasks
  for each row execute function public.touch_client_tasks_updated_at();
