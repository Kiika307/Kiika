import type { ProtocolDetail } from "./types";

/**
 * Fiches détaillées KIIKA Hammond (IDs 600-674) — remplacent les anciens Hammond 600-700.
 * Source : Varinka Robert — fiches KIIKA v3 (Cercle 1 noyau + Cercle 2 Anxiété/Sommeil/Douleur).
 * 75 protocoles avec scripts complets, structure technique, dimensions KIIKA.
 */

const k_600: ProtocolDetail = {
  protocolId: 600,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction métaphorique douce par descente d'un escalier imaginaire, comptage de 10 à 1 avec dépose progressive des tensions corporelles. Convient à la majorité des patients en début de prise en charge.",
  indications: ["Première séance d'hypnose pour la plupart des patients", "Patients qui apprécient la structure et le comptage", "Préparation à toutes sortes de travaux thérapeutiques", "Convient aux personnes visuelles et kinesthésiques"],
  contraindications: ["Phobies des escaliers ou du vide", "Patients qui ont besoin d'une approche plus permissive ou conversationnelle", "Forte résistance à l'imagerie guidée"],
  programs: [{
    id: "principal",
    title: "Induction par escalier intérieur",
    icon: "◑",
    duration: "8 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction par escalier intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Accueil", detail: "Installe-toi confortablement, et prends quelques instants pour sentir où tu poses ton corps. Le contact avec le siège, les pieds qui touchent le sol, les mains qui se déposent. Tu n'as rien à faire de particulier maintenant. Juste être là." },
      { label: "Respiration", detail: "Laisse ta respiration trouver son rythme. Peut-être un peu plus lente que d'habitude, peut-être un peu plus profonde. Chaque expiration peut devenir une occasion de relâcher quelque chose qui n'a pas besoin d'être tenu." },
      { label: "Descente", detail: "Maintenant, imagine devant toi, à l'intérieur, un escalier qui descend doucement. Pas raide, pas long. Un escalier accueillant, peut-être en bois, peut-être en pierre, comme tu le vois. Dix marches qui mènent vers un endroit calme à l'intérieur de toi. Je vais les compter pour toi, et à chaque marche tu peux laisser une partie de la tension du jour glisser sur le côté. Dix... ta tête se desserre. Neuf... tes épaules trouvent leur place. Huit... ton dos se confie au siège. Sept... tes mains posent leur fatigue. Six... ton ventre se déplie. Cinq... ta respiration n'a plus rien à porter. Quatre... tes jambes se reposent. Trois... tes pieds s'enracinent. Deux... ton visage devient lisse. Une... tu es là, dans cet endroit calme à l'intérieur de toi." },
      { label: "Arrivee", detail: "Tu peux rester un moment dans cette tranquillité, le temps de bien t'y installer. Ton corps comprend ce qui se passe. Il sait qu'il peut se reposer ici, et que tu reviendras quand ce sera le moment." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie kinesthésique", type: "Levier", icon: "🎯", desc: "Induction par imagerie de descente avec comptage" },
    { name: "Comptage rythmé", type: "Levier", icon: "🎯", desc: "Induction par imagerie de descente avec comptage" },
    { name: "Dépose progressive des tensions", type: "Levier", icon: "🎯", desc: "Induction par imagerie de descente avec comptage" },
    { name: "Accueil", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Dépose", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "8 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_601: ProtocolDetail = {
  protocolId: 601,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction classique par focalisation du regard sur un point fixe (point au mur, flamme de bougie, doigt du thérapeute), avec installation progressive de la fatigue oculaire qui amène la fermeture spontanée des paupières.",
  indications: ["Patients très visuels ou cérébraux", "Patients sceptiques qui ont besoin d'une induction concrète, observable", "Démonstrations pédagogiques", "Première séance avec patients résistants à l'imagerie"],
  contraindications: ["Fatigue oculaire ou pathologie ophtalmologique", "Très jeunes enfants", "Patients très anxieux qui supportent mal le silence prolongé"],
  programs: [{
    id: "principal",
    title: "Induction par fixation visuelle",
    icon: "◑",
    duration: "7 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction par fixation visuelle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Choix Point", detail: "Choisis un point devant toi sur lequel tu vas poser ton regard. Quelque chose de simple, sans intérêt particulier. Une marque sur le mur, le coin d'un cadre, mon doigt si tu préfères. Trouve ton point, et garde tes yeux dessus." },
      { label: "Focalisation", detail: "Maintenant, laisse ton regard se poser tranquillement sur ce point. Tu n'as pas besoin de fixer intensément. Un regard doux, posé. Si ton regard s'éloigne, tu le ramènes simplement, sans te juger. Pendant ce temps, ta respiration continue son travail, naturellement." },
      { label: "Fatigue Oculaire", detail: "Tu vas peut-être commencer à remarquer que tes paupières deviennent un peu plus lourdes. C'est normal. Le simple fait de garder les yeux ouverts demande un effort, et cet effort peut commencer à se faire sentir. Peut-être une légère sensation de chaleur, peut-être une envie de cligner plus souvent. Tu peux laisser ces sensations être présentes, sans rien y changer." },
      { label: "Invitation Fermeture", detail: "Et à un moment qui te conviendra, sans avoir à décider, tes paupières vont devenir si lourdes qu'elles préféreront se fermer. Tu peux laisser cela arriver. Tu peux même les aider, si tu le souhaites, en les laissant se fermer maintenant. Et au moment où elles se ferment, quelque chose de doux peut se produire à l'intérieur : un soulagement, comme quand on rentre dans une pièce calme après une journée bruyante." },
      { label: "Installation", detail: "Tes yeux sont fermés maintenant, et ils peuvent rester fermés pendant tout le temps de notre travail. Ils savent ce qu'ils ont à faire : se reposer. Pendant ce temps, ton attention peut se tourner vers l'intérieur, là où il y a de la place pour ce que nous allons faire ensemble." }
      ],
    }],
  }],
  outils: [
    { name: "Concentration soutenue", type: "Levier", icon: "🎯", desc: "Induction par focalisation visuelle et fatigue oculaire" },
    { name: "Fatigue physiologique des paupières", type: "Levier", icon: "🎯", desc: "Induction par focalisation visuelle et fatigue oculaire" },
    { name: "Suggestions ratifiantes", type: "Levier", icon: "🎯", desc: "Induction par focalisation visuelle et fatigue oculaire" },
    { name: "Concentration", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Détente", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "7 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_602: ProtocolDetail = {
  protocolId: 602,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction par balayage corporel descendant ou ascendant, en relaxant successivement chaque zone du corps. Méthode rassurante, transparente, particulièrement utile pour patients somatiques ou anxieux.",
  indications: ["Patients très kinesthésiques", "Anxiété somatique, tensions chroniques", "Patients qui ont du mal avec l'imagerie", "Première séance pour personnes méfiantes envers l'hypnose", "Préparation au sommeil"],
  contraindications: ["Patients dissociés du corps qui peuvent être déstabilisés par la focalisation corporelle", "Douleurs chroniques très intenses sans préparation", "Patients très impatients qui supportent mal la lenteur"],
  programs: [{
    id: "principal",
    title: "Induction par relaxation progressive",
    icon: "◑",
    duration: "12 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction par relaxation progressive",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Accueil", detail: "Installe-toi de la manière la plus confortable possible. Tu peux fermer les yeux quand tu te sens prêt. Nous allons traverser ton corps ensemble, sans rien forcer. Juste rendre visite à chaque partie, et lui permettre de se reposer un peu." },
      { label: "Visage", detail: "Commence par ton visage. Tu peux remarquer ton front, et le laisser devenir lisse, comme une page vierge. Tes sourcils se desserrent. Tes paupières sont fines et tranquilles. Tes joues s'allègent. Ta mâchoire se déverrouille, légèrement, juste assez pour que les dents ne soient plus en contact. Ta langue se pose. Tout ton visage devient calme." },
      { label: "Cou Epaules", detail: "Descends maintenant vers ton cou. Sens si quelque chose y est tenu, et propose à cette partie de se relâcher. Tes épaules peuvent descendre, vraiment descendre, comme si elles renonçaient à porter ce qui n'a pas besoin d'être porté maintenant. Tes omoplates se déposent dans le dossier." },
      { label: "Bras Mains", detail: "Tes bras suivent. Tes biceps, tes coudes, tes avant-bras, tes poignets, tes mains, tes doigts. Chaque articulation peut s'ouvrir un peu. Tes mains deviennent plus lourdes, peut-être un peu plus chaudes. Le bout de tes doigts peut commencer à picoter, doucement." },
      { label: "Torse", detail: "Reviens au centre. Ta poitrine se soulève et redescend au rythme de ta respiration. Ton sternum s'apaise. Ton dos, depuis tes omoplates jusqu'à la base de ta colonne, s'allonge un peu, vertèbre par vertèbre. Ton ventre se déplie, sans rien serrer." },
      { label: "Bassin Jambes", detail: "Ton bassin se confie au siège. Tes hanches s'ouvrent. Tes cuisses deviennent denses et tranquilles. Tes genoux s'assouplissent. Tes mollets, tes chevilles, tes pieds. Chaque orteil. Tu peux sentir le contact avec le sol, et te laisser être porté par lui." },
      { label: "Integration", detail: "Maintenant, sens ton corps tout entier. De la tête aux pieds. Il est là, présent, relâché, accueilli. Tu n'as rien à faire pour qu'il reste comme ça. Il sait." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience corporelle", type: "Levier", icon: "🎯", desc: "Balayage corporel relaxant" },
    { name: "Relâchement musculaire progressif", type: "Levier", icon: "🎯", desc: "Balayage corporel relaxant" },
    { name: "Synchronisation respiratoire", type: "Levier", icon: "🎯", desc: "Balayage corporel relaxant" },
    { name: "Présence", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Habiter son corps", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_603: ProtocolDetail = {
  protocolId: 603,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction permissive par conversation orientée, utilisation de truismes, de sensations naturelles déjà présentes, et de suggestions indirectes. Sans annonce d'hypnose. Convient aux patients résistants ou défensifs.",
  indications: ["Patients qui se disent non hypnotisables ou méfiants", "Patients qui ont eu une mauvaise expérience d'hypnose", "Enfants et adolescents qui rejettent les approches formelles", "Patients très contrôlants", "Premier entretien d'évaluation"],
  contraindications: ["Demande explicite du patient pour une hypnose formelle classique", "Cadre d'urgence qui demande une transe rapide et profonde"],
  programs: [{
    id: "principal",
    title: "Induction conversationnelle éricksonienne légère",
    icon: "◑",
    duration: "15 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction conversationnelle éricksonienne légère",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Amorce", detail: "Il y a beaucoup de manières de se sentir bien dans une séance comme celle-ci. Certaines personnes aiment fermer les yeux tout de suite, d'autres préfèrent les garder ouverts un moment. Tu peux faire ce qui te convient. Et pendant que tu fais ce qui te convient, tu peux aussi remarquer que tu es assis ici, que tu respires, que tu m'écoutes." },
      { label: "Truismes", detail: "Tu sais déjà qu'on peut être attentif à plusieurs choses en même temps. À ma voix par exemple, et à la sensation de ton dos contre le siège. Ou aux bruits autour, et à ce qui se passe à l'intérieur. Tu fais ça naturellement, tout le temps. Et pendant que tu fais ça, ta respiration continue, sans que tu aies besoin de t'en occuper." },
      { label: "Orientation Interieure", detail: "C'est curieux comme on peut, parfois, écouter quelqu'un et en même temps être ailleurs. Comme quand on conduit en pensant à autre chose, ou quand on regarde un film en se rappelant quelque chose d'ancien. Une partie de toi est ici, avec moi, et une autre partie peut commencer à s'occuper d'elle-même, à sa façon." },
      { label: "Ratification Emergente", detail: "Et tu remarques peut-être qu'au fur et à mesure que je parle, quelque chose se modifie. Peut-être que tes paupières clignent un peu plus lentement. Peut-être que ta main que tu sentais avant, tu la sens un peu différemment maintenant. Peut-être que ta respiration s'est un peu allongée. Tu n'as pas besoin de vérifier. Ces choses se font." },
      { label: "Permission", detail: "Je ne sais pas exactement ce que tu vis en ce moment, et c'est très bien comme ça. Toi, tu le sais, ou une partie de toi le sait. Tu peux laisser ce qui doit se passer se passer. Tu n'as pas besoin de faire quoi que ce soit de particulier. Juste continuer à écouter, ou à ne pas écouter, selon ce qui te convient." }
      ],
    }],
  }],
  outils: [
    { name: "Truismes (énoncés évidemment vrais)", type: "Levier", icon: "🎯", desc: "Induction permissive par conversation et truismes" },
    { name: "Yes-set (enchaînement d'acquiescements)", type: "Levier", icon: "🎯", desc: "Induction permissive par conversation et truismes" },
    { name: "Ratification progressive", type: "Levier", icon: "🎯", desc: "Induction permissive par conversation et truismes" },
    { name: "Permission", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Liberté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "15 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_604: ProtocolDetail = {
  protocolId: 604,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction kinesthésique avec démonstration : la main du patient se soulève apparemment toute seule sous l'effet de suggestions de légèreté. Ratification puissante de la transe pour patients qui ont besoin de preuves.",
  indications: ["Patients sceptiques qui demandent à 'voir' que l'hypnose marche", "Démonstrations pédagogiques", "Patients très kinesthésiques", "Préparation à des protocoles utilisant la dissociation des mains (catalepsie, hypoanesthésie)"],
  contraindications: ["Pathologies neurologiques affectant la motricité du bras", "Patients qui craignent de perdre le contrôle (commencer par une induction plus rassurante)", "Très jeunes enfants"],
  programs: [{
    id: "principal",
    title: "Induction par lévitation de la main",
    icon: "◑",
    duration: "10 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction par lévitation de la main",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Pose Mains", detail: "Pose tes deux mains sur tes cuisses, paumes vers le bas. Sens bien le contact. Le poids de chaque main sur le tissu. Prends un moment pour vraiment sentir tes mains. Elles sont là, deux mains posées, qui ont travaillé toute la journée." },
      { label: "Dissociation Initiale", detail: "Maintenant, porte ton attention plus particulièrement sur ta main droite. Sens son poids, sa température, ses points de contact. Pendant ce temps, ta main gauche reste tranquille, elle, elle continue son travail de main-qui-se-repose. Mais ta main droite va vivre quelque chose de différent." },
      { label: "Legereté", detail: "Imagine, ou laisse-toi sentir, que quelque chose change autour de ta main droite. Comme si l'air au-dessus d'elle devenait plus doux, plus fin, presque comme un courant ascendant tiède. Tu peux peut-être commencer à sentir un picotement dans le bout des doigts. Ou une vibration légère dans la paume. Quelque chose d'inhabituel. C'est le début." },
      { label: "Amplification", detail: "Cette légèreté grandit. C'est comme si ta main droite oubliait peu à peu d'être lourde. Comme si elle commençait à se demander pourquoi elle resterait posée. Elle devient curieuse de la possibilité de s'élever. Tu n'as rien à faire. Tu n'as pas à la soulever. C'est elle qui décide. Et tu peux observer ce qui se passe avec curiosité." },
      { label: "Levitation", detail: "À un moment, sans que tu y sois pour rien, un doigt va peut-être bouger. Puis un autre. Et puis toute la main va commencer à se soulever, doucement, par petites secousses peut-être, ou d'un mouvement plus fluide. Tu observes, et tu laisses faire. Plus elle s'élève, plus elle devient légère. Plus elle est légère, plus elle veut s'élever. Et plus elle s'élève, plus tu rentres profondément à l'intérieur de toi." },
      { label: "Ratification", detail: "Et quand ta main est arrivée là où elle voulait aller, tu peux la laisser flotter un moment. Elle est là, suspendue, sans effort. C'est ta main, et pourtant elle n'obéit pas tout à fait à ce que tu croyais commander. Quelque chose d'autre est à l'œuvre. Ce quelque chose, c'est exactement ce que nous allons utiliser dans notre travail." },
      { label: "Descente Ou Maintien", detail: "Quand tu seras prêt, ta main pourra redescendre, ou rester là, comme tu préfères. Si elle redescend, elle le fera à son rythme, et chaque centimètre vers le bas peut t'enfoncer un peu plus dans cette tranquillité que tu viens de découvrir." }
      ],
    }],
  }],
  outils: [
    { name: "Phénomène idéomoteur", type: "Levier", icon: "🎯", desc: "Induction kinesthésique par phénomène idéomoteur" },
    { name: "Suggestions d'allègement progressif", type: "Levier", icon: "🎯", desc: "Induction kinesthésique par phénomène idéomoteur" },
    { name: "Ratification par auto-observation", type: "Levier", icon: "🎯", desc: "Induction kinesthésique par phénomène idéomoteur" },
    { name: "Surprise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "10 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_605: ProtocolDetail = {
  protocolId: 605,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Induction",
  description: "Induction de quelques secondes pour patients déjà entraînés, par activation d'un signal d'auto-induction préalablement installé (geste, respiration, mot-clé). Idéale pour les séances de suivi ou l'usage en autohypnose.",
  indications: ["Patients ayant déjà eu plusieurs séances et installé un signal personnel", "Séances de suivi rapides", "Auto-hypnose entre les séances", "Usage en situation (avant un soin, avant une compétition, avant un examen)", "Cabinet sans temps d'induction longue disponible"],
  contraindications: ["Première séance, signal non installé", "Patient en grande détresse qui a besoin d'un cadre plus contenant"],
  programs: [{
    id: "principal",
    title: "Induction rapide par signal personnel",
    icon: "◑",
    duration: "2 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Induction rapide par signal personnel",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Tu connais maintenant ce signal que nous avons installé ensemble. Tu peux l'activer quand tu te sens prêt." },
      { label: "Activation", detail: "Active-le. Et au moment où tu l'actives, prends une respiration profonde, et laisse l'expiration t'emmener vers cet endroit que tu connais bien maintenant." },
      { label: "Arrivee", detail: "Voilà. Tu es là. Plus rapidement que la première fois. Plus facilement. Ton corps et ton esprit savent maintenant le chemin. Et chaque fois que tu refais ce trajet, il devient plus naturel, plus immédiat." }
      ],
    }],
  }],
  outils: [
    { name: "Ancrage conditionné", type: "Levier", icon: "🎯", desc: "Réactivation d'ancrage préalable" },
    { name: "Mémoire de transe", type: "Levier", icon: "🎯", desc: "Réactivation d'ancrage préalable" },
    { name: "Économie de temps", type: "Levier", icon: "🎯", desc: "Réactivation d'ancrage préalable" },
    { name: "Familiarité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Efficacité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "2 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur induction ne fonctionne pas pour moi"],
};

const k_606: ProtocolDetail = {
  protocolId: 606,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Approfondissement",
  description: "Approfondissement classique par comptage de 20 à 1, ou de 10 à 1, avec suggestion d'enfoncement progressif à chaque chiffre. Brique simple et fiable utilisable après n'importe quelle induction.",
  indications: ["Toutes situations cliniques après induction", "Patients qui apprécient le rythme et la structure", "Approfondissement avant travail thérapeutique"],
  contraindications: ["Patients très impatients qui supportent mal la lenteur"],
  programs: [{
    id: "principal",
    title: "Approfondissement par comptage descendant",
    icon: "◑",
    duration: "4 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Approfondissement par comptage descendant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Amorce", detail: "Maintenant que tu es bien installé, je vais compter de vingt à un. À chaque chiffre, tu peux t'enfoncer un peu plus dans cette tranquillité. Tu n'as rien à faire de particulier. Juste laisser le comptage faire son travail." },
      { label: "Comptage", detail: "Vingt... une vague de calme s'étend. Dix-neuf... un peu plus loin à l'intérieur. Dix-huit... ton corps comprend où aller. Dix-sept... ta respiration s'allonge. Seize... encore un peu plus. Quinze... tu te déposes. Quatorze... rien à retenir. Treize... rien à comprendre. Douze... rien à faire. Onze... à mi-chemin. Dix... tu continues à descendre. Neuf... de plus en plus loin du dehors. Huit... de plus en plus présent à toi-même. Sept... la profondeur s'installe. Six... ta confiance grandit. Cinq... tu es presque arrivé. Quatre... ton inconscient prend les commandes. Trois... profond. Deux... très profond. Un... tu es là, exactement où tu dois être." }
      ],
    }],
  }],
  outils: [
    { name: "Rythme régulier", type: "Levier", icon: "🎯", desc: "Comptage descendant avec suggestions cumulatives" },
    { name: "Suggestion d'enfoncement", type: "Levier", icon: "🎯", desc: "Comptage descendant avec suggestions cumulatives" },
    { name: "Cumul progressif", type: "Levier", icon: "🎯", desc: "Comptage descendant avec suggestions cumulatives" },
    { name: "Profondeur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "4 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur approfondissement ne fonctionne pas pour moi"],
};

const k_607: ProtocolDetail = {
  protocolId: 607,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Approfondissement",
  description: "Approfondissement par cycles successifs de transe-éveil-retransition. À chaque cycle, la transe atteinte est plus profonde que la précédente. Très efficace pour patients qui résistent à un approfondissement linéaire.",
  indications: ["Patients qui peinent à approfondir en une fois", "Approche pédagogique pour démontrer la transe", "Patients qui ont besoin de vérifier qu'ils peuvent revenir à volonté"],
  contraindications: ["Patients fragilisés par les transitions répétées", "Cadre d'urgence"],
  programs: [{
    id: "principal",
    title: "Approfondissement par fractionnement",
    icon: "◑",
    duration: "12 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Approfondissement par fractionnement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Amorce", detail: "Tu es maintenant bien installé dans cet état tranquille. Nous allons faire quelque chose d'intéressant : tu vas remonter un peu, juste un peu, puis redescendre, et tu remarqueras que tu vas plus loin que la première fois." },
      { label: "Remontee 1", detail: "Commence par remonter doucement, sans ouvrir les yeux. Reviens un peu vers la surface, comme un nageur qui remonte sans se presser. Tu sens à nouveau ton corps, la pièce, ma voix." },
      { label: "Descente 2", detail: "Et maintenant, redescends. Mais cette fois-ci, ton corps connaît le chemin. Il sait où il va. Et il y va plus facilement, plus profondément. Laisse-toi descendre. Plus bas que tout à l'heure. Plus loin." },
      { label: "Remontee 2", detail: "À nouveau, remonte légèrement. Pas complètement. Juste un peu. Et observe : tu remarques peut-être que même quand tu remontes, il reste quelque chose de cette profondeur en toi." },
      { label: "Descente 3", detail: "Et redescends. Encore plus loin que la fois précédente. Ton inconscient apprend. Ton corps apprend. Plus tu fais ce trajet, plus il devient naturel, plus tu peux aller loin." },
      { label: "Arrivee", detail: "Tu peux rester maintenant à cette profondeur, qui est plus grande que ce que tu aurais imaginé au début. Et c'est exactement ce qu'il faut." }
      ],
    }],
  }],
  outils: [
    { name: "Effet de comparaison", type: "Levier", icon: "🎯", desc: "Cycles transe-éveil partiel-retransition" },
    { name: "Apprentissage par répétition", type: "Levier", icon: "🎯", desc: "Cycles transe-éveil partiel-retransition" },
    { name: "Confiance dans la réversibilité", type: "Levier", icon: "🎯", desc: "Cycles transe-éveil partiel-retransition" },
    { name: "Apprentissage", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sécurité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur approfondissement ne fonctionne pas pour moi"],
};

const k_608: ProtocolDetail = {
  protocolId: 608,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Approfondissement",
  description: "Approfondissement par imagerie kinesthésique de descente : ascenseur intérieur, racines qui s'enfoncent, plongée dans une eau calme. Choix de l'image selon le patient.",
  indications: ["Patients très visuels ou kinesthésiques", "Approfondissement après induction par fixation ou conversation", "Préparation à des protocoles d'exploration intérieure"],
  contraindications: ["Claustrophobie pour l'ascenseur", "Phobie de l'eau pour la plongée", "Vertige pour les images de descente vertigineuse"],
  programs: [{
    id: "principal",
    title: "Approfondissement par image de descente",
    icon: "◑",
    duration: "6 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Approfondissement par image de descente",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Choix Image", detail: "Tu vas choisir, ou laisser ton inconscient choisir, une image de descente. Trois possibilités : un ascenseur intérieur qui descend en silence, ou des racines qui s'enfoncent doucement dans une terre meuble, ou une plongée tranquille dans une eau calme et chaude. Prends celle qui te parle le plus. Elle peut même se présenter à toi sans que tu décides." },
      { label: "Descente Ascenseur", detail: "[Variante ascenseur] Tu es dans un ascenseur silencieux et confortable. Les portes se ferment doucement. L'ascenseur commence à descendre. Tu sens cette légère sensation dans le ventre, qui te dit que tu descends. Les étages défilent : moins un, moins deux, moins trois, moins quatre, moins cinq. À chaque étage, tu vas plus profond à l'intérieur de toi." },
      { label: "Descente Racines", detail: "[Variante racines] Imagine que depuis la base de ta colonne vertébrale, des racines commencent à pousser. Elles descendent dans le siège, traversent le sol, et s'enfoncent dans la terre. Lentement, sans effort. Elles trouvent leur chemin entre les pierres et les couches de terre, plus profond, plus profond encore. Tu te sens enraciné, soutenu, calme." },
      { label: "Descente Eau", detail: "[Variante eau] Tu glisses doucement dans une eau accueillante, à la température exacte de ton corps. Tu te laisses descendre. L'eau te porte. Plus tu descends, plus elle est calme, plus elle est silencieuse. La lumière du dessus s'atténue, sans inquiétude. Tu trouves un endroit où l'eau est exactement comme tu la veux." },
      { label: "Arrivee", detail: "Tu es arrivé maintenant à un endroit profond et bon. Tu peux y rester aussi longtemps que nécessaire." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie multisensorielle", type: "Levier", icon: "🎯", desc: "Imagerie kinesthésique de descente" },
    { name: "Synesthésie kinesthésique", type: "Levier", icon: "🎯", desc: "Imagerie kinesthésique de descente" },
    { name: "Choix de la métaphore par le patient", type: "Levier", icon: "🎯", desc: "Imagerie kinesthésique de descente" },
    { name: "Profondeur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Enracinement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "6 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur approfondissement ne fonctionne pas pour moi"],
};

const k_609: ProtocolDetail = {
  protocolId: 609,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Approfondissement",
  description: "Approfondissement par accumulation de ratifications : le thérapeute nomme des phénomènes hypnotiques observables ou subjectivement présents, et les utilise pour confirmer et amplifier la transe.",
  indications: ["Patients qui doutent d'être en transe", "Travail subtil avec patients sensibles", "Préparation à un travail demandant une transe stable"],
  contraindications: ["Patients qui ont besoin de structure forte"],
  programs: [{
    id: "principal",
    title: "Approfondissement par ratification progressive",
    icon: "◑",
    duration: "8 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Approfondissement par ratification progressive",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Observation Externe", detail: "Tu remarques peut-être que ta respiration s'est ralentie. Que tes paupières sont devenues plus lourdes. Que ton visage s'est apaisé. Ce sont des signes que ton corps connaît. Il sait ce qu'il fait." },
      { label: "Observation Interne", detail: "Tu peux peut-être aussi remarquer, à l'intérieur, que les bruits autour de toi sont devenus moins importants. Que le temps semble s'être un peu modifié. Que ce que je dis arrive vers toi sans que tu aies à faire l'effort d'écouter. Ces choses-là confirment que tu es bien là où tu dois être." },
      { label: "Amplification", detail: "Et chaque fois que tu remarques l'une de ces choses, tu peux t'enfoncer un peu plus. Plus tu en remarques, plus tu es là. Plus tu es là, plus tu en remarques d'autres. C'est un cercle qui s'auto-renforce, doucement." },
      { label: "Arrivee", detail: "Maintenant, tu n'as plus besoin de rien remarquer du tout. Tu es simplement présent à ce qui se passe. Et ça suffit." }
      ],
    }],
  }],
  outils: [
    { name: "Observation fine du patient", type: "Levier", icon: "🎯", desc: "Ratification progressive et yes-set" },
    { name: "Accumulation de truismes ratifiants", type: "Levier", icon: "🎯", desc: "Ratification progressive et yes-set" },
    { name: "Confirmation par auto-observation", type: "Levier", icon: "🎯", desc: "Ratification progressive et yes-set" },
    { name: "Confirmation", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "8 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur approfondissement ne fonctionne pas pour moi"],
};

const k_610: ProtocolDetail = {
  protocolId: 610,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Lieu ressource",
  description: "Installation d'un lieu intérieur de sécurité absolue, accessible à tout moment. Pierre angulaire de tout travail hypnotique, particulièrement en contexte traumatique. À installer en première ou deuxième séance.",
  indications: ["Pour tous les patients", "Indispensable avant travail traumatique", "Ressource d'urgence en cas d'abréaction", "Ancrage de base réutilisable dans tous les protocoles"],
  contraindications: ["Aucune. Si le patient ne trouve aucun lieu, on construit ensemble un lieu imaginaire"],
  programs: [{
    id: "principal",
    title: "Lieu sûr fondamental",
    icon: "◑",
    duration: "20 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Lieu sûr fondamental",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Tu vas maintenant te laisser découvrir un endroit qui t'appartient en propre. Un endroit où tu te sens entièrement en sécurité. Cet endroit peut être réel, un lieu que tu connais. Il peut être imaginaire, un lieu que tu n'as jamais vu mais qui t'appelle. Il peut être un mélange des deux. Laisse cet endroit venir à toi, sans le chercher activement. Quelque chose va se présenter." },
      { label: "Visualisation", detail: "Quand cet endroit est là, prends le temps de l'observer. Qu'est-ce que tu vois autour de toi ? Sommes-nous en intérieur ou en extérieur ? Y a-t-il de la lumière, et de quelle qualité ? Quelles sont les couleurs dominantes ? Y a-t-il des éléments naturels — de l'eau, des arbres, des rochers, du ciel ? Y a-t-il des éléments construits — un mur, un toit, un objet familier ?" },
      { label: "Kinesthesie", detail: "Maintenant que tu vois ton endroit, sens-le. Quelle est la température ? L'air est-il sec, humide, frais, tiède ? Si tu es assis ou allongé, qu'est-ce qui te porte ? Comment tes pieds se posent-ils ? Y a-t-il une brise, un mouvement ? Sens ton corps dans cet endroit." },
      { label: "Audition", detail: "Écoute ce qui s'entend ici. Peut-être un silence très tranquille. Peut-être de l'eau qui coule, du vent dans les feuilles, le chant lointain d'un oiseau, le crépitement d'un feu. Peut-être une musique. Peut-être tes propres pas. Tout ce qui s'entend ici fait partie de toi." },
      { label: "Olfaction", detail: "Et l'air, quelle est son odeur ? L'odeur de la terre après la pluie, de l'herbe coupée, du bois qui chauffe, de l'eau salée, d'une fleur particulière. L'odeur de ce lieu est unique. Elle te ramènera ici à chaque fois." },
      { label: "Appropriation", detail: "Cet endroit t'appartient. Personne d'autre que ceux que tu invites n'y a accès. Ici, tu es entièrement toi-même. Ici, rien ne peut t'atteindre de ce qui te fait du mal ailleurs. Ici, tu es souverain. Prends le temps de bien sentir cela : tu es chez toi, profondément chez toi." },
      { label: "Ancrage", detail: "Pour pouvoir revenir ici facilement, tu vas associer cet endroit à un geste discret. Joins ton pouce et ton index, doucement, en respirant lentement. Voilà. Ce geste, à partir de maintenant, est la porte vers ce lieu. Chaque fois que tu le feras, en respirant ainsi, tu retrouveras quelque chose de cette qualité d'être qui est la tienne ici." },
      { label: "Post Hypnotique", detail: "Tu reviendras ici souvent, dans tes auto-hypnoses, dans tes moments de besoin, parfois sans même t'en apercevoir. Et chaque fois que tu y reviendras, ce lieu te sera plus familier, plus présent, plus disponible." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie multisensorielle", type: "Levier", icon: "🎯", desc: "Installation d'une ressource ancrée multisensorielle" },
    { name: "Personnalisation totale", type: "Levier", icon: "🎯", desc: "Installation d'une ressource ancrée multisensorielle" },
    { name: "Ancrage gestuel associé", type: "Levier", icon: "🎯", desc: "Installation d'une ressource ancrée multisensorielle" },
    { name: "Sécurité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Refuge", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lieu ressource ne fonctionne pas pour moi"],
};

const k_611: ProtocolDetail = {
  protocolId: 611,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Lieu ressource",
  description: "Variante du lieu sûr orientée vers la dimension sacrée et spirituelle. Lieu de recueillement, de connexion à plus grand que soi. Particulièrement adapté à l'approche thérapeutique-spirituelle de KIIKA.",
  indications: ["Patients en quête de sens", "Travail sur l'identité profonde et l'âme (Ka)", "Préparation à des rituels de transition", "Patients en lien avec une dimension spirituelle"],
  contraindications: ["Patients pour qui le registre sacré est conflictuel ou douloureux (préférer K-BASE-011)"],
  programs: [{
    id: "principal",
    title: "Sanctuaire intérieur",
    icon: "◑",
    duration: "25 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Sanctuaire intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Il existe en toi un endroit que peu de personnes connaissent, parce que peu prennent le temps d'y aller. Un endroit où ce qui est essentiel devient plus visible. Tu vas le laisser apparaître maintenant. Ne le cherche pas. Laisse-le venir." },
      { label: "Apparition", detail: "Quand ce lieu se montre à toi, tu remarques peut-être tout de suite quelque chose de différent. Une qualité dans l'air. Une lumière particulière. Un silence qui n'est pas vide, mais plein. Comme si l'endroit savait que tu venais, et qu'il s'était préparé." },
      { label: "Exploration", detail: "Regarde autour de toi. Ce sanctuaire t'est propre. Il peut ressembler à un temple, à une clairière, à une grotte, à une simple pièce. Ce qui compte, ce n'est pas la forme, c'est la qualité. La qualité de ce qui s'y respire." },
      { label: "Centre", detail: "Au cœur de cet endroit, il y a un point. Un centre. Cela peut être un autel, une source, un arbre, une pierre, une flamme. Ou simplement un endroit où se tenir. Approche-toi. C'est là que tu peux te recueillir." },
      { label: "Recueillement", detail: "Quand tu es au centre, prends une respiration profonde, et laisse-toi ressentir ce que c'est, d'être à cet endroit-là. Quelque chose en toi se dépose. Quelque chose en toi se redresse. Tu n'es pas seul ici, même si personne d'autre n'y est. Quelque chose de plus grand que toi y est présent. Tu peux l'appeler comme tu veux : la vie, le souffle, le silence, l'âme du monde, ce qui se nomme et ce qui ne se nomme pas. Cela te tient." },
      { label: "Connexion", detail: "Tu peux poser une question à ce silence, si tu le souhaites. Pas avec ta tête. Avec ton ventre, avec ton cœur. Et tu peux écouter. La réponse ne viendra peut-être pas en mots. Elle viendra peut-être plus tard, ou autrement. Ce qui compte, c'est que tu as fait l'expérience d'un lieu où tu peux demander." },
      { label: "Ancrage", detail: "Avant de quitter cet endroit, choisis un geste qui te ramènera ici. Par exemple, pose la paume de ta main sur ton sternum, doucement, et prends une respiration profonde. Ce geste est la clef de ton sanctuaire. Tu peux y revenir chaque jour si tu le souhaites." },
      { label: "Retour", detail: "Tu reviens maintenant doucement vers la pièce, en gardant en toi la mémoire de ce lieu. Tu sais qu'il existe, et qu'il t'attend." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie sacrée non confessionnelle", type: "Levier", icon: "🎯", desc: "Lieu sacré intérieur multisensoriel" },
    { name: "Verticalité (sol-ciel)", type: "Levier", icon: "🎯", desc: "Lieu sacré intérieur multisensoriel" },
    { name: "Présence et silence", type: "Levier", icon: "🎯", desc: "Lieu sacré intérieur multisensoriel" },
    { name: "Sacré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Recueillement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lieu ressource ne fonctionne pas pour moi"],
};

const k_612: ProtocolDetail = {
  protocolId: 612,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Lieu ressource",
  description: "Lieu ressource sous forme de jardin personnel, espace d'exploration et de soin. Permet le travail métaphorique sur la croissance, les saisons, les semis. Très utilisable avec enfants et adolescents.",
  indications: ["Patients amateurs de nature", "Enfants et adolescents", "Travail sur la croissance personnelle", "Métaphores du temps qui passe et de la transformation"],
  contraindications: ["Aversion à la nature ou aux jardins"],
  programs: [{
    id: "principal",
    title: "Jardin intérieur",
    icon: "◑",
    duration: "18 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Jardin intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Arrivee", detail: "Imagine maintenant que tu pousses un petit portail. Derrière ce portail, il y a un jardin qui t'appartient. Pas un jardin parfait. Un jardin vivant. Le tien." },
      { label: "Decouverte", detail: "Entre. Regarde. Quelles plantes y poussent ? Y a-t-il des arbres ? Des fleurs ? Un coin de potager ? Une pelouse, un bassin, un sentier ? Ton jardin est comme tu en as besoin aujourd'hui." },
      { label: "Etat Actuel", detail: "Observe maintenant comment va ton jardin. Y a-t-il des endroits qui demandent du soin ? Des coins négligés où la terre s'est durcie ? Des plantes qui ont soif, ou au contraire qui débordent ? Et y a-t-il des endroits qui vont déjà très bien, des plantes qui prospèrent, des espaces lumineux ?" },
      { label: "Action", detail: "Tu peux faire quelque chose ici, si tu veux. Arroser une plante qui en a besoin. Enlever une mauvaise herbe qui prend trop de place. Planter une graine pour quelque chose de nouveau qui pourrait pousser. Ou simplement t'asseoir à un endroit qui te plaît." },
      { label: "Observation Temps", detail: "Ce jardin n'est pas figé. Les saisons y passent. Ce que tu plantes aujourd'hui ne pousse pas tout de suite. Mais tout pousse, à son rythme, si tu lui en laisses le temps. Et toi-même, tu peux revenir le voir, le visiter, prendre soin de lui, observer ce qui change." },
      { label: "Ressource", detail: "Quand tu as besoin d'un endroit pour respirer, pour réfléchir, pour simplement être, tu peux revenir ici. Le jardin sera là. Il t'attendra. Et chaque fois, il aura un peu changé, comme tu auras toi-même un peu changé." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie naturelle", type: "Levier", icon: "🎯", desc: "Lieu ressource avec dimension de soin et de croissance" },
    { name: "Métaphore de la croissance", type: "Levier", icon: "🎯", desc: "Lieu ressource avec dimension de soin et de croissance" },
    { name: "Possibilité d'action (planter, arroser, cueillir)", type: "Levier", icon: "🎯", desc: "Lieu ressource avec dimension de soin et de croissance" },
    { name: "Vivant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Croissance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "18 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lieu ressource ne fonctionne pas pour moi"],
};

const k_613: ProtocolDetail = {
  protocolId: 613,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Lieu ressource",
  description: "Lieu ressource sous forme de cabane ou abri personnel : espace contenant, chaleureux, fortement délimité. Particulièrement adapté aux patients ayant besoin d'un sentiment de protection forte.",
  indications: ["Patients anxieux ou hypervigilants", "Trauma avec besoin de contenance forte", "Enfants ayant peur du dehors", "Patients qui ont besoin de sentir des limites claires"],
  contraindications: ["Claustrophobie", "Histoire d'enfermement traumatique"],
  programs: [{
    id: "principal",
    title: "Cabane refuge",
    icon: "◑",
    duration: "15 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Cabane refuge",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Arrivee", detail: "Imagine que tu te tiens devant une petite cabane. Une cabane à toi. Elle peut être en bois, en pierre, en n'importe quel matériau qui t'inspire confiance. Elle est exactement à ta taille — assez grande pour être dedans confortablement, assez petite pour bien sentir ses murs autour de toi." },
      { label: "Entree", detail: "Tu pousses la porte. À l'intérieur, il fait bon. La lumière est douce. Peut-être la lumière d'une lampe, d'une bougie, d'un feu. Peut-être la lumière du jour qui passe par une fenêtre. Tu refermes la porte derrière toi. Elle se ferme bien. Personne ne peut entrer ici sans que tu le décides." },
      { label: "Amenagement", detail: "Regarde comment cette cabane est aménagée. Il y a un endroit pour t'asseoir ou t'allonger, qui est exactement ce dont tu as besoin. Peut-être un fauteuil profond, un canapé, un lit, un tapis épais. Il y a peut-être un objet qui te rassure : un livre, une couverture, une tasse, un objet familier." },
      { label: "Installation", detail: "Installe-toi à ta place. Sens les murs autour de toi. Sens la chaleur de l'intérieur. Sens le silence ou les bruits feutrés du dehors qui ne te concernent plus. Ici, tu es en sécurité absolue. Tu peux entendre le vent contre les murs, et savoir qu'il ne peut pas te toucher. Tu peux entendre la pluie sur le toit, et savoir que tu es au sec." },
      { label: "Souverainete", detail: "Cette cabane est entièrement à toi. Tu décides qui y entre. Tu décides quand tu en sors. Tu peux y rester aussi longtemps que tu veux. Personne ne peut frapper à la porte si tu n'as pas envie d'ouvrir." },
      { label: "Ancrage", detail: "Avant de sortir d'ici, choisis un geste qui te ramènera. Par exemple, croise tes bras sur ta poitrine en respirant calmement. Voilà ta clef. Tu peux revenir ici à tout moment, simplement en faisant ce geste." }
      ],
    }],
  }],
  outils: [
    { name: "Délimitation forte", type: "Levier", icon: "🎯", desc: "Lieu ressource hyper-contenant" },
    { name: "Chaleur et confort", type: "Levier", icon: "🎯", desc: "Lieu ressource hyper-contenant" },
    { name: "Petite dimension protectrice", type: "Levier", icon: "🎯", desc: "Lieu ressource hyper-contenant" },
    { name: "Refuge", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Contenance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "15 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lieu ressource ne fonctionne pas pour moi"],
};

const k_614: ProtocolDetail = {
  protocolId: 614,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Lieu ressource",
  description: "Lieu ressource organisé autour d'un élément aquatique (rivière, lac, mer, source, bain). Offre des qualités spécifiques : fluidité, contenance liquide, lavage symbolique, dépose des charges.",
  indications: ["Patients avec affinité pour l'eau", "Travail de dépôt et de lavage symbolique", "Patients tendus qui ont besoin d'une qualité fluide et mouvante", "Préparation au sommeil"],
  contraindications: ["Phobie de l'eau ou trauma aquatique (noyade, etc.)"],
  programs: [{
    id: "principal",
    title: "Eau ressource",
    icon: "◑",
    duration: "18 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Eau ressource",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Choix Eau", detail: "Tu vas choisir, ou laisser ton inconscient choisir, une eau qui te parle. Cela peut être une rivière qui coule entre des berges paisibles. Un lac immobile sous un ciel lumineux. Le bord d'une mer ou d'un océan. Une source qui sort d'une roche. Un grand bain naturel chaud. Laisse l'eau qui te convient venir à toi." },
      { label: "Arrivee", detail: "Tu arrives au bord de cette eau. Prends le temps de la regarder. La qualité de sa lumière, ses reflets, son mouvement ou son immobilité. La couleur précise qu'elle prend selon le temps qu'il fait dans ce lieu." },
      { label: "Audition", detail: "Écoute son bruit. Le ruissellement, le clapotis, le silence d'un lac qui ne fait presque aucun son, le ressac régulier d'une mer, le glouglou d'une source. Ce son t'apaise plus que tu ne l'imagines." },
      { label: "Contact", detail: "Approche-toi. Tu peux mettre la main dans l'eau, ou un pied, ou plus si tu le souhaites. Sens sa température : fraîche, tiède, exactement comme tu en as besoin. Sens sa texture, sa densité, le contact avec ta peau." },
      { label: "Immersion Optionnelle", detail: "Si tu le souhaites, tu peux te laisser porter par cette eau. Pas la subir, te laisser porter. L'eau te tient, sans effort de ta part. Elle prend ton poids. Elle prend aussi, si tu lui en donnes la permission, ce que tu portes en toi de trop lourd. Elle peut le rincer doucement, l'emporter au loin." },
      { label: "Dépose", detail: "Tu peux confier à cette eau ce qui n'a plus besoin d'être en toi. Une fatigue, une tension, une pensée qui tourne. Pas pour toujours. Juste maintenant. L'eau prend, et l'eau emporte, et l'eau renouvelle." },
      { label: "Retour", detail: "Quand tu es prêt à revenir, tu sors doucement. Tu te sens plus léger. L'eau a fait son travail. Et tu sais que tu peux revenir ici quand tu veux." }
      ],
    }],
  }],
  outils: [
    { name: "Qualité fluide et mouvante", type: "Levier", icon: "🎯", desc: "Lieu ressource aquatique multisensoriel" },
    { name: "Symbole de lavage et de renouvellement", type: "Levier", icon: "🎯", desc: "Lieu ressource aquatique multisensoriel" },
    { name: "Portage par l'élément", type: "Levier", icon: "🎯", desc: "Lieu ressource aquatique multisensoriel" },
    { name: "Fluidité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Renouvellement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "18 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lieu ressource ne fonctionne pas pour moi"],
};

const k_615: ProtocolDetail = {
  protocolId: 615,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Ancrage",
  description: "Installation d'un geste discret (pouce-index, main sur le sternum, paume sur le ventre) qui devient déclencheur d'un état ressource accessible en toute situation, y compris en public.",
  indications: ["Patients ayant besoin d'une ressource accessible en situation", "Anxiété sociale, prise de parole, examens, compétitions", "Maintenance entre les séances"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Ancre kinesthésique discrète",
    icon: "◑",
    duration: "10 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Ancre kinesthésique discrète",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Choix Etat", detail: "Pense maintenant à un état que tu aimerais pouvoir retrouver facilement. Cela peut être le calme, la confiance, la présence à toi-même, la force tranquille. Choisis un état précis, et laisse-le venir à toi." },
      { label: "Amplification", detail: "Quand cet état est là, sens-le bien. Où le ressens-tu dans ton corps ? Comment respires-tu quand cet état est présent ? Quelle est la qualité de tes pensées ? Prends le temps de bien t'installer dans cette qualité d'être." },
      { label: "Geste", detail: "Maintenant que tu es bien dans cet état, choisis un geste discret que tu pourras faire n'importe où sans que cela se voie. Par exemple, joindre ton pouce et ton index. Ou poser le bout de ton index sur le centre de ta paume. Ou poser ta main sur ton sternum. Choisis le geste qui te parle le plus." },
      { label: "Association", detail: "Maintenant, fais ce geste, calmement, en restant pleinement dans l'état que tu as choisi. Et pendant que tu fais ce geste, ton inconscient associe ces deux choses : ce geste précis, et cet état précis. Le geste devient la clef de cet état." },
      { label: "Renforcement", detail: "Relâche le geste. Reviens à ta respiration normale. Puis refais le geste, en laissant l'état revenir. Tu peux remarquer qu'il revient un peu plus vite que tout à l'heure. Recommence encore. À chaque fois, le lien se renforce." },
      { label: "Post Hypnotique", detail: "À partir de maintenant, ce geste t'appartient. Chaque fois que tu le feras, où que tu sois, en respirant calmement, quelque chose de cet état reviendra à toi. Pas toujours avec la même intensité — cela dépend du moment. Mais quelque chose reviendra, suffisamment pour t'aider." }
      ],
    }],
  }],
  outils: [
    { name: "Association état-geste", type: "Levier", icon: "🎯", desc: "Conditionnement gestuel d'un état ressource" },
    { name: "Discrétion sociale", type: "Levier", icon: "🎯", desc: "Conditionnement gestuel d'un état ressource" },
    { name: "Répétition pour renforcement", type: "Levier", icon: "🎯", desc: "Conditionnement gestuel d'un état ressource" },
    { name: "Discrétion", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Disponibilité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "10 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ancrage ne fonctionne pas pour moi"],
};

const k_616: ProtocolDetail = {
  protocolId: 616,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Ancrage",
  description: "Installation d'un schéma respiratoire spécifique (par exemple : inspiration 4 temps, rétention 2 temps, expiration 6 temps) comme déclencheur d'un état de calme accessible à tout moment.",
  indications: ["Anxiété aiguë", "Préparation à effort ou stress", "Patients qui aiment les techniques corporelles concrètes", "Sportifs"],
  contraindications: ["Pathologies respiratoires sévères sans validation médicale", "Hyperventilation chronique"],
  programs: [{
    id: "principal",
    title: "Ancre respiratoire",
    icon: "◑",
    duration: "12 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Ancre respiratoire",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Observation", detail: "Commence par observer ta respiration telle qu'elle est, sans rien changer. Sens son rythme, son amplitude. Tu n'as rien à modifier pour le moment." },
      { label: "Apprentissage", detail: "Maintenant, nous allons installer ensemble un schéma simple. Tu vas inspirer en comptant jusqu'à quatre. Puis retenir doucement, sans forcer, en comptant jusqu'à deux. Puis expirer longuement, en comptant jusqu'à six. C'est l'expiration plus longue qui fait le travail principal." },
      { label: "Pratique", detail: "Essaie. Inspire un... deux... trois... quatre. Retiens un... deux. Expire un... deux... trois... quatre... cinq... six. Parfait. Recommence. Inspire... retiens... expire long. Et encore. À ton rythme. Sans te crisper." },
      { label: "Installation Ressource", detail: "Pendant que tu fais cette respiration, tu remarques peut-être que ton corps se modifie. Le rythme du cœur s'apaise. L'esprit ralentit. Quelque chose en toi reconnaît ce schéma comme un signal de retour au calme. Continue plusieurs cycles, en t'imprégnant de cet état qui s'installe." },
      { label: "Ancrage", detail: "Cette respiration, à partir de maintenant, est ton signal personnel. Trois cycles complets de cette respiration, c'est suffisant pour appeler le calme. Tu peux le faire les yeux ouverts, dans n'importe quelle situation, sans que personne ne le remarque." },
      { label: "Post Hypnotique", detail: "Chaque fois que tu utiliseras cette respiration, quelque chose de l'état que tu vis maintenant reviendra à toi. Et plus tu la pratiques, plus elle devient efficace, plus elle est rapide à agir." }
      ],
    }],
  }],
  outils: [
    { name: "Effet physiologique direct (système parasympathique)", type: "Levier", icon: "🎯", desc: "Conditionnement d'un schéma respiratoire ressource" },
    { name: "Disponibilité universelle", type: "Levier", icon: "🎯", desc: "Conditionnement d'un schéma respiratoire ressource" },
    { name: "Mémoire corporelle", type: "Levier", icon: "🎯", desc: "Conditionnement d'un schéma respiratoire ressource" },
    { name: "Souffle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rythme", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ancrage ne fonctionne pas pour moi"],
};

const k_617: ProtocolDetail = {
  protocolId: 617,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Ancrage",
  description: "Choix et installation d'un mot-clef personnel (mot ressource ou mot inventé) qui devient déclencheur d'un état intérieur. Ancre verbale particulièrement adaptée aux patients qui pensent en mots.",
  indications: ["Patients verbaux", "Compléter une ancre gestuelle ou respiratoire", "Patients qui pratiquent l'auto-suggestion ou la méditation"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Mot-signal personnel",
    icon: "◑",
    duration: "8 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Mot-signal personnel",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Choix Etat", detail: "Pense à l'état dont tu aimerais pouvoir disposer facilement. Confiance, calme, présence, force, douceur. Choisis-en un." },
      { label: "Choix Mot", detail: "Maintenant, laisse venir un mot pour cet état. Pas n'importe quel mot. Le tien. Cela peut être un mot du dictionnaire, un mot inventé, un mot dans une autre langue qui te touche, un prénom, un son. Ne le choisis pas avec ta tête. Laisse-le se présenter. Si plusieurs mots viennent, garde celui qui résonne le plus dans ton ventre." },
      { label: "Appropriation", detail: "Quand tu as ton mot, prononce-le intérieurement plusieurs fois. Sens comment il vibre en toi. Sens si l'état que tu cherchais répond à ce mot. Si oui, c'est le bon. Sinon, laisse venir un autre mot." },
      { label: "Installation", detail: "Maintenant, prononce ton mot intérieurement, et laisse l'état s'installer plus pleinement. Le mot et l'état se renforcent l'un l'autre. Plus tu prononces, plus l'état grandit. Plus l'état est présent, plus le mot prend sa puissance." },
      { label: "Post Hypnotique", detail: "Ce mot t'appartient. Tu peux le prononcer intérieurement à tout moment, dans le métro, avant un rendez-vous, le soir avant de dormir. Chaque fois, quelque chose de cet état viendra à toi. Et plus tu utiliseras ce mot, plus il deviendra puissant pour toi." }
      ],
    }],
  }],
  outils: [
    { name: "Association mot-état", type: "Levier", icon: "🎯", desc: "Conditionnement d'un mot-clef ressource" },
    { name: "Mémoire verbale", type: "Levier", icon: "🎯", desc: "Conditionnement d'un mot-clef ressource" },
    { name: "Auto-suggestion répétée", type: "Levier", icon: "🎯", desc: "Conditionnement d'un mot-clef ressource" },
    { name: "Verbe juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Nomination", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "8 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ancrage ne fonctionne pas pour moi"],
};

const k_618: ProtocolDetail = {
  protocolId: 618,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Ancrage",
  description: "Installation du signal qui permettra au patient d'entrer rapidement en transe seul. Étape clef pour rendre le patient autonome et utilisable avec K-BASE-006 (induction rapide).",
  indications: ["Tous les patients qui vont pratiquer l'auto-hypnose", "Préparation au passage en autonomie", "Maintenance entre les séances"],
  contraindications: ["Patients très fragiles qui ont besoin d'un cadre tenu par le thérapeute encore quelques séances"],
  programs: [{
    id: "principal",
    title: "Signal d'auto-induction",
    icon: "◑",
    duration: "15 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Signal d'auto-induction",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Amorce", detail: "Tu connais maintenant assez bien cet état dans lequel tu te trouves quand tu fais de l'hypnose avec moi. Aujourd'hui, nous allons installer un signal qui te permettra de retrouver cet état toi-même, quand je ne serai pas là." },
      { label: "Choix Signal", detail: "Choisis un signal qui sera ta clef. Ce signal doit être suffisamment précis pour ne pas se déclencher par hasard. Une combinaison de geste et de respiration, par exemple. Ou un mot dit intérieurement, suivi d'une respiration profonde et de la fermeture des yeux. Choisis ce qui te parle." },
      { label: "Test", detail: "Maintenant, alors que tu es bien en transe, fais ce signal. Et pendant que tu le fais, ton inconscient enregistre le lien : ce signal précis, et cet état précis. Le signal devient la porte vers cet état." },
      { label: "Emergence Partielle", detail: "Reviens un peu vers la surface. Pas complètement. Juste un peu. Tu sens encore les traces de la transe en toi." },
      { label: "Test Signal", detail: "Maintenant, refais ton signal. Et observe ce qui se passe. Quelque chose en toi se rappelle, et te ramène vers la profondeur. Pas autant que la première fois — c'est normal. Mais un chemin s'ouvre." },
      { label: "Consolidation", detail: "Recommence ce trajet : remontée légère, signal, redescente. Et encore. À chaque fois, le signal devient plus efficace. Ton inconscient apprend à reconnaître la clef." },
      { label: "Instructions", detail: "À partir de maintenant, ce signal t'appartient. Quand tu seras chez toi, dans un endroit calme, tu pourras l'utiliser pour entrer toi-même en transe. Au début, ce sera moins profond que les séances ici. C'est normal. Avec la pratique, cela deviendra plus simple. Tu pourras y rester aussi longtemps que tu veux, et en sortir simplement en bougeant les doigts et en ouvrant les yeux." }
      ],
    }],
  }],
  outils: [
    { name: "Mémorisation de l'état de transe", type: "Levier", icon: "🎯", desc: "Conditionnement d'un signal d'auto-induction" },
    { name: "Association signal-transe", type: "Levier", icon: "🎯", desc: "Conditionnement d'un signal d'auto-induction" },
    { name: "Renforcement par pratique", type: "Levier", icon: "🎯", desc: "Conditionnement d'un signal d'auto-induction" },
    { name: "Autonomie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "15 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ancrage ne fonctionne pas pour moi"],
};

const k_619: ProtocolDetail = {
  protocolId: 619,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Dissociation",
  description: "Installation d'une position d'observateur intérieur qui regarde l'expérience sans s'y identifier. Brique fondamentale pour tout travail dissociatif, particulièrement utile face à du contenu chargé.",
  indications: ["Travail traumatique avec besoin de mise à distance", "Émotions submergeantes", "Patients qui se laissent envahir par leurs ressentis", "Préparation à un travail de régression"],
  contraindications: ["Patients déjà fortement dissociés (préférer un travail d'ancrage)"],
  programs: [{
    id: "principal",
    title: "Observateur bienveillant",
    icon: "◑",
    duration: "12 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Observateur bienveillant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Amorce", detail: "Il y a en toi plusieurs présences. Il y a celle qui ressent, qui vit l'expérience de l'intérieur. Et il y a une autre, plus calme, qui regarde, qui observe sans juger. Cette deuxième présence est moins connue, mais elle est toujours là. Nous allons la rencontrer." },
      { label: "Emergence", detail: "Imagine que tu fais un pas en arrière, à l'intérieur de toi. Pas physiquement. Symboliquement. Comme si une partie de toi se mettait un peu de côté pour pouvoir te regarder. Cette partie qui se met de côté, c'est ton observateur." },
      { label: "Qualites", detail: "Cet observateur a des qualités précises. Il est calme. Il ne juge pas. Il voit, simplement. Il a de la bienveillance pour celui ou celle qu'il regarde — pour toi. Il sait que ce qui est ressenti est ressenti, et que ce qui est vécu mérite d'être vu, sans drame." },
      { label: "Pratique", detail: "Depuis cette position d'observateur, regarde ce que tu vis en ce moment. Tes sensations corporelles, tes pensées, tes émotions s'il y en a. Regarde-les comme on regarde un paysage. Sans intervenir. Sans changer. Juste observer." },
      { label: "Distance Juste", detail: "L'observateur n'est pas froid. Il n'est pas indifférent. Il est présent à ce qu'il regarde, mais à la bonne distance. Suffisamment près pour voir clairement. Suffisamment loin pour ne pas être emporté." },
      { label: "Ancrage", detail: "Cette position d'observateur, tu peux la retrouver à volonté. Quand quelque chose te submerge, tu peux faire intérieurement ce pas en arrière. Pas pour fuir, pour voir. Et de voir, déjà, change la qualité de l'expérience." }
      ],
    }],
  }],
  outils: [
    { name: "Méta-position", type: "Levier", icon: "🎯", desc: "Installation d'une position dissociée d'observation" },
    { name: "Recul observant", type: "Levier", icon: "🎯", desc: "Installation d'une position dissociée d'observation" },
    { name: "Bienveillance envers soi", type: "Levier", icon: "🎯", desc: "Installation d'une position dissociée d'observation" },
    { name: "Recul", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Témoin", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dissociation ne fonctionne pas pour moi"],
};

