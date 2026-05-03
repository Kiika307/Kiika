import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";

/**
 * Fiches détaillées Deep Hypnose / Dave Elman (IDs 830-833).
 * Source : GS Formation — Module Deep Hypnose Dave Elman (4 tomes).
 * Référence : Dave Elman (1900-1967), Hypnotherapy (1964).
 */

// =====================================================================
// ID 830 — Induction Dave Elman
// =====================================================================
const induction: ProtocolDetail = {
  protocolId: 830,
  efficacite: "3-5 min",
  efficaciteSub: "Pour atteindre une transe profonde (somnambulique)",
  description:
    "Induction emblématique de Dave Elman (1900-1967). Technique en 7 étapes pour atteindre une transe profonde (somnambulique) en 3-5 minutes. Repose sur la fixation visuelle, la fermeture des yeux par décret, le test de relâchement musculaire et la dissociation par les chiffres. Méthode utilisée par les médecins et dentistes formés par Elman dans les années 1950-60.",
  indications: [
    "Praticien hypnose souhaitant induire rapidement",
    "Client coopérant et motivé",
    "Préparation à régression, anesthésie, suggestions directes",
    "Contexte médical (douleur, soins) nécessitant rapidité",
    "Travail avancé en hypnose ericksonienne",
  ],
  contraindications: [
    "Client résistant ou méfiant (rapport non établi)",
    "Psychose, dissociation pathologique",
    "Trouble bipolaire en phase maniaque",
    "Épilepsie photosensible (adaptation nécessaire)",
  ],
  programs: [
    {
      id: "principal",
      title: "Induction Elman — 7 étapes",
      icon: "◐",
      duration: "5-10 min (induction seule)",
      color: colors.clientBlue,
      recommended: true,
      description:
        "Protocole classique en 7 étapes pour atteindre la transe profonde rapidement. À pratiquer jusqu'à automatisation.",
      seances: [
        {
          num: 1,
          title: "Les 7 étapes de l'induction Elman",
          steps: [
            { label: "Étape 1 — Fixation visuelle & relaxation", detail: "« Fixez un point sur le mur. Laissez vos paupières devenir lourdes... très lourdes. Quand vous serez prêt, fermez les yeux et relâchez complètement. »" },
            { label: "Étape 2 — Fermeture des yeux par décret", detail: "« Imaginez que vos paupières sont si profondément relâchées qu'elles ne peuvent plus s'ouvrir. Testez-les... vous verrez qu'elles restent fermées. »" },
            { label: "Étape 3 — Test de relaxation des paupières", detail: "Le client tente d'ouvrir les yeux et n'y parvient pas. Convicteur fort de la profondeur. « Maintenant arrêtez d'essayer et laissez ce relâchement descendre dans tout votre corps. »" },
            { label: "Étape 4 — Diffusion du relâchement", detail: "« Laissez ce même relâchement parfait s'étendre depuis vos paupières vers les épaules, les bras, les mains, le ventre, les jambes, les pieds. »" },
            { label: "Étape 5 — Test du bras (catalepsie)", detail: "Le praticien soulève le bras du client et le lâche. Si le bras tombe lourdement, la transe est suffisante. Sinon, approfondir." },
            { label: "Étape 6 — Dissociation par les chiffres", detail: "« Comptez à voix haute de 100 en arrière. À chaque chiffre, doublez la profondeur. Vers 97-95, les chiffres vont disparaître complètement de votre esprit. » Quand le client ne peut plus compter : transe profonde atteinte." },
            { label: "Étape 7 — Vérification & approfondissement", detail: "Test des doigts collés (cf 833) ou du bras catalepsique. Le client est en somnambulisme léger ou profond. Prêt pour le travail thérapeutique." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Script Elman 7 étapes", type: "Script", icon: "📜", desc: "Protocole verbatim à mémoriser et adapter." },
    { name: "Test des paupières", type: "Convicteur", icon: "👁", desc: "Étape 3 — vérifie le relâchement initial." },
    { name: "Test du bras", type: "Convicteur", icon: "💪", desc: "Étape 5 — catalepsie partielle." },
    { name: "Dissociation des chiffres", type: "Approfondissement", icon: "🔢", desc: "Étape 6 — accès au somnambulisme." },
  ],
  stats: [
    { val: "3-5 min", label: "Pour atteindre la transe profonde", sub: "vs 20-30 min pour une induction lente", color: colors.clientBlue },
    { val: "7", label: "Étapes du protocole", sub: "structure rigoureuse", color: colors.gold },
    { val: "1950-60", label: "Origine", sub: "Dave Elman, médecins/dentistes US", color: colors.teal },
  ],
  croyances: [
    "L'hypnose prend du temps",
    "Je ne suis pas hypnotisable",
    "On ne peut pas atteindre la transe profonde sans danger",
  ],
};

// =====================================================================
// ID 831 — Régression Elman vers l'événement initiateur
// =====================================================================
const regression: ProtocolDetail = {
  protocolId: 831,
  efficacite: "ISE",
  efficaciteSub: "Identification & libération de l'Initial Sensitizing Event",
  description:
    "Technique de régression en transe profonde de Dave Elman. Le client remonte chronologiquement sa vie jusqu'à l'événement initial du symptôme (Initial Sensitizing Event - ISE). Recadrage in situ avec ressources adultes. Particulièrement efficace pour phobies, blocages et symptômes psychosomatiques dont l'origine est inconsciente.",
  indications: [
    "Phobie persistante d'origine non identifiée consciemment",
    "Symptôme psychosomatique récurrent",
    "Blocage répétitif (relationnel, professionnel)",
    "Trauma diffus sans souvenir explicite",
    "Client en transe profonde (somnambulisme atteint)",
  ],
  contraindications: [
    "Trauma majeur non stabilisé (risque d'abréaction)",
    "Dissociation pathologique",
    "Trouble dissociatif de l'identité",
    "Manque de ressources adultes du client",
    "Praticien non formé à la gestion d'abréaction",
  ],
  programs: [
    {
      id: "principal",
      title: "Régression Elman — Séance complète",
      icon: "◑",
      duration: "60-90 min",
      color: colors.purple,
      recommended: true,
      description:
        "Séance unique structurée en induction Elman + régression vers ISE + recadrage + pont sur le futur.",
      seances: [
        {
          num: 1,
          title: "Régression vers l'événement initiateur",
          steps: [
            { label: "Pré-talk & ressources", detail: "Vérification de la motivation. Installation d'un lieu sûr et d'une ressource adulte (sagesse, force, amour). Engagement de coopération." },
            { label: "Induction Elman 7 étapes", detail: "Atteinte de la transe profonde via le protocole standard (cf 830)." },
            { label: "Pont d'affect", detail: "« Reconnectez-vous au sentiment précis qui accompagne le symptôme. Ressentez-le pleinement. Laissez ce sentiment vous guider en arrière dans le temps. »" },
            { label: "Régression à compte 5-1", detail: "« Je vais compter de 5 à 1, et à 1 vous serez à la première fois où vous avez ressenti exactement ce sentiment. »" },
            { label: "Identification de l'ISE", detail: "Le client décrit la scène : âge, lieu, personnes, ce qui se passe. Le praticien questionne sans suggérer." },
            { label: "Revivification émotionnelle (avec sécurité)", detail: "Le client revit la scène avec son corps et ses émotions de l'époque. Le praticien stabilise par sa voix." },
            { label: "Recadrage avec ressources adultes", detail: "Le client adulte entre dans la scène pour aider l'enfant : protection, paroles manquantes, contre-information." },
            { label: "Recadrage cognitif", detail: "Nouvelle signification donnée à l'événement. « Qu'est-ce que vous comprenez maintenant ? » Permission de lâcher prise." },
            { label: "Pont sur le futur", detail: "« Avancez maintenant dans le temps avec cette nouvelle compréhension. Voyez-vous dans une situation qui aurait déclenché le symptôme — comment réagissez-vous ? »" },
            { label: "Réveil progressif & ancrage", detail: "Comptage 1-5 + ancrage de la nouvelle ressource. Débrief court. Recommandations post-séance." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Pont d'affect", type: "Technique", icon: "🌉", desc: "Utilise l'émotion comme guide vers l'origine." },
    { name: "Lieu sûr", type: "Ressource", icon: "🏝", desc: "Refuge mental pré-installé pour stabilisation." },
    { name: "Ressource adulte", type: "Ressource", icon: "🛡", desc: "Soi adulte protecteur invité dans la scène." },
    { name: "Échelle SUDS", type: "Évaluation", icon: "📏", desc: "Mesure 0-10 de la perturbation avant/après." },
  ],
  stats: [
    { val: "ISE", label: "Initial Sensitizing Event", sub: "racine du symptôme", color: colors.purple },
    { val: "60-90", label: "Minutes par séance", sub: "induction + régression + recadrage", color: colors.gold },
    { val: "5→1", label: "Comptage de régression", sub: "structure Elman", color: colors.teal },
  ],
  croyances: [
    "Je n'arriverai pas à me souvenir",
    "Mon trauma est trop ancien pour être atteint",
    "Revisiter le passé va me faire mal",
  ],
};

// =====================================================================
// ID 832 — Anesthésie hypnotique méthode Elman
// =====================================================================
const anesthesie: ProtocolDetail = {
  protocolId: 832,
  efficacite: "Chirurgicale",
  efficaciteSub: "Documenté par Elman avec dentistes et chirurgiens",
  description:
    "Protocole d'anesthésie hypnotique en transe profonde pour douleurs aiguës ou chroniques, soins dentaires, accouchement. Repose sur la dissociation et la suggestion directe en somnambulisme. Méthode utilisée par Dave Elman avec dentistes et chirurgiens dans les années 1950-60, notamment pour patients allergiques aux anesthésiques.",
  indications: [
    "Douleur aiguë ponctuelle (soin dentaire, accouchement)",
    "Douleur chronique avec composante psychogène",
    "Patient allergique aux anesthésiques chimiques",
    "Préparation chirurgicale (en complément médical)",
    "Soin pédiatrique anxiogène",
  ],
  contraindications: [
    "Douleur signalant une pathologie non diagnostiquée (urgence)",
    "Substitution complète à un suivi médical (jamais)",
    "Patient non préparé à la transe profonde",
    "Praticien non formé spécifiquement à l'anesthésie hypnotique",
  ],
  programs: [
    {
      id: "principal",
      title: "Anesthésie hypnotique — Protocole Elman",
      icon: "◕",
      duration: "20-40 min",
      color: colors.red,
      recommended: true,
      description:
        "Protocole en transe profonde pour analgésie locale ou générale. Doit être pratiqué par praticien expérimenté.",
      seances: [
        {
          num: 1,
          title: "Protocole d'anesthésie hypnotique",
          steps: [
            { label: "Pré-talk médical", detail: "Vérification du diagnostic, accord du patient, coordination avec équipe médicale si chirurgie. Évaluation de la suggestibilité." },
            { label: "Induction Elman + approfondissement", detail: "Transe profonde via 7 étapes Elman + dissociation des chiffres jusqu'à somnambulisme stable." },
            { label: "Test de profondeur — gant anesthésique", detail: "« Votre main gauche devient totalement insensible, comme dans un gant épais. » Pincement test. Si insensible : profondeur suffisante." },
            { label: "Transfert d'anesthésie sur la zone cible", detail: "« Maintenant, votre main anesthésiée touche la zone à opérer/soigner. L'anesthésie se transfère parfaitement à cet endroit. »" },
            { label: "Suggestions directes en somnambulisme", detail: "« Cette zone est complètement insensible à toute douleur. Vous percevez les contacts mais sans aucune souffrance. »" },
            { label: "Maintien pendant le soin", detail: "Voix calme et présente du praticien tout au long de l'intervention. Renforcements ponctuels : « C'est parfait, votre corps coopère. »" },
            { label: "Suggestions post-opératoires", detail: "« Après le soin, votre cicatrisation sera rapide et confortable. Pas de saignement excessif, pas de douleur post-opératoire. »" },
            { label: "Réveil progressif", detail: "Sortie en douceur. Vérification de la sensibilité retrouvée. Débrief avec le patient et l'équipe médicale." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Gant anesthésique", type: "Technique", icon: "🧤", desc: "Test et transfert d'analgésie." },
    { name: "Suggestions directes", type: "Script", icon: "🎯", desc: "En somnambulisme uniquement — efficacité maximale." },
    { name: "Coordination médicale", type: "Cadre", icon: "🏥", desc: "Travail en équipe avec dentiste/chirurgien." },
    { name: "Suggestions post-op", type: "Script", icon: "🩹", desc: "Cicatrisation, hémostase, confort." },
  ],
  stats: [
    { val: "20-40 min", label: "Durée du protocole", sub: "hors soin médical", color: colors.red },
    { val: "Somnambulisme", label: "Profondeur requise", sub: "obligatoire pour analgésie", color: colors.purple },
    { val: "1950-60", label: "Validation historique", sub: "dentistes/chirurgiens US", color: colors.teal },
  ],
  croyances: [
    "L'hypnose ne peut pas vraiment supprimer la douleur",
    "C'est de la suggestion, pas une vraie anesthésie",
    "Je vais sentir quand même",
  ],
};

// =====================================================================
// ID 833 — Test des doigts collés (convicteur)
// =====================================================================
const doigtsColles: ProtocolDetail = {
  protocolId: 833,
  efficacite: "Convicteur",
  efficaciteSub: "Vérification objective de la transe profonde",
  description:
    "Convicteur classique de Dave Elman pour vérifier que le client est bien en transe profonde (somnambulique). Le client ne peut plus séparer ses doigts collés malgré ses efforts. Permet d'ancrer la conviction du client en sa propre transe et d'ouvrir la porte aux techniques avancées (régression, suggestions directes, anesthésie).",
  indications: [
    "Vérification après induction Elman",
    "Client doutant de sa propre transe",
    "Préparation à techniques avancées",
    "Démonstration pédagogique en formation",
    "Convicteur de mi-séance pour réassurance",
  ],
  contraindications: [
    "Client à la peau fragile (joindre fermement sans douleur)",
    "Trouble articulaire des mains (arthrose sévère)",
    "Refus du client (ne pas forcer un convicteur)",
  ],
  programs: [
    {
      id: "principal",
      title: "Test des doigts collés — Intégré à la séance",
      icon: "◑",
      duration: "5 min (intégré à l'induction)",
      color: colors.clientBlue,
      recommended: true,
      description:
        "Convicteur court à insérer après l'étape 6 de l'induction Elman, ou en mi-séance pour réassurer le client.",
      seances: [
        {
          num: 1,
          title: "Protocole du test des doigts collés",
          steps: [
            { label: "Préparation", detail: "Le client est en transe profonde (somnambulisme léger ou profond) après induction Elman complète." },
            { label: "Position des mains", detail: "« Joignez vos mains en croisant les doigts. Serrez fermement. » Le praticien vérifie que les doigts sont bien entrelacés et serrés." },
            { label: "Suggestion de soudure", detail: "« Vos doigts sont si profondément collés ensemble qu'ils ne peuvent plus se séparer. Ils sont soudés, comme une seule pièce. »" },
            { label: "Renforcement", detail: "« Plus vous essayez, plus ils se collent. Votre inconscient les maintient soudés. »" },
            { label: "Invitation au test", detail: "« Maintenant, essayez de les séparer. Vous verrez qu'ils restent soudés. » Le client tente, sans succès." },
            { label: "Convicteur ancré", detail: "Le client constate par lui-même la réalité de la transe. Renforce sa coopération inconsciente." },
            { label: "Libération", detail: "« Maintenant, à mon décompte, vos doigts retrouvent leur mobilité normale. 3, 2, 1, ouvrez vos mains. »" },
            { label: "Renforcement de la transe", detail: "« Cette même intensité avec laquelle vos doigts étaient collés est l'intensité de votre transe. Vous êtes parfaitement prêt pour le travail qui suit. »" },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Convicteur des doigts", type: "Test", icon: "🤝", desc: "Vérification objective et expérience subjective." },
    { name: "Convicteur du bras", type: "Test", icon: "💪", desc: "Variante : bras lourd qui ne peut se lever." },
    { name: "Convicteur de l'oubli du nom", type: "Test", icon: "❓", desc: "Variante avancée : oubli temporaire de son prénom." },
  ],
  stats: [
    { val: "5 min", label: "Durée du test", sub: "intégré à la séance", color: colors.clientBlue },
    { val: "Somnambulisme", label: "Profondeur testée", sub: "léger ou profond", color: colors.purple },
    { val: "Conviction", label: "Effet principal", sub: "ancrage dans la réalité de la transe", color: colors.gold },
  ],
  croyances: [
    "Je fais semblant",
    "Je ne suis pas vraiment hypnotisé",
    "Si je voulais, je pourrais sortir tout de suite",
  ],
};

export const deepDetails: Record<number, ProtocolDetail> = {
  830: induction,
  831: regression,
  832: anesthesie,
  833: doigtsColles,
};
