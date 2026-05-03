import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Praticien PNL (IDs 855-859, 895-899).
 * Source : GS Formation — PNL Prat (livret Praticien PNL).
 * Couverture exhaustive du module Praticien PNL.
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

const waltDisney = make(
  855, "3 espaces", "Rêveur dissocié + Réalisateur associé + Critique auditif",
  "Stratégie de créativité de Walt Disney : 3 espaces ancrés au sol — Rêveur (vision libre, dissocié), Réalisateur (planification associée), Critique (évaluation auditive). Le sujet visite chaque espace successivement avec un projet, intégrant les 3 perspectives.",
  ["Développement de projet créatif", "Blocage créatif", "Préparation lancement professionnel", "Décision stratégique"],
  ["Refus du jeu spatial", "Demande purement émotionnelle"],
  "Protocole Stratégie Walt Disney",
  "60-75 min",
  colors.purple,
  "Installation des 3 espaces au sol + visite séquentielle + intégration.",
  "Étapes du protocole",
  [
    { label: "Installation des 3 espaces", detail: "Au sol : Rêveur (devant), Réalisateur (à droite), Critique (à gauche)." },
    { label: "Espace Rêveur — Vision dissociée", detail: "« Rappelle-toi un rêve. Va dans l'espace Rêveur. Visualise. Sous-modalités. Posture corporelle ancrée. »" },
    { label: "Sortie + métaposition", detail: "Sortir de l'espace, faire le bilan en méta." },
    { label: "Espace Réalisateur — Plan associé", detail: "« Souviens-toi d'une réalisation positive. Va dans cet espace. Pleinement associé. Quels moyens, quels délais ? »" },
    { label: "Sortie + métaposition", detail: "Capter les ressources de planification." },
    { label: "Espace Critique — Évaluation auditive", detail: "« Souviens-toi d'une situation où tu as été capable d'esprit critique. Voix interne calme. Que dirais-tu pour améliorer ? »" },
    { label: "Application au projet", detail: "Reprendre le projet et le passer dans les 3 espaces : Rêve → Plan → Critique → ajustements." },
    { label: "Itération jusqu'à congruence", detail: "Refaire les 3 cycles tant que le projet n'est pas pleinement satisfaisant." },
  ],
  [
    { name: "3 espaces au sol", type: "Marquage", icon: "🟦", desc: "Rêveur, Réalisateur, Critique." },
    { name: "Ancrage corporel", type: "PNL", icon: "🧍", desc: "Posture spécifique par espace." },
    { name: "Itération créative", type: "Méthode", icon: "🔁", desc: "Cycles jusqu'à congruence." },
  ],
  [
    { val: "3", label: "Perspectives intégrées", sub: "rêve + plan + critique", color: colors.purple },
    { val: "60-75", label: "Minutes", sub: "protocole complet", color: colors.gold },
  ],
  ["Je suis trop critique pour rêver", "Je rêve trop sans réaliser", "Le critique tue ma créativité"]
);

