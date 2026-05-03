import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Maîtres Praticiens & techniques avancées (IDs 840-872).
 * Sources : GS Formation modules avancés (Maître Praticien Hypnose, Maître Praticien PNL,
 * Hypnose Ericksonienne avancée, PNL & Hypnose techniques combinées).
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

// ===== MAÎTRE PRATICIEN HYPNOSE (840-844) =====

const hypnoConv = make(
  840,
  "Sans induction",
  "Communication hypnotique intégrée à la conversation ordinaire",
  "Communication hypnotique sans induction formelle. Le client reste en état de conscience ordinaire mais reçoit des suggestions thérapeutiques par le langage Milton (vague, permissif, multi-sens). Particulièrement utile pour les résistants à l'hypnose formelle, les enfants, ou en complément d'autres approches.",
  ["Client résistant à l'hypnose formelle", "Travail avec les enfants", "Contexte coaching ou consultation médicale brève", "Intégration à toute approche thérapeutique", "Premier contact avant une éventuelle induction formelle"],
  ["Manque total de coopération", "Refus explicite de toute approche hypnotique", "Contexte d'urgence vitale (privilégier le médical)"],
  "Hypnose conversationnelle — Milton model",
  "60 min (intégrable à toute séance)",
  colors.purple,
  "Approche permissive intégrant les patterns Milton dans le dialogue thérapeutique normal.",
  "Patterns Milton & suggestions intégrées",
  [
    { label: "Calibration & rapport", detail: "Synchronisation posture, rythme, respiration, vocabulaire. Création d'un climat propice." },
    { label: "Présuppositions linguistiques", detail: "« Quand vous remarquerez ce changement... », « Avant que vous ne décidiez... ». Le changement est posé comme acquis." },
    { label: "Pacing & leading", detail: "Reformulation de l'expérience du client (pacing) puis orientation douce vers la ressource (leading)." },
    { label: "Truismes en chaîne", detail: "Empilement de vérités évidentes (« vous êtes assis ici, vous m'écoutez, vous respirez... ») pour ouvrir un yes-set inconscient." },
    { label: "Vague Milton — citations & métaphores", detail: "Insertion de suggestions par citations indirectes (« Mon mentor disait toujours... ») ou métaphores." },
    { label: "Suggestion post-conversationnelle", detail: "Ancrage d'une intention de changement à activer dans une situation future précise." },
  ],
  [
    { name: "Patterns Milton model", type: "Linguistique", icon: "💬", desc: "11 patterns hypnotiques permissifs maîtrisés." },
    { name: "Pacing & leading", type: "Technique", icon: "🔄", desc: "Synchronisation puis guidage." },
    { name: "Métaphores en série", type: "Technique", icon: "📖", desc: "Histoires emboîtées pour suggestion indirecte." },
  ],
  [
    { val: "11", label: "Patterns Milton à maîtriser", sub: "vague et permissif", color: colors.purple },
    { val: "0", label: "Induction formelle requise", sub: "transe conversationnelle", color: colors.gold },
  ],
  ["Je dois être hypnotisé pour changer", "Je résiste à toute manipulation"]
);

const sexotherapie = make(
  841,
  "Pluridisciplinaire",
  "Approche hypnotique des troubles sexuels",
  "Approche hypnotique des troubles sexuels (désir, érection, anorgasmie, vaginisme, éjaculation prématurée, douleurs). Travail sur les croyances limitantes, les blessures émotionnelles, l'image corporelle et la communication intime. Pluridisciplinaire avec sexologue ou médecin.",
  ["Trouble du désir, de l'excitation ou de l'orgasme", "Vaginisme, dyspareunie", "Éjaculation prématurée ou retardée", "Image corporelle altérée affectant l'intimité", "Couple en perte de connexion intime"],
  ["Pathologie organique non explorée (consultation médicale obligatoire)", "Trauma sexuel récent non stabilisé (priorité au trauma)", "Refus de coordination avec sexologue/médecin", "Praticien non formé spécifiquement à la sexothérapie"],
  "Programme sexothérapie hypnotique — 6 séances",
  "5-8 séances de 60 min",
  colors.red,
  "Programme structuré coordonné avec un sexologue ou médecin. Travail psychocorporel et relationnel.",
  "Étapes clés du parcours sexothérapeutique",
  [
    { label: "Anamnèse complète", detail: "Histoire sexuelle, croyances héritées, éducation, blessures, contexte couple. Coordination avec sexologue." },
    { label: "Recadrage des croyances limitantes", detail: "« Je ne dois pas en parler », « Mon corps n'est pas désirable », « Je dois performer ». Identification + transformation." },
    { label: "Image corporelle & estime", detail: "Travail hypnotique sur l'acceptation du corps. Visualisations positives. Ancrage de plaisir kinesthésique." },
    { label: "Désensibilisation des associations négatives", detail: "Pour vaginisme, dyspareunie ou anxiété de performance : recadrage des mémoires aversives." },
    { label: "Communication intime", detail: "Travail sur la capacité à dire son désir, ses limites, ses besoins. Souvent en duo si couple." },
    { label: "Réapprentissage du plaisir sans pression", detail: "Exercices de sensate focus (Masters & Johnson) en transe. Réappropriation de la sensorialité." },
    { label: "Suivi long terme", detail: "Séances espacées (1/mois) pour ancrer les changements dans la vie de couple." },
  ],
  [
    { name: "Anamnèse sexuelle", type: "Document", icon: "📋", desc: "Histoire complète recueillie en confidentialité." },
    { name: "Sensate focus", type: "Exercice", icon: "✋", desc: "Toucher non sexuel puis progressif (Masters & Johnson)." },
    { name: "Coordination sexologue", type: "Cadre", icon: "🤝", desc: "Travail pluridisciplinaire indispensable." },
    { name: "Visualisations corporelles", type: "Hypnose", icon: "🌸", desc: "Réappropriation positive du corps." },
  ],
  [
    { val: "6", label: "Séances en moyenne", sub: "5-8 selon trouble", color: colors.red },
    { val: "Pluri", label: "Approche pluridisciplinaire", sub: "sexologue + hypnose", color: colors.purple },
  ],
  ["Mon corps n'est pas fait pour le plaisir", "Je dois performer", "Le sexe est sale ou dangereux", "Je suis brisé·e sexuellement"]
);

