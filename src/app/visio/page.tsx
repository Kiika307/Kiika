import { AppShell } from "@/components/layout/AppShell";
import { VisioClient } from "@/components/visio/VisioClient";
import { getClientsRich, getVisioAppointments } from "@/lib/data";

export default async function VisioPage() {
  const [appointments, clients] = await Promise.all([getVisioAppointments(), getClientsRich()]);
  return (
    <AppShell>
      <div className="mb-5">
        <h1 className="font-serif text-[28px] font-bold text-[var(--color-navy)]">Visio</h1>
        <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">
          Salles vidéo chiffrées via Daily.co. Lancez ou copiez le lien d'invitation.
        </p>
      </div>
      <VisioClient appointments={appointments} clients={clients} />
    </AppShell>
  );
}
