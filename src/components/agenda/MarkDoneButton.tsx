"use client";

import { useTransition } from "react";
import { Check } from "lucide-react";
import { toast } from "sonner";
import { markAppointmentDone } from "@/lib/actions";

interface MarkDoneButtonProps {
  appointmentId: string;
}

export function MarkDoneButton({ appointmentId }: MarkDoneButtonProps) {
  const [pending, startTransition] = useTransition();

  return (
    <button
      type="button"
      disabled={pending}
      onClick={() =>
        startTransition(async () => {
          try {
            await markAppointmentDone(appointmentId);
            toast.success("Séance marquée comme terminée");
          } catch {
            toast.error("Impossible de marquer la séance. Réessaie.");
          }
        })
      }
      title="Marquer la séance comme terminée"
      aria-label="Marquer la séance comme terminée"
      className="inline-flex items-center gap-1 px-2.5 py-1 rounded-[8px] border border-[var(--color-light-gray)] text-[11px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] transition-colors disabled:opacity-50"
    >
      <Check size={12} aria-hidden="true" />
      {pending ? "..." : "Terminée"}
    </button>
  );
}
