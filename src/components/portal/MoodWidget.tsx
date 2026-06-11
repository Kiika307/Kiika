"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { logMoodCheckin } from "@/lib/portal-actions";

const MOODS = [
  { score: 1, emoji: "😣", label: "Très difficile" },
  { score: 2, emoji: "🙁", label: "Difficile" },
  { score: 3, emoji: "😐", label: "Neutre" },
  { score: 4, emoji: "🙂", label: "Plutôt bien" },
  { score: 5, emoji: "😀", label: "Très bien" },
];

export function MoodWidget({ alreadyToday }: { alreadyToday: boolean }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [selected, setSelected] = useState<number | null>(null);
  const [note, setNote] = useState("");
  const [done, setDone] = useState(alreadyToday);

  function submit(score: number) {
    setSelected(score);
    startTransition(async () => {
      const res = await logMoodCheckin({ score, note: note || null });
      if (res.ok) {
        setDone(true);
        toast.success("Météo enregistrée — merci !");
        router.refresh();
      } else {
        toast.error(res.error ?? "Impossible d'enregistrer");
        setSelected(null);
      }
    });
  }

  if (done) {
    return (
      <div
        className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <h2 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-1">
          Météo émotionnelle
        </h2>
        <p className="text-[12.5px] text-[var(--color-gray-soft)]">
          Merci, votre ressenti du jour est enregistré. À demain pour un nouveau point. 🌤️
        </p>
      </div>
    );
  }

  return (
    <div
      className="rounded-[16px] bg-[var(--color-white-soft)] p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <h2 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-1">
        Comment vous sentez-vous aujourd&apos;hui&nbsp;?
      </h2>
      <p className="text-[12px] text-[var(--color-gray-soft)] mb-3">
        Un repère partagé avec votre praticien·ne pour suivre votre cheminement.
      </p>
      <div className="flex justify-between gap-1.5 mb-3">
        {MOODS.map((m) => (
          <button
            key={m.score}
            type="button"
            disabled={pending}
            onClick={() => submit(m.score)}
            title={m.label}
            aria-label={m.label}
            className="flex-1 flex flex-col items-center gap-1 rounded-[12px] py-2.5 transition-colors disabled:opacity-50 hover:bg-[var(--color-cream)]"
            style={
              selected === m.score
                ? { backgroundColor: "rgba(200,160,48,0.16)" }
                : undefined
            }
          >
            <span className="text-[26px] leading-none">{m.emoji}</span>
            <span className="text-[9.5px] text-[var(--color-gray-soft)] text-center leading-tight">
              {m.label}
            </span>
          </button>
        ))}
      </div>
      <input
        type="text"
        value={note}
        onChange={(e) => setNote(e.target.value)}
        placeholder="Un mot sur votre journée (optionnel)…"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
    </div>
  );
}
