"use client";

import { useState } from "react";
import { Modal } from "@/components/ui/Modal";
import { FormField, FormSelect } from "@/components/ui/FormField";
import type { Client, Protocol } from "@/lib/types";

interface NewAppointmentModalProps {
  open: boolean;
  onClose: () => void;
  clients: Client[];
  protocols: Protocol[];
  onCreate?: (data: AppointmentFormData) => void;
}

export interface AppointmentFormData {
  clientId: string;
  date: string;
  time: string;
  duration: number;
  mode: "visio" | "presentiel";
  protocolId: number | null;
}

export function NewAppointmentModal({
  open,
  onClose,
  clients,
  protocols,
  onCreate,
}: NewAppointmentModalProps) {
  const [form, setForm] = useState<AppointmentFormData>({
    clientId: clients[0]?.id ?? "",
    date: "",
    time: "10:00",
    duration: 60,
    mode: "visio",
    protocolId: null,
  });

  function update<K extends keyof AppointmentFormData>(key: K, value: AppointmentFormData[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    onCreate?.(form);
    onClose();
  }

  return (
    <Modal open={open} onClose={onClose} title="Nouveau rendez-vous">
      <form onSubmit={handleSubmit} className="space-y-4">
        <FormSelect
          label="Client"
          value={form.clientId}
          onChange={(e) => update("clientId", e.target.value)}
          required
        >
          {clients.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </FormSelect>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormField
            label="Date"
            type="date"
            value={form.date}
            onChange={(e) => update("date", e.target.value)}
            required
          />
          <FormField
            label="Heure"
            type="time"
            value={form.time}
            onChange={(e) => update("time", e.target.value)}
            required
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          <FormSelect
            label="Durée (min)"
            value={form.duration}
            onChange={(e) => update("duration", Number(e.target.value))}
          >
            <option value={30}>30 min</option>
            <option value={45}>45 min</option>
            <option value={60}>60 min</option>
            <option value={90}>90 min</option>
          </FormSelect>
          <div>
            <span className="block text-[12px] font-semibold uppercase tracking-wide text-[var(--color-gray-soft)] mb-1.5">
              Format
            </span>
            <div role="radiogroup" aria-label="Format du rendez-vous" className="flex gap-2">
              {(["visio", "presentiel"] as const).map((m) => {
                const active = form.mode === m;
                return (
                  <button
                    key={m}
                    type="button"
                    role="radio"
                    aria-checked={active}
                    onClick={() => update("mode", m)}
                    className="flex-1 rounded-[10px] px-3 py-2.5 text-[13px] font-medium capitalize transition-colors min-h-11"
                    style={{
                      backgroundColor: active ? "var(--color-navy)" : "var(--color-light-gray)",
                      color: active ? "var(--color-gold-light)" : "var(--color-navy)",
                    }}
                  >
                    {m}
                  </button>
                );
              })}
            </div>
          </div>
        </div>

        <FormSelect
          label="Protocole"
          value={form.protocolId ?? ""}
          onChange={(e) => update("protocolId", e.target.value ? Number(e.target.value) : null)}
        >
          <option value="">Aucun</option>
          {protocols.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name}
            </option>
          ))}
        </FormSelect>

        <div className="flex flex-col-reverse sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 rounded-[10px] border border-[var(--color-light-gray)] py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] transition-colors min-h-11"
          >
            Annuler
          </button>
          <button
            type="submit"
            className="flex-1 rounded-[10px] py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 min-h-11"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            Créer le RDV
          </button>
        </div>
      </form>
    </Modal>
  );
}