const k_620: ProtocolDetail = {
  protocolId: 620,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Dissociation",
  description: "Technique de dissociation par projection d'un contenu mental sur un écran de cinéma intérieur. Permet de regarder une scène pénible, un souvenir, un comportement à distance, avec contrôle des paramètres (taille, couleur, son, vitesse).",
  indications: ["Travail sur souvenirs pénibles", "Phobies", "Comportements automatiques à modifier", "Stress post-traumatique léger à modéré"],
  contraindications: ["Stress post-traumatique sévère sans préparation longue", "Patients dissociatifs"],
  programs: [{
    id: "principal",
    title: "Écran de cinéma intérieur",
    icon: "◑",
    duration: "25 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Écran de cinéma intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Installation Salle", detail: "Imagine une salle de cinéma intérieure. Confortable, chaude, sécurisée. Toi, tu es assis dans un fauteuil au milieu. Tu vois bien l'écran devant toi. Et derrière toi, en hauteur, il y a la cabine de projection." },
      { label: "Double Dissociation", detail: "Maintenant, fais quelque chose d'important. Quitte ton fauteuil, et monte dans la cabine de projection. Depuis là, tu peux voir à la fois l'écran ET ton fauteuil avec toi assis dedans. Tu te vois en train de regarder le film. C'est une double position : tu es en haut, et tu regardes celui qui regarde." },
      { label: "Projection", detail: "Sur l'écran, tu vas faire apparaître ce que nous voulons travailler. Une scène, un souvenir, un comportement. Mais l'écran est une protection : ce qui s'y trouve est sur l'écran, pas en toi. Tu peux le voir sans le vivre." },
      { label: "Controle", detail: "Tu as la télécommande. Tu peux régler la taille de l'image — la rendre plus petite, plus loin, comme tu en as besoin. Tu peux mettre en noir et blanc si la couleur est trop forte. Tu peux baisser le son, ou le couper. Tu peux mettre sur pause. Tu peux passer en avance rapide. Tu peux rembobiner. Tu es le maître de ce qui se passe sur cet écran." },
      { label: "Travail", detail: "Maintenant que tu as ces commandes, tu peux laisser apparaître ce que nous voulons regarder. À ton rythme. En t'arrêtant quand tu veux. En modifiant les paramètres si nécessaire. Et toujours, tu restes dans la cabine, à distance." },
      { label: "Cloture", detail: "Quand le travail est fait, tu peux éteindre l'écran. La salle redevient sombre et calme. Tu peux redescendre de la cabine vers ton fauteuil, ou choisir de sortir directement de la salle." }
      ],
    }],
  }],
  outils: [
    { name: "Externalisation du contenu mental", type: "Levier", icon: "🎯", desc: "Dissociation par projection visuelle externalisée" },
    { name: "Contrôle des sous-modalités (taille, couleur, son)", type: "Levier", icon: "🎯", desc: "Dissociation par projection visuelle externalisée" },
    { name: "Position dissociée double (spectateur + projectionniste)", type: "Levier", icon: "🎯", desc: "Dissociation par projection visuelle externalisée" },
    { name: "Distance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Maîtrise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dissociation ne fonctionne pas pour moi"],
};

