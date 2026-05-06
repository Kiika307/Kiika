"use client";

import { useState, useTransition } from "react";
import Link from "next/link";
import {
  Sparkles,
  Brain,
  Loader2,
  ShieldAlert,
  Target,
  ChevronDown,
  ChevronUp,
  History as HistoryIcon,
} from "lucide-react";
import { toast } from "sonner";
import { Markdown } from "@/components/ui/Markdown";
import { generateKiikaCarePlanForClient } from "@/lib/actions";
import type { ClientKiikaCarePlan, Protocol } from "@/lib/types";

interface KiikaCarePlanCardProps {
  clientId: string;
  clientFirstName: string;
  carePlans: ClientKiikaCarePlan[];
  protocols: Protocol[];
}

const DT_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function KiikaCarePlanCard({
  clientId,
  clientFirstName,
  carePlans,
  protocols,
}: KiikaCarePlanCardProps) {
  const [pending, startTransition] = useTransition();
  const [showHistory, setShowHistory] = useState(false);

  const latest = carePlans[0] ?? null;
  const history = carePlans.slice(1);

  const protocolMap = new Map(protocols.map((p) => [p.id, p] as const));

  const handleGenerate = () => {
    startTransition(async () => {
      const res = await generateKiikaCarePlanForClient(clientId);
      if (res.ok) {
        toast.success("Conseil KIIKA généré");
      } else {
        toast.error(res.error ?? "Erreur de génération");
      }
    });
  };

  // No plan yet — invitation card.
  if (!latest) {
    return (
      <section
        className="rounded-[18px] p-6 sm:p-7"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
          color: "var(--color-gold-light)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <header className="flex items-start gap-3 mb-3">
          <Brain
            size={22}
            className="text-[var(--color-gold)] mt-0.5 shrink-0"
            aria-hidden="true"
          />
          <div className="flex-1">
            <h3 className="font-serif text-[17px] font-semibold text-white">
              Demander un conseil KIIKA
            </h3>
            <p className="mt-1 text-[12.5px] text-white/75 leading-[1.55]">
              KIIKA lit la fiche de {clientFirstName}, ses objectifs et la bibliothèque de
              protocoles, puis te propose un parcours sur 10 séances avec objectifs,
              protocoles activés, devoirs entre séances et signaux à observer.
            </p>
          </div>
        </header>
        <button
          type="button"
          onClick={handleGenerate}
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] min-h-11 transition-opacity disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold-light)" }}
        >
          {pending ? (
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
          ) : (
            <Sparkles size={14} aria-hidden="true" />
          )}
          {pending ? "Génération en cours…" : "Demander un conseil KIIKA"}
        </button>
        <p className="mt-3 text-[10.5px] text-white/55">
          Anonymisé (initiales seulement). Coût indicatif ≈ 0,05 €/conseil. ~30 secondes.
        </p>
      </section>
    );
  }

  // We have a plan — show it + offer to regenerate.
  return (
    <div className="space-y-5">
      <section
        className="rounded-[18px] p-6"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
          color: "var(--color-gold-light)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <header className="flex items-start justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-start gap-2.5">
            <Brain
              size={20}
              className="text-[var(--color-gold)] mt-0.5"
              aria-hidden="true"
            />
            <div>
              <h3 className="font-serif text-[17px] font-semibold text-white">
                Conseil KIIKA — Parcours sur 10 séances
              </h3>
              <p className="mt-0.5 text-[11.5px] text-white/55">
                Généré le {DT_FMT.format(new Date(latest.generatedAt))}
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleGenerate}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-white/20 px-3 py-1.5 text-[11.5px] font-semibold text-white/80 hover:bg-white/5 transition-colors disabled:opacity-50"
          >
            {pending ? (
              <Loader2 size={12} className="animate-spin" aria-hidden="true" />
            ) : (
              <Sparkles size={12} aria-hidden="true" />
            )}
            {pending ? "Régénération…" : "Régénérer"}
          </button>
        </header>
        {latest.direction && (
          <p className="text-[13px] text-white/85 leading-[1.6] italic">
            « {latest.direction} »
          </p>
        )}
      </section>

      {latest.diagnostic && (
        <section
          className="rounded-[18px] p-5 sm:p-6"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h4 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-3 inline-flex items-center gap-2">
            <Target size={15} className="text-[var(--color-gold)]" aria-hidden="true" />
            Lecture initiale
          </h4>
          <Markdown source={latest.diagnostic} />
        </section>
      )}

      <section
        className="rounded-[18px] p-5 sm:p-6"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-card)",
        }}
      >
        <h4 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-4">
          Parcours proposé · {latest.sessions.length} séances
        </h4>
        <ol className="space-y-3">
          {latest.sessions.map((s) => (
            <li
              key={s.num}
              className="rounded-[12px] border border-[var(--color-light-gray)] p-4"
            >
              <div className="flex items-start gap-3">
                <div
                  className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full font-serif text-[14px] font-bold text-white"
                  style={{ backgroundColor: "var(--color-gold)" }}
                  aria-hidden="true"
                >
                  {s.num}
                </div>
                <div className="flex-1 min-w-0">
                  <h5 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
                    {s.title}
                  </h5>
                  <p className="mt-1 text-[12.5px] text-[var(--color-navy)]/80 leading-[1.55]">
                    {s.objective}
                  </p>

                  {s.protocolIds.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {s.protocolIds.map((id) => {
                        const p = protocolMap.get(id);
                        if (!p) return null;
                        return (
                          <Link
                            key={id}
                            href={`/protocoles/${id}`}
                            className="inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-[11px] font-semibold transition-colors hover:bg-[var(--color-cream)]"
                            style={{ borderColor: p.color, color: p.color }}
                          >
                            <span
                              className="w-1.5 h-1.5 rounded-full"
                              style={{ backgroundColor: p.color }}
                              aria-hidden="true"
                            />
                            {p.name}
                          </Link>
                        );
                      })}
                    </div>
                  )}

                  {s.homework && (
                    <div className="mt-3 text-[11.5px] text-[var(--color-navy)]/85 leading-[1.55]">
                      <span className="text-[10px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mr-1.5">
                        Devoir
                      </span>
                      {s.homework}
                    </div>
                  )}

                  {s.signals.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.signals.map((sig, i) => (
                        <span
                          key={i}
                          className="inline-block rounded-full px-2 py-0.5 text-[10.5px] text-[var(--color-gray-soft)]"
                          style={{ backgroundColor: "var(--color-cream)" }}
                        >
                          {sig}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </li>
          ))}
        </ol>
      </section>

      {(latest.metrics.length > 0 || latest.redFlags.length > 0) && (
        <section className="grid gap-5 sm:grid-cols-2">
          {latest.metrics.length > 0 && (
            <div
              className="rounded-[18px] p-5"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h4 className="text-[12px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-3">
                Indicateurs d&apos;évolution
              </h4>
              <ul className="space-y-2">
                {latest.metrics.map((m, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[var(--color-navy)] leading-[1.55] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-gold)]"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {latest.redFlags.length > 0 && (
            <div
              className="rounded-[18px] p-5"
              style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
            >
              <h4 className="text-[12px] uppercase tracking-wide text-[#B85450] font-semibold mb-3 inline-flex items-center gap-1.5">
                <ShieldAlert size={13} aria-hidden="true" />
                Signaux de réorientation
              </h4>
              <ul className="space-y-2">
                {latest.redFlags.map((rf, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[var(--color-navy)] leading-[1.55] pl-3 border-l-2"
                    style={{ borderColor: "#B85450" }}
                  >
                    {rf}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {history.length > 0 && (
        <section
          className="rounded-[18px] p-5"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <button
            type="button"
            onClick={() => setShowHistory((v) => !v)}
            className="w-full flex items-center justify-between gap-2 text-[12px] uppercase tracking-wide text-[var(--color-gray-soft)] font-semibold"
          >
            <span className="inline-flex items-center gap-1.5">
              <HistoryIcon size={13} aria-hidden="true" />
              Conseils précédents ({history.length})
            </span>
            {showHistory ? (
              <ChevronUp size={14} aria-hidden="true" />
            ) : (
              <ChevronDown size={14} aria-hidden="true" />
            )}
          </button>
          {showHistory && (
            <ul className="mt-3 space-y-1.5">
              {history.map((h) => (
                <li
                  key={h.id}
                  className="flex items-center gap-3 text-[12px] text-[var(--color-gray-soft)]"
                >
                  <span className="text-[var(--color-navy)] font-semibold">
                    {DT_FMT.format(new Date(h.generatedAt))}
                  </span>
                  <span>·</span>
                  <span>{h.sessions.length} séances</span>
                </li>
              ))}
            </ul>
          )}
        </section>
      )}
    </div>
  );
}
