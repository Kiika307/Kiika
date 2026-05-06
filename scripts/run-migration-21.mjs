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
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    }),
);

const client = new pg.Client({ connectionString: env.SUPABASE_DB_URL });
await client.connect();
const sql = readFileSync(
  join(__dirname, "..", "supabase", "migrations", "0021_client_kiika_analyses.sql"),
  "utf8",
);
console.log("== Applying 0021_client_kiika_analyses.sql ==");
await client.query(sql);
const { rows } = await client.query(
  "select column_name, data_type from information_schema.columns where table_name='client_kiika_analyses' order by ordinal_position",
);
console.log("Columns:", rows);
await client.end();
console.log("OK");
