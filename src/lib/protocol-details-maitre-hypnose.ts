import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Maître Praticien en Hypnose (IDs 927-949 + 973-986).
 * Sources : GS Formation — Maitre Praticien en Hypnose Modules 1, 2, 3.
 * Auteur : Laurent Martini (Maître Enseignant PNL & Hypnose).
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

// ===== MODULE 1 — DEEP HYPNOSE (927-933) =====

const rameyMiles = make(
  927, "3 parties", "Conscient + Inconscient + Surconscient",
  "Modèle de l'esprit en 3 parties (Ramey-Miles) : Conscient (analyse, jugement), Inconscient/subconscient (intuitions, programmes), Surconscient (sagesse, télépathie, neurones miroirs). Chaque composante fonctionne indépendamment et ensemble. Cadre théorique fondateur du Maître Praticien.",
  ["Cadre théorique de référence", "Première séance Maître Praticien", "Pédagogie en formation"],
  ["Aucune contre-indication"],
  "Modèle Ramey-Miles — Présentation",
  "60 min (présentation)",
  colors.purple,
  "Présentation des 3 parties + applications.",
  "Étapes",
  [
    { label: "Cadre tradi vs Ramey-Miles", detail: "Tradition : Conscient + Inconscient. Ramey-Miles : Conscient + Inconscient + Surconscient." },
    { label: "Conscient", detail: "Analyse, jugement, raisonnement. Lent (40 bits/s). Limité." },
    { label: "Inconscient/subconscient", detail: "Programmes, automatismes, intuitions. Rapide (20 millions bits/s). Influence le système nerveux autonome." },
    { label: "Surconscient", detail: "Sagesse profonde, intuition spirituelle, télépathie via neurones miroirs. Connexion à la conscience universelle." },
    { label: "Communication entre parties", detail: "Conscient ↔ Inconscient : sentiments. Inconscient ↔ Surconscient : intuitions. Surconscient ↔ autres surconscients : télépathie." },
    { label: "Applications hypnotiques", detail: "Sichort travaille l'Inconscient. Erickson permissif rejoint le Surconscient. Elman directif active l'Inconscient." },
    { label: "Choix de l'approche", detail: "Selon la demande du client : addiction (Inconscient), quête de sens (Surconscient), comportement (Inconscient + Conscient)." },
  ],
  [
    { name: "Schéma 3 parties", type: "Référence", icon: "🧠", desc: "Conscient + Inconscient + Surconscient." },
    { name: "Diagnostic d'approche", type: "Méthode", icon: "🎯", desc: "Quel niveau cibler ?" },
  ],
  [
    { val: "3", label: "Parties de l'esprit", sub: "Ramey-Miles", color: colors.purple },
    { val: "20M", label: "Bits/s inconscient", sub: "vs 40 conscient", color: colors.gold },
  ],
  ["L'esprit a 2 parties seulement", "Le surconscient n'existe pas"]
);

const esdaile = make(
  928, "Chirurgical", "Anesthésie totale par hypnose",
  "État de transe extrêmement profonde décrit par James Esdaile (1808-1859), chirurgien écossais. Permet anesthésie totale pour chirurgie sans anesthésique chimique. Caractérisé par une absence de réaction aux stimuli douloureux, immobilité totale, mais conscience préservée.",
  ["Préparation à chirurgie sans anesthésique", "Patient allergique aux anesthésiques", "Soin dentaire majeur", "Démonstration médicale"],
  ["Praticien non formé spécifiquement", "Substitution complète au médical (jamais)", "Patient non préparé"],
  "État Esdaile — Transe somnambulique chirurgicale",
  "60 min (induction prolongée)",
  colors.navy,
  "Induction longue + approfondissement par paliers + test analgésique + maintien.",
  "Étapes",
  [
    { label: "Préparation médicale", detail: "Coordination obligatoire avec équipe chirurgicale. Vérification suggestibilité élevée." },
    { label: "Induction longue", detail: "30-45 minutes pour atteindre le somnambulisme classique (cf 802)." },
    { label: "Approfondissement par paliers", detail: "Fractionnement (cf 932) répété 5-7 fois pour descendre au-delà du somnambulisme." },
    { label: "Test 1 — Catalepsie", detail: "Bras catalepsique, immobilité totale (cf 900)." },
    { label: "Test 2 — Pincement", detail: "Pincement progressif. Aucune réaction = état Esdaile atteint." },
    { label: "Test 3 — Réflexes", detail: "Réflexes diminués. Respiration ralentie. Pouls stable." },
    { label: "Maintien pendant l'intervention", detail: "Voix calme et continue du praticien. Renforcements ponctuels. Coordination équipe." },
    { label: "Sortie progressive", detail: "Comptage lent. Vérification sensibilité. Débrief médical." },
  ],
  [
    { name: "Tests Esdaile", type: "Vérification", icon: "🩺", desc: "Catalepsie + pincement + réflexes." },
    { name: "Coordination chirurgicale", type: "Cadre", icon: "🏥", desc: "Équipe médicale présente." },
  ],
  [
    { val: "30-45", label: "Min induction", sub: "obligatoire", color: colors.navy },
    { val: "5-7", label: "Fractionnements", sub: "approfondissement", color: colors.gold },
  ],
  ["L'hypnose ne remplace pas l'anesthésie", "C'est trop dangereux"]
);

