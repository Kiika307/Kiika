"use client";

import { useState, useTransition } from "react";
import { Pencil, FileText, X, Save, Check, History } from "lucide-react";
import { toast } from "sonner";
import { Badge } from "@/components/ui/Badge";
import { FormTextarea } from "@/components/ui/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { addClientNote, updateClientNote, recordAppointmentMood } from "@/lib/actions";
import type { SessionHistoryEntry } from "@/lib/types";

interface HistoriqueTabProps {
  clientId: string;
  history: SessionHistoryEntry[];
}

const STATUS_LABEL: Record<SessionHistoryEntry["status"], string> = {
  scheduled: "À venir",
  done: "Terminée",
  cancelled: "Annulée",
};

const STATUS_COLOR: Record<SessionHistoryEntry["status"], string> = {
  scheduled: "#5B8FB9",
  done: "#2E8A7B",
  cancelled: "#B85450",
};

export function HistoriqueTab({ clientId, history }: HistoriqueTabProps) {
  const [openId, setOpenId] = useState<string | null>(null);

  if (history.length === 0) {
    return (
      <div
        className="rounded-[16px]"
        style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
      >
        <EmptyState
          icon={History}
          title="Aucune séance enregistrée"
          message="L'historique se remplira automatiquement après chaque séance terminée."
        />
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {history.map((entry) => (
        <SessionRow
          key={entry.appointmentId}
          entry={entry}
          clientId={clientId}
          open={openId === entry.appointmentId}
          onToggle={() =>
            setOpenId(openId === entry.appointmentId ? null : entry.appointmentId)
          }
        />
      ))}
    </div>
  );
}

function SessionRow({
  entry,
  clientId,
  open,
  onToggle,
}: {
  entry: SessionHistoryEntry;
  clientId: string;
  open: boolean;
  onToggle: () => void;
}) {
  const [editing, setEditing] = useState(false);
  const [body, setBody] = useState(entry.compteRendu?.body ?? "");
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  function handleSave() {
    setError(null);
    startTransition(async () => {
      const existing = entry.compteRendu;
      const res = existing
        ? await updateClientNote(existing.id, { body })
        : await addClientNote({
            clientId,
            appointmentId: entry.appointmentId,
            kind: "compte_rendu",
            body,
          });
      if (res.ok) {
        setEditing(false);
        toast.success(existing ? "Compte-rendu mis à jour" : "Compte-rendu enregistré");
      } else {
        setError(res.error ?? "Erreur");
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  return (
    <article
      className="rounded-[16px] bg-white"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header
        className="flex items-center gap-4 px-5 py-3 cursor-pointer hover:bg-[var(--color-white-soft)]"
        onClick={onToggle}
      >
        <span className="font-serif text-[14px] font-bold text-[var(--color-navy)] w-6">
          #{entry.num}
        </span>
        <div className="flex-1 min-w-0">
          <div className="text-[13px] font-semibold text-[var(--color-navy)]">
            {entry.dateLabel} · {entry.timeLabel}
          </div>
          <div className="text-[11px] text-[var(--color-gray-soft)]">
            {entry.mode === "visio" ? "Visio" : "Présentiel"}
            {entry.protocolName && ` · ${entry.protocolName}`}
          </div>
        </div>
        {entry.protocolName && entry.protocolColor && (
          <Badge color={entry.protocolColor}>{entry.protocolName}</Badge>
        )}
        <Badge color={STATUS_COLOR[entry.status]}>{STATUS_LABEL[entry.status]}</Badge>
        <span className="text-[11px] text-[var(--color-gray-soft)] w-20 text-right">
          {entry.compteRendu ? (
            <span className="inline-flex items-center gap-1 text-[var(--color-teal)]">
              <FileText size={12} />
              CR
            </span>
          ) : (
            "Pas de CR"
          )}
        </span>
      </header>

      {open && (
        <div className="border-t border-[var(--color-light-gray)] px-5 py-4 space-y-4">
          <MoodWidget entry={entry} />
          {error && (
            <div className="mb-3 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[12px] text-red-700">
              {error}
            </div>
          )}

          {!editing ? (
            <>
              {entry.compteRendu ? (
                <div className="space-y-2">
                  <p className="text-[13px] text-[var(--color-navy)] whitespace-pre-wrap leading-relaxed">
                    {entry.compteRendu.body}
                  </p>
                  <button
                    type="button"
                    onClick={() => setEditing(true)}
                    className="inline-flex items-center gap-1.5 text-[12px] font-semibold text-[var(--color-gold)] hover:underline"
                  >
                    <Pencil size={12} />
                    Modifier le compte-rendu
                  </button>
                </div>
              ) : (
                <button
                  type="button"
                  onClick={() => setEditing(true)}
                  className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white"
                  style={{ backgroundColor: "var(--color-gold)" }}
                >
                  <FileText size={12} />
                  Rédiger le compte-rendu
                </button>
              )}
            </>
          ) : (
            <div className="space-y-3">
              <FormTextarea
                label="Compte-rendu de séance"
                rows={6}
                placeholder="Compte-rendu de séance…"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                required
              />
              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setEditing(false);
                    setBody(entry.compteRendu?.body ?? "");
                    setError(null);
                  }}
                  disabled={pending}
                  className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
                >
                  <X size={12} />
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={handleSave}
                  disabled={pending || !body.trim()}
                  className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
                  style={{ backgroundColor: "var(--color-gold)" }}
                >
                  <Save size={12} />
                  {pending ? "…" : "Enregistrer"}
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </article>
  );
}

function MoodWidget({ entry }: { entry: SessionHistoryEntry }) {
  const [before, setBefore] = useState<number | null>(entry.moodBefore);
  const [after, setAfter] = useState<number | null>(entry.moodAfter);
  const [note, setNote] = useState(entry.moodNote ?? "");
  const [pending, startTransition] = useTransition();
  const [saved, setSaved] = useState(false);

  function save(patch: { moodBefore?: number | null; moodAfter?: number | null; moodNote?: string | null }) {
    startTransition(async () => {
      const res = await recordAppointmentMood(entry.appointmentId, patch);
      if (res.ok) {
        setSaved(true);
        setTimeout(() => setSaved(false), 1500);
      }
    });
  }

  return (
    <div className="rounded-[10px] bg-[var(--color-white-soft)] px-4 py-3">
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] font-semibold text-[var(--color-navy)]">
          Auto-évaluation humeur (1–10)
        </span>
        {saved && (
          <span className="inline-flex items-center gap-1 text-[11px] text-[var(--color-teal)]">
            Enregistré
            <Check size={11} strokeWidth={2.5} aria-hidden="true" />
          </span>
        )}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <MoodSlider
          label="Avant séance"
          value={before}
          onChange={(v) => {
            setBefore(v);
            save({ moodBefore: v });
          }}
          disabled={pending}
        />
        <MoodSlider
          label="Après séance"
          value={after}
          onChange={(v) => {
            setAfter(v);
            save({ moodAfter: v });
          }}
          disabled={pending}
        />
      </div>
      <textarea
        rows={2}
        placeholder="Note humeur (optionnel)…"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        onBlur={() => {
          if (note !== (entry.moodNote ?? "")) save({ moodNote: note.trim() || null });
        }}
        className="w-full mt-2 rounded-[8px] border border-[var(--color-light-gray)] bg-white px-2 py-1.5 text-[12px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 resize-y"
      />
    </div>
  );
}

function MoodSlider({
  label,
  value,
  onChange,
  disabled,
}: {
  label: string;
  value: number | null;
  onChange: (v: number | null) => void;
  disabled: boolean;
}) {
  return (
    <label className="flex flex-col gap-1">
      <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
        {label}
      </span>
      <div className="flex items-center gap-2">
        <input
          type="range"
          min={1}
          max={10}
          value={value ?? 5}
          onChange={(e) => onChange(Number(e.target.value))}
          disabled={disabled}
          className="flex-1"
        />
        <span className="text-[13px] font-semibold text-[var(--color-navy)] w-8 text-right">
          {value ?? "—"}
        </span>
        {value !== null && (
          <button
            type="button"
            onClick={() => onChange(null)}
            disabled={disabled}
            className="text-[var(--color-gray-soft)] hover:text-[var(--color-navy)] disabled:opacity-50 inline-flex items-center justify-center"
            title="Effacer"
            aria-label="Effacer la valeur"
          >
            <X size={12} strokeWidth={2} aria-hidden="true" />
          </button>
        )}
      </div>
    </label>
  );
}
