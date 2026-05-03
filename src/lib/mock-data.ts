import type { Client, ClientInfo, Protocol, Appointment, Message, Conversation } from "./types";
import { colors } from "./tokens";

const EMPTY_INFO: ClientInfo = {
  dateNaissance: null,
  sexe: null,
  profession: null,
  situationFamiliale: null,
  adresse: null,
  medecinTraitant: null,
  personneReferente: null,
  antecedentsMedicaux: null,
  antecedentsPsy: null,
  traitementsEnCours: null,
};

export const therapist = {
  name: "Varinka Robert",
  initials: "VR",
  role: "Thérapeute holistique",
};

export const clients: Client[] = [
  {
    id: "1",
    name: "Camille Dupont",
    initials: "CD",
    age: 34,
    email: "camille.d@email.fr",
    phone: "06 12 34 56 78",
    since: "Jan 2025",
    sessions: 12,
    status: "actif",
    color: colors.clientPurple,
    nextRdv: { date: "Lun 21", time: "10:00", type: "Visio" },
    profile: {
      dominante: "Émotionnel-Cognitif",
      axes: { Émotionnel: 78, Cognitif: 65, Somatique: 42, Comportemental: 55 },
      themes: ["Anxiété", "Estime de soi", "Relations"],
      objectifs: ["Gérer le stress quotidien", "Renforcer la confiance"],
      blocages: ["Peur de l'échec", "Auto-critique excessive"],
    },
    testDone: true,
    topProtocols: [
      { id: 1, score: 92, reason: "Profil émotionnel marqué, réceptive à l'imagerie" },
      { id: 2, score: 84, reason: "Cognitif élevé, capable de recadrage" },
      { id: 3, score: 71, reason: "Bonne tolérance somatique" },
    ],
    info: EMPTY_INFO,
  },
  {
    id: "2",
    name: "Marc Lefèvre",
    initials: "ML",
    age: 41,
    email: "marc.l@email.fr",
    phone: "06 87 65 43 21",
    since: "Fév 2025",
    sessions: 8,
    status: "actif",
    color: colors.clientOrange,
    nextRdv: { date: "Mar 22", time: "14:30", type: "Présentiel" },
    profile: {
      dominante: "Somatique",
      axes: { Émotionnel: 45, Cognitif: 52, Somatique: 82, Comportemental: 60 },
      themes: ["Douleurs chroniques", "Burn-out"],
      objectifs: ["Reconnecter au corps", "Apaiser le système nerveux"],
      blocages: ["Hypervigilance", "Tensions musculaires"],
    },
    testDone: true,
    topProtocols: [
      { id: 3, score: 95, reason: "Dominante somatique, idéal pour cohérence cardiaque" },
      { id: 4, score: 81, reason: "EMDR adapté au contexte burn-out" },
    ],
    info: EMPTY_INFO,
  },
  {
    id: "3",
    name: "Sophie Bernard",
    initials: "SB",
    age: 28,
    email: "sophie.b@email.fr",
    phone: "06 23 45 67 89",
    since: "Mar 2025",
    sessions: 3,
    status: "nouveau",
    color: colors.clientTeal,
    nextRdv: { date: "Mer 23", time: "11:00", type: "Visio" },
    profile: null,
    testDone: false,
    topProtocols: [],
    info: EMPTY_INFO,
  },
  {
    id: "4",
    name: "Julien Moreau",
    initials: "JM",
    age: 52,
    email: "julien.m@email.fr",
    phone: "06 34 56 78 90",
    since: "Nov 2024",
    sessions: 18,
    status: "actif",
    color: colors.clientBlue,
    nextRdv: { date: "Jeu 24", time: "16:00", type: "Visio" },
    profile: {
      dominante: "Cognitif-Comportemental",
      axes: { Émotionnel: 50, Cognitif: 80, Somatique: 38, Comportemental: 75 },
      themes: ["Phobies", "TOC légers"],
      objectifs: ["Désensibilisation", "Réduction des rituels"],
      blocages: ["Perfectionnisme", "Pensées intrusives"],
    },
    testDone: true,
    topProtocols: [
      { id: 2, score: 89, reason: "PNL adaptée aux TOC légers" },
      { id: 1, score: 76, reason: "Hypnose en complément" },
    ],
    info: EMPTY_INFO,
  },
];

