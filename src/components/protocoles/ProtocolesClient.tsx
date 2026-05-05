"use client";

import { useState, useMemo } from "react";
import { Sparkles, Star, Search } from "lucide-react";
import { ProtocolCard } from "./ProtocolCard";
import { Badge } from "@/components/ui/Badge";
import { MatchBar } from "@/components/ui/MatchBar";
import Link from "next/link";
import type { Client, Protocol } from "@/lib/types";
import { FEATURED_PROTOCOL_IDS } from "@/lib/protocol-featured";

const PAGE_SIZE = 36;

interface ProtocolesClientProps {
  protocols: Protocol[];
  clients: Client[];
}

type Mode = "recommande" | "pratique" | "objectif";

export function ProtocolesClient({ protocols, clients }: ProtocolesClientProps) {
  const [mode, setMode] = useState<Mode>("recommande");
  const [practiceFilter, setPracticeFilter] = useState<string>("Tous");
  const [objectiveFilter, setObjectiveFilter] = useState<string>("Tous");
  const [selectedClientId, setSelectedClientId] = useState<string | null>(null);
  const [search, setSearch] = useState<string>("");

  // Apply text search before any view-specific filtering.
  const searched = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return protocols;
    return protocols.filter((p) => {
      if (p.name.toLowerCase().includes(q)) return true;
      if (p.category?.toLowerCase().includes(q)) return true;
      if (p.practice?.toLowerCase().includes(q)) return true;
      if (p.description?.toLowerCase().includes(q)) return true;
      if (p.tags.some((t) => t.toLowerCase().includes(q))) return true;
      if (p.motifs.some((m) => m.toLowerCase().includes(q))) return true;
      return false;
    });
  }, [protocols, search]);

  const featured = useMemo(() => {
    const byId = new Map(protocols.map((p) => [p.id, p] as const));
    return FEATURED_PROTOCOL_IDS.map((id) => byId.get(id)).filter(
      (p): p is Protocol => p !== undefined,
    );
  }, [protocols]);

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
    const present = new Set(searched.map((p) => p.practice));
    const ordered = PRACTICE_ORDER.filter((p) => present.has(p));
    const extras = Array.from(present).filter((p) => !PRACTICE_ORDER.includes(p)).sort();
    return ["Tous", ...ordered, ...extras];
  }, [searched]);

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
    searched.forEach((p) => p.motifs.forEach((m) => present.add(m)));
    const ordered = MOTIFS_ORDER.filter((m) => present.has(m));
    const extras = Array.from(present).filter((m) => !MOTIFS_ORDER.includes(m)).sort();
    return ["Tous", ...ordered, ...extras];
  }, [searched]);

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

      {/* Mode toggle + search */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-5">
        <div
          className="inline-flex items-center rounded-[20px] p-1 self-start"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          {(
            [
              { key: "recommande", label: "Recommandé KIIKA" },
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
        <label className="relative flex-1 sm:max-w-md">
          <span className="sr-only">Rechercher un protocole</span>
          <Search
            size={16}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-soft)] pointer-events-none"
            aria-hidden="true"
          />
          <input
            type="search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Rechercher (nom, motif, tag...)"
            className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] pl-9 pr-3 py-2 text-[13px] text-[var(--color-navy)] min-h-10"
          />
        </label>
      </div>

      {mode === "recommande" ? (
        <RecommendedView
          featured={featured}
          search={search}
          searched={searched}
          matchScoreFor={matchScoreFor}
        />
      ) : mode === "pratique" ? (
        <PracticeView
          protocols={searched}
          practices={practices}
          filter={practiceFilter}
          onFilterChange={setPracticeFilter}
          matchScoreFor={matchScoreFor}
        />
      ) : (
        <ObjectiveView
          protocols={searched}
          objectives={objectives}
          filter={objectiveFilter}
          onFilterChange={setObjectiveFilter}
          matchScoreFor={matchScoreFor}
        />
      )}
    </div>
  );
}

interface RecommendedViewProps {
  featured: Protocol[];
  search: string;
  searched: Protocol[];
  matchScoreFor: (id: number) => number | null;
}

