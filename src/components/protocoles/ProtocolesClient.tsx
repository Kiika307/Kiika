"use client";

import { useState, useMemo } from "react";
import { Sparkles } from "lucide-react";
import { ProtocolCard } from "./ProtocolCard";
import { Badge } from "@/components/ui/Badge";
import { MatchBar } from "@/components/ui/MatchBar";
import Link from "next/link";
import type { Client, Protocol } from "@/lib/types";

interface ProtocolesClientProps {
  protocols: Protocol[];
  clients: Client[];
}

type Mode = "pratique" | "objectif";

export function ProtocolesClient({ protocols, clients }: ProtocolesClientProps) {
  const [mode, setMode] = useState<Mode>("pratique");
  const [practiceFilter, setPracticeFilter] = useState<string>("Tous");
  const [objectiveFilter, setObjectiveFilter] = useState<string>("Tous");
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);

  const practices = useMemo(() => {
    const PRACTICE_ORDER = [
      "Hypnose Ericksonienne",
      "Deep Hypnose",
      "Hypnose Spirituelle",
      "Hypnose Humaniste",
      "Sophrologie",
      "Sophro-analyse",
      "PNL",
      "Analyse Transactionnelle",
      "Kinésiologie",
      "Énergétique",
      "INTIO",
      "EMDR",
      "TCC",
      "EFT",
      "Pleine conscience",
      "Gestalt-thérapie",
      "Constellations familiales",
      "Psychogénéalogie",
      "CNV",
      "Cohérence cardiaque",
      "IFS",
      "Réflexologie",
      "Fleurs de Bach",
      "Reiki",
      "Magnétisme",
      "Process Communication",
      "Analyse systémique",
    ];
    const present = new Set(protocols.map((p) => p.practice));
    const ordered = PRACTICE_ORDER.filter((p) => present.has(p));
    const extras = Array.from(present).filter((p) => !PRACTICE_ORDER.includes(p)).sort();
    return ["Tous", ...ordered, ...extras];
  }, [protocols]);

  const objectives = useMemo(() => {
    const MOTIFS_ORDER = [
      "Anxiété & stress",
      "Dépression & humeur",
      "Estime & confiance en soi",
      "Phobies & peurs",
      "Trauma & deuil",
      "Burn-out & fatigue",
      "Addictions",
      "Perte de poids & TCA",
      "Sommeil & insomnie",
      "Procrastination & motivation",
      "Couple & sexualité",
      "Famille & enfance",
      "Conflits & communication",
      "Performance & examens",
      "Décision & orientation",
      "Prise de parole",
      "Douleurs & psychosomatique",
      "Quête de sens & spiritualité",
    ];
    const present = new Set<string>();
    protocols.forEach((p) => p.motifs.forEach((m) => present.add(m)));
    const ordered = MOTIFS_ORDER.filter((m) => present.has(m));
    const extras = Array.from(present).filter((m) => !MOTIFS_ORDER.includes(m)).sort();
    return ["Tous", ...ordered, ...extras];
  }, [protocols]);

  const selectedClient =
    selectedClientId != null ? clients.find((c) => c.id === selectedClientId) ?? null : null;

  const topMatches =
    selectedClient && selectedClient.testDone
      ? selectedClient.topProtocols
          .map((tp) => {
            const proto = protocols.find((p) => p.id === tp.id);
            return proto ? { ...proto, score: tp.score, reason: tp.reason } : null;
          })
          .filter((x): x is Protocol & { score: number; reason: string } => x !== null)
      : null;

  const matchScoreFor = (id: number) =>
    selectedClient && selectedClient.testDone
      ? selectedClient.topProtocols.find((tp) => tp.id === id)?.score ?? null
      : null;

  return (
    <div>
      <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6">
        <div>
          <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
            Catalogue de Protocoles
          </h1>
          <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
            {protocols.length} protocoles thérapeutiques · Cliquez sur une fiche pour voir le détail
          </p>
        </div>
        <label className="block sm:w-auto">
          <span className="sr-only">Choisir un client pour le matching IA</span>
          <select
            value={selectedClientId ?? ""}
            onChange={(e) => setSelectedClientId(e.target.value || null)}
            className="w-full sm:w-auto rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-3 py-2.5 text-[14px] sm:text-[13px] text-[var(--color-navy)] min-h-11"
          >
            <option value="">Matching IA — choisir un client</option>
            {clients
              .filter((c) => c.testDone)
              .map((c) => (
                <option key={c.id} value={c.id}>
                  {c.name}
                </option>
              ))}
          </select>
        </label>
      </header>

      {topMatches && selectedClient?.profile && (
        <div className="rounded-[16px] bg-[var(--color-navy)] p-4 sm:p-6 mb-6 sm:mb-7">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <Sparkles size={18} strokeWidth={1.8} className="text-[var(--color-gold)]" aria-hidden="true" />
            <span className="font-serif text-[var(--color-gold-light)] text-[15px] sm:text-[16px]">
              Matching IA — {selectedClient.name}
            </span>
            <Badge color="#C8A030">{selectedClient.profile.dominante}</Badge>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {topMatches.map((p, i) => (
              <Link
                key={p.id}
                href={`/protocoles/${p.id}`}
                className="rounded-[12px] px-4 py-4 transition-colors hover:bg-white/15"
                style={{
                  background: "rgba(255,255,255,0.07)",
                  borderLeft: `3px solid ${p.color}`,
                }}
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="text-[13px] font-bold text-white">
                    #{i + 1} {p.name}
                  </div>
                  <div className="font-serif text-[18px] font-bold tabular" style={{ color: p.color }}>
                    {p.score}%
                  </div>
                </div>
                <MatchBar score={p.score} color={p.color} />
                <div className="text-[11px] text-white/50 mt-2 leading-[1.5]">
                  {p.reason.split(".")[0]}.
                </div>
                <div className="text-[11px] text-[var(--color-gold)] mt-2 font-semibold">
                  Voir la fiche →
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Mode toggle */}
      <div
        className="inline-flex items-center rounded-[20px] p-1 mb-5"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        {(
          [
            { key: "pratique", label: "Par pratique" },
            { key: "objectif", label: "Par objectif" },
          ] as const
        ).map((m) => (
          <button
            key={m.key}
            onClick={() => setMode(m.key)}
            className="px-4 py-1.5 rounded-[16px] text-[12px] font-semibold transition-colors"
            style={{
              backgroundColor: mode === m.key ? "var(--color-navy)" : "transparent",
              color: mode === m.key ? "var(--color-gold-light)" : "var(--color-gray-soft)",
            }}
          >
            {m.label}
          </button>
        ))}
      </div>

      {mode === "pratique" ? (
        <PracticeView
          protocols={protocols}
          practices={practices}
          filter={practiceFilter}
          onFilterChange={setPracticeFilter}
          matchScoreFor={matchScoreFor}
        />
      ) : (
        <ObjectiveView
          protocols={protocols}
          objectives={objectives}
          filter={objectiveFilter}
          onFilterChange={setObjectiveFilter}
          matchScoreFor={matchScoreFor}
        />
      )}
    </div>
  );
}

interface PillRowProps {
  options: string[];
  value: string;
  onChange: (v: string) => void;
}

function PillRow({ options, value, onChange }: PillRowProps) {
  return (
    <div className="flex flex-wrap gap-2 mb-6">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            onClick={() => onChange(opt)}
            className="rounded-[20px] px-4 py-1.5 text-[12px] font-semibold transition-all"
            style={{
              border: `1.5px solid ${active ? "var(--color-navy)" : "#E5E7EB"}`,
              background: active ? "var(--color-navy)" : "var(--color-white-soft)",
              color: active ? "white" : "var(--color-navy)",
            }}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}

interface ViewProps {
  protocols: Protocol[];
  filter: string;
  onFilterChange: (v: string) => void;
  matchScoreFor: (id: number) => number | null;
}

function PracticeView({
  protocols,
  practices,
  filter,
  onFilterChange,
  matchScoreFor,
}: ViewProps & { practices: string[] }) {
  const filtered = filter === "Tous" ? protocols : protocols.filter((p) => p.practice === filter);
  return (
    <>
      <PillRow options={practices} value={filter} onChange={onFilterChange} />
      <div
        className="grid gap-4 stagger"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))" }}
      >
        {filtered.map((p) => (
          <ProtocolCard key={p.id} protocol={p} matchScore={matchScoreFor(p.id)} />
        ))}
      </div>
    </>
  );
}

function ObjectiveView({
  protocols,
  objectives,
  filter,
  onFilterChange,
  matchScoreFor,
}: ViewProps & { objectives: string[] }) {
  const groupNames = filter === "Tous" ? objectives.filter((o) => o !== "Tous") : [filter];
  const groups = groupNames
    .map((obj) => ({
      objective: obj,
      protocols: protocols.filter((p) => p.motifs.includes(obj)),
    }))
    .filter((g) => g.protocols.length > 0);

  return (
    <>
      <PillRow options={objectives} value={filter} onChange={onFilterChange} />
      <div className="space-y-8">
        {groups.map((g) => (
          <section key={g.objective}>
            <div className="flex items-center gap-3 mb-3">
              <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
                {g.objective}
              </h2>
              <span className="text-[11px] text-[var(--color-gray-soft)]">
                {g.protocols.length} protocole{g.protocols.length > 1 ? "s" : ""}
              </span>
              <div
                className="flex-1 h-px"
                style={{ backgroundColor: "var(--color-light-gray)" }}
              />
            </div>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))" }}
            >
              {g.protocols.map((p) => (
                <ProtocolCard key={p.id} protocol={p} matchScore={matchScoreFor(p.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