const sichort = make(
  929, "Proceduale", "Profondeur structurée + dialogue",
  "État de transe profonde structurée décrit par Walter Sichort (1923-2001). Approche proceduale stricte combinée à la profondeur somnambulique. Permet un travail thérapeutique précis avec dialogue maintenu (signaling), idéal pour régression et travail systémique.",
  ["Travail systémique avancé", "Régression contrôlée", "Hypnoanalyse profonde", "Maître Praticien expérimenté"],
  ["Praticien débutant (besoin de structure simplifiée)", "Trauma sévère non stabilisé"],
  "État Sichort — Transe profonde proceduale",
  "60-90 min",
  colors.purple,
  "Procédure stricte + profondeur + signaling + travail thérapeutique.",
  "Étapes",
  [
    { label: "Procédure d'induction Sichort", detail: "Séquence stricte : relaxation, fixation, comptage 100→0, fractionnement systématique." },
    { label: "Vérification par signaling", detail: "Installation des signaux idéomoteurs OUI/NON (cf 903). Le client confirme la profondeur." },
    { label: "Approfondissement final", detail: "« Inspirations conscientes, à chaque inspiration descendez de 10 paliers. »" },
    { label: "Test de profondeur Sichort", detail: "Catalepsie totale, dialogue maintenu via signaling, dissociation forte." },
    { label: "Travail thérapeutique précis", detail: "Régression, dialogue avec parties, recadrage. Tout est possible et structuré." },
    { label: "Sortie procédurale", detail: "Inverse de l'induction. Comptage 0→100 en respiration consciente." },
  ],
  [
    { name: "Procédure Sichort stricte", type: "Méthode", icon: "📋", desc: "Séquence rigoureuse." },
    { name: "Signaling maintenu", type: "Communication", icon: "🤲", desc: "Dialogue en transe profonde." },
  ],
  [
    { val: "Proceduale", label: "Approche", sub: "vs spontanée Erickson", color: colors.purple },
    { val: "60-90", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["L'hypnose doit être créative et libre", "Trop de structure tue l'inspiration"]
);

const preInduction = make(
  930, "Suggestibilité", "Batterie de tests pré-induction",
  "Batterie complète de tests de pré-induction pour évaluer la suggestibilité du client : doigts collés (déjà 833), se pencher en arrière, se pencher en avant, citron imaginaire, bras lourd. Permet d'adapter l'induction au profil et de renforcer la confiance.",
  ["Première séance avec un client", "Évaluation de la suggestibilité", "Préparation à transe profonde"],
  ["Trouble articulaire (test pencher)", "Refus du jeu corporel"],
  "Tests de pré-induction — Batterie complète",
  "15-30 min (pré-induction)",
  colors.clientBlue,
  "5 tests + cartographie du profil suggestible.",
  "Étapes",
  [
    { label: "Test 1 — Doigts collés (cf 833)", detail: "Joindre les mains, suggestion de soudure, test." },
    { label: "Test 2 — Se pencher en arrière", detail: "Debout, yeux fermés, suggestion « vous êtes attiré en arrière ». Le client se penche." },
    { label: "Test 3 — Se pencher en avant", detail: "Même position, suggestion en avant. Validation de la suggestibilité kinesthésique." },
    { label: "Test 4 — Citron imaginaire", detail: "« Imaginez mordre dans un citron. » Salivation = suggestibilité gustative/imaginaire." },
    { label: "Test 5 — Bras lourd", detail: "Bras tendu, suggestion de plomb attaché au poignet. Le bras descend." },
    { label: "Cartographie du profil", detail: "Quel test a fonctionné le mieux ? Indique le canal préférentiel." },
    { label: "Choix de l'induction adaptée", detail: "Si visuel : induction visuelle. Si kinesthésique : induction par sensation." },
    { label: "Renforcement de la confiance", detail: "« Vous voyez comme votre inconscient répond bien. La transe va être facile. »" },
  ],
  [
    { name: "Batterie 5 tests", type: "Catalogue", icon: "📋", desc: "Suggestibilité multimodale." },
    { name: "Cartographie profil", type: "Diagnostic", icon: "🎯", desc: "Canal préférentiel." },
  ],
  [
    { val: "5", label: "Tests", sub: "batterie complète", color: colors.clientBlue },
    { val: "15-30", label: "Minutes", sub: "avant induction", color: colors.gold },
  ],
  ["Je ne suis pas suggestible", "Les tests ne marcheront pas sur moi"]
);

const speedHypnose = make(
  931, "< 2 min", "Induction par défi d'autorité",
  "Approche hypnotique rapide d'Elman par défi d'autorité : suggestions directes ferme et structurées, induction en moins de 2 minutes. Particulièrement utilisée en hypnose médicale et en démonstration. Suppose une posture d'autorité bienveillante du praticien.",
  ["Hypnose médicale (urgence relative)", "Démonstration en formation", "Client coopérant en confiance", "Praticien expérimenté"],
  ["Client résistant ou méfiant (rapport non établi)", "Praticien manquant d'assurance", "Contexte délicat"],
  "Speed Hypnose — Défi d'autorité Elman",
  "5-15 min",
  colors.red,
  "Posture d'autorité + suggestions directes + induction rapide.",
  "Étapes",
  [
    { label: "Posture d'autorité bienveillante", detail: "Voix ferme, regard direct, posture droite. Pas d'agressivité, mais conviction totale." },
    { label: "Annonce claire", detail: "« Dans quelques secondes, vous allez entrer en transe profonde. C'est très simple. Suivez mes instructions. »" },
    { label: "Suggestion directe ouverture", detail: "« Fermez les yeux MAINTENANT. » Ton ferme." },
    { label: "Suggestions directes successives", detail: "« Vos paupières sont collées. Testez-les. Vous voyez. Maintenant détendez tout votre corps. »" },
    { label: "Approfondissement rapide", detail: "Comptage 5→1 ou fractionnement court." },
    { label: "Vérification rapide", detail: "Test des doigts collés ou bras catalepsique. Confirmation de la transe." },
    { label: "Travail thérapeutique", detail: "Suggestions précises sans détour. Format court et puissant." },
    { label: "Sortie rapide", detail: "Comptage 1→5. Réveil immédiat, sentiment de fraîcheur." },
  ],
  [
    { name: "Posture d'autorité", type: "Présence", icon: "🦁", desc: "Bienveillante mais ferme." },
    { name: "Suggestions directes", type: "Linguistique", icon: "🎯", desc: "Pas de détour, pas de doute." },
    { name: "Vérification rapide", type: "Test", icon: "✓", desc: "Doigts ou bras." },
  ],
  [
    { val: "< 2 min", label: "Induction", sub: "speed", color: colors.red },
    { val: "Elman", label: "Origine", sub: "années 1950-60", color: colors.gold },
  ],
  ["Je suis trop méfiant pour entrer en transe rapide", "Une induction rapide n'est pas profonde"]
);

const fractionnement = make(
  932, "Cycles", "Approfondissement par entrées/sorties",
  "Technique d'approfondissement par fractionnement : entrer en transe, en ressortir partiellement, y replonger plus profondément. Répéter 3-5 fois. Chaque cycle approfondit considérablement la transe. Méthode emblématique de Sichort et Elman.",
  ["Approfondissement après induction initiale", "Préparation à transe Esdaile/Sichort", "Outil quotidien du Maître Praticien"],
  ["Aucune contre-indication"],
  "Fractionnement hypnotique",
  "15-25 min (intégré)",
  colors.teal,
  "3-5 cycles entrée/sortie/entrée plus profonde.",
  "Étapes",
  [
    { label: "Première entrée en transe", detail: "Induction standard à profondeur moyenne." },
    { label: "Sortie partielle", detail: "« Remontez doucement, ouvrez les yeux quelques secondes. »" },
    { label: "Comparaison conscient/inconscient", detail: "Le client constate la différence. Renforcement de la perception de la transe." },
    { label: "Deuxième entrée plus profonde", detail: "« Refermez les yeux. Plongez deux fois plus profondément qu'avant. »" },
    { label: "Cycle 3", detail: "Sortie partielle + entrée 4× plus profonde." },
    { label: "Cycle 4-5", detail: "Chaque cycle double la profondeur. 5 cycles = 32× la profondeur initiale." },
    { label: "Stabilisation finale", detail: "Quand la profondeur est suffisante (somnambulisme atteint), stabiliser." },
    { label: "Travail thérapeutique", detail: "Maintenant que la transe est profonde, début du travail prévu." },
  ],
  [
    { name: "Cycle entrée/sortie", type: "Technique", icon: "🔁", desc: "3-5 répétitions." },
    { name: "Doublement de profondeur", type: "Effet", icon: "⬇", desc: "À chaque cycle." },
  ],
  [
    { val: "3-5", label: "Cycles", sub: "fractionnement", color: colors.teal },
    { val: "32×", label: "Profondeur finale", sub: "vs initiale", color: colors.gold },
  ],
  ["Sortir et rentrer en transe est trop perturbant", "Une seule induction suffit"]
);

const hypnoseMedicale = make(
  933, "Médical", "Cadre dentaire/chirurgical/accouchement",
  "Cadre complet d'utilisation de l'hypnose en milieu médical (dentaire, chirurgie, accouchement) selon Dave Elman. Coordination avec équipe médicale, induction rapide, suggestions analgésiques précises, suggestions post-opératoires (cicatrisation, hémostase, confort).",
  ["Soin dentaire majeur", "Chirurgie programmée (en complément)", "Accouchement (hypno-naissance)", "Patient allergique aux anesthésiques"],
  ["Substitution complète au médical (jamais)", "Praticien non formé spécifiquement", "Refus de coordination équipe médicale"],
  "Hypnose médicale Elman — Protocole complet",
  "30-60 min × intervention",
  colors.red,
  "Coordination + induction rapide + analgésie + post-op.",
  "Étapes",
  [
    { label: "Coordination préalable avec équipe médicale", detail: "Briefing : type d'intervention, durée, points sensibles, signaux d'urgence." },
    { label: "Préparation du patient", detail: "Confiance établie, suggestions positives sur l'intervention, lieu sûr installé." },
    { label: "Induction rapide (cf 931)", detail: "Speed hypnose Elman, en moins de 2 minutes." },
    { label: "Approfondissement par fractionnement (cf 932)", detail: "Atteindre le somnambulisme nécessaire." },
    { label: "Analgésie ciblée (cf 832)", detail: "Gant anesthésique transféré sur la zone." },
    { label: "Maintien pendant l'intervention", detail: "Voix calme et continue. Renforcements toutes les 5 min. Coordination équipe." },
    { label: "Suggestions post-opératoires", detail: "Cicatrisation rapide, hémostase, pas de douleur post-op, sommeil réparateur." },
    { label: "Sortie en sécurité", detail: "Réveil progressif. Vérification de la sensibilité. Débrief avec patient et équipe." },
  ],
  [
    { name: "Coordination équipe", type: "Cadre", icon: "🏥", desc: "Briefing pré-intervention." },
    { name: "Suggestions post-op", type: "Script", icon: "🩹", desc: "Cicatrisation, confort, sommeil." },
  ],
  [
    { val: "30-60", label: "Minutes", sub: "selon intervention", color: colors.red },
    { val: "Pluri", label: "Travail pluridisciplinaire", sub: "obligatoire", color: colors.gold },
  ],
  ["L'hypnose ne suffit jamais en médical", "Je vais sentir quand même"]
);

// ===== MODULE 2 — SYSTÉMIE & SEXOTHÉRAPIE (934-944) =====

const hypnoseSystemique = make(
  934, "Holistique", "Individu = partie d'un système",
  "Intégration de l'approche systémique (Bateson, Bowen, Minuchin, Satir, Hellinger) à l'hypnose. Le client est considéré comme partie d'un système (familial, social, professionnel). Les symptômes sont interprétés comme reflets de dynamiques systémiques. Travail sur soi ET sur le système.",
  ["Symptôme apparu dans un contexte systémique", "Difficultés relationnelles", "Travail familial ou de couple"],
  ["Demande purement individuelle ponctuelle"],
  "Hypnose systémique — Cadre général",
  "60-90 min",
  colors.clientBlue,
  "Identification du système + cartographie + travail combiné.",
  "Étapes",
  [
    { label: "Identification du système d'appartenance", detail: "« Famille d'origine, famille actuelle, équipe pro, groupe d'amis ? Lequel est en jeu ? »" },
    { label: "Cartographie du système", detail: "Membres, relations, alliances, conflits, exclus." },
    { label: "Identification du symptôme dans le système", detail: "« Quel rôle joue ce symptôme dans ton système ? Qui sert-il ? »" },
    { label: "Travail individuel en hypnose", detail: "Sur les schémas internes du client (ressources, croyances, identité)." },
    { label: "Travail symbolique sur le système", detail: "Visualisation du système entier, dialogue avec chaque membre." },
    { label: "Recadrage systémique", detail: "Le symptôme peut-il être lâché si le système trouve un autre équilibre ?" },
    { label: "Plan d'action systémique", detail: "Quelles actions concrètes dans le système réel ?" },
  ],
  [
    { name: "Cartographie systémique", type: "Document", icon: "🕸", desc: "Membres + relations." },
    { name: "Travail symbolique", type: "Hypnose", icon: "👥", desc: "Dialogue avec chaque membre." },
  ],
  [
    { val: "Systémie", label: "Approche", sub: "Bateson, Hellinger, Satir", color: colors.clientBlue },
    { val: "Holistique", label: "Vision", sub: "individu + système", color: colors.gold },
  ],
  ["Mon problème est uniquement individuel", "Le système ne change pas"]
);

const genogramme = make(
  935, "Cartographie", "Arbre généalogique enrichi",
  "Construction d'un génogramme (arbre généalogique enrichi des relations, conflits, traumatismes) en transe légère. Permet de visualiser les patterns familiaux récurrents, les loyautés invisibles, les répétitions transgénérationnelles. Outil diagnostic majeur en hypnose systémique.",
  ["Première séance d'hypnose systémique", "Patterns familiaux récurrents", "Préparation aux constellations"],
  ["Manque d'information familiale (orphelin sans accès)", "Trauma familial actif (préférer stabilisation)"],
  "Génogramme en hypnose",
  "90 min",
  colors.purple,
  "Construction + identification patterns + restitution.",
  "Étapes",
  [
    { label: "Préparation papier", detail: "Grande feuille, crayons de couleur. Codes : ◯ femme, □ homme, ⚹ décédé, ⚯ couple, // séparation." },
    { label: "Mise en transe légère", detail: "Détente, accès facilité aux mémoires familiales." },
    { label: "Construction génération 0 (soi)", detail: "Le client + sa fratrie + son couple actuel + ses enfants." },
    { label: "Construction génération -1 (parents)", detail: "Parents + leurs fratries + leurs unions." },
    { label: "Construction génération -2 (grands-parents)", detail: "Si possible, jusqu'aux grands-parents." },
    { label: "Enrichissement relationnel", detail: "Lignes de relation : conflits, alliances, distance, fusion." },
    { label: "Identification des événements marquants", detail: "Décès, divorces, secrets, maladies, exils, succès." },
    { label: "Lecture des patterns", detail: "Répétitions transgénérationnelles, loyautés invisibles, loyautés contraires." },
  ],
  [
    { name: "Codes graphiques", type: "Référence", icon: "📐", desc: "Femme, homme, couple, etc." },
    { name: "Lectures de patterns", type: "Analyse", icon: "🔍", desc: "Répétitions, loyautés." },
  ],
  [
    { val: "3", label: "Générations cartographiées", sub: "soi + parents + grands-parents", color: colors.purple },
    { val: "Patterns", label: "Identification", sub: "transgénérationnels", color: colors.gold },
  ],
  ["Ma famille n'a rien à voir avec mon problème", "Je suis seul responsable de moi"]
);

const karpman = make(
  936, "Triangle", "Persécuteur / Victime / Sauveur",
  "Travail sur le triangle dramatique (Persécuteur / Victime / Sauveur) de Karpman, mis en scène en transe hypnotique. Le client visite chaque rôle, identifie son rôle préférentiel, comprend les dynamiques de son système relationnel. Sortie du triangle par responsabilisation.",
  ["Conflits relationnels récurrents", "Couple bloqué dans des rôles", "Famille dysfonctionnelle"],
  ["Refus de s'identifier à un rôle", "Crise relationnelle aiguë"],
  "Triangle dramatique de Karpman",
  "60-90 min",
  colors.red,
  "Présentation + visite des 3 rôles + identification du rôle préférentiel + sortie.",
  "Étapes",
  [
    { label: "Présentation du triangle", detail: "Persécuteur (attaque), Victime (subit), Sauveur (s'occupe au lieu de l'autre)." },
    { label: "Identification du conflit récent", detail: "« Pense à un conflit récent. Qui a joué quel rôle ? »" },
    { label: "Mise en scène en transe — Persécuteur", detail: "Le client incarne le rôle. Que ressent-il ? Quel pouvoir ?" },
    { label: "Mise en scène — Victime", detail: "Que ressent-il ? Quel bénéfice secondaire (sympathie, déresponsabilisation) ?" },
    { label: "Mise en scène — Sauveur", detail: "Que ressent-il ? Quel pouvoir caché (supériorité, contrôle) ?" },
    { label: "Identification du rôle préférentiel", detail: "« Lequel des 3 prends-tu le plus souvent ? »" },
    { label: "Sortie par responsabilisation", detail: "Au lieu de Persécuteur → Adulte qui pose les limites. Victime → Adulte qui demande. Sauveur → Adulte qui aide sans se substituer." },
    { label: "Pont sur le futur", detail: "Visualisation du prochain conflit avec les rôles d'adulte." },
  ],
  [
    { name: "Triangle visuel", type: "Référence", icon: "🔺", desc: "P/V/S." },
    { name: "Mise en scène en transe", type: "Technique", icon: "🎭", desc: "Visite des 3 rôles." },
  ],
  [
    { val: "3", label: "Rôles dramatiques", sub: "P + V + S", color: colors.red },
    { val: "Adulte", label: "Sortie du triangle", sub: "responsabilisation", color: colors.gold },
  ],
  ["Je suis toujours la victime", "L'autre est toujours le coupable", "Sauver les autres c'est noble"]
);

const constellations = make(
  937, "Hellinger", "Réparation symbolique de la lignée",
  "Adaptation hypnotique des Constellations familiales de Bert Hellinger. En transe, le client visualise sa famille élargie, identifie les places, les exclus, les loyautés invisibles, les charges héritées. Réparation symbolique : remettre chacun à sa juste place.",
  ["Patterns familiaux lourds", "Loyauté invisible identifiée", "Travail transgénérationnel"],
  ["Trauma familial sévère non stabilisé", "Pathologie psychiatrique aiguë"],
  "Constellations familiales en hypnose",
  "90-120 min",
  colors.teal,
  "Visualisation + identification places + réparation symbolique + intégration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Detente longue, ouverture de l'imaginaire." },
    { label: "Visualisation de la famille élargie", detail: "Tous les membres, vivants et morts, ancêtres connus et inconnus." },
    { label: "Identification des exclus", detail: "« Qui a été oublié, écarté, taboué ? Mort prématurée, secret, divorce, suicide... »" },
    { label: "Identification de sa propre place", detail: "« Es-tu à ta juste place ? Ou portes-tu la charge d'un autre ? »" },
    { label: "Restitution symbolique", detail: "« Je rends à X ce qui lui appartient. Je reprends ma place. »" },
    { label: "Réintégration des exclus", detail: "« Tous ont leur place dans le système. Je les reconnais. »" },
    { label: "Pacte avec les ancêtres", detail: "« Vous avez fait ce que vous avez pu. Je continue ma vie avec votre bénédiction. »" },
    { label: "Intégration corporelle", detail: "Le client sent la libération des charges. Sa place est claire." },
  ],
  [
    { name: "Visualisation famille élargie", type: "Hypnose", icon: "🌳", desc: "Vivants et morts." },
    { name: "Restitution symbolique", type: "Rituel", icon: "🎁", desc: "Charges rendues." },
    { name: "Pacte avec ancêtres", type: "Symbolique", icon: "🙏", desc: "Bénédiction reçue." },
  ],
  [
    { val: "Hellinger", label: "Origine", sub: "Constellations familiales", color: colors.teal },
    { val: "90-120", label: "Minutes", sub: "rituel complet", color: colors.gold },
  ],
  ["Mes ancêtres n'ont aucune influence sur moi", "Le passé est passé"]
);

