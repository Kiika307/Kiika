import { AppShell } from "@/components/layout/AppShell";
import { VisioClient } from "@/components/visio/VisioClient";
import { getClientsRich, getTherapist, getVisioAppointments } from "@/lib/data";

export default async function VisioPage() {
  const [appointments, clients, therapist] = await Promise.all([
    getVisioAppointments(),
    getClientsRich(),
    getTherapist(),
  ]);
  const firstName = therapist?.fullName?.split(" ")[0] ?? "";
  return (
    <AppShell>
      <VisioClient
        appointments={appointments}
        clients={clients}
        therapistFirstName={firstName}
      />
    </AppShell>
  );
}
