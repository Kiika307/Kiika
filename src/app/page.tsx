import Link from "next/link";
import { Users, CalendarCheck, TrendingUp, Sparkles, AlertTriangle, Brain, Zap } from "lucide-react";
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
            className="rounded-[18px] p-6 relative overflow-hidden"
            style={{
              background: "linear-gradient(135deg, var(--color-navy) 0%, #2A3F5C 100%)",
              color: "var(--color-gold-light)",
            }}
          >
            <div
              className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-20 blur-2xl"
              style={{ background: "radial-gradient(circle, #C8A030 0%, transparent 70%)" }}
              aria-hidden="true"
            />
            <header className="flex items-center gap-2.5 mb-3 relative">
              <div
                className="inline-flex items-center justify-center rounded-[10px] w-9 h-9"
                style={{ background: "linear-gradient(135deg, #C8A030 0%, #F5E8C0 100%)" }}
                aria-hidden="true"
              >
                <Brain size={18} className="text-[var(--color-navy)]" />
              </div>
              <h2 className="font-serif text-[17px] font-semibold text-white">Demande à KIIKA</h2>
            </header>
            <p className="text-[13px] text-white/75 leading-[1.6] mb-4 relative">
              L&apos;assistant analyse le profil d&apos;un client et propose les protocoles les
              plus alignés, avec une explication claire pour chaque recommandation.
            </p>
            <ul className="space-y-1.5 mb-5 relative">
              <li className="flex items-start gap-2 text-[12px] text-white/70">
                <Zap size={12} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Matching basé sur profil psychométrique + motifs + pratiques</span>
              </li>
              <li className="flex items-start gap-2 text-[12px] text-white/70">
                <Sparkles size={12} className="text-[var(--color-gold)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                <span>Analyse approfondie LLM en option (sur activation)</span>
              </li>
            </ul>
            <Link
              href="/kiika"
              className="relative inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] min-h-11 transition-opacity hover:opacity-90"
              style={{ backgroundColor: "var(--color-gold-light)" }}
            >
              <Brain size={14} aria-hidden="true" />
              Ouvrir l&apos;assistant →
            </Link>
            {aiCandidates.length > 0 && (
              <div className="mt-5 pt-4 border-t border-white/10 relative">
                <p className="text-[10px] uppercase tracking-wide text-white/50 mb-2">
                  Clients récents à analyser
                </p>
                <div className="flex gap-2 flex-wrap">
                  {aiCandidates.slice(0, 4).map((c) => (
                    <Link
                      key={c.id}
                      href="/kiika"
                      className="inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-medium text-white/80 hover:bg-white/10 transition-colors"
                      style={{ backgroundColor: "rgba(255,255,255,0.04)" }}
                      title={c.fullName}
                    >
                      <Avatar initials={c.initials} color={c.color} size={20} />
                      <span className="max-w-[100px] truncate">{c.fullName.split(" ")[0]}</span>
                      {!c.testDone && (
                        <AlertTriangle
                          size={10}
                          className="text-[var(--color-gold)] flex-shrink-0"
                          aria-hidden="true"
                        />
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
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