const protocoleRelationnel = make(
  938, "Systémique", "Couple / famille / équipe",
  "Protocole structuré d'hypnose pour les problèmes relationnels (couple, famille, équipe) : identification du système, cartographie des positions, dialogue intérieur avec chaque membre du système en transe, recadrage, négociation symbolique, intégration.",
  ["Conflit relationnel persistant", "Couple en crise", "Équipe dysfonctionnelle"],
  ["Violence active (priorité sécurité)", "Refus de l'autre de participer"],
  "Protocole relationnel en hypnoth",
  "90-120 min × 3-5 séances",
  colors.clientBlue,
  "Cartographie + dialogue intérieur + négociation + intégration.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Cartographie du système", detail: "Membres, dynamiques, positions, attentes." },
    { label: "Séance 1 — Identification du conflit central", detail: "« Quelle est la dynamique qui bloque ? »" },
    { label: "Séance 2 — Dialogue intérieur en transe", detail: "Le client dialogue en transe avec chaque membre du système." },
    { label: "Séance 2 — Compréhension des positions", detail: "Que veut chacun ? Quelle intention positive ?" },
    { label: "Séance 3 — Recadrage des attentes", detail: "Quelles attentes sont réalistes ? Lesquelles à ajuster ?" },
    { label: "Séance 3 — Négociation symbolique", detail: "Accord en transe avec chaque membre." },
    { label: "Séance 4 — Application réelle", detail: "Plan d'action concret dans le système réel." },
    { label: "Séance 5 — Intégration et suivi", detail: "Vérification, ajustement, ancrage." },
  ],
  [
    { name: "Cartographie systémique", type: "Document", icon: "🕸", desc: "Membres + dynamiques." },
    { name: "Dialogue intérieur", type: "Hypnose", icon: "💬", desc: "Avec chaque membre." },
    { name: "Plan d'action concret", type: "Document", icon: "📋", desc: "Application réelle." },
  ],
  [
    { val: "3-5", label: "Séances", sub: "parcours complet", color: colors.clientBlue },
    { val: "Symbolique", label: "Travail", sub: "puis réel", color: colors.gold },
  ],
  ["Sans l'autre, on ne peut rien faire", "Le système ne changera jamais"]
);

const sexoAnamnese = make(
  939, "Anamnèse", "Histoire sexuelle structurée",
  "Premier entretien sexothérapeutique structuré : histoire sexuelle, croyances héritées, éducation, blessures, contexte couple, demande précise. Cadre sécurisant et confidentiel. Coordination avec sexologue ou médecin.",
  ["Première séance sexothérapie", "Cadre confidentiel établi"],
  ["Refus de coordination médicale", "Trauma sexuel actif (priorité stabilisation)"],
  "Sexothérapie hypnose — Anamnèse approfondie",
  "90 min (1ère séance)",
  colors.red,
  "Cadre + histoire + croyances + demande + coordination.",
  "Étapes",
  [
    { label: "Cadre confidentiel et sécurisant", detail: "« Tout ce qui sera dit reste entre nous. Vous pouvez vous arrêter à tout moment. »" },
    { label: "Histoire sexuelle générale", detail: "Premières expériences, partenaires significatifs, expériences positives et négatives." },
    { label: "Éducation sexuelle reçue", detail: "Famille, école, religion, culture. Messages directs et indirects." },
    { label: "Blessures et traumatismes", detail: "Si applicable, sans pression. Évaluation de la stabilisation." },
    { label: "Contexte couple actuel", detail: "Relation actuelle, communication, attentes mutuelles, durée." },
    { label: "Demande précise", detail: "« Que veux-tu précisément améliorer ? Critères observables ? »" },
    { label: "Coordination médicale", detail: "Bilan médical effectué ? Sexologue consulté ? Coordination établie." },
    { label: "Cadre du parcours", detail: "Durée, fréquence, objectifs intermédiaires. Engagement réciproque." },
  ],
  [
    { name: "Grille d'anamnèse sexuelle", type: "Document", icon: "📋", desc: "Structurée et confidentielle." },
    { name: "Coordination médicale", type: "Cadre", icon: "🤝", desc: "Sexologue/médecin." },
  ],
  [
    { val: "90", label: "Minutes 1ère séance", sub: "anamnèse complète", color: colors.red },
    { val: "Pluri", label: "Approche", sub: "pluridisciplinaire", color: colors.gold },
  ],
  ["Je n'arriverai pas à parler de ça", "C'est trop intime"]
);

const sexoMasculin = make(
  940, "Masculin", "Érection / éjaculation / désir",
  "Protocole hypnotique pour dysfonctions sexuelles masculines : trouble érectile, éjaculation prématurée ou retardée, manque de désir. Travail sur l'anxiété de performance, la pression sociale, l'image corporelle, la communication avec le/la partenaire. Approche pluridisciplinaire.",
  ["Trouble érectile psychogène", "Éjaculation prématurée", "Manque de désir masculin", "Anxiété de performance"],
  ["Cause organique non explorée (consultation médicale)", "Refus de coordination médicale"],
  "Dysfonctions sexuelles masculines — Programme",
  "60-90 min × 5-8 séances",
  colors.purple,
  "Anxiété + croyances + image corporelle + communication + plaisir.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Lever l'anxiété de performance", detail: "Recadrage : sexualité ≠ performance. Travail sur la pression sociale." },
    { label: "Séance 2 — Croyances limitantes masculines", detail: "« Un homme doit toujours... », « Si je ne performe pas, je ne suis pas... »" },
    { label: "Séance 3 — Image corporelle et estime", detail: "Acceptation du corps, recadrage des comparaisons." },
    { label: "Séance 4 — Communication intime", detail: "Apprendre à dire ses besoins, ses limites, ses désirs." },
    { label: "Séance 5 — Sensate focus en transe", detail: "Réapprendre la sensorialité sans pression. Plaisir avant performance." },
    { label: "Séance 6 — Restauration du désir", detail: "Travail sur les déclencheurs naturels du désir, hors pression." },
    { label: "Séance 7 — Pont sur le futur", detail: "Visualisation de relations sereines et épanouies." },
    { label: "Séance 8 — Intégration et suivi", detail: "Outils d'auto-régulation. Espacement progressif." },
  ],
  [
    { name: "Sensate focus", type: "Exercice", icon: "✋", desc: "Masters & Johnson." },
    { name: "Recadrage des croyances", type: "PNL", icon: "🔄", desc: "Masculinité réinventée." },
  ],
  [
    { val: "5-8", label: "Séances", sub: "selon trouble", color: colors.purple },
    { val: "Pluri", label: "Approche", sub: "+ sexologue/médecin", color: colors.gold },
  ],
  ["Un homme doit toujours pouvoir", "Si je ne performe pas, je ne suis rien"]
);

