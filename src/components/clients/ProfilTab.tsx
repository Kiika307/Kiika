"use client";

import { useTransition, useState } from "react";
import { Camera, Check, Zap, Sparkles, Moon } from "lucide-react";
import { toast } from "sonner";
import { RadarChart } from "@/components/ui/RadarChart";
import { Badge } from "@/components/ui/Badge";
import { EvolutionChart } from "./EvolutionChart";
import { SendSeleneInvitationButton } from "./SendSeleneInvitationButton";
import { recordProfileSnapshot } from "@/lib/actions";
import { SELENE_DIMENSIONS } from "@/lib/selene-data";
import type { Client, ProfileSnapshot } from "@/lib/types";

interface ProfilTabProps {
  client: Client;
  snapshots: ProfileSnapshot[];
}

export function ProfilTab({ client, snapshots }: ProfilTabProps) {
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  if (!client.profile && !client.selene) {
    return (
      <div className="space-y-5">
        {/* Empty state Selene */}
        <div
          className="rounded-[18px] p-7 sm:p-10 text-center relative overflow-hidden"
          style={{
            background:
              "linear-gradient(135deg, var(--color-navy) 0%, #2A3F5C 100%)",
            color: "var(--color-gold-light)",
          }}
        >
          <div
            className="pointer-events-none absolute -top-16 -right-16 h-48 w-48 rounded-full opacity-20 blur-3xl"
            style={{ background: "radial-gradient(circle, #C8A030 0%, transparent 70%)" }}
            aria-hidden="true"
          />
          <Moon size={28} className="mx-auto mb-3 text-[var(--color-gold)]" aria-hidden="true" />
          <p className="text-[10px] uppercase tracking-[0.3em] text-[var(--color-gold)] mb-2">
            Test psychométrique
          </p>
          <h2 className="font-serif text-[32px] sm:text-[40px] font-bold tracking-[0.18em] text-white leading-none">
            SELENE
          </h2>
          <p className="mt-5 max-w-md mx-auto text-[13.5px] text-white/75 leading-[1.6]">
            Le test psychométrique <strong>Selene</strong> éclaire 9 dimensions de la
            personnalité de {client.name.split(" ")[0]}. Créé par Varinka ROBERT, il offre une
            lecture fine pour orienter l&apos;accompagnement.
          </p>
          <p className="mt-3 max-w-md mx-auto text-[12px] text-white/55">
            117 questions · ~15-20 minutes · réalisable depuis n&apos;importe quel appareil
          </p>
          <div className="mt-6 inline-flex items-center justify-center">
            <SendSeleneInvitationButton clientId={client.id} clientName={client.name} />
          </div>
        </div>
      </div>
    );
  }

  // At this point, either client.profile or client.selene (or both) exists.
  const profile = client.profile;
  const selene = client.selene;

  function handleSnapshot() {
    if (!profile) return;
    setError(null);
    startTransition(async () => {
      const res = await recordProfileSnapshot({
        clientId: client.id,
        axes: profile.axes,
        dominante: profile.dominante,
      });
      if (res.ok) {
        toast.success("Snapshot du profil enregistré");
      } else {
        setError(res.error ?? "Erreur");
        toast.error(res.error ?? "Impossible d'enregistrer le snapshot");
      }
    });
  }

  return (
    <div className="space-y-6">
      {/* === SELENE results === */}
      {selene && <SeleneResultBlock client={client} selene={selene} />}

      {/* === Legacy 4-axis profile === */}
      {profile && (
      <div className="grid gap-6 lg:grid-cols-2">
        <section
          className="rounded-[16px] p-6"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <header className="mb-4">
            <h3 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
              Profil psychométrique
            </h3>
            <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">Dominante · {profile.dominante}</p>
          </header>
          <div className="flex justify-center">
            <RadarChart axes={profile.axes} color={client.color} size={280} />
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2">
            {Object.entries(profile.axes).map(([k, v]) => (
              <div key={k} className="flex items-center justify-between text-[12px]">
                <span className="text-[var(--color-gray-soft)]">{k}</span>
                <span className="font-semibold text-[var(--color-navy)] tabular">{v}%</span>
              </div>
            ))}
          </div>
        </section>

        <div className="space-y-5">
          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Thèmes</h3>
            <div className="flex flex-wrap gap-2">
              {profile.themes.map((t) => (
                <Badge key={t} color={client.color}>
                  {t}
                </Badge>
              ))}
            </div>
          </section>

          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Objectifs</h3>
            <ul className="space-y-2">
              {profile.objectifs.map((o) => (
                <li key={o} className="flex items-start gap-2 text-[13px] text-[var(--color-navy)]">
                  <Check size={14} strokeWidth={2.5} className="text-[var(--color-teal)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </section>

          <section
            className="rounded-[16px] p-6"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">Blocages</h3>
            <ul className="space-y-2">
              {profile.blocages.map((b) => (
                <li key={b} className="flex items-start gap-2 text-[13px] text-[var(--color-navy)]">
                  <Zap size={14} strokeWidth={2} className="text-[var(--color-red-alert)] mt-0.5 flex-shrink-0" aria-hidden="true" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </div>
      )}

      {profile && (
      <section
        className="rounded-[16px] p-6"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <header className="flex items-center justify-between mb-4">
          <div>
            <h3 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
              Évolution du profil
            </h3>
            <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">
              {snapshots.length} snapshot{snapshots.length > 1 ? "s" : ""} enregistré{snapshots.length > 1 ? "s" : ""}
            </p>
          </div>
          <button
            type="button"
            onClick={handleSnapshot}
            disabled={pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Camera size={14} />
            {pending ? "…" : "Enregistrer un snapshot"}
          </button>
        </header>
        {error && (
          <div className="mb-3 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[12px] text-red-700">
            {error}
          </div>
        )}
        <EvolutionChart snapshots={snapshots} />
      </section>
      )}
    </div>
  );
}

interface SeleneResultBlockProps {
  client: Client;
  selene: NonNullable<Client["selene"]>;
}

function SeleneResultBlock({ client, selene }: SeleneResultBlockProps) {
  const dimConfig = (code: string) =>
    SELENE_DIMENSIONS.find((d) => d.code === code);
  const dominanteCfg = dimConfig(selene.dominante);
  const sortedScores = [...SELENE_DIMENSIONS]
    .map((d) => ({ ...d, score: selene.scores[d.code] ?? 0 }))
    .sort((a, b) => b.score - a.score);

  const niveauOf = (score: number) => {
    if (score >= 85) return "Dominant";
    if (score >= 70) return "Élevé";
    if (score >= 55) return "Modéré";
    if (score >= 40) return "Présent";
    return "Secondaire";
  };

  const takenLabel = new Date(selene.takenAt).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  return (
    <section
      className="rounded-[16px] p-6 relative overflow-hidden"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-start justify-between mb-5 gap-3 flex-wrap">
        <div>
          <p className="text-[10px] uppercase tracking-[0.25em] text-[var(--color-gold)] font-semibold mb-1">
            Test psychométrique
          </p>
          <h3 className="font-serif text-[22px] sm:text-[24px] font-bold tracking-[0.15em] text-[var(--color-navy)] leading-none">
            SELENE
          </h3>
          <p className="mt-2 text-[12px] text-[var(--color-gray-soft)]">
            Réalisé le {takenLabel}
          </p>
        </div>
        <SendSeleneInvitationButton
          clientId={client.id}
          clientName={client.name}
          hasTakenTest
        />
      </header>

      {/* Dominante */}
      {dominanteCfg && (
        <div
          className="rounded-[12px] p-4 mb-5"
          style={{ backgroundColor: `${dominanteCfg.couleurLight}` }}
        >
          <div className="flex items-center gap-2 mb-1">
            <Sparkles size={14} style={{ color: dominanteCfg.couleur }} aria-hidden="true" />
            <span
              className="text-[10px] uppercase tracking-[0.2em] font-semibold"
              style={{ color: dominanteCfg.couleur }}
            >
              Dimension dominante
            </span>
          </div>
          <div className="flex items-baseline gap-3 flex-wrap">
            <h4
              className="font-serif text-[22px] font-bold"
              style={{ color: dominanteCfg.couleur }}
            >
              {dominanteCfg.nom}
            </h4>
            <span className="text-[13px] text-[var(--color-navy)] italic">
              {dominanteCfg.sousNom}
            </span>
          </div>
          <p className="mt-2 text-[13px] text-[var(--color-navy)] leading-[1.55]">
            {dominanteCfg.description}
          </p>
        </div>
      )}

      {/* Top 3 */}
      <div className="mb-5">
        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-navy)] mb-3">
          Top 3 dimensions
        </h4>
        <div className="grid sm:grid-cols-3 gap-3">
          {selene.top3.map((code, i) => {
            const cfg = dimConfig(code);
            if (!cfg) return null;
            const score = selene.scores[code] ?? 0;
            return (
              <div
                key={code}
                className="rounded-[12px] p-3 border-l-[3px]"
                style={{
                  backgroundColor: "var(--color-cream)",
                  borderColor: cfg.couleur,
                }}
              >
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wide text-[var(--color-gray-soft)] font-semibold">
                    #{i + 1}
                  </span>
                  <span className="font-serif text-[16px] font-bold tabular" style={{ color: cfg.couleur }}>
                    {score}%
                  </span>
                </div>
                <div className="font-serif text-[14px] font-bold text-[var(--color-navy)]">
                  {cfg.nom}
                </div>
                <div className="text-[11px] text-[var(--color-gray-soft)]">{cfg.sousNom}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Toutes les 9 dimensions */}
      <div>
        <h4 className="text-[11px] uppercase tracking-[0.2em] font-semibold text-[var(--color-navy)] mb-3">
          Profil complet — 9 dimensions
        </h4>
        <ol className="space-y-2.5">
          {sortedScores.map((d) => (
            <li key={d.code} className="flex items-center gap-3">
              <div className="w-32 sm:w-40 flex-shrink-0">
                <div className="text-[13px] font-semibold text-[var(--color-navy)]">{d.nom}</div>
                <div className="text-[10.5px] text-[var(--color-gray-soft)] truncate">{d.sousNom}</div>
              </div>
              <div className="flex-1 h-2 rounded-full overflow-hidden bg-[var(--color-light-gray)]">
                <div
                  className="h-full transition-all"
                  style={{
                    width: `${d.score}%`,
                    backgroundColor: d.couleur,
                  }}
                />
              </div>
              <div className="flex items-center gap-2 w-24 justify-end flex-shrink-0">
                <span className="font-serif text-[13px] font-bold tabular" style={{ color: d.couleur }}>
                  {d.score}%
                </span>
                <span className="text-[10px] text-[var(--color-gray-soft)] hidden sm:inline">
                  {niveauOf(d.score)}
                </span>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
