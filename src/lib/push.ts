import webpush from "web-push";
import { createClient as createServiceClient } from "@supabase/supabase-js";

let configured = false;

function configure(): boolean {
  if (configured) return true;
  const publicKey = process.env.NEXT_PUBLIC_VAPID_PUBLIC_KEY;
  const privateKey = process.env.VAPID_PRIVATE_KEY;
  const subject = process.env.VAPID_SUBJECT;
  if (!publicKey || !privateKey || !subject) return false;
  webpush.setVapidDetails(subject, publicKey, privateKey);
  configured = true;
  return true;
}

export interface PushPayload {
  title: string;
  body: string;
  url?: string;
  tag?: string;
}

interface SubscriptionRow {
  id: string;
  endpoint: string;
  p256dh: string;
  auth: string;
}

/**
 * Sends a push notification to every device the user has subscribed.
 * Best-effort: failures (404 / 410 from the push service = stale
 * subscription) are logged and the offending row is deleted so we
 * don't spam dead endpoints forever.
 */
export async function sendPushTo(
  userId: string,
  payload: PushPayload,
): Promise<{ sent: number; pruned: number; failed: number }> {
  if (!configure()) return { sent: 0, pruned: 0, failed: 0 };

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !key) return { sent: 0, pruned: 0, failed: 0 };

  const supabase = createServiceClient(url, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  });

  const { data } = await supabase
    .from("push_subscriptions")
    .select("id, endpoint, p256dh, auth")
    .eq("user_id", userId);

  const subs = (data ?? []) as SubscriptionRow[];
  if (subs.length === 0) return { sent: 0, pruned: 0, failed: 0 };

  const body = JSON.stringify(payload);
  let sent = 0;
  let pruned = 0;
  let failed = 0;

  await Promise.all(
    subs.map(async (sub) => {
      try {
        await webpush.sendNotification(
          {
            endpoint: sub.endpoint,
            keys: { p256dh: sub.p256dh, auth: sub.auth },
          },
          body,
        );
        sent++;
        await supabase
          .from("push_subscriptions")
          .update({ last_used_at: new Date().toISOString() })
          .eq("id", sub.id);
      } catch (err) {
        const status =
          (err as { statusCode?: number }).statusCode ?? 0;
        // 404 / 410: subscription is dead (user unsubscribed at OS level
        // or browser data cleared). Drop the row.
        if (status === 404 || status === 410) {
          await supabase.from("push_subscriptions").delete().eq("id", sub.id);
          pruned++;
        } else {
          console.error("[push] send failed", status, err);
          failed++;
        }
      }
    }),
  );

  return { sent, pruned, failed };
}
