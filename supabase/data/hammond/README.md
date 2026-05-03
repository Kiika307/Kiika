# Hammond 1990 — Protocoles ASCH

Sources : D. Corydon Hammond (dir.), *Handbook of Hypnotic Suggestions and Metaphors*, W.W. Norton, 1990 / Satas (Bruxelles), 2004 — American Society of Clinical Hypnosis (ASCH).

## Fichiers JSON

Extractions chapitre par chapitre (Phase 2 du chantier d'extraction) :

- `ch_dentaire.json` — 19 protocoles
- `ch_chirurgie.json` — 13 protocoles
- `ch_douleur_lot1.json` — 13 protocoles
- `ch_douleur_lot2.json` — 16 protocoles
- `ch_douleur_lot3.json` — 9 protocoles
- `ch_anxiete.json` — 14 protocoles
- `ch_phobies.json` — 6 protocoles
- `ch_sport.json` — 8 protocoles
- `inventaire_phase1.json` — inventaire complet 231 protocoles (Phase 1)

**Total intégré : 100 protocoles** (IDs 600-700) dans `supabase/seed_protocols_hammond.sql`.

## Pour réimporter

```sql
-- Dans Supabase SQL editor
\i supabase/seed_protocols_hammond.sql
```

Le seed utilise `on conflict (id) do update set` — il est ré-exécutable sans danger.