const acouphenes = make(
  842,
  "Perception",
  "Réduction du volume perçu et de la gêne associée",
  "Protocole hypnotique de gestion des acouphènes chroniques. Travail sur la perception du son (volume, présence, gêne) plutôt que sur la cause physique. Apprentissage de la dissociation perceptive et installation d'un filtre inconscient. Complément à un suivi ORL.",
  ["Acouphènes chroniques (> 6 mois)", "Bilan ORL effectué", "Anxiété et insomnie associées", "Gêne quotidienne significative", "Échec ou complément d'autres approches (TCC, TRT)"],
  ["Bilan ORL non effectué (à exiger en priorité)", "Acouphène d'apparition récente (< 3 mois) sans bilan", "Pathologie auditive aiguë non traitée"],
  "Programme acouphènes — 5 séances",
  "4-6 séances de 60 min",
  colors.clientBlue,
  "Travail sur la perception et la dissociation. Installation d'un filtre inconscient progressif.",
  "Étapes clés du protocole",
  [
    { label: "Évaluation initiale (échelle THI)", detail: "Tinnitus Handicap Inventory. Évaluation 0-100 du retentissement quotidien. Mesure pré/post." },
    { label: "Psycho-éducation", detail: "Compréhension neurophysiologique : l'acouphène est une perception cérébrale, modifiable par le cerveau." },
    { label: "Induction & dissociation perceptive", detail: "Transe profonde + apprentissage de la dissociation : le son existe mais à distance, comme un bruit de fond." },
    { label: "Métaphore du potentiomètre", detail: "Visualisation d'un bouton de volume mental. Le client diminue progressivement. Ancrage." },
    { label: "Filtre inconscient", detail: "Suggestion d'installation d'un filtre permanent qui réduit l'attention portée au son." },
    { label: "Recadrage de la signification", detail: "Le son n'est plus une menace ou une intrusion. Acceptation paradoxale qui réduit la gêne." },
    { label: "Pont sur le futur", detail: "Visualisation de moments quotidiens (sommeil, lecture, conversation) avec acouphène en arrière-plan inoffensif." },
  ],
  [
    { name: "Échelle THI", type: "Évaluation", icon: "📊", desc: "Tinnitus Handicap Inventory pré/post." },
    { name: "Métaphore du potentiomètre", type: "Visualisation", icon: "🎚", desc: "Volume mental ajustable." },
    { name: "Coordination ORL", type: "Cadre", icon: "👂", desc: "Suivi médical conjoint indispensable." },
  ],
  [
    { val: "−40%", label: "Réduction THI moyenne", sub: "sur 5 séances", color: colors.clientBlue },
    { val: "5", label: "Séances en moyenne", sub: "4-6 selon ancienneté", color: colors.gold },
  ],
  ["Je dois supporter ce bruit toute ma vie", "Rien ne peut le faire baisser", "C'est dans mes oreilles, pas dans mon cerveau"]
);

const sommeil = make(
  843,
  "−50% latence",
  "Réduction du temps d'endormissement",
  "Protocole hypnotique de réinitialisation des cycles de sommeil. Travail sur les rituels d'endormissement, les ruminations, le conditionnement chambre/sommeil et l'hyperéveil cortical. Inclut suggestions post-hypnotiques pour auto-induction au coucher.",
  ["Insomnie d'endormissement chronique", "Réveils nocturnes répétés", "Hyperéveil cortical, ruminations", "Échec ou refus des hypnotiques", "Décalage de phase (couche-tard, lève-tard)"],
  ["Apnée du sommeil non explorée (bilan polysomno)", "Dépression sévère non traitée", "Substance modifiant les cycles (alcool, café, drogues)"],
  "Programme sommeil — 4 séances",
  "4 séances de 60 min",
  colors.purple,
  "Réapprentissage du sommeil par hypnose. Auto-induction enseignée pour le coucher.",
  "Étapes clés du protocole",
  [
    { label: "Anamnèse sommeil", detail: "Heures, latence, réveils, qualité, hygiène, croyances. Agenda du sommeil sur 7 jours." },
    { label: "Hygiène du sommeil", detail: "Règles de base : horaires réguliers, chambre, écrans, dîner, café. Conditionnement chambre = sommeil uniquement." },
    { label: "Induction & ressource lieu de sommeil", detail: "Visualisation d'un lieu profondément reposant. Ancrage kinesthésique." },
    { label: "Suggestions de sommeil profond", detail: "« Votre corps connaît parfaitement le chemin du sommeil. Dès que votre tête touche l'oreiller... »" },
    { label: "Travail sur les ruminations", detail: "Métaphore du « jardin des pensées » : les pensées passent sans qu'on s'y accroche. Détachement cognitif." },
    { label: "Auto-induction enseignée", detail: "Le client apprend à entrer en transe seul au coucher en 5 min. Reconductible chaque soir." },
    { label: "Pont sur le futur — réveil reposé", detail: "Visualisation du réveil naturel, énergique, à l'heure souhaitée." },
  ],
  [
    { name: "Agenda du sommeil", type: "Document", icon: "📅", desc: "Suivi 7 jours pré/post." },
    { name: "Auto-induction enseignée", type: "Technique", icon: "🌙", desc: "5 min au coucher, autonomie complète." },
    { name: "Métaphore du jardin", type: "Visualisation", icon: "🌳", desc: "Détachement des ruminations." },
  ],
  [
    { val: "−50%", label: "Latence d'endormissement", sub: "moyenne sur 4 séances", color: colors.purple },
    { val: "4", label: "Séances", sub: "+ pratique quotidienne", color: colors.gold },
  ],
  ["Je n'ai jamais été un bon dormeur", "Je vais mal dormir, je le sais", "Sans somnifère, c'est impossible"]
);

