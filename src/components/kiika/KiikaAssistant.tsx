"use client";

import { useMemo, useState, useTransition } from "react";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  AlertCircle,
  Lightbulb,
  ShieldAlert,
  BookOpen,
  Search,
  Users,
  Target,
  FileText,
  ChevronRight,
} from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { MatchBar } from "@/components/ui/MatchBar";
import { EmptyState } from "@/components/ui/EmptyState";
import { Markdown } from "@/components/ui/Markdown";
import {
  analyzeClientWithKiika,
  deepAnalyzeClientWithLLM,
  type KiikaAnalysisResult,
  type LLMRecommendedProtocol,
} from "@/lib/actions";
import type { Client, ClientStatus } from "@/lib/types";

interface KiikaAssistantProps {
  clients: Client[];
  llmEnabled: boolean;
}

interface DeepAnalysis {
  insight?: string;
  alternativeAngles?: string[];
  cautionPoints?: string[];
  recommendedDetailed?: LLMRecommendedProtocol[];
}

const STATUS_LABEL: Record<ClientStatus, string> = {
  actif: "Actif",
  nouveau: "Nouveau",
  inactif: "Inactif",
};

const STATUS_DOT: Record<ClientStatus, string> = {
  actif: "var(--color-teal)",
  nouveau: "var(--color-gold)",
  inactif: "var(--color-gray-soft)",
};

