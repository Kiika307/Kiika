import { createClient } from "@/lib/supabase/server";
import { mapNoteRow, type ClientNoteRow } from "@/lib/data-notes-helpers";
import type {
  Client,
  Appointment,
  Conversation,
  ChatMessage,
  Protocol,
  ClientNote,
  NoteKind,
  SessionHistoryEntry,
  ClientProtocolPlan,
  ProfileSnapshot,
  ProfileAxes,
  ClientTask,
  Invoice,
  InvoiceStatut,
  ModeFinancement,
  ClientDocument,
  DocumentCategory,
  ClientConsent,
  SignatureMethod,
  ClientKiikaAnalysis,
  ClientKiikaCarePlan,
  KiikaAnalysisObjectives,
  KiikaAnalysisRecommendation,
  KiikaCarePlanSession,
} from "@/lib/types";

const PALETTE = ["#7C5CBF", "#D4622A", "#2E8A7B", "#5B8FB9", "#C8A030"];

function initials(fullName: string): string {
  return fullName
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .join("");
}

function colorFor(idx: number, fallback?: string | null): string {
  if (fallback) return fallback;
  return PALETTE[idx % PALETTE.length];
}

export interface TherapistInfo {
  id: string;
  fullName: string;
  initials: string;
  role: string;
  avatarUrl: string | null;
  remindersEnabled: boolean;
}

export async function getTherapist(): Promise<TherapistInfo | null> {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  if (!auth.user) return null;

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name, role, avatar_url, reminders_enabled")
    .eq("id", auth.user.id)
    .maybeSingle();

  if (!profile) return null;
  // Roles either come from a small known set ("admin") or from the user's own
  // free-text title (e.g. "Hypnothérapeute"). Display the verbatim title when
  // it's not a system role, else map to a friendly label.
  const rawRole = profile.role ?? "";
  const role =
    rawRole === "admin"
      ? "Administrateur"
      : rawRole === "user" || rawRole === ""
        ? "Thérapeute holistique"
        : rawRole;
  return {
    id: profile.id,
    fullName: profile.full_name,
    initials: initials(profile.full_name),
    role,
    avatarUrl: profile.avatar_url ?? null,
    remindersEnabled: profile.reminders_enabled ?? true,
  };
}

export interface DashboardStats {
  clientsActifs: number;
  clientsNouveaux: number;
  seancesSemaine: number;
  seancesTotal: number;
  tauxSuivi: number;
  protocolesActifs: number;
}

export async function getDashboardStats(): Promise<DashboardStats> {
  const supabase = await createClient();

  const startOfWeek = new Date();
  const day = (startOfWeek.getDay() + 6) % 7;
  startOfWeek.setDate(startOfWeek.getDate() - day);
  startOfWeek.setHours(0, 0, 0, 0);
  const endOfWeek = new Date(startOfWeek);
  endOfWeek.setDate(endOfWeek.getDate() + 7);

  const [actifs, nouveaux, seancesWeek, seancesTotal, sessionsDone, protocolesActifs] =
    await Promise.all([
      supabase.from("clients").select("id", { count: "exact", head: true }).neq("status", "inactif"),
      supabase.from("clients").select("id", { count: "exact", head: true }).eq("status", "nouveau"),
      supabase
        .from("appointments")
        .select("id", { count: "exact", head: true })
        .gte("starts_at", startOfWeek.toISOString())
        .lt("starts_at", endOfWeek.toISOString()),
      supabase.from("appointments").select("id", { count: "exact", head: true }),
      supabase.from("appointments").select("id", { count: "exact", head: true }).eq("status", "done"),
      supabase
        .from("appointments")
        .select("protocol_id", { count: "exact", head: true })
        .not("protocol_id", "is", null),
    ]);

  const seancesTotalCount = seancesTotal.count ?? 0;
  const sessionsDoneCount = sessionsDone.count ?? 0;
  const tauxSuivi = seancesTotalCount > 0 ? Math.round((sessionsDoneCount / seancesTotalCount) * 100) : 0;

  return {
    clientsActifs: actifs.count ?? 0,
    clientsNouveaux: nouveaux.count ?? 0,
    seancesSemaine: seancesWeek.count ?? 0,
    seancesTotal: seancesTotalCount,
    tauxSuivi,
    protocolesActifs: protocolesActifs.count ?? 0,
  };
}