const traumaComplex = make(
  844,
  "Approche douce",
  "Travail trauma sans revivification directe",
  "Protocole hypnotique pour trauma complexe (cumulatif, attachement, multi-événements). Approche douce sans revivification directe : travail par métaphores, parties, ressources, et reconstruction identitaire. Combine éléments de Schwartz (IFS), Levine (Somatic Experiencing) et hypnose ericksonienne.",
  ["Trauma complexe (CPTSD)", "Trauma d'attachement précoce", "Multi-événements traumatiques", "Patient ayant échoué en EMDR ou exposition", "Désir d'approche douce et progressive"],
  ["Crise suicidaire active", "Dissociation pathologique non stabilisée", "Praticien non formé spécifiquement au trauma complexe", "Substance non traitée masquant le trauma"],
  "Programme trauma complexe — 8-12 séances",
  "8-12 séances de 75-90 min",
  colors.red,
  "Travail sur 3 axes : stabilisation + parties intérieures + reconstruction identitaire.",
  "Étapes clés du parcours",
  [
    { label: "Phase 1 — Stabilisation (3-4 séances)", detail: "Lieu sûr, ressources internes, contenants, gestion des hyperéveils. Aucun travail sur le trauma avant stabilité." },
    { label: "Identification des parties intérieures", detail: "Approche IFS adaptée : protecteurs, exilés, Self. Cartographie respectueuse." },
    { label: "Dialogue avec le protecteur principal", detail: "Hypnose conversationnelle avec la partie qui défend. Reconnaissance de son rôle." },
    { label: "Approche progressive des parties exilées", detail: "Avec accord du protecteur. Pas de revivification — métaphore et symbole." },
    { label: "Recadrage somatique", detail: "Inspiration Somatic Experiencing : décharge corporelle douce des tensions." },
    { label: "Reconstruction identitaire", detail: "« Qui suis-je au-delà de ces blessures ? » Ancrage de l'identité Self." },
    { label: "Intégration & autonomisation", detail: "Outils d'auto-régulation. Espacement progressif des séances." },
  ],
  [
    { name: "Lieu sûr & ressources", type: "Hypnose", icon: "🏝", desc: "Phase 1 obligatoire — stabilisation." },
    { name: "Cartographie des parties (IFS)", type: "Modèle", icon: "🧩", desc: "Protecteurs, exilés, Self." },
    { name: "Décharge somatique", type: "Technique", icon: "🌊", desc: "Inspiration Somatic Experiencing." },
    { name: "Échelle SUDS pré/post", type: "Évaluation", icon: "📏", desc: "Mesure de la perturbation." },
  ],
  [
    { val: "8-12", label: "Séances", sub: "espacées progressivement", color: colors.red },
    { val: "Phase 1", label: "Stabilisation obligatoire", sub: "avant tout travail trauma", color: colors.purple },
  ],
  ["Je suis brisé·e à jamais", "Personne ne peut comprendre", "Si je laisse remonter, je vais m'effondrer", "Le trauma me définit"]
);

// ===== MAÎTRE PRATICIEN PNL (850-854) =====

const metaModele = make(
  850,
  "Précision",
  "Questionnement linguistique de précision",
  "Méta-modèle PNL : ensemble de 12 patterns linguistiques pour révéler les distorsions, généralisations et omissions du discours. Outil de questionnement précis utilisé en début et en cours de séance pour cartographier la « carte » du client et faire émerger les croyances limitantes.",
  ["Cartographie d'une demande complexe", "Identification de croyances limitantes implicites", "Travail sur les généralisations (« toujours », « jamais »)", "Préparation à un travail PNL ciblé", "Coaching et thérapie brève"],
  ["Client très fragile (questionnement parfois confrontant)", "Contexte d'urgence (privilégier le soutien)", "Manque de rapport établi"],
  "Méta-modèle — 12 patterns",
  "Intégré à toute séance",
  colors.gold,
  "Outil quotidien du Maître Praticien PNL. À maîtriser jusqu'à automatisation.",
  "Les 12 patterns du méta-modèle",
  [
    { label: "Omissions simples", detail: "« Je suis stressé » → « Stressé par quoi exactement ? »" },
    { label: "Manque d'index référentiel", detail: "« On dit que... » → « Qui précisément dit cela ? »" },
    { label: "Verbes non spécifiés", detail: "« Il m'a blessé » → « Comment précisément vous a-t-il blessé ? »" },
    { label: "Nominalisations", detail: "« J'ai un blocage » → « Qu'est-ce qui vous bloque ? Comment vous bloquez-vous ? »" },
    { label: "Quantifieurs universels", detail: "« Personne ne m'aime » → « Personne ? Vraiment personne ? »" },
    { label: "Opérateurs modaux de nécessité", detail: "« Je dois réussir » → « Que se passerait-il si vous ne le faisiez pas ? »" },
    { label: "Opérateurs modaux de possibilité", detail: "« Je ne peux pas » → « Qu'est-ce qui vous en empêche ? »" },
    { label: "Causes-effets", detail: "« Tu me mets en colère » → « Comment précisément ce que je fais provoque-t-il votre colère ? »" },
    { label: "Lecture de pensée", detail: "« Il pense que je suis nul » → « Comment savez-vous précisément ce qu'il pense ? »" },
    { label: "Équivalences complexes", detail: "« Il ne me regarde pas, il ne m'aime pas » → « En quoi le fait qu'il ne vous regarde pas signifie qu'il ne vous aime pas ? »" },
    { label: "Présuppositions", detail: "« Quand vas-tu enfin comprendre ? » → Mise au jour de la présupposition." },
    { label: "Performatif perdu", detail: "« C'est mal » → « Mal selon qui ? Selon quel critère ? »" },
  ],
  [
    { name: "Grille des 12 patterns", type: "Référence", icon: "🔍", desc: "À mémoriser et automatiser." },
    { name: "Questionnement précis", type: "Technique", icon: "❓", desc: "Outil quotidien du praticien." },
    { name: "Cartographie de la demande", type: "Document", icon: "🗺", desc: "Trace les patterns identifiés." },
  ],
  [
    { val: "12", label: "Patterns à maîtriser", sub: "trio omissions/généralisations/distorsions", color: colors.gold },
    { val: "100%", label: "Des séances l'utilisent", sub: "outil de base", color: colors.purple },
  ],
  ["Je sais déjà ce qu'il veut dire", "Trop de questions vont l'agacer", "Je dois deviner pour montrer que je comprends"]
);

