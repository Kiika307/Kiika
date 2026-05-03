"use client";

import { useState } from "react";
import Link from "next/link";
import { Sparkles, ChevronLeft, Download, Check, AlertTriangle, ArrowRight } from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { MatchBar } from "@/components/ui/MatchBar";
import { ProtoStepItem } from "./ProtoStepItem";
import type { Client, Protocol, ProtocolDetail } from "@/lib/types";

type TabKey = "protocole" | "outils" | "matching" | "croyances";

const TABS: Array<{ key: TabKey; label: string }> = [
  { key: "protocole", label: "Protocole" },
  { key: "outils", label: "Outils & Suivi" },
  { key: "matching", label: "Matching clients" },
  { key: "croyances", label: "Croyances" },
];

interface ProtocolDetailClientProps {
  protocol: Protocol;
  detail: ProtocolDetail | null;
  clients: Client[];
}

export function ProtocolDetailClient({ protocol, detail, clients }: ProtocolDetailClientProps) {
  if (!detail) {
    return (
      <>
        <Link href="/protocoles" className="inline-flex items-center gap-1 text-[13px] text-[var(--color-gray-soft)] hover:text-[var(--color-navy)]">
          <ChevronLeft size={14} strokeWidth={2} aria-hidden="true" />
          Retour au catalogue
        </Link>
        <div className="mt-6 rounded-[16px] bg-[var(--color-white-soft)] p-10 text-center" style={{ boxShadow: "var(--shadow-card)" }}>
          <div className="text-[40px] mb-4">📋</div>
          <h2 className="font-serif text-[22px] text-[var(--color-navy)]">{protocol.name}</h2>
          <p className="mt-2 text-[14px] text-[var(--color-gray-soft)] leading-[1.7]">{protocol.description}</p>
          <div className="mt-5 flex flex-wrap justify-center gap-2">
            {protocol.tags.map((t) => (
              <Badge key={t} color={protocol.color}>{t}</Badge>
            ))}
          </div>
          <p className="mt-6 inline-flex items-center gap-1.5 text-[13px] font-semibold text-[var(--color-gold)]">
            Fiche détaillée en cours de rédaction
            <Sparkles size={13} strokeWidth={2} aria-hidden="true" />
          </p>
        </div>
      </>
    );
  }

  return <ProtocolDetailContent protocol={protocol} detail={detail} clients={clients} />;
}

interface ContentProps {
  protocol: Protocol;
  detail: ProtocolDetail;
  clients: Client[];
}