export interface UpcomingAppointment {
  id: string;
  clientId: string;
  clientName: string;
  initials: string;
  color: string;
  startsAt: string;
  mode: "visio" | "presentiel";
  dayLabel: string;
  timeLabel: string;
}

const DAY_LABELS = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const DT_FMT = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" });

export async function getUpcomingAppointments(limit = 4): Promise<UpcomingAppointment[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("appointments")
    .select("id, starts_at, mode, client:clients(id, full_name, color)")
    .gte("starts_at", new Date().toISOString())
    .order("starts_at", { ascending: true })
    .limit(limit);

  return (data ?? []).map((row, i) => {
    const client = (row.client as unknown) as { id: string; full_name: string; color: string | null } | null;
    const date = new Date(row.starts_at);
    const name = client?.full_name ?? "—";
    return {
      id: row.id,
      clientId: client?.id ?? "",
      clientName: name,
      initials: initials(name),
      color: colorFor(i, client?.color ?? null),
      startsAt: row.starts_at,
      mode: row.mode as "visio" | "presentiel",
      dayLabel: `${DAY_LABELS[date.getDay()]} ${date.getDate()}`,
      timeLabel: DT_FMT.format(date),
    };
  });
}

export interface RecentMessage {
  id: string;
  clientId: string;
  clientName: string;
  initials: string;
  color: string;
  preview: string;
  timeLabel: string;
  unread: boolean;
}

export async function getRecentMessages(limit = 5): Promise<RecentMessage[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("messages")
    .select("id, body, created_at, read_at, from_role, client:clients(id, full_name, color)")
    .eq("from_role", "client")
    .order("created_at", { ascending: false })
    .limit(limit);

  return (data ?? []).map((row, i) => {
    const client = (row.client as unknown) as { id: string; full_name: string; color: string | null } | null;
    const name = client?.full_name ?? "—";
    const date = new Date(row.created_at);
    return {
      id: row.id,
      clientId: client?.id ?? "",
      clientName: name,
      initials: initials(name),
      color: colorFor(i, client?.color ?? null),
      preview: row.body,
      timeLabel: DT_FMT.format(date),
      unread: !row.read_at,
    };
  });
}

export interface ClientRow {
  id: string;
  fullName: string;
  initials: string;
  email: string | null;
  phone: string | null;
  age: number | null;
  status: "actif" | "nouveau" | "inactif";
  color: string;
  testDone: boolean;
  dominante: string | null;
  themes: string[];
  objectifs: string[];
  blocages: string[];
}

export async function getClients(): Promise<ClientRow[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("clients")
    .select(
      "id, full_name, email, phone, age, status, color, test_done, profile_dominante, themes, objectifs, blocages",
    )
    .order("created_at", { ascending: true });

  return (data ?? []).map((row, i) => ({
    id: row.id,
    fullName: row.full_name,
    initials: initials(row.full_name),
    email: row.email,
    phone: row.phone,
    age: row.age,
    status: row.status,
    color: colorFor(i, row.color),
    testDone: row.test_done,
    dominante: row.profile_dominante,
    themes: row.themes ?? [],
    objectifs: row.objectifs ?? [],
    blocages: row.blocages ?? [],
  }));
}

const MONTHS_FR = ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Août", "Sep", "Oct", "Nov", "Déc"];
const TIME_FMT = new Intl.DateTimeFormat("fr-FR", { hour: "2-digit", minute: "2-digit" });

interface ClientRowDb {
  id: string;
  full_name: string;
  email: string | null;
  phone: string | null;
  age: number | null;
  status: "actif" | "nouveau" | "inactif";
  color: string | null;
  test_done: boolean;
  profile_axes: { [k: string]: number } | null;
  profile_dominante: string | null;
  themes: string[] | null;
  objectifs: string[] | null;
  blocages: string[] | null;
  created_at: string;
  date_naissance: string | null;
  sexe: "F" | "M" | "Autre" | "Non précisé" | null;
  profession: string | null;
  situation_familiale: string | null;
  adresse: string | null;
  medecin_traitant: string | null;
  personne_referente: string | null;
  antecedents_medicaux: string | null;
  antecedents_psy: string | null;
  traitements_en_cours: string | null;
  selene_scores: Record<string, number> | null;
  selene_dominante: string | null;
  selene_top3: string[] | null;
  selene_taken_at: string | null;
  reminders_disabled: boolean | null;
}

