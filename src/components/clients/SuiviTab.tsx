"use client";

import { useEffect, useState } from "react";
import { SmilePlus, BookOpen, Share2 } from "lucide-react";
import {
  getClientSuiviData,
  type ClientMoodCheckin,
  type ClientJournalShared,
} from "@/lib/actions";

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

  useEffect(() => {
    let active = true;
    setLoading(true);
    getClientSuiviData(clientId).then((res) => {
      if (!active) return;
      if (res.ok) {
        setMoods(res.moods ?? []);
        setJournal(res.journal ?? []);
      } else {
        setError(res.error ?? "Erreur");
      }
      setLoading(false);
    });
    return () => {
      active = false;
    };
  }, [clientId]);

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
