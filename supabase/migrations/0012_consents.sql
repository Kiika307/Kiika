-- Phase 5C: Consentement RGPD
-- Table immuable (pas d'UPDATE/DELETE, valeur juridique d'audit)
create table if not exists public.client_consents (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  version text not null default 'v1',
  signed_at timestamptz not null default now(),
  signature_method text not null check (signature_method in ('electronique', 'papier', 'verbal')),
  notes text,
  metadata jsonb,
  created_at timestamptz not null default now()
);

create index if not exists client_consents_client_idx on public.client_consents(client_id, signed_at desc);

alter table public.client_consents enable row level security;

drop policy if exists "client_consents_owner_select" on public.client_consents;
create policy "client_consents_owner_select" on public.client_consents
  for select using (therapist_id = (select auth.uid()));

drop policy if exists "client_consents_owner_insert" on public.client_consents;
create policy "client_consents_owner_insert" on public.client_consents
  for insert with check (therapist_id = (select auth.uid()));

-- Pas de policy UPDATE ni DELETE → consentement immuable une fois enregistré