export async function getClientsRich(): Promise<Client[]> {
  const supabase = await createClient();
  const { data: rows } = await supabase
    .from("clients")
    .select(
      "id, full_name, email, phone, age, status, color, test_done, profile_axes, profile_dominante, themes, objectifs, blocages, created_at, date_naissance, sexe, profession, situation_familiale, adresse, medecin_traitant, personne_referente, antecedents_medicaux, antecedents_psy, traitements_en_cours, selene_scores, selene_dominante, selene_top3, selene_taken_at, reminders_disabled",
    )
    .order("created_at", { ascending: true });

  const clientRows = (rows ?? []) as ClientRowDb[];
  if (clientRows.length === 0) return [];

  const ids = clientRows.map((c) => c.id);
  const [{ data: apptCounts }, { data: nextAppts }] = await Promise.all([
    supabase
      .from("appointments")
      .select("client_id")
      .in("client_id", ids),
    supabase
      .from("appointments")
      .select("client_id, starts_at, mode")
      .in("client_id", ids)
      .gte("starts_at", new Date().toISOString())
      .order("starts_at", { ascending: true }),
  ]);

  const counts = new Map<string, number>();
  (apptCounts ?? []).forEach((r: { client_id: string }) => {
    counts.set(r.client_id, (counts.get(r.client_id) ?? 0) + 1);
  });
  const nextByClient = new Map<string, { starts_at: string; mode: string }>();
  (nextAppts ?? []).forEach((r: { client_id: string; starts_at: string; mode: string }) => {
    if (!nextByClient.has(r.client_id)) nextByClient.set(r.client_id, r);
  });

  return clientRows.map((row, i): Client => {
    const next = nextByClient.get(row.id);
    const created = new Date(row.created_at);
    const since = `${MONTHS_FR[created.getMonth()]} ${created.getFullYear()}`;
    const axes = row.profile_axes ?? null;
    const profile = row.test_done && row.profile_dominante
      ? {
          dominante: row.profile_dominante,
          axes: {
            "Émotionnel": axes?.["Émotionnel"] ?? 50,
            Cognitif: axes?.Cognitif ?? 50,
            Somatique: axes?.Somatique ?? 50,
            Comportemental: axes?.Comportemental ?? 50,
          },
          themes: row.themes ?? [],
          objectifs: row.objectifs ?? [],
          blocages: row.blocages ?? [],
        }
      : null;
    return {
      id: row.id,
      name: row.full_name,
      initials: initials(row.full_name),
      age: row.age ?? 0,
      email: row.email ?? "",
      phone: row.phone ?? "",
      since,
      sessions: counts.get(row.id) ?? 0,
      status: row.status,
      color: colorFor(i, row.color),
      nextRdv: next
        ? {
            date: `${["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"][new Date(next.starts_at).getDay()]} ${new Date(next.starts_at).getDate()}`,
            time: TIME_FMT.format(new Date(next.starts_at)),
            type: next.mode === "visio" ? "Visio" : "Présentiel",
          }
        : null,
      profile,
      testDone: row.test_done,
      topProtocols: [],
      remindersDisabled: row.reminders_disabled ?? false,
      info: {
        dateNaissance: row.date_naissance,
        sexe: row.sexe,
        profession: row.profession,
        situationFamiliale: row.situation_familiale,
        adresse: row.adresse,
        medecinTraitant: row.medecin_traitant,
        personneReferente: row.personne_referente,
        antecedentsMedicaux: row.antecedents_medicaux,
        antecedentsPsy: row.antecedents_psy,
        traitementsEnCours: row.traitements_en_cours,
      },
      selene:
        row.selene_scores && row.selene_dominante && row.selene_top3 && row.selene_taken_at
          ? {
              scores: row.selene_scores,
              dominante: row.selene_dominante,
              top3: row.selene_top3,
              takenAt: row.selene_taken_at,
            }
          : null,
    };
  });
}

const DAY_SHORT = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];

