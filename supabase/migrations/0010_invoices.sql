-- Phase 5A: Facturation
create table if not exists public.invoices (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  appointment_id uuid references public.appointments(id) on delete set null,
  numero text not null,
  montant numeric(10,2) not null check (montant >= 0),
  montant_regle numeric(10,2) not null default 0 check (montant_regle >= 0),
  mode_financement text check (mode_financement in ('autofinancement', 'cpf', 'mutuelle', 'employeur', 'autre')),
  statut text not null default 'en_attente' check (statut in ('en_attente', 'envoyee', 'reglee', 'relance', 'annulee')),
  date_emission date not null default current_date,
  date_echeance date,
  date_reglement timestamptz,
  notes text,
  pdf_url text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (therapist_id, numero)
);

create index if not exists invoices_client_idx on public.invoices(client_id, date_emission desc);
create index if not exists invoices_statut_idx on public.invoices(therapist_id, statut);

alter table public.invoices enable row level security;
drop policy if exists "invoices_owner_all" on public.invoices;
create policy "invoices_owner_all" on public.invoices
  for all using (therapist_id = (select auth.uid()))
  with check (therapist_id = (select auth.uid()));

create or replace function public.touch_invoices_updated_at()
returns trigger language plpgsql as $$
begin
  new.updated_at := now();
  return new;
end $$;

revoke execute on function public.touch_invoices_updated_at() from public, anon, authenticated;

drop trigger if exists trg_invoices_updated_at on public.invoices;
create trigger trg_invoices_updated_at
  before update on public.invoices
  for each row execute function public.touch_invoices_updated_at();
