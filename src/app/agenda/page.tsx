import { AppShell } from "@/components/layout/AppShell";
import { AgendaClient } from "@/components/agenda/AgendaClient";
import { getAppointmentsForWeek, getClientsRich, getProtocols } from "@/lib/data";

const MONTHS_FR = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

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

export default async function AgendaPage() {
  const [appointments, clients, protocols] = await Promise.all([
    getAppointmentsForWeek(),
    getClientsRich(),
    getProtocols(),
  ]);
  const weekStart = currentWeekStart();
  return (
    <AppShell>
      <AgendaClient
        appointments={appointments}
        clients={clients}
        protocols={protocols}
        weekLabel={weekLabel(weekStart)}
        weekStart={weekStart.toISOString()}
      />
    </AppShell>
  );
}
