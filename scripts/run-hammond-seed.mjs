// Run seed_protocols_hammond.sql against Supabase via direct DB connection
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import pg from 'pg';

const __dirname = dirname(fileURLToPath(import.meta.url));

// Load .env.local manually
const envPath = join(__dirname, '..', '.env.local');
const env = Object.fromEntries(
  readFileSync(envPath, 'utf8')
    .split('\n')
    .filter(l => l && !l.startsWith('#') && l.includes('='))
    .map(l => {
      const idx = l.indexOf('=');
      return [l.slice(0, idx).trim(), l.slice(idx + 1).trim()];
    })
);

const dbUrl = env.SUPABASE_DB_URL;
if (!dbUrl) throw new Error('SUPABASE_DB_URL not found in .env.local');

const sqlPath = join(__dirname, '..', 'supabase', 'seed_protocols_hammond.sql');
const sql = readFileSync(sqlPath, 'utf8');

const client = new pg.Client({ connectionString: dbUrl });
await client.connect();
console.log('Connected. Running seed...');

try {
  const result = await client.query(sql);
  console.log('OK', Array.isArray(result) ? result.map(r => r.rowCount) : result.rowCount);
  const count = await client.query(`select count(*) from public.protocols where source = 'Hammond 1990 (ASCH)'`);
  console.log('Protocoles Hammond en base :', count.rows[0].count);
} catch (err) {
  console.error('ERREUR :', err.message);
  process.exit(1);
} finally {
  await client.end();
}
