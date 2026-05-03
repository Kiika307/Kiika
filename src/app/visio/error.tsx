"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function VisioError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Visio route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger la visio"
      message="La salle de visio n'est pas disponible. Réessayez."
      onRetry={reset}
    />
  );
}