const sexoDesir = make(
  941, "Désir", "Hommes & femmes — hypoactif/aversif",
  "Protocole hypnotique pour les troubles du désir (hypoactif, aversif, désynchronisation de couple). Recherche des causes (médicales, psychologiques, relationnelles), recadrage des croyances, réveil progressif du désir par travail symbolique et imaginaire. Approche sans pression.",
  ["Désir hypoactif chronique", "Désir aversif", "Désynchronisation de couple", "Post-partum, ménopause/andropause"],
  ["Cause hormonale non explorée", "Refus de bilan médical"],
  "Dysfonctions du désir — Hommes & femmes",
  "60-90 min × 5-8 séances",
  colors.red,
  "Diagnostic + recadrage + réveil symbolique + intégration.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Diagnostic différentiel", detail: "Hypoactif (peu/pas de désir), aversif (rejet), désynchronisé (avec partenaire)." },
    { label: "Séance 1 — Recherche des causes", detail: "Médicales, psychologiques, relationnelles, contextuelles." },
    { label: "Séance 2 — Recadrage des croyances", detail: "« Le désir doit être spontané », « C'est anormal de ne pas avoir envie »." },
    { label: "Séance 3 — Réveil symbolique", detail: "Travail imaginaire en transe : visualisations, métaphores du réveil." },
    { label: "Séance 4 — Sensorialité élargie", detail: "Élargir l'érotisme à TOUS les sens, pas seulement génital." },
    { label: "Séance 5 — Communication de couple", detail: "Si applicable, travail sur la dynamique avec partenaire." },
    { label: "Séance 6 — Pont sur le futur sans pression", detail: "Visualisation d'une vie sexuelle épanouie sans obligation." },
  ],
  [
    { name: "Diagnostic différentiel", type: "Méthode", icon: "🔍", desc: "Hypoactif vs aversif." },
    { name: "Réveil symbolique", type: "Hypnose", icon: "🌅", desc: "Travail imaginaire." },
  ],
  [
    { val: "3", label: "Types de troubles", sub: "hypoactif/aversif/désync", color: colors.red },
    { val: "5-8", label: "Séances", sub: "approche progressive", color: colors.gold },
  ],
  ["Le désir doit être spontané", "Sans envie, je ne suis pas normal·e"]
);

const sexoElaboration = make(
  942, "Élaboration", "Vaginisme / anorgasmie / dyspareunie",
  "Protocole hypnotique pour les troubles de l'élaboration sexuelle féminine : vaginisme, dyspareunie, anorgasmie. Désensibilisation des associations négatives, travail sur l'image corporelle, restauration du plaisir par sensate focus en transe. Coordination avec gynécologue.",
  ["Vaginisme primaire ou secondaire", "Dyspareunie sans cause organique", "Anorgasmie", "Trauma sexuel léger à modéré stabilisé"],
  ["Cause organique non explorée (gynécologue)", "Trauma sexuel actif non stabilisé"],
  "Dysfonctions de l'élaboration sexuelle féminine",
  "60-90 min × 6-10 séances",
  colors.purple,
  "Désensibilisation + image corporelle + plaisir progressif.",
  "Étapes du parcours",
  [
    { label: "Séance 1-2 — Bilan & cadre", detail: "Gynécologue consulté, anamnèse, cadre rassurant. Lieu sûr installé." },
    { label: "Séance 3 — Désensibilisation", detail: "Travail en transe sur les associations négatives (peur de la douleur, blocage musculaire)." },
    { label: "Séance 4 — Image corporelle", detail: "Acceptation du corps féminin, des organes génitaux. Visualisations positives." },
    { label: "Séance 5 — Réveil sensoriel non génital", detail: "Sensate focus sur tout le corps, sans zone génitale d'abord." },
    { label: "Séance 6 — Sensate focus génital", detail: "Toucher progressif, sans pénétration, sans pression d'orgasme." },
    { label: "Séance 7 — Auto-exploration en sécurité", detail: "Hors séance, en autonomie, à son rythme." },
    { label: "Séance 8 — Intégration en couple si applicable", detail: "Communication avec partenaire, progression douce." },
    { label: "Séance 9-10 — Consolidation", detail: "Plaisir intégré, autonomisation, suivi espacé." },
  ],
  [
    { name: "Désensibilisation en transe", type: "Hypnose", icon: "🌸", desc: "Associations aversives." },
    { name: "Sensate focus progressif", type: "Exercice", icon: "✋", desc: "Non génital → génital." },
    { name: "Coordination gynécologue", type: "Cadre", icon: "🩺", desc: "Obligatoire." },
  ],
  [
    { val: "6-10", label: "Séances", sub: "progression douce", color: colors.purple },
    { val: "Pluri", label: "Coordination", sub: "+ gynécologue", color: colors.gold },
  ],
  ["Mon corps est défectueux", "Je ne pourrai jamais ressentir de plaisir", "C'est sale"]
);

const sexoCouple = make(
  943, "Couple", "Approche systémique sexothérapeutique",
  "Approche combinée systémique + hypnose pour les dysfonctions de couple. Travail individuel ET en duo si possible. Identification des dynamiques relationnelles, des projections, des attentes non dites. Recadrage en transe légère, pont vers une nouvelle dynamique.",
  ["Couple en perte de connexion", "Dysfonctions sexuelles partagées", "Communication sexuelle dégradée"],
  ["Refus de l'autre de participer", "Violence dans le couple"],
  "Hypnose & dysfonctions de couple",
  "90 min × 6-12 séances",
  colors.clientBlue,
  "Individuel + duo + cartographie + nouvelle dynamique.",
  "Étapes du parcours",
  [
    { label: "Séances 1-2 — Anamnèse individuelle", detail: "Chaque partenaire seul. Histoire, attentes, blessures." },
    { label: "Séance 3 — Première séance en duo", detail: "Communication des attentes, écoute mutuelle." },
    { label: "Séance 4 — Cartographie de la dynamique", detail: "Triangle de Karpman appliqué (cf 936). Rôles dans le couple." },
    { label: "Séance 5-6 — Travail individuel sur projections", detail: "Chacun explore ses projections et attentes en transe." },
    { label: "Séance 7-8 — Communication intime", detail: "Apprentissage des techniques de communication non violente." },
    { label: "Séance 9-10 — Restauration du plaisir partagé", detail: "Sensate focus en couple, exercices à la maison." },
    { label: "Séance 11-12 — Intégration et suivi", detail: "Nouvelle dynamique installée. Outils d'auto-régulation." },
  ],
  [
    { name: "Triangle Karpman appliqué", type: "Diagnostic", icon: "🔺", desc: "Rôles dans le couple." },
    { name: "Sensate focus en couple", type: "Exercice", icon: "💑", desc: "Plaisir partagé." },
  ],
  [
    { val: "6-12", label: "Séances", sub: "selon profondeur", color: colors.clientBlue },
    { val: "Indiv+Duo", label: "Format", sub: "alterné", color: colors.gold },
  ],
  ["L'autre doit changer en premier", "Notre couple est foutu", "On ne peut plus se parler"]
);

const satirCommunication = make(
  944, "5 styles", "Communication selon Virginia Satir",
  "Travail sur les 5 styles de communication identifiés par Virginia Satir : Lénifiant (s'excuse), Accusateur (blâme), Calculateur (raisonneur), Distrayant (esquive), Niveleur (authentique). Identification du style dominant en stress, mise en scène en transe, intégration du style Niveleur.",
  ["Difficultés de communication", "Conflits récurrents", "Travail couple ou famille", "Coaching de leadership"],
  ["Refus de questionner ses styles"],
  "Approche Satir — 5 styles de communication",
  "60-90 min",
  colors.gold,
  "Présentation + identification + mise en scène + intégration Niveleur.",
  "Les 5 styles",
  [
    { label: "Présentation des 5 styles", detail: "Lénifiant, Accusateur, Calculateur, Distrayant, Niveleur." },
    { label: "Identification du style dominant en stress", detail: "« Quand tu es stressé, lequel sors-tu ? »" },
    { label: "Mise en scène — Lénifiant", detail: "Posture humble, voix basse, s'excuse de tout. Le client incarne." },
    { label: "Mise en scène — Accusateur", detail: "Posture dominante, voix forte, blâme l'autre. Incarner." },
    { label: "Mise en scène — Calculateur", detail: "Posture froide, voix monotone, raisonne logiquement." },
    { label: "Mise en scène — Distrayant", detail: "Posture désorganisée, voix changeante, change de sujet." },
    { label: "Mise en scène — Niveleur", detail: "Posture droite et détendue, voix naturelle, authentique. C'est le style sain." },
    { label: "Intégration du Niveleur", detail: "Pratique répétée. Application à des situations concrètes." },
  ],
  [
    { name: "5 postures Satir", type: "Référence", icon: "🎭", desc: "Lénifiant à Niveleur." },
    { name: "Mise en scène en transe", type: "Technique", icon: "🎪", desc: "Incarner chaque style." },
    { name: "Niveleur authentique", type: "Cible", icon: "🎯", desc: "Style sain à intégrer." },
  ],
  [
    { val: "5", label: "Styles Satir", sub: "1 sain (Niveleur)", color: colors.gold },
    { val: "60-90", label: "Minutes", sub: "séance complète", color: colors.purple },
  ],
  ["Je communique normalement", "Mon style est figé"]
);

// ===== MODULE 3 — DÉPENDANCE/DÉPRESSION/DEUIL/SYMBOLISME (945-949 + 973-986) =====

