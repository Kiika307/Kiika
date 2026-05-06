"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import {
  Video,
  Calendar,
  ShieldCheck,
  Plus,
  ChevronRight,
  Users,
  Clock,
  Monitor,
  History,
  Search,
} from "lucide-react";
import { Avatar } from "@/components/ui/Avatar";
import { Modal } from "@/components/ui/Modal";
import { VisioRoom } from "./VisioRoom";
import type { Appointment, Client } from "@/lib/types";

interface VisioClientProps {
  appointments: Appointment[];
  clients: Client[];
  therapistFirstName: string;
}

interface UpcomingItem {
  appt: Appointment;
  client: Client;
  /** "Aujourd'hui", "Demain", "Vendredi", … */
  dayLabel: string;
}

const DAY_NAMES = ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];
const DAY_SHORT_TO_INDEX: Record<string, number> = {
  Dim: 0, Lun: 1, Mar: 2, Mer: 3, Jeu: 4, Ven: 5, Sam: 6,
};

function dayLabelFor(appt: Appointment): string {
  const today = new Date();
  const todayDow = today.getDay();
  const apptDow = DAY_SHORT_TO_INDEX[appt.day] ?? -1;
  if (apptDow < 0) return appt.day;
  if (appt.date === today.getDate() && apptDow === todayDow) return "Aujourd'hui";
  // Tomorrow check (DOW + 1 mod 7, ignoring date — good enough for the demo schedule)
  if ((todayDow + 1) % 7 === apptDow) return "Demain";
  return DAY_NAMES[apptDow] ?? appt.day;
}

