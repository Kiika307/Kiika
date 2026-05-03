import { CheckCircle2 } from "lucide-react";

export function SeleneAlreadyTaken() {
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
          style={{ backgroundColor: "rgba(46,138,123,0.12)" }}
          aria-hidden="true"
        >
          <CheckCircle2 size={28} className="text-[var(--color-teal)]" />
        </div>
        <h1 className="font-serif text-[22px] font-bold text-[var(--color-navy)]">
          Test déjà complété
        </h1>
        <p className="mt-2 text-[13px] text-[var(--color-gray-soft)] leading-[1.6]">
          Vous avez déjà complété ce test psychométrique. Vos réponses ont bien été
          transmises à votre praticien.
        </p>
        <p className="mt-4 text-[12px] text-[var(--color-gray-soft)]">
          Pour discuter de vos résultats, prenez rendez-vous avec votre praticien.
        </p>
      </div>
    </div>
  );
}