const halluPositive = make(
  945, "Création", "Hallucination positive thérapeutique",
  "Création volontaire en transe profonde d'une hallucination positive (visuelle, auditive, kinesthésique, olfactive ou gustative) au service du travail thérapeutique. Ex : voir une figure protectrice, entendre une parole apaisante, sentir une chaleur. Travail avancé.",
  ["Renforcement d'une expérience thérapeutique", "Création d'une figure ressource", "Travail symbolique"],
  ["Psychose ou trouble dissociatif (préférer travail sécurisant)"],
  "Hallucination thérapeutique positive",
  "45-60 min",
  colors.purple,
  "Mise en transe profonde + induction de l'hallucination + intégration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Somnambulisme requis. Elman ou Sichort." },
    { label: "Choix du contenu hallucinatoire", detail: "Quelle figure, son, sensation, odeur ressource veut-on créer ?" },
    { label: "Induction visuelle (si V)", detail: "« Devant vous apparaît [figure]. Voyez ses traits, ses couleurs, son rayonnement. »" },
    { label: "Induction auditive (si A)", detail: "« Vous entendez [son/voix]. Précisez le timbre, le volume. »" },
    { label: "Induction kinesthésique (si K)", detail: "« Vous ressentez [sensation]. Localisée précisément. »" },
    { label: "Réalité subjective", detail: "L'hallucination devient réelle pour le client. Réponse émotionnelle." },
    { label: "Travail thérapeutique avec la figure", detail: "Dialogue, transmission, ressource captée." },
    { label: "Ancrage et sortie", detail: "« Cette figure vit en vous, accessible à volonté. »" },
  ],
  [
    { name: "Somnambulisme requis", type: "Profondeur", icon: "💤", desc: "Obligatoire pour hallucination." },
    { name: "Multi-modal V/A/K", type: "Choix", icon: "🎚", desc: "Selon canal préférentiel." },
  ],
  [
    { val: "Profonde", label: "Transe requise", sub: "somnambulisme", color: colors.purple },
    { val: "VAK", label: "Modalités", sub: "selon profil", color: colors.gold },
  ],
  ["Une hallucination, c'est de la folie", "Je ne peux pas vraiment voir/entendre"]
);

const halluNegative = make(
  946, "Suppression", "Hallucination négative thérapeutique",
  "Suppression volontaire en transe profonde d'une perception (douleur, son intrusif, image obsessionnelle). « Vous ne percevez plus X. » Particulièrement utile pour douleur chronique, acouphènes (cf 842), souvenirs intrusifs.",
  ["Douleur chronique", "Acouphènes invalidants", "Souvenirs visuels intrusifs", "Hyperacousie"],
  ["Douleur signalant pathologie non diagnostiquée (urgence)", "Substitution complète au médical"],
  "Hallucination thérapeutique négative",
  "45-60 min",
  colors.navy,
  "Transe profonde + suggestion de suppression + ancrage post-hypnotique.",
  "Étapes",
  [
    { label: "Cadrage médical", detail: "Vérifier que la perception à supprimer n'est PAS un signal d'alarme nécessaire." },
    { label: "Mise en transe profonde", detail: "Somnambulisme requis." },
    { label: "Identification précise de la perception", detail: "Cartographie sensorielle de ce qui doit disparaître." },
    { label: "Suggestion de suppression progressive", detail: "« Cette perception devient de plus en plus faible... distante... presque inaudible/invisible. »" },
    { label: "Suppression totale", detail: "« Maintenant, vous ne la percevez plus du tout. C'est complet. »" },
    { label: "Vérification subjective", detail: "« Recherchez-la. Vous constatez son absence. »" },
    { label: "Ancrage post-hypnotique", detail: "« Cette suppression continue après la séance. Activable par [ancre]. »" },
    { label: "Sortie en sécurité", detail: "Vérification : aucune perception nécessaire n'a été supprimée par erreur." },
  ],
  [
    { name: "Cartographie sensorielle", type: "Diagnostic", icon: "🎯", desc: "Précision de la perception." },
    { name: "Ancrage post-hypnotique", type: "PNL", icon: "📍", desc: "Continuation hors séance." },
  ],
  [
    { val: "Somnam.", label: "Profondeur requise", sub: "obligatoire", color: colors.navy },
    { val: "Médical", label: "Cadrage préalable", sub: "obligatoire", color: colors.gold },
  ],
  ["On ne peut pas supprimer une perception réelle", "C'est dangereux"]
);

const patternInterrupt = make(
  947, "Réorganisation", "Interruption de schéma comportemental",
  "Technique d'interruption d'un schéma comportemental ancré (rituel obsessionnel, geste compulsif, automatisme). Combinaison de confusion (cf 861), de surprise et de suggestion directe en transe. Crée une fenêtre de réorganisation comportementale.",
  ["TOC léger à modéré", "Compulsion gestuelle (onychophagie, trichotillomanie)", "Automatisme indésirable (tic)"],
  ["TOC sévère (cadre psychiatrique)", "Trauma sous-jacent non traité"],
  "Pattern interrupt avancé",
  "45-60 min",
  colors.red,
  "Identification du pattern + confusion + réorganisation + nouveau comportement.",
  "Étapes",
  [
    { label: "Cartographie précise du pattern", detail: "Quel déclencheur, quelle séquence, quel résultat ?" },
    { label: "Mise en transe", detail: "Profondeur moyenne suffit." },
    { label: "Confusion ciblée (cf 861)", detail: "Plonger le client dans la confusion au moment du pattern simulé." },
    { label: "Surprise", detail: "Élément inattendu : geste, son, déclaration paradoxale." },
    { label: "Fenêtre de réorganisation", detail: "Pendant la confusion + surprise : suggestion directe d'un nouveau comportement." },
    { label: "Construction du nouveau pattern", detail: "Séquence claire et désirable du remplacement." },
    { label: "Pratique répétée en transe", detail: "Le nouveau pattern est joué 5-7 fois mentalement." },
    { label: "Pont sur le futur", detail: "Visualisation des situations déclenchantes avec le nouveau pattern." },
  ],
  [
    { name: "Confusion ciblée", type: "Technique", icon: "🌀", desc: "Au moment précis." },
    { name: "Surprise + suggestion", type: "Combo", icon: "⚡", desc: "Fenêtre de réorganisation." },
  ],
  [
    { val: "5-7", label: "Répétitions mentales", sub: "ancrage du nouveau", color: colors.red },
    { val: "45-60", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mon pattern est plus fort que moi", "Je le fais sans m'en rendre compte"]
);

const enfantInterieur = make(
  948, "Réparation", "Faire grandir l'enfant intérieur",
  "Protocole hypnotique de réparation et de croissance de l'enfant intérieur blessé. Visualisation de l'enfant à l'âge de la blessure, dialogue avec lui, transmission des ressources adultes, accompagnement symbolique de sa croissance jusqu'à l'adulte intégré. Spécifique addictions.",
  ["Addiction enracinée dans une blessure d'enfance", "Schéma de manque persistant", "Travail post-EMDR ou trauma léger"],
  ["Trauma majeur non stabilisé", "Crise dissociative"],
  "Faire grandir l'enfant intérieur — Programme",
  "90 min × 3-5 séances",
  colors.purple,
  "Rencontre + dialogue + transmission + croissance + intégration adulte.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Identification de l'enfant blessé", detail: "« À quel âge porte-tu encore une blessure non guérie ? »" },
    { label: "Séance 1 — Première rencontre en transe", detail: "Visualisation de l'enfant. Dialogue prudent." },
    { label: "Séance 2 — Compréhension de la blessure", detail: "Que s'est-il passé ? Que lui a-t-il manqué ?" },
    { label: "Séance 2 — Transmission des ressources adultes", detail: "Ce qui a manqué : amour, sécurité, permission, reconnaissance." },
    { label: "Séance 3 — Réparation symbolique", detail: "L'adulte fait, dit, donne ce qui aurait dû arriver." },
    { label: "Séance 4 — Accompagnement de la croissance", detail: "L'enfant grandit symboliquement, traverse les âges, devient adulte." },
    { label: "Séance 5 — Intégration adulte", detail: "L'enfant guéri rejoint l'adulte. Unité. Plus de manque qui pousse à l'addiction." },
    { label: "Pont sur le futur", detail: "Vie sans le besoin compensatoire de l'addiction." },
  ],
  [
    { name: "Visualisation de l'enfant", type: "Hypnose", icon: "🧒", desc: "À l'âge précis." },
    { name: "Transmission ressources adultes", type: "Réparation", icon: "🎁", desc: "Ce qui a manqué." },
    { name: "Croissance symbolique", type: "Voyage", icon: "📈", desc: "Enfant → adulte." },
  ],
  [
    { val: "3-5", label: "Séances", sub: "parcours complet", color: colors.purple },
    { val: "Addictions", label: "Spécialité", sub: "blessure d'origine", color: colors.gold },
  ],
  ["Mon enfance est terminée", "On ne peut pas guérir le passé"]
);

const reconciliationMeta = make(
  949, "Métaphore", "Dialogue avec l'addiction",
  "Approche hypnotique des addictions par réconciliation métaphorique avec la substance ou le comportement addictif. Dialogue symbolique : la substance comme « ami toxique », identification de ce qu'elle apportait, recherche d'alternatives, séparation respectueuse.",
  ["Toute addiction (substance, comportement)", "Échec des approches frontales", "Travail de fin de cycle"],
  ["Addiction sévère mettant en danger (priorité au sevrage médical)"],
  "Réconciliation métaphorique — Addictions",
  "90 min × 4-6 séances",
  colors.clientOrange,
  "Personnification + dialogue + intention positive + alternatives + séparation.",
  "Étapes du parcours",
  [
    { label: "Séance 1 — Personnification de l'addiction", detail: "« Si ton addiction était une personne, à quoi ressemblerait-elle ? Forme, voix, attitude. »" },
    { label: "Séance 2 — Dialogue avec la figure", detail: "« Que t'a-t-elle apporté ? Quel rôle a-t-elle joué dans ta vie ? »" },
    { label: "Séance 3 — Reconnaissance de l'intention positive", detail: "« Elle a essayé de te protéger de... Elle t'a apporté... »" },
    { label: "Séance 4 — Recherche d'alternatives", detail: "« Comment satisfaire ces besoins autrement ? » 5+ alternatives." },
    { label: "Séance 5 — Séparation respectueuse", detail: "« Merci pour ce que tu m'as apporté. Maintenant je peux continuer sans toi. »" },
    { label: "Séance 5 — Rituel symbolique", detail: "Brûler une lettre, offrir un cadeau symbolique. Marquer la séparation." },
    { label: "Séance 6 — Intégration et nouvelle vie", detail: "Vie sans l'addiction, avec les alternatives en place." },
  ],
  [
    { name: "Personnification", type: "Métaphore", icon: "👤", desc: "L'addiction comme personne." },
    { name: "Dialogue intérieur", type: "Hypnose", icon: "💬", desc: "Avec la figure." },
    { name: "Rituel symbolique", type: "Rituel", icon: "🕯", desc: "Marquer la séparation." },
  ],
  [
    { val: "4-6", label: "Séances", sub: "approche progressive", color: colors.clientOrange },
    { val: "Symbolique", label: "Approche", sub: "vs frontale", color: colors.gold },
  ],
  ["Mon addiction est mon ennemie", "Il faut la combattre", "Lui parler c'est lui donner du pouvoir"]
);

