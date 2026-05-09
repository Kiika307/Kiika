import Link from "next/link";
import {
  CalendarDays,
  ClipboardList,
  MessageSquare,
  FileText,
  Sparkles,
  ArrowRight,
  Heart,
} from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import { StatCard } from "@/components/ui/StatCard";
import { SectionCard } from "@/components/ui/SectionCard";
import { academiaStatPhotos, academiaFeaturePhotos } from "@/lib/academia-photos";

const todayLabel = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

const DAY_FULL = ["dimanche", "lundi", "mardi", "mercredi", "jeudi", "vendredi", "samedi"];
const MONTH_FULL = [
  "janvier",
  "février",
  "mars",
  "avril",
  "mai",
  "juin",
  "juillet",
  "août",
  "septembre",
  "octobre",
  "novembre",
  "décembre",
];

export default async function PortalDashboardPage() {
  const supabase = await createClient();
  const { data: auth } = await supabase.auth.getUser();
  const userId = auth.user!.id;

  const { data: client } = await supabase
    .from("clients")
    .select("id, full_name, therapist_id")
    .eq("user_id", userId)
    .single();

  const clientId = client!.id;

  const { data: therapist } = await supabase
    .from("profiles")
    .select("full_name")
    .eq("id", client!.therapist_id)
    .maybeSingle();

  const [
    { data: nextAppt },
    { data: upcoming },
    { data: openTasks },
    { count: docsCount },
    { count: unreadCount },
    { data: lastMessages },
  ] = await Promise.all([
    supabase
      .from("appointments")
      .select("id, starts_at, mode, duration_min")
      .eq("client_id", clientId)
      .gte("starts_at", new Date().toISOString())
      .order("starts_at", { ascending: true })
      .limit(1)
      .maybeSingle(),
    supabase
      .from("appointments")
      .select("id, starts_at, mode, duration_min")
      .eq("client_id", clientId)
      .gte("starts_at", new Date().toISOString())
      .order("starts_at", { ascending: true })
      .limit(4),
    supabase
      .from("client_tasks")
      .select("id, title, due_date, completed_at")
      .eq("client_id", clientId)
      .is("completed_at", null)
      .order("due_date", { ascending: true })
      .limit(4),
    supabase
      .from("client_documents")
      .select("id", { count: "exact", head: true })
      .eq("client_id", clientId),
    supabase
      .from("client_messages")
      .select("id", { count: "exact", head: true })
      .eq("client_id", clientId)
      .eq("sender_role", "therapist")
      .is("read_at", null),
    supabase
      .from("client_messages")
      .select("id, body, sender_role, created_at")
      .eq("client_id", clientId)
      .order("created_at", { ascending: false })
      .limit(3),
  ]);

  const firstName = (client!.full_name ?? "").split(" ")[0];
  const therapistName = therapist?.full_name ?? "votre praticien·ne";
  const openTasksCount = (openTasks ?? []).length;

  return (
    <>
      <header className="mb-6 sm:mb-9">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)] inline-flex items-center gap-2">
          Bonjour, {firstName}
          <Sparkles size={20} strokeWidth={2} className="text-[var(--color-gold)]" aria-hidden="true" />
        </h1>
        <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] capitalize">
          {todayLabel}
          <span className="lowercase"> · accompagné·e par </span>
          <span className="text-[var(--color-navy)] font-semibold normal-case">{therapistName}</span>
        </p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8 stagger">
        <StatCard
          icon={<CalendarDays size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Prochaine séance"
          value={nextAppt ? formatShortDate(nextAppt.starts_at) : "—"}
          sub={
            nextAppt
              ? `${formatTime(nextAppt.starts_at)} · ${nextAppt.mode === "visio" ? "Visio" : "Présentiel"}`
              : "Aucune programmée"
          }
          color="#C8A030"
          photoUrl={academiaStatPhotos.sessions}
          href="/portail/seances"
        />
        <StatCard
          icon={<ClipboardList size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Devoirs"
          value={openTasksCount}
          sub={openTasksCount > 0 ? "à compléter" : "rien à faire"}
          color="#7C5CBF"
          photoUrl={academiaStatPhotos.followup}
          href="/portail/devoirs"
        />
        <StatCard
          icon={<FileText size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Documents"
          value={docsCount ?? 0}
          sub={docsCount && docsCount > 0 ? "partagés" : "—"}
          color="#2E8A7B"
          photoUrl={academiaStatPhotos.protocols}
          href="/portail/documents"
        />
        <StatCard
          icon={<MessageSquare size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Messages"
          value={unreadCount ?? 0}
          sub={unreadCount && unreadCount > 0 ? "non lu" + (unreadCount > 1 ? "s" : "") : "à jour"}
          color="#5B8FB9"
          photoUrl={academiaStatPhotos.clients}
          href="/portail/messagerie"
        />
      </div>

      <div className="grid gap-6 lg:[grid-template-columns:1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionCard
            title="Mes prochaines séances"
            action={{ label: "Voir toutes →", href: "/portail/seances" }}
          >
            {(upcoming ?? []).length === 0 ? (
              <p className="py-6 text-center text-[13px] text-[var(--color-gray-soft)]">
                Aucun rendez-vous à venir.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-light-gray)]">
                {(upcoming ?? []).map((a) => (
                  <li key={a.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <span
                      className="inline-flex flex-col items-center justify-center w-12 h-12 rounded-[10px] tabular"
                      style={{
                        backgroundColor:
                          a.mode === "visio" ? "rgba(91,143,185,0.14)" : "rgba(46,138,123,0.14)",
                        color: a.mode === "visio" ? "#5B8FB9" : "#2E8A7B",
                      }}
                    >
                      <span className="text-[10px] uppercase tracking-wide leading-none">
                        {MONTH_FULL[new Date(a.starts_at).getMonth()].slice(0, 3)}
                      </span>
                      <span className="font-serif text-[16px] font-bold leading-none mt-0.5">
                        {new Date(a.starts_at).getDate()}
                      </span>
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold text-[var(--color-navy)]">
                        {DAY_FULL[new Date(a.starts_at).getDay()]} · {formatTime(a.starts_at)}
                      </div>
                      <div className="text-[12px] text-[var(--color-gray-soft)]">
                        {a.duration_min} min · {a.mode === "visio" ? "Visio" : "Présentiel"}
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>

          <SectionCard
            title="Derniers échanges"
            action={{ label: "Tout voir →", href: "/portail/messagerie" }}
          >
            {(lastMessages ?? []).length === 0 ? (
              <p className="py-6 text-center text-[13px] text-[var(--color-gray-soft)]">
                Aucun message échangé pour l&apos;instant.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-light-gray)]">
                {(lastMessages ?? []).map((m) => (
                  <li key={m.id} className="py-3 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-2 mb-0.5">
                      <span className="text-[12.5px] font-semibold text-[var(--color-navy)]">
                        {m.sender_role === "therapist" ? therapistName : "Vous"}
                      </span>
                      <span className="text-[11px] text-[var(--color-gray-soft)]">
                        · {formatRelative(m.created_at)}
                      </span>
                    </div>
                    <p className="text-[12.5px] text-[var(--color-navy)]/80 line-clamp-2">{m.body}</p>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>
        </div>

        <div className="space-y-6">
          <section
            className="rounded-[18px] p-6 relative overflow-hidden"
            style={
              {
                background:
                  "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
                color: "var(--color-gold-light)",
                "--aca-photo": `url(${academiaFeaturePhotos.kiikaAssistant})`,
              } as React.CSSProperties
            }
          >
            <div
              className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-20 blur-2xl"
              style={{ background: "radial-gradient(circle, #C8A030 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <div className="aca-feature-photo" aria-hidden="true" />
            <header className="flex items-center gap-2.5 mb-3 relative">
              <div
                className="inline-flex items-center justify-center rounded-[10px] w-9 h-9"
                style={{ background: "linear-gradient(135deg, #C8A030 0%, #F5E8C0 100%)" }}
                aria-hidden="true"
              >
                <Heart size={18} className="text-[var(--color-navy)]" />
              </div>
              <h2 className="font-serif text-[17px] font-semibold text-white">Mon accompagnement</h2>
            </header>
            <p className="text-[13px] text-white/75 leading-[1.6] mb-4 relative">
              Cet espace est le vôtre. Préparez vos séances, retrouvez les documents partagés et
              gardez le contact avec {therapistName} entre les rendez-vous.
            </p>
            <ul className="space-y-1.5 mb-5 relative">
              <li className="flex items-start gap-2 text-[12px] text-white/75">
                <CalendarDays size={12} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Vos rendez-vous, en visio ou en présentiel</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] text-white/75">
                <ClipboardList size={12} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Les exercices proposés et votre retour entre les séances</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] text-white/75">
                <MessageSquare size={12} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Une messagerie sécurisée avec votre praticien·ne</span>
              </li>
            </ul>
            <Link
              href="/portail/messagerie"
              className="relative inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] min-h-11 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-gold-light)" }}
            >
              <MessageSquare size={14} aria-hidden="true" />
              Écrire à {therapistName.split(" ")[0]} →
            </Link>
          </section>

          <section
            className="rounded-[18px] p-6 relative overflow-hidden"
            style={
              {
                backgroundColor: "var(--color-gold-light)",
                "--aca-photo": `url(${academiaFeaturePhotos.weeklyRecap})`,
              } as React.CSSProperties
            }
          >
            <div className="aca-feature-photo" aria-hidden="true" />
            <div className="relative z-[1]">
              <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-4">
                À venir pour vous
              </h2>
              <ul className="space-y-3">
                {nextAppt && (
                  <Row
                    icon={<CalendarDays size={14} aria-hidden="true" />}
                    label={`Séance ${formatShortDate(nextAppt.starts_at).toLowerCase()}`}
                    href="/portail/seances"
                  />
                )}
                {openTasksCount > 0 && (
                  <Row
                    icon={<ClipboardList size={14} aria-hidden="true" />}
                    label={`${openTasksCount} devoir${openTasksCount > 1 ? "s" : ""} à compléter`}
                    href="/portail/devoirs"
                  />
                )}
                {(unreadCount ?? 0) > 0 && (
                  <Row
                    icon={<MessageSquare size={14} aria-hidden="true" />}
                    label={`${unreadCount} nouveau${unreadCount! > 1 ? "x" : ""} message${unreadCount! > 1 ? "s" : ""}`}
                    href="/portail/messagerie"
                  />
                )}
                {!nextAppt && openTasksCount === 0 && (unreadCount ?? 0) === 0 && (
                  <li className="text-[12.5px] text-[var(--color-navy)]/65 italic">
                    Tout est à jour. Profitez de ce moment de calme.
                  </li>
                )}
              </ul>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

function Row({
  icon,
  label,
  href,
}: {
  icon: React.ReactNode;
  label: string;
  href: string;
}) {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center justify-between gap-3 rounded-[10px] -mx-2 px-2 py-1.5 hover:bg-white/40 transition-colors"
      >
        <span className="inline-flex items-center gap-2 text-[13px] text-[var(--color-navy)]">
          <span className="text-[var(--color-gold)]">{icon}</span>
          {label}
        </span>
        <ArrowRight size={13} className="text-[var(--color-navy)]/55" />
      </Link>
    </li>
  );
}

function formatShortDate(iso: string): string {
  const d = new Date(iso);
  return `${DAY_FULL[d.getDay()].slice(0, 3)} ${d.getDate()} ${MONTH_FULL[d.getMonth()].slice(0, 3)}`;
}

function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}

function formatRelative(iso: string): string {
  const d = new Date(iso);
  const now = new Date();
  const diffH = Math.floor((now.getTime() - d.getTime()) / 3_600_000);
  if (diffH < 1) return "à l'instant";
  if (diffH < 24) return `il y a ${diffH} h`;
  const diffD = Math.floor(diffH / 24);
  if (diffD < 7) return `il y a ${diffD} j`;
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
}
