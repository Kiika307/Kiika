import Link from "next/link";
import { Sparkles, Lightbulb, ShieldAlert, Brain, Target, ArrowRight } from "lucide-react";
import { MatchBar } from "@/components/ui/MatchBar";
import { Badge } from "@/components/ui/Badge";
import { Markdown } from "@/components/ui/Markdown";
import type { Client, ClientKiikaAnalysis, Protocol } from "@/lib/types";

interface MatchingTabProps {
  client: Client;
  protocols: Protocol[];
  kiikaAnalyses: ClientKiikaAnalysis[];
}

const DT_FMT = new Intl.DateTimeFormat("fr-FR", {
  day: "2-digit",
  month: "long",
  year: "numeric",
  hour: "2-digit",
  minute: "2-digit",
});

export function MatchingTab({ client, protocols, kiikaAnalyses }: MatchingTabProps) {
  const latest = kiikaAnalyses[0] ?? null;

  if (latest) {
    return (
      <KiikaAnalysisView
        client={client}
        protocols={protocols}
        analysis={latest}
        history={kiikaAnalyses.slice(1)}
      />
    );
  }

  // Legacy fallback — pre-KIIKA matching from the old psychometric pipeline.
  if (!client.testDone || client.topProtocols.length === 0) {
    return (
      <div
        className="rounded-[18px] p-10 text-center"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <Sparkles
          size={26}
          className="mx-auto text-[var(--color-gold)] mb-3"
          aria-hidden="true"
        />
        <p className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
          Aucune analyse KIIKA pour {client.name.split(" ")[0]} pour le moment
        </p>
        <p className="mt-1 text-[13px] text-[var(--color-gray-soft)] max-w-md mx-auto">
          Lancez une analyse depuis l&apos;onglet KIIKA — la lecture, les recommandations
          et les objectifs du client seront enregistrés ici pour donner une direction
          claire à l&apos;accompagnement.
        </p>
        <Link
          href={`/kiika`}
          className="mt-5 inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Sparkles size={14} aria-hidden="true" />
          Ouvrir KIIKA
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <section
        className="rounded-[18px] p-6"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
          color: "var(--color-gold-light)",
        }}
      >
        <header className="flex items-center gap-2 mb-3">
          <Sparkles
            size={18}
            strokeWidth={1.8}
            className="text-[var(--color-gold)]"
            aria-hidden="true"
          />
          <h3 className="font-serif text-[16px] font-semibold">Matching legacy (4 axes)</h3>
        </header>
        <p className="text-[13px] text-white/80 leading-relaxed">
          Profil{" "}
          <span className="text-[var(--color-gold-light)] font-semibold">
            {client.profile?.dominante}
          </span>{" "}
          — recommandations basées sur les axes psychométriques. Lancez une analyse KIIKA
          pour une lecture IA contextualisée.
        </p>
      </section>

      {client.topProtocols.map((tp, idx) => {
        const protocol = protocols.find((p) => p.id === tp.id);
        if (!protocol) return null;
        return (
          <article
            key={tp.id}
            className="rounded-[16px] p-6"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
              borderLeft: `4px solid ${protocol.color}`,
            }}
          >
            <header className="flex items-center gap-3 mb-4">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center font-serif font-bold text-white text-[14px]"
                style={{ backgroundColor: protocol.color }}
              >
                {idx + 1}
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-[17px] font-semibold text-[var(--color-navy)]">
                  {protocol.name}
                </h3>
                <div className="flex items-center gap-2 mt-1">
                  <Badge color={protocol.color}>{protocol.category}</Badge>
                  <span className="text-[11px] text-[var(--color-gray-soft)]">
                    {protocol.duration} · {protocol.level}
                  </span>
                </div>
              </div>
            </header>

            <MatchBar score={tp.score} color={protocol.color} />

            <p className="mt-4 text-[13px] text-[var(--color-navy)] leading-relaxed rounded-[12px] px-4 py-3 inline-flex gap-2 bg-[var(--color-cream)]">
              <Lightbulb
                size={14}
                strokeWidth={2}
                className="text-[var(--color-gold)] mt-0.5 flex-shrink-0"
                aria-hidden="true"
              />
              <span>{tp.reason}</span>
            </p>

            <div className="flex gap-3 mt-4">
              <Link
                href={`/protocoles/${protocol.id}`}
                className="rounded-[10px] border px-5 py-2.5 text-[13px] font-semibold transition-colors hover:bg-[var(--color-light-gray)] inline-flex items-center gap-1.5"
                style={{ borderColor: protocol.color, color: protocol.color }}
              >
                Fiche
                <ArrowRight size={13} strokeWidth={2.2} aria-hidden="true" />
              </Link>
            </div>
          </article>
        );
      })}
    </div>
  );
}

