"use client";

import type { Appointment, Client } from "@/lib/types";

const WEEKDAYS = ["Lun", "Mar", "Mer", "Jeu", "Ven", "Sam", "Dim"];

interface MonthViewProps {
  appointments: Appointment[];
  clients: Client[];
  monthStart?: number;
  daysInMonth?: number;
  todayDate?: number;
  onSelect?: (appt: Appointment) => void;
}

export function MonthView({
  appointments,
  clients,
  monthStart = 0,
  daysInMonth = 30,
  todayDate = 21,
  onSelect,
}: MonthViewProps) {
  const cells: Array<number | null> = [];
  for (let i = 0; i < monthStart; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);
  while (cells.length % 7 !== 0) cells.push(null);

  return (
    <div
      className="rounded-[16px] overflow-hidden"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <div className="grid grid-cols-7 border-b border-[var(--color-light-gray)]">
        {WEEKDAYS.map((d) => (
          <div
            key={d}
            className="px-3 py-3 text-[11px] uppercase tracking-wide text-[var(--color-gray-soft)] text-center"
          >
            {d}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7">
        {cells.map((day, idx) => {
          if (day === null) {
            return <div key={idx} className="min-h-[82px] border-t border-l border-[var(--color-light-gray)]" />;
          }
          const dayAppts = appointments.filter((a) => a.date === day);
          const isToday = day === todayDate;

          return (
            <div
              key={idx}
              className="min-h-[82px] border-t border-l border-[var(--color-light-gray)] p-2"
              style={{ backgroundColor: isToday ? "var(--color-gold-light)" : undefined }}
            >
              <div
                className={`text-[12px] mb-1 ${
                  isToday ? "font-bold text-[var(--color-navy)]" : "text-[var(--color-gray-soft)]"
                }`}
              >
                {day}
              </div>
              <div className="space-y-1">
                {dayAppts.slice(0, 3).map((a) => {
                  const client = clients.find((c) => c.id === a.clientId);
                  if (!client) return null;
                  return (
                    <button
                      key={a.id}
                      onClick={() => onSelect?.(a)}
                      className="block w-full text-left text-[10px] font-bold truncate rounded px-1.5 py-0.5 hover:brightness-95"
                      style={{ backgroundColor: `${client.color}22`, color: client.color }}
                    >
                      {a.time} {client.name.split(" ")[0]}
                    </button>
                  );
                })}
                {dayAppts.length > 3 && (
                  <div className="text-[10px] text-[var(--color-gray-soft)]">+{dayAppts.length - 3}</div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
