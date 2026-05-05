"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";
import { logClientRouteError } from "@/lib/client-error-log";

export default function ClientsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    logClientRouteError("Clients route error", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger les clients"
      message="Vérifiez votre connexion puis réessayez."
      onRetry={reset}
    />
  );
}
