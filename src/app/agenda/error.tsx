"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function AgendaError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Agenda route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger l'agenda"
      message="Vérifiez votre connexion puis réessayez."
      onRetry={reset}
    />
  );
}
