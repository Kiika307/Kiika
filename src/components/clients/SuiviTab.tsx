"use client";

import { useCallback, useEffect, useState, useTransition } from "react";
import { SmilePlus, BookOpen, Share2, FileText, Plus, Pencil, Trash2, Lock, X, Save } from "lucide-react";
import { toast } from "sonner";
import {
  getClientSuiviData,
  saveSessionSynthese,
  deleteSessionSynthese,
  type ClientMoodCheckin,
  type ClientJournalShared,
  type SessionSynthese,
} from "@/lib/actions";
import { useConfirm } from "@/components/ui/ConfirmDialog";

const MOOD_EMOJI: Record<number, string> = {
  1: "😣",
  2: "🙁",
  3: "😐",
  4: "🙂",
  5: "😀",
};
const MOOD_LABEL: Record<number, string> = {
  1: "Très difficile",
  2: "Difficile",
  3: "Neutre",
  4: "Plutôt bien",
  5: "Très bien",
};

export function SuiviTab({ clientId }: { clientId: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [moods, setMoods] = useState<ClientMoodCheckin[]>([]);
  const [journal, setJournal] = useState<ClientJournalShared[]>([]);
  const [syntheses, setSyntheses] = useState<SessionSynthese[]>([]);

  const load = useCallback(() => {
    let active = true;
    getClientSuiviData(clientId).then((res) => {
      if (!active) return;
      if (res.ok) {
        setMoods(res.moods ?? []);
        setJournal(res.journal ?? []);
        setSyntheses(res.syntheses ?? []);
      } else {
        setError(res.error ?? "Erreur");
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [clientId]);

  useEffect(() => {
    setLoading(true);
    const cleanup = load();
    return cleanup;
  }, [load]);

  if (loading) {
    return (
      <div className="flex items-center justify-center py-16 text-[13px] text-[var(--color-gray-soft)]">
        Chargement du suivi…
      </div>
    );
  }
  if (error) {
    return (
      <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
        {error}
      </div>
    );
  }

  const avg =
    moods.length > 0 ? moods.reduce((s, m) => s + m.score, 0) / moods.length : null;

  return (
    <div className="space-y-6">
      {/* Synthèses de séance */}
      <SynthesesSection clientId={clientId} syntheses={syntheses} onChange={load} />

      {/* Météo émotionnelle */}
      <section
        className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <header className="flex items-center gap-2 mb-3">
          <SmilePlus size={18} className="text-[var(--color-gold)]" />
          <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
            Météo émotionnelle
          </h3>
          {avg != null && (
            <span className="ml-auto text-[12px] text-[var(--color-gray-soft)]">
              Moyenne : <strong className="text-[var(--color-navy)]">{avg.toFixed(1)}/5</strong> ·{" "}
              {moods.length} relevé{moods.length > 1 ? "s" : ""}
            </span>
          )}
        </header>
        {moods.length === 0 ? (
          <p className="text-[13px] text-[var(--color-gray-soft)] italic">
            {`${"Aucun relevé pour l'instant. Le client peut renseigner sa météo depuis son espace."}`}
          </p>
        ) : (
          <>
            {/* Sparkline simple des 30 derniers */}
            <div className="flex items-end gap-1 h-16 mb-3">
              {[...moods]
                .slice(0, 30)
                .reverse()
                .map((m) => (
                  <div
                    key={m.id}
                    className="flex-1 rounded-t"
                    title={`${MOOD_LABEL[m.score]} · ${formatDate(m.createdAt)}`}
                    style={{
                      height: `${(m.score / 5) * 100}%`,
                      backgroundColor:
                        m.score >= 4
                          ? "var(--color-teal)"
                          : m.score === 3
                            ? "var(--color-gold)"
                            : "#D4622A",
                      opacity: 0.85,
                    }}
                  />
                ))}
            </div>
            <ul className="space-y-1.5 max-h-64 overflow-y-auto">
              {moods.map((m) => (
                <li key={m.id} className="flex items-start gap-2 text-[12.5px]">
                  <span className="text-[16px] leading-none">{MOOD_EMOJI[m.score]}</span>
                  <span className="text-[var(--color-gray-soft)] w-32 shrink-0">
                    {formatDate(m.createdAt)}
                  </span>
                  <span className="text-[var(--color-navy)]/80">{m.note ?? ""}</span>
                </li>
              ))}
            </ul>
          </>
        )}
      </section>

      {/* Journal partagé */}
      <section
        className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <header className="flex items-center gap-2 mb-3">
          <BookOpen size={18} className="text-[var(--color-gold)]" />
          <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
            Journal partagé
          </h3>
          <span className="ml-auto inline-flex items-center gap-1 text-[11px] text-[var(--color-gray-soft)]">
            <Share2 size={11} />
            entrées partagées uniquement
          </span>
        </header>
        {journal.length === 0 ? (
          <p className="text-[13px] text-[var(--color-gray-soft)] italic">
            Le client n&apos;a partagé aucune entrée de journal.
          </p>
        ) : (
          <ul className="space-y-3">
            {journal.map((j) => (
              <li
                key={j.id}
                className="rounded-[12px] bg-[var(--color-cream)] px-4 py-3"
              >
                <div className="flex items-baseline justify-between gap-2 mb-1">
                  <span className="font-semibold text-[13.5px] text-[var(--color-navy)]">
                    {j.title || "Entrée"}
                  </span>
                  <span className="text-[11px] text-[var(--color-gray-soft)]">
                    {formatDate(j.createdAt)}
                  </span>
                </div>
                <p className="text-[13px] text-[var(--color-navy)]/85 whitespace-pre-wrap">
                  {j.body}
                </p>
              </li>
            ))}
          </ul>
        )}
      </section>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}

function SynthesesSection({
  clientId,
  syntheses,
  onChange,
}: {
  clientId: string;
  syntheses: SessionSynthese[];
  onChange: () => void;
}) {
  const [editing, setEditing] = useState<SessionSynthese | "new" | null>(null);
  const [pending, startTransition] = useTransition();
  const { confirm, dialog } = useConfirm();

  return (
    <section
      className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-center gap-2 mb-3">
        <FileText size={18} className="text-[var(--color-gold)]" />
        <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">
          Synthèses de séance
        </h3>
        {editing === null && (
          <button
            type="button"
            onClick={() => setEditing("new")}
            className="ml-auto inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={13} />
            Nouvelle synthèse
          </button>
        )}
      </header>

      {editing !== null && (
        <SyntheseEditor
          clientId={clientId}
          synthese={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
          onSaved={() => {
            setEditing(null);
            onChange();
          }}
        />
      )}

      {syntheses.length === 0 && editing === null ? (
        <p className="text-[13px] text-[var(--color-gray-soft)] italic">
          Aucune synthèse. Rédigez un compte-rendu après une séance — vous pouvez le partager avec
          le client.
        </p>
      ) : (
        <ul className="space-y-3">
          {syntheses.map((s) => (
            <li key={s.id} className="rounded-[12px] bg-[var(--color-cream)] px-4 py-3">
              <div className="flex items-start justify-between gap-2 mb-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-[13.5px] text-[var(--color-navy)]">
                    Séance du {formatDate(s.sessionDate)}
                  </span>
                  <span
                    className="inline-flex items-center gap-1 text-[10px] font-semibold rounded-full px-2 py-0.5"
                    style={
                      s.shared
                        ? { backgroundColor: "rgba(46,138,123,0.14)", color: "var(--color-teal)" }
                        : { backgroundColor: "var(--color-light-gray)", color: "var(--color-gray-soft)" }
                    }
                  >
                    {s.shared ? <Share2 size={10} /> : <Lock size={10} />}
                    {s.shared ? "Partagé client" : "Privé"}
                  </span>
                </div>
                <div className="flex items-center gap-1 shrink-0">
                  <button
                    type="button"
                    onClick={() => setEditing(s)}
                    className="rounded p-1 text-[var(--color-gray-soft)] hover:bg-white hover:text-[var(--color-navy)]"
                    aria-label="Modifier"
                  >
                    <Pencil size={12} />
                  </button>
                  <button
                    type="button"
                    disabled={pending}
                    onClick={async () => {
                      const ok = await confirm({
                        title: "Supprimer la synthèse",
                        message: "Cette synthèse sera supprimée définitivement.",
                        confirmLabel: "Supprimer",
                        destructive: true,
                      });
                      if (!ok) return;
                      startTransition(async () => {
                        const res = await deleteSessionSynthese(s.id);
                        if (res.ok) {
                          toast.success("Synthèse supprimée");
                          onChange();
                        } else {
                          toast.error(res.error ?? "Erreur");
                        }
                      });
                    }}
                    className="rounded p-1 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                    aria-label="Supprimer"
                  >
                    <Trash2 size={12} />
                  </button>
                </div>
              </div>
              <p className="text-[13px] text-[var(--color-navy)]/85 whitespace-pre-wrap">{s.summary}</p>
              {s.keyPoints && (
                <p className="mt-2 text-[12.5px] text-[var(--color-navy)]/75">
                  <span className="font-semibold">Points clés :</span> {s.keyPoints}
                </p>
              )}
              {s.nextSteps && (
                <p className="mt-1 text-[12.5px] text-[var(--color-navy)]/75">
                  <span className="font-semibold">Prochaines étapes :</span> {s.nextSteps}
                </p>
              )}
            </li>
          ))}
        </ul>
      )}
      {dialog}
    </section>
  );
}

function SyntheseEditor({
  clientId,
  synthese,
  onClose,
  onSaved,
}: {
  clientId: string;
  synthese: SessionSynthese | null;
  onClose: () => void;
  onSaved: () => void;
}) {
  const [pending, startTransition] = useTransition();
  const [sessionDate, setSessionDate] = useState(
    synthese?.sessionDate ?? new Date().toISOString().slice(0, 10),
  );
  const [summary, setSummary] = useState(synthese?.summary ?? "");
  const [keyPoints, setKeyPoints] = useState(synthese?.keyPoints ?? "");
  const [nextSteps, setNextSteps] = useState(synthese?.nextSteps ?? "");
  const [shared, setShared] = useState(synthese?.shared ?? false);

  function save() {
    if (!summary.trim()) return;
    startTransition(async () => {
      const res = await saveSessionSynthese({
        id: synthese?.id,
        clientId,
        sessionDate,
        summary: summary.trim(),
        keyPoints: keyPoints.trim() || null,
        nextSteps: nextSteps.trim() || null,
        shared,
      });
      if (res.ok) {
        toast.success(synthese ? "Synthèse mise à jour" : "Synthèse enregistrée");
        onSaved();
      } else {
        toast.error(res.error ?? "Erreur");
      }
    });
  }

  return (
    <div className="rounded-[12px] bg-white border border-[var(--color-light-gray)] p-4 mb-4 space-y-3">
      <div className="flex items-center gap-3">
        <label className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
          Date de séance
        </label>
        <input
          type="date"
          value={sessionDate}
          onChange={(e) => setSessionDate(e.target.value)}
          className="rounded-[8px] border border-[var(--color-light-gray)] px-2 py-1 text-[13px]"
        />
      </div>
      <textarea
        value={summary}
        onChange={(e) => setSummary(e.target.value)}
        rows={4}
        autoFocus
        placeholder="Synthèse de la séance…"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
      <input
        type="text"
        value={keyPoints}
        onChange={(e) => setKeyPoints(e.target.value)}
        placeholder="Points clés (optionnel)"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
      <input
        type="text"
        value={nextSteps}
        onChange={(e) => setNextSteps(e.target.value)}
        placeholder="Prochaines étapes / travail à la maison (optionnel)"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
      <label className="flex items-center gap-2 text-[12.5px] text-[var(--color-navy)] cursor-pointer">
        <input
          type="checkbox"
          checked={shared}
          onChange={(e) => setShared(e.target.checked)}
          className="h-4 w-4 accent-[var(--color-gold)]"
        />
        Partager cette synthèse avec le client (visible dans son espace)
      </label>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          <X size={12} />
          Annuler
        </button>
        <button
          type="button"
          onClick={save}
          disabled={pending || !summary.trim()}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={12} />
          {pending ? "…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}
