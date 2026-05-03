import type { ProtocolDetail } from "./types";
import { colors } from "./tokens";
import { spirituelDetails } from "./protocol-details-spirituel";
import { tabacDetails } from "./protocol-details-tabac";
import { tcaDetails } from "./protocol-details-tca";
import { reikiDetails } from "./protocol-details-reiki";
import { deepDetails } from "./protocol-details-deep";
import { avancesDetails } from "./protocol-details-avances";
import { technicienDetails } from "./protocol-details-technicien";
import { praticienDetails } from "./protocol-details-praticien";
import { praticienPnlDetails } from "./protocol-details-praticien-pnl";

const hypnoseDetail: ProtocolDetail = {
  protocolId: 1,
  efficacite: "36%",
  efficaciteSub: "à 12 mois (méta-analyse, 633 études)",
  description:
    "Approche permissive et indirecte qui mobilise les ressources inconscientes du client par la métaphore et la suggestion. Travail sur les trois dimensions : physiologique, psychologique et comportementale.",
  indications: [
    "Anxiété chronique modérée à sévère",
    "Faible estime de soi, croyances limitantes",
    "Dépendances comportementales",
    "Forte motivation au changement",
  ],
  contraindications: [
    "Psychose ou état dissociatif aigu",
    "Trouble bipolaire en phase maniaque",
    "Refus explicite de l'hypnose",
  ],
  programs: [
    {
      id: "p2",
      title: "Programme 2 séances",
      icon: "◑",
      duration: "2 × 90 min",
      color: colors.teal,
      recommended: false,
      description: "Programme intensif avec choix illusoire de méthode. Responsabilise le client dès la première interaction.",
      seances: [
        {
          num: 1,
          title: "Bilan & Induction",
          steps: [
            { label: "Entretien motivationnel", detail: "Évaluation de la motivation et des peurs. Cartographie des écologies personnelles." },
            { label: "Psycho-éducation", detail: "Déconstruction des croyances limitantes : plaisir, stress, volonté." },
            { label: "Choix du protocole", detail: "Choix illusoire entre deux méthodes équivalentes pour engager la responsabilité." },
            { label: "Induction hypnotique", detail: "Mise en transe cataleptique. Libération du schéma émotionnel. Ancrage de l'intention positive." },
          ],
        },
        {
          num: 2,
          title: "Consolidation & Pont futur",
          steps: [
            { label: "Suivi & recalibration", detail: "Évaluation des 3 semaines écoulées. Traitement des résistances résiduelles." },
            { label: "Niveaux logiques (Dilts)", detail: "Réalignement Environnement → Comportement → Capacités → Valeurs → Identité." },
            { label: "Pont sur le futur", detail: "Visualisation dans les situations déclenchantes. Ancre de ressources." },
            { label: "Contrat moral", detail: "Engagement formel et programme d'activités alternatives." },
          ],
        },
      ],
    },
    {
      id: "p4",
      title: "Programme 4 séances",
      icon: "◕",
      duration: "4 × 60-90 min",
      color: colors.purple,
      recommended: true,
      description: "Programme complet recommandé. Travail en profondeur sur l'intention positive et la ligne du temps.",
      seances: [
        {
          num: 1,
          title: "Diagnostic & Prise de conscience",
          steps: [
            { label: "Bilan psychométrique", detail: "Identification des 3 types de dépendance et des leviers motivationnels." },
            { label: "Déconstruction des croyances", detail: "Travail sur les 12 croyances limitantes. Recadrage systématique." },
            { label: "Induction légère & ancrage", detail: "Première mise en transe. Ancre de bien-être. Cohérence cardiaque." },
          ],
        },
        {
          num: 2,
          title: "Intention positive & Ligne du temps",
          steps: [
            { label: "Schéma émotionnel", detail: "Transe cataleptique. Identification de l'intention positive du Sage intérieur." },
            { label: "Ligne du temps (Tad James)", detail: "Réorganisation des expériences passées avec ressources adultes." },
            { label: "PNL — Niveaux logiques", detail: "Projection dans le futur. Ancrage de l'état de haute énergie positive." },
          ],
        },
        {
          num: 3,
          title: "Schéma de Dickens",
          steps: [
            { label: "Trois projections temporelles", detail: "Passé (coût réel), présent (réalité), futur sans changement." },
            { label: "Changement de vie (alternative)", detail: "Visualisation de la vie transformée. Construction d'une nouvelle identité." },
            { label: "Ancrage multimodal", detail: "Ancre kinesthésique, visuelle, auditive. Accès instantané à l'état ressource." },
          ],
        },
        {
          num: 4,
          title: "Ordalique & Contrat",
          steps: [
            { label: "Travail ordalique (si résistance)", detail: "Paradoxe thérapeutique. Prescription du symptôme ritualisée." },
            { label: "Contrat moral d'arrêt", detail: "Formalisation de la date et du programme de remplacement." },
            { label: "Questionnaire de suivi", detail: "Envoi à J+21 et M+3. Séance de soutien si rechute." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Test psychométrique INTIO", type: "Questionnaire", icon: "📋", desc: "Cartographie des 4 axes — émotionnel, cognitif, somatique, comportemental." },
    { name: "Échelle de motivation", type: "Questionnaire", icon: "📊", desc: "Mesure la motivation au changement. Distingue motivation vers et motivation loin de." },
    { name: "Contrat d'engagement", type: "Document", icon: "✍", desc: "Engagement formel signé par le client. Définit objectifs et programme d'accompagnement." },
    { name: "Questionnaire de suivi J+21", type: "Formulaire", icon: "📅", desc: "Évaluation à 3 semaines pour détecter signes de rechute et ajuster le suivi." },
  ],
  stats: [
    { val: "36%", label: "Taux de succès à 12 mois", sub: "vs 7% sans accompagnement", color: colors.purple },
    { val: "12", label: "Croyances limitantes ciblées", sub: "Recadrage systématique en séance", color: colors.gold },
    { val: "21 j", label: "Durée du sevrage physiologique", sub: "Période critique à accompagner", color: colors.teal },
    { val: "633", label: "Études analysées", sub: "méta-analyse de référence", color: colors.red },
  ],
  croyances: [
    "Je n'ai pas assez de volonté pour changer",
    "Le stress est inévitable dans ma vie",
    "Je suis fait·e comme ça, c'est ma personnalité",
    "Si j'arrête, je vais perdre quelque chose",
    "Les autres n'ont pas mes problèmes",
    "Je me connais, j'ai déjà tout essayé",
    "Le changement durable n'existe pas",
    "Mon passé détermine mon futur",
  ],
};

const pnlDetail: ProtocolDetail = {
  protocolId: 2,
  efficacite: "78%",
  efficaciteSub: "amélioration ressentie sur 4-6 séances",
  description:
    "Identification et transformation des schémas de pensée limitants par des techniques structurées de PNL : recadrage, niveaux logiques, ligne du temps.",
  indications: ["Croyances limitantes identifiées", "Schémas répétitifs cognitifs", "Phobies légères à modérées"],
  contraindications: ["Trauma non traité", "Dissociation sévère"],
  programs: [
    {
      id: "p5",
      title: "Programme 5 séances",
      icon: "◑",
      duration: "5 × 60 min",
      color: colors.gold,
      recommended: true,
      description: "Recadrage cognitif progressif sur les schémas centraux.",
      seances: [
        {
          num: 1,
          title: "Cartographie des croyances",
          steps: [
            { label: "Méta-modèle linguistique", detail: "Identification des distorsions, généralisations et omissions." },
            { label: "Niveaux logiques de Dilts", detail: "Localisation du blocage par niveau (environnement → identité)." },
          ],
        },
        {
          num: 2,
          title: "Recadrage en six étapes",
          steps: [
            { label: "Identifier l'intention positive", detail: "Découverte du bénéfice secondaire du comportement." },
            { label: "Générer des alternatives", detail: "Création d'options préservant l'intention positive." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Méta-modèle PNL", type: "Grille", icon: "🔍", desc: "Questionnement précis pour révéler les distorsions linguistiques." },
    { name: "Submodalités", type: "Technique", icon: "🎚", desc: "Modulation des représentations mentales pour transformer le ressenti." },
  ],
  stats: [
    { val: "78%", label: "Satisfaction client", sub: "sur 4-6 séances", color: colors.gold },
    { val: "5", label: "Niveaux logiques", sub: "modèle de Dilts", color: colors.purple },
  ],
  croyances: ["Je dois être parfait·e", "Si je dis non, on ne m'aimera plus", "Je ne mérite pas de réussir"],
};

const coherenceDetail: ProtocolDetail = {
  protocolId: 3,
  efficacite: "Quotidien",
  efficaciteSub: "Effet mesurable dès 2 semaines",
  description:
    "Régulation du système nerveux autonome via des cycles respiratoires de 5 secondes inspiration / 5 secondes expiration, 6 cycles par minute.",
  indications: ["Stress chronique", "Anxiété généralisée", "Hypertension légère"],
  contraindications: ["Aucune contre-indication majeure"],
  programs: [
    {
      id: "p21",
      title: "Programme 21 jours",
      icon: "◉",
      duration: "3 × 5 min/jour",
      color: colors.teal,
      recommended: true,
      description: "Pratique quotidienne pour ancrer la régulation autonome.",
      seances: [
        {
          num: 1,
          title: "Initiation guidée",
          steps: [
            { label: "Respiration 365", detail: "3 fois par jour, 6 cycles par minute pendant 5 minutes." },
            { label: "Application mobile", detail: "Installation et configuration du guide respiratoire personnalisé." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Application RespiRelax+", type: "App", icon: "📱", desc: "Guide visuel de respiration 365 personnalisable." },
    { name: "Capteur HRV", type: "Outil", icon: "❤️", desc: "Mesure de la variabilité cardiaque pour valider la pratique." },
  ],
  stats: [
    { val: "365", label: "Méthode", sub: "3 fois/jour, 6 resp/min, 5 min", color: colors.teal },
    { val: "21j", label: "Pour ancrer l'habitude", sub: "neuroplasticité", color: colors.gold },
  ],
  croyances: ["Je n'ai pas le temps de respirer", "Le stress fait partie de ma vie professionnelle"],
};

const emdrDetail: ProtocolDetail = {
  protocolId: 4,
  efficacite: "84%",
  efficaciteSub: "rémission ESPT après 8-12 séances",
  description:
    "Désensibilisation et retraitement par mouvements oculaires des souvenirs traumatiques bloqués. Protocole en 8 phases standardisé.",
  indications: ["ESPT", "Souvenirs traumatiques bloqués", "Phobies post-événement"],
  contraindications: ["Dissociation sévère non stabilisée", "Crise suicidaire active"],
  programs: [
    {
      id: "p10",
      title: "Protocole standard EMDR (10 séances)",
      icon: "◈",
      duration: "10 × 60-90 min",
      color: colors.red,
      recommended: true,
      description: "Protocole en 8 phases de Francine Shapiro.",
      seances: [
        {
          num: 1,
          title: "Phase 1-2 : Histoire & préparation",
          steps: [
            { label: "Anamnèse ciblée", detail: "Recueil des souvenirs cibles et de l'histoire traumatique." },
            { label: "Lieu sûr", detail: "Installation de la ressource lieu sûr et stabilisation." },
          ],
        },
      ],
    },
  ],
  outils: [
    { name: "Échelle SUDS", type: "Échelle", icon: "📏", desc: "Subjective Units of Distress, mesure 0-10 du niveau de perturbation." },
    { name: "Tappers bilatéraux", type: "Matériel", icon: "🎯", desc: "Stimulation tactile alternée gauche/droite." },
  ],
  stats: [
    { val: "84%", label: "Rémission ESPT", sub: "après 8-12 séances", color: colors.red },
    { val: "8", label: "Phases du protocole", sub: "standardisé Shapiro", color: colors.teal },
  ],
  croyances: ["Je suis cassé·e", "Je ne serai plus jamais comme avant", "C'était de ma faute"],
};

export const protocolDetails: Record<number, ProtocolDetail> = {
  1: hypnoseDetail,
  2: pnlDetail,
  3: coherenceDetail,
  4: emdrDetail,
  ...spirituelDetails,
  ...tabacDetails,
  ...tcaDetails,
  ...reikiDetails,
  ...deepDetails,
  ...avancesDetails,
  ...technicienDetails,
  ...praticienDetails,
  ...praticienPnlDetails,
};

export function getProtocolDetail(id: number): ProtocolDetail | null {
  return protocolDetails[id] ?? null;
}