export function VisioClient({ appointments, clients, therapistFirstName }: VisioClientProps) {
  const [activeClient, setActiveClient] = useState<Client | null>(null);
  const [pickerOpen, setPickerOpen] = useState(false);
  const [pickerSearch, setPickerSearch] = useState("");

  const upcoming = useMemo<UpcomingItem[]>(() => {
    return appointments
      .filter((a) => a.mode === "visio")
      .map((a) => {
        const client = clients.find((c) => c.id === a.clientId);
        return client
          ? ({ appt: a, client, dayLabel: dayLabelFor(a) } satisfies UpcomingItem)
          : null;
      })
      .filter((x): x is UpcomingItem => x !== null)
      .slice(0, 3);
  }, [appointments, clients]);

  const filteredClients = useMemo(() => {
    const q = pickerSearch.trim().toLowerCase();
    if (!q) return clients;
    return clients.filter((c) => c.name.toLowerCase().includes(q));
  }, [clients, pickerSearch]);

  if (activeClient) {
    return <VisioRoom client={activeClient} onLeave={() => setActiveClient(null)} />;
  }

  const startInstant = (client: Client) => {
    setPickerOpen(false);
    setPickerSearch("");
    setActiveClient(client);
  };

  return (
    <>
      <header className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-6 sm:mb-7">
        <div>
          <h1 className="font-serif text-[26px] sm:text-[30px] font-bold text-[var(--color-navy)] leading-tight">
            Visio
          </h1>
          <p className="mt-1.5 text-[13px] sm:text-[14px] text-[var(--color-gray-soft)]">
            Rencontrez vos clients en toute sécurité.
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link
            href="/agenda"
            className="inline-flex items-center justify-center gap-2 rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-white-soft)] px-4 py-2.5 text-[13px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)] min-h-11 transition-colors"
          >
            <Calendar size={14} aria-hidden="true" />
            Planifier une séance
          </Link>
          <button
            type="button"
            onClick={() => setPickerOpen(true)}
            className="inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-2.5 text-[13px] font-semibold text-white min-h-11 transition-opacity hover:opacity-90"
            style={{ backgroundColor: "var(--color-gold)" }}
          >
            <Plus size={14} aria-hidden="true" />
            Nouvelle visio instantanée
          </button>
        </div>
      </header>

      <div className="grid gap-5 lg:grid-cols-[340px_1fr]">
        {/* Left rail */}
        <div className="space-y-5">
          <section
            className="rounded-[18px] p-5"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">
              Prochaines séances
            </h2>
            {upcoming.length === 0 ? (
              <p className="text-[12.5px] text-[var(--color-gray-soft)] italic">
                Aucune visio planifiée pour le moment.
              </p>
            ) : (
              <ul className="space-y-2">
                {upcoming.map(({ appt, client, dayLabel }) => (
                  <li key={appt.id}>
                    <button
                      type="button"
                      onClick={() => setActiveClient(client)}
                      className="w-full flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors hover:bg-[var(--color-cream)]/50 border border-transparent hover:border-[var(--color-light-gray)]"
                    >
                      <Avatar initials={client.initials} color={client.color} size={36} />
                      <div className="flex-1 min-w-0">
                        <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                          {client.name}
                        </div>
                        <div className="text-[11.5px] text-[var(--color-gray-soft)] truncate">
                          {dayLabel} · {appt.time}
                        </div>
                        <div className="mt-1 inline-flex items-center gap-1 text-[10.5px] font-semibold text-[var(--color-teal)]">
                          <span
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "var(--color-teal)" }}
                            aria-hidden="true"
                          />
                          En ligne
                        </div>
                      </div>
                    </button>
                  </li>
                ))}
              </ul>
            )}
            <Link
              href="/agenda"
              className="mt-4 w-full inline-flex items-center justify-center gap-2 rounded-[12px] border border-[var(--color-light-gray)] bg-[var(--color-cream)]/40 px-4 py-2.5 text-[12.5px] font-semibold text-[var(--color-navy)] hover:bg-[var(--color-light-gray)]/40 transition-colors min-h-11"
            >
              <Calendar size={14} aria-hidden="true" />
              Voir toutes les séances
            </Link>
          </section>

          <section
            className="rounded-[18px] p-5"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <h2 className="font-serif text-[16px] font-semibold text-[var(--color-navy)] mb-3">
              Raccourcis
            </h2>
            <ul className="space-y-1">
              <ShortcutRow
                icon={Plus}
                title="Nouvelle visio instantanée"
                description="Démarrer une réunion maintenant"
                onClick={() => setPickerOpen(true)}
              />
              <ShortcutRow
                icon={Users}
                title="Salle d'attente"
                description="Gérer vos séances à venir"
                href="/agenda"
              />
              <ShortcutRow
                icon={History}
                title="Historique des visios"
                description="Consulter vos anciennes séances"
                href="/clients"
              />
            </ul>
          </section>
        </div>

        {/* Main */}
        <div className="space-y-5">
          <section
            className="rounded-[18px] p-6 sm:p-7"
            style={{
              backgroundColor: "var(--color-white-soft)",
              boxShadow: "var(--shadow-card)",
            }}
          >
            <div className="flex items-start justify-between flex-wrap gap-3 mb-6">
              <div>
                <h2 className="font-serif text-[22px] sm:text-[24px] font-semibold text-[var(--color-navy)]">
                  Bonjour {therapistFirstName || "et bienvenue"},
                </h2>
                <p className="mt-1 text-[13px] text-[var(--color-gray-soft)]">
                  Comment puis-je vous accompagner aujourd&apos;hui ?
                </p>
              </div>
              <div
                className="inline-flex items-start gap-2 rounded-[12px] px-3.5 py-2.5"
                style={{ backgroundColor: "rgba(46,138,123,0.10)" }}
              >
                <ShieldCheck
                  size={16}
                  className="text-[var(--color-teal)] mt-0.5"
                  aria-hidden="true"
                />
                <div>
                  <div className="text-[12px] font-semibold text-[var(--color-navy)]">
                    Connexion sécurisée
                  </div>
                  <div className="text-[10.5px] text-[var(--color-gray-soft)]">
                    Chiffrement de bout en bout
                  </div>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <ActionCard
                icon={Video}
                title="Démarrer une visio instantanée"
                body="Lancez une séance immédiatement et invitez votre client à rejoindre."
                cta="Démarrer maintenant"
                ctaPrimary
                onClick={() => setPickerOpen(true)}
              />
              <ActionCard
                icon={Calendar}
                title="Planifier une séance"
                body="Choisissez la date et l'heure, puis envoyez l'invitation à votre client."
                cta="Planifier"
                href="/agenda"
              />
            </div>

            <div
              className="mt-6 rounded-[14px] p-4 sm:p-5"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <h3 className="font-serif text-[14px] font-semibold text-[var(--color-navy)] mb-3">
                Comment ça fonctionne&nbsp;?
              </h3>
              <ol className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <Step
                  num={1}
                  title="Démarrez ou planifiez"
                  body="Choisissez le type de visio qui vous convient."
                />
                <Step
                  num={2}
                  title="Invitez votre client"
                  body="Envoyez le lien de connexion en toute simplicité."
                />
                <Step
                  num={3}
                  title="Rencontrez-vous"
                  body="Échangez en toute sécurité dans un espace confidentiel."
                />
              </ol>
            </div>
          </section>

          <section className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <TrustCard
              icon={ShieldCheck}
              title="Sécurité garantie"
              body="Vos échanges sont protégés par un chiffrement de bout en bout."
            />
            <TrustCard
              icon={Clock}
              title="Aucune installation"
              body="Fonctionne directement depuis votre navigateur."
            />
            <TrustCard
              icon={Monitor}
              title="Tous vos appareils"
              body="Accessible sur ordinateur, tablette ou mobile."
            />
          </section>
        </div>
      </div>

      <Modal
        open={pickerOpen}
        onClose={() => setPickerOpen(false)}
        title="Démarrer une visio instantanée"
        width={520}
      >
        <p className="text-[13px] text-[var(--color-gray-soft)] mb-4">
          Sélectionnez le client à inviter. Une salle chiffrée sera créée immédiatement.
        </p>
        <label className="relative block mb-3">
          <span className="sr-only">Rechercher un client</span>
          <Search
            size={14}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-[var(--color-gray-soft)]"
            aria-hidden="true"
          />
          <input
            type="search"
            value={pickerSearch}
            onChange={(e) => setPickerSearch(e.target.value)}
            placeholder="Rechercher un client…"
            autoFocus
            className="w-full rounded-[10px] border border-[var(--color-light-gray)] bg-[var(--color-cream)]/40 pl-9 pr-3 py-2.5 text-[13px] text-[var(--color-navy)] placeholder:text-[var(--color-gray-soft)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)]/40 focus:border-[var(--color-gold)] min-h-11"
          />
        </label>
        <ul className="max-h-[360px] overflow-y-auto space-y-1.5">
          {filteredClients.map((c) => (
            <li key={c.id}>
              <button
                type="button"
                onClick={() => startInstant(c)}
                className="w-full flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-left hover:bg-[var(--color-cream)]/50 transition-colors border border-transparent hover:border-[var(--color-light-gray)]"
              >
                <Avatar initials={c.initials} color={c.color} size={36} />
                <div className="flex-1 min-w-0">
                  <div className="text-[13px] font-semibold text-[var(--color-navy)] truncate">
                    {c.name}
                  </div>
                  <div className="text-[11.5px] text-[var(--color-gray-soft)] truncate">
                    {c.email}
                  </div>
                </div>
                <Video
                  size={14}
                  className="text-[var(--color-gold)] shrink-0"
                  aria-hidden="true"
                />
              </button>
            </li>
          ))}
          {filteredClients.length === 0 && (
            <li className="text-[12px] text-[var(--color-gray-soft)] italic px-3 py-4 text-center">
              Aucun client ne correspond à « {pickerSearch} »
            </li>
          )}
        </ul>
      </Modal>
    </>
  );
}