const niveauxDilts = make(
  851,
  "Réalignement",
  "Cohérence des 6 niveaux logiques",
  "Modèle des 6 niveaux logiques de Robert Dilts : Environnement → Comportement → Capacités → Croyances/Valeurs → Identité → Spirituel/Mission. Outil de diagnostic et d'intervention pour identifier le niveau de blocage et générer un alignement durable.",
  ["Sentiment de désalignement, perte de sens", "Blocage profond non résolu par travail comportemental", "Reconversion professionnelle, choix de vie", "Travail sur l'identité (« qui je suis »)", "Recherche de mission de vie"],
  ["Crise psychiatrique aiguë", "Demande purement comportementale (outil disproportionné)", "Manque de stabilité de base"],
  "Réalignement des niveaux logiques",
  "1-3 séances de 90 min",
  colors.purple,
  "Diagnostic des 6 niveaux + remontée + redescente alignée.",
  "Protocole complet (peut s'étaler sur 1 séance ou 3)",
  [
    { label: "Présentation du modèle", detail: "Schéma des 6 niveaux. Le client comprend la pyramide Environnement → Mission." },
    { label: "Niveau 1 — Environnement", detail: "« Où ? Quand ? Avec qui ? » Cartographie du contexte." },
    { label: "Niveau 2 — Comportement", detail: "« Que faites-vous ? Que ne faites-vous pas ? » Description observable." },
    { label: "Niveau 3 — Capacités", detail: "« Comment le faites-vous ? Quelles compétences mobilisées ? Lesquelles vous manquent ? »" },
    { label: "Niveau 4 — Croyances & valeurs", detail: "« En quoi croyez-vous ? Qu'est-ce qui est important pour vous ? Qu'est-ce qui est vrai pour vous ? »" },
    { label: "Niveau 5 — Identité", detail: "« Qui êtes-vous quand vous faites cela ? Comment vous définissez-vous ? »" },
    { label: "Niveau 6 — Mission/Spirituel", detail: "« À quoi servez-vous ? À quelle cause plus grande contribuez-vous ? »" },
    { label: "Identification du niveau de blocage", detail: "À quel niveau l'incohérence apparaît-elle ? C'est là qu'il faut intervenir." },
    { label: "Redescente alignée", detail: "De Mission vers Environnement, en intégrant les ressources de chaque niveau supérieur." },
    { label: "Ancrage corporel", detail: "Le client se positionne physiquement à chaque niveau (marquage au sol). Ancrage kinesthésique." },
  ],
  [
    { name: "Pyramide des 6 niveaux", type: "Modèle", icon: "🔺", desc: "Schéma visuel de référence." },
    { name: "Marquage au sol", type: "Technique", icon: "🟦", desc: "Espace physique pour chaque niveau." },
    { name: "Questionnement par niveau", type: "Grille", icon: "❓", desc: "Questions clés pour chaque palier." },
  ],
  [
    { val: "6", label: "Niveaux logiques", sub: "Environnement → Mission", color: colors.purple },
    { val: "1-3", label: "Séances", sub: "selon profondeur", color: colors.gold },
  ],
  ["Je ne sais pas qui je suis vraiment", "Ma vie n'a pas de sens", "Je fais comme on m'a dit de faire"]
);

const ligneTemps = make(
  852,
  "Réorganisation",
  "Restructuration de la perception du temps",
  "Ligne du temps de Tad James (Time Line Therapy®). Travail sur la représentation interne du temps (passé/présent/futur) pour libérer émotions limitantes, décisions limitantes, et programmer des objectifs futurs alignés. Particulièrement puissant en transe légère.",
  ["Émotions limitantes récurrentes (colère, peur, tristesse, culpabilité)", "Décisions limitantes anciennes encore actives", "Procrastination, manque de motivation", "Programmation d'objectifs (carrière, projets)", "Sentiment de stagnation"],
  ["Trauma majeur non stabilisé", "Demande de revivification (mauvaise approche, choisir EMDR)", "Manque de capacité d'imagerie mentale"],
  "Ligne du temps Tad James — Séance complète",
  "90-120 min",
  colors.teal,
  "Identification de la ligne du temps + travail libération + programmation futur.",
  "Étapes clés du protocole",
  [
    { label: "Identification de la ligne du temps", detail: "« Pointez vers le passé... vers le futur. » Most people : in time (devant-derrière) ou through time (gauche-droite)." },
    { label: "Calibration de la ressource", detail: "Ancrage d'un état ressource fort (confiance, sérénité, joie)." },
    { label: "Identification de l'émotion limitante", detail: "Choix d'une émotion à libérer (ex : colère). Identification du premier événement (« la racine »)." },
    { label: "Voyage au-dessus de la ligne", detail: "Le client se voit au-dessus de sa ligne du temps. Survol jusqu'à 15 min avant l'événement racine." },
    { label: "Apprentissage & libération", detail: "« Quel apprentissage votre inconscient a-t-il à tirer de cet événement ? » Une fois l'apprentissage intégré, l'émotion peut partir." },
    { label: "Vérification chaîne d'événements", detail: "Survol des événements similaires sur la ligne — l'émotion s'est-elle vraiment libérée partout ?" },
    { label: "Programmation d'objectif futur", detail: "Le client choisit un objectif. Visualisation positive sur la ligne du temps future." },
    { label: "Ancrage de l'objectif", detail: "Le client place son objectif à la date précise. Ressent l'aboutissement comme déjà acquis." },
  ],
  [
    { name: "Calibration in/through time", type: "Diagnostic", icon: "⏰", desc: "Identification du type de représentation." },
    { name: "Survol au-dessus de la ligne", type: "Technique", icon: "🦅", desc: "Dissociation au-dessus du temps." },
    { name: "Programmation d'objectif", type: "Technique", icon: "🎯", desc: "Ancrage à date précise dans le futur." },
  ],
  [
    { val: "TLT®", label: "Time Line Therapy", sub: "Tad James, années 1980", color: colors.teal },
    { val: "5", label: "Émotions clés ciblées", sub: "colère, tristesse, peur, culpabilité, blessure", color: colors.gold },
  ],
  ["Mon passé me définit", "Je n'arrive pas à me projeter", "Le temps file et je n'avance pas"]
);

