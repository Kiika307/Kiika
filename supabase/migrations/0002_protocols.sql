-- INTIO — Protocols catalog (Big Book of NLP)
-- Run after 0001_initial.sql in Supabase SQL editor.

create table if not exists public.protocols (
  id int primary key,
  name text not null,
  category text not null,
  description text not null,
  duration text not null default '1-3 séances',
  level text not null default 'Intermédiaire' check (level in ('Débutant', 'Intermédiaire', 'Avancé')),
  tags text[] not null default '{}',
  color text not null default '#7C5CBF',
  sessions int not null default 1,
  objectives text[] not null default '{}',
  source text not null default 'The Big Book of NLP',
  created_at timestamptz not null default now()
);

alter table public.protocols enable row level security;

-- Catalog is public (any authenticated user can read)
drop policy if exists "protocols_read_all" on public.protocols;
create policy "protocols_read_all" on public.protocols
  for select using (auth.role() = 'authenticated');

-- Link appointments.protocol_id -> protocols.id (best-effort, allowing nulls)
do $$
begin
  if not exists (
    select 1 from information_schema.table_constraints
    where constraint_name = 'appointments_protocol_id_fkey'
  ) then
    alter table public.appointments
      add constraint appointments_protocol_id_fkey
      foreign key (protocol_id) references public.protocols(id) on delete set null;
  end if;
end $$;

create index if not exists protocols_category_idx on public.protocols(category);
