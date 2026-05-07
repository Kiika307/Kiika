import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { Calendar, Check, X, AlertTriangle } from "lucide-react";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { confirmCancelAction } from "./actions";

export const metadata: Metadata = {
  title: "Annuler un rendez-vous — KIIKA",
  robots: { index: false, follow: false },
};

interface PageProps {
  params: Promise<{ token: string }>;
  searchParams: Promise<{ confirmed?: string; error?: string }>;
}

interface AppointmentRow {
  id: string;
  starts_at: string;
  status: string;
  mode: "visio" | "presentiel";
  client: { full_name: string } | null;
  therapist: { full_name: string } | null;
}

function service() {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) throw new Error("Service role not configured");
  return createServiceClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });
}

export default async function CancelPage({ params, searchParams }: PageProps) {
  const { token } = await params;
  const { confirmed, error } = await searchParams;

  // Trim defensively — some email clients append whitespace.
  const cleanToken = token.trim();
  if (!cleanToken) redirect("/");

  const supabase = service();

  const { data: tokenRow } = await supabase
    .from("appointment_cancel_tokens")
    .select("token, appointment_id, expires_at, used_at")
    .eq("token", cleanToken)
    .maybeSingle();

  if (!tokenRow) return <Shell variant="invalid" />;
  const expired = new Date(tokenRow.expires_at).getTime() < Date.now();
  if (expired) return <Shell variant="expired" />;

  const { data: apptData } = await supabase
    .from("appointments")
    .select(
      `id, starts_at, status, mode,
       client:clients(full_name),
       therapist:profiles!appointments_therapist_id_fkey(full_name)`,
    )
    .eq("id", tokenRow.appointment_id)
    .maybeSingle();
  const appt = apptData as unknown as AppointmentRow | null;
  if (!appt) return <Shell variant="invalid" />;

  // Confirmation screen after the action ran.
  if (confirmed === "1") {
    return <Shell variant="confirmed" appointment={appt} />;
  }

  // Already used or already cancelled → idempotent confirmation.
  if (tokenRow.used_at || appt.status === "cancelled") {
    return <Shell variant="confirmed" appointment={appt} alreadyDone />;
  }

  return (
    <Shell
      variant="form"
      appointment={appt}
      token={cleanToken}
      error={error === "1"}
    />
  );
}

interface ShellProps {
  variant: "form" | "confirmed" | "expired" | "invalid";
  appointment?: AppointmentRow;
  token?: string;
  error?: boolean;
  alreadyDone?: boolean;
}

