"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2, Circle, Save } from "lucide-react";
import { toast } from "sonner";
import { submitTaskFeedback } from "@/lib/portal-actions";

export interface Devoir {
  id: string;
  title: string;
  description: string | null;
  dueDate: string | null;
  completedAt: string | null;
  clientFeedback: string | null;
}

export function DevoirsClient({ items }: { items: Devoir[] }) {
  const open = items.filter((i) => !i.completedAt);
  const done = items.filter((i) => !!i.completedAt);

  return (
    <>
      <header className="mb-6">
        <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
          Mes devoirs
        </h1>
        <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
          {open.length} en cours · {done.length} terminé{done.length > 1 ? "s" : ""}
        </p>
      </header>

      <Section title="À faire">
        {open.length === 0 ? (
          <Empty>Aucun devoir en cours.</Empty>
        ) : (
          <ul className="space-y-3">
            {open.map((d) => (
              <DevoirRow key={d.id} devoir={d} />
            ))}
          </ul>
        )}
      </Section>

      {done.length > 0 && (
        <Section title="Terminés">
          <ul className="space-y-3">
            {done.map((d) => (
              <DevoirRow key={d.id} devoir={d} />
            ))}
          </ul>
        </Section>
      )}
    </>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section className="mb-7">
      <h2 className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] font-semibold mb-3">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Empty({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="rounded-[14px] bg-[var(--color-white-soft)] p-5 text-[13px] text-[var(--color-gray-soft)] italic"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      {children}
    </div>
  );
}

function DevoirRow({ devoir }: { devoir: Devoir }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [open, setOpen] = useState(!devoir.completedAt && !devoir.clientFeedback);
  const [feedback, setFeedback] = useState(devoir.clientFeedback ?? "");
  const completed = !!devoir.completedAt;

  function save(markCompleted: boolean) {
    startTransition(async () => {
      const res = await submitTaskFeedback({
        taskId: devoir.id,
        feedback,
        markCompleted,
      });
      if (res.ok) {
        toast.success(markCompleted ? "Devoir marqué comme terminé" : "Retour enregistré");
        router.refresh();
        setOpen(false);
      } else {
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  return (
    <li
      className="rounded-[14px] bg-[var(--color-white-soft)] p-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-start gap-3">
        {completed ? (
          <CheckCircle2 size={18} className="mt-0.5 text-[var(--color-teal)]" aria-hidden="true" />
        ) : (
          <Circle size={18} className="mt-0.5 text-[var(--color-gray-soft)]" aria-hidden="true" />
        )}
        <div className="flex-1 min-w-0">
          <div className="font-semibold text-[14px] text-[var(--color-navy)]">{devoir.title}</div>
          {devoir.dueDate && (
            <div className="text-[11.5px] text-[var(--color-gray-soft)] mt-0.5">
              à faire pour le {formatDate(devoir.dueDate)}
            </div>
          )}
          {devoir.description && (
            <p className="mt-2 text-[13px] text-[var(--color-navy)]/80 whitespace-pre-wrap">
              {devoir.description}
            </p>
          )}
          {!open && (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="mt-3 inline-flex items-center gap-1.5 rounded-[8px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]"
            >
              {devoir.clientFeedback ? "Modifier mon retour" : "Ajouter mon retour"}
            </button>
          )}
          {open && (
            <div className="mt-3 space-y-2">
              <textarea
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                rows={3}
                placeholder="Comment cela s'est-il passé ? Ce que vous avez observé, ressenti…"
                className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
              />
              <div className="flex flex-wrap justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  disabled={pending}
                  className="rounded-[8px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
                >
                  Annuler
                </button>
                <button
                  type="button"
                  onClick={() => save(false)}
                  disabled={pending}
                  className="inline-flex items-center gap-1.5 rounded-[8px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
                >
                  <Save size={12} />
                  Enregistrer
                </button>
                {!completed && (
                  <button
                    type="button"
                    onClick={() => save(true)}
                    disabled={pending}
                    className="inline-flex items-center gap-1.5 rounded-[8px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
                    style={{ backgroundColor: "var(--color-teal)" }}
                  >
                    <CheckCircle2 size={12} />
                    Marquer terminé
                  </button>
                )}
              </div>
            </div>
          )}
          {!open && devoir.clientFeedback && (
            <blockquote className="mt-3 rounded-[10px] bg-[var(--color-cream)] px-3 py-2 text-[12.5px] text-[var(--color-navy)] whitespace-pre-wrap">
              <span className="text-[10px] uppercase tracking-wide text-[var(--color-gray-soft)] block mb-1">
                Mon retour
              </span>
              {devoir.clientFeedback}
            </blockquote>
          )}
        </div>
      </header>
    </li>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
}
