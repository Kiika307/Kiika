"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function ClientsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Clients route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger les clients"
      message="Vérifiez votre connexion puis réessayez."
      onRetry={reset}
    />
  );
}
