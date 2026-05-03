import { readFileSync } from "node:fs";
import { Client } from "pg";

const password = process.env.SUPABASE_DB_PASSWORD;
const ref = process.env.SUPABASE_PROJECT_REF ?? "xrehbihcwosbizablfni";
const file = process.argv[2];

if (!password || !file) {
  console.error("Usage: SUPABASE_DB_PASSWORD=... node scripts/apply-migration.mjs <file>");
  process.exit(1);
}

const sql = readFileSync(file, "utf8");

const regions = [
  "eu-west-3",
  "eu-central-1",
  "eu-west-1",
  "eu-west-2",
  "us-east-1",
  "us-east-2",
  "us-west-1",
  "ap-southeast-1",
  "ap-northeast-1",
];

async function tryConnect(region) {
  const host = `aws-1-${region}.pooler.supabase.com`;
  const client = new Client({
    host,
    port: 5432,
    user: `postgres.${ref}`,
    password,
    database: "postgres",
    ssl: { rejectUnauthorized: false },
    connectionTimeoutMillis: 5000,
    statement_timeout: 60000,
  });
  try {
    await client.connect();
    return client;
  } catch (e) {
    console.log(`(${e.code}: ${e.message})`);
    try { await client.end(); } catch {}
    return null;
  }
}

let client = null;
let usedRegion = null;
for (const r of regions) {
  process.stdout.write(`Trying ${r}... `);
  client = await tryConnect(r);
  if (client) {
    usedRegion = r;
    console.log("connected");
    break;
  }
  console.log("no");
}

if (!client) {
  console.error("Could not connect to any pooler region.");
  process.exit(1);
}

try {
  console.log(`Applying ${file} via aws-0-${usedRegion}.pooler.supabase.com...`);
  await client.query(sql);
  console.log("✓ Migration applied.");
  const { rows } = await client.query(
    "select table_name from information_schema.tables where table_schema='public' order by table_name",
  );
  console.log("Tables in public:", rows.map((r) => r.table_name).join(", "));
} catch (err) {
  console.error("✗ Migration failed:", err.message);
  process.exitCode = 1;
} finally {
  await client.end();
}