const depression = make(
  973, "Complément", "Accompagnement dépression léger/modéré",
  "Cadre d'accompagnement hypnotique de la dépression légère à modérée (DSM-V). Coordination obligatoire avec psychiatre/médecin traitant. Travail sur l'anhédonie, l'anergie, les ruminations, l'auto-dévalorisation. Hypnose ne remplace JAMAIS un traitement antidépresseur.",
  ["Dépression légère à modérée diagnostiquée", "Suivi psychiatrique en place", "Phase de stabilisation post-épisode"],
  ["Dépression sévère (priorité psychiatrique)", "Idées suicidaires actives", "Refus de coordination médicale"],
  "Hypnose pour la dépression — Programme",
  "60-90 min × 8-12 séances",
  colors.clientBlue,
  "Coordination + lieu sûr + ressources + recadrage rumination + plaisir progressif.",
  "Étapes du parcours",
  [
    { label: "Coordination obligatoire", detail: "Psychiatre/médecin informés. Plan thérapeutique conjoint." },
    { label: "Séance 1-2 — Lieu sûr et ressources", detail: "Installation d'un lieu sûr. Ancrage de moments-ressources passés." },
    { label: "Séance 3-4 — Travail sur l'anhédonie", detail: "Recherche de micro-plaisirs accessibles. Ancrage." },
    { label: "Séance 5-6 — Recadrage des ruminations", detail: "Métaphore du « jardin des pensées » : laisser passer sans s'accrocher." },
    { label: "Séance 7-8 — Auto-dévalorisation", detail: "Travail sur les croyances « Je suis nul, sans valeur »." },
    { label: "Séance 9-10 — Restauration de l'énergie", detail: "Visualisations énergisantes, ancrage de l'élan vital." },
    { label: "Séance 11-12 — Pont vers la vie", detail: "Plans concrets, projets, lien social. Suivi long espacé." },
  ],
  [
    { name: "Coordination psychiatre", type: "Cadre", icon: "🩺", desc: "Obligatoire." },
    { name: "Lieu sûr et ressources", type: "Hypnose", icon: "🏝", desc: "Stabilisation préalable." },
    { name: "Métaphore du jardin", type: "Visualisation", icon: "🌳", desc: "Détachement des ruminations." },
  ],
  [
    { val: "8-12", label: "Séances", sub: "parcours long", color: colors.clientBlue },
    { val: "Pluri", label: "Coordination", sub: "psychiatre obligatoire", color: colors.gold },
  ],
  ["Rien ne marchera, c'est génétique", "Je ne mérite pas d'aller mieux"]
);

const phasesDeuil = make(
  974, "Kübler-Ross", "5 phases du deuil",
  "Accompagnement hypnotique des 5 phases du deuil (Kübler-Ross) : déni, colère, marchandage, dépression, acceptation. Identification de la phase actuelle, soutien adapté, travail symbolique de chaque étape, accompagnement vers l'acceptation et la reconstruction.",
  ["Deuil récent ou en cours", "Phase de deuil bloquée", "Anticipation d'un deuil prochain"],
  ["Deuil pathologique (préférer 975)"],
  "Phases du deuil — Accompagnement",
  "60-90 min × selon besoin",
  colors.navy,
  "Identification phase + soutien adapté + travail symbolique + acceptation.",
  "Les 5 phases",
  [
    { label: "Identification de la phase actuelle", detail: "Déni, colère, marchandage, dépression, acceptation. Souvent non linéaire." },
    { label: "Phase Déni — Soutien doux", detail: "Pas de confrontation. Accompagner la prise de conscience progressive." },
    { label: "Phase Colère — Validation", detail: "Permettre l'expression de la colère. Sans jugement. Travail symbolique de libération." },
    { label: "Phase Marchandage — Acceptation des limites", detail: "« Si seulement... » Accepter ce qui ne peut être changé." },
    { label: "Phase Dépression — Présence", detail: "Lieu sûr. Présence soutenante. Coordination médicale si sévère." },
    { label: "Phase Acceptation — Reconstruction", detail: "Travail sur la nouvelle vie. Reconstitution identitaire (cf 976)." },
    { label: "Vérification non-linéarité", detail: "Le client peut revenir en arrière. C'est normal. Pas de pression." },
  ],
  [
    { name: "Cartographie des 5 phases", type: "Référence", icon: "🔄", desc: "Kübler-Ross." },
    { name: "Soutien adapté à la phase", type: "Posture", icon: "🤝", desc: "Spécifique." },
  ],
  [
    { val: "5", label: "Phases (Kübler-Ross)", sub: "non linéaires", color: colors.navy },
    { val: "6-12 mois", label: "Durée moyenne", sub: "deuil normal", color: colors.gold },
  ],
  ["Je devrais aller mieux plus vite", "Le deuil ne finit jamais"]
);

const typesDeuil = make(
  975, "4 types", "Diagnostic différentiel deuil",
  "Diagnostic différentiel des 4 types de deuil : Normal (résolution naturelle 6-12 mois), Difficile (intensité accrue mais évolution), Compliqué (blocage > 12 mois), Pathologique (DSM-V, prolongé > 12 mois avec dysfonctionnement). Approche hypnotique adaptée à chaque type.",
  ["Deuil de plus de 12 mois", "Souffrance disproportionnée", "Dysfonctionnement post-deuil"],
  ["Deuil normal en cours (préférer 974)"],
  "4 types de deuil — Diagnostic & approche",
  "90 min (diagnostic) + parcours adapté",
  colors.red,
  "Diagnostic + plan adapté + coordination médicale si pathologique.",
  "Étapes",
  [
    { label: "Évaluation de la durée", detail: "Combien de temps depuis la perte ? > 12 mois = potentiellement pathologique." },
    { label: "Évaluation de l'intensité", detail: "Sur 10. Évolutive ou stable ?" },
    { label: "Évaluation du fonctionnement", detail: "Travail, relations, autonomie. Maintenus ou détériorés ?" },
    { label: "Type 1 — Normal", detail: "Évolution naturelle. Accompagnement classique (cf 974)." },
    { label: "Type 2 — Difficile", detail: "Intensité accrue mais évolution. Accompagnement renforcé." },
    { label: "Type 3 — Compliqué", detail: "Blocage > 12 mois. Travail spécifique sur l'attachement et l'identité." },
    { label: "Type 4 — Pathologique (DSM-V)", detail: "> 12 mois + dysfonctionnement. Coordination psychiatrique OBLIGATOIRE." },
    { label: "Plan thérapeutique adapté", detail: "Selon le type identifié, parcours sur mesure." },
  ],
  [
    { name: "Grille diagnostique", type: "Document", icon: "📋", desc: "Durée + intensité + fonctionnement." },
    { name: "Plan adapté au type", type: "Stratégie", icon: "🎯", desc: "Spécifique." },
  ],
  [
    { val: "4", label: "Types de deuil", sub: "normal/diff/compliqué/patho", color: colors.red },
    { val: "12 mois", label: "Seuil pathologique", sub: "DSM-V", color: colors.gold },
  ],
  ["Mon deuil est unique", "Personne ne peut le diagnostiquer"]
);

const reconstitutionId = make(
  976, "Identitaire", "Reconstruction post-deuil",
  "Après la phase d'acceptation : reconstruction de l'identité du client en l'absence de la personne perdue. Travail sur les rôles laissés vacants, les ressources personnelles, la mission de vie révisée. Particulièrement utile après deuil de conjoint, parent, enfant.",
  ["Phase d'acceptation atteinte", "Reconstruction de vie post-deuil", "Veuvage, perte d'un parent"],
  ["Phase de deuil non encore acceptée"],
  "Reconstitution identitaire post-deuil",
  "90 min × 3-5 séances",
  colors.purple,
  "Rôles vacants + ressources + mission révisée + nouvelle identité.",
  "Étapes",
  [
    { label: "Identification des rôles vacants", detail: "Conjoint, fille/fils, parent, ami... Quels rôles laissés vides ?" },
    { label: "Évaluation de la transformation identitaire", detail: "« Qui es-tu maintenant que cette personne n'est plus là ? »" },
    { label: "Mobilisation des ressources personnelles", detail: "Talents, valeurs, qualités jusque-là peut-être occultés." },
    { label: "Révision de la mission de vie", detail: "« Quelle mission émerge maintenant ? Que veux-tu accomplir ? »" },
    { label: "Construction de la nouvelle identité", detail: "Intégration des changements en une nouvelle cohérence." },
    { label: "Pont sur le futur", detail: "Visualisation de la vie pleinement habitée dans cette nouvelle identité." },
    { label: "Pacte avec la personne perdue", detail: "« Tu vis en moi sans m'empêcher de vivre. »" },
  ],
  [
    { name: "Cartographie des rôles", type: "Document", icon: "📋", desc: "Vacants vs maintenus." },
    { name: "Mission révisée", type: "Sens", icon: "🎯", desc: "Nouvelle direction." },
    { name: "Pacte avec le perdu", type: "Symbolique", icon: "🙏", desc: "Coexistence sereine." },
  ],
  [
    { val: "3-5", label: "Séances", sub: "reconstruction", color: colors.purple },
    { val: "Identité", label: "Niveau", sub: "transformation profonde", color: colors.gold },
  ],
  ["Je ne pourrai jamais reconstruire", "Sans cette personne, je ne suis rien"]
);

const sageInterieur = make(
  977, "Ressource", "Dialogue avec le Sage intérieur",
  "Visualisation et dialogue avec la figure du Sage intérieur. En transe profonde, le client rencontre cette part profonde de lui-même qui « connaît » les éléments fondamentaux de sa vie. Particulièrement utile dans les transitions, deuils, choix majeurs.",
  ["Transition de vie", "Choix majeur à prendre", "Quête de sens", "Travail post-deuil"],
  ["Manque de capacité d'imagerie"],
  "Sage intérieur — Dialogue ressource",
  "60-75 min",
  colors.teal,
  "Mise en transe + visualisation + dialogue + intégration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Détente, ouverture imaginative." },
    { label: "Visualisation du lieu sacré", detail: "« Imaginez un lieu où vit la sagesse en vous. Forêt, temple, montagne... »" },
    { label: "Apparition du Sage", detail: "Figure de sagesse qui émerge. Forme libre (vieille femme, vieil homme, animal, lumière)." },
    { label: "Approche respectueuse", detail: "Le client approche, salue, présente sa demande." },
    { label: "Question essentielle", detail: "« Qu'as-tu à me dire d'essentiel pour ma vie ? »" },
    { label: "Réception de la réponse", detail: "Le Sage répond. Mots, image, sensation, symbole." },
    { label: "Don symbolique", detail: "Le Sage offre un objet symbolique au client. Ressource permanente." },
    { label: "Retour avec la sagesse", detail: "Le client revient avec la guidance reçue. Application concrète." },
  ],
  [
    { name: "Lieu sacré intérieur", type: "Visualisation", icon: "🏞", desc: "Forêt/temple/montagne." },
    { name: "Figure du Sage", type: "Archétype", icon: "🧙", desc: "Forme libre." },
    { name: "Don symbolique", type: "Ressource", icon: "🎁", desc: "Objet permanent." },
  ],
  [
    { val: "Sage", label: "Archétype", sub: "intérieur universel", color: colors.teal },
    { val: "60-75", label: "Minutes", sub: "voyage complet", color: colors.gold },
  ],
  ["Je n'ai pas de sage en moi", "La sagesse vient des livres"]
);