const k_621: ProtocolDetail = {
  protocolId: 621,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Dissociation",
  description: "Installation d'une métaphore de déplacement temporel intérieur permettant régression et progression douces. Brique préalable aux protocoles de régression en âge ou de progression future.",
  indications: ["Préparation à régression en âge", "Préparation à progression vers un futur souhaité", "Travail sur la ligne de temps personnelle", "Travail sur transitions de vie"],
  contraindications: ["Trauma temporellement non stabilisé", "Confusion temporelle"],
  programs: [{
    id: "principal",
    title: "Voyage dans le temps intérieur",
    icon: "◑",
    duration: "15 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Voyage dans le temps intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Metaphore", detail: "Imagine que ton existence est une longue route, ou un long fleuve, ou un long fil — choisis l'image qui te parle. Cette ligne va de ta naissance jusqu'à maintenant, et continue vers les jours à venir." },
      { label: "Vehicule", detail: "Maintenant, tu vas avoir besoin d'un moyen de te déplacer le long de cette ligne. Cela peut être une montgolfière qui te permet de la survoler. Une barque sur le fleuve. Un train qui suit la voie. Un nuage. Un véhicule de ton invention. Choisis ton moyen de transport. Il doit être sûr, confortable, et te permettre d'aller dans les deux sens." },
      { label: "Position", detail: "Installe-toi dans ton véhicule. Tu n'es pas sur la route, tu es au-dessus, ou en survol. Tu peux voir la route défiler sans la marcher. C'est important : tu n'es pas dedans, tu es au-dessus." },
      { label: "Test Recul", detail: "Pour t'entraîner, fais reculer ton véhicule de quelques mètres seulement. Une heure en arrière. Tu vois ce que tu faisais il y a une heure, mais tu n'y es pas. Tu observes. Tu peux revenir tout de suite à maintenant." },
      { label: "Test Avance", detail: "Maintenant, fais avancer ton véhicule. Une heure dans le futur. Tu peux imaginer ce qui se passera dans une heure. Et revenir à maintenant." },
      { label: "Souverainete", detail: "Tu es le pilote. Tu décides où tu vas, à quelle vitesse, et pour combien de temps. Tu peux toujours revenir au présent en un instant. Le présent est toujours accessible. Cette base de sécurité, tu l'emportes avec toi quel que soit le voyage." }
      ],
    }],
  }],
  outils: [
    { name: "Métaphore du voyage", type: "Levier", icon: "🎯", desc: "Installation d'une métaphore de déplacement temporel sécurisé" },
    { name: "Sécurité du véhicule", type: "Levier", icon: "🎯", desc: "Installation d'une métaphore de déplacement temporel sécurisé" },
    { name: "Réversibilité", type: "Levier", icon: "🎯", desc: "Installation d'une métaphore de déplacement temporel sécurisé" },
    { name: "Voyage", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Liberté du temps", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "15 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dissociation ne fonctionne pas pour moi"],
};

const k_622: ProtocolDetail = {
  protocolId: 622,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Dissociation",
  description: "Installation d'une figure intérieure sage et bienveillante (conseiller, guide, vieil ami intérieur, ancêtre) à laquelle le patient peut s'adresser pour obtenir des éclairages venant de son inconscient.",
  indications: ["Travail introspectif", "Patients en quête de sens", "Décisions difficiles à prendre", "Travail sur l'identité profonde (Ka)", "Approche thérapeutique-spirituelle"],
  contraindications: ["Patients avec hallucinations auditives ou symptômes psychotiques", "Patients très défensifs vis-à-vis du registre symbolique"],
  programs: [{
    id: "principal",
    title: "Voix sage intérieure",
    icon: "◑",
    duration: "25 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Voix sage intérieure",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Il y a en toi une part qui sait des choses que ton mental quotidien ne sait pas. Une part plus ancienne, plus profonde, plus vaste. Tu vas la rencontrer aujourd'hui. Elle a peut-être un visage, peut-être pas. Elle peut prendre la forme que tu lui prêtes, ou qu'elle se choisit." },
      { label: "Apparition", detail: "Laisse cette figure venir à toi. Ne la cherche pas. Laisse-la se présenter. Cela peut être un vieil homme ou une vieille femme, un être plus jeune mais avec une présence intense, un animal, une lumière, une voix sans corps. Ce qui vient est ce qui doit venir." },
      { label: "Observation", detail: "Quand cette présence est là, prends le temps de la regarder, de la sentir. Quelle est sa qualité ? Qu'est-ce qui émane d'elle ? Tu peux remarquer qu'elle te regarde aussi, avec une bienveillance particulière, sans jugement." },
      { label: "Reconnaissance", detail: "Cette présence n'est pas étrangère à toi. Elle est une part de toi-même que tu n'as peut-être pas l'habitude de fréquenter. Elle te connaît mieux que ton mental ne te connaît. Elle a vu ce que tu ne te souviens plus avoir vu. Elle se souvient de ce que tu cherches." },
      { label: "Dialogue", detail: "Tu peux maintenant lui parler. Lui poser une question, ou simplement lui dire bonjour. Et tu peux écouter. La réponse peut venir en mots, en images, en ressenti corporel, en silence éloquent. Toutes les formes de réponse sont valides." },
      { label: "Question Centrale", detail: "Si tu as une question importante en ce moment dans ta vie, c'est le moment de la lui poser. Pose-la simplement, et écoute. Ne force pas la réponse. Laisse-la venir, ou pas. Parfois la réponse vient plus tard, en rêve ou dans une situation quotidienne." },
      { label: "Remerciement", detail: "Quand tu as reçu ce que tu pouvais recevoir aujourd'hui, prends le temps de remercier cette présence. Et sache que tu peux la retrouver. Elle ne disparaît pas. Elle est en toi. Tu peux revenir la consulter." }
      ],
    }],
  }],
  outils: [
    { name: "Personnification de la sagesse intérieure", type: "Levier", icon: "🎯", desc: "Installation d'une figure intérieure ressource" },
    { name: "Dialogue intrapsychique", type: "Levier", icon: "🎯", desc: "Installation d'une figure intérieure ressource" },
    { name: "Accès aux ressources inconscientes", type: "Levier", icon: "🎯", desc: "Installation d'une figure intérieure ressource" },
    { name: "Sagesse", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Guidance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dissociation ne fonctionne pas pour moi"],
};

const k_623: ProtocolDetail = {
  protocolId: 623,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Dissociation",
  description: "Installation d'une enveloppe protectrice imaginaire (bulle, cocon, halo) qui entoure le patient et filtre ce qui peut l'atteindre. Particulièrement utile pour patients hypersensibles et en travail psycho-spirituel.",
  indications: ["Patients hypersensibles", "Anxiété sociale", "Patients absorbant les émotions des autres (empaths)", "Travail KIIKA en dimension subtile", "Préparation à des environnements éprouvants"],
  contraindications: ["Risque de retrait social par usage excessif"],
  programs: [{
    id: "principal",
    title: "Bulle protectrice",
    icon: "◑",
    duration: "12 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Bulle protectrice",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Imagine maintenant qu'autour de toi, à environ un bras de distance, commence à se former une enveloppe. Elle peut être visible comme une bulle légèrement irisée, ou plus subtile, comme un halo de présence. Choisis ce qui te parle." },
      { label: "Formation", detail: "Cette enveloppe se construit progressivement. Elle entoure tout ton corps : devant, derrière, sur les côtés, au-dessus, en dessous. Elle est complète. Elle est à toi." },
      { label: "Qualites", detail: "Cette enveloppe a des propriétés particulières. Elle est solide là où il faut qu'elle le soit : ce qui te ferait du mal ne peut pas la traverser. Et elle est perméable là où il faut : la beauté, l'amour, la respiration, le bien que les autres te donnent passent à travers sans difficulté." },
      { label: "Filtre", detail: "Tu peux régler ce qui passe et ce qui ne passe pas. Les paroles dures, les énergies pesantes, les regards qui te dérangent — ils glissent sur la bulle sans entrer. Ce qui te nourrit, ce qui te fait du bien — peut entrer librement." },
      { label: "Reservoir", detail: "À l'intérieur de cette bulle, tu es chez toi. Tu peux respirer ton propre air. Tu peux sentir ce qui est à toi, et seulement à toi. Si tu as l'habitude d'absorber ce que les autres ressentent, cette bulle te rend ce qui t'appartient en propre." },
      { label: "Post Hypnotique", detail: "Tu peux activer cette bulle quand tu en as besoin. Avant d'entrer dans une réunion difficile. Dans les transports. Avant de voir quelqu'un qui t'épuise. Tu prends une respiration profonde, tu sens ta bulle autour de toi, et tu y vas. À la fin de la situation, tu peux la dissoudre, ou la laisser un moment encore. Tu choisis." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie d'enveloppe", type: "Levier", icon: "🎯", desc: "Installation d'une enveloppe énergétique protectrice" },
    { name: "Filtrage sélectif", type: "Levier", icon: "🎯", desc: "Installation d'une enveloppe énergétique protectrice" },
    { name: "Sensation de souveraineté", type: "Levier", icon: "🎯", desc: "Installation d'une enveloppe énergétique protectrice" },
    { name: "Souveraineté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Limites", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dissociation ne fonctionne pas pour moi"],
};

const k_624: ProtocolDetail = {
  protocolId: 624,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Retour",
  description: "Retour à l'état de veille par remontée d'escalier inverse, comptage de 1 à 10 avec réintégration progressive du corps, des sens et de l'environnement. Brique de retour la plus utilisée.",
  indications: ["Sortie de toute séance d'hypnose", "Particulièrement adapté aux séances longues ou profondes"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Retour standard par escalier inverse",
    icon: "◑",
    duration: "5 min",
    color: "#E08550",
    recommended: true,
    description: "Protocole KIIKA v3 — Retour standard par escalier inverse",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Annonce", detail: "Tu vas maintenant remonter doucement vers la surface, à ton rythme. Je vais t'accompagner en comptant de un à dix. À chaque chiffre, tu peux réintégrer un peu plus le moment présent, en gardant en toi tout ce qui s'est fait pendant cette séance." },
      { label: "Remontee", detail: "Un... ta respiration commence à reprendre son rythme habituel. Deux... tes pieds reprennent contact avec le sol. Trois... tes jambes retrouvent leur sensation. Quatre... ton bassin et ton dos se redressent légèrement. Cinq... tu reprends conscience de tes bras, de tes mains, de tes doigts. Six... ton ventre et ta poitrine respirent plus largement. Sept... tu réentends les bruits de la pièce, sans qu'ils te dérangent. Huit... ton visage se réveille, tes traits redeviennent vifs. Neuf... tu as envie de bouger, d'ouvrir les yeux. Tu peux étirer doucement tes doigts, tes orteils. Dix... tu ouvres les yeux quand tu te sens prêt, calmement, en gardant en toi cette qualité d'être." },
      { label: "Post Seance", detail: "Prends quelques instants avant de te lever. Sens comment tu te sens. Ce que tu emportes avec toi de cette séance reste à l'intérieur, ton inconscient continuera son travail." }
      ],
    }],
  }],
  outils: [
    { name: "Symétrie avec l'induction par escalier", type: "Levier", icon: "🎯", desc: "Réorientation progressive symétrique de l'induction" },
    { name: "Réintégration corporelle progressive", type: "Levier", icon: "🎯", desc: "Réorientation progressive symétrique de l'induction" },
    { name: "Réveil sensoriel ordonné", type: "Levier", icon: "🎯", desc: "Réorientation progressive symétrique de l'induction" },
    { name: "Retour", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Intégration", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "5 min", label: "Durée séance", sub: "estimation", color: "#E08550" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur retour ne fonctionne pas pour moi"],
};

const k_625: ProtocolDetail = {
  protocolId: 625,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Retour",
  description: "Retour bref en quelques minutes pour situations cliniques pressées (séance courte, fin de consultation, patient pressé). À utiliser uniquement sur des transes légères à modérées.",
  indications: ["Séances brèves de cabinet", "Suggestions hypnotiques courtes en consultation médicale", "Patients déjà rompus à l'hypnose"],
  contraindications: ["Transes profondes", "Patients en travail traumatique ou émotionnel intense"],
  programs: [{
    id: "principal",
    title: "Retour rapide pour cabinet",
    icon: "◑",
    duration: "2 min",
    color: "#E08550",
    recommended: true,
    description: "Protocole KIIKA v3 — Retour rapide pour cabinet",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Annonce", detail: "Dans un instant, tu vas revenir à toi, frais et bien. Je vais compter de trois à un. À un, tu ouvres les yeux, parfaitement éveillé." },
      { label: "Comptage", detail: "Trois... tu reprends contact avec ton corps. Deux... tu bouges légèrement les doigts et les pieds. Un... tu ouvres les yeux, tu te sens bien, frais, présent." }
      ],
    }],
  }],
  outils: [
    { name: "Suggestion directe de réveil", type: "Levier", icon: "🎯", desc: "Retour rapide condensé" },
    { name: "Mouvement physique d'activation", type: "Levier", icon: "🎯", desc: "Retour rapide condensé" },
    { name: "Confirmation de bien-être", type: "Levier", icon: "🎯", desc: "Retour rapide condensé" },
    { name: "Efficacité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence immédiate", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "2 min", label: "Durée séance", sub: "estimation", color: "#E08550" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "0/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur retour ne fonctionne pas pour moi"],
};

const k_626: ProtocolDetail = {
  protocolId: 626,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Retour",
  description: "Retour qui inclut un temps de consolidation : revue rapide des bénéfices de la séance, ancrage des nouvelles ressources, suggestions de prolongement inconscient du travail entre les séances.",
  indications: ["Fin de séances importantes", "Travaux profonds dont on veut sceller les acquis", "Préparation à l'intervalle entre deux séances"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Retour avec consolidation des acquis",
    icon: "◑",
    duration: "8 min",
    color: "#E08550",
    recommended: true,
    description: "Protocole KIIKA v3 — Retour avec consolidation des acquis",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Revue", detail: "Avant de revenir, prends un moment pour passer en revue ce qui s'est fait pendant cette séance. Pas avec ton mental analytique. Plutôt comme on regarde un film qui vient de se terminer. Qu'est-ce qui te reste ? Quelle image ? Quelle sensation ? Quel mot ?" },
      { label: "Recolte", detail: "Ce qui te reste, c'est ce que tu emportes. Tu n'as pas besoin de tout retenir. Ton inconscient garde ce qui est important. Et il continuera à travailler sur ce qui s'est ouvert aujourd'hui, dans les jours qui viennent, sans que tu aies à y penser." },
      { label: "Ancrage Session", detail: "Ce que tu as appris, ce que tu as vécu, ce qui s'est déposé en toi pendant cette séance, va continuer son travail. Peut-être dans tes rêves. Peut-être dans des moments inattendus. Peut-être simplement par une qualité différente de ta présence aux choses dans les prochains jours." },
      { label: "Pont Quotidien", detail: "Et entre maintenant et notre prochaine rencontre, tu peux remarquer ce qui se modifie. Sans rien forcer. Juste observer. Ton inconscient sait ce qu'il fait. Il continue." },
      { label: "Remontee", detail: "Maintenant tu peux revenir. À ton rythme. Trois respirations profondes. Et tu ouvres les yeux quand tu es prêt, en emportant avec toi ce que tu as récolté." }
      ],
    }],
  }],
  outils: [
    { name: "Revue des acquis", type: "Levier", icon: "🎯", desc: "Retour avec phase de consolidation explicite" },
    { name: "Ancrage des nouvelles ressources", type: "Levier", icon: "🎯", desc: "Retour avec phase de consolidation explicite" },
    { name: "Suggestion de prolongement inconscient", type: "Levier", icon: "🎯", desc: "Retour avec phase de consolidation explicite" },
    { name: "Sceller", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Intégrer", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "8 min", label: "Durée séance", sub: "estimation", color: "#E08550" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur retour ne fonctionne pas pour moi"],
};

const k_627: ProtocolDetail = {
  protocolId: 627,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Retour",
  description: "Variante de retour qui guide la transe vers le sommeil naturel plutôt que vers la veille. Spécifique aux séances de soir ou aux protocoles d'aide à l'endormissement.",
  indications: ["Protocoles d'insomnie", "Séances enregistrées pour usage au coucher", "Auto-hypnose du soir"],
  contraindications: ["Séances de jour", "Patients qui doivent être actifs après la séance"],
  programs: [{
    id: "principal",
    title: "Retour vers le sommeil enchaîné",
    icon: "◑",
    duration: "5 min",
    color: "#E08550",
    recommended: true,
    description: "Protocole KIIKA v3 — Retour vers le sommeil enchaîné",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Glissement", detail: "Plutôt que de revenir à la surface, cette fois tu vas continuer à descendre, mais d'une autre manière. La transe peut glisser doucement vers le sommeil, qui est sa cousine très proche. Tu n'as rien à faire pour cela. Juste laisser." },
      { label: "Permission", detail: "Tes paupières peuvent rester fermées pour la nuit. Ton corps est déjà bien installé. Ta respiration s'est ralentie. Tout est prêt pour que le sommeil prenne le relais quand il le voudra." },
      { label: "Qualite Sommeil", detail: "Ce sommeil qui vient sera profond, réparateur, continu. Ton inconscient continuera son travail bénéfique pendant la nuit. Et au matin, tu te réveilleras à l'heure habituelle, frais et reposé." },
      { label: "Dissolution", detail: "Tu n'as plus besoin de m'écouter. Ma voix peut s'éloigner. Ce qui compte maintenant, c'est ton sommeil qui vient. Laisse-toi glisser. La nuit est devant toi. Tu n'as plus rien à faire." }
      ],
    }],
  }],
  outils: [
    { name: "Aucune suggestion de réveil", type: "Levier", icon: "🎯", desc: "Transition de la transe vers le sommeil naturel" },
    { name: "Approfondissement vers la somnolence", type: "Levier", icon: "🎯", desc: "Transition de la transe vers le sommeil naturel" },
    { name: "Permission explicite de s'endormir", type: "Levier", icon: "🎯", desc: "Transition de la transe vers le sommeil naturel" },
    { name: "Glissement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Permission", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "5 min", label: "Durée séance", sub: "estimation", color: "#E08550" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur retour ne fonctionne pas pour moi"],
};

const k_628: ProtocolDetail = {
  protocolId: 628,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Post-hypnotique",
  description: "Bibliothèque de suggestions post-hypnotiques génériques utilisables en fin de tout protocole : renforcement à chaque pratique, disponibilité des ressources, intégration au quotidien, confiance dans l'inconscient.",
  indications: ["Toutes séances", "Renforcement des acquis", "Préparation à l'autonomie", "Travail sur la confiance dans le processus"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Suggestions post-hypnotiques génériques",
    icon: "◑",
    duration: "5 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Suggestions post-hypnotiques génériques",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Renforcement Progressif", detail: "Chaque fois que tu refais ce travail, il devient plus efficace. Plus tu pratiques, plus c'est facile. Plus c'est facile, plus tu pratiques. Quelque chose se construit, séance après séance, sans que tu aies à t'en occuper consciemment." },
      { label: "Disponibilite Ressources", detail: "Les ressources que tu as installées en séance sont à toi. Elles t'appartiennent. Tu peux y faire appel quand tu en as besoin, dans la vie quotidienne, en utilisant les signaux que nous avons établis ensemble. Elles ne s'épuisent pas." },
      { label: "Confiance Inconscient", detail: "Ton inconscient sait ce qu'il a à faire. Pendant les jours qui viennent, il va continuer le travail qui s'est ouvert aujourd'hui. Tu n'as pas besoin de comprendre comment. Tu n'as pas besoin de surveiller. Tu peux lui faire confiance." },
      { label: "Pont Quotidien", detail: "Et dans tes journées, tu vas peut-être remarquer que des choses se modifient. Une réaction qui était automatique devient moins automatique. Une situation qui te crispait te crispe un peu moins. Une qualité d'attention qui était difficile devient plus disponible. Ce sont des signes que le travail se fait." }
      ],
    }],
  }],
  outils: [
    { name: "Renforcement à chaque pratique", type: "Levier", icon: "🎯", desc: "Bibliothèque de suggestions post-hypnotiques modulables" },
    { name: "Effet cumulatif", type: "Levier", icon: "🎯", desc: "Bibliothèque de suggestions post-hypnotiques modulables" },
    { name: "Confiance dans l'inconscient", type: "Levier", icon: "🎯", desc: "Bibliothèque de suggestions post-hypnotiques modulables" },
    { name: "Renforcement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Continuité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "5 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur post-hypnotique ne fonctionne pas pour moi"],
};

const k_629: ProtocolDetail = {
  protocolId: 629,
  efficacite: "KIIKA",
  efficaciteSub: "Fondations / Clôture",
  description: "Clôture spécifique à l'identité KIIKA : passage par les cinq dimensions (Ki, Introspection, Intuition, Ka, Alignement) pour intégrer la séance dans une cohérence d'ensemble. Réservée aux séances marquantes ou rituelles.",
  indications: ["Séances charnières", "Travail sur l'identité profonde", "Approche thérapeutique-spirituelle", "Fin de cycle thérapeutique"],
  contraindications: ["Séances brèves de cabinet", "Patients qui rejettent le registre symbolique"],
  programs: [{
    id: "principal",
    title: "Clôture rituelle KIIKA",
    icon: "◑",
    duration: "12 min",
    color: "#E08550",
    recommended: true,
    description: "Protocole KIIKA v3 — Clôture rituelle KIIKA",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Invitation", detail: "Avant de revenir, nous allons traverser ensemble les cinq souffles qui composent ton parcours intérieur. Cinq respirations, cinq présences. Prends ton temps." },
      { label: "Ki", detail: "La première respiration est celle du Ki. L'énergie vitale, le mouvement initial. Inspire profondément, et sens en toi cette force qui te traverse, qui te tient en vie, qui circule. Expire en remerciant cette énergie d'être là." },
      { label: "Introspection", detail: "La deuxième respiration est celle de l'Introspection. Le regard vers l'intérieur. Inspire, et reconnais que tu as accepté de te regarder aujourd'hui. Que tu as accepté de questionner. Expire, et honore ce courage tranquille." },
      { label: "Intuition", detail: "La troisième respiration est celle de l'Intuition. La guidance qui ne vient pas du mental. Inspire, et accueille ce que tu as appris sans le chercher. Ce qui s'est révélé sans être analysé. Expire, et fais confiance à cette voie qui te connaît mieux que toi-même." },
      { label: "Ka", detail: "La quatrième respiration est celle du Ka. L'essence de l'âme. Ce qui en toi ne change pas, ce qui demeure à travers les saisons. Inspire, et reconnais cette présence en toi, plus ancienne que ton histoire. Expire, et laisse-la te tenir." },
      { label: "Alignement", detail: "La cinquième respiration est celle de l'Alignement. L'osmose. Le moment où tout se relie. Inspire, et sens comment, en cet instant, ton énergie, ton introspection, ton intuition et ton âme parlent ensemble. Expire dans cette unité." },
      { label: "Cloture", detail: "Tu as fait le tour. Tu as honoré chaque souffle. Tu peux maintenant revenir, en gardant en toi cette cohérence. Ce que tu as vécu aujourd'hui s'inscrit dans cette trame. Ouvre les yeux quand tu es prêt." }
      ],
    }],
  }],
  outils: [
    { name: "Passage rituel par les 5 dimensions", type: "Levier", icon: "🎯", desc: "Clôture rituelle multi-dimensionnelle KIIKA" },
    { name: "Intégration symbolique", type: "Levier", icon: "🎯", desc: "Clôture rituelle multi-dimensionnelle KIIKA" },
    { name: "Cohérence d'ensemble", type: "Levier", icon: "🎯", desc: "Clôture rituelle multi-dimensionnelle KIIKA" },
    { name: "Rituel", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Cohérence", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "12 min", label: "Durée séance", sub: "estimation", color: "#E08550" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur clôture ne fonctionne pas pour moi"],
};

const k_630: ProtocolDetail = {
  protocolId: 630,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Régulation de base",
  description: "Protocole de fond pour anxiété généralisée. Combine ancre respiratoire, lieu sûr et bulle protectrice. À installer en premières séances pour donner au patient des outils utilisables au quotidien.",
  indications: ["Anxiété généralisée chronique", "Anxiété diffuse sans déclencheur précis", "Patients qui se disent 'tendus en permanence'", "Premier travail anxieux"],
  contraindications: ["Crise d'angoisse aiguë (préférer K-ANX-002)", "Trouble panique sévère"],
  programs: [{
    id: "principal",
    title: "Anxiété généralisée — Régulation par souffle et lieu sûr",
    icon: "◑",
    duration: "40 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété généralisée — Régulation par souffle et lieu sûr",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole de fond pour anxiété généralisée. Combine ancre respiratoire, lieu sûr et bulle protectrice. À installer en premières séances pour donner au patient des outils utilisables au quotidien." }
      ],
    }],
  }],
  outils: [
    { name: "Ancrage respiratoire physiologique", type: "Levier", icon: "🎯", desc: "Protocole multi-ressources de fond" },
    { name: "Lieu sûr disponible", type: "Levier", icon: "🎯", desc: "Protocole multi-ressources de fond" },
    { name: "Bulle protectrice", type: "Levier", icon: "🎯", desc: "Protocole multi-ressources de fond" },
    { name: "Souffle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Refuge", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur régulation de base ne fonctionne pas pour moi"],
};

const k_631: ProtocolDetail = {
  protocolId: 631,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Crise aiguë",
  description: "Protocole bref pour gestion d'une crise d'angoisse en cours ou imminente. Inhalation forcée brève, exhalation lente, ancrage corporel par les cinq sens, recadrage de la sensation corporelle.",
  indications: ["Crise d'angoisse aiguë", "Trouble panique", "Hyperventilation", "Sensation de mort imminente d'origine anxieuse"],
  contraindications: ["Cause médicale non écartée (toujours faire bilan cardiologique en amont)"],
  programs: [{
    id: "principal",
    title: "Crise d'angoisse aiguë — Protocole de désamorçage",
    icon: "◑",
    duration: "15 min",
    color: "#B85450",
    recommended: true,
    description: "Protocole KIIKA v3 — Crise d'angoisse aiguë — Protocole de désamorçage",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole bref pour gestion d'une crise d'angoisse en cours ou imminente. Inhalation forcée brève, exhalation lente, ancrage corporel par les cinq sens, recadrage de la sensation corporelle." }
      ],
    }],
  }],
  outils: [
    { name: "Régulation respiratoire d'urgence", type: "Levier", icon: "🎯", desc: "Désamorçage de crise par ancrage sensoriel" },
    { name: "Ancrage par les cinq sens", type: "Levier", icon: "🎯", desc: "Désamorçage de crise par ancrage sensoriel" },
    { name: "Recadrage des sensations corporelles", type: "Levier", icon: "🎯", desc: "Désamorçage de crise par ancrage sensoriel" },
    { name: "Présence", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Ici-maintenant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "15 min", label: "Durée séance", sub: "estimation", color: "#B85450" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur crise aiguë ne fonctionne pas pour moi"],
};

const k_632: ProtocolDetail = {
  protocolId: 632,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Anticipation",
  description: "Pour patients qui s'épuisent à anticiper négativement les événements à venir. Travail de différenciation entre anticipation utile et anxiété anticipatoire. Installation d'un futur alternatif crédible.",
  indications: ["Anxiété anticipatoire (examens, prises de parole, voyages, entretiens)", "Rumination du futur", "Catastrophisme", "Tendance à imaginer le pire"],
  contraindications: ["Trouble obsessionnel sévère", "Patients qui ont besoin de l'anticipation pour préparation réelle (avant de désamorcer, vérifier que cela ne supprime pas une préparation utile)"],
  programs: [{
    id: "principal",
    title: "Anxiété anticipatoire — Désamorçage du futur catastrophique",
    icon: "◑",
    duration: "35 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété anticipatoire — Désamorçage du futur catastrophique",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui s'épuisent à anticiper négativement les événements à venir. Travail de différenciation entre anticipation utile et anxiété anticipatoire. Installation d'un futur alternatif crédible." }
      ],
    }],
  }],
  outils: [
    { name: "Différenciation anticipation utile / anticipation toxique", type: "Levier", icon: "🎯", desc: "Recadrage de l'anticipation et installation de futurs alternatifs" },
    { name: "Pluralité des futurs possibles", type: "Levier", icon: "🎯", desc: "Recadrage de l'anticipation et installation de futurs alternatifs" },
    { name: "Imagination ressource", type: "Levier", icon: "🎯", desc: "Recadrage de l'anticipation et installation de futurs alternatifs" },
    { name: "Possibles", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Liberté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur anticipation ne fonctionne pas pour moi"],
};

const k_633: ProtocolDetail = {
  protocolId: 633,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Phobie sociale",
  description: "Pour anxiété sociale et peur du jugement. Combine bulle protectrice, repérage des regards alliés (vs hostiles imaginaires), et installation d'une voix sage qui rappelle la valeur du patient.",
  indications: ["Anxiété sociale", "Peur du jugement", "Trac social", "Évitement des situations collectives", "Sentiment de ne pas avoir sa place"],
  contraindications: ["Phobie sociale sévère décompensée", "Comorbidité dépressive majeure"],
  programs: [{
    id: "principal",
    title: "Phobie sociale — Bulle, voix sage et regards alliés",
    icon: "◑",
    duration: "40 min",
    color: "#B85450",
    recommended: true,
    description: "Protocole KIIKA v3 — Phobie sociale — Bulle, voix sage et regards alliés",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété sociale et peur du jugement. Combine bulle protectrice, repérage des regards alliés (vs hostiles imaginaires), et installation d'une voix sage qui rappelle la valeur du patient." }
      ],
    }],
  }],
  outils: [
    { name: "Bulle protectrice contre la perception envahissante", type: "Levier", icon: "🎯", desc: "Travail multi-ressources sur l'estime sociale" },
    { name: "Différenciation regards réels / regards imaginés", type: "Levier", icon: "🎯", desc: "Travail multi-ressources sur l'estime sociale" },
    { name: "Voix sage intérieure rappelant la valeur", type: "Levier", icon: "🎯", desc: "Travail multi-ressources sur l'estime sociale" },
    { name: "Souveraineté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence parmi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#B85450" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur phobie sociale ne fonctionne pas pour moi"],
};

const k_634: ProtocolDetail = {
  protocolId: 634,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Performance",
  description: "Trac avant prise de parole, examen, audition, compétition. Travail de transformation du trac en énergie disponible plutôt que tentative de le supprimer. Activation de l'attention juste, ni sur-engagée ni dispersée.",
  indications: ["Trac avant prise de parole", "Anxiété d'examen", "Audition artistique", "Préparation compétition sportive", "Soutenance"],
  contraindications: ["Trac généralisé sans déclencheur précis (préférer K-ANX-001)", "Phobie sociale sous-jacente non traitée"],
  programs: [{
    id: "principal",
    title: "Trac de performance — Préparation et activation juste",
    icon: "◑",
    duration: "35 min",
    color: "#C8A030",
    recommended: true,
    description: "Protocole KIIKA v3 — Trac de performance — Préparation et activation juste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Trac avant prise de parole, examen, audition, compétition. Travail de transformation du trac en énergie disponible plutôt que tentative de le supprimer. Activation de l'attention juste, ni sur-engagée ni dispersée." }
      ],
    }],
  }],
  outils: [
    { name: "Recadrage trac comme énergie", type: "Levier", icon: "🎯", desc: "Recadrage du trac et installation de l'activation juste" },
    { name: "Différenciation activation utile / activation parasite", type: "Levier", icon: "🎯", desc: "Recadrage du trac et installation de l'activation juste" },
    { name: "Préparation imaginaire de la performance", type: "Levier", icon: "🎯", desc: "Recadrage du trac et installation de l'activation juste" },
    { name: "Énergie disponible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence vive", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#C8A030" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur performance ne fonctionne pas pour moi"],
};

const k_635: ProtocolDetail = {
  protocolId: 635,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Phobie spécifique",
  description: "Méthode de désensibilisation par construction d'une hiérarchie d'anxiété puis exposition imaginaire graduée en transe, avec extinction de l'anxiété à chaque palier avant progression.",
  indications: ["Phobies simples (avion, ascenseur, animaux, sang, injections)", "Phobies situationnelles", "Patients capables de hiérarchiser leurs niveaux d'anxiété"],
  contraindications: ["Phobies multiples", "Trouble panique principal", "Trauma récent associé à la phobie"],
  programs: [{
    id: "principal",
    title: "Phobie spécifique — Désensibilisation graduée par hiérarchie",
    icon: "◑",
    duration: "50 min",
    color: "#B85450",
    recommended: true,
    description: "Protocole KIIKA v3 — Phobie spécifique — Désensibilisation graduée par hiérarchie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Méthode de désensibilisation par construction d'une hiérarchie d'anxiété puis exposition imaginaire graduée en transe, avec extinction de l'anxiété à chaque palier avant progression." }
      ],
    }],
  }],
  outils: [
    { name: "Hiérarchisation explicite", type: "Levier", icon: "🎯", desc: "Désensibilisation par hiérarchie graduée en imagerie" },
    { name: "Exposition imaginaire graduée", type: "Levier", icon: "🎯", desc: "Désensibilisation par hiérarchie graduée en imagerie" },
    { name: "Extinction par maintien jusqu'à apaisement", type: "Levier", icon: "🎯", desc: "Désensibilisation par hiérarchie graduée en imagerie" },
    { name: "Progression", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Maîtrise par paliers", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#B85450" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur phobie spécifique ne fonctionne pas pour moi"],
};

const k_636: ProtocolDetail = {
  protocolId: 636,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Somatisation",
  description: "Pour anxiété qui s'exprime principalement par des symptômes corporels (boule à l'estomac, oppression thoracique, tensions musculaires chroniques, troubles digestifs fonctionnels). Travail de dialogue avec la sensation.",
  indications: ["Anxiété somatisée", "Boule à l'estomac chronique", "Oppression thoracique fonctionnelle", "Tensions musculaires permanentes", "Troubles digestifs liés au stress"],
  contraindications: ["Cause organique non écartée", "Hypochondrie sévère"],
  programs: [{
    id: "principal",
    title: "Anxiété somatique — Du corps qui parle",
    icon: "◑",
    duration: "40 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété somatique — Du corps qui parle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété qui s'exprime principalement par des symptômes corporels (boule à l'estomac, oppression thoracique, tensions musculaires chroniques, troubles digestifs fonctionnels). Travail de dialogue avec la sensation." }
      ],
    }],
  }],
  outils: [
    { name: "Personnification de la sensation", type: "Levier", icon: "🎯", desc: "Dialogue introspectif avec la sensation corporelle" },
    { name: "Reconnaissance de l'intention positive du symptôme", type: "Levier", icon: "🎯", desc: "Dialogue introspectif avec la sensation corporelle" },
    { name: "Dialogue intrapsychique", type: "Levier", icon: "🎯", desc: "Dialogue introspectif avec la sensation corporelle" },
    { name: "Écoute du corps", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Reconnaissance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur somatisation ne fonctionne pas pour moi"],
};

const k_637: ProtocolDetail = {
  protocolId: 637,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Rumination",
  description: "Pour pensées en boucle qui tournent sans déboucher sur l'action. Reconnaissance du mécanisme, distinction réflexion utile / rumination, technique de désengagement attentionnel par déplacement vers le corps et le présent.",
  indications: ["Rumination chronique", "Pensées intrusives non obsessionnelles", "Difficulté à dormir par activité mentale", "Auto-jugement répétitif"],
  contraindications: ["TOC vrai (préférer protocoles spécifiques)", "Dépression majeure"],
  programs: [{
    id: "principal",
    title: "Rumination mentale — Sortir de la roue",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Rumination mentale — Sortir de la roue",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour pensées en boucle qui tournent sans déboucher sur l'action. Reconnaissance du mécanisme, distinction réflexion utile / rumination, technique de désengagement attentionnel par déplacement vers le corps et le présent." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance du mécanisme de boucle", type: "Levier", icon: "🎯", desc: "Désengagement attentionnel et redirection" },
    { name: "Distinction rumination / réflexion", type: "Levier", icon: "🎯", desc: "Désengagement attentionnel et redirection" },
    { name: "Désidentification d'avec la pensée", type: "Levier", icon: "🎯", desc: "Désengagement attentionnel et redirection" },
    { name: "Sortir de la roue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur rumination ne fonctionne pas pour moi"],
};

const k_638: ProtocolDetail = {
  protocolId: 638,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Hypervigilance",
  description: "Pour patients en état d'alerte permanent, souvent suite à un environnement éprouvant ou à un trauma léger. Travail de différenciation entre vigilance utile et vigilance parasite, permission progressive de relâcher.",
  indications: ["Hypervigilance chronique", "Sursauts fréquents", "Difficulté à se relâcher en présence d'autres", "Suite d'environnement éprouvant (familial, professionnel)"],
  contraindications: ["Trauma sévère non stabilisé (préférer protocoles trauma spécifiques)"],
  programs: [{
    id: "principal",
    title: "Hypervigilance — Permission de baisser la garde",
    icon: "◑",
    duration: "40 min",
    color: "#B85450",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypervigilance — Permission de baisser la garde",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en état d'alerte permanent, souvent suite à un environnement éprouvant ou à un trauma léger. Travail de différenciation entre vigilance utile et vigilance parasite, permission progressive de relâcher." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance du caractère adaptatif passé", type: "Levier", icon: "🎯", desc: "Recadrage de la vigilance et permission graduée de relâcher" },
    { name: "Distinction vigilance utile / parasite", type: "Levier", icon: "🎯", desc: "Recadrage de la vigilance et permission graduée de relâcher" },
    { name: "Permission progressive", type: "Levier", icon: "🎯", desc: "Recadrage de la vigilance et permission graduée de relâcher" },
    { name: "Veille douce", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Permission", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#B85450" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur hypervigilance ne fonctionne pas pour moi"],
};

const k_639: ProtocolDetail = {
  protocolId: 639,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Attachement",
  description: "Pour anxiété massive lors de séparations (conjoint en déplacement, enfant qui part, deuil anticipé). Travail d'intériorisation du lien, distinction entre absence physique et perte du lien.",
  indications: ["Anxiété de séparation adulte", "Angoisse d'abandon", "Hyperdépendance affective", "Difficulté à supporter les absences"],
  contraindications: ["Trouble grave de l'attachement nécessitant cadre psychothérapeutique long", "Comorbidité avec dépendance pathologique"],
  programs: [{
    id: "principal",
    title: "Anxiété de séparation adulte — Lien intériorisé",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de séparation adulte — Lien intériorisé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété massive lors de séparations (conjoint en déplacement, enfant qui part, deuil anticipé). Travail d'intériorisation du lien, distinction entre absence physique et perte du lien." }
      ],
    }],
  }],
  outils: [
    { name: "Lien intériorisé toujours présent", type: "Levier", icon: "🎯", desc: "Intériorisation du lien et différenciation absence / perte" },
    { name: "Différenciation absence physique / perte de lien", type: "Levier", icon: "🎯", desc: "Intériorisation du lien et différenciation absence / perte" },
    { name: "Ressource du souvenir incarné", type: "Levier", icon: "🎯", desc: "Intériorisation du lien et différenciation absence / perte" },
    { name: "Présence en absence", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien intérieur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur attachement ne fonctionne pas pour moi"],
};

const k_640: ProtocolDetail = {
  protocolId: 640,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Sollicitude",
  description: "Pour patients qui se rongent pour un proche malade, en difficulté ou en danger. Travail de différenciation entre sollicitude utile et inquiétude paralysante. Recharge des aidants.",
  indications: ["Aidant en surcharge", "Parent inquiet pour enfant", "Conjoint d'un proche malade", "Inquiétude qui empêche de vivre"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Inquiétude pour un proche — Charge de soin et présence juste",
    icon: "◑",
    duration: "40 min",
    color: "#2E8A7B",
    recommended: true,
    description: "Protocole KIIKA v3 — Inquiétude pour un proche — Charge de soin et présence juste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui se rongent pour un proche malade, en difficulté ou en danger. Travail de différenciation entre sollicitude utile et inquiétude paralysante. Recharge des aidants." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction sollicitude / inquiétude", type: "Levier", icon: "🎯", desc: "Recadrage de la sollicitude et restauration de l'aidant" },
    { name: "Soin de soi comme condition du soin de l'autre", type: "Levier", icon: "🎯", desc: "Recadrage de la sollicitude et restauration de l'aidant" },
    { name: "Lâcher-prise sur ce qui ne dépend pas de soi", type: "Levier", icon: "🎯", desc: "Recadrage de la sollicitude et restauration de l'aidant" },
    { name: "Présence juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soin de l'aidant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#2E8A7B" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sollicitude ne fonctionne pas pour moi"],
};

const k_641: ProtocolDetail = {
  protocolId: 641,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Médical",
  description: "Pour anxiété face aux examens, attentes de résultats, traitements médicaux pesants. Travail sur la confiance corporelle, la gestion de l'attente, la différenciation entre vraie alerte et anxiété.",
  indications: ["Anxiété pré-examen médical", "Attente de résultats", "Annonce diagnostique", "Anxiété face à un traitement", "Phobie des soins"],
  contraindications: ["Trauma médical non traité"],
  programs: [{
    id: "principal",
    title: "Anxiété médicale — Examens, diagnostics, traitements",
    icon: "◑",
    duration: "35 min",
    color: "#5B8FB9",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété médicale — Examens, diagnostics, traitements",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété face aux examens, attentes de résultats, traitements médicaux pesants. Travail sur la confiance corporelle, la gestion de l'attente, la différenciation entre vraie alerte et anxiété." }
      ],
    }],
  }],
  outils: [
    { name: "Confiance corporelle", type: "Levier", icon: "🎯", desc: "Régulation anxieuse en contexte médical" },
    { name: "Distinction signal / bruit", type: "Levier", icon: "🎯", desc: "Régulation anxieuse en contexte médical" },
    { name: "Gestion de l'attente", type: "Levier", icon: "🎯", desc: "Régulation anxieuse en contexte médical" },
    { name: "Corps allié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent suffisant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#5B8FB9" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur médical ne fonctionne pas pour moi"],
};

const k_642: ProtocolDetail = {
  protocolId: 642,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Transport",
  description: "Pour anxiété spécifique aux transports : avion, voiture, métro, train. Combine désensibilisation par hiérarchie, contrôle perçu et installation d'un voyage intérieur parallèle au voyage réel.",
  indications: ["Phobie de l'avion", "Anxiété en voiture (passager ou conducteur)", "Phobie du métro et des espaces clos en mouvement", "Anxiété en train sur longs trajets"],
  contraindications: ["Phobie sévère décompensée nécessitant approche multidisciplinaire"],
  programs: [{
    id: "principal",
    title: "Anxiété de transport — Avion, voiture, transports en commun",
    icon: "◑",
    duration: "45 min",
    color: "#B85450",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de transport — Avion, voiture, transports en commun",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété spécifique aux transports : avion, voiture, métro, train. Combine désensibilisation par hiérarchie, contrôle perçu et installation d'un voyage intérieur parallèle au voyage réel." }
      ],
    }],
  }],
  outils: [
    { name: "Désensibilisation graduée", type: "Levier", icon: "🎯", desc: "Désensibilisation et installation de ressources transport" },
    { name: "Restauration du contrôle perçu", type: "Levier", icon: "🎯", desc: "Désensibilisation et installation de ressources transport" },
    { name: "Voyage intérieur parallèle", type: "Levier", icon: "🎯", desc: "Désensibilisation et installation de ressources transport" },
    { name: "Voyage intérieur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Contrôle juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#B85450" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur transport ne fonctionne pas pour moi"],
};

const k_643: ProtocolDetail = {
  protocolId: 643,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Existentiel",
  description: "Pour anxiété touchant les fondamentaux : finitude, sens de la vie, solitude existentielle, liberté. Travail spécifique à l'approche thérapie-spiritualité KIIKA, avec mobilisation forte du Ka.",
  indications: ["Anxiété existentielle", "Crise de sens", "Vertige face à la finitude", "Angoisse de mort non symptomatique", "Quête spirituelle inquiète"],
  contraindications: ["Dépression majeure (préférer travailler la dépression d'abord)", "Patients qui rejettent toute dimension symbolique ou spirituelle"],
  programs: [{
    id: "principal",
    title: "Anxiété existentielle — Vertige du sens",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété existentielle — Vertige du sens",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété touchant les fondamentaux : finitude, sens de la vie, solitude existentielle, liberté. Travail spécifique à l'approche thérapie-spiritualité KIIKA, avec mobilisation forte du Ka." }
      ],
    }],
  }],
  outils: [
    { name: "Sanctuaire intérieur", type: "Levier", icon: "🎯", desc: "Travail existentiel à dimension spirituelle KIIKA" },
    { name: "Voix sage", type: "Levier", icon: "🎯", desc: "Travail existentiel à dimension spirituelle KIIKA" },
    { name: "Ka comme essence durable", type: "Levier", icon: "🎯", desc: "Travail existentiel à dimension spirituelle KIIKA" },
    { name: "Essence", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Demeure intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur existentiel ne fonctionne pas pour moi"],
};

const k_644: ProtocolDetail = {
  protocolId: 644,
  efficacite: "KIIKA",
  efficaciteSub: "Anxiété / Tolérance à l'incertitude",
  description: "Pour patients ayant un faible seuil de tolérance à l'incertitude : besoin compulsif de savoir, de contrôler, de prévoir. Travail sur la cohabitation possible avec le non-su.",
  indications: ["Intolérance à l'incertitude", "Vérifications compulsives par anxiété (sans TOC vrai)", "Besoin de contrôle excessif", "Catastrophisme par défaut"],
  contraindications: ["TOC vrai", "Trouble anxieux généralisé sévère"],
  programs: [{
    id: "principal",
    title: "Anxiété de l'incertitude — Apprivoiser le non-savoir",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de l'incertitude — Apprivoiser le non-savoir",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ayant un faible seuil de tolérance à l'incertitude : besoin compulsif de savoir, de contrôler, de prévoir. Travail sur la cohabitation possible avec le non-su." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de l'incertitude comme constante de la vie", type: "Levier", icon: "🎯", desc: "Travail sur la cohabitation avec l'incertitude" },
    { name: "Différenciation gestion / élimination", type: "Levier", icon: "🎯", desc: "Travail sur la cohabitation avec l'incertitude" },
    { name: "Pratique de l'inconnu apprivoisé", type: "Levier", icon: "🎯", desc: "Travail sur la cohabitation avec l'incertitude" },
    { name: "Cohabiter avec le non-su", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souplesse", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur tolérance à l'incertitude ne fonctionne pas pour moi"],
};

const k_645: ProtocolDetail = {
  protocolId: 645,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Endormissement",
  description: "Pour patients qui mettent plus de 30-45 minutes à s'endormir le soir. Travail sur le rapport au sommeil, déconditionnement de la lutte, installation d'une routine du glissement.",
  indications: ["Insomnie d'endormissement chronique", "Hyperactivité mentale au coucher", "Anxiété de performance liée au sommeil", "Conditionnement négatif au lit"],
  contraindications: ["Insomnie récente avec cause médicale ou pharmacologique non identifiée", "Apnée du sommeil non diagnostiquée"],
  programs: [{
    id: "principal",
    title: "Insomnie d'endormissement — Le glissement vers la nuit",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Insomnie d'endormissement — Le glissement vers la nuit",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui mettent plus de 30-45 minutes à s'endormir le soir. Travail sur le rapport au sommeil, déconditionnement de la lutte, installation d'une routine du glissement." }
      ],
    }],
  }],
  outils: [
    { name: "Recadrage : sommeil ne se commande pas", type: "Levier", icon: "🎯", desc: "Déconditionnement de la lutte et installation du glissement" },
    { name: "Désinvestissement de l'effort", type: "Levier", icon: "🎯", desc: "Déconditionnement de la lutte et installation du glissement" },
    { name: "Imagerie de glissement", type: "Levier", icon: "🎯", desc: "Déconditionnement de la lutte et installation du glissement" },
    { name: "Glissement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Permission", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur endormissement ne fonctionne pas pour moi"],
};

const k_646: ProtocolDetail = {
  protocolId: 646,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Continuité",
  description: "Pour patients qui s'endorment correctement mais se réveillent une ou plusieurs fois dans la nuit et peinent à se rendormir. Installation d'un protocole de retour au sommeil sans dramatisation.",
  indications: ["Réveils nocturnes avec difficulté à se rendormir", "Hyperéveil de 3h-5h du matin", "Patients qui regardent l'heure et catastrophisent"],
  contraindications: ["Cause médicale non écartée (apnée, reflux, douleur)", "Dépression sévère avec réveil précoce"],
  programs: [{
    id: "principal",
    title: "Réveils nocturnes — Le retour dans le sommeil",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Réveils nocturnes — Le retour dans le sommeil",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui s'endorment correctement mais se réveillent une ou plusieurs fois dans la nuit et peinent à se rendormir. Installation d'un protocole de retour au sommeil sans dramatisation." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement du temps qui passe", type: "Levier", icon: "🎯", desc: "Protocole de retour au sommeil" },
    { name: "Routine de retour", type: "Levier", icon: "🎯", desc: "Protocole de retour au sommeil" },
    { name: "Suggestion d'oubli de l'éveil", type: "Levier", icon: "🎯", desc: "Protocole de retour au sommeil" },
    { name: "Continuité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pause dans la nuit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur continuité ne fonctionne pas pour moi"],
};

const k_647: ProtocolDetail = {
  protocolId: 647,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Qualité",
  description: "Pour patients qui dorment leurs heures mais se réveillent fatigués. Travail sur la qualité du sommeil profond et le sentiment de récupération, par installation d'intentions de réparation pendant la nuit.",
  indications: ["Sommeil non réparateur malgré durée correcte", "Réveil avec sensation de fatigue", "Sentiment de sommeil léger ou agité"],
  contraindications: ["Apnée du sommeil non diagnostiquée (très fréquente cause de sommeil non réparateur — orienter vers ORL avant)", "Carence en fer, hypothyroïdie"],
  programs: [{
    id: "principal",
    title: "Sommeil non réparateur — Approfondir la qualité",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sommeil non réparateur — Approfondir la qualité",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui dorment leurs heures mais se réveillent fatigués. Travail sur la qualité du sommeil profond et le sentiment de récupération, par installation d'intentions de réparation pendant la nuit." }
      ],
    }],
  }],
  outils: [
    { name: "Suggestions de réparation pendant le sommeil", type: "Levier", icon: "🎯", desc: "Programmation d'intentions réparatrices nocturnes" },
    { name: "Imagerie de récupération profonde", type: "Levier", icon: "🎯", desc: "Programmation d'intentions réparatrices nocturnes" },
    { name: "Confiance dans la nuit qui restaure", type: "Levier", icon: "🎯", desc: "Programmation d'intentions réparatrices nocturnes" },
    { name: "Réparation", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Profondeur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur qualité ne fonctionne pas pour moi"],
};

const k_648: ProtocolDetail = {
  protocolId: 648,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Hypersomnie",
  description: "Pour patients qui dorment trop ou qui sont somnolents en journée. Travail de structuration des cycles veille-sommeil, restauration d'une vigilance diurne pleine.",
  indications: ["Hypersomnie sans cause médicale identifiée", "Somnolence diurne excessive", "Sommeil prolongé non récupérateur", "Difficulté à se lever"],
  contraindications: ["Narcolepsie", "Apnée du sommeil", "Dépression masquée par hypersomnie"],
  programs: [{
    id: "principal",
    title: "Hypersomnie et somnolence diurne — Restaurer la vigilance juste",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypersomnie et somnolence diurne — Restaurer la vigilance juste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui dorment trop ou qui sont somnolents en journée. Travail de structuration des cycles veille-sommeil, restauration d'une vigilance diurne pleine." }
      ],
    }],
  }],
  outils: [
    { name: "Activation matinale", type: "Levier", icon: "🎯", desc: "Restructuration du rythme veille-sommeil" },
    { name: "Vigilance par micro-pauses", type: "Levier", icon: "🎯", desc: "Restructuration du rythme veille-sommeil" },
    { name: "Ancrage de la vivacité", type: "Levier", icon: "🎯", desc: "Restructuration du rythme veille-sommeil" },
    { name: "Vivacité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lumière du jour", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur hypersomnie ne fonctionne pas pour moi"],
};

const k_649: ProtocolDetail = {
  protocolId: 649,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Rêves",
  description: "Pour patients dont les rêves intenses ou anxieux perturbent le repos. Travail de pacification du contenu onirique sans le supprimer, installation d'une posture intérieure d'observateur des rêves.",
  indications: ["Rêves anxieux récurrents", "Cauchemars non traumatiques", "Sommeil agité par des rêves intenses", "Difficulté de récupération malgré le sommeil"],
  contraindications: ["PTSD avec cauchemars de reviviscence (protocole spécifique trauma)", "Médicaments fortement onirogènes (consulter)"],
  programs: [{
    id: "principal",
    title: "Sommeil agité par les rêves — Pacifier la nuit",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sommeil agité par les rêves — Pacifier la nuit",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients dont les rêves intenses ou anxieux perturbent le repos. Travail de pacification du contenu onirique sans le supprimer, installation d'une posture intérieure d'observateur des rêves." }
      ],
    }],
  }],
  outils: [
    { name: "Posture d'observateur dans le rêve", type: "Levier", icon: "🎯", desc: "Pacification du contenu onirique" },
    { name: "Recadrage des rêves comme travail intérieur", type: "Levier", icon: "🎯", desc: "Pacification du contenu onirique" },
    { name: "Demande à l'inconscient", type: "Levier", icon: "🎯", desc: "Pacification du contenu onirique" },
    { name: "Témoin de la nuit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rêves apaisés", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur rêves ne fonctionne pas pour moi"],
};

const k_650: ProtocolDetail = {
  protocolId: 650,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Rythmes",
  description: "Pour voyageurs traversant des fuseaux horaires ou travailleurs en horaires décalés. Aide à la resynchronisation de l'horloge interne et à la qualité du sommeil dans des conditions atypiques.",
  indications: ["Jet lag", "Travail de nuit ou en 3x8", "Horaires irréguliers (médecins de garde, etc.)", "Voyageurs fréquents"],
  contraindications: ["Patients avec troubles psychiatriques fragilisés par les décalages"],
  programs: [{
    id: "principal",
    title: "Décalage horaire et travail posté — Resynchronisation de l'horloge",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Décalage horaire et travail posté — Resynchronisation de l'horloge",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour voyageurs traversant des fuseaux horaires ou travailleurs en horaires décalés. Aide à la resynchronisation de l'horloge interne et à la qualité du sommeil dans des conditions atypiques." }
      ],
    }],
  }],
  outils: [
    { name: "Programmation de l'horloge interne", type: "Levier", icon: "🎯", desc: "Aide à la synchronisation circadienne" },
    { name: "Suggestions de sommeil profond malgré contexte difficile", type: "Levier", icon: "🎯", desc: "Aide à la synchronisation circadienne" },
    { name: "Lumière comme synchroniseur", type: "Levier", icon: "🎯", desc: "Aide à la synchronisation circadienne" },
    { name: "Adaptation", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Ressources mobilisées", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur rythmes ne fonctionne pas pour moi"],
};

