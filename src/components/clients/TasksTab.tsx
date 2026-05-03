"use client";

import { useState, useTransition, useMemo } from "react";
import { Plus, Trash2, Pencil, Save, X, Calendar, Check, ListTodo } from "lucide-react";
import { toast } from "sonner";
import { FormField, FormTextarea } from "@/components/ui/FormField";
import { EmptyState } from "@/components/ui/EmptyState";
import { useConfirm } from "@/components/ui/ConfirmDialog";
import {
  addClientTask,
  updateClientTask,
  toggleClientTaskDone,
  deleteClientTask,
} from "@/lib/actions";
import type { ClientTask } from "@/lib/types";

interface TasksTabProps {
  clientId: string;
  tasks: ClientTask[];
}

export function TasksTab({ clientId, tasks }: TasksTabProps) {
  const [adding, setAdding] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [pending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);
  const { confirm, dialog } = useConfirm();

  const askDelete = async (task: ClientTask) => {
    const ok = await confirm({
      title: "Supprimer la tâche",
      message: `Supprimer "${task.title}" ? Cette action est irréversible.`,
      confirmLabel: "Supprimer",
      destructive: true,
    });
    if (!ok) return;
    startTransition(async () => {
      const res = await deleteClientTask(task.id);
      if (res.ok) toast.success("Tâche supprimée");
      else {
        setError(res.error ?? "Erreur");
        toast.error(res.error ?? "Impossible de supprimer");
      }
    });
  };

  const { todo, done } = useMemo(() => {
    const t: ClientTask[] = [];
    const d: ClientTask[] = [];
    for (const task of tasks) (task.completedAt ? d : t).push(task);
    return { todo: t, done: d };
  }, [tasks]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
          Tâches & exercices
          <span className="ml-2 text-[12px] font-normal text-[var(--color-gray-soft)]">
            {todo.length} à faire · {done.length} terminée{done.length > 1 ? "s" : ""}
          </span>
        </h2>
        {!adding && (
          <button
            type="button"
            onClick={() => setAdding(true)}
            className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={14} />
            Nouvelle tâche
          </button>
        )}
      </div>

      {error && (
        <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
          {error}
        </div>
      )}

      {adding && (
        <TaskEditor
          pending={pending}
          onCancel={() => setAdding(false)}
          onSubmit={(title, description, dueDate) => {
            setError(null);
            startTransition(async () => {
              const res = await addClientTask({ clientId, title, description, dueDate });
              if (res.ok) {
                setAdding(false);
                toast.success("Tâche ajoutée");
              } else {
                setError(res.error ?? "Erreur");
                toast.error(res.error ?? "Impossible d'ajouter la tâche");
              }
            });
          }}
        />
      )}

      {tasks.length === 0 && !adding && (
        <div
          className="rounded-[16px]"
          style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
        >
          <EmptyState
            icon={ListTodo}
            title="Aucune tâche pour le moment"
            message="Assignez des exercices, lectures ou actions à votre client entre les séances."
            action={
              <button
                type="button"
                onClick={() => setAdding(true)}
                className="inline-flex items-center gap-1.5 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11"
                style={{ backgroundColor: "var(--color-gold)" }}
              >
                <Plus size={14} aria-hidden="true" />
                Première tâche
              </button>
            }
          />
        </div>
      )}

      {todo.length > 0 && (
        <section>
          <h3 className="text-[12px] uppercase tracking-wide text-[var(--color-gray-soft)] mb-2">
            À faire
          </h3>
          <div className="space-y-2">
            {todo.map((task) =>
              editingId === task.id ? (
                <TaskEditor
                  key={task.id}
                  initial={task}
                  pending={pending}
                  onCancel={() => setEditingId(null)}
                  onSubmit={(title, description, dueDate) => {
                    setError(null);
                    startTransition(async () => {
                      const res = await updateClientTask(task.id, {
                        title,
                        description,
                        dueDate,
                      });
                      if (res.ok) {
                        setEditingId(null);
                        toast.success("Tâche mise à jour");
                      } else {
                        setError(res.error ?? "Erreur");
                        toast.error(res.error ?? "Impossible de mettre à jour");
                      }
                    });
                  }}
                />
              ) : (
                <TaskRow
                  key={task.id}
                  task={task}
                  pending={pending}
                  onToggle={() => {
                    startTransition(async () => {
                      await toggleClientTaskDone(task.id, true);
                    });
                  }}
                  onEdit={() => setEditingId(task.id)}
                  onDelete={() => askDelete(task)}
                />
              ),
            )}
          </div>
        </section>
      )}

      {done.length > 0 && (
        <section>
          <h3 className="text-[12px] uppercase tracking-wide text-[var(--color-gray-soft)] mb-2 mt-4">
            Terminées
          </h3>
          <div className="space-y-2">
            {done.map((task) => (
              <TaskRow
                key={task.id}
                task={task}
                pending={pending}
                onToggle={() => {
                  startTransition(async () => {
                    await toggleClientTaskDone(task.id, false);
                  });
                }}
                onEdit={() => setEditingId(task.id)}
                onDelete={() => askDelete(task)}
              />
            ))}
          </div>
        </section>
      )}
      {dialog}
    </div>
  );
}

