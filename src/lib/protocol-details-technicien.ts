import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Technicien PNL & Hypnose (IDs 873-894).
 * Source : GS Formation — PNL & Hypnose Tech V3 (Technicien HYPNOSE & PNL).
 * Couverture exhaustive du module Technicien.
 */

const make = (
  id: number,
  efficacite: string,
  efficaciteSub: string,
  description: string,
  indications: string[],
  contraindications: string[],
  programTitle: string,
  duration: string,
  programColor: string,
  programDescription: string,
  seanceTitle: string,
  steps: { label: string; detail: string }[],
  outils: { name: string; type: string; icon: string; desc: string }[],
  stats: { val: string; label: string; sub: string; color: string }[],
  croyances: string[]
): ProtocolDetail => ({
  protocolId: id,
  efficacite,
  efficaciteSub,
  description,
  indications,
  contraindications,
  programs: [
    {
      id: "principal",
      title: programTitle,
      icon: "◑",
      duration,
      color: programColor,
      recommended: true,
      description: programDescription,
      seances: [{ num: 1, title: seanceTitle, steps }],
    },
  ],
  outils,
  stats,
  croyances,
});

const commeSi = make(
  873, "Projection", "Le client agit comme s'il avait déjà la ressource",
  "Outil PNL fondamental : faire agir le client « comme si » il avait déjà la ressource ou l'objectif. Permet de contourner les résistances conscientes et d'accéder immédiatement aux compétences latentes. Utilisé en entrée de séance ou en cours d'intervention.",
  ["Résistance consciente au changement", "Compétence latente à activer", "Test rapide d'un objectif", "Préparation à un travail PNL plus large"],
  ["Refus catégorique du jeu de rôle", "Trauma actif (préférer la stabilisation)"],
  "Cadre « comme si » — En séance",
  "15-30 min (intégrable)",
  colors.purple,
  "À insérer en début ou cours de séance pour activer une ressource ou tester un objectif.",
  "Étapes du cadre",
  [
    { label: "Identification de la ressource", detail: "« De quelle ressource auriez-vous besoin pour atteindre votre objectif ? Confiance, calme, créativité... »" },
    { label: "Pose du cadre", detail: "« Imaginez que vous avez déjà cette ressource pleinement. Comment vous tenez-vous ? Comment respirez-vous ? Que faites-vous de différent ? »" },
    { label: "Calibration externe", detail: "Le praticien observe les changements posturaux, vocaux, faciaux qui apparaissent." },
    { label: "Amplification", detail: "« Encore plus... ressentez-le encore plus pleinement. »" },
    { label: "Ancrage de l'état ", detail: "Geste discret pour fixer l'état ressource." },
    { label: "Pont sur le futur", detail: "« Avec cette ressource, comment abordez-vous votre situation ? »" },
  ],
  [
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Détection des micro-changements." },
    { name: "Ancrage spatial", type: "PNL", icon: "📍", desc: "Geste ou position pour fixer l'état." },
    { name: "Pont sur le futur", type: "Visualisation", icon: "🌉", desc: "Application immédiate à la situation." },
  ],
  [
    { val: "15-30", label: "Minutes", sub: "intégrable à toute séance", color: colors.purple },
    { val: "100%", label: "Réversible", sub: "le client revient à son état normal", color: colors.gold },
  ],
  ["Je ne peux pas faire semblant", "Si je n'ai pas la ressource, je ne peux pas l'imaginer"]
);

const cercleExcellence = make(
  874, "Empilement", "Plusieurs ressources sur un même ancrage spatial",
  "Création d'un cercle imaginaire au sol dans lequel le client empile plusieurs états ressources (confiance, calme, joie). En entrant dans le cercle, le client active immédiatement l'état composé. Outil d'auto-régulation puissant et autonome.",
  ["Préparation à un événement stressant", "Outil d'auto-régulation quotidien", "Renforcement avant performance", "Travail estime de soi"],
  ["Manque de capacité d'imagerie spatiale", "Refus de l'exercice corporel"],
  "Cercle d'excellence — Installation",
  "30-45 min",
  colors.gold,
  "Création + empilement de 3-5 ressources + test + auto-utilisation.",
  "Les 6 étapes du cercle",
  [
    { label: "Création du cercle", detail: "« Imaginez un cercle au sol devant vous. Quelle couleur ? Quelle taille ? » Le client visualise précisément." },
    { label: "Choix de la 1ère ressource", detail: "« Quelle est la première ressource dont vous avez besoin ? Confiance, calme... »" },
    { label: "Accès intense à la ressource", detail: "Revivification d'un moment où la ressource était présente. Ressenti pleinement." },
    { label: "Entrée dans le cercle au pic", detail: "Au moment de l'intensité maximale, le client entre dans son cercle. Ancrage spatial." },
    { label: "Empilement des ressources suivantes", detail: "Sortir du cercle, accéder à la 2ème ressource, entrer au pic. Répéter pour 3-5 ressources." },
    { label: "Test", detail: "Sortir du cercle, briser l'état, revenir. En entrant : toutes les ressources s'activent simultanément." },
    { label: "Auto-utilisation", detail: "« Vous pouvez créer ce cercle mentalement avant tout événement important. »" },
  ],
  [
    { name: "Visualisation spatiale", type: "Technique", icon: "🔵", desc: "Cercle au sol — couleur, taille, texture." },
    { name: "Empilement de ressources", type: "PNL", icon: "📚", desc: "3 à 5 ressources sur un même ancrage." },
    { name: "Auto-activation autonome", type: "Outil", icon: "✨", desc: "Le client utilise seul son cercle." },
  ],
  [
    { val: "3-5", label: "Ressources empilées", sub: "état composé puissant", color: colors.gold },
    { val: "30 min", label: "Pour installer", sub: "+ utilisation quotidienne", color: colors.purple },
  ],
  ["Je n'arrive pas à visualiser", "Mes ressources me lâchent quand j'en ai besoin"]
);

