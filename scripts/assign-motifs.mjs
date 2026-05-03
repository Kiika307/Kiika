import { readFileSync } from "node:fs";
import pg from "pg";

for (const line of readFileSync(".env.local", "utf8").split(/\r?\n/)) {
  const m = line.match(/^([A-Z0-9_]+)=(.*)$/);
  if (m && !process.env[m[1]]) process.env[m[1]] = m[2];
}

const MOTIF_RULES = [
  { motif: "Anxiété & stress", kw: ["anxiété", "stress", "angoisse", "panique", "régulation", "auto-soin", "lâcher-prise", "repos", "états"] },
  { motif: "Dépression & humeur", kw: ["dépression", "humeur", "tristesse", "douleur émotionnelle"] },
  { motif: "Estime & confiance en soi", kw: ["estime", "confiance", "auto-compassion", "identité", "affirmation", "auto-sabotage", "critique"] },
  { motif: "Phobies & peurs", kw: ["phobies", "peurs", "peur", "phobie"] },
  { motif: "Trauma & deuil", kw: ["trauma", "deuil", "espt"] },
  { motif: "Burn-out & fatigue", kw: ["burn-out", "fatigue", "épuisement"] },
  { motif: "Addictions", kw: ["addictions", "tabac", "alcool", "dépendances", "compulsions", "habitudes"] },
  { motif: "Perte de poids & TCA", kw: ["poids", "alimentation", "tca", "boulimie", "anorexie"] },
  { motif: "Sommeil & insomnie", kw: ["sommeil", "insomnie"] },
  { motif: "Procrastination & motivation", kw: ["motivation", "procrastination", "action", "engagement", "goal-setting", "intention"] },
  { motif: "Couple & sexualité", kw: ["couple", "sexualité", "amour", "intimité"] },
  { motif: "Famille & enfance", kw: ["famille", "enfance", "parents", "fratrie", "histoire", "archétypes"] },
  { motif: "Conflits & communication", kw: ["conflits", "communication", "relations", "relation", "rapport", "négociation", "empathie", "calibration", "influence"] },
  { motif: "Performance & examens", kw: ["performance", "examens", "sport", "compétition", "leadership", "modélisation", "stratégies"] },
  { motif: "Décision & orientation", kw: ["décision", "décisions", "choix", "orientation", "transition", "transitions", "bilan", "diagnostic", "critères", "discernement"] },
  { motif: "Prise de parole", kw: ["voix", "langue", "parole", "récit", "métaphore", "langage"] },
  { motif: "Douleurs & psychosomatique", kw: ["douleur", "somatique", "allergies", "toc", "corps", "sensoriel"] },
  { motif: "Quête de sens & spiritualité", kw: ["sens", "valeurs", "écologie", "spiritualité", "présence", "conscience", "intégration", "mémoire", "rituels"] },
];

const CATEGORY_DEFAULTS = {
  "Objectifs & motivation": ["Procrastination & motivation", "Décision & orientation"],
  "États & ancrage": ["Anxiété & stress"],
  "Communication & rapport": ["Conflits & communication"],
  "Peurs & phobies": ["Phobies & peurs"],
  "Croyances": ["Estime & confiance en soi"],
  "Recadrage": ["Estime & confiance en soi"],
  "Confiance & identité": ["Estime & confiance en soi"],
  "Parts internes": ["Trauma & deuil"],
  "Apprentissage & modélisation": ["Performance & examens"],
  "Alignement & transitions": ["Décision & orientation", "Quête de sens & spiritualité"],
  "Langage & hypnose": ["Anxiété & stress"],
  "Meta-Programs": ["Décision & orientation"],
};

function deriveMotifs(category, objectives) {
  const motifs = new Set(CATEGORY_DEFAULTS[category] ?? []);
  const haystack = (objectives ?? []).map((o) => o.toLowerCase());
  for (const rule of MOTIF_RULES) {
    if (rule.kw.some((k) => haystack.some((h) => h.includes(k)))) {
      motifs.add(rule.motif);
    }
  }
  return Array.from(motifs);
}

const client = new pg.Client({
  connectionString: process.env.SUPABASE_DB_URL,
  ssl: { rejectUnauthorized: false },
});
await client.connect();

const { rows } = await client.query("select id, category, objectives from protocols");
let updated = 0;
for (const row of rows) {
  const motifs = deriveMotifs(row.category, row.objectives);
  await client.query("update protocols set motifs = $1 where id = $2", [motifs, row.id]);
  updated++;
}

const { rows: stats } = await client.query(
  "select unnest(motifs) as m, count(*) from protocols group by m order by count desc",
);
console.log(`Updated ${updated} protocols`);
console.log(stats);
await client.end();