function TaskRow({
  task,
  pending,
  onToggle,
  onEdit,
  onDelete,
}: {
  task: ClientTask;
  pending: boolean;
  onToggle: () => void;
  onEdit: () => void;
  onDelete: () => void;
}) {
  const isDone = !!task.completedAt;
  const overdue =
    !isDone && task.dueDate && new Date(task.dueDate) < new Date(new Date().toDateString());

  return (
    <article
      className="rounded-[12px] bg-white px-4 py-3 flex items-start gap-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <button
        type="button"
        onClick={onToggle}
        disabled={pending}
        className={`mt-0.5 flex-shrink-0 w-5 h-5 rounded border-2 flex items-center justify-center transition-colors disabled:opacity-50 ${
          isDone
            ? "bg-[var(--color-teal)] border-[var(--color-teal)] text-white"
            : "border-[var(--color-gray-soft)] hover:border-[var(--color-gold)]"
        }`}
      >
        {isDone && <Check size={12} strokeWidth={3} aria-hidden="true" />}
      </button>

      <div className="flex-1 min-w-0">
        <div
          className={`text-[14px] font-semibold ${
            isDone
              ? "text-[var(--color-gray-soft)] line-through"
              : "text-[var(--color-navy)]"
          }`}
        >
          {task.title}
        </div>
        {task.description && (
          <p
            className={`text-[12px] mt-1 whitespace-pre-wrap ${
              isDone ? "text-[var(--color-gray-soft)]" : "text-[var(--color-navy)]/70"
            }`}
          >
            {task.description}
          </p>
        )}
        <div className="flex items-center gap-3 mt-1.5 text-[11px]">
          {task.dueDate && (
            <span
              className={`inline-flex items-center gap-1 ${
                overdue
                  ? "text-red-600 font-semibold"
                  : "text-[var(--color-gray-soft)]"
              }`}
            >
              <Calendar size={10} />
              {formatDate(task.dueDate)}
            </span>
          )}
          {task.clientFeedback && (
            <span className="text-[var(--color-teal)]">💬 Retour client</span>
          )}
        </div>
      </div>

      <div className="flex gap-1">
        <button
          type="button"
          onClick={onEdit}
          disabled={pending}
          className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)] hover:text-[var(--color-navy)] disabled:opacity-50"
          title="Modifier"
          aria-label="Modifier la tâche"
        >
          <Pencil size={13} aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDelete}
          disabled={pending}
          className="rounded p-1.5 text-[var(--color-gray-soft)] hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
          title="Supprimer"
          aria-label="Supprimer la tâche"
        >
          <Trash2 size={13} aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

function TaskEditor({
  initial,
  pending,
  onCancel,
  onSubmit,
}: {
  initial?: ClientTask;
  pending: boolean;
  onCancel: () => void;
  onSubmit: (title: string, description: string | null, dueDate: string | null) => void;
}) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [dueDate, setDueDate] = useState(initial?.dueDate ?? "");

  return (
    <div
      className="rounded-[12px] bg-white p-4 space-y-3"
      style={{ boxShadow: "var(--shadow-card)" }}
    >
      <FormField
        label="Titre"
        type="text"
        placeholder="Titre de la tâche"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <FormTextarea
        label="Description"
        rows={3}
        placeholder="Description / consignes (optionnel)…"
        value={description ?? ""}
        onChange={(e) => setDescription(e.target.value)}
      />
      <label className="flex items-center gap-2 text-[12px]">
        <span className="text-[var(--color-gray-soft)] uppercase tracking-wide">Échéance</span>
        <input
          type="date"
          value={dueDate ?? ""}
          onChange={(e) => setDueDate(e.target.value)}
          className="rounded-[10px] border border-[var(--color-light-gray)] px-2 py-1 text-[12px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
        />
        {dueDate && (
          <button
            type="button"
            onClick={() => setDueDate("")}
            className="text-[var(--color-gray-soft)] hover:text-[var(--color-navy)] inline-flex items-center justify-center"
            title="Effacer"
            aria-label="Effacer la date"
          >
            <X size={14} strokeWidth={2} aria-hidden="true" />
          </button>
        )}
      </label>
      <div className="flex justify-end gap-2">
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
          onClick={() => onSubmit(title.trim(), description.trim() || null, dueDate || null)}
          disabled={pending || !title.trim()}
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

function formatDate(iso: string): string {
  const d = new Date(iso);
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString("fr-FR", { day: "2-digit", month: "short" });
}
