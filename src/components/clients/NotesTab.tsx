"use client";

import { useState, useTransition } from "react";
import { Plus, Pencil, Trash2, Save, X, FileText } from "lucide-react";
import { toast } from "sonner";
import { FormField, FormTextarea } from "@/components/ui/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import { addClientNote, updateClientNote, deleteClientNote } from "@/lib/actions";
import type { ClientNote } from "@/lib/types";

interface NotesTabProps {
  clientId: string;
  notes: ClientNote[];
}

export function NotesTab({ clientId, notes }: NotesTabProps) {
  const [composing, setComposing] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { confirm, dialog } = useConfirm();

  const journalNotes = notes.filter((n) => n.kind === "libre");

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Journal de suivi
          <span className="ml-2 text-[12px] font-normal text-[var(--color-gray-soft)]">
            {journalNotes.length} note{journalNotes.length > 1 ? "s" : ""}
          </span>
        </h2>
        {!composing && (
          <button
            type="button"
            onClick={() => {
              setComposing(true);
              setEditingId(null);
            }}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={14} />
            Nouvelle note
          </button>
        )}
      </div>

      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      {composing && (
        <NoteEditor
          onCancel={() => setComposing(false)}
          pending={pending}
          onSubmit={(title, body) => {
            setError(null);
            startTransition(async () => {
              const res = await addClientNote({ clientId, kind: "libre", title, body });
              if (res.ok) {
                setComposing(false);
                toast.success("Note ajoutée");
              } else {
                setError(res.error ?? "Erreur");
                toast.error(res.error ?? "Impossible d'ajouter la note");
              }
            });
          }}
        />
      )}

      {journalNotes.length === 0 && !composing && (
        <div
          className="rounded-[16px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={FileText}
            title="Aucune note pour le moment"
            message="Commencez votre journal de suivi : observations, ressentis, ajustements de protocole."
            action={
              <button
                type="button"
                onClick={() => setComposing(true)}
                className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <Plus size={14} aria-hidden="true" />
                Première note
              </button>
            }
          />
        </div>
      )}

      <div className="space-y-3">
        {journalNotes.map((note) =>
          editingId === note.id ? (
            <NoteEditor
              key={note.id}
              initialTitle={note.title}
              initialBody={note.body}
              pending={pending}
              onCancel={() => setEditingId(null)}
              onSubmit={(title, body) => {
                setError(null);
                startTransition(async () => {
                  const res = await updateClientNote(note.id, { title, body });
                  if (res.ok) {
                    setEditingId(null);
                    toast.success("Note mise à jour");
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible de mettre à jour");
                  }
                });
              }}
            />
          ) : (
            <NoteCard
              key={note.id}
              note={note}
              onEdit={() => setEditingId(note.id)}
              onDelete={async () => {
                const ok = await confirm({
                  title: "Supprimer la note",
                  message: "Cette note sera définitivement supprimée. Continuer ?",
                  confirmLabel: "Supprimer",
                  destructive: true,
                });
                if (!ok) return;
                setError(null);
                startTransition(async () => {
                  const res = await deleteClientNote(note.id);
                  if (res.ok) {
                    toast.success("Note supprimée");
                  } else {
                    setError(res.error ?? "Erreur");
                    toast.error(res.error ?? "Impossible de supprimer");
                  }
                });
              }}
            />
          ),
        )}
      </div>
      {dialog}
    </div>
  );
}

function NoteCard({
  note,
  onEdit,
  onDelete,
}: {
  note: ClientNote;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const date = new Date(note.createdAt);
  const dateLabel = date.toLocaleDateString("fr-FR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });
  const timeLabel = date.toLocaleTimeString("fr-FR", { hour: "2-digit", minute: "2-digit" });

  return (
    <article
      className="rounded-[16px] bg-white p-5"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <header className="flex items-start justify-between mb-2">
        <div>
          {note.title && (
            <h3 className="font-serif text-[15px] font-semibold text-[var(--color-navy)]">
              {note.title}
            </h3>
          )}
          <div className="text-[11px] text-[var(--color-gray-soft)]">
            {dateLabel} · {timeLabel}
          </div>
        </div>
        <div className="flex gap-1">
          <button
            type="button"
            onClick={onEdit}
            className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)]"
            title="Modifier"
            aria-label="Modifier la note"
          >
            <Pencil size={14} aria-hidden="true" />
          </button>
          <button
            type="button"
            onClick={onDelete}
            className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600"
            title="Supprimer"
            aria-label="Supprimer la note"
          >
            <Trash2 size={14} aria-hidden="true" />
          </button>
        </div>
      </header>
      <p className="text-[13px] text-[var(--color-navy)] whitespace-pre-wrap leading-relaxed">
        {note.body}
      </p>
    </article>
  );
}

interface NoteEditorProps {
  initialTitle?: string | null;
  initialBody?: string;
  pending: boolean;
  onCancel: () => void;
  onSubmit: (title: string | null, body: string) => void;
}

function NoteEditor({
  initialTitle = null,
  initialBody = "",
  pending,
  onCancel,
  onSubmit,
}: NoteEditorProps) {
  const [title, setTitle] = useState(initialTitle ?? "");
  const [body, setBody] = useState(initialBody);

  return (
    <div className="rounded-[16px] bg-white p-5 space-y-3" style={{ boxShadow: "var(--shadow-card)" }}>
      <FormField
        label="Titre"
        type="text"
        placeholder="Titre (optionnel)"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <FormTextarea
        label="Note"
        placeholder="Saisir une note…"
        rows={6}
        value={body}
        onChange={(e) => setBody(e.target.value)}
        required
      />
      <div className="flex justify-end gap-2 mt-3">
        <button
          type="button"
          onClick={onCancel}
          disabled={pending}
          className="inline-flex items-center gap-1.5 rounded-[10px] border border-[var(--color-light-gray)] px-3 py-1.5 text-[12px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
        >
          <X size={12} />
          Annuler
        </button>
        <button
          type="button"
          onClick={() => onSubmit(title.trim() || null, body)}
          disabled={pending || !body.trim()}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-1.5 text-[12px] font-semibold text-white disabled:opacity-50"
          style={{ backgroundColor: "var(--color-gold)" }}
        >
          <Save size={12} />
          {pending ? "…" : "Enregistrer"}
        </button>
      </div>
    </div>
  );
}
