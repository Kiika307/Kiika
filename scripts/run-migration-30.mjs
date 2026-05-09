import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import pg from "pg";
const __dirname = dirname(fileURLToPath(import.meta.url));
const env = Object.fromEntries(
  readFileSync(join(__dirname, "..", ".env.local"), "utf8").split("\n")
    .filter(l => l && !l.startsWith("#") && l.includes("="))
    .map(l => { const i = l.indexOf("="); return [l.slice(0,i).trim(), l.slice(i+1).trim()]; })
);
const c = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await c.connect();
await c.query(readFileSync(join(__dirname, "..", "supabase", "migrations", "0030_client_portal.sql"), "utf8"));
const r = await c.query("select column_name from information_schema.columns where table_name='clients' and column_name in ('user_id','portal_invite_token','portal_invite_expires_at','portal_invited_at','cgu_accepted_at','cgv_accepted_at','rgpd_accepted_at') order by column_name");
console.log("Client portal columns:", r.rows.map(x => x.column_name).join(", "));
const t = await c.query("select 1 from information_schema.tables where table_schema='public' and table_name='client_messages'");
console.log("client_messages table:", t.rowCount ? "OK" : "MISSING");
await c.end();