const strategies = make(
  853,
  "Modélisation",
  "Reproduction des stratégies d'excellence",
  "Modélisation PNL : capture précise de la séquence interne (visuelle, auditive, kinesthésique) qui produit l'excellence chez un expert ou chez soi-même dans une situation de réussite. Permet de transférer la stratégie à d'autres contextes ou à d'autres personnes.",
  ["Reproduction d'une compétence excellente du client (sport, musique, prise de parole)", "Modélisation d'un mentor", "Coaching de performance", "Apprentissage accéléré", "Transfert d'une réussite à un domaine de difficulté"],
  ["Demande inadaptée (ex : modéliser ce qui ne va pas)", "Manque d'exemple d'excellence à modéliser"],
  "Modélisation d'une stratégie d'excellence",
  "60-90 min par stratégie",
  colors.gold,
  "Capture VAK séquentielle + transfert ou enseignement.",
  "Étapes clés du protocole TOTE",
  [
    { label: "Choix de l'excellence à modéliser", detail: "Une situation précise, répétée, où le client (ou son modèle) excelle. Ex : « Quand vous présentez en public et que c'est génial. »" },
    { label: "Recueil détaillé en revivification", detail: "Le client revit la situation. Le praticien capture chaque étape : qu'est-ce que vous voyez ? entendez ? ressentez ? vous dites ? »" },
    { label: "Identification du Test initial", detail: "Modèle TOTE : Test (déclencheur) → Operate (action) → Test (vérif) → Exit. Quel signal interne déclenche la stratégie ?" },
    { label: "Identification des Operate", detail: "Quelle suite précise de représentations internes (V → A → K → V → A...) produit l'excellence ?" },
    { label: "Identification du Test final & Exit", detail: "Quel signal indique « c'est réussi, je sors » ?" },
    { label: "Test de la stratégie", detail: "Le client applique sciemment la stratégie dans une situation similaire. Vérification de l'efficacité." },
    { label: "Transfert à un autre contexte", detail: "« Cette stratégie de présentation publique peut-elle servir pour un entretien ? Une négociation ? »" },
    { label: "Enseignement à autrui (option)", detail: "Si le but est de transmettre, formulation pédagogique de la stratégie." },
  ],
  [
    { name: "Modèle TOTE", type: "Référence", icon: "🔁", desc: "Test-Operate-Test-Exit (Miller, Galanter, Pribram)." },
    { name: "Calibration VAK séquentielle", type: "Technique", icon: "🎬", desc: "Capture micro-comportementale." },
    { name: "Transfert contextuel", type: "Technique", icon: "📦", desc: "Application à d'autres domaines." },
  ],
  [
    { val: "TOTE", label: "Modèle de référence", sub: "Test-Operate-Test-Exit", color: colors.gold },
    { val: "VAK", label: "Canaux modélisés", sub: "visuel, auditif, kinesthésique", color: colors.purple },
  ],
  ["Le talent est inné, on ne peut pas le copier", "L'excellence est mystérieuse"]
);

const score = make(
  854,
  "Diagnostic",
  "Cartographie systémique d'une situation",
  "Modèle SCORE de Robert Dilts : Symptômes → Causes → Outcomes (objectifs) → Ressources → Effets. Outil de diagnostic systémique en début de parcours pour cartographier précisément la demande, identifier les ressources mobilisables et anticiper les effets du changement sur le système.",
  ["Première séance d'un parcours", "Demande complexe ou floue", "Coaching stratégique", "Travail systémique (couple, famille, équipe)", "Identification des ressources et obstacles"],
  ["Demande très simple (outil disproportionné)", "Urgence émotionnelle (privilégier le soutien)"],
  "Diagnostic SCORE — 1ère séance",
  "60-90 min",
  colors.teal,
  "Cartographie complète des 5 dimensions S-C-O-R-E.",
  "Les 5 dimensions du SCORE",
  [
    { label: "S — Symptômes", detail: "Description précise et observable de ce qui ne va pas. « Que voyez-vous, entendez-vous, ressentez-vous précisément ? »" },
    { label: "C — Causes", detail: "Hypothèses sur l'origine. Quand a commencé le symptôme ? Dans quel contexte ? Liens avec d'autres événements ?" },
    { label: "O — Outcomes (objectifs)", detail: "« Que voulez-vous précisément à la place ? Comment saurez-vous que vous l'avez ? Critères observables. »" },
    { label: "R — Ressources", detail: "Internes : capacités, expériences passées, croyances soutenantes. Externes : entourage, soutien, contexte favorable." },
    { label: "E — Effets", detail: "Que se passera-t-il quand vous aurez atteint votre objectif ? Sur vous, sur votre entourage, sur votre vie ? Anticipation des bénéfices secondaires perdus." },
    { label: "Vérification écologique", detail: "Le changement souhaité est-il écologique (compatible avec les autres systèmes) ? Si non, ajustement de l'objectif." },
    { label: "Plan d'action", detail: "Choix des prochaines étapes thérapeutiques en fonction du SCORE complet." },
  ],
  [
    { name: "Grille SCORE", type: "Document", icon: "🗂", desc: "Cartographie en 5 cases." },
    { name: "Vérification écologique", type: "Technique", icon: "♻", desc: "Anticipation des effets systémiques." },
    { name: "Critères observables", type: "Technique", icon: "👁", desc: "Objectifs SMART en formulation PNL." },
  ],
  [
    { val: "5", label: "Dimensions SCORE", sub: "Symptômes-Causes-Objectifs-Ressources-Effets", color: colors.teal },
    { val: "1", label: "Séance de diagnostic", sub: "avant tout travail ciblé", color: colors.gold },
  ],
  ["Je ne sais pas vraiment ce que je veux", "Mon problème est trop compliqué pour être analysé"]
);

