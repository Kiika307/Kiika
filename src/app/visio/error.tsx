"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";
import { logClientRouteError } from "@/lib/client-error-log";

export default function VisioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logClientRouteError("Visio route error", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger la visio"
      message="La salle de visio n'est pas disponible. Réessayez."
      onRetry={reset}
    />
  );
}
