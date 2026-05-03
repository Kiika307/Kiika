"use client";

import { useState, useTransition, useMemo } from "react";
import { ChevronLeft, ChevronRight, CheckCircle2, Sparkles } from "lucide-react";
import { SELENE_QUESTIONS } from "@/lib/selene-data";
import { submitSeleneResponses } from "@/lib/selene-actions";

interface SeleneTestClientProps {
  token: string;
  firstName: string;
}

const LIKERT_LABELS = [
  "Pas du tout d'accord",
  "Plutôt pas d'accord",
  "Légèrement pas d'accord",
  "Neutre",
  "Légèrement d'accord",
  "Plutôt d'accord",
  "Tout à fait d'accord",
];

const QUESTIONS_PER_PAGE = 13; // un bloc / dimension à la fois

export function SeleneTestClient({ token, firstName }: SeleneTestClientProps) {
  const [phase, setPhase] = useState<"intro" | "test" | "submitting" | "done" | "error">("intro");
  const [page, setPage] = useState(0);
  const [responses, setResponses] = useState<Record<string, number>>({});
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();

  const totalQuestions = SELENE_QUESTIONS.length;
  const totalPages = Math.ceil(totalQuestions / QUESTIONS_PER_PAGE);
  const answered = Object.keys(responses).length;

  const currentQuestions = useMemo(() => {
    const start = page * QUESTIONS_PER_PAGE;
    return SELENE_QUESTIONS.slice(start, start + QUESTIONS_PER_PAGE);
  }, [page]);

  const allCurrentAnswered = currentQuestions.every((q) => responses[q.id] != null);
  const allDone = answered >= totalQuestions;
  const progressPct = Math.round((answered / totalQuestions) * 100);

  const setResponse = (qid: string, value: number) => {
    setResponses((r) => ({ ...r, [qid]: value }));
  };

  const goNext = () => {
    if (page < totalPages - 1) {
      setPage((p) => p + 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const goPrev = () => {
    if (page > 0) {
      setPage((p) => p - 1);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handleSubmit = () => {
    setErrorMsg(null);
    setPhase("submitting");
    startTransition(async () => {
      const res = await submitSeleneResponses(token, responses);
      if (res.ok) {
        setPhase("done");
      } else {
        setErrorMsg(res.error ?? "Une erreur est survenue.");
        setPhase("error");
      }
    });
  };

  // ============== INTRO PHASE ==============
  if (phase === "intro") {
    return (
      <div
        className="min-h-[100dvh] flex items-center justify-center px-5 py-10"
        style={{ background: "var(--color-cream)" }}
      >
        <div
          className="w-full max-w-2xl rounded-[18px] p-7 sm:p-10"
          style={{ background: "var(--color-white-soft)", boxShadow: "var(--shadow-modal)" }}
        >
          <div className="text-center mb-6">
            <p className="text-[11px] uppercase tracking-[0.25em] text-[var(--color-gold)] mb-2">
              Test psychométrique
            </p>
            <h1 className="font-serif text-[36px] sm:text-[44px] font-bold tracking-[0.18em] text-[var(--color-navy)] leading-none">
              SELENE
            </h1>
            <div
              className="h-px w-16 mx-auto mt-5"
              style={{ background: "var(--color-gold)" }}
              aria-hidden="true"
            />
          </div>

          <p className="text-[14px] sm:text-[15px] text-[var(--color-navy)] leading-[1.65]">
            Bienvenue {firstName}, et merci de prendre le temps de réaliser ce test.
          </p>
          <p className="mt-3 text-[13.5px] text-[var(--color-navy)] leading-[1.65]">
            <strong>Selene</strong> est un test psychométrique en {totalQuestions} questions
            qui éclaire 9 dimensions de votre personnalité — vos forces naturelles, vos
            tensions intérieures, vos manières de vous relier aux autres et au monde.
          </p>
          <p className="mt-3 text-[13.5px] text-[var(--color-navy)] leading-[1.65]">
            Il a été créé par <strong>Varinka ROBERT</strong> pour offrir aux
            accompagnants un outil de lecture profonde de la singularité de chaque
            personne.
          </p>

          <div
            className="mt-6 rounded-[12px] p-4"
            style={{ backgroundColor: "rgba(200,160,48,0.08)" }}
          >
            <h2 className="font-serif text-[15px] font-semibold text-[var(--color-navy)] mb-2 inline-flex items-center gap-2">
              <Sparkles size={15} className="text-[var(--color-gold)]" aria-hidden="true" />
              Conseils pour répondre
            </h2>
            <ul className="space-y-1.5 text-[13px] text-[var(--color-navy)] leading-[1.55]">
              <li>• Répondez spontanément, sans trop réfléchir.</li>
              <li>• Il n&apos;y a pas de bonne ou mauvaise réponse.</li>
              <li>
                • Choisissez ce qui vous correspond <em>aujourd&apos;hui</em>, pas ce que
                vous voudriez être.
              </li>
              <li>• Comptez environ 15 à 20 minutes.</li>
              <li>• Vos réponses ne seront partagées qu&apos;avec votre praticien.</li>
            </ul>
          </div>

          <button
            type="button"
            onClick={() => setPhase("test")}
            className="mt-7 w-full inline-flex items-center justify-center gap-2 rounded-[12px] px-5 py-3.5 text-[14px] font-semibold text-white min-h-12 transition-opacity hover:opacity-90"
            style={{
              background: "linear-gradient(135deg, var(--color-navy) 0%, #2A3F5C 100%)",
            }}
          >
            Commencer le test
            <ChevronRight size={16} aria-hidden="true" />
          </button>
          <p className="mt-3 text-center text-[11px] text-[var(--color-gray-soft)]">
            En commençant, vous acceptez le traitement anonymisé de vos réponses
            conformément à la{" "}
            <a
              href="/confidentialite"
              target="_blank"
              rel="noopener"
              className="text-[var(--color-gold)] underline underline-offset-2"
            >
              politique de confidentialité
            </a>
            .
          </p>
        </div>
      </div>
    );
  }

  // ============== DONE PHASE ==============
  if (phase === "done") {
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
            <CheckCircle2 size={32} className="text-[var(--color-teal)]" />
          </div>
          <h1 className="font-serif text-[24px] font-bold text-[var(--color-navy)]">
            Merci {firstName} !
          </h1>
          <p className="mt-3 text-[13.5px] text-[var(--color-navy)] leading-[1.6]">
            Vos réponses ont bien été transmises à votre praticien. Il prendra le temps
            d&apos;en discuter avec vous lors de votre prochaine séance.
          </p>
          <div
            className="mt-6 h-px w-12 mx-auto"
            style={{ background: "var(--color-gold)" }}
            aria-hidden="true"
          />
          <p className="mt-4 font-serif text-[12.5px] italic text-[var(--color-gray-soft)]">
            « Le chemin du Ki au Ka commence par la connaissance de soi. »
          </p>
        </div>
      </div>
    );
  }

  // ============== ERROR PHASE ==============
  if (phase === "error") {
    return (
      <div
        className="min-h-[100dvh] flex items-center justify-center px-5 py-10"
        style={{ background: "var(--color-cream)" }}
      >
        <div
          className="w-full max-w-md rounded-[18px] p-8 text-center"
          style={{ background: "var(--color-white-soft)", boxShadow: "var(--shadow-modal)" }}
        >
          <h1 className="font-serif text-[20px] font-bold text-[var(--color-navy)] mb-3">
            Une erreur est survenue
          </h1>
          <p className="text-[13px] text-[var(--color-gray-soft)] leading-[1.5] mb-5">
            {errorMsg}
          </p>
          <button
            type="button"
            onClick={() => setPhase("test")}
            className="rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
            style={{ backgroundColor: "var(--color-navy)" }}
          >
            Réessayer
          </button>
        </div>
      </div>
    );
  }

  // ============== TEST / SUBMITTING PHASE ==============
  return (
    <div
      className="min-h-[100dvh] py-6 sm:py-10 px-4"
      style={{ background: "var(--color-cream)" }}
    >
      <div className="mx-auto max-w-2xl">
        {/* Header sticky */}
        <header className="mb-5">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] uppercase tracking-[0.2em] text-[var(--color-gold)] font-semibold">
              Selene · KIIKA
            </span>
            <span className="text-[12px] text-[var(--color-gray-soft)] tabular">
              Bloc {page + 1} / {totalPages}
            </span>
          </div>
          <div
            className="h-1.5 w-full rounded-full overflow-hidden"
            style={{ backgroundColor: "var(--color-light-gray)" }}
            role="progressbar"
            aria-valuenow={progressPct}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={`Avancement ${progressPct}%`}
          >
            <div
              className="h-full transition-all"
              style={{
                width: `${progressPct}%`,
                background: "linear-gradient(90deg, var(--color-gold) 0%, #F5E8C0 100%)",
              }}
            />
          </div>
          <p className="mt-1.5 text-[11px] text-[var(--color-gray-soft)] tabular">
            {answered} / {totalQuestions} questions répondues
          </p>
        </header>

        {/* Questions du bloc courant */}
        <div className="space-y-4">
          {currentQuestions.map((q, idx) => {
            const value = responses[q.id];
            return (
              <fieldset
                key={q.id}
                className="rounded-[14px] p-5"
                style={{
                  background: "var(--color-white-soft)",
                  boxShadow: "var(--shadow-card)",
                }}
              >
                <legend className="px-2 text-[11px] font-semibold text-[var(--color-gold)] tabular">
                  Q{page * QUESTIONS_PER_PAGE + idx + 1}
                </legend>
                <p className="font-serif text-[15px] sm:text-[16px] text-[var(--color-navy)] leading-[1.5] mb-4">
                  {q.text}
                </p>
                <div className="grid grid-cols-7 gap-1.5" role="radiogroup" aria-label={q.text}>
                  {[1, 2, 3, 4, 5, 6, 7].map((v) => {
                    const active = value === v;
                    return (
                      <button
                        key={v}
                        type="button"
                        onClick={() => setResponse(q.id, v)}
                        aria-checked={active}
                        role="radio"
                        title={LIKERT_LABELS[v - 1]}
                        className="aspect-square inline-flex items-center justify-center rounded-full font-serif text-[14px] sm:text-[15px] font-bold transition-all min-h-11"
                        style={{
                          background: active ? "var(--color-navy)" : "var(--color-cream)",
                          color: active ? "var(--color-gold-light)" : "var(--color-navy)",
                          border: active
                            ? "2px solid var(--color-gold)"
                            : "1px solid var(--color-light-gray)",
                          transform: active ? "scale(1.06)" : "scale(1)",
                        }}
                      >
                        {v}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-2 flex justify-between text-[10.5px] text-[var(--color-gray-soft)] px-1">
                  <span>Pas du tout</span>
                  <span className="hidden sm:inline">Neutre</span>
                  <span>Tout à fait</span>
                </div>
              </fieldset>
            );
          })}
        </div>

        {/* Navigation */}
        <nav
          className="sticky bottom-0 left-0 right-0 mt-6 -mx-4 px-4 py-3 flex items-center justify-between gap-3"
          style={{
            background: "linear-gradient(to top, var(--color-cream) 60%, transparent)",
          }}
        >
          <button
            type="button"
            onClick={goPrev}
            disabled={page === 0 || pending}
            className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] bg-white px-3 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] disabled:opacity-40 min-h-11"
          >
            <ChevronLeft size={14} aria-hidden="true" />
            Précédent
          </button>

          {page < totalPages - 1 ? (
            <button
              type="button"
              onClick={goNext}
              disabled={!allCurrentAnswered || pending}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50 min-h-11"
              style={{ backgroundColor: "var(--color-navy)" }}
            >
              {allCurrentAnswered ? "Suivant" : "Répondez à toutes les questions"}
              <ChevronRight size={14} aria-hidden="true" />
            </button>
          ) : (
            <button
              type="button"
              onClick={handleSubmit}
              disabled={!allDone || pending || phase === "submitting"}
              className="flex-1 inline-flex items-center justify-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white disabled:opacity-50 min-h-11"
              style={{
                background: allDone
                  ? "linear-gradient(135deg, #C8A030 0%, #D4B560 100%)"
                  : "var(--color-light-gray)",
                color: allDone ? "var(--color-navy)" : "var(--color-gray-soft)",
              }}
            >
              {phase === "submitting"
                ? "Envoi en cours…"
                : allDone
                  ? "Terminer et envoyer"
                  : `${totalQuestions - answered} questions restantes`}
              {phase !== "submitting" && allDone && <CheckCircle2 size={14} aria-hidden="true" />}
            </button>
          )}
        </nav>
      </div>
    </div>
  );
}
