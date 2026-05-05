import type { ProtocolDetail } from "./types";

/**
 * Fiches détaillées KIIKA Hammond (IDs 600-792 + 1000-1069) — remplacent les anciens Hammond.
 * Source : Varinka Robert — fiches KIIKA v3 (Cercles 1+2+3+4+5+6+7).
 * 263 protocoles avec scripts complets, structure technique, dimensions KIIKA.
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

const k_675: ProtocolDetail = {
  protocolId: 675,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Cardio-vasculaire",
  description: "Pour patients hypertendus en complément du suivi médical. Travail sur l'apaisement du système nerveux autonome, la régulation respiratoire, la gestion du stress chronique. Sans modification du traitement médicamenteux.",
  indications: ["Hypertension artérielle essentielle", "HTA labile liée au stress", "Patients en complément des antihypertenseurs", "Sujets à risque cardio-vasculaire (prévention)"],
  contraindications: ["HTA secondaire non explorée", "Crise hypertensive (urgence médicale)"],
  programs: [{
    id: "principal",
    title: "Hypertension artérielle — Apaiser le système",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypertension artérielle — Apaiser le système",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients hypertendus en complément du suivi médical. Travail sur l'apaisement du système nerveux autonome, la régulation respiratoire, la gestion du stress chronique. Sans modification du traitement médicamenteux." }
      ],
    }],
  }],
  outils: [
    { name: "Activation parasympathique par respiration", type: "Levier", icon: "🎯", desc: "Régulation du système nerveux autonome" },
    { name: "Apaisement de la vigilance chronique", type: "Levier", icon: "🎯", desc: "Régulation du système nerveux autonome" },
    { name: "Imagerie de fluidité circulatoire", type: "Levier", icon: "🎯", desc: "Régulation du système nerveux autonome" },
    { name: "Souffle qui régule", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Système apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cardio-vasculaire ne fonctionne pas pour moi"],
};

const k_676: ProtocolDetail = {
  protocolId: 676,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Cardio-vasculaire",
  description: "Pour patients souffrant de palpitations bénignes, extrasystoles, arythmies fonctionnelles validées comme non dangereuses. Travail sur la perception et la régulation du rythme cardiaque par le souffle.",
  indications: ["Palpitations bénignes", "Extrasystoles fonctionnelles", "Tachycardies sinusales liées au stress", "Patients hypervigilants à leur rythme cardiaque"],
  contraindications: ["Arythmies cardiaques pathologiques nécessitant suivi spécialisé", "Toute palpitation non explorée par cardiologue"],
  programs: [{
    id: "principal",
    title: "Palpitations et arythmies bénignes — Apaiser le rythme",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Palpitations et arythmies bénignes — Apaiser le rythme",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de palpitations bénignes, extrasystoles, arythmies fonctionnelles validées comme non dangereuses. Travail sur la perception et la régulation du rythme cardiaque par le souffle." }
      ],
    }],
  }],
  outils: [
    { name: "Cohérence cardiaque par respiration", type: "Levier", icon: "🎯", desc: "Régulation cardiaque et désinvestissement attentionnel" },
    { name: "Désinvestissement de la surveillance", type: "Levier", icon: "🎯", desc: "Régulation cardiaque et désinvestissement attentionnel" },
    { name: "Imagerie d'apaisement cardiaque", type: "Levier", icon: "🎯", desc: "Régulation cardiaque et désinvestissement attentionnel" },
    { name: "Cœur tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rythme juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cardio-vasculaire ne fonctionne pas pour moi"],
};

const k_677: ProtocolDetail = {
  protocolId: 677,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Respiratoire",
  description: "Pour patients asthmatiques en complément du traitement médical. Travail sur la respiration de fond, la diminution de l'anxiété face aux crises, la prévention par apaisement bronchique imagé.",
  indications: ["Asthme chronique en complément du traitement", "Asthme avec composante anxieuse importante", "Prévention des crises", "Apprentissage de l'autorégulation respiratoire"],
  contraindications: ["Crise d'asthme aiguë (urgence médicale)", "Asthme sévère non contrôlé"],
  programs: [{
    id: "principal",
    title: "Asthme — Soutenir le souffle entre les crises",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Asthme — Soutenir le souffle entre les crises",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients asthmatiques en complément du traitement médical. Travail sur la respiration de fond, la diminution de l'anxiété face aux crises, la prévention par apaisement bronchique imagé." }
      ],
    }],
  }],
  outils: [
    { name: "Respiration ample non forcée", type: "Levier", icon: "🎯", desc: "Soutien respiratoire et désamorçage anxieux" },
    { name: "Imagerie de bronches détendues", type: "Levier", icon: "🎯", desc: "Soutien respiratoire et désamorçage anxieux" },
    { name: "Désamorçage de l'anxiété de crise", type: "Levier", icon: "🎯", desc: "Soutien respiratoire et désamorçage anxieux" },
    { name: "Souffle ample", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Bronches qui s'ouvrent", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur respiratoire ne fonctionne pas pour moi"],
};

const k_678: ProtocolDetail = {
  protocolId: 678,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Endocrinologie",
  description: "Pour diabétiques de type 2 en complément du suivi médical. Travail sur la motivation aux changements de vie, la régulation par le stress, la conscience corporelle et l'observance.",
  indications: ["Diabète de type 2 en complément du traitement", "Patients en difficulté avec les changements alimentaires", "Stress chronique aggravant la glycémie", "Soutien à l'observance"],
  contraindications: ["Diabète de type 1 (cadre spécifique)", "Décompensation aiguë"],
  programs: [{
    id: "principal",
    title: "Diabète de type 2 — Soutenir l'équilibre métabolique",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Diabète de type 2 — Soutenir l'équilibre métabolique",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour diabétiques de type 2 en complément du suivi médical. Travail sur la motivation aux changements de vie, la régulation par le stress, la conscience corporelle et l'observance." }
      ],
    }],
  }],
  outils: [
    { name: "Motivation et engagement aux changements", type: "Levier", icon: "🎯", desc: "Soutien métabolique et motivation aux changements" },
    { name: "Régulation du stress qui élève la glycémie", type: "Levier", icon: "🎯", desc: "Soutien métabolique et motivation aux changements" },
    { name: "Conscience alimentaire", type: "Levier", icon: "🎯", desc: "Soutien métabolique et motivation aux changements" },
    { name: "Équilibre retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Choix justes", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur endocrinologie ne fonctionne pas pour moi"],
};

const k_679: ProtocolDetail = {
  protocolId: 679,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Métabolisme",
  description: "Pour patients en surpoids voulant changer leur rapport à l'alimentation. Travail de fond sur la conscience alimentaire, les déclencheurs émotionnels, la réconciliation corporelle. Hors troubles du comportement alimentaire pathologiques.",
  indications: ["Surpoids modéré à modéré-sévère", "Mangeurs émotionnels", "Patients en perte de motivation", "Personnes ayant échoué aux régimes restrictifs"],
  contraindications: ["Anorexie, boulimie, hyperphagie boulimique (cadre spécialisé)", "Obésité sévère nécessitant cadre multidisciplinaire"],
  programs: [{
    id: "principal",
    title: "Surpoids et déséquilibre alimentaire — Réconciliation avec le corps",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Surpoids et déséquilibre alimentaire — Réconciliation avec le corps",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en surpoids voulant changer leur rapport à l'alimentation. Travail de fond sur la conscience alimentaire, les déclencheurs émotionnels, la réconciliation corporelle. Hors troubles du comportement alimentaire pathologiques." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction faim physique / faim émotionnelle", type: "Levier", icon: "🎯", desc: "Réconciliation corporelle et conscience alimentaire" },
    { name: "Conscience alimentaire", type: "Levier", icon: "🎯", desc: "Réconciliation corporelle et conscience alimentaire" },
    { name: "Réconciliation avec le corps", type: "Levier", icon: "🎯", desc: "Réconciliation corporelle et conscience alimentaire" },
    { name: "Corps réconcilié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Faim juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur métabolisme ne fonctionne pas pour moi"],
};

const k_680: ProtocolDetail = {
  protocolId: 680,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Digestif",
  description: "Pour patients souffrant de RGO chronique fonctionnel ou en complément du traitement. Travail sur l'apaisement du système digestif haut, la gestion du stress qui aggrave les symptômes, la conscience alimentaire.",
  indications: ["RGO chronique", "Pyrosis fonctionnel", "Patients sous IPP au long cours voulant réduire", "Symptômes digestifs hauts liés au stress"],
  contraindications: ["Œsophagite sévère ou hernie hiatale non traitée", "Symptômes alarmants non explorés"],
  programs: [{
    id: "principal",
    title: "Reflux gastro-œsophagien chronique — Apaiser le tube digestif haut",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Reflux gastro-œsophagien chronique — Apaiser le tube digestif haut",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de RGO chronique fonctionnel ou en complément du traitement. Travail sur l'apaisement du système digestif haut, la gestion du stress qui aggrave les symptômes, la conscience alimentaire." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement du système nerveux digestif", type: "Levier", icon: "🎯", desc: "Apaisement digestif haut" },
    { name: "Imagerie de fermeture cardiale", type: "Levier", icon: "🎯", desc: "Apaisement digestif haut" },
    { name: "Conscience alimentaire et postures", type: "Levier", icon: "🎯", desc: "Apaisement digestif haut" },
    { name: "Œsophage tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Estomac apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur digestif ne fonctionne pas pour moi"],
};

const k_681: ProtocolDetail = {
  protocolId: 681,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Digestif",
  description: "Pour patients atteints de maladie de Crohn ou rectocolite hémorragique en rémission ou en activité modérée. Soutien au confort digestif, gestion du stress facteur connu d'aggravation, soutien moral.",
  indications: ["Maladie de Crohn en complément", "RCH en complément", "Patients en rémission cherchant à la prolonger", "Soutien à l'observance et qualité de vie"],
  contraindications: ["Poussée aiguë sévère (urgence médicale)", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Maladies inflammatoires chroniques de l'intestin — Soutenir les rémissions",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Maladies inflammatoires chroniques de l'intestin — Soutenir les rémissions",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de maladie de Crohn ou rectocolite hémorragique en rémission ou en activité modérée. Soutien au confort digestif, gestion du stress facteur connu d'aggravation, soutien moral." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement intestinal", type: "Levier", icon: "🎯", desc: "Soutien aux MICI en rémission ou activité légère" },
    { name: "Régulation immunitaire imagée", type: "Levier", icon: "🎯", desc: "Soutien aux MICI en rémission ou activité légère" },
    { name: "Gestion du stress facteur de poussée", type: "Levier", icon: "🎯", desc: "Soutien aux MICI en rémission ou activité légère" },
    { name: "Intestin apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rémission soutenue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur digestif ne fonctionne pas pour moi"],
};

const k_682: ProtocolDetail = {
  protocolId: 682,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Asthénie",
  description: "Pour patients souffrant de fatigue chronique (syndrome de fatigue chronique, post-virale, post-traitement, fibromyalgie). Travail sur l'énergie disponible, la dépose de l'épuisement, la gestion par paliers.",
  indications: ["Syndrome de fatigue chronique", "Asthénie post-virale prolongée (post-Covid, mononucléose)", "Fatigue post-cancer ou post-traitement", "Asthénie liée à pathologie chronique"],
  contraindications: ["Causes médicales non explorées (toujours bilan préalable)", "Dépression majeure sous-jacente non traitée"],
  programs: [{
    id: "principal",
    title: "Fatigue chronique — Restaurer l'énergie disponible",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Fatigue chronique — Restaurer l'énergie disponible",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de fatigue chronique (syndrome de fatigue chronique, post-virale, post-traitement, fibromyalgie). Travail sur l'énergie disponible, la dépose de l'épuisement, la gestion par paliers." }
      ],
    }],
  }],
  outils: [
    { name: "Économie d'énergie par paliers", type: "Levier", icon: "🎯", desc: "Restauration énergétique progressive" },
    { name: "Restauration progressive", type: "Levier", icon: "🎯", desc: "Restauration énergétique progressive" },
    { name: "Imagerie de réservoir qui se remplit", type: "Levier", icon: "🎯", desc: "Restauration énergétique progressive" },
    { name: "Énergie respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Réservoir qui se remplit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur asthénie ne fonctionne pas pour moi"],
};

const k_683: ProtocolDetail = {
  protocolId: 683,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Allergologie",
  description: "Pour patients allergiques (rhinites, eczémas, urticaires fonctionnels) en complément du traitement médical. Travail sur la régulation de la réponse immune par imagerie, dialogue avec le système immunitaire.",
  indications: ["Rhinite allergique chronique", "Eczéma atopique modéré", "Urticaire chronique fonctionnel", "Hypersensibilités multiples non sévères"],
  contraindications: ["Allergies sévères avec risque anaphylactique", "Asthme allergique sévère"],
  programs: [{
    id: "principal",
    title: "Allergies et hypersensibilité — Réguler la réponse immune",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Allergies et hypersensibilité — Réguler la réponse immune",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients allergiques (rhinites, eczémas, urticaires fonctionnels) en complément du traitement médical. Travail sur la régulation de la réponse immune par imagerie, dialogue avec le système immunitaire." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie immunitaire", type: "Levier", icon: "🎯", desc: "Régulation immunitaire imagée" },
    { name: "Dialogue avec le système immunitaire", type: "Levier", icon: "🎯", desc: "Régulation immunitaire imagée" },
    { name: "Désensibilisation imaginaire", type: "Levier", icon: "🎯", desc: "Régulation immunitaire imagée" },
    { name: "Système immunitaire allié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Réponse juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur allergologie ne fonctionne pas pour moi"],
};

const k_684: ProtocolDetail = {
  protocolId: 684,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / ORL",
  description: "Pour patients souffrant d'acouphènes chroniques. Travail sur la perception et la place du bruit, désinvestissement attentionnel, recadrage de la souffrance secondaire.",
  indications: ["Acouphènes chroniques (plus de 6 mois)", "Patients épuisés par la surveillance auditive", "Acouphènes avec composante anxieuse"],
  contraindications: ["Acouphènes récents non explorés (urgence ORL possible)", "Surdité brusque associée"],
  programs: [{
    id: "principal",
    title: "Acouphènes — Modifier la place du bruit",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Acouphènes — Modifier la place du bruit",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant d'acouphènes chroniques. Travail sur la perception et la place du bruit, désinvestissement attentionnel, recadrage de la souffrance secondaire." }
      ],
    }],
  }],
  outils: [
    { name: "Modification des sous-modalités du bruit", type: "Levier", icon: "🎯", desc: "Modification perceptive et désinvestissement" },
    { name: "Désinvestissement attentionnel", type: "Levier", icon: "🎯", desc: "Modification perceptive et désinvestissement" },
    { name: "Recadrage de la souffrance", type: "Levier", icon: "🎯", desc: "Modification perceptive et désinvestissement" },
    { name: "Bruit éloigné", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Attention libérée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orl ne fonctionne pas pour moi"],
};

const k_685: ProtocolDetail = {
  protocolId: 685,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / ORL et neurologique",
  description: "Pour vertiges fonctionnels (post-VPPB résolu, vertige phobique postural, anxiété vestibulaire). Travail de restauration de l'ancrage corporel, désensibilisation aux mouvements anxiogènes.",
  indications: ["Vertige phobique postural", "Anxiété post-VPPB résolu", "Vertiges fonctionnels chroniques", "Peur de tomber chez personnes âgées"],
  contraindications: ["Vertiges d'origine vestibulaire active (Ménière, névrite)", "Causes neurologiques non explorées"],
  programs: [{
    id: "principal",
    title: "Vertiges et troubles de l'équilibre fonctionnels — Restaurer l'ancrage",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vertiges et troubles de l'équilibre fonctionnels — Restaurer l'ancrage",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour vertiges fonctionnels (post-VPPB résolu, vertige phobique postural, anxiété vestibulaire). Travail de restauration de l'ancrage corporel, désensibilisation aux mouvements anxiogènes." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience du contact au sol", type: "Levier", icon: "🎯", desc: "Restauration de l'ancrage corporel et désensibilisation" },
    { name: "Désensibilisation graduée aux mouvements", type: "Levier", icon: "🎯", desc: "Restauration de l'ancrage corporel et désensibilisation" },
    { name: "Confiance dans le système postural", type: "Levier", icon: "🎯", desc: "Restauration de l'ancrage corporel et désensibilisation" },
    { name: "Ancrage retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pieds présents", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orl et neurologique ne fonctionne pas pour moi"],
};

const k_686: ProtocolDetail = {
  protocolId: 686,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Gynécologique",
  description: "Pour patientes souffrant de SPM modéré à sévère avec composante émotionnelle marquée. Travail de soutien dans la phase prémenstruelle, anticipation, recadrage des fluctuations hormonales.",
  indications: ["SPM avec irritabilité, anxiété, tristesse cycliques", "Patientes voulant complément à un traitement", "Sensibilité hormonale marquée"],
  contraindications: ["Trouble dysphorique prémenstruel sévère (cadre psychiatrique)", "Dépression masquée par cyclicité"],
  programs: [{
    id: "principal",
    title: "Syndrome prémenstruel — Traverser la phase difficile",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Syndrome prémenstruel — Traverser la phase difficile",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patientes souffrant de SPM modéré à sévère avec composante émotionnelle marquée. Travail de soutien dans la phase prémenstruelle, anticipation, recadrage des fluctuations hormonales." }
      ],
    }],
  }],
  outils: [
    { name: "Anticipation et préparation", type: "Levier", icon: "🎯", desc: "Soutien cyclique au SPM" },
    { name: "Distinction entre soi et état hormonal", type: "Levier", icon: "🎯", desc: "Soutien cyclique au SPM" },
    { name: "Bienveillance pendant la phase", type: "Levier", icon: "🎯", desc: "Soutien cyclique au SPM" },
    { name: "Cycle accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soi qui demeure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologique ne fonctionne pas pour moi"],
};

const k_687: ProtocolDetail = {
  protocolId: 687,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Gynécologique",
  description: "Pour femmes en péri-ménopause ou ménopause confrontées à bouffées de chaleur, troubles du sommeil, modifications de l'humeur, vécu de transition identitaire. Accompagnement holistique.",
  indications: ["Bouffées de chaleur de la ménopause", "Troubles du sommeil ménopausique", "Modifications de l'humeur", "Vécu identitaire de la transition"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Ménopause — Traverser la transition",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Ménopause — Traverser la transition",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes en péri-ménopause ou ménopause confrontées à bouffées de chaleur, troubles du sommeil, modifications de l'humeur, vécu de transition identitaire. Accompagnement holistique." }
      ],
    }],
  }],
  outils: [
    { name: "Régulation des bouffées de chaleur", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la transition ménopausique" },
    { name: "Soutien au sommeil", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la transition ménopausique" },
    { name: "Recadrage identitaire", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la transition ménopausique" },
    { name: "Transition honorée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Saison nouvelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologique ne fonctionne pas pour moi"],
};

const k_688: ProtocolDetail = {
  protocolId: 688,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Dermatologie",
  description: "Pour patients souffrant de dermatoses chroniques à composante psychosomatique : eczéma, psoriasis, urticaire chronique, prurit nerveux. Travail sur la régulation locale et la diminution du stress qui aggrave.",
  indications: ["Eczéma atopique chronique", "Psoriasis avec poussées liées au stress", "Urticaire chronique fonctionnel", "Prurit nerveux"],
  contraindications: ["Substitution au traitement dermatologique", "Dermatoses sévères non suivies médicalement"],
  programs: [{
    id: "principal",
    title: "Dermatoses chroniques — Apaiser la peau",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dermatoses chroniques — Apaiser la peau",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de dermatoses chroniques à composante psychosomatique : eczéma, psoriasis, urticaire chronique, prurit nerveux. Travail sur la régulation locale et la diminution du stress qui aggrave." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie locale d'apaisement", type: "Levier", icon: "🎯", desc: "Apaisement cutané et régulation systémique" },
    { name: "Régulation du stress facteur d'aggravation", type: "Levier", icon: "🎯", desc: "Apaisement cutané et régulation systémique" },
    { name: "Recadrage du grattage", type: "Levier", icon: "🎯", desc: "Apaisement cutané et régulation systémique" },
    { name: "Peau accueillie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confort cutané", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dermatologie ne fonctionne pas pour moi"],
};

const k_689: ProtocolDetail = {
  protocolId: 689,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Digestif",
  description: "Pour constipation chronique fonctionnelle (sans cause organique). Travail sur la régulation du transit, la respiration abdominale, le moment des selles, le lâcher-prise digestif.",
  indications: ["Constipation chronique fonctionnelle", "Constipation liée au stress", "Patients utilisant trop de laxatifs", "Transit perturbé par voyages, vie irrégulière"],
  contraindications: ["Causes organiques non explorées", "Constipation aiguë (occlusion à éliminer)"],
  programs: [{
    id: "principal",
    title: "Constipation chronique fonctionnelle — Restaurer le transit",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Constipation chronique fonctionnelle — Restaurer le transit",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour constipation chronique fonctionnelle (sans cause organique). Travail sur la régulation du transit, la respiration abdominale, le moment des selles, le lâcher-prise digestif." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie du péristaltisme", type: "Levier", icon: "🎯", desc: "Restauration de la fonction intestinale" },
    { name: "Respiration abdominale", type: "Levier", icon: "🎯", desc: "Restauration de la fonction intestinale" },
    { name: "Moment dédié aux selles", type: "Levier", icon: "🎯", desc: "Restauration de la fonction intestinale" },
    { name: "Mouvement intestinal", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lâcher-prise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur digestif ne fonctionne pas pour moi"],
};

const k_690: ProtocolDetail = {
  protocolId: 690,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique fonctionnel",
  description: "Pour tics fonctionnels (hors syndrome de Tourette) et tremblements fonctionnels validés. Travail sur la régulation neuromusculaire, le désinvestissement attentionnel, l'apaisement du système.",
  indications: ["Tics nerveux fonctionnels", "Tremblements essentiels modérés", "Tremblements liés au stress", "Mouvements involontaires fonctionnels validés"],
  contraindications: ["Syndrome de Tourette (cadre spécialisé)", "Tremblements d'origine neurologique active (Parkinson, dystonie)"],
  programs: [{
    id: "principal",
    title: "Tics et tremblements fonctionnels — Apaiser le mouvement involontaire",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tics et tremblements fonctionnels — Apaiser le mouvement involontaire",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour tics fonctionnels (hors syndrome de Tourette) et tremblements fonctionnels validés. Travail sur la régulation neuromusculaire, le désinvestissement attentionnel, l'apaisement du système." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement attentionnel", type: "Levier", icon: "🎯", desc: "Régulation neuromusculaire et désinvestissement" },
    { name: "Détente musculaire ciblée", type: "Levier", icon: "🎯", desc: "Régulation neuromusculaire et désinvestissement" },
    { name: "Imagerie de stabilité", type: "Levier", icon: "🎯", desc: "Régulation neuromusculaire et désinvestissement" },
    { name: "Calme retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Stabilité corporelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique fonctionnel ne fonctionne pas pour moi"],
};

const k_691: ProtocolDetail = {
  protocolId: 691,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Dermatologique fonctionnel",
  description: "Pour transpiration excessive fonctionnelle (mains, aisselles, visage) liée au stress ou idiopathique. Travail sur la régulation du système sympathique, désamorçage du cycle anxiété-transpiration.",
  indications: ["Hyperhidrose palmaire", "Hyperhidrose axillaire fonctionnelle", "Transpiration faciale invalidante", "Hyperhidrose émotionnelle"],
  contraindications: ["Hyperhidrose secondaire à pathologie endocrinienne ou neurologique"],
  programs: [{
    id: "principal",
    title: "Hyperhidrose fonctionnelle — Réguler la transpiration",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hyperhidrose fonctionnelle — Réguler la transpiration",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour transpiration excessive fonctionnelle (mains, aisselles, visage) liée au stress ou idiopathique. Travail sur la régulation du système sympathique, désamorçage du cycle anxiété-transpiration." }
      ],
    }],
  }],
  outils: [
    { name: "Régulation du système nerveux autonome", type: "Levier", icon: "🎯", desc: "Régulation du système sympathique et désamorçage" },
    { name: "Imagerie de fraîcheur et sécheresse", type: "Levier", icon: "🎯", desc: "Régulation du système sympathique et désamorçage" },
    { name: "Désamorçage cycle anxiété-transpiration", type: "Levier", icon: "🎯", desc: "Régulation du système sympathique et désamorçage" },
    { name: "Système régulé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Peau qui respire", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dermatologique fonctionnel ne fonctionne pas pour moi"],
};

const k_692: ProtocolDetail = {
  protocolId: 692,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / ORL fonctionnel",
  description: "Pour patients ressentant une boule dans la gorge ou difficultés de déglutition fonctionnelles, sans cause organique. Travail sur la décrispation pharyngée, le souffle, l'expression de l'avalé.",
  indications: ["Globus hystericus / globus pharyngis", "Sensation de boule dans la gorge persistante", "Difficultés de déglutition fonctionnelles", "Syndrome bilan ORL négatif"],
  contraindications: ["Cause organique non explorée (toujours bilan ORL et gastro)"],
  programs: [{
    id: "principal",
    title: "Globus pharyngis — La boule dans la gorge",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Globus pharyngis — La boule dans la gorge",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ressentant une boule dans la gorge ou difficultés de déglutition fonctionnelles, sans cause organique. Travail sur la décrispation pharyngée, le souffle, l'expression de l'avalé." }
      ],
    }],
  }],
  outils: [
    { name: "Décrispation cervicale et pharyngée", type: "Levier", icon: "🎯", desc: "Décrispation pharyngée et expression" },
    { name: "Imagerie de passage libre", type: "Levier", icon: "🎯", desc: "Décrispation pharyngée et expression" },
    { name: "Travail sur ce qui n'a pas pu être dit", type: "Levier", icon: "🎯", desc: "Décrispation pharyngée et expression" },
    { name: "Gorge libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souffle qui passe", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orl fonctionnel ne fonctionne pas pour moi"],
};

const k_693: ProtocolDetail = {
  protocolId: 693,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / ORL",
  description: "Pour patients atteints de la maladie de Ménière, en complément du suivi ORL. Travail entre les crises pour réduire l'anxiété anticipatoire, soutenir la fonction vestibulaire, gérer les acouphènes associés.",
  indications: ["Maladie de Ménière confirmée", "Patients en intercrise voulant complément à leur traitement", "Anxiété liée à l'anticipation des crises"],
  contraindications: ["Crise aiguë (urgence)", "Substitution au traitement spécialisé"],
  programs: [{
    id: "principal",
    title: "Vertige de Ménière — Soutenir entre les crises",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vertige de Ménière — Soutenir entre les crises",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de la maladie de Ménière, en complément du suivi ORL. Travail entre les crises pour réduire l'anxiété anticipatoire, soutenir la fonction vestibulaire, gérer les acouphènes associés." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement du système vestibulaire", type: "Levier", icon: "🎯", desc: "Soutien intercritique de la maladie de Ménière" },
    { name: "Désamorçage de l'anxiété anticipatoire", type: "Levier", icon: "🎯", desc: "Soutien intercritique de la maladie de Ménière" },
    { name: "Imagerie d'équilibre liquidien interne", type: "Levier", icon: "🎯", desc: "Soutien intercritique de la maladie de Ménière" },
    { name: "Équilibre intérieur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Liquide juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orl ne fonctionne pas pour moi"],
};

const k_694: ProtocolDetail = {
  protocolId: 694,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / ORL",
  description: "Pour acouphènes apparus suite à un traumatisme sonore récent (concert, explosion). Intervention précoce pour éviter la chronicisation, en complément du traitement ORL.",
  indications: ["Acouphènes post-traumatiques récents (moins de 3 mois)", "Suite de concert ou exposition sonore intense", "Patients à risque de chronicisation"],
  contraindications: ["Acouphènes très anciens (utiliser K-MED-010)", "Surdité brusque associée non traitée"],
  programs: [{
    id: "principal",
    title: "Tinnitus aigu post-traumatique — Désamorçage précoce",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tinnitus aigu post-traumatique — Désamorçage précoce",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour acouphènes apparus suite à un traumatisme sonore récent (concert, explosion). Intervention précoce pour éviter la chronicisation, en complément du traitement ORL." }
      ],
    }],
  }],
  outils: [
    { name: "Évitement de la chronicisation", type: "Levier", icon: "🎯", desc: "Intervention précoce sur acouphène traumatique" },
    { name: "Désamorçage attentionnel précoce", type: "Levier", icon: "🎯", desc: "Intervention précoce sur acouphène traumatique" },
    { name: "Imagerie de réparation auditive", type: "Levier", icon: "🎯", desc: "Intervention précoce sur acouphène traumatique" },
    { name: "Récupération possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Système qui se répare", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orl ne fonctionne pas pour moi"],
};

const k_695: ProtocolDetail = {
  protocolId: 695,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Ophtalmologique",
  description: "Soutien à la rééducation orthoptique chez l'enfant ou l'adulte, ou pour fatigue visuelle chronique liée au stress. Travail de détente oculaire, conscience visuelle, soutien à l'orthoptie.",
  indications: ["Suite à orthoptie (en complément)", "Fatigue oculaire chronique", "Tensions oculaires liées au stress", "Spasme accommodatif"],
  contraindications: ["Pathologies oculaires actives non traitées", "Substitution à la médecine ophtalmologique"],
  programs: [{
    id: "principal",
    title: "Strabisme et troubles visuels fonctionnels — Soutien à la rééducation",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Strabisme et troubles visuels fonctionnels — Soutien à la rééducation",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Soutien à la rééducation orthoptique chez l'enfant ou l'adulte, ou pour fatigue visuelle chronique liée au stress. Travail de détente oculaire, conscience visuelle, soutien à l'orthoptie." }
      ],
    }],
  }],
  outils: [
    { name: "Détente des muscles oculomoteurs", type: "Levier", icon: "🎯", desc: "Détente oculaire et soutien orthoptique" },
    { name: "Imagerie de regard libre", type: "Levier", icon: "🎯", desc: "Détente oculaire et soutien orthoptique" },
    { name: "Pauses visuelles régulières", type: "Levier", icon: "🎯", desc: "Détente oculaire et soutien orthoptique" },
    { name: "Yeux qui se reposent", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vision détendue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ophtalmologique ne fonctionne pas pour moi"],
};

const k_696: ProtocolDetail = {
  protocolId: 696,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Orthophonique",
  description: "Pour personnes bégayant, en complément de la rééducation orthophonique. Travail sur la décrispation pharyngée, la confiance, le rapport à la parole, la diminution de l'anxiété de prise de parole.",
  indications: ["Bégaiement chronique en complément orthophonie", "Patients voulant soutien à leur rééducation", "Anxiété de prise de parole"],
  contraindications: ["Substitution à la rééducation orthophonique"],
  programs: [{
    id: "principal",
    title: "Bégaiement — Soutenir la fluence",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Bégaiement — Soutenir la fluence",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour personnes bégayant, en complément de la rééducation orthophonique. Travail sur la décrispation pharyngée, la confiance, le rapport à la parole, la diminution de l'anxiété de prise de parole." }
      ],
    }],
  }],
  outils: [
    { name: "Décrispation laryngo-pharyngée", type: "Levier", icon: "🎯", desc: "Soutien à la fluence et confiance" },
    { name: "Confiance en sa parole", type: "Levier", icon: "🎯", desc: "Soutien à la fluence et confiance" },
    { name: "Désinvestissement anticipatoire", type: "Levier", icon: "🎯", desc: "Soutien à la fluence et confiance" },
    { name: "Parole fluide", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur orthophonique ne fonctionne pas pour moi"],
};

const k_697: ProtocolDetail = {
  protocolId: 697,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pédiatrique",
  description: "Pour enfants énurétiques (au-delà de l'âge habituel de propreté nocturne, généralement après 6-7 ans). Soutien hypnotique à la maturation du contrôle vésical nocturne, en complément du suivi pédiatrique.",
  indications: ["Énurésie nocturne primaire après 7 ans", "Énurésie secondaire (à explorer en parallèle)", "Patients en complément du suivi pédiatrique"],
  contraindications: ["Cause organique non explorée", "Substitution à un bilan urologique"],
  programs: [{
    id: "principal",
    title: "Énurésie de l'enfant — Maturation soutenue",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Énurésie de l'enfant — Maturation soutenue",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants énurétiques (au-delà de l'âge habituel de propreté nocturne, généralement après 6-7 ans). Soutien hypnotique à la maturation du contrôle vésical nocturne, en complément du suivi pédiatrique." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie ludique adaptée", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour maturation vésicale" },
    { name: "Conscience corporelle", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour maturation vésicale" },
    { name: "Confiance dans la maturation", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour maturation vésicale" },
    { name: "Grandir", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps qui apprend", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pédiatrique ne fonctionne pas pour moi"],
};

const k_698: ProtocolDetail = {
  protocolId: 698,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Urologique",
  description: "Pour cystite interstitielle, syndrome douloureux vésical, vessie hyperactive avec composante fonctionnelle. Travail d'apaisement vésical, gestion de l'urgence mictionnelle, désinvestissement attentionnel.",
  indications: ["Cystite interstitielle confirmée", "Syndrome douloureux vésical", "Vessie hyperactive non infectieuse", "Suite de cystites récidivantes douloureuses"],
  contraindications: ["Infection urinaire active (traitement antibiotique nécessaire)", "Causes urologiques organiques non explorées"],
  programs: [{
    id: "principal",
    title: "Cystite interstitielle et douleurs vésicales chroniques — Apaiser la vessie",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Cystite interstitielle et douleurs vésicales chroniques — Apaiser la vessie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour cystite interstitielle, syndrome douloureux vésical, vessie hyperactive avec composante fonctionnelle. Travail d'apaisement vésical, gestion de l'urgence mictionnelle, désinvestissement attentionnel." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement local", type: "Levier", icon: "🎯", desc: "Apaisement vésical et régulation" },
    { name: "Régulation de l'urgence", type: "Levier", icon: "🎯", desc: "Apaisement vésical et régulation" },
    { name: "Imagerie de paroi vésicale apaisée", type: "Levier", icon: "🎯", desc: "Apaisement vésical et régulation" },
    { name: "Vessie apaisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confort retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur urologique ne fonctionne pas pour moi"],
};

const k_699: ProtocolDetail = {
  protocolId: 699,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Confort des soins",
  description: "Protocole d'installation d'une hypoanesthésie par catalepsie de la main et transfert de fraîcheur dissociative. Pour soins, examens, petites interventions sans anesthésie locale possible. Inspiré des techniques classiques (Bishay & Lee 1984).",
  indications: ["Préparation à un soin local sans anesthésie médicale", "Examens douloureux courts", "Patients allergiques aux anesthésiques locaux", "Compléter une anesthésie locale insuffisante"],
  contraindications: ["Substitution à une anesthésie médicale nécessaire", "Patients très réfractaires à l'imagerie"],
  programs: [{
    id: "principal",
    title: "Catalepsie et fraîcheur dissociative — Hypoanesthésie",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Catalepsie et fraîcheur dissociative — Hypoanesthésie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole d'installation d'une hypoanesthésie par catalepsie de la main et transfert de fraîcheur dissociative. Pour soins, examens, petites interventions sans anesthésie locale possible. Inspiré des techniques classiques (Bishay & Lee 1984)." }
      ],
    }],
  }],
  outils: [
    { name: "Catalepsie de la main", type: "Levier", icon: "🎯", desc: "Hypoanesthésie par catalepsie et transfert" },
    { name: "Fraîcheur dissociative", type: "Levier", icon: "🎯", desc: "Hypoanesthésie par catalepsie et transfert" },
    { name: "Transfert kinesthésique", type: "Levier", icon: "🎯", desc: "Hypoanesthésie par catalepsie et transfert" },
    { name: "Fraîcheur ailleurs", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Main qui sait", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur confort des soins ne fonctionne pas pour moi"],
};

const k_700: ProtocolDetail = {
  protocolId: 700,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Cardio-vasculaire",
  description: "Pour patients avec tachycardie disproportionnée à l'effort (sans pathologie cardiaque), souvent lié à un déconditionnement et à l'anxiété de l'effort. Travail de restauration progressive et apaisement.",
  indications: ["Tachycardie d'effort fonctionnelle confirmée non pathologique", "Déconditionnement physique", "Anxiété face à l'effort", "Patients reprenant l'activité physique après pause"],
  contraindications: ["Pathologies cardiaques actives", "Bilan cardiologique non fait"],
  programs: [{
    id: "principal",
    title: "Tachycardie d'effort excessive — Reéquilibrer la réponse cardiaque",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tachycardie d'effort excessive — Reéquilibrer la réponse cardiaque",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients avec tachycardie disproportionnée à l'effort (sans pathologie cardiaque), souvent lié à un déconditionnement et à l'anxiété de l'effort. Travail de restauration progressive et apaisement." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage anxiété d'effort", type: "Levier", icon: "🎯", desc: "Restauration de la réponse cardiaque à l'effort" },
    { name: "Imagerie de cœur efficient", type: "Levier", icon: "🎯", desc: "Restauration de la réponse cardiaque à l'effort" },
    { name: "Reprise progressive", type: "Levier", icon: "🎯", desc: "Restauration de la réponse cardiaque à l'effort" },
    { name: "Cœur efficient", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Effort apprivoisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cardio-vasculaire ne fonctionne pas pour moi"],
};

const k_701: ProtocolDetail = {
  protocolId: 701,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Digestif",
  description: "Protocole spécifique pour syndrome du côlon irritable. L'hypnose est l'une des thérapies les plus validées scientifiquement pour le SII. Travail intensif sur l'axe cerveau-intestin, en plusieurs séances.",
  indications: ["Syndrome du côlon irritable confirmé", "Patients en complément traitement", "SII avec composante stress importante", "Échec des approches médicamenteuses seules"],
  contraindications: ["Maladies inflammatoires intestinales (utiliser K-MED-007)", "Causes organiques non écartées"],
  programs: [{
    id: "principal",
    title: "Côlon irritable — Protocole spécifique",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Côlon irritable — Protocole spécifique",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole spécifique pour syndrome du côlon irritable. L'hypnose est l'une des thérapies les plus validées scientifiquement pour le SII. Travail intensif sur l'axe cerveau-intestin, en plusieurs séances." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie d'intestin tranquille et régulier", type: "Levier", icon: "🎯", desc: "Protocole spécifique SII (gut-directed hypnotherapy)" },
    { name: "Régulation de la motilité", type: "Levier", icon: "🎯", desc: "Protocole spécifique SII (gut-directed hypnotherapy)" },
    { name: "Apaisement de la sensibilité viscérale", type: "Levier", icon: "🎯", desc: "Protocole spécifique SII (gut-directed hypnotherapy)" },
    { name: "Intestin tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Motilité juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur digestif ne fonctionne pas pour moi"],
};

const k_702: ProtocolDetail = {
  protocolId: 702,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Dermatologique",
  description: "Pour verrues persistantes après échecs des traitements classiques. L'hypnose dispose d'une littérature ancienne et solide sur cette indication particulière. Travail spécifique sur le système immunitaire local.",
  indications: ["Verrues récalcitrantes après échecs traitements classiques", "Verrues multiples chez l'enfant", "Verrues de localisation difficile à traiter"],
  contraindications: ["Aucune en complément du suivi dermatologique"],
  programs: [{
    id: "principal",
    title: "Verrues récalcitrantes — L'hypnose qui surprend",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Verrues récalcitrantes — L'hypnose qui surprend",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour verrues persistantes après échecs des traitements classiques. L'hypnose dispose d'une littérature ancienne et solide sur cette indication particulière. Travail spécifique sur le système immunitaire local." }
      ],
    }],
  }],
  outils: [
    { name: "Activation immunitaire locale par imagerie", type: "Levier", icon: "🎯", desc: "Activation immunitaire ciblée par imagerie" },
    { name: "Suggestion de disparition", type: "Levier", icon: "🎯", desc: "Activation immunitaire ciblée par imagerie" },
    { name: "Dialogue avec le système immunitaire", type: "Levier", icon: "🎯", desc: "Activation immunitaire ciblée par imagerie" },
    { name: "Système qui se mobilise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Peau qui se rétablit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dermatologique ne fonctionne pas pour moi"],
};

const k_703: ProtocolDetail = {
  protocolId: 703,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Examens",
  description: "Préparation hypnotique à un examen d'IRM pour patients claustrophobes ou anxieux. Installation d'outils utilisables pendant l'examen pour rendre les 20-45 minutes traversables.",
  indications: ["Anxiété face à l'IRM", "Claustrophobie modérée", "Échecs d'IRM précédents par anxiété"],
  contraindications: ["Claustrophobie sévère décompensée (préférer IRM ouverte ou anxiolytique)"],
  programs: [{
    id: "principal",
    title: "Préparation à l'IRM — Confort en espace clos",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à l'IRM — Confort en espace clos",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Préparation hypnotique à un examen d'IRM pour patients claustrophobes ou anxieux. Installation d'outils utilisables pendant l'examen pour rendre les 20-45 minutes traversables." }
      ],
    }],
  }],
  outils: [
    { name: "Lieu sûr accessible en machine", type: "Levier", icon: "🎯", desc: "Préparation à examen anxiogène" },
    { name: "Modification de la perception de l'espace", type: "Levier", icon: "🎯", desc: "Préparation à examen anxiogène" },
    { name: "Désinvestissement du bruit", type: "Levier", icon: "🎯", desc: "Préparation à examen anxiogène" },
    { name: "Espace mental large", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lieu sûr portable", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur examens ne fonctionne pas pour moi"],
};

const k_704: ProtocolDetail = {
  protocolId: 704,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Examens",
  description: "Préparation à coloscopie pour patients anxieux ou ayant mal vécu un examen précédent. Travail sur la préparation digestive (la veille), la traversée de l'examen, le réveil.",
  indications: ["Préparation à coloscopie programmée", "Patients anxieux avant l'examen", "Suite d'examen précédent mal vécu", "Patients refusant la sédation"],
  contraindications: ["Aucune en complément des soins"],
  programs: [{
    id: "principal",
    title: "Préparation à la coloscopie — Examen mieux toléré",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à la coloscopie — Examen mieux toléré",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Préparation à coloscopie pour patients anxieux ou ayant mal vécu un examen précédent. Travail sur la préparation digestive (la veille), la traversée de l'examen, le réveil." }
      ],
    }],
  }],
  outils: [
    { name: "Tolérance de la préparation digestive", type: "Levier", icon: "🎯", desc: "Préparation à coloscopie" },
    { name: "Détente abdominale pendant l'examen", type: "Levier", icon: "🎯", desc: "Préparation à coloscopie" },
    { name: "Réveil confortable", type: "Levier", icon: "🎯", desc: "Préparation à coloscopie" },
    { name: "Examen traversé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confort possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur examens ne fonctionne pas pour moi"],
};

const k_705: ProtocolDetail = {
  protocolId: 705,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique",
  description: "Pour céphalées de tension chroniques (différentes des migraines). Travail spécifique sur la décrispation des muscles péricrâniens, cervicaux, des épaules. Décharge de la tension qui s'accumule.",
  indications: ["Céphalées de tension chroniques (plus de 15 jours par mois)", "Patients avec contractures cervicales associées", "Céphalées liées au travail sur écran, au stress posturé"],
  contraindications: ["Céphalées d'apparition récente non explorées", "Suspicion d'autre cause neurologique"],
  programs: [{
    id: "principal",
    title: "Céphalées de tension chroniques — Décrisper la coiffe",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Céphalées de tension chroniques — Décrisper la coiffe",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour céphalées de tension chroniques (différentes des migraines). Travail spécifique sur la décrispation des muscles péricrâniens, cervicaux, des épaules. Décharge de la tension qui s'accumule." }
      ],
    }],
  }],
  outils: [
    { name: "Détente des muscles péricrâniens", type: "Levier", icon: "🎯", desc: "Décrispation musculaire et posturale" },
    { name: "Décrispation cervicale et trapèzes", type: "Levier", icon: "🎯", desc: "Décrispation musculaire et posturale" },
    { name: "Conscience posturale", type: "Levier", icon: "🎯", desc: "Décrispation musculaire et posturale" },
    { name: "Crâne libéré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Cou détendu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique ne fonctionne pas pour moi"],
};

const k_706: ProtocolDetail = {
  protocolId: 706,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique",
  description: "Soutien hypnotique aux patients en récupération post-AVC, en complément de la rééducation. Travail sur la motivation à la rééducation, la reprise du schéma corporel, l'acceptation des séquelles, la diminution de la spasticité.",
  indications: ["Phase post-AVC après stabilisation", "Patients en rééducation motrice ou cognitive", "Soutien à l'observance des exercices", "Acceptation des séquelles persistantes"],
  contraindications: ["Phase aiguë (urgence)", "Troubles cognitifs sévères empêchant l'hypnose", "Aphasie majeure (à adapter)"],
  programs: [{
    id: "principal",
    title: "Accompagnement post-AVC — Récupération et qualité de vie",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Accompagnement post-AVC — Récupération et qualité de vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Soutien hypnotique aux patients en récupération post-AVC, en complément de la rééducation. Travail sur la motivation à la rééducation, la reprise du schéma corporel, l'acceptation des séquelles, la diminution de la spasticité." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie de plasticité cérébrale", type: "Levier", icon: "🎯", desc: "Soutien à la récupération neurologique post-AVC" },
    { name: "Soutien à la rééducation motrice", type: "Levier", icon: "🎯", desc: "Soutien à la récupération neurologique post-AVC" },
    { name: "Diminution de la spasticité par imagerie", type: "Levier", icon: "🎯", desc: "Soutien à la récupération neurologique post-AVC" },
    { name: "Cerveau qui se reconfigure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mouvement qui revient", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique ne fonctionne pas pour moi"],
};

const k_707: ProtocolDetail = {
  protocolId: 707,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique",
  description: "Soutien aux patients atteints de SEP. Travail sur la fatigue spécifique de la SEP, les paresthésies, la spasticité, la gestion des poussées et la qualité de vie entre elles.",
  indications: ["SEP en phase stable ou rémittente", "Patients fatigués par la maladie", "Paresthésies invalidantes", "Spasticité modérée"],
  contraindications: ["Poussée aiguë sévère (urgence neurologique)", "Substitution au traitement de fond"],
  programs: [{
    id: "principal",
    title: "Sclérose en plaques — Accompagnement et qualité de vie",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sclérose en plaques — Accompagnement et qualité de vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Soutien aux patients atteints de SEP. Travail sur la fatigue spécifique de la SEP, les paresthésies, la spasticité, la gestion des poussées et la qualité de vie entre elles." }
      ],
    }],
  }],
  outils: [
    { name: "Gestion de la fatigue spécifique", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la SEP" },
    { name: "Apaisement des paresthésies", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la SEP" },
    { name: "Diminution de la spasticité", type: "Levier", icon: "🎯", desc: "Accompagnement holistique de la SEP" },
    { name: "Énergie respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps écouté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique ne fonctionne pas pour moi"],
};

const k_708: ProtocolDetail = {
  protocolId: 708,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique",
  description: "Soutien aux patients parkinsoniens en complément du traitement. Travail sur la fluidité du mouvement, la confiance dans la marche, l'apaisement des tremblements, la qualité de vie.",
  indications: ["Maladie de Parkinson en phase stable", "Patients en complément de la dopathérapie", "Anxiété face à l'évolution", "Soutien à la motricité"],
  contraindications: ["Forme avancée avec démence", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Maladie de Parkinson — Soutenir le mouvement et la qualité de vie",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Maladie de Parkinson — Soutenir le mouvement et la qualité de vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Soutien aux patients parkinsoniens en complément du traitement. Travail sur la fluidité du mouvement, la confiance dans la marche, l'apaisement des tremblements, la qualité de vie." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie motrice", type: "Levier", icon: "🎯", desc: "Soutien à la motricité parkinsonienne" },
    { name: "Confiance dans la marche", type: "Levier", icon: "🎯", desc: "Soutien à la motricité parkinsonienne" },
    { name: "Apaisement du tremblement", type: "Levier", icon: "🎯", desc: "Soutien à la motricité parkinsonienne" },
    { name: "Mouvement qui se fluidifie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique ne fonctionne pas pour moi"],
};

const k_709: ProtocolDetail = {
  protocolId: 709,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Neurologique",
  description: "Pour patients épileptiques en complément de leur traitement antiépileptique. Travail sur la diminution de l'anxiété entre les crises, l'identification des prodromes, le confort post-crise. Strict complément.",
  indications: ["Épilepsie stable sous traitement", "Anxiété intercritique", "Patients connaissant des prodromes"],
  contraindications: ["Substitution au traitement antiépileptique (jamais)", "Épilepsie déstabilisée"],
  programs: [{
    id: "principal",
    title: "Épilepsie — Soutien complémentaire entre les crises",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Épilepsie — Soutien complémentaire entre les crises",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients épileptiques en complément de leur traitement antiépileptique. Travail sur la diminution de l'anxiété entre les crises, l'identification des prodromes, le confort post-crise. Strict complément." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement de l'anxiété intercritique", type: "Levier", icon: "🎯", desc: "Soutien intercritique de l'épilepsie" },
    { name: "Repérage des prodromes", type: "Levier", icon: "🎯", desc: "Soutien intercritique de l'épilepsie" },
    { name: "Confort post-crise", type: "Levier", icon: "🎯", desc: "Soutien intercritique de l'épilepsie" },
    { name: "Vie possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Système qu'on accompagne", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur neurologique ne fonctionne pas pour moi"],
};

const k_710: ProtocolDetail = {
  protocolId: 710,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pneumologie",
  description: "Pour patients atteints de BPCO en complément du traitement pneumologique. Travail sur la dyspnée, l'anxiété respiratoire, la motivation aux exercices respiratoires et à l'arrêt du tabac.",
  indications: ["BPCO modérée à modérément sévère", "Anxiété de la dyspnée", "Patients en réhabilitation respiratoire", "Sevrage tabagique en parallèle"],
  contraindications: ["Exacerbation aiguë (urgence)", "Insuffisance respiratoire sévère décompensée"],
  programs: [{
    id: "principal",
    title: "BPCO — Souffle préservé",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — BPCO — Souffle préservé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de BPCO en complément du traitement pneumologique. Travail sur la dyspnée, l'anxiété respiratoire, la motivation aux exercices respiratoires et à l'arrêt du tabac." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage de l'anxiété respiratoire", type: "Levier", icon: "🎯", desc: "Soutien respiratoire chronique" },
    { name: "Imagerie de bronches accueillantes", type: "Levier", icon: "🎯", desc: "Soutien respiratoire chronique" },
    { name: "Motivation aux exercices", type: "Levier", icon: "🎯", desc: "Soutien respiratoire chronique" },
    { name: "Souffle préservé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Air qui entre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pneumologie ne fonctionne pas pour moi"],
};

const k_711: ProtocolDetail = {
  protocolId: 711,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pneumologie fonctionnelle",
  description: "Pour patients ayant une sensation de manque d'air ou d'oppression thoracique sans cause organique identifiable, ou disproportionnée à la cause. Travail sur l'hyperventilation, la perception respiratoire, l'anxiété.",
  indications: ["Dyspnée fonctionnelle (bilan négatif)", "Syndrome d'hyperventilation chronique", "Sensation de blocage thoracique", "Soupirs fréquents avec sensation de mal respirer"],
  contraindications: ["Causes organiques non explorées (toujours bilan complet)", "Patients en panique respiratoire actuelle"],
  programs: [{
    id: "principal",
    title: "Dyspnée chronique fonctionnelle — Sensation de manque d'air",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dyspnée chronique fonctionnelle — Sensation de manque d'air",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ayant une sensation de manque d'air ou d'oppression thoracique sans cause organique identifiable, ou disproportionnée à la cause. Travail sur l'hyperventilation, la perception respiratoire, l'anxiété." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage de l'hyperventilation", type: "Levier", icon: "🎯", desc: "Régulation de la perception respiratoire" },
    { name: "Recadrage des sensations", type: "Levier", icon: "🎯", desc: "Régulation de la perception respiratoire" },
    { name: "Confiance respiratoire restaurée", type: "Levier", icon: "🎯", desc: "Régulation de la perception respiratoire" },
    { name: "Souffle qui passe naturellement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Air suffisant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pneumologie fonctionnelle ne fonctionne pas pour moi"],
};

const k_712: ProtocolDetail = {
  protocolId: 712,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Addictions",
  description: "Protocole d'accompagnement à l'arrêt du tabac. Travail sur la motivation, la gestion des envies, le rapport au geste, la libération de l'identité de fumeur. Approche en plusieurs séances.",
  indications: ["Volonté d'arrêter de fumer", "Échecs précédents", "Patients motivés mais ayant peur du manque"],
  contraindications: ["Patients non motivés (l'hypnose ne crée pas la motivation)", "Pathologies psychiatriques sévères non stabilisées"],
  programs: [{
    id: "principal",
    title: "Sevrage tabagique — Préparation et accompagnement",
    icon: "◑",
    duration: "60 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sevrage tabagique — Préparation et accompagnement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole d'accompagnement à l'arrêt du tabac. Travail sur la motivation, la gestion des envies, le rapport au geste, la libération de l'identité de fumeur. Approche en plusieurs séances." }
      ],
    }],
  }],
  outils: [
    { name: "Renforcement de la motivation", type: "Levier", icon: "🎯", desc: "Sevrage tabagique multi-séances" },
    { name: "Désinvestissement du geste", type: "Levier", icon: "🎯", desc: "Sevrage tabagique multi-séances" },
    { name: "Gestion des envies", type: "Levier", icon: "🎯", desc: "Sevrage tabagique multi-séances" },
    { name: "Liberté retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souffle reconquis", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "60 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur addictions ne fonctionne pas pour moi"],
};

const k_713: ProtocolDetail = {
  protocolId: 713,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Urogynécologie",
  description: "Pour incontinence urinaire d'effort ou par urgenturie, en complément de la rééducation périnéale. Travail sur la conscience du périnée, la régulation de l'urgenturie, la confiance corporelle.",
  indications: ["Incontinence urinaire d'effort modérée", "Urgenturie", "Patients en complément de la rééducation périnéale", "Suite de chirurgie ou accouchement"],
  contraindications: ["Substitution à la rééducation médicale", "Causes organiques non explorées"],
  programs: [{
    id: "principal",
    title: "Incontinence urinaire — Restaurer le contrôle",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Incontinence urinaire — Restaurer le contrôle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour incontinence urinaire d'effort ou par urgenturie, en complément de la rééducation périnéale. Travail sur la conscience du périnée, la régulation de l'urgenturie, la confiance corporelle." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience du périnée", type: "Levier", icon: "🎯", desc: "Soutien à la rééducation périnéale et urgenturie" },
    { name: "Imagerie de tonicité retrouvée", type: "Levier", icon: "🎯", desc: "Soutien à la rééducation périnéale et urgenturie" },
    { name: "Régulation de l'urgenturie", type: "Levier", icon: "🎯", desc: "Soutien à la rééducation périnéale et urgenturie" },
    { name: "Périnée vivant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Contrôle retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur urogynécologie ne fonctionne pas pour moi"],
};

const k_714: ProtocolDetail = {
  protocolId: 714,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Gynécologique",
  description: "Pour vaginisme, contraction involontaire des muscles du vagin empêchant la pénétration. Travail délicat sur la décrispation, la confiance corporelle, le rapport à l'intime. En coordination avec gynécologue, sexologue, kiné périnéale.",
  indications: ["Vaginisme primaire ou secondaire", "Patientes en parcours pluridisciplinaire", "Difficultés à la pénétration médicale ou intime"],
  contraindications: ["Trauma sexuel non traité (cadre psychothérapeutique requis avant)"],
  programs: [{
    id: "principal",
    title: "Vaginisme — Réconciliation avec l'intime",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vaginisme — Réconciliation avec l'intime",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour vaginisme, contraction involontaire des muscles du vagin empêchant la pénétration. Travail délicat sur la décrispation, la confiance corporelle, le rapport à l'intime. En coordination avec gynécologue, sexologue, kiné périnéale." }
      ],
    }],
  }],
  outils: [
    { name: "Décrispation périnéale", type: "Levier", icon: "🎯", desc: "Travail intime de décrispation et réconciliation" },
    { name: "Réconciliation avec le corps intime", type: "Levier", icon: "🎯", desc: "Travail intime de décrispation et réconciliation" },
    { name: "Désinvestissement du contrôle", type: "Levier", icon: "🎯", desc: "Travail intime de décrispation et réconciliation" },
    { name: "Corps intime accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Détente possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologique ne fonctionne pas pour moi"],
};

const k_715: ProtocolDetail = {
  protocolId: 715,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Gynécologique",
  description: "Pour dyspareunie (douleurs lors des rapports sexuels) chez la femme. Travail sur l'apaisement local, la décrispation, la confiance corporelle, en complément du suivi médical pour identifier la cause.",
  indications: ["Dyspareunie post-ménopausique (avec THM si pertinent)", "Dyspareunie après accouchement", "Dyspareunie sans cause organique trouvée", "Vestibulodynie"],
  contraindications: ["Pathologies gynécologiques actives non traitées (endométriose, infections)", "Trauma sexuel non traité"],
  programs: [{
    id: "principal",
    title: "Dyspareunie — Apaiser la douleur intime",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dyspareunie — Apaiser la douleur intime",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour dyspareunie (douleurs lors des rapports sexuels) chez la femme. Travail sur l'apaisement local, la décrispation, la confiance corporelle, en complément du suivi médical pour identifier la cause." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement local", type: "Levier", icon: "🎯", desc: "Apaisement local intime et confiance" },
    { name: "Décrispation périnéale", type: "Levier", icon: "🎯", desc: "Apaisement local intime et confiance" },
    { name: "Confiance corporelle", type: "Levier", icon: "🎯", desc: "Apaisement local intime et confiance" },
    { name: "Intime apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Plaisir possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologique ne fonctionne pas pour moi"],
};

const k_716: ProtocolDetail = {
  protocolId: 716,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Cardio-vasculaire",
  description: "Pour patients atteints d'insuffisance cardiaque chronique en complément du traitement cardiologique. Travail sur la gestion de l'anxiété, la dyspnée, l'observance thérapeutique, la qualité de vie.",
  indications: ["Insuffisance cardiaque chronique stable", "Patients en complément du traitement", "Anxiété face à la maladie", "Soutien à l'observance"],
  contraindications: ["Décompensation aiguë (urgence)", "Substitution au traitement cardiologique"],
  programs: [{
    id: "principal",
    title: "Insuffisance cardiaque — Vivre avec un cœur fragile",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Insuffisance cardiaque — Vivre avec un cœur fragile",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints d'insuffisance cardiaque chronique en complément du traitement cardiologique. Travail sur la gestion de l'anxiété, la dyspnée, l'observance thérapeutique, la qualité de vie." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement de l'anxiété cardiaque", type: "Levier", icon: "🎯", desc: "Soutien aux patients insuffisants cardiaques" },
    { name: "Soutien à l'observance", type: "Levier", icon: "🎯", desc: "Soutien aux patients insuffisants cardiaques" },
    { name: "Gestion de la dyspnée d'effort", type: "Levier", icon: "🎯", desc: "Soutien aux patients insuffisants cardiaques" },
    { name: "Cœur ménagé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vie habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cardio-vasculaire ne fonctionne pas pour moi"],
};

const k_717: ProtocolDetail = {
  protocolId: 717,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Cardio-vasculaire",
  description: "Soutien aux patients ayant fait un infarctus, en complément de la rééducation cardiaque. Travail sur la confiance corporelle après le choc, l'anxiété de récidive, l'engagement dans les changements de vie.",
  indications: ["Post-infarctus en phase de rééducation", "Anxiété de récidive", "Patients en réhabilitation cardiaque", "Reprise progressive d'activité"],
  contraindications: ["Phase aiguë (urgence)"],
  programs: [{
    id: "principal",
    title: "Post-infarctus — Reconstruction et rééducation",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Post-infarctus — Reconstruction et rééducation",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Soutien aux patients ayant fait un infarctus, en complément de la rééducation cardiaque. Travail sur la confiance corporelle après le choc, l'anxiété de récidive, l'engagement dans les changements de vie." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement du traumatisme", type: "Levier", icon: "🎯", desc: "Reconstruction post-infarctus" },
    { name: "Confiance corporelle restaurée", type: "Levier", icon: "🎯", desc: "Reconstruction post-infarctus" },
    { name: "Engagement aux changements", type: "Levier", icon: "🎯", desc: "Reconstruction post-infarctus" },
    { name: "Cœur retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vie reprise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cardio-vasculaire ne fonctionne pas pour moi"],
};

const k_718: ProtocolDetail = {
  protocolId: 718,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Endocrinologie",
  description: "Pour patients hypothyroïdiens en complément du traitement substitutif. Travail sur la fatigue résiduelle, la régulation énergétique, la motivation aux activités.",
  indications: ["Hypothyroïdie sous traitement avec fatigue résiduelle", "Difficultés à reprendre l'activité après bilan thyroïdien équilibré", "Soutien hygiéno-diététique"],
  contraindications: ["Hypothyroïdie non équilibrée biologiquement (ajuster traitement)", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Hypothyroïdie — Soutenir l'énergie",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypothyroïdie — Soutenir l'énergie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients hypothyroïdiens en complément du traitement substitutif. Travail sur la fatigue résiduelle, la régulation énergétique, la motivation aux activités." }
      ],
    }],
  }],
  outils: [
    { name: "Mobilisation énergétique", type: "Levier", icon: "🎯", desc: "Soutien à l'énergie en hypothyroïdie" },
    { name: "Recadrage de la fatigue résiduelle", type: "Levier", icon: "🎯", desc: "Soutien à l'énergie en hypothyroïdie" },
    { name: "Motivation à l'activité", type: "Levier", icon: "🎯", desc: "Soutien à l'énergie en hypothyroïdie" },
    { name: "Énergie disponible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Métabolisme accompagné", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur endocrinologie ne fonctionne pas pour moi"],
};

const k_719: ProtocolDetail = {
  protocolId: 719,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Endocrinologie",
  description: "Pour patients en hyperthyroïdie ou en post-traitement, en complément du suivi. Travail sur l'apaisement du système nerveux emballé, la régulation des palpitations, l'anxiété, la gestion de la fatigue paradoxale.",
  indications: ["Hyperthyroïdie en cours de traitement", "Maladie de Basedow accompagnée", "Anxiété et palpitations liées à l'hyperthyroïdie", "Période de transition après traitement"],
  contraindications: ["Crise thyréotoxique (urgence)", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Hyperthyroïdie — Apaiser l'emballement",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hyperthyroïdie — Apaiser l'emballement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en hyperthyroïdie ou en post-traitement, en complément du suivi. Travail sur l'apaisement du système nerveux emballé, la régulation des palpitations, l'anxiété, la gestion de la fatigue paradoxale." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement du système nerveux", type: "Levier", icon: "🎯", desc: "Apaisement de l'emballement métabolique" },
    { name: "Régulation cardiaque", type: "Levier", icon: "🎯", desc: "Apaisement de l'emballement métabolique" },
    { name: "Gestion de l'anxiété thyroïdienne", type: "Levier", icon: "🎯", desc: "Apaisement de l'emballement métabolique" },
    { name: "Système apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Cœur tranquille", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur endocrinologie ne fonctionne pas pour moi"],
};

const k_720: ProtocolDetail = {
  protocolId: 720,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Oncologie",
  description: "Pour patients en cours de chimiothérapie souffrant d'effets secondaires : nausées, vomissements anticipatoires, fatigue, mucites, neuropathies. Travail de soutien spécifique sur chaque manifestation.",
  indications: ["Patients en cours de chimiothérapie", "Nausées et vomissements chimio-induits", "Vomissements anticipatoires", "Fatigue post-chimio", "Mucites buccales"],
  contraindications: ["Substitution aux antiémétiques médicaux"],
  programs: [{
    id: "principal",
    title: "Effets secondaires de la chimiothérapie — Atténuation",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Effets secondaires de la chimiothérapie — Atténuation",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en cours de chimiothérapie souffrant d'effets secondaires : nausées, vomissements anticipatoires, fatigue, mucites, neuropathies. Travail de soutien spécifique sur chaque manifestation." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage des nausées anticipatoires", type: "Levier", icon: "🎯", desc: "Atténuation des effets secondaires de chimiothérapie" },
    { name: "Imagerie d'apaisement digestif", type: "Levier", icon: "🎯", desc: "Atténuation des effets secondaires de chimiothérapie" },
    { name: "Soutien à la récupération entre cycles", type: "Levier", icon: "🎯", desc: "Atténuation des effets secondaires de chimiothérapie" },
    { name: "Traitement reçu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps soutenu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie ne fonctionne pas pour moi"],
};

const k_721: ProtocolDetail = {
  protocolId: 721,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Oncologie",
  description: "Pour patients en cours de radiothérapie. Travail sur l'immobilité durant les séances, l'apaisement de la peau qui réagit, l'anxiété claustrophobique des appareils, le fil des semaines.",
  indications: ["Patients en cours de radiothérapie", "Anxiété face à l'appareil", "Réactions cutanées aux rayons", "Fatigue de fin de cycle"],
  contraindications: ["Substitution aux soins prescrits"],
  programs: [{
    id: "principal",
    title: "Radiothérapie — Confort des séances et de la peau",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Radiothérapie — Confort des séances et de la peau",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en cours de radiothérapie. Travail sur l'immobilité durant les séances, l'apaisement de la peau qui réagit, l'anxiété claustrophobique des appareils, le fil des semaines." }
      ],
    }],
  }],
  outils: [
    { name: "Confort durant l'immobilité", type: "Levier", icon: "🎯", desc: "Soutien à la radiothérapie" },
    { name: "Apaisement cutané imagé", type: "Levier", icon: "🎯", desc: "Soutien à la radiothérapie" },
    { name: "Désamorçage anxiété appareil", type: "Levier", icon: "🎯", desc: "Soutien à la radiothérapie" },
    { name: "Immobilité confortable", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Peau apaisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie ne fonctionne pas pour moi"],
};

const k_722: ProtocolDetail = {
  protocolId: 722,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Immunologie",
  description: "Pour patients atteints de maladies auto-immunes (lupus, polyarthrite rhumatoïde stabilisée, sclérodermie, etc.). Travail sur le dialogue intérieur avec le système immunitaire, la gestion du stress facteur de poussées, l'acceptation.",
  indications: ["Maladies auto-immunes en phase stable ou rémission", "Patients en complément de leur traitement", "Soutien à la qualité de vie"],
  contraindications: ["Poussée aiguë sévère", "Substitution aux traitements immunomodulateurs"],
  programs: [{
    id: "principal",
    title: "Maladies auto-immunes — Dialogue avec le système immunitaire",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Maladies auto-immunes — Dialogue avec le système immunitaire",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de maladies auto-immunes (lupus, polyarthrite rhumatoïde stabilisée, sclérodermie, etc.). Travail sur le dialogue intérieur avec le système immunitaire, la gestion du stress facteur de poussées, l'acceptation." }
      ],
    }],
  }],
  outils: [
    { name: "Dialogue avec le système immunitaire", type: "Levier", icon: "🎯", desc: "Soutien aux maladies auto-immunes" },
    { name: "Gestion du stress facteur de poussées", type: "Levier", icon: "🎯", desc: "Soutien aux maladies auto-immunes" },
    { name: "Acceptation de la chronicité", type: "Levier", icon: "🎯", desc: "Soutien aux maladies auto-immunes" },
    { name: "Système immunitaire allié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Discernement retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur immunologie ne fonctionne pas pour moi"],
};

const k_723: ProtocolDetail = {
  protocolId: 723,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Dermatologique",
  description: "Pour patients atteints de vitiligo en complément du traitement dermatologique. Travail sur la régulation immunitaire locale, l'acceptation de la peau actuelle, le soutien à la repigmentation.",
  indications: ["Vitiligo stable ou évolutif modéré", "Patients en complément de PUVA, corticoïdes locaux, ou autres traitements", "Vécu identitaire face aux taches"],
  contraindications: ["Substitution aux traitements dermatologiques"],
  programs: [{
    id: "principal",
    title: "Vitiligo — Soutenir la repigmentation",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vitiligo — Soutenir la repigmentation",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de vitiligo en complément du traitement dermatologique. Travail sur la régulation immunitaire locale, l'acceptation de la peau actuelle, le soutien à la repigmentation." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie de mélanocytes actifs", type: "Levier", icon: "🎯", desc: "Soutien à la repigmentation et acceptation" },
    { name: "Régulation immunitaire locale", type: "Levier", icon: "🎯", desc: "Soutien à la repigmentation et acceptation" },
    { name: "Acceptation de l'apparence actuelle", type: "Levier", icon: "🎯", desc: "Soutien à la repigmentation et acceptation" },
    { name: "Peau qui se réharmonise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mélanocytes actifs", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dermatologique ne fonctionne pas pour moi"],
};

const k_724: ProtocolDetail = {
  protocolId: 724,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Dermatologique",
  description: "Pour patients atteints d'alopécie areata (pelade) en complément du traitement dermatologique. Travail sur le soutien folliculaire, la régulation immunitaire locale, le vécu de la perte capillaire.",
  indications: ["Pelade en plaques", "Alopécie areata", "Patients en complément traitement", "Vécu identitaire de la perte"],
  contraindications: ["Alopécie d'autre cause", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Alopécie areata — Soutien folliculaire et estime",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Alopécie areata — Soutien folliculaire et estime",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints d'alopécie areata (pelade) en complément du traitement dermatologique. Travail sur le soutien folliculaire, la régulation immunitaire locale, le vécu de la perte capillaire." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie folliculaire", type: "Levier", icon: "🎯", desc: "Soutien à la repousse et acceptation" },
    { name: "Régulation immunitaire locale", type: "Levier", icon: "🎯", desc: "Soutien à la repousse et acceptation" },
    { name: "Acceptation transitoire", type: "Levier", icon: "🎯", desc: "Soutien à la repousse et acceptation" },
    { name: "Cuir chevelu nourri", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Follicules réveillés", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dermatologique ne fonctionne pas pour moi"],
};

const k_725: ProtocolDetail = {
  protocolId: 725,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pédiatrique",
  description: "Pour enfants souffrant de douleurs abdominales chroniques fonctionnelles (sans cause organique identifiée). Travail adapté avec imagerie ludique, en lien avec parents.",
  indications: ["Douleurs abdominales fonctionnelles 5-12 ans", "Enfants avec bilan négatif", "Côlon irritable de l'enfant"],
  contraindications: ["Causes organiques non éliminées", "Très jeunes enfants (- 5 ans)"],
  programs: [{
    id: "principal",
    title: "Douleurs abdominales fonctionnelles de l'enfant — Apaiser le ventre qui parle",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleurs abdominales fonctionnelles de l'enfant — Apaiser le ventre qui parle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants souffrant de douleurs abdominales chroniques fonctionnelles (sans cause organique identifiée). Travail adapté avec imagerie ludique, en lien avec parents." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie ludique apaisante", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour douleurs abdominales" },
    { name: "Personnage protecteur du ventre", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour douleurs abdominales" },
    { name: "Implication des parents", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour douleurs abdominales" },
    { name: "Ventre apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Magie protectrice", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pédiatrique ne fonctionne pas pour moi"],
};

const k_726: ProtocolDetail = {
  protocolId: 726,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pédiatrique",
  description: "Adaptation pédiatrique pour enfants asthmatiques. Travail ludique sur le souffle, l'apaisement bronchique imagé, la confiance respiratoire, en complément du traitement.",
  indications: ["Asthme de l'enfant 5-12 ans", "Enfants anxieux face aux crises", "Soutien à l'observance des traitements"],
  contraindications: ["Crise d'asthme aiguë", "Asthme sévère mal contrôlé", "Très jeunes enfants"],
  programs: [{
    id: "principal",
    title: "Asthme de l'enfant — Souffle apprivoisé",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Asthme de l'enfant — Souffle apprivoisé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Adaptation pédiatrique pour enfants asthmatiques. Travail ludique sur le souffle, l'apaisement bronchique imagé, la confiance respiratoire, en complément du traitement." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie ludique de souffle", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour asthme" },
    { name: "Personnage gardien des poumons", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour asthme" },
    { name: "Désamorçage de la peur de crise", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour asthme" },
    { name: "Souffle qui passe", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Poumons amis", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pédiatrique ne fonctionne pas pour moi"],
};

const k_727: ProtocolDetail = {
  protocolId: 727,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Pédiatrique",
  description: "Pour enfants devant subir des soins répétés ou douloureux (ponctions, perfusions répétées, examens invasifs). Adaptation ludique des techniques de confort, dispositif rapide.",
  indications: ["Enfant en soins répétés (oncologie pédiatrique, pathologie chronique)", "Préparation à examen douloureux", "Phobie des soins chez l'enfant"],
  contraindications: ["Très jeunes enfants (- 5 ans)"],
  programs: [{
    id: "principal",
    title: "Préparation aux soins lourds chez l'enfant — Ponctions, examens douloureux",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation aux soins lourds chez l'enfant — Ponctions, examens douloureux",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants devant subir des soins répétés ou douloureux (ponctions, perfusions répétées, examens invasifs). Adaptation ludique des techniques de confort, dispositif rapide." }
      ],
    }],
  }],
  outils: [
    { name: "Lieu sûr ludique", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour soins" },
    { name: "Personnage protecteur", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour soins" },
    { name: "Modification ludique des sensations", type: "Levier", icon: "🎯", desc: "Hypnose pédiatrique pour soins" },
    { name: "Voyage protégé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Outil magique", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pédiatrique ne fonctionne pas pour moi"],
};

const k_728: ProtocolDetail = {
  protocolId: 728,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Deuil",
  description: "Pour patients dans les premières semaines à mois suivant la perte d'un proche. Travail de présence à l'épreuve, légitimation des émotions, lien intériorisé avec le défunt, soutien à la traversée sans pression de durée.",
  indications: ["Deuil récent (jours, semaines, premiers mois)", "Patients submergés par l'épreuve", "Première rencontre thérapeutique après la perte"],
  contraindications: ["Deuil compliqué chronique installé (cadre psychothérapeutique structuré requis)", "Risque suicidaire (orienter en urgence)"],
  programs: [{
    id: "principal",
    title: "Deuil récent — Accompagner la première traversée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil récent — Accompagner la première traversée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients dans les premières semaines à mois suivant la perte d'un proche. Travail de présence à l'épreuve, légitimation des émotions, lien intériorisé avec le défunt, soutien à la traversée sans pression de durée." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation des émotions", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil récent" },
    { name: "Présence sans précipitation", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil récent" },
    { name: "Lien intériorisé avec le défunt", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil récent" },
    { name: "Traversée respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien préservé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur deuil ne fonctionne pas pour moi"],
};

const k_729: ProtocolDetail = {
  protocolId: 729,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Deuil",
  description: "Pour patients portant un deuil ancien (années) qui ne s'est pas pleinement traversé. Reprise du travail de deuil resté en suspens, retrouvailles avec le défunt intérieur, libération progressive.",
  indications: ["Deuil de plusieurs années non traversé", "Tristesse persistante liée à une ancienne perte", "Patients ayant 'mis de côté' un deuil par survie", "Réémergence d'un ancien deuil à l'occasion d'un événement"],
  contraindications: ["Deuil compliqué pathologique (cadre psychiatrique)", "Trauma associé non traité"],
  programs: [{
    id: "principal",
    title: "Deuil ancien non résolu — Reprendre le fil",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil ancien non résolu — Reprendre le fil",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients portant un deuil ancien (années) qui ne s'est pas pleinement traversé. Reprise du travail de deuil resté en suspens, retrouvailles avec le défunt intérieur, libération progressive." }
      ],
    }],
  }],
  outils: [
    { name: "Validation du gel émotionnel", type: "Levier", icon: "🎯", desc: "Reprise d'un deuil ancien" },
    { name: "Retrouvailles avec le défunt intérieur", type: "Levier", icon: "🎯", desc: "Reprise d'un deuil ancien" },
    { name: "Libération des émotions en suspens", type: "Levier", icon: "🎯", desc: "Reprise d'un deuil ancien" },
    { name: "Reprise du fil", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur deuil ne fonctionne pas pour moi"],
};

const k_730: ProtocolDetail = {
  protocolId: 730,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Deuil",
  description: "Pour deuils suite à mort traumatique : suicide, accident, mort violente, perte d'enfant. Travail spécifique sur la dimension traumatique de la perte avant ou en parallèle du travail de deuil. Prudence accrue.",
  indications: ["Deuil suite à suicide d'un proche", "Deuil suite à accident", "Deuil après mort violente", "Perte d'enfant", "Mort soudaine inattendue"],
  contraindications: ["Phase aiguë (premières semaines) si patient pas stabilisé", "PTSD sévère non traité", "Risque suicidaire actif"],
  programs: [{
    id: "principal",
    title: "Deuil traumatique — Quand la perte a été violente",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil traumatique — Quand la perte a été violente",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour deuils suite à mort traumatique : suicide, accident, mort violente, perte d'enfant. Travail spécifique sur la dimension traumatique de la perte avant ou en parallèle du travail de deuil. Prudence accrue." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction trauma / deuil", type: "Levier", icon: "🎯", desc: "Travail spécifique du deuil traumatique" },
    { name: "Apaisement de l'image traumatique", type: "Levier", icon: "🎯", desc: "Travail spécifique du deuil traumatique" },
    { name: "Légitimation de la révolte", type: "Levier", icon: "🎯", desc: "Travail spécifique du deuil traumatique" },
    { name: "Deuil rendu possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Image apaisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur deuil ne fonctionne pas pour moi"],
};

const k_731: ProtocolDetail = {
  protocolId: 731,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Deuil",
  description: "Pour patients accompagnant un proche en fin de vie. Travail sur la traversée anticipatoire, la présence dans les derniers moments, la culpabilité de continuer à vivre, la préparation au passage.",
  indications: ["Aidants de personnes en fin de vie", "Familles en soins palliatifs", "Anticipation d'une perte certaine", "Pertes par maladie évolutive (Alzheimer, cancers métastasés)"],
  contraindications: ["Patient lui-même en fin de vie (autre approche)"],
  programs: [{
    id: "principal",
    title: "Deuil anticipatoire — Accompagner avant la perte",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil anticipatoire — Accompagner avant la perte",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients accompagnant un proche en fin de vie. Travail sur la traversée anticipatoire, la présence dans les derniers moments, la culpabilité de continuer à vivre, la préparation au passage." }
      ],
    }],
  }],
  outils: [
    { name: "Présence dans le présent qui reste", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil anticipatoire" },
    { name: "Légitimation des émotions ambivalentes", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil anticipatoire" },
    { name: "Préparation douce", type: "Levier", icon: "🎯", desc: "Accompagnement du deuil anticipatoire" },
    { name: "Présence aux derniers temps", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Émotions accueillies", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur deuil ne fonctionne pas pour moi"],
};

const k_732: ProtocolDetail = {
  protocolId: 732,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Pertes relationnelles",
  description: "Pour rupture amoureuse, divorce, fin de relation significative. Travail sur le travail de deuil amoureux, la libération du lien, la reconstruction de l'identité, l'estime de soi.",
  indications: ["Rupture amoureuse récente ou en cours", "Divorce", "Fin de relation longue", "Patients en difficulté de tourner la page"],
  contraindications: ["Dépression majeure réactionnelle (cadre psychiatrique)", "Idées suicidaires"],
  programs: [{
    id: "principal",
    title: "Rupture amoureuse — Reconstruire après l'amour",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Rupture amoureuse — Reconstruire après l'amour",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour rupture amoureuse, divorce, fin de relation significative. Travail sur le travail de deuil amoureux, la libération du lien, la reconstruction de l'identité, l'estime de soi." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation de la souffrance", type: "Levier", icon: "🎯", desc: "Travail du deuil amoureux et reconstruction" },
    { name: "Libération progressive du lien", type: "Levier", icon: "🎯", desc: "Travail du deuil amoureux et reconstruction" },
    { name: "Reconstruction de l'identité", type: "Levier", icon: "🎯", desc: "Travail du deuil amoureux et reconstruction" },
    { name: "Reconstruction de soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien transformé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pertes relationnelles ne fonctionne pas pour moi"],
};

const k_733: ProtocolDetail = {
  protocolId: 733,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Pertes identitaires",
  description: "Pour pertes liées à l'emploi : licenciement, retraite, fermeture d'entreprise, reconversion forcée, fin d'une carrière marquante. Travail sur le deuil identitaire, la transformation, l'avenir.",
  indications: ["Licenciement", "Départ à la retraite difficile", "Reconversion subie", "Fin d'une activité importante", "Burn-out menant à arrêt"],
  contraindications: ["Dépression majeure réactionnelle (cadre psychiatrique)"],
  programs: [{
    id: "principal",
    title: "Deuil professionnel — Perte d'emploi, retraite, reconversion",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil professionnel — Perte d'emploi, retraite, reconversion",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour pertes liées à l'emploi : licenciement, retraite, fermeture d'entreprise, reconversion forcée, fin d'une carrière marquante. Travail sur le deuil identitaire, la transformation, l'avenir." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction entre identité et fonction", type: "Levier", icon: "🎯", desc: "Deuil professionnel et identitaire" },
    { name: "Légitimation du deuil professionnel", type: "Levier", icon: "🎯", desc: "Deuil professionnel et identitaire" },
    { name: "Identification de ce qui demeure", type: "Levier", icon: "🎯", desc: "Deuil professionnel et identitaire" },
    { name: "Identité préservée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Transformation possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pertes identitaires ne fonctionne pas pour moi"],
};

const k_734: ProtocolDetail = {
  protocolId: 734,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Pertes corporelles",
  description: "Pour patients confrontés à l'annonce d'une maladie chronique, à la perte d'une fonction physique ou cognitive, à un handicap installé. Travail sur le deuil du corps d'avant et l'accueil du corps actuel.",
  indications: ["Annonce de maladie chronique", "Handicap installé suite à accident", "Perte d'une fonction (motrice, cognitive, sensorielle)", "Patients devant accepter une nouvelle réalité corporelle"],
  contraindications: ["Phase de choc immédiat (donner du temps)", "Dépression majeure réactionnelle"],
  programs: [{
    id: "principal",
    title: "Deuil de santé — Perte d'une fonction, maladie chronique annoncée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Deuil de santé — Perte d'une fonction, maladie chronique annoncée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés à l'annonce d'une maladie chronique, à la perte d'une fonction physique ou cognitive, à un handicap installé. Travail sur le deuil du corps d'avant et l'accueil du corps actuel." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation du deuil corporel", type: "Levier", icon: "🎯", desc: "Deuil corporel et accueil de la nouvelle réalité" },
    { name: "Distinction entre identité et corps", type: "Levier", icon: "🎯", desc: "Deuil corporel et accueil de la nouvelle réalité" },
    { name: "Accueil progressif", type: "Levier", icon: "🎯", desc: "Deuil corporel et accueil de la nouvelle réalité" },
    { name: "Corps d'avant honoré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps actuel accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pertes corporelles ne fonctionne pas pour moi"],
};

const k_735: ProtocolDetail = {
  protocolId: 735,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Estime",
  description: "Pour patients dont l'estime de soi a été abîmée par des événements de vie : ruptures, échecs, jugements, parcours difficiles. Travail de reconstruction de l'estime, distinction valeur/performance, voix intérieure bienveillante.",
  indications: ["Estime de soi basse chronique", "Suite d'échec ou rejet", "Perfectionnisme épuisant", "Auto-critique excessive"],
  contraindications: ["Trouble de personnalité borderline (cadre psychothérapeutique structuré)", "Dépression majeure"],
  programs: [{
    id: "principal",
    title: "Estime de soi blessée — Reconstruire la valeur intérieure",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Estime de soi blessée — Reconstruire la valeur intérieure",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients dont l'estime de soi a été abîmée par des événements de vie : ruptures, échecs, jugements, parcours difficiles. Travail de reconstruction de l'estime, distinction valeur/performance, voix intérieure bienveillante." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction valeur intrinsèque / performance", type: "Levier", icon: "🎯", desc: "Reconstruction de l'estime de soi" },
    { name: "Reconnaissance des qualités", type: "Levier", icon: "🎯", desc: "Reconstruction de l'estime de soi" },
    { name: "Voix intérieure bienveillante", type: "Levier", icon: "🎯", desc: "Reconstruction de l'estime de soi" },
    { name: "Valeur inconditionnelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Bienveillance pour soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur estime ne fonctionne pas pour moi"],
};

const k_736: ProtocolDetail = {
  protocolId: 736,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Émotions chroniques",
  description: "Pour patients porteurs d'une culpabilité chronique, fondée ou non, qui pèse sur leur vie. Travail de différenciation responsabilité réelle / culpabilité excessive, dépose progressive, pardon de soi.",
  indications: ["Culpabilité chronique disproportionnée", "Culpabilité du survivant", "Culpabilité parentale", "Culpabilité qui empêche d'avancer"],
  contraindications: ["TOC à thème de culpabilité (cadre psychiatrique)", "Mélancolie délirante"],
  programs: [{
    id: "principal",
    title: "Culpabilité écrasante — Déposer ce qui n'a plus à être porté",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Culpabilité écrasante — Déposer ce qui n'a plus à être porté",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients porteurs d'une culpabilité chronique, fondée ou non, qui pèse sur leur vie. Travail de différenciation responsabilité réelle / culpabilité excessive, dépose progressive, pardon de soi." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction responsabilité / culpabilité", type: "Levier", icon: "🎯", desc: "Travail sur la culpabilité chronique" },
    { name: "Réparation symbolique si pertinente", type: "Levier", icon: "🎯", desc: "Travail sur la culpabilité chronique" },
    { name: "Pardon de soi progressif", type: "Levier", icon: "🎯", desc: "Travail sur la culpabilité chronique" },
    { name: "Culpabilité juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pardon de soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur émotions chroniques ne fonctionne pas pour moi"],
};

const k_737: ProtocolDetail = {
  protocolId: 737,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Émotions chroniques",
  description: "Pour patients gelés par une honte chronique, qu'elle soit liée à un événement particulier ou à un sentiment diffus d'indignité. Travail délicat de réintégration et de restauration.",
  indications: ["Honte chronique d'événement précis", "Honte diffuse de soi", "Patients en évitement social par honte", "Suite d'humiliation marquante"],
  contraindications: ["Trauma sévère non traité (cadre spécifique trauma d'abord)", "Trouble personnalité non stabilisé"],
  programs: [{
    id: "principal",
    title: "Honte — Sortir du gel intérieur",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Honte — Sortir du gel intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients gelés par une honte chronique, qu'elle soit liée à un événement particulier ou à un sentiment diffus d'indignité. Travail délicat de réintégration et de restauration." }
      ],
    }],
  }],
  outils: [
    { name: "Création d'un espace sécurisé", type: "Levier", icon: "🎯", desc: "Travail délicat sur la honte" },
    { name: "Distinction honte / culpabilité / regret", type: "Levier", icon: "🎯", desc: "Travail délicat sur la honte" },
    { name: "Présence non jugeante", type: "Levier", icon: "🎯", desc: "Travail délicat sur la honte" },
    { name: "Présence accueillante", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sortie du gel", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur émotions chroniques ne fonctionne pas pour moi"],
};

const k_738: ProtocolDetail = {
  protocolId: 738,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Colère",
  description: "Pour patients submergés par une colère chronique ou des accès de colère disproportionnés. Travail sur la reconnaissance de la fonction de la colère, l'identification des déclencheurs, les modes d'expression sains.",
  indications: ["Colère chronique non identifiée", "Accès de colère disproportionnés", "Conflits relationnels récurrents", "Patients qui se reprochent leurs colères"],
  contraindications: ["Trouble explosif intermittent sévère (cadre psychiatrique)", "Violence avérée envers proches"],
  programs: [{
    id: "principal",
    title: "Colère chronique — Apprivoiser le feu intérieur",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Colère chronique — Apprivoiser le feu intérieur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients submergés par une colère chronique ou des accès de colère disproportionnés. Travail sur la reconnaissance de la fonction de la colère, l'identification des déclencheurs, les modes d'expression sains." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de la fonction de la colère", type: "Levier", icon: "🎯", desc: "Travail sur la colère chronique" },
    { name: "Identification des déclencheurs", type: "Levier", icon: "🎯", desc: "Travail sur la colère chronique" },
    { name: "Désamorçage corporel précoce", type: "Levier", icon: "🎯", desc: "Travail sur la colère chronique" },
    { name: "Énergie reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Limites légitimes", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur colère ne fonctionne pas pour moi"],
};

const k_739: ProtocolDetail = {
  protocolId: 739,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Blessures relationnelles",
  description: "Pour patients porteurs d'une blessure d'abandon récurrente : peur abandonnique, hyperdépendance, choix relationnels répétitifs douloureux. Travail délicat sur la blessure ancienne et la sécurité intérieure.",
  indications: ["Peur abandonnique chronique", "Hyperdépendance affective", "Patterns relationnels répétitifs", "Difficulté à supporter la solitude"],
  contraindications: ["Trouble personnalité borderline (cadre structuré)", "Trauma précoce sévère (approche spécifique)"],
  programs: [{
    id: "principal",
    title: "Sentiment d'abandon — Réparer la blessure ancienne",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sentiment d'abandon — Réparer la blessure ancienne",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients porteurs d'une blessure d'abandon récurrente : peur abandonnique, hyperdépendance, choix relationnels répétitifs douloureux. Travail délicat sur la blessure ancienne et la sécurité intérieure." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de la blessure originelle", type: "Levier", icon: "🎯", desc: "Travail sur la blessure d'abandon" },
    { name: "Réparation symbolique", type: "Levier", icon: "🎯", desc: "Travail sur la blessure d'abandon" },
    { name: "Construction de la sécurité intérieure", type: "Levier", icon: "🎯", desc: "Travail sur la blessure d'abandon" },
    { name: "Présence à soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sécurité intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur blessures relationnelles ne fonctionne pas pour moi"],
};

const k_740: ProtocolDetail = {
  protocolId: 740,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Dépressif léger",
  description: "Pour tristesse persistante n'atteignant pas les critères de dépression majeure. Mélancolie diffuse, perte d'élan, manque de joie. Travail de soutien et de relance sans pathologisation.",
  indications: ["Tristesse persistante depuis plusieurs semaines", "Mélancolie diffuse", "Perte de plaisir partielle", "État dépressif léger"],
  contraindications: ["Dépression majeure (cadre psychiatrique)", "Idées suicidaires (urgence)", "Mélancolie sévère"],
  programs: [{
    id: "principal",
    title: "Tristesse persistante — Quand la grisaille s'installe",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tristesse persistante — Quand la grisaille s'installe",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour tristesse persistante n'atteignant pas les critères de dépression majeure. Mélancolie diffuse, perte d'élan, manque de joie. Travail de soutien et de relance sans pathologisation." }
      ],
    }],
  }],
  outils: [
    { name: "Accueil de la tristesse sans pathologiser", type: "Levier", icon: "🎯", desc: "Soutien dans la tristesse persistante" },
    { name: "Identification des facteurs alimentant", type: "Levier", icon: "🎯", desc: "Soutien dans la tristesse persistante" },
    { name: "Mobilisation douce de ressources", type: "Levier", icon: "🎯", desc: "Soutien dans la tristesse persistante" },
    { name: "Tristesse accueillie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Élan progressif", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dépressif léger ne fonctionne pas pour moi"],
};

const k_741: ProtocolDetail = {
  protocolId: 741,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Dépressif léger",
  description: "Pour épisode dépressif léger en complément du suivi médical/psychiatrique. Travail de soutien à la sortie, mobilisation douce, identification des leviers, prévention des rechutes.",
  indications: ["Épisode dépressif léger diagnostiqué en complément", "Patients en suivi psychiatrique pour soutien", "Phase de sortie de dépression", "Prévention des rechutes"],
  contraindications: ["Dépression sévère (cadre psychiatrique structuré)", "Idées suicidaires actives (urgence)", "Mélancolie", "Substitution au traitement médical"],
  programs: [{
    id: "principal",
    title: "Dépression légère — Soutenir l'éclaircie",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dépression légère — Soutenir l'éclaircie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour épisode dépressif léger en complément du suivi médical/psychiatrique. Travail de soutien à la sortie, mobilisation douce, identification des leviers, prévention des rechutes." }
      ],
    }],
  }],
  outils: [
    { name: "Mobilisation douce sans forcer", type: "Levier", icon: "🎯", desc: "Soutien en dépression légère" },
    { name: "Identification des leviers personnels", type: "Levier", icon: "🎯", desc: "Soutien en dépression légère" },
    { name: "Activation comportementale légère", type: "Levier", icon: "🎯", desc: "Soutien en dépression légère" },
    { name: "Lumière qui revient", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pas à pas", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dépressif léger ne fonctionne pas pour moi"],
};

const k_742: ProtocolDetail = {
  protocolId: 742,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Motivation",
  description: "Pour patients en panne de motivation, sans dépression caractérisée. Travail sur la reconnexion aux désirs profonds, la mobilisation du Ki, la reprise progressive d'élan.",
  indications: ["Apathie sans dépression", "Démotivation chronique", "Patients en burn-out post-aigu", "Manque d'élan vital"],
  contraindications: ["Dépression vraie (utiliser K-EMOT-014)", "Pathologie thyroïdienne non explorée"],
  programs: [{
    id: "principal",
    title: "Apathie et perte de motivation — Réveiller l'élan",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Apathie et perte de motivation — Réveiller l'élan",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en panne de motivation, sans dépression caractérisée. Travail sur la reconnexion aux désirs profonds, la mobilisation du Ki, la reprise progressive d'élan." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion aux désirs profonds", type: "Levier", icon: "🎯", desc: "Réveil de l'élan vital" },
    { name: "Mobilisation du Ki", type: "Levier", icon: "🎯", desc: "Réveil de l'élan vital" },
    { name: "Activation par micro-engagements", type: "Levier", icon: "🎯", desc: "Réveil de l'élan vital" },
    { name: "Ki réveillé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Désir retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur motivation ne fonctionne pas pour moi"],
};

const k_743: ProtocolDetail = {
  protocolId: 743,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Existentiel",
  description: "Pour patients porteurs d'un mal-être diffus, sans cause identifiable, lié à un sentiment de vide existentiel ou de questionnement sur le sens. Travail à la lisière du psychologique et du spirituel, mobilisant fortement le Ka.",
  indications: ["Sentiment de vide existentiel", "Mal-être diffus sans cause", "Questionnement sur le sens", "Patients matures en quête"],
  contraindications: ["Dépression mélancolique", "Crise existentielle aiguë avec idées suicidaires"],
  programs: [{
    id: "principal",
    title: "Anxiété d'être — Mal-être existentiel diffus",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété d'être — Mal-être existentiel diffus",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients porteurs d'un mal-être diffus, sans cause identifiable, lié à un sentiment de vide existentiel ou de questionnement sur le sens. Travail à la lisière du psychologique et du spirituel, mobilisant fortement le Ka." }
      ],
    }],
  }],
  outils: [
    { name: "Validation du questionnement", type: "Levier", icon: "🎯", desc: "Travail à la lisière psychologique et spirituel" },
    { name: "Connexion au Ka, l'essence", type: "Levier", icon: "🎯", desc: "Travail à la lisière psychologique et spirituel" },
    { name: "Sanctuaire intérieur", type: "Levier", icon: "🎯", desc: "Travail à la lisière psychologique et spirituel" },
    { name: "Essence retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vide habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur existentiel ne fonctionne pas pour moi"],
};

const k_744: ProtocolDetail = {
  protocolId: 744,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Existentiel",
  description: "Pour anxiété spécifique de la mort, qu'elle survienne à un âge avancé, après une maladie, ou de manière plus jeune et inattendue. Travail délicat mêlant psychologique et spirituel.",
  indications: ["Peur de la mort marquée et invalidante", "Crise au seuil de la vieillesse", "Suite de diagnostic grave", "Patients vieillissants en angoisse"],
  contraindications: ["Trouble psychotique", "Dépression mélancolique"],
  programs: [{
    id: "principal",
    title: "Peur de mourir — Apprivoiser la finitude",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Peur de mourir — Apprivoiser la finitude",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour anxiété spécifique de la mort, qu'elle survienne à un âge avancé, après une maladie, ou de manière plus jeune et inattendue. Travail délicat mêlant psychologique et spirituel." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation universelle", type: "Levier", icon: "🎯", desc: "Travail délicat sur la finitude" },
    { name: "Diminution de l'évitement", type: "Levier", icon: "🎯", desc: "Travail délicat sur la finitude" },
    { name: "Traversée imaginative", type: "Levier", icon: "🎯", desc: "Travail délicat sur la finitude" },
    { name: "Finitude apprivoisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent précieux", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur existentiel ne fonctionne pas pour moi"],
};

const k_745: ProtocolDetail = {
  protocolId: 745,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Anxiété somatique",
  description: "Pour patients hypocondriaques modérés, surveillant leur corps avec anxiété, multipliant les consultations, redoutant des maladies graves. Travail sur la régulation de la surveillance et la confiance corporelle.",
  indications: ["Hypocondrie modérée", "Anxiété de santé chronique", "Cyberchondrie", "Surveillance corporelle excessive"],
  contraindications: ["TOC sévère à thème santé (cadre psychiatrique)", "Délire hypocondriaque"],
  programs: [{
    id: "principal",
    title: "Anxiété de la santé — Hypocondrie modérée",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de la santé — Hypocondrie modérée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients hypocondriaques modérés, surveillant leur corps avec anxiété, multipliant les consultations, redoutant des maladies graves. Travail sur la régulation de la surveillance et la confiance corporelle." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement de la surveillance", type: "Levier", icon: "🎯", desc: "Régulation de la surveillance corporelle" },
    { name: "Confiance dans le corps", type: "Levier", icon: "🎯", desc: "Régulation de la surveillance corporelle" },
    { name: "Distinction signal / bruit", type: "Levier", icon: "🎯", desc: "Régulation de la surveillance corporelle" },
    { name: "Corps allié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Surveillance régulée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur anxiété somatique ne fonctionne pas pour moi"],
};

const k_746: ProtocolDetail = {
  protocolId: 746,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Compétences relationnelles",
  description: "Pour patients qui ne savent pas refuser, qui s'épuisent à satisfaire les autres, qui craignent les conflits. Travail sur l'assertivité, le droit de dire non, la légitimité des limites.",
  indications: ["Patients qui ne savent pas dire non", "Personnalité 'aidante' épuisée", "Peur du conflit", "Surinvestissement à se rendre indispensable"],
  contraindications: ["Trouble personnalité dépendante sévère (cadre structuré)"],
  programs: [{
    id: "principal",
    title: "Difficulté à dire non — Affirmation de soi",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Difficulté à dire non — Affirmation de soi",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui ne savent pas refuser, qui s'épuisent à satisfaire les autres, qui craignent les conflits. Travail sur l'assertivité, le droit de dire non, la légitimité des limites." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation du droit de refuser", type: "Levier", icon: "🎯", desc: "Apprentissage de l'assertivité" },
    { name: "Exploration des peurs du non", type: "Levier", icon: "🎯", desc: "Apprentissage de l'assertivité" },
    { name: "Pratique imaginaire", type: "Levier", icon: "🎯", desc: "Apprentissage de l'assertivité" },
    { name: "Limites légitimes", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Non bienveillant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur compétences relationnelles ne fonctionne pas pour moi"],
};

const k_747: ProtocolDetail = {
  protocolId: 747,
  efficacite: "KIIKA",
  efficaciteSub: "Émotionnel / Surcharge",
  description: "Pour patients submergés par la charge mentale (souvent femmes, parents, professions de soin). Travail sur la conscience de la charge, le délestage légitime, la délégation, le droit à l'oubli.",
  indications: ["Charge mentale familiale", "Patients en surcharge cognitive permanente", "Difficulté à se reposer même physiquement", "Mère épuisée"],
  contraindications: ["Burn-out aigu (autre approche)"],
  programs: [{
    id: "principal",
    title: "Charge mentale — Délester ce qu'on porte sans le voir",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Charge mentale — Délester ce qu'on porte sans le voir",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients submergés par la charge mentale (souvent femmes, parents, professions de soin). Travail sur la conscience de la charge, le délestage légitime, la délégation, le droit à l'oubli." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience de la charge", type: "Levier", icon: "🎯", desc: "Délestage de la charge mentale" },
    { name: "Légitimation du délestage", type: "Levier", icon: "🎯", desc: "Délestage de la charge mentale" },
    { name: "Délégation possible", type: "Levier", icon: "🎯", desc: "Délestage de la charge mentale" },
    { name: "Charge déposée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Délégation possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur surcharge ne fonctionne pas pour moi"],
};

const k_748: ProtocolDetail = {
  protocolId: 748,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Jalousie",
  description: "Pour patients souffrant de jalousie chronique en couple ou face à la réussite d'autres. Travail sur la sécurité intérieure, le rapport à la valeur de soi, le désinvestissement de la comparaison toxique.",
  indications: ["Jalousie amoureuse récurrente", "Jalousie envers des proches qui réussissent", "Comparaison sociale toxique", "Patients ayant conscience que leur jalousie les abîme"],
  contraindications: ["Jalousie pathologique avec délires (cadre psychiatrique)", "Violence dans le couple (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Jalousie envahissante — Apaiser le feu de la comparaison",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Jalousie envahissante — Apaiser le feu de la comparaison",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de jalousie chronique en couple ou face à la réussite d'autres. Travail sur la sécurité intérieure, le rapport à la valeur de soi, le désinvestissement de la comparaison toxique." }
      ],
    }],
  }],
  outils: [
    { name: "Sécurité intérieure indépendante", type: "Levier", icon: "🎯", desc: "Travail sur la jalousie chronique" },
    { name: "Différenciation jalousie / amour", type: "Levier", icon: "🎯", desc: "Travail sur la jalousie chronique" },
    { name: "Travail sur la valeur de soi", type: "Levier", icon: "🎯", desc: "Travail sur la jalousie chronique" },
    { name: "Sécurité intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Souveraineté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur jalousie ne fonctionne pas pour moi"],
};

const k_749: ProtocolDetail = {
  protocolId: 749,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Ressentiment",
  description: "Pour patients portant un ressentiment ancien et lourd contre une personne ou un événement. Travail de différenciation entre rancune toxique et reconnaissance d'une injustice subie, voie de la libération sans déni.",
  indications: ["Rancune chronique envers un proche", "Ressentiment ancien qui pèse", "Patients épuisés de porter cette charge", "Sentiment d'injustice non résolu"],
  contraindications: ["Trauma actif (le ressentiment peut être protecteur, ne pas précipiter)"],
  programs: [{
    id: "principal",
    title: "Ressentiment et rancune — Désencombrer la mémoire émotionnelle",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Ressentiment et rancune — Désencombrer la mémoire émotionnelle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients portant un ressentiment ancien et lourd contre une personne ou un événement. Travail de différenciation entre rancune toxique et reconnaissance d'une injustice subie, voie de la libération sans déni." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de l'injustice", type: "Levier", icon: "🎯", desc: "Travail sur le ressentiment chronique" },
    { name: "Différenciation pardon / oubli", type: "Levier", icon: "🎯", desc: "Travail sur le ressentiment chronique" },
    { name: "Récupération de l'énergie investie", type: "Levier", icon: "🎯", desc: "Travail sur le ressentiment chronique" },
    { name: "Reconnaissance", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Libération", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur ressentiment ne fonctionne pas pour moi"],
};

const k_750: ProtocolDetail = {
  protocolId: 750,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Solitude",
  description: "Pour patients souffrant de solitude chronique, qu'elle soit objective ou subjective. Travail de différenciation entre solitude vécue et solitude choisie, restauration du rapport à soi, capacité à être seul et à se relier.",
  indications: ["Solitude chronique pesante", "Difficulté à être seul", "Sentiment d'isolement même entouré", "Patients récemment seuls (séparation, déménagement, retraite)"],
  contraindications: ["Dépression majeure", "Phobie sociale invalidante (combiner avec K-ANX-004)"],
  programs: [{
    id: "principal",
    title: "Solitude relationnelle — Habiter le seul et l'ensemble",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Solitude relationnelle — Habiter le seul et l'ensemble",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients souffrant de solitude chronique, qu'elle soit objective ou subjective. Travail de différenciation entre solitude vécue et solitude choisie, restauration du rapport à soi, capacité à être seul et à se relier." }
      ],
    }],
  }],
  outils: [
    { name: "Différenciation solitude pesante / solitude habitée", type: "Levier", icon: "🎯", desc: "Travail sur la solitude" },
    { name: "Restauration du rapport à soi", type: "Levier", icon: "🎯", desc: "Travail sur la solitude" },
    { name: "Compétence relationnelle", type: "Levier", icon: "🎯", desc: "Travail sur la solitude" },
    { name: "Présence à soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Solitude habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur solitude ne fonctionne pas pour moi"],
};

const k_751: ProtocolDetail = {
  protocolId: 751,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Blessure relationnelle",
  description: "Pour patients porteurs d'une blessure de rejet ancienne (parents, fratrie, groupe scolaire, premier amour) qui continue à colorer les relations adultes. Travail spécifique sur cette blessure typique.",
  indications: ["Hypersensibilité au rejet à l'âge adulte", "Évitement par peur d'être rejeté", "Réactions disproportionnées aux signes ambigus", "Histoire de rejets précoces"],
  contraindications: ["Trauma sévère non stabilisé"],
  programs: [{
    id: "principal",
    title: "Blessure de rejet — Apaiser la cicatrice ancienne",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Blessure de rejet — Apaiser la cicatrice ancienne",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients porteurs d'une blessure de rejet ancienne (parents, fratrie, groupe scolaire, premier amour) qui continue à colorer les relations adultes. Travail spécifique sur cette blessure typique." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de la blessure ancienne", type: "Levier", icon: "🎯", desc: "Travail sur la blessure de rejet ancienne" },
    { name: "Distinction présent / passé", type: "Levier", icon: "🎯", desc: "Travail sur la blessure de rejet ancienne" },
    { name: "Soin de l'enfant intérieur blessé", type: "Levier", icon: "🎯", desc: "Travail sur la blessure de rejet ancienne" },
    { name: "Enfant accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Blessure soignée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur blessure relationnelle ne fonctionne pas pour moi"],
};

const k_752: ProtocolDetail = {
  protocolId: 752,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Conflit",
  description: "Pour patients pris dans des conflits récurrents (couple, famille, travail) où les mêmes scénarios se rejouent. Travail de prise de recul, identification des automatismes, ouverture de nouveaux possibles relationnels.",
  indications: ["Conflits répétitifs en couple", "Conflits familiaux récurrents", "Difficultés relationnelles au travail", "Patients ayant conscience qu'ils contribuent au pattern"],
  contraindications: ["Violence intrafamiliale (cadre spécifique)", "Manipulation perverse (autre approche)"],
  programs: [{
    id: "principal",
    title: "Conflit relationnel récurrent — Sortir des spirales",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Conflit relationnel récurrent — Sortir des spirales",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients pris dans des conflits récurrents (couple, famille, travail) où les mêmes scénarios se rejouent. Travail de prise de recul, identification des automatismes, ouverture de nouveaux possibles relationnels." }
      ],
    }],
  }],
  outils: [
    { name: "Identification des automatismes", type: "Levier", icon: "🎯", desc: "Travail sur les conflits récurrents" },
    { name: "Vue méta du conflit", type: "Levier", icon: "🎯", desc: "Travail sur les conflits récurrents" },
    { name: "Responsabilité partagée", type: "Levier", icon: "🎯", desc: "Travail sur les conflits récurrents" },
    { name: "Spirale brisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vue d'ensemble", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur conflit ne fonctionne pas pour moi"],
};

const k_753: ProtocolDetail = {
  protocolId: 753,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Trauma léger",
  description: "Pour intégration d'un événement récent éprouvant mais non dévastateur : accident sans gravité, agression verbale, témoin d'événement difficile, scène choquante. Travail d'intégration sans replonger.",
  indications: ["Événement éprouvant récent (semaines à mois)", "Symptômes légers post-événement", "Patients qui ressassent l'événement", "Pas d'ESPT constitué"],
  contraindications: ["Trauma sévère avec ESPT (cadre spécialisé EMDR, TCC trauma)", "Violences subies graves"],
  programs: [{
    id: "principal",
    title: "Trauma léger récent — Intégrer un événement éprouvant",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Trauma léger récent — Intégrer un événement éprouvant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour intégration d'un événement récent éprouvant mais non dévastateur : accident sans gravité, agression verbale, témoin d'événement difficile, scène choquante. Travail d'intégration sans replonger." }
      ],
    }],
  }],
  outils: [
    { name: "Distanciation par l'écran de cinéma", type: "Levier", icon: "🎯", desc: "Intégration de trauma léger" },
    { name: "Apaisement émotionnel", type: "Levier", icon: "🎯", desc: "Intégration de trauma léger" },
    { name: "Recadrage sécurisant", type: "Levier", icon: "🎯", desc: "Intégration de trauma léger" },
    { name: "Événement intégré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Distance retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur trauma léger ne fonctionne pas pour moi"],
};

const k_754: ProtocolDetail = {
  protocolId: 754,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Acceptation",
  description: "Pour patients confrontés à une réalité durable qu'ils ne peuvent pas changer (maladie chronique, handicap d'un proche, décision irrévocable, perte définitive). Travail délicat sur l'acceptation sans résignation.",
  indications: ["Réalités durables non modifiables", "Lutte épuisante contre l'inéluctable", "Patients en révolte chronique", "Acceptation comme étape d'apaisement"],
  contraindications: ["Phase initiale de la perte ou du diagnostic (trop tôt)", "Patients à qui on demande d'accepter une situation qu'ils peuvent en fait modifier"],
  programs: [{
    id: "principal",
    title: "Acceptation de l'inacceptable — Vivre avec ce qu'on ne peut changer",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Acceptation de l'inacceptable — Vivre avec ce qu'on ne peut changer",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés à une réalité durable qu'ils ne peuvent pas changer (maladie chronique, handicap d'un proche, décision irrévocable, perte définitive). Travail délicat sur l'acceptation sans résignation." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction acceptation / résignation", type: "Levier", icon: "🎯", desc: "Travail sur l'acceptation" },
    { name: "Reconnaissance de la réalité", type: "Levier", icon: "🎯", desc: "Travail sur l'acceptation" },
    { name: "Récupération de l'énergie de lutte", type: "Levier", icon: "🎯", desc: "Travail sur l'acceptation" },
    { name: "Réalité accueillie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lutte déposée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur acceptation ne fonctionne pas pour moi"],
};

const k_755: ProtocolDetail = {
  protocolId: 755,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Transition",
  description: "Pour patients en transition majeure (déménagement, changement professionnel radical, fin d'une relation longue, devenir parent, retraite, expatriation). Travail d'intégration psychique de la transition.",
  indications: ["Transitions de vie majeures en cours ou récentes", "Difficulté d'adaptation", "Sentiment de perte d'identité dans la transition", "Patients ne se reconnaissant plus"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Transition de vie majeure — Passer d'un monde à l'autre",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Transition de vie majeure — Passer d'un monde à l'autre",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en transition majeure (déménagement, changement professionnel radical, fin d'une relation longue, devenir parent, retraite, expatriation). Travail d'intégration psychique de la transition." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance des deux mondes", type: "Levier", icon: "🎯", desc: "Accompagnement de transition de vie" },
    { name: "Phase de seuil légitimée", type: "Levier", icon: "🎯", desc: "Accompagnement de transition de vie" },
    { name: "Continuité d'identité", type: "Levier", icon: "🎯", desc: "Accompagnement de transition de vie" },
    { name: "Passage habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Identité fil conducteur", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur transition ne fonctionne pas pour moi"],
};

const k_756: ProtocolDetail = {
  protocolId: 756,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Enfance",
  description: "Pour patients adultes portant des manques affectifs anciens (parents froids, distants, absents, défaillants sans malveillance majeure). Travail de soin différé à l'enfant intérieur, pas de remplacement des parents mais réparation possible.",
  indications: ["Manques affectifs anciens", "Parents distants ou peu disponibles", "Enfance carencée affectivement (sans maltraitance majeure)", "Adultes qui ressassent ce qu'ils n'ont pas eu"],
  contraindications: ["Maltraitance grave (cadre psychothérapeutique long)", "Trauma sexuel (cadre spécialisé)"],
  programs: [{
    id: "principal",
    title: "Réconciliation avec l'enfance — Soigner ce qui a manqué",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Réconciliation avec l'enfance — Soigner ce qui a manqué",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients adultes portant des manques affectifs anciens (parents froids, distants, absents, défaillants sans malveillance majeure). Travail de soin différé à l'enfant intérieur, pas de remplacement des parents mais réparation possible." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance des manques", type: "Levier", icon: "🎯", desc: "Réparation différée des manques de l'enfance" },
    { name: "Soin différé à l'enfant intérieur", type: "Levier", icon: "🎯", desc: "Réparation différée des manques de l'enfance" },
    { name: "Auto-parentalisation bienveillante", type: "Levier", icon: "🎯", desc: "Réparation différée des manques de l'enfance" },
    { name: "Enfant accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Parents reconnus dans leurs limites", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur enfance ne fonctionne pas pour moi"],
};

const k_757: ProtocolDetail = {
  protocolId: 757,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Imposture",
  description: "Pour syndrome de l'imposteur : peur d'être démasqué malgré des compétences réelles, attribution des succès à la chance, terreur d'être jugé incompétent. Travail sur l'intégration des succès, la compétence reconnue.",
  indications: ["Syndrome de l'imposteur professionnel", "Patients qualifiés se sentant illégitimes", "Difficulté à intégrer les réussites", "Peur paralysante du jugement"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Sentiment d'imposture — Dépasser le syndrome",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sentiment d'imposture — Dépasser le syndrome",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour syndrome de l'imposteur : peur d'être démasqué malgré des compétences réelles, attribution des succès à la chance, terreur d'être jugé incompétent. Travail sur l'intégration des succès, la compétence reconnue." }
      ],
    }],
  }],
  outils: [
    { name: "Intégration des succès objectifs", type: "Levier", icon: "🎯", desc: "Travail sur le syndrome de l'imposteur" },
    { name: "Différenciation perception / réalité", type: "Levier", icon: "🎯", desc: "Travail sur le syndrome de l'imposteur" },
    { name: "Accueil de la légitimité", type: "Levier", icon: "🎯", desc: "Travail sur le syndrome de l'imposteur" },
    { name: "Légitimité retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Compétence reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur imposture ne fonctionne pas pour moi"],
};

const k_758: ProtocolDetail = {
  protocolId: 758,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Hypersensibilité",
  description: "Pour patients hypersensibles débordés par leurs émotions ou par celles des autres. Travail sur la régulation, la juste distance, sans pathologiser une qualité qui peut aussi être une ressource.",
  indications: ["Hypersensibilité débordante", "Empathie envahissante envers les autres", "Submersion émotionnelle quotidienne", "Patients épuisés par leur sensibilité"],
  contraindications: ["Trouble de la personnalité borderline (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Hypersensibilité émotionnelle — Apprivoiser ce qui traverse",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypersensibilité émotionnelle — Apprivoiser ce qui traverse",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients hypersensibles débordés par leurs émotions ou par celles des autres. Travail sur la régulation, la juste distance, sans pathologiser une qualité qui peut aussi être une ressource." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction soi / autre émotionnellement", type: "Levier", icon: "🎯", desc: "Régulation de l'hypersensibilité" },
    { name: "Bulle protectrice K-BASE-024", type: "Levier", icon: "🎯", desc: "Régulation de l'hypersensibilité" },
    { name: "Régulation sans répression", type: "Levier", icon: "🎯", desc: "Régulation de l'hypersensibilité" },
    { name: "Sensibilité juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Filtre bienveillant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur hypersensibilité ne fonctionne pas pour moi"],
};

const k_759: ProtocolDetail = {
  protocolId: 759,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Contrôle",
  description: "Pour patients en hypercontrôle qui s'épuisent à vouloir tout maîtriser. Travail sur la confiance, le lâcher-prise progressif, la distinction entre vigilance utile et contrôle compulsif.",
  indications: ["Hypercontrôle chronique", "Anxiété de l'imprévisible", "Patients qui s'épuisent à vouloir tout maîtriser", "Difficulté à déléguer"],
  contraindications: ["TOC (cadre spécifique)", "Trauma justifiant l'hypervigilance (à traiter d'abord)"],
  programs: [{
    id: "principal",
    title: "Lâcher-prise sur le contrôle — Vivre sans tout maîtriser",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Lâcher-prise sur le contrôle — Vivre sans tout maîtriser",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en hypercontrôle qui s'épuisent à vouloir tout maîtriser. Travail sur la confiance, le lâcher-prise progressif, la distinction entre vigilance utile et contrôle compulsif." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction vigilance / contrôle compulsif", type: "Levier", icon: "🎯", desc: "Travail sur le lâcher-prise" },
    { name: "Confiance dans la vie", type: "Levier", icon: "🎯", desc: "Travail sur le lâcher-prise" },
    { name: "Pratique du non-contrôle", type: "Levier", icon: "🎯", desc: "Travail sur le lâcher-prise" },
    { name: "Confiance retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Énergie libérée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur contrôle ne fonctionne pas pour moi"],
};

const k_760: ProtocolDetail = {
  protocolId: 760,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Rapport au corps",
  description: "Pour patients en mauvaise relation avec leur corps : critique chronique, déconnexion, dégoût, sentiment d'étrangeté. Travail de réhabitation bienveillante de son propre corps.",
  indications: ["Critique chronique du corps", "Déconnexion corps-esprit", "Suite de maladie ayant abîmé le rapport au corps", "Adolescence ou suite d'événement modifiant l'image"],
  contraindications: ["Troubles du comportement alimentaire pathologiques (cadre spécialisé)", "Dysphorie de genre (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Réconciliation avec son corps — Habiter sa maison",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Réconciliation avec son corps — Habiter sa maison",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en mauvaise relation avec leur corps : critique chronique, déconnexion, dégoût, sentiment d'étrangeté. Travail de réhabitation bienveillante de son propre corps." }
      ],
    }],
  }],
  outils: [
    { name: "Présence sensorielle", type: "Levier", icon: "🎯", desc: "Réconciliation au corps" },
    { name: "Reconnaissance du corps comme allié", type: "Levier", icon: "🎯", desc: "Réconciliation au corps" },
    { name: "Bienveillance corporelle progressive", type: "Levier", icon: "🎯", desc: "Réconciliation au corps" },
    { name: "Maison habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps allié", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur rapport au corps ne fonctionne pas pour moi"],
};

const k_761: ProtocolDetail = {
  protocolId: 761,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Travail",
  description: "Pour patients dont le travail occupe toute la place identitaire et émotionnelle. Travail de différenciation soi/fonction, restauration d'autres dimensions de la vie, prévention du burn-out.",
  indications: ["Surinvestissement professionnel", "Identité fusionnée à la fonction", "Sentiment de vide hors travail", "Pré-burn-out"],
  contraindications: ["Burn-out constitué (cadre médical et arrêt nécessaires)"],
  programs: [{
    id: "principal",
    title: "Surinvestissement professionnel — Reposer ce qui n'a pas à être tout",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Surinvestissement professionnel — Reposer ce qui n'a pas à être tout",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients dont le travail occupe toute la place identitaire et émotionnelle. Travail de différenciation soi/fonction, restauration d'autres dimensions de la vie, prévention du burn-out." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction soi / rôle professionnel", type: "Levier", icon: "🎯", desc: "Différenciation soi / fonction" },
    { name: "Restauration d'autres dimensions", type: "Levier", icon: "🎯", desc: "Différenciation soi / fonction" },
    { name: "Permission d'exister hors travail", type: "Levier", icon: "🎯", desc: "Différenciation soi / fonction" },
    { name: "Soi qui demeure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vie multiple", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur travail ne fonctionne pas pour moi"],
};

const k_762: ProtocolDetail = {
  protocolId: 762,
  efficacite: "KIIKA",
  efficaciteSub: "Émotion / Sens",
  description: "Pour patients vivant un sentiment de vide, d'absurdité, de perte de cap. Pas une dépression mais une crise de sens. Travail d'écoute intérieure, retour aux valeurs, ouverture à ce qui appelle.",
  indications: ["Sentiment de vide existentiel", "Crise de sens à mi-vie ou autre étape", "Patients ayant tout pour être heureux et qui ne le sont pas", "Recherche d'orientation"],
  contraindications: ["Dépression majeure (à traiter d'abord)"],
  programs: [{
    id: "principal",
    title: "Sentiment de manque de sens — Quand la boussole intérieure est brouillée",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sentiment de manque de sens — Quand la boussole intérieure est brouillée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients vivant un sentiment de vide, d'absurdité, de perte de cap. Pas une dépression mais une crise de sens. Travail d'écoute intérieure, retour aux valeurs, ouverture à ce qui appelle." }
      ],
    }],
  }],
  outils: [
    { name: "Écoute intérieure profonde", type: "Levier", icon: "🎯", desc: "Travail sur le sens" },
    { name: "Retour aux valeurs essentielles", type: "Levier", icon: "🎯", desc: "Travail sur le sens" },
    { name: "Ka comme boussole", type: "Levier", icon: "🎯", desc: "Travail sur le sens" },
    { name: "Sens retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Boussole intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sens ne fonctionne pas pour moi"],
};

const k_763: ProtocolDetail = {
  protocolId: 763,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Préparation",
  description: "Rituel hypnotique court à utiliser dans les heures précédant une compétition. Met l'athlète dans un état mental optimal : calme intense, focus, confiance, prêt à donner le meilleur sans crispation.",
  indications: ["Compétition imminente (heures à minutes avant)", "Athlètes voulant un dispositif de mise en condition", "Suite de mauvaises performances liées à l'état mental", "Prévention du surplus d'énergie nerveuse"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation mentale avant compétition — Le rituel d'entrée",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation mentale avant compétition — Le rituel d'entrée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Rituel hypnotique court à utiliser dans les heures précédant une compétition. Met l'athlète dans un état mental optimal : calme intense, focus, confiance, prêt à donner le meilleur sans crispation." }
      ],
    }],
  }],
  outils: [
    { name: "Calme intense (pas mou)", type: "Levier", icon: "🎯", desc: "Préparation mentale courte avant compétition" },
    { name: "Focus sur ce qui importe", type: "Levier", icon: "🎯", desc: "Préparation mentale courte avant compétition" },
    { name: "Confiance corporelle activée", type: "Levier", icon: "🎯", desc: "Préparation mentale courte avant compétition" },
    { name: "Calme tendu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent total", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur préparation ne fonctionne pas pour moi"],
};

const k_764: ProtocolDetail = {
  protocolId: 764,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Concentration",
  description: "Pour athlètes qui décrochent mentalement en compétition (pensées parasites, anticipation du résultat, rumination sur erreur passée). Travail sur la qualité d'attention pendant l'épreuve.",
  indications: ["Décrochage mental en compétition", "Pensées parasites pendant l'effort", "Rumination après erreur en cours d'épreuve", "Anticipation du résultat qui parasite l'action"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Focus en compétition — Garder l'attention juste",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Focus en compétition — Garder l'attention juste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes qui décrochent mentalement en compétition (pensées parasites, anticipation du résultat, rumination sur erreur passée). Travail sur la qualité d'attention pendant l'épreuve." }
      ],
    }],
  }],
  outils: [
    { name: "Attention dans l'instant", type: "Levier", icon: "🎯", desc: "Travail sur le focus attentionnel en compétition" },
    { name: "Réinitialisation après erreur", type: "Levier", icon: "🎯", desc: "Travail sur le focus attentionnel en compétition" },
    { name: "Désinvestissement du résultat pendant l'action", type: "Levier", icon: "🎯", desc: "Travail sur le focus attentionnel en compétition" },
    { name: "Présent dans l'action", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Attention juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur concentration ne fonctionne pas pour moi"],
};

const k_765: ProtocolDetail = {
  protocolId: 765,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Confiance",
  description: "Pour athlètes qui doutent de leur corps en compétition, qui se crispent par excès de contrôle conscient, ou qui ont perdu confiance après une blessure. Travail de réactivation de la confiance corporelle profonde.",
  indications: ["Perte de confiance après blessure ou contre-performance", "Crispation par excès de contrôle conscient", "Athlètes qui doutent malgré un bon niveau", "Prévention en période d'enjeu fort"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Confiance corporelle — Faire confiance à l'entraînement",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Confiance corporelle — Faire confiance à l'entraînement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes qui doutent de leur corps en compétition, qui se crispent par excès de contrôle conscient, ou qui ont perdu confiance après une blessure. Travail de réactivation de la confiance corporelle profonde." }
      ],
    }],
  }],
  outils: [
    { name: "Mémoire corporelle activée", type: "Levier", icon: "🎯", desc: "Restauration de la confiance corporelle" },
    { name: "Désinvestissement du contrôle conscient", type: "Levier", icon: "🎯", desc: "Restauration de la confiance corporelle" },
    { name: "Confiance profonde retrouvée", type: "Levier", icon: "🎯", desc: "Restauration de la confiance corporelle" },
    { name: "Corps qui sait", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mémoire vivante", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur confiance ne fonctionne pas pour moi"],
};

const k_766: ProtocolDetail = {
  protocolId: 766,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Imagerie",
  description: "Apprentissage de l'imagerie motrice de qualité pour répéter en imagination des gestes techniques. Méthode validée scientifiquement, particulièrement utile en complément de l'entraînement physique.",
  indications: ["Apprentissage d'un geste technique nouveau", "Perfectionnement d'un geste existant", "Pratique en période de blessure (sans pouvoir bouger)", "Préparation d'un mouvement spécifique avant compétition"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Visualisation de geste technique — Imagerie motrice efficace",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Visualisation de geste technique — Imagerie motrice efficace",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Apprentissage de l'imagerie motrice de qualité pour répéter en imagination des gestes techniques. Méthode validée scientifiquement, particulièrement utile en complément de l'entraînement physique." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie multisensorielle", type: "Levier", icon: "🎯", desc: "Apprentissage de l'imagerie motrice" },
    { name: "Vue interne (de l'intérieur du corps)", type: "Levier", icon: "🎯", desc: "Apprentissage de l'imagerie motrice" },
    { name: "Précision du geste imaginé", type: "Levier", icon: "🎯", desc: "Apprentissage de l'imagerie motrice" },
    { name: "Geste imaginé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Précision intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur imagerie ne fonctionne pas pour moi"],
};

const k_767: ProtocolDetail = {
  protocolId: 767,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Régulation",
  description: "Pour athlètes qui s'effondrent mentalement après une erreur (point perdu, faute technique, mauvais départ). Travail spécifique sur la capacité à rebondir instantanément, à ne pas amplifier l'erreur.",
  indications: ["Effondrement mental après une erreur", "Spirales négatives en compétition", "Athlètes qui multiplient les erreurs après la première", "Difficulté à oublier rapidement"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Gestion de l'erreur en compétition — Rebond rapide",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Gestion de l'erreur en compétition — Rebond rapide",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes qui s'effondrent mentalement après une erreur (point perdu, faute technique, mauvais départ). Travail spécifique sur la capacité à rebondir instantanément, à ne pas amplifier l'erreur." }
      ],
    }],
  }],
  outils: [
    { name: "Reset rapide", type: "Levier", icon: "🎯", desc: "Capacité de rebond après erreur" },
    { name: "Désinvestissement du passé immédiat", type: "Levier", icon: "🎯", desc: "Capacité de rebond après erreur" },
    { name: "Geste-ancre de remise à zéro", type: "Levier", icon: "🎯", desc: "Capacité de rebond après erreur" },
    { name: "Reset", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Page tournée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur régulation ne fonctionne pas pour moi"],
};

const k_768: ProtocolDetail = {
  protocolId: 768,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Pression",
  description: "Pour athlètes qui sous-performent dans les compétitions à fort enjeu. Travail sur le rapport au résultat, la transformation de la pression en énergie, l'investissement du processus plutôt que de la finalité.",
  indications: ["Sous-performance en compétition à enjeu élevé", "Crispation à l'approche d'un objectif majeur", "Athlètes meilleurs à l'entraînement qu'en compétition", "Pression médiatique ou familiale"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Gestion de la pression du résultat — Performer sans se crisper",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Gestion de la pression du résultat — Performer sans se crisper",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes qui sous-performent dans les compétitions à fort enjeu. Travail sur le rapport au résultat, la transformation de la pression en énergie, l'investissement du processus plutôt que de la finalité." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement du résultat pendant l'action", type: "Levier", icon: "🎯", desc: "Recadrage de la pression du résultat" },
    { name: "Investissement total du processus", type: "Levier", icon: "🎯", desc: "Recadrage de la pression du résultat" },
    { name: "Transformation pression en énergie", type: "Levier", icon: "🎯", desc: "Recadrage de la pression du résultat" },
    { name: "Processus habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pression transformée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pression ne fonctionne pas pour moi"],
};

const k_769: ProtocolDetail = {
  protocolId: 769,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Flow",
  description: "Pour faciliter l'entrée dans l'état de flow (expérience optimale décrite par Csikszentmihalyi). Travail sur les conditions mentales d'apparition du flow, ancrage des états vécus, conditions facilitantes.",
  indications: ["Athlètes ayant déjà vécu le flow et voulant le retrouver", "Préparation pour épreuves longues nécessitant état optimal", "Amélioration globale de la qualité de présence en performance"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Activation de l'état de flow — L'expérience optimale",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Activation de l'état de flow — L'expérience optimale",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour faciliter l'entrée dans l'état de flow (expérience optimale décrite par Csikszentmihalyi). Travail sur les conditions mentales d'apparition du flow, ancrage des états vécus, conditions facilitantes." }
      ],
    }],
  }],
  outils: [
    { name: "Remémoration d'un flow vécu", type: "Levier", icon: "🎯", desc: "Activation de l'état de flow" },
    { name: "Ancrage de cet état", type: "Levier", icon: "🎯", desc: "Activation de l'état de flow" },
    { name: "Identification des conditions facilitantes", type: "Levier", icon: "🎯", desc: "Activation de l'état de flow" },
    { name: "Flow vivant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Action sans effort", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur flow ne fonctionne pas pour moi"],
};

const k_770: ProtocolDetail = {
  protocolId: 770,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Blessure",
  description: "Pour athlètes en phase de retour après blessure significative. Travail sur la confiance corporelle restaurée, la peur de la rechute, la reprise progressive psychique en parallèle de la reprise physique.",
  indications: ["Retour de blessure significative", "Peur de la rechute paralysante", "Sous-performance après guérison physique complète", "Athlètes traumatisés par leur blessure"],
  contraindications: ["Reprise médicale non validée"],
  programs: [{
    id: "principal",
    title: "Retour de blessure — Reprise psychique de la confiance",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Retour de blessure — Reprise psychique de la confiance",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes en phase de retour après blessure significative. Travail sur la confiance corporelle restaurée, la peur de la rechute, la reprise progressive psychique en parallèle de la reprise physique." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage de la peur de rechute", type: "Levier", icon: "🎯", desc: "Reprise psychique post-blessure" },
    { name: "Restauration de la confiance corporelle", type: "Levier", icon: "🎯", desc: "Reprise psychique post-blessure" },
    { name: "Désensibilisation aux mouvements anxiogènes", type: "Levier", icon: "🎯", desc: "Reprise psychique post-blessure" },
    { name: "Corps qui a repris", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance restaurée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur blessure ne fonctionne pas pour moi"],
};

const k_771: ProtocolDetail = {
  protocolId: 771,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Endurance",
  description: "Pour sports d'endurance ou efforts longs (marathon, trail, cyclisme longue distance, triathlon). Travail sur la gestion de l'inconfort durable, la division mentale de l'effort, la résistance au décrochage.",
  indications: ["Sports d'endurance avec long effort", "Athlètes qui décrochent dans les fins d'épreuve", "Préparation à un défi inhabituel en distance", "Course de très longue durée (ultra)"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Endurance mentale — Tenir sur la durée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Endurance mentale — Tenir sur la durée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour sports d'endurance ou efforts longs (marathon, trail, cyclisme longue distance, triathlon). Travail sur la gestion de l'inconfort durable, la division mentale de l'effort, la résistance au décrochage." }
      ],
    }],
  }],
  outils: [
    { name: "Découpage mental de l'effort", type: "Levier", icon: "🎯", desc: "Endurance mentale sur effort long" },
    { name: "Acceptation de l'inconfort durable", type: "Levier", icon: "🎯", desc: "Endurance mentale sur effort long" },
    { name: "Gestion des moments difficiles", type: "Levier", icon: "🎯", desc: "Endurance mentale sur effort long" },
    { name: "Tenue dans la durée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Inconfort accepté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur endurance ne fonctionne pas pour moi"],
};

const k_772: ProtocolDetail = {
  protocolId: 772,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Collectif",
  description: "Pour athlètes en sports collectifs (foot, basket, hand, rugby, volley). Travail sur la posture mentale dans le collectif, la gestion des relations avec coéquipiers, la performance individuelle au service de l'équipe.",
  indications: ["Sports collectifs", "Athlètes en difficulté avec leur rôle", "Tensions en équipe affectant la performance", "Repositionnement mental en cours de saison"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Sports collectifs — Synergie d'équipe et rôle individuel",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sports collectifs — Synergie d'équipe et rôle individuel",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes en sports collectifs (foot, basket, hand, rugby, volley). Travail sur la posture mentale dans le collectif, la gestion des relations avec coéquipiers, la performance individuelle au service de l'équipe." }
      ],
    }],
  }],
  outils: [
    { name: "Clarté du rôle individuel", type: "Levier", icon: "🎯", desc: "Mental du sportif d'équipe" },
    { name: "Confiance dans le collectif", type: "Levier", icon: "🎯", desc: "Mental du sportif d'équipe" },
    { name: "Gestion des frictions", type: "Levier", icon: "🎯", desc: "Mental du sportif d'équipe" },
    { name: "Rôle habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Équipe portée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur collectif ne fonctionne pas pour moi"],
};

const k_773: ProtocolDetail = {
  protocolId: 773,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Saison",
  description: "Pour athlètes préparant un objectif majeur sur plusieurs mois (championnat, Jeux Olympiques, qualification). Travail de structuration mentale sur la durée, gestion des phases, prévention de l'épuisement.",
  indications: ["Préparation d'un objectif majeur sur plusieurs mois", "Athlètes en perte de motivation à mi-parcours", "Saison longue avec compétitions multiples", "Qualifications olympiques ou mondiales"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation longue durée — Saison ou objectif majeur",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation longue durée — Saison ou objectif majeur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes préparant un objectif majeur sur plusieurs mois (championnat, Jeux Olympiques, qualification). Travail de structuration mentale sur la durée, gestion des phases, prévention de l'épuisement." }
      ],
    }],
  }],
  outils: [
    { name: "Vision claire du jour J", type: "Levier", icon: "🎯", desc: "Préparation mentale longue durée" },
    { name: "Découpage en phases", type: "Levier", icon: "🎯", desc: "Préparation mentale longue durée" },
    { name: "Gestion de la motivation sur la durée", type: "Levier", icon: "🎯", desc: "Préparation mentale longue durée" },
    { name: "Vision portée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Phases respectées", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur saison ne fonctionne pas pour moi"],
};

const k_774: ProtocolDetail = {
  protocolId: 774,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Crise",
  description: "Pour athlètes pris dans une spirale négative : enchaînement de contre-performances, doutes massifs, perte d'estime, blocage qui s'installe. Travail de remise à zéro et reconstruction progressive.",
  indications: ["Spirale de contre-performances", "Doute massif sur soi", "Athlètes en perte de cap", "Blocage qui s'installe sur plusieurs semaines"],
  contraindications: ["Dépression majeure (cadre médical en parallèle)"],
  programs: [{
    id: "principal",
    title: "Sortie de spirale négative — Quand rien ne va plus",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sortie de spirale négative — Quand rien ne va plus",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes pris dans une spirale négative : enchaînement de contre-performances, doutes massifs, perte d'estime, blocage qui s'installe. Travail de remise à zéro et reconstruction progressive." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de la spirale", type: "Levier", icon: "🎯", desc: "Sortie de spirale négative" },
    { name: "Reconnexion aux fondations", type: "Levier", icon: "🎯", desc: "Sortie de spirale négative" },
    { name: "Reset complet", type: "Levier", icon: "🎯", desc: "Sortie de spirale négative" },
    { name: "Page tournée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Fondations retrouvées", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur crise ne fonctionne pas pour moi"],
};

const k_775: ProtocolDetail = {
  protocolId: 775,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Perfectionnisme",
  description: "Pour athlètes dont le perfectionnisme excessif paralyse la performance. Travail sur le rapport à l'erreur, l'autorisation de l'imperfection, la libération du geste de la contrainte du parfait.",
  indications: ["Perfectionnisme entravant la performance", "Paralysie devant la possibilité d'erreur", "Athlètes qui ne s'autorisent pas le risque créatif", "Sur-analyse de chaque geste"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Perfectionnisme paralysant — Libérer le geste",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Perfectionnisme paralysant — Libérer le geste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes dont le perfectionnisme excessif paralyse la performance. Travail sur le rapport à l'erreur, l'autorisation de l'imperfection, la libération du geste de la contrainte du parfait." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction excellence / perfection", type: "Levier", icon: "🎯", desc: "Travail sur le perfectionnisme dans le sport" },
    { name: "Autorisation de l'imperfection", type: "Levier", icon: "🎯", desc: "Travail sur le perfectionnisme dans le sport" },
    { name: "Libération du geste", type: "Levier", icon: "🎯", desc: "Travail sur le perfectionnisme dans le sport" },
    { name: "Geste libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Excellence sans perfection", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur perfectionnisme ne fonctionne pas pour moi"],
};

const k_776: ProtocolDetail = {
  protocolId: 776,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Moments décisifs",
  description: "Pour préparation à des moments isolés à très fort enjeu (tir au but, penalty, dernier coup, putt décisif, dernier service). Dispositif court à activer juste avant.",
  indications: ["Tirs au but, penalties", "Coups décisifs en fin de match", "Moments à un seul essai", "Athlètes ayant raté des moments décisifs"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation aux tirs au but, penalties, moments décisifs",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation aux tirs au but, penalties, moments décisifs",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour préparation à des moments isolés à très fort enjeu (tir au but, penalty, dernier coup, putt décisif, dernier service). Dispositif court à activer juste avant." }
      ],
    }],
  }],
  outils: [
    { name: "Routine pré-action", type: "Levier", icon: "🎯", desc: "Dispositif pour moments décisifs ponctuels" },
    { name: "État optimal en quelques secondes", type: "Levier", icon: "🎯", desc: "Dispositif pour moments décisifs ponctuels" },
    { name: "Confiance dans le geste répété mille fois", type: "Levier", icon: "🎯", desc: "Dispositif pour moments décisifs ponctuels" },
    { name: "Routine ancrée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Geste connu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur moments décisifs ne fonctionne pas pour moi"],
};

const k_777: ProtocolDetail = {
  protocolId: 777,
  efficacite: "KIIKA",
  efficaciteSub: "Performance sportive / Transition",
  description: "Pour athlètes en fin de carrière (choisie ou subie : retraite, blessure de carrière, non-renouvellement). Travail spécifique sur cette transition majeure, identité au-delà du sport, deuil et reconstruction.",
  indications: ["Athlètes en dernière saison", "Fin de carrière par blessure", "Non-renouvellement contractuel", "Anciens sportifs en difficulté d'après-carrière"],
  contraindications: ["Dépression majeure (cadre médical en parallèle)"],
  programs: [{
    id: "principal",
    title: "Fin de carrière sportive — Transition vers l'après",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Fin de carrière sportive — Transition vers l'après",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour athlètes en fin de carrière (choisie ou subie : retraite, blessure de carrière, non-renouvellement). Travail spécifique sur cette transition majeure, identité au-delà du sport, deuil et reconstruction." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance du deuil sportif", type: "Levier", icon: "🎯", desc: "Accompagnement de fin de carrière" },
    { name: "Identité au-delà de la performance", type: "Levier", icon: "🎯", desc: "Accompagnement de fin de carrière" },
    { name: "Construction du nouveau monde", type: "Levier", icon: "🎯", desc: "Accompagnement de fin de carrière" },
    { name: "Page tournée avec dignité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Identité élargie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur transition ne fonctionne pas pour moi"],
};

const k_778: ProtocolDetail = {
  protocolId: 778,
  efficacite: "KIIKA",
  efficaciteSub: "Performance académique / Examen",
  description: "Pour étudiants ou patients préparant un examen important. Travail sur la confiance dans le travail accompli, l'apaisement de l'anxiété, la mobilisation des ressources le jour J.",
  indications: ["Examens importants à venir (semaines à jours)", "Étudiants travailleurs mais anxieux", "Concours, oraux, écrits", "Reprise d'études chez l'adulte"],
  contraindications: ["Manque de travail réel (l'hypnose ne remplace pas la préparation)", "Trouble anxieux sévère"],
  programs: [{
    id: "principal",
    title: "Préparation à un examen — Mobiliser ses ressources",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à un examen — Mobiliser ses ressources",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour étudiants ou patients préparant un examen important. Travail sur la confiance dans le travail accompli, l'apaisement de l'anxiété, la mobilisation des ressources le jour J." }
      ],
    }],
  }],
  outils: [
    { name: "Confiance dans le travail accompli", type: "Levier", icon: "🎯", desc: "Préparation à un examen" },
    { name: "Apaisement anxiété anticipatoire", type: "Levier", icon: "🎯", desc: "Préparation à un examen" },
    { name: "Mobilisation des ressources", type: "Levier", icon: "🎯", desc: "Préparation à un examen" },
    { name: "Connaissance disponible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance dans le travail", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur examen ne fonctionne pas pour moi"],
};

const k_779: ProtocolDetail = {
  protocolId: 779,
  efficacite: "KIIKA",
  efficaciteSub: "Performance académique / Apprentissage",
  description: "Pour étudiants ou patients ayant des difficultés de concentration durant l'apprentissage. Travail sur la qualité d'attention, l'absence de distraction interne, l'apprentissage en présence pleine.",
  indications: ["Difficultés de concentration", "Travail haché et peu efficace", "Distractions internes (rumination, anxiété)", "Améliorer la qualité du temps d'étude"],
  contraindications: ["TDAH non pris en charge (combiner avec suivi médical)"],
  programs: [{
    id: "principal",
    title: "Concentration et apprentissage — Optimiser le travail",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Concentration et apprentissage — Optimiser le travail",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour étudiants ou patients ayant des difficultés de concentration durant l'apprentissage. Travail sur la qualité d'attention, l'absence de distraction interne, l'apprentissage en présence pleine." }
      ],
    }],
  }],
  outils: [
    { name: "Présence pleine à la tâche", type: "Levier", icon: "🎯", desc: "Optimisation de la concentration en apprentissage" },
    { name: "Désamorçage des distractions internes", type: "Levier", icon: "🎯", desc: "Optimisation de la concentration en apprentissage" },
    { name: "Bulle d'étude", type: "Levier", icon: "🎯", desc: "Optimisation de la concentration en apprentissage" },
    { name: "Présent dans la tâche", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Absorption", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur apprentissage ne fonctionne pas pour moi"],
};

const k_780: ProtocolDetail = {
  protocolId: 780,
  efficacite: "KIIKA",
  efficaciteSub: "Performance académique / Mémoire",
  description: "Pour patients ayant des difficultés à mémoriser ou à restituer ce qu'ils ont appris. Travail sur l'encodage, le ressouvenir, la lutte contre les blocages mnésiques liés au stress.",
  indications: ["Difficultés de mémorisation", "Trous de mémoire en examen", "Patients ayant l'impression d'oublier vite", "Lutte contre le blanc en oral ou présentation"],
  contraindications: ["Troubles cognitifs avérés (cadre médical)"],
  programs: [{
    id: "principal",
    title: "Mémoire et restitution — Optimiser l'accès aux connaissances",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Mémoire et restitution — Optimiser l'accès aux connaissances",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ayant des difficultés à mémoriser ou à restituer ce qu'ils ont appris. Travail sur l'encodage, le ressouvenir, la lutte contre les blocages mnésiques liés au stress." }
      ],
    }],
  }],
  outils: [
    { name: "Encodage en présence", type: "Levier", icon: "🎯", desc: "Optimisation mémoire et restitution" },
    { name: "Imagerie associative", type: "Levier", icon: "🎯", desc: "Optimisation mémoire et restitution" },
    { name: "Désamorçage des blocages stress", type: "Levier", icon: "🎯", desc: "Optimisation mémoire et restitution" },
    { name: "Mémoire fidèle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Accès libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur mémoire ne fonctionne pas pour moi"],
};

const k_781: ProtocolDetail = {
  protocolId: 781,
  efficacite: "KIIKA",
  efficaciteSub: "Performance professionnelle / Prise de parole",
  description: "Pour patients devant faire une présentation, conférence, soutenance, intervention publique. Travail sur la qualité de présence sur scène, la gestion de l'anxiété, la connexion avec l'auditoire.",
  indications: ["Présentations professionnelles importantes", "Conférences à donner", "Soutenances de thèse, mémoires", "Patients craignant la prise de parole"],
  contraindications: ["Phobie sociale invalidante (combiner avec K-ANX-004)"],
  programs: [{
    id: "principal",
    title: "Présentation publique et prise de parole — Habiter la scène",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Présentation publique et prise de parole — Habiter la scène",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients devant faire une présentation, conférence, soutenance, intervention publique. Travail sur la qualité de présence sur scène, la gestion de l'anxiété, la connexion avec l'auditoire." }
      ],
    }],
  }],
  outils: [
    { name: "Présence sur scène", type: "Levier", icon: "🎯", desc: "Préparation à la prise de parole en public" },
    { name: "Gestion du stress sur scène", type: "Levier", icon: "🎯", desc: "Préparation à la prise de parole en public" },
    { name: "Connexion avec auditoire", type: "Levier", icon: "🎯", desc: "Préparation à la prise de parole en public" },
    { name: "Scène habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence partagée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur prise de parole ne fonctionne pas pour moi"],
};

const k_782: ProtocolDetail = {
  protocolId: 782,
  efficacite: "KIIKA",
  efficaciteSub: "Performance professionnelle / Entretien",
  description: "Pour préparation à un entretien d'embauche, évaluation professionnelle, ou rencontre déterminante. Travail sur la posture, la confiance, la qualité de présence, la valorisation juste de soi.",
  indications: ["Entretiens d'embauche importants", "Évaluations professionnelles", "Entretiens de promotion", "Rencontres déterminantes"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Entretien d'embauche ou évaluation — Présenter le meilleur de soi",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Entretien d'embauche ou évaluation — Présenter le meilleur de soi",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour préparation à un entretien d'embauche, évaluation professionnelle, ou rencontre déterminante. Travail sur la posture, la confiance, la qualité de présence, la valorisation juste de soi." }
      ],
    }],
  }],
  outils: [
    { name: "Confiance en sa valeur", type: "Levier", icon: "🎯", desc: "Préparation à l'entretien" },
    { name: "Présence dans l'instant", type: "Levier", icon: "🎯", desc: "Préparation à l'entretien" },
    { name: "Écoute active", type: "Levier", icon: "🎯", desc: "Préparation à l'entretien" },
    { name: "Soi présenté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Valeur portée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur entretien ne fonctionne pas pour moi"],
};

const k_783: ProtocolDetail = {
  protocolId: 783,
  efficacite: "KIIKA",
  efficaciteSub: "Performance académique / Conduite",
  description: "Pour patients préparant le permis de conduire (code et conduite), avec anxiété spécifique. Travail sur la maîtrise de l'examen, la confiance au volant, la décrispation pour la conduite quotidienne.",
  indications: ["Préparation permis de conduire", "Échec à plusieurs reprises", "Anxiété de la conduite chez débutants", "Reprise de conduite après un long arrêt"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Permis de conduire — Apprivoiser l'examen et la conduite",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Permis de conduire — Apprivoiser l'examen et la conduite",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients préparant le permis de conduire (code et conduite), avec anxiété spécifique. Travail sur la maîtrise de l'examen, la confiance au volant, la décrispation pour la conduite quotidienne." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement de l'anxiété d'examen", type: "Levier", icon: "🎯", desc: "Préparation à l'examen et à la conduite" },
    { name: "Confiance dans les acquis", type: "Levier", icon: "🎯", desc: "Préparation à l'examen et à la conduite" },
    { name: "Décrispation au volant", type: "Levier", icon: "🎯", desc: "Préparation à l'examen et à la conduite" },
    { name: "Conduite habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Confiance progressive", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur conduite ne fonctionne pas pour moi"],
};

const k_784: ProtocolDetail = {
  protocolId: 784,
  efficacite: "KIIKA",
  efficaciteSub: "Performance créative / Blocage",
  description: "Pour patients créatifs (artistes, écrivains, musiciens, designers, entrepreneurs) en blocage créatif. Travail sur les conditions de la créativité, le désinvestissement de l'auto-jugement, l'accès au flux.",
  indications: ["Blocage créatif chez professionnels créatifs", "Page blanche prolongée", "Perte d'accès à la créativité", "Patients créatifs qui s'auto-censurent"],
  contraindications: ["Dépression majeure (à traiter en parallèle)"],
  programs: [{
    id: "principal",
    title: "Créativité bloquée — Libérer le flux créatif",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Créativité bloquée — Libérer le flux créatif",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients créatifs (artistes, écrivains, musiciens, designers, entrepreneurs) en blocage créatif. Travail sur les conditions de la créativité, le désinvestissement de l'auto-jugement, l'accès au flux." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement de l'auto-jugement", type: "Levier", icon: "🎯", desc: "Déblocage créatif" },
    { name: "Espace intérieur sans censure", type: "Levier", icon: "🎯", desc: "Déblocage créatif" },
    { name: "Accès à l'inconscient créatif", type: "Levier", icon: "🎯", desc: "Déblocage créatif" },
    { name: "Flux libéré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sans censure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur blocage ne fonctionne pas pour moi"],
};

const k_785: ProtocolDetail = {
  protocolId: 785,
  efficacite: "KIIKA",
  efficaciteSub: "Performance / Motivation",
  description: "Pour patients en perte de motivation pour des objectifs qu'ils valorisent pourtant. Travail sur la connexion au pourquoi profond, la division des objectifs, l'élan régénéré.",
  indications: ["Perte de motivation pour un objectif personnel", "Procrastination chronique", "Difficulté à maintenir l'effort", "Démarrage difficile sur des projets longs"],
  contraindications: ["Dépression majeure (à traiter d'abord)"],
  programs: [{
    id: "principal",
    title: "Motivation durable — Restaurer l'élan vers ses objectifs",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Motivation durable — Restaurer l'élan vers ses objectifs",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en perte de motivation pour des objectifs qu'ils valorisent pourtant. Travail sur la connexion au pourquoi profond, la division des objectifs, l'élan régénéré." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion au pourquoi profond", type: "Levier", icon: "🎯", desc: "Restauration de la motivation" },
    { name: "Division des objectifs", type: "Levier", icon: "🎯", desc: "Restauration de la motivation" },
    { name: "Action minimale viable", type: "Levier", icon: "🎯", desc: "Restauration de la motivation" },
    { name: "Élan retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pourquoi vivant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur motivation ne fonctionne pas pour moi"],
};

const k_786: ProtocolDetail = {
  protocolId: 786,
  efficacite: "KIIKA",
  efficaciteSub: "Performance / Procrastination",
  description: "Pour patients qui reportent systématiquement des tâches importantes. Travail sur les mécanismes du report, l'identification des évitements émotionnels, le passage à l'action.",
  indications: ["Procrastination chronique", "Report de tâches importantes", "Patients qui font tout sauf ce qui compte", "Anxiété qui paralyse l'action"],
  contraindications: ["TDAH non traité", "Dépression majeure"],
  programs: [{
    id: "principal",
    title: "Procrastination — Sortir du report chronique",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Procrastination — Sortir du report chronique",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients qui reportent systématiquement des tâches importantes. Travail sur les mécanismes du report, l'identification des évitements émotionnels, le passage à l'action." }
      ],
    }],
  }],
  outils: [
    { name: "Identification de l'émotion fuie", type: "Levier", icon: "🎯", desc: "Travail sur la procrastination" },
    { name: "Action de 5 minutes", type: "Levier", icon: "🎯", desc: "Travail sur la procrastination" },
    { name: "Auto-bienveillance", type: "Levier", icon: "🎯", desc: "Travail sur la procrastination" },
    { name: "Action commencée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Émotion accueillie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur procrastination ne fonctionne pas pour moi"],
};

const k_787: ProtocolDetail = {
  protocolId: 787,
  efficacite: "KIIKA",
  efficaciteSub: "Performance / Décision",
  description: "Pour patients confrontés à une décision importante qu'ils n'arrivent pas à prendre. Travail sur l'écoute intérieure, la clarification des valeurs en jeu, le dépassement de la paralysie analytique.",
  indications: ["Décisions importantes en suspens", "Paralysie analytique", "Tergiversations chroniques sur un choix", "Choix de carrière, de relation, de vie"],
  contraindications: ["Décisions très complexes nécessitant expertise (juridique, médicale, financière)"],
  programs: [{
    id: "principal",
    title: "Décision difficile — Clarifier la voie juste",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Décision difficile — Clarifier la voie juste",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés à une décision importante qu'ils n'arrivent pas à prendre. Travail sur l'écoute intérieure, la clarification des valeurs en jeu, le dépassement de la paralysie analytique." }
      ],
    }],
  }],
  outils: [
    { name: "Écoute intérieure profonde", type: "Levier", icon: "🎯", desc: "Aide à la décision" },
    { name: "Clarification des valeurs en jeu", type: "Levier", icon: "🎯", desc: "Aide à la décision" },
    { name: "Dépassement de l'analyse paralysante", type: "Levier", icon: "🎯", desc: "Aide à la décision" },
    { name: "Voix sage entendue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Valeurs clarifiées", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur décision ne fonctionne pas pour moi"],
};

const k_788: ProtocolDetail = {
  protocolId: 788,
  efficacite: "KIIKA",
  efficaciteSub: "Performance professionnelle / Leadership",
  description: "Pour patients en position de responsabilité ayant du mal à s'affirmer ou à incarner leur leadership. Travail sur la posture, l'autorité juste, la prise de place sans agression.",
  indications: ["Managers en difficulté avec leur autorité", "Patients en prise de poste de responsabilité", "Difficulté à se faire respecter sans agresser", "Imposture dans le leadership"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Affirmation et leadership — Prendre sa place",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Affirmation et leadership — Prendre sa place",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en position de responsabilité ayant du mal à s'affirmer ou à incarner leur leadership. Travail sur la posture, l'autorité juste, la prise de place sans agression." }
      ],
    }],
  }],
  outils: [
    { name: "Posture intérieure d'autorité juste", type: "Levier", icon: "🎯", desc: "Travail sur l'affirmation et le leadership" },
    { name: "Différenciation autorité / autoritarisme", type: "Levier", icon: "🎯", desc: "Travail sur l'affirmation et le leadership" },
    { name: "Présence qui légitime", type: "Levier", icon: "🎯", desc: "Travail sur l'affirmation et le leadership" },
    { name: "Place prise", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Autorité juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur leadership ne fonctionne pas pour moi"],
};

const k_789: ProtocolDetail = {
  protocolId: 789,
  efficacite: "KIIKA",
  efficaciteSub: "Performance professionnelle / Burn-out",
  description: "Pour patients en pré-burn-out (surcharge, premiers signes d'épuisement) ne nécessitant pas encore d'arrêt médical. Travail de prévention, restauration progressive, modification du rapport au travail.",
  indications: ["Pré-burn-out", "Surcharge professionnelle chronique", "Premiers signes d'épuisement", "Désir de prévention chez patients à risque"],
  contraindications: ["Burn-out constitué (NÉCESSITE arrêt médical et accompagnement spécialisé)"],
  programs: [{
    id: "principal",
    title: "Burn-out en prévention — Tenir sans se brûler",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Burn-out en prévention — Tenir sans se brûler",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en pré-burn-out (surcharge, premiers signes d'épuisement) ne nécessitant pas encore d'arrêt médical. Travail de prévention, restauration progressive, modification du rapport au travail." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance des signaux", type: "Levier", icon: "🎯", desc: "Prévention du burn-out" },
    { name: "Restauration énergétique", type: "Levier", icon: "🎯", desc: "Prévention du burn-out" },
    { name: "Modification du rapport au travail", type: "Levier", icon: "🎯", desc: "Prévention du burn-out" },
    { name: "Énergie respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rythme tenable", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur burn-out ne fonctionne pas pour moi"],
};

const k_790: ProtocolDetail = {
  protocolId: 790,
  efficacite: "KIIKA",
  efficaciteSub: "Performance professionnelle / Reconversion",
  description: "Pour patients en reconversion professionnelle, choisie ou subie. Travail sur l'identité professionnelle qui se transforme, le passage de l'ancien au nouveau métier, la confiance dans la transition.",
  indications: ["Reconversion en cours", "Désir de reconversion encore flou", "Reconversion subie (licenciement, fermeture)", "Patients craignant de tout perdre"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Reconversion professionnelle — Habiter le changement",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Reconversion professionnelle — Habiter le changement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en reconversion professionnelle, choisie ou subie. Travail sur l'identité professionnelle qui se transforme, le passage de l'ancien au nouveau métier, la confiance dans la transition." }
      ],
    }],
  }],
  outils: [
    { name: "Identité professionnelle en transition", type: "Levier", icon: "🎯", desc: "Accompagnement de reconversion" },
    { name: "Acquis transférables", type: "Levier", icon: "🎯", desc: "Accompagnement de reconversion" },
    { name: "Confiance dans le nouveau", type: "Levier", icon: "🎯", desc: "Accompagnement de reconversion" },
    { name: "Métier qui se réinvente", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Acquis qui demeurent", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur reconversion ne fonctionne pas pour moi"],
};

const k_791: ProtocolDetail = {
  protocolId: 791,
  efficacite: "KIIKA",
  efficaciteSub: "Performance / Projet",
  description: "Pour entrepreneurs, créateurs, porteurs de projet personnel ayant des doutes sur leur capacité à mener à bien. Travail sur la confiance en sa vision, la persévérance, la résilience face aux obstacles.",
  indications: ["Entrepreneurs en phase de lancement ou de doute", "Créateurs portant un projet artistique", "Porteurs de projet associatif ou personnel", "Doutes sur la capacité à porter le projet à terme"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Confiance dans un projet personnel — Porter sa vision",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Confiance dans un projet personnel — Porter sa vision",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour entrepreneurs, créateurs, porteurs de projet personnel ayant des doutes sur leur capacité à mener à bien. Travail sur la confiance en sa vision, la persévérance, la résilience face aux obstacles." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion à la vision", type: "Levier", icon: "🎯", desc: "Soutien à un projet personnel" },
    { name: "Confiance dans sa capacité de porteur", type: "Levier", icon: "🎯", desc: "Soutien à un projet personnel" },
    { name: "Résilience face aux obstacles", type: "Levier", icon: "🎯", desc: "Soutien à un projet personnel" },
    { name: "Vision portée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Capacité reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur projet ne fonctionne pas pour moi"],
};

const k_792: ProtocolDetail = {
  protocolId: 792,
  efficacite: "KIIKA",
  efficaciteSub: "Performance / Pratique de la présence",
  description: "Protocole transversal de cultivation de la présence pleine dans toute activité. Approche du quotidien comme champ de performance — pas seulement les grands moments. Très KIIKA dans son esprit.",
  indications: ["Patients souhaitant cultiver la qualité de présence", "Approche complémentaire à toute pratique", "Démarche de développement personnel global"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Vivre l'instant et l'engagement total — La performance au quotidien",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vivre l'instant et l'engagement total — La performance au quotidien",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole transversal de cultivation de la présence pleine dans toute activité. Approche du quotidien comme champ de performance — pas seulement les grands moments. Très KIIKA dans son esprit." }
      ],
    }],
  }],
  outils: [
    { name: "Présence dans l'instant", type: "Levier", icon: "🎯", desc: "Pratique de la présence pleine" },
    { name: "Engagement total dans ce qu'on fait", type: "Levier", icon: "🎯", desc: "Pratique de la présence pleine" },
    { name: "Conscience de la qualité du temps", type: "Levier", icon: "🎯", desc: "Pratique de la présence pleine" },
    { name: "Instant habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence totale", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pratique de la présence ne fonctionne pas pour moi"],
};

const k_1000: ProtocolDetail = {
  protocolId: 1000,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Anxiété",
  description: "Pour enfants 4-10 ans souffrant d'anxiété de séparation (école, garde, sortie sans parent). Travail ludique sur la sécurité intérieure et le lien qui demeure malgré la distance.",
  indications: ["Anxiété de séparation à l'entrée à l'école", "Refus scolaire anxieux", "Difficulté à dormir sans parent à proximité", "Crises d'angoisse au moment de la séparation"],
  contraindications: ["Trouble anxieux sévère pédiatrique (cadre spécialisé)", "Maltraitance suspectée"],
  programs: [{
    id: "principal",
    title: "Anxiété de séparation chez l'enfant — Apprivoiser l'éloignement",
    icon: "◑",
    duration: "20 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de séparation chez l'enfant — Apprivoiser l'éloignement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 4-10 ans souffrant d'anxiété de séparation (école, garde, sortie sans parent). Travail ludique sur la sécurité intérieure et le lien qui demeure malgré la distance." }
      ],
    }],
  }],
  outils: [
    { name: "Lien intériorisé qui demeure", type: "Levier", icon: "🎯", desc: "Anxiété de séparation pédiatrique" },
    { name: "Objet transitionnel imaginé", type: "Levier", icon: "🎯", desc: "Anxiété de séparation pédiatrique" },
    { name: "Sécurité portée en soi", type: "Levier", icon: "🎯", desc: "Anxiété de séparation pédiatrique" },
    { name: "Lien qui demeure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Force intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur anxiété ne fonctionne pas pour moi"],
};

const k_1001: ProtocolDetail = {
  protocolId: 1001,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Sommeil",
  description: "Pour enfants 4-12 ans souffrant de peurs nocturnes, terreurs nocturnes, cauchemars répétés. Travail ludique sur le sentiment de sécurité au coucher, le contrôle imaginé sur les rêves.",
  indications: ["Peur du noir, peur du coucher", "Cauchemars répétés", "Terreurs nocturnes", "Réveils anxieux"],
  contraindications: ["Trauma à l'origine des cauchemars (cadre spécifique)", "Troubles du sommeil organiques"],
  programs: [{
    id: "principal",
    title: "Peurs nocturnes et cauchemars — Le bouclier de rêves",
    icon: "◑",
    duration: "20 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Peurs nocturnes et cauchemars — Le bouclier de rêves",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 4-12 ans souffrant de peurs nocturnes, terreurs nocturnes, cauchemars répétés. Travail ludique sur le sentiment de sécurité au coucher, le contrôle imaginé sur les rêves." }
      ],
    }],
  }],
  outils: [
    { name: "Bouclier protecteur imaginé", type: "Levier", icon: "🎯", desc: "Sécurité nocturne pédiatrique" },
    { name: "Personnage gardien", type: "Levier", icon: "🎯", desc: "Sécurité nocturne pédiatrique" },
    { name: "Modification ludique des cauchemars", type: "Levier", icon: "🎯", desc: "Sécurité nocturne pédiatrique" },
    { name: "Bouclier magique", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Gardien des rêves", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sommeil ne fonctionne pas pour moi"],
};

const k_1002: ProtocolDetail = {
  protocolId: 1002,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Phobie",
  description: "Pour enfants 5-12 ans avec phobies spécifiques (animaux, insectes, médecin, dentiste, eau, hauteur). Travail de désensibilisation ludique avec progression douce.",
  indications: ["Phobies spécifiques pédiatriques", "Enfants évitant des situations utiles (vaccins, baignade)", "Peurs invalidant le quotidien"],
  contraindications: ["Phobies très sévères (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Phobies spécifiques chez l'enfant — Apprivoiser ce qui fait peur",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Phobies spécifiques chez l'enfant — Apprivoiser ce qui fait peur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 5-12 ans avec phobies spécifiques (animaux, insectes, médecin, dentiste, eau, hauteur). Travail de désensibilisation ludique avec progression douce." }
      ],
    }],
  }],
  outils: [
    { name: "Exposition imaginaire graduée et ludique", type: "Levier", icon: "🎯", desc: "Désensibilisation pédiatrique ludique" },
    { name: "Pouvoir de l'enfant sur le scénario", type: "Levier", icon: "🎯", desc: "Désensibilisation pédiatrique ludique" },
    { name: "Personnage protecteur", type: "Levier", icon: "🎯", desc: "Désensibilisation pédiatrique ludique" },
    { name: "Courage qui grandit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Magie protectrice", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur phobie ne fonctionne pas pour moi"],
};

const k_1003: ProtocolDetail = {
  protocolId: 1003,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Soins",
  description: "Pour préparation rapide d'un enfant 4-10 ans à un acte médical court mais redouté (vaccin, prise de sang, examen). Dispositif court avec lieu sûr ludique et transformation des sensations.",
  indications: ["Préparation à acte médical court", "Enfants ayant développé peur après mauvaise expérience", "Soins répétés (allergies, diabète enfant)"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation à un soin (vaccin, prise de sang, examen) — Confort enfant",
    icon: "◑",
    duration: "20 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à un soin (vaccin, prise de sang, examen) — Confort enfant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour préparation rapide d'un enfant 4-10 ans à un acte médical court mais redouté (vaccin, prise de sang, examen). Dispositif court avec lieu sûr ludique et transformation des sensations." }
      ],
    }],
  }],
  outils: [
    { name: "Lieu magique", type: "Levier", icon: "🎯", desc: "Préparation pédiatrique acte court" },
    { name: "Compagnon protecteur", type: "Levier", icon: "🎯", desc: "Préparation pédiatrique acte court" },
    { name: "Transformation sensation", type: "Levier", icon: "🎯", desc: "Préparation pédiatrique acte court" },
    { name: "Voyage protégé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soin traversé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur soins ne fonctionne pas pour moi"],
};

const k_1004: ProtocolDetail = {
  protocolId: 1004,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Alimentation",
  description: "Pour enfants 5-12 ans avec difficultés alimentaires sélectives (refus de catégories d'aliments, sensibilité texture, néophobie). Travail ludique sans pression. PAS pour TCA pathologiques.",
  indications: ["Néophobie alimentaire", "Sélectivité alimentaire marquée", "Sensibilité texturielle", "Repas devenus conflictuels"],
  contraindications: ["Anorexie pédiatrique (cadre spécialisé URGENT)", "Boulimie", "Phobie de déglutition après trauma"],
  programs: [{
    id: "principal",
    title: "Trouble alimentaire pédiatrique léger — Réconciliation avec l'alimentation",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Trouble alimentaire pédiatrique léger — Réconciliation avec l'alimentation",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 5-12 ans avec difficultés alimentaires sélectives (refus de catégories d'aliments, sensibilité texture, néophobie). Travail ludique sans pression. PAS pour TCA pathologiques." }
      ],
    }],
  }],
  outils: [
    { name: "Découverte ludique des aliments", type: "Levier", icon: "🎯", desc: "Réconciliation alimentaire pédiatrique" },
    { name: "Désinvestissement de la pression parentale", type: "Levier", icon: "🎯", desc: "Réconciliation alimentaire pédiatrique" },
    { name: "Curiosité réveillée", type: "Levier", icon: "🎯", desc: "Réconciliation alimentaire pédiatrique" },
    { name: "Découverte", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Petits pas", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur alimentation ne fonctionne pas pour moi"],
};

const k_1005: ProtocolDetail = {
  protocolId: 1005,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Attention",
  description: "Pour enfants 6-12 ans avec difficultés d'attention ou agitation (sans diagnostic TDAH, ou en complément). Travail sur la régulation, la qualité d'attention courte, le calme accessible.",
  indications: ["Difficultés d'attention en classe", "Agitation excessive", "Difficulté à se poser", "Complément à un suivi TDAH"],
  contraindications: ["TDAH sévère sans suivi spécialisé"],
  programs: [{
    id: "principal",
    title: "Hyperactivité et difficulté de concentration chez l'enfant — Calme apprivoisé",
    icon: "◑",
    duration: "20 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hyperactivité et difficulté de concentration chez l'enfant — Calme apprivoisé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 6-12 ans avec difficultés d'attention ou agitation (sans diagnostic TDAH, ou en complément). Travail sur la régulation, la qualité d'attention courte, le calme accessible." }
      ],
    }],
  }],
  outils: [
    { name: "Calme accessible et bref", type: "Levier", icon: "🎯", desc: "Régulation attentionnelle pédiatrique" },
    { name: "Image du focus", type: "Levier", icon: "🎯", desc: "Régulation attentionnelle pédiatrique" },
    { name: "Outils de retour à l'attention", type: "Levier", icon: "🎯", desc: "Régulation attentionnelle pédiatrique" },
    { name: "Calme apprivoisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Faisceau d'attention", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "20 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur attention ne fonctionne pas pour moi"],
};

const k_1006: ProtocolDetail = {
  protocolId: 1006,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Estime",
  description: "Pour enfants 6-12 ans avec faible estime de soi, hypersensibilité à la critique, peur de l'échec. Travail ludique sur la lumière intérieure, les forces de l'enfant, le droit à l'imperfection.",
  indications: ["Faible estime de soi pédiatrique", "Hypersensibilité à la critique", "Peur de l'échec", "Comparaison constante avec frères/sœurs ou camarades"],
  contraindications: ["Maltraitance ou harcèlement actifs (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Confiance en soi de l'enfant — Faire grandir la lumière intérieure",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Confiance en soi de l'enfant — Faire grandir la lumière intérieure",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 6-12 ans avec faible estime de soi, hypersensibilité à la critique, peur de l'échec. Travail ludique sur la lumière intérieure, les forces de l'enfant, le droit à l'imperfection." }
      ],
    }],
  }],
  outils: [
    { name: "Lumière intérieure visualisée", type: "Levier", icon: "🎯", desc: "Estime de soi pédiatrique" },
    { name: "Identification des forces propres", type: "Levier", icon: "🎯", desc: "Estime de soi pédiatrique" },
    { name: "Droit à l'imperfection", type: "Levier", icon: "🎯", desc: "Estime de soi pédiatrique" },
    { name: "Lumière qui grandit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mes forces à moi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur estime ne fonctionne pas pour moi"],
};

const k_1007: ProtocolDetail = {
  protocolId: 1007,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Harcèlement",
  description: "Pour enfants victimes de harcèlement scolaire (en complément des actions sur le harcèlement lui-même). Travail sur la sécurité intérieure, la légitimité, la non-intériorisation des mots blessants.",
  indications: ["Harcèlement scolaire en cours ou récent", "Séquelles psychiques d'un harcèlement passé", "Soutien en parallèle d'actions concrètes"],
  contraindications: ["Substitution aux actions sur le harcèlement (signalement, école, médiation)", "ESPT constitué (cadre spécialisé)"],
  programs: [{
    id: "principal",
    title: "Harcèlement scolaire — Soutien à l'enfant",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Harcèlement scolaire — Soutien à l'enfant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants victimes de harcèlement scolaire (en complément des actions sur le harcèlement lui-même). Travail sur la sécurité intérieure, la légitimité, la non-intériorisation des mots blessants." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimité réaffirmée", type: "Levier", icon: "🎯", desc: "Soutien à enfant harcelé" },
    { name: "Bouclier protecteur", type: "Levier", icon: "🎯", desc: "Soutien à enfant harcelé" },
    { name: "Non-intériorisation des paroles", type: "Levier", icon: "🎯", desc: "Soutien à enfant harcelé" },
    { name: "Tu es légitime", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Bouclier qui protège", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur harcèlement ne fonctionne pas pour moi"],
};

const k_1008: ProtocolDetail = {
  protocolId: 1008,
  efficacite: "KIIKA",
  efficaciteSub: "Pédiatrie / Tics",
  description: "Pour enfants 6-12 ans avec tics nerveux fonctionnels ou TOC débutants légers (rituels de vérification, pensées intrusives). Travail d'apaisement et de désinvestissement.",
  indications: ["Tics nerveux fonctionnels", "Rituels de vérification", "Pensées qui reviennent (TOC débutants)", "Précautions excessives"],
  contraindications: ["Syndrome de Tourette", "TOC sévère (cadre TCC pédiatrique)"],
  programs: [{
    id: "principal",
    title: "Tics nerveux et tocs légers chez l'enfant — Apaiser le système",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tics nerveux et tocs légers chez l'enfant — Apaiser le système",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour enfants 6-12 ans avec tics nerveux fonctionnels ou TOC débutants légers (rituels de vérification, pensées intrusives). Travail d'apaisement et de désinvestissement." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement attentionnel", type: "Levier", icon: "🎯", desc: "Apaisement TOC/tics pédiatriques" },
    { name: "Image du système qui se calme", type: "Levier", icon: "🎯", desc: "Apaisement TOC/tics pédiatriques" },
    { name: "Non-réponse aux pensées", type: "Levier", icon: "🎯", desc: "Apaisement TOC/tics pédiatriques" },
    { name: "Système apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pensées qui passent", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur tics ne fonctionne pas pour moi"],
};

const k_1009: ProtocolDetail = {
  protocolId: 1009,
  efficacite: "KIIKA",
  efficaciteSub: "Adolescent / Mal-être",
  description: "Pour adolescents 12-17 ans en mal-être diffus, perte de repères, fluctuations émotionnelles intenses. Adaptation registre adolescent. PAS pour dépression majeure ni risque suicidaire.",
  indications: ["Mal-être diffus de l'adolescence", "Crise identitaire", "Hypersensibilité émotionnelle adolescente", "Adolescents demandant un espace pour eux"],
  contraindications: ["Dépression majeure (cadre médical)", "Idées suicidaires (urgence)", "Trouble psychiatrique avéré"],
  programs: [{
    id: "principal",
    title: "Adolescent en mal-être — Accompagner la traversée",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Adolescent en mal-être — Accompagner la traversée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour adolescents 12-17 ans en mal-être diffus, perte de repères, fluctuations émotionnelles intenses. Adaptation registre adolescent. PAS pour dépression majeure ni risque suicidaire." }
      ],
    }],
  }],
  outils: [
    { name: "Espace propre respecté", type: "Levier", icon: "🎯", desc: "Accompagnement adolescent" },
    { name: "Légitimation des fluctuations", type: "Levier", icon: "🎯", desc: "Accompagnement adolescent" },
    { name: "Identité en construction", type: "Levier", icon: "🎯", desc: "Accompagnement adolescent" },
    { name: "Espace à toi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Fluctuations normales", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur mal-être ne fonctionne pas pour moi"],
};

const k_1010: ProtocolDetail = {
  protocolId: 1010,
  efficacite: "KIIKA",
  efficaciteSub: "Adolescent / Examens",
  description: "Pour adolescents préparant brevet, bac, partiels, concours. Travail sur la confiance, l'apaisement de l'anxiété, la mobilisation des ressources le jour J. Adaptation registre.",
  indications: ["Préparation brevet, bac, partiels", "Adolescents anxieux malgré bon travail", "Concours préparatoires", "Trous de mémoire en examen"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Adolescent et examens — Préparation aux brevets, bac, partiels",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Adolescent et examens — Préparation aux brevets, bac, partiels",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour adolescents préparant brevet, bac, partiels, concours. Travail sur la confiance, l'apaisement de l'anxiété, la mobilisation des ressources le jour J. Adaptation registre." }
      ],
    }],
  }],
  outils: [
    { name: "Confiance dans le travail accompli", type: "Levier", icon: "🎯", desc: "Préparation examen adolescent" },
    { name: "Apaisement anxiété", type: "Levier", icon: "🎯", desc: "Préparation examen adolescent" },
    { name: "Mobilisation des ressources", type: "Levier", icon: "🎯", desc: "Préparation examen adolescent" },
    { name: "Connaissance disponible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Mental préparé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur examens ne fonctionne pas pour moi"],
};

const k_1011: ProtocolDetail = {
  protocolId: 1011,
  efficacite: "KIIKA",
  efficaciteSub: "Adolescent / Corps",
  description: "Pour adolescents 12-17 ans en difficulté avec leur image corporelle (acné, corpulence, transformation pubertaire mal vécue, comparaison sur réseaux sociaux). PAS pour TCA pathologiques.",
  indications: ["Difficultés image corporelle adolescente", "Mauvais vécu transformation pubertaire", "Comparaison toxique réseaux sociaux", "Estime de soi liée au physique"],
  contraindications: ["Anorexie, boulimie, hyperphagie boulimique (cadre spécialisé)", "Dysphorie de genre (cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Adolescent et image corporelle — Habiter le corps qui change",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Adolescent et image corporelle — Habiter le corps qui change",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour adolescents 12-17 ans en difficulté avec leur image corporelle (acné, corpulence, transformation pubertaire mal vécue, comparaison sur réseaux sociaux). PAS pour TCA pathologiques." }
      ],
    }],
  }],
  outils: [
    { name: "Réconciliation avec corps en transformation", type: "Levier", icon: "🎯", desc: "Image corporelle adolescente" },
    { name: "Désinvestissement images extérieures", type: "Levier", icon: "🎯", desc: "Image corporelle adolescente" },
    { name: "Valeur au-delà de l'apparence", type: "Levier", icon: "🎯", desc: "Image corporelle adolescente" },
    { name: "Corps qui se construit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Valeur intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur corps ne fonctionne pas pour moi"],
};

const k_1012: ProtocolDetail = {
  protocolId: 1012,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Conception",
  description: "Pour couples ou femmes en désir de grossesse depuis quelques mois, sans diagnostic d'infertilité avéré. Travail de détente, désamorçage de la pression, confiance dans le processus naturel.",
  indications: ["Désir de grossesse depuis 6-12 mois", "Pression psychologique du chronomètre", "Détente nécessaire après échecs courts", "Préparation conception"],
  contraindications: ["Infertilité diagnostiquée (PMA en cours - voir K-PERI-002)", "Promesse de résultat (jamais)"],
  programs: [{
    id: "principal",
    title: "Désir d'enfant et conception — Apaiser le chemin",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Désir d'enfant et conception — Apaiser le chemin",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour couples ou femmes en désir de grossesse depuis quelques mois, sans diagnostic d'infertilité avéré. Travail de détente, désamorçage de la pression, confiance dans le processus naturel." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage de la pression mensuelle", type: "Levier", icon: "🎯", desc: "Apaisement et confiance dans la conception" },
    { name: "Confiance dans le corps", type: "Levier", icon: "🎯", desc: "Apaisement et confiance dans la conception" },
    { name: "Détente du système nerveux", type: "Levier", icon: "🎯", desc: "Apaisement et confiance dans la conception" },
    { name: "Corps confiant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pression déposée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur conception ne fonctionne pas pour moi"],
};

const k_1013: ProtocolDetail = {
  protocolId: 1013,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / PMA",
  description: "Pour couples ou femmes en parcours d'aide médicale à la procréation (FIV, IAC, IVG médicamenteuse). Travail spécifique sur la traversée psychologique, l'attente, les échecs possibles, le maintien du couple.",
  indications: ["PMA en cours (toutes formes)", "Parcours longs (plusieurs tentatives)", "Soutien après échec et reprise", "Maintien équilibre du couple en PMA"],
  contraindications: ["Substitution au suivi médical PMA"],
  programs: [{
    id: "principal",
    title: "Parcours PMA — Soutenir la traversée médicale",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Parcours PMA — Soutenir la traversée médicale",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour couples ou femmes en parcours d'aide médicale à la procréation (FIV, IAC, IVG médicamenteuse). Travail spécifique sur la traversée psychologique, l'attente, les échecs possibles, le maintien du couple." }
      ],
    }],
  }],
  outils: [
    { name: "Traversée des phases du parcours", type: "Levier", icon: "🎯", desc: "Accompagnement parcours PMA" },
    { name: "Soutien dans l'attente", type: "Levier", icon: "🎯", desc: "Accompagnement parcours PMA" },
    { name: "Acceptation des échecs", type: "Levier", icon: "🎯", desc: "Accompagnement parcours PMA" },
    { name: "Parcours soutenu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Patience habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pma ne fonctionne pas pour moi"],
};

const k_1014: ProtocolDetail = {
  protocolId: 1014,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Grossesse",
  description: "Pour femmes enceintes en anxiété (peur de complications, hypervigilance corporelle, stress récurrent). Travail d'apaisement, de présence à la grossesse, de confiance dans le corps qui sait.",
  indications: ["Anxiété de fond pendant grossesse", "Hypervigilance après antécédent obstétrical", "Stress chronique impactant la grossesse", "Peurs spécifiques (malformation, complications)"],
  contraindications: ["Complications obstétricales actives (suivi médical strict)"],
  programs: [{
    id: "principal",
    title: "Anxiété de la grossesse — Vivre la grossesse avec sérénité",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anxiété de la grossesse — Vivre la grossesse avec sérénité",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes enceintes en anxiété (peur de complications, hypervigilance corporelle, stress récurrent). Travail d'apaisement, de présence à la grossesse, de confiance dans le corps qui sait." }
      ],
    }],
  }],
  outils: [
    { name: "Lien à l'enfant porté", type: "Levier", icon: "🎯", desc: "Apaisement de l'anxiété pendant grossesse" },
    { name: "Confiance dans le corps", type: "Levier", icon: "🎯", desc: "Apaisement de l'anxiété pendant grossesse" },
    { name: "Désamorçage de l'hypervigilance", type: "Levier", icon: "🎯", desc: "Apaisement de l'anxiété pendant grossesse" },
    { name: "Grossesse habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur grossesse ne fonctionne pas pour moi"],
};

const k_1015: ProtocolDetail = {
  protocolId: 1015,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Symptômes",
  description: "Pour femmes enceintes souffrant de nausées et vomissements gravidiques (premier trimestre principalement). Travail spécifique d'apaisement digestif, en complément éventuel du suivi médical.",
  indications: ["Nausées matinales", "Vomissements gravidiques modérés", "Hyperémèse modérée (formes sévères = médical)", "Femmes voulant alternative ou complément"],
  contraindications: ["Hyperémèse sévère (cadre médical strict)", "Substitution aux traitements"],
  programs: [{
    id: "principal",
    title: "Nausées et vomissements de grossesse — Apaiser le système",
    icon: "◑",
    duration: "30 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Nausées et vomissements de grossesse — Apaiser le système",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes enceintes souffrant de nausées et vomissements gravidiques (premier trimestre principalement). Travail spécifique d'apaisement digestif, en complément éventuel du suivi médical." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement digestif imagé", type: "Levier", icon: "🎯", desc: "Apaisement nausées de grossesse" },
    { name: "Désamorçage cycle anxiété-nausée", type: "Levier", icon: "🎯", desc: "Apaisement nausées de grossesse" },
    { name: "Geste-ancre pour soulagement", type: "Levier", icon: "🎯", desc: "Apaisement nausées de grossesse" },
    { name: "Estomac apaisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Système qui s'adapte", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "30 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur symptômes ne fonctionne pas pour moi"],
};

const k_1016: ProtocolDetail = {
  protocolId: 1016,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Accouchement",
  description: "Préparation hypnotique à l'accouchement (en complément des cours de préparation classiques ou hypnonatal). Travail sur la confiance dans le processus, les outils pour le travail, la gestion de la douleur.",
  indications: ["Préparation accouchement (en complément)", "Femmes anxieuses face à l'accouchement", "Préparation après expérience difficile", "Souhait d'accouchement physiologique"],
  contraindications: ["Substitution à la préparation classique"],
  programs: [{
    id: "principal",
    title: "Préparation à l'accouchement — Confiance et outils",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à l'accouchement — Confiance et outils",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Préparation hypnotique à l'accouchement (en complément des cours de préparation classiques ou hypnonatal). Travail sur la confiance dans le processus, les outils pour le travail, la gestion de la douleur." }
      ],
    }],
  }],
  outils: [
    { name: "Confiance dans le corps physiologique", type: "Levier", icon: "🎯", desc: "Préparation hypnotique accouchement" },
    { name: "Outils pour le travail (souffle, lieu sûr, anchors)", type: "Levier", icon: "🎯", desc: "Préparation hypnotique accouchement" },
    { name: "Imagerie d'ouverture", type: "Levier", icon: "🎯", desc: "Préparation hypnotique accouchement" },
    { name: "Corps qui sait", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vague qui passe", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "3/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur accouchement ne fonctionne pas pour moi"],
};

const k_1017: ProtocolDetail = {
  protocolId: 1017,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Post-partum",
  description: "Pour femmes ayant vécu un accouchement difficile ou traumatique (urgences, césarienne en urgence, complications, sentiment d'avoir été dépossédée). Travail d'intégration sans précipiter, pas de retraumatisation.",
  indications: ["Vécu d'accouchement difficile", "Sentiment d'avoir été déresponsabilisée", "Souvenirs intrusifs post-accouchement", "Pas d'ESPT constitué"],
  contraindications: ["ESPT post-partum constitué (cadre traumatologique)", "Phase aiguë très récente (laisser le temps)"],
  programs: [{
    id: "principal",
    title: "Vécu difficile d'accouchement — Intégrer l'expérience",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Vécu difficile d'accouchement — Intégrer l'expérience",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes ayant vécu un accouchement difficile ou traumatique (urgences, césarienne en urgence, complications, sentiment d'avoir été dépossédée). Travail d'intégration sans précipiter, pas de retraumatisation." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance du vécu sans minimisation", type: "Levier", icon: "🎯", desc: "Intégration vécu accouchement difficile" },
    { name: "Lieu sûr stabilisé", type: "Levier", icon: "🎯", desc: "Intégration vécu accouchement difficile" },
    { name: "Récit ré-élaboré", type: "Levier", icon: "🎯", desc: "Intégration vécu accouchement difficile" },
    { name: "Vécu reconnu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Récit habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur post-partum ne fonctionne pas pour moi"],
};

const k_1018: ProtocolDetail = {
  protocolId: 1018,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Post-partum",
  description: "Pour mères en post-partum difficile (baby blues prolongé, fatigue extrême, doute sur soi, difficulté à investir le bébé). PAS pour dépression post-partum constituée.",
  indications: ["Post-partum difficile sans dépression majeure", "Baby blues prolongé (au-delà de 2 semaines)", "Fatigue épuisante", "Doutes sur ses capacités maternelles"],
  contraindications: ["Dépression post-partum (cadre médical et psychiatrique)", "Pensées suicidaires ou de violence envers le bébé (urgence)"],
  programs: [{
    id: "principal",
    title: "Post-partum difficile — Traverser les premiers mois",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Post-partum difficile — Traverser les premiers mois",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour mères en post-partum difficile (baby blues prolongé, fatigue extrême, doute sur soi, difficulté à investir le bébé). PAS pour dépression post-partum constituée." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation de la difficulté", type: "Levier", icon: "🎯", desc: "Soutien post-partum" },
    { name: "Restauration énergétique", type: "Levier", icon: "🎯", desc: "Soutien post-partum" },
    { name: "Confiance maternelle progressive", type: "Levier", icon: "🎯", desc: "Soutien post-partum" },
    { name: "Mère qui apprend", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Énergie respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur post-partum ne fonctionne pas pour moi"],
};

const k_1019: ProtocolDetail = {
  protocolId: 1019,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Allaitement",
  description: "Pour mères en difficulté avec l'allaitement (douleurs, refus du bébé, lactation insuffisante perçue, anxiété de manque). Soutien sans jugement sur le choix d'allaiter ou non.",
  indications: ["Difficultés d'allaitement maternel", "Anxiété autour de la quantité de lait", "Douleurs persistantes malgré accompagnement", "Tensions psychiques autour du choix"],
  contraindications: ["Substitution au suivi consultant en lactation"],
  programs: [{
    id: "principal",
    title: "Allaitement difficile — Soutenir la traversée",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Allaitement difficile — Soutenir la traversée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour mères en difficulté avec l'allaitement (douleurs, refus du bébé, lactation insuffisante perçue, anxiété de manque). Soutien sans jugement sur le choix d'allaiter ou non." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement de la pression", type: "Levier", icon: "🎯", desc: "Soutien à l'allaitement" },
    { name: "Confiance dans le corps", type: "Levier", icon: "🎯", desc: "Soutien à l'allaitement" },
    { name: "Désamorçage anxiété de manque", type: "Levier", icon: "🎯", desc: "Soutien à l'allaitement" },
    { name: "Confiance dans le corps", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien préservé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur allaitement ne fonctionne pas pour moi"],
};

const k_1020: ProtocolDetail = {
  protocolId: 1020,
  efficacite: "KIIKA",
  efficaciteSub: "Sexologie / Désir",
  description: "Pour patientes (et patients) en perte de désir sexuel. Travail sur les conditions du désir, la reconnexion à soi, la dimension du plaisir possible. Pour individus ou en couple.",
  indications: ["Baisse durable de libido", "Désir altéré après événements (post-partum, maladie, deuil)", "Patients en couple voulant retrouver l'élan", "Dimension psychique du désir"],
  contraindications: ["Causes médicales non explorées (hormonales, médicamenteuses)", "Trauma sexuel actif (cadre spécialisé)"],
  programs: [{
    id: "principal",
    title: "Désir et libido — Réveil de la dimension intime",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Désir et libido — Réveil de la dimension intime",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patientes (et patients) en perte de désir sexuel. Travail sur les conditions du désir, la reconnexion à soi, la dimension du plaisir possible. Pour individus ou en couple." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion sensorielle à soi", type: "Levier", icon: "🎯", desc: "Travail sur le désir" },
    { name: "Désamorçage de la pression de performance", type: "Levier", icon: "🎯", desc: "Travail sur le désir" },
    { name: "Condition d'émergence du désir", type: "Levier", icon: "🎯", desc: "Travail sur le désir" },
    { name: "Sensorialité retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Désir invité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur désir ne fonctionne pas pour moi"],
};

const k_1021: ProtocolDetail = {
  protocolId: 1021,
  efficacite: "KIIKA",
  efficaciteSub: "Sexologie / Érection",
  description: "Pour hommes avec difficultés d'érection à composante psychogène (pression de performance, anxiété, blocage situationnel). Pas pour causes organiques pures.",
  indications: ["Difficultés d'érection à composante anxieuse", "Blocages situationnels après échec", "Hommes en pression de performance", "Soutien complémentaire au traitement médical"],
  contraindications: ["Causes organiques majeures non traitées", "Substitution au traitement médical si indiqué"],
  programs: [{
    id: "principal",
    title: "Difficultés d'érection — Apaiser la pression",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Difficultés d'érection — Apaiser la pression",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour hommes avec difficultés d'érection à composante psychogène (pression de performance, anxiété, blocage situationnel). Pas pour causes organiques pures." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage cycle anxiété-blocage", type: "Levier", icon: "🎯", desc: "Apaisement difficultés érectiles psychogènes" },
    { name: "Reconnexion sensorielle", type: "Levier", icon: "🎯", desc: "Apaisement difficultés érectiles psychogènes" },
    { name: "Désinvestissement performance", type: "Levier", icon: "🎯", desc: "Apaisement difficultés érectiles psychogènes" },
    { name: "Pression déposée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sensorialité retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur érection ne fonctionne pas pour moi"],
};

const k_1022: ProtocolDetail = {
  protocolId: 1022,
  efficacite: "KIIKA",
  efficaciteSub: "Sexologie / Plaisir féminin",
  description: "Pour femmes ayant difficulté à atteindre l'orgasme. Travail sur l'écoute du corps, le désinvestissement de la performance, la reconnexion au plaisir.",
  indications: ["Anorgasmie primaire ou secondaire", "Difficulté à habiter le plaisir", "Pression intérieure ou de couple"],
  contraindications: ["Trauma sexuel non traité", "Causes organiques non explorées"],
  programs: [{
    id: "principal",
    title: "Anorgasmie féminine — Réconciliation au plaisir",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Anorgasmie féminine — Réconciliation au plaisir",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes ayant difficulté à atteindre l'orgasme. Travail sur l'écoute du corps, le désinvestissement de la performance, la reconnexion au plaisir." }
      ],
    }],
  }],
  outils: [
    { name: "Écoute du corps", type: "Levier", icon: "🎯", desc: "Réconciliation au plaisir féminin" },
    { name: "Désinvestissement de l'objectif", type: "Levier", icon: "🎯", desc: "Réconciliation au plaisir féminin" },
    { name: "Reconnexion sensorielle", type: "Levier", icon: "🎯", desc: "Réconciliation au plaisir féminin" },
    { name: "Corps écouté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Plaisir habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur plaisir féminin ne fonctionne pas pour moi"],
};

const k_1023: ProtocolDetail = {
  protocolId: 1023,
  efficacite: "KIIKA",
  efficaciteSub: "Sexologie / Couple",
  description: "Pour couples vivant un déséquilibre de désir (l'un demande, l'autre se retire). Travail sur la communication, la dépose des dynamiques toxiques, la création d'espaces nouveaux.",
  indications: ["Couples avec désir asymétrique chronique", "Tensions autour de la fréquence sexuelle", "Patrons demande/refus installés"],
  contraindications: ["Violence dans le couple", "Pressions sexuelles inappropriées (à traiter en cadre spécifique)"],
  programs: [{
    id: "principal",
    title: "Différence de désir dans le couple — Naviguer l'asymétrie",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Différence de désir dans le couple — Naviguer l'asymétrie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour couples vivant un déséquilibre de désir (l'un demande, l'autre se retire). Travail sur la communication, la dépose des dynamiques toxiques, la création d'espaces nouveaux." }
      ],
    }],
  }],
  outils: [
    { name: "Décodage de la dynamique", type: "Levier", icon: "🎯", desc: "Travail sur l'asymétrie de désir" },
    { name: "Communication renouvelée", type: "Levier", icon: "🎯", desc: "Travail sur l'asymétrie de désir" },
    { name: "Sortie du pattern demande/refus", type: "Levier", icon: "🎯", desc: "Travail sur l'asymétrie de désir" },
    { name: "Pattern brisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Communication vraie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur couple ne fonctionne pas pour moi"],
};

const k_1024: ProtocolDetail = {
  protocolId: 1024,
  efficacite: "KIIKA",
  efficaciteSub: "Sexologie / Âge",
  description: "Pour patients confrontés aux changements de la sexualité avec l'âge (ménopause, andropause, modifications physiologiques, du désir, du corps). Travail de réinvention plutôt que de deuil.",
  indications: ["Sexualité altérée par la ménopause/andropause", "Adaptation de la sexualité à l'âge", "Couples vieillissants questionnant leur intimité"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Sexualité et vieillissement — Réinventer l'intimité",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sexualité et vieillissement — Réinventer l'intimité",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés aux changements de la sexualité avec l'âge (ménopause, andropause, modifications physiologiques, du désir, du corps). Travail de réinvention plutôt que de deuil." }
      ],
    }],
  }],
  outils: [
    { name: "Acceptation des changements", type: "Levier", icon: "🎯", desc: "Sexualité et vieillissement" },
    { name: "Réinvention plutôt que deuil", type: "Levier", icon: "🎯", desc: "Sexualité et vieillissement" },
    { name: "Approfondissement de l'intimité", type: "Levier", icon: "🎯", desc: "Sexualité et vieillissement" },
    { name: "Sexualité réinventée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Intimité approfondie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur âge ne fonctionne pas pour moi"],
};

const k_1025: ProtocolDetail = {
  protocolId: 1025,
  efficacite: "KIIKA",
  efficaciteSub: "Périnatalité / Chirurgie",
  description: "Pour femmes devant subir une chirurgie gynécologique (hystérectomie, ablation kyste, conisation, ovariectomie). Travail sur l'apaisement, la dimension symbolique de l'organe, la récupération.",
  indications: ["Préparation à chirurgie gynécologique programmée", "Anxiété face à l'intervention", "Dimension symbolique de l'organe (utérus, ovaires)"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation à une chirurgie gynécologique — Soin et confiance",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à une chirurgie gynécologique — Soin et confiance",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour femmes devant subir une chirurgie gynécologique (hystérectomie, ablation kyste, conisation, ovariectomie). Travail sur l'apaisement, la dimension symbolique de l'organe, la récupération." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement préopératoire", type: "Levier", icon: "🎯", desc: "Préparation chirurgie gynécologique" },
    { name: "Reconnaissance de la dimension symbolique", type: "Levier", icon: "🎯", desc: "Préparation chirurgie gynécologique" },
    { name: "Confiance dans le corps qui guérit", type: "Levier", icon: "🎯", desc: "Préparation chirurgie gynécologique" },
    { name: "Corps confiant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soin reçu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur chirurgie ne fonctionne pas pour moi"],
};

const k_1026: ProtocolDetail = {
  protocolId: 1026,
  efficacite: "KIIKA",
  efficaciteSub: "Médical / Gynécologie",
  description: "Pour patientes atteintes d'endométriose. Travail sur la gestion de la douleur, l'apaisement de l'inflammation imagée, la qualité de vie, la relation au corps et à la fertilité.",
  indications: ["Endométriose confirmée en complément du suivi médical", "Douleurs cycliques", "Patientes en parcours fertilité avec endométriose", "Qualité de vie altérée"],
  contraindications: ["Substitution au traitement médical"],
  programs: [{
    id: "principal",
    title: "Endométriose — Vivre avec et au-delà",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Endométriose — Vivre avec et au-delà",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patientes atteintes d'endométriose. Travail sur la gestion de la douleur, l'apaisement de l'inflammation imagée, la qualité de vie, la relation au corps et à la fertilité." }
      ],
    }],
  }],
  outils: [
    { name: "Gestion de la douleur", type: "Levier", icon: "🎯", desc: "Soutien aux patientes endométriose" },
    { name: "Apaisement inflammation imagée", type: "Levier", icon: "🎯", desc: "Soutien aux patientes endométriose" },
    { name: "Réconciliation au corps", type: "Levier", icon: "🎯", desc: "Soutien aux patientes endométriose" },
    { name: "Inflammation apaisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps écouté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur gynécologie ne fonctionne pas pour moi"],
};

const k_1027: ProtocolDetail = {
  protocolId: 1027,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Tabac",
  description: "Pour patients désireux d'arrêter le tabac ou consolider un arrêt récent. Travail sur la motivation profonde, les ancrages comportementaux, la gestion des envies, la prévention de rechute. Alternative ou complément aux substituts nicotiniques.",
  indications: ["Désir d'arrêt de tabac avec motivation interne", "Consolidation d'arrêt récent", "Échecs antérieurs de sevrage", "Patients refusant les substituts ou en complément"],
  contraindications: ["Patients sans motivation propre à arrêter", "Pathologie psychiatrique aiguë"],
  programs: [{
    id: "principal",
    title: "Tabac — Arrêt et prévention rechute",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Tabac — Arrêt et prévention rechute",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients désireux d'arrêter le tabac ou consolider un arrêt récent. Travail sur la motivation profonde, les ancrages comportementaux, la gestion des envies, la prévention de rechute. Alternative ou complément aux substituts nicotiniques." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion à la motivation profonde", type: "Levier", icon: "🎯", desc: "Sevrage tabagique hypnotique" },
    { name: "Désinvestissement de l'identité fumeur", type: "Levier", icon: "🎯", desc: "Sevrage tabagique hypnotique" },
    { name: "Gestion des déclencheurs", type: "Levier", icon: "🎯", desc: "Sevrage tabagique hypnotique" },
    { name: "Liberté retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps respecté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur tabac ne fonctionne pas pour moi"],
};

const k_1028: ProtocolDetail = {
  protocolId: 1028,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Alcool",
  description: "Pour patients en réduction ou abstinence d'alcool, en COMPLÉMENT du suivi addictologique. Travail sur la motivation, les déclencheurs, la gestion des envies, la reconstruction d'une vie sans. JAMAIS substitution au sevrage médicalisé pour dépendance physique.",
  indications: ["Démarche d'arrêt alcool en cours avec suivi médical", "Consommation problématique sans dépendance physique majeure", "Consolidation d'abstinence", "Réduction des consommations"],
  contraindications: ["Dépendance physique sévère sans suivi médical (sevrage hospitalier obligatoire)", "Consommation active sans démarche", "Comorbidités psychiatriques non stabilisées"],
  programs: [{
    id: "principal",
    title: "Alcool — Soutien à la réduction ou abstinence",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Alcool — Soutien à la réduction ou abstinence",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en réduction ou abstinence d'alcool, en COMPLÉMENT du suivi addictologique. Travail sur la motivation, les déclencheurs, la gestion des envies, la reconstruction d'une vie sans. JAMAIS substitution au sevrage médicalisé pour dépendance physique." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion au pourquoi profond", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence/réduction d'alcool" },
    { name: "Gestion des déclencheurs", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence/réduction d'alcool" },
    { name: "Outils anti-envie (craving)", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence/réduction d'alcool" },
    { name: "Liberté retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps respecté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur alcool ne fonctionne pas pour moi"],
};

const k_1029: ProtocolDetail = {
  protocolId: 1029,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Alimentaire",
  description: "Pour patients avec consommation excessive de sucre, grignotages compulsifs entre repas, addiction au sucré. Pas pour TCA pathologiques. Travail sur la régulation, les déclencheurs émotionnels, la satiété.",
  indications: ["Grignotages compulsifs réguliers", "Addiction au sucré", "Consommations émotionnelles d'aliments", "Désir de réduction sans régime restrictif"],
  contraindications: ["Anorexie, boulimie, hyperphagie boulimique (cadre TCA spécialisé)", "Diabète mal équilibré"],
  programs: [{
    id: "principal",
    title: "Sucre et grignotage compulsif — Apaiser la demande",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Sucre et grignotage compulsif — Apaiser la demande",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients avec consommation excessive de sucre, grignotages compulsifs entre repas, addiction au sucré. Pas pour TCA pathologiques. Travail sur la régulation, les déclencheurs émotionnels, la satiété." }
      ],
    }],
  }],
  outils: [
    { name: "Identification des déclencheurs émotionnels", type: "Levier", icon: "🎯", desc: "Régulation alimentaire compulsive" },
    { name: "Distinction faim / envie", type: "Levier", icon: "🎯", desc: "Régulation alimentaire compulsive" },
    { name: "Outils alternatifs", type: "Levier", icon: "🎯", desc: "Régulation alimentaire compulsive" },
    { name: "Faim juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Émotion accueillie autrement", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur alimentaire ne fonctionne pas pour moi"],
};

const k_1030: ProtocolDetail = {
  protocolId: 1030,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Comportementales",
  description: "Pour patients avec usage compulsif des écrans (smartphone, réseaux sociaux, séries, défilement infini). Travail sur la conscience de l'usage, la dépose des ancrages compulsifs, la reconquête du temps.",
  indications: ["Usage compulsif des écrans", "Scrolling chronique", "Réseaux sociaux envahissants", "Sentiment de perte de temps massive", "FOMO (peur de rater)"],
  contraindications: ["Aucune absolue, peut concerner tous publics"],
  programs: [{
    id: "principal",
    title: "Écrans et réseaux sociaux — Reprendre le contrôle",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Écrans et réseaux sociaux — Reprendre le contrôle",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients avec usage compulsif des écrans (smartphone, réseaux sociaux, séries, défilement infini). Travail sur la conscience de l'usage, la dépose des ancrages compulsifs, la reconquête du temps." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience de l'usage automatique", type: "Levier", icon: "🎯", desc: "Régulation usage des écrans" },
    { name: "Identification des déclencheurs", type: "Levier", icon: "🎯", desc: "Régulation usage des écrans" },
    { name: "Désamorçage du circuit de la récompense", type: "Levier", icon: "🎯", desc: "Régulation usage des écrans" },
    { name: "Temps repris", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Choix conscient", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur comportementales ne fonctionne pas pour moi"],
};

const k_1031: ProtocolDetail = {
  protocolId: 1031,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Jeux d'argent",
  description: "Pour patients en addiction aux jeux d'argent (paris sportifs, machines à sous, casinos, poker en ligne) en COMPLÉMENT du suivi addictologique. Travail sur la motivation, l'identification du circuit de la récompense, la prévention rechute.",
  indications: ["Addiction aux jeux d'argent en démarche d'arrêt", "Suivi en CSAPA en cours", "Pertes financières causant souffrance", "Soutien à la prévention de rechute"],
  contraindications: ["Pas de démarche réelle d'arrêt", "Substitution au cadre spécialisé"],
  programs: [{
    id: "principal",
    title: "Jeux d'argent — Sortir de la spirale",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Jeux d'argent — Sortir de la spirale",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en addiction aux jeux d'argent (paris sportifs, machines à sous, casinos, poker en ligne) en COMPLÉMENT du suivi addictologique. Travail sur la motivation, l'identification du circuit de la récompense, la prévention rechute." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion à la réalité des pertes", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence des jeux d'argent" },
    { name: "Désamorçage du circuit récompense", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence des jeux d'argent" },
    { name: "Gestion des envies (chasing)", type: "Levier", icon: "🎯", desc: "Soutien à l'abstinence des jeux d'argent" },
    { name: "Réalité reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Spirale brisée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur jeux d'argent ne fonctionne pas pour moi"],
};

const k_1032: ProtocolDetail = {
  protocolId: 1032,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Comportementales",
  description: "Pour patients (adolescents et adultes) avec usage problématique des jeux vidéo, plateformes de streaming. Travail de régulation, pas d'interdit moral, restauration d'autres dimensions de la vie.",
  indications: ["Usage excessif de jeux vidéo", "Sessions interminables de streaming/séries", "Retentissement sur le sommeil, le travail, les relations", "Patients souhaitant réguler"],
  contraindications: ["Trouble du jeu vidéo (gaming disorder OMS) sévère : cadre spécialisé"],
  programs: [{
    id: "principal",
    title: "Jeux vidéo et streaming — Régulation de l'usage",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Jeux vidéo et streaming — Régulation de l'usage",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients (adolescents et adultes) avec usage problématique des jeux vidéo, plateformes de streaming. Travail de régulation, pas d'interdit moral, restauration d'autres dimensions de la vie." }
      ],
    }],
  }],
  outils: [
    { name: "Conscience de l'usage et de ses fonctions", type: "Levier", icon: "🎯", desc: "Régulation jeux vidéo et streaming" },
    { name: "Identification des bénéfices recherchés", type: "Levier", icon: "🎯", desc: "Régulation jeux vidéo et streaming" },
    { name: "Restauration d'autres dimensions", type: "Levier", icon: "🎯", desc: "Régulation jeux vidéo et streaming" },
    { name: "Usage choisi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vie multiple", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur comportementales ne fonctionne pas pour moi"],
};

const k_1033: ProtocolDetail = {
  protocolId: 1033,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Comportementales",
  description: "Pour patients avec achats compulsifs (vêtements, gadgets, e-commerce). Travail sur les déclencheurs émotionnels, le bref soulagement vs vide post-achat, la régulation.",
  indications: ["Achats compulsifs récurrents", "Conséquences financières problématiques", "Vide ou culpabilité post-achat", "Désir de réguler"],
  contraindications: ["Trouble bipolaire (phase maniaque)", "Substitution au suivi spécialisé"],
  programs: [{
    id: "principal",
    title: "Achats compulsifs — Apaiser le besoin",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Achats compulsifs — Apaiser le besoin",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients avec achats compulsifs (vêtements, gadgets, e-commerce). Travail sur les déclencheurs émotionnels, le bref soulagement vs vide post-achat, la régulation." }
      ],
    }],
  }],
  outils: [
    { name: "Identification déclencheurs émotionnels", type: "Levier", icon: "🎯", desc: "Régulation achats compulsifs" },
    { name: "Délai imposé avant achat", type: "Levier", icon: "🎯", desc: "Régulation achats compulsifs" },
    { name: "Distinction besoin / désir compulsif", type: "Levier", icon: "🎯", desc: "Régulation achats compulsifs" },
    { name: "Pause avant achat", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Vide reconnu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur comportementales ne fonctionne pas pour moi"],
};

const k_1034: ProtocolDetail = {
  protocolId: 1034,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Affectives",
  description: "Pour patients en addiction affective (besoin compulsif de l'autre, dépendance amoureuse, incapacité à être seul, relations toxiques répétées). Travail sur la reconquête de soi, la sécurité intérieure, la sortie progressive.",
  indications: ["Dépendance affective marquée", "Relations toxiques récurrentes", "Incapacité à être seul", "Patients prêts à se questionner sur le pattern"],
  contraindications: ["Violence active dans le couple (cadre de protection d'abord)", "Trauma d'attachement sévère (cadre spécialisé)"],
  programs: [{
    id: "principal",
    title: "Addictions affectives — Sortir du lien dévorant",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Addictions affectives — Sortir du lien dévorant",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en addiction affective (besoin compulsif de l'autre, dépendance amoureuse, incapacité à être seul, relations toxiques répétées). Travail sur la reconquête de soi, la sécurité intérieure, la sortie progressive." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnexion à soi", type: "Levier", icon: "🎯", desc: "Travail sur addiction affective" },
    { name: "Sécurité intérieure indépendante", type: "Levier", icon: "🎯", desc: "Travail sur addiction affective" },
    { name: "Identification du pattern", type: "Levier", icon: "🎯", desc: "Travail sur addiction affective" },
    { name: "Soi retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sécurité intérieure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur affectives ne fonctionne pas pour moi"],
};

const k_1035: ProtocolDetail = {
  protocolId: 1035,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Affectives",
  description: "Pour patients codépendants (proches d'addicts, sauveurs chroniques, hyper-responsables d'autrui). Travail sur la limite, la responsabilité de l'autre, la reconquête de soi.",
  indications: ["Codépendance d'un proche addict", "Pattern de sauvetage chronique", "Hyper-responsabilité d'autrui", "Épuisement du rôle de soutien"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Codépendance — Cesser de sauver l'autre",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Codépendance — Cesser de sauver l'autre",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients codépendants (proches d'addicts, sauveurs chroniques, hyper-responsables d'autrui). Travail sur la limite, la responsabilité de l'autre, la reconquête de soi." }
      ],
    }],
  }],
  outils: [
    { name: "Distinction soi / autre", type: "Levier", icon: "🎯", desc: "Travail sur la codépendance" },
    { name: "Limite de la responsabilité", type: "Levier", icon: "🎯", desc: "Travail sur la codépendance" },
    { name: "Reconquête de soi", type: "Levier", icon: "🎯", desc: "Travail sur la codépendance" },
    { name: "Soi retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Limite reconnue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur affectives ne fonctionne pas pour moi"],
};

const k_1036: ProtocolDetail = {
  protocolId: 1036,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Sexuelles",
  description: "Pour patients en hypersexualité, addiction à la pornographie, compulsions sexuelles. En complément du suivi spécialisé. Travail sur la régulation, les déclencheurs, la reconstruction d'une sexualité intégrée.",
  indications: ["Addiction à la pornographie", "Compulsions sexuelles répétées", "Hypersexualité ressentie comme problématique", "Démarche d'arrêt en cours"],
  contraindications: ["Trauma sexuel non traité", "Substitution au cadre spécialisé", "Comportements illégaux ou prédateurs (cadre légal nécessaire)"],
  programs: [{
    id: "principal",
    title: "Hypersexualité et compulsions sexuelles — Apaiser le système",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Hypersexualité et compulsions sexuelles — Apaiser le système",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en hypersexualité, addiction à la pornographie, compulsions sexuelles. En complément du suivi spécialisé. Travail sur la régulation, les déclencheurs, la reconstruction d'une sexualité intégrée." }
      ],
    }],
  }],
  outils: [
    { name: "Identification fonctions du comportement", type: "Levier", icon: "🎯", desc: "Régulation hypersexualité" },
    { name: "Désamorçage circuit récompense", type: "Levier", icon: "🎯", desc: "Régulation hypersexualité" },
    { name: "Gestion des envies", type: "Levier", icon: "🎯", desc: "Régulation hypersexualité" },
    { name: "Soi retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Pulsion régulée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur sexuelles ne fonctionne pas pour moi"],
};

const k_1037: ProtocolDetail = {
  protocolId: 1037,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Cannabis",
  description: "Pour patients en démarche de réduction ou arrêt du cannabis. Travail sur la motivation, la reconquête des fonctions cognitives, la gestion des envies, la reconstruction.",
  indications: ["Consommation problématique de cannabis", "Démarche d'arrêt", "Soutien en réduction", "Consolidation d'arrêt récent"],
  contraindications: ["Trouble psychotique avéré ou comorbidité psychiatrique grave (cadre psychiatrique)", "Substitution au suivi addictologique"],
  programs: [{
    id: "principal",
    title: "Cannabis — Régulation ou abstinence",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Cannabis — Régulation ou abstinence",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en démarche de réduction ou arrêt du cannabis. Travail sur la motivation, la reconquête des fonctions cognitives, la gestion des envies, la reconstruction." }
      ],
    }],
  }],
  outils: [
    { name: "Motivation profonde", type: "Levier", icon: "🎯", desc: "Soutien arrêt/réduction cannabis" },
    { name: "Récupération des fonctions cognitives", type: "Levier", icon: "🎯", desc: "Soutien arrêt/réduction cannabis" },
    { name: "Gestion des envies", type: "Levier", icon: "🎯", desc: "Soutien arrêt/réduction cannabis" },
    { name: "Esprit clair", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Motivation retrouvée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur cannabis ne fonctionne pas pour moi"],
};

const k_1038: ProtocolDetail = {
  protocolId: 1038,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Comportementales",
  description: "Pour patients en addiction au travail (workaholisme), incapables de poser le travail, qui s'épuisent dans la performance. Travail sur les fonctions du surinvestissement, la restauration d'autres dimensions.",
  indications: ["Workaholisme reconnu", "Incapacité à poser le travail", "Pré-burn-out lié au surinvestissement", "Prise de conscience tardive"],
  contraindications: ["Burn-out constitué (arrêt nécessaire)"],
  programs: [{
    id: "principal",
    title: "Travail compulsif et workaholisme — Sortir du tout-travail",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Travail compulsif et workaholisme — Sortir du tout-travail",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en addiction au travail (workaholisme), incapables de poser le travail, qui s'épuisent dans la performance. Travail sur les fonctions du surinvestissement, la restauration d'autres dimensions." }
      ],
    }],
  }],
  outils: [
    { name: "Identification des fonctions du travail compulsif", type: "Levier", icon: "🎯", desc: "Travail sur le workaholisme" },
    { name: "Distinction valeur / production", type: "Levier", icon: "🎯", desc: "Travail sur le workaholisme" },
    { name: "Restauration d'autres dimensions", type: "Levier", icon: "🎯", desc: "Travail sur le workaholisme" },
    { name: "Vie multiple", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Valeur intrinsèque", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur comportementales ne fonctionne pas pour moi"],
};

const k_1039: ProtocolDetail = {
  protocolId: 1039,
  efficacite: "KIIKA",
  efficaciteSub: "Addictions / Prévention rechute",
  description: "Protocole transversal pour prévention de la rechute dans toute addiction. À utiliser en consolidation, après quelques semaines à mois d'abstinence. Travail spécifique sur l'identification précoce, les outils, le filet de sécurité.",
  indications: ["Toute addiction en phase de consolidation", "Patients en abstinence depuis quelques semaines à mois", "Risque de rechute identifié", "Démarche de prévention proactive"],
  contraindications: ["Rechute active en cours (autre approche)"],
  programs: [{
    id: "principal",
    title: "Prévention de la rechute — Tenir dans la durée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Prévention de la rechute — Tenir dans la durée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole transversal pour prévention de la rechute dans toute addiction. À utiliser en consolidation, après quelques semaines à mois d'abstinence. Travail spécifique sur l'identification précoce, les outils, le filet de sécurité." }
      ],
    }],
  }],
  outils: [
    { name: "Identification signaux précurseurs", type: "Levier", icon: "🎯", desc: "Prévention rechute toute addiction" },
    { name: "Outils déjà éprouvés", type: "Levier", icon: "🎯", desc: "Prévention rechute toute addiction" },
    { name: "Réseau de soutien activé", type: "Levier", icon: "🎯", desc: "Prévention rechute toute addiction" },
    { name: "Vigilance bienveillante", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Outils prêts", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur prévention rechute ne fonctionne pas pour moi"],
};

const k_1040: ProtocolDetail = {
  protocolId: 1040,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / Stabilisation",
  description: "Protocole INDISPENSABLE en première étape de tout travail trauma. Construit la stabilisation interne (lieu sûr, ressources, régulation) AVANT toute approche du contenu traumatique. Ne pas brûler cette étape.",
  indications: ["Patients en parcours trauma", "Première étape OBLIGATOIRE avant tout retour sur le contenu", "Patients en ESPT, complexe ou non", "Préalable à K-AVA-002 et suivants"],
  contraindications: ["Aucune (au contraire, à privilégier toujours)"],
  programs: [{
    id: "principal",
    title: "Stabilisation préalable au travail trauma — Construire le port d'attache",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Stabilisation préalable au travail trauma — Construire le port d'attache",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Protocole INDISPENSABLE en première étape de tout travail trauma. Construit la stabilisation interne (lieu sûr, ressources, régulation) AVANT toute approche du contenu traumatique. Ne pas brûler cette étape." }
      ],
    }],
  }],
  outils: [
    { name: "Lieu sûr profondément ancré", type: "Levier", icon: "🎯", desc: "Stabilisation préalable" },
    { name: "Ressources internes activées", type: "Levier", icon: "🎯", desc: "Stabilisation préalable" },
    { name: "Régulation par le souffle", type: "Levier", icon: "🎯", desc: "Stabilisation préalable" },
    { name: "Port d'attache", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Sécurité ressentie", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur stabilisation ne fonctionne pas pour moi"],
};

const k_1041: ProtocolDetail = {
  protocolId: 1041,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / Approche du contenu",
  description: "Pour approche progressive et sécurisée d'un contenu traumatique chez patient stabilisé. Utilisation de la double dissociation par l'écran de cinéma. UNIQUEMENT après stabilisation solide (K-AVA-001).",
  indications: ["ESPT avec stabilisation préalable solide", "Patient demandeur et préparé", "Trauma identifié et délimité", "Cadre thérapeutique structuré"],
  contraindications: ["Stabilisation insuffisante", "ESPT complexe sévère sans cadre psychothérapeutique global", "Dissociation pathologique active", "Comorbidités psychiatriques non stabilisées"],
  programs: [{
    id: "principal",
    title: "Approche du contenu traumatique — Écran de cinéma sécurisé",
    icon: "◑",
    duration: "60 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Approche du contenu traumatique — Écran de cinéma sécurisé",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour approche progressive et sécurisée d'un contenu traumatique chez patient stabilisé. Utilisation de la double dissociation par l'écran de cinéma. UNIQUEMENT après stabilisation solide (K-AVA-001)." }
      ],
    }],
  }],
  outils: [
    { name: "Double dissociation par l'écran", type: "Levier", icon: "🎯", desc: "Approche dissociée du trauma" },
    { name: "Maintien de la fenêtre de tolérance", type: "Levier", icon: "🎯", desc: "Approche dissociée du trauma" },
    { name: "Possibilité d'arrêt à tout moment", type: "Levier", icon: "🎯", desc: "Approche dissociée du trauma" },
    { name: "Distance protectrice", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Spectateur en sécurité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "60 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur approche du contenu ne fonctionne pas pour moi"],
};

const k_1042: ProtocolDetail = {
  protocolId: 1042,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / Intégration",
  description: "Pour patients ayant fait un travail d'approche du trauma. Travail d'intégration : faire de l'événement une part du récit sans qu'il occupe toute la vie, restaurer la continuité narrative.",
  indications: ["Après travail d'approche trauma réussi", "Patients commençant à vivre l'événement comme passé", "Restauration du récit de vie", "Phase de consolidation"],
  contraindications: ["Pas de stabilisation préalable", "Trauma encore actif sans travail d'approche"],
  programs: [{
    id: "principal",
    title: "Intégration post-trauma — Reprendre sa place dans le récit de vie",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Intégration post-trauma — Reprendre sa place dans le récit de vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ayant fait un travail d'approche du trauma. Travail d'intégration : faire de l'événement une part du récit sans qu'il occupe toute la vie, restaurer la continuité narrative." }
      ],
    }],
  }],
  outils: [
    { name: "Récit de vie restauré", type: "Levier", icon: "🎯", desc: "Intégration post-trauma" },
    { name: "Événement intégré sans dominer", type: "Levier", icon: "🎯", desc: "Intégration post-trauma" },
    { name: "Identité au-delà du trauma", type: "Levier", icon: "🎯", desc: "Intégration post-trauma" },
    { name: "Récit habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Trauma intégré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur intégration ne fonctionne pas pour moi"],
};

const k_1043: ProtocolDetail = {
  protocolId: 1043,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / Flashbacks",
  description: "Pour patients en ESPT avec flashbacks, reviviscences intrusives, cauchemars répétitifs. Outil d'auto-régulation immédiate. À enseigner dans le cadre d'un travail trauma plus large.",
  indications: ["ESPT avec flashbacks fréquents", "Reviviscences intrusives diurnes", "Cauchemars répétitifs", "Outil d'urgence à mobiliser entre séances"],
  contraindications: ["Substitution au cadre psychothérapeutique global"],
  programs: [{
    id: "principal",
    title: "Flashbacks et reviviscences — Sortir de la boucle intrusive",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Flashbacks et reviviscences — Sortir de la boucle intrusive",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en ESPT avec flashbacks, reviviscences intrusives, cauchemars répétitifs. Outil d'auto-régulation immédiate. À enseigner dans le cadre d'un travail trauma plus large." }
      ],
    }],
  }],
  outils: [
    { name: "Ancrage immédiat dans le présent", type: "Levier", icon: "🎯", desc: "Outil de gestion des flashbacks" },
    { name: "Différenciation passé / présent", type: "Levier", icon: "🎯", desc: "Outil de gestion des flashbacks" },
    { name: "5 sens activés", type: "Levier", icon: "🎯", desc: "Outil de gestion des flashbacks" },
    { name: "Présent ancré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Passé identifié comme passé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur flashbacks ne fonctionne pas pour moi"],
};

const k_1044: ProtocolDetail = {
  protocolId: 1044,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / ESPT complexe",
  description: "Pour ESPT complexe (traumas répétés ou précoces). Approche par les parts dissociées (modèle parts works/IFS-compatible). UNIQUEMENT en cadre psychothérapeutique structuré, formation indispensable.",
  indications: ["ESPT complexe (DSM-5 ou CIM-11)", "Traumas répétés ou précoces", "Patient en cadre psychothérapeutique structuré", "Travail sur les parts dissociées identifiées"],
  contraindications: ["TDI (Trouble Dissociatif de l'Identité) — cadre encore plus spécialisé", "Stabilisation insuffisante", "Phase aiguë"],
  programs: [{
    id: "principal",
    title: "ESPT complexe — Travail sur les parts dissociées",
    icon: "◑",
    duration: "60 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — ESPT complexe — Travail sur les parts dissociées",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour ESPT complexe (traumas répétés ou précoces). Approche par les parts dissociées (modèle parts works/IFS-compatible). UNIQUEMENT en cadre psychothérapeutique structuré, formation indispensable." }
      ],
    }],
  }],
  outils: [
    { name: "Identification des parts", type: "Levier", icon: "🎯", desc: "Travail par les parts (modèle Internal Family Systems compatible)" },
    { name: "Communication interne", type: "Levier", icon: "🎯", desc: "Travail par les parts (modèle Internal Family Systems compatible)" },
    { name: "Soin des parts blessées", type: "Levier", icon: "🎯", desc: "Travail par les parts (modèle Internal Family Systems compatible)" },
    { name: "Parts reconnues", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Self qui guide", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "60 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur espt complexe ne fonctionne pas pour moi"],
};

const k_1045: ProtocolDetail = {
  protocolId: 1045,
  efficacite: "KIIKA",
  efficaciteSub: "Trauma / Phobie de soi",
  description: "Pour patients ayant peur de leurs propres ressentis, émotions, parts intérieures (phobie d'attachement à soi). Travail délicat de réconciliation avec les dimensions de soi rejetées.",
  indications: ["Évitement de ses propres émotions", "Peur de certaines parts internes", "Patients qui ne supportent pas leur intériorité", "Souvent conséquence d'ESPT complexe"],
  contraindications: ["Phase aiguë", "Stabilisation insuffisante"],
  programs: [{
    id: "principal",
    title: "Phobie de soi — Quand certaines parts intérieures font peur",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Phobie de soi — Quand certaines parts intérieures font peur",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients ayant peur de leurs propres ressentis, émotions, parts intérieures (phobie d'attachement à soi). Travail délicat de réconciliation avec les dimensions de soi rejetées." }
      ],
    }],
  }],
  outils: [
    { name: "Approche très progressive", type: "Levier", icon: "🎯", desc: "Phobie de soi" },
    { name: "Lieu sûr renforcé", type: "Levier", icon: "🎯", desc: "Phobie de soi" },
    { name: "Compagnon de route intérieur", type: "Levier", icon: "🎯", desc: "Phobie de soi" },
    { name: "Soi apprivoisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence à soi possible", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur phobie de soi ne fonctionne pas pour moi"],
};

const k_1046: ProtocolDetail = {
  protocolId: 1046,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Dépression",
  description: "Pour patients en dépression majeure avec suivi médical et antidépresseur. L'hypnose comme complément au traitement, pas substitut. Travail de soutien à la traversée, restauration progressive.",
  indications: ["Dépression majeure traitée médicalement", "Soutien complémentaire au traitement", "Phase de récupération", "Prévention rechute en post-épisode"],
  contraindications: ["Substitution au traitement antidépresseur", "Risque suicidaire actif (urgence psychiatrique)", "Mélancolie sévère"],
  programs: [{
    id: "principal",
    title: "Dépression majeure en complément — Soutien à la traversée",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dépression majeure en complément — Soutien à la traversée",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en dépression majeure avec suivi médical et antidépresseur. L'hypnose comme complément au traitement, pas substitut. Travail de soutien à la traversée, restauration progressive." }
      ],
    }],
  }],
  outils: [
    { name: "Soutien à la traversée", type: "Levier", icon: "🎯", desc: "Soutien dépression majeure" },
    { name: "Réveil progressif des ressources", type: "Levier", icon: "🎯", desc: "Soutien dépression majeure" },
    { name: "Reconnexion à la vie", type: "Levier", icon: "🎯", desc: "Soutien dépression majeure" },
    { name: "Traversée soutenue", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lumière qui revient", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur dépression ne fonctionne pas pour moi"],
};

const k_1047: ProtocolDetail = {
  protocolId: 1047,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Anxiété",
  description: "Pour Trouble Anxieux Généralisé sévère, en complément du suivi médical et possible traitement. Approche d'apaisement profond, restauration de la sécurité corporelle de base.",
  indications: ["TAG sévère diagnostiqué", "Suivi médical en cours", "Patients épuisés par l'anxiété chronique", "Complément au traitement"],
  contraindications: ["Substitution au traitement", "Comorbidité psychiatrique grave non stabilisée"],
  programs: [{
    id: "principal",
    title: "TAG sévère — Apaisement profond",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — TAG sévère — Apaisement profond",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour Trouble Anxieux Généralisé sévère, en complément du suivi médical et possible traitement. Approche d'apaisement profond, restauration de la sécurité corporelle de base." }
      ],
    }],
  }],
  outils: [
    { name: "Restauration de la sécurité corporelle", type: "Levier", icon: "🎯", desc: "Apaisement profond TAG sévère" },
    { name: "Régulation parasympathique", type: "Levier", icon: "🎯", desc: "Apaisement profond TAG sévère" },
    { name: "Désinvestissement de l'anticipation", type: "Levier", icon: "🎯", desc: "Apaisement profond TAG sévère" },
    { name: "Sécurité corporelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent suffisant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur anxiété ne fonctionne pas pour moi"],
};

const k_1048: ProtocolDetail = {
  protocolId: 1048,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / TOC",
  description: "Pour TOC sévère en complément du suivi spécialisé (TCC, traitement). Pas substitut. Travail de soutien, désinvestissement attentionnel des obsessions.",
  indications: ["TOC sévère en suivi TCC", "Soutien complémentaire", "Phases de difficulté avec rituels"],
  contraindications: ["Substitution à la TCC ou au traitement", "Phase aiguë sans cadre"],
  programs: [{
    id: "principal",
    title: "TOC sévère en complément — Apaiser le système",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — TOC sévère en complément — Apaiser le système",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour TOC sévère en complément du suivi spécialisé (TCC, traitement). Pas substitut. Travail de soutien, désinvestissement attentionnel des obsessions." }
      ],
    }],
  }],
  outils: [
    { name: "Désinvestissement attentionnel", type: "Levier", icon: "🎯", desc: "Soutien TOC sévère" },
    { name: "Acceptation pensée intrusive", type: "Levier", icon: "🎯", desc: "Soutien TOC sévère" },
    { name: "Non-réponse au rituel", type: "Levier", icon: "🎯", desc: "Soutien TOC sévère" },
    { name: "Pensée qui passe", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Rituel non nourri", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur toc ne fonctionne pas pour moi"],
};

const k_1049: ProtocolDetail = {
  protocolId: 1049,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Phobie sociale",
  description: "Pour phobie sociale sévère en complément TCC (avec exposition). Soutien à la traversée des expositions, restauration de la sécurité dans le regard de l'autre.",
  indications: ["Phobie sociale sévère en TCC", "Soutien aux expositions progressives", "Difficulté majeure dans la vie sociale"],
  contraindications: ["Substitution au cadre TCC", "Phase aiguë sans cadre"],
  programs: [{
    id: "principal",
    title: "Phobie sociale sévère — Soutien à l'exposition",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Phobie sociale sévère — Soutien à l'exposition",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour phobie sociale sévère en complément TCC (avec exposition). Soutien à la traversée des expositions, restauration de la sécurité dans le regard de l'autre." }
      ],
    }],
  }],
  outils: [
    { name: "Désamorçage de la peur du regard", type: "Levier", icon: "🎯", desc: "Soutien phobie sociale sévère" },
    { name: "Sécurité intérieure", type: "Levier", icon: "🎯", desc: "Soutien phobie sociale sévère" },
    { name: "Soutien aux expositions", type: "Levier", icon: "🎯", desc: "Soutien phobie sociale sévère" },
    { name: "Présent à soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Regard juste", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur phobie sociale ne fonctionne pas pour moi"],
};

const k_1050: ProtocolDetail = {
  protocolId: 1050,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Bipolarité",
  description: "Pour patients bipolaires en phase de stabilité, en complément du suivi psychiatrique. Travail de prévention rechute, gestion du stress, hygiène de vie. JAMAIS en phase aiguë.",
  indications: ["Bipolarité en stabilité (euthymie)", "Suivi psychiatrique régulier", "Prévention de rechute", "Gestion du stress complémentaire"],
  contraindications: ["Phase maniaque ou hypomaniaque (NE PAS travailler)", "Phase dépressive aiguë sévère (cadre médical avant)", "Substitution au traitement"],
  programs: [{
    id: "principal",
    title: "Trouble bipolaire — Hypnose en stabilité",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Trouble bipolaire — Hypnose en stabilité",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients bipolaires en phase de stabilité, en complément du suivi psychiatrique. Travail de prévention rechute, gestion du stress, hygiène de vie. JAMAIS en phase aiguë." }
      ],
    }],
  }],
  outils: [
    { name: "Soutien à la stabilité", type: "Levier", icon: "🎯", desc: "Hypnose en bipolarité stabilisée" },
    { name: "Reconnaissance des signaux précoces", type: "Levier", icon: "🎯", desc: "Hypnose en bipolarité stabilisée" },
    { name: "Hygiène de vie", type: "Levier", icon: "🎯", desc: "Hypnose en bipolarité stabilisée" },
    { name: "Stabilité préservée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Signaux reconnus", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur bipolarité ne fonctionne pas pour moi"],
};

const k_1051: ProtocolDetail = {
  protocolId: 1051,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Borderline",
  description: "Pour personnalités borderline en suivi psychothérapeutique structuré (DBT, MBT, TFP). Hypnose en complément pour régulation émotionnelle, stabilisation, gestion des crises non aiguës.",
  indications: ["Trouble borderline en suivi psychothérapeutique", "Apprentissage de la régulation émotionnelle", "Soutien entre les séances de psychothérapie"],
  contraindications: ["Sans cadre psychothérapeutique structuré", "Crise aiguë (urgence)", "Idéation suicidaire active"],
  programs: [{
    id: "principal",
    title: "Trouble borderline — Régulation émotionnelle complémentaire",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Trouble borderline — Régulation émotionnelle complémentaire",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour personnalités borderline en suivi psychothérapeutique structuré (DBT, MBT, TFP). Hypnose en complément pour régulation émotionnelle, stabilisation, gestion des crises non aiguës." }
      ],
    }],
  }],
  outils: [
    { name: "Tolérance à la détresse", type: "Levier", icon: "🎯", desc: "Régulation borderline" },
    { name: "Régulation émotionnelle", type: "Levier", icon: "🎯", desc: "Régulation borderline" },
    { name: "Pleine conscience", type: "Levier", icon: "🎯", desc: "Régulation borderline" },
    { name: "Vague qui passe", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soi qui demeure", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur borderline ne fonctionne pas pour moi"],
};

const k_1052: ProtocolDetail = {
  protocolId: 1052,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / TDI",
  description: "Pour patients atteints de TDI en suivi spécialisé. Approche TRÈS prudente, présence sécurisante, pas de tentative d'unification ou de hiérarchisation des parts. Cadre spécialisé absolument indispensable.",
  indications: ["TDI diagnostiqué en cadre spécialisé", "Présence soutenante en complément", "Stabilisation entre séances spécialisées"],
  contraindications: ["Sans cadre spécialisé TDI", "Diagnostic incertain", "Tentative d'unification ou de fusion (CONTRE-INDIQUÉ)"],
  programs: [{
    id: "principal",
    title: "Trouble dissociatif identitaire (TDI) — Présence respectueuse",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Trouble dissociatif identitaire (TDI) — Présence respectueuse",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients atteints de TDI en suivi spécialisé. Approche TRÈS prudente, présence sécurisante, pas de tentative d'unification ou de hiérarchisation des parts. Cadre spécialisé absolument indispensable." }
      ],
    }],
  }],
  outils: [
    { name: "Présence sécurisante pour le système", type: "Levier", icon: "🎯", desc: "Soutien TDI" },
    { name: "Lieu sûr partagé entre parts", type: "Levier", icon: "🎯", desc: "Soutien TDI" },
    { name: "Communication interne respectueuse", type: "Levier", icon: "🎯", desc: "Soutien TDI" },
    { name: "Système respecté", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence sécurisante", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur tdi ne fonctionne pas pour moi"],
};

const k_1053: ProtocolDetail = {
  protocolId: 1053,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Suicide",
  description: "Pour patients avec idéations suicidaires chroniques HORS PHASE DE CRISE, en suivi psychiatrique. Travail de soutien, restauration du lien à la vie, identification des protecteurs. JAMAIS en crise.",
  indications: ["Idéations suicidaires chroniques hors crise", "Suivi psychiatrique régulier", "Patients ayant survécu à des tentatives passées", "Restauration progressive du lien à la vie"],
  contraindications: ["CRISE SUICIDAIRE ACTIVE (urgence absolue)", "Sans suivi psychiatrique", "Plan suicidaire élaboré (urgence)"],
  programs: [{
    id: "principal",
    title: "Idéations suicidaires hors crise — Soutien et lien à la vie",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Idéations suicidaires hors crise — Soutien et lien à la vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients avec idéations suicidaires chroniques HORS PHASE DE CRISE, en suivi psychiatrique. Travail de soutien, restauration du lien à la vie, identification des protecteurs. JAMAIS en crise." }
      ],
    }],
  }],
  outils: [
    { name: "Lien à la vie restauré", type: "Levier", icon: "🎯", desc: "Soutien hors crise suicidaire" },
    { name: "Identification des protecteurs", type: "Levier", icon: "🎯", desc: "Soutien hors crise suicidaire" },
    { name: "Contrats de sécurité", type: "Levier", icon: "🎯", desc: "Soutien hors crise suicidaire" },
    { name: "Vie qui appelle", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Protecteurs identifiés", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur suicide ne fonctionne pas pour moi"],
};

const k_1054: ProtocolDetail = {
  protocolId: 1054,
  efficacite: "KIIKA",
  efficaciteSub: "Troubles complexes / Schizophrénie",
  description: "Pour patients schizophrènes en rémission stabilisée, en suivi psychiatrique. Hypnose comme soutien à la qualité de vie, gestion du stress, hygiène. JAMAIS en phase aiguë, JAMAIS approfondie.",
  indications: ["Schizophrénie stabilisée avec traitement", "Suivi psychiatrique régulier", "Soutien à la qualité de vie", "Gestion du stress en complément"],
  contraindications: ["Phase aiguë (NE JAMAIS travailler)", "Hallucinations actives", "Idéations délirantes actives", "Hypnose profonde (RISQUE majeur)"],
  programs: [{
    id: "principal",
    title: "Schizophrénie en rémission — Soutien à la qualité de vie",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Schizophrénie en rémission — Soutien à la qualité de vie",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients schizophrènes en rémission stabilisée, en suivi psychiatrique. Hypnose comme soutien à la qualité de vie, gestion du stress, hygiène. JAMAIS en phase aiguë, JAMAIS approfondie." }
      ],
    }],
  }],
  outils: [
    { name: "Présence ancrée dans le réel", type: "Levier", icon: "🎯", desc: "Soutien schizophrénie en rémission" },
    { name: "Régulation du stress", type: "Levier", icon: "🎯", desc: "Soutien schizophrénie en rémission" },
    { name: "Hygiène de vie", type: "Levier", icon: "🎯", desc: "Soutien schizophrénie en rémission" },
    { name: "Réel ancré", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Stress régulé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "1/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur schizophrénie ne fonctionne pas pour moi"],
};

const k_1055: ProtocolDetail = {
  protocolId: 1055,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Annonce",
  description: "Pour patients confrontés récemment à un diagnostic de cancer (jours à semaines après l'annonce). Travail d'accompagnement du choc, mobilisation des ressources pour la suite, sans précipiter aucune étape.",
  indications: ["Annonce récente de cancer", "Patient en sidération ou détresse aiguë", "Avant le démarrage des traitements", "Premiers temps post-annonce"],
  contraindications: ["Décompensation psychiatrique majeure (cadre psychiatrique)"],
  programs: [{
    id: "principal",
    title: "Annonce diagnostique en cancérologie — Traverser le choc",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Annonce diagnostique en cancérologie — Traverser le choc",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés récemment à un diagnostic de cancer (jours à semaines après l'annonce). Travail d'accompagnement du choc, mobilisation des ressources pour la suite, sans précipiter aucune étape." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation du choc", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce diagnostique" },
    { name: "Stabilisation immédiate", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce diagnostique" },
    { name: "Mobilisation des ressources", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce diagnostique" },
    { name: "Choc accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent stabilisé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / annonce ne fonctionne pas pour moi"],
};

const k_1056: ProtocolDetail = {
  protocolId: 1056,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Acte invasif",
  description: "Pour préparation à un acte médical lourd : chirurgie d'exérèse oncologique, biopsie complexe, ponction médullaire, mise en place de chambre implantable. Travail spécifique d'apaisement, de visualisation positive de la guérison post-opératoire.",
  indications: ["Préparation chirurgie oncologique programmée", "Actes invasifs anxiogènes", "Patients en pré-opératoire de procédures lourdes"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Préparation à un acte invasif lourd — Chirurgie majeure, prélèvement",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Préparation à un acte invasif lourd — Chirurgie majeure, prélèvement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour préparation à un acte médical lourd : chirurgie d'exérèse oncologique, biopsie complexe, ponction médullaire, mise en place de chambre implantable. Travail spécifique d'apaisement, de visualisation positive de la guérison post-opératoire." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement préopératoire intense", type: "Levier", icon: "🎯", desc: "Préparation acte invasif lourd" },
    { name: "Confiance dans l'équipe", type: "Levier", icon: "🎯", desc: "Préparation acte invasif lourd" },
    { name: "Visualisation guérison post-op", type: "Levier", icon: "🎯", desc: "Préparation acte invasif lourd" },
    { name: "Soin reçu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps qui guérit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / acte invasif ne fonctionne pas pour moi"],
};

const k_1057: ProtocolDetail = {
  protocolId: 1057,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Chimiothérapie",
  description: "Pour patients en cycles de chimiothérapie. Travail spécifique sur la préparation à chaque cycle, la gestion des effets secondaires (nausées surtout, fatigue), le maintien de la qualité de vie pendant le traitement.",
  indications: ["Cycles de chimiothérapie en cours ou imminents", "Nausées chimio-induites", "Fatigue de chimio", "Anxiété anticipatoire avant chaque cycle"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Chimiothérapie — Préparation et accompagnement des cycles",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Chimiothérapie — Préparation et accompagnement des cycles",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en cycles de chimiothérapie. Travail spécifique sur la préparation à chaque cycle, la gestion des effets secondaires (nausées surtout, fatigue), le maintien de la qualité de vie pendant le traitement." }
      ],
    }],
  }],
  outils: [
    { name: "Préparation à chaque cycle", type: "Levier", icon: "🎯", desc: "Accompagnement chimiothérapie" },
    { name: "Gestion des nausées (geste-ancre)", type: "Levier", icon: "🎯", desc: "Accompagnement chimiothérapie" },
    { name: "Préservation de la qualité de vie", type: "Levier", icon: "🎯", desc: "Accompagnement chimiothérapie" },
    { name: "Cycle traversé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Corps qui reçoit", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / chimiothérapie ne fonctionne pas pour moi"],
};

const k_1058: ProtocolDetail = {
  protocolId: 1058,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Radiothérapie",
  description: "Pour patients en radiothérapie. Travail sur la présence pendant les séances quotidiennes (immobilité requise, isolement temporaire), gestion de la fatigue, présence pleine.",
  indications: ["Radiothérapie en cours", "Difficulté avec l'immobilité requise", "Anxiété pendant les séances", "Fatigue radio-induite"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Radiothérapie — Présence pendant les séances",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Radiothérapie — Présence pendant les séances",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en radiothérapie. Travail sur la présence pendant les séances quotidiennes (immobilité requise, isolement temporaire), gestion de la fatigue, présence pleine." }
      ],
    }],
  }],
  outils: [
    { name: "Présence pendant immobilité", type: "Levier", icon: "🎯", desc: "Accompagnement radiothérapie" },
    { name: "Lieu sûr accessible en quelques secondes", type: "Levier", icon: "🎯", desc: "Accompagnement radiothérapie" },
    { name: "Désamorçage anxiété machine", type: "Levier", icon: "🎯", desc: "Accompagnement radiothérapie" },
    { name: "Immobilité habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Soin reçu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / radiothérapie ne fonctionne pas pour moi"],
};

const k_1059: ProtocolDetail = {
  protocolId: 1059,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Douleur",
  description: "Pour douleurs cancéreuses complexes (douleurs neuropathiques, douleurs résistant aux antalgiques, douleurs en fin de vie). Approche complémentaire au traitement antalgique médical, jamais en substitution.",
  indications: ["Douleurs cancéreuses complexes", "Patient sous traitement antalgique en complément", "Soins palliatifs en cours", "Recherche d'apaisement complémentaire"],
  contraindications: ["Substitution au traitement médical antalgique", "Stabilisation insuffisante en fin de vie"],
  programs: [{
    id: "principal",
    title: "Douleur cancéreuse complexe — Approche multimodale",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Douleur cancéreuse complexe — Approche multimodale",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour douleurs cancéreuses complexes (douleurs neuropathiques, douleurs résistant aux antalgiques, douleurs en fin de vie). Approche complémentaire au traitement antalgique médical, jamais en substitution." }
      ],
    }],
  }],
  outils: [
    { name: "Imagerie de transformation locale", type: "Levier", icon: "🎯", desc: "Approche douleur cancéreuse complexe" },
    { name: "Apaisement complémentaire", type: "Levier", icon: "🎯", desc: "Approche douleur cancéreuse complexe" },
    { name: "Lieu sûr accessible", type: "Levier", icon: "🎯", desc: "Approche douleur cancéreuse complexe" },
    { name: "Douleur transformée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présent habitable", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / douleur ne fonctionne pas pour moi"],
};

const k_1060: ProtocolDetail = {
  protocolId: 1060,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Fatigue",
  description: "Pour fatigue oncologique persistante (pendant ou après traitements). Travail sur l'acceptation de la limite, la préservation des forces, la qualité du repos, le maintien de moments de vie pleine.",
  indications: ["Fatigue chronique liée au cancer ou aux traitements", "Patients en post-traitement avec fatigue persistante", "Difficulté à accepter la limite imposée"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Fatigue oncologique chronique — Préserver les forces",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Fatigue oncologique chronique — Préserver les forces",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour fatigue oncologique persistante (pendant ou après traitements). Travail sur l'acceptation de la limite, la préservation des forces, la qualité du repos, le maintien de moments de vie pleine." }
      ],
    }],
  }],
  outils: [
    { name: "Acceptation de la limite", type: "Levier", icon: "🎯", desc: "Gestion fatigue oncologique" },
    { name: "Qualité du repos", type: "Levier", icon: "🎯", desc: "Gestion fatigue oncologique" },
    { name: "Hiérarchisation des activités", type: "Levier", icon: "🎯", desc: "Gestion fatigue oncologique" },
    { name: "Énergie respectée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Limite acceptée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / fatigue ne fonctionne pas pour moi"],
};

const k_1061: ProtocolDetail = {
  protocolId: 1061,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Récidive",
  description: "Pour patients confrontés à une récidive de cancer, à une aggravation, ou à un changement de pronostic. Travail sur la traversée de ce nouveau choc, distinct du choc initial.",
  indications: ["Annonce de récidive", "Aggravation diagnostique", "Changement de pronostic", "Patients précédemment en rémission"],
  contraindications: ["Décompensation aiguë (cadre psychiatrique)"],
  programs: [{
    id: "principal",
    title: "Récidive ou aggravation — Faire face à un nouveau choc",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Récidive ou aggravation — Faire face à un nouveau choc",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients confrontés à une récidive de cancer, à une aggravation, ou à un changement de pronostic. Travail sur la traversée de ce nouveau choc, distinct du choc initial." }
      ],
    }],
  }],
  outils: [
    { name: "Légitimation de l'effondrement", type: "Levier", icon: "🎯", desc: "Accompagnement choc de récidive" },
    { name: "Distinction du premier choc", type: "Levier", icon: "🎯", desc: "Accompagnement choc de récidive" },
    { name: "Ressources accumulées", type: "Levier", icon: "🎯", desc: "Accompagnement choc de récidive" },
    { name: "Choc traversé à nouveau", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Ressources éprouvées", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / récidive ne fonctionne pas pour moi"],
};

const k_1062: ProtocolDetail = {
  protocolId: 1062,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Oncologie / Incertitude",
  description: "Pour patients en cancérologie habitant une longue zone d'incertitude (attente de résultats, traitements expérimentaux, pronostic flou). Travail sur l'habitation de l'incertitude sans l'écraser ni s'y résigner.",
  indications: ["Périodes d'attente longues en oncologie", "Pronostic incertain", "Traitements expérimentaux", "Patients usés par l'incertitude"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Espoir et incertitude — Habiter l'entre-deux",
    icon: "◑",
    duration: "45 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Espoir et incertitude — Habiter l'entre-deux",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en cancérologie habitant une longue zone d'incertitude (attente de résultats, traitements expérimentaux, pronostic flou). Travail sur l'habitation de l'incertitude sans l'écraser ni s'y résigner." }
      ],
    }],
  }],
  outils: [
    { name: "Reconnaissance de l'incertitude", type: "Levier", icon: "🎯", desc: "Habitation de l'incertitude oncologique" },
    { name: "Présence dans le non-savoir", type: "Levier", icon: "🎯", desc: "Habitation de l'incertitude oncologique" },
    { name: "Espoir sans certitude", type: "Levier", icon: "🎯", desc: "Habitation de l'incertitude oncologique" },
    { name: "Incertitude habitée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Espoir libre", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "45 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur oncologie / incertitude ne fonctionne pas pour moi"],
};

const k_1063: ProtocolDetail = {
  protocolId: 1063,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Soins palliatifs",
  description: "Pour patients en soins palliatifs (pronostic vital engagé). Travail spécifique d'accompagnement, présence, apaisement, dimension existentielle. Adaptation à l'état du patient.",
  indications: ["Patients en soins palliatifs", "Pronostic vital engagé court ou moyen terme", "Patients lucides demandant accompagnement"],
  contraindications: ["État cognitif altéré majeur (adapter)", "Sans coordination équipe palliative"],
  programs: [{
    id: "principal",
    title: "Soins palliatifs — Présence et apaisement",
    icon: "◑",
    duration: "Variable selon état (15-45 min) min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Soins palliatifs — Présence et apaisement",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en soins palliatifs (pronostic vital engagé). Travail spécifique d'accompagnement, présence, apaisement, dimension existentielle. Adaptation à l'état du patient." }
      ],
    }],
  }],
  outils: [
    { name: "Présence respectueuse", type: "Levier", icon: "🎯", desc: "Accompagnement soins palliatifs" },
    { name: "Apaisement physique et émotionnel", type: "Levier", icon: "🎯", desc: "Accompagnement soins palliatifs" },
    { name: "Dimension existentielle accueillie", type: "Levier", icon: "🎯", desc: "Accompagnement soins palliatifs" },
    { name: "Présence offerte", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Apaisement reçu", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "Variable selon état (15-45 min) min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur soins palliatifs ne fonctionne pas pour moi"],
};

const k_1064: ProtocolDetail = {
  protocolId: 1064,
  efficacite: "KIIKA",
  efficaciteSub: "Avancé / Soins palliatifs / Proches",
  description: "Pour proches d'une personne en soins palliatifs ou en fin de vie. Soutien spécifique : accompagner sans s'épuiser, dire l'essentiel, traverser l'accompagnement ultime.",
  indications: ["Proches accompagnant un mourant", "Aidants en soins palliatifs", "Préparation au décès imminent", "Soutien des aidants"],
  contraindications: ["Aucune"],
  programs: [{
    id: "principal",
    title: "Questions de fin de vie pour les proches — Soutien aux accompagnants",
    icon: "◑",
    duration: "50 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Questions de fin de vie pour les proches — Soutien aux accompagnants",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour proches d'une personne en soins palliatifs ou en fin de vie. Soutien spécifique : accompagner sans s'épuiser, dire l'essentiel, traverser l'accompagnement ultime." }
      ],
    }],
  }],
  outils: [
    { name: "Préservation énergétique de l'aidant", type: "Levier", icon: "🎯", desc: "Soutien aux proches en soins palliatifs" },
    { name: "Présence qualitative", type: "Levier", icon: "🎯", desc: "Soutien aux proches en soins palliatifs" },
    { name: "Paroles essentielles possibles", type: "Levier", icon: "🎯", desc: "Soutien aux proches en soins palliatifs" },
    { name: "Aidant ménagé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence offerte", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "50 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur soins palliatifs / proches ne fonctionne pas pour moi"],
};

const k_1065: ProtocolDetail = {
  protocolId: 1065,
  efficacite: "KIIKA",
  efficaciteSub: "Neurodégénératif / Adjuvant",
  description: "Pour patients en début de maladie neurodégénérative (Alzheimer, Parkinson, SLA) gardant des capacités cognitives et de communication. Travail sur l'apaisement de l'anxiété, la qualité de vie, la dimension de sens.",
  indications: ["Alzheimer débutant (MMS > 18)", "Parkinson en début ou phase moyenne", "SLA en phase initiale", "Patient capable de communication et de coopération"],
  contraindications: ["Démence avancée (compréhension altérée)", "Phase confusionnelle aiguë", "Praticien sans connaissance du tableau"],
  programs: [{
    id: "principal",
    title: "Maladies neurodégénératives — Accompagner Alzheimer et Parkinson débutants",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Maladies neurodégénératives — Accompagner Alzheimer et Parkinson débutants",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en début de maladie neurodégénérative (Alzheimer, Parkinson, SLA) gardant des capacités cognitives et de communication. Travail sur l'apaisement de l'anxiété, la qualité de vie, la dimension de sens." }
      ],
    }],
  }],
  outils: [
    { name: "Apaisement de l'anxiété de la maladie", type: "Levier", icon: "🎯", desc: "Soutien aux maladies neurodégénératives" },
    { name: "Présence à ce qui demeure", type: "Levier", icon: "🎯", desc: "Soutien aux maladies neurodégénératives" },
    { name: "Qualité de vie soutenue", type: "Levier", icon: "🎯", desc: "Soutien aux maladies neurodégénératives" },
    { name: "Présent habité", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Capacités présentes", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur adjuvant ne fonctionne pas pour moi"],
};

const k_1066: ProtocolDetail = {
  protocolId: 1066,
  efficacite: "KIIKA",
  efficaciteSub: "Soins intensifs / Coma",
  description: "Pour patients en sortie de coma, en soins intensifs, en post-réanimation. Travail de présence rassurante, d'orientation, de récupération psychique. Coordination avec équipe de réa.",
  indications: ["Sortie de coma récente", "Patient en soins intensifs", "Post-réanimation avec séquelles psychiques", "Confusion post-réveil"],
  contraindications: ["Patient inconscient (autre approche)", "Pathologie aiguë instable", "Sans accord équipe médicale"],
  programs: [{
    id: "principal",
    title: "Réveil de coma et soins intensifs — Présence à l'émergence",
    icon: "◑",
    duration: "25 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Réveil de coma et soins intensifs — Présence à l'émergence",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en sortie de coma, en soins intensifs, en post-réanimation. Travail de présence rassurante, d'orientation, de récupération psychique. Coordination avec équipe de réa." }
      ],
    }],
  }],
  outils: [
    { name: "Présence rassurante", type: "Levier", icon: "🎯", desc: "Accompagnement post-coma" },
    { name: "Orientation temporelle et spatiale", type: "Levier", icon: "🎯", desc: "Accompagnement post-coma" },
    { name: "Lien retrouvé", type: "Levier", icon: "🎯", desc: "Accompagnement post-coma" },
    { name: "Présent retrouvé", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Lien rétabli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "25 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "1/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur coma ne fonctionne pas pour moi"],
};

const k_1067: ProtocolDetail = {
  protocolId: 1067,
  efficacite: "KIIKA",
  efficaciteSub: "Annonce / Pronostic",
  description: "Pour patients venant de recevoir une annonce de mauvais pronostic ou récidive grave. Travail d'accompagnement du choc initial, sans précipiter le travail de deuil ni nier la réalité.",
  indications: ["Annonce récente de pronostic réservé", "Récidive avec aggravation", "Patient en état de sidération", "Soutien immédiat à l'annonce"],
  contraindications: ["Annonce non encore comprise (pas de consentement)", "Patient en déni protecteur (laisser le temps)", "Crise psychiatrique aiguë"],
  programs: [{
    id: "principal",
    title: "Annonce de mauvais pronostic — Accompagner le passage",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Annonce de mauvais pronostic — Accompagner le passage",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients venant de recevoir une annonce de mauvais pronostic ou récidive grave. Travail d'accompagnement du choc initial, sans précipiter le travail de deuil ni nier la réalité." }
      ],
    }],
  }],
  outils: [
    { name: "Accueil du choc sans précipiter", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce mauvais pronostic" },
    { name: "Lieu sûr stabilisé", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce mauvais pronostic" },
    { name: "Présence sans solution", type: "Levier", icon: "🎯", desc: "Accompagnement post-annonce mauvais pronostic" },
    { name: "Choc accueilli", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Présence offerte", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur pronostic ne fonctionne pas pour moi"],
};

const k_1068: ProtocolDetail = {
  protocolId: 1068,
  efficacite: "KIIKA",
  efficaciteSub: "Soins palliatifs / Spiritualité",
  description: "Pour patients en soins palliatifs avancés ouverts à une dimension spirituelle (religieuse ou non). Travail sur le sens, la traversée, l'apaisement existentiel. Très KIIKA dans son esprit.",
  indications: ["Patient en soins palliatifs", "Demande explicite de dimension spirituelle", "Questions existentielles vives", "Ouverture à une dimension transcendante"],
  contraindications: ["Sans demande du patient (jamais imposer)", "Patient en déni nécessaire", "Crise psychiatrique"],
  programs: [{
    id: "principal",
    title: "Dimension spirituelle en fin de vie — Sens et transcendance",
    icon: "◑",
    duration: "40 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Dimension spirituelle en fin de vie — Sens et transcendance",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour patients en soins palliatifs avancés ouverts à une dimension spirituelle (religieuse ou non). Travail sur le sens, la traversée, l'apaisement existentiel. Très KIIKA dans son esprit." }
      ],
    }],
  }],
  outils: [
    { name: "Sens de la vie traversée", type: "Levier", icon: "🎯", desc: "Accompagnement spirituel en fin de vie" },
    { name: "Connexion à plus grand que soi", type: "Levier", icon: "🎯", desc: "Accompagnement spirituel en fin de vie" },
    { name: "Réconciliations possibles", type: "Levier", icon: "🎯", desc: "Accompagnement spirituel en fin de vie" },
    { name: "Sens vivant", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Au-delà de soi", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "40 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "0/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur spiritualité ne fonctionne pas pour moi"],
};

const k_1069: ProtocolDetail = {
  protocolId: 1069,
  efficacite: "KIIKA",
  efficaciteSub: "Profession / Palliatifs",
  description: "Pour soignants en soins palliatifs (équipes, médecins, infirmiers, aides-soignants, psychologues). Travail spécifique sur l'usure de compassion, le deuil cumulatif, la séparation entre soi et le matériel patient, le maintien de la qualité d'accompagnement.",
  indications: ["Soignants en soins palliatifs", "Membres d'équipes mobiles douleur/palliatifs", "Médecins en oncologie", "Bénévoles en accompagnement"],
  contraindications: ["Burn-out constitué (cadre médical d'arrêt)"],
  programs: [{
    id: "principal",
    title: "Soutien aux soignants en soins palliatifs — Pour ceux qui accompagnent",
    icon: "◑",
    duration: "35 min",
    color: "#7C5CBF",
    recommended: true,
    description: "Protocole KIIKA v3 — Soutien aux soignants en soins palliatifs — Pour ceux qui accompagnent",
    seances: [{
      num: 1,
      title: "Phases du protocole",
      steps: [
      { label: "Travail thérapeutique", detail: "Pour soignants en soins palliatifs (équipes, médecins, infirmiers, aides-soignants, psychologues). Travail spécifique sur l'usure de compassion, le deuil cumulatif, la séparation entre soi et le matériel patient, le maintien de la qualité d'accompagnement." }
      ],
    }],
  }],
  outils: [
    { name: "Décharge des accumulations", type: "Levier", icon: "🎯", desc: "Soin de soi des soignants palliatifs" },
    { name: "Deuils cumulatifs reconnus", type: "Levier", icon: "🎯", desc: "Soin de soi des soignants palliatifs" },
    { name: "Séparation soi/patient", type: "Levier", icon: "🎯", desc: "Soin de soi des soignants palliatifs" },
    { name: "Charge déposée", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" },
    { name: "Deuils reconnus", type: "Valeur KIIKA", icon: "✨", desc: "Mot-clé thérapeutique" }
  ],
  stats: [
    { val: "35 min", label: "Durée séance", sub: "estimation", color: "#7C5CBF" },
    { val: "2/3", label: "Dim. Ki", sub: "KIIKA v3", color: "#C8A030" },
    { val: "3/3", label: "Dim. Introspection", sub: "KIIKA v3", color: "#C8A030" },
    { val: "2/3", label: "Dim. Intuition", sub: "KIIKA v3", color: "#C8A030" }
  ],
  croyances: ["Je ne peux pas mobiliser cette approche sur moi-même", "Le travail sur palliatifs ne fonctionne pas pour moi"],
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
  675: k_675,
  676: k_676,
  677: k_677,
  678: k_678,
  679: k_679,
  680: k_680,
  681: k_681,
  682: k_682,
  683: k_683,
  684: k_684,
  685: k_685,
  686: k_686,
  687: k_687,
  688: k_688,
  689: k_689,
  690: k_690,
  691: k_691,
  692: k_692,
  693: k_693,
  694: k_694,
  695: k_695,
  696: k_696,
  697: k_697,
  698: k_698,
  699: k_699,
  700: k_700,
  701: k_701,
  702: k_702,
  703: k_703,
  704: k_704,
  705: k_705,
  706: k_706,
  707: k_707,
  708: k_708,
  709: k_709,
  710: k_710,
  711: k_711,
  712: k_712,
  713: k_713,
  714: k_714,
  715: k_715,
  716: k_716,
  717: k_717,
  718: k_718,
  719: k_719,
  720: k_720,
  721: k_721,
  722: k_722,
  723: k_723,
  724: k_724,
  725: k_725,
  726: k_726,
  727: k_727,
  728: k_728,
  729: k_729,
  730: k_730,
  731: k_731,
  732: k_732,
  733: k_733,
  734: k_734,
  735: k_735,
  736: k_736,
  737: k_737,
  738: k_738,
  739: k_739,
  740: k_740,
  741: k_741,
  742: k_742,
  743: k_743,
  744: k_744,
  745: k_745,
  746: k_746,
  747: k_747,
  748: k_748,
  749: k_749,
  750: k_750,
  751: k_751,
  752: k_752,
  753: k_753,
  754: k_754,
  755: k_755,
  756: k_756,
  757: k_757,
  758: k_758,
  759: k_759,
  760: k_760,
  761: k_761,
  762: k_762,
  763: k_763,
  764: k_764,
  765: k_765,
  766: k_766,
  767: k_767,
  768: k_768,
  769: k_769,
  770: k_770,
  771: k_771,
  772: k_772,
  773: k_773,
  774: k_774,
  775: k_775,
  776: k_776,
  777: k_777,
  778: k_778,
  779: k_779,
  780: k_780,
  781: k_781,
  782: k_782,
  783: k_783,
  784: k_784,
  785: k_785,
  786: k_786,
  787: k_787,
  788: k_788,
  789: k_789,
  790: k_790,
  791: k_791,
  792: k_792,
  1000: k_1000,
  1001: k_1001,
  1002: k_1002,
  1003: k_1003,
  1004: k_1004,
  1005: k_1005,
  1006: k_1006,
  1007: k_1007,
  1008: k_1008,
  1009: k_1009,
  1010: k_1010,
  1011: k_1011,
  1012: k_1012,
  1013: k_1013,
  1014: k_1014,
  1015: k_1015,
  1016: k_1016,
  1017: k_1017,
  1018: k_1018,
  1019: k_1019,
  1020: k_1020,
  1021: k_1021,
  1022: k_1022,
  1023: k_1023,
  1024: k_1024,
  1025: k_1025,
  1026: k_1026,
  1027: k_1027,
  1028: k_1028,
  1029: k_1029,
  1030: k_1030,
  1031: k_1031,
  1032: k_1032,
  1033: k_1033,
  1034: k_1034,
  1035: k_1035,
  1036: k_1036,
  1037: k_1037,
  1038: k_1038,
  1039: k_1039,
  1040: k_1040,
  1041: k_1041,
  1042: k_1042,
  1043: k_1043,
  1044: k_1044,
  1045: k_1045,
  1046: k_1046,
  1047: k_1047,
  1048: k_1048,
  1049: k_1049,
  1050: k_1050,
  1051: k_1051,
  1052: k_1052,
  1053: k_1053,
  1054: k_1054,
  1055: k_1055,
  1056: k_1056,
  1057: k_1057,
  1058: k_1058,
  1059: k_1059,
  1060: k_1060,
  1061: k_1061,
  1062: k_1062,
  1063: k_1063,
  1064: k_1064,
  1065: k_1065,
  1066: k_1066,
  1067: k_1067,
  1068: k_1068,
  1069: k_1069,
};