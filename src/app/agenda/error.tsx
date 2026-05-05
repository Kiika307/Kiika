"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";
import { logClientRouteError } from "@/lib/client-error-log";

export default function AgendaError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logClientRouteError("Agenda route error", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger l'agenda"
      message="Vérifiez votre connexion puis réessayez."
      onRetry={reset}
    />
  );
}