export async function getAppointmentsForWeek(): Promise<Appointment[]> {
  const supabase = await createClient();
  const start = new Date();
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  start.setHours(0, 0, 0, 0);
  const end = new Date(start);
  end.setDate(end.getDate() + 7);

  const { data } = await supabase
    .from("appointments")
    .select("id, client_id, starts_at, duration_min, mode, protocol_id")
    .gte("starts_at", start.toISOString())
    .lt("starts_at", end.toISOString())
    .order("starts_at", { ascending: true });

  return (data ?? []).map((row): Appointment => {
    const d = new Date(row.starts_at);
    return {
      id: row.id,
      clientId: row.client_id,
      day: DAY_SHORT[d.getDay()],
      date: d.getDate(),
      time: TIME_FMT.format(d),
      duration: row.duration_min,
      mode: row.mode as "visio" | "presentiel",
      protocol: null,
    };
  });
}

export async function getVisioAppointments(): Promise<Appointment[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("appointments")
    .select("id, client_id, starts_at, duration_min, mode, protocol_id")
    .eq("mode", "visio")
    .gte("starts_at", new Date().toISOString())
    .order("starts_at", { ascending: true });

  return (data ?? []).map((row): Appointment => {
    const d = new Date(row.starts_at);
    return {
      id: row.id,
      clientId: row.client_id,
      day: DAY_SHORT[d.getDay()],
      date: d.getDate(),
      time: TIME_FMT.format(d),
      duration: row.duration_min,
      mode: "visio",
      protocol: null,
    };
  });
}

export async function getConversations(): Promise<Conversation[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("messages")
    .select("id, client_id, from_role, body, created_at")
    .order("created_at", { ascending: true });

  const map = new Map<string, ChatMessage[]>();
  (data ?? []).forEach((row) => {
    const msg: ChatMessage = {
      id: row.id,
      from: row.from_role as "therapist" | "client",
      body: row.body,
      time: TIME_FMT.format(new Date(row.created_at)),
    };
    const arr = map.get(row.client_id) ?? [];
    arr.push(msg);
    map.set(row.client_id, arr);
  });

  return Array.from(map.entries()).map(([clientId, messages]) => ({ clientId, messages }));
}

export async function getProtocols(): Promise<Protocol[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("protocols")
    .select("id, name, category, practice, motifs, description, duration, level, tags, color, sessions, objectives, source")
    .order("id", { ascending: true });

  return (data ?? []).map((row): Protocol => ({
    id: row.id,
    name: row.name,
    category: row.category,
    practice: row.practice ?? "PNL",
    motifs: row.motifs ?? [],
    description: row.description,
    duration: row.duration,
    level: row.level as Protocol["level"],
    tags: row.tags ?? [],
    color: row.color,
    sessions: row.sessions,
    objectives: row.objectives ?? [],
    source: row.source ?? null,
  }));
}

export async function getProtocolById(id: number): Promise<Protocol | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("protocols")
    .select("id, name, category, practice, motifs, description, duration, level, tags, color, sessions, objectives, source")
    .eq("id", id)
    .maybeSingle();

  if (!data) return null;
  return {
    id: data.id,
    name: data.name,
    category: data.category,
    practice: data.practice ?? "PNL",
    motifs: data.motifs ?? [],
    description: data.description,
    duration: data.duration,
    level: data.level as Protocol["level"],
    tags: data.tags ?? [],
    color: data.color,
    sessions: data.sessions,
    objectives: data.objectives ?? [],
    source: data.source ?? null,
  };
}

export async function getClientNotes(clientId: string): Promise<ClientNote[]> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_notes")
    .select("id, client_id, appointment_id, kind, title, body, created_at, updated_at")
    .eq("client_id", clientId)
    .order("created_at", { ascending: false });

  return ((data ?? []) as ClientNoteRow[]).map(mapNoteRow);
}