function RecommendedView({ featured, search, searched, matchScoreFor }: RecommendedViewProps) {
  // When searching from the recommended view, show search results across the
  // full library instead of the curated short list.
  if (search.trim()) {
    return (
      <PaginatedGrid
        protocols={searched}
        matchScoreFor={matchScoreFor}
        emptyMessage="Aucun protocole ne correspond à votre recherche."
      />
    );
  }

  return (
    <section>
      <div className="flex items-center gap-3 mb-3">
        <Star size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Sélection KIIKA — les essentiels
        </h2>
        <span className="text-[11px] text-[var(--color-gray-soft)]">
          {featured.length} protocoles à connaître
        </span>
        <div className="flex-1 h-px" style={{ backgroundColor: "var(--color-light-gray)" }} />
      </div>
      <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-5 max-w-2xl">
        Une sélection éditoriale d'outils universellement utiles : anamnèse structurée, cadrage
        d'objectif, lecture systémique, recadrage, ancrage de ressources, libération symbolique.
        Bascule sur «&nbsp;Par pratique&nbsp;» ou «&nbsp;Par objectif&nbsp;» pour explorer le
        catalogue complet.
      </p>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))" }}
      >
        {featured.map((p) => (
          <ProtocolCard key={p.id} protocol={p} matchScore={matchScoreFor(p.id)} />
        ))}
      </div>
    </section>
  );
}

interface PaginatedGridProps {
  protocols: Protocol[];
  matchScoreFor: (id: number) => number | null;
  emptyMessage?: string;
}

function PaginatedGrid({ protocols, matchScoreFor, emptyMessage }: PaginatedGridProps) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = protocols.slice(0, visible);
  const hasMore = protocols.length > visible;

  if (protocols.length === 0) {
    return (
      <p className="text-[13px] text-[var(--color-gray-soft)] py-8 text-center">
        {emptyMessage ?? "Aucun protocole."}
      </p>
    );
  }

  return (
    <>
      <div
        className="grid gap-4"
        style={{ gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))" }}
      >
        {shown.map((p) => (
          <ProtocolCard key={p.id} protocol={p} matchScore={matchScoreFor(p.id)} />
        ))}
      </div>
      {hasMore && (
        <div className="flex justify-center mt-6">
          <button
            type="button"
            onClick={() => setVisible((v) => v + PAGE_SIZE)}
            className="rounded-[12px] px-5 py-2.5 text-[13px] font-semibold transition-colors"
            style={{
              backgroundColor: "var(--color-navy)",
              color: "var(--color-gold-light)",
            }}
          >
            Voir plus ({protocols.length - visible} restants)
          </button>
        </div>
      )}
    </>
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
      <PaginatedGrid key={`practice:${filter}`} protocols={filtered} matchScoreFor={matchScoreFor} />
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
  // Single objective selected -> standard paginated grid.
  if (filter !== "Tous") {
    const filtered = protocols.filter((p) => p.motifs.includes(filter));
    return (
      <>
        <PillRow options={objectives} value={filter} onChange={onFilterChange} />
        <PaginatedGrid key={`objective:${filter}`} protocols={filtered} matchScoreFor={matchScoreFor} />
      </>
    );
  }

  // "Tous": show grouped sections, each capped to a few cards with a "Voir tous"
  // shortcut that switches the filter to that group. Avoids rendering hundreds of
  // cards at once on the default view.
  const PER_GROUP = 6;
  const groupNames = objectives.filter((o) => o !== "Tous");
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
              {g.protocols.length > PER_GROUP && (
                <button
                  type="button"
                  onClick={() => onFilterChange(g.objective)}
                  className="text-[12px] font-semibold text-[var(--color-gold)] hover:underline"
                >
                  Voir tous →
                </button>
              )}
            </div>
            <div
              className="grid gap-4"
              style={{ gridTemplateColumns: "repeat(auto-fill, minmax(278px, 1fr))" }}
            >
              {g.protocols.slice(0, PER_GROUP).map((p) => (
                <ProtocolCard key={p.id} protocol={p} matchScore={matchScoreFor(p.id)} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
