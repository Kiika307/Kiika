import { NextResponse, type NextRequest } from "next/server";
import crypto from "node:crypto";
import {
  createClient as createServiceClient,
  type SupabaseClient,
} from "@supabase/supabase-js";
import { getSmtpTransporter, emailFrom } from "@/lib/email/smtp-client";

export const dynamic = "force-dynamic";
export const runtime = "nodejs";

interface AppointmentRow {
  id: string;
  starts_at: string;
  mode: "visio" | "presentiel";
  duration_min: number | null;
  therapist_id: string;
  client: {
    id: string;
    full_name: string;
    email: string | null;
    reminders_disabled: boolean;
  } | null;
  protocol: { name: string } | null;
}

interface ProfileRow {
  reminders_enabled: boolean;
  full_name: string;
}

type Kind = "h24" | "h1";

interface Task {
  apptId: string;
  kind: Kind;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiika.intio.fr";

export async function POST(request: NextRequest) {
  // Bearer auth — this endpoint is reachable from the public Internet but
  // only accepts requests carrying the secret pg_cron knows.
  const auth = request.headers.get("authorization") ?? "";
  const expected = `Bearer ${process.env.CRON_SECRET ?? ""}`;
  if (
    !process.env.CRON_SECRET ||
    !timingSafeEqualString(auth, expected)
  ) {
    return NextResponse.json({ ok: false, error: "Unauthorized" }, { status: 401 });
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !serviceKey) {
    return NextResponse.json(
      { ok: false, error: "Service role not configured" },
      { status: 500 },
    );
  }

  const supabase = createServiceClient(url, serviceKey, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  // Reminder windows. We poll every 5 minutes, so each window is 5 minutes
  // wide to avoid double-coverage drift.
  const now = new Date();
  // h-24: appointments starting between 23h55min and 24h00min from now
  const h24Start = new Date(now.getTime() + (24 * 60 - 5) * 60_000);
  const h24End = new Date(now.getTime() + 24 * 60 * 60_000);
  // h-1: appointments starting between 0h55min and 1h00min from now
  const h1Start = new Date(now.getTime() + 55 * 60_000);
  const h1End = new Date(now.getTime() + 60 * 60_000);

  const tasks: Task[] = [];
  for (const [start, end, kind] of [
    [h24Start, h24End, "h24"],
    [h1Start, h1End, "h1"],
  ] as const) {
    const { data } = await supabase
      .from("appointments")
      .select("id")
      .gte("starts_at", start.toISOString())
      .lt("starts_at", end.toISOString())
      .in("status", ["planned", "confirmed", "scheduled"]);
    for (const row of (data ?? []) as Array<{ id: string }>) {
      tasks.push({ apptId: row.id, kind });
    }
  }

  let sent = 0;
  let skipped = 0;
  let failed = 0;

  for (const task of tasks) {
    try {
      const result = await processTask(supabase, task);
      if (result === "sent") sent++;
      else if (result === "skipped") skipped++;
      else failed++;
    } catch (e) {
      console.error("[cron/send-reminders]", task.apptId, task.kind, e);
      failed++;
    }
  }

  return NextResponse.json({
    ok: true,
    timestamp: now.toISOString(),
    found: tasks.length,
    sent,
    skipped,
    failed,
  });
}

// Untyped client — we hand-rolled the row shapes above to avoid a generated
// Database type and the strict typing conflicts that come with it.
type AnyDb = SupabaseClient<any, any, any>; // eslint-disable-line @typescript-eslint/no-explicit-any

async function processTask(
  supabase: AnyDb,
  task: Task,
): Promise<"sent" | "skipped" | "failed"> {
  // Skip if a reminder of the same kind has already gone out.
  const { count } = await supabase
    .from("appointment_reminders")
    .select("*", { count: "exact", head: true })
    .eq("appointment_id", task.apptId)
    .eq("kind", task.kind);
  if ((count ?? 0) > 0) return "skipped";

  const { data: apptData } = await supabase
    .from("appointments")
    .select(
      `id, starts_at, mode, duration_min, therapist_id,
       client:clients(id, full_name, email, reminders_disabled),
       protocol:protocols(name)`,
    )
    .eq("id", task.apptId)
    .maybeSingle();

  const appt = apptData as unknown as AppointmentRow | null;
  if (!appt || !appt.client) return "skipped";
  if (!appt.client.email) return "skipped";
  if (appt.client.reminders_disabled) return "skipped";

  const { data: profileData } = await supabase
    .from("profiles")
    .select("reminders_enabled, full_name")
    .eq("id", appt.therapist_id)
    .maybeSingle();
  const profile = profileData as unknown as ProfileRow | null;
  if (profile && profile.reminders_enabled === false) return "skipped";

  const transporter = getSmtpTransporter();
  if (!transporter) return "failed";

  // Single-use cancel token: 32-byte base64url, valid until 6h after the RDV.
  const token = crypto.randomBytes(32).toString("base64url");
  const expiresAt = new Date(new Date(appt.starts_at).getTime() + 6 * 3600_000);
  const { error: tokenErr } = await supabase
    .from("appointment_cancel_tokens")
    .insert({
      token,
      appointment_id: appt.id,
      expires_at: expiresAt.toISOString(),
    });
  if (tokenErr) return "failed";

  const startsAt = new Date(appt.starts_at);
  const dateLabel = new Intl.DateTimeFormat("fr-FR", {
    weekday: "long",
    day: "2-digit",
    month: "long",
    year: "numeric",
  }).format(startsAt);
  const timeLabel = new Intl.DateTimeFormat("fr-FR", {
    hour: "2-digit",
    minute: "2-digit",
  }).format(startsAt);

  const therapistName = profile?.full_name ?? "votre praticien";
  const cancelUrl = `${SITE_URL}/rdv/${token}/cancel`;

  const subject =
    task.kind === "h24"
      ? `Rappel : votre séance demain à ${timeLabel}`
      : "Votre séance commence dans 1 heure";

  const html = renderReminderEmail({
    kind: task.kind,
    clientName: appt.client.full_name,
    therapistName,
    dateLabel,
    timeLabel,
    mode: appt.mode,
    protocol: appt.protocol?.name ?? null,
    cancelUrl,
  });

  await transporter.sendMail({
    from: emailFrom(),
    to: appt.client.email,
    subject,
    html,
    replyTo: emailFrom(),
  });

  await supabase.from("appointment_reminders").insert({
    appointment_id: appt.id,
    kind: task.kind,
    email_to: appt.client.email,
  });

  return "sent";
}

interface ReminderTemplateProps {
  kind: Kind;
  clientName: string;
  therapistName: string;
  dateLabel: string;
  timeLabel: string;
  mode: "visio" | "presentiel";
  protocol: string | null;
  cancelUrl: string;
}

function renderReminderEmail(p: ReminderTemplateProps): string {
  const firstName = p.clientName.split(" ")[0] || p.clientName;
  const greeting =
    p.kind === "h24"
      ? `Bonjour ${firstName},`
      : `${firstName}, c'est dans une heure.`;
  const intro =
    p.kind === "h24"
      ? `Petit rappel pour votre séance avec ${p.therapistName} demain.`
      : `Votre séance avec ${p.therapistName} démarre bientôt.`;
  const modeLabel = p.mode === "visio" ? "Séance en visio" : "Séance en cabinet";
  const cancelBlock =
    p.kind === "h24"
      ? `<p style="font-size:13px;line-height:1.6;color:#2A1F16;margin:24px 0 16px;">
          Si vous ne pouvez plus venir, merci de prévenir au plus vite afin que ce créneau puisse être proposé à un autre client.
        </p>
        <table cellpadding="0" cellspacing="0"><tr><td>
          <a href="${p.cancelUrl}" style="display:inline-block;padding:12px 20px;background:#FBF6E8;border:1px solid #A88656;border-radius:10px;color:#2A1F16;text-decoration:none;font-weight:bold;font-size:13px;">Annuler ce rendez-vous</a>
        </td></tr></table>`
      : "";

  return `<!doctype html>
<html lang="fr"><head><meta charset="utf-8"><title>Rappel KIIKA</title></head>
<body style="margin:0;padding:0;background-color:#EBE0CB;font-family:Georgia,'Cormorant Garamond',serif;color:#2A1F16;">
<table width="100%" cellpadding="0" cellspacing="0" style="padding:32px 16px;">
<tr><td align="center">
<table width="560" cellpadding="0" cellspacing="0" style="max-width:560px;background:#FBF6E8;border-radius:18px;padding:32px;box-shadow:0 4px 18px rgba(0,0,0,0.08);">
<tr><td>
<p style="font-size:11px;text-transform:uppercase;letter-spacing:0.18em;color:#A88656;margin:0 0 12px;font-family:Arial,sans-serif;">KIIKA &middot; Rappel de séance</p>
<h1 style="font-family:Georgia,'Cormorant Garamond',serif;font-size:24px;font-weight:bold;color:#2A1F16;margin:0 0 8px;line-height:1.3;">${escapeHtml(greeting)}</h1>
<p style="font-size:14px;line-height:1.6;color:#2A1F16;margin:0 0 20px;font-family:Arial,sans-serif;">${escapeHtml(intro)}</p>
<div style="background:#EBE0CB;border-radius:12px;padding:20px;margin:20px 0;">
  <p style="margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:0.12em;color:#A88656;font-family:Arial,sans-serif;">Date et heure</p>
  <p style="margin:0;font-family:Georgia,serif;font-size:18px;font-weight:bold;color:#2A1F16;">${escapeHtml(p.dateLabel)}</p>
  <p style="margin:4px 0 0;font-size:16px;color:#2A1F16;font-family:Arial,sans-serif;">${escapeHtml(p.timeLabel)}</p>
  <p style="margin:12px 0 0;font-size:13px;color:#A88656;font-family:Arial,sans-serif;">${escapeHtml(modeLabel)}${p.protocol ? " &middot; " + escapeHtml(p.protocol) : ""}</p>
</div>
${cancelBlock}
<p style="margin-top:32px;font-size:11px;color:#A88656;line-height:1.5;font-family:Arial,sans-serif;">
Vous recevez cet email car vous avez un rendez-vous planifié avec ${escapeHtml(p.therapistName)}.<br>
Si vous pensez recevoir cet email par erreur, ignorez-le ou contactez votre praticien directement.
</p>
</td></tr></table>
<p style="margin-top:16px;font-size:10px;color:#7C6F5C;font-family:Arial,sans-serif;">KIIKA &middot; Plateforme d'accompagnement holistique</p>
</td></tr></table>
</body></html>`;
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function timingSafeEqualString(a: string, b: string): boolean {
  const A = Buffer.from(a);
  const B = Buffer.from(b);
  if (A.length !== B.length) return false;
  return crypto.timingSafeEqual(A, B);
}
