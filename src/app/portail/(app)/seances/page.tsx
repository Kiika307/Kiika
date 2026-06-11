import { CalendarDays, Video, MapPin } from "lucide-react";
import { requirePortalClient } from "@/lib/portal-server";

interface ApptRow {
  id: string;
  starts_at: string;
  duration_min: number;
  mode: "visio" | "presentiel";
  status: string;
}

export default async function PortalSeancesPage() {
  const { supabase, client } = await requirePortalClient();

  const { data: rows } = await supabase
    .from("appointments")
    .select("id, starts_at, duration_min, mode, status")
    .eq("client_id", client.id)
    .order("starts_at", { ascending: false });

  const all = (rows ?? []) as ApptRow[];
  const now = Date.now();
  const upcoming = all.filter((a) => new Date(a.starts_at).getTime() >= now).reverse();
  const past = all.filter((a) => new Date(a.starts_at).getTime() < now);

  return (
    <>
      <header className="mb-6">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Mes séances
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
          {upcoming.length} à venir · {past.length} passée{past.length > 1 ? "s" : ""}
        </p>
      </header>

      <Section title="À venir">
        {upcoming.length === 0 ? (
          <Empty>Aucun rendez-vous programmé.</Empty>
        ) : (
          <ul className="space-y-3">
            {upcoming.map((a) => (
              <ApptCard key={a.id} appt={a} upcoming />
            ))}
          </ul>
        )}
      </Section>

      <Section title="Passées">
        {past.length === 0 ? (
          <Empty>Aucune séance passée.</Empty>
        ) : (
          <ul className="space-y-3">
            {past.map((a) => (
              <ApptCard key={a.id} appt={a} upcoming={false} />
            ))}
          </ul>
        )}
      </Section>
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2 className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] font-semibold mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function ApptCard({ appt, upcoming }: { appt: ApptRow; upcoming: boolean }) {
  return (
    <li
      className="rounded-[14px] bg-[var(--color-white-soft)] p-4 flex items-center gap-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <span
        className="inline-flex items-center justify-center w-10 h-10 rounded-[10px]"
        style={{
          backgroundColor: appt.mode === "visio" ? "rgba(91,143,185,0.14)" : "rgba(46,138,123,0.14)",
          color: appt.mode === "visio" ? "#5B8FB9" : "#2E8A7B",
        }}
      >
        {appt.mode === "visio" ? <Video size={18} /> : <MapPin size={18} />}
      </span>
      <div className="flex-1 min-w-0">
        <div className="font-semibold text-[14px] text-[var(--color-navy)]">
          {formatDateLong(appt.starts_at)}
        </div>
        <div className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">
          {formatTime(appt.starts_at)} · {appt.duration_min} min ·{" "}
          {appt.mode === "visio" ? "Visio" : "Présentiel"}
          {appt.status && appt.status !== "scheduled" && ` · ${labelStatus(appt.status)}`}
        </div>
      </div>
      {upcoming && (
        <span className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-teal)]">
          <CalendarDays size={13} />
          Programmé
        </span>
      )}
    </li>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-[14px] bg-[var(--color-white-soft)] p-5 text-[13px] text-[var(--color-gray-soft)] italic"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}

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

function formatDateLong(iso: string): string {
  const d = new Date(iso);
  return `${DAY_FULL[d.getDay()]} ${d.getDate()} ${MONTH_FULL[d.getMonth()]} ${d.getFullYear()}`;
}
function formatTime(iso: string): string {
  return new Date(iso).toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });
}
function labelStatus(s: string): string {
  if (s === "done") return "terminée";
  if (s === "cancelled") return "annulée";
  return s;
}