const positionsPerceptuelles = make(
  875, "3 positions", "1ère (soi) — 2ème (l'autre) — 3ème (observateur)",
  "Travail sur 3 positions perceptuelles : 1ère (soi), 2ème (l'autre), 3ème (observateur extérieur). Le tourniquet permet de visiter les 3 positions successivement pour résoudre un conflit ou comprendre une situation relationnelle.",
  ["Conflit relationnel récurrent", "Préparation à conversation difficile", "Compréhension d'une situation complexe", "Travail systémique (couple, équipe)"],
  ["Refus d'incarner l'autre", "Trauma relationnel actif (préférer stabilisation)"],
  "Tourniquet des positions perceptuelles",
  "45-60 min",
  colors.teal,
  "3 positions au sol + tourniquet successif + intégration.",
  "Étapes du tourniquet",
  [
    { label: "Marquage au sol", detail: "3 positions matérialisées : 1 (soi), 2 (l'autre), 3 (observateur extérieur)." },
    { label: "Position 1 — Soi", detail: "Le client se tient en position 1, décrit la situation depuis son point de vue. Sensations, pensées, émotions." },
    { label: "Position 2 — L'autre", detail: "Le client se déplace en position 2, INCARNE l'autre. Voit-toi en position 1. Que ressent-il ? Que pense-t-il ?" },
    { label: "Position 3 — Observateur", detail: "Le client se déplace en position 3. Observe les deux protagonistes de l'extérieur. Que voit-il ? Quels sont les besoins de chacun ?" },
    { label: "Tourniquet ", detail: "Refaire 1-2-3 plusieurs fois jusqu'à ce que de nouvelles compréhensions émergent." },
    { label: "Retour en position 1", detail: "Avec les apprentissages des positions 2 et 3, comment voit-on la situation maintenant ?" },
    { label: "Plan d'action", detail: "Que fait le client différemment dès maintenant ?" },
  ],
  [
    { name: "Marquage spatial", type: "Technique", icon: "🟦", desc: "3 positions au sol distinctes." },
    { name: "Incarnation de l'autre", type: "Empathie", icon: "🎭", desc: "Position 2 — incarner pleinement." },
    { name: "Observateur extérieur", type: "Méta", icon: "👀", desc: "Position 3 — vue systémique." },
  ],
  [
    { val: "3", label: "Positions perceptuelles", sub: "soi / l'autre / observateur", color: colors.teal },
    { val: "Tourniquet", label: "Aller-retours", sub: "jusqu'à insight", color: colors.gold },
  ],
  ["Je ne peux pas comprendre l'autre", "L'autre a tort, point", "Je suis trop impliqué pour voir"]
);

const sousModalites = make(
  876, "Modulation", "Qualités fines des représentations mentales",
  "Modulation des qualités fines (sous-modalités) des représentations mentales : luminosité, taille, distance, son, température. En modifiant les sous-modalités d'une image limitante, on transforme le ressenti associé.",
  ["Image mentale persistante (souvenir, peur, désir)", "Préparation au Swish ou autre travail visuel", "Modulation d'une émotion liée à une représentation"],
  ["Manque de capacité d'imagerie mentale"],
  "Travail des sous-modalités sensorielles",
  "30-45 min",
  colors.clientBlue,
  "Identification des SM critiques + modulation + ancrage.",
  "Étapes clés",
  [
    { label: "Identification de l'image cible", detail: "« Quelle image vous vient quand vous pensez à X ? » Précision visuelle." },
    { label: "Cartographie des sous-modalités", detail: "Visuelles : couleur, brillance, taille, distance, mouvement, cadre. Auditives : volume, ton, rythme. Kinesthésiques : pression, température, intensité." },
    { label: "Identification des SM critiques", detail: "Lesquelles, modifiées, changent le ressenti ? Test : éloigner l'image, l'éclaircir, la mettre en N&B." },
    { label: "Construction de l'image cible", detail: "Quelle version transformée produit le meilleur ressenti ?" },
    { label: "Ancrage de la nouvelle image", detail: "Fixation de la nouvelle représentation par geste, mot, ou simple répétition." },
    { label: "Test futur", detail: "« Quand vous penserez à X, c'est cette nouvelle image qui viendra. »" },
  ],
  [
    { name: "Cartographie SM", type: "Grille", icon: "🎚", desc: "Tous les axes visuels, auditifs, kinesthésiques." },
    { name: "SM critiques", type: "Diagnostic", icon: "🎯", desc: "Celles qui changent le ressenti." },
    { name: "Image cible ancrée", type: "Visualisation", icon: "✨", desc: "Nouvelle représentation fixée." },
  ],
  [
    { val: "VAK", label: "Canaux modulés", sub: "visuel + auditif + kinesthésique", color: colors.clientBlue },
    { val: "30-45", label: "Minutes", sub: "selon nombre de SM testées", color: colors.gold },
  ],
  ["Je ne contrôle pas mes images mentales", "Les images sont ce qu'elles sont"]
);

const associationDissociation = make(
  877, "Émotionnel", "Modulation volontaire de l'intensité",
  "Apprentissage volontaire de l'association (immersion totale dans une expérience) et de la dissociation (recul observateur). Permet de moduler l'intensité émotionnelle : amplifier le positif, désamorcer le négatif.",
  ["Émotion envahissante à désamorcer", "Ressource positive à amplifier", "Préparation au travail trauma léger", "Outil quotidien d'auto-régulation"],
  ["Trauma sévère (préférer EMDR ou trauma complexe)", "Dissociation pathologique"],
  "Apprentissage association/dissociation",
  "30-45 min",
  colors.red,
  "Démonstration des deux modes + test + intégration.",
  "Étapes",
  [
    { label: "Démonstration de l'association", detail: "Souvenir agréable revécu de l'intérieur (« vos yeux dans les yeux du moi de l'époque »). Intensité maximale." },
    { label: "Démonstration de la dissociation", detail: "Même souvenir vu de l'extérieur (« regardez-vous comme dans un film »). Intensité atténuée." },
    { label: "Application au positif", detail: "Pour amplifier une ressource : ASSOCIER pleinement." },
    { label: "Application au négatif", detail: "Pour désamorcer une émotion difficile : DISSOCIER (recul observateur)." },
    { label: "Sous-modalités du film", detail: "Si dissocié : N&B, distance, écran lointain, son baissé." },
    { label: "Auto-utilisation au quotidien", detail: "Le client apprend à choisir son mode selon la situation." },
  ],
  [
    { name: "Mode associé", type: "Technique", icon: "👤", desc: "De l'intérieur — intensité max." },
    { name: "Mode dissocié", type: "Technique", icon: "🎬", desc: "De l'extérieur — recul observateur." },
    { name: "Sous-modalités du film", type: "Modulation", icon: "🎞", desc: "N&B, distance, son pour atténuer." },
  ],
  [
    { val: "2", label: "Modes maîtrisés", sub: "associé / dissocié", color: colors.red },
    { val: "Auto", label: "Régulation autonome", sub: "outil quotidien", color: colors.gold },
  ],
  ["Mes émotions me submergent", "Je n'ai pas le choix de ressentir"]
);

