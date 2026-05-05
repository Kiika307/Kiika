// Local admin SQL runner. Connects to the production database with full
// privileges (bypasses RLS). Refuses to run inside CI to prevent supply-chain
// SQL injection via pull-request triggered pipelines.
import { readFileSync } from "node:fs";
import pg from "pg";

if (process.env.CI || process.env.GITHUB_ACTIONS || process.env.VERCEL) {
  console.error("scripts/query.mjs is local-only and refuses to run in CI/CD.");
  process.exit(1);
}

for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const sql = process.argv.slice(2).join(" ");
if (!sql.trim()) {
  console.error("Usage: node scripts/query.mjs '<SQL statement>'");
  process.exit(1);
}

const client = new pg.Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});
await client.connect();
const res = await client.query(sql);
console.log(JSON.stringify(res.rows, null, 2));
await client.end();
