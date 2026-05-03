-- Phase 1: extended client information
alter table public.clients
  add column if not exists date_naissance date,
  add column if not exists sexe text check (sexe in ('F', 'M', 'Autre', 'Non précisé')),
  add column if not exists profession text,
  add column if not exists situation_familiale text,
  add column if not exists adresse text,
  add column if not exists medecin_traitant text,
  add column if not exists personne_referente text,
  add column if not exists antecedents_medicaux text,
  add column if not exists antecedents_psy text,
  add column if not exists traitements_en_cours text;