interface ActionCardProps {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  body: string;
  cta: string;
  ctaPrimary?: boolean;
  onClick?: () => void;
  href?: string;
}

function ActionCard({ icon: Icon, title, body, cta, ctaPrimary, onClick, href }: ActionCardProps) {
  const button = (
    <span
      className="inline-flex items-center justify-center w-full gap-2 rounded-[10px] px-4 py-3 text-[13px] font-semibold min-h-11 transition-colors"
      style={
        ctaPrimary
          ? { backgroundColor: "var(--color-gold)", color: "var(--color-white-soft)" }
          : {
              backgroundColor: "var(--color-white-soft)",
              color: "var(--color-navy)",
              border: "1px solid var(--color-light-gray)",
            }
      }
    >
      {cta}
    </span>
  );

  return (
    <div
      className="rounded-[14px] p-5 sm:p-6 text-center flex flex-col"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div
        className="mx-auto inline-flex items-center justify-center w-14 h-14 rounded-full mb-4"
        style={{ backgroundColor: "var(--color-gold-light)" }}
        aria-hidden="true"
      >
        <Icon size={22} className="text-[var(--color-gold)]" />
      </div>
      <h3 className="font-serif text-[16px] font-semibold text-[var(--color-navy)]">{title}</h3>
      <p className="mt-1.5 mb-5 text-[12.5px] text-[var(--color-gray-soft)] leading-[1.55]">
        {body}
      </p>
      <div className="mt-auto">
        {href ? (
          <Link href={href} className="block">
            {button}
          </Link>
        ) : (
          <button type="button" onClick={onClick} className="w-full">
            {button}
          </button>
        )}
      </div>
    </div>
  );
}