interface KiikaAnalysisViewProps {
  client: Client;
  protocols: Protocol[];
  analysis: ClientKiikaAnalysis;
  history: ClientKiikaAnalysis[];
}

function KiikaAnalysisView({
  client,
  protocols,
  analysis,
  history,
}: KiikaAnalysisViewProps) {
  const protocolMap = new Map(protocols.map((p) => [p.id, p] as const));
  const recommended = analysis.recommended
    .map((r) => ({ rec: r, protocol: protocolMap.get(r.protocolId) }))
    .filter((x): x is { rec: typeof x.rec; protocol: Protocol } => x.protocol != null);

  return (
    <div className="space-y-5">
      {/* Header card — direction d'accompagnement */}
      <section
        className="rounded-[18px] p-6"
        style={{
          background:
            "linear-gradient(135deg, var(--gradient-feature-from) 0%, var(--gradient-feature-to) 100%)",
          color: "var(--color-gold-light)",
        }}
      >
        <header className="flex items-start justify-between gap-3 flex-wrap mb-3">
          <div className="flex items-center gap-2">
            <Brain
              size={20}
              className="text-[var(--color-gold)]"
              aria-hidden="true"
            />
            <h2 className="font-serif text-[18px] font-semibold text-white">
              Direction d&apos;accompagnement KIIKA
            </h2>
          </div>
          <Badge color="#C8A030">
            {DT_FMT.format(new Date(analysis.generatedAt))}
          </Badge>
        </header>
        <p className="text-[13px] text-white/80 leading-[1.6]">
          Analyse IA enregistrée à partir du profil de {client.name.split(" ")[0]} et de{" "}
          {analysis.candidatesCount} protocoles candidats. Sélection ci-dessous, lecture
          détaillée plus bas.
        </p>
        {analysis.objectives.dominante && (
          <p className="mt-3 text-[12px] text-white/70">
            Profil dominant : <strong>{analysis.objectives.dominante}</strong>
          </p>
        )}
      </section>

      {/* Objectifs au moment de l'analyse */}
      {(analysis.objectives.objectifs.length > 0 ||
        analysis.objectives.themes.length > 0 ||
        analysis.objectives.blocages.length > 0) && (
        <section
          className="rounded-[18px] p-5 sm:p-6"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-4 inline-flex items-center gap-2">
            <Target size={16} className="text-[var(--color-gold)]" aria-hidden="true" />
            Objectifs et axes du client
          </h3>
          <div className="grid sm:grid-cols-3 gap-4">
            <ObjectiveColumn
              title="Thèmes"
              items={analysis.objectives.themes}
              color="var(--color-gold)"
            />
            <ObjectiveColumn
              title="Objectifs"
              items={analysis.objectives.objectifs}
              color="var(--color-teal)"
            />
            <ObjectiveColumn
              title="Blocages"
              items={analysis.objectives.blocages}
              color="#B85450"
            />
          </div>
        </section>
      )}

      {/* Sélection KIIKA */}
      {recommended.length > 0 && (
        <section
          className="rounded-[18px] p-5 sm:p-6"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <header className="flex items-center justify-between flex-wrap gap-2 mb-4">
            <div className="flex items-center gap-2">
              <Sparkles
                size={16}
                className="text-[var(--color-gold)]"
                aria-hidden="true"
              />
              <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
                Sélection KIIKA — {recommended.length} protocoles recommandés
              </h3>
            </div>
            <Badge color="#7C5CBF">IA · re-classement</Badge>
          </header>
          <ol className="space-y-3">
            {recommended.map(({ rec, protocol }) => (
              <li
                key={rec.protocolId}
                className="rounded-[12px] border border-[var(--color-light-gray)] p-4"
              >
                <div className="flex items-start gap-3">
                  <div
                    className="flex-shrink-0 inline-flex items-center justify-center w-9 h-9 rounded-full font-serif text-[15px] font-bold text-white"
                    style={{ backgroundColor: protocol.color }}
                    aria-hidden="true"
                  >
                    {rec.rank}
                  </div>
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/protocoles/${protocol.id}`}
                      className="font-serif text-[15px] font-semibold text-[var(--color-navy)] hover:text-[var(--color-gold)] transition-colors"
                    >
                      {protocol.name}
                    </Link>
                    <div className="mt-0.5 text-[11px] text-[var(--color-gray-soft)]">
                      {protocol.practice} · {protocol.category} · {protocol.level}
                    </div>
                    <p className="mt-2 text-[13px] text-[var(--color-navy)] leading-[1.6]">
                      {rec.reasoning}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ol>
        </section>
      )}

      {/* Lecture détaillée */}
      {analysis.insight && (
        <section
          className="rounded-[18px] p-5 sm:p-6"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-3 inline-flex items-center gap-2">
            <Brain size={15} className="text-[var(--color-gold)]" aria-hidden="true" />
            Lecture KIIKA
          </h3>
          <Markdown source={analysis.insight} />
        </section>
      )}

      {/* Angles + vigilances */}
      {(analysis.alternativeAngles.length > 0 || analysis.cautionPoints.length > 0) && (
        <section className="grid gap-5 sm:grid-cols-2">
          {analysis.alternativeAngles.length > 0 && (
            <div
              className="rounded-[18px] p-5"
              style={{
                backgroundColor: "var(--color-white-soft)",
                boxShadow: "var(--shadow-card)",
              }}
            >
              <h4 className="text-[12px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-3 inline-flex items-center gap-1.5">
                <Lightbulb size={13} aria-hidden="true" />
                Angles alternatifs
              </h4>
              <ul className="space-y-2">
                {analysis.alternativeAngles.map((a, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[var(--color-navy)] leading-[1.55] pl-4 relative before:content-['→'] before:absolute before:left-0 before:text-[var(--color-gold)]"
                  >
                    {a}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {analysis.cautionPoints.length > 0 && (
            <div
              className="rounded-[18px] p-5"
              style={{ backgroundColor: "rgba(184,84,80,0.08)" }}
            >
              <h4 className="text-[12px] uppercase tracking-wide text-[#B85450] font-semibold mb-3 inline-flex items-center gap-1.5">
                <ShieldAlert size={13} aria-hidden="true" />
                Points de vigilance
              </h4>
              <ul className="space-y-2">
                {analysis.cautionPoints.map((c, i) => (
                  <li
                    key={i}
                    className="text-[13px] text-[var(--color-navy)] leading-[1.55] pl-3 border-l-2"
                    style={{ borderColor: "#B85450" }}
                  >
                    {c}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Historique */}
      {history.length > 0 && (
        <section
          className="rounded-[18px] p-5"
          style={{
            backgroundColor: "var(--color-white-soft)",
            boxShadow: "var(--shadow-card)",
          }}
        >
          <h4 className="text-[12px] uppercase tracking-wide text-[var(--color-gray-soft)] font-semibold mb-3">
            Analyses précédentes ({history.length})
          </h4>
          <ul className="space-y-1.5">
            {history.map((h) => (
              <li
                key={h.id}
                className="flex items-center gap-3 text-[12px] text-[var(--color-gray-soft)]"
              >
                <span className="text-[var(--color-navy)] font-semibold">
                  {DT_FMT.format(new Date(h.generatedAt))}
                </span>
                <span>·</span>
                <span>{h.recommended.length} protocoles recommandés</span>
                <span>·</span>
                <span>{h.candidatesCount} candidats analysés</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      <Link
        href="/kiika"
        className="inline-flex items-center gap-1.5 text-[12.5px] font-semibold text-[var(--color-gold)] hover:underline"
      >
        <Sparkles size={13} aria-hidden="true" />
        Lancer une nouvelle analyse →
      </Link>
    </div>
  );
}

function ObjectiveColumn({
  title,
  items,
  color,
}: {
  title: string;
  items: string[];
  color: string;
}) {
  if (items.length === 0) {
    return (
      <div>
        <div className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] font-semibold mb-2">
          {title}
        </div>
        <p className="text-[12px] text-[var(--color-gray-soft)] italic">Non renseigné</p>
      </div>
    );
  }
  return (
    <div>
      <div
        className="text-[11px] uppercase tracking-wide font-semibold mb-2"
        style={{ color }}
      >
        {title}
      </div>
      <ul className="space-y-1">
        {items.map((it, i) => (
          <li
            key={i}
            className="text-[12.5px] text-[var(--color-navy)] leading-[1.5] pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[8px] before:w-1.5 before:h-1.5 before:rounded-full"
            style={{ ["--bullet" as string]: color } as React.CSSProperties}
          >
            <span
              className="absolute left-0 top-[8px] w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: color }}
              aria-hidden="true"
            />
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}
