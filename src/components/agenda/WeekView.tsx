"use client";

import { User } from "lucide-react";
import type { Appointment, Client } from "@/lib/types";

const HOURS = [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
const DAY_LONG = ["DIM", "LUN", "MAR", "MER", "JEU", "VEN", "SAM"];
const DAY_SHORT = ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"];
const HOUR_HEIGHT = 62;
const TIME_COL = 64;

interface DayCell {
  short: string;
  long: string;
  num: number;
  today: boolean;
  isWeekend: boolean;
}

interface WeekViewProps {
  appointments: Appointment[];
  clients: Client[];
  weekStart: string; // ISO date of Monday 00:00 (passed by server to keep tz consistent)
  onSelect?: (appt: Appointment) => void;
}

function buildDays(weekStartIso: string): DayCell[] {
  const start = new Date(weekStartIso);
  const today = new Date();
  const todayKey = `${today.getFullYear()}-${today.getMonth()}-${today.getDate()}`;
  const out: DayCell[] = [];
  for (let i = 0; i < 7; i++) {
    const d = new Date(start);
    d.setDate(d.getDate() + i);
    const key = `${d.getFullYear()}-${d.getMonth()}-${d.getDate()}`;
    // getDay(): 0=Sun, 1=Mon,..., 6=Sat
    const dow = d.getDay();
    out.push({
      short: DAY_SHORT[dow],
      long: DAY_LONG[dow],
      num: d.getDate(),
      today: key === todayKey,
      isWeekend: dow === 0 || dow === 6,
    });
  }
  return out;
}

function timeToOffset(time: string): number {
  const [h, m] = time.split(":").map(Number);
  const raw = (h - HOURS[0]) * HOUR_HEIGHT + (m / 60) * HOUR_HEIGHT;
  // Clamp into the visible grid so early/late appointments don't overflow on the header.
  const max = HOURS.length * HOUR_HEIGHT - 12;
  if (raw < 0) return 0;
  if (raw > max) return max;
  return raw;
}

export function WeekView({ appointments, clients, weekStart, onSelect }: WeekViewProps) {
  const DAYS = buildDays(weekStart);
  return (
    <div
      className="rounded-[16px] overflow-x-auto"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <div className="min-w-[840px]">
      <div
        className="grid border-b border-[var(--color-light-gray)]"
        style={{ gridTemplateColumns: `${TIME_COL}px repeat(${DAYS.length}, 1fr)` }}
      >
        <div />
        {DAYS.map((d) => (
          <div
            key={d.num}
            className="px-4 py-4 text-center"
            style={{
              backgroundColor: d.today
                ? "var(--color-cream)"
                : d.isWeekend
                  ? "rgba(0,0,0,0.025)"
                  : undefined,
            }}
          >
            <div
              className="text-[10px] uppercase tracking-[0.18em] mb-1"
              style={{ color: d.today ? "var(--color-gold)" : "var(--color-gray-soft)" }}
            >
              {d.long}
            </div>
            <div className="font-serif text-[26px] font-semibold leading-none text-[var(--color-navy)]">
              {d.num}
            </div>
          </div>
        ))}
      </div>

      <div
        className="relative grid"
        style={{
          gridTemplateColumns: `${TIME_COL}px repeat(${DAYS.length}, 1fr)`,
          gridTemplateRows: `repeat(${HOURS.length}, ${HOUR_HEIGHT}px)`,
        }}
      >
        {HOURS.map((h) => (
          <div
            key={h}
            className="border-t border-[var(--color-light-gray)] text-[11px] text-[var(--color-gray-soft)] pl-3 pt-1 tabular"
            style={{ gridColumn: 1, gridRow: HOURS.indexOf(h) + 1 }}
          >
            {String(h).padStart(2, "0")}:00
          </div>
        ))}

        {DAYS.map((_, dayIdx) =>
          HOURS.map((h) => (
            <div
              key={`${dayIdx}-${h}`}
              className="border-t border-l border-[var(--color-light-gray)]"
              style={{ gridColumn: dayIdx + 2, gridRow: HOURS.indexOf(h) + 1 }}
            />
          )),
        )}

        {appointments.map((a) => {
          const dayIdx = DAYS.findIndex((d) => d.short === a.day);
          if (dayIdx < 0) return null;
          const client = clients.find((c) => c.id === a.clientId);
          if (!client) return null;
          const top = timeToOffset(a.time);
          const height = (a.duration / 60) * HOUR_HEIGHT - 4;

          return (
            <button
              key={a.id}
              onClick={() => onSelect?.(a)}
              className="absolute left-1 right-1 rounded-[10px] px-2.5 py-2 text-left transition-transform hover:scale-[1.02]"
              style={{
                top,
                height,
                backgroundColor: client.color,
                boxShadow: `0 4px 14px ${client.color}55`,
                gridColumn: dayIdx + 2,
                position: "absolute",
                left: `calc(${TIME_COL}px + ${(dayIdx * 100) / DAYS.length}% + 4px)`,
                width: `calc(${100 / DAYS.length}% - 8px)`,
              }}
            >
              <div className="flex items-start justify-between gap-1.5">
                <div className="text-[10px] font-semibold text-white/85 tabular">{a.time}</div>
                <User size={11} strokeWidth={1.8} className="text-white/75 shrink-0 mt-px" aria-hidden="true" />
              </div>
              <div className="font-serif text-[13px] font-semibold text-white leading-tight truncate mt-0.5">
                {client.name.split(" ")[0]}
              </div>
              {a.protocol && (
                <div className="text-[10.5px] text-white/85 truncate leading-tight mt-0.5">{a.protocol}</div>
              )}
            </button>
          );
        })}
      </div>
      </div>
    </div>
  );
}