const leonard = make(
  856, "Génie", "Modélisation des stratégies de Léonard de Vinci",
  "Modélisation des stratégies de pensée de Léonard de Vinci : observation aiguë (V), questionnement permanent, lien entre disciplines (synesthésie), expérimentation pratique. Outil d'excellence pour développer curiosité, créativité et apprentissage.",
  ["Coaching de performance", "Développement de la créativité", "Modélisation pour transmission pédagogique", "Approche multidisciplinaire"],
  ["Manque de support visuel pour modélisation"],
  "Stratégie Léonard de Vinci — Modélisation",
  "60 min",
  colors.gold,
  "5 piliers de la stratégie + appropriation + application.",
  "Les 5 piliers",
  [
    { label: "Curiosità — Curiosité insatiable", detail: "« Que voulez-vous comprendre profondément ? Posez 50 questions sur le sujet. »" },
    { label: "Dimostrazione — Vérification par l'expérience", detail: "« Ne croyez rien sans expérimenter. Testez chaque hypothèse. »" },
    { label: "Sensazione — Affinement des sens", detail: "Observation aiguë, écoute fine, toucher attentif. Travail sensoriel quotidien." },
    { label: "Sfumato — Acceptation de l'ambiguïté", detail: "« Tenez ensemble les opposés. Le clair-obscur. La complexité. »" },
    { label: "Arte/Scienza — Équilibre art/science", detail: "« Reliez les disciplines. Pensez en images ET en logique. »" },
    { label: "Corporalità — Soin du corps", detail: "Forme physique, mouvement, intégration corps-esprit." },
    { label: "Connessione — Voir les liens", detail: "Pensée systémique. Tout est connecté." },
    { label: "Application personnelle", detail: "Choisir 1-2 piliers à développer pendant 30 jours. Carnet de bord." },
  ],
  [
    { name: "7 piliers de Vinci", type: "Référence", icon: "🎨", desc: "Curiosità, Dimostrazione, Sensazione, Sfumato, Arte/Scienza, Corporalità, Connessione." },
    { name: "Carnet d'observation", type: "Outil", icon: "📓", desc: "À la manière des carnets de Vinci." },
    { name: "Pratique quotidienne", type: "Discipline", icon: "📅", desc: "30 jours par pilier." },
  ],
  [
    { val: "7", label: "Piliers", sub: "stratégie de Vinci", color: colors.gold },
    { val: "30j", label: "Par pilier", sub: "intégration durable", color: colors.purple },
  ],
  ["Vinci était un génie inné", "Je ne peux pas modéliser un tel niveau"]
);