const generateurComportement = make(
  878, "Création", "Visualisation + ajustement + ancrage d'un nouveau comportement",
  "Protocole structuré pour créer un nouveau comportement : visualisation dissociée du comportement souhaité, ajustement, association et test. Particulièrement utile pour acquérir une compétence comportementale précise.",
  ["Acquisition d'une nouvelle compétence comportementale", "Préparation à une situation nouvelle", "Modélisation de soi au futur", "Performance et présentation publique"],
  ["Demande trop floue (préférer SCORE pour cartographier d'abord)"],
  "Générateur de nouveau comportement",
  "45 min",
  colors.purple,
  "Visualisation dissociée + ajustement + association + test.",
  "Étapes du protocole",
  [
    { label: "Précision du comportement", detail: "« Que voulez-vous faire précisément ? Dans quel contexte ? »" },
    { label: "Visualisation dissociée ", detail: "Le client se voit (de l'extérieur) accomplir le comportement. Comme un film." },
    { label: "Ajustement ", detail: "« Y a-t-il quelque chose à modifier ? Posture, ton, geste ? » Itération jusqu'à satisfaction." },
    { label: "Association ", detail: "Le client entre dans le film, vit le comportement de l'intérieur." },
    { label: "Test sensoriel ", detail: "Ressenti pleinement satisfaisant ? Si non, retour à l'ajustement dissocié." },
    { label: "Pont sur le futur ", detail: "« Quand vous serez en situation, c'est ce comportement qui émergera naturellement. »" },
    { label: "Vérification écologique ", detail: "« Une partie de vous a-t-elle une objection à ce nouveau comportement ? »" },
  ],
  [
    { name: "Visualisation dissociée", type: "Technique", icon: "🎬", desc: "Vue extérieure pour ajuster." },
    { name: "Association sensorielle", type: "Technique", icon: "👤", desc: "Vue intérieure pour ressentir." },
    { name: "Itération ajustement", type: "Process", icon: "🔁", desc: "Modifier jusqu'à satisfaction." },
  ],
  [
    { val: "45 min", label: "Pour générer", sub: "un comportement précis", color: colors.purple },
    { val: "100%", label: "Construit mentalement", sub: "avant la pratique réelle", color: colors.gold },
  ],
  ["Je n'arrive pas à imaginer le faire", "Je dois le faire pour de vrai pour apprendre"]
);

const clonage = make(
  879, "Modélisation", "Adoption rapide d'un modèle inspirant",
  "Forme rapide de modélisation : le client se « clone » sur un modèle (réel ou imaginaire) qui possède la ressource ou la compétence visée. Adoption immédiate de la posture, de la voix, du regard, des stratégies internes.",
  ["Préparation à une performance importante", "Adoption rapide d'une posture (autorité, calme...)", "Modélisation d'un mentor", "Travail estime de soi"],
  ["Refus de s'inspirer de l'extérieur", "Trauma identitaire (préférer travail identité)"],
  "Le clonage — Adoption rapide",
  "30-45 min",
  colors.gold,
  "Choix du modèle + observation détaillée + adoption + test.",
  "Étapes du clonage",
  [
    { label: "Choix du modèle", detail: "« Qui possède pleinement la ressource dont vous avez besoin ? » Réel ou imaginaire." },
    { label: "Observation détaillée", detail: "Comment se tient-il ? Comment respire-t-il ? Quel ton de voix ? Quel regard ? Quelles convictions ?" },
    { label: "Position 2 — Incarnation ", detail: "Le client se met physiquement « dans la peau » du modèle. Position perceptuelle 2." },
    { label: "Sentir de l'intérieur ", detail: "Quelles sensations, quelles pensées, quelles convictions habitent ce modèle ?" },
    { label: "Retour en soi avec l'apport ", detail: "Le client revient dans son corps, mais en CONSERVANT les ressources captées." },
    { label: "Test ", detail: "Application immédiate à la situation visée." },
  ],
  [
    { name: "Position 2 perceptuelle", type: "PNL", icon: "🎭", desc: "Incarnation du modèle." },
    { name: "Cartographie du modèle", type: "Observation", icon: "📋", desc: "Posture, voix, convictions." },
    { name: "Conservation des ressources", type: "Technique", icon: "✨", desc: "Garder ce qui est utile." },
  ],
  [
    { val: "30 min", label: "Pour cloner", sub: "une ressource extérieure", color: colors.gold },
    { val: "1", label: "Modèle suffit", sub: "réel ou imaginaire", color: colors.purple },
  ],
  ["Je ne peux pas être comme eux", "Imiter, c'est tricher"]
);

const indexComputation = make(
  880, "Cartographie", "Séquence VAKOG d'un état",
  "Cartographie de la séquence interne (V-A-K-O-G) qui produit un état ou un comportement. L'index de computation révèle « comment » le client construit son expérience subjective. Étape diagnostic préalable au travail PNL.",
  ["Diagnostic préalable à modélisation", "Compréhension d'un état problématique", "Préparation à un changement précis", "Coaching de performance"],
  ["Demande trop floue", "Manque de précision sensorielle du client"],
  "Cartographie de l'index de computation",
  "30-45 min",
  colors.clientBlue,
  "Identification de la séquence VAKOG qui produit l'état.",
  "Étapes",
  [
    { label: "Choix de l'état/comportement à cartographier", detail: "Précision : « Quand exactement, dans quelle situation ? »" },
    { label: "Revivification ", detail: "Le client revit la situation. Le praticien observe les indices d'accès oculaires." },
    { label: "Question 1ère étape ", detail: "« Qu'est-ce qui se passe en premier ? Voyez-vous quelque chose ? Entendez-vous ? Ressentez-vous ? »" },
    { label: "Suite séquentielle ", detail: "« Et après ? Et après ? » Le praticien note V-A-K-O-G dans l'ordre." },
    { label: "Identification du canal dominant ", detail: "Quel canal revient le plus souvent ? C'est le canal préférentiel du client." },
    { label: "Restitution au client ", detail: "Le client comprend SA façon de construire l'état. Conscience accrue." },
    { label: "Préparation du travail ", detail: "Avec l'index, le praticien choisit le bon outil PNL (Swish si visuel, ancrage si kinesthésique...)." },
  ],
  [
    { name: "Indices d'accès oculaires", type: "Observation", icon: "👁", desc: "Mouvements des yeux révélateurs." },
    { name: "Notation séquentielle", type: "Document", icon: "📝", desc: "V-A-K-O-G dans l'ordre." },
    { name: "Identification canal dominant", type: "Diagnostic", icon: "🎯", desc: "Préférentiel du client." },
  ],
  [
    { val: "VAKOG", label: "5 canaux mappés", sub: "ordre + dominant", color: colors.clientBlue },
    { val: "Diagnostic", label: "Étape", sub: "avant tout travail PNL ciblé", color: colors.gold },
  ],
  ["Je ne sais pas comment je fonctionne", "C'est trop technique pour moi"]
);

