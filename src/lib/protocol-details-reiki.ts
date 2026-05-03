import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Reiki Usui (IDs 820-823).
 * Source : GS Formation — REIKI USUI 4 degrés.
 * Lignée traditionnelle Mikao Usui (1865-1926).
 */

// =====================================================================
// ID 820 — Reiki Usui 1er degré (Shoden)
// =====================================================================
const shoden: ProtocolDetail = {
  protocolId: 820,
  efficacite: "100%",
  efficaciteSub: "Activation effective du canal après initiation",
  description:
    "Premier degré du Reiki Usui (Shoden = « enseignement initial »). Initiation par un Maître Reiki ouvrant le canal énergétique universel. Apprentissage du protocole d'auto-traitement complet (12 positions des mains) et du soin physique sur autrui. Enseignement des 5 préceptes (Gokai) de Mikao Usui et de la respiration énergétique Hatsurei-ho.",
  indications: [
    "Toute personne désirant pratiquer le Reiki",
    "Recherche d'un outil quotidien d'auto-soin",
    "Quête de sens et de spiritualité",
    "Accompagnement du stress et de la fatigue chronique",
    "Soutien d'un cheminement intérieur",
  ],
  contraindications: [
    "Aucune contre-indication absolue",
    "Pratique distincte d'un suivi médical (jamais en remplacement)",
    "Prudence avec personnes en psychose aiguë (apaisant mais non curatif)",
  ],
  programs: [
    {
      id: "principal",
      title: "Initiation Shoden — 2 jours + 21 jours",
      icon: "◐",
      duration: "2 jours d'initiation + pratique quotidienne 21 jours",
      color: colors.purple,
      recommended: true,
      description:
        "Initiation par un Maître Reiki suivie d'une période de purification de 21 jours pendant laquelle le canal s'ouvre pleinement. Auto-traitement quotidien obligatoire pour ancrer la pratique.",
      seances: [
        {
          num: 1,
          title: "Jour 1 — Histoire, préceptes & première initiation",
          steps: [
            { label: "Histoire du Reiki Usui", detail: "Mikao Usui (1865-1926), retraite sur le mont Kurama, illumination, transmission à Chujiro Hayashi puis à Hawayo Takata. Lignée jusqu'au formateur." },
            { label: "Les 5 préceptes (Gokai)", detail: "« Juste pour aujourd'hui : ne te mets pas en colère, ne te fais pas de souci, sois reconnaissant, travaille avec ardeur, sois bon envers autrui. »" },
            { label: "Première initiation (Reiju)", detail: "Cérémonie sacrée de transmission par le Maître. Ouverture du canal énergétique au niveau de la couronne, du cœur et des paumes." },
            { label: "Hatsurei-ho — respiration énergétique", detail: "Technique de purification quotidienne : Kenyoku (nettoyage à sec), Joshin Kokyu Ho (respiration de purification), Seishin Toitsu (concentration)." },
            { label: "Première expérience d'auto-traitement", detail: "Mains posées sur la tête, ressenti des picotements, chaleur, fraîcheur. Validation de l'activation du canal." },
          ],
        },
        {
          num: 2,
          title: "Jour 2 — Auto-traitement complet & soin sur autrui",
          steps: [
            { label: "Les 12 positions des mains (auto-traitement)", detail: "4 sur la tête, 4 sur le tronc avant, 4 sur le tronc arrière. 3-5 minutes par position. Séance complète : 45-60 min." },
            { label: "Initiations 2, 3 et 4", detail: "Renforcement progressif du canal sur 3 transmissions supplémentaires dans la journée." },
            { label: "Protocole de soin sur autrui", detail: "Préparation de l'espace. Connexion. Positions des mains de la tête aux pieds. Clôture et ancrage. Boire de l'eau." },
            { label: "Pratique en binôme", detail: "Chaque participant donne et reçoit un soin complet. Échange des ressentis." },
            { label: "Engagement des 21 jours", detail: "Auto-traitement quotidien obligatoire pendant 21 jours pour stabiliser le canal et purifier les mémoires cellulaires." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Les 5 préceptes (Gokai)", type: "Cadre éthique", icon: "✋", desc: "Récitation matin et soir. Cadre quotidien de la pratique Reiki." },
    { name: "Hatsurei-ho", type: "Technique", icon: "🌬", desc: "Respiration énergétique purificatrice — 5 à 10 min/jour." },
    { name: "12 positions des mains", type: "Protocole", icon: "🤲", desc: "Auto-traitement complet — 45-60 min par séance." },
    { name: "Journal des 21 jours", type: "Suivi", icon: "📖", desc: "Carnet de bord de la période de purification post-initiation." },
  ],
  stats: [
    { val: "21 j", label: "Période de purification", sub: "auto-traitement quotidien", color: colors.purple },
    { val: "12", label: "Positions des mains", sub: "tête, tronc avant/arrière", color: colors.gold },
    { val: "5", label: "Préceptes (Gokai)", sub: "cadre quotidien", color: colors.teal },
    { val: "4", label: "Initiations en 2 jours", sub: "ouverture progressive du canal", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas de don pour les énergies",
    "Le Reiki n'est pas pour moi",
    "Je ne sentirai rien",
    "Je ne suis pas assez spirituel·le",
  ],
};

// =====================================================================
// ID 821 — Reiki Usui 2nd degré (Okuden)
// =====================================================================
const okuden: ProtocolDetail = {
  protocolId: 821,
  efficacite: "Distance",
  efficaciteSub: "Soin à distance dans le temps et l'espace",
  description:
    "Deuxième degré du Reiki Usui (Okuden = « enseignement intérieur »). Transmission des 3 symboles sacrés : Cho-Ku-Rei (amplification), Sei-He-Ki (émotionnel/mental), Hon-Sha-Ze-Sho-Nen (distance). Permet le soin à distance dans le temps et l'espace, le travail sur les blessures émotionnelles, et la programmation d'intentions futures.",
  indications: [
    "Pratiquant Reiki 1er degré depuis ≥ 3 mois",
    "Désir de soigner à distance (familles éloignées, situations passées)",
    "Travail sur blessures émotionnelles et mentales",
    "Programmation d'intentions vers le futur",
    "Approfondissement de la pratique énergétique",
  ],
  contraindications: [
    "Pratique du 1er degré insuffisante (< 3 mois)",
    "Soin à distance sans accord de la personne (éthique)",
    "Recherche de pouvoir personnel plutôt que de service",
  ],
  programs: [
    {
      id: "principal",
      title: "Initiation Okuden — 2 jours",
      icon: "◑",
      duration: "2 jours + pratique régulière",
      color: colors.gold,
      recommended: true,
      description:
        "Transmission des 3 symboles sacrés et de leurs mantras associés. Apprentissage du soin à distance et du travail émotionnel.",
      seances: [
        {
          num: 1,
          title: "Jour 1 — Cho-Ku-Rei & Sei-He-Ki",
          steps: [
            { label: "Initiation Okuden", detail: "Cérémonie de transmission des 3 symboles par le Maître. Activation des codes vibratoires." },
            { label: "Cho-Ku-Rei (amplification)", detail: "Symbole de la force. Trace en spirale + mantra « Cho-Ku-Rei » 3×. Amplifie l'énergie, ouvre la séance, scelle un soin, protège un lieu." },
            { label: "Sei-He-Ki (émotionnel/mental)", detail: "Symbole de l'harmonie. Trace en hiéroglyphe + mantra « Sei-He-Ki » 3×. Travaille sur traumatismes, dépendances, croyances limitantes, schémas mentaux." },
            { label: "Pratique : soin émotionnel sur autrui", detail: "Application des 2 premiers symboles sur un binôme. Travail ciblé sur une émotion ou un schéma." },
          ],
        },
        {
          num: 2,
          title: "Jour 2 — Hon-Sha-Ze-Sho-Nen & soin à distance",
          steps: [
            { label: "Hon-Sha-Ze-Sho-Nen (distance)", detail: "Symbole du pont. Trace en kanji + mantra « Hon-Sha-Ze-Sho-Nen » 3×. Permet de soigner à distance dans le temps (passé/futur) et l'espace (autre lieu)." },
            { label: "Protocole de soin à distance", detail: "Photo ou pensée de la personne, accord recueilli ou intention bienveillante. Activation HSZSN puis soin complet en visualisation des positions." },
            { label: "Programmation d'intentions futures", detail: "Visualisation d'un événement à venir + activation HSZSN + suggestion bienveillante. Ex : examen, entretien, opération chirurgicale." },
            { label: "Soin à distance sur événement passé", detail: "Visualisation d'un événement traumatique passé + envoi de Reiki. Recadrage énergétique de la mémoire." },
            { label: "Éthique du soin à distance", detail: "Demander l'accord chaque fois que possible. Respect du libre arbitre. Pas d'ingérence non sollicitée." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Cho-Ku-Rei", type: "Symbole", icon: "🔆", desc: "Amplification de l'énergie. Spirale + mantra ×3." },
    { name: "Sei-He-Ki", type: "Symbole", icon: "🕊", desc: "Harmonie émotionnelle/mentale. Hiéroglyphe + mantra ×3." },
    { name: "Hon-Sha-Ze-Sho-Nen", type: "Symbole", icon: "🌉", desc: "Pont espace-temps. Kanji + mantra ×3." },
    { name: "Carnet de soins à distance", type: "Suivi", icon: "📓", desc: "Trace les soins envoyés, retours reçus, observations." },
  ],
  stats: [
    { val: "3", label: "Symboles sacrés transmis", sub: "Cho-Ku-Rei, Sei-He-Ki, HSZSN", color: colors.gold },
    { val: "∞", label: "Distance temporelle/spatiale", sub: "soin passé, présent, futur", color: colors.purple },
    { val: "3 mois", label: "Délai recommandé", sub: "entre Shoden et Okuden", color: colors.teal },
  ],
  croyances: [
    "Soigner à distance est impossible",
    "Je dois toucher pour soigner",
    "Je ne saurai pas tracer les symboles correctement",
  ],
};

// =====================================================================
// ID 822 — Reiki Usui 3ème degré (Shinpiden)
// =====================================================================
const shinpiden: ProtocolDetail = {
  protocolId: 822,
  efficacite: "Maître",
  efficaciteSub: "Praticien — accès à l'essence du Reiki",
  description:
    "Troisième degré du Reiki Usui (Shinpiden = « enseignement du mystère »). Maître Praticien. Transmission du symbole Maître Dai-Ko-Myo. Approfondissement spirituel, augmentation significative de la puissance énergétique, accès à l'essence du Reiki. Préparation possible au 4ème degré (Maître Enseignant).",
  indications: [
    "Pratiquant Okuden depuis ≥ 6 mois",
    "Pratique régulière et engagée du Reiki",
    "Désir d'approfondissement spirituel",
    "Recherche d'un canal énergétique plus puissant",
    "Préparation à devenir éventuellement enseignant",
  ],
  contraindications: [
    "Précipitation dans les degrés (sans pratique réelle)",
    "Recherche de prestige ou de titre plutôt que de service",
    "Manque d'intégration des degrés précédents",
  ],
  programs: [
    {
      id: "principal",
      title: "Initiation Shinpiden — 2 à 3 jours",
      icon: "◕",
      duration: "2-3 jours + pratique avancée",
      color: colors.teal,
      recommended: true,
      description:
        "Transmission du symbole Maître Dai-Ko-Myo. Travail sur l'essence du Reiki et la dimension spirituelle profonde.",
      seances: [
        {
          num: 1,
          title: "Jour 1 — Initiation Maître & Dai-Ko-Myo",
          steps: [
            { label: "Initiation Shinpiden", detail: "Cérémonie sacrée de transmission du symbole Maître par le Maître Enseignant. Activation du canal Maître." },
            { label: "Dai-Ko-Myo (Grande Lumière)", detail: "Symbole Maître. Trace en kanji complexe + mantra « Dai-Ko-Myo » 3×. Active le potentiel le plus haut du praticien et du receveur. Travaille au niveau de l'âme." },
            { label: "Méditation prolongée", detail: "Méditation de 45-60 min en présence du symbole Dai-Ko-Myo. Intégration vibratoire." },
            { label: "Soin avec Dai-Ko-Myo", detail: "Pratique d'un soin complet en utilisant le symbole Maître au début, à la fin, et sur les chakras principaux." },
          ],
        },
        {
          num: 2,
          title: "Jour 2-3 — Pratique spirituelle avancée",
          steps: [
            { label: "Méditation Reiki avancée", detail: "Techniques de méditation spécifiques au Maître Praticien. Connexion à la source." },
            { label: "Travail sur les chakras", detail: "Soin précis sur chacun des 7 chakras principaux avec Dai-Ko-Myo." },
            { label: "Auto-initiation quotidienne", detail: "Apprentissage de la technique d'auto-initiation pour entretenir le canal." },
            { label: "Service et humilité", detail: "Réflexion sur le rôle du Maître Praticien. Service désintéressé. Continuation du chemin." },
            { label: "Pratique éthique avancée", detail: "Confidentialité, respect du libre arbitre, non-ingérence, gestion des projections du receveur." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Dai-Ko-Myo", type: "Symbole Maître", icon: "✨", desc: "Grande Lumière — symbole de l'âme. Kanji + mantra ×3." },
    { name: "Méditation Reiki avancée", type: "Pratique", icon: "🧘", desc: "Connexion quotidienne à la source." },
    { name: "Auto-initiation", type: "Technique", icon: "🔄", desc: "Entretien quotidien du canal Maître." },
  ],
  stats: [
    { val: "Maître", label: "Praticien", sub: "Shinpiden — enseignement du mystère", color: colors.teal },
    { val: "Dai-Ko-Myo", label: "Symbole transmis", sub: "Grande Lumière", color: colors.gold },
    { val: "6 mois+", label: "Délai depuis Okuden", sub: "intégration nécessaire", color: colors.purple },
  ],
  croyances: [
    "Je ne suis pas digne d'être Maître",
    "Je n'ai pas assez de pratique",
    "Le titre va me changer (ego)",
  ],
};

// =====================================================================
// ID 823 — Reiki Usui 4ème degré (Maître Enseignant)
// =====================================================================
const maitreEnseignant: ProtocolDetail = {
  protocolId: 823,
  efficacite: "Transmission",
  efficaciteSub: "Capacité d'initier aux 4 degrés",
  description:
    "Quatrième degré : Maître Enseignant. Apprentissage de la transmission des initiations aux 4 degrés. Préparation du Maître à fonder sa propre lignée d'enseignement. Engagement éthique et spirituel profond. Plusieurs années de pratique entre Shinpiden et Maître Enseignant recommandées.",
  indications: [
    "Maître Praticien depuis ≥ 1-2 ans",
    "Pratique régulière, intense et engagée",
    "Désir authentique d'enseigner et de transmettre",
    "Capacité à porter une responsabilité de lignée",
    "Maturité émotionnelle et spirituelle",
  ],
  contraindications: [
    "Précipitation après le 3ème degré",
    "Recherche de revenus comme motivation principale",
    "Manque d'expérience d'accompagnement pédagogique",
    "Besoin de reconnaissance ou de pouvoir",
  ],
  programs: [
    {
      id: "principal",
      title: "Formation Maître Enseignant — 3 à 5 jours intensifs",
      icon: "◉",
      duration: "3-5 jours d'enseignement intensif + suivi continu",
      color: colors.red,
      recommended: true,
      description:
        "Formation intensive à la transmission des initiations. Engagement de lignée. Pédagogie du Reiki.",
      seances: [
        {
          num: 1,
          title: "Jour 1-2 — Cérémonies d'initiation",
          steps: [
            { label: "Apprentissage des 4 cérémonies", detail: "Mémorisation et pratique des cérémonies d'initiation Shoden (1er), Okuden (2nd), Shinpiden (3ème), Maître (4ème)." },
            { label: "Gestes sacrés et symboles", detail: "Précision des gestes, traçage des symboles dans l'aura, mantras silencieux. Aucune marge d'erreur." },
            { label: "Pratique en binôme", detail: "Initiations blanches entre futurs Maîtres Enseignants. Vérification par le formateur." },
          ],
        },
        {
          num: 2,
          title: "Jour 3-4 — Pédagogie & enseignement",
          steps: [
            { label: "Programme pédagogique des 4 degrés", detail: "Construction d'un cursus cohérent : durée, contenu, progression. Adaptation aux élèves." },
            { label: "Théorie du Reiki", detail: "Maîtrise approfondie de l'histoire, des préceptes, des symboles, de la lignée Usui-Hayashi-Takata." },
            { label: "Posture pédagogique", detail: "Comment incarner la transmission. Écoute, patience, fermeté bienveillante. Gestion des résistances des élèves." },
          ],
        },
        {
          num: 3,
          title: "Jour 5 — Lignée, éthique, engagement",
          steps: [
            { label: "Engagement de lignée", detail: "Cérémonie d'engagement vis-à-vis de la lignée Usui. Inscription du nouveau Maître Enseignant dans la chaîne de transmission." },
            { label: "Éthique du Maître Enseignant", detail: "Confidentialité, neutralité, respect des élèves, non-projection, gestion des transferts. Cadre clair." },
            { label: "Tarification et accessibilité", detail: "Tradition Takata vs adaptation moderne. Trouver son juste prix sans trahir l'esprit du don." },
            { label: "Suivi des élèves", detail: "Accompagnement post-initiation. Disponibilité. Groupes de pratique. Cercles Reiki." },
            { label: "Continuité personnelle", detail: "Le Maître Enseignant continue sa propre pratique quotidienne. Humilité. Apprentissage permanent." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Cérémonies d'initiation", type: "Rituel", icon: "🕯", desc: "Les 4 cérémonies maîtrisées par cœur — gestes, symboles, mantras." },
    { name: "Programme pédagogique", type: "Document", icon: "📚", desc: "Cursus complet des 4 degrés à dispenser." },
    { name: "Cercles Reiki", type: "Groupe", icon: "🔵", desc: "Groupes de pratique pour anciens élèves — entretien du canal." },
    { name: "Engagement de lignée", type: "Cadre éthique", icon: "🌳", desc: "Inscription dans la chaîne Usui." },
  ],
  stats: [
    { val: "1-2 ans", label: "Délai depuis Shinpiden", sub: "intégration profonde", color: colors.red },
    { val: "4", label: "Cérémonies maîtrisées", sub: "Shoden → Maître", color: colors.gold },
    { val: "Lignée", label: "Engagement", sub: "Usui-Hayashi-Takata", color: colors.teal },
  ],
  croyances: [
    "Enseigner est trop de responsabilité",
    "Je ne saurai pas répondre à toutes les questions",
    "Je vais perdre la dimension sacrée en commercialisant",
  ],
};

// =====================================================================
// Techniques avancées du 3ème degré (IDs 824-839)
// Source : livret 3ème degré Danielle Paolini — GS Formation
// =====================================================================

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

const autoTraitement21j = make(
  824, "21 jours", "Intégration vibratoire des 4 symboles",
  "Protocole d'intégration vibratoire des 4 symboles Reiki sur 21 jours. Travail d'un symbole par semaine puis combinaison. Centration au chakra du cœur, dessin des symboles, visualisation à chaque position des mains, mantra mental ×3.",
  ["Praticien post-3ème degré", "Approfondissement du canal", "Pratique quotidienne ancrée", "Préparation au 4ème degré"],
  ["Manque d'engagement quotidien (le 21 jours doit être ininterrompu)"],
  "Auto-traitement avec les 4 symboles — 21 jours",
  "20-30 min/jour pendant 21 jours",
  colors.purple,
  "Intégration progressive des 4 symboles, semaine par semaine, puis combinaison.",
  "Étapes du protocole quotidien",
  [
    { label: "Centrage au chakra du cœur", detail: "Mains sur le cœur, 3 respirations conscientes, intention de soin." },
    { label: "Dessin des symboles devant soi", detail: "Cho-Ku-Rei, Sei-He-Ki, Hon-Sha-Ze-Sho-Nen, Dai-Ko-Myo. Mantra ×3 pour chacun." },
    { label: "Auto-traitement positions des mains", detail: "12 positions classiques. À chaque position : visualiser le symbole de la semaine, mantra mental ×3." },
    { label: "Semaine 1 — Cho-Ku-Rei", detail: "Amplification de l'énergie sur chaque position." },
    { label: "Semaine 2 — Sei-He-Ki", detail: "Travail émotionnel et mental sur chaque position." },
    { label: "Semaine 3 — Hon-Sha-Ze-Sho-Nen + Dai-Ko-Myo", detail: "Distance + Maître. Combinaison." },
    { label: "Au-delà de 21 jours", detail: "Travailler avec tous les symboles en même temps à chaque position." },
  ],
  [
    { name: "Carnet des 21 jours", type: "Suivi", icon: "📖", desc: "Trace quotidienne des ressentis." },
    { name: "Posters des symboles", type: "Référence", icon: "🔣", desc: "Pour visualisation correcte." },
  ],
  [
    { val: "21", label: "Jours d'intégration", sub: "ininterrompus", color: colors.purple },
    { val: "4", label: "Symboles intégrés", sub: "1/semaine puis tous", color: colors.gold },
  ],
  ["Je n'aurai pas la discipline", "Mon canal est déjà ouvert"]
);

const lieuDeForce = make(
  825, "Espace sacré", "Triangle DKM amplificateur",
  "Création d'un espace énergétique puissant : triangle dessiné au sol, symbole Dai Ko Myo à chaque pictogramme, mantra ×3. Permet méditation profonde, recentrage et accès à un lieu de force personnel. Particulièrement puissant en pleine nature.",
  ["Méditation quotidienne approfondie", "Recentrage rapide en cas de stress", "Préparation à un soin important", "Travail spirituel en pleine nature"],
  ["Aucune contre-indication"],
  "Création d'un lieu de force",
  "15-30 min (création) + utilisation libre",
  colors.gold,
  "Triangle au sol + DKM aux 3 pictogrammes + entrée méditative.",
  "Étapes",
  [
    { label: "Choix du lieu", detail: "Habitation, jardin, forêt, prairie. Plus la nature est présente, plus l'amplification est forte." },
    { label: "Dessin du triangle au sol", detail: "Triangle équilatéral, environ 1,5 m de côté. Marqué avec sel, craie, fleurs ou simple visualisation." },
    { label: "Pose du DKM aux 3 pictogrammes", detail: "À chaque pointe : tracer Dai-Ko-Myo dans l'air. Mantra « Dai-Ko-Myo » ×3." },
    { label: "Activation centrale", detail: "Au centre du triangle : DKM tracé une 4ème fois pour relier les 3 pointes." },
    { label: "Entrée dans le lieu", detail: "Pénétrer dans le triangle. Ressentir l'amplification énergétique immédiate." },
    { label: "Méditation ou soin", detail: "Travail libre dans cet espace amplifié." },
    { label: "Sortie respectueuse", detail: "Remerciement, sortie en marche arrière sans rompre le cercle visuellement." },
  ],
  [
    { name: "Triangle au sol", type: "Géométrie sacrée", icon: "🔺", desc: "1,5 m de côté." },
    { name: "Mantra DKM ×4", type: "Activation", icon: "🕉", desc: "3 pointes + centre." },
  ],
  [
    { val: "Permanent", label: "Lieu de force", sub: "amplification continue", color: colors.gold },
    { val: "+++", label: "Puissance en nature", sub: "vs intérieur", color: colors.teal },
  ],
  ["Mon environnement n'est pas sacré", "Je n'ai pas de don pour les rituels"]
);

const purificationCristaux = make(
  826, "3 symboles", "DKM Tibétain + Sei-He-Ki + Cho-Ku-Rei",
  "Protocole d'utilisation des cristaux en Reiki : purification (Dai Ko Myo Tibétain + Sei He Ki), programmation à la guérison (Cho Ku Rei), demande d'auto-purification. Le cristal devient amplificateur d'énergie pour les soins ultérieurs.",
  ["Acquisition d'un nouveau cristal", "Cristal utilisé en soin (à recharger)", "Création d'un set d'outils Reiki", "Compléter la pratique Reiki avec la lithothérapie"],
  ["Cristaux fragiles à l'eau (sélénite, pyrite)", "Manque de connaissance des cristaux"],
  "Purification & programmation des cristaux",
  "15-20 min par cristal",
  colors.clientBlue,
  "Purification + programmation + demande d'auto-purification.",
  "Étapes",
  [
    { label: "Préparation", detail: "Cristal entre les paumes, intention claire formulée." },
    { label: "Envoi de Reiki initial", detail: "Energie Reiki sur le cristal, 2-3 minutes pour entrer en relation." },
    { label: "Purification — DKM Tibétain", detail: "Visualiser le DKM Tibétain sur le cristal. Mantra ×3. Évacuer les énergies anciennes." },
    { label: "Purification — Sei-He-Ki", detail: "Visualiser le Sei-He-Ki. Mantra ×3. Lever les charges émotionnelles imprégnées." },
    { label: "Programmation — Cho-Ku-Rei", detail: "Visualiser le Cho-Ku-Rei. Mantra ×3. Programmer le cristal à un objectif précis (guérison, protection, paix...)." },
    { label: "Demande d'auto-purification", detail: "Suggestion : « À chaque utilisation, tu te purifies seul. »" },
    { label: "Ancrage final", detail: "Reiki final 1 minute. Le cristal est prêt à amplifier les soins." },
  ],
  [
    { name: "DKM Tibétain", type: "Symbole", icon: "🌀", desc: "Purification énergétique." },
    { name: "Sei-He-Ki", type: "Symbole", icon: "🕊", desc: "Purification émotionnelle." },
    { name: "Cho-Ku-Rei", type: "Symbole", icon: "🔆", desc: "Programmation à l'intention." },
  ],
  [
    { val: "3", label: "Symboles utilisés", sub: "DKM-T + SHK + CKR", color: colors.clientBlue },
    { val: "Permanent", label: "Programmation", sub: "auto-purification incluse", color: colors.gold },
  ],
  ["Les cristaux ne portent rien", "Mes cristaux sont tous égaux"]
);

const souffleReiki = make(
  827, "90% toxines", "Évacuation par respiration consciente",
  "Pratique respiratoire approfondie issue du Reiki Usui. Visualisation du souffle comme lumière blanche descendant dans les bras, sortant par les chakras des mains comme rayons de lumière. Évacue 90 % des toxines, intensifie le flux énergétique, calme le mental.",
  ["Pratique quotidienne du praticien", "Préparation avant séance de soin", "Évacuation du stress accumulé", "Approfondissement de la pratique"],
  ["Trouble respiratoire aigu (consulter médecin)"],
  "Souffle Reiki — Pratique quotidienne",
  "5-15 min/jour",
  colors.teal,
  "Respiration complète + visualisation lumière blanche + sortie par les mains.",
  "Étapes",
  [
    { label: "Position confortable", detail: "Assis ou debout, dos droit, mains sur les cuisses paumes vers le haut." },
    { label: "Respiration complète", detail: "Inspiration ventrale puis costale puis claviculaire. Expiration longue et lente." },
    { label: "Visualisation de la lumière blanche", detail: "À l'inspiration, lumière blanche entre par le sommet de la tête." },
    { label: "Descente dans les bras", detail: "À l'expiration, la lumière descend par les épaules, les bras, les coudes, les poignets." },
    { label: "Sortie par les chakras des mains", detail: "Rayons de lumière sortent des paumes. Mains chaudes, vibrantes." },
    { label: "Cycle continu", detail: "10 à 30 cycles selon disponibilité." },
    { label: "Intégration", detail: "Mains sur le cœur, gratitude. Reprise des activités." },
  ],
  [
    { name: "Respiration complète", type: "Technique", icon: "🌬", desc: "Ventrale + costale + claviculaire." },
    { name: "Visualisation lumière", type: "Technique", icon: "💡", desc: "Blanc qui descend." },
    { name: "Activation des mains", type: "Effet", icon: "✋", desc: "Chaleur et vibration." },
  ],
  [
    { val: "90%", label: "Toxines évacuées", sub: "respiration complète", color: colors.teal },
    { val: "5-15", label: "Minutes/jour", sub: "pratique quotidienne", color: colors.gold },
  ],
  ["Je respire déjà", "C'est trop simple pour être efficace"]
);

const kundaliniReiki = make(
  828, "3 canaux", "Sushumna + Ida + Pingala",
  "Travail sur les canaux énergétiques principaux : Sushumna (canal central), Ida et Pingala (canaux latéraux). Activation et nettoyage par la respiration et la visualisation. Augmente la capacité du Maître Reiki à canaliser et transmettre l'énergie.",
  ["Maître Reiki en pratique régulière", "Approfondissement énergétique", "Préparation aux initiations supérieures", "Complément yoga énergétique"],
  ["Trouble psychiatrique non stabilisé", "Manque de fondations énergétiques (commencer par souffle Reiki 827)"],
  "Activation Kundalini Reiki",
  "20-30 min",
  colors.purple,
  "Visualisation des 3 canaux + nettoyage par souffle + circulation énergétique.",
  "Étapes",
  [
    { label: "Position assise stable", detail: "Dos droit, jambes croisées si possible. Pieds ancrés au sol sinon." },
    { label: "Visualisation du Sushumna", detail: "Canal central de lumière dorée, du périnée au sommet de la tête." },
    { label: "Visualisation d'Ida (gauche)", detail: "Canal lunaire, argenté, en spirale autour du Sushumna." },
    { label: "Visualisation de Pingala (droite)", detail: "Canal solaire, doré, en spirale opposée." },
    { label: "Respiration alternée Ida/Pingala", detail: "Inspiration par narine gauche (Ida), expiration par narine droite (Pingala). 10 cycles." },
    { label: "Activation par DKM", detail: "Visualiser DKM au chakra racine. Énergie monte le long du Sushumna." },
    { label: "Union au chakra couronne", detail: "Énergie atteint le sommet de la tête. Lumière blanche éclatante." },
    { label: "Redescente intégrée", detail: "Énergie redescend doucement, intégrée dans tout le corps." },
  ],
  [
    { name: "Visualisation des canaux", type: "Yoga", icon: "🧘", desc: "Sushumna, Ida, Pingala." },
    { name: "Respiration alternée", type: "Pranayama", icon: "🌬", desc: "Nadi Shodhana adapté." },
    { name: "DKM activateur", type: "Symbole", icon: "✨", desc: "Au chakra racine." },
  ],
  [
    { val: "3", label: "Canaux travaillés", sub: "Sushumna + Ida + Pingala", color: colors.purple },
    { val: "20-30", label: "Minutes", sub: "pratique avancée", color: colors.gold },
  ],
  ["La Kundalini est dangereuse", "Je ne suis pas yogi", "C'est trop ésotérique"]
);

const dkmTibetainStimulation = make(
  829, "Thymus", "Stimulation immunitaire DKM Tibétain",
  "Protocole d'activation immunitaire : pression et massage du point sur l'omoplate (1 min en cercle horaire) avec visualisation du DKM Tibétain, répété 3× par épaule. Puis 25 frappes douces sur le centre de la poitrine (thymus) avec visualisation continue.",
  ["Soutien immunitaire en complément médical", "Prévention saisonnière (automne/hiver)", "Récupération post-maladie", "Pratique quotidienne énergétique"],
  ["Pathologie immunitaire active (consulter médecin)", "Os fragile / fractures récentes"],
  "Stimulation Dai Ko Myo Tibétain — Thymus & immunité",
  "10-15 min",
  colors.red,
  "Stimulation des omoplates + thymus + visualisation DKM Tibétain.",
  "Étapes",
  [
    { label: "Identification du point d'omoplate", detail: "Point sensible sur l'omoplate (douloureux à la pression)." },
    { label: "Massage circulaire — épaule droite", detail: "Pression ferme avec les doigts, mouvement circulaire dans le sens horaire, 1 minute." },
    { label: "Visualisation DKM Tibétain", detail: "Pendant le massage, visualiser le DKM Tibétain sur le point." },
    { label: "Répétition ×3", detail: "Recommencer 3 fois sur la même épaule." },
    { label: "Épaule gauche", detail: "Même protocole, 3 répétitions, visualisation continue." },
    { label: "Stimulation du thymus", detail: "Poing droit fermé, frappes douces au centre de la poitrine, 25 fois." },
    { label: "Visualisation continue", detail: "Pendant les 25 frappes, DKM Tibétain visualisé sur le thymus." },
    { label: "Intégration", detail: "Mains sur le thymus, respiration calme, énergie diffusée." },
  ],
  [
    { name: "Massage circulaire", type: "Technique", icon: "🔄", desc: "Sens horaire, ferme." },
    { name: "Frappes thymus", type: "Stimulation", icon: "👊", desc: "25 frappes douces." },
    { name: "DKM Tibétain", type: "Symbole", icon: "🌀", desc: "Visualisation continue." },
  ],
  [
    { val: "25", label: "Frappes thymus", sub: "stimulation immunitaire", color: colors.red },
    { val: "3×2", label: "Massages omoplates", sub: "droite + gauche", color: colors.gold },
  ],
  ["Mon immunité est génétique", "Frapper le thymus est dangereux"]
);

const antahkarana = make(
  834, "Amplification", "Symbole tibétain millénaire",
  "Symbole tibétain ancien (« Pont »), complémentaire au Reiki, n'exigeant pas d'initiation. 4 variantes : Yang (masculin, énergie), Yin (féminin, méditation), Croix Cosmique, Multiple (déblocage). Amplifie tout soin, purifie cristaux, protège les lieux.",
  ["Amplifier tout soin Reiki", "Méditation polarisée (Yang ou Yin)", "Protection d'un lieu (chambre, cabinet)", "Purification de cristaux et objets"],
  ["Aucune contre-indication"],
  "Symbole Antahkarana — Utilisations",
  "Utilisation continue",
  colors.clientBlue,
  "4 variantes selon usage. Pas d'initiation requise.",
  "Utilisations selon variante",
  [
    { label: "Antahkarana Yang", detail: "Symbole masculin, énergie active. Sous les pieds en auto-soin pour potentialiser. Sous la table de massage pour soin." },
    { label: "Antahkarana Yin", detail: "Symbole féminin, méditation. Fixé au mur pour méditer dessus, travail du côté féminin." },
    { label: "Croix Cosmique", detail: "7 croix verticales et horizontales. Travail sur le chakra du cœur (cf 835)." },
    { label: "Symbole Multiple", detail: "Pour débloquer l'énergie. Placer derrière la tête en cas de maux de tête. Choisir Yin ou Yang selon polarité." },
    { label: "Sous le lit", detail: "Antahkarana Yang sous le lit pour mieux dormir." },
    { label: "Purification de cristaux", detail: "Placer le cristal sur le symbole imprimé pendant la nuit." },
    { label: "Protection de lieu", detail: "Plastifié, placé dans la pièce ou la poche. Réfléchit les énergies négatives." },
  ],
  [
    { name: "Symbole imprimé", type: "Outil", icon: "🖨", desc: "Pas d'initiation requise." },
    { name: "4 variantes Yang/Yin/Croix/Multiple", type: "Catalogue", icon: "✨", desc: "Selon usage." },
    { name: "Plastification", type: "Pratique", icon: "🔖", desc: "Pour transport et protection." },
  ],
  [
    { val: "4", label: "Variantes", sub: "Yang, Yin, Croix, Multiple", color: colors.clientBlue },
    { val: "0", label: "Initiation requise", sub: "outil libre", color: colors.gold },
  ],
  ["Sans initiation, ça ne fonctionne pas", "Les symboles sont ésotériques"]
);

const croixCosmique = make(
  835, "Cœur", "Ouverture du chakra du cœur",
  "Symbole Antahkarana spécialisé pour le travail sur le chakra du cœur. 7 croix verticales et horizontales. Sert à ouvrir, équilibrer et activer le chakra du cœur. Lance l'Orbite Microcosmique en méditation. Peut être porté à même le corps face contre le chakra.",
  ["Travail sur l'amour inconditionnel", "Équilibrage du chakra du cœur", "Lancement de l'Orbite Microcosmique", "Travail post-deuil ou post-rupture"],
  ["Crise cardiaque récente (consulter médecin)"],
  "Croix Cosmique — Travail du chakra du cœur",
  "15-30 min (méditation)",
  colors.red,
  "Méditation sur le symbole + Orbite Microcosmique.",
  "Étapes",
  [
    { label: "Choix du support", detail: "Symbole imprimé sur papier, ou réduction portée face contre le chakra du cœur." },
    { label: "Position assise", detail: "Dos droit, mains sur les cuisses, regard sur le symbole si imprimé." },
    { label: "Respiration au chakra du cœur", detail: "Inspiration : énergie entre par le cœur. Expiration : irradie depuis le cœur." },
    { label: "Méditation sur le symbole", detail: "Fixation visuelle (yeux ouverts) ou évocation mentale (yeux fermés)." },
    { label: "Activation des 7 croix", detail: "Visualisation : les 7 croix s'allument une à une." },
    { label: "Lancement de l'Orbite Microcosmique", detail: "Énergie circule : périnée → colonne → couronne → palais → langue → cœur → périnée. Cycle continu." },
    { label: "Intégration", detail: "Mains sur le cœur. Gratitude. Sentir l'amour inconditionnel rayonner." },
  ],
  [
    { name: "Croix Cosmique imprimée", type: "Outil", icon: "✚", desc: "Ou réduction portée." },
    { name: "Orbite Microcosmique", type: "Méditation", icon: "🔄", desc: "Cycle énergétique complet." },
    { name: "Visualisation des 7 croix", type: "Technique", icon: "✨", desc: "Allumage progressif." },
  ],
  [
    { val: "7", label: "Croix activées", sub: "verticales + horizontales", color: colors.red },
    { val: "Cœur", label: "Chakra ciblé", sub: "amour inconditionnel", color: colors.gold },
  ],
  ["Mon cœur est blessé pour toujours", "Je ne mérite pas d'aimer"]
);

const bonhommesAllumettes = make(
  836, "Libération", "Coupure éthique des liens disharmonieux",
  "Technique de libération énergétique pour couper les liens disharmonieux avec une personne ou une situation. Dessin de deux bonhommes allumettes (soi et l'autre/situation), processus rituel de coupure. Règle éthique : ne JAMAIS faire à la place d'un tiers.",
  ["Lien toxique avec une personne", "Situation passée qui ne se libère pas", "Préparation à pardon ou rupture", "Libération post-rupture amoureuse"],
  ["Faire à la place d'un tiers (interdit éthique)", "Manipulation pour contraindre l'autre"],
  "Bonhommes allumettes — Coupure des liens",
  "15-20 min",
  colors.clientOrange,
  "Dessin + intention + coupure + brûlage symbolique.",
  "Étapes",
  [
    { label: "Préparation", detail: "Feuille blanche, crayon, intention claire. Ce travail concerne SOI uniquement." },
    { label: "Dessin du bonhomme allumette « soi »", detail: "Cercle pour la tête, traits pour le corps. Écrire son prénom." },
    { label: "Dessin du bonhomme allumette « autre »", detail: "À côté. Écrire le prénom de l'autre OU le nom de la situation." },
    { label: "Tracé des liens disharmonieux", detail: "Traits entre les deux bonhommes représentant les liens à couper." },
    { label: "Activation Reiki", detail: "Mains sur le dessin. Visualisation des symboles (DKM + Sei-He-Ki + HSZSN). Mantra ×3." },
    { label: "Coupure rituelle", detail: "Avec une intention claire, couper les liens un par un (visuellement ou en grattant le papier)." },
    { label: "Brûlage symbolique", detail: "Brûler le dessin (en sécurité) pour parachever la coupure." },
    { label: "Vérification éthique", detail: "Rappel : ne JAMAIS faire pour un tiers (libre arbitre respecté)." },
  ],
  [
    { name: "Bonhommes allumettes", type: "Dessin", icon: "🧍🧍", desc: "Soi + autre/situation." },
    { name: "Activation Reiki", type: "Énergie", icon: "✨", desc: "Avec les 3 symboles avancés." },
    { name: "Brûlage final", type: "Rituel", icon: "🔥", desc: "Parachève la coupure." },
  ],
  [
    { val: "Éthique", label: "Règle absolue", sub: "jamais pour un tiers", color: colors.clientOrange },
    { val: "15-20", label: "Minutes", sub: "rituel complet", color: colors.gold },
  ],
  ["Je ne peux pas couper ce lien", "C'est égoïste de me libérer"]
);

const meditationUsui = make(
  837, "Lignage", "Connexion au Maître fondateur",
  "Méditation guidée de connexion au lignage Reiki face à la photo du Maître Mikao Usui. Visualisation des 3 symboles avancés (DKM Tibétain front, DKM Maître gorge, Hon Sha Ze Sho Nen cœur) reliés par 3 rayons colorés. Union vibratoire avec l'énergie du Maître.",
  ["Maître Reiki post-3ème degré", "Approfondissement de la connexion au lignage", "Recharge énergétique", "Préparation à initier soi-même"],
  ["Pratiquant non initié au 3ème degré (manque de symboles)"],
  "Méditation avec le Maître Mikao Usui",
  "20-30 min",
  colors.purple,
  "Connexion + 3 symboles + 3 rayons + union.",
  "Étapes",
  [
    { label: "Installation face à la photo", detail: "Photo du Maître Mikao Usui à hauteur du regard, distance de 1-2 mètres." },
    { label: "Centrage", detail: "Position assise stable, mains sur les cuisses, 3 respirations conscientes." },
    { label: "Visualisation DKM Tibétain au front du Maître", detail: "Voir le symbole sur le front de Mikao Usui." },
    { label: "Pose au front de soi", detail: "Visualiser le même symbole sur son propre front." },
    { label: "Rayon doré entre les fronts", detail: "Connexion lumineuse entre son front et celui du Maître." },
    { label: "DKM Maître au chakra de la gorge", detail: "Visualiser le symbole DKM Maître à la gorge du Maître et à sa propre gorge. Rayon violet entre les deux." },
    { label: "Hon-Sha-Ze-Sho-Nen au chakra du cœur", detail: "Visualiser le symbole HSZSN au cœur du Maître et à son propre cœur. Rayon vert entre les deux." },
    { label: "Union vibratoire", detail: "Se laisser pénétrer par les 3 rayons. Devenir UN avec l'énergie du Maître. Laisser rayonner." },
  ],
  [
    { name: "Photo de Mikao Usui", type: "Support", icon: "🖼", desc: "À hauteur du regard." },
    { name: "3 symboles + 3 rayons", type: "Visualisation", icon: "🌈", desc: "DKM-T or, DKM violet, HSZSN vert." },
    { name: "Union vibratoire", type: "État", icon: "🕉", desc: "Devenir UN avec le Maître." },
  ],
  [
    { val: "3", label: "Symboles activés", sub: "DKM-T + DKM + HSZSN", color: colors.purple },
    { val: "Lignage", label: "Connexion", sub: "Mikao Usui direct", color: colors.gold },
  ],
  ["Mikao Usui est trop loin", "Je ne suis pas digne de le contacter"]
);

const oeufDor = make(
  838, "Protection", "Bouclier énergétique multi-couches",
  "Deux techniques de protection énergétique : (1) L'Œuf d'Or — enveloppe de lumière blanche entourée d'une coquille d'or réfléchissant les énergies négatives. (2) Ceinture de lumière blanche au plexus solaire. À utiliser en environnement énergétiquement difficile.",
  ["Hypersensibilité énergétique post-Reiki", "Environnement difficile (transports, foule)", "Préparation à un soin lourd", "Protection quotidienne"],
  ["Aucune contre-indication"],
  "Œuf d'Or & Ceinture de lumière",
  "5-10 min (installation)",
  colors.gold,
  "Œuf d'Or complet ou variante ceinture rapide.",
  "Étapes Œuf d'Or complet",
  [
    { label: "Position confortable", detail: "Allongé ou assis, yeux fermés, respiration calme." },
    { label: "Couche 1 — Lumière blanche", detail: "Enveloppe de lumière blanche autour de soi, à bout de bras tendus." },
    { label: "Espace personnel", detail: "Repousser mentalement les autres personnes hors de l'œuf." },
    { label: "Couche 2 — Coquille d'or", detail: "Autour de la lumière blanche, coquille d'or solide réfléchissant les énergies négatives." },
    { label: "Couche 3 — Lumière dorée intérieure", detail: "Remplir l'œuf d'une chaude lumière dorée à l'intérieur." },
    { label: "Vérification", detail: "Œuf complet : bouclier or extérieur, lumière blanche bleutée, lumière jaune intérieure." },
    { label: "Variante Ceinture", detail: "Plus rapide : ceinture de lumière blanche au plexus solaire, à une largeur de main du corps, 10-20 cm de large." },
    { label: "Renouvellement", detail: "L'œuf se dissout au bout d'un moment. À renouveler si situation prolongée." },
  ],
  [
    { name: "Œuf d'Or 3 couches", type: "Visualisation", icon: "🥚", desc: "Or + blanc + jaune." },
    { name: "Ceinture rapide", type: "Variante", icon: "👘", desc: "Plexus solaire, 10-20 cm." },
    { name: "Renouvellement", type: "Pratique", icon: "🔄", desc: "Après dissolution naturelle." },
  ],
  [
    { val: "3", label: "Couches de protection", sub: "or + blanc + jaune", color: colors.gold },
    { val: "5-10", label: "Minutes installation", sub: "renouvelable", color: colors.purple },
  ],
  ["Je n'ai pas besoin de me protéger", "C'est de la paranoïa énergétique"]
);

const grilleCristaux = make(
  839, "Karuna®", "Photos polaires + sandwich amplificateur",
  "Technique du Reiki Karuna® de William Rand : utilisation des photos des grilles de cristaux placées aux pôles Nord et Sud (1997-1999) pour amplifier les soins. Sandwich de soin : photo du receveur entre les 2 pôles + Reiki sur l'ensemble. Puissance amplifiée par résonance planétaire.",
  ["Soin à distance amplifié", "Soin pour personne difficile à toucher", "Travail sur situation collective (paix, environnement)", "Pratique Reiki Karuna®"],
  ["Sans accord du receveur (éthique)", "Recherche de pouvoir personnel"],
  "Grille de cristaux William Rand — Sandwich",
  "30-60 min (sandwich + Reiki)",
  colors.clientBlue,
  "Photos polaires + photo du receveur en sandwich + Reiki + repos.",
  "Étapes",
  [
    { label: "Préparation des photos polaires", detail: "Photos imprimées des grilles : pôle Nord (plus foncé) et pôle Sud (plus doré). Découpées proprement." },
    { label: "Photo du receveur", detail: "Photo récente du receveur (avec son accord), ou son nom et coordonnées sur papier." },
    { label: "Construction du sandwich", detail: "Photo pôle Nord en haut, photo du receveur au milieu, photo pôle Sud en bas. Faces images vers le receveur." },
    { label: "Activation Reiki sur le sandwich", detail: "Mains sur l'ensemble. Activation des symboles HSZSN + DKM. Mantra ×3." },
    { label: "Soin Reiki prolongé", detail: "30 minutes à 1 heure de Reiki continu sur le sandwich." },
    { label: "Cristal optionnel pour amplifier", detail: "Placer un cristal programmé sur le sandwich pour amplifier davantage." },
    { label: "Repos prolongé", detail: "Laisser le sandwich plusieurs jours en place. Le travail continue en sourdine." },
    { label: "Variante — Amplification d'un lieu", detail: "Les 2 photos polaires placées dans une pièce amplifient l'énergie globale du lieu." },
  ],
  [
    { name: "Photos polaires", type: "Outil", icon: "🌍", desc: "Pôle Nord + Pôle Sud." },
    { name: "Sandwich énergétique", type: "Technique", icon: "🥪", desc: "Receveur entre les 2 pôles." },
    { name: "Cristal amplificateur", type: "Option", icon: "💎", desc: "Sur le sandwich pour boost." },
  ],
  [
    { val: "Karuna®", label: "Lignage", sub: "William Rand 1997-1999", color: colors.clientBlue },
    { val: "Plusieurs jours", label: "Effet prolongé", sub: "sandwich laissé en place", color: colors.gold },
  ],
  ["Une photo ne peut pas soigner", "C'est trop ésotérique pour être réel"]
);

export const reikiDetails: Record<number, ProtocolDetail> = {
  820: shoden,
  821: okuden,
  822: shinpiden,
  823: maitreEnseignant,
  824: autoTraitement21j,
  825: lieuDeForce,
  826: purificationCristaux,
  827: souffleReiki,
  828: kundaliniReiki,
  829: dkmTibetainStimulation,
  834: antahkarana,
  835: croixCosmique,
  836: bonhommesAllumettes,
  837: meditationUsui,
  838: oeufDor,
  839: grilleCristaux,
};
