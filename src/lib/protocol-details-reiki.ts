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

export const reikiDetails: Record<number, ProtocolDetail> = {
  820: shoden,
  821: okuden,
  822: shinpiden,
  823: maitreEnseignant,
};
