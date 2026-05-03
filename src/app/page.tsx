import Link from "next/link";
import { Users, CalendarCheck, TrendingUp, Sparkles, AlertTriangle } from "lucide-react";
import { AppShell } from "@/components/layout/AppShell";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { SectionCard } from "@/components/ui/SectionCard";
import { StatCard } from "@/components/ui/StatCard";
import { MarkDoneButton } from "@/components/agenda/MarkDoneButton";
import {
  getTherapist,
  getDashboardStats,
  getUpcomingAppointments,
  getRecentMessages,
  getClients,
  getProtocols,
} from "@/lib/data";

const todayLabel = new Intl.DateTimeFormat("fr-FR", {
  weekday: "long",
  day: "numeric",
  month: "long",
}).format(new Date());

export default async function DashboardPage() {
  const [therapist, stats, upcoming, messages, allClients, protocols] = await Promise.all([
    getTherapist(),
    getDashboardStats(),
    getUpcomingAppointments(4),
    getRecentMessages(3),
    getClients(),
    getProtocols(),
  ]);

  const firstName = therapist?.fullName.split(" ")[0] ?? "—";
  const aiCandidates = allClients.slice(0, 3);

  return (
    <AppShell>
      <header className="mb-6 sm:mb-9">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)] inline-flex items-center gap-2">
          Bonjour, {firstName}
          <Sparkles size={20} strokeWidth={2} className="text-[var(--color-gold)]" aria-hidden="true" />
        </h1>
        <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] capitalize">
          {todayLabel} · {stats.clientsActifs} client{stats.clientsActifs > 1 ? "s" : ""} actif
          {stats.clientsActifs > 1 ? "s" : ""}
        </p>
      </header>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5 mb-6 sm:mb-8 stagger">
        <StatCard
          icon={<Users size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Clients actifs"
          value={stats.clientsActifs}
          sub={stats.clientsNouveaux > 0 ? `+${stats.clientsNouveaux} nouveaux` : "—"}
          color="#2E8A7B"
        />
        <StatCard
          icon={<CalendarCheck size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Séances"
          value={stats.seancesTotal}
          sub={`${stats.seancesSemaine} cette semaine`}
          color="#C8A030"
        />
        <StatCard
          icon={<TrendingUp size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Taux de suivi"
          value={`${stats.tauxSuivi}%`}
          sub={stats.seancesTotal > 0 ? "sur RDV planifiés" : "Aucun RDV"}
          color="#2E8A7B"
        />
        <StatCard
          icon={<Sparkles size={18} strokeWidth={1.8} aria-hidden="true" />}
          label="Protocoles"
          value={stats.protocolesActifs}
          sub={stats.protocolesActifs > 0 ? "associés à des RDV" : "—"}
          color="#7C5CBF"
        />
      </div>

      <div className="grid gap-6 lg:[grid-template-columns:1.15fr_0.85fr]">
        <div className="space-y-6">
          <SectionCard title="Prochains rendez-vous" action={{ label: "Voir agenda →", href: "/agenda" }}>
            {upcoming.length === 0 ? (
              <p className="py-6 text-center text-[13px] text-[var(--color-gray-soft)]">
                Aucun rendez-vous à venir.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-light-gray)]">
                {upcoming.map((a) => (
                  <li key={a.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <Avatar initials={a.initials} color={a.color} size={42} />
                    <div className="flex-1 min-w-0">
                      <div className="text-[14px] font-semibold text-[var(--color-navy)] truncate">
                        {a.clientName}
                      </div>
                      <div className="text-[12px] text-[var(--color-gray-soft)]">
                        {a.dayLabel} · {a.timeLabel} · {a.mode === "visio" ? "Visio" : "Présentiel"}
                      </div>
                    </div>
                    <Badge color={a.color}>{a.mode === "visio" ? "Visio" : "Présentiel"}</Badge>
                    <MarkDoneButton appointmentId={a.id} />
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>

          <SectionCard title="Messages récents" action={{ label: "Tout voir →", href: "/messagerie" }}>
            {messages.length === 0 ? (
              <p className="py-6 text-center text-[13px] text-[var(--color-gray-soft)]">
                Aucun message reçu.
              </p>
            ) : (
              <ul className="divide-y divide-[var(--color-light-gray)]">
                {messages.map((m) => (
                  <li key={m.id} className="flex items-center gap-4 py-3 first:pt-0 last:pb-0">
                    <Avatar initials={m.initials} color={m.color} size={38} />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-[14px] font-semibold text-[var(--color-navy)]">
                          {m.clientName}
                        </span>
                        {m.unread && (
                          <span
                            className="w-2 h-2 rounded-full"
                            style={{ backgroundColor: "var(--color-gold)" }}
                          />
                        )}
                      </div>
                      <p className="text-[12px] text-[var(--color-gray-soft)] truncate">{m.preview}</p>
                    </div>
                    <span className="text-[11px] text-[var(--color-gray-soft)]">{m.timeLabel}</span>
                  </li>
                ))}
              </ul>
            )}
          </SectionCard>
        </div>

        <div className="space-y-6">
          <section
            className="rounded-[18px] p-6"
            style={{ backgroundColor: "var(--color-navy)", color: "var(--color-gold-light)" }}
          >
            <header className="flex items-center gap-2 mb-5">
              <Sparkles size={18} strokeWidth={1.8} className="text-[var(--color-gold)]" aria-hidden="true" />
              <h2 className="font-serif text-[16px] font-semibold">Suggestions IA</h2>
            </header>
            {aiCandidates.length === 0 ? (
              <p className="text-[12px] text-white/60">Ajoutez vos premiers clients pour générer des suggestions.</p>
            ) : (
              <ul className="space-y-3">
                {aiCandidates.map((c) => {
                  const protocol = c.dominante
                    ? protocols.find((p) =>
                        c.dominante!.toLowerCase().includes(p.category.toLowerCase().split("-")[0]),
                      ) ?? protocols[0]
                    : null;
                  return (
                    <li
                      key={c.id}
                      className="flex items-center gap-3 rounded-[12px] px-3 py-2.5"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                    >
                      <Avatar initials={c.initials} color={c.color} size={36} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-white truncate">{c.fullName}</div>
                        <div className="text-[11px] text-white/60 truncate inline-flex items-center gap-1">
                          {c.testDone && protocol ? (
                            protocol.name
                          ) : (
                            <>
                              <AlertTriangle size={11} strokeWidth={2} className="text-[var(--color-gold)]" aria-hidden="true" />
                              Test psychométrique manquant
                            </>
                          )}
                        </div>
                      </div>
                    </li>
                  );
                })}
              </ul>
            )}
            <Link
              href="/protocoles"
              className="mt-5 block text-[12px] font-semibold uppercase tracking-wide text-[var(--color-gold)] hover:underline"
            >
              Parcourir les protocoles →
            </Link>
          </section>

          <section className="rounded-[18px] p-6" style={{ backgroundColor: "var(--color-gold-light)" }}>
            <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-4">Cette semaine</h2>
            <div className="grid grid-cols-2 gap-4">
              <Mini value={String(stats.seancesSemaine)} label="Séances" />
              <Mini value={String(stats.clientsNouveaux)} label="Nouveaux clients" />
              <Mini value={`${stats.tauxSuivi}%`} label="Taux de suivi" />
              <Mini value={String(stats.protocolesActifs)} label="Protocoles" />
            </div>
          </section>
        </div>
      </div>
    </AppShell>
  );
}

interface MiniProps {
  value: string;
  label: string;
}

function Mini({ value, label }: MiniProps) {
  return (
    <div>
      <div className="font-serif text-[22px] font-bold text-[var(--color-navy)] tabular">{value}</div>
      <div className="text-[11px] text-[var(--color-navy)]/65 uppercase tracking-wide">{label}</div>
    </div>
  );
}
