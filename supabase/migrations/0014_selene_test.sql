-- 0014_selene_test.sql
-- Test psychométrique Selene (9 dimensions, 117 questions)
-- Créé initialement par Varinka ROBERT pour EPHI-Bilan, intégré à KIIKA.
--
-- Modèle :
--   1. Le thérapeute génère un lien d'invitation pour un client (selene_invitations).
--   2. Le client ouvre le lien public /selene/[token], répond aux questions, soumet.
--   3. Le scoring est calculé côté serveur, stocké dans selene_responses,
--      et les résultats agrégés sont mis à jour sur la ligne clients.

-- ============================================================
-- 1. INVITATIONS (jetons d'accès au test, à durée limitée)
-- ============================================================

create table if not exists public.selene_invitations (
  id uuid primary key default gen_random_uuid(),
  token text not null unique,
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  expires_at timestamptz not null default (now() + interval '30 days'),
  used_at timestamptz,
  created_at timestamptz not null default now()
);

create index if not exists selene_invitations_token_idx on public.selene_invitations(token);
create index if not exists selene_invitations_therapist_idx on public.selene_invitations(therapist_id);
create index if not exists selene_invitations_client_idx on public.selene_invitations(client_id);

alter table public.selene_invitations enable row level security;

-- Le thérapeute lit / écrit ses propres invitations.
drop policy if exists selene_inv_owner_all on public.selene_invitations;
create policy selene_inv_owner_all on public.selene_invitations
  for all to authenticated
  using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- L'accès public au token (par le client non authentifié) passe par une RPC SECURITY DEFINER, pas par RLS.

-- ============================================================
-- 2. RÉPONSES (résultats du test)
-- ============================================================

create table if not exists public.selene_responses (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  invitation_id uuid references public.selene_invitations(id) on delete set null,
  responses jsonb not null,           -- { "SE001": 5, "SE002": 4, ... }
  scores jsonb not null,              -- { "ESSENCE": 73, "ALTRUISME": 62, ... }
  dominante text not null,            -- 'ESSENCE' | 'ALTRUISME' | ...
  top3 text[] not null,
  taken_at timestamptz not null default now()
);

create index if not exists selene_responses_client_idx on public.selene_responses(client_id);
create index if not exists selene_responses_therapist_idx on public.selene_responses(therapist_id);
create index if not exists selene_responses_taken_at_idx on public.selene_responses(taken_at desc);

alter table public.selene_responses enable row level security;

-- Lecture par le thérapeute uniquement.
drop policy if exists selene_resp_owner_select on public.selene_responses;
create policy selene_resp_owner_select on public.selene_responses
  for select to authenticated
  using ((select auth.uid()) = therapist_id);

-- L'écriture passe par RPC SECURITY DEFINER (le client final n'a pas de session auth).
revoke insert, update, delete on public.selene_responses from authenticated, anon;

-- ============================================================
-- 3. COLONNES SELENE SUR CLIENTS
-- ============================================================

alter table public.clients
  add column if not exists selene_scores jsonb,
  add column if not exists selene_dominante text,
  add column if not exists selene_top3 text[],
  add column if not exists selene_taken_at timestamptz;

-- ============================================================
-- 4. RPC FUNCTIONS (accès public au test sans auth)
-- ============================================================

-- get_selene_invitation : valide un token et retourne le contexte minimal nécessaire au client.
-- Ne révèle aucune donnée du thérapeute ni d'autres clients.
create or replace function public.get_selene_invitation(p_token text)
returns table (
  invitation_id uuid,
  client_id uuid,
  client_first_name text,
  expires_at timestamptz,
  already_used boolean
)
language plpgsql
security definer
set search_path = public
as $$
begin
  return query
  select
    inv.id,
    inv.client_id,
    split_part(c.full_name, ' ', 1) as client_first_name,
    inv.expires_at,
    (inv.used_at is not null) as already_used
  from public.selene_invitations inv
  join public.clients c on c.id = inv.client_id
  where inv.token = p_token
    and inv.expires_at > now()
  limit 1;
end;
$$;

revoke all on function public.get_selene_invitation(text) from public;
grant execute on function public.get_selene_invitation(text) to anon, authenticated;

-- submit_selene_response : enregistre les réponses, calcule l'agrégat et met à jour clients.
-- Idempotent par token : si déjà utilisé, retourne success=false.
create or replace function public.submit_selene_response(
  p_token text,
  p_responses jsonb,
  p_scores jsonb,
  p_dominante text,
  p_top3 text[]
)
returns table (success boolean, message text)
language plpgsql
security definer
set search_path = public
as $$
declare
  v_inv record;
begin
  select * into v_inv
  from public.selene_invitations
  where token = p_token and expires_at > now()
  limit 1;

  if not found then
    return query select false, 'Invitation invalide ou expirée';
    return;
  end if;

  if v_inv.used_at is not null then
    return query select false, 'Test déjà soumis';
    return;
  end if;

  insert into public.selene_responses (
    therapist_id, client_id, invitation_id,
    responses, scores, dominante, top3
  ) values (
    v_inv.therapist_id, v_inv.client_id, v_inv.id,
    p_responses, p_scores, p_dominante, p_top3
  );

  update public.selene_invitations
    set used_at = now()
    where id = v_inv.id;

  update public.clients
    set selene_scores = p_scores,
        selene_dominante = p_dominante,
        selene_top3 = p_top3,
        selene_taken_at = now(),
        test_done = true,
        profile_dominante = p_dominante,
        updated_at = now()
    where id = v_inv.client_id;

  return query select true, 'Test enregistré avec succès';
end;
$$;

revoke all on function public.submit_selene_response(text, jsonb, jsonb, text, text[]) from public;
grant execute on function public.submit_selene_response(text, jsonb, jsonb, text, text[]) to anon, authenticated;

comment on table public.selene_invitations is
  'Liens d''invitation au test Selene. Token unique opaque, expire après 30 jours par défaut.';

comment on table public.selene_responses is
  'Résultats bruts + agrégés du test Selene. Lecture RLS par le thérapeute uniquement. Insertion via RPC SECURITY DEFINER pour permettre la soumission par un client non authentifié via le token.';
