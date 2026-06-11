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
await c.query(readFileSync(join(__dirname, "..", "supabase", "migrations", "0031_portal_security_hardening.sql"), "utf8"));
const t = await c.query(`select tgname from pg_trigger where tgname in ('trg_lock_client_self_update','trg_lock_client_task_update','trg_lock_client_message_update') order by tgname`);
console.log("Triggers de verrouillage:", t.rows.map(x => x.tgname).join(", ") || "AUCUN");
await c.end();
