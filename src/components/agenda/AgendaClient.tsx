"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Plus } from "lucide-react";
import { WeekView } from "./WeekView";
import { MonthView } from "./MonthView";
import { NewAppointmentModal } from "./NewAppointmentModal";
import type { Appointment, Client, Protocol } from "@/lib/types";

interface AgendaClientProps {
  appointments: Appointment[];
  monthAppointments: Appointment[];
  clients: Client[];
  protocols: Protocol[];
  weekLabel: string;
  weekStart: string;
  monthStart: number;
  daysInMonth: number;
  todayDate: number;
  monthLabel: string;
}

type View = "semaine" | "mois";

export function AgendaClient({
  appointments,
  monthAppointments,
  clients,
  protocols,
  weekLabel,
  weekStart,
  monthStart,
  daysInMonth,
  todayDate,
  monthLabel,
}: AgendaClientProps) {
  const router = useRouter();
  const [view, setView] = useState<View>("semaine");
  const [modalOpen, setModalOpen] = useState(false);

  const openClient = (appt: Appointment) => {
    router.push(`/clients?id=${appt.clientId}`);
  };

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 sm:mb-7">
        <div>
          <h1 className="font-serif text-[24px] sm:text-[28px] font-bold text-[var(--color-navy)]">Agenda</h1>
          <p className="mt-1 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)] capitalize">
            {view === "semaine" ? weekLabel : monthLabel}
          </p>
        </div>
        <div className="flex items-center gap-3">
          <div
            role="tablist"
            aria-label="Vue de l'agenda"
            className="flex items-center rounded-[20px] p-1"
            style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
          >
            {(["semaine", "mois"] as const).map((v) => {
              const active = view === v;
              return (
                <button
                  key={v}
                  role="tab"
                  aria-selected={active}
                  onClick={() => setView(v)}
                  className="px-4 py-2 rounded-[16px] text-[12px] font-semibold capitalize transition-colors min-h-9"
                  style={{
                    backgroundColor: active ? "var(--color-navy)" : "transparent",
                    color: active ? "var(--color-gold-light)" : "var(--color-gray-soft)",
                  }}
                >
                  {v}
                </button>
              );
            })}
          </div>
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white transition-opacity hover:opacity-90 min-h-11 flex-1 sm:flex-initial"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={16} aria-hidden="true" />
            <span className="hidden sm:inline">Nouveau RDV</span>
            <span className="sm:hidden">Nouveau</span>
          </button>
        </div>
      </header>

      {view === "semaine" ? (
        <WeekView
          appointments={appointments}
          clients={clients}
          weekStart={weekStart}
          onSelect={openClient}
        />
      ) : (
        <MonthView
          appointments={monthAppointments}
          clients={clients}
          monthStart={monthStart}
          daysInMonth={daysInMonth}
          todayDate={todayDate}
          onSelect={openClient}
        />
      )}

      <NewAppointmentModal
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        clients={clients}
        protocols={protocols}
      />
    </>
  );
}