const negociationParties = make(
  857, "Espace-temps", "Conflit séquentiel entre 2 parties",
  "Technique de négociation entre 2 parties qui se gênent mutuellement (ex : partie « travail » vs partie « détente »). Identification des intentions positives, négociation d'un accord pour ne plus s'interrompre, vérification écologique. Différent du Recadrage 6 pas.",
  ["Conflit interne séquentiel (espace-temps)", "Procrastination type travail vs loisirs", "Comportement contradictoire selon contexte"],
  ["Conflit simultané (préférer Squash visuel)", "Trauma actif"],
  "Négociation entre parties — Protocole",
  "60-90 min",
  colors.clientBlue,
  "Identification + intentions positives + accord + écologie.",
  "Étapes",
  [
    { label: "Identification de la partie X", detail: "« Quelle partie est interrompue dans son fonctionnement ? Que veut-elle faire ? »" },
    { label: "Intention positive de X", detail: "« Quelle est son intention positive ? Pour quoi de bon agit-elle ? »" },
    { label: "Identification de la partie Y", detail: "« Par quelle autre partie X est-elle interrompue ? Que fait Y ? »" },
    { label: "Intention positive de Y", detail: "« Quelle est l'intention positive de Y ? »" },
    { label: "Vérification réciproque", detail: "« Est-ce que X empêche aussi parfois Y de fonctionner ? »" },
    { label: "Négociation d'accord", detail: "« Y, ta fonction est-elle assez importante pour que tu acceptes de ne pas interrompre X, et inversement ? »" },
    { label: "Engagement temporel", detail: "« Sur quelle durée acceptes-tu cet accord ? » Périodes de contrôle convenues." },
    { label: "Vérification écologique", detail: "« Y a-t-il d'autres parties impliquées ? Si oui, négocier avec elles aussi. »" },
  ],
  [
    { name: "Identification des 2 parties", type: "Diagnostic", icon: "👥", desc: "X et Y nommées." },
    { name: "Intentions positives", type: "Analyse", icon: "💡", desc: "Pour chaque partie." },
    { name: "Accord temporel", type: "Engagement", icon: "📜", desc: "Durée précise." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Autres parties impliquées." },
  ],
  [
    { val: "2", label: "Parties négociées", sub: "conflit séquentiel", color: colors.clientBlue },
    { val: "Accord", label: "Temporel", sub: "périodes contrôlées", color: colors.gold },
  ],
  ["Je suis incohérent", "Je sabote tout ce que j'entreprends", "Mes parties sont incompatibles"]
);

const squashVisuel = make(
  858, "Intégration", "Conflit simultané — fusion par les mains",
  "Technique d'intégration de 2 parties en conflit simultané (ex : « vivre l'amour » vs « préserver liberté »). Visualisation des 2 parties dans chaque main avec VAK et symboles, dialogue, recherche de la valeur commune (chunk up), rapprochement des mains, fusion au cœur.",
  ["Conflit de valeurs simultané", "Ambivalence forte (amour/liberté, sécurité/aventure)", "Travail sur les buts de vie"],
  ["Conflit séquentiel (préférer Négociation 857)", "Trauma actif"],
  "Squash visuel — Intégration de parties",
  "60-90 min",
  colors.purple,
  "Identification + visualisation + dialogue + chunk up + intégration.",
  "Les 8 étapes",
  [
    { label: "Identification des 2 parties", detail: "But, intention positive, importance de chacune." },
    { label: "Pose dans les mains", detail: "Partie A dans la main droite, Partie B dans la main gauche. Avec VAK : nom + symbole + couleur + ressenti." },
    { label: "Dialogue entre parties", detail: "« Comprends ce que chacune veut profondément. Qu'est-ce qui les oppose ? »" },
    { label: "Chunk up — Valeur commune", detail: "« En quoi est-ce important pour toi ? » À chaque réponse, remonter d'un niveau jusqu'à trouver la valeur commune." },
    { label: "Faire monter la valeur commune", detail: "« Cette valeur, comment chacune des 2 parties la sert ? » Ressources de chacune mises en lumière." },
    { label: "Rapprochement des mains", detail: "Les mains s'approchent doucement, à mesure que les parties se reconnaissent." },
    { label: "Intégration des mains au cœur", detail: "Les mains réunies se posent sur la poitrine. Calibration de l'intégration. Émotion possible." },
    { label: "Pont vers le futur", detail: "Visualisation des situations futures avec la nouvelle partie intégrée." },
  ],
  [
    { name: "2 mains = 2 parties", type: "Visualisation", icon: "🤲", desc: "Symbole + couleur + ressenti." },
    { name: "Chunk up", type: "Linguistique", icon: "⬆", desc: "Remonter à la valeur commune." },
    { name: "Fusion au cœur", type: "Intégration", icon: "❤", desc: "Mains sur la poitrine." },
    { name: "Pont sur le futur", type: "Vérification", icon: "🌉", desc: "Application concrète." },
  ],
  [
    { val: "8", label: "Étapes", sub: "intervention majeure", color: colors.purple },
    { val: "Buts", label: "Niveau d'impact", sub: "buts de vie", color: colors.gold },
  ],
  ["Je dois choisir entre les 2", "Mes parties sont incompatibles", "L'une ou l'autre, pas les deux"]
);

const hierarchieValeurs = make(
  859, "5 valeurs", "Reclassement par domaine de vie",
  "Protocole d'identification et de reclassement des valeurs dans 3 domaines (personnel, sentimental, professionnel). 10 valeurs par domaine, sélection des 5 principales, classement par priorité, exploration de chacune. Outil d'alignement de vie.",
  ["Sentiment de désalignement", "Reconversion ou choix de vie majeur", "Préparation à un projet long terme", "Travail de coaching profond"],
  ["Demande très ponctuelle (outil disproportionné)"],
  "Hiérarchie des valeurs — Protocole complet",
  "90-120 min",
  colors.teal,
  "Identification + sélection + classement + exploration.",
  "Étapes du protocole",
  [
    { label: "Étape 1 — Identification large", detail: "« Dans 3 domaines (vie personnelle, sentimentale, professionnelle), trouvez 10 valeurs par domaine. » 30 valeurs au total." },
    { label: "Étape 2 — Sélection des 5", detail: "Pour chaque domaine, ne retenir que les 5 valeurs les plus importantes." },
    { label: "Étape 3 — Classement initial", detail: "Classer les 5 valeurs par ordre d'importance (1 à 5) dans chaque domaine." },
    { label: "Étape 4 — Reclassement par paires", detail: "Prendre les valeurs deux à deux, comme deux objets matériels, peser physiquement (poids, taille). Choisir." },
    { label: "Étape 5 — Exploration de chaque valeur", detail: "« Que remarquez-vous ? Comment savez-vous que cette valeur est satisfaite ou non ? »" },
    { label: "Étape 6 — Vérification de cohérence", detail: "Le classement final reflète-t-il votre vie actuelle ? Si non, où est l'écart ?" },
    { label: "Étape 7 — Plan d'alignement", detail: "Quelles actions concrètes pour aligner sa vie sur les valeurs prioritaires ?" },
  ],
  [
    { name: "30 valeurs explorées", type: "Liste", icon: "📋", desc: "10 par domaine." },
    { name: "Pesée par paires", type: "Technique", icon: "⚖", desc: "Comparaison physique." },
    { name: "Plan d'alignement", type: "Document", icon: "🎯", desc: "Actions concrètes." },
  ],
  [
    { val: "5×3", label: "Valeurs prioritaires", sub: "personnel + sentimental + pro", color: colors.teal },
    { val: "90-120", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mes valeurs sont fixes", "Je ne peux pas hiérarchiser ce qui est important", "Tout est important au même niveau"]
);

const croyances = make(
  895, "Transformation", "Identification + transformation des croyances limitantes",
  "Travail sur les croyances limitantes : identification (« Je suis... », « Les gens sont... », « Le monde est... », « Il faut... »), exploration de l'origine, recherche de l'expérience de référence, transformation par sous-modalités et changement d'histoire personnelle.",
  ["Croyance limitante identifiée", "Schéma cognitif récurrent", "Auto-sabotage", "Préparation à un changement de vie"],
  ["Refus de questionner ses croyances", "Crise psychiatrique"],
  "Transformation des croyances limitantes",
  "60-90 min",
  colors.red,
  "Identification + origine + sous-modalités + nouvelle croyance + ancrage.",
  "Étapes",
  [
    { label: "Identification des croyances", detail: "« Complétez : Je suis... / Les gens sont... / Le monde est... / Il faut... pour... » Repérage des limitantes." },
    { label: "Choix de la croyance à transformer", detail: "Choisir la plus limitante, la plus récurrente, ou la plus structurante." },
    { label: "Recherche de l'expérience de référence", detail: "« D'où vient cette croyance ? Quel événement, quelle parole l'a installée ? »" },
    { label: "Distinction héritée vs personnelle", detail: "« Cette croyance est-elle vraiment vôtre ? Vient-elle de vous ou de vos parents/éducateurs ? »" },
    { label: "Cartographie des sous-modalités", detail: "Comment voyez-vous, entendez-vous, ressentez-vous cette croyance ? Précision VAK." },
    { label: "Construction de la croyance aidante", detail: "Quelle croyance positive pourrait la remplacer ? Précision VAK de la nouvelle." },
    { label: "Substitution par sous-modalités", detail: "Modifier brillance, distance, son... pour transformer la limitante en aidante." },
    { label: "Ancrage de la nouvelle croyance", detail: "Geste, mot, image. Pont sur le futur dans 3 situations concrètes." },
  ],
  [
    { name: "Grille des 4 catégories", type: "Diagnostic", icon: "📋", desc: "Je suis / Les gens / Le monde / Il faut." },
    { name: "Sous-modalités VAK", type: "PNL", icon: "🎚", desc: "Cartographie de la croyance." },
    { name: "Substitution progressive", type: "Technique", icon: "🔄", desc: "Modulation par SM." },
  ],
  [
    { val: "4", label: "Catégories de croyances", sub: "Soi/Autres/Monde/Règles", color: colors.red },
    { val: "60-90", label: "Minutes", sub: "transformation complète", color: colors.gold },
  ],
  ["Je ne peux pas changer", "Mes croyances me définissent", "C'est comme ça, c'est tout"]
);

const doubleDissociation = make(
  896, "Sécurité max", "Cinéma dans le cinéma",
  "Technique PNL emblématique de traitement des traumas légers et phobies. Le sujet est dissocié 2 fois : il se voit dans la salle de cinéma se regardant à l'écran. Permet de revisiter un événement traumatique avec sécurité maximale et recadrage à distance.",
  ["Trauma léger à modéré", "Phobie spécifique (avion, ascenseur, araignée)", "Souvenir perturbant non sévère", "Préparation à exposition réelle"],
  ["Trauma sévère (préférer trauma complexe 844)", "Dissociation pathologique", "Crise active"],
  "Double dissociation — Cinéma sécurisé",
  "60-90 min",
  colors.purple,
  "Installation cinéma + visionnage dissocié × 2 + recadrage + réintégration prudente.",
  "Étapes",
  [
    { label: "Lieu sûr préalable", detail: "Installation d'un lieu sûr ressource (cf 891) accessible à tout moment." },
    { label: "Construction du cinéma", detail: "« Imaginez une salle de cinéma. Le sujet est assis dans la salle, regardant l'écran. »" },
    { label: "Première dissociation", detail: "Le sujet se voit lui-même sur l'écran (1ère dissociation : du moi présent au moi-image)." },
    { label: "Deuxième dissociation — Cabine de projection", detail: "Le sujet monte dans la cabine de projection et se voit dans la salle ET sur l'écran (2ème dissociation)." },
    { label: "Visionnage de la scène traumatique", detail: "Sur l'écran, le film de l'événement passe. Sujet protégé en cabine de projection." },
    { label: "Modulation des sous-modalités", detail: "N&B, distance, taille réduite, son baissé. Atténuation maximale." },
    { label: "Recadrage à distance", detail: "« Le sujet sur l'écran, comment réagirait-il avec les ressources d'aujourd'hui ? »" },
    { label: "Réintégration prudente", detail: "SI le SUDS est < 2 : redescendre en salle puis associer. Sinon : rester en double dissociation." },
  ],
  [
    { name: "Cinéma + cabine", type: "Métaphore", icon: "🎬", desc: "Double dissociation." },
    { name: "Lieu sûr ressource", type: "Préparation", icon: "🏝", desc: "Indispensable avant." },
    { name: "Échelle SUDS", type: "Évaluation", icon: "📏", desc: "Avant réintégration." },
  ],
  [
    { val: "2", label: "Niveaux de dissociation", sub: "salle + cabine", color: colors.purple },
    { val: "SUDS<2", label: "Avant réintégration", sub: "sécurité absolue", color: colors.gold },
  ],
  ["Je vais revivre la scène", "Si je me dissocie, je perds le contact", "Mon trauma est trop fort"]
);

const fonduVisuel = make(
  897, "Substitution", "Fondu progressif d'image",
  "Technique de substitution rapide d'une image limitante par une image ressource. Variante du Swish basée sur le fondu progressif (l'image cible apparaît progressivement à la place de l'image source). Particulièrement efficace sur représentations visuelles persistantes.",
  ["Image mentale limitante persistante", "Représentation négative récurrente", "Variante au Swish (870)", "Travail sur représentation de soi"],
  ["Manque de capacité d'imagerie mentale"],
  "Fondu visuel — Substitution",
  "20-30 min",
  colors.gold,
  "Identification + image cible + fondu + ancrage + test.",
  "Étapes",
  [
    { label: "Identification de l'image source", detail: "« Quelle image vous vient quand X arrive ? » Précision VAK." },
    { label: "Construction de l'image cible", detail: "« Quelle image positive voudriez-vous à la place ? Vous ressource, vous transformé. »" },
    { label: "Test des sous-modalités", detail: "Vérifier que l'image cible est attirante (brillance, taille, distance optimales)." },
    { label: "Fondu progressif", detail: "Image source claire et grande au premier plan. L'image cible apparaît dessus, progressivement, par fondu." },
    { label: "Substitution complète", detail: "L'image cible devient pleinement visible, l'image source disparaît." },
    { label: "Répétition rapide", detail: "5 à 7 fondu accélérés. Briser entre chaque (cligner)." },
    { label: "Test", detail: "Tenter de retrouver l'image source. Si difficile : succès." },
    { label: "Pont sur le futur", detail: "Visualisation des situations déclenchantes avec l'image cible." },
  ],
  [
    { name: "Fondu progressif", type: "Technique", icon: "🌅", desc: "vs bascule rapide du Swish." },
    { name: "Image cible attirante", type: "Visualisation", icon: "✨", desc: "Sous-modalités optimales." },
    { name: "5-7 répétitions", type: "Renforcement", icon: "🔁", desc: "Accélérées." },
  ],
  [
    { val: "5-7", label: "Fondu accélérés", sub: "renforcement", color: colors.gold },
    { val: "20-30", label: "Minutes", sub: "intégrable", color: colors.purple },
  ],
  ["L'image revient toujours", "Je ne peux pas la remplacer"]
);

const carreMagique = make(
  898, "9 cases", "3 perspectives × 3 temps",
  "Méthode d'alignement de l'ego pour généraliser une ressource. Carré de 9 cases (3 perspectives : Moi/Autres/Sage × 3 temps : Passé/Présent/Futur). Le sujet visite chaque case avec sa ressource, reçoit un message de chaque perspective, intègre.",
  ["Généralisation d'une ressource majeure", "Renforcement avant événement important", "Travail spirituel/identitaire", "Intégration profonde"],
  ["Demande très ponctuelle (outil disproportionné)"],
  "Carré magique — Alignement de l'ego",
  "60-90 min",
  colors.clientBlue,
  "Choix de ressource + visite des 9 cases + messages + intégration.",
  "Étapes",
  [
    { label: "Préparation du carré", detail: "Au sol : 3 colonnes (P2 Autres, P1 Moi, P3 Sage) × 3 lignes (Futur, Présent, Passé) = 9 cases." },
    { label: "Choix de la ressource", detail: "« Quelle ressource voulez-vous généraliser dans votre vie ? Confiance, calme, force, créativité... »" },
    { label: "Case centrale (Moi/Présent)", detail: "S'associer pleinement à la ressource. Pleinement la vivre." },
    { label: "Visite des 8 autres cases", detail: "Selon la séquence : Moi/Passé → Moi/Futur → Autres/Présent → Autres/Passé → Autres/Futur → Sage/Présent → Sage/Passé → Sage/Futur." },
    { label: "Pour chaque case", detail: "(a) Prendre conscience de l'enrichissement. (b) Adresser un message au « Moi/Présent ». (c) Revenir au centre pour recevoir." },
    { label: "Intégration au centre", detail: "Verbaliser ce qui est ressenti après chaque message reçu." },
    { label: "Pont sur le futur", detail: "Visualiser une situation concrète d'utilisation de la ressource enrichie." },
    { label: "Variante métaphorique", detail: "Vieux Sage (passé), Partie intuitive (futur), etc. Pour profondeur supplémentaire." },
  ],
  [
    { name: "Carré 9 cases", type: "Marquage", icon: "🟦", desc: "Au sol, 3×3." },
    { name: "Messages reçus", type: "Intégration", icon: "💬", desc: "De chaque perspective." },
    { name: "Variante métaphorique", type: "Avancée", icon: "🧙", desc: "Sage, intuition, ange gardien." },
  ],
  [
    { val: "9", label: "Cases visitées", sub: "3 perspectives × 3 temps", color: colors.clientBlue },
    { val: "60-90", label: "Minutes", sub: "intégration profonde", color: colors.gold },
  ],
  ["Une ressource ne peut pas être généralisée", "Je n'ai pas accès à un Sage intérieur"]
);

const reparationRelation = make(
  899, "Cameron Bandler", "Réparation en 7 étapes",
  "Protocole de Leslie Cameron Bandler en 7 étapes : identification des critères, identification des différences (passé/présent/futur), satisfactions, vérification écologique, traitement des comportements problématiques, changement d'histoire de la relation, construction du futur.",
  ["Relation amoureuse en difficulté", "Relation amicale endommagée", "Relation professionnelle dégradée", "Préparation à pardon ou rupture en conscience"],
  ["Violence conjugale active (privilégier la sécurité)", "Refus de l'autre de participer au travail"],
  "Évaluer & réparer la relation — 7 étapes",
  "90-120 min × 2-3 séances",
  colors.red,
  "Évaluation complète + recadrage + reconstruction du futur ou décision en conscience.",
  "Les 7 étapes",
  [
    { label: "1 — Identifier les critères", detail: "« Comment saviez-vous que l'autre correspondait à vos désirs ? Comment avez-vous été déçu ? Qu'attendez-vous de la relation ? »" },
    { label: "2 — Identifier les différences", detail: "Critères du Passé / Présent / Futur. Voir l'évolution. Vérifier si les attentes sont réalistes." },
    { label: "3 — Identifier les satisfactions", detail: "« En quoi vos besoins ont-ils été satisfaits dans le passé ? Comment encore dans le futur ? Quelles contributions de l'autre à votre développement ? »" },
    { label: "4 — Vérifier l'écologie", detail: "« En considérant les comportements actuels de l'autre, vos attentes peuvent-elles être satisfaites dans le futur ? »" },
    { label: "5 — Traiter les comportements problématiques", detail: "(a) Identifier des comportements de soi qui pourraient déclencher l'autre. (b) Imaginer réagir différemment. (c) Recadrer le comportement de l'autre comme conséquence d'un trait positif." },
    { label: "6 — Changer l'histoire de la relation", detail: "Repartir en imagination dans le passé avec des réponses comportementales différentes. Identifier les valeurs communes. Réécrire les scènes problématiques." },
    { label: "7 — Construire le futur", detail: "Visualiser l'avenir avec les nouveaux comportements. Situations précises, différences, résultats positifs." },
    { label: "Décision en conscience", detail: "À la fin du parcours : reconstruire ou décider en conscience d'une rupture éclairée." },
  ],
  [
    { name: "Critères passé/présent/futur", type: "Diagnostic", icon: "📋", desc: "Évolution des attentes." },
    { name: "Recadrage des comportements", type: "PNL", icon: "🔄", desc: "Trait positif sous-jacent." },
    { name: "Réécriture du passé", type: "Technique", icon: "📖", desc: "Réponses comportementales nouvelles." },
    { name: "Construction du futur", type: "Visualisation", icon: "🌉", desc: "Situations précises." },
  ],
  [
    { val: "7", label: "Étapes", sub: "Leslie Cameron Bandler", color: colors.red },
    { val: "2-3", label: "Séances", sub: "travail en profondeur", color: colors.gold },
  ],
  ["La relation est finie", "L'autre ne changera jamais", "C'est entièrement de la faute de l'autre"]
);

export const praticienPnlDetails: Record<number, ProtocolDetail> = {
  855: waltDisney,
  856: leonard,
  857: negociationParties,
  858: squashVisuel,
  859: hierarchieValeurs,
  895: croyances,
  896: doubleDissociation,
  897: fonduVisuel,
  898: carreMagique,
  899: reparationRelation,
};
