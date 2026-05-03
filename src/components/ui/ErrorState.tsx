"use client";

import { AlertCircle, RotateCcw, Home } from "lucide-react";
import Link from "next/link";

interface ErrorStateProps {
  title?: string;
  message?: string;
  onRetry?: () => void;
  showHome?: boolean;
}

export function ErrorState({
  title = "Une erreur est survenue",
  message = "Nous n'avons pas pu charger cette section. Réessayez dans un instant.",
  onRetry,
  showHome = false,
}: ErrorStateProps) {
  return (
    <div
      role="alert"
      className="flex flex-col items-center justify-center text-center px-6 py-12 sm:py-16"
    >
      <div
        className="rounded-full p-4 mb-4"
        style={{ backgroundColor: "rgba(184,84,80,0.10)" }}
        aria-hidden="true"
      >
        <AlertCircle size={32} className="text-[#B85450]" />
      </div>
      <h2 className="font-serif text-[20px] sm:text-[22px] font-bold text-[var(--color-navy)] mb-2">
        {title}
      </h2>
      <p className="text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] max-w-md mb-5 leading-[1.5]">
        {message}
      </p>
      <div className="flex flex-col sm:flex-row gap-2">
        {onRetry && (
          <button
            type="button"
            onClick={onRetry}
            className="inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <RotateCcw size={14} aria-hidden="true" />
            Réessayer
          </button>
        )}
        {showHome && (
          <Link
            href="/"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-11"
          >
            <Home size={14} aria-hidden="true" />
            Retour à l&apos;accueil
          </Link>
        )}
      </div>
    </div>
  );
}
