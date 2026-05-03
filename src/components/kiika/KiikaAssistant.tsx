"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import { Sparkles, Brain, Zap, AlertCircle, Lightbulb, ShieldAlert, BookOpen } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { MatchBar } from "@/components/ui/MatchBar";
import { EmptyState } from "@/components/ui/EmptyState";
import {
  analyzeClientWithKiika,
  deepAnalyzeClientWithLLM,
  type KiikaAnalysisResult,
} from "@/lib/actions";
import type { Client } from "@/lib/types";

interface KiikaAssistantProps {
  clients: Client[];
  llmEnabled: boolean;
}

interface DeepAnalysis {
  insight?: string;
  alternativeAngles?: string[];
  cautionPoints?: string[];
}

export function KiikaAssistant({ clients, llmEnabled }: KiikaAssistantProps) {
  const [selectedId, setSelectedId] = useState<string | null>(clients[0]?.id ?? null);
  const [analysis, setAnalysis] = useState<KiikaAnalysisResult | null>(null);
  const [deep, setDeep] = useState<DeepAnalysis | null>(null);
  const [pendingHeur, startHeur] = useTransition();
  const [pendingDeep, startDeep] = useTransition();

  const selected = clients.find((c) => c.id === selectedId) ?? null;

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
      });
      toast.success("Analyse approfondie générée");
    });
  };

  return (
    <>
      <header className="mb-6 sm:mb-8">
        <div className="flex items-center gap-3 mb-2">
          <div
            className="inline-flex items-center justify-center rounded-[12px] w-10 h-10"
            style={{ background: "linear-gradient(135deg, #1B2D47 0%, #C8A030 100%)" }}
            aria-hidden="true"
          >
            <Sparkles size={20} className="text-white" />
          </div>
          <div>
            <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)] leading-none">
              Demande à KIIKA
            </h1>
            <p className="mt-1 text-[12.5px] sm:text-[13px] text-[var(--color-gray-soft)]">
              L&apos;assistant qui analyse un profil client et propose les protocoles les plus alignés
            </p>
          </div>
        </div>
      </header>

      {clients.length === 0 ? (
        <div
          className="rounded-[16px]"
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
        <div className="grid gap-5 lg:grid-cols-[320px_1fr]">
          {/* Sélecteur client */}
          <aside
            className="rounded-[16px] p-4 sm:p-5 self-start"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h2 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-3">
              Choisir un client
            </h2>
            <ul className="space-y-1.5 max-h-[420px] overflow-y-auto -mx-2 px-2">
              {clients.map((c) => {
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
                      className="w-full flex items-center gap-3 rounded-[10px] px-2.5 py-2 text-left transition-colors"
                      style={{
                        backgroundColor: active ? "rgba(200,160,48,0.10)" : "transparent",
                        borderLeft: active ? "3px solid var(--color-gold)" : "3px solid transparent",
                      }}
                    >
                      <Avatar initials={c.initials} color={c.color} size={32} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                          {c.name}
                        </div>
                        <div className="text-[11px] text-[var(--color-gray-soft)]">
                          {c.testDone ? c.profile?.dominante ?? "Profil" : "Test à faire"}
                        </div>
                      </div>
                    </button>
                  </li>
                );
              })}
            </ul>

            {selected && (
              <div className="mt-4 pt-4 border-t border-[var(--color-light-gray)] space-y-2">
                <button
                  type="button"
                  onClick={runHeuristic}
                  disabled={pendingHeur}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11 transition-opacity disabled:opacity-50"
                  style={{ backgroundColor: "var(--color-navy)" }}
                >
                  <Zap size={14} aria-hidden="true" />
                  {pendingHeur ? "Analyse…" : "Analyser ce client"}
                </button>
                <p className="text-[11px] text-[var(--color-gray-soft)] leading-[1.4]">
                  Algorithme local basé sur le profil psychométrique, les motifs et les pratiques.
                  Aucune donnée ne quitte KIIKA.
                </p>
              </div>
            )}
          </aside>

          {/* Résultats */}
          <section className="space-y-4">
            {!analysis && (
              <div
                className="rounded-[16px] p-8 text-center"
                style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
              >
                <Sparkles size={28} className="mx-auto text-[var(--color-gold)]" aria-hidden="true" />
                <p className="mt-3 text-[14px] text-[var(--color-navy)] font-semibold">
                  Sélectionnez un client puis lancez une analyse
                </p>
                <p className="mt-1 text-[12.5px] text-[var(--color-gray-soft)] max-w-md mx-auto">
                  KIIKA classera les protocoles de votre bibliothèque par pertinence, avec une
                  explication claire pour chaque recommandation.
                </p>
              </div>
            )}

            {analysis && analysis.ranked && analysis.ranked.length === 0 && (
              <div
                className="rounded-[16px] p-6"
                style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
              >
                <div className="inline-flex items-center gap-2 text-[var(--color-gold)]">
                  <AlertCircle size={16} aria-hidden="true" />
                  <span className="text-[13px] font-semibold">Pas assez de données</span>
                </div>
                <p className="mt-2 text-[13px] text-[var(--color-gray-soft)]">
                  Le profil de ce client est trop peu renseigné pour générer un matching pertinent.
                  Faites passer le test psychométrique ou ajoutez des thèmes/objectifs dans la fiche.
                </p>
              </div>
            )}

            {analysis && analysis.ranked && analysis.ranked.length > 0 && (
              <>
                <div
                  className="rounded-[16px] p-5"
                  style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
                >
                  <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
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

                {/* Bouton LLM */}
                <div
                  className="rounded-[16px] p-5"
                  style={{
                    background:
                      "linear-gradient(135deg, var(--color-navy) 0%, #2A3F5C 100%)",
                    boxShadow: "var(--shadow-card)",
                  }}
                >
                  <div className="flex items-start gap-3 mb-3">
                    <Brain size={22} className="text-[var(--color-gold)] flex-shrink-0 mt-0.5" aria-hidden="true" />
                    <div className="flex-1">
                      <h3 className="font-serif text-[16px] font-semibold text-white">
                        Analyse approfondie par IA
                      </h3>
                      <p className="mt-1 text-[12px] text-white/70 leading-[1.5]">
                        Un modèle de langage avancé examine le profil et les protocoles candidats
                        pour livrer une lecture nuancée, des angles alternatifs et des points de
                        vigilance. Le payload est <strong>anonymisé</strong> (initiales seules).
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
                    <div
                      className="inline-flex items-center gap-2 rounded-[10px] border border-white/20 px-4 py-2.5 text-[12.5px] text-white/65"
                    >
                      <ShieldAlert size={14} aria-hidden="true" />
                      <span>
                        Désactivé — l&apos;éditeur active cette fonctionnalité sur demande.
                      </span>
                    </div>
                  )}
                </div>

                {/* Résultat LLM */}
                {deep && (
                  <div
                    className="rounded-[16px] p-5"
                    style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
                  >
                    <div className="flex items-center gap-2 mb-3">
                      <Brain size={16} className="text-[var(--color-gold)]" aria-hidden="true" />
                      <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
                        Lecture KIIKA
                      </h3>
                    </div>
                    {deep.insight && (
                      <div className="prose-kiika text-[13px] text-[var(--color-navy)] leading-[1.65] whitespace-pre-wrap">
                        {deep.insight}
                      </div>
                    )}
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
                      <div className="mt-5 rounded-[10px] p-3.5" style={{ backgroundColor: "rgba(184,84,80,0.08)" }}>
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
      )}
    </>
  );
}
