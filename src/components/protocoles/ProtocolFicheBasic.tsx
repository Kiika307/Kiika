"use client";

import Link from "next/link";
import {
  ChevronLeft,
  Clock,
  Target,
  BookOpen,
  Sparkles,
  CheckCircle2,
  Tag,
  Layers,
  AlertCircle,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import type { Protocol } from "@/lib/types";

/**
 * Fiche "automatique" générée à partir des données réelles du protocole en base.
 * Utilisée pour les ~300 protocoles qui n'ont pas de fiche détaillée hand-crafted.
 *
 * Affiche : pratique + catégorie + niveau + durée + description + objectifs +
 * indications (motifs) + mots-clés + source bibliographique + nombre de séances.
 */
export function ProtocolFicheBasic({ protocol }: { protocol: Protocol }) {
  const sourceLabel = protocol.source
    ? protocol.source.startsWith("The Big Book")
      ? "The Big Book of NLP — Shlomo Vaknin (2008)"
      : protocol.source.startsWith("Hammond")
        ? "Hammond 1990 — Handbook of Hypnotic Suggestions and Metaphors (ASCH/Norton)"
        : protocol.source
    : null;

  return (
    <div>
      <Link
        href="/protocoles"
        className="inline-flex items-center gap-1 text-[13px] text-[var(--color-gray-soft)] hover:text-[var(--color-navy)]"
      >
        <ChevronLeft size={14} strokeWidth={2} aria-hidden="true" />
        Retour au catalogue
      </Link>

      {/* Bandeau header avec accent couleur */}
      <header
        className="mt-4 rounded-[18px] p-6 sm:p-8 relative overflow-hidden"
        style={{
          background: `linear-gradient(135deg, var(--color-navy) 0%, ${protocol.color}40 100%)`,
        }}
      >
        <div
          className="pointer-events-none absolute -top-12 -right-12 h-40 w-40 rounded-full opacity-30 blur-3xl"
          style={{ background: `radial-gradient(circle, ${protocol.color} 0%, transparent 70%)` }}
          aria-hidden="true"
        />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <Badge color={protocol.color}>{protocol.category}</Badge>
            <span
              className="text-[10px] uppercase tracking-[0.2em] text-white/70 font-semibold"
            >
              {protocol.practice}
            </span>
          </div>
          <h1 className="font-serif text-[26px] sm:text-[32px] font-bold text-white leading-[1.15]">
            {protocol.name}
          </h1>
          <p className="mt-3 text-[14px] sm:text-[15px] text-white/80 leading-[1.6] max-w-2xl">
            {protocol.description}
          </p>

          <div className="mt-5 flex flex-wrap gap-3 sm:gap-5">
            <Stat icon={<Layers size={14} aria-hidden="true" />} label="Niveau" value={protocol.level} />
            <Stat icon={<Clock size={14} aria-hidden="true" />} label="Durée" value={protocol.duration} />
            <Stat icon={<Sparkles size={14} aria-hidden="true" />} label="Séances" value={`${protocol.sessions}`} />
          </div>
        </div>
      </header>

      <div className="mt-6 grid gap-5 lg:grid-cols-[1fr_300px]">
        {/* Colonne principale */}
        <div className="space-y-5">
          {/* Objectifs */}
          {protocol.objectives.length > 0 && (
            <section
              className="rounded-[16px] p-5 sm:p-6"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-3 inline-flex items-center gap-2">
                <Target size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                Objectifs du protocole
              </h2>
              <ul className="space-y-2.5">
                {protocol.objectives.map((o, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-2.5 text-[13.5px] text-[var(--color-navy)] leading-[1.5]"
                  >
                    <CheckCircle2
                      size={15}
                      strokeWidth={2}
                      className="text-[var(--color-teal)] mt-0.5 flex-shrink-0"
                      aria-hidden="true"
                    />
                    <span>{o}</span>
                  </li>
                ))}
              </ul>
            </section>
          )}

          {/* Indications (motifs) */}
          {protocol.motifs.length > 0 && (
            <section
              className="rounded-[16px] p-5 sm:p-6"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-2 inline-flex items-center gap-2">
                <Sparkles size={18} className="text-[var(--color-gold)]" aria-hidden="true" />
                Indications
              </h2>
              <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-3">
                Motifs d&apos;accompagnement adressés par ce protocole.
              </p>
              <div className="flex flex-wrap gap-2">
                {protocol.motifs.map((m) => (
                  <Badge key={m} color={protocol.color}>
                    {m}
                  </Badge>
                ))}
              </div>
            </section>
          )}

          {/* Mots-clés */}
          {protocol.tags.length > 0 && (
            <section
              className="rounded-[16px] p-5 sm:p-6"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3 inline-flex items-center gap-2">
                <Tag size={15} className="text-[var(--color-gold)]" aria-hidden="true" />
                Mots-clés
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {protocol.tags.map((t) => (
                  <span
                    key={t}
                    className="text-[12px] text-[var(--color-gray-soft)] bg-[var(--color-light-gray)] rounded-[10px] px-2.5 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </section>
          )}

          {/* Note pédagogique */}
          <section
            className="rounded-[16px] p-4 sm:p-5"
            style={{
              backgroundColor: "rgba(200,160,48,0.06)",
              border: "1px solid rgba(200,160,48,0.2)",
            }}
          >
            <div className="flex items-start gap-2.5">
              <AlertCircle
                size={16}
                className="text-[var(--color-gold)] flex-shrink-0 mt-0.5"
                aria-hidden="true"
              />
              <div className="text-[12.5px] text-[var(--color-navy)] leading-[1.55]">
                <strong>Fiche synthétique</strong> — Cette fiche présente les éléments
                essentiels du protocole tels qu&apos;extraits de la source bibliographique.
                Une fiche détaillée multi-séances avec étapes, scripts et outils sera
                progressivement ajoutée pour les protocoles les plus utilisés.
              </div>
            </div>
          </section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-4">
          <section
            className="rounded-[16px] p-5"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-gray-soft)] mb-3">
              Caractéristiques
            </h3>
            <dl className="space-y-3 text-[13px]">
              <Detail label="Catégorie" value={protocol.category} />
              <Detail label="Pratique" value={protocol.practice} />
              <Detail label="Niveau" value={protocol.level} />
              <Detail label="Durée par séance" value={protocol.duration} />
              <Detail label="Nombre de séances" value={`${protocol.sessions}`} />
              <Detail
                label="Indications"
                value={`${protocol.motifs.length} motif${protocol.motifs.length > 1 ? "s" : ""}`}
              />
            </dl>
          </section>

          {sourceLabel && (
            <section
              className="rounded-[16px] p-5"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h3 className="text-[10px] uppercase tracking-[0.2em] font-semibold text-[var(--color-gray-soft)] mb-2 inline-flex items-center gap-1.5">
                <BookOpen size={12} aria-hidden="true" />
                Source bibliographique
              </h3>
              <p className="text-[12.5px] text-[var(--color-navy)] leading-[1.55]">{sourceLabel}</p>
            </section>
          )}
        </aside>
      </div>
    </div>
  );
}

function Stat({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="inline-flex items-center gap-2 text-[12.5px] text-white/85">
      <span className="text-white/60">{icon}</span>
      <span className="text-white/55">{label}&nbsp;:</span>
      <span className="font-semibold text-white">{value}</span>
    </div>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-3">
      <dt className="text-[var(--color-gray-soft)]">{label}</dt>
      <dd className="font-semibold text-[var(--color-navy)] text-right">{value}</dd>
    </div>
  );
}