export const protocols: Protocol[] = [
  {
    id: 1,
    name: "Hypnose Ericksonienne",
    category: "Hypnose",
    practice: "Hypnose Ericksonienne",
    motifs: ["Anxiété & stress", "Estime & confiance en soi", "Addictions"],
    duration: "6-8 séances",
    level: "Intermédiaire",
    tags: ["Anxiété", "Estime de soi", "Imagerie"],
    description:
      "Approche permissive et indirecte qui mobilise les ressources inconscientes du client par la métaphore et la suggestion.",
    color: colors.purple,
    sessions: 7,
    objectives: ["Tabac", "Perte de poids", "Anxiété", "Estime de soi", "Dépendances"],
  },
  {
    id: 2,
    name: "PNL — Recadrage cognitif",
    category: "PNL",
    practice: "PNL",
    motifs: ["Estime & confiance en soi", "Phobies & peurs"],
    duration: "4-6 séances",
    level: "Débutant",
    tags: ["Croyances", "Schémas", "Recadrage"],
    description:
      "Identification et transformation des schémas de pensée limitants par des techniques structurées de PNL.",
    color: colors.gold,
    sessions: 5,
    objectives: ["Croyances limitantes", "Phobies", "Estime de soi", "Confiance en soi"],
  },
  {
    id: 3,
    name: "Cohérence cardiaque",
    category: "Corps-esprit",
    practice: "Cohérence cardiaque",
    motifs: ["Anxiété & stress", "Sommeil & insomnie", "Burn-out & fatigue"],
    duration: "Quotidien sur 3 semaines",
    level: "Débutant",
    tags: ["Stress", "Respiration", "ANS"],
    description:
      "Régulation du système nerveux autonome via des cycles respiratoires de 5 secondes inspiration / 5 secondes expiration.",
    color: colors.teal,
    sessions: 21,
    objectives: ["Stress", "Anxiété", "Sommeil", "Hypertension", "Burn-out"],
  },
  {
    id: 4,
    name: "EMDR — Trauma",
    category: "Trauma",
    practice: "EMDR",
    motifs: ["Trauma & deuil", "Phobies & peurs"],
    duration: "8-12 séances",
    level: "Avancé",
    tags: ["Trauma", "Stimulation bilatérale", "Désensibilisation"],
    description:
      "Désensibilisation et retraitement par mouvements oculaires des souvenirs traumatiques bloqués.",
    color: colors.red,
    sessions: 10,
    objectives: ["Trauma", "ESPT", "Phobies", "Deuil", "Anxiété"],
  },
];

export const appointments: Appointment[] = [
  { id: "1", clientId: "1", day: "Lun", date: 21, time: "10:00", duration: 60, mode: "visio", protocol: "Hypnose" },
  { id: "2", clientId: "2", day: "Mar", date: 22, time: "14:30", duration: 60, mode: "presentiel", protocol: "Cohérence cardiaque" },
  { id: "3", clientId: "3", day: "Mer", date: 23, time: "11:00", duration: 45, mode: "visio", protocol: null },
  { id: "4", clientId: "4", day: "Jeu", date: 24, time: "16:00", duration: 60, mode: "visio", protocol: "PNL" },
  { id: "5", clientId: "1", day: "Ven", date: 25, time: "09:30", duration: 60, mode: "visio", protocol: "Hypnose" },
];

export const messages: Message[] = [
  { id: "1", clientId: "1", preview: "Merci pour la séance d'hier, je me sens vraiment…", time: "09:42", unread: true },
  { id: "2", clientId: "4", preview: "Est-ce qu'on peut décaler de 30 min jeudi ?", time: "Hier", unread: true },
  { id: "3", clientId: "2", preview: "Les exercices respi marchent super bien.", time: "Lun", unread: false },
];

export const conversations: Conversation[] = [
  {
    clientId: "1",
    messages: [
      { id: "1", from: "client", time: "Mar 09:30", body: "Bonjour Varinka, j'ai bien dormi cette nuit, première fois depuis longtemps." },
      { id: "2", from: "therapist", time: "Mar 09:35", body: "Excellente nouvelle Camille ! Les exercices ancrent bien." },
      { id: "3", from: "client", time: "Mer 09:42", body: "Merci pour la séance d'hier, je me sens vraiment apaisée." },
    ],
  },
  {
    clientId: "2",
    messages: [
      { id: "1", from: "therapist", time: "Lun 11:00", body: "Pensez à pratiquer la cohérence cardiaque 3× / jour." },
      { id: "2", from: "client", time: "Lun 18:20", body: "Les exercices respi marchent super bien." },
    ],
  },
  {
    clientId: "4",
    messages: [
      { id: "1", from: "client", time: "Hier 17:10", body: "Est-ce qu'on peut décaler de 30 min jeudi ?" },
      { id: "2", from: "client", time: "Hier 17:11", body: "Réunion qui s'éternise, désolé." },
    ],
  },
];

export const weeklyStats = {
  clientsActifs: 24,
  clientsActifsDelta: "+3 ce mois",
  seances: 18,
  seancesDelta: "5 cette semaine",
  tauxSuivi: "92%",
  tauxSuiviDelta: "+4pt",
  protocolesActifs: 7,
  protocolesActifsDelta: "2 nouveaux",
};
