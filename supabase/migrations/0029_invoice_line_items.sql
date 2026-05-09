-- Lignes de prestation détaillées sur les factures + champ Projet
alter table public.invoices
  add column if not exists project text,
  add column if not exists line_items jsonb not null default '[]'::jsonb;

comment on column public.invoices.line_items is
  'Tableau d''items: [{description: text, qty: number, unit_price: number}]. Le total HT est dérivé.';
comment on column public.invoices.project is
  'Intitulé du projet/dossier facturé (libre).';

-- Logo de marque pour les factures (image hébergée Supabase storage ou URL)
alter table public.profiles
  add column if not exists logo_url text;
