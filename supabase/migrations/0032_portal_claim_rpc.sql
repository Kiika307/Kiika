-- 0032 — Claim d'invitation portail sécurisé + consentement write-once
--
-- Problème : le claim (lier user_id à la fiche) se faisait via UPDATE direct,
-- mais la RLS clients_self_read/clients_self_update exige user_id = auth.uid().
-- Avant le claim, user_id est NULL → le client ne peut NI lire NI mettre à jour
-- sa fiche par token. Le flux d'activation du portail était donc non
-- fonctionnel.
--
-- Solution : une RPC SECURITY DEFINER contrôlée qui :
--   1. retrouve la fiche par token (contourne RLS de façon maîtrisée)
--   2. valide expiration + non déjà liée à un autre compte
--   3. VÉRIFIE que l'email du compte connecté == email de la fiche
--      (corrige la faille de liaison de compte : un lien envoyé à
--       alice@x.com ne peut plus être capté par bob@y.com)
--   4. lie user_id et annule le token

create or replace function public.claim_portal_invitation(p_token text)
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  v_uid uuid := auth.uid();
  v_email text := lower(coalesce(auth.jwt() ->> 'email', ''));
  v_client record;
begin
  if v_uid is null then
    return jsonb_build_object('ok', false, 'error', 'Non authentifié');
  end if;

  select id, user_id, email, portal_invite_expires_at,
         cgu_accepted_at, cgv_accepted_at, rgpd_accepted_at
    into v_client
  from public.clients
  where portal_invite_token = p_token;

  if not found then
    return jsonb_build_object('ok', false, 'error', 'Lien d''invitation invalide');
  end if;

  if v_client.portal_invite_expires_at is not null
     and v_client.portal_invite_expires_at < now() then
    return jsonb_build_object('ok', false, 'error',
      'Lien expiré — demandez à votre praticien·ne de le renvoyer');
  end if;

  if v_client.user_id is not null and v_client.user_id <> v_uid then
    return jsonb_build_object('ok', false, 'error',
      'Ce lien est déjà lié à un autre compte');
  end if;

  -- Vérification d'email : le compte connecté doit correspondre à la fiche.
  if v_client.email is not null and v_client.email <> ''
     and v_email <> '' and lower(v_client.email) <> v_email then
    return jsonb_build_object('ok', false, 'error',
      'Ce lien est destiné à une autre adresse e-mail. Connectez-vous avec l''adresse à laquelle l''invitation a été envoyée.');
  end if;

  update public.clients
    set user_id = v_uid,
        portal_invite_token = null,
        portal_invite_expires_at = null
  where id = v_client.id;

  return jsonb_build_object(
    'ok', true,
    'needsTerms',
    not (v_client.cgu_accepted_at is not null
         and v_client.cgv_accepted_at is not null
         and v_client.rgpd_accepted_at is not null)
  );
end;
$$;

revoke all on function public.claim_portal_invitation(text) from public, anon;
grant execute on function public.claim_portal_invitation(text) to authenticated;

comment on function public.claim_portal_invitation(text) is
  'Lie le compte auth connecté à la fiche client portant le token donné, après vérification expiration + correspondance e-mail. SECURITY DEFINER car la fiche n''est pas encore lisible par RLS avant liaison.';

-- ------------------------------------------------------------
-- Consentement write-once (H-7) : une fois un consentement daté, il ne peut
-- plus être réécrit (preuve RGPD art. 7 de la date d'acceptation initiale).
-- On enrichit le trigger de verrouillage côté client.
-- ------------------------------------------------------------

create or replace function public.fn_lock_client_self_update()
returns trigger
language plpgsql
as $$
declare
  v_cgu  timestamptz := new.cgu_accepted_at;
  v_cgv  timestamptz := new.cgv_accepted_at;
  v_rgpd timestamptz := new.rgpd_accepted_at;
begin
  if old.user_id is not null and old.user_id = (select auth.uid()) then
    new := old;                                  -- tout verrouillé par défaut
    -- consentements write-once : la 1re valeur non-nulle gagne, jamais réécrite
    new.cgu_accepted_at  := coalesce(old.cgu_accepted_at, v_cgu);
    new.cgv_accepted_at  := coalesce(old.cgv_accepted_at, v_cgv);
    new.rgpd_accepted_at := coalesce(old.rgpd_accepted_at, v_rgpd);
  end if;
  return new;
end;
$$;

revoke all on function public.fn_lock_client_self_update() from public, anon, authenticated;