const tus = make(
  978, "TUS", "Technique Universelle Sacrée",
  "Technique avancée d'hypno-symbolisme rassemblant plusieurs traditions : centrage corporel, activation du chakra du cœur, connexion à la conscience universelle, demande, lâcher-prise, intégration. Particulièrement puissante pour quête de sens et travail spirituel.",
  ["Quête de sens profond", "Travail spirituel avancé", "Recherche de guidance majeure"],
  ["Refus du sacré/spirituel", "Crise psychiatrique"],
  "Technique Universelle Sacrée (TUS)",
  "90 min",
  colors.gold,
  "Centrage + cœur + connexion + demande + lâcher + intégration.",
  "Étapes",
  [
    { label: "Centrage corporel profond", detail: "Position assise stable, dos droit, mains sur les cuisses." },
    { label: "Respiration consciente", detail: "10 respirations profondes, attention au souffle." },
    { label: "Activation du chakra du cœur", detail: "Mains sur le cœur. Visualisation d'une lumière s'allumant au centre de la poitrine." },
    { label: "Connexion à la conscience universelle", detail: "« Au-delà de moi, tout est UN. Je me relie à cette conscience. »" },
    { label: "Formulation d'une demande sacrée", detail: "Court, sincère, profond. « Aide-moi à... »" },
    { label: "Lâcher-prise", detail: "« Je dépose ma demande. Je laisse advenir. »" },
    { label: "Réception silencieuse", detail: "Plusieurs minutes de silence. Recevoir sans attendre." },
    { label: "Intégration", detail: "Mains sur le cœur. Gratitude. Retour à la vie ordinaire avec la guidance." },
  ],
  [
    { name: "Activation chakra cœur", type: "Énergétique", icon: "❤", desc: "Lumière centrale." },
    { name: "Demande sacrée", type: "Rituel", icon: "🙏", desc: "Court et sincère." },
    { name: "Lâcher-prise", type: "Posture", icon: "🕊", desc: "Recevoir sans attendre." },
  ],
  [
    { val: "TUS", label: "Technique", sub: "Universelle Sacrée", color: colors.gold },
    { val: "90", label: "Minutes", sub: "rituel complet", color: colors.purple },
  ],
  ["Le sacré n'existe pas", "Je ne peux pas demander à l'univers"]
);

const voyageHeros = make(
  979, "Campbell", "12 étapes du voyage du héros",
  "Adaptation hypnotique du Voyage du Héros de Joseph Campbell (12 étapes : Appel, Refus, Mentor, Seuil, Épreuves, Approche, Ordalie, Récompense, Retour, Résurrection, Don). Le client traverse en transe les étapes de sa propre transformation héroïque.",
  ["Transition de vie majeure", "Travail identitaire profond", "Quête de sens", "Préparation à un grand projet"],
  ["Refus du symbolique", "Demande très opérationnelle"],
  "Voyage du Héros — Exploration psychologique",
  "120-150 min",
  colors.purple,
  "12 étapes traversées en transe + intégration héroïque.",
  "Les 12 étapes",
  [
    { label: "1 — Le monde ordinaire", detail: "Vie actuelle avant transformation." },
    { label: "2 — L'appel à l'aventure", detail: "L'événement qui pousse au changement." },
    { label: "3 — Le refus de l'appel", detail: "Résistance, peur, doute." },
    { label: "4 — Rencontre du mentor", detail: "Figure de sagesse qui guide (cf 977)." },
    { label: "5 — Passage du seuil", detail: "Engagement dans le voyage." },
    { label: "6 — Épreuves & alliés", detail: "Premiers défis, premiers soutiens." },
    { label: "7 — Approche de la caverne", detail: "Préparation du défi central." },
    { label: "8 — L'ordalie", detail: "Le grand défi, le combat, la mort symbolique." },
    { label: "9 — La récompense", detail: "Ce qui est gagné, le trésor, la connaissance." },
    { label: "10 — Le chemin du retour", detail: "Retour vers le monde ordinaire avec la transformation." },
    { label: "11 — La résurrection", detail: "Dernière épreuve, mort de l'ancien soi." },
    { label: "12 — Le don au monde", detail: "Le héros offre au monde ce qu'il a appris." },
  ],
  [
    { name: "12 étapes Campbell", type: "Référence", icon: "🗺", desc: "Voyage universel." },
    { name: "Voyage symbolique en transe", type: "Hypnose", icon: "🚪", desc: "Toutes les étapes." },
  ],
  [
    { val: "12", label: "Étapes", sub: "Joseph Campbell", color: colors.purple },
    { val: "120-150", label: "Minutes", sub: "voyage complet", color: colors.gold },
  ],
  ["Je ne suis pas un héros", "Ma vie n'a rien d'épique"]
);

const vibrationsCellulaires = make(
  980, "Cellulaire", "Communication corps profond",
  "Hypnose au niveau cellulaire : visualisation des cellules vibrant à une fréquence harmonisée, communication avec le corps physique au plan le plus fin. Inspiré des travaux sur la PNL générative et l'épigénétique. Approche complémentaire au médical.",
  ["Maladie chronique en complément médical", "Soutien à un protocole médical", "Burn-out physique", "Préparation à intervention"],
  ["Substitution complète au médical", "Pathologie aiguë non traitée"],
  "Vibrations cellulaires — Travail au niveau corporel profond",
  "60-90 min",
  colors.teal,
  "Mise en transe + visualisation cellulaire + harmonisation + intégration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Somnambulisme requis pour communication cellulaire." },
    { label: "Cartographie corporelle", detail: "Le client scanne son corps. Identifie les zones harmonieuses et dissonnantes." },
    { label: "Visualisation des cellules", detail: "« Imagine tes cellules. Vivantes, vibrantes. Chacune en mouvement. »" },
    { label: "Identification de la fréquence harmonieuse", detail: "« Comment vibrent les cellules saines ? Quel rythme, quelle couleur ? »" },
    { label: "Diffusion à tout le corps", detail: "« Cette harmonie se diffuse à toutes les cellules. Toutes vibrent ensemble. »" },
    { label: "Communication avec une zone spécifique", detail: "« Parle aux cellules de [zone précise]. Que disent-elles ? Que veulent-elles ? »" },
    { label: "Réponse cellulaire", detail: "Le client reçoit information ou ressenti." },
    { label: "Harmonisation finale", detail: "Toutes les cellules en cohérence. Intégration corporelle." },
  ],
  [
    { name: "Visualisation cellulaire", type: "Hypnose", icon: "🧬", desc: "Cellules vivantes." },
    { name: "Harmonisation vibratoire", type: "Énergétique", icon: "🎵", desc: "Toutes en cohérence." },
  ],
  [
    { val: "Cellulaire", label: "Niveau de travail", sub: "corps profond", color: colors.teal },
    { val: "Compl.", label: "Médical", sub: "obligatoire", color: colors.gold },
  ],
  ["On ne peut pas parler aux cellules", "C'est ésotérique"]
);

const purificationCellulaire = make(
  981, "Libération", "Purification des mémoires cellulaires",
  "Protocole hypnotique de purification des mémoires cellulaires (traumatismes, charges héritées). Visualisation d'une lumière purifiante traversant chaque cellule, libération symbolique des charges anciennes, intégration d'une nouvelle vibration. Travail spirituel profond.",
  ["Charges traumatiques anciennes", "Sentiment de lourdeur corporelle", "Travail post-trauma stabilisé", "Démarche spirituelle"],
  ["Trauma actif non stabilisé"],
  "Purification des mémoires cellulaires",
  "90 min",
  colors.clientBlue,
  "Identification + lumière purifiante + libération + nouvelle vibration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Somnambulisme requis." },
    { label: "Cartographie des charges", detail: "Le client identifie les zones du corps qui « portent » des charges." },
    { label: "Visualisation de la lumière purifiante", detail: "« Une lumière pure, blanche ou dorée, descend du sommet de ta tête. »" },
    { label: "Traversée du corps", detail: "« Cette lumière traverse chaque zone, chaque cellule. »" },
    { label: "Libération symbolique", detail: "« Les charges anciennes se dissolvent dans la lumière. Elles partent. »" },
    { label: "Évacuation", detail: "« Les charges sortent par les pieds, dans la terre. Ou par les mains. »" },
    { label: "Intégration de la nouvelle vibration", detail: "« Tu es plus léger. Une nouvelle vibration emplit ton corps. »" },
    { label: "Ancrage et sortie", detail: "Mains sur le cœur. Gratitude. Retour intégré." },
  ],
  [
    { name: "Lumière purifiante", type: "Visualisation", icon: "💡", desc: "Blanche ou dorée." },
    { name: "Évacuation symbolique", type: "Technique", icon: "🌊", desc: "Par les pieds ou mains." },
  ],
  [
    { val: "Profonde", label: "Transe requise", sub: "somnambulisme", color: colors.clientBlue },
    { val: "90", label: "Minutes", sub: "purification complète", color: colors.gold },
  ],
  ["Mes cellules ne portent pas de mémoires", "C'est trop abstrait"]
);

const transgenerationnel = make(
  982, "Lignée", "Libération des chaînes ancestrales",
  "Travail hypnotique sur les héritages transgénérationnels : loyautés invisibles, secrets de famille, traumatismes hérités, répétitions. Visite symbolique des ancêtres, dialogue, restitution des charges qui ne nous appartiennent pas, libération des lignées.",
  ["Patterns familiaux récurrents", "Sentiment de porter une charge non personnelle", "Travail post-génogramme (cf 935)"],
  ["Trauma familial actif sévère"],
  "Guérison transgénérationnelle",
  "90-120 min",
  colors.purple,
  "Visite des ancêtres + identification des charges + restitution + libération.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Profondeur somnambulique." },
    { label: "Visite symbolique des ancêtres", detail: "Visualisation de l'arbre généalogique. Apparition des ancêtres connus et inconnus." },
    { label: "Identification des charges héritées", detail: "« Qu'est-ce que je porte qui ne m'appartient pas ? »" },
    { label: "Dialogue avec l'ancêtre concerné", detail: "« Pourquoi cette charge m'a-t-elle été transmise ? »" },
    { label: "Restitution symbolique", detail: "« Je te rends ce qui t'appartient. Je ne le porte plus. »" },
    { label: "Libération de la lignée", detail: "« Toute la lignée est libérée de cette répétition. »" },
    { label: "Pacte de continuation libre", detail: "« Je continue ma vie, libre de ces chaînes. »" },
    { label: "Intégration", detail: "Le client sent la libération corporelle. Légèreté." },
  ],
  [
    { name: "Visualisation des ancêtres", type: "Hypnose", icon: "👥", desc: "Connus et inconnus." },
    { name: "Restitution symbolique", type: "Rituel", icon: "🎁", desc: "Charge rendue." },
    { name: "Pacte de libération", type: "Symbolique", icon: "🕊", desc: "Pour toute la lignée." },
  ],
  [
    { val: "Transgén.", label: "Niveau", sub: "lignée familiale", color: colors.purple },
    { val: "90-120", label: "Minutes", sub: "rituel complet", color: colors.gold },
  ],
  ["Je porte ma propre charge", "Mes ancêtres n'influencent pas ma vie"]
);

