import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import pg from "pg";

const __dirname = dirname(fileURLToPath(import.meta.url));
const envPath = join(__dirname, "..", ".env.local");
const env = Object.fromEntries(
  readFileSync(envPath, "utf8")
    .split("\n")
    .filter((l) => l && !l.startsWith("#") && l.includes("="))
    .map((l) => {
      const idx = l.indexOf("=");
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    }),
);

const dbUrl = env.SUPABASE_DB_URL;
if (!dbUrl) throw new Error("SUPABASE_DB_URL not found in .env.local");

const migrations = ["0019_avatars_bucket.sql", "0020_profile_role_free_text.sql"];

const client = new pg.Client({ connectionString: dbUrl });
await client.connect();
for (const m of migrations) {
  const sql = readFileSync(join(__dirname, "..", "supabase", "migrations", m), "utf8");
  console.log(`== Applying ${m} ==`);
  await client.query(sql);
  console.log("OK");
}
const { rows } = await client.query(
  "select id, public, file_size_limit, allowed_mime_types from storage.buckets where id='avatars'",
);
console.log("avatars bucket:", rows);
const { rows: cons } = await client.query(
  "select conname from pg_constraint where conrelid = 'public.profiles'::regclass",
);
console.log("profiles constraints:", cons.map((r) => r.conname));
await client.end();