// ===== HYPNOSE ERICKSON AVANCÉE (860-862) =====

const metaphore = make(
  860,
  "Métaphore",
  "Suggestion par récit thérapeutique sur mesure",
  "Construction d'une métaphore thérapeutique sur mesure pour le client : récit isomorphe à sa situation qui propose une résolution sans suggestion directe. Approche emblématique de Milton Erickson. Particulièrement puissante chez les enfants, les résistants à l'hypnose, et pour les blocages identitaires.",
  ["Client résistant à la suggestion directe", "Enfant ou adolescent", "Blocage identitaire profond", "Travail symbolique sur un trauma diffus", "Compléter une séance d'hypnose formelle"],
  ["Demande d'action concrète et urgente (privilégier le coaching direct)", "Manque de matériau pour construire l'isomorphisme"],
  "Métaphore thérapeutique sur mesure",
  "60-90 min",
  colors.purple,
  "Construction puis narration en transe légère ou conversationnelle.",
  "Construction & narration",
  [
    { label: "Identification de la structure problème", detail: "Personnages, lieu, conflit, enjeu, blocage. Cartographie de la situation du client." },
    { label: "Choix de l'univers métaphorique", detail: "Univers proche du client (sport, nature, voyage, métier...) pour un isomorphisme fort." },
    { label: "Construction de l'isomorphisme", detail: "Chaque élément du problème = un élément du récit. Personnages = personnages, blocage = obstacle, ressources = personnages aidants." },
    { label: "Insertion d'une résolution", detail: "Dans la métaphore, le héros trouve une voie de résolution. Pas suggérée directement au client — découverte par lui." },
    { label: "Narration en transe légère", detail: "Le client est dans un état conversationnel ou de transe légère. Voix calme et engageante." },
    { label: "Vague & multi-sens", detail: "Détails délibérément vagues pour que le client projette son propre sens. Plusieurs niveaux de lecture possibles." },
    { label: "Suggestion finale ouverte", detail: "« Et le héros sortit de la forêt, transformé... » Pas de morale explicite." },
    { label: "Pas de débrief intellectuel", detail: "Erickson recommandait de ne PAS débriefer la métaphore : laisser l'inconscient travailler." },
  ],
  [
    { name: "Grille d'isomorphisme", type: "Document", icon: "🔄", desc: "Personnages, lieux, événements en correspondance." },
    { name: "Univers thématiques", type: "Référence", icon: "🌍", desc: "Banque d'univers (forêt, voyage, atelier, sport)." },
    { name: "Patterns Milton intégrés", type: "Linguistique", icon: "💬", desc: "Vague, multi-sens, présuppositions." },
  ],
  [
    { val: "Isomorphe", label: "Structure miroir", sub: "élément par élément", color: colors.purple },
    { val: "0", label: "Suggestion directe", sub: "résolution découverte par le client", color: colors.gold },
  ],
  ["Les histoires, c'est pour les enfants", "Je veux des conseils concrets, pas des contes"]
);

const confusion = make(
  861,
  "Pattern interrupt",
  "Brise les schémas conscients pour ouvrir l'inconscient",
  "Technique de confusion d'Erickson : interruption volontaire des schémas mentaux conscients (logique, attente, séquence) pour ouvrir une fenêtre d'accès à l'inconscient. Particulièrement utile pour les clients hyper-mentaux, hyper-contrôlants, ou résistants à l'induction classique.",
  ["Client hyper-mental, sur-analytique", "Résistance à l'induction classique", "Besoin d'accélérer l'accès à l'inconscient", "Surprise et déstabilisation thérapeutique", "Sortir d'un blocage répétitif"],
  ["Client psychotique ou en dissociation", "Manque de rapport établi (risque de rupture)", "Praticien débutant non confiant"],
  "Confusion technique — Pattern interrupt",
  "5-15 min (technique courte intégrée)",
  colors.red,
  "Technique courte à intégrer en début ou cours de séance.",
  "Variantes de confusion",
  [
    { label: "Confusion par double sens", detail: "« Vous pouvez fermer les yeux ouverts... ou ouvrir les yeux fermés. » Le mental cherche, lâche prise." },
    { label: "Confusion par interruption", detail: "Au milieu d'une phrase logique, brusque rupture : « Et donc votre estomac... savez-vous quelle heure il est ? »" },
    { label: "Handshake interrupt (Erickson)", detail: "Au moment de serrer la main du client, suspendre le geste de manière inattendue. Le client entre en confusion → induction immédiate." },
    { label: "Surcharge sensorielle", detail: "Plusieurs informations contradictoires en parallèle. Le mental conscient sature et lâche." },
    { label: "Paradoxes logiques", detail: "« Plus vous essayez de résister à la transe, plus vous y entrez profondément. »" },
    { label: "Suggestion immédiate après confusion", detail: "Pendant la fenêtre de confusion, glisser la suggestion thérapeutique. L'inconscient l'accepte sans filtre." },
    { label: "Ratification par la suite", detail: "Après le travail, le client n'a pas conscience exacte de ce qui s'est passé — c'est l'effet recherché." },
  ],
  [
    { name: "Handshake interrupt", type: "Technique", icon: "🤝", desc: "Suspension du serrement de main." },
    { name: "Double sens linguistique", type: "Technique", icon: "🔀", desc: "Phrases à double interprétation." },
    { name: "Patterns paradoxaux", type: "Linguistique", icon: "🌀", desc: "Plus vous X, plus vous Y." },
  ],
  [
    { val: "5-15 min", label: "Technique courte", sub: "fenêtre d'accès rapide", color: colors.red },
    { val: "Erickson", label: "Origine", sub: "années 1950", color: colors.purple },
  ],
  ["Je dois tout comprendre pour avancer", "Je résiste à toute manipulation", "Je veux garder le contrôle"]
);

