"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { BookOpen, Plus, Pencil, Trash2, Lock, Share2, X, Save } from "lucide-react";
import { toast } from "sonner";
import { saveJournalEntry, deleteJournalEntry } from "@/lib/portal-actions";
import { useConfirm } from "@/components/ui/ConfirmDialog";

export interface JournalEntry {
  id: string;
  title: string | null;
  body: string;
  shared: boolean;
  createdAt: string;
}

export function JournalClient({ entries }: { entries: JournalEntry[] }) {
  const [editing, setEditing] = useState<JournalEntry | "new" | null>(null);

  return (
    <>
      <header className="mb-6 flex items-start justify-between gap-3 flex-wrap">
        <div>
          <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">
            Mon journal
          </h1>
          <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-1">
            Notez ce que vous traversez entre les séances. Vous choisissez ce que vous partagez
            avec votre praticien·ne.
          </p>
        </div>
        {editing === null && (
          <button
            type="button"
            onClick={() => setEditing("new")}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[13px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={14} />
            Nouvelle entrée
          </button>
        )}
      </header>

      {editing !== null && (
        <Editor
          entry={editing === "new" ? null : editing}
          onClose={() => setEditing(null)}
        />
      )}

      {entries.length === 0 && editing === null ? (
        <div
          className="rounded-[14px] bg-[var(--color-white-soft)] p-8 text-center"
          style={{ boxShadow: "var(--shadow-card)" }}
        >
          <BookOpen size={28} className="mx-auto text-[var(--color-gray-soft)] mb-2" />
          <p className="text-[13px] text-[var(--color-gray-soft)]">
            Votre journal est vide. Écrivez votre première entrée quand vous le souhaitez.
          </p>
        </div>
      ) : (
        <ul className="space-y-3">
          {entries.map((e) => (
            <EntryCard key={e.id} entry={e} onEdit={() => setEditing(e)} />
          ))}
        </ul>
      )}
    </>
  );
}

function EntryCard({ entry, onEdit }: { entry: JournalEntry; onEdit: () => void }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const { confirm, dialog } = useConfirm();

  return (
    <li
      className="rounded-[14px] bg-[var(--color-white-soft)] p-4"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <div className="flex items-center gap-2 flex-wrap">
            {entry.title && (
              <span className="font-semibold text-[14px] text-[var(--color-navy)]">
                {entry.title}
              </span>
            )}
            <span
              className="inline-flex items-center gap-1 text-[10.5px] font-semibold rounded-full px-2 py-0.5"
              style={
                entry.shared
                  ? { backgroundColor: "rgba(46,138,123,0.14)", color: "var(--color-teal)" }
                  : { backgroundColor: "var(--color-light-gray)", color: "var(--color-gray-soft)" }
              }
            >
              {entry.shared ? <Share2 size={10} /> : <Lock size={10} />}
              {entry.shared ? "Partagé" : "Privé"}
            </span>
          </div>
          <div className="text-[11px] text-[var(--color-gray-soft)] mt-0.5">
            {formatDate(entry.createdAt)}
          </div>
        </div>
        <div className="flex items-center gap-1 shrink-0">
          <button
            type="button"
            onClick={onEdit}
            className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)]"
            aria-label="Modifier"
          >
            <Pencil size={13} />
          </button>
          <button
            type="button"
            disabled={pending}
            onClick={async () => {
              const ok = await confirm({
                title: "Supprimer l'entrée",
                message: "Cette entrée de journal sera définitivement supprimée.",
                confirmLabel: "Supprimer",
                destructive: true,
              });
              if (!ok) return;
              startTransition(async () => {
                const res = await deleteJournalEntry(entry.id);
                if (res.ok) {
                  toast.success("Entrée supprimée");
                  router.refresh();
                } else {
                  toast.error(res.error ?? "Impossible de supprimer");
                }
              });
            }}
            className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
            aria-label="Supprimer"
          >
            <Trash2 size={13} />
          </button>
        </div>
      </div>
      <p className="mt-2 text-[13px] text-[var(--color-navy)]/85 whitespace-pre-wrap">{entry.body}</p>
      {dialog}
    </li>
  );
}

function Editor({ entry, onClose }: { entry: JournalEntry | null; onClose: () => void }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [title, setTitle] = useState(entry?.title ?? "");
  const [body, setBody] = useState(entry?.body ?? "");
  const [shared, setShared] = useState(entry?.shared ?? false);

  function save() {
    if (!body.trim()) return;
    startTransition(async () => {
      const res = await saveJournalEntry({
        id: entry?.id,
        title: title.trim() || null,
        body: body.trim(),
        shared,
      });
      if (res.ok) {
        toast.success(entry ? "Entrée mise à jour" : "Entrée enregistrée");
        router.refresh();
        onClose();
      } else {
        toast.error(res.error ?? "Impossible d'enregistrer");
      }
    });
  }

  return (
    <div
      className="rounded-[14px] bg-[var(--color-white-soft)] p-4 mb-4 space-y-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Titre (optionnel)"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[14px] font-semibold focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
      <textarea
        value={body}
        onChange={(e) => setBody(e.target.value)}
        rows={6}
        autoFocus
        placeholder="Écrivez librement…"
        className="w-full rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13.5px] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
      />
      <label className="flex items-center gap-2 text-[12.5px] text-[var(--color-navy)] cursor-pointer">
        <input
          type="checkbox"
          checked={shared}
          onChange={(e) => setShared(e.target.checked)}
          className="h-4 w-4 accent-[var(--color-gold)]"
        />
        Partager cette entrée avec mon praticien·ne
      </label>
      <div className="flex justify-end gap-2">
        <button
          type="button"
          onClick={onClose}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          <X size={12} />
          Annuler
        </button>
        <button
          type="button"
          onClick={save}
          disabled={pending || !body.trim()}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2 text-[12px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={12} />
          {pending ? "…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
}
