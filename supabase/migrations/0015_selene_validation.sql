-- 0015 — Hardening : validation allowlist sur submit_selene_response
-- Ajoute une garde contre les valeurs arbitraires injectées via PostgREST direct.
-- Les 9 dimensions Selene sont les seules valeurs acceptées pour p_dominante et p_top3.

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
  v_allowed_dims text[] := ARRAY[
    'ESSENCE',
    'ALTRUISME',
    'ACCOMPLISSEMENT',
    'AUTHENTICITE',
    'ANALYSE',
    'LOYAUTE',
    'ENTHOUSIASME',
    'LEADERSHIP',
    'HARMONIE'
  ];
  v_dim text;
begin
  -- Allowlist: dominante must be one of the 9 Selene dimensions
  if p_dominante is null or not (p_dominante = any (v_allowed_dims)) then
    return query select false, 'Dimension dominante invalide';
    return;
  end if;

  -- Allowlist: each entry of top3 must be a valid dimension
  if p_top3 is not null then
    foreach v_dim in array p_top3 loop
      if not (v_dim = any (v_allowed_dims)) then
        return query select false, 'Entrée top3 invalide';
        return;
      end if;
    end loop;

    -- Top3 length must be at most 3
    if array_length(p_top3, 1) > 3 then
      return query select false, 'top3 doit contenir au maximum 3 entrées';
      return;
    end if;
  end if;

  -- Sanity bounds on payload size (defence-in-depth against bloat)
  if octet_length(p_responses::text) > 100000 then
    return query select false, 'Payload responses trop volumineux';
    return;
  end if;
  if octet_length(p_scores::text) > 10000 then
    return query select false, 'Payload scores trop volumineux';
    return;
  end if;

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

comment on function public.submit_selene_response(text, jsonb, jsonb, text, text[]) is
  'Submit a Selene questionnaire. Validates dominante/top3 against an allowlist of 9 Selene dimensions and enforces payload size limits. Idempotent per token.';