export async function getClientHistory(clientId: string): Promise<SessionHistoryEntry[]> {
  const supabase = await createClient();
  const [{ data: appts }, { data: notes }] = await Promise.all([
    supabase
      .from("appointments")
      .select("id, starts_at, mode, status, protocol_id, mood_before, mood_after, mood_note, protocol:protocols(name, color)")
      .eq("client_id", clientId)
      .order("starts_at", { ascending: false }),
    supabase
      .from("client_notes")
      .select("id, client_id, appointment_id, kind, title, body, created_at, updated_at")
      .eq("client_id", clientId)
      .eq("kind", "compte_rendu"),
  ]);

  const byAppt = new Map<string, ClientNote>();
  ((notes ?? []) as ClientNoteRow[]).forEach((n) => {
    if (n.appointment_id) byAppt.set(n.appointment_id, mapNoteRow(n));
  });

  type ApptRow = {
    id: string;
    starts_at: string;
    mode: string;
    status: string;
    protocol_id: number | null;
    mood_before: number | null;
    mood_after: number | null;
    mood_note: string | null;
    protocol: { name: string; color: string } | null;
  };
  const rows = (appts ?? []) as unknown as ApptRow[];
  const total = rows.length;

  return rows.map((r, idx) => {
    const d = new Date(r.starts_at);
    return {
      appointmentId: r.id,
      num: total - idx,
      startsAt: r.starts_at,
      dateLabel: d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }),
      timeLabel: TIME_FMT.format(d),
      mode: r.mode as "visio" | "presentiel",
      status: r.status as "scheduled" | "done" | "cancelled",
      protocolId: r.protocol_id,
      protocolName: r.protocol?.name ?? null,
      protocolColor: r.protocol?.color ?? null,
      compteRendu: byAppt.get(r.id) ?? null,
      moodBefore: r.mood_before,
      moodAfter: r.mood_after,
      moodNote: r.mood_note,
    };
  });
}

export async function getAllNotesByClient(clientIds: string[]): Promise<Record<string, ClientNote[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_notes")
    .select("id, client_id, appointment_id, kind, title, body, created_at, updated_at")
    .in("client_id", clientIds)
    .order("created_at", { ascending: false });
  const out: Record<string, ClientNote[]> = {};
  ((data ?? []) as ClientNoteRow[]).forEach((row) => {
    const note = mapNoteRow(row);
    (out[note.clientId] ??= []).push(note);
  });
  return out;
}

export async function getAllHistoryByClient(
  clientIds: string[],
): Promise<Record<string, SessionHistoryEntry[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const [{ data: appts }, { data: notes }] = await Promise.all([
    supabase
      .from("appointments")
      .select("id, client_id, starts_at, mode, status, protocol_id, mood_before, mood_after, mood_note, protocol:protocols(name, color)")
      .in("client_id", clientIds)
      .order("starts_at", { ascending: false }),
    supabase
      .from("client_notes")
      .select("id, client_id, appointment_id, kind, title, body, created_at, updated_at")
      .in("client_id", clientIds)
      .eq("kind", "compte_rendu"),
  ]);

  const noteByAppt = new Map<string, ClientNote>();
  ((notes ?? []) as ClientNoteRow[]).forEach((n) => {
    if (n.appointment_id) noteByAppt.set(n.appointment_id, mapNoteRow(n));
  });

  type ApptRow = {
    id: string;
    client_id: string;
    starts_at: string;
    mode: string;
    status: string;
    protocol_id: number | null;
    mood_before: number | null;
    mood_after: number | null;
    mood_note: string | null;
    protocol: { name: string; color: string } | null;
  };

  const grouped = new Map<string, ApptRow[]>();
  ((appts ?? []) as unknown as ApptRow[]).forEach((r) => {
    const list = grouped.get(r.client_id) ?? [];
    list.push(r);
    grouped.set(r.client_id, list);
  });

  const out: Record<string, SessionHistoryEntry[]> = {};
  for (const [clientId, rows] of grouped.entries()) {
    const total = rows.length;
    out[clientId] = rows.map((r, idx) => {
      const d = new Date(r.starts_at);
      return {
        appointmentId: r.id,
        num: total - idx,
        startsAt: r.starts_at,
        dateLabel: d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" }),
        timeLabel: TIME_FMT.format(d),
        mode: r.mode as "visio" | "presentiel",
        status: r.status as "scheduled" | "done" | "cancelled",
        protocolId: r.protocol_id,
        protocolName: r.protocol?.name ?? null,
        protocolColor: r.protocol?.color ?? null,
        compteRendu: noteByAppt.get(r.id) ?? null,
        moodBefore: r.mood_before,
        moodAfter: r.mood_after,
        moodNote: r.mood_note,
      };
    });
  }
  return out;
}

interface ClientProtocolRow {
  id: string;
  client_id: string;
  protocol_id: number;
  status: string;
  sessions_done: number;
  sessions_total: number | null;
  notes: string | null;
  started_at: string | null;
  completed_at: string | null;
  created_at: string;
  protocol: { name: string; color: string; practice: string | null } | null;
}

