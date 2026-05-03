"use client";

import { useEffect } from "react";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    console.error("Global error:", error);
  }, [error]);

  return (
    <html lang="fr">
      <body
        style={{
          fontFamily: "system-ui, -apple-system, sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "1.5rem",
          backgroundColor: "#F5F1EA",
          color: "#0F1F3A",
        }}
      >
        <div style={{ maxWidth: "32rem", textAlign: "center" }}>
          <h1
            style={{
              fontSize: "1.75rem",
              fontWeight: 700,
              marginBottom: "0.75rem",
            }}
          >
            Erreur critique
          </h1>
          <p style={{ fontSize: "0.95rem", color: "#5A6478", marginBottom: "1.5rem" }}>
            L&apos;application a rencontré un problème inattendu. Réessayez ou
            rechargez la page.
          </p>
          <button
            type="button"
            onClick={reset}
            style={{
              display: "inline-block",
              padding: "0.75rem 1.25rem",
              borderRadius: "10px",
              backgroundColor: "#C8A030",
              color: "white",
              fontWeight: 600,
              border: "none",
              cursor: "pointer",
              minHeight: "44px",
            }}
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  );
}