const k_651: ProtocolDetail = {
  protocolId: 651,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Réactionnel",
  description: "Pour patients dont le sommeil est perturbé suite à un événement marquant : deuil, séparation, déménagement, changement professionnel. Aide à traverser sans que l'insomnie ne devienne chronique.",
  indications: ["Insomnie réactionnelle à un événement", "Période de transition de vie", "Deuil récent", "Stress aigu mais non traumatique"],
  contraindications: ["Trauma vrai (protocole spécifique)", "Dépression réactionnelle nécessitant accompagnement spécifique"],
  programs: [{
    id: "principal",
    title: "Insomnie post-événementielle — Quand un événement perturbe la nuit",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Insomnie post-événementielle — Quand un événement perturbe la nuit",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients dont le sommeil est perturbé suite à un événement marquant : deuil, séparation, déménagement, changement professionnel. Aide à traverser sans que l'insomnie ne devienne chronique." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation de l'agitation", type: "Levier", icon: "🎯", desc: "Soutien du sommeil pendant transition" },
    { name: "Distinction nuit pour digérer / nuit pour reposer", type: "Levier", icon: "🎯", desc: "Soutien du sommeil pendant transition" },
    { name: "Permission de la traversée", type: "Levier", icon: "🎯", desc: "Soutien du sommeil pendant transition" },
    { name: "Traversée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Permission", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur réactionnel ne fonctionne pas pour moi"],
};

const k_652: ProtocolDetail = {
  protocolId: 652,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Pédiatrique",
  description: "Adaptation pour enfants de 4 à 12 ans souffrant de troubles d'endormissement, peurs nocturnes, cauchemars. Imagerie ludique, présence rassurante des parents.",
  indications: ["Difficultés d'endormissement chez l'enfant", "Peurs du noir", "Cauchemars répétés", "Refus du coucher"],
  contraindications: ["Trauma infantile (cadre psychothérapeutique requis)", "Très jeunes enfants (- 4 ans)"],
  programs: [{
    id: "principal",
    title: "Sommeil de l'enfant — Accompagner le coucher",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sommeil de l'enfant — Accompagner le coucher",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Adaptation pour enfants de 4 à 12 ans souffrant de troubles d'endormissement, peurs nocturnes, cauchemars. Imagerie ludique, présence rassurante des parents." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie ludique adaptée à l'âge", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour le sommeil" },
    { name: "Implication des parents", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour le sommeil" },
    { name: "Personnages protecteurs imaginaires", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour le sommeil" },
    { name: "Sécurité enfantine", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Imagination ressource", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pédiatrique ne fonctionne pas pour moi"],
};

const k_653: ProtocolDetail = {
  protocolId: 653,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Grossesse",
  description: "Pour femmes enceintes en fin de grossesse confrontées à inconforts physiques, anxiétés, réveils fréquents. Adaptations spécifiques au contexte gravidique.",
  indications: ["Insomnie du dernier trimestre", "Inconforts physiques nocturnes (lombaires, mouvements bébé, mictions)", "Anxiétés liées à l'accouchement à venir", "Préparation à la maternité"],
  contraindications: ["Pathologies de la grossesse nécessitant cadre médical strict"],
  programs: [{
    id: "principal",
    title: "Sommeil et grossesse — Accompagner les nuits du dernier trimestre",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sommeil et grossesse — Accompagner les nuits du dernier trimestre",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes enceintes en fin de grossesse confrontées à inconforts physiques, anxiétés, réveils fréquents. Adaptations spécifiques au contexte gravidique." }
      ],
    }],
  }],
  outils: [
    { name: "Acceptation des inconforts comme passagers", type: "Levier", icon: "🎯", desc: "Adaptation du sommeil au contexte gravidique" },
    { name: "Connexion au bébé pendant le repos", type: "Levier", icon: "🎯", desc: "Adaptation du sommeil au contexte gravidique" },
    { name: "Dépose des anxiétés de l'accouchement", type: "Levier", icon: "🎯", desc: "Adaptation du sommeil au contexte gravidique" },
    { name: "Maternité accueillie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sommeil partagé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur grossesse ne fonctionne pas pour moi"],
};

const k_654: ProtocolDetail = {
  protocolId: 654,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Personne âgée",
  description: "Pour seniors confrontés aux modifications physiologiques du sommeil avec l'âge : nuits plus courtes, plus fragmentées, réveils précoces. Adaptation des attentes et optimisation du repos.",
  indications: ["Insomnie du sujet âgé", "Réveils précoces non dépressifs", "Sommeil fragmenté lié à l'âge", "Anxiété liée à l'évolution du sommeil"],
  contraindications: ["Dépression chez la personne âgée (à traiter en priorité)", "Démence avancée"],
  programs: [{
    id: "principal",
    title: "Sommeil de la personne âgée — Adapter aux nouveaux rythmes",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sommeil de la personne âgée — Adapter aux nouveaux rythmes",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour seniors confrontés aux modifications physiologiques du sommeil avec l'âge : nuits plus courtes, plus fragmentées, réveils précoces. Adaptation des attentes et optimisation du repos." }
      ],
    }],
  }],
  outils: [
    { name: "Dédramatisation des changements physiologiques", type: "Levier", icon: "🎯", desc: "Adaptation aux modifications physiologiques du sommeil avec l'âge" },
    { name: "Acceptation de nuits différentes", type: "Levier", icon: "🎯", desc: "Adaptation aux modifications physiologiques du sommeil avec l'âge" },
    { name: "Optimisation du sommeil possible", type: "Levier", icon: "🎯", desc: "Adaptation aux modifications physiologiques du sommeil avec l'âge" },
    { name: "Sagesse", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Acceptation des saisons", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur personne âgée ne fonctionne pas pour moi"],
};

const k_655: ProtocolDetail = {
  protocolId: 655,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Bruxisme",
  description: "Pour patients qui serrent ou grincent des dents la nuit. Travail sur la relaxation de la mâchoire au coucher, dépose des tensions accumulées, suggestion de relâchement nocturne.",
  indications: ["Bruxisme nocturne", "Tension mâchoire au réveil", "Maux de tête matinaux liés à la mâchoire", "Usure dentaire confirmée par dentiste"],
  contraindications: ["Pathologie articulaire ATM nécessitant suivi spécialisé"],
  programs: [{
    id: "principal",
    title: "Bruxisme nocturne — Relâcher la mâchoire qui serre",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Bruxisme nocturne — Relâcher la mâchoire qui serre",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui serrent ou grincent des dents la nuit. Travail sur la relaxation de la mâchoire au coucher, dépose des tensions accumulées, suggestion de relâchement nocturne." }
      ],
    }],
  }],
  outils: [
    { name: "Relaxation spécifique de la mâchoire", type: "Levier", icon: "🎯", desc: "Relaxation ciblée mâchoire et reprogrammation nocturne" },
    { name: "Identification des tensions diurnes refoulées", type: "Levier", icon: "🎯", desc: "Relaxation ciblée mâchoire et reprogrammation nocturne" },
    { name: "Suggestion de relâchement nocturne", type: "Levier", icon: "🎯", desc: "Relaxation ciblée mâchoire et reprogrammation nocturne" },
    { name: "Mâchoire libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Dents qui ne portent rien", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur bruxisme ne fonctionne pas pour moi"],
};

const k_656: ProtocolDetail = {
  protocolId: 656,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Cauchemars",
  description: "Technique de répétition imaginaire (rehearsal) pour cauchemars récurrents non liés à un trauma identifiable. Réécriture du scénario en éveil pour modifier le contenu nocturne.",
  indications: ["Cauchemars répétitifs non traumatiques", "Mêmes scénarios qui reviennent", "Cauchemars qui réveillent et empêchent le rendormissement"],
  contraindications: ["Cauchemars de reviviscence d'un trauma identifiable (protocole trauma)", "Trouble psychotique"],
  programs: [{
    id: "principal",
    title: "Cauchemars récurrents non traumatiques — Réécrire le scénario",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Cauchemars récurrents non traumatiques — Réécrire le scénario",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Technique de répétition imaginaire (rehearsal) pour cauchemars récurrents non liés à un trauma identifiable. Réécriture du scénario en éveil pour modifier le contenu nocturne." }
      ],
    }],
  }],
  outils: [
    { name: "Reprise consciente du contenu", type: "Levier", icon: "🎯", desc: "Imagery Rehearsal Therapy adaptée" },
    { name: "Modification créative du scénario", type: "Levier", icon: "🎯", desc: "Imagery Rehearsal Therapy adaptée" },
    { name: "Répétition mentale en éveil", type: "Levier", icon: "🎯", desc: "Imagery Rehearsal Therapy adaptée" },
    { name: "Réécriture", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souveraineté sur le rêve", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cauchemars ne fonctionne pas pour moi"],
};

