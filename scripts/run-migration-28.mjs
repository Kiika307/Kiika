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
await c.query(readFileSync(join(__dirname, "..", "supabase", "migrations", "0028_profile_billing.sql"), "utf8"));
const r = await c.query("select column_name from information_schema.columns where table_name='profiles' and column_name in ('business_name','legal_form','address_line1','address_line2','postal_code','city','country','phone','siret','ape_code','rcs','tva_number','tva_regime','tva_rate','iban','bic','bank_name','invoice_footer','payment_terms') order by column_name");
console.log("Billing columns on profiles:", r.rows.map(x => x.column_name).join(", "));
await c.end();
