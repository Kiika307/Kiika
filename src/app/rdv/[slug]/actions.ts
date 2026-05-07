"use server";

import { revalidatePath } from "next/cache";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { localToUtc } from "@/lib/booking";
import { getSmtpTransporter, emailFrom } from "@/lib/email/smtp-client";
import { sendPushTo } from "@/lib/push";
import { createGoogleEvent } from "@/lib/google-calendar";

export interface PublicBookingInput {
  therapistSlug: string;
  date: string; // YYYY-MM-DD
  time: string; // HH:MM
  fullName: string;
  email: string;
  phone: string;
  motif: string;
  consent: boolean;
}

export interface PublicBookingResult {
  ok: boolean;
  error?: string;
  appointmentId?: string;
}

/**
 * Public booking submission.
 *
 * Runs with the service role since the caller is unauthenticated. We
 * validate everything server-side, re-check slot availability to dodge
 * the page-load → submit race, then create (or reuse) the client and
 * the appointment, attach the anamnèse as a free note, and send a
 * confirmation email.
 */
export async function submitPublicBookingAction(
  input: PublicBookingInput,
): Promise<PublicBookingResult> {
  const trimmed = {
    therapistSlug: input.therapistSlug.trim().toLowerCase(),
    date: input.date.trim(),
    time: input.time.trim(),
    fullName: input.fullName.trim().slice(0, 120),
    email: input.email.trim().toLowerCase().slice(0, 255),
    phone: input.phone.trim().slice(0, 30),
    motif: input.motif.trim().slice(0, 5000),
    consent: input.consent === true,
  };

  if (!trimmed.consent) {
    return { ok: false, error: "Le consentement est requis pour réserver." };
  }
  if (trimmed.fullName.length < 2) {
    return { ok: false, error: "Renseignez votre nom complet." };
  }
  if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(trimmed.email)) {
    return { ok: false, error: "Adresse e-mail invalide." };
  }
  if (!/^\d{4}-\d{2}-\d{2}$/.test(trimmed.date)) {
    return { ok: false, error: "Date invalide." };
  }
  if (!/^\d{2}:\d{2}$/.test(trimmed.time)) {
    return { ok: false, error: "Heure invalide." };
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return { ok: false, error: "Service indisponible — réessayez plus tard." };
  }
  const supabase = createServiceClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: profile } = await supabase
    .from("profiles")
    .select(
      "id, full_name, booking_enabled, booking_default_duration, booking_timezone, booking_advance_days, google_calendar_sync_enabled, google_calendar_id",
    )
    .eq("booking_slug", trimmed.therapistSlug)
    .eq("booking_enabled", true)
    .maybeSingle();
  if (!profile) {
    return { ok: false, error: "Praticien introuvable ou page désactivée." };
  }

  const tz = profile.booking_timezone || "Europe/Paris";
  const startsAt = localToUtc(trimmed.date, trimmed.time, tz);
  if (Number.isNaN(startsAt.getTime())) {
    return { ok: false, error: "Créneau invalide." };
  }
  if (startsAt.getTime() < Date.now() + 30 * 60_000) {
    return { ok: false, error: "Ce créneau est trop proche." };
  }
  const horizon = new Date(
    Date.now() + (profile.booking_advance_days || 30) * 24 * 3600_000,
  );
  if (startsAt.getTime() > horizon.getTime()) {
    return { ok: false, error: "Ce créneau dépasse la fenêtre de réservation." };
  }

  const duration = profile.booking_default_duration || 60;
  const slotEnd = new Date(startsAt.getTime() + duration * 60_000);

  // Slot recheck — anti-race.
  const { data: collision } = await supabase
    .from("appointments")
    .select("id, starts_at, duration")
    .eq("therapist_id", profile.id)
    .neq("status", "cancelled")
    .gte("starts_at", new Date(startsAt.getTime() - 4 * 3600_000).toISOString())
    .lt("starts_at", new Date(slotEnd.getTime() + 4 * 3600_000).toISOString());
  const overlap = (collision ?? []).some((row) => {
    const s = new Date(row.starts_at);
    const e = new Date(s.getTime() + (row.duration ?? 60) * 60_000);
    return s < slotEnd && e > startsAt;
  });
  if (overlap) {
    return {
      ok: false,
      error: "Ce créneau vient d'être pris. Choisissez-en un autre.",
    };
  }

  // Reuse a client by email if one exists for this praticien.
  const { data: existingClient } = await supabase
    .from("clients")
    .select("id")
    .eq("therapist_id", profile.id)
    .eq("email", trimmed.email)
    .maybeSingle();

  let clientId = existingClient?.id ?? null;
  if (!clientId) {
    const { data: newClient, error: clientErr } = await supabase
      .from("clients")
      .insert({
        therapist_id: profile.id,
        full_name: trimmed.fullName,
        email: trimmed.email,
        phone: trimmed.phone || null,
        status: "nouveau",
      })
      .select("id")
      .single();
    if (clientErr || !newClient) {
      return { ok: false, error: "Impossible de créer le dossier client." };
    }
    clientId = newClient.id;
  }

  const { data: appt, error: apptErr } = await supabase
    .from("appointments")
    .insert({
      therapist_id: profile.id,
      client_id: clientId,
      starts_at: startsAt.toISOString(),
      duration,
      mode: "presentiel",
      status: "planned",
    })
    .select("id")
    .single();
  if (apptErr || !appt) {
    return { ok: false, error: "Impossible de créer le rendez-vous." };
  }

  if (trimmed.motif) {
    await supabase.from("client_notes").insert({
      therapist_id: profile.id,
      client_id: clientId,
      kind: "libre",
      title: "Anamnèse — page de réservation",
      body: trimmed.motif,
    });
  }

  // Push to Google Calendar — best-effort. Failure does NOT roll the
  // booking back; the praticien gets the RDV in KIIKA either way and
  // can re-sync manually if needed.
  if (profile.google_calendar_sync_enabled) {
    try {
      const summary = `Séance KIIKA · ${trimmed.fullName}`;
      const description = trimmed.motif
        ? `Anamnèse :\n${trimmed.motif}\n\nContact : ${trimmed.email}${trimmed.phone ? " · " + trimmed.phone : ""}`
        : `Contact : ${trimmed.email}${trimmed.phone ? " · " + trimmed.phone : ""}`;
      const eventId = await createGoogleEvent({
        userId: profile.id,
        calendarId: profile.google_calendar_id ?? "primary",
        summary,
        description,
        startsAt,
        endsAt: slotEnd,
      });
      if (eventId) {
        await supabase
          .from("appointments")
          .update({ google_event_id: eventId })
          .eq("id", appt.id);
      }
    } catch (e) {
      console.error("[public-booking] google calendar push failed", e);
    }
  }

  // Push notification to the praticien — best-effort. Same dateLabel /
  // timeLabel computed below for the email; we factor it inline to keep
  // the SMTP try/catch isolated from the push try/catch.
  try {
    const tzShort = profile.booking_timezone || "Europe/Paris";
    const dateShort = new Intl.DateTimeFormat("fr-FR", {
      weekday: "short",
      day: "2-digit",
      month: "short",
      timeZone: tzShort,
    }).format(startsAt);
    const timeShort = new Intl.DateTimeFormat("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
      timeZone: tzShort,
    }).format(startsAt);
    await sendPushTo(profile.id, {
      title: "Nouveau rendez-vous",
      body: `${trimmed.fullName} · ${dateShort} ${timeShort}`,
      url: "/agenda",
      tag: `booking-${appt.id}`,
    });
  } catch (e) {
    console.error("[public-booking] push notification failed", e);
  }

  // Confirmation email — best-effort, doesn't fail the booking.
  try {
    const transporter = getSmtpTransporter();
    if (transporter) {
      const dateLabel = new Intl.DateTimeFormat("fr-FR", {
        weekday: "long",
        day: "2-digit",
        month: "long",
        year: "numeric",
        timeZone: tz,
      }).format(startsAt);
      const timeLabel = new Intl.DateTimeFormat("fr-FR", {
        hour: "2-digit",
        minute: "2-digit",
        timeZone: tz,
      }).format(startsAt);
      const therapistName = profile.full_name ?? "votre praticien";
      await transporter.sendMail({
        from: emailFrom(),
        to: trimmed.email,
        subject: `Confirmation : votre rendez-vous le ${dateLabel}`,
        html: renderBookingConfirmation({
          firstName: trimmed.fullName.split(" ")[0],
          therapistName,
          dateLabel,
          timeLabel,
        }),
      });
    }
  } catch (e) {
    console.error("[public-booking] confirmation email failed", e);
  }

  revalidatePath("/agenda");
  revalidatePath("/clients");
  return { ok: true, appointmentId: appt.id };
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