const etatsInternes = make(
  881, "Conscience", "Identifier et calibrer les états internes",
  "Travail d'identification précise des états internes (émotion, sensation, pensée, posture) et de leur calibration externe. Outil de base pour toute intervention PNL : observer, nommer, moduler.",
  ["Premier travail avec un client", "Développement de la conscience émotionnelle", "Préparation à toute intervention PNL", "Outil quotidien"],
  ["Refus de l'introspection", "Crise aiguë (préférer le soutien direct)"],
  "Identification & calibration des états",
  "30 min (intégré)",
  colors.teal,
  "Travail intégré à toute première séance.",
  "Étapes",
  [
    { label: "Question d'ouverture ", detail: "« Comment vous sentez-vous précisément ? Pas un mot global, des sensations. »" },
    { label: "Précision corporelle ", detail: "« Où dans le corps ? Quelle taille ? Quelle texture ? Quelle température ? »" },
    { label: "Calibration externe ", detail: "Le praticien observe : posture, respiration, micro-expressions, ton de voix." },
    { label: "Nommage partagé ", detail: "« Vous appellez cela X. C'est l'état X. »" },
    { label: "Modulation test ", detail: "« Si on diminuait l'intensité, ça se passerait comment ? »" },
    { label: "Apprentissage continu ", detail: "Le client développe sa propre cartographie d'états au fil des séances." },
  ],
  [
    { name: "Précision corporelle", type: "Technique", icon: "🫀", desc: "Localisation, taille, texture." },
    { name: "Calibration externe", type: "Observation", icon: "👁", desc: "Posture, respiration, micro-expressions." },
    { name: "Nommage partagé", type: "Communication", icon: "🏷", desc: "Le client nomme son état." },
  ],
  [
    { val: "30 min", label: "Premier travail", sub: "puis intégré", color: colors.teal },
    { val: "5", label: "Dimensions", sub: "émotion + sensation + pensée + posture + vocal", color: colors.gold },
  ],
  ["Je ne sais pas ce que je ressens", "Mes émotions sont confuses"]
);

const boussoleLangage = make(
  882, "Prédicats", "Cartographie des canaux sensoriels via le langage",
  "Outil de cartographie linguistique : repérage des prédicats sensoriels (visuels, auditifs, kinesthésiques, olfactifs/gustatifs) dans le discours du client pour identifier son canal dominant et synchroniser sa propre communication.",
  ["Premier entretien d'un client", "Renforcement du rapport thérapeutique", "Préparation à un travail précis (Swish, ancrage)", "Coaching et communication"],
  ["Manque d'écoute attentive du praticien"],
  "Boussole du langage — Cartographie",
  "15-30 min (intégré)",
  colors.gold,
  "Écoute active + relevé des prédicats + synchronisation.",
  "Étapes",
  [
    { label: "Écoute attentive du discours ", detail: "Le client raconte sa situation. Le praticien écoute le CONTENU et la FORME." },
    { label: "Relevé des prédicats ", detail: "« Je VOIS, c'est CLAIR » → V. « J'ENTENDS, ça SONNE faux » → A. « Je SENS, c'est DUR » → K." },
    { label: "Identification du canal dominant ", detail: "Quel type de prédicats revient le plus souvent ?" },
    { label: "Synchronisation ", detail: "Le praticien adapte SES prédicats au canal dominant du client." },
    { label: "Validation discrète ", detail: "Le rapport se renforce. Le client se sent écouté en profondeur." },
    { label: "Choix d'outils alignés ", detail: "Visuel → Swish, sous-modalités. Kinesthésique → ancrage. Auditif → métaphore vocale." },
  ],
  [
    { name: "Grille de prédicats VAKOG", type: "Référence", icon: "🧭", desc: "Vocabulaire par canal." },
    { name: "Synchronisation langagière", type: "Technique", icon: "🔄", desc: "Adapter ses prédicats." },
    { name: "Choix d'outils alignés", type: "Stratégie", icon: "🎯", desc: "PNL adaptée au canal." },
  ],
  [
    { val: "VAKOG", label: "5 canaux mappés", sub: "via le langage", color: colors.gold },
    { val: "Rapport++", label: "Renforcement", sub: "écoute en profondeur", color: colors.purple },
  ],
  ["J'écoute ce qui est dit, pas comment", "Tout le monde parle pareil"]
);

const erreursCognitives = make(
  883, "Recadrage", "Identification & transformation des distorsions cognitives",
  "Identification et recadrage des erreurs cognitives classiques : étiquetage global, généralisation abusive, pensée binaire, filtrage négatif. Inspirée de la TCC croisée avec la PNL.",
  ["Pensée pessimiste récurrente", "Étiquetage négatif de soi (« je suis nul »)", "Pensée binaire (tout ou rien)", "Filtrage négatif systématique"],
  ["Dépression sévère (suivi médical en parallèle)", "Refus de questionner ses croyances"],
  "Erreurs cognitives — Identification & recadrage",
  "45 min",
  colors.red,
  "Cartographie des distorsions + recadrage systématique.",
  "Les distorsions clés",
  [
    { label: "Étiquetage global ", detail: "« Je suis nul. » → Recadrage : « J'ai échoué à cette tâche précise, dans ce contexte précis. »" },
    { label: "Généralisation abusive ", detail: "« Je rate TOUJOURS. » → « Citez-moi 3 situations où vous avez réussi. »" },
    { label: "Pensée binaire ", detail: "« C'est parfait ou c'est nul. » → « Sur une échelle de 1 à 10, où exactement ? »" },
    { label: "Filtrage négatif ", detail: "Ne voit que les négatifs. → « Citez-moi 3 éléments positifs de la même situation. »" },
    { label: "Personnalisation ", detail: "« C'est ma faute. » → « Qui d'autre a contribué à cette situation ? »" },
    { label: "Catastrophisation ", detail: "« Et si... le pire arrive ? » → « Et si ça se passait moyennement ? Ou bien ? »" },
    { label: "Apprentissage de l'auto-recadrage ", detail: "Le client repère ses propres distorsions et les recadre lui-même." },
  ],
  [
    { name: "Grille des 6 distorsions", type: "Référence", icon: "📋", desc: "Catalogue des erreurs cognitives." },
    { name: "Recadrage systématique", type: "Technique", icon: "🔄", desc: "Question de précision." },
    { name: "Auto-recadrage", type: "Outil", icon: "✏", desc: "Le client devient autonome." },
  ],
  [
    { val: "6", label: "Distorsions clés", sub: "à identifier", color: colors.red },
    { val: "TCC+PNL", label: "Approche croisée", sub: "puissance combinée", color: colors.gold },
  ],
  ["Je suis nul", "Je rate toujours", "Tout est noir ou blanc"]
);

