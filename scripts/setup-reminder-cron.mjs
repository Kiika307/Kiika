// One-time setup for the appointment-reminder cron job.
//
// 1. Generates a fresh CRON_SECRET (32 random bytes, base64url).
// 2. Inserts (or updates) the cron_config rows so pg_cron knows where
//    to call and which bearer token to send.
// 3. Prints the secret so you can paste it into Vercel as CRON_SECRET.
//
// Run: node scripts/setup-reminder-cron.mjs [https://your-domain.fr]
//
// You MUST also add CRON_SECRET to Vercel (Settings → Environment
// Variables, scope: Production + Preview). Without that, the cron
// endpoint returns 401 and no reminder is sent.

import crypto from "node:crypto";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const i = l.indexOf("=");
      return [l.slice(0, i).trim(), l.slice(i + 1).trim()];
    }),
);

const siteUrl = process.argv[2] ?? "https://kiika.intio.fr";
const reminderUrl = `${siteUrl.replace(/\/$/, "")}/api/cron/send-reminders`;
const secret = crypto.randomBytes(32).toString("base64url");

const c = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await c.connect();
await c.query(
  `insert into public.cron_config (key, value) values ('reminder_url', $1)
   on conflict (key) do update set value = excluded.value`,
  [reminderUrl],
);
await c.query(
  `insert into public.cron_config (key, value) values ('cron_secret', $1)
   on conflict (key) do update set value = excluded.value`,
  [secret],
);
const { rows } = await c.query("select key, value from public.cron_config order by key");
console.log("\ncron_config rows:");
for (const row of rows) {
  // Only show the URL in clear; mask the secret to the first 8 chars
  // so the script can be re-run without spilling the full token.
  console.log(
    `  ${row.key.padEnd(15)} = ${row.key === "cron_secret" ? row.value.slice(0, 8) + "…(redacted)" : row.value}`,
  );
}
await c.end();

console.log("\n──────────────────────────────────────────────────────────");
console.log("ACTION REQUIRED — add this exact value to Vercel as");
console.log("CRON_SECRET (Settings → Environment Variables):");
console.log("");
console.log("  " + secret);
console.log("");
console.log("Then redeploy main so the API route picks it up.");
console.log("──────────────────────────────────────────────────────────\n");