function Shell({ variant, appointment, token, error, alreadyDone }: ShellProps) {
  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 sm:p-8"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <main
        className="w-full max-w-[520px] rounded-[20px] p-8 sm:p-10"
        style={{
          backgroundColor: "var(--color-white-soft)",
          boxShadow: "var(--shadow-modal)",
        }}
      >
        <p className="text-[11px] uppercase tracking-[0.18em] text-[var(--color-gold)] mb-2">
          KIIKA · Rendez-vous
        </p>

        {variant === "invalid" && (
          <>
            <Header
              icon={<AlertTriangle size={26} />}
              title="Lien invalide"
              tone="warn"
            />
            <p className="text-[14px] text-[var(--color-navy)] leading-[1.6] mt-3">
              Ce lien d&apos;annulation n&apos;est pas valide. Il a peut-être déjà été
              utilisé, ou il provient d&apos;un email plus ancien.
            </p>
            <p className="text-[13px] text-[var(--color-gray-soft)] leading-[1.6] mt-3">
              Si vous souhaitez annuler un rendez-vous, contactez directement votre
              praticien.
            </p>
          </>
        )}

        {variant === "expired" && (
          <>
            <Header
              icon={<AlertTriangle size={26} />}
              title="Lien expiré"
              tone="warn"
            />
            <p className="text-[14px] text-[var(--color-navy)] leading-[1.6] mt-3">
              Le délai pour annuler en ligne via ce lien est dépassé. Contactez
              directement votre praticien pour reprogrammer ou annuler.
            </p>
          </>
        )}

        {variant === "confirmed" && appointment && (
          <>
            <Header
              icon={<Check size={26} />}
              title={alreadyDone ? "Déjà annulé" : "Rendez-vous annulé"}
              tone="success"
            />
            <p className="text-[14px] text-[var(--color-navy)] leading-[1.6] mt-3">
              {alreadyDone
                ? `Ce rendez-vous était déjà marqué comme annulé.`
                : `Votre rendez-vous a bien été annulé.`}
            </p>
            <p className="text-[13px] text-[var(--color-gray-soft)] leading-[1.6] mt-3">
              {appointment.therapist?.full_name ?? "Votre praticien"} en a été informé.
              Vous pouvez fermer cette page.
            </p>
          </>
        )}

        {variant === "form" && appointment && token && (
          <>
            <Header
              icon={<Calendar size={26} />}
              title="Annuler ce rendez-vous ?"
            />
            <div
              className="mt-5 rounded-[12px] p-4 sm:p-5"
              style={{ backgroundColor: "var(--color-cream)" }}
            >
              <p className="text-[11px] uppercase tracking-wide text-[var(--color-gold)] font-semibold mb-2">
                Détails de la séance
              </p>
              <p className="font-serif text-[18px] font-semibold text-[var(--color-navy)]">
                {formatDate(appointment.starts_at)}
              </p>
              <p className="text-[14px] text-[var(--color-navy)] mt-1">
                {formatTime(appointment.starts_at)}
                {" · "}
                {appointment.mode === "visio" ? "Visio" : "Cabinet"}
              </p>
              {appointment.therapist?.full_name && (
                <p className="text-[12.5px] text-[var(--color-gray-soft)] mt-2">
                  Avec {appointment.therapist.full_name}
                </p>
              )}
            </div>

            {error && (
              <p
                role="alert"
                className="mt-4 rounded-[10px] bg-red-50 border border-red-200 px-3 py-2 text-[13px] text-[var(--color-red-alert)]"
              >
                Impossible d&apos;annuler. Réessayez ou contactez votre praticien.
              </p>
            )}

            <form action={confirmCancelAction} className="mt-6 flex flex-col gap-3">
              <input type="hidden" name="token" value={token} />
              <button
                type="submit"
                className="inline-flex items-center justify-center gap-2 rounded-[10px] px-4 py-3 text-[14px] font-semibold text-white min-h-12 transition-opacity hover:opacity-90"
                style={{ backgroundColor: "#B85450" }}
              >
                <X size={16} aria-hidden="true" />
                Confirmer l&apos;annulation
              </button>
              <p className="text-[12px] text-[var(--color-gray-soft)] text-center leading-[1.5]">
                Cette action est définitive. Si vous voulez juste reprogrammer,
                contactez votre praticien à la place.
              </p>
            </form>
          </>
        )}
      </main>
    </div>
  );
}

function Header({
  icon,
  title,
  tone,
}: {
  icon: React.ReactNode;
  title: string;
  tone?: "success" | "warn";
}) {
  const bg =
    tone === "success"
      ? "rgba(46,138,123,0.10)"
      : tone === "warn"
        ? "rgba(184,84,80,0.10)"
        : "var(--color-gold-light)";
  const fg =
    tone === "success"
      ? "var(--color-teal)"
      : tone === "warn"
        ? "#B85450"
        : "var(--color-gold)";
  return (
    <div className="flex items-center gap-3">
      <div
        className="inline-flex items-center justify-center w-12 h-12 rounded-full shrink-0"
        style={{ backgroundColor: bg, color: fg }}
        aria-hidden="true"
      >
        {icon}
      </div>
      <h1 className="font-serif text-[22px] font-bold text-[var(--color-navy)] leading-tight">
        {title}
      </h1>
    </div>
  );
}

function formatDate(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(new Date(iso));
}

function formatTime(iso: string): string {
  return new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(new Date(iso));
}