function Step({ num, title, body }: { num: number; title: string; body: string }) {
  return (
    <li className="flex items-start gap-3">
      <div
        className="inline-flex items-center justify-center w-8 h-8 rounded-full font-serif text-[14px] font-bold shrink-0"
        style={{ backgroundColor: "var(--color-white-soft)", color: "var(--color-navy)" }}
        aria-hidden="true"
      >
        {num}
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-[var(--color-navy)]">{title}</div>
        <p className="mt-0.5 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.55]">{body}</p>
      </div>
    </li>
  );
}

interface TrustCardProps {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  body: string;
}

function TrustCard({ icon: Icon, title, body }: TrustCardProps) {
  return (
    <div
      className="rounded-[14px] p-4 sm:p-5 flex items-start gap-3"
      style={{ backgroundColor: "var(--color-white-soft)", boxShadow: "var(--shadow-card)" }}
    >
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] shrink-0"
        style={{ backgroundColor: "var(--color-cream)" }}
        aria-hidden="true"
      >
        <Icon size={16} className="text-[var(--color-gold)]" />
      </div>
      <div className="min-w-0">
        <div className="text-[13px] font-semibold text-[var(--color-navy)]">{title}</div>
        <p className="mt-0.5 text-[11.5px] text-[var(--color-gray-soft)] leading-[1.55]">{body}</p>
      </div>
    </div>
  );
}

interface ShortcutRowProps {
  icon: React.ComponentType<{ size?: number; className?: string; "aria-hidden"?: boolean }>;
  title: string;
  description: string;
  href?: string;
  onClick?: () => void;
}

function ShortcutRow({ icon: Icon, title, description, href, onClick }: ShortcutRowProps) {
  const inner = (
    <div className="w-full flex items-center gap-3 rounded-[12px] px-3 py-2.5 text-left transition-colors hover:bg-[var(--color-cream)]/50 border border-transparent hover:border-[var(--color-light-gray)]">
      <div
        className="inline-flex items-center justify-center w-9 h-9 rounded-[10px] shrink-0"
        style={{ backgroundColor: "var(--color-cream)" }}
        aria-hidden="true"
      >
        <Icon size={15} className="text-[var(--color-gold)]" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[12.5px] font-semibold text-[var(--color-navy)]">{title}</div>
        <div className="text-[11px] text-[var(--color-gray-soft)] truncate">{description}</div>
      </div>
      <ChevronRight
        size={14}
        className="text-[var(--color-gray-soft)] shrink-0"
        aria-hidden="true"
      />
    </div>
  );

  return (
    <li>
      {href ? (
        <Link href={href}>{inner}</Link>
      ) : (
        <button type="button" onClick={onClick} className="w-full">
          {inner}
        </button>
      )}
    </li>
  );
}
