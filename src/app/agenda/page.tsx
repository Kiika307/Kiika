import { AppShell } from "@/components/layout/AppShell";
import { AgendaClient } from "@/components/agenda/AgendaClient";
import { getAppointmentsForWeek, getClientsRich, getProtocols } from "@/lib/data";

const MONTHS_FR = ["janv.", "févr.", "mars", "avr.", "mai", "juin", "juil.", "août", "sept.", "oct.", "nov.", "déc."];

function weekLabel(): string {
  const start = new Date();
  start.setDate(start.getDate() - ((start.getDay() + 6) % 7));
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
  return (
    <AppShell>
      <AgendaClient
        appointments={appointments}
        clients={clients}
        protocols={protocols}
        weekLabel={weekLabel()}
      />
    </AppShell>
  );
}
