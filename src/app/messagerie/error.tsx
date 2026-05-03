"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function MessagerieError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Messagerie route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger la messagerie"
      message="Vos conversations n'ont pas pu être récupérées. Réessayez."
      onRetry={reset}
    />
  );
}