const k_657: ProtocolDetail = {
  protocolId: 657,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Sevrage",
  description: "Accompagnement hypnotique du sevrage progressif de somnifères (benzodiazépines, Z-drugs) en coordination avec le médecin prescripteur. Transition vers ressources autonomes.",
  indications: ["Sevrage de benzodiazépines pour le sommeil", "Sevrage de zolpidem/zopiclone", "Patients qui ont peur d'arrêter leur somnifère"],
  contraindications: ["Sevrage non coordonné avec médecin prescripteur", "Sevrage d'autres molécules psychotropes nécessitant cadre spécifique"],
  programs: [{
    id: "principal",
    title: "Sevrage des somnifères — Transition accompagnée",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sevrage des somnifères — Transition accompagnée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Accompagnement hypnotique du sevrage progressif de somnifères (benzodiazépines, Z-drugs) en coordination avec le médecin prescripteur. Transition vers ressources autonomes." }
      ],
    }],
  }],
  outils: [
    { name: "Installation préalable de ressources de sommeil", type: "Levier", icon: "🎯", desc: "Accompagnement de sevrage avec installation de ressources autonomes" },
    { name: "Confiance dans la capacité naturelle à dormir", type: "Levier", icon: "🎯", desc: "Accompagnement de sevrage avec installation de ressources autonomes" },
    { name: "Suggestion de potentialisation décroissante", type: "Levier", icon: "🎯", desc: "Accompagnement de sevrage avec installation de ressources autonomes" },
    { name: "Reprise de soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance corporelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sevrage ne fonctionne pas pour moi"],
};