function ProtocolDetailContent({ protocol, detail, clients }: ContentProps) {
  const recommendedProgram = detail.programs.find((p) => p.recommended) ?? detail.programs[0];
  const [progId, setProgId] = useState<string>(recommendedProgram.id);
  const [seanceIdx, setSeanceIdx] = useState(0);
  const [tab, setTab] = useState<TabKey>("protocole");

  const program = detail.programs.find((p) => p.id === progId) ?? detail.programs[0];
  const seance = program.seances[Math.min(seanceIdx, program.seances.length - 1)];

  const matchingClients = clients
    .filter((c) => c.testDone)
    .map((c) => {
      const tp = c.topProtocols.find((m) => m.id === protocol.id);
      return tp ? { client: c, score: tp.score, reason: tp.reason } : null;
    })
    .filter((x): x is { client: Client; score: number; reason: string } => x !== null)
    .sort((a, b) => b.score - a.score);

  return (
    <div className="flex flex-col lg:flex-row lg:flex-1 min-h-[calc(100dvh-3.5rem)] lg:min-h-screen">
      {/* Inner navy sidebar — sur mobile, devient une top-bar */}
      <aside
        className="w-full lg:w-[260px] flex-shrink-0 flex flex-col py-4 lg:py-5 lg:overflow-y-auto"
        style={{ background: "var(--color-navy)", maxHeight: "100vh" }}
      >
        <div className="px-[18px] pb-5 mb-[18px]" style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}>
          <Link
            href="/protocoles"
            className="text-[12px] text-white/45 mb-4 inline-flex items-center gap-1 hover:text-white/70"
          >
            <ChevronLeft size={13} strokeWidth={2} aria-hidden="true" />
            Catalogue
          </Link>
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-[var(--color-gold)] mt-3 mb-1.5">
            {protocol.category}
          </div>
          <div className="font-serif text-[15px] text-white leading-[1.4] mb-2.5">{protocol.name}</div>
          <div
            className="inline-flex items-center gap-1.5 rounded-[20px] px-3 py-1"
            style={{ background: "rgba(200,160,48,0.15)" }}
          >
            <span className="font-serif text-[16px] font-bold text-[var(--color-gold)]">
              {detail.efficacite}
            </span>
            <span className="text-[10px] text-white/50">{detail.efficaciteSub.split("(")[0].trim() || "efficacité"}</span>
          </div>
        </div>

        {/* Program selector */}
        <div className="px-3 mb-4">
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/30 mb-2.5 pl-1.5">
            Programmes
          </div>
          {detail.programs.map((pr) => {
            const active = progId === pr.id;
            return (
              <button
                key={pr.id}
                onClick={() => {
                  setProgId(pr.id);
                  setSeanceIdx(0);
                }}
                className="flex items-center gap-2.5 w-full px-2.5 py-2.5 rounded-[10px] mb-1 text-left transition-all"
                style={{
                  background: active ? pr.color + "28" : "transparent",
                  borderLeft: `3px solid ${active ? pr.color : "transparent"}`,
                }}
              >
                <span className="text-[16px] flex-shrink-0">{pr.icon}</span>
                <div className="flex-1">
                  <div className="text-[12px] font-semibold" style={{ color: active ? "white" : "rgba(255,255,255,0.6)" }}>
                    {pr.title}
                  </div>
                  <div className="text-[10px] text-white/30 mt-px">{pr.duration}</div>
                </div>
                {pr.recommended && (
                  <span
                    className="text-[9px] font-bold rounded-[8px] px-1.5 py-0.5"
                    style={{ background: "rgba(200,160,48,0.2)", color: "var(--color-gold)" }}
                  >
                    TOP
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Seance selector */}
        <div className="px-3 pt-3.5" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <div className="text-[9px] font-bold uppercase tracking-[0.1em] text-white/30 mb-2.5 pl-1.5">
            Séances
          </div>
          {program.seances.map((s, i) => {
            const active = seanceIdx === i;
            return (
              <button
                key={i}
                onClick={() => setSeanceIdx(i)}
                className="flex items-center gap-2.5 w-full px-2.5 py-2 rounded-[10px] mb-0.5 text-left transition-colors"
                style={{ background: active ? "rgba(255,255,255,0.08)" : "transparent" }}
              >
                <div
                  className="w-[22px] h-[22px] rounded-full flex-shrink-0 flex items-center justify-center text-[10px] font-bold text-white"
                  style={{ background: active ? program.color : "rgba(255,255,255,0.1)" }}
                >
                  {s.num}
                </div>
                <span className="text-[12px] leading-[1.3]" style={{ color: active ? "white" : "rgba(255,255,255,0.5)" }}>
                  {s.title}
                </span>
              </button>
            );
          })}
        </div>

        <div className="mt-auto px-3.5 pt-4" style={{ borderTop: "1px solid rgba(255,255,255,0.07)" }}>
          <button
            className="w-full inline-flex items-center justify-center gap-1.5 py-2.5 rounded-[12px] text-[12px] font-semibold text-white mb-2"
            style={{ background: "var(--color-gold)" }}
          >
            Appliquer à un client
            <ArrowRight size={14} strokeWidth={2.2} aria-hidden="true" />
          </button>
          <button
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 rounded-[12px] text-[12px] text-white/55"
            style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.1)" }}
          >
            <Download size={13} strokeWidth={1.8} aria-hidden="true" />
            Télécharger PDF
          </button>
        </div>
      </aside>

      {/* Main */}
      <div className="flex-1 overflow-y-auto px-4 sm:px-6 lg:px-8 py-5 lg:py-7" style={{ background: "var(--color-cream)", maxHeight: "100vh" }}>
        <div className="flex gap-1 overflow-x-auto mb-6" style={{ borderBottom: "2px solid #E5E7EB" }}>
          {TABS.map((t) => {
            const active = tab === t.key;
            return (
              <button
                key={t.key}
                onClick={() => setTab(t.key)}
                className="px-5 py-2.5 text-[13px] font-semibold whitespace-nowrap transition-all"
                style={{
                  color: active ? program.color : "var(--color-gray-soft)",
                  borderBottom: `2px solid ${active ? program.color : "transparent"}`,
                  marginBottom: -2,
                }}
              >
                {t.label}
              </button>
            );
          })}
        </div>

        {tab === "protocole" && (
          <div>
            <div
              className="rounded-[18px] bg-[var(--color-white-soft)] px-[26px] py-[22px] mb-5"
              style={{ boxShadow: "var(--shadow-card)", borderTop: `4px solid ${program.color}` }}
            >
              <div className="flex items-center gap-3 mb-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-white text-[14px]"
                  style={{ background: program.color }}
                >
                  {seance.num}
                </div>
                <h2 className="font-serif text-[19px] text-[var(--color-navy)]">
                  Séance {seance.num} — {seance.title}
                </h2>
              </div>
              <p className="text-[13px] text-[var(--color-gray-soft)] leading-[1.7]">{program.description}</p>
            </div>

            <div
              className="rounded-[18px] bg-[var(--color-white-soft)] px-[26px] py-[22px] mb-5"
              style={{ boxShadow: "var(--shadow-card)" }}
            >
              <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-navy)] mb-3.5">
                Étapes de la séance
              </div>
              {seance.steps.map((step, i) => (
                <ProtoStepItem key={i} step={step} idx={i} color={program.color} />
              ))}
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {detail.stats.map((st, i) => (
                <div
                  key={i}
                  className="rounded-[14px] bg-[var(--color-white-soft)] px-3.5 py-4 text-center"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="font-serif text-[22px] sm:text-[26px] font-bold leading-none" style={{ color: st.color }}>
                    {st.val}
                  </div>
                  <div className="text-[11px] font-semibold text-[var(--color-navy)] mt-1.5 mb-0.5 leading-[1.3]">
                    {st.label}
                  </div>
                  <div className="text-[10px] text-[var(--color-gray-soft)] leading-[1.4]">{st.sub}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {tab === "outils" && (
          <div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mb-5">
              {detail.outils.map((o, i) => (
                <div
                  key={i}
                  className="rounded-[16px] bg-[var(--color-white-soft)] px-[22px] py-5"
                  style={{ boxShadow: "var(--shadow-card)" }}
                >
                  <div className="text-[28px] mb-2.5">{o.icon}</div>
                  <div
                    className="text-[10px] font-bold uppercase tracking-[0.08em] mb-1"
                    style={{ color: program.color }}
                  >
                    {o.type}
                  </div>
                  <div className="font-serif text-[15px] text-[var(--color-navy)] mb-1.5">{o.name}</div>
                  <div className="text-[13px] text-[var(--color-gray-soft)] leading-[1.65]">{o.desc}</div>
                  <button
                    className="mt-3 px-4 py-2 rounded-[10px] text-[12px] font-semibold inline-flex items-center gap-1.5"
                    style={{ background: program.color + "18", color: program.color }}
                  >
                    Ouvrir
                    <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                </div>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="rounded-[16px] bg-[var(--color-teal-light)] p-5">
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-teal)] mb-3">
                  Indications
                </div>
                {detail.indications.map((ind, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <Check size={14} strokeWidth={2.5} className="text-[var(--color-teal)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-[var(--color-navy)] leading-[1.5]">{ind}</span>
                  </div>
                ))}
              </div>
              <div className="rounded-[16px] p-5" style={{ background: "#FEF2F2" }}>
                <div className="text-[11px] font-bold uppercase tracking-[0.08em] text-[var(--color-red-alert)] mb-3">
                  Contre-indications
                </div>
                {detail.contraindications.map((ci, i) => (
                  <div key={i} className="flex gap-2 mb-2">
                    <AlertTriangle size={14} strokeWidth={2} className="text-[var(--color-red-alert)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                    <span className="text-[13px] text-[var(--color-navy)] leading-[1.5]">{ci}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {tab === "matching" && (
          <div>
            <div className="rounded-[16px] bg-[var(--color-navy)] px-6 py-5 mb-5">
              <div className="flex items-center gap-2 mb-1.5">
                <Sparkles size={16} strokeWidth={1.8} className="text-[var(--color-gold)]" aria-hidden="true" />
                <span className="font-serif text-[16px] text-[var(--color-gold-light)]">
                  Clients compatibles
                </span>
              </div>
              <p className="text-[12px] text-white/50 leading-[1.6]">
                Score calculé à partir du profil psychométrique. Basé sur la dominante, les blocages
                identifiés et la réceptivité à la technique.
              </p>
            </div>
            {matchingClients.length > 0 ? (
              matchingClients.map(({ client, score, reason }) => (
                <div
                  key={client.id}
                  className="rounded-[14px] bg-[var(--color-white-soft)] px-5 py-4 mb-3 flex items-center gap-3.5"
                  style={{ boxShadow: "var(--shadow-card)", borderLeft: `4px solid ${client.color}` }}
                >
                  <Avatar initials={client.initials} color={client.color} size={42} />
                  <div className="flex-1">
                    <div className="text-[14px] font-semibold text-[var(--color-navy)] mb-1.5">
                      {client.name}
                    </div>
                    <MatchBar score={score} color={client.color} />
                    <div className="text-[12px] text-[var(--color-gray-soft)] mt-1.5">{reason}</div>
                  </div>
                  <button
                    className="px-4 py-2 rounded-[10px] text-[12px] font-semibold text-white inline-flex items-center gap-1.5"
                    style={{ background: program.color }}
                  >
                    Utiliser
                    <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
                  </button>
                </div>
              ))
            ) : (
              <div
                className="text-center py-10 px-5 text-[14px] text-[var(--color-gray-soft)] rounded-[16px] bg-[var(--color-white-soft)]"
                style={{ boxShadow: "var(--shadow-card)" }}
              >
                Complétez le test psychométrique de vos clients pour voir le matching.
              </div>
            )}
          </div>
        )}

        {tab === "croyances" && (
          <div>
            <div className="rounded-[16px] bg-[var(--color-gold-light)] px-[22px] py-[18px] mb-5">
              <div className="font-serif text-[15px] text-[var(--color-navy)] mb-1.5">
                Croyances limitantes à déconstruire
              </div>
              <p className="text-[13px] text-[var(--color-gray-soft)] leading-[1.65]">
                Ces croyances maintiennent le schéma. Le thérapeute les traite par recadrage avant
                l'induction. Chacune cache un bénéfice secondaire à identifier et à honorer
                autrement.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {detail.croyances.map((cr, i) => (
                <div
                  key={i}
                  className="rounded-[14px] bg-[var(--color-white-soft)] px-[18px] py-4 flex gap-3 items-start"
                  style={{ boxShadow: "var(--shadow-card)", borderLeft: `3px solid ${program.color}` }}
                >
                  <span className="text-[16px] mt-0.5">💬</span>
                  <div>
                    <div className="text-[13px] italic text-[var(--color-navy)] leading-[1.5] mb-2">
                      « {cr} »
                    </div>
                    <Badge color="#E05252" bg="#FEF2F2">À recadrer</Badge>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