const paradoxe = make(
  862,
  "Prescription",
  "Prescription paradoxale du symptôme",
  "Technique paradoxale de l'École de Palo Alto et d'Erickson : prescrire au client de produire volontairement le symptôme qu'il cherche à supprimer. Effet : le contrôle volontaire désactive le mécanisme inconscient automatique. Utilisé pour insomnie, anxiété, tics, comportements compulsifs.",
  ["Insomnie d'endormissement", "Tic ou comportement compulsif léger", "Anxiété de performance", "Bégaiement situationnel", "Échec des approches directes"],
  ["Comportements à risque (substances, automutilation, troubles alimentaires)", "Pathologie psychiatrique sévère", "Manque de rapport et de confiance"],
  "Prescription paradoxale du symptôme",
  "1-3 séances de 60 min",
  colors.gold,
  "Reformulation, prescription précise, vérification, ajustement.",
  "Étapes clés du protocole",
  [
    { label: "Évaluation du symptôme", detail: "Précision : à quel moment ? combien de temps ? quel contexte ? quels déclencheurs ?" },
    { label: "Reformulation thérapeutique", detail: "« Pour mieux comprendre votre symptôme, j'ai besoin que vous le produisiez délibérément. »" },
    { label: "Prescription précise & ritualisée", detail: "Insomnie : « Restez éveillé volontairement les 30 premières minutes au coucher. » Tic : « Reproduisez votre tic 3× consciemment toutes les heures. »" },
    { label: "Cadre rituel", detail: "Préciser le moment, la durée, les conditions. Le rituel rassure et marque le caractère thérapeutique." },
    { label: "Vérification après 1 semaine", detail: "Le client a-t-il pu produire volontairement ? Effet sur le symptôme spontané ?" },
    { label: "Ajustement", detail: "Si effet : intensifier ou décaler. Si peu d'effet : changer la prescription ou approfondir l'analyse." },
    { label: "Sortie du paradoxe", detail: "Quand le symptôme s'est éteint, arrêt progressif du rituel paradoxal." },
  ],
  [
    { name: "Reformulation positive", type: "Linguistique", icon: "🔄", desc: "Le symptôme devient outil thérapeutique." },
    { name: "Rituel ritualisé", type: "Cadre", icon: "🕯", desc: "Précision du moment, durée, conditions." },
    { name: "Suivi hebdomadaire", type: "Document", icon: "📅", desc: "Carnet de bord du client." },
  ],
  [
    { val: "Palo Alto", label: "École de référence", sub: "Watzlawick, Erickson", color: colors.gold },
    { val: "1-3", label: "Séances", sub: "rapide si efficace", color: colors.teal },
  ],
  ["Je dois lutter contre mon symptôme", "Le produire volontairement va l'aggraver", "C'est absurde"]
);

// ===== PNL & HYPNOSE TECHNIQUES COMBINÉES (870-872) =====

const swish = make(
  870,
  "Reconditionnement",
  "Substitution rapide d'image mentale",
  "Pattern Swish PNL : technique de reconditionnement visuel rapide. Remplacement d'une image mentale déclenchant un comportement indésirable par une image mentale du soi désiré, avec un effet de bascule rapide (whoosh). Particulièrement efficace pour habitudes ancrées (grignotage, onychophagie, tics, routines indésirables).",
  ["Habitudes comportementales ancrées (grignotage, onychophagie)", "Tics légers", "Réactions automatiques à un déclencheur visuel", "Compléter un travail PNL plus large", "Démonstration rapide du potentiel de changement"],
  ["Comportement à fonction protectrice forte (sans alternative)", "Trauma masqué par le comportement", "Manque de capacité d'imagerie mentale"],
  "Pattern Swish — Reconditionnement",
  "20-30 min (intégrable)",
  colors.purple,
  "Identification de l'image déclencheur + image cible + bascule rapide.",
  "Les 5 étapes du Swish",
  [
    { label: "Identification de l'image déclencheur", detail: "« Quelle image précise voyez-vous juste avant que le comportement se produise ? » Image très précise, en VAK." },
    { label: "Construction de l'image cible (soi désiré)", detail: "« Voyez-vous, sans le comportement, exactement comme vous souhaitez être. » Image attirante, vivante, dissociée." },
    { label: "Test des sous-modalités critiques", detail: "Brillance, taille, distance. Le swish utilise l'inversion brillance↔distance comme moteur de bascule." },
    { label: "Bascule du Swish", detail: "Image déclencheur grande et brillante au premier plan + image cible petite et sombre dans le coin. Bascule rapide (whoosh) : la cible devient grande et brillante, le déclencheur petit et sombre." },
    { label: "Répétition rapide", detail: "5 à 7 fois en accéléré. Briser entre chaque (regarder ailleurs, cligner)." },
    { label: "Test", detail: "Le client tente de retrouver l'image déclencheur. Si difficile à évoquer ou non suivie d'envie : succès." },
    { label: "Pont sur le futur", detail: "Visualisation d'une situation où l'envie surviendrait — vérification de la réaction." },
  ],
  [
    { name: "Sous-modalités critiques", type: "Technique", icon: "🎚", desc: "Brillance et distance comme leviers." },
    { name: "Image cible attirante", type: "Visualisation", icon: "✨", desc: "Soi désiré, vivant, attractif." },
    { name: "Bascule rapide", type: "Technique", icon: "⚡", desc: "Whoosh — moins de 1 seconde." },
  ],
  [
    { val: "20 min", label: "Pour reconditionner", sub: "habitude légère", color: colors.purple },
    { val: "5-7", label: "Répétitions du Swish", sub: "accéléré", color: colors.gold },
  ],
  ["C'est plus fort que moi", "Je le fais sans m'en rendre compte", "J'ai essayé d'arrêter sans succès"]
);

