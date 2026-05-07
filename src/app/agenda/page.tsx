import { AppShell } from "@/components/layout/AppShell";
import { AgendaClient } from "@/components/agenda/AgendaClient";
import {
  getAppointmentsForMonth,
  getAppointmentsForWeek,
  getClientsRich,
  getProtocols,
} from "@/lib/data";

const MONTHS_FR = [
  "janv.",
  "févr.",
  "mars",
  "avr.",
  "mai",
  "juin",
  "juil.",
  "août",
  "sept.",
  "oct.",
  "nov.",
  "déc.",
];

function currentWeekStart(): Date {
  const start = new Date();
  // Monday at 00:00 of the current week (ISO week, getDay(): 0=Sun..6=Sat).
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
  start.setHours(0, 0, 0, 0);
  return start;
}

function weekLabel(start: Date): string {
  const end = new Date(start);
  end.setDate(end.getDate() + 6);
  const sameMonth = start.getMonth() === end.getMonth();
  return sameMonth
    ? `Semaine du ${start.getDate()} au ${end.getDate()} ${MONTHS_FR[end.getMonth()]}`
    : `Semaine du ${start.getDate()} ${MONTHS_FR[start.getMonth()]} au ${end.getDate()} ${MONTHS_FR[end.getMonth()]}`;
}

interface MonthMeta {
  /** Monday-based offset of the 1st of the month (Mon=0…Sun=6). */
  monthStart: number;
  /** Number of days in the current month. */
  daysInMonth: number;
  /** Today's day-of-month (1-31). */
  todayDate: number;
  /** "Mai 2026" — capitalised label for the month header. */
  monthLabel: string;
}

function currentMonthMeta(): MonthMeta {
  const today = new Date();
  const first = new Date(today.getFullYear(), today.getMonth(), 1);
  // Monday-based offset: getDay() = 0 (Sun) … 6 (Sat); we want Mon=0.
  const monthStart = (first.getDay() + 6) % 7;
  // 0-th day of next month = last day of current month.
  const daysInMonth = new Date(
    today.getFullYear(),
    today.getMonth() + 1,
    0,
  ).getDate();
  return {
    monthStart,
    daysInMonth,
    todayDate: today.getDate(),
    monthLabel: `${MONTHS_FR[today.getMonth()].replace(".", "")} ${today.getFullYear()}`,
  };
}

export default async function AgendaPage() {
  const [weekAppointments, monthAppointments, clients, protocols] =
    await Promise.all([
      getAppointmentsForWeek(),
      getAppointmentsForMonth(),
      getClientsRich(),
      getProtocols(),
    ]);
  const weekStart = currentWeekStart();
  const monthMeta = currentMonthMeta();
  return (
    <AppShell>
      <AgendaClient
        appointments={weekAppointments}
        monthAppointments={monthAppointments}
        clients={clients}
        protocols={protocols}
        weekLabel={weekLabel(weekStart)}
        weekStart={weekStart.toISOString()}
        monthStart={monthMeta.monthStart}
        daysInMonth={monthMeta.daysInMonth}
        todayDate={monthMeta.todayDate}
        monthLabel={monthMeta.monthLabel}
      />
    </AppShell>
  );
}
