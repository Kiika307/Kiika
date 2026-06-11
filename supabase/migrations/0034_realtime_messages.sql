-- 0034 — Active Supabase Realtime sur client_messages
-- Permet aux deux interfaces (portail client + messagerie thérapeute) de
-- recevoir les nouveaux messages en direct sans rafraîchir la page. La RLS
-- existante filtre déjà les lignes visibles par chaque utilisateur ; Realtime
-- la respecte.

alter publication supabase_realtime add table public.client_messages;

-- REPLICA IDENTITY FULL pour que les events portent toutes les colonnes
-- (utile pour filtrer côté client par client_id / therapist_id).
alter table public.client_messages replica identity full;
