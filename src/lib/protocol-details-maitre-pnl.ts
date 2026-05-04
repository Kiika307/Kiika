import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Maître Praticien PNL (IDs 950-972).
 * Source : GS Formation — Maitre-Praticien-PNL-GS.
 * Couverture exhaustive : métaprogrammes, stratégies avancées, modélisation,
 * valeurs avancées, croyances avancées, identité.
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

// ===== MÉTAPROGRAMMES (950-953) =====

const mpPerception = make(
  950, "3 dimensions", "Attention + GALIC + Découpage",
  "Cartographie des 3 métaprogrammes de perception : (1) Direction de l'attention soi/autres (7/93 %), (2) Tri GALIC (Gens/Activités/Lieux/Informations/Choses 15/50/20/15), (3) Tailles de découpage global/spécifique (60/25/15). Diagnostic profond du fonctionnement.",
  ["Première séance Maître Praticien", "Coaching de communication", "Préparation à un travail PNL approfondi", "Compréhension de conflits relationnels"],
  ["Demande très ponctuelle", "Manque de coopération du client"],
  "Cartographie des métaprogrammes de perception",
  "60-90 min (diagnostic)",
  colors.purple,
  "Test des 3 dimensions + restitution + plan d'utilisation.",
  "Étapes",
  [
    { label: "Direction de l'attention", detail: "« Décris-moi ce que tu fais habituellement dans une situation X. » Repérage : parle-t-il de SOI ou des AUTRES ? (7/93 % de répartition naturelle.)" },
    { label: "Tri GALIC", detail: "« Quand tu te souviens d'un bon moment, qu'est-ce qui te vient en premier ? Les Gens présents, l'Activité, le Lieu, l'Information échangée, ou les Choses ? »" },
    { label: "Tailles de découpage", detail: "Global (vue d'ensemble), spécifique (détails), général ↔ détail. « Décris-moi un voyage récent. » Mode global, ou détaillé ?" },
    { label: "Restitution au client", detail: "Cartographie écrite : ses 3 dimensions de perception. Aucun jugement, juste compréhension." },
    { label: "Implications relationnelles", detail: "Comment communiquer avec qqn de profil opposé ? Adaptation." },
    { label: "Plan d'utilisation", detail: "Le client repère ses propres patterns dans la semaine et adapte." },
  ],
  [
    { name: "Grille des 3 MP perception", type: "Document", icon: "📋", desc: "Diagnostic structuré." },
    { name: "Cartographie écrite", type: "Document", icon: "🗺", desc: "Remise au client." },
    { name: "Adaptation relationnelle", type: "Application", icon: "🤝", desc: "Communication ajustée." },
  ],
  [
    { val: "3", label: "Dimensions perception", sub: "attention + GALIC + découpage", color: colors.purple },
    { val: "7/93", label: "Répartition attention", sub: "soi vs autres (statistique)", color: colors.gold },
  ],
  ["Tout le monde perçoit pareil", "Mes patterns sont neutres"]
);

const mpTraitement = make(
  951, "3 dimensions", "Relation + Temps + Accession",
  "Cartographie des métaprogrammes de traitement de l'information : (1) Relation accord/désaccord/similitude/différence, (2) Orientation temporelle passé/présent/futur, (3) Accession au temps simultanée/séquentielle. Outil-clé pour comprendre les conflits cognitifs.",
  ["Coaching de prise de décision", "Travail systémique relation/équipe", "Compréhension des conflits cognitifs", "Préparation à modélisation"],
  ["Demande émotionnelle pure"],
  "Cartographie des MP de traitement",
  "60 min (diagnostic)",
  colors.clientBlue,
  "Test des 3 dimensions + restitution + applications.",
  "Étapes",
  [
    { label: "Mode relation", detail: "« Quand quelqu'un te présente une idée, qu'est-ce qui te vient en premier ? » Accord (5%), désaccord (65%), similitude (20%), différence (10%)." },
    { label: "Orientation temporelle", detail: "« À quoi penses-tu le plus ? Au passé, au présent, au futur ? »" },
    { label: "Accession au temps", detail: "« Tu vois plutôt le temps comme une ligne séquentielle (passé→présent→futur) ou comme un présent global (tout en simultané) ? »" },
    { label: "Implications coaching", detail: "Adapter le rythme, le vocabulaire, les références au profil cognitif." },
    { label: "Travail spécifique si désaccord dominant", detail: "Renforcer la capacité à dire OUI sans soumission." },
    { label: "Travail si futur dominant", detail: "Ramener au présent pour ancrage ressources." },
  ],
  [
    { name: "Grille MP traitement", type: "Document", icon: "📋", desc: "3 dimensions cartographiées." },
    { name: "Statistiques 5/65/20/10", type: "Référence", icon: "📊", desc: "Mode relation." },
  ],
  [
    { val: "3", label: "Dimensions traitement", sub: "relation + temps + accession", color: colors.clientBlue },
    { val: "65%", label: "Mode désaccord dominant", sub: "statistique population", color: colors.gold },
  ],
  ["Je suis logique, c'est tout", "Le temps est objectif"]
);

const mpMotivation = make(
  952, "3 dimensions", "Direction + Modaux + Engagement",
  "Cartographie des métaprogrammes de motivation : (1) Direction aller-vers/s'éloigner-de, (2) Opérateurs modaux possibilité/nécessité/options/procédures, (3) Engagement actif/passif/proactif/réactif. Détermine la stratégie motivationnelle individuelle.",
  ["Coaching de motivation", "Procrastination chronique", "Reconversion professionnelle", "Préparation à objectif majeur"],
  ["Crise dépressive (préférer accompagnement clinique)"],
  "Cartographie des MP de motivation",
  "60-90 min (diagnostic)",
  colors.gold,
  "Test des 3 dimensions + stratégie motivationnelle personnalisée.",
  "Étapes",
  [
    { label: "Direction de la motivation", detail: "« Pourquoi veux-tu changer ? » Si « pour avoir X » → ALLER VERS. Si « pour ne plus avoir Y » → S'ÉLOIGNER DE. (40/20/40 hybride.)" },
    { label: "Opérateurs modaux", detail: "« Tu DOIS, tu PEUX, tu CHOISIS ? » Possibilité (créativité), nécessité (devoir), options (liberté), procédures (cadre)." },
    { label: "Mode d'engagement", detail: "Actif (initie), Passif (suit), Proactif (anticipe), Réactif (répond aux événements)." },
    { label: "Profil motivationnel complet", detail: "Combinaison des 3 dimensions = stratégie motivationnelle unique du client." },
    { label: "Coaching adapté", detail: "Pour un « aller vers » : visualiser l'objectif. Pour « s'éloigner » : exagérer le coût du non-changement." },
    { label: "Pérennisation", detail: "Construire une motivation hybride (vers + loin de) pour durabilité." },
  ],
  [
    { name: "Profil motivationnel", type: "Document", icon: "📊", desc: "3 dimensions combinées." },
    { name: "Stratégie sur mesure", type: "Plan", icon: "🎯", desc: "Coaching adapté au profil." },
  ],
  [
    { val: "3", label: "Dimensions motivation", sub: "direction + modaux + engagement", color: colors.gold },
    { val: "40/20/40", label: "Direction motivation", sub: "vers / mixte / loin de", color: colors.purple },
  ],
  ["La motivation est universelle", "Tout le monde devrait être motivé pareil"]
);

