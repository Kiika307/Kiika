"use client";

import { useEffect } from "react";
import { ErrorState } from "@/components/ui/ErrorState";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalRouteError({ error, reset }: ErrorProps) {
  useEffect(() => {
    console.error("Route error:", error);
  }, [error]);

  return (
    <ErrorState
      title="Une erreur est survenue"
      message="Nous n'avons pas pu afficher cette page. Vous pouvez réessayer ou revenir à l'accueil."
      onRetry={reset}
      showHome
    />
  );
}
