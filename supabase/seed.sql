-- INTIO seed — à exécuter APRÈS avoir créé le compte Varinka via /signup
-- Le seed cible le premier profil thérapeute trouvé.

do $$
declare
  vr uuid;
  c1 uuid; c2 uuid; c3 uuid; c4 uuid;
  a1 uuid; a4 uuid;
begin
  select id into vr from public.profiles where role = 'therapist' order by created_at asc limit 1;
  if vr is null then
    raise exception 'Aucun profil thérapeute. Inscrivez-vous d''abord via /signup.';
  end if;

  -- Clients
  insert into public.clients (therapist_id, full_name, email, phone, age, status, color, test_done, profile_dominante, profile_axes, themes, objectifs, blocages)
  values (vr, 'Camille Dupont', 'camille.d@email.fr', '06 12 34 56 78', 34, 'actif', '#7C5CBF', true,
          'Émotionnel-Cognitif',
          '{"Émotionnel":78,"Cognitif":65,"Somatique":42,"Comportemental":55}'::jsonb,
          ARRAY['Anxiété','Estime de soi','Relations'],
          ARRAY['Gérer le stress quotidien','Renforcer la confiance'],
          ARRAY['Peur de l''échec','Auto-critique excessive'])
  returning id into c1;

  insert into public.clients (therapist_id, full_name, email, phone, age, status, color, test_done, profile_dominante, profile_axes, themes, objectifs, blocages)
  values (vr, 'Marc Lefèvre', 'marc.l@email.fr', '06 87 65 43 21', 41, 'actif', '#D4622A', true,
          'Somatique',
          '{"Émotionnel":45,"Cognitif":52,"Somatique":82,"Comportemental":60}'::jsonb,
          ARRAY['Douleurs chroniques','Burn-out'],
          ARRAY['Reconnecter au corps','Apaiser le système nerveux'],
          ARRAY['Hypervigilance','Tensions musculaires'])
  returning id into c2;

  insert into public.clients (therapist_id, full_name, email, phone, age, status, color, test_done)
  values (vr, 'Sophie Bernard', 'sophie.b@email.fr', '06 23 45 67 89', 28, 'nouveau', '#2E8A7B', false)
  returning id into c3;

  insert into public.clients (therapist_id, full_name, email, phone, age, status, color, test_done, profile_dominante, profile_axes, themes, objectifs, blocages)
  values (vr, 'Julien Moreau', 'julien.m@email.fr', '06 34 56 78 90', 52, 'actif', '#5B8FB9', true,
          'Cognitif-Comportemental',
          '{"Émotionnel":50,"Cognitif":80,"Somatique":38,"Comportemental":75}'::jsonb,
          ARRAY['Phobies','TOC légers'],
          ARRAY['Désensibilisation','Réduction des rituels'],
          ARRAY['Perfectionnisme','Pensées intrusives'])
  returning id into c4;

  -- Appointments (semaine en cours)
  insert into public.appointments (therapist_id, client_id, starts_at, duration_min, mode)
  values (vr, c1, date_trunc('week', now()) + interval '0 day' + time '10:00', 60, 'visio')
  returning id into a1;

  insert into public.appointments (therapist_id, client_id, starts_at, duration_min, mode)
  values (vr, c2, date_trunc('week', now()) + interval '1 day' + time '14:30', 60, 'presentiel');

  insert into public.appointments (therapist_id, client_id, starts_at, duration_min, mode)
  values (vr, c3, date_trunc('week', now()) + interval '2 day' + time '11:00', 45, 'visio');

  insert into public.appointments (therapist_id, client_id, starts_at, duration_min, mode)
  values (vr, c4, date_trunc('week', now()) + interval '3 day' + time '16:00', 60, 'visio')
  returning id into a4;

  insert into public.appointments (therapist_id, client_id, starts_at, duration_min, mode)
  values (vr, c1, date_trunc('week', now()) + interval '4 day' + time '09:30', 60, 'visio');

  -- Messages
  insert into public.messages (therapist_id, client_id, from_role, body, created_at) values
    (vr, c1, 'client',    'Bonjour Varinka, j''ai bien dormi cette nuit, première fois depuis longtemps.', now() - interval '2 days'),
    (vr, c1, 'therapist', 'Excellente nouvelle Camille ! Les exercices ancrent bien.',                     now() - interval '2 days' + interval '5 min'),
    (vr, c1, 'client',    'Merci pour la séance d''hier, je me sens vraiment apaisée.',                    now() - interval '4 hours'),
    (vr, c2, 'therapist', 'Pensez à pratiquer la cohérence cardiaque 3× / jour.',                          now() - interval '3 days'),
    (vr, c2, 'client',    'Les exercices respi marchent super bien.',                                      now() - interval '1 day'),
    (vr, c4, 'client',    'Est-ce qu''on peut décaler de 30 min jeudi ?',                                  now() - interval '1 day'),
    (vr, c4, 'client',    'Réunion qui s''éternise, désolé.',                                              now() - interval '1 day' + interval '1 min');
end $$;
