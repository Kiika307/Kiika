import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Avatar } from "@/components/ui/Avatar";
import { BookingPicker } from "@/components/booking/BookingPicker";
import { computeAvailableSlots } from "@/lib/booking";
import {
  getPublicTherapistBySlug,
  getPublicBusyForTherapist,
} from "@/lib/data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const t = await getPublicTherapistBySlug(slug);
  if (!t) return { title: "Réservation — KIIKA" };
  return {
    title: `Réserver une séance avec ${t.fullName} — KIIKA`,
    description: t.intro?.slice(0, 160) ?? `Prenez rendez-vous en ligne avec ${t.fullName}.`,
  };
}

export default async function PublicBookingPage({ params }: PageProps) {
  const { slug } = await params;
  const therapist = await getPublicTherapistBySlug(slug);
  if (!therapist) notFound();

  const busy = await getPublicBusyForTherapist(
    therapist.id,
    therapist.booking.advanceDays + 2,
  );
  const slots = computeAvailableSlots(therapist.booking, busy);

  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="max-w-[920px] mx-auto px-4 py-8 sm:px-6 sm:py-12">
        <header className="mb-8 sm:mb-10">
          <p className="text-[11px] uppercase tracking-[0.22em] text-[var(--color-gold)] mb-3 font-semibold">
            KIIKA · Réservation
          </p>
          <div className="flex items-start gap-5">
            <Avatar
              initials={therapist.initials}
              color="#C8A030"
              size={72}
              photoUrl={therapist.avatarUrl}
            />
            <div className="flex-1 min-w-0">
              <h1 className="font-serif text-[28px] sm:text-[32px] font-bold text-[var(--color-navy)] leading-tight">
                {therapist.fullName}
              </h1>
              <p className="mt-1 text-[14px] text-[var(--color-gray-soft)]">
                {therapist.role}
              </p>
              {therapist.intro && (
                <p className="mt-3 text-[14px] text-[var(--color-navy)] leading-[1.65] max-w-[640px] whitespace-pre-wrap">
                  {therapist.intro}
                </p>
              )}
            </div>
          </div>
        </header>

        <BookingPicker
          slug={slug}
          slots={slots}
          duration={therapist.booking.defaultDuration}
          timezone={therapist.booking.timezone}
          therapistName={therapist.fullName}
        />

        <footer className="mt-10 pt-6 border-t border-[var(--color-light-gray)]/60">
          <p className="text-[11.5px] text-[var(--color-gray-soft)] text-center">
            Page de réservation propulsée par{" "}
            <a
              href="https://kiika.intio.fr"
              className="underline underline-offset-2 hover:text-[var(--color-gold)]"
              target="_blank"
              rel="noopener"
            >
              KIIKA
            </a>{" "}
            · Vos données sont protégées et ne sont partagées qu&apos;avec votre
            praticien.
          </p>
        </footer>
      </div>
    </div>
  );
}