const k_658: ProtocolDetail = {
  protocolId: 658,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Sieste",
  description: "Technique de sieste courte et efficace : 15-20 minutes de récupération profonde sans entrer en sommeil paradoxal. Pour patients qui peinent à faire la sieste ou qui veulent en optimiser la qualité.",
  indications: ["Apprentissage de la sieste réparatrice", "Patients en surcharge ayant besoin de récupération diurne", "Travailleurs en horaires intenses", "Étudiants en période d'examens"],
  contraindications: ["Insomnie nocturne (la sieste peut l'aggraver)"],
  programs: [{
    id: "principal",
    title: "Sieste réparatrice — L'art du repos court",
    icon: "◑",
    duration: "20 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sieste réparatrice — L'art du repos court",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Technique de sieste courte et efficace : 15-20 minutes de récupération profonde sans entrer en sommeil paradoxal. Pour patients qui peinent à faire la sieste ou qui veulent en optimiser la qualité." }
      ],
    }],
  }],
  outils: [
    { name: "Cadre temporel court délibéré", type: "Levier", icon: "🎯", desc: "Apprentissage technique sieste courte" },
    { name: "Profondeur sans paradoxal", type: "Levier", icon: "🎯", desc: "Apprentissage technique sieste courte" },
    { name: "Suggestion de réveil automatique", type: "Levier", icon: "🎯", desc: "Apprentissage technique sieste courte" },
    { name: "Pause juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Récupération efficace", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sieste ne fonctionne pas pour moi"],
};

const k_659: ProtocolDetail = {
  protocolId: 659,
  efficacite: "KIIKA",
  efficaciteSub: "Sommeil / Rituel",
  description: "Construction d'un rituel de coucher complet, à la fois pratique (hygiène du sommeil) et symbolique (rituel KIIKA). Brique fondatrice du sommeil sur le long terme.",
  indications: ["Tous les patients ayant des troubles du sommeil", "Préventif chez personnes à risque", "Personnes voulant améliorer leur sommeil sans pathologie"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Hygiène du sommeil et rituel du soir — Préparation profonde",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hygiène du sommeil et rituel du soir — Préparation profonde",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Construction d'un rituel de coucher complet, à la fois pratique (hygiène du sommeil) et symbolique (rituel KIIKA). Brique fondatrice du sommeil sur le long terme." }
      ],
    }],
  }],
  outils: [
    { name: "Hygiène du sommeil concrète", type: "Levier", icon: "🎯", desc: "Construction d'un rituel complet de transition vers le sommeil" },
    { name: "Marqueurs de transition", type: "Levier", icon: "🎯", desc: "Construction d'un rituel complet de transition vers le sommeil" },
    { name: "Rituel symbolique KIIKA", type: "Levier", icon: "🎯", desc: "Construction d'un rituel complet de transition vers le sommeil" },
    { name: "Rituel", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Transition", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur rituel ne fonctionne pas pour moi"],
};