const marcheLumiere = make(
  983, "7 couleurs", "Chakras + symbolique des couleurs",
  "Protocole hypnotique de marche symbolique à travers 7 lumières colorées (rouge ancrage, orange créativité, jaune confiance, vert harmonie, bleu communication, indigo intuition, violet spiritualité). Activation des chakras et travail vibratoire complet.",
  ["Centrage et harmonisation", "Travail énergétique complet", "Préparation spirituelle"],
  ["Refus du symbolique"],
  "Marche de Lumière & symbolique des couleurs",
  "60-90 min",
  colors.gold,
  "Traversée des 7 couleurs + activation des chakras correspondants.",
  "Les 7 couleurs/chakras",
  [
    { label: "Préparation et mise en transe", detail: "Position assise ou debout. Détente progressive." },
    { label: "Rouge — Chakra racine (ancrage)", detail: "« Lumière rouge à la base. Ancrage, sécurité, vitalité. »" },
    { label: "Orange — Chakra sacré (créativité)", detail: "« Lumière orange au bas-ventre. Créativité, plaisir, sensorialité. »" },
    { label: "Jaune — Chakra plexus (confiance)", detail: "« Lumière jaune au plexus solaire. Confiance, pouvoir personnel. »" },
    { label: "Vert — Chakra cœur (harmonie)", detail: "« Lumière verte au cœur. Amour, harmonie, compassion. »" },
    { label: "Bleu — Chakra gorge (communication)", detail: "« Lumière bleue à la gorge. Communication, vérité, expression. »" },
    { label: "Indigo — Chakra 3e œil (intuition)", detail: "« Lumière indigo au front. Intuition, vision intérieure. »" },
    { label: "Violet — Chakra couronne (spiritualité)", detail: "« Lumière violette au sommet. Connexion, spiritualité, conscience. »" },
    { label: "Intégration arc-en-ciel", detail: "Les 7 couleurs s'unissent en lumière blanche au-dessus de la tête. Intégration totale." },
  ],
  [
    { name: "7 chakras", type: "Référence", icon: "🌈", desc: "Yoga & énergétique." },
    { name: "Lumières colorées", type: "Visualisation", icon: "💡", desc: "Activation séquentielle." },
  ],
  [
    { val: "7", label: "Couleurs/chakras", sub: "rouge → violet", color: colors.gold },
    { val: "60-90", label: "Minutes", sub: "traversée complète", color: colors.purple },
  ],
  ["Les chakras n'existent pas", "C'est new age"]
);

const reveHypnose = make(
  984, "3 techniques", "Souvenir, sensation, méthode",
  "Trois techniques de travail des rêves en hypnose : (1) Technique du souvenir (revisiter un rêve fait), (2) Technique de la sensation de rêve (induire un état onirique), (3) Méthode du rêve hypnotique (créer un rêve thérapeutique sur mesure).",
  ["Cauchemar récurrent", "Travail symbolique profond", "Insomnie liée à mauvais rêves"],
  ["Trouble du sommeil sévère sans bilan"],
  "Travail du rêve en hypnose — 3 techniques",
  "60-90 min",
  colors.navy,
  "Choix de la technique + induction + travail symbolique.",
  "Les 3 techniques",
  [
    { label: "Technique 1 — Souvenir d'un rêve", detail: "Le client raconte un rêve marquant. Revisite en transe. Modifie symboliquement." },
    { label: "Technique 1 — Recadrage onirique", detail: "Dans le rêve revisité, le client a maintenant les ressources adultes." },
    { label: "Technique 2 — Sensation de rêve", detail: "Induction d'un état proche du rêve éveillé. Hypnagogie volontaire." },
    { label: "Technique 2 — Émergence libre", detail: "Le client laisse émerger des images, sensations, métaphores spontanées." },
    { label: "Technique 3 — Rêve hypnotique sur mesure", detail: "Le praticien guide la création d'un rêve thérapeutique précis." },
    { label: "Technique 3 — Travail symbolique guidé", detail: "Personnages, lieux, événements choisis pour effet thérapeutique." },
    { label: "Intégration commune aux 3", detail: "Sortie en sécurité, débrief, ancrage des découvertes." },
  ],
  [
    { name: "3 techniques", type: "Catalogue", icon: "🌙", desc: "Souvenir, sensation, méthode." },
    { name: "État hypnagogique", type: "Profondeur", icon: "💭", desc: "Pour technique 2." },
  ],
  [
    { val: "3", label: "Techniques disponibles", sub: "selon objectif", color: colors.navy },
    { val: "60-90", label: "Minutes", sub: "séance complète", color: colors.gold },
  ],
  ["Mes rêves sont incontrôlables", "On ne peut pas créer un rêve"]
);

const revesLucides = make(
  985, "Performance", "Apprentissage moteur via rêves lucides",
  "Utilisation des rêves lucides (induits en transe) pour l'apprentissage moteur : sport, musique, gestes professionnels. La répétition mentale en état onirique active les mêmes circuits neuronaux que la pratique réelle. Technique avancée pour performance.",
  ["Préparation à compétition sportive", "Apprentissage musical", "Gestes professionnels précis", "Préparation à examen pratique"],
  ["Manque de capacité d'imagerie"],
  "Apprentissage moteur via rêves lucides",
  "60 min",
  colors.teal,
  "Induction onirique + lucidité + répétition motrice + intégration.",
  "Étapes",
  [
    { label: "Mise en transe profonde", detail: "Approche état hypnagogique." },
    { label: "Induction d'un état onirique lucide", detail: "Le client est dans un rêve, MAIS il sait qu'il rêve. Lucidité." },
    { label: "Mise en scène du contexte", detail: "Le client se retrouve dans le contexte de la performance (terrain, scène, atelier)." },
    { label: "Répétition motrice détaillée", detail: "Exécution du geste précis, en VAKOG complet. Sensations corporelles." },
    { label: "Itérations parfaites", detail: "« Refais le geste, encore plus juste. » Plusieurs répétitions." },
    { label: "Calibration interne", detail: "Le client capte la sensation du geste juste." },
    { label: "Ancrage", detail: "Geste, mot, image pour réactivation en réel." },
    { label: "Pont sur le futur", detail: "Visualisation de la performance réelle avec le geste intégré." },
  ],
  [
    { name: "Rêve lucide induit", type: "État", icon: "💭", desc: "Contrôle dans le rêve." },
    { name: "Répétition motrice mentale", type: "Apprentissage", icon: "🎯", desc: "Active les circuits neuronaux." },
  ],
  [
    { val: "Performance", label: "Domaine", sub: "sport/musique/pro", color: colors.teal },
    { val: "60", label: "Minutes", sub: "session intensive", color: colors.gold },
  ],
  ["Mental ne remplace pas la pratique", "Je ne peux pas être lucide en rêve"]
);

const dessinAuto = make(
  986, "Expression", "Dessin & écriture automatiques",
  "Techniques d'expression spontanée en transe légère : dessin automatique (laisser la main dessiner sans contrôle conscient) et écriture automatique. L'inconscient s'exprime directement par le geste. Outil diagnostic et thérapeutique. Pas de jugement esthétique.",
  ["Client verbal bloqué", "Travail créatif et thérapeutique", "Diagnostic non verbal"],
  ["Refus de l'exercice", "Difficulté motrice empêchant l'écriture/dessin"],
  "Dessin & écriture automatiques",
  "45-60 min",
  colors.clientOrange,
  "Mise en transe + matériel + dessin/écriture libre + interprétation respectueuse.",
  "Étapes",
  [
    { label: "Préparation matériel", detail: "Grandes feuilles blanches, crayons de couleur ou stylo." },
    { label: "Mise en transe légère", detail: "Détente, lâcher-prise du contrôle conscient." },
    { label: "Suggestion de l'automatisme", detail: "« Laisse ta main bouger toute seule. Sans réfléchir. Sans juger. »" },
    { label: "Dessin automatique", detail: "Le client laisse la main dessiner. Formes, traits, couleurs spontanés." },
    { label: "OU écriture automatique", detail: "Mots, phrases, parfois pensées qui surgissent sans contrôle." },
    { label: "Pas de jugement esthétique", detail: "Aucune attente de beauté. Seul l'authenticité compte." },
    { label: "Sortie de transe", detail: "Le client revient à la conscience ordinaire." },
    { label: "Interprétation respectueuse", detail: "« Que vois-tu sur le dessin ? Que dit ce mot ? » Le client interprète, pas le praticien." },
  ],
  [
    { name: "Matériel simple", type: "Préparation", icon: "🖍", desc: "Papier + crayons." },
    { name: "Lâcher-prise total", type: "Posture", icon: "🕊", desc: "Pas de contrôle." },
    { name: "Interprétation par le client", type: "Éthique", icon: "👁", desc: "Le client interprète." },
  ],
  [
    { val: "Auto", label: "Mode", sub: "main libre" , color: colors.clientOrange },
    { val: "Diagnostic", label: "Et thérapeutique", sub: "double usage", color: colors.gold },
  ],
  ["Je ne sais pas dessiner", "Mon écriture sera incohérente"]
);

export const maitreHypnoseDetails: Record<number, ProtocolDetail> = {
  927: rameyMiles,
  928: esdaile,
  929: sichort,
  930: preInduction,
  931: speedHypnose,
  932: fractionnement,
  933: hypnoseMedicale,
  934: hypnoseSystemique,
  935: genogramme,
  936: karpman,
  937: constellations,
  938: protocoleRelationnel,
  939: sexoAnamnese,
  940: sexoMasculin,
  941: sexoDesir,
  942: sexoElaboration,
  943: sexoCouple,
  944: satirCommunication,
  945: halluPositive,
  946: halluNegative,
  947: patternInterrupt,
  948: enfantInterieur,
  949: reconciliationMeta,
  973: depression,
  974: phasesDeuil,
  975: typesDeuil,
  976: reconstitutionId,
  977: sageInterieur,
  978: tus,
  979: voyageHeros,
  980: vibrationsCellulaires,
  981: purificationCellulaire,
  982: transgenerationnel,
  983: marcheLumiere,
  984: reveHypnose,
  985: revesLucides,
  986: dessinAuto,
};