export function KiikaAssistant({ clients, llmEnabled }: KiikaAssistantProps) {
  const [selectedId, setSelectedId] = useState<string | null>(clients[0]?.id ?? null);
  const [analysis, setAnalysis] = useState<KiikaAnalysisResult | null>(null);
  const [deep, setDeep] = useState<DeepAnalysis | null>(null);
  const [pendingHeur, startHeur] = useTransition();
  const [pendingDeep, startDeep] = useTransition();
  const [search, setSearch] = useState("");
  const [history, setHistory] = useState<string[]>([]);

  const selected = clients.find((c) => c.id === selectedId) ?? null;

  const filteredClients = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.name.toLowerCase().includes(q));
  }, [clients, search]);

  const recent = useMemo(() => {
    const seen = new Set<string>();
    const out: Client[] = [];
    for (const id of history) {
      const c = clients.find((x) => x.id === id);
      if (c && !seen.has(c.id)) {
        seen.add(c.id);
        out.push(c);
        if (out.length >= 3) break;
      }
    }
    return out;
  }, [history, clients]);

  const profileLabel = (c: Client): string =>
    c.testDone ? c.profile?.dominante ?? "Profil" : "Test à faire";

  const runHeuristic = () => {
    if (!selectedId) return;
    setDeep(null);
    startHeur(async () => {
      const res = await analyzeClientWithKiika(selectedId);
      if (!res.ok) {
        toast.error(res.error ?? "Erreur d'analyse");
        return;
      }
      setAnalysis(res);
      setHistory((h) => [selectedId, ...h.filter((id) => id !== selectedId)].slice(0, 6));
    });
  };

  const runDeep = () => {
    if (!selectedId) return;
    startDeep(async () => {
      const res = await deepAnalyzeClientWithLLM(selectedId);
      if (!res.ok || !res.analysis) {
        toast.error(res.error ?? "Erreur d'analyse approfondie");
        return;
      }
      setDeep({
        insight: res.analysis.insight,
        alternativeAngles: res.analysis.alternativeAngles,
        cautionPoints: res.analysis.cautionPoints,
        recommendedDetailed: res.analysis.recommendedDetailed,
      });
      toast.success("Analyse approfondie générée");
    });
  };

  return (
    <>
      <header className="mb-6 sm:mb-8">
        <h1 className="font-serif text-[26px] sm:text-[30px] font-bold text-[var(--color-navy)] leading-tight">
          Demande à KIIKA
        </h1>
        <p className="mt-1.5 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] inline-flex items-center gap-2">
          L&apos;assistant qui analyse un profil client et propose les protocoles les plus alignés
          <Sparkles size={14} className="text-[var(--color-gold)]" aria-hidden="true" />
        </p>
      </header>

      {clients.length === 0 ? (
        <div
          className="rounded-[18px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={Sparkles}
            title="Aucun client à analyser"
            message="Ajoutez d'abord un client dans votre fichier pour générer une analyse."
            action={
              <Link
                href="/clients"
                className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                Aller aux clients
              </Link>
            }
          />
        </div>
      ) : (
        <>
          <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
            {/* Sélecteur client */}
            <aside
              className="rounded-[18px] p-5 sm:p-6 self-start"
              style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
            >
              <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">
                Choisir un client
              </h2>

              <label className="relative block mb-3">
                <span className="sr-only">Rechercher un client</span>
                <Search
                  size={14}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-soft)]"
                  aria-hidden="true"
                />
                <input
                  type="search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="Rechercher un client…"
                  className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-cream)]/50 pl-9 pr-3 py-2.5 text-[13px] text-[var(--color-navy)] placeholder:text-[var(--color-gray-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] min-h-11"
                />
              </label>

              <ul className="space-y-1.5 max-h-[420px] overflow-y-auto -mx-1 px-1">
                {filteredClients.map((c) => {
                  const active = c.id === selectedId;
                  return (
                    <li key={c.id}>
                      <button
                        type="button"
                        onClick={() => {
                          setSelectedId(c.id);
                          setAnalysis(null);
                          setDeep(null);
                        }}
                        className="w-full flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors"
                        style={{
                          backgroundColor: active ? "rgba(200,160,48,0.12)" : "transparent",
                          borderLeft: active
                            ? "3px solid var(--color-gold)"
                            : "3px solid transparent",
                          paddingLeft: active ? "calc(0.75rem - 3px)" : "0.75rem",
                        }}
                      >
                        <Avatar initials={c.initials} color={c.color} size={36} />
                        <div className="flex-1 min-w-0">
                          <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                            {c.name}
                          </div>
                          <div className="text-[11.5px] text-[var(--color-gray-soft)] truncate">
                            {profileLabel(c)}
                          </div>
                        </div>
                        <span className="inline-flex items-center gap-1.5 text-[11px] text-[var(--color-gray-soft)] shrink-0">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: STATUS_DOT[c.status] }}
                            aria-hidden="true"
                          />
                          {STATUS_LABEL[c.status]}
                        </span>
                      </button>
                    </li>
                  );
                })}
                {filteredClients.length === 0 && (
                  <li className="text-[12px] text-[var(--color-gray-soft)] italic px-3 py-4">
                    Aucun client ne correspond à « {search} »
                  </li>
                )}
              </ul>

              <Link
                href="/clients"
                className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-[12px] border border-[var(--color-light-gray)] bg-[var(--color-cream)]/40 px-4 py-2.5 text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 transition-colors min-h-11"
              >
                <Users size={14} aria-hidden="true" />
                Voir tous les clients
              </Link>
            </aside>

            {/* Panneau principal */}
            <section className="space-y-4">
              {!analysis && (
                <div
                  className="rounded-[18px] p-8 sm:p-10"
                  style={{
                    backgroundColor: "var(--color-white-soft)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="text-center max-w-[480px] mx-auto">
                    <div
                      className="inline-flex items-center justify-center w-16 h-16 rounded-full mb-5"
                      style={{ backgroundColor: "var(--color-gold-light)" }}
                      aria-hidden="true"
                    >
                      <Sparkles size={26} className="text-[var(--color-gold)]" />
                    </div>
                    <h2 className="font-serif text-[20px] sm:text-[22px] font-semibold text-[var(--color-navy)]">
                      Sélectionnez un client puis lancez une analyse
                    </h2>
                    <p className="mt-2 text-[13.5px] text-[var(--color-gray-soft)] leading-[1.6]">
                      KIIKA classe les protocoles de votre bibliothèque par pertinence,
                      avec une explication claire pour chaque recommandation.
                    </p>
                    <button
                      type="button"
                      onClick={runHeuristic}
                      disabled={!selectedId || pendingHeur}
                      className="mt-6 inline-flex items-center justify-center gap-2 rounded-[12px] px-6 py-3 text-[14px] font-semibold text-white min-h-12 transition-opacity hover:opacity-95 disabled:opacity-50 disabled:cursor-not-allowed"
                      style={{ backgroundColor: "var(--color-gold)" }}
                    >
                      <Sparkles size={16} aria-hidden="true" />
                      {pendingHeur
                        ? "Analyse…"
                        : selected
                          ? `Lancer l'analyse de ${selected.name.split(" ")[0]}`
                          : "Lancer l'analyse du client sélectionné"}
                    </button>
                  </div>

                  <div
                    className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 rounded-[14px] p-4 sm:p-5"
                    style={{ backgroundColor: "var(--color-cream)" }}
                  >
                    <Feature
                      icon={Target}
                      title="Analyse ciblée"
                      body="Basée sur les données et l'historique du client"
                    />
                    <Feature
                      icon={BookOpen}
                      title="Recommandations sur-mesure"
                      body="Protocoles classés par pertinence et niveau d'alignement"
                    />
                    <Feature
                      icon={FileText}
                      title="Explications claires"
                      body="Comprenez pourquoi chaque protocole est recommandé"
                    />
                  </div>
                </div>
              )}

              {analysis && analysis.ranked && analysis.ranked.length === 0 && (
                <div
                  className="rounded-[18px] p-6"
                  style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="inline-flex items-center gap-2 text-[var(--color-gold)]">
                    <AlertCircle size={16} aria-hidden="true" />
                    <span className="text-[13px] font-semibold">Pas assez de données</span>
                  </div>
                  <p className="mt-2 text-[13px] text-[var(--color-gray-soft)]">
                    Le profil de ce client est trop peu renseigné pour générer un matching
                    pertinent. Faites passer le test psychométrique ou ajoutez des
                    thèmes/objectifs dans la fiche.
                  </p>
                </div>
              )}

              {analysis && analysis.ranked && analysis.ranked.length > 0 && (
                <>
                  <div
                    className="rounded-[18px] p-5 sm:p-6"
                    style={{
                      backgroundColor: "var(--color-white-soft)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                      <h2 className="font-serif text-[17px] font-semibold text-[var(--color-navy)]">
                        Top {analysis.ranked.length} protocoles pour {analysis.clientName}
                      </h2>
                      <Badge color="#C8A030">Algorithme local</Badge>
                    </div>
                    <ol className="space-y-3 stagger">
                      {analysis.ranked.map((r, i) => (
                        <li
                          key={r.protocol.id}
                          className="rounded-[12px] border border-[var(--color-light-gray)] p-3.5"
                        >
                          <div className="flex items-start gap-3">
                            <div
                              className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full font-serif text-[15px] font-bold text-white"
                              style={{ backgroundColor: r.protocol.color }}
                              aria-hidden="true"
                            >
                              {i + 1}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-baseline justify-between gap-2 flex-wrap">
                                <Link
                                  href={`/protocoles/${r.protocol.id}`}
                                  className="font-serif text-[15px] font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
                                >
                                  {r.protocol.name}
                                </Link>
                                <span
                                  className="font-serif text-[16px] font-bold tabular"
                                  style={{ color: r.protocol.color }}
                                >
                                  {r.score}%
                                </span>
                              </div>
                              <div className="mt-0.5 text-[11px] text-[var(--color-gray-soft)]">
                                {r.protocol.practice} · {r.protocol.category} · {r.protocol.level}
                              </div>
                              <div className="mt-2">
                                <MatchBar score={r.score} color={r.protocol.color} />
                              </div>
                              <p className="mt-2.5 text-[12.5px] text-[var(--color-navy)] leading-[1.55]">
                                {r.reasoning}
                              </p>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div
                    className="rounded-[18px] p-5"
                    style={{
                      background:
                        "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
                      boxShadow: "var(--shadow-card)",
                    }}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <Brain
                        size={22}
                        className="text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                        aria-hidden="true"
                      />
                      <div className="flex-1">
                        <h3 className="font-serif text-[16px] font-semibold text-white">
                          Analyse approfondie par IA
                        </h3>
                        <p className="mt-1 text-[12px] text-white/70 leading-[1.5]">
                          Un modèle de langage avancé examine le profil et les protocoles
                          candidats pour livrer une lecture nuancée, des angles alternatifs et
                          des points de vigilance. Le payload est <strong>anonymisé</strong>{" "}
                          (initiales seules).
                        </p>
                      </div>
                    </div>
                    {llmEnabled ? (
                      <button
                        type="button"
                        onClick={runDeep}
                        disabled={pendingDeep}
                        className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] min-h-11 transition-opacity disabled:opacity-50"
                        style={{ backgroundColor: "var(--color-gold-light)" }}
                      >
                        <Sparkles size={14} aria-hidden="true" />
                        {pendingDeep ? "Analyse en cours…" : "Demander à KIIKA"}
                      </button>
                    ) : (
                      <div className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 px-4 py-2.5 text-[12.5px] text-white/65">
                        <ShieldAlert size={14} aria-hidden="true" />
                        <span>
                          Désactivé — l&apos;éditeur active cette fonctionnalité sur demande.
                        </span>
                      </div>
                    )}
                  </div>

                  {deep && deep.recommendedDetailed && deep.recommendedDetailed.length > 0 && (
                    <div
                      className="rounded-[18px] p-5 sm:p-6"
                      style={{
                        backgroundColor: "var(--color-white-soft)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <div className="flex items-center justify-between mb-4 flex-wrap gap-2">
                        <div className="flex items-center gap-2">
                          <Brain
                            size={16}
                            className="text-[var(--color-gold)]"
                            aria-hidden="true"
                          />
                          <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
                            Sélection KIIKA
                          </h3>
                        </div>
                        <Badge color="#7C5CBF">IA · re-classement</Badge>
                      </div>
                      <ol className="space-y-3">
                        {deep.recommendedDetailed.map((r) => (
                          <li
                            key={r.protocolId}
                            className="rounded-[12px] border border-[var(--color-light-gray)] p-3.5"
                          >
                            <div className="flex items-start gap-3">
                              <div
                                className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full font-serif text-[15px] font-bold text-white"
                                style={{ backgroundColor: r.protocol.color }}
                                aria-hidden="true"
                              >
                                {r.rank}
                              </div>
                              <div className="flex-1 min-w-0">
                                <Link
                                  href={`/protocoles/${r.protocol.id}`}
                                  className="font-serif text-[15px] font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
                                >
                                  {r.protocol.name}
                                </Link>
                                <div className="mt-0.5 text-[11px] text-[var(--color-gray-soft)]">
                                  {r.protocol.practice} · {r.protocol.category} ·{" "}
                                  {r.protocol.level}
                                </div>
                                <p className="mt-2 text-[12.5px] text-[var(--color-navy)] leading-[1.6]">
                                  {r.reasoning}
                                </p>
                              </div>
                            </div>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {deep && (
                    <div
                      className="rounded-[18px] p-5"
                      style={{
                        backgroundColor: "var(--color-white-soft)",
                        boxShadow: "var(--shadow-card)",
                      }}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Brain size={16} className="text-[var(--color-gold)]" aria-hidden="true" />
                        <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
                          Lecture KIIKA
                        </h3>
                      </div>
                      {deep.insight && <Markdown source={deep.insight} />}
                      {deep.alternativeAngles && deep.alternativeAngles.length > 0 && (
                        <div className="mt-5">
                          <h4 className="text-[12px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-2 inline-flex items-center gap-1.5">
                            <Lightbulb size={13} aria-hidden="true" />
                            Angles alternatifs
                          </h4>
                          <ul className="space-y-1.5">
                            {deep.alternativeAngles.map((a, i) => (
                              <li
                                key={i}
                                className="text-[12.5px] text-[var(--color-navy)] leading-[1.5] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-gold)]"
                              >
                                {a}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                      {deep.cautionPoints && deep.cautionPoints.length > 0 && (
                        <div
                          className="mt-5 rounded-[10px] p-3.5"
                          style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
                        >
                          <h4 className="text-[12px] uppercase tracking-wide text-[#B85450] font-semibold mb-2 inline-flex items-center gap-1.5">
                            <ShieldAlert size={13} aria-hidden="true" />
                            Points de vigilance
                          </h4>
                          <ul className="space-y-1.5">
                            {deep.cautionPoints.map((c, i) => (
                              <li
                                key={i}
                                className="text-[12.5px] text-[var(--color-navy)] leading-[1.5] pl-3 border-l-2"
                                style={{ borderColor: "#B85450" }}
                              >
                                {c}
                              </li>
                            ))}
                          </ul>
                        </div>
                      )}
                    </div>
                  )}

                  <Link
                    href="/protocoles"
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-gold)] hover:underline"
                  >
                    <BookOpen size={13} aria-hidden="true" />
                    Voir toute la bibliothèque de protocoles →
                  </Link>
                </>
              )}
            </section>
          </div>

          {/* Suggestions d'analyses récentes — visible dès qu'on a relancé une analyse */}
          {!analysis && recent.length > 0 && (
            <section
              className="mt-5 rounded-[18px] p-5 sm:p-6"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-4">
                Suggestions d&apos;analyses récentes
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                {recent.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setSelectedId(c.id);
                      setAnalysis(null);
                      setDeep(null);
                      runHeuristic();
                    }}
                    className="rounded-[12px] border border-[var(--color-light-gray)] bg-[var(--color-cream)]/40 p-3.5 text-left hover:bg-[var(--color-cream)]/70 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <Avatar initials={c.initials} color={c.color} size={32} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-[var(--color-gray-soft)] truncate">
                          {profileLabel(c)}
                        </div>
                      </div>
                      <ChevronRight
                        size={14}
                        className="text-[var(--color-gray-soft)]"
                        aria-hidden="true"
                      />
                    </div>
                  </button>
                ))}
                <Link
                  href="/clients"
                  className="rounded-[12px] border border-dashed border-[var(--color-light-gray)] p-3.5 inline-flex items-center justify-center gap-2 text-[12.5px] font-semibold text-[var(--color-gray-soft)] hover:text-[var(--color-navy)] hover:bg-[var(--color-cream)]/40 transition-colors"
                >
                  <Sparkles size={13} aria-hidden="true" />
                  Voir tous les clients
                </Link>
              </div>
            </section>
          )}
        </>
      )}
    </>
  );
}

function Feature({
  icon: Icon,
  title,
  body,
}: {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  body: string;
}) {
  return (
    <div className="flex items-start gap-2.5">
      <div
        className="inline-flex items-center justify-center w-8 h-8 rounded-[8px] shrink-0"
        style={{ backgroundColor: "var(--color-white-soft)" }}
        aria-hidden="true"
      >
        <Icon size={15} className="text-[var(--color-gold)]" />
      </div>
      <div className="min-w-0">
        <div className="text-[12.5px] font-semibold text-[var(--color-navy)]">{title}</div>
        <p className="mt-0.5 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.5]">{body}</p>
      </div>
    </div>
  );
}
