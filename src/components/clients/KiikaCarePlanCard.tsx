"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
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
  CheckCircle2,
  AlertTriangle,
  Pencil,
} from "lucide-react";
import { toast } from "sonner";
import { Markdown } from "@/components/ui/Markdown";
import { generateKiikaCarePlanForClient, saveSmartObjective } from "@/lib/actions";
import { SendSeleneInvitationButton } from "./SendSeleneInvitationButton";
import type { ClientKiikaCarePlan, Protocol, SmartObjective } from "@/lib/types";

interface KiikaCarePlanCardProps {
  clientId: string;
  clientFirstName: string;
  carePlans: ClientKiikaCarePlan[];
  protocols: Protocol[];
  seleneTaken: boolean;
  smartObjective: SmartObjective | null;
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
  seleneTaken,
  smartObjective,
}: KiikaCarePlanCardProps) {
  const [pending, startTransition] = useTransition();
  const [showHistory, setShowHistory] = useState(false);
  const [sessionCount, setSessionCount] = useState(8);
  const [editingObjective, setEditingObjective] = useState(false);

  const latest = carePlans[0] ?? null;
  const history = carePlans.slice(1);

  const protocolMap = new Map(protocols.map((p) => [p.id, p] as const));

  const handleGenerate = () => {
    startTransition(async () => {
      const res = await generateKiikaCarePlanForClient(clientId, { sessionCount });
      if (res.ok) {
        toast.success(`Parcours KIIKA généré sur ${sessionCount} séances`);
      } else {
        toast.error(res.error ?? "Erreur de génération");
      }
    });
  };

  // Bloc de construction du parcours (toujours visible avant la 1re génération,
  // sinon proposé en mode "régénérer" plus bas).
  const builder = (
    <ParcoursBuilder
      clientId={clientId}
      clientFirstName={clientFirstName}
      seleneTaken={seleneTaken}
      smartObjective={smartObjective}
      sessionCount={sessionCount}
      setSessionCount={setSessionCount}
      editingObjective={editingObjective}
      setEditingObjective={setEditingObjective}
      pending={pending}
      onGenerate={handleGenerate}
      hasPlan={!!latest}
    />
  );

  // No plan yet — show only the builder.
  if (!latest) {
    return builder;
  }

  // We have a plan — builder (collapsible) on top, then the plan.
  return (
    <div className="space-y-5">
      {builder}

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
                Parcours KIIKA — {latest.sessions.length} séances
              </h3>
              <p className="mt-0.5 text-[11.5px] text-white/55">
                Généré le {DT_FMT.format(new Date(latest.generatedAt))}
              </p>
            </div>
          </div>
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

interface ParcoursBuilderProps {
  clientId: string;
  clientFirstName: string;
  seleneTaken: boolean;
  smartObjective: SmartObjective | null;
  sessionCount: number;
  setSessionCount: (n: number) => void;
  editingObjective: boolean;
  setEditingObjective: (v: boolean) => void;
  pending: boolean;
  onGenerate: () => void;
  hasPlan: boolean;
}

function ParcoursBuilder({
  clientId,
  clientFirstName,
  seleneTaken,
  smartObjective,
  sessionCount,
  setSessionCount,
  editingObjective,
  setEditingObjective,
  pending,
  onGenerate,
  hasPlan,
}: ParcoursBuilderProps) {
  const objectiveSet = !!smartObjective?.specific?.trim();

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
      <header className="flex items-start gap-3 mb-4">
        <Brain size={22} className="text-[var(--color-gold)] mt-0.5 shrink-0" aria-hidden="true" />
        <div className="flex-1">
          <h3 className="font-serif text-[17px] font-semibold text-white">
            {hasPlan ? "Régénérer le parcours" : "Construire le parcours avec KIIKA"}
          </h3>
          <p className="mt-1 text-[12.5px] text-white/75 leading-[1.55]">
            KIIKA croise l&apos;objectif SMART de {clientFirstName} et son test psychométrique
            Selene pour proposer un parcours séance par séance (objectifs, protocoles, devoirs,
            signaux).
          </p>
        </div>
      </header>

      {/* Étape 1 — Objectif SMART */}
      <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-4 mb-3">
        <div className="flex items-start justify-between gap-2">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-[var(--color-navy)]"
              style={{ backgroundColor: "var(--color-gold)" }}
            >
              1
            </span>
            <span className="text-[13px] font-semibold text-white">Objectif SMART</span>
            {objectiveSet && (
              <CheckCircle2 size={14} className="text-[var(--color-teal)]" aria-hidden="true" />
            )}
          </div>
          <button
            type="button"
            onClick={() => setEditingObjective(true)}
            className="inline-flex items-center gap-1 text-[11.5px] font-semibold text-[var(--color-gold-light)] hover:underline"
          >
            <Pencil size={11} />
            {objectiveSet ? "Modifier" : "Définir"}
          </button>
        </div>
        {objectiveSet ? (
          <p className="mt-2 text-[12.5px] text-white/85 leading-[1.5]">
            <span className="text-white/55">Spécifique : </span>
            {smartObjective!.specific}
            {smartObjective!.temporal && (
              <>
                {" "}
                <span className="text-white/55">· Échéance : </span>
                {smartObjective!.temporal}
              </>
            )}
          </p>
        ) : (
          <p className="mt-2 text-[12px] text-white/55 leading-[1.5]">
            Définissez avec le client, en 1ère séance, un objectif clair (Spécifique, Mesurable,
            Atteignable, Réaliste, Temporel). C&apos;est le point d&apos;ancrage du parcours.
          </p>
        )}
      </div>

      {/* Étape 2 — Test Selene */}
      <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-4 mb-3">
        <div className="flex items-center gap-2 mb-1.5">
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-[var(--color-navy)]"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            2
          </span>
          <span className="text-[13px] font-semibold text-white">Test psychométrique Selene</span>
          {seleneTaken && (
            <CheckCircle2 size={14} className="text-[var(--color-teal)]" aria-hidden="true" />
          )}
        </div>
        {seleneTaken ? (
          <p className="text-[12.5px] text-white/85">
            Test complété — les résultats fondent l&apos;analyse de KIIKA.
          </p>
        ) : (
          <div className="flex items-start gap-2">
            <AlertTriangle size={14} className="text-[var(--color-gold)] mt-0.5 shrink-0" />
            <div className="flex-1">
              <p className="text-[12.5px] text-white/85 leading-[1.5] mb-2">
                Test non passé — le parcours reste possible mais sera moins précis. Envoyez le test
                à {clientFirstName} pour une recommandation calée sur ses 9 dimensions.
              </p>
              <SendSeleneInvitationButton
                clientId={clientId}
                clientName={clientFirstName}
                hasTakenTest={seleneTaken}
              />
            </div>
          </div>
        )}
      </div>

      {/* Étape 3 — Durée + génération */}
      <div className="rounded-[12px] bg-white/[0.06] border border-white/10 p-4">
        <div className="flex items-center gap-2 mb-3">
          <span
            className="inline-flex items-center justify-center w-6 h-6 rounded-full text-[11px] font-bold text-[var(--color-navy)]"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            3
          </span>
          <span className="text-[13px] font-semibold text-white">Durée du parcours</span>
        </div>
        <div className="flex flex-wrap gap-1.5 mb-4">
          {[5, 6, 7, 8, 9, 10].map((n) => (
            <button
              key={n}
              type="button"
              onClick={() => setSessionCount(n)}
              className="inline-flex items-center justify-center min-w-10 h-9 rounded-[10px] text-[13px] font-semibold transition-colors"
              style={
                sessionCount === n
                  ? { backgroundColor: "var(--color-gold)", color: "var(--color-navy)" }
                  : { backgroundColor: "rgba(255,255,255,0.08)", color: "rgba(255,255,255,0.8)" }
              }
            >
              {n}
            </button>
          ))}
          <span className="self-center ml-1 text-[12px] text-white/55">séances</span>
        </div>
        <button
          type="button"
          onClick={onGenerate}
          disabled={pending}
          className="inline-flex items-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] min-h-11 transition-opacity disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold-light)" }}
        >
          {pending ? (
            <Loader2 size={14} className="animate-spin" aria-hidden="true" />
          ) : (
            <Sparkles size={14} aria-hidden="true" />
          )}
          {pending
            ? "Génération en cours…"
            : hasPlan
              ? `Régénérer sur ${sessionCount} séances`
              : `Générer le parcours (${sessionCount} séances)`}
        </button>
        <p className="mt-3 text-[10.5px] text-white/55">
          Anonymisé (initiales seulement). Génération en ~30 secondes.
        </p>
      </div>

      {editingObjective && (
        <SmartObjectiveModal
          clientId={clientId}
          initial={smartObjective}
          onClose={() => setEditingObjective(false)}
        />
      )}
    </section>
  );
}

