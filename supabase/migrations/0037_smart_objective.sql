-- 0037 — Objectif SMART du client (1ère séance), base du parcours KIIKA
--
-- Capture guidée Spécifique / Mesurable / Atteignable / Réaliste / Temporel.
-- Injecté dans la génération de parcours KIIKA (avec le test Selene).

alter table public.clients
  add column if not exists smart_objective jsonb;

comment on column public.clients.smart_objective is
  'Objectif SMART { specific, measurable, achievable, realistic, temporal, updated_at }';
