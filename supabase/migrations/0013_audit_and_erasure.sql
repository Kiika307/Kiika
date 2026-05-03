-- 0013_audit_and_erasure.sql
-- Audit log (qui a fait quoi quand) + journal des effacements clients (RGPD art. 17)
-- Idempotent: peut être rejoué.

-- ============================================================
-- 1. AUDIT LOG
-- ============================================================

create table if not exists public.audit_log (
  id uuid primary key default gen_random_uuid(),
  actor_id uuid references auth.users(id) on delete set null,
  action text not null check (action in ('insert', 'update', 'delete')),
  table_name text not null,
  row_id text,
  before jsonb,
  after jsonb,
  created_at timestamptz not null default now()
);

create index if not exists audit_log_actor_id_idx on public.audit_log(actor_id);
create index if not exists audit_log_created_at_idx on public.audit_log(created_at desc);
create index if not exists audit_log_table_name_idx on public.audit_log(table_name);

alter table public.audit_log enable row level security;

-- Le thérapeute peut lire UNIQUEMENT son propre journal d'audit.
drop policy if exists audit_log_owner_select on public.audit_log;
create policy audit_log_owner_select on public.audit_log
  for select to authenticated
  using ((select auth.uid()) = actor_id);

-- Personne ne peut insérer / modifier / supprimer manuellement.
-- Seul le trigger SECURITY DEFINER fn_audit_trigger() écrit.
revoke insert, update, delete on public.audit_log from authenticated, anon;

-- ============================================================
-- 2. AUDIT TRIGGER FUNCTION
-- ============================================================

create or replace function public.fn_audit_trigger()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
declare
  v_actor uuid;
  v_row_id text;
  v_before jsonb;
  v_after jsonb;
begin
  v_actor := auth.uid();

  if (tg_op = 'INSERT') then
    v_row_id := coalesce((new).id::text, null);
    v_after := to_jsonb(new);
    v_before := null;
  elsif (tg_op = 'UPDATE') then
    v_row_id := coalesce((new).id::text, null);
    v_before := to_jsonb(old);
    v_after := to_jsonb(new);
  elsif (tg_op = 'DELETE') then
    v_row_id := coalesce((old).id::text, null);
    v_before := to_jsonb(old);
    v_after := null;
  end if;

  insert into public.audit_log (actor_id, action, table_name, row_id, before, after)
  values (v_actor, lower(tg_op), tg_table_name, v_row_id, v_before, v_after);

  if (tg_op = 'DELETE') then
    return old;
  else
    return new;
  end if;
end;
$$;

revoke all on function public.fn_audit_trigger() from public, authenticated, anon;

-- ============================================================
-- 3. APPLY TRIGGER ON SENSITIVE TABLES
-- ============================================================

-- helper: drop+create idempotent
do $$
declare
  t text;
  tables text[] := array[
    'clients',
    'client_notes',
    'client_documents',
    'sessions',
    'client_protocols',
    'client_consents',
    'client_profile_snapshots',
    'client_tasks',
    'invoices'
  ];
begin
  foreach t in array tables loop
    execute format('drop trigger if exists audit_%I on public.%I', t, t);
    execute format(
      'create trigger audit_%I after insert or update or delete on public.%I for each row execute function public.fn_audit_trigger()',
      t, t
    );
  end loop;
end;
$$;

-- ============================================================
-- 4. CLIENT ERASURES (proof of art. 17 RGPD execution)
-- ============================================================

create table if not exists public.client_erasures (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id_erased text not null,             -- frozen UUID as text since the row is gone
  client_initials text,                       -- e.g. "C.D." for accountability without re-identification
  reason text,
  erased_at timestamptz not null default now()
);

create index if not exists client_erasures_therapist_idx on public.client_erasures(therapist_id);
create index if not exists client_erasures_erased_at_idx on public.client_erasures(erased_at desc);

alter table public.client_erasures enable row level security;

drop policy if exists client_erasures_owner_select on public.client_erasures;
create policy client_erasures_owner_select on public.client_erasures
  for select to authenticated
  using ((select auth.uid()) = therapist_id);

drop policy if exists client_erasures_owner_insert on public.client_erasures;
create policy client_erasures_owner_insert on public.client_erasures
  for insert to authenticated
  with check ((select auth.uid()) = therapist_id);

-- No update / delete — erasure record is immutable proof.
revoke update, delete on public.client_erasures from authenticated, anon;

comment on table public.audit_log is
  'Journal d''audit horodaté de toutes les écritures sur les tables sensibles. RLS: le thérapeute lit uniquement son propre journal.';

comment on table public.client_erasures is
  'Journal immuable des effacements de clients (RGPD art. 17). Garde une trace de l''exécution sans réidentifier le client effacé.';