function mapPlanRow(r: ClientProtocolRow): ClientProtocolPlan {
  return {
    id: r.id,
    clientId: r.client_id,
    protocolId: r.protocol_id,
    protocolName: r.protocol?.name ?? "—",
    protocolColor: r.protocol?.color ?? "#7C5CBF",
    practice: r.protocol?.practice ?? "PNL",
    status: r.status as ClientProtocolPlan["status"],
    sessionsDone: r.sessions_done,
    sessionsTotal: r.sessions_total,
    notes: r.notes,
    startedAt: r.started_at,
    completedAt: r.completed_at,
    createdAt: r.created_at,
  };
}

export async function getAllPlansByClient(
  clientIds: string[],
): Promise<Record<string, ClientProtocolPlan[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_protocols")
    .select("id, client_id, protocol_id, status, sessions_done, sessions_total, notes, started_at, completed_at, created_at, protocol:protocols(name, color, practice)")
    .in("client_id", clientIds)
    .order("created_at", { ascending: false });

  const out: Record<string, ClientProtocolPlan[]> = {};
  ((data ?? []) as unknown as ClientProtocolRow[]).forEach((row) => {
    const plan = mapPlanRow(row);
    (out[plan.clientId] ??= []).push(plan);
  });
  return out;
}

export async function getAllSnapshotsByClient(
  clientIds: string[],
): Promise<Record<string, ProfileSnapshot[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_profile_snapshots")
    .select("id, client_id, axes, dominante, note, taken_at")
    .in("client_id", clientIds)
    .order("taken_at", { ascending: true });

  type SnapRow = {
    id: string;
    client_id: string;
    axes: ProfileAxes;
    dominante: string | null;
    note: string | null;
    taken_at: string;
  };
  const out: Record<string, ProfileSnapshot[]> = {};
  ((data ?? []) as SnapRow[]).forEach((row) => {
    const snap: ProfileSnapshot = {
      id: row.id,
      clientId: row.client_id,
      axes: row.axes,
      dominante: row.dominante,
      note: row.note,
      takenAt: row.taken_at,
    };
    (out[snap.clientId] ??= []).push(snap);
  });
  return out;
}

interface TaskRow {
  id: string;
  client_id: string;
  appointment_id: string | null;
  title: string;
  description: string | null;
  due_date: string | null;
  completed_at: string | null;
  client_feedback: string | null;
  created_at: string;
}

export async function getAllTasksByClient(
  clientIds: string[],
): Promise<Record<string, ClientTask[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_tasks")
    .select("id, client_id, appointment_id, title, description, due_date, completed_at, client_feedback, created_at")
    .in("client_id", clientIds)
    .order("completed_at", { ascending: true, nullsFirst: true })
    .order("due_date", { ascending: true, nullsFirst: false })
    .order("created_at", { ascending: false });

  const out: Record<string, ClientTask[]> = {};
  ((data ?? []) as TaskRow[]).forEach((row) => {
    const task: ClientTask = {
      id: row.id,
      clientId: row.client_id,
      appointmentId: row.appointment_id,
      title: row.title,
      description: row.description,
      dueDate: row.due_date,
      completedAt: row.completed_at,
      clientFeedback: row.client_feedback,
      createdAt: row.created_at,
    };
    (out[task.clientId] ??= []).push(task);
  });
  return out;
}

interface InvoiceRow {
  id: string;
  client_id: string;
  appointment_id: string | null;
  numero: string;
  montant: string | number;
  montant_regle: string | number;
  mode_financement: string | null;
  statut: string;
  date_emission: string;
  date_echeance: string | null;
  date_reglement: string | null;
  notes: string | null;
  pdf_url: string | null;
  created_at: string;
}

export async function getAllInvoicesByClient(
  clientIds: string[],
): Promise<Record<string, Invoice[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("invoices")
    .select("id, client_id, appointment_id, numero, montant, montant_regle, mode_financement, statut, date_emission, date_echeance, date_reglement, notes, pdf_url, created_at")
    .in("client_id", clientIds)
    .order("date_emission", { ascending: false });

  const out: Record<string, Invoice[]> = {};
  ((data ?? []) as InvoiceRow[]).forEach((row) => {
    const inv: Invoice = {
      id: row.id,
      clientId: row.client_id,
      appointmentId: row.appointment_id,
      numero: row.numero,
      montant: Number(row.montant),
      montantRegle: Number(row.montant_regle),
      modeFinancement: row.mode_financement as ModeFinancement | null,
      statut: row.statut as InvoiceStatut,
      dateEmission: row.date_emission,
      dateEcheance: row.date_echeance,
      dateReglement: row.date_reglement,
      notes: row.notes,
      pdfUrl: row.pdf_url,
      createdAt: row.created_at,
    };
    (out[inv.clientId] ??= []).push(inv);
  });
  return out;
}

