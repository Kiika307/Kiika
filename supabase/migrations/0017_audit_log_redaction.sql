-- 0017 — Hardening RGPD : redaction des PHI dans audit_log + politique de rétention
--
-- L'audit_log capture before/after de toutes les modifications sur les tables
-- sensibles. Sans masquage, il devient un miroir non structuré de toutes les
-- données de santé (notes, antécédents, scores Selene, contenu des messages).
--
-- Ce changement :
--   1. Définit la liste des colonnes PHI à masquer par table.
--   2. Modifie fn_audit_trigger pour remplacer ces valeurs par '[REDACTED]'
--      dans before/after avant écriture.
--   3. Ajoute une fonction utilitaire fn_purge_audit_log_old(months_to_keep)
--      pour purger les entrées anciennes (à appeler périodiquement via pg_cron
--      ou manuellement). Par défaut on conserve 12 mois.

-- ------------------------------------------------------------
-- 1. Liste centralisée des colonnes PHI à masquer (table -> colonnes)
-- ------------------------------------------------------------
-- Stockée comme constante dans la fonction (immutable, hot path).
-- Pour modifier la liste, recréer la fonction.

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

  -- Map table -> PHI columns
  case p_table
    when 'clients' then
      v_cols := array[
        'antecedents_medicaux', 'antecedents_psy', 'traitements_en_cours',
        'medications', 'allergies', 'notes', 'phone', 'email',
        'date_naissance', 'birth_date', 'address', 'adresse'
      ];
    when 'client_notes' then
      v_cols := array['body', 'content', 'transcript', 'mood_notes'];
    when 'client_documents' then
      v_cols := array['file_path', 'description', 'extracted_text'];
    when 'sessions' then
      v_cols := array['notes', 'transcript', 'recording_url'];
    when 'client_protocols' then
      v_cols := array['notes', 'session_notes'];
    when 'client_consents' then
      v_cols := array['signed_text', 'ip_address'];
    when 'client_profile_snapshots' then
      v_cols := array['raw_responses', 'detailed_scores'];
    when 'client_tasks' then
      v_cols := array['description', 'feedback'];
    when 'invoices' then
      v_cols := array['notes', 'description', 'patient_address'];
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

-- ------------------------------------------------------------
-- 2. Modifier fn_audit_trigger pour utiliser fn_audit_redact
-- ------------------------------------------------------------

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
    v_after := public.fn_audit_redact(tg_table_name, to_jsonb(new));
    v_before := null;
  elsif (tg_op = 'UPDATE') then
    v_row_id := coalesce((new).id::text, null);
    v_before := public.fn_audit_redact(tg_table_name, to_jsonb(old));
    v_after := public.fn_audit_redact(tg_table_name, to_jsonb(new));
  elsif (tg_op = 'DELETE') then
    v_row_id := coalesce((old).id::text, null);
    v_before := public.fn_audit_redact(tg_table_name, to_jsonb(old));
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

comment on function public.fn_audit_redact(text, jsonb) is
  'Masks PHI columns in audit_log JSONB payloads. Per-table allowlist of fields replaced by "[REDACTED]".';

comment on function public.fn_audit_trigger() is
  'Audit trigger writing to audit_log. PHI columns are redacted via fn_audit_redact before persistence.';

-- ------------------------------------------------------------
-- 3. Politique de rétention : purge des entrées > N mois
-- ------------------------------------------------------------

create or replace function public.fn_purge_audit_log_old(p_months integer default 12)
returns integer
language plpgsql
security definer
set search_path = public
as $$
declare
  v_deleted integer;
begin
  if p_months < 1 or p_months > 60 then
    raise exception 'p_months must be between 1 and 60 (got %)', p_months;
  end if;

  delete from public.audit_log
  where created_at < (now() - make_interval(months => p_months));

  get diagnostics v_deleted = row_count;
  return v_deleted;
end;
$$;

revoke all on function public.fn_purge_audit_log_old(integer) from public, authenticated, anon;

comment on function public.fn_purge_audit_log_old(integer) is
  'Manual/scheduled purge of audit_log entries older than N months (default 12). Run via pg_cron or admin script. Returns count of deleted rows.';
