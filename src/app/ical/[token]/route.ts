import { NextResponse, type NextRequest } from "next/server";
import { createClient as createServiceClient } from "@supabase/supabase-js";
import { buildIcal, type IcalEvent } from "@/lib/ical";

export const runtime = "nodejs";
// Subscribers (Apple Calendar, Outlook, Google) refetch this URL on
// their own schedule (~hourly). We keep the response uncached so the
// next refetch always gets fresh data — caching would defeat the
// point of a live subscription feed.
export const dynamic = "force-dynamic";

interface PageParams {
  token: string;
}

interface AppointmentRow {
  id: string;
  starts_at: string;
  duration_min: number | null;
  mode: "visio" | "presentiel";
  status: string;
  created_at: string | null;
  updated_at?: string | null;
  client: { full_name: string | null; email: string | null } | null;
  protocol: { name: string | null } | null;
}

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://kiika.intio.fr";

export async function GET(
  _request: NextRequest,
  context: { params: Promise<PageParams> },
) {
  const { token: rawToken } = await context.params;
  // The route file is /ical/[token]/route.ts, but the token is delivered
  // as "<uuid>.ics" so calendar clients accept it as a calendar file.
  // Strip the suffix defensively whether or not it is present.
  const token = rawToken.replace(/\.ics$/i, "").trim();

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) {
    return new NextResponse("Service unavailable", { status: 503 });
  }
  if (!/^[0-9a-f-]{36}$/i.test(token)) {
    return new NextResponse("Not found", { status: 404 });
  }

  const supabase = createServiceClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data: profile } = await supabase
    .from("profiles")
    .select("id, full_name")
    .eq("ical_token", token)
    .maybeSingle();
  if (!profile) {
    return new NextResponse("Not found", { status: 404 });
  }

  // Pull a 12-month window. Anything older bloats the feed without
  // value; future events go up to a year out — far enough for any
  // recurring use case but bounded against table-scan cost.
  const now = new Date();
  const sixMonthsAgo = new Date(now.getTime() - 180 * 24 * 3600_000);
  const twelveMonthsAhead = new Date(now.getTime() + 365 * 24 * 3600_000);

  const { data: appts } = await supabase
    .from("appointments")
    .select(
      `id, starts_at, duration_min, mode, status, created_at,
       client:clients(full_name, email),
       protocol:protocols(name)`,
    )
    .eq("therapist_id", profile.id)
    .gte("starts_at", sixMonthsAgo.toISOString())
    .lt("starts_at", twelveMonthsAhead.toISOString())
    .order("starts_at", { ascending: true });

  const rows = (appts ?? []) as unknown as AppointmentRow[];
  const events: IcalEvent[] = rows.map((row) => {
    const startsAt = new Date(row.starts_at);
    const endsAt = new Date(startsAt.getTime() + (row.duration_min ?? 60) * 60_000);
    const clientName = row.client?.full_name ?? "Client";
    const protocolName = row.protocol?.name ?? null;
    const summary = protocolName ? `${clientName} · ${protocolName}` : clientName;
    const descriptionLines = [
      protocolName ? `Protocole : ${protocolName}` : null,
      row.mode === "visio" ? "Mode : visio" : "Mode : présentiel",
      row.client?.email ? `Email : ${row.client.email}` : null,
    ].filter((s): s is string => !!s);
    return {
      uid: `kiika-${row.id}@kiika.intio.fr`,
      summary,
      description: descriptionLines.join("\n"),
      location: row.mode === "visio" ? "Visio KIIKA" : null,
      startsAt,
      endsAt,
      createdAt: row.created_at ? new Date(row.created_at) : undefined,
      updatedAt: new Date(),
      status: row.status === "cancelled" ? "CANCELLED" : "CONFIRMED",
    };
  });

  const ics = buildIcal({
    productId: "-//KIIKA//Agenda Praticien//FR",
    calendarName: `KIIKA — ${profile.full_name ?? "Agenda"}`,
    refreshIntervalMinutes: 60,
    events,
  });

  return new NextResponse(ics, {
    status: 200,
    headers: {
      "Content-Type": "text/calendar; charset=utf-8",
      "Content-Disposition": `inline; filename="kiika-${token}.ics"`,
      // Disable any intermediate cache so subscribed clients always
      // see the current state.
      "Cache-Control": "private, no-store, must-revalidate",
    },
  });
}
