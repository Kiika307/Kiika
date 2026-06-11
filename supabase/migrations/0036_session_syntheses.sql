-- 0036 — Synthèses de séance (compte-rendu structuré, partageable au client)
--
-- Différent des notes privées (client_notes) : une synthèse peut être PARTAGÉE
-- avec le client, qui la lit depuis son portail. Structure légère inspirée
-- d'EPhi-Bilan (synthèse / points clés / prochaines étapes).

create table if not exists public.session_syntheses (
  id uuid primary key default gen_random_uuid(),
  therapist_id uuid not null references auth.users(id) on delete cascade,
  client_id uuid not null references public.clients(id) on delete cascade,
  appointment_id uuid references public.appointments(id) on delete set null,
  session_date date not null default current_date,
  summary text not null check (char_length(summary) between 1 and 20000),
  key_points text check (key_points is null or char_length(key_points) <= 10000),
  next_steps text check (next_steps is null or char_length(next_steps) <= 10000),
  shared boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists session_syntheses_client_idx
  on public.session_syntheses(client_id, session_date desc);

alter table public.session_syntheses enable row level security;

-- Praticien : CRUD complet sur ses synthèses
drop policy if exists "syntheses_therapist_all" on public.session_syntheses;
create policy "syntheses_therapist_all" on public.session_syntheses
  for all using ((select auth.uid()) = therapist_id)
  with check ((select auth.uid()) = therapist_id);

-- Client : lecture des synthèses PARTAGÉES de sa fiche
drop policy if exists "syntheses_client_read_shared" on public.session_syntheses;
create policy "syntheses_client_read_shared" on public.session_syntheses
  for select using (
    shared = true
    and exists (select 1 from public.clients c
                where c.id = session_syntheses.client_id and c.user_id = (select auth.uid()))
  );

create or replace function public.touch_session_syntheses_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at := now(); return new; end $$;

revoke execute on function public.touch_session_syntheses_updated_at() from public, anon, authenticated;

drop trigger if exists trg_session_syntheses_updated_at on public.session_syntheses;
create trigger trg_session_syntheses_updated_at
  before update on public.session_syntheses
  for each row execute function public.touch_session_syntheses_updated_at();

-- PHI dans l'audit
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
  if p_payload is null then return null; end if;
  case p_table
    when 'clients' then
      v_cols := array['antecedents_medicaux','antecedents_psy','traitements_en_cours','medications','allergies','notes','phone','email','date_naissance','birth_date','address','adresse','profile_axes','selene_scores','selene_top3'];
    when 'client_notes' then v_cols := array['body','content','transcript','mood_notes'];
    when 'client_documents' then v_cols := array['file_path','storage_path','description','extracted_text'];
    when 'sessions' then v_cols := array['notes','transcript','recording_url'];
    when 'client_protocols' then v_cols := array['notes','session_notes'];
    when 'client_consents' then v_cols := array['signed_text','ip_address'];
    when 'client_profile_snapshots' then v_cols := array['raw_responses','detailed_scores'];
    when 'client_tasks' then v_cols := array['description','client_feedback','feedback'];
    when 'invoices' then v_cols := array['notes','description','patient_address'];
    when 'client_messages' then v_cols := array['body'];
    when 'selene_responses' then v_cols := array['responses','scores'];
    when 'client_kiika_analyses' then v_cols := array['objectives','recommended','insight','alternative_angles','caution_points'];
    when 'client_kiika_care_plans' then v_cols := array['context','diagnostic','direction','sessions','metrics','red_flags'];
    when 'client_mood_checkins' then v_cols := array['note'];
    when 'client_journal' then v_cols := array['title','body'];
    when 'session_syntheses' then v_cols := array['summary','key_points','next_steps'];
    else v_cols := array[]::text[];
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
