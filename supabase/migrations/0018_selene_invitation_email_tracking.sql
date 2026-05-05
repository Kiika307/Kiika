-- 0018 — Tracking de l'envoi d'invitation Selene
-- Distingue les envois auto via KIIKA/Resend des copies manuelles / mailto.

alter table public.selene_invitations
  add column if not exists sent_at timestamptz,
  add column if not exists sent_to_email text,
  add column if not exists send_method text
    check (send_method in ('kiika_email', 'mailto', 'manual_copy'));

create index if not exists selene_invitations_sent_at_idx
  on public.selene_invitations(sent_at desc);

comment on column public.selene_invitations.sent_at is
  'Horodatage du dernier envoi via KIIKA. NULL = lien généré mais jamais envoyé via l app.';
comment on column public.selene_invitations.sent_to_email is
  'Email destinataire utilisé lors de l envoi via KIIKA (peut différer du client.email courant).';
comment on column public.selene_invitations.send_method is
  'kiika_email = Resend depuis selene@kiika.intio.fr ; mailto = ouverture du client mail du thérapeute ; manual_copy = lien copié.';