const ancrage = make(
  871,
  "Multimodal",
  "Ancrage VAK d'un état ressource",
  "Technique d'ancrage PNL multimodal : capture d'un état ressource (confiance, calme, énergie) en associant un stimulus précis (geste, son, image) à l'état au moment de son intensité maximale. Permet de réactiver l'état ressource à volonté dans une situation déclenchante.",
  ["Préparation à un événement stressant (examen, prise de parole, entretien)", "Gestion de l'anxiété ponctuelle", "Renforcement d'une ressource pour un protocole plus large", "Outil quotidien d'auto-régulation", "Sport et performance"],
  ["Recherche d'une solution de fond (l'ancrage est un outil ponctuel)", "Demande de transformation profonde (insuffisant seul)"],
  "Ancrage multimodal — Installation & test",
  "30-45 min",
  colors.teal,
  "Choix de l'état + accès intense + ancrage VAK + test + utilisation.",
  "Les 7 étapes de l'ancrage",
  [
    { label: "Choix de l'état ressource", detail: "« De quel état avez-vous besoin dans la situation X ? » Précision : confiance, calme, joie, force..." },
    { label: "Accès à l'état (revivification)", detail: "« Souvenez-vous d'une fois où vous avez ressenti pleinement cet état. Replongez-y. »" },
    { label: "Calibration de l'intensité", detail: "Le praticien observe les signes externes (respiration, posture, micro-expressions). Vise le pic." },
    { label: "Pose de l'ancre au pic", detail: "Au moment précis de l'intensité maximale : ancrage simultané kinesthésique (pression poignet), visuel (couleur), auditif (mot)." },
    { label: "Briser l'état", detail: "Distraction (parler de la météo). Sortir de l'état ressource." },
    { label: "Test de l'ancre", detail: "Reproduire le stimulus VAK exactement. L'état revient ? Si oui : ancre installée. Si non : recommencer." },
    { label: "Empilement (option)", detail: "Ancrer plusieurs ressources sur le même stimulus (confiance + calme + énergie) pour un état composé." },
    { label: "Pont sur le futur", detail: "Visualisation de la situation déclenchante avec activation de l'ancre. Vérification de l'efficacité." },
  ],
  [
    { name: "Calibration micro-comportementale", type: "Technique", icon: "👁", desc: "Observation des signes externes." },
    { name: "Ancrage VAK simultané", type: "Technique", icon: "🎯", desc: "3 modalités en parallèle pour robustesse." },
    { name: "Empilement de ressources", type: "Technique", icon: "📚", desc: "Plusieurs états sur une même ancre." },
  ],
  [
    { val: "VAK", label: "Multimodal", sub: "kinesthésique + visuel + auditif", color: colors.teal },
    { val: "Pic", label: "Moment d'ancrage", sub: "intensité maximale", color: colors.gold },
  ],
  ["Je n'arriverai pas à le ressentir sur commande", "Mes ressources me lâchent au mauvais moment"]
);

const recadrage6 = make(
  872,
  "6 étapes",
  "Reframing intégral préservant l'intention positive",
  "Recadrage en 6 étapes de Bandler : protocole emblématique de la PNL pour transformer un comportement indésirable en préservant son intention positive. Dialogue avec la « partie » responsable du comportement, génération d'alternatives, vérification écologique. Travail puissant d'unification interne.",
  ["Comportement indésirable persistant", "Conflit interne (« une partie de moi veut, une autre non »)", "Ambivalence forte", "Symptôme à fonction protectrice", "Travail identitaire profond"],
  ["Refus de dialogue interne", "Manque de capacité dissociative", "Symptôme aigu nécessitant intervention rapide (préférer un autre outil)"],
  "Recadrage en 6 étapes",
  "60-90 min",
  colors.red,
  "Protocole structuré en 6 étapes — à respecter dans l'ordre.",
  "Les 6 étapes du recadrage",
  [
    { label: "Étape 1 — Identifier le comportement à changer", detail: "Précision : « Quel comportement précis souhaitez-vous transformer ? »" },
    { label: "Étape 2 — Établir le contact avec la partie", detail: "« Demandez à la partie de vous responsable de ce comportement de se manifester. » Signal interne (sensation, image, son) = oui ; un autre = non." },
    { label: "Étape 3 — Découvrir l'intention positive", detail: "« Demandez à cette partie : quelle est ton intention positive en produisant ce comportement ? » Toujours une intention positive sous-jacente (protection, sécurité, plaisir, identité)." },
    { label: "Étape 4 — Générer des alternatives (partie créative)", detail: "« Demandez à votre partie créative de proposer 3 nouveaux comportements qui satisferaient cette intention positive aussi bien ou mieux. »" },
    { label: "Étape 5 — Engagement de la partie", detail: "« La partie responsable accepte-t-elle de tester ces 3 alternatives ces prochaines semaines ? » Vérification du oui interne." },
    { label: "Étape 6 — Vérification écologique", detail: "« Y a-t-il une autre partie de vous qui aurait une objection à ce changement ? » Si oui : retour à l'étape 3 avec la nouvelle partie. Si non : ancrage." },
    { label: "Pont sur le futur", detail: "Visualisation des situations déclenchantes avec les nouvelles alternatives en place." },
  ],
  [
    { name: "Modèle des parties", type: "Référence", icon: "🧩", desc: "Inspiration : Virginia Satir, IFS." },
    { name: "Signal de oui/non", type: "Technique", icon: "✋", desc: "Communication ideomotrice avec la partie." },
    { name: "Vérification écologique", type: "Technique", icon: "♻", desc: "Étape 6 — éviter sabotage par autre partie." },
  ],
  [
    { val: "6", label: "Étapes structurées", sub: "à respecter dans l'ordre", color: colors.red },
    { val: "+", label: "Intention positive", sub: "toujours présente sous le symptôme", color: colors.gold },
  ],
  ["Une partie de moi veut, une autre non", "Mon symptôme n'a aucun sens", "Je suis en conflit avec moi-même"]
);

export const avancesDetails: Record<number, ProtocolDetail> = {
  840: hypnoConv,
  841: sexotherapie,
  842: acouphenes,
  843: sommeil,
  844: traumaComplex,
  850: metaModele,
  851: niveauxDilts,
  852: ligneTemps,
  853: strategies,
  854: score,
  860: metaphore,
  861: confusion,
  862: paradoxe,
  870: swish,
  871: ancrage,
  872: recadrage6,
};
