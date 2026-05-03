-- Test seed for Laurent Martini (f8b161fa-3c12-4cf9-9e26-009af8bcaaf8)
-- 5 varied clients + 3 upcoming appointments + 1 plan + 2 notes

DO $$
DECLARE
  v_therapist uuid := 'f8b161fa-3c12-4cf9-9e26-009af8bcaaf8';
  v_camille uuid := gen_random_uuid();
  v_marc uuid := gen_random_uuid();
  v_sophie uuid := gen_random_uuid();
  v_julien uuid := gen_random_uuid();
  v_ines uuid := gen_random_uuid();
BEGIN
  -- 1. Camille Dupont — anxiété, profil émotionnel
  INSERT INTO public.clients (id, therapist_id, full_name, email, phone, age, status, color,
    test_done, profile_axes, profile_dominante, themes, objectifs, blocages,
    date_naissance, sexe, profession, situation_familiale, antecedents_psy)
  VALUES (v_camille, v_therapist, 'Camille Dupont', 'camille.dupont@example.com',
    '06 12 34 56 78', 34, 'actif', '#7C5CBF', true,
    '{"Émotionnel": 82, "Cognitif": 58, "Somatique": 71, "Comportemental": 49}'::jsonb,
    'Émotionnel',
    ARRAY['Anxiété & stress', 'Sommeil & insomnie'],
    ARRAY['Apaiser l''anxiété chronique', 'Retrouver un sommeil réparateur'],
    ARRAY['Hypervigilance', 'Ruminations nocturnes'],
    '1991-03-15', 'F', 'Designer UX', 'Célibataire',
    'Anxiété généralisée diagnostiquée en 2019. Suivi sophrologique sur 6 mois en 2022.');

  -- 2. Marc Lefèvre — addictions, somatique
  INSERT INTO public.clients (id, therapist_id, full_name, email, phone, age, status, color,
    test_done, profile_axes, profile_dominante, themes, objectifs, blocages,
    date_naissance, sexe, profession, situation_familiale, antecedents_medicaux, antecedents_psy)
  VALUES (v_marc, v_therapist, 'Marc Lefèvre', 'marc.lefevre@example.com',
    '06 87 65 43 21', 47, 'actif', '#2E8A7B', true,
    '{"Émotionnel": 64, "Cognitif": 47, "Somatique": 79, "Comportemental": 73}'::jsonb,
    'Somatique',
    ARRAY['Addictions', 'Sommeil & insomnie'],
    ARRAY['Diminuer la consommation d''alcool', 'Renouer avec le corps'],
    ARRAY['Compulsions du soir', 'Tensions cervicales chroniques'],
    '1978-09-22', 'M', 'Commercial grand compte', 'Marié, 2 enfants',
    'Hypertension légère sous contrôle. Lombalgies récurrentes.',
    'Sevrage tabagique réussi en 2020. Pas de suivi psychologique antérieur.');

  -- 3. Sophie Bernard — estime, cognitif, test pas fait
  INSERT INTO public.clients (id, therapist_id, full_name, email, phone, age, status, color,
    test_done, themes, objectifs, blocages,
    date_naissance, sexe, profession, situation_familiale)
  VALUES (v_sophie, v_therapist, 'Sophie Bernard', 'sophie.bernard@example.com',
    '06 33 22 11 99', 28, 'nouveau', '#C8A030', false,
    ARRAY['Estime & confiance en soi', 'Procrastination & motivation'],
    ARRAY['Affirmation au travail', 'Sortir de la procrastination'],
    ARRAY['Syndrome de l''imposteur', 'Auto-sabotage'],
    '1997-06-08', 'F', 'Cheffe de projet IT', 'En couple');

  -- 4. Julien Moreau — deuil, émotionnel
  INSERT INTO public.clients (id, therapist_id, full_name, email, phone, age, status, color,
    test_done, profile_axes, profile_dominante, themes, objectifs, blocages,
    date_naissance, sexe, profession, situation_familiale, antecedents_psy, traitements_en_cours)
  VALUES (v_julien, v_therapist, 'Julien Moreau', 'julien.moreau@example.com',
    '06 55 44 33 22', 52, 'actif', '#B85450', true,
    '{"Émotionnel": 88, "Cognitif": 62, "Somatique": 55, "Comportemental": 41}'::jsonb,
    'Émotionnel',
    ARRAY['Trauma & deuil', 'Anxiété & stress'],
    ARRAY['Avancer dans le deuil de son père', 'Retrouver de la légèreté'],
    ARRAY['Culpabilité', 'Insomnies depuis 4 mois'],
    '1973-12-03', 'M', 'Architecte', 'Marié, 3 enfants adultes',
    'Suivi par un psychologue 8 mois en 2024. Travail de deuil entamé.',
    'Tisanes de valériane occasionnelles.');

  -- 5. Inès Rivière — burnout, comportemental
  INSERT INTO public.clients (id, therapist_id, full_name, email, phone, age, status, color,
    test_done, profile_axes, profile_dominante, themes, objectifs, blocages,
    date_naissance, sexe, profession, situation_familiale, antecedents_medicaux)
  VALUES (v_ines, v_therapist, 'Inès Rivière', 'ines.riviere@example.com',
    '06 77 88 99 00', 41, 'actif', '#5B8FB9', true,
    '{"Émotionnel": 71, "Cognitif": 78, "Somatique": 66, "Comportemental": 84}'::jsonb,
    'Comportemental',
    ARRAY['Burn-out & fatigue', 'Décision & orientation'],
    ARRAY['Sortir du burnout', 'Reconnexion à ses aspirations'],
    ARRAY['Hyperengagement professionnel', 'Difficulté à dire non'],
    '1984-04-19', 'F', 'Directrice marketing', 'Mariée, 1 enfant',
    'Arrêt maladie de 6 semaines en 2025 (épuisement). Suivi médecin du travail.');

  -- Plan de soin pour Camille
  INSERT INTO public.client_protocols (therapist_id, client_id, protocol_id, status, sessions_total, notes)
  VALUES (v_therapist, v_camille, 100, 'in_progress', 6,
    'Programme apaisement de l''anxiété — 6 séances espacées de 2 semaines.');

  -- Notes pour Camille (2 entrées)
  INSERT INTO public.client_notes (therapist_id, client_id, kind, title, body) VALUES
    (v_therapist, v_camille, 'libre', 'Première séance — premières observations',
     'Très réceptive à l''accompagnement. Difficulté à respirer abdominalement au début. Travail sur l''ancrage à la fin de la séance, retour positif.'),
    (v_therapist, v_camille, 'libre', 'Suivi — semaine 2',
     'Retour : 3 nuits de sommeil sur 7 sans réveil. Continue les exercices de cohérence cardiaque. À explorer : événement déclencheur de l''insomnie (changement de poste).');

  -- 3 RDV à venir (cette semaine)
  INSERT INTO public.appointments (therapist_id, client_id, starts_at, duration_min, mode, status) VALUES
    (v_therapist, v_camille, now() + interval '1 day' + interval '14 hours', 60, 'presentiel', 'planned'),
    (v_therapist, v_marc, now() + interval '2 days' + interval '10 hours', 60, 'visio', 'planned'),
    (v_therapist, v_julien, now() + interval '3 days' + interval '16 hours', 90, 'presentiel', 'planned');
END $$;
