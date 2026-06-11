-- 0031 — Durcissement sécurité du portail client
--
-- Corrige les failles introduites par 0030 :
--   C-2 : client_tasks — RLS laissait le client modifier toute colonne
--   C-3 : client_messages — idem (body, sender_role, therapist_id)
--   C-4 : clients — idem + auth.uid() non-subquery (perf)
--   H-5 : audit_log ne masquait pas les PHI des tables récentes
--
-- Note technique : une policy RLS ne peut PAS comparer OLD et NEW. Le
-- verrouillage colonne-par-colonne se fait donc via des triggers BEFORE UPDATE
-- qui, lorsque l'auteur de la modification est le CLIENT du portail (et non le
-- thérapeute), réinitialisent toutes les colonnes à leur ancienne valeur sauf
-- la petite liste explicitement autorisée. Pattern « NEW := OLD puis restaurer »
-- → toute colonne future est verrouillée par défaut côté client.

-- ============================================================
-- 1. clients — corriger la policy update (subquery) et verrouiller colonnes
-- ============================================================

drop policy if exists "clients_self_update" on public.clients;
create policy "clients_self_update" on public.clients
  for update using (user_id = (select auth.uid()))
  with check (user_id = (select auth.uid()));

create or replace function public.fn_lock_client_self_update()
returns trigger
language plpgsql
as $$
declare
  v_cgu  timestamptz := new.cgu_accepted_at;
  v_cgv  timestamptz := new.cgv_accepted_at;
  v_rgpd timestamptz := new.rgpd_accepted_at;
begin
  -- Le verrou ne s'applique QUE si l'auteur est le client lié (portail),
  -- pas le thérapeute (dont auth.uid() = therapist_id, jamais = user_id).
  if old.user_id is not null and old.user_id = (select auth.uid()) then
    new := old;                       -- tout est verrouillé par défaut
    new.cgu_accepted_at  := v_cgu;    -- sauf les 3 consentements
    new.cgv_accepted_at  := v_cgv;
    new.rgpd_accepted_at := v_rgpd;
  end if;
  return new;
end;
$$;

revoke all on function public.fn_lock_client_self_update() from public, anon, authenticated;

drop trigger if exists trg_lock_client_self_update on public.clients;
create trigger trg_lock_client_self_update
  before update on public.clients
  for each row execute function public.fn_lock_client_self_update();

-- ============================================================
-- 2. client_tasks — client ne peut changer que client_feedback + completed_at
-- ============================================================

create or replace function public.fn_lock_client_task_update()
returns trigger
language plpgsql
as $$
declare
  v_feedback  text := new.client_feedback;
  v_completed timestamptz := new.completed_at;
begin
  if exists (
    select 1 from public.clients c
    where c.id = old.client_id and c.user_id = (select auth.uid())
  ) then
    new := old;
    new.client_feedback := v_feedback;
    new.completed_at := v_completed;
  end if;
  return new;
end;
$$;

revoke all on function public.fn_lock_client_task_update() from public, anon, authenticated;

drop trigger if exists trg_lock_client_task_update on public.client_tasks;
create trigger trg_lock_client_task_update
  before update on public.client_tasks
  for each row execute function public.fn_lock_client_task_update();

-- ============================================================
-- 3. client_messages — client ne peut changer que read_at
-- ============================================================

create or replace function public.fn_lock_client_message_update()
returns trigger
language plpgsql
as $$
declare
  v_read_at timestamptz := new.read_at;
begin
  if exists (
    select 1 from public.clients c
    where c.id = old.client_id and c.user_id = (select auth.uid())
  ) then
    new := old;
    new.read_at := v_read_at;
  end if;
  return new;
end;
$$;

revoke all on function public.fn_lock_client_message_update() from public, anon, authenticated;

drop trigger if exists trg_lock_client_message_update on public.client_messages;
create trigger trg_lock_client_message_update
  before update on public.client_messages
  for each row execute function public.fn_lock_client_message_update();

-- ============================================================
-- 4. H-5 — étendre le masquage PHI de l'audit aux tables récentes
-- ============================================================

create or replace function public.fn_audit_redact(p_table text, p_payload jsonb)
returns jsonb
language plpgsql
immutable
as $$
declare
  v_redacted jsonb := p_payload;
  v_cols text[];
  v_col text;
begin
  if p_payload is null then
    return null;
  end if;

  case p_table
    when 'clients' then
      v_cols := array[
        'antecedents_medicaux', 'antecedents_psy', 'traitements_en_cours',
        'medications', 'allergies', 'notes', 'phone', 'email',
        'date_naissance', 'birth_date', 'address', 'adresse',
        'profile_axes', 'selene_scores', 'selene_top3'
      ];
    when 'client_notes' then
      v_cols := array['body', 'content', 'transcript', 'mood_notes'];
    when 'client_documents' then
      v_cols := array['file_path', 'storage_path', 'description', 'extracted_text'];
    when 'sessions' then
      v_cols := array['notes', 'transcript', 'recording_url'];
    when 'client_protocols' then
      v_cols := array['notes', 'session_notes'];
    when 'client_consents' then
      v_cols := array['signed_text', 'ip_address'];
    when 'client_profile_snapshots' then
      v_cols := array['raw_responses', 'detailed_scores'];
    when 'client_tasks' then
      v_cols := array['description', 'client_feedback', 'feedback'];
    when 'invoices' then
      v_cols := array['notes', 'description', 'patient_address'];
    -- Tables ajoutées après 0017
    when 'client_messages' then
      v_cols := array['body'];
    when 'selene_responses' then
      v_cols := array['responses', 'scores'];
    when 'client_kiika_analyses' then
      v_cols := array['objectives', 'recommended', 'insight', 'alternative_angles', 'caution_points'];
    when 'client_kiika_care_plans' then
      v_cols := array['context', 'diagnostic', 'direction', 'sessions', 'metrics', 'red_flags'];
    else
      v_cols := array[]::text[];
  end case;

  foreach v_col in array v_cols loop
    if v_redacted ? v_col then
      v_redacted := jsonb_set(v_redacted, array[v_col], '"[REDACTED]"'::jsonb, false);
    end if;
  end loop;

  return v_redacted;
end;
$$;

revoke all on function public.fn_audit_redact(text, jsonb) from public, authenticated, anon;

comment on function public.fn_audit_redact(text, jsonb) is
  'Masks PHI columns in audit_log JSONB payloads. Per-table allowlist of fields replaced by "[REDACTED]". 0031 adds client_messages, selene_responses, client_kiika_*.';
