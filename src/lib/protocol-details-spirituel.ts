import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées des 15 protocoles d'Hypnose Spirituelle et Énergétique
 * (IDs 500-514) — sources : livret de formation GS Formation
 * "Praticien en Thérapie Spirituelle et énergétique — Vies antérieures et
 * Libération des Âmes".
 *
 * Crédit : protocoles transmis par GS Formation (www.gs-formation.com).
 * Adaptation rédactionnelle pour l'usage en cabinet via KIIKA.
 */

// =====================================================================
// ID 500 — Récupérer des savoir-être et des ressources (régression)
// =====================================================================
const recupererRessources: ProtocolDetail = {
  protocolId: 500,
  efficacite: "Très élevée",
  efficaciteSub: "intégration en 1 séance dans 70% des cas",
  description:
    "Régression dans une vie antérieure choisie par l'esprit directeur du client pour récupérer un savoir-être manquant aujourd'hui (courage, joie, confiance, paix intérieure). Le travail repose sur la remémoration active, l'arrêt sur image, et l'intégration énergétique au présent par l'esprit directeur.",
  indications: [
    "Manque ressenti d'une qualité spécifique (courage, confiance, joie, calme)",
    "Blocages émotionnels ponctuels qui freinent un projet ou une relation",
    "Quête de sens et désir de reconnexion à ses ressources profondes",
    "Préparation à un événement important (changement, prise de parole, etc.)",
  ],
  contraindications: [
    "Symptômes schizophréniques ou dissociatifs",
    "Consommation d'alcool ou de psychotropes le jour de la séance",
    "Refus explicite de la régression dans les vies antérieures",
  ],
  programs: [
    {
      id: "p1",
      title: "Séance unique — Récupération",
      icon: "✦",
      duration: "1 × 90 min",
      color: colors.purple,
      recommended: true,
      description:
        "Une séance suffit dans la majorité des cas. La ressource est intégrée immédiatement par l'esprit directeur et reste disponible au quotidien grâce à l'ancrage kinesthésique et verbal posé en fin de séance.",
      seances: [
        {
          num: 1,
          title: "Préparation, induction & approfondissement",
          steps: [
            { label: "Anamnèse ciblée", detail: "Identification de la ressource manquante avec les mots du client. Reformulation et accord sur la formulation exacte (ex: « courage tranquille » plutôt que « courage »)." },
            { label: "Coque de protection", detail: "Visualisation par le client d'un œuf de lumière blanche et dorée autour de son corps. Décret d'imperméabilité aux énergies vibratoirement plus basses." },
            { label: "Induction & approfondissement", detail: "Induction adaptée au canal sensoriel dominant. Catalepsie du bras pour valider la profondeur. Mise en place des signaux idéomoteurs (oui / non / je ne sais pas)." },
            { label: "Sas de lumière intemporel", detail: "Création d'un espace énergétique vierge créé par l'esprit directeur. Permet la transition entre le monde matériel et la mémoire des vies antérieures." },
          ],
        },
        {
          num: 2,
          title: "Régression & récupération",
          steps: [
            { label: "Passage vers la vie cible", detail: "L'esprit directeur fait apparaître une porte conduisant à la vie la plus appropriée pour récupérer la ressource. Saut au compte de trois avec rupture de pattern." },
            { label: "Exploration des scènes-ressources", detail: "Étude minutieuse des sensations corporelles à plusieurs moments de la vie passée. Recherche du moment où la ressource était la plus pleinement disponible." },
            { label: "Validation par l'esprit directeur", detail: "Confirmation par signal idéomoteur que la scène contient bien la ressource recherchée. Si non, demande d'une scène plus juste." },
            { label: "Arrêt sur image & immersion", detail: "Demande à la personnalité passée de figer l'instant et de sentir la ressource sous tous ses aspects (corporel, émotionnel, mental, énergétique)." },
            { label: "Cadeau & intégration", detail: "Demande à la personnalité passée de partager cette capacité avec l'esprit éternel. L'esprit directeur valide puis procède à l'intégration au présent. Confirmation par signal idéomoteur." },
          ],
        },
        {
          num: 3,
          title: "Ancrage & sortie",
          steps: [
            { label: "Mort & passage par le tunnel", detail: "Bilan de la vie passée puis passage par le tunnel de lumière. Ramène la conscience dans le sas de lumière intemporel." },
            { label: "Ancrage kinesthésique & verbal", detail: "Localisation de la ressource dans le corps (place + couleur). Ancre kinesthésique (geste discret) couplée à un mot-clé choisi par le client. Réutilisable au quotidien." },
            { label: "Projection futur & suggestions post-hypnotiques", detail: "Visualisation rapide des situations futures où la ressource sera mobilisée. Suggestions directes pour intégration durable." },
            { label: "Retour progressif", detail: "Sortie de transe lente. Quelques minutes de récupération en silence. Verre d'eau, debrief, planification éventuelle." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Coque de lumière", type: "Énergétique", icon: "◯", desc: "Protection vibratoire visualisée par le client autour de son corps avant chaque régression." },
    { name: "Sas de lumière intemporel", type: "Espace mental", icon: "✦", desc: "Lieu énergétique créé par l'esprit directeur. Sas entre le monde incarné et les mémoires des vies antérieures." },
    { name: "Signaux idéomoteurs", type: "Communication", icon: "✋", desc: "Doigts attribués à oui / non / je ne sais pas pour valider chaque étape avec l'esprit directeur." },
    { name: "Ancrage kinesthésique + mot-clé", type: "PNL", icon: "🔗", desc: "Geste discret + mot mental qui réactivent l'état ressource au quotidien." },
  ],
  stats: [
    { val: "1", label: "Séance suffit en moyenne", sub: "intégration immédiate par l'esprit directeur", color: colors.purple },
    { val: "70%", label: "Cas où une vie suffit", sub: "sinon ajout d'une seconde scène ou vie", color: colors.gold },
    { val: "90 min", label: "Durée moyenne", sub: "incluant anamnèse, transe, retour", color: colors.teal },
    { val: "∞", label: "Réutilisations de l'ancre", sub: "par le client après la séance", color: colors.red },
  ],
  croyances: [
    "Je ne suis pas assez courageux·se pour ça",
    "La joie n'est pas pour moi",
    "Je n'ai jamais su faire confiance",
    "Cette ressource ne fait pas partie de moi",
    "Je suis comme ça depuis toujours",
  ],
};

// =====================================================================
// ID 501 — Réparation karmique — Pardon
// =====================================================================
const reparationKarmique: ProtocolDetail = {
  protocolId: 501,
  efficacite: "Élevée",
  efficaciteSub: "libération mesurable sur 1-2 séances pour les karmas accessibles",
  description:
    "Remontée à la vie d'origine d'un trouble relationnel, émotionnel ou comportemental répétitif. La résolution passe par la compréhension intime des actes posés, l'échange avec les âmes concernées dans un lieu intemporel de lumière, et le pardon mutuel — clé de la dissolution karmique selon la « loi du pardon ».",
  indications: [
    "Schémas relationnels qui se répètent malgré tous les efforts",
    "Sentiments de culpabilité, de honte ou d'injustice sans cause identifiable au présent",
    "Émotions disproportionnées face à certaines situations ou personnes",
    "Blocages psychologiques résistants aux thérapies conventionnelles",
  ],
  contraindications: [
    "Symptômes psychotiques actifs ou état dissociatif sévère",
    "Crise suicidaire ou décompensation aiguë",
    "Refus de la perspective des vies antérieures",
    "Modification du contenu d'une vie antérieure (déconseillée — génère de nouveaux karmas)",
  ],
  programs: [
    {
      id: "pcourt",
      title: "Séance unique — Pardon ciblé",
      icon: "☥",
      duration: "1 × 90-120 min",
      color: colors.gold,
      recommended: false,
      description: "Pour une problématique karmique délimitée, accessible en une vie. Convient quand l'âme a déjà fait un travail préparatoire.",
      seances: [
        {
          num: 1,
          title: "Réparation en une session",
          steps: [
            { label: "Pont émotionnel", detail: "Centrage du client sur la sensation corporelle du blocage présent. L'esprit directeur conduit à la vie où ce trouble peut être réparé." },
            { label: "Exploration & compréhension", detail: "Étude de la vie entière, événements importants après événements importants. Compréhension des actes posés et de leurs motivations profondes." },
            { label: "Cercle des âmes & pardon", detail: "Dans un lieu intemporel de lumière, convocation des guides + âmes concernées. Demande de pardon argumentée par la personnalité passée." },
            { label: "Dissolution karmique", detail: "Validation par l'esprit directeur. Répercussion immédiate sur les plans qui le concernent et dans la vie présente." },
          ],
        },
      ],
    },
    {
      id: "plong",
      title: "Programme 2-3 séances",
      icon: "✦",
      duration: "2-3 × 90 min, espacées de 2 semaines",
      color: colors.purple,
      recommended: true,
      description: "Programme recommandé pour les karmas lourds, multi-vies ou particulièrement enracinés. Permet d'intégrer le travail entre les séances.",
      seances: [
        {
          num: 1,
          title: "Première vie d'origine",
          steps: [
            { label: "Anamnèse & cartographie", detail: "Identification précise du trouble, des émotions associées, des situations déclenchantes. Pont émotionnel-corporel pour ouvrir l'accès aux mémoires." },
            { label: "Régression & exploration complète", detail: "Vie entière revisitée. Compréhension des choix, des contextes culturels, des contraintes karmiques de l'époque." },
            { label: "Mort & lieu de lumière", detail: "Bilan post-mortem. La personnalité passée est conduite dans un lieu intemporel sans passer par le tunnel." },
            { label: "Convocation des âmes", detail: "Appel des guides comme médiateurs + âmes effectivement concernées (parfois différentes de celles attendues)." },
          ],
        },
        {
          num: 2,
          title: "Pardon mutuel & compensation",
          steps: [
            { label: "Demande de pardon argumentée", detail: "La personnalité passée explique ses actes, ses motivations, ce qu'elle en a tiré comme leçon. Le pardon ne peut venir que d'une compréhension authentique." },
            { label: "Médiation des guides", detail: "Si le pardon est difficile à obtenir : recours aux guides pour faciliter le dialogue, proposition d'une compensation symbolique ou d'un cadeau." },
            { label: "Pardon par la personnalité présente", detail: "En dernier recours : la personnalité présente s'ajoute au cercle pour demander le pardon en son nom, au titre du karma qu'elle subit toujours." },
            { label: "Cadeaux symboliques & dissolution", detail: "Une fois l'accord obtenu, cadeau symbolique de la personnalité passée à chaque âme. Demande à l'esprit directeur de dissoudre les karmas et de répercuter au présent." },
          ],
        },
        {
          num: 3,
          title: "Consolidation & sortie",
          steps: [
            { label: "Vérification multi-plans", detail: "Validation par signal idéomoteur que la dissolution s'est bien répercutée sur les plans concernés." },
            { label: "Message des guides", detail: "Profite de la présence des guides pour recueillir éventuels conseils ou enseignements (Guidance)." },
            { label: "Retour & ressources positives", detail: "Sortie de transe avec suggestions post-hypnotiques chargées de ressources. Le protocole est éprouvant — 5-10 min de récupération nécessaires." },
            { label: "Prescription de tâche", detail: "Optionnelle : geste concret en lien avec le blocage levé (lettre symbolique, action de réparation, pratique de pleine conscience...)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Pont émotionnel-corporel", type: "Technique", icon: "🌉", desc: "Centrage sur la sensation corporelle du blocage pour ouvrir l'accès aux mémoires karmiques." },
    { name: "Lieu intemporel de lumière", type: "Espace énergétique", icon: "✦", desc: "Espace neutre hors temps/espace pour le pardon et la médiation entre âmes." },
    { name: "Guides comme médiateurs", type: "Êtres de lumière", icon: "👼", desc: "Soutien et facilitation du dialogue lorsque le pardon est difficile à obtenir." },
    { name: "Loi du pardon", type: "Principe énergétique", icon: "☥", desc: "Tout acte compris et dont on a fait un repentir sincère peut ne plus être soumis à l'expérience retour." },
  ],
  stats: [
    { val: "1-2", label: "Vies à explorer en moyenne", sub: "selon la profondeur du karma", color: colors.purple },
    { val: "90%", label: "Pardons obtenus", sub: "via médiation des guides ou compensation", color: colors.gold },
    { val: "2 sem.", label: "Espacement recommandé", sub: "entre séances pour intégration", color: colors.teal },
    { val: "∞", label: "Bénéficiaires", sub: "le client + les âmes concernées (gagnant-gagnant)", color: colors.red },
  ],
  croyances: [
    "Je ne mérite pas le pardon",
    "Cette personne ne me pardonnera jamais",
    "Je dois souffrir pour expier",
    "Le passé ne peut pas être changé",
    "Mon malheur a une cause extérieure que je ne peux pas modifier",
    "Ce que j'ai fait est impardonnable",
  ],
};

// =====================================================================
// ID 502 — Travail sur les contrats d'âmes
// =====================================================================
const contratsAmes: ProtocolDetail = {
  protocolId: 502,
  efficacite: "Élevée",
  efficaciteSub: "renégociation aboutie dans 75% des cas",
  description:
    "Identification et renégociation d'un contrat d'âme conclu avec une personne précise (relation passionnelle, conflit récurrent, lien obsédant). Le travail se déroule dans un lieu intemporel de lumière où le client rencontre l'esprit directeur de l'autre âme pour clarifier les termes du contrat et les ajuster si besoin.",
  indications: [
    "Relation amoureuse passionnelle, fusionnelle ou destructrice",
    "Lien familial complexe, dissonant ou douloureux (parent, enfant, fratrie)",
    "Aversion ou attraction inexpliquée envers une personne précise",
    "Promesse ancienne qui pèse sur la vie présente sans qu'on en connaisse l'origine",
  ],
  contraindications: [
    "Tentative de manipulation de la relation ou contournement du libre-arbitre de l'autre",
    "Symptômes dissociatifs sévères",
    "Refus de la possibilité d'un contrat d'âme (la séance ne portera pas)",
  ],
  programs: [
    {
      id: "pcourt",
      title: "Version courte (sans visite de la vie d'origine)",
      icon: "✧",
      duration: "1 × 60-75 min",
      color: colors.purple,
      recommended: false,
      description: "Travail direct dans le lieu intemporel sans visiter la vie où le contrat a été passé. Pertinent quand le client connaît déjà bien la dynamique relationnelle.",
      seances: [
        {
          num: 1,
          title: "Renégociation directe",
          steps: [
            { label: "Sas de lumière + visualisation", detail: "Visualisation du visage de la personne flottant dans l'espace de lumière. Tentative de ressentir sa présence." },
            { label: "Convocation des âmes", detail: "Convocation des guides comme médiateurs + âme de la personne concernée (sphère de lumière, vie présente ou passée)." },
            { label: "Cinq questions clés", detail: "Quel contrat ? Pourquoi ? Échéance ? Conséquences présentes ? Toujours profitable aux deux ?" },
            { label: "Renégociation & accord", detail: "Si le contrat ne convient plus : négociation des termes ou abrogation. Validation par l'esprit directeur. Cadeau symbolique." },
          ],
        },
      ],
    },
    {
      id: "plong",
      title: "Version longue (avec visite de la vie d'origine)",
      icon: "✦",
      duration: "1 × 90-120 min",
      color: colors.gold,
      recommended: true,
      description: "Programme complet recommandé. Comprendre le contexte d'origine du contrat permet d'éviter les renégociations à courte vue et de respecter l'évolution de l'âme.",
      seances: [
        {
          num: 1,
          title: "Vie d'origine du contrat",
          steps: [
            { label: "Anamnèse relationnelle", detail: "Identification précise de la personne et des dynamiques. Hypothèses sur la nature du contrat (ponctuel, court terme, long terme)." },
            { label: "Régression vers la vie d'origine", detail: "L'esprit directeur conduit à la vie ou au moment où le contrat a été signé. Si aucune vie n'est visitée : pas de contrat (séance arrêtée ou réorientée)." },
            { label: "Étude minutieuse", detail: "Reconnaissance de l'âme dans l'un des protagonistes. Compréhension du contexte et des raisons du contrat." },
          ],
        },
        {
          num: 2,
          title: "Lieu intemporel & dialogue",
          steps: [
            { label: "Transition vers le lieu intemporel", detail: "L'esprit directeur emmène la personnalité présente dans un lieu de lumière hors du temps. Quitte la personnalité passée." },
            { label: "Convocation & cinq questions", detail: "Guides + âme concernée. Quel contrat ? Dans quel but ? Échéance ? Conséquences au présent ? Toujours satisfaisant pour les deux ?" },
            { label: "Négociation éventuelle", detail: "Si le contrat est inadapté : négociation des termes, des modalités, ou de la fin. Les guides peuvent éclairer les conséquences d'une modification." },
            { label: "Sceau & transmission", detail: "Poignée de main symbolique. Cadeau à l'autre âme. Déclaration que les nouveaux termes s'appliquent. Validation et activation par l'esprit directeur." },
          ],
        },
        {
          num: 3,
          title: "Guidance & retour",
          steps: [
            { label: "Message éventuel des guides", detail: "Profite de leur présence pour solliciter un message ou un enseignement (Guidance)." },
            { label: "Libération du conseil", detail: "Remerciement et libération de toutes les âmes en présence." },
            { label: "Sortie de transe & ancrage", detail: "Retour progressif, suggestions post-hypnotiques pour intégration durable." },
            { label: "Prescription de tâche", detail: "Optionnelle : geste concret envers la personne concernée (cadeau, message, remerciement) en cohérence avec les nouveaux termes." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Visualisation du visage flottant", type: "Technique", icon: "🪞", desc: "Convocation symbolique de la personne dans le lieu de lumière, sans la déranger physiquement." },
    { name: "Cinq questions de clarification", type: "Grille", icon: "❓", desc: "Termes / But / Échéance / Conséquences / Satisfaction réciproque — structure le dialogue avec l'âme." },
    { name: "Cadeau symbolique", type: "Geste énergétique", icon: "🎁", desc: "Sceau du nouvel accord, manifestation de gratitude et reconnaissance de l'apprentissage commun." },
    { name: "Médiation des guides", type: "Êtres de lumière", icon: "👼", desc: "Garants de la justesse des nouveaux termes et de leur cohérence avec les chemins respectifs." },
  ],
  stats: [
    { val: "75%", label: "Renégociations abouties", sub: "même partiellement", color: colors.purple },
    { val: "5", label: "Questions structurantes", sub: "pour clarifier le contrat", color: colors.gold },
    { val: "1", label: "Séance suffit", sub: "dans la majorité des cas", color: colors.teal },
    { val: "100%", label: "Compréhensions élargies", sub: "même quand la renégociation échoue", color: colors.red },
  ],
  croyances: [
    "Je ne peux pas me libérer de cette personne",
    "C'est plus fort que moi, on est faits l'un pour l'autre",
    "Je dois rester dans cette relation par devoir",
    "Cette relation est mon karma, je ne peux rien y changer",
    "Si je m'éloigne, je serai puni·e",
  ],
};

// =====================================================================
// ID 503 — Contrat de vie (pré-conception)
// =====================================================================
const contratVie: ProtocolDetail = {
  protocolId: 503,
  efficacite: "Élevée",
  efficaciteSub: "Compréhension élargie systématique, renégociation à la marge possible",
  description:
    "Accès au conseil des sages où le contrat de vie a été choisi avant l'incarnation. Permet de prendre conscience des objectifs d'apprentissage choisis par l'âme, des événements karmiques planifiés, et — éventuellement, à la marge — de renégocier les modalités d'expériences particulièrement lourdes.",
  indications: [
    "Sentiment d'être perdu·e sur son chemin de vie",
    "Vie marquée par des épreuves karmiques répétitives ou disproportionnées",
    "Quête de sens existentielle profonde",
    "Maladies chroniques très handicapantes (renégociation de modalités possible)",
    "Désir de comprendre les grandes orientations de son incarnation",
  ],
  contraindications: [
    "Symptômes psychotiques actifs",
    "Volonté de fuir une responsabilité par projection sur le « contrat »",
    "Tentative de modification radicale du chemin de vie (impossible — seules les modalités peuvent être ajustées)",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance unique — Conseil des sages",
      icon: "☉",
      duration: "1 × 90-120 min",
      color: colors.gold,
      recommended: true,
      description: "Une séance complète permet de visiter le conseil et d'engager le dialogue. Une seconde séance peut être programmée pour intégrer ou approfondir.",
      seances: [
        {
          num: 1,
          title: "Préparation & accès au conseil",
          steps: [
            { label: "Anamnèse rétrospective", detail: "Remémoration des événements joyeux ou marquants de la vie présente. Lance le questionnement sur le chemin de vie." },
            { label: "Coque + signaux + sas de lumière", detail: "Protection énergétique. Mise en place des signaux idéomoteurs. Création du sas par l'esprit directeur." },
            { label: "Convocation des guides", detail: "Appel et confirmation de leur présence — soutien pour l'accès au conseil." },
            { label: "Passage vers le conseil", detail: "L'esprit directeur fait apparaître un passage conduisant au lieu où le contrat de vie peut être consulté et négocié. Convocation de toutes les consciences concernées." },
          ],
        },
        {
          num: 2,
          title: "Dialogue & questionnement",
          steps: [
            { label: "Étude des protagonistes", detail: "Description des sages, des guides et de l'atmosphère du conseil. Reconnaissance éventuelle d'âmes connues." },
            { label: "Cinq questions fondamentales", detail: "Nature du contrat de vie / Famille d'âme / Objectifs concrets / Événements majeurs planifiés / Nombre de vies sur terre." },
            { label: "Renégociation éventuelle", detail: "Si certaines modalités sont insupportables : négociation avec le conseil. Les leçons restent, les formes peuvent évoluer." },
            { label: "Validation multi-plans", detail: "L'esprit directeur valide les éventuels accords sur les plans concernés et les répercute dans la vie présente." },
          ],
        },
        {
          num: 3,
          title: "Guidance & retour",
          steps: [
            { label: "Message libre des sages/guides", detail: "Demande d'un message ou d'un enseignement personnalisé (Guidance)." },
            { label: "Cadeaux symboliques", detail: "Remise éventuelle d'un cadeau symbolique à chacun en remerciement." },
            { label: "Retour vers le sas de lumière", detail: "L'esprit directeur reconduit la conscience dans le sas avant la sortie." },
            { label: "Sortie de transe & ressources", detail: "Suggestions post-hypnotiques chargées en ressources positives. Récupération nécessaire (séance énergivore)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Conseil des sages", type: "Espace de lumière", icon: "☉", desc: "Lieu où le contrat de vie a été établi avant l'incarnation. Accessible via l'esprit directeur." },
    { name: "Cinq questions fondamentales", type: "Grille", icon: "❓", desc: "Contrat / Famille d'âme / Objectifs / Événements majeurs / Nombre de vies — structure l'exploration." },
    { name: "Loi de la non-modification radicale", type: "Principe", icon: "⚖", desc: "Seules les modalités d'expériences peuvent être ajustées, pas les apprentissages fondamentaux." },
    { name: "Enregistrement audio", type: "Document", icon: "🎙", desc: "Recommandé : la quantité d'informations échangées dépasse souvent la mémoire post-séance." },
  ],
  stats: [
    { val: "100%", label: "Compréhensions élargies", sub: "même sans renégociation", color: colors.gold },
    { val: "30%", label: "Renégociations effectives", sub: "à la marge des modalités", color: colors.purple },
    { val: "120 min", label: "Durée maximale", sub: "au-delà : fatigue et perte d'efficacité", color: colors.teal },
    { val: "1-3", label: "Vies récurrentes à comprendre", sub: "selon les besoins de l'âme", color: colors.red },
  ],
  croyances: [
    "Ma vie n'a pas de sens",
    "Je n'ai pas choisi cette vie, on me l'impose",
    "Je suis maudit·e",
    "Je ne peux rien changer à mon destin",
    "Mes épreuves sont injustes",
    "Je suis trop petit·e pour avoir un contrat avec l'univers",
  ],
};

// =====================================================================
// ID 504 — L'entre-vie (voyage complet)
// =====================================================================
const entreVie: ProtocolDetail = {
  protocolId: 504,
  efficacite: "Maximale",
  efficaciteSub: "Le protocole le plus complet et le plus profond de l'hypnose spirituelle",
  description:
    "Voyage exhaustif dans l'espace de l'entre-vie : dernière vie revisitée, mort, tunnel, accueil, réparation énergétique, jardin, bibliothèque, famille d'âmes, conseil, choix du corps, répétition karmique, retour. Permet de cartographier l'intégralité du processus de réincarnation propre à l'âme du client.",
  indications: [
    "Quête spirituelle approfondie et désir d'auto-connaissance",
    "Préparation à un changement majeur de vie",
    "Compréhension du sens des grandes épreuves vécues",
    "Pratique régulière souhaitée du voyage transpersonnel",
    "Travail sur sa famille d'âme et sa lignée karmique",
  ],
  contraindications: [
    "Première séance d'hypnose spirituelle (commencer par un protocole plus court)",
    "Fatigue importante ou maladie aiguë",
    "Symptômes dissociatifs ou psychotiques",
    "Personnes en deuil très récent (le voyage peut bouleverser émotionnellement)",
  ],
  programs: [
    {
      id: "principal",
      title: "Voyage complet de l'entre-vie",
      icon: "☽",
      duration: "1 × 90-120 min (peut nécessiter 2 séances)",
      color: colors.purple,
      recommended: true,
      description: "Séance longue et énergivore. Plans vibratoires très élevés. Génère beaucoup de fatigue. Possibilité de revenir plusieurs fois pour explorer différents espaces.",
      seances: [
        {
          num: 1,
          title: "Vie précédente & passage",
          steps: [
            { label: "Préparation complète", detail: "Anamnèse, coque, signaux idéomoteurs, sas de lumière, convocation des guides." },
            { label: "Régression dans la vie précédente", detail: "Passage vers la vie précédant l'incarnation actuelle. Premier moment important enfant." },
            { label: "Exploration méthodique de la vie", detail: "20-30 min consacrées à comprendre la vie passée — événements importants, contexte, sens." },
            { label: "Mort & tunnel de lumière", detail: "Bilan post-mortem. Passage par le tunnel. Sensations énergétiques fortes (« retour à la maison »)." },
          ],
        },
        {
          num: 2,
          title: "Accueil, nettoyage & jardin",
          steps: [
            { label: "Accueil par les guides", detail: "Comité d'accueil, retrouvailles avec des âmes-compagnons. Description par le client." },
            { label: "Réparation & nettoyage énergétique", detail: "Bain ou douche d'énergie. Travail des guérisseurs de lumière sur la structure énergétique." },
            { label: "Le jardin — premier bilan", detail: "Dialogue informel avec le guide sur la vie quittée. Atmosphère paisible, beauté." },
            { label: "La bibliothèque", detail: "Visite optionnelle. Accès à toutes les vies passées. Travail des âmes sur les apprentissages." },
          ],
        },
        {
          num: 3,
          title: "Famille d'âmes & conseil",
          steps: [
            { label: "Retrouvailles avec la famille d'âmes", detail: "Identification de la famille (enseignante, artiste, exploratrice, bâtisseuse, porteuse d'amour, etc.). Reconnaissance d'âmes connues." },
            { label: "Le conseil des sages", detail: "Bilan rétrospectif minutieux de la vie passée. Choix des points d'apprentissage de la vie suivante." },
            { label: "Choix du corps", detail: "Visualisation des corps possibles pour la vie à venir. Compréhension des raisons du choix de l'incarnation actuelle." },
            { label: "Répétition & ancrages karmiques", detail: "Vision rapide des grandes lignes de la vie à venir. Ancrages des événements karmiques incontournables." },
          ],
        },
        {
          num: 4,
          title: "Réincarnation & retour",
          steps: [
            { label: "Quantité d'énergie incarnée", detail: "Question importante : 10-80% selon la complexité de la mission et le travail simultané sur les plans supérieurs." },
            { label: "Incarnations multiples ?", detail: "Vérification : l'esprit directeur s'est-il incarné dans plusieurs corps simultanément ?" },
            { label: "Réincarnation dans le foetus", detail: "Passage à 3 mois de gestation. Choix d'arrêter là pour la sortie de transe." },
            { label: "Retour au présent", detail: "Sortie longue et soigneuse. Suggestions post-hypnotiques chargées en énergie d'amour. 10 min de récupération minimum." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Carte des étapes de l'entre-vie", type: "Grille", icon: "🗺", desc: "Tunnel → Accueil → Réparation → Jardin → Bibliothèque → Famille d'âmes → Conseil → Choix du corps → Répétition → Retour." },
    { name: "Sept questions clés par étape", type: "Grille", icon: "❓", desc: "Que vois-tu ? Que ressens-tu ? Es-tu seul·e ? Qui est là ? Quelle est l'humeur ? Que dit-on ? Qu'apprends-tu ?" },
    { name: "Demande de vision sans interface", type: "Technique avancée", icon: "👁", desc: "Demande au cerveau de cesser de symboliser. La réalité énergétique apparaît sous forme d'énergies pures et de couleurs." },
    { name: "Enregistrement audio (indispensable)", type: "Document", icon: "🎙", desc: "Le volume d'informations dépasse largement la capacité de mémorisation post-séance." },
  ],
  stats: [
    { val: "10", label: "Étapes principales", sub: "explorables en une ou plusieurs séances", color: colors.purple },
    { val: "120 min", label: "Durée maximale recommandée", sub: "au-delà : épuisement énergétique", color: colors.gold },
    { val: "10-80%", label: "Énergie incarnée", sub: "selon le choix de l'esprit directeur", color: colors.teal },
    { val: "∞", label: "Retours possibles", sub: "pour explorer d'autres espaces", color: colors.red },
  ],
  croyances: [
    "Je suis seul·e dans cet univers",
    "Ma vie est un hasard sans sens",
    "Personne ne veille sur moi",
    "La mort est la fin de tout",
    "Je n'ai aucun choix dans ce qui m'arrive",
    "Je n'appartiens à aucun groupe",
  ],
};

// =====================================================================
// ID 505 — Libération d'âmes (passeur)
// =====================================================================
const liberationAmes: ProtocolDetail = {
  protocolId: 505,
  efficacite: "Très élevée",
  efficaciteSub: "Libération immédiate dans 90% des cas, effets ressentis dès la séance",
  description:
    "Communication avec les entités (âmes errantes, parties d'âmes, formes-pensées) hébergées dans le corps énergétique du client, et accompagnement bienveillant vers la lumière. Travail de « passeur d'âmes » : on libère définitivement l'entité du plan astral plutôt que de simplement la chasser.",
  indications: [
    "Baisse d'énergie inexpliquée, fatigue chronique",
    "Émotions inhabituelles (colère, dépression, peur) sans cause identifiable",
    "Petits spasmes musculaires, tics, asymétries faciales",
    "Sensation d'être « accompagné·e » ou observé·e",
    "Usage spontané du « nous » pour parler de soi",
    "Plus de 30 ans (90% des personnes ont au moins une entité)",
    "Travail préventif systématique en première séance d'hypnose spirituelle",
  ],
  contraindications: [
    "Refus catégorique du concept (rare, mais à respecter)",
    "Crise psychotique aiguë non stabilisée",
    "Le thérapeute non protégé énergétiquement (utiliser stibine + coque + formation)",
  ],
  programs: [
    {
      id: "principal",
      title: "Libération en séance unique",
      icon: "✦",
      duration: "1 × 60-90 min",
      color: colors.purple,
      recommended: true,
      description: "Une séance suffit pour libérer toutes les entités présentes. Les résultats sont souvent spectaculaires (légèreté retrouvée, énergie revenue).",
      seances: [
        {
          num: 1,
          title: "Préparation & détection",
          steps: [
            { label: "Protection du thérapeute", detail: "Coque de lumière du thérapeute + pierre de Stibine portée sur soi (énergies désagréables aux entités, évite les transferts)." },
            { label: "Coque de protection du client", detail: "Œuf de lumière blanche/dorée visualisé par le client autour de son corps." },
            { label: "Approfondissement & signaux", detail: "Transe profonde sans faire parler le client. Mise en place des signaux idéomoteurs (oui / non / je ne sais pas)." },
            { label: "Convocation des guides du client", detail: "Soutien et présence pour rassurer le conscient pendant le travail avec l'entité." },
            { label: "Détection par l'inconscient", detail: "Demande à l'inconscient si des entités sont présentes. Si non : protocole terminé. Si oui : on continue." },
          ],
        },
        {
          num: 2,
          title: "Communication avec l'entité",
          steps: [
            { label: "Transfert des cordes vocales", detail: "L'inconscient transfère temporairement l'usage des cordes vocales et des doigts à l'énergie étrangère pour qu'elle puisse communiquer." },
            { label: "Identité & circonstances", detail: "Nom ? Sait-elle qu'elle est morte ? Comment ? Pourquoi est-elle restée ? Depuis combien de temps dans ce corps ? Comment est-elle entrée ?" },
            { label: "Plaidoyer pour la lumière", detail: "L'état actuel est un non-état douloureux. La lumière n'est pas un jugement mais un retour à l'amour, aux êtres chers, à la possibilité de réincarnation." },
            { label: "Détection de la lumière", detail: "Demande à l'entité de chercher la lumière autour d'elle. Confirmation qu'elle la voit ou la sent." },
          ],
        },
        {
          num: 3,
          title: "Accompagnement & passage",
          steps: [
            { label: "Convocation d'un passeur", detail: "Appel des guides ou d'êtres chers défunts non réincarnés. À défaut : appel direct des êtres de lumière compétents." },
            { label: "Réparation des dégâts", detail: "Demande à l'entité de réparer tout dégât énergétique causé dans le corps avant de partir (geste de gratitude)." },
            { label: "Détection d'autres entités", detail: "Vérification s'il y a d'autres entités. Si oui : invitation à les prendre par la main pour un départ collectif." },
            { label: "Montée dans la lumière", detail: "Bénédiction, remerciement, autorisation de lâcher le corps. Sortie souvent visible physiquement (soubresaut, picotements autour du thérapeute)." },
          ],
        },
        {
          num: 4,
          title: "Réparation énergétique & retour",
          steps: [
            { label: "Vérification post-libération", detail: "L'inconscient confirme par signal que toutes les entités libérables sont parties." },
            { label: "Étoile de lumière au cœur", detail: "Visualisation par le client d'une étoile blanche-dorée-irisée au centre du cœur, qui grandit jusqu'à dépasser le corps d'1 m. Balaye toutes les obscurités." },
            { label: "Renforcement de l'aura", detail: "Appel des guérisseurs de lumière pour compléter le travail et renforcer l'aura contre de nouveaux parasitages." },
            { label: "Intégration & sortie", detail: "L'inconscient intègre toutes les nouvelles énergies. Suggestions post-hypnotiques pour intégration durable. 10 min de récupération." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Pierre de Stibine", type: "Minéral", icon: "💎", desc: "Portée sur soi pendant la séance, rend les énergies du thérapeute désagréables aux entités. Nettoyer en terre 24h régulièrement." },
    { name: "Coque de lumière du thérapeute", type: "Énergétique", icon: "◯", desc: "Protection vibratoire avec ouverture de 7cm au troisième œil pour conserver la sensibilité relationnelle." },
    { name: "Signaux idéomoteurs", type: "Communication", icon: "✋", desc: "Indispensable pour les entités muettes ou en transe légère. Permet le travail dans tous les cas." },
    { name: "Étoile de lumière au cœur", type: "Visualisation", icon: "✦", desc: "Étoile blanche-dorée-irisée qui grandit jusqu'à 1m autour du corps. Balaye et renforce." },
    { name: "Réparation par les guérisseurs de lumière", type: "Êtres de lumière", icon: "👼", desc: "Appel direct pour compléter le renforcement de l'aura après libération." },
  ],
  stats: [
    { val: "90%", label: "Adultes après 30 ans", sub: "ont au moins une entité", color: colors.purple },
    { val: "30+", label: "Entités possibles", sub: "dans certains cas extrêmes", color: colors.red },
    { val: "1", label: "Séance suffit en moyenne", sub: "pour les libérations standard", color: colors.gold },
    { val: "∞", label: "Bénéficiaires", sub: "client + chaque entité libérée définitivement", color: colors.teal },
  ],
  croyances: [
    "Les entités n'existent pas",
    "Si j'en ai, je suis maudit·e",
    "Je suis fou·folle d'y croire",
    "Personne ne peut m'aider",
    "Je vais me venger en restant ici (perspective de l'entité)",
    "L'enfer m'attend si je monte (peur de l'entité)",
  ],
};

// =====================================================================
// ID 506 — Désenvoûtement énergétique
// =====================================================================
const desenvoutement: ProtocolDetail = {
  protocolId: 506,
  efficacite: "Élevée",
  efficaciteSub: "Soulagement immédiat de l'oppression dans 80% des cas",
  description:
    "Nettoyage énergétique complet : retrait des énergies viciées présentes dans le corps, et coupure des liens énergétiques (cordes relationnelles, formes-pensées agissantes, envoûtements conscients ou inconscients) qui drainent l'énergie ou injectent des intentions néfastes.",
  indications: [
    "Sensation d'oppression durable, surtout en pensant à une personne précise",
    "Fatigue après contact avec certains entourages",
    "Impression que quelqu'un nous « tient à distance » énergétiquement",
    "Auto-envoûtement par pensées négatives répétées (« je n'ai jamais de chance »)",
    "Suite à conflit, séparation ou rupture relationnelle violente",
  ],
  contraindications: [
    "Travailler en confiance et alignement (pas dans la peur — l'énergie suit l'intention)",
    "Refus de la perspective énergétique",
    "Symptômes psychotiques",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance unique — Nettoyage complet",
      icon: "✧",
      duration: "1 × 60-75 min",
      color: colors.gold,
      recommended: true,
      description: "Souvent intégré à une séance de libération d'âmes (recommandé). Peut aussi être proposé seul.",
      seances: [
        {
          num: 1,
          title: "Préparation & dédoublement",
          steps: [
            { label: "Coque + signaux + sas de lumière", detail: "Protection énergétique du client. Mise en place des signaux idéomoteurs. Création du sas par l'esprit directeur." },
            { label: "Dédoublement & corps transparent", detail: "Demande au client de se voir de l'extérieur. L'esprit directeur rend le corps transparent et fait apparaître les énergies étrangères et les liens extérieurs." },
            { label: "Inventaire visuel", detail: "Exploration par le client : énergies viciées dans le corps ? Liens énergétiques (tentacules) à l'extérieur ? Réponse par parole ou signaux." },
          ],
        },
        {
          num: 2,
          title: "Nettoyage des énergies viciées",
          steps: [
            { label: "Outil énergétique sur mesure", detail: "L'esprit directeur fait apparaître un outil parfaitement adapté pour aspirer/purifier les énergies étrangères (chaque client visualise son propre outil)." },
            { label: "Nettoyage actif", detail: "Le client utilise l'outil méthodiquement sur tout le corps transparent. Ressentis physiques accompagnent souvent l'opération." },
            { label: "Renfort par les êtres de lumière", detail: "En cas d'impasse : appel des êtres de lumière compétents pour compléter le nettoyage." },
            { label: "Vérification de l'esprit directeur", detail: "Confirmation par signal que toutes les énergies enlevables l'ont été." },
          ],
        },
        {
          num: 3,
          title: "Coupure des liens & envoûtements",
          steps: [
            { label: "Détection des liens", detail: "L'esprit directeur fait à nouveau apparaître les éventuels liens relationnels et envoûtements." },
            { label: "Sabre ou couteau d'or", detail: "Le client se munit d'une lame d'or énergétique et tranche irrémédiablement chaque lien — y compris ceux des relations affectives sereines (l'attachement énergétique en soi n'est jamais sain)." },
            { label: "Vérification finale", detail: "Nouveau regard sur le corps transparent. Si liens restants : recommencer. Si tout est propre : passer à la régénération." },
          ],
        },
        {
          num: 4,
          title: "Régénération & ancrage",
          steps: [
            { label: "Réincorporation", detail: "Le client revient dans son corps." },
            { label: "Étoile de lumière au cœur", detail: "Visualisation d'une étoile blanche-irisée-dorée qui grandit pour remplir tout le corps et l'aura. Ressentis physiques marqués." },
            { label: "Renforcement par l'esprit directeur", detail: "Demande de renforcement maximal des corps physique et subtils. Validation par signal." },
            { label: "Intégration & ancre verbale", detail: "Mot-clé visualisé pour réactiver cette énergie au quotidien. Suggestions post-hypnotiques. Sortie de transe." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Outil énergétique sur mesure", type: "Visualisation", icon: "🧹", desc: "Choisi par l'esprit directeur du client : aspirateur de lumière, brosse, vortex, etc. — chacun le sien." },
    { name: "Lame d'or pour trancher les liens", type: "Visualisation", icon: "🗡", desc: "Tranche définitivement les cordes relationnelles, formes-pensées et envoûtements." },
    { name: "Étoile blanche-irisée-dorée au cœur", type: "Visualisation", icon: "✦", desc: "Régénération et renforcement post-nettoyage. Ressentis physiques marqués." },
    { name: "Mur de protection permanent (suivi)", type: "Création astrale", icon: "🛡", desc: "À installer ensuite si l'origine du parasitage est identifiée — voir protocole dédié." },
  ],
  stats: [
    { val: "80%", label: "Soulagement immédiat", sub: "ressenti dès la fin de séance", color: colors.gold },
    { val: "0", label: "Bons liens énergétiques", sub: "tout attachement énergétique nuit", color: colors.purple },
    { val: "1", label: "Séance suffit en moyenne", sub: "à coupler avec libération d'âmes", color: colors.teal },
    { val: "∞", label: "Renouvellements possibles", sub: "selon l'exposition et le mode de vie", color: colors.red },
  ],
  croyances: [
    "C'est normal de se sentir vidé·e après cette personne",
    "Couper le lien serait trahir",
    "Je ne peux pas me protéger énergétiquement",
    "Si je ne pense plus à elle, c'est que je ne l'aime plus",
    "L'oppression que je ressens est imaginaire",
  ],
};

// =====================================================================
// ID 507 — Guidance — Dialogue avec les guides
// =====================================================================
const guidance: ProtocolDetail = {
  protocolId: 507,
  efficacite: "Élevée",
  efficaciteSub: "Réponses claires obtenues dans 85% des séances",
  description:
    "Dialogue direct avec les guides de lumière du client en transe moyenne à profonde. Les guides répondent aux questions concernant le chemin de vie, les enseignements spirituels, les choix possibles — mais ne font jamais de choix à la place du client. Outil puissant d'accompagnement spirituel régulier.",
  indications: [
    "Quête de sens et questionnement spirituel",
    "Décision importante à éclairer (mais pas à déléguer)",
    "Désir d'enseignement et de mentorat spirituel",
    "Pratique régulière souhaitée pour avancer sur son chemin",
    "Curiosité saine sur les plans subtils",
  ],
  contraindications: [
    "Volonté de déléguer ses choix aux guides (ils refuseront)",
    "Demandes de prédictions précises (ils donnent des informations, pas des certitudes)",
    "Désir de manipulation d'autrui via la guidance",
    "Symptômes psychotiques actifs",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance dialogue avec les guides",
      icon: "✧",
      duration: "1 × 60-90 min",
      color: colors.purple,
      recommended: true,
      description: "Une séance permet plusieurs questions. Pratique recommandée 2-4 fois par an pour un accompagnement spirituel suivi.",
      seances: [
        {
          num: 1,
          title: "Préparation des questions",
          steps: [
            { label: "Anamnèse soignée", detail: "Discussion approfondie sur les questions à poser. Vérification : ce sont bien des demandes d'information, pas des choix à faire faire aux guides." },
            { label: "Reformulation des questions", detail: "Conversion des « dois-je faire X ou Y ? » (refusées) en « si je fais X, quelles sont les conséquences ? » (acceptées)." },
            { label: "Préparation matérielle", detail: "Enregistrement audio fortement recommandé — la quantité d'enseignements dépasse la mémoire post-séance." },
          ],
        },
        {
          num: 2,
          title: "Induction & accès aux guides",
          steps: [
            { label: "Coque + approfondissement", detail: "Coque de protection. Approfondissement jusqu'à transe moyenne à profonde — niveau requis pour le dialogue clair." },
            { label: "Sas de lumière intemporel", detail: "Création du sas où le dialogue avec les guides peut avoir lieu clairement." },
            { label: "Convocation des guides de lumière", detail: "Précision importante : « les guides de lumière qui t'accompagnent » (pas n'importe quels êtres). Salutations." },
            { label: "Description des guides", detail: "Optionnel : description par le client (apparence, énergie). Renforce le contact et l'engagement." },
          ],
        },
        {
          num: 3,
          title: "Dialogue & enseignements",
          steps: [
            { label: "Questions une par une", detail: "Pose chaque question préparée. Dialogue jusqu'à obtenir une réponse claire. Reformulations possibles si besoin." },
            { label: "Question libre finale", detail: "« Avez-vous un conseil ou un message à me transmettre librement ? » — étape importante, les réponses sont souvent surprenantes et précieuses." },
            { label: "Remerciements", detail: "Remerciement chaleureux des guides pour leur présence et leurs enseignements." },
          ],
        },
        {
          num: 4,
          title: "Sortie de transe & ressources",
          steps: [
            { label: "Suggestions post-hypnotiques", detail: "Les enseignements vont prendre sens dans les heures et jours qui suivent. Énergie d'amour des guides intégrée." },
            { label: "Sortie progressive", detail: "Réveil corporel doux, retour à l'ici-maintenant." },
            { label: "Debrief & écoute", detail: "Discussion post-séance importante — beaucoup de personnes ont besoin de partager ce qu'elles viennent de vivre." },
            { label: "Réécoute audio recommandée", detail: "L'enregistrement révèle souvent des subtilités passées inaperçues sur le moment." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Reformulation des questions", type: "Méthode", icon: "❓", desc: "« Si je fais X » au lieu de « Dois-je faire X ». Les guides donnent des informations, pas des choix." },
    { name: "Question libre finale", type: "Étape clé", icon: "💬", desc: "« Avez-vous un message à me transmettre librement ? » — réponses souvent les plus précieuses." },
    { name: "Enregistrement audio", type: "Document", icon: "🎙", desc: "Quasi-indispensable pour récupérer toute la richesse des enseignements." },
    { name: "Pratique régulière (2-4×/an)", type: "Posologie", icon: "🌙", desc: "Permet un suivi spirituel cohérent et un approfondissement progressif." },
  ],
  stats: [
    { val: "85%", label: "Réponses claires obtenues", sub: "selon la profondeur de la transe", color: colors.purple },
    { val: "0", label: "Choix faits par les guides", sub: "principe inviolable", color: colors.gold },
    { val: "5-10", label: "Questions par séance", sub: "selon le temps et l'énergie", color: colors.teal },
    { val: "2-4", label: "Séances par an", sub: "rythme idéal pour un suivi", color: colors.red },
  ],
  croyances: [
    "Les guides n'existent pas",
    "Si j'en avais, ils m'auraient déjà parlé",
    "Je suis trop ordinaire pour avoir des guides",
    "Les guides vont décider à ma place",
    "Mes questions sont trop banales pour les déranger",
  ],
};

// =====================================================================
// ID 508 — Nettoyage de printemps énergétique
// =====================================================================
const nettoyagePrintemps: ProtocolDetail = {
  protocolId: 508,
  efficacite: "Très élevée",
  efficaciteSub: "Sentiment de légèreté immédiat, changements concrets sur 2-4 semaines",
  description:
    "Version énergétique du célèbre nettoyage de printemps. Le client traverse une porte intérieure pour découvrir tous ses schémas mentaux obsolètes, croyances caduques et énergies étrangères. Avec l'esprit directeur, ces éléments sont collectés et transmutés par les flammes froides violettes dans une grande coupe d'or.",
  indications: [
    "Période de transition (changement de vie, déménagement, fin de cycle)",
    "Sentiment d'encombrement intérieur, de lassitude",
    "Démarrage d'un nouveau projet ou d'une nouvelle relation",
    "Suivi annuel ou bi-annuel d'hygiène énergétique",
    "Après une période de stress intense ou de surcharge émotionnelle",
  ],
  contraindications: [
    "Aucune contre-indication majeure (protocole doux)",
    "Symptômes psychotiques",
  ],
  programs: [
    {
      id: "principal",
      title: "Séance unique de nettoyage",
      icon: "🌸",
      duration: "1 × 60 min",
      color: colors.purple,
      recommended: true,
      description: "Protocole en aveugle (le client ne parle pas). Communication via signaux idéomoteurs uniquement. Pratique idéale en première séance ou en suivi régulier.",
      seances: [
        {
          num: 1,
          title: "Préparation & accès au jardin intérieur",
          steps: [
            { label: "Induction & signaux idéomoteurs", detail: "Approfondissement de la transe. Mise en place des signaux des doigts (oui / non / je ne sais pas)." },
            { label: "Passage vers le jardin intérieur", detail: "L'inconscient conduit le client vers son jardin intérieur — espace symbolique personnel." },
            { label: "Apparition de la porte", detail: "L'inconscient fait apparaître une porte derrière laquelle se trouvent tous les schémas, croyances et énergies obsolètes." },
            { label: "Franchissement & exploration", detail: "Le client découvre cet espace — cartons, objets, structures d'énergie, images. Tout y est ressenti individuellement." },
          ],
        },
        {
          num: 2,
          title: "Collecte & cadeau",
          steps: [
            { label: "Apparition des deux sacs", detail: "L'inconscient fait apparaître deux sacs : un pour le client, un pour l'esprit directeur." },
            { label: "Remplissage par le client", detail: "Le client met dans son sac tout ce qu'il veut recycler — objets, énergies, croyances. Action consciente." },
            { label: "Remplissage par l'esprit directeur", detail: "En parallèle, l'esprit directeur remplit son propre sac — instantanément et à la vitesse de la pensée — avec ce qu'il juge bon de voir recyclé." },
            { label: "Tableau du cadeau", detail: "L'inconscient fait apparaître un tableau. Le client y écrit en conscience une ressource qu'il s'offre (joie, amour, chance...) — et la ressent simultanément dans son corps." },
          ],
        },
        {
          num: 3,
          title: "Transmutation par les flammes froides",
          steps: [
            { label: "Évaluation des sacs", detail: "Le client soupèse les deux sacs. Prise de conscience du volume de ce qui est jugé inutile par les parties inconscientes." },
            { label: "Apparition de la coupe d'or", detail: "Dans le jardin, l'esprit directeur fait apparaître une grande coupe d'or contenant des flammes froides violettes — flammes énergétiques de transmutation." },
            { label: "Combustion violette", detail: "Le client jette les deux sacs dans le feu violet. Visualisation d'une énergie blanche qui se dégage et remplit le ciel du jardin." },
            { label: "Nettoyage parallèle par l'esprit directeur", detail: "L'esprit directeur effectue tous les nettoyages énergétiques liés à cette libération. Validation par signal." },
          ],
        },
        {
          num: 4,
          title: "Régénération & sortie",
          steps: [
            { label: "Descente de l'énergie blanche", detail: "L'énergie pure du ciel redescend sur le client et le remplit de la tête au pied — fraîcheur, disponibilité." },
            { label: "Suggestions post-hypnotiques", detail: "Énergie neuve disponible dès aujourd'hui. Changements naturels et sans effort dans les jours et semaines qui suivent." },
            { label: "Sortie de transe", detail: "Réveil corporel doux. Sensation de légèreté souvent immédiate." },
            { label: "Recommandations post-séance", detail: "Hydratation, marche dans la nature, écoute attentive des changements qui se mettent en place." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Jardin intérieur", type: "Espace symbolique", icon: "🌸", desc: "Lieu personnel propre à chaque client. Représente la psyché et l'inconscient." },
    { name: "Deux sacs (client + esprit directeur)", type: "Visualisation", icon: "👜", desc: "Le travail conscient + le travail des plans plus profonds — souvent un volume très différent." },
    { name: "Tableau du cadeau", type: "Visualisation", icon: "📋", desc: "Ressource consciemment choisie et ancrée corporellement avant la transmutation." },
    { name: "Coupe d'or aux flammes froides violettes", type: "Visualisation énergétique", icon: "🔥", desc: "Flammes de transmutation — recyclent l'impur en énergie pure et vierge sans destruction." },
  ],
  stats: [
    { val: "100%", label: "Sentiment de légèreté immédiat", sub: "ressenti en sortie de transe", color: colors.purple },
    { val: "2-4 sem.", label: "Manifestation des changements", sub: "concrets dans la vie quotidienne", color: colors.gold },
    { val: "1×/an", label: "Pratique recommandée", sub: "ou à chaque transition de vie", color: colors.teal },
    { val: "0", label: "Effets indésirables connus", sub: "protocole très doux", color: colors.red },
  ],
  croyances: [
    "Mes vieux schémas font partie de moi pour toujours",
    "Je n'ai pas le droit de me débarrasser de mon passé",
    "Si je change, je ne serai plus moi-même",
    "Je dois mériter d'être nettoyé·e",
    "Le changement durable n'existe pas",
  ],
};

// =====================================================================
// ID 509 — Réactivation des 14 couleurs
// =====================================================================
const quatorzeCouleurs: ProtocolDetail = {
  protocolId: 509,
  efficacite: "Mesurable",
  efficaciteSub: "Effet sur tonus et vitalité immédiat. Cumul à la pratique régulière",
  description:
    "Visualisation séquencée des 14 couleurs énergétiques fondamentales pour réactiver la capacité du corps à assimiler l'ensemble du spectre vibratoire dont il a besoin. Les couleurs difficiles à visualiser indiquent une carence à travailler. Exercice court, à répéter quotidiennement.",
  indications: [
    "Fatigue chronique sans cause médicale",
    "Hygiène énergétique quotidienne",
    "Pratique d'auto-soin entre les séances",
    "Récupération après maladie ou stress intense",
    "Pratique préventive simple à enseigner aux clients",
  ],
  contraindications: [
    "Aucune (exercice doux et sans risque)",
  ],
  programs: [
    {
      id: "principal",
      title: "Pratique quotidienne de 15 min",
      icon: "🌈",
      duration: "1 × 15 min/jour, idéalement le matin",
      color: colors.gold,
      recommended: true,
      description: "Pratiquable en transe ou en état de conscience ordinaire. Une fois maîtrisé, l'exercice devient fluide. Effets mesurables sur le tonus dès la première semaine.",
      seances: [
        {
          num: 1,
          title: "Apprentissage en cabinet",
          steps: [
            { label: "Présentation & anamnèse", detail: "Explication du principe : chaque couleur correspond à une fréquence vibratoire que le corps doit pouvoir assimiler." },
            { label: "Préparation matérielle", detail: "Nuancier des 14 couleurs prêt à proximité (utile si une couleur est difficile à visualiser mentalement)." },
            { label: "Première séance guidée", detail: "Le thérapeute guide pour les 14 couleurs successives. Identification des couleurs en carence (difficiles à visualiser)." },
            { label: "Enregistrement audio personnel", detail: "Création éventuelle d'un audio guidé personnalisé pour la pratique solo à domicile." },
          ],
        },
        {
          num: 2,
          title: "Protocole pour chaque couleur (×14)",
          steps: [
            { label: "Visualisation centrée poitrine", detail: "Placer la couleur au centre de la poitrine. La voir s'étendre dans tout le corps puis bien au-delà, dans toute la pièce." },
            { label: "Renforcement", detail: "Voir la couleur clairement partout. Renforcer ou raviver dans les endroits qui paraissent plus sombres ou faibles." },
            { label: "Décret triple", detail: "Se répéter mentalement 3 fois : « La couleur [nom] est parfaitement réactivée en tous mes corps maintenant »." },
            { label: "Ressenti vibratoire", detail: "Sentir la vibration spécifique de cette couleur dans le corps. Chaque couleur a sa signature." },
          ],
        },
        {
          num: 3,
          title: "Les 14 couleurs (séquence complète)",
          steps: [
            { label: "Spectre principal (7)", detail: "Rouge → Orange → Jaune → Vert → Rose → Bleu → Indigo." },
            { label: "Spectre subtil (7)", detail: "Blanc → Violet → Bleu-vert (turquoise) → Cuivré → Argenté → Doré → Nacré irisé." },
            { label: "Couleurs en carence", detail: "Si une couleur est difficile : ouvrir les yeux sur le nuancier, la mémoriser visuellement, puis reprendre l'exercice." },
            { label: "Bilan énergétique", detail: "Les couleurs durablement difficiles à visualiser indiquent des zones de travail à approfondir avec d'autres protocoles." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Nuancier des 14 couleurs", type: "Support visuel", icon: "🎨", desc: "Imprimé ou écran. Permet de réactiver visuellement les couleurs difficiles à visualiser mentalement." },
    { name: "Audio guidé personnalisé", type: "Support audio", icon: "🎧", desc: "Crée un guide pour la pratique quotidienne en autonomie." },
    { name: "Décret triple par couleur", type: "Mantra", icon: "🔮", desc: "Triple répétition pour ancrer la visualisation et le ressenti vibratoire." },
    { name: "Pratique cumulative", type: "Posologie", icon: "📅", desc: "Quotidien recommandé. Effet cumulatif sur la vitalité et la prévention." },
  ],
  stats: [
    { val: "14", label: "Couleurs fondamentales", sub: "à réactiver méthodiquement", color: colors.gold },
    { val: "15 min", label: "Durée d'une séance", sub: "une fois maîtrisé", color: colors.purple },
    { val: "1×/j", label: "Fréquence idéale", sub: "le matin de préférence", color: colors.teal },
    { val: "2-4", label: "Couleurs en carence moyenne", sub: "chez la plupart des personnes", color: colors.red },
  ],
  croyances: [
    "Je n'arrive pas à visualiser",
    "Mon imagination est trop pauvre",
    "Ces couleurs ne sont que symboliques",
    "Je n'ai pas le temps pour ça",
    "L'énergie ne suit pas la pensée",
  ],
};

// =====================================================================
// ID 510 — Mur de protection énergétique permanent
// =====================================================================
const murProtection: ProtocolDetail = {
  protocolId: 510,
  efficacite: "Très élevée",
  efficaciteSub: "Soulagement de l'oppression immédiat dès l'installation",
  description:
    "Création astrale d'un mur de protection permanent entre le client et une personne précise qui l'opprime énergétiquement (jalousie, colère, envoûtement). Le mur, recouvert de miroirs côté agresseur, renvoie toutes les énergies hostiles. Une fois créé, il suffit de le rappeler mentalement pour le réactiver.",
  indications: [
    "Personne identifiée qui draine ou attaque énergétiquement",
    "Sentiment d'oppression durable lié à un individu précis",
    "Suite à conflit relationnel non résolu (ex-conjoint, collègue, voisin, famille)",
    "Suspicion d'envoûtement conscient ou d'attaque magique",
    "Protection préventive après séparation difficile",
  ],
  contraindications: [
    "Origine du parasitage non identifiée (utiliser plutôt le désenvoûtement général)",
    "Refus du concept énergétique",
  ],
  programs: [
    {
      id: "principal",
      title: "Création unique — Permanent à vie",
      icon: "🛡",
      duration: "1 × 30-45 min (création) puis rappels en quelques secondes",
      color: colors.purple,
      recommended: true,
      description: "Pratique purement énergétique. Une fois créé, le mur existe pour l'éternité. Il suffit de le rappeler par la pensée pour qu'il reprenne effet immédiatement.",
      seances: [
        {
          num: 1,
          title: "Préparation & visualisation",
          steps: [
            { label: "Anamnèse précise", detail: "Identification claire de la personne à l'origine du parasitage. Description de l'oppression ressentie." },
            { label: "Centrage & espace neutre", detail: "Yeux fermés, recentrage corporel. Visualisation d'un espace neutre et vide (blanc par exemple)." },
            { label: "Visualisation de la personne", detail: "Voir la personne à quelque distance de soi dans cet espace." },
          ],
        },
        {
          num: 2,
          title: "Construction du mur",
          steps: [
            { label: "Mur opaque infini", detail: "Visualisation d'un mur opaque entre soi et la personne. Longueur infinie. Rectiligne (ne doit ni vous entourer ni l'entourer)." },
            { label: "Miroirs côté agresseur", detail: "Visualiser que le mur est couvert de miroirs du côté de la personne — renvoie toutes les énergies dirigées vers vous." },
            { label: "Retour des liens énergétiques", detail: "Visualiser que les énergies envoyées + les liens (tentacules) sont retournés à l'expéditeur." },
            { label: "Cheminée de lumière", detail: "Tube de la même énergie partant du haut du mur, montant à l'infini jusqu'au plan du haut-astral. Sommet en entonnoir." },
          ],
        },
        {
          num: 3,
          title: "Activation & alimentation",
          steps: [
            { label: "Soudure des éléments", detail: "Décret mental : « Tous les éléments de ce mur de protection sont réunis en un seul et même objet astral maintenant »." },
            { label: "Décret de fonction", detail: "« Ce mur renvoie sans exception toutes les énergies de [nom]. Je suis parfaitement coupé·e et protégé·e. Permanent et définitif. »" },
            { label: "Décret d'invisibilité", detail: "« Il est invisible au monde de l'invisible » — empêche les contournements." },
            { label: "Alimentation cosmique", detail: "Visualisation d'énergie blanche irisée descendant par la cheminée et alimentant le mur. Décret : « Énergie et matière astrale descendent en permanence. Renouvellement éternel. »" },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Décrets de soudure et fonction", type: "Mantras énergétiques", icon: "📜", desc: "Trois déclarations mentales structurent la création astrale : soudure, fonction, invisibilité." },
    { name: "Cheminée vers le haut-astral", type: "Visualisation", icon: "⬆", desc: "Source d'énergie permanente qui maintient le mur sans intervention humaine." },
    { name: "Miroirs côté agresseur", type: "Visualisation", icon: "🪞", desc: "Renvoient toutes les énergies hostiles à leur émetteur — protection passive automatique." },
    { name: "Rappel mental express", type: "Maintenance", icon: "⚡", desc: "« Je replace parfaitement le mur de protection maintenant » — quelques secondes suffisent." },
  ],
  stats: [
    { val: "100%", label: "Soulagement immédiat", sub: "dès la première activation", color: colors.purple },
    { val: "12h-2sem.", label: "Durée d'efficacité", sub: "très variable, à rappeler si besoin", color: colors.gold },
    { val: "∞", label: "Existence du mur", sub: "permanent, créé une seule fois", color: colors.teal },
    { val: "0", label: "Coût énergétique du rappel", sub: "une simple pensée suffit", color: colors.red },
  ],
  croyances: [
    "Je ne peux pas me protéger énergétiquement",
    "Ce que cette personne pense de moi ne peut pas m'atteindre",
    "Je dois subir cette relation",
    "Couper le lien serait agressif",
    "Mes pensées n'ont aucun pouvoir réel",
  ],
};

// =====================================================================
// ID 511 — Bulle de régénération durable
// =====================================================================
const bulleRegeneration: ProtocolDetail = {
  protocolId: 511,
  efficacite: "Mesurable",
  efficaciteSub: "Sensations énergétiques en quelques secondes. Effets quelques heures après activation",
  description:
    "Création astrale d'une bulle de régénération autour du corps qui fait descendre, sur appel, des énergies vertes (régénération), roses (recharge) et violettes (transmutation). Une fois créée, elle peut être rappelée à volonté ou « prêtée » à un patient en fin de séance.",
  indications: [
    "Récupération après séance d'énergétique ou de soin",
    "Fatigue passagère, besoin de recharge rapide",
    "Don énergétique régulier au client (fin de séance)",
    "Auto-soin des thérapeutes entre deux clients",
    "Convalescence après maladie ou opération",
  ],
  contraindications: [
    "Avant le coucher (peut provoquer des insomnies — l'énergie active)",
    "Aucune autre contre-indication connue",
  ],
  programs: [
    {
      id: "principal",
      title: "Création unique — Réutilisable à vie",
      icon: "💚",
      duration: "1 × 30 min (création) puis rappels en quelques secondes",
      color: colors.teal,
      recommended: true,
      description: "Pratique purement énergétique. Une fois créée, la bulle est rappelable à volonté. Possibilité de créer plusieurs bulles et d'en « prêter » une à un client.",
      seances: [
        {
          num: 1,
          title: "Visualisation & condensation",
          steps: [
            { label: "Centrage", detail: "Yeux fermés, recentrage corporel et respiration profonde." },
            { label: "Sphère matérielle autour du corps", detail: "Visualisation d'une sphère de lumière dense et matérielle (astrale) sur 1 m autour du corps." },
            { label: "Recharge initiale (3 min minimum)", detail: "Énergie blanche venant tout autour nourrir la sphère. Cette recharge ne se fait qu'une fois mais elle est cruciale. Ressentir les premiers mouvements énergétiques." },
            { label: "Cheminée vers le haut-astral", detail: "Tube de même énergie partant du haut, montant à l'infini, sommet en entonnoir dans le haut astral." },
          ],
        },
        {
          num: 2,
          title: "Soudure & fonction",
          steps: [
            { label: "Soudure des éléments", detail: "Décret : « Tous les éléments de cette bulle de régénération sont réunis en un seul et même objet astral maintenant »." },
            { label: "Décret de fonction", detail: "« Cette bulle fait descendre sur moi et en moi toutes les énergies de régénération dont mon corps a besoin à chaque utilisation. Guérit, ressource, recharge, nettoie par transmutation. »" },
            { label: "Décret d'invisibilité", detail: "« Elle est invisible au monde de l'invisible » — empêche les interférences." },
            { label: "Alimentation cosmique permanente", detail: "Visualisation d'énergie blanche irisée descendant par la cheminée. Décret de renouvellement éternel." },
          ],
        },
        {
          num: 3,
          title: "Activation des trois énergies",
          steps: [
            { label: "Énergie verte (régénération)", detail: "Vert électrique — soin et régénération des cellules et des organes." },
            { label: "Énergies roses (recharge)", detail: "Roses adaptées à recharger tous les corps — physique et subtils." },
            { label: "Flamme violette (transmutation)", detail: "Recycle les énergies impures ou étrangères encore présentes." },
            { label: "Décret d'activation permanente", detail: "« J'appelle [vert + roses + violet] à descendre puissamment dans cette bulle de régénération de manière permanente, à agir en moi, pour moi et autour de moi à chaque utilisation et aussi longtemps que cette bulle existera. »" },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Triple énergie verte/rose/violette", type: "Visualisation", icon: "🌈", desc: "Régénération + recharge + transmutation simultanées — la combinaison est plus puissante que chaque énergie seule." },
    { name: "Cheminée vers le haut-astral", type: "Visualisation", icon: "⬆", desc: "Source permanente. La bulle ne dépend plus du créateur." },
    { name: "Rappel express", type: "Maintenance", icon: "⚡", desc: "« J'installe ma bulle de régénération maintenant » — quelques secondes." },
    { name: "Prêt à un client", type: "Don énergétique", icon: "🎁", desc: "Le thérapeute peut prêter une bulle à un patient en fin de séance, sans même qu'il en soit informé." },
  ],
  stats: [
    { val: "30 min", label: "Création unique", sub: "une seule fois pour la vie", color: colors.teal },
    { val: "Quelques h", label: "Durée d'effet par activation", sub: "à rappeler si besoin", color: colors.gold },
    { val: "3", label: "Énergies combinées", sub: "vert + rose + violet", color: colors.purple },
    { val: "∞", label: "Bulles possibles", sub: "à créer et à prêter", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas le droit de me régénérer",
    "Mon épuisement est mon karma",
    "Je dois souffrir pour mériter du repos",
    "Les visualisations n'ont pas d'effet réel",
    "Je n'ai pas le temps de prendre soin de moi",
  ],
};

// =====================================================================
// ID 512 — Ancrage ciel-terre & ouverture du cœur
// =====================================================================
const ancrageCielTerre: ProtocolDetail = {
  protocolId: 512,
  efficacite: "Immédiate",
  efficaciteSub: "Rééquilibrage perceptible en 20-30 secondes",
  description:
    "Visualisation rapide pour rééquilibrer les énergies cosmo-telluriques. Trois ancrages successifs : racines vers le centre de la terre (yin/animalité), cheminée vers le ciel (yang/spirituel), vortex au cœur (alchimisation). Pratique courte à répéter plusieurs fois par jour.",
  indications: [
    "Sensation de « tête en l'air », difficulté de concentration",
    "À l'inverse : enfermement dans la matière, perte de connexion spirituelle",
    "Préparation à une séance, une décision, une présentation",
    "Recentrage entre deux clients (pour les thérapeutes)",
    "Pratique préventive quotidienne d'équilibre",
  ],
  contraindications: [
    "Aucune (exercice doux et bref)",
  ],
  programs: [
    {
      id: "principal",
      title: "Pratique express plusieurs fois par jour",
      icon: "☯",
      duration: "20-30 secondes une fois maîtrisé",
      color: colors.teal,
      recommended: true,
      description: "Le plus court de tous les protocoles. À répéter plusieurs fois par jour. Si les modes de pensée ne changent pas, le déséquilibre revient — d'où la pratique régulière.",
      seances: [
        {
          num: 1,
          title: "Apprentissage en cabinet",
          steps: [
            { label: "Présentation du modèle", detail: "Trois chakras inférieurs (terre/yin/animalité) + trois chakras supérieurs (ciel/yang/âme) + cœur (mitigeur)." },
            { label: "Diagnostic des déséquilibres", detail: "Identification du déséquilibre du client : trop spirituel (déconnecté du corps) ou trop matériel (coupé de l'intuition) ?" },
            { label: "Première pratique guidée", detail: "Le thérapeute guide les trois étapes. Sensations vérifiées par dialogue." },
            { label: "Mise en pratique quotidienne", detail: "Recommandation de répéter 3-5 fois par jour — au lever, avant chaque rendez-vous important, en pause." },
          ],
        },
        {
          num: 2,
          title: "Étape 1 — Ancrage à la terre",
          steps: [
            { label: "Visualisation pieds nus", detail: "Se voir pieds nus dans un milieu naturel (prairie, plage)." },
            { label: "Décret triple", detail: "Répéter mentalement plusieurs fois : « Je suis parfaitement ancré·e à la terre à cent pour cent »." },
            { label: "Racines rouges descendantes", detail: "Visualiser des racines énergétiques rouges partant des pieds, descendant en s'étendant jusqu'au centre de la terre." },
            { label: "Ressentis", detail: "Mouvement énergétique et densification dans le bas-ventre, le bassin et les reins." },
          ],
        },
        {
          num: 3,
          title: "Étape 2 — Connexion au ciel",
          steps: [
            { label: "Maintien de l'image précédente", detail: "Les racines restent en place pendant cette nouvelle visualisation." },
            { label: "Décret triple", detail: "Répéter mentalement plusieurs fois : « Je suis connecté·e à la pure lumière à cent pour cent »." },
            { label: "Tube de lumière descendant", detail: "Visualiser un tube de lumière venant d'une hauteur infinie, rempli d'énergies blanches, descendant par le sommet du crâne jusqu'au chakra du cœur." },
            { label: "Ressentis", detail: "Ouverture et pression au sommet du crâne, dans le cerveau, éventuellement dans le cou." },
          ],
        },
        {
          num: 4,
          title: "Étape 3 — Ouverture du cœur",
          steps: [
            { label: "Maintien des deux images précédentes", detail: "Les racines + le tube de lumière restent en place." },
            { label: "Décret triple", detail: "Répéter mentalement plusieurs fois : « Je suis dans l'ouverture et l'équilibre, dans le cœur à cent pour cent »." },
            { label: "Vortex vert au cœur", detail: "Visualiser un petit vortex de 20 cm de diamètre, à l'avant et à l'arrière de la poitrine, baigné de lumière verte." },
            { label: "Ressentis", detail: "Ouverture et pression énergétique dans la poitrine. Sensation d'apaisement et de centrage." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Triple décret par étape", type: "Mantras", icon: "🔮", desc: "Répétition mentale qui ancre l'intention et active la visualisation." },
    { name: "Couleurs spécifiques", type: "Visualisation", icon: "🎨", desc: "Rouge pour la terre, blanc pour le ciel, vert pour le cœur — fréquences précises." },
    { name: "Maintien des trois images", type: "Technique", icon: "🧘", desc: "Les trois ancrages se cumulent et restent actifs simultanément." },
    { name: "Pratique express (20-30 sec)", type: "Posologie", icon: "⚡", desc: "Une fois maîtrisé, l'exercice est très bref. Répéter plusieurs fois par jour." },
  ],
  stats: [
    { val: "20-30 sec", label: "Durée maîtrisée", sub: "le protocole le plus court", color: colors.teal },
    { val: "3-5×/j", label: "Fréquence recommandée", sub: "pratique préventive quotidienne", color: colors.gold },
    { val: "3", label: "Étapes successives", sub: "qui se cumulent", color: colors.purple },
    { val: "Immédiat", label: "Effet ressenti", sub: "rééquilibrage perceptible", color: colors.red },
  ],
  croyances: [
    "Je suis trop dans ma tête, je n'arrive pas à m'ancrer",
    "Le spirituel est incompatible avec la matière",
    "Je dois choisir entre ciel et terre",
    "Mon corps n'est pas un temple",
    "L'équilibre n'est pas pour moi",
  ],
};

// =====================================================================
// ID 513 — Coque de lumière du thérapeute
// =====================================================================
const coqueTherapeute: ProtocolDetail = {
  protocolId: 513,
  efficacite: "Indispensable",
  efficaciteSub: "Outil fondamental — sans coque, pas de pratique sécurisée en énergétique",
  description:
    "Création astrale d'une coque de protection énergétique pour le thérapeute (et toute personne sensible). Protège des rééquilibrages naturels d'énergie en présence d'autres personnes, du vampirisme énergétique, des énergies agressives, des entités du bas-astral. Une fois créée, elle est rappelable en une pensée.",
  indications: [
    "Tous les thérapeutes en énergétique ou hypnose spirituelle (impératif)",
    "Travail avec des entités (libération d'âmes)",
    "Personnes très sensibles aux énergies (clairvoyantes, empathiques)",
    "Transports en commun, lieux chargés (réunions tendues)",
    "Contact avec personnes en colère ou faibles énergétiquement",
  ],
  contraindications: [
    "Aucune (outil purement protecteur)",
  ],
  programs: [
    {
      id: "principal",
      title: "Création unique — Indispensable",
      icon: "🛡",
      duration: "1 × 30 min (création) puis rappels en quelques secondes",
      color: colors.gold,
      recommended: true,
      description: "Pratique fondamentale. Permet d'être protégé en toute circonstance par un simple appel mental.",
      seances: [
        {
          num: 1,
          title: "Visualisation & dédoublement",
          steps: [
            { label: "Centrage", detail: "Yeux fermés, recentrage corporel." },
            { label: "Dédoublement", detail: "Se visualiser de l'extérieur — soit là où l'on est, soit dans un jardin intérieur de son choix." },
            { label: "Sphère de lumière dense matérielle", detail: "Visualiser autour de ce corps une sphère de lumière dense qui se condense jusqu'à devenir matière astrale transparente, sur 1 m tout autour." },
            { label: "Trou de 7 cm au troisième œil", detail: "Indispensable : intégrer un trou de 7 cm en face du troisième œil pour ne pas être coupé de la sensibilité relationnelle." },
            { label: "Recharge initiale (3 min)", detail: "Énergie blanche tout autour, nourrissant la sphère. Cette recharge unique est cruciale. Ressentis énergétiques perceptibles." },
          ],
        },
        {
          num: 2,
          title: "Cheminée & soudure",
          steps: [
            { label: "Cheminée vers le haut-astral", detail: "Tube de même énergie partant du haut, montant à l'infini, sommet en entonnoir." },
            { label: "Soudure", detail: "Décret : « Tous les éléments de cette coque de protection sont réunis en un seul et même objet astral maintenant »." },
            { label: "Décret de fonction", detail: "« Cette coque m'isole de toutes les énergies vibratoirement inférieures ou égales aux miennes et protège mes énergies de la dispersion ou du parasitage. »" },
            { label: "Décret d'invisibilité", detail: "« Elle est invisible au monde de l'invisible »." },
          ],
        },
        {
          num: 3,
          title: "Alimentation & test",
          steps: [
            { label: "Alimentation cosmique permanente", detail: "Énergie blanche irisée descendant par la cheminée. Décret de renouvellement éternel." },
            { label: "Test optionnel", detail: "Avec un complice sensible : il aspire votre énergie d'une main à distance. Vous appelez votre coque. Il sent un blocage et ne peut plus tirer d'énergie." },
            { label: "Validation du fonctionnement", detail: "Renvoyer puis rappeler la coque plusieurs fois pour valider la maîtrise." },
            { label: "Maintenance future", detail: "Rappeler la coque toutes les heures dans les contextes exigeants (transports, conflits, séances avec entités)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Trou de 7 cm au troisième œil", type: "Détail crucial", icon: "👁", desc: "Sans cette ouverture, la coque coupe la sensibilité relationnelle nécessaire au thérapeute." },
    { name: "Cheminée vers le haut-astral", type: "Visualisation", icon: "⬆", desc: "Source d'énergie permanente. La coque s'auto-alimente." },
    { name: "Pierre de Stibine en complément", type: "Minéral", icon: "💎", desc: "Pour le travail avec entités, complément énergétique de la coque. Nettoyer en terre 24h régulièrement." },
    { name: "Test du complice sensible", type: "Validation", icon: "🤝", desc: "Permet de vérifier objectivement que la création astrale est fonctionnelle." },
  ],
  stats: [
    { val: "3h", label: "Durée d'efficacité par appel", sub: "à rappeler dans les contextes longs", color: colors.gold },
    { val: "∞", label: "Existence de la coque", sub: "permanente, créée une seule fois", color: colors.purple },
    { val: "7 cm", label: "Trou au troisième œil", sub: "détail crucial à ne pas oublier", color: colors.teal },
    { val: "0", label: "Effet sur les énergies supérieures", sub: "ne bloque que ce qui est nuisible", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas besoin de protection",
    "Cette protection est une illusion",
    "Si je me protège, je me coupe des autres",
    "Je suis trop sensible, c'est ma nature",
    "Les énergies des autres ne m'affectent pas",
  ],
};

// =====================================================================
// ID 514 — Tamis de lumière — auto-nettoyage
// =====================================================================
const tamisLumiere: ProtocolDetail = {
  protocolId: 514,
  efficacite: "Cumulative",
  efficaciteSub: "Effet partiel par séance, cumulatif à la pratique régulière",
  description:
    "Outil simple d'auto-nettoyage énergétique pour le thérapeute. Visualisation d'un tamis de lumière à mille couches qu'on fait descendre au travers du corps pour aspirer les énergies étrangères, puis qu'on projette au centre de la terre pour recyclage. À pratiquer plusieurs fois par jour, en particulier entre deux clients.",
  indications: [
    "Tous les thérapeutes (rituel entre deux clients)",
    "Personnes sensibles après un contact difficile",
    "Récupération après un événement chargé émotionnellement",
    "Hygiène énergétique quotidienne en autonomie",
    "Préparation avant méditation ou sommeil",
  ],
  contraindications: [
    "Aucune (outil simple et sans risque)",
  ],
  programs: [
    {
      id: "principal",
      title: "Pratique express plusieurs fois par jour",
      icon: "☄",
      duration: "1-3 minutes par passage",
      color: colors.purple,
      recommended: true,
      description: "Pratique très brève. Plus on l'utilise, plus le nettoyage est complet. Rituel idéal entre chaque client.",
      seances: [
        {
          num: 1,
          title: "Préparation",
          steps: [
            { label: "Position debout", detail: "Bras levés au-dessus de la tête, paumes face à face. Espace mental clair." },
            { label: "Tamis énergétique", detail: "Visualiser un tamis de lumière blanche entre les deux mains — rond ou carré, composé de mille couches fines superposées (une par fréquence vibratoire)." },
            { label: "Dimension", detail: "Le tamis doit dépasser le corps d'au moins 25 cm de chaque côté." },
          ],
        },
        {
          num: 2,
          title: "Décret & traversée",
          steps: [
            { label: "Décret de fonction", detail: "Mentalement ou à voix haute : « Ce tamis énergétique emporte avec lui toutes les énergies étrangères à mon être, sur toutes les fréquences vibratoires »." },
            { label: "Descente lente et consciente", detail: "Faire descendre le tamis lentement à travers le corps, des mains vers le sol. Conscience attentive aux sensations." },
            { label: "Détection des résistances", detail: "Si vous pratiquez correctement : sensations de résistance au niveau des mains quand le tamis traverse une zone congestionnée. Mouvements énergétiques internes perceptibles." },
            { label: "Recyclage au centre de la terre", detail: "Une fois au sol, projeter le tamis avec les énergies emportées vers le centre de la terre pour recyclage." },
          ],
        },
        {
          num: 3,
          title: "Cumul et répétition",
          steps: [
            { label: "Création d'un nouveau tamis", detail: "Si nécessaire (résistances détectées, sensation incomplète) : créer immédiatement un autre tamis et recommencer." },
            { label: "Répéter jusqu'au passage fluide", detail: "Continuer jusqu'à ce que plus aucune résistance ne se manifeste lors de la traversée." },
            { label: "Pratique quotidienne", detail: "Plusieurs fois par jour donne un cumul intéressant. Idéal entre chaque client." },
            { label: "Limites & complémentarité", detail: "L'outil n'enlève pas tout (certaines énergies enracinées résistent). Combiner avec coque de protection en amont (prévention)." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Tamis à mille couches", type: "Visualisation", icon: "☄", desc: "Une couche par fréquence vibratoire. Couvre l'ensemble du spectre énergétique." },
    { name: "Décret unique", type: "Mantra", icon: "🔮", desc: "Une seule formule simple à mémoriser. Active la fonction du tamis." },
    { name: "Recyclage au centre de la terre", type: "Visualisation", icon: "🌍", desc: "Évite de polluer l'environnement. La terre transmute naturellement les énergies." },
    { name: "Effet cumulatif", type: "Posologie", icon: "📈", desc: "Plus on l'utilise, plus on en enlève. Pratique régulière > pratique unique." },
  ],
  stats: [
    { val: "1-3 min", label: "Durée par passage", sub: "à répéter si nécessaire", color: colors.purple },
    { val: "1000", label: "Couches du tamis", sub: "une par fréquence vibratoire", color: colors.gold },
    { val: "Plusieurs/j", label: "Fréquence idéale", sub: "rituel entre chaque client", color: colors.teal },
    { val: "Cumulatif", label: "Type d'effet", sub: "amélioration progressive", color: colors.red },
  ],
  croyances: [
    "Je ne suis pas affecté·e par les énergies des autres",
    "Mon nettoyage doit être parfait du premier coup",
    "Je n'ai pas le temps entre deux clients",
    "Les visualisations n'ont pas d'effet réel",
    "Mon corps gère seul, je n'ai rien à faire",
  ],
};

// =====================================================================
// Export consolidé
// =====================================================================
export const spirituelDetails: Record<number, ProtocolDetail> = {
  500: recupererRessources,
  501: reparationKarmique,
  502: contratsAmes,
  503: contratVie,
  504: entreVie,
  505: liberationAmes,
  506: desenvoutement,
  507: guidance,
  508: nettoyagePrintemps,
  509: quatorzeCouleurs,
  510: murProtection,
  511: bulleRegeneration,
  512: ancrageCielTerre,
  513: coqueTherapeute,
  514: tamisLumiere,
};
