-- 0033 — Consolidation de la messagerie sur client_messages
--
-- Avant : deux tables parallèles
--   * messages        (0001) — lue par la messagerie thérapeute (from_role)
--   * client_messages (0030) — écrite par le portail client (sender_role)
-- Conséquence : les messages envoyés par les clients depuis le portail
-- n'apparaissaient JAMAIS côté thérapeute (silos séparés), et l'envoi
-- thérapeute n'était même pas persisté.
--
-- Ce changement migre les lignes existantes de `messages` vers
-- `client_messages` (mapping from_role -> sender_role) puis l'app bascule
-- entièrement sur client_messages. La table `messages` est conservée (non
-- supprimée) par prudence ; elle n'est plus ni lue ni écrite.

insert into public.client_messages (id, client_id, therapist_id, sender_role, body, read_at, created_at)
select m.id, m.client_id, m.therapist_id, m.from_role, m.body, m.read_at, m.created_at
from public.messages m
where not exists (
  select 1 from public.client_messages cm where cm.id = m.id
);

comment on table public.messages is
  'DÉPRÉCIÉE depuis 0033 — messagerie consolidée sur client_messages. Conservée pour archive ; ne plus lire/écrire.';
