-- Coordonnées légales de facturation pour le thérapeute
-- Permet de générer des factures en bonne et due forme.

alter table public.profiles
  add column if not exists business_name text,
  add column if not exists legal_form text,
  add column if not exists address_line1 text,
  add column if not exists address_line2 text,
  add column if not exists postal_code text,
  add column if not exists city text,
  add column if not exists country text default 'France',
  add column if not exists phone text,
  add column if not exists siret text,
  add column if not exists ape_code text,
  add column if not exists rcs text,
  add column if not exists tva_number text,
  add column if not exists tva_regime text not null default 'franchise' check (tva_regime in ('franchise', 'assujetti')),
  add column if not exists tva_rate numeric(5,2),
  add column if not exists iban text,
  add column if not exists bic text,
  add column if not exists bank_name text,
  add column if not exists invoice_footer text,
  add column if not exists payment_terms text;

comment on column public.profiles.tva_regime is 'franchise = micro/franchise en base (art. 293 B CGI), assujetti = TVA applicable';
comment on column public.profiles.invoice_footer is 'Mentions légales libres affichées en pied de facture';
comment on column public.profiles.payment_terms is 'Conditions de règlement (ex : à réception, 30 jours)';
