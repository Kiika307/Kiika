"use client";

import { Avatar } from "@/components/ui/Avatar";
import { Badge } from "@/components/ui/Badge";
import { cn } from "@/lib/cn";
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
  return (
    <aside
      className="w-full md:w-[272px] shrink-0 h-[calc(100dvh-3.5rem)] md:h-[100dvh] md:sticky md:top-0 overflow-y-auto md:border-r md:border-[var(--color-light-gray)]"
      style={{ backgroundColor: "var(--color-white-soft)" }}
      aria-label="Liste des clients"
    >
      <div className="px-5 py-4 border-b border-[var(--color-light-gray)] sticky top-0 bg-[var(--color-white-soft)] z-10">
        <h2 className="font-serif text-[20px] font-semibold text-[var(--color-navy)]">Clients</h2>
        <p className="text-[12px] text-[var(--color-gray-soft)] mt-0.5">{clients.length} fiches</p>
      </div>
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