interface DocumentRow {
  id: string;
  client_id: string;
  storage_path: string;
  filename: string;
  mime_type: string | null;
  size_bytes: number | null;
  category: string | null;
  description: string | null;
  created_at: string;
}

export async function getAllDocumentsByClient(
  clientIds: string[],
): Promise<Record<string, ClientDocument[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_documents")
    .select("id, client_id, storage_path, filename, mime_type, size_bytes, category, description, created_at")
    .in("client_id", clientIds)
    .order("created_at", { ascending: false });

  const out: Record<string, ClientDocument[]> = {};
  ((data ?? []) as DocumentRow[]).forEach((row) => {
    const doc: ClientDocument = {
      id: row.id,
      clientId: row.client_id,
      storagePath: row.storage_path,
      filename: row.filename,
      mimeType: row.mime_type,
      sizeBytes: row.size_bytes,
      category: row.category as DocumentCategory | null,
      description: row.description,
      createdAt: row.created_at,
    };
    (out[doc.clientId] ??= []).push(doc);
  });
  return out;
}

interface ConsentRow {
  id: string;
  client_id: string;
  version: string;
  signed_at: string;
  signature_method: string;
  notes: string | null;
}

export async function getAllConsentsByClient(
  clientIds: string[],
): Promise<Record<string, ClientConsent[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_consents")
    .select("id, client_id, version, signed_at, signature_method, notes")
    .in("client_id", clientIds)
    .order("signed_at", { ascending: false });

  const out: Record<string, ClientConsent[]> = {};
  ((data ?? []) as ConsentRow[]).forEach((row) => {
    const c: ClientConsent = {
      id: row.id,
      clientId: row.client_id,
      version: row.version,
      signedAt: row.signed_at,
      signatureMethod: row.signature_method as SignatureMethod,
      notes: row.notes,
    };
    (out[c.clientId] ??= []).push(c);
  });
  return out;
}

// ============================================================
// KIIKA analyses persisted per client
// ============================================================

interface KiikaAnalysisRow {
  id: string;
  client_id: string;
  generated_at: string;
  objectives: unknown;
  recommended: unknown;
  insight: string | null;
  alternative_angles: unknown;
  caution_points: unknown;
  candidates_count: number;
  model: string;
}

function safeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value.filter((v): v is string => typeof v === "string");
}

function mapKiikaAnalysisRow(row: KiikaAnalysisRow): ClientKiikaAnalysis {
  const objectivesRaw =
    row.objectives && typeof row.objectives === "object"
      ? (row.objectives as Record<string, unknown>)
      : {};
  const objectives: KiikaAnalysisObjectives = {
    themes: safeStringArray(objectivesRaw.themes),
    objectifs: safeStringArray(objectivesRaw.objectifs),
    blocages: safeStringArray(objectivesRaw.blocages),
    dominante:
      typeof objectivesRaw.dominante === "string" ? objectivesRaw.dominante : null,
  };

  const recommendedRaw = Array.isArray(row.recommended) ? row.recommended : [];
  const recommended: KiikaAnalysisRecommendation[] = recommendedRaw
    .filter(
      (r): r is { protocolId: number; rank: number; reasoning: string } =>
        typeof r === "object" &&
        r !== null &&
        typeof (r as Record<string, unknown>).protocolId === "number" &&
        typeof (r as Record<string, unknown>).rank === "number" &&
        typeof (r as Record<string, unknown>).reasoning === "string",
    )
    .map((r) => ({ protocolId: r.protocolId, rank: r.rank, reasoning: r.reasoning }));

  return {
    id: row.id,
    clientId: row.client_id,
    generatedAt: row.generated_at,
    objectives,
    recommended,
    insight: row.insight,
    alternativeAngles: safeStringArray(row.alternative_angles),
    cautionPoints: safeStringArray(row.caution_points),
    candidatesCount: row.candidates_count,
    model: row.model,
  };
}

