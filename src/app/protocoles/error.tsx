"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";
import { logClientRouteError } from "@/lib/client-error-log";

export default function ProtocolesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logClientRouteError("Protocoles route error", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger les protocoles"
      message="La bibliothèque n'a pas pu être chargée. Réessayez."
      onRetry={reset}
    />
  );
}