const langageTransformationnel = make(
  884, "Reformulation", "Du négatif vers le positif, du subi vers le choisi",
  "Apprentissage de la reformulation transformationnelle : passer du négatif au positif, du subi au choisi, du global au précis. Outil quotidien du praticien et du client.",
  ["Auto-coaching quotidien", "Modification de la perception par le langage", "Cadrage thérapeutique permanent"],
  ["Refus du travail linguistique"],
  "Langage transformationnel — Apprentissage",
  "30 min (intégré)",
  colors.purple,
  "Démonstration + entraînement + auto-pratique.",
  "Patterns de reformulation",
  [
    { label: "Négatif → Positif ", detail: "« Je ne veux plus de stress » → « Je veux du calme. »" },
    { label: "Subi → Choisi ", detail: "« Je dois faire » → « Je choisis de faire. »" },
    { label: "Global → Précis ", detail: "« Tout va mal » → « Aujourd'hui, dans cette situation précise, je ressens X. »" },
    { label: "Passé → Présent ", detail: "« J'aurais dû » → « Que puis-je faire maintenant ? »" },
    { label: "Problème → Objectif ", detail: "« J'ai un blocage » → « Je veux aller vers... »" },
    { label: "Auto-pratique quotidienne ", detail: "Le client repère ses formulations et les transforme. Carnet d'observation." },
  ],
  [
    { name: "Grille de reformulation", type: "Référence", icon: "📝", desc: "5 patterns de transformation." },
    { name: "Auto-observation", type: "Outil", icon: "👁", desc: "Carnet quotidien." },
  ],
  [
    { val: "5", label: "Patterns clés", sub: "négatif/positif, subi/choisi...", color: colors.purple },
    { val: "Quotidien", label: "Pratique", sub: "outil d'auto-coaching", color: colors.gold },
  ],
  ["Les mots ne changent pas la réalité", "C'est superficiel"]
);

const strategieCompetences = make(
  885, "Reconnexion", "Restauration d'une compétence perdue",
  "Protocole pour retrouver une compétence perdue ou bloquée (parler en public, créativité, mémoire). Reconnexion au moment où la compétence existait, identification de la stratégie sous-jacente, restauration.",
  ["Perte récente d'une compétence (post-traumatique léger, post-burnout)", "Blocage soudain (writer's block, trac)", "Coaching de performance"],
  ["Trauma majeur ayant bloqué la compétence (préférer trauma)", "Compétence jamais acquise"],
  "Stratégie pour retrouver ses compétences",
  "60 min",
  colors.teal,
  "Reconnexion + cartographie + restauration.",
  "Étapes",
  [
    { label: "Identification de la compétence perdue ", detail: "« Quelle compétence aviez-vous, qui ne fonctionne plus ? »" },
    { label: "Souvenir de la compétence active ", detail: "« Souvenez-vous d'un moment précis où vous l'aviez pleinement. »" },
    { label: "Cartographie de la stratégie d'alors ", detail: "Index de computation : V → A → K → ... Quelle séquence interne ?" },
    { label: "Identification du blocage récent ", detail: "« Qu'est-ce qui a changé entre alors et maintenant ? »" },
    { label: "Recadrage du blocage ", detail: "Travail sur la cause identifiée (croyance, événement, contexte)." },
    { label: "Restauration de la stratégie ", detail: "Reproduction consciente de la stratégie d'alors. Test." },
    { label: "Pont sur le futur ", detail: "Application à une situation concrète. La compétence revient." },
  ],
  [
    { name: "Index de computation", type: "Diagnostic", icon: "🧭", desc: "Cartographie de la stratégie d'alors." },
    { name: "Cartographie du blocage", type: "Analyse", icon: "🚧", desc: "Cause récente identifiée." },
    { name: "Restauration consciente", type: "Technique", icon: "🔄", desc: "Reproduction de la stratégie." },
  ],
  [
    { val: "60 min", label: "Pour reconnecter", sub: "une compétence perdue", color: colors.teal },
    { val: "Stratégie", label: "Restaurée", sub: "celle qui marchait avant", color: colors.gold },
  ],
  ["J'ai perdu ça pour toujours", "Je ne sais plus comment je faisais"]
);

const souvenirAgreable = make(
  886, "Induction douce", "Première mise en transe rassurante",
  "Induction simple et rassurante via un souvenir agréable du client. Première mise en transe douce, idéale pour les débutants ou les craintifs. Permet l'ancrage d'un état ressource.",
  ["Premier contact avec l'hypnose", "Client craintif ou anxieux face à l'hypnose", "Ancrage d'une ressource accessible", "Préparation à des inductions plus avancées"],
  ["Manque de souvenir agréable accessible (préférer autre induction)", "Trauma actif sur tous les souvenirs"],
  "Induction par souvenir agréable",
  "20-30 min",
  colors.purple,
  "Choix du souvenir + induction + ancrage + sortie.",
  "Étapes",
  [
    { label: "Choix du souvenir ", detail: "« Souvenez-vous d'un moment agréable de votre vie. Pas le plus intense, juste agréable. »" },
    { label: "Précision sensorielle ", detail: "« Où étiez-vous ? Que voyiez-vous ? Qu'entendiez-vous ? Que ressentiez-vous ? »" },
    { label: "Immersion progressive ", detail: "« Replongez-vous dans cette scène. Comme si vous y étiez à nouveau. »" },
    { label: "Approfondissement par les sens ", detail: "Détails de plus en plus fins. La transe s'installe." },
    { label: "Ancrage du ressenti ", detail: "Geste discret pour fixer l'état (poignet, main)." },
    { label: "Sortie progressive ", detail: "Comptage 1-5, retour aux sensations corporelles." },
    { label: "Auto-utilisation ", detail: "« Vous pouvez réactiver ce ressenti par votre ancrage, à volonté. »" },
  ],
  [
    { name: "Souvenir agréable", type: "Ressource", icon: "🌅", desc: "Pas le plus intense, juste agréable." },
    { name: "Précision VAKOG", type: "Technique", icon: "🎬", desc: "Détails sensoriels riches." },
    { name: "Ancrage kinesthésique", type: "PNL", icon: "👌", desc: "Geste de réactivation." },
  ],
  [
    { val: "20-30", label: "Minutes", sub: "première séance idéale", color: colors.purple },
    { val: "100%", label: "Sécurité", sub: "le client garde le contrôle", color: colors.gold },
  ],
  ["Je n'ai pas de souvenirs agréables", "Je vais perdre le contrôle", "L'hypnose me fait peur"]
);