const cartographieComplete = make(
  953, "Profil PNL", "9+ dimensions de métaprogrammes",
  "Séance dédiée à l'établissement du profil PNL complet du client via les 9+ dimensions de métaprogrammes. Document écrit remis au client. Base d'un parcours de coaching personnalisé. Outil de diagnostic en première séance Maître Praticien.",
  ["Première séance Maître Praticien", "Coaching long terme", "Préparation à équipe (cartographie collective)", "Travail d'orientation professionnelle"],
  ["Travail ponctuel court", "Manque de temps"],
  "Cartographie complète des métaprogrammes",
  "90-120 min",
  colors.teal,
  "Diagnostic systématique + document écrit + plan d'utilisation.",
  "Étapes",
  [
    { label: "Préparation du document", detail: "Tableau pré-imprimé avec les 9+ dimensions à remplir." },
    { label: "Test perception (3)", detail: "Direction attention, GALIC, découpage (cf 950)." },
    { label: "Test traitement (3)", detail: "Relation, temps, accession (cf 951)." },
    { label: "Test motivation (3)", detail: "Direction, modaux, engagement (cf 952)." },
    { label: "Synthèse écrite", detail: "Document complet remis au client en fin de séance." },
    { label: "Restitution & implications", detail: "Le client comprend SON fonctionnement unique. Sans jugement." },
    { label: "Plan de coaching", detail: "Construction d'un parcours basé sur le profil." },
  ],
  [
    { name: "Document profil PNL", type: "Livrable", icon: "📄", desc: "Remis au client." },
    { name: "Plan de coaching", type: "Stratégie", icon: "🗺", desc: "Personnalisé." },
  ],
  [
    { val: "9+", label: "Dimensions cartographiées", sub: "MP perception + traitement + motivation", color: colors.teal },
    { val: "1", label: "Séance suffisante", sub: "diagnostic complet", color: colors.gold },
  ],
  ["Je suis trop complexe à cartographier", "Les profils PNL sont des étiquettes"]
);

// ===== STRATÉGIES AVANCÉES (954-957) =====