export async function getAllKiikaAnalysesByClient(
  clientIds: string[],
): Promise<Record<string, ClientKiikaAnalysis[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_kiika_analyses")
    .select(
      "id, client_id, generated_at, objectives, recommended, insight, alternative_angles, caution_points, candidates_count, model",
    )
    .in("client_id", clientIds)
    .order("generated_at", { ascending: false });
  const out: Record<string, ClientKiikaAnalysis[]> = {};
  for (const row of (data ?? []) as KiikaAnalysisRow[]) {
    const a = mapKiikaAnalysisRow(row);
    (out[a.clientId] ??= []).push(a);
  }
  return out;
}

export async function getLatestKiikaAnalysis(
  clientId: string,
): Promise<ClientKiikaAnalysis | null> {
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_kiika_analyses")
    .select(
      "id, client_id, generated_at, objectives, recommended, insight, alternative_angles, caution_points, candidates_count, model",
    )
    .eq("client_id", clientId)
    .order("generated_at", { ascending: false })
    .limit(1)
    .maybeSingle();
  if (!data) return null;
  return mapKiikaAnalysisRow(data as KiikaAnalysisRow);
}

// ============================================================
// KIIKA care plans (parcours 10 séances)
// ============================================================

interface KiikaCarePlanRow {
  id: string;
  client_id: string;
  generated_at: string;
  context: unknown;
  diagnostic: string | null;
  direction: string | null;
  sessions: unknown;
  metrics: unknown;
  red_flags: unknown;
  model: string;
}

function mapCarePlanRow(row: KiikaCarePlanRow): ClientKiikaCarePlan {
  const ctxRaw =
    row.context && typeof row.context === "object"
      ? (row.context as Record<string, unknown>)
      : {};
  const context: KiikaAnalysisObjectives = {
    themes: safeStringArray(ctxRaw.themes),
    objectifs: safeStringArray(ctxRaw.objectifs),
    blocages: safeStringArray(ctxRaw.blocages),
    dominante: typeof ctxRaw.dominante === "string" ? ctxRaw.dominante : null,
  };

  const sessionsRaw = Array.isArray(row.sessions) ? row.sessions : [];
  const sessions: KiikaCarePlanSession[] = sessionsRaw
    .filter(
      (s): s is {
        num: number;
        title: string;
        objective: string;
        protocolIds: number[];
        homework: string | null;
        signals: string[];
      } =>
        typeof s === "object" &&
        s !== null &&
        typeof (s as Record<string, unknown>).num === "number" &&
        typeof (s as Record<string, unknown>).title === "string" &&
        typeof (s as Record<string, unknown>).objective === "string" &&
        Array.isArray((s as Record<string, unknown>).protocolIds),
    )
    .map((s) => ({
      num: s.num,
      title: s.title,
      objective: s.objective,
      protocolIds: (s.protocolIds as unknown[]).filter(
        (x): x is number => typeof x === "number",
      ),
      homework: typeof s.homework === "string" ? s.homework : null,
      signals: safeStringArray(s.signals),
    }))
    .sort((a, b) => a.num - b.num);

  return {
    id: row.id,
    clientId: row.client_id,
    generatedAt: row.generated_at,
    context,
    diagnostic: row.diagnostic,
    direction: row.direction,
    sessions,
    metrics: safeStringArray(row.metrics),
    redFlags: safeStringArray(row.red_flags),
    model: row.model,
  };
}

export async function getAllKiikaCarePlansByClient(
  clientIds: string[],
): Promise<Record<string, ClientKiikaCarePlan[]>> {
  if (clientIds.length === 0) return {};
  const supabase = await createClient();
  const { data } = await supabase
    .from("client_kiika_care_plans")
    .select(
      "id, client_id, generated_at, context, diagnostic, direction, sessions, metrics, red_flags, model",
    )
    .in("client_id", clientIds)
    .order("generated_at", { ascending: false });
  const out: Record<string, ClientKiikaCarePlan[]> = {};
  for (const row of (data ?? []) as KiikaCarePlanRow[]) {
    const cp = mapCarePlanRow(row);
    (out[cp.clientId] ??= []).push(cp);
  }
  return out;
}
