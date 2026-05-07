"use client";

import { useState, useTransition } from "react";
import { Bell, BellOff, Loader2, Check } from "lucide-react";
import { toast } from "sonner";
import { setRemindersEnabled } from "@/lib/actions";

interface RemindersToggleProps {
  initialEnabled: boolean;
}

export function RemindersToggle({ initialEnabled }: RemindersToggleProps) {
  const [enabled, setEnabled] = useState(initialEnabled);
  const [pending, startTransition] = useTransition();
  const [savedAt, setSavedAt] = useState<number | null>(null);

  const justSaved = savedAt !== null && Date.now() - savedAt < 3000;

  const handleToggle = (next: boolean) => {
    const previous = enabled;
    setEnabled(next);
    startTransition(async () => {
      const res = await setRemindersEnabled(next);
      if (!res.ok) {
        setEnabled(previous);
        toast.error(res.error ?? "Impossible de mettre à jour les préférences");
        return;
      }
      setSavedAt(Date.now());
      toast.success(
        next ? "Rappels automatiques activés" : "Rappels automatiques désactivés",
      );
    });
  };

  return (
    <section
      className="rounded-[18px] p-6 sm:p-7"
      style={{
        backgroundColor: "var(--color-white-soft)",
        boxShadow: "var(--shadow-card)",
      }}
    >
      <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)] mb-1">
        Rappels de rendez-vous
      </h2>
      <p className="text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55] mb-5">
        Lorsqu&apos;un rendez-vous est planifié, KIIKA envoie automatiquement un
        rappel par email à votre client <strong>24 heures avant</strong> la séance,
        puis un second <strong>1 heure avant</strong>. Le client peut annuler en un
        clic depuis l&apos;email de la veille.
      </p>

      <div className="flex items-center justify-between gap-4">
        <div className="flex items-start gap-3">
          <div
            className="inline-flex items-center justify-center w-10 h-10 rounded-[10px] shrink-0"
            style={{
              backgroundColor: enabled
                ? "var(--color-gold-light)"
                : "var(--color-light-gray)",
              color: enabled ? "var(--color-gold)" : "var(--color-gray-soft)",
            }}
            aria-hidden="true"
          >
            {enabled ? <Bell size={18} /> : <BellOff size={18} />}
          </div>
          <div>
            <div className="text-[13.5px] font-semibold text-[var(--color-navy)]">
              {enabled ? "Activés" : "Désactivés"}
            </div>
            <div className="text-[11.5px] text-[var(--color-gray-soft)]">
              {enabled
                ? "Vos clients reçoivent les rappels par défaut."
                : "Aucun rappel n'est envoyé. Vous pouvez réactiver à tout moment."}
            </div>
          </div>
        </div>

        <button
          type="button"
          role="switch"
          aria-checked={enabled}
          onClick={() => handleToggle(!enabled)}
          disabled={pending}
          className="relative inline-flex h-7 w-12 items-center rounded-full transition-colors disabled:opacity-60"
          style={{
            backgroundColor: enabled ? "var(--color-gold)" : "var(--color-light-gray)",
          }}
        >
          <span className="sr-only">
            {enabled ? "Désactiver les rappels" : "Activer les rappels"}
          </span>
          <span
            className="inline-block h-5 w-5 transform rounded-full bg-white shadow-sm transition-transform"
            style={{ transform: enabled ? "translateX(22px)" : "translateX(2px)" }}
          />
        </button>
      </div>

      <div className="mt-4 flex items-center gap-2 text-[11px] text-[var(--color-gray-soft)] min-h-5">
        {pending && (
          <>
            <Loader2 size={12} className="animate-spin" aria-hidden="true" />
            Enregistrement…
          </>
        )}
        {!pending && justSaved && (
          <>
            <Check size={12} className="text-[var(--color-teal)]" aria-hidden="true" />
            Préférence enregistrée
          </>
        )}
      </div>

      <p className="mt-4 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.55]">
        Vous pouvez aussi désactiver les rappels{" "}
        <strong>par client individuellement</strong> depuis sa fiche, sans toucher
        à ce réglage global.
      </p>
    </section>
  );
}
