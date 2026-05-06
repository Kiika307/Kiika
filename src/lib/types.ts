export type ClientStatus = "actif" | "nouveau" | "inactif";

export interface ProfileAxes {
  [key: string]: number;
  Émotionnel: number;
  Cognitif: number;
  Somatique: number;
  Comportemental: number;
}

export interface ClientProfile {
  dominante: string;
  axes: ProfileAxes;
  themes: string[];
  objectifs: string[];
  blocages: string[];
}

export interface SeleneSummary {
  scores: Record<string, number>;        // { ESSENCE: 73, ALTRUISME: 62, ... }
  dominante: string;                     // 'ESSENCE' | 'ALTRUISME' | ...
  top3: string[];                        // ['ESSENCE','ANALYSE','LOYAUTE']
  takenAt: string;                       // ISO datetime
}

export interface Client {
  id: string;
  name: string;
  initials: string;
  age: number;
  email: string;
  phone: string;
  since: string;
  sessions: number;
  status: ClientStatus;
  color: string;
  nextRdv: { date: string; time: string; type: string } | null;
  profile: ClientProfile | null;
  testDone: boolean;
  topProtocols: Array<{ id: number; score: number; reason: string }>;
  info: ClientInfo;
  selene: SeleneSummary | null;
}

export type Sexe = "F" | "M" | "Autre" | "Non précisé";

export type NoteKind = "libre" | "compte_rendu";

export interface ClientNote {
  id: string;
  clientId: string;
  appointmentId: string | null;
  kind: NoteKind;
  title: string | null;
  body: string;
  createdAt: string;
  updatedAt: string;
}

export interface SessionHistoryEntry {
  appointmentId: string;
  num: number;
  startsAt: string;
  dateLabel: string;
  timeLabel: string;
  mode: "visio" | "presentiel";
  status: "scheduled" | "done" | "cancelled";
  protocolId: number | null;
  protocolName: string | null;
  protocolColor: string | null;
  compteRendu: ClientNote | null;
  moodBefore: number | null;
  moodAfter: number | null;
  moodNote: string | null;
}

export type PlanStatus = "planned" | "in_progress" | "done" | "abandoned";

export interface ClientProtocolPlan {
  id: string;
  clientId: string;
  protocolId: number;
  protocolName: string;
  protocolColor: string;
  practice: string;
  status: PlanStatus;
  sessionsDone: number;
  sessionsTotal: number | null;
  notes: string | null;
  startedAt: string | null;
  completedAt: string | null;
  createdAt: string;
}

export type SignatureMethod = "electronique" | "papier" | "verbal";

export interface ClientConsent {
  id: string;
  clientId: string;
  version: string;
  signedAt: string;
  signatureMethod: SignatureMethod;
  notes: string | null;
}

export type DocumentCategory = "questionnaire" | "ordonnance" | "compte_rendu_externe" | "consentement" | "autre";

export interface ClientDocument {
  id: string;
  clientId: string;
  storagePath: string;
  filename: string;
  mimeType: string | null;
  sizeBytes: number | null;
  category: DocumentCategory | null;
  description: string | null;
  createdAt: string;
}

export type ModeFinancement = "autofinancement" | "cpf" | "mutuelle" | "employeur" | "autre";
export type InvoiceStatut = "en_attente" | "envoyee" | "reglee" | "relance" | "annulee";

export interface Invoice {
  id: string;
  clientId: string;
  appointmentId: string | null;
  numero: string;
  montant: number;
  montantRegle: number;
  modeFinancement: ModeFinancement | null;
  statut: InvoiceStatut;
  dateEmission: string;
  dateEcheance: string | null;
  dateReglement: string | null;
  notes: string | null;
  pdfUrl: string | null;
  createdAt: string;
}

export interface ClientTask {
  id: string;
  clientId: string;
  appointmentId: string | null;
  title: string;
  description: string | null;
  dueDate: string | null;
  completedAt: string | null;
  clientFeedback: string | null;
  createdAt: string;
}

export interface ProfileSnapshot {
  id: string;
  clientId: string;
  axes: ProfileAxes;
  dominante: string | null;
  note: string | null;
  takenAt: string;
}

export interface ClientInfo {
  dateNaissance: string | null;
  sexe: Sexe | null;
  profession: string | null;
  situationFamiliale: string | null;
  adresse: string | null;
  medecinTraitant: string | null;
  personneReferente: string | null;
  antecedentsMedicaux: string | null;
  antecedentsPsy: string | null;
  traitementsEnCours: string | null;
}

export interface Protocol {
  id: number;
  name: string;
  category: string;
  practice: string;
  motifs: string[];
  duration: string;
  level: "Débutant" | "Intermédiaire" | "Avancé";
  tags: string[];
  description: string;
  color: string;
  sessions: number;
  objectives: string[];
  source: string | null;
}

export interface Appointment {
  id: string;
  clientId: string;
  day: string;
  date: number;
  time: string;
  duration: number;
  mode: "visio" | "presentiel";
  protocol: string | null;
}

export interface Message {
  id: string;
  clientId: string;
  preview: string;
  time: string;
  unread: boolean;
}

export interface ChatMessage {
  id: string;
  from: "therapist" | "client";
  body: string;
  time: string;
}

export interface Conversation {
  clientId: string;
  messages: ChatMessage[];
}

export interface ProtoStep {
  label: string;
  detail: string;
}

export interface ProtoSeance {
  num: number;
  title: string;
  steps: ProtoStep[];
}

export interface ProtoOutil {
  name: string;
  type: string;
  icon: string;
  desc: string;
}

export interface ProtoStat {
  val: string;
  label: string;
  sub: string;
  color: string;
}

export interface ProtoProgram {
  id: string;
  title: string;
  icon: string;
  duration: string;
  color: string;
  recommended: boolean;
  description: string;
  seances: ProtoSeance[];
}

export interface ProtocolDetail {
  protocolId: number;
  efficacite: string;
  efficaciteSub: string;
  description: string;
  indications: string[];
  contraindications: string[];
  programs: ProtoProgram[];
  outils: ProtoOutil[];
  stats: ProtoStat[];
  croyances: string[];
}

// ============================================================
// KIIKA — analyses sauvegardées par client
// ============================================================

export interface KiikaAnalysisObjectives {
  themes: string[];
  objectifs: string[];
  blocages: string[];
  dominante: string | null;
}

export interface KiikaAnalysisRecommendation {
  protocolId: number;
  rank: number;
  reasoning: string;
}

export interface ClientKiikaAnalysis {
  id: string;
  clientId: string;
  generatedAt: string;
  objectives: KiikaAnalysisObjectives;
  recommended: KiikaAnalysisRecommendation[];
  insight: string | null;
  alternativeAngles: string[];
  cautionPoints: string[];
  candidatesCount: number;
  model: string;
}
