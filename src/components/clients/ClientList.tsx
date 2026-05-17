"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Plus, X } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
import { createClientAction } from "@/lib/actions";
import type { Client } from "@/lib/types";

interface ClientListProps {
  clients: Client[];
  selectedId: string | null;
  onSelect: (id: string) => void;
}

const statusStyle: Record<Client["status"], { color: string; label: string }> = {
  actif: { color: "#2E8A7B", label: "Actif" },
  nouveau: { color: "#C8A030", label: "Nouveau" },
  inactif: { color: "#6B7280", label: "Inactif" },
};

export function ClientList({ clients, selectedId, onSelect }: ClientListProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <aside
      className="w-full md:w-[272px] shrink-0 h-[calc(100dvh-3.5rem)] md:h-[100dvh] md:sticky md:top-0 overflow-y-auto md:border-r md:border-[var(--color-light-gray)]"
      style={{ backgroundColor: "var(--color-white-soft)" }}
      aria-label="Liste des clients"
    >
      <div className="px-5 py-4 border-b border-[var(--color-light-gray)] sticky top-0 bg-[var(--color-white-soft)] z-10 flex items-start justify-between gap-3">
        <div>
          <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)]">Clients</h2>
          <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">{clients.length} fiches</p>
        </div>
        <button
          type="button"
          onClick={() => setIsOpen(true)}
          className="inline-flex items-center gap-1.5 rounded-[10px] px-3 py-2 text-[12px] font-semibold text-white"
          style={{ backgroundColor: "var(--color-gold)" }}
          aria-label="Créer un nouveau client"
        >
          <Plus size={14} aria-hidden="true" />
          Nouveau
        </button>
      </div>
      {isOpen && (
        <NewClientModal
          onClose={() => setIsOpen(false)}
          onCreated={(id) => {
            setIsOpen(false);
            onSelect(id);
          }}
        />
      )}
      <ul>
        {clients.map((c) => {
          const status = statusStyle[c.status];
          const active = c.id === selectedId;
          return (
            <li key={c.id} className="virtualized-row">
              <button
                onClick={() => onSelect(c.id)}
                className={cn(
                  "w-full flex items-center gap-3 px-5 py-3 text-left transition-colors border-l-[3px] min-h-[60px]",
                  active
                    ? "border-[var(--color-gold)]"
                    : "border-transparent hover:bg-[var(--color-light-gray)]/40",
                )}
                style={{
                  backgroundColor: active ? "rgba(200,160,48,0.08)" : undefined,
                }}
              >
                <Avatar initials={c.initials} color={c.color} size={40} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">{c.name}</div>
                  <div className="text-[11px] text-[var(--color-gray-soft)]">{c.sessions} séances</div>
                </div>
                <Badge color={status.color}>{status.label}</Badge>
              </button>
            </li>
          );
        })}
      </ul>
    </aside>
  );
}

interface NewClientModalProps {
  onClose: () => void;
  onCreated: (id: string) => void;
}

function NewClientModal({ onClose, onCreated }: NewClientModalProps) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [status, setStatus] = useState<"actif" | "nouveau" | "inactif">("nouveau");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!fullName.trim()) {
      setError("Nom complet requis");
      return;
    }
    startTransition(async () => {
      const res = await createClientAction({
        fullName: fullName.trim(),
        email: email.trim() || null,
        phone: phone.trim() || null,
        age: age ? Number(age) : null,
        status,
      });
      if (res.ok && res.id) {
        toast.success(`Client « ${fullName.trim()} » créé`);
        router.refresh();
        onCreated(res.id);
      } else {
        setError(res.error ?? "Impossible de créer le client");
        toast.error(res.error ?? "Erreur");
      }
    });
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/55 px-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="new-client-title"
      onClick={onClose}
    >
      <form
        onSubmit={handleSubmit}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-md rounded-[16px] bg-white p-6 space-y-4"
        style={{ boxShadow: "var(--shadow-card)" }}
      >
        <div className="flex items-start justify-between gap-3">
          <h2
            id="new-client-title"
            className="font-serif text-[18px] font-semibold text-[var(--color-navy)]"
          >
            Nouveau client
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded p-1 text-[var(--color-gray-soft)] hover:bg-[var(--color-light-gray)]"
            aria-label="Fermer"
          >
            <X size={16} aria-hidden="true" />
          </button>
        </div>

        {error && (
          <div className="rounded-[10px] bg-red-50 border border-red-200 px-4 py-2 text-[13px] text-red-700">
            {error}
          </div>
        )}

        <label className="flex flex-col gap-1">
          <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
            Nom complet *
          </span>
          <input
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            autoFocus
            className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
          />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Email
            </span>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Téléphone
            </span>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            />
          </label>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Âge
            </span>
            <input
              type="number"
              min={0}
              max={130}
              value={age}
              onChange={(e) => setAge(e.target.value)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            />
          </label>
          <label className="flex flex-col gap-1">
            <span className="text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)]">
              Statut
            </span>
            <select
              value={status}
              onChange={(e) => setStatus(e.target.value as typeof status)}
              className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] text-[var(--color-navy)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40"
            >
              <option value="nouveau">Nouveau</option>
              <option value="actif">Actif</option>
              <option value="inactif">Inactif</option>
            </select>
          </label>
        </div>

        <div className="flex justify-end gap-2 pt-2">
          <button
            type="button"
            onClick={onClose}
            disabled={pending}
            className="rounded-[10px] border border-[var(--color-light-gray)] px-3 py-2 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] disabled:opacity-50"
          >
            Annuler
          </button>
          <button
            type="submit"
            disabled={pending || !fullName.trim()}
            className="rounded-[10px] px-4 py-2 text-[13px] font-semibold text-white disabled:opacity-50"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            {pending ? "Création…" : "Créer"}
          </button>
        </div>
      </form>
    </div>
  );
}