const metaObjectif = make(
  954, "Au-delà", "L'objectif derrière l'objectif",
  "Travail en deux temps : (1) Méta-objectif — l'objectif au-delà de l'objectif (« Si vous aviez X, qu'est-ce que cela vous apporterait de plus important ? »), (2) Stratégie d'objectif structurée VAKOG avec critères SMART et écologie systémique.",
  ["Objectif flou ou superficiel", "Recherche de sens", "Préparation à un projet majeur", "Coaching de transition"],
  ["Objectif très opérationnel court terme"],
  "Méta-objectif & stratégie avancée",
  "60-75 min",
  colors.purple,
  "Chunk up vers méta-objectif + structuration VAKOG + écologie.",
  "Étapes",
  [
    { label: "Énoncé de l'objectif initial", detail: "« Quel est ton objectif ? » Réponse classique." },
    { label: "Premier chunk up", detail: "« Si tu avais cela, qu'est-ce que cela t'apporterait de plus important ? »" },
    { label: "Chunks up successifs", detail: "Répéter 3-5 fois. Remonter à la valeur fondamentale." },
    { label: "Identification du méta-objectif", detail: "« Voilà le sens profond derrière ton objectif. »" },
    { label: "Reformulation de l'objectif initial", detail: "À la lumière du méta-objectif, l'objectif initial peut être ajusté." },
    { label: "Structuration VAKOG", detail: "« Comment sauras-tu que tu l'as atteint ? Vois, entends, ressens. »" },
    { label: "Critères SMART", detail: "Spécifique, Mesurable, Atteignable, Réaliste, Temporel." },
    { label: "Vérification écologique systémique", detail: "« Quelles conséquences sur ta vie globale, tes proches, tes valeurs ? »" },
  ],
  [
    { name: "Chunk up", type: "Linguistique", icon: "⬆", desc: "Remonter à la valeur." },
    { name: "Critères SMART", type: "Cadre", icon: "🎯", desc: "Objectif structuré." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Conséquences globales." },
  ],
  [
    { val: "3-5", label: "Chunks up", sub: "vers méta-objectif", color: colors.purple },
    { val: "60-75", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mon objectif est clair", "Pas besoin d'aller plus profond"]
);

const motivationVersLoin = make(
  955, "Hybride", "Aller vers + S'éloigner de combinés",
  "Identification de la stratégie motivationnelle dominante du client (« aller vers » l'objectif souhaité, ou « s'éloigner de » l'état non désiré). Travail d'équilibrage si trop polarisé. Construction d'une motivation hybride durable.",
  ["Motivation qui s'éteint après quelques semaines", "Procrastination", "Coaching long terme"],
  ["Crise dépressive (consulter médecin)"],
  "Stratégies de motivation — Vers + Loin de",
  "60 min",
  colors.gold,
  "Diagnostic + équilibrage + construction hybride.",
  "Étapes",
  [
    { label: "Diagnostic du mode dominant", detail: "Vers : « pour avoir le bonheur ». Loin de : « pour ne plus souffrir »." },
    { label: "Test de durabilité", detail: "Mode pur LOIN DE : motivation s'éteint dès qu'on s'éloigne assez. Mode pur VERS : motivation s'éteint dès qu'on a obtenu." },
    { label: "Diagnostic personnel", detail: "« Quand ta motivation tombe-t-elle ? Au début ou à la fin ? »" },
    { label: "Construction du LOIN DE manquant", detail: "Si le client est trop VERS : exagérer le coût du non-changement, visualisation détaillée du futur sans changement." },
    { label: "Construction du VERS manquant", detail: "Si le client est trop LOIN DE : visualiser pleinement l'objectif, ressentir, ancrer la joie." },
    { label: "Motivation hybride", detail: "Combiner : « Je vais VERS X et JE M'ÉLOIGNE de Y. » Double moteur." },
    { label: "Pont sur le futur", detail: "Visualisation de la persistance dans le temps." },
  ],
  [
    { name: "Diagnostic VERS/LOIN DE", type: "Test", icon: "↔", desc: "Mode dominant." },
    { name: "Visualisations équilibrées", type: "Technique", icon: "🎬", desc: "Futur sans + futur avec." },
    { name: "Motivation hybride", type: "Construction", icon: "⚡", desc: "Double moteur." },
  ],
  [
    { val: "Hybride", label: "Construction visée", sub: "vers + loin de", color: colors.gold },
    { val: "Durable", label: "Motivation", sub: "résiste dans le temps", color: colors.purple },
  ],
  ["Ma motivation tombe toujours", "Je ne tiens pas mes engagements"]
);

const mentors = make(
  956, "Archétypes", "3 mentors porteurs de ressources",
  "Technique d'intégration de ressources externes via la figure du Mentor. Le client choisit 3 mentors (réels ou imaginaires) qui possèdent les ressources visées. Visite imaginaire de chaque mentor, dialogue, intégration des ressources, ancrage.",
  ["Manque d'estime ou de modèle interne", "Préparation à performance", "Coaching de transition", "Travail spirituel/identitaire"],
  ["Refus du symbolique"],
  "Les Mentors — Intégration de ressources",
  "60-90 min",
  colors.clientBlue,
  "Choix de 3 mentors + visite + intégration + ancrage.",
  "Étapes",
  [
    { label: "Identification des ressources visées", detail: "« De quelles ressources as-tu besoin pour ton projet ? »" },
    { label: "Choix de 3 mentors", detail: "« Qui possède ces ressources pleinement ? Réels ou imaginaires. » Souvent : un mentor de force, un de sagesse, un d'amour." },
    { label: "Mise en transe légère", detail: "Détente, respiration, ouverture imaginative." },
    { label: "Visite du mentor 1", detail: "Le client rencontre le mentor en imagination. Dialogue. Reçoit un message ou un don symbolique." },
    { label: "Intégration", detail: "Le client intègre la ressource du mentor 1 dans son corps." },
    { label: "Mentors 2 et 3", detail: "Même processus avec les autres mentors." },
    { label: "Synthèse", detail: "Les 3 ressources sont maintenant en soi, accessibles à volonté." },
    { label: "Ancrage", detail: "Geste, mot, image. Activation future facilitée." },
  ],
  [
    { name: "3 mentors choisis", type: "Visualisation", icon: "🧙", desc: "Force + sagesse + amour." },
    { name: "Dialogue intérieur", type: "Technique", icon: "💬", desc: "Avec chaque mentor." },
    { name: "Intégration corporelle", type: "Ancrage", icon: "🫀", desc: "Ressources captées." },
  ],
  [
    { val: "3", label: "Mentors", sub: "force + sagesse + amour", color: colors.clientBlue },
    { val: "60-90", label: "Minutes", sub: "visite des 3", color: colors.gold },
  ],
  ["Je n'ai pas de mentor accessible", "Imaginer un mentor n'est pas réel"]
);

const dickensSoar = make(
  957, "Projection", "Dickens 3 temps + SOAR",
  "Deux outils complémentaires : (1) Schéma de Dickens (3 projections — passé coût, présent réalité, futur sans changement vs avec changement), (2) Modèle SOAR (Situation, Outcome, Action, Resources) pour la planification stratégique. Particulièrement puissants pour décision majeure.",
  ["Décision majeure de vie", "Hésitation chronique", "Préparation à reconversion", "Coaching stratégique"],
  ["Demande émotionnelle pure (pas de décision en jeu)"],
  "Schéma de Dickens & Modèle SOAR",
  "90 min",
  colors.teal,
  "3 projections temporelles + SOAR pour planification.",
  "Étapes",
  [
    { label: "Projection 1 — Passé (coût)", detail: "« Visualise ta vie passée avec le problème. Quel a été le coût réel ? Émotionnel, financier, relationnel ? »" },
    { label: "Projection 2 — Présent (réalité)", detail: "« Voici ta vie aujourd'hui avec le problème. Pleinement, sans détour. »" },
    { label: "Projection 3a — Futur sans changement", detail: "« Si tu ne changes rien : voilà ta vie dans 5 ans, 10 ans, 20 ans. » Détailler. Le coût futur." },
    { label: "Projection 3b — Futur avec changement", detail: "« Si tu changes maintenant : voilà ta vie dans 5 ans, 10 ans, 20 ans. » Visualiser, ressentir." },
    { label: "Comparaison & décision", detail: "« Quelle vie veux-tu vraiment ? »" },
    { label: "SOAR — Situation", detail: "Description précise de la situation actuelle." },
    { label: "SOAR — Outcome", detail: "Quel résultat souhaité, mesurable ?" },
    { label: "SOAR — Action", detail: "Quelles actions concrètes, étape par étape ?" },
    { label: "SOAR — Resources", detail: "Quelles ressources internes/externes mobiliser ?" },
  ],
  [
    { name: "Dickens 3 temps", type: "Visualisation", icon: "⏳", desc: "Passé + présent + futur." },
    { name: "SOAR", type: "Cadre", icon: "🚀", desc: "Situation/Outcome/Action/Resources." },
    { name: "Décision en conscience", type: "Effet", icon: "🎯", desc: "Comparaison futurs." },
  ],
  [
    { val: "3", label: "Projections temporelles", sub: "passé + présent + futur", color: colors.teal },
    { val: "SOAR", label: "Cadre planification", sub: "S-O-A-R", color: colors.gold },
  ],
  ["Je n'arrive pas à décider", "Je peux toujours reporter le changement"]
);

// ===== MODÉLISATION (958-959) =====

const modelisationCompetences = make(
  958, "Compétence", "Capture + test + transmission",
  "Protocole MP complet de modélisation : choix du modèle, observation directe ou interview, identification des facteurs critiques (croyances, valeurs, capacités, comportements), test sur soi, transmission. Compétence-clé du Maître Praticien.",
  ["Reproduire une excellence (sport, musique, prise de parole)", "Acquérir une compétence d'un mentor", "Coaching de performance", "Travail pédagogique"],
  ["Modèle inaccessible (pas d'observation possible)"],
  "Modélisation des compétences — Protocole complet",
  "120-180 min × plusieurs séances",
  colors.purple,
  "Choix + observation + facteurs critiques + test + transmission.",
  "Étapes",
  [
    { label: "Choix du modèle", detail: "Personne possédant la compétence visée. Réelle, accessible si possible." },
    { label: "Observation directe ou interview", detail: "Observer la personne en action. Ou interview structurée si pas accessible." },
    { label: "Capture des éléments observables", detail: "Comportements visibles, séquences, langage, posture." },
    { label: "Identification des facteurs internes", detail: "Croyances (« il faut... »), valeurs (« c'est important... »), capacités (compétences sous-jacentes)." },
    { label: "Test sur soi", detail: "Reproduire la séquence complète sur soi. Itérations." },
    { label: "Affinage", detail: "Identifier ce qui manque, ajuster, retester." },
    { label: "Transmission à un tiers", detail: "Enseigner la compétence à quelqu'un d'autre. Si transmission réussie : modélisation complète." },
    { label: "Documentation écrite", detail: "Manuel de la compétence, transmissible largement." },
  ],
  [
    { name: "Grille d'observation", type: "Document", icon: "📋", desc: "Capture structurée." },
    { name: "Test itératif", type: "Méthode", icon: "🔄", desc: "Affinage progressif." },
    { name: "Transmission", type: "Validation", icon: "🎓", desc: "Test ultime de modélisation." },
  ],
  [
    { val: "Plusieurs", label: "Séances", sub: "modélisation complète", color: colors.purple },
    { val: "Validation", label: "Par transmission", sub: "test ultime", color: colors.gold },
  ],
  ["Le talent est inné", "On ne peut pas reproduire l'excellence"]
);

const modelisationDilts = make(
  959, "6 niveaux", "Modélisation par les niveaux logiques",
  "Variante de modélisation utilisant les 6 niveaux logiques de Dilts pour une analyse exhaustive. Pour chaque niveau (Environnement, Comportement, Capacités, Croyances/Valeurs, Identité, Mission), capture des éléments-clés du modèle. Transposition adaptée au contexte du client.",
  ["Modélisation profonde (post-comportementale)", "Comprendre l'identité d'un expert", "Travail spirituel ou de mission"],
  ["Manque d'accès au modèle"],
  "Modélisation par les niveaux logiques",
  "120 min",
  colors.gold,
  "Capture pour chaque niveau + transposition + appropriation.",
  "Étapes",
  [
    { label: "Niveau 1 — Environnement", detail: "Où, quand, avec qui le modèle exerce-t-il ?" },
    { label: "Niveau 2 — Comportement", detail: "Que fait-il précisément, observable ?" },
    { label: "Niveau 3 — Capacités", detail: "Comment le fait-il ? Quelles compétences sous-jacentes ?" },
    { label: "Niveau 4 — Croyances & Valeurs", detail: "En quoi croit-il ? Qu'est-ce qui est important pour lui ?" },
    { label: "Niveau 5 — Identité", detail: "Qui est-il quand il fait cela ? Comment se définit-il ?" },
    { label: "Niveau 6 — Mission/Spirituel", detail: "À quoi sert-il ? À quelle cause plus grande contribue-t-il ?" },
    { label: "Synthèse pyramidale", detail: "Document complet sur les 6 niveaux." },
    { label: "Transposition au client", detail: "Comment chaque niveau peut-il être adopté/adapté par le client ?" },
    { label: "Plan d'appropriation progressive", detail: "Travail palier par palier, du bas vers le haut." },
  ],
  [
    { name: "Pyramide des 6 niveaux", type: "Document", icon: "🔺", desc: "Modélisation exhaustive." },
    { name: "Transposition contextuelle", type: "Adaptation", icon: "🔄", desc: "Au profil du client." },
  ],
  [
    { val: "6", label: "Niveaux modélisés", sub: "environnement → mission", color: colors.gold },
    { val: "120", label: "Minutes", sub: "modélisation complète", color: colors.purple },
  ],
  ["Je ne peux pas modéliser une identité", "Le sens, c'est personnel"]
);

// ===== VALEURS & CRITÈRES AVANCÉS (960-962) =====

const maslow = make(
  960, "Pyramide", "5 paliers + transcendance",
  "Application de la pyramide de Maslow (besoins physiologiques, sécurité, appartenance, estime, accomplissement, transcendance) à la cartographie des valeurs du client. Identification du palier de motivation actuel et du palier visé. Stratégie d'ascension.",
  ["Coaching de carrière", "Recherche de sens", "Travail sur la motivation profonde"],
  ["Demande très ponctuelle"],
  "Pyramide de Maslow appliquée",
  "60 min",
  colors.clientBlue,
  "Cartographie des paliers + diagnostic + ascension.",
  "Étapes",
  [
    { label: "Présentation des 6 paliers", detail: "Physiologique, sécurité, appartenance, estime, accomplissement, transcendance." },
    { label: "Diagnostic du palier actuel", detail: "« Sur quels paliers consacres-tu le plus d'énergie aujourd'hui ? »" },
    { label: "Identification du palier visé", detail: "« Vers quel palier voudrais-tu monter ? »" },
    { label: "Identification des blocages", detail: "Qu'est-ce qui empêche l'ascension ? Souvent : peur de perdre les paliers inférieurs." },
    { label: "Sécurisation des paliers inférieurs", detail: "Vérifier que les paliers de base sont solides avant de monter." },
    { label: "Stratégie d'ascension", detail: "Quelles actions concrètes pour atteindre le palier visé ?" },
    { label: "Vérification écologique", detail: "Compatible avec valeurs et entourage ?" },
  ],
  [
    { name: "Pyramide visuelle", type: "Modèle", icon: "🔺", desc: "6 paliers." },
    { name: "Stratégie d'ascension", type: "Plan", icon: "📈", desc: "Étapes concrètes." },
  ],
  [
    { val: "6", label: "Paliers Maslow", sub: "+ transcendance", color: colors.clientBlue },
    { val: "1", label: "Palier visé identifié", sub: "ascension claire", color: colors.gold },
  ],
  ["Je dois tout faire en même temps", "L'accomplissement est égoïste"]
);

const destabiliserCritere = make(
  961, "Contre-exemples", "Mise en doute d'un critère limitant",
  "Technique avancée pour déstabiliser un critère devenu limitant (« Pour être heureux, il faut absolument être riche »). Recherche de contre-exemples, mise en doute des équivalences complexes, élargissement des références. Permet l'émergence de nouveaux critères.",
  ["Critère limitant identifié", "Souffrance liée à un standard impossible", "Préparation à un changement de vie"],
  ["Critère écologique (ne pas le déstabiliser)"],
  "Déstabiliser un critère limitant",
  "60 min",
  colors.red,
  "Identification + contre-exemples + mise en doute + nouveau critère.",
  "Étapes",
  [
    { label: "Identification du critère limitant", detail: "« Pour [valeur], il faut [équivalence]. » Le client formule." },
    { label: "Recherche de contre-exemples", detail: "« Connais-tu quelqu'un qui a [valeur] sans [équivalence] ? » Au moins 5." },
    { label: "Approfondissement des contre-exemples", detail: "Détailler chaque contre-exemple. Visualiser." },
    { label: "Mise en doute de l'équivalence complexe", detail: "« Donc l'équivalence n'est pas absolue ? »" },
    { label: "Élargissement des références", detail: "« Comment d'autres personnes accèdent-elles à [valeur] différemment ? »" },
    { label: "Émergence d'un nouveau critère", detail: "« Quelle nouvelle équivalence te conviendrait mieux ? »" },
    { label: "Test", detail: "Le client teste mentalement la nouvelle équivalence dans une situation." },
    { label: "Pont sur le futur", detail: "Visualisation de la vie avec le nouveau critère." },
  ],
  [
    { name: "Contre-exemples ×5", type: "Méthode", icon: "🔍", desc: "Au moins 5 solides." },
    { name: "Mise en doute linguistique", type: "Linguistique", icon: "❓", desc: "« Vraiment ? Toujours ? »" },
  ],
  [
    { val: "5+", label: "Contre-exemples", sub: "pour déstabilisation", color: colors.red },
    { val: "Nouveau", label: "Critère émergent", sub: "plus écologique", color: colors.gold },
  ],
  ["Mon critère est universel", "Sans cette équivalence, je ne suis rien"]
);

const etendreEquivalences = make(
  962, "Élargissement", "Multiplier les façons de satisfaire un critère",
  "Technique inverse de la déstabilisation : élargir les façons concrètes dont un critère peut être satisfait. Ex : « liberté » peut être satisfait par voyages, choix de carrière, autonomie financière, créativité. Ouvre l'espace des satisfactions possibles.",
  ["Critère mal défini", "Frustration liée à un standard étroit", "Coaching d'épanouissement"],
  ["Critère déjà très large"],
  "Étendre les équivalences d'un critère",
  "45-60 min",
  colors.teal,
  "Critère + équivalences existantes + brainstorming + intégration.",
  "Étapes",
  [
    { label: "Identification du critère", detail: "Une valeur importante du client (liberté, sécurité, amour, créativité)." },
    { label: "Équivalences actuelles", detail: "« Comment satisfais-tu cette valeur aujourd'hui ? » Lister." },
    { label: "Brainstorming d'équivalences", detail: "« De quelles AUTRES façons cette valeur pourrait-elle être satisfaite ? » Au moins 10." },
    { label: "Évaluation de chaque équivalence", detail: "Réaliste ? Accessible ? Désirable ?" },
    { label: "Sélection des 3-5 nouvelles", detail: "Choisir celles à intégrer dans la vie." },
    { label: "Plan d'action", detail: "Première étape concrète pour chaque nouvelle équivalence." },
    { label: "Pont sur le futur", detail: "Vie avec un critère pleinement satisfait par multiples voies." },
  ],
  [
    { name: "Brainstorming ×10", type: "Méthode", icon: "💭", desc: "Multiplier les voies." },
    { name: "Plan d'action", type: "Document", icon: "📅", desc: "Premières étapes." },
  ],
  [
    { val: "10+", label: "Équivalences trouvées", sub: "espace élargi", color: colors.teal },
    { val: "3-5", label: "Nouvelles intégrées", sub: "concrètement", color: colors.gold },
  ],
  ["Cette valeur ne peut être satisfaite que d'une seule façon"]
);

// ===== CROYANCES AVANCÉES (963-967) =====

const detecteurCroyances = make(
  963, "Repérage", "« Oh ! Oh ! » dans le discours",
  "Outil de détection des croyances cachées dans le discours du client. Le praticien repère les phrases qui sonnent comme une vérité absolue (« Oh, ça c'est une croyance ! »). Mise au jour systématique. Cartographie de la matrice de croyances limitantes.",
  ["Première séance avec un client analytique", "Cartographie complète des croyances", "Préparation à transformation"],
  ["Refus du questionnement"],
  "Détecteur de croyances « Oh ! Oh ! »",
  "45 min (intégré)",
  colors.gold,
  "Écoute attentive + repérage + cartographie + restitution.",
  "Étapes",
  [
    { label: "Écoute attentive du discours", detail: "Le client parle librement de sa situation, ses difficultés, ses désirs." },
    { label: "Repérage des « Oh ! Oh ! »", detail: "Le praticien repère les phrases sonnant comme des vérités absolues : « Il faut... », « C'est toujours... », « Les gens sont... »." },
    { label: "Notation discrète", detail: "Sans interrompre, le praticien note chaque croyance détectée." },
    { label: "Restitution structurée", detail: "À la fin de la séance : « Voici les croyances que j'ai entendues. »" },
    { label: "Validation par le client", detail: "« Reconnais-tu ces croyances ? Lesquelles te limitent vraiment ? »" },
    { label: "Catégorisation", detail: "Croyances sur soi, sur les autres, sur le monde, sur les règles." },
    { label: "Plan de transformation", detail: "Sélection des 3 croyances limitantes prioritaires à transformer." },
  ],
  [
    { name: "Carnet d'écoute", type: "Outil", icon: "📓", desc: "Notation discrète." },
    { name: "Grille de catégorisation", type: "Document", icon: "📋", desc: "Soi/Autres/Monde/Règles." },
  ],
  [
    { val: "5-10", label: "Croyances par séance", sub: "détection moyenne", color: colors.gold },
    { val: "3", label: "Croyances prioritaires", sub: "à transformer", color: colors.purple },
  ],
  ["Mes croyances sont des vérités", "Je n'ai pas de croyances limitantes"]
);

const marcheTransformation = make(
  964, "5 espaces", "Vivre la transformation kinesthésiquement",
  "Protocole spatial de transformation : 5 espaces au sol (croyance ancienne, doute, ouverture, nouvelle croyance, intégration). Le client traverse physiquement chaque espace, vit l'évolution kinesthésique de la croyance. Particulièrement puissant pour croyances ancrées.",
  ["Croyance très ancrée résistant aux approches verbales", "Client kinesthésique", "Travail identitaire profond"],
  ["Espace insuffisant", "Refus du déplacement physique"],
  "Marche de transformation des croyances",
  "60-90 min",
  colors.purple,
  "5 espaces au sol + traversée + ancrage progressif.",
  "Étapes",
  [
    { label: "Installation des 5 espaces", detail: "Au sol, en ligne : (1) Croyance ancienne, (2) Doute, (3) Ouverture, (4) Nouvelle croyance, (5) Intégration." },
    { label: "Espace 1 — Croyance ancienne", detail: "Le client se tient ici. Vit pleinement la croyance ancienne. Son ressenti, ses limites." },
    { label: "Pas vers Espace 2 — Doute", detail: "« Et si ce n'était pas tout à fait vrai ? Et si c'était à nuancer ? »" },
    { label: "Pas vers Espace 3 — Ouverture", detail: "« D'autres possibilités existent. Quelles seraient-elles ? »" },
    { label: "Pas vers Espace 4 — Nouvelle croyance", detail: "Le client énonce et incarne la nouvelle croyance. Posture, voix, ressenti." },
    { label: "Pas vers Espace 5 — Intégration", detail: "Synthèse. La nouvelle croyance fait pleinement partie de soi." },
    { label: "Retour libre", detail: "Le client peut revenir explorer chaque espace librement." },
    { label: "Pont sur le futur", detail: "Visualisation de situations futures avec la nouvelle croyance." },
  ],
  [
    { name: "5 marquages au sol", type: "Spatial", icon: "🟦", desc: "Étapes physiques." },
    { name: "Ancrage kinesthésique", type: "PNL", icon: "🚶", desc: "Marche = changement." },
  ],
  [
    { val: "5", label: "Espaces traversés", sub: "ancienne → intégration", color: colors.purple },
    { val: "Kinesth.", label: "Mode dominant", sub: "très puissant pour ancrage", color: colors.gold },
  ],
  ["La marche ne change pas une croyance", "C'est trop simple pour être efficace"]
);

const marelle = make(
  965, "Jeu spatial", "Variante ludique au sol",
  "Variante ludique et puissante de transformation : carrés au sol (comme une marelle) représentant les étapes de transformation d'une croyance. Le client saute d'un carré à l'autre, ancrant chaque étape physiquement. Particulièrement adapté aux clients kinesthésiques.",
  ["Client kinesthésique enfant ou adulte", "Travail avec légèreté", "Ancrage par jeu"],
  ["Refus du jeu corporel", "Difficulté motrice"],
  "Marelle des croyances",
  "45-60 min",
  colors.clientOrange,
  "Marelle dessinée + sauts + ancrage progressif.",
  "Étapes",
  [
    { label: "Dessin de la marelle", detail: "Au sol : 7-8 carrés en forme classique de marelle." },
    { label: "Attribution des étapes", detail: "Carré 1 = croyance ancienne, 2 = doute, 3 = curiosité, 4 = ouverture, 5 = test, 6 = nouvelle croyance, 7 = intégration, 8 = vie nouvelle." },
    { label: "Saut dans le carré 1", detail: "Le client saute, vit pleinement la croyance ancienne." },
    { label: "Sauts successifs", detail: "À chaque saut, vivre l'étape. Le mouvement physique ancre le passage." },
    { label: "Variations", detail: "Possible de revenir en arrière, refaire des sauts. Comme dans le jeu." },
    { label: "Atteinte du carré 8", detail: "Vie nouvelle pleinement incarnée." },
    { label: "Saut final libre", detail: "Le client peut sauter à volonté pour ancrer." },
    { label: "Pont sur le futur", detail: "Vie avec la nouvelle croyance." },
  ],
  [
    { name: "Marelle dessinée", type: "Outil", icon: "🎨", desc: "Au sol, 7-8 carrés." },
    { name: "Sauts ancrants", type: "Technique", icon: "🦘", desc: "Mouvement = changement." },
  ],
  [
    { val: "7-8", label: "Carrés", sub: "étapes du changement", color: colors.clientOrange },
    { val: "Ludique", label: "Approche", sub: "légèreté et profondeur", color: colors.gold },
  ],
  ["Le travail thérapeutique doit être sérieux", "La marelle, c'est pour les enfants"]
);

const reImprinting = make(
  966, "Empreinte", "Réécriture de l'empreinte parentale (Dilts)",
  "Protocole emblématique de Robert Dilts pour transformer les empreintes parentales (croyances/comportements installés tôt par les figures parentales). Voyage temporel, dialogue avec les figures parentales, transmission des ressources actuelles à l'enfant intérieur, intégration.",
  ["Empreinte parentale limitante identifiée", "Croyance « héritée » qui ne fonctionne plus", "Travail sur l'enfant intérieur"],
  ["Trauma sévère (préférer trauma complexe 844)", "Crise psychiatrique"],
  "Re-imprinting — Empreinte parentale",
  "90-120 min",
  colors.red,
  "Identification + voyage temporel + dialogue + transmission + intégration.",
  "Étapes",
  [
    { label: "Identification de l'empreinte", detail: "« Quelle croyance ou comportement viens-tu de tes parents et te limite ? »" },
    { label: "Recherche de la scène d'empreinte", detail: "« Quel souvenir précis a installé cette empreinte ? Tu avais quel âge ? »" },
    { label: "Mise en transe légère", detail: "Détente, ouverture imaginative." },
    { label: "Voyage temporel", detail: "Retour symbolique à la scène d'empreinte. Le client adulte est présent en observateur." },
    { label: "Dialogue avec les figures parentales", detail: "« Le client adulte demande aux parents leur intention positive. Comprend leur contexte. »" },
    { label: "Transmission des ressources adultes", detail: "Le client adulte transmet à l'enfant les ressources qui lui ont manqué (sécurité, permission, amour)." },
    { label: "Réécriture de la scène", detail: "La scène se rejoue avec les ressources transmises. Nouvelle empreinte." },
    { label: "Intégration au présent", detail: "Le client adulte intègre la nouvelle empreinte. Ressent le changement identitaire." },
    { label: "Pont sur le futur", detail: "Vie avec la nouvelle empreinte." },
  ],
  [
    { name: "Voyage temporel symbolique", type: "Technique", icon: "⏳", desc: "Retour à la scène." },
    { name: "Dialogue intergénérationnel", type: "Dialogue", icon: "👥", desc: "Avec figures parentales." },
    { name: "Transmission ressources adultes", type: "Réparation", icon: "🎁", desc: "Ce qui a manqué." },
  ],
  [
    { val: "Dilts", label: "Origine", sub: "Robert Dilts années 80-90", color: colors.red },
    { val: "90-120", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mes parents ont fait ce qu'ils pouvaient", "Je ne peux pas changer mon empreinte"]
);

const transgeneralisateur = make(
  967, "Universel", "Ressource généralisée à tous contextes",
  "Technique avancée pour généraliser une ressource ou une nouvelle croyance à TOUS les contextes de vie. Ancrage massif, transposition mentale aux multiples situations, vérification écologique. Outil de pérennisation du changement post-PNL.",
  ["Pérennisation post-PNL", "Ressource fragile à renforcer", "Travail de fin de coaching"],
  ["Ressource encore mal installée"],
  "Transgénéralisateur — Universalisation",
  "60 min",
  colors.clientBlue,
  "Ressource + transposition à 10+ contextes + ancrage massif.",
  "Étapes",
  [
    { label: "Identification de la ressource à généraliser", detail: "Confiance, calme, créativité, etc." },
    { label: "Ancrage initial fort", detail: "Accès à la ressource au pic, ancrage massif (geste, mot, image)." },
    { label: "Liste des 10+ contextes", detail: "« Dans quelles situations veux-tu utiliser cette ressource ? » Lister exhaustivement." },
    { label: "Transposition mentale ×10", detail: "Pour chaque contexte : visualisation détaillée + activation de l'ancre + intégration." },
    { label: "Vérification écologique", detail: "« Cette ressource s'applique-t-elle vraiment à TOUS les contextes ? Cas où elle serait inadaptée ? »" },
    { label: "Affinage", detail: "Si certains contextes nécessitent une ressource différente, identifier laquelle." },
    { label: "Pacte d'utilisation", detail: "Engagement à utiliser l'ancre dans les 10 contextes." },
  ],
  [
    { name: "10+ contextes", type: "Liste", icon: "📋", desc: "Exhaustivité." },
    { name: "Ancrage massif", type: "PNL", icon: "📍", desc: "Au pic d'intensité." },
    { name: "Vérification écologique", type: "Sécurité", icon: "♻", desc: "Adaptation par contexte." },
  ],
  [
    { val: "10+", label: "Contextes", sub: "généralisation maximale", color: colors.clientBlue },
    { val: "60", label: "Minutes", sub: "pérennisation post-PNL", color: colors.gold },
  ],
  ["Une ressource ne marche que dans son contexte", "Je vais l'oublier dans la vraie vie"]
);

// ===== IDENTITÉ (968-972) =====

const sixCles = make(
  968, "21 jours", "6 piliers de Branden quotidiens",
  "Protocole quotidien des 6 clés de la confiance en soi : (1) Vivre conscient, (2) S'accepter, (3) Se responsabiliser, (4) S'affirmer, (5) Vivre intentionnellement, (6) S'engager dans l'intégrité. Inspiré de Nathaniel Branden. Pratique quotidienne 21 jours.",
  ["Auto-coaching long terme", "Renforcement quotidien de l'estime", "Suite de séance Maître Praticien"],
  ["Manque d'engagement quotidien"],
  "6 clés de la confiance — Pratique quotidienne",
  "15-30 min/jour pendant 21 jours",
  colors.gold,
  "Pratique des 6 piliers + carnet de bord.",
  "Les 6 piliers à pratiquer",
  [
    { label: "1 — Vivre conscient", detail: "Chaque jour : 10 min de pleine conscience. Quel est mon ressenti ? Mes pensées ? Mes choix ?" },
    { label: "2 — S'accepter", detail: "S'observer sans jugement. Accepter ses émotions, ses doutes, ses imperfections." },
    { label: "3 — Se responsabiliser", detail: "Identifier où je suis acteur de ma vie. Ne pas blâmer l'extérieur." },
    { label: "4 — S'affirmer", detail: "Exprimer ses besoins, dire non quand nécessaire. 1 acte par jour." },
    { label: "5 — Vivre intentionnellement", detail: "Choisir ses actions en fonction de ses valeurs et objectifs. Pas en pilotage automatique." },
    { label: "6 — S'engager dans l'intégrité", detail: "Aligner pensées, paroles, actes. Tenir ses engagements envers soi." },
    { label: "Carnet quotidien", detail: "1 ligne par pilier chaque soir : ce que j'ai pratiqué aujourd'hui." },
  ],
  [
    { name: "6 piliers (Branden)", type: "Référence", icon: "🏛", desc: "Nathaniel Branden." },
    { name: "Carnet de bord", type: "Suivi", icon: "📓", desc: "Quotidien 21 jours." },
  ],
  [
    { val: "6", label: "Piliers", sub: "Nathaniel Branden", color: colors.gold },
    { val: "21", label: "Jours", sub: "ancrage habitude", color: colors.purple },
  ],
  ["Je n'ai pas confiance en moi génétiquement", "Ça ne se travaille pas"]
);

const restaurerEstime = make(
  969, "Profond", "Travail sur les blessures fondatrices",
  "Protocole complet de restauration de l'estime de soi : identification des blessures fondatrices, recadrage, ancrage des réussites, dialogue avec l'enfant intérieur, transmission des ressources adultes, intégration au niveau identitaire. Travail en profondeur.",
  ["Estime de soi très basse persistante", "Histoire d'humiliation ou rejet", "Préparation à un changement de vie majeur"],
  ["Trauma sévère (préférer trauma complexe 844)", "Crise dépressive (suivi médical)"],
  "Restaurer l'estime de soi — Programme complet",
  "90 min × 3-5 séances",
  colors.purple,
  "Identification + recadrage + enfant intérieur + transmission + intégration.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Cartographie des blessures", detail: "Identification des moments-clés ayant blessé l'estime." },
    { label: "Séance 1 — Identification des messages reçus", detail: "Quels mots, regards, comportements ont installé la blessure ?" },
    { label: "Séance 2 — Recadrage de chaque blessure", detail: "Réinterprétation à la lumière des connaissances actuelles." },
    { label: "Séance 2 — Ancrage des réussites", detail: "Inventaire des réussites passées. Ancrage massif." },
    { label: "Séance 3 — Dialogue avec l'enfant intérieur", detail: "Visualisation de l'enfant blessé. Le client adulte le rencontre." },
    { label: "Séance 3 — Transmission des ressources adultes", detail: "Ce qui a manqué : amour, sécurité, reconnaissance, permission." },
    { label: "Séance 4 — Intégration identitaire", detail: "Travail au niveau identitaire. « Je suis... »" },
    { label: "Séance 5 — Pont sur le futur & autonomisation", detail: "Outils d'auto-soutien quotidiens." },
  ],
  [
    { name: "Cartographie des blessures", type: "Diagnostic", icon: "🗺", desc: "Moments-clés." },
    { name: "Enfant intérieur", type: "Visualisation", icon: "🧒", desc: "Dialogue réparateur." },
    { name: "Transmission ressources", type: "Réparation", icon: "🎁", desc: "Ce qui a manqué." },
  ],
  [
    { val: "3-5", label: "Séances", sub: "travail en profondeur", color: colors.purple },
    { val: "Identité", label: "Niveau d'impact", sub: "transformation profonde", color: colors.gold },
  ],
  ["Mon estime est cassée pour toujours", "Je ne mérite pas mieux"]
);

const autoCritique = make(
  970, "Voix", "Modulation de la voix intérieure",
  "Technique précise pour identifier et désamorcer la voix auto-critique intérieure. Cartographie sensorielle de la voix (tonalité, volume, position), modulation par sous-modalités, transformation en voix bienveillante, ancrage. Outil quotidien d'auto-régulation.",
  ["Auto-critique récurrente", "Anxiété de performance", "Estime de soi à reconstruire"],
  ["Hallucinations auditives (consultation psychiatrique)"],
  "Faire taire l'auto-critique",
  "45-60 min",
  colors.red,
  "Cartographie + modulation + transformation + ancrage.",
  "Étapes",
  [
    { label: "Identification de la voix auto-critique", detail: "« Quand tu te critiques, qu'entends-tu ? Quelle voix ? »" },
    { label: "Cartographie sensorielle", detail: "Tonalité (aigu/grave), volume, vitesse, position spatiale (où dans la tête ?)." },
    { label: "Identification de l'origine", detail: "« À qui ressemble cette voix ? Parent, prof, ami ? »" },
    { label: "Modulation par sous-modalités", detail: "Baisser le volume, ralentir, déplacer la voix loin." },
    { label: "Transformation de la voix", detail: "Changer le ton en voix d'enfant rigolote, ou voix d'animal sympa, ou musique." },
    { label: "Construction de la voix bienveillante", detail: "« Quelle voix bienveillante voudrais-tu entendre à la place ? »" },
    { label: "Substitution", detail: "Quand l'auto-critique surgit, activer immédiatement la voix bienveillante." },
    { label: "Ancrage", detail: "Geste, mot, image pour activation rapide." },
    { label: "Pont sur le futur", detail: "Visualisation de situations futures avec la nouvelle voix." },
  ],
  [
    { name: "Cartographie auditive", type: "Diagnostic", icon: "🎙", desc: "Tonalité, volume, position." },
    { name: "Modulation SM auditives", type: "PNL", icon: "🎚", desc: "Volume, ton, vitesse." },
    { name: "Voix bienveillante", type: "Substitution", icon: "🕊", desc: "À la place de l'auto-critique." },
  ],
  [
    { val: "Auditif", label: "Canal travaillé", sub: "voix intérieure", color: colors.red },
    { val: "Auto-régul.", label: "Mode", sub: "outil quotidien", color: colors.gold },
  ],
  ["La voix est juste, je suis nul", "Je ne peux pas la faire taire"]
);

const centreEtoile = make(
  971, "Identité-noyau", "Étoile à branches + cœur immuable",
  "Visualisation puissante du centre identitaire : étoile à plusieurs branches (rôles sociaux, talents, valeurs) avec un cœur central immuable (l'Identité-noyau). Le client visite chaque branche puis se recentre. Particulièrement utile en perte de sens, transition.",
  ["Crise identitaire", "Transition de vie majeure", "Perte de repères", "Travail post-burnout"],
  ["Manque de capacité visualisation"],
  "Le Centre de l'Étoile — Identité-noyau",
  "60 min",
  colors.purple,
  "Construction de l'étoile + visite des branches + recentrage.",
  "Étapes",
  [
    { label: "Construction de l'étoile", detail: "Le client visualise une étoile à 5-7 branches. Chaque branche = un rôle/talent/valeur fondamental." },
    { label: "Identification des branches", detail: "« Tes rôles : père, fille, professionnel, ami, citoyen... Tes talents : créativité, écoute, leadership... Tes valeurs : justice, beauté... »" },
    { label: "Identification du cœur central", detail: "« Au centre de l'étoile : qui es-tu au-delà de tous ces rôles ? L'identité-noyau, immuable. »" },
    { label: "Visite de chaque branche", detail: "Le client se déplace mentalement sur chaque branche. Vit pleinement chaque facette." },
    { label: "Retour au cœur après chaque branche", detail: "Reconnexion au noyau central. « Au-delà du rôle, je suis. »" },
    { label: "Synthèse identitaire", detail: "« Je suis l'étoile complète + le cœur immuable. »" },
    { label: "Application", detail: "Cas concrets : si une branche est blessée (ex : perte d'un rôle pro), le cœur reste intact." },
    { label: "Pont sur le futur", detail: "Vie avec la conscience permanente du Centre de l'Étoile." },
  ],
  [
    { name: "Étoile visualisée", type: "Métaphore", icon: "✨", desc: "5-7 branches + cœur." },
    { name: "Recentrage régulier", type: "Pratique", icon: "🔄", desc: "Branche → cœur → branche." },
    { name: "Identité-noyau", type: "Concept", icon: "💎", desc: "Immuable au-delà des rôles." },
  ],
  [
    { val: "5-7", label: "Branches typiques", sub: "rôles + talents + valeurs", color: colors.purple },
    { val: "1", label: "Cœur central", sub: "immuable", color: colors.gold },
  ],
  ["Je suis défini par mes rôles", "Si je perds mon rôle, je perds mon identité"]
);

const missionVision = make(
  972, "Spirituel", "À quoi je sers + monde à co-créer",
  "Travail d'identification de la mission et de la vision personnelle. Visualisation au niveau Spirituel/Mission des niveaux logiques. Formulation écrite de la mission (à quoi je sers) et de la vision (le monde que je veux contribuer à créer). Alignement de tous les niveaux logiques.",
  ["Recherche de sens profond", "Préparation à une réorientation majeure", "Travail spirituel/coaching profond", "Fin de parcours Maître Praticien"],
  ["Demande très ponctuelle", "Crise dépressive aiguë"],
  "Mission & Vision personnelle",
  "90-120 min",
  colors.teal,
  "Visualisation niveau spirituel + formulation + alignement complet.",
  "Étapes",
  [
    { label: "Préparation par les niveaux logiques", detail: "Brève remontée Environnement → Mission via les 6 niveaux." },
    { label: "Atterrissage au niveau Mission/Spirituel", detail: "« À quoi sers-tu dans ce monde ? À quelle cause plus grande contribues-tu ? »" },
    { label: "Visualisation symbolique", detail: "Images, sons, sensations qui viennent quand on touche cette dimension." },
    { label: "Formulation de la mission", detail: "1 phrase courte. « Je sers le monde en... » Écrire." },
    { label: "Visualisation de la vision", detail: "« Si ta mission était pleinement accomplie, à quoi ressemblerait le monde ? »" },
    { label: "Formulation de la vision", detail: "1 phrase. « Je contribue à un monde où... » Écrire." },
    { label: "Vérification de cohérence", detail: "Mission et vision sont-elles alignées ? Compatibles avec valeurs identifiées ?" },
    { label: "Redescente alignée", detail: "Mission → Identité → Croyances/Valeurs → Capacités → Comportements → Environnement. Avec l'énergie de la mission." },
    { label: "Plan d'action", detail: "Premières actions concrètes pour incarner la mission au quotidien." },
  ],
  [
    { name: "Mission écrite", type: "Document", icon: "📜", desc: "1 phrase courte." },
    { name: "Vision écrite", type: "Document", icon: "🌅", desc: "Monde à co-créer." },
    { name: "Alignement complet 6 niveaux", type: "Méthode", icon: "🔺", desc: "Mission → Environnement." },
  ],
  [
    { val: "1+1", label: "Phrases", sub: "mission + vision", color: colors.teal },
    { val: "6", label: "Niveaux alignés", sub: "ancrage profond", color: colors.gold },
  ],
  ["Je n'ai pas de mission spéciale", "C'est prétentieux de parler de mission", "Le sens est inaccessible"]
);

export const maitrePnlDetails: Record<number, ProtocolDetail> = {
  950: mpPerception,
  951: mpTraitement,
  952: mpMotivation,
  953: cartographieComplete,
  954: metaObjectif,
  955: motivationVersLoin,
  956: mentors,
  957: dickensSoar,
  958: modelisationCompetences,
  959: modelisationDilts,
  960: maslow,
  961: destabiliserCritere,
  962: etendreEquivalences,
  963: detecteurCroyances,
  964: marcheTransformation,
  965: marelle,
  966: reImprinting,
  967: transgeneralisateur,
  968: sixCles,
  969: restaurerEstime,
  970: autoCritique,
  971: centreEtoile,
  972: missionVision,
};