interface ConfirmationProps {
  firstName: string;
  therapistName: string;
  dateLabel: string;
  timeLabel: string;
}

function renderBookingConfirmation(p: ConfirmationProps): string {
  const fn = escapeHtml(p.firstName);
  const tn = escapeHtml(p.therapistName);
  const dl = escapeHtml(p.dateLabel);
  const tl = escapeHtml(p.timeLabel);
  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>Confirmation KIIKA</title></head>
<body style="margin:0;padding:0;background-color:#EBE0CB;font-family:Georgia,'Cormorant Garamond',serif;color:#2A1F16;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FBF6E8;border-radius:18px;padding:32px;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
<tr><td>
<p style="font-size:11px;text-transform:uppercase;letter-spacing:0.18em;color:#A88656;margin:0 0 12px;font-family:Arial,sans-serif;">Rendez-vous confirm&eacute;</p>
<h1 style="font-family:Georgia,serif;font-size:24px;font-weight:bold;color:#2A1F16;margin:0 0 8px;line-height:1.3;">Bonjour ${fn},</h1>
<p style="font-size:14px;line-height:1.6;color:#2A1F16;margin:0 0 20px;font-family:Arial,sans-serif;">Votre demande de rendez-vous avec ${tn} est confirm&eacute;e.</p>
<div style="background:#EBE0CB;border-radius:12px;padding:20px;margin:20px 0;">
<p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#A88656;font-family:Arial,sans-serif;">Date et heure</p>
<p style="margin:0;font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#2A1F16;">${dl}</p>
<p style="margin:4px 0 0;font-size:16px;color:#2A1F16;font-family:Arial,sans-serif;">${tl}</p>
</div>
<p style="font-size:13px;line-height:1.6;color:#2A1F16;margin:24px 0;font-family:Arial,sans-serif;">Vous recevrez un rappel par email 24h avant la s&eacute;ance, avec un lien pour annuler si besoin.</p>
<p style="margin-top:32px;font-size:11px;color:#A88656;line-height:1.5;font-family:Arial,sans-serif;">Si vous avez la moindre question, r&eacute;pondez simplement &agrave; cet e-mail.</p>
</td></tr></table>
<p style="margin-top:16px;font-size:10px;color:#7C6F5C;font-family:Arial,sans-serif;">KIIKA &middot; Plateforme d'accompagnement holistique</p>
</td></tr></table>
</body></html>`;
}