const SMART_FIELDS: Array<{
  key: keyof Omit<SmartObjective, "updatedAt">;
  label: string;
  hint: string;
}> = [
  { key: "specific", label: "Spécifique", hint: "Quel changement précis ? (obligatoire)" },
  { key: "measurable", label: "Mesurable", hint: "À quoi verra-t-on que c'est atteint ?" },
  { key: "achievable", label: "Atteignable", hint: "Quelles ressources / étapes ?" },
  { key: "realistic", label: "Réaliste", hint: "Compatible avec le contexte de vie ?" },
  { key: "temporal", label: "Temporel", hint: "Pour quand ? (échéance)" },
];

function SmartObjectiveModal({
  clientId,
  initial,
  onClose,
}: {
  clientId: string;
  initial: SmartObjective | null;
  onClose: () => void;
}) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [vals, setVals] = useState({
    specific: initial?.specific ?? "",
    measurable: initial?.measurable ?? "",
    achievable: initial?.achievable ?? "",
    realistic: initial?.realistic ?? "",
    temporal: initial?.temporal ?? "",
  });

  function set(key: keyof typeof vals, v: string) {
    setVals((s) => ({ ...s, [key]: v }));
  }

  function save() {
    if (!vals.specific.trim()) {
      toast.error("Le champ « Spécifique » est requis");
      return;
    }
    startTransition(async () => {
      const res = await saveSmartObjective({ clientId, ...vals });
      if (res.ok) {
        toast.success("Objectif SMART enregistré");
        router.refresh();
        onClose();
      } else {
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4 py-6"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-[16px] bg-white p-6 text-[var(--color-navy)]"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-start justify-between gap-3 mb-1">
          <h2 className="font-serif text-[18px] font-semibold inline-flex items-center gap-2">
            <Target size={17} className="text-[var(--color-gold)]" />
            Objectif SMART
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)]"
            aria-label="Fermer"
          >
            <ChevronUp size={16} className="rotate-45" />
          </button>
        </div>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mb-4">
          Co-construit avec le client en première séance. Sert de socle au parcours proposé par
          KIIKA.
        </p>

        <div className="space-y-3">
          {SMART_FIELDS.map((f) => (
            <label key={f.key} className="flex flex-col gap-1">
              <span className="text-[12px] font-semibold">
                {f.label}
                {f.key === "specific" && <span className="text-[var(--color-gold)]"> *</span>}
              </span>
              <textarea
                value={vals[f.key]}
                onChange={(e) => set(f.key, e.target.value)}
                rows={2}
                placeholder={f.hint}
                className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
              />
            </label>
          ))}
        </div>

        <div className="flex justify-end gap-2 mt-5">
          <button
            type="button"
            onClick={onClose}
            disabled={pending}
            className="rounded-[10px] border border-[var(--color-light-gray)] px-4 py-2 text-[13px] font-semibold hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            type="button"
            onClick={save}
            disabled={pending || !vals.specific.trim()}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            {pending ? "…" : "Enregistrer l'objectif"}
          </button>
        </div>
      </div>
    </div>
  );
}
