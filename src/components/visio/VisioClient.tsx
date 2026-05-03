"use client";

import { useMemo, useState } from "react";
import { Video, Calendar, Clock, Link2, Check } from "lucide-react";
import { toast } from "sonner";
import { Avatar } from "@/components/ui/Avatar";
import { VisioRoom } from "./VisioRoom";
import type { Appointment, Client } from "@/lib/types";

interface VisioClientProps {
  appointments: Appointment[];
  clients: Client[];
}

export function VisioClient({ appointments, clients }: VisioClientProps) {
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const visioAppointments = useMemo(
    () =>
      appointments
        .filter((a) => a.mode === "visio")
        .map((a) => ({ appt: a, client: clients.find((c) => c.id === a.clientId)! }))
        .filter((x) => x.client),
    [appointments, clients],
  );

  function copyLink(id: string) {
    const link = `https://intio.daily.co/rdv-${id}`;
    navigator.clipboard?.writeText(link).then(
      () => {
        setCopiedId(id);
        toast.success("Lien copié dans le presse-papier");
        setTimeout(() => setCopiedId(null), 1500);
      },
      () => toast.error("Impossible de copier le lien"),
    );
  }

  if (activeClient) {
    return <VisioRoom client={activeClient} onLeave={() => setActiveClient(null)} />;
  }

  return (
    <div className="grid gap-3 sm:gap-4">
      {visioAppointments.length === 0 ? (
        <div className="bg-[var(--color-white-soft)] rounded-[var(--radius-card-lg)] p-8 text-center text-[13px] text-[var(--color-gray-soft)] border border-black/5">
          Aucun rendez-vous en visio prévu.
        </div>
      ) : (
        visioAppointments.map(({ appt, client }) => (
          <article
            key={appt.id}
            className="bg-[var(--color-white-soft)] rounded-[var(--radius-card-lg)] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-4 border border-black/5 shadow-[var(--shadow-card)]"
          >
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <Avatar initials={client.initials} color={client.color} size={48} />
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-[15px] font-semibold text-[var(--color-navy)]">{client.name}</h3>
                  {appt.protocol ? (
                    <span className="text-[11px] px-2 py-0.5 rounded-full bg-[var(--color-purple-light)] text-[var(--color-purple-alt)] font-medium">
                      {appt.protocol}
                    </span>
                  ) : null}
                </div>
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[12px] text-[var(--color-gray-soft)]">
                  <span className="inline-flex items-center gap-1.5">
                    <Calendar size={13} aria-hidden="true" />
                    {appt.day} {appt.date}
                  </span>
                  <span className="inline-flex items-center gap-1.5">
                    <Clock size={13} aria-hidden="true" />
                    {appt.time} · {appt.duration} min
                  </span>
                </div>
              </div>
            </div>
            <div className="flex gap-2 sm:gap-3 sm:flex-shrink-0">
              <button
                onClick={() => copyLink(appt.id)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-3 py-2 text-[12px] rounded-[var(--radius-button)] bg-[var(--color-light-gray)] hover:bg-[var(--color-light-gray)]/70 text-[var(--color-navy)] transition-colors min-h-11"
                aria-label={copiedId === appt.id ? "Lien copié" : "Copier le lien d'invitation"}
              >
                {copiedId === appt.id ? (
                  <>
                    <Check size={13} aria-hidden="true" /> Copié
                  </>
                ) : (
                  <>
                    <Link2 size={13} aria-hidden="true" /> Lien
                  </>
                )}
              </button>
              <button
                onClick={() => setActiveClient(client)}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2 text-[12px] font-semibold rounded-[var(--radius-button)] bg-[var(--color-navy)] text-white hover:opacity-90 transition-opacity min-h-11"
              >
                <Video size={13} aria-hidden="true" />
                Lancer
              </button>
            </div>
          </article>
        ))
      )}
    </div>
  );
}
