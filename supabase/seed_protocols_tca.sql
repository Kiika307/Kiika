-- Seed protocoles TCA / Poids
-- Plage IDs : 810-812
-- Sources : "La Gastroplastie Hypnotique V2" + "Balance Tout — STOP Pulsion alimentaire" (GS Formation)

INSERT INTO public.protocols (id, name, category, practice, description, duration, level, tags, color, sessions, objectives, source, motifs)
VALUES
  -- 810 : Gastroplastie hypnotique 4 séances
  (810,
   'Gastroplastie hypnotique — 4 séances',
   'TCA & Poids — Anneau gastrique',
   'Hypnose Ericksonienne',
   'Pose d''un anneau gastrique virtuel par hypnose pour les personnes en surpoids (≥10 kg ou IMC ≥35). Recalibre le système hormonal et nerveux de la digestion sans chirurgie. Programme en 4 séances avec 4 règles d''or alimentaires et visualisation chirurgicale complète.',
   '4 × 90 min',
   'Avancé',
   ARRAY['poids', 'TCA', 'anneau gastrique', 'gastroplastie', 'satiété', 'IMC', 'obésité'],
   '#E08550',
   4,
   ARRAY['Pose d''un anneau gastrique virtuel par visualisation', 'Recalibrage du signal de satiété au niveau physiologique', 'Apprentissage des 4 règles d''or alimentaires', 'Perte de poids progressive et durable sans chirurgie réelle', 'Modification permanente du rapport à la nourriture'],
   'GS Formation — La Gastroplastie Hypnotique V2',
   ARRAY['Perte de poids & TCA']
  ),

  -- 811 : Balance Tout (pulsions alimentaires)
  (811,
   'Balance Tout — Nettoyage des pulsions alimentaires',
   'TCA & Poids — Pulsions',
   'Hypnose Ericksonienne',
   'Script hypnotique métaphorique pour libérer les liens émotionnels et schémas comportementaux liés à la pulsion alimentaire (ennui, stress, émotions non gérées). Le client visualise un sac invisible rempli d''habitudes anciennes et le balance dans une rivière ou depuis une falaise. Réécriture du nouveau comportement.',
   '1 × 60 min',
   'Intermédiaire',
   ARRAY['TCA', 'pulsions', 'compulsion alimentaire', 'grignotage émotionnel', 'hyperphagie', 'métaphore'],
   '#B85450',
   1,
   ARRAY['Identifier et libérer les liens émotionnels avec la nourriture', 'Distinguer faim physique et faim émotionnelle', 'Réécrire les automatismes de réaction à l''ennui, au stress, aux émotions', 'Ancrer un nouveau comportement plus fluide et conscient'],
   'GS Formation — Balance Tout STOP Pulsion alimentaire',
   ARRAY['Perte de poids & TCA', 'Anxiété & stress']
  ),

  -- 812 : Anneau post-gastrique (après chirurgie réelle)
  (812,
   'Anneau post-gastrique — Renforcement après chirurgie',
   'TCA & Poids — Post-chirurgie',
   'Hypnose Ericksonienne',
   'Protocole d''accompagnement hypnotique pour les personnes ayant subi une chirurgie d''anneau gastrique réelle. Renforce les effets de la pose, recadre les comportements alimentaires résiduels, et accompagne la perte de poids dans la durée. Indispensable en complément du suivi nutritionnel post-opératoire.',
   '1-2 × 75 min',
   'Intermédiaire',
   ARRAY['post-chirurgie', 'anneau gastrique', 'bypass', 'sleeve', 'consolidation', 'suivi'],
   '#5B8FB9',
   2,
   ARRAY['Renforcer les effets de la chirurgie bariatrique', 'Lever les résistances inconscientes au changement', 'Recadrer les habitudes alimentaires résiduelles', 'Soutenir la perte de poids dans la durée'],
   'GS Formation — La Gastroplastie Hypnotique V2 (chapitre post-gastrique)',
   ARRAY['Perte de poids & TCA']
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