const k_660: ProtocolDetail = {
  protocolId: 660,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Chronique",
  description: "Protocole de fond pour patients vivant avec une douleur chronique persistante. Travail sur le rapport à la douleur plutôt que sur sa suppression : différenciation douleur primaire / souffrance secondaire, restauration de zones non-douloureuses, dépose de la lutte épuisante.",
  indications: ["Douleur chronique de plus de 3 mois", "Patients épuisés par la lutte contre la douleur", "Premier travail hypnotique anti-douleur", "Préparation à des protocoles plus spécifiques"],
  contraindications: ["Douleur aiguë non explorée médicalement", "Patient en demande de suppression complète de toute sensation"],
  programs: [{
    id: "principal",
    title: "Douleur chronique généralisée — Restaurer une relation soutenable",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur chronique généralisée — Restaurer une relation soutenable",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole de fond pour patients vivant avec une douleur chronique persistante. Travail sur le rapport à la douleur plutôt que sur sa suppression : différenciation douleur primaire / souffrance secondaire, restauration de zones non-douloureuses, dépose de la lutte épuisante." }
      ],
    }],
  }],
  outils: [
    { name: "Différenciation douleur / souffrance", type: "Levier", icon: "🎯", desc: "Travail relationnel à la douleur chronique" },
    { name: "Cartographie corporelle des zones non-douloureuses", type: "Levier", icon: "🎯", desc: "Travail relationnel à la douleur chronique" },
    { name: "Dépose de la lutte", type: "Levier", icon: "🎯", desc: "Travail relationnel à la douleur chronique" },
    { name: "Cohabitation", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Relation juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur chronique ne fonctionne pas pour moi"],
};

const k_661: ProtocolDetail = {
  protocolId: 661,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Lombaire",
  description: "Pour douleur lombaire chronique non spécifique. Travail spécifique sur la décrispation de la zone lombaire, désinvestissement du cycle peur-tension-douleur, restauration progressive du mouvement.",
  indications: ["Lombalgie chronique non spécifique", "Lumbago à répétition", "Patients en évitement par peur du mouvement", "Suite de lombalgie aiguë chronicisée"],
  contraindications: ["Hernie discale aiguë avec signes neurologiques (urgence)", "Diagnostic spécifique non fait (toujours bilan médical d'abord)"],
  programs: [{
    id: "principal",
    title: "Lombalgie chronique — Décrisper le bas du dos",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Lombalgie chronique — Décrisper le bas du dos",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleur lombaire chronique non spécifique. Travail spécifique sur la décrispation de la zone lombaire, désinvestissement du cycle peur-tension-douleur, restauration progressive du mouvement." }
      ],
    }],
  }],
  outils: [
    { name: "Relaxation localisée des muscles paravertébraux", type: "Levier", icon: "🎯", desc: "Décrispation ciblée et restauration du mouvement" },
    { name: "Désinvestissement du cycle peur-tension", type: "Levier", icon: "🎯", desc: "Décrispation ciblée et restauration du mouvement" },
    { name: "Imagerie de souplesse retrouvée", type: "Levier", icon: "🎯", desc: "Décrispation ciblée et restauration du mouvement" },
    { name: "Bas du dos qui respire", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souplesse retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur lombaire ne fonctionne pas pour moi"],
};

const k_662: ProtocolDetail = {
  protocolId: 662,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Céphalées",
  description: "Pour migraines récurrentes et céphalées de tension. Travail en deux temps : désamorçage de la crise installée par modification des sous-modalités, et travail préventif entre les crises sur les facteurs déclenchants.",
  indications: ["Migraines récurrentes", "Céphalées de tension", "Migraines liées au stress", "Patients voulant complément aux traitements médicamenteux"],
  contraindications: ["Céphalées d'apparition récente non explorées (urgence neurologique)", "Céphalées brutales (toujours)"],
  programs: [{
    id: "principal",
    title: "Migraines et céphalées — Désamorçage et prévention",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Migraines et céphalées — Désamorçage et prévention",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour migraines récurrentes et céphalées de tension. Travail en deux temps : désamorçage de la crise installée par modification des sous-modalités, et travail préventif entre les crises sur les facteurs déclenchants." }
      ],
    }],
  }],
  outils: [
    { name: "Modification des sous-modalités douloureuses", type: "Levier", icon: "🎯", desc: "Travail double : désamorçage de crise et prévention" },
    { name: "Imagerie de fraîcheur localisée", type: "Levier", icon: "🎯", desc: "Travail double : désamorçage de crise et prévention" },
    { name: "Repérage et désamorçage des prodromes", type: "Levier", icon: "🎯", desc: "Travail double : désamorçage de crise et prévention" },
    { name: "Tête libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Fraîcheur ciblée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur céphalées ne fonctionne pas pour moi"],
};

