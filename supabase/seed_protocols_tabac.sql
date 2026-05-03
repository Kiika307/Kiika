-- Seed des protocoles d'arrêt du tabac (GS Formation - Hypnose Ericksonienne)
-- Plage d'IDs réservée : 800-803
-- Source : "Hypnose Ericksonienne — Protocole Tabacs" V2 (2023, GS Formation)

INSERT INTO public.protocols (id, name, category, practice, description, duration, level, tags, color, sessions, objectives, source, motifs)
VALUES
  -- 800 : Programme 2 séances (intensif)
  (800,
   'Programme arrêt tabac — 2 séances',
   'Addictions — Tabac',
   'Hypnose Ericksonienne',
   'Programme intensif d''arrêt du tabac en 2 séances avec choix illusoire de méthode (Schéma de Dickens vs Changement d''histoire de vie). Responsabilise le client dès le premier contact téléphonique. Convient aux personnes très motivées ayant peu de tentatives antérieures.',
   '2 × 90 min',
   'Intermédiaire',
   ARRAY['tabac', 'sevrage', 'addiction', 'choix illusoire', 'Dickens', 'régression'],
   '#7C5CBF',
   2,
   ARRAY['Arrêt complet du tabac à l''issue du programme', 'Responsabilisation du client par choix illusoire de méthode', 'Recadrage des bénéfices secondaires de la cigarette', 'Ancrage d''un état de non-fumeur fier et libre'],
   'GS Formation — Hypnose Ericksonienne Protocole Tabacs',
   ARRAY['Addictions']
  ),

  -- 801 : Programme 4 séances (recommandé)
  (801,
   'Programme arrêt tabac — 4 séances',
   'Addictions — Tabac',
   'Hypnose Ericksonienne',
   'Programme complet recommandé d''arrêt du tabac en 4 séances. Travail progressif sur le diagnostic, l''intention positive, la ligne du temps, le schéma de Dickens et le pont sur le futur. Inclut prescriptions paradoxales (changer de marque chaque jour, lettres d''adieu) et contrat moral final.',
   '4 × 60-90 min',
   'Intermédiaire',
   ARRAY['tabac', 'sevrage', 'addiction', 'protocole complet', 'PNL', 'Dilts', 'Tad James'],
   '#C8A030',
   4,
   ARRAY['Arrêt durable du tabac avec accompagnement progressif', 'Travail des 12 croyances limitantes du fumeur', 'Réorganisation de la ligne du temps avec ressources adultes', 'Construction d''une nouvelle identité de non-fumeur', 'Engagement formalisé par contrat moral'],
   'GS Formation — Hypnose Ericksonienne Protocole Tabacs',
   ARRAY['Addictions']
  ),

  -- 802 : Programme groupe (1 séance collective)
  (802,
   'Programme arrêt tabac — 1 séance groupe',
   'Addictions — Tabac',
   'Hypnose Ericksonienne',
   'Séance collective unique d''arrêt du tabac (4 à 12 participants). Métaphore du voyage de l''île des fumeurs vers l''île des non-fumeurs. Travail symbolique de désactivation du geste, allégement du poids, sommeil réparateur, futur sans tabac. Idéal pour entreprises et collectivités.',
   '1 × 120-180 min',
   'Intermédiaire',
   ARRAY['tabac', 'sevrage', 'addiction', 'groupe', 'collectif', 'entreprise', 'métaphore du voyage'],
   '#2E8A7B',
   1,
   ARRAY['Arrêt collectif accompagné par effet de groupe', 'Métaphore du voyage entre deux îles', 'Désactivation du geste automatique', 'Visualisation guidée du futur sans tabac', 'Cérémonie de libération du poids'],
   'GS Formation — Hypnose Ericksonienne Protocole Tabacs',
   ARRAY['Addictions']
  ),

  -- 803 : Travail Ordalique + Contrat moral (suivi)
  (803,
   'Travail ordalique tabac & contrat moral',
   'Addictions — Tabac',
   'Hypnose Ericksonienne',
   'Protocole de suivi paradoxal en cas de résistance ou de rechute. Prescription du symptôme ritualisée (paradoxe thérapeutique de Frankl). Inclut le contrat d''arrêt formalisé en 10 engagements concrets et le questionnaire HAD pour évaluer anxiété/dépression. À utiliser en 5e séance ou en cas de rechute.',
   '1 × 60 min',
   'Avancé',
   ARRAY['tabac', 'ordalie', 'paradoxe', 'résistance', 'rechute', 'contrat moral', 'Fagestorm', 'HAD'],
   '#B85450',
   1,
   ARRAY['Lever les résistances par paradoxe thérapeutique', 'Formaliser l''engagement par un contrat écrit en 10 points', 'Évaluer la part anxieuse/dépressive avec test HAD', 'Identifier les motivations positives et négatives'],
   'GS Formation — Hypnose Ericksonienne Protocole Tabacs',
   ARRAY['Addictions']
  )
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  practice = EXCLUDED.practice,
  description = EXCLUDED.description,
  duration = EXCLUDED.duration,
  level = EXCLUDED.level,
  tags = EXCLUDED.tags,
  color = EXCLUDED.color,
  sessions = EXCLUDED.sessions,
  objectives = EXCLUDED.objectives,
  source = EXCLUDED.source,
  motifs = EXCLUDED.motifs;