const machinePhrases = make(
  887, "Génération", "Combinaison mécanique de patterns Milton",
  "Outil pédagogique pour générer mécaniquement des phrases hypnotiques en combinant patterns Milton, prédicats sensoriels et liens logiques. Permet au praticien débutant de fluidifier son discours hypnotique.",
  ["Praticien débutant en hypnose", "Préparation avant séance réelle", "Entraînement à l'improvisation hypnotique", "Maîtrise des patterns Milton"],
  ["Praticien avancé (outil dépassé)"],
  "Machine à phrases — Entraînement",
  "15-20 min (entraînement)",
  colors.gold,
  "Tableau de patterns + génération combinatoire + lecture à voix haute.",
  "Étapes d'entraînement",
  [
    { label: "Tableau des patterns Milton ", detail: "Colonne 1 : pacing (« vous êtes assis... »). Colonne 2 : lien (« et... »). Colonne 3 : leading (« vous pouvez vous détendre... »)." },
    { label: "Combinaisons systématiques ", detail: "Combiner ligne 1 + ligne 1 + ligne 1, puis 1+1+2, etc." },
    { label: "Lecture à voix haute ", detail: "Chaque phrase générée est lue calmement, comme une induction." },
    { label: "Auto-écoute ", detail: "Le praticien s'enregistre, écoute son flow. Fluidité." },
    { label: "Variation des prédicats ", detail: "Insérer des prédicats VAKOG variés. Adaptation au canal du futur client." },
    { label: "Suppression progressive du tableau ", detail: "Le praticien improvise sans support." },
  ],
  [
    { name: "Tableau de patterns", type: "Outil", icon: "📊", desc: "3 colonnes combinables." },
    { name: "Auto-enregistrement", type: "Apprentissage", icon: "🎙", desc: "Écoute critique de son flow." },
  ],
  [
    { val: "100s", label: "Combinaisons possibles", sub: "à partir de 10×10×10 patterns", color: colors.gold },
    { val: "15 min", label: "Entraînement quotidien", sub: "1 mois pour automatisation", color: colors.purple },
  ],
  ["Je ne saurai jamais improviser", "Mon discours est plat"]
);

const induction4321 = make(
  888, "Structure", "Décompte sensoriel VAKOG",
  "Induction structurée par décompte sensoriel : 4 perceptions visuelles, 3 auditives, 2 kinesthésiques, 1 imaginaire ; puis reprise inverse 1-2-3-4. Approfondissement progressif et sécurisant.",
  ["Praticien débutant cherchant une induction sûre", "Client peu suggestible", "Approche structurée et reproductible", "Préparation à un travail thérapeutique"],
  ["Client en crise (trop structuré)", "Trouble de l'attention sévère"],
  "Induction 4-3-2-1 (VAKOG)",
  "15-20 min",
  colors.clientBlue,
  "Décompte VAKOG aller + retour inverse.",
  "Étapes",
  [
    { label: "Position confortable ", detail: "Le client s'installe, ferme les yeux ou fixe un point." },
    { label: "Phase 4 visuel ", detail: "« Si vous ouvrez les yeux, citez-moi 4 choses que vous VOYEZ. » Ou en imagination si yeux fermés." },
    { label: "Phase 3 auditif ", detail: "« Citez-moi 3 sons que vous ENTENDEZ. »" },
    { label: "Phase 2 kinesthésique ", detail: "« Citez-moi 2 sensations que vous RESSENTEZ. »" },
    { label: "Phase 1 imaginaire ", detail: "« Imaginez 1 chose agréable. »" },
    { label: "Retour inverse ", detail: "1 imaginaire → 2 K → 3 A → 4 V. La transe s'approfondit à chaque étape." },
    { label: "Travail thérapeutique ", detail: "Une fois la transe stabilisée, début du travail prévu." },
  ],
  [
    { name: "Décompte structuré", type: "Technique", icon: "🔢", desc: "4-3-2-1 puis 1-2-3-4." },
    { name: "Approche VAKOG complète", type: "PNL", icon: "🎚", desc: "Tous les canaux activés." },
    { name: "Reproductible", type: "Pédagogie", icon: "🔁", desc: "Idéal pour praticien débutant." },
  ],
  [
    { val: "15-20", label: "Minutes", sub: "induction complète", color: colors.clientBlue },
    { val: "VAKOG", label: "5 canaux", sub: "activation complète", color: colors.gold },
  ],
  ["Les inductions sont mystérieuses", "Je ne saurai pas faire"]
);

const cinqElements = make(
  889, "Symbolique", "Traversée des 5 éléments naturels",
  "Induction par évocation des 5 éléments naturels (terre, eau, feu, air, éther). Le client traverse en imagination chaque élément, ressent ses qualités, intègre les ressources associées. Approche poétique et symbolique.",
  ["Client sensible à l'imaginaire et au symbolique", "Travail spirituel ou énergétique", "Préparation à un travail Reiki ou hypnose spirituelle", "Approche poétique"],
  ["Client purement rationnel", "Refus du symbolique"],
  "Induction aux 5 éléments",
  "30-45 min",
  colors.teal,
  "Traversée successive de chaque élément + intégration.",
  "Étapes",
  [
    { label: "Position couchée ou assise ", detail: "Confort optimal, respiration calme." },
    { label: "Terre — Ancrage ", detail: "« Imaginez la terre sous vos pieds. Stable, solide, nourricière. Ressentez son ancrage. »" },
    { label: "Eau — Fluidité ", detail: "« Imaginez l'eau qui coule. Souple, adaptable, purifiante. Laissez-la traverser votre corps. »" },
    { label: "Feu — Énergie ", detail: "« Imaginez la flamme. Chaleur, transformation, vitalité. Sentez-la rayonner depuis votre cœur. »" },
    { label: "Air — Liberté ", detail: "« Imaginez le vent. Mouvement, légèreté, respiration. Laissez-le traverser votre esprit. »" },
    { label: "Éther — Conscience ", detail: "« Imaginez l'espace infini. Présence pure, conscience, unité. Reposez-vous dans cet espace. »" },
    { label: "Intégration ", detail: "« Tous les éléments sont en vous, accessibles à tout moment. »" },
  ],
  [
    { name: "Visualisation symbolique", type: "Technique", icon: "🌍", desc: "Chaque élément en image et ressenti." },
    { name: "Approche poétique", type: "Style", icon: "🎨", desc: "Métaphores naturelles riches." },
    { name: "Intégration spirituelle", type: "Profondeur", icon: "🧘", desc: "Connexion aux ressources élémentales." },
  ],
  [
    { val: "5", label: "Éléments traversés", sub: "terre, eau, feu, air, éther", color: colors.teal },
    { val: "30-45", label: "Minutes", sub: "induction complète", color: colors.gold },
  ],
  ["C'est trop ésotérique", "Je n'ai pas d'imagination", "Les éléments c'est pour les enfants"]
);

