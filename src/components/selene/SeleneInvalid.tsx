import { AlertCircle } from "lucide-react";

export function SeleneInvalid({ reason }: { reason: string }) {
  return (
    <div
      className="min-h-[100dvh] flex items-center justify-center px-5 py-10"
      style={{ background: "var(--color-cream)" }}
    >
      <div
        className="w-full max-w-md rounded-[18px] p-8 text-center"
        style={{ background: "var(--color-white-soft)", boxShadow: "var(--shadow-modal)" }}
      >
        <div
          className="mx-auto mb-4 inline-flex items-center justify-center rounded-full p-3"
          style={{ backgroundColor: "rgba(184,84,80,0.12)" }}
          aria-hidden="true"
        >
          <AlertCircle size={28} className="text-[#B85450]" />
        </div>
        <h1 className="font-serif text-[22px] font-bold text-[var(--color-navy)]">
          Lien invalide
        </h1>
        <p className="mt-2 text-[13px] text-[var(--color-gray-soft)] leading-[1.6]">
          {reason}
        </p>
        <p className="mt-4 text-[12px] text-[var(--color-gray-soft)]">
          Veuillez contacter votre praticien pour obtenir un nouveau lien d&apos;accès.
        </p>
      </div>
    </div>
  );
}
