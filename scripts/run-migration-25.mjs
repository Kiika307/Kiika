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
await c.query(readFileSync(join(__dirname, "..", "supabase", "migrations", "0025_public_booking.sql"), "utf8"));
const r = await c.query("select column_name from information_schema.columns where table_name='profiles' and column_name like 'booking_%' order by column_name");
console.log("Booking columns:", r.rows.map(x => x.column_name).join(", "));
await c.end();
