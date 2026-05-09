import Link from "next/link";
import { CalendarDays, ClipboardList, MessageSquare, FileText, ArrowRight } from "lucide-react";
import { createClient } from "@/lib/supabase/server";

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
    .select("id, full_name")
    .eq("user_id", userId)
    .single();

  const clientId = client!.id;

  const [{ data: nextAppt }, { data: openTasks }, { data: lastMsg }, { count: unreadMsg }] =
    await Promise.all([
      supabase
        .from("appointments")
        .select("id, starts_at, mode, duration_min")
        .eq("client_id", clientId)
        .gte("starts_at", new Date().toISOString())
        .order("starts_at", { ascending: true })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("client_tasks")
        .select("id, title, due_date")
        .eq("client_id", clientId)
        .is("completed_at", null)
        .order("due_date", { ascending: true })
        .limit(3),
      supabase
        .from("client_messages")
        .select("id, body, sender_role, created_at")
        .eq("client_id", clientId)
        .order("created_at", { ascending: false })
        .limit(1)
        .maybeSingle(),
      supabase
        .from("client_messages")
        .select("id", { count: "exact", head: true })
        .eq("client_id", clientId)
        .eq("sender_role", "therapist")
        .is("read_at", null),
    ]);

  const firstName = (client!.full_name ?? "").split(" ")[0];

  return (
    <>
      <header className="mb-6 sm:mb-8">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Bonjour, {firstName}
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
          Votre espace personnel — retrouvez ici votre suivi.
        </p>
      </header>

      <div className="grid gap-5 lg:grid-cols-2">
        <Card title="Prochain rendez-vous" icon={<CalendarDays size={16} />} href="/portail/seances">
          {nextAppt ? (
            <div>
              <div className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
                {formatDateLong(nextAppt.starts_at)}
              </div>
              <div className="mt-1 text-[12.5px] text-[var(--color-gray-soft)]">
                {formatTime(nextAppt.starts_at)} · {nextAppt.duration_min} min ·{" "}
                {nextAppt.mode === "visio" ? "Visio" : "Présentiel"}
              </div>
            </div>
          ) : (
            <Empty>Aucun rendez-vous programmé pour le moment.</Empty>
          )}
        </Card>

        <Card title="Devoirs en cours" icon={<ClipboardList size={16} />} href="/portail/devoirs">
          {openTasks && openTasks.length > 0 ? (
            <ul className="space-y-1.5">
              {openTasks.map((t) => (
                <li key={t.id} className="flex items-baseline justify-between gap-2 text-[13px]">
                  <span className="text-[var(--color-navy)] truncate">{t.title}</span>
                  {t.due_date && (
                    <span className="text-[11px] text-[var(--color-gray-soft)] shrink-0">
                      pour le {formatDateShort(t.due_date)}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          ) : (
            <Empty>Aucun devoir en cours.</Empty>
          )}
        </Card>

        <Card
          title="Messagerie"
          icon={<MessageSquare size={16} />}
          href="/portail/messagerie"
          badge={unreadMsg && unreadMsg > 0 ? `${unreadMsg} non lu${unreadMsg > 1 ? "s" : ""}` : null}
        >
          {lastMsg ? (
            <div>
              <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] mb-1">
                {lastMsg.sender_role === "therapist" ? "Votre praticien·ne" : "Vous"} ·{" "}
                {formatDateShort(lastMsg.created_at)}
              </div>
              <p className="text-[13px] text-[var(--color-navy)] line-clamp-2">{lastMsg.body}</p>
            </div>
          ) : (
            <Empty>Aucun message échangé pour l&apos;instant.</Empty>
          )}
        </Card>

        <Card title="Documents" icon={<FileText size={16} />} href="/portail/documents">
          <Empty>Retrouvez ici les documents partagés.</Empty>
        </Card>
      </div>
    </>
  );
}

function Card({
  title,
  icon,
  href,
  badge,
  children,
}: {
  title: string;
  icon: React.ReactNode;
  href: string;
  badge?: string | null;
  children: React.ReactNode;
}) {
  return (
    <Link
      href={href}
      className="group block rounded-[16px] bg-[var(--color-white-soft)] p-5 transition-transform hover:-translate-y-0.5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center gap-2 text-[12.5px] font-semibold text-[var(--color-navy)]">
          <span
            className="inline-flex items-center justify-center rounded-[8px] w-7 h-7"
            style={{ backgroundColor: "rgba(200,160,48,0.14)", color: "var(--color-gold)" }}
          >
            {icon}
          </span>
          {title}
        </span>
        <span className="inline-flex items-center gap-2">
          {badge && (
            <span
              className="rounded-full px-2 py-0.5 text-[10.5px] font-bold uppercase tracking-wide"
              style={{ backgroundColor: "var(--color-gold)", color: "white" }}
            >
              {badge}
            </span>
          )}
          <ArrowRight
            size={14}
            className="text-[var(--color-gray-soft)] group-hover:text-[var(--color-gold)] transition-colors"
          />
        </span>
      </header>
      <div>{children}</div>
    </Link>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return <p className="text-[13px] text-[var(--color-gray-soft)] italic">{children}</p>;
}

function formatDateLong(iso: string): string {
  const d = new Date(iso);
  return `${DAY_FULL[d.getDay()]} ${d.getDate()} ${MONTH_FULL[d.getMonth()]}`;
}
function formatDateShort(iso: string): string {
  const d = new Date(iso);
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
}
function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