const k_663: ProtocolDetail = {
  protocolId: 663,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Fibromyalgie",
  description: "Pour patients atteints de fibromyalgie. Travail spécifique sur l'hypersensibilisation centrale, restauration des zones de moindre douleur, gestion de la fatigue associée, dépose progressive de l'épuisement.",
  indications: ["Fibromyalgie diagnostiquée", "Syndrome de sensibilisation centrale", "Douleurs diffuses chroniques avec fatigue", "Patients épuisés par leur condition"],
  contraindications: ["Pathologies inflammatoires non diagnostiquées (toujours bilan rhumatologique d'abord)"],
  programs: [{
    id: "principal",
    title: "Fibromyalgie — Apaiser le système nerveux sensibilisé",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Fibromyalgie — Apaiser le système nerveux sensibilisé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de fibromyalgie. Travail spécifique sur l'hypersensibilisation centrale, restauration des zones de moindre douleur, gestion de la fatigue associée, dépose progressive de l'épuisement." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement du système nerveux", type: "Levier", icon: "🎯", desc: "Apaisement de la sensibilisation centrale et restauration" },
    { name: "Cartographie corporelle nuancée", type: "Levier", icon: "🎯", desc: "Apaisement de la sensibilisation centrale et restauration" },
    { name: "Légitimation de la condition", type: "Levier", icon: "🎯", desc: "Apaisement de la sensibilisation centrale et restauration" },
    { name: "Système qui s'apaise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Légitimité du vécu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur fibromyalgie ne fonctionne pas pour moi"],
};

const k_664: ProtocolDetail = {
  protocolId: 664,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Post-opératoire",
  description: "Préparation pré-opératoire et accompagnement post-opératoire pour réduction de la douleur, accélération de la récupération, diminution des besoins en antalgiques. Idéalement pratiqué en plusieurs séances.",
  indications: ["Préparation à une intervention chirurgicale programmée", "Réduction de la douleur post-opératoire", "Accélération de la cicatrisation et récupération", "Diminution de l'anxiété pré-opératoire"],
  contraindications: ["Aucune en complément du suivi chirurgical"],
  programs: [{
    id: "principal",
    title: "Douleur post-opératoire — Récupération accélérée",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur post-opératoire — Récupération accélérée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Préparation pré-opératoire et accompagnement post-opératoire pour réduction de la douleur, accélération de la récupération, diminution des besoins en antalgiques. Idéalement pratiqué en plusieurs séances." }
      ],
    }],
  }],
  outils: [
    { name: "Suggestions de récupération rapide", type: "Levier", icon: "🎯", desc: "Préparation pré-opératoire et programmation post-opératoire" },
    { name: "Programmation du confort post-opératoire", type: "Levier", icon: "🎯", desc: "Préparation pré-opératoire et programmation post-opératoire" },
    { name: "Confiance dans l'équipe soignante", type: "Levier", icon: "🎯", desc: "Préparation pré-opératoire et programmation post-opératoire" },
    { name: "Préparation tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps qui guérit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur post-opératoire ne fonctionne pas pour moi"],
};

const k_665: ProtocolDetail = {
  protocolId: 665,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Neuropathique",
  description: "Pour douleurs neuropathiques (neuropathie diabétique, post-zostérienne, post-chimio, neuropathie périphérique). Travail spécifique sur la nature particulière de cette douleur, modification des sensations brûlantes ou électriques.",
  indications: ["Neuropathie diabétique", "Douleur post-zostérienne", "Neuropathie post-chimiothérapie", "Causalgie", "Sensations brûlantes ou électriques chroniques"],
  contraindications: ["Cause neuropathique non traitée médicalement"],
  programs: [{
    id: "principal",
    title: "Douleur neuropathique — Apprivoiser le signal défaillant",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur neuropathique — Apprivoiser le signal défaillant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs neuropathiques (neuropathie diabétique, post-zostérienne, post-chimio, neuropathie périphérique). Travail spécifique sur la nature particulière de cette douleur, modification des sensations brûlantes ou électriques." }
      ],
    }],
  }],
  outils: [
    { name: "Modification des qualités sensorielles", type: "Levier", icon: "🎯", desc: "Modification de signal nerveux défaillant" },
    { name: "Substitution sensorielle (chaleur agréable, fraîcheur)", type: "Levier", icon: "🎯", desc: "Modification de signal nerveux défaillant" },
    { name: "Recadrage du signal défaillant", type: "Levier", icon: "🎯", desc: "Modification de signal nerveux défaillant" },
    { name: "Signal apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sensations modifiables", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neuropathique ne fonctionne pas pour moi"],
};

const k_666: ProtocolDetail = {
  protocolId: 666,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Aiguë et soins",
  description: "Pour douleurs aiguës répétées liées à des soins (pansements, ponctions, kinésithérapie douloureuse, soins dentaires longs). Installation rapide de dispositifs anti-douleur utilisables en soin.",
  indications: ["Pansements de brûlés", "Ponctions répétées", "Kinésithérapie post-traumatique", "Soins dentaires longs", "Patients en parcours de soins long"],
  contraindications: ["Aucune en complément des soins"],
  programs: [{
    id: "principal",
    title: "Douleur aiguë et soins répétés — Traverser sans s'épuiser",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur aiguë et soins répétés — Traverser sans s'épuiser",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs aiguës répétées liées à des soins (pansements, ponctions, kinésithérapie douloureuse, soins dentaires longs). Installation rapide de dispositifs anti-douleur utilisables en soin." }
      ],
    }],
  }],
  outils: [
    { name: "Dissociation par le lieu sûr", type: "Levier", icon: "🎯", desc: "Installation rapide de ressources anti-douleur pour soins" },
    { name: "Anesthésie locale par imagerie", type: "Levier", icon: "🎯", desc: "Installation rapide de ressources anti-douleur pour soins" },
    { name: "Modification des sensations en cours de soin", type: "Levier", icon: "🎯", desc: "Installation rapide de ressources anti-douleur pour soins" },
    { name: "Ailleurs pendant le soin", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Anesthésie imaginée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur aiguë et soins ne fonctionne pas pour moi"],
};

const k_667: ProtocolDetail = {
  protocolId: 667,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Oncologie",
  description: "Accompagnement hypnotique de la douleur en contexte de cancer. Travail spécifique adapté à un parcours souvent long et complexe : douleurs liées à la maladie, aux traitements, à la fatigue, à l'angoisse. En strict complément du suivi oncologique.",
  indications: ["Douleurs cancéreuses (tumorales, des traitements, post-chirurgicales)", "Patients en cours de traitement oncologique", "Douleurs en soins palliatifs", "Effets secondaires douloureux des chimiothérapies"],
  contraindications: ["Substitut au traitement antalgique médical (jamais)"],
  programs: [{
    id: "principal",
    title: "Douleur cancéreuse — Confort dans la traversée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur cancéreuse — Confort dans la traversée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Accompagnement hypnotique de la douleur en contexte de cancer. Travail spécifique adapté à un parcours souvent long et complexe : douleurs liées à la maladie, aux traitements, à la fatigue, à l'angoisse. En strict complément du suivi oncologique." }
      ],
    }],
  }],
  outils: [
    { name: "Confort multidimensionnel", type: "Levier", icon: "🎯", desc: "Accompagnement de la douleur cancéreuse" },
    { name: "Soutien à la résistance physique et psychique", type: "Levier", icon: "🎯", desc: "Accompagnement de la douleur cancéreuse" },
    { name: "Restauration de zones de bien-être", type: "Levier", icon: "🎯", desc: "Accompagnement de la douleur cancéreuse" },
    { name: "Confort dans le difficile", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vie qui continue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie ne fonctionne pas pour moi"],
};

const k_668: ProtocolDetail = {
  protocolId: 668,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Articulaire",
  description: "Pour douleurs articulaires chroniques (arthrose, polyarthrite stabilisée, séquelles articulaires). Travail sur le confort des articulations, la lubrification imagée, la diminution de l'inflammation perçue.",
  indications: ["Arthrose (genoux, hanches, mains, colonne)", "Polyarthrite rhumatoïde stabilisée", "Séquelles articulaires post-traumatiques", "Douleurs chroniques liées à l'âge"],
  contraindications: ["Poussée inflammatoire aiguë non traitée", "Arthrite septique"],
  programs: [{
    id: "principal",
    title: "Douleur articulaire chronique — Arthrose et inflammations",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur articulaire chronique — Arthrose et inflammations",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs articulaires chroniques (arthrose, polyarthrite stabilisée, séquelles articulaires). Travail sur le confort des articulations, la lubrification imagée, la diminution de l'inflammation perçue." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie de lubrification", type: "Levier", icon: "🎯", desc: "Confort articulaire et imagerie de fluidité" },
    { name: "Diminution de l'inflammation perçue", type: "Levier", icon: "🎯", desc: "Confort articulaire et imagerie de fluidité" },
    { name: "Mobilité progressive", type: "Levier", icon: "🎯", desc: "Confort articulaire et imagerie de fluidité" },
    { name: "Articulation qui respire", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Fluidité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur articulaire ne fonctionne pas pour moi"],
};

const k_669: ProtocolDetail = {
  protocolId: 669,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Post-traumatique",
  description: "Pour douleurs persistant longtemps après un traumatisme physique guéri (accident, fracture consolidée, blessure réparée). Travail sur le décalage entre tissu réparé et système nerveux qui continue à signaler.",
  indications: ["Douleur résiduelle après guérison anatomique", "Algodystrophie chronicisée", "Séquelles douloureuses d'accident", "Douleurs post-fracture après consolidation"],
  contraindications: ["Cause anatomique non explorée"],
  programs: [{
    id: "principal",
    title: "Douleur post-traumatique chronique — Quand la blessure ancienne reste vive",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur post-traumatique chronique — Quand la blessure ancienne reste vive",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs persistant longtemps après un traumatisme physique guéri (accident, fracture consolidée, blessure réparée). Travail sur le décalage entre tissu réparé et système nerveux qui continue à signaler." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de la guérison anatomique", type: "Levier", icon: "🎯", desc: "Recadrage du signal et reconnexion zone-corps" },
    { name: "Mise à jour du système nerveux", type: "Levier", icon: "🎯", desc: "Recadrage du signal et reconnexion zone-corps" },
    { name: "Reconnexion de la zone au schéma corporel sain", type: "Levier", icon: "🎯", desc: "Recadrage du signal et reconnexion zone-corps" },
    { name: "Guérison reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mise à jour", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur post-traumatique ne fonctionne pas pour moi"],
};

const k_670: ProtocolDetail = {
  protocolId: 670,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Viscérale",
  description: "Pour douleurs viscérales chroniques fonctionnelles : côlon irritable, dyspepsie fonctionnelle, douleurs pelviennes chroniques. Travail sur l'axe cerveau-intestin et l'apaisement des viscères.",
  indications: ["Syndrome du côlon irritable", "Dyspepsie fonctionnelle", "Douleurs pelviennes chroniques fonctionnelles", "Spasmes digestifs récurrents"],
  contraindications: ["Pathologies organiques non écartées (toujours bilan)", "Endométriose non diagnostiquée"],
  programs: [{
    id: "principal",
    title: "Douleurs viscérales chroniques — Apaiser le ventre qui parle",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleurs viscérales chroniques — Apaiser le ventre qui parle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs viscérales chroniques fonctionnelles : côlon irritable, dyspepsie fonctionnelle, douleurs pelviennes chroniques. Travail sur l'axe cerveau-intestin et l'apaisement des viscères." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie d'apaisement viscéral", type: "Levier", icon: "🎯", desc: "Apaisement du système digestif et axe cerveau-intestin" },
    { name: "Chaleur ou fraîcheur abdominale selon ressenti", type: "Levier", icon: "🎯", desc: "Apaisement du système digestif et axe cerveau-intestin" },
    { name: "Régulation de l'axe cerveau-intestin", type: "Levier", icon: "🎯", desc: "Apaisement du système digestif et axe cerveau-intestin" },
    { name: "Ventre apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Digestion paisible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur viscérale ne fonctionne pas pour moi"],
};

const k_671: ProtocolDetail = {
  protocolId: 671,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Gynécologique",
  description: "Pour dysménorrhée invalidante. Travail spécifique sur les douleurs des règles : préparation du cycle, gestion de la phase douloureuse, apaisement utérin par imagerie chaleur et lâcher-prise.",
  indications: ["Dysménorrhée primaire ou secondaire", "Règles douloureuses récurrentes", "SPM avec douleurs", "Suivi en complément médical (endométriose, etc.)"],
  contraindications: ["Endométriose suspectée non explorée", "Pathologie gynécologique non diagnostiquée"],
  programs: [{
    id: "principal",
    title: "Douleurs menstruelles — Accompagner les cycles",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleurs menstruelles — Accompagner les cycles",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour dysménorrhée invalidante. Travail spécifique sur les douleurs des règles : préparation du cycle, gestion de la phase douloureuse, apaisement utérin par imagerie chaleur et lâcher-prise." }
      ],
    }],
  }],
  outils: [
    { name: "Préparation à l'arrivée des règles", type: "Levier", icon: "🎯", desc: "Accompagnement cyclique des douleurs menstruelles" },
    { name: "Imagerie chaleur ventrale", type: "Levier", icon: "🎯", desc: "Accompagnement cyclique des douleurs menstruelles" },
    { name: "Lâcher-prise utérin", type: "Levier", icon: "🎯", desc: "Accompagnement cyclique des douleurs menstruelles" },
    { name: "Cycle accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Utérus accompagné", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologique ne fonctionne pas pour moi"],
};

const k_672: ProtocolDetail = {
  protocolId: 672,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Membre fantôme",
  description: "Pour patients amputés présentant des douleurs du membre fantôme. Travail spécifique sur cette douleur particulière : reconnaissance, modification par imagerie, miroir mental, intégration progressive de l'absence.",
  indications: ["Douleur du membre fantôme post-amputation", "Sensations désagréables dans le membre absent", "Patients en suivi post-amputation"],
  contraindications: ["Amputation très récente avec processus de deuil aigu (cadre psychothérapeutique requis)"],
  programs: [{
    id: "principal",
    title: "Douleur du membre fantôme — Apprivoiser ce qui n'est plus là",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur du membre fantôme — Apprivoiser ce qui n'est plus là",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients amputés présentant des douleurs du membre fantôme. Travail spécifique sur cette douleur particulière : reconnaissance, modification par imagerie, miroir mental, intégration progressive de l'absence." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance du phénomène", type: "Levier", icon: "🎯", desc: "Travail sur la cartographie cérébrale du membre absent" },
    { name: "Imagerie de mouvement libre du membre fantôme", type: "Levier", icon: "🎯", desc: "Travail sur la cartographie cérébrale du membre absent" },
    { name: "Effet miroir mental", type: "Levier", icon: "🎯", desc: "Travail sur la cartographie cérébrale du membre absent" },
    { name: "Cartographie qui s'apaise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Membre fantôme libéré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur membre fantôme ne fonctionne pas pour moi"],
};

const k_673: ProtocolDetail = {
  protocolId: 673,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Dentaire",
  description: "Pour patients devant subir des soins dentaires longs ou douloureux : implants, extractions multiples, traitements de canaux, chirurgie maxillo-faciale. Préparation et accompagnement.",
  indications: ["Préparation à intervention dentaire", "Phobie dentaire associée à la douleur", "Soins longs (orthodontie, implants)", "Patients ayant peur des injections d'anesthésie locale"],
  contraindications: ["Aucune en complément des soins"],
  programs: [{
    id: "principal",
    title: "Douleur dentaire et soins longs — Confort dans le fauteuil",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur dentaire et soins longs — Confort dans le fauteuil",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients devant subir des soins dentaires longs ou douloureux : implants, extractions multiples, traitements de canaux, chirurgie maxillo-faciale. Préparation et accompagnement." }
      ],
    }],
  }],
  outils: [
    { name: "Lieu sûr accessible en fauteuil", type: "Levier", icon: "🎯", desc: "Préparation et accompagnement de soins dentaires" },
    { name: "Anesthésie imaginée complémentaire", type: "Levier", icon: "🎯", desc: "Préparation et accompagnement de soins dentaires" },
    { name: "Modification du temps perçu", type: "Levier", icon: "🎯", desc: "Préparation et accompagnement de soins dentaires" },
    { name: "Fauteuil traversé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Bouche tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dentaire ne fonctionne pas pour moi"],
};

const k_674: ProtocolDetail = {
  protocolId: 674,
  efficacite: "KIIKA",
  efficaciteSub: "Douleur / Auto-hypnose",
  description: "Protocole-pivot d'apprentissage de l'auto-hypnose anti-douleur. Pour patients avancés dans le travail anti-douleur, ayant déjà installé les ressources de base. Permet la pratique autonome quotidienne.",
  indications: ["Patients ayant fait plusieurs séances anti-douleur", "Patients en transition vers l'autonomie", "Douleurs chroniques nécessitant pratique quotidienne", "Volonté de réduire la dépendance aux séances"],
  contraindications: ["Patients très fragiles encore non stabilisés", "Première phase de traitement anti-douleur"],
  programs: [{
    id: "principal",
    title: "Auto-hypnose anti-douleur — Le dispositif quotidien",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Auto-hypnose anti-douleur — Le dispositif quotidien",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole-pivot d'apprentissage de l'auto-hypnose anti-douleur. Pour patients avancés dans le travail anti-douleur, ayant déjà installé les ressources de base. Permet la pratique autonome quotidienne." }
      ],
    }],
  }],
  outils: [
    { name: "Synthèse des techniques apprises", type: "Levier", icon: "🎯", desc: "Apprentissage et installation du dispositif d'auto-hypnose anti-douleur" },
    { name: "Installation d'un protocole personnel court", type: "Levier", icon: "🎯", desc: "Apprentissage et installation du dispositif d'auto-hypnose anti-douleur" },
    { name: "Pratique guidée puis autonome", type: "Levier", icon: "🎯", desc: "Apprentissage et installation du dispositif d'auto-hypnose anti-douleur" },
    { name: "Autonomie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Outils intégrés", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur auto-hypnose ne fonctionne pas pour moi"],
};

export const kiikaHammondDetails: Record<number, ProtocolDetail> = {
  600: k_600,
  601: k_601,
  602: k_602,
  603: k_603,
  604: k_604,
  605: k_605,
  606: k_606,
  607: k_607,
  608: k_608,
  609: k_609,
  610: k_610,
  611: k_611,
  612: k_612,
  613: k_613,
  614: k_614,
  615: k_615,
  616: k_616,
  617: k_617,
  618: k_618,
  619: k_619,
  620: k_620,
  621: k_621,
  622: k_622,
  623: k_623,
  624: k_624,
  625: k_625,
  626: k_626,
  627: k_627,
  628: k_628,
  629: k_629,
  630: k_630,
  631: k_631,
  632: k_632,
  633: k_633,
  634: k_634,
  635: k_635,
  636: k_636,
  637: k_637,
  638: k_638,
  639: k_639,
  640: k_640,
  641: k_641,
  642: k_642,
  643: k_643,
  644: k_644,
  645: k_645,
  646: k_646,
  647: k_647,
  648: k_648,
  649: k_649,
  650: k_650,
  651: k_651,
  652: k_652,
  653: k_653,
  654: k_654,
  655: k_655,
  656: k_656,
  657: k_657,
  658: k_658,
  659: k_659,
  660: k_660,
  661: k_661,
  662: k_662,
  663: k_663,
  664: k_664,
  665: k_665,
  666: k_666,
  667: k_667,
  668: k_668,
  669: k_669,
  670: k_670,
  671: k_671,
  672: k_672,
  673: k_673,
  674: k_674,
};