const elementsNaturels = make(
  890, "Immersion", "Inductions par paysages naturels",
  "Inductions inspirées de la nature : ruisseau, forêt, montagne, océan, vent. Métaphores naturelles soutenues par évocation sensorielle riche. Approfondissement par immersion progressive dans le paysage.",
  ["Client aimant la nature", "Recherche d'apaisement profond", "Première induction douce", "Travail de ressourcement"],
  ["Phobies spécifiques (eau, hauteurs, forêt)", "Trauma associé à un type de paysage"],
  "Inductions par éléments naturels",
  "20-30 min",
  colors.teal,
  "Choix du paysage + immersion sensorielle + approfondissement.",
  "Étapes",
  [
    { label: "Choix du paysage ", detail: "« Quel paysage naturel vous apaise le plus ? Forêt, plage, montagne, prairie ? »" },
    { label: "Mise en place sensorielle ", detail: "« Que voyez-vous ? Quelles couleurs, quelle lumière ? »" },
    { label: "Sons ", detail: "« Quels sons percevez-vous ? Vent, eau, oiseaux ? »" },
    { label: "Sensations corporelles ", detail: "« Quelle température sur votre peau ? Quelle texture sous vos pieds ? »" },
    { label: "Mouvement dans le paysage ", detail: "« Marchez doucement dans ce lieu. Découvrez. » Le client explore, la transe s'approfondit." },
    { label: "Lieu ressource ", detail: "« Trouvez un endroit particulièrement apaisant. Asseyez-vous. C'est votre lieu sûr. »" },
    { label: "Travail thérapeutique ou sortie ", detail: "Soit on poursuit le travail dans ce cadre, soit on revient." },
  ],
  [
    { name: "Banque de paysages", type: "Référence", icon: "🏞", desc: "Forêt, plage, montagne, prairie..." },
    { name: "Immersion sensorielle", type: "Technique", icon: "🎬", desc: "VAKOG riche." },
    { name: "Lieu sûr", type: "Ressource", icon: "🏝", desc: "Espace de retour permanent." },
  ],
  [
    { val: "5+", label: "Paysages disponibles", sub: "selon préférence client", color: colors.teal },
    { val: "20-30", label: "Minutes", sub: "induction + travail", color: colors.gold },
  ],
  ["Je ne saurai pas visualiser", "La nature ne m'apaise pas"]
);

const tunnel = make(
  891, "Approfondissement", "Descente symbolique",
  "Métaphore du tunnel pour approfondir la transe : le client descend dans un tunnel, chaque pas approfondit l'état. Au bout du tunnel, accès à un espace ressource ou à une scène thérapeutique.",
  ["Client déjà en transe légère ou moyenne", "Préparation à un travail profond", "Accès à un espace symbolique", "Régression ou voyage intérieur"],
  ["Phobies des espaces fermés (préférer escalier ou chemin)", "Claustrophobie sévère"],
  "Technique du tunnel — Approfondissement",
  "15-20 min (intégré)",
  colors.navy,
  "Descente progressive + arrivée à l'espace cible.",
  "Étapes",
  [
    { label: "Préparation ", detail: "Le client est déjà en transe légère ou moyenne." },
    { label: "Présentation du tunnel ", detail: "« Devant vous apparaît un tunnel. Quelle couleur ? Quelle taille ? Comment est-il éclairé ? »" },
    { label: "Entrée ", detail: "« Entrez doucement. Vous sentez l'air différent, plus calme. »" },
    { label: "Descente comptée ", detail: "« À chaque pas vers l'avant, votre transe s'approfondit. 10... 9... 8... »" },
    { label: "Approfondissement progressif ", detail: "« Plus vous avancez, plus profondément vous entrez en vous-même. »" },
    { label: "Arrivée ", detail: "« Au bout du tunnel, une lumière. Vous arrivez dans un espace... » (ressource, scène thérapeutique, voyage)." },
    { label: "Pont vers le travail ", detail: "Le travail prévu commence depuis ce nouvel espace." },
  ],
  [
    { name: "Métaphore visuelle", type: "Hypnose", icon: "🚇", desc: "Tunnel personnalisé par le client." },
    { name: "Comptage descendant", type: "Technique", icon: "🔢", desc: "10 → 0, approfondissement progressif." },
    { name: "Lumière au bout", type: "Symbolique", icon: "💡", desc: "Émergence dans l'espace cible." },
  ],
  [
    { val: "10→0", label: "Comptage descendant", sub: "approfondissement", color: colors.navy },
    { val: "15-20", label: "Minutes", sub: "intégré à la séance", color: colors.gold },
  ],
  ["Je n'aime pas les tunnels", "Je vais perdre le contact"]
);

