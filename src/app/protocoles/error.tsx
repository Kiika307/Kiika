"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

export default function ProtocolesError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Protocoles route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Impossible de charger les protocoles"
      message="La bibliothèque n'a pas pu être chargée. Réessayez."
      onRetry={reset}
    />
  );
}