const reprendreEsprits = make(
  892, "Sortie sécurisée", "Retour pleinement présent et intégré",
  "Protocole structuré de sortie de transe : reconnexion progressive aux sensations corporelles, comptage 1-5, ancrage des acquis, débrief court. Garantit un retour pleinement présent et intégré.",
  ["Fin de toute séance d'hypnose", "Sortie d'une transe profonde", "Sécurité du client (conduite, retour à l'activité)"],
  ["Aucune contre-indication"],
  "Sortie de transe — Protocole standard",
  "5-10 min (en fin de séance)",
  colors.clientOrange,
  "Reconnexion + ancrage + débrief.",
  "Étapes de sortie",
  [
    { label: "Annonce de la sortie ", detail: "« Dans quelques instants, je vais vous compter de 1 à 5 et vous reviendrez. »" },
    { label: "Ancrage des acquis ", detail: "« Tout ce que vous avez appris dans cette transe reste pleinement avec vous. »" },
    { label: "Comptage 1 ", detail: "« 1... vous commencez à sentir votre corps. »" },
    { label: "Comptage 2-3 ", detail: "« 2... 3... vos jambes, vos bras retrouvent leur tonus. »" },
    { label: "Comptage 4 ", detail: "« 4... vous prenez une grande inspiration, vous étirez. »" },
    { label: "Comptage 5 ", detail: "« 5... pleinement présent, ouvrez les yeux. Bienvenue. »" },
    { label: "Débrief court ", detail: "« Comment vous sentez-vous ? » Vérification de l'état avant départ." },
    { label: "Recommandations post-séance ", detail: "Boire de l'eau, ne pas conduire pendant 15 min si transe profonde." },
  ],
  [
    { name: "Comptage 1-5", type: "Protocole", icon: "🔢", desc: "Reconnexion progressive." },
    { name: "Ancrage des acquis", type: "Suggestion", icon: "✅", desc: "Conservation du travail." },
    { name: "Débrief court", type: "Vérification", icon: "💬", desc: "Confirmation du retour." },
  ],
  [
    { val: "5-10", label: "Minutes", sub: "obligatoire en fin de séance", color: colors.clientOrange },
    { val: "100%", label: "Sécurité", sub: "retour intégré", color: colors.gold },
  ],
  ["Je vais rester en transe", "Je ne pourrai pas me réveiller"]
);

const chevauchement = make(
  893, "Transition", "D'un canal sensoriel à un autre",
  "Technique de transition douce d'un canal sensoriel à un autre (V→A→K→O→G) pour faciliter la transe ou enrichir une représentation. Particulièrement utile pour les clients monosensoriels.",
  ["Client monosensoriel (uniquement V, ou A, ou K)", "Enrichissement d'une représentation pauvre", "Préparation à induction VAKOG complète"],
  ["Aucune contre-indication"],
  "Chevauchement VAKOG — Transition",
  "15-20 min (intégré)",
  colors.clientBlue,
  "Démarrage sur le canal dominant + chevauchement vers les autres.",
  "Étapes",
  [
    { label: "Identification du canal dominant ", detail: "« Que percevez-vous le plus fort ? L'image, le son, la sensation ? »" },
    { label: "Démarrage sur le canal dominant ", detail: "Si V dominant : « Voyez la scène... les couleurs... la lumière. »" },
    { label: "Chevauchement V→A ", detail: "« Et en regardant cette scène, vous commencez à entendre les sons qui l'accompagnent. »" },
    { label: "Chevauchement A→K ", detail: "« Et en entendant ces sons, vous commencez à ressentir l'ambiance dans votre corps. »" },
    { label: "Chevauchement K→O ", detail: "« Et cette sensation s'accompagne d'une odeur subtile... »" },
    { label: "Chevauchement O→G ", detail: "« Et avec cette odeur, peut-être un goût léger sur la langue... »" },
    { label: "Représentation enrichie ", detail: "Le client a maintenant une expérience VAKOG complète, à partir de son canal préférentiel." },
  ],
  [
    { name: "Identification dominante", type: "Diagnostic", icon: "🎯", desc: "Canal préférentiel." },
    { name: "Liens hypnotiques", type: "Linguistique", icon: "🔗", desc: "« Et... », « En... »" },
    { name: "Représentation enrichie", type: "Résultat", icon: "🌈", desc: "VAKOG complet." },
  ],
  [
    { val: "VAKOG", label: "5 canaux activés", sub: "à partir d'un seul", color: colors.clientBlue },
    { val: "15-20", label: "Minutes", sub: "intégré", color: colors.gold },
  ],
  ["Je n'ai qu'un seul canal", "Je ne peux pas tout ressentir"]
);

const epEdEco = make(
  894, "Cartographie", "État Présent → État Désiré → État de Conscience Optimale",
  "Modèle PNL de changement : État Présent (EP) → État Désiré (ED) → État de Conscience Optimale (ECO). Cartographie en 3 temps qui structure toute intervention PNL et garantit l'écologie.",
  ["Première séance d'un parcours PNL", "Demande complexe", "Vérification de l'écologie d'un objectif", "Coaching stratégique"],
  ["Demande très simple (outil disproportionné)"],
  "Cartographie EP/ED/ECO",
  "45-60 min",
  colors.purple,
  "Cartographie des 3 états + identification du chemin + plan d'action.",
  "Étapes",
  [
    { label: "EP — État Présent ", detail: "« Décrivez précisément votre situation actuelle. Sensations, pensées, comportements. »" },
    { label: "Calibration de l'EP ", detail: "Le praticien observe les marqueurs corporels associés à l'EP." },
    { label: "ED — État Désiré ", detail: "« Précisément que voulez-vous à la place ? Critères observables. »" },
    { label: "Calibration de l'ED ", detail: "Le client visualise/incarne brièvement l'ED. Marqueurs corporels notés." },
    { label: "ECO — État de Conscience Optimale ", detail: "« Quel état de conscience facilite le passage de EP à ED ? Confiance, calme, créativité ? »" },
    { label: "Vérification écologique ", detail: "« Le ED est-il compatible avec votre vie globale ? Une partie a-t-elle une objection ? »" },
    { label: "Identification du chemin ", detail: "Quels outils PNL utiliser pour passer de EP à ED via ECO ? Plan d'action." },
  ],
  [
    { name: "Cartographie en 3 états", type: "Modèle", icon: "🗺", desc: "EP → ED → ECO." },
    { name: "Calibration corporelle", type: "Observation", icon: "👁", desc: "Marqueurs de chaque état." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Évite le sabotage." },
  ],
  [
    { val: "3", label: "États cartographiés", sub: "EP / ED / ECO", color: colors.purple },
    { val: "45-60", label: "Minutes", sub: "première séance", color: colors.gold },
  ],
  ["Je ne sais pas ce que je veux vraiment", "Mon problème est trop complexe à analyser"]
);

export const technicienDetails: Record<number, ProtocolDetail> = {
  873: commeSi,
  874: cercleExcellence,
  875: positionsPerceptuelles,
  876: sousModalites,
  877: associationDissociation,
  878: generateurComportement,
  879: clonage,
  880: indexComputation,
  881: etatsInternes,
  882: boussoleLangage,
  883: erreursCognitives,
  884: langageTransformationnel,
  885: strategieCompetences,
  886: souvenirAgreable,
  887: machinePhrases,
  888: induction4321,
  889: cinqElements,
  890: elementsNaturels,
  891: tunnel,
  892: reprendreEsprits,
  893: chevauchement,
  894: epEdEco,
};
