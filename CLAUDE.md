@AGENTS.md

# INTIO APP — Contexte projet

App Next.js de gestion pour thérapeutes (hypnose, PNL, cohérence cardiaque, EMDR…). Permet la gestion de clients, de protocoles, d'agenda, de visio, de messagerie, et de bibliothèques de protocoles thérapeutiques.

## Stack

- **Next.js 16.2.4** (App Router) — ⚠️ Version récente avec breaking changes vs versions antérieures. Toujours consulter `node_modules/next/dist/docs/` avant d'écrire du code Next.
- **React 19.2** + TypeScript 5 strict
- **Tailwind CSS 4** (via `@tailwindcss/postcss`)
- **Supabase** (auth + Postgres + storage) via `@supabase/ssr` et `@supabase/supabase-js`
- **pg** côté Node pour scripts d'admin
- **lucide-react** (icônes), **recharts** (graphiques), **jspdf** (export PDF)

## Backend Supabase

**Project ref :** `xrehbihcwosbizablfni`
**URL :** https://xrehbihcwosbizablfni.supabase.co

⚠️ NE PAS confondre avec le projet `mxoqrjtgfixidvzxtkzc` qui est l'EPHI Test (autre app dans le même workspace).

Crédentiaux dans `.env.local` :
- `NEXT_PUBLIC_SUPABASE_URL`
- `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- `SUPABASE_DB_URL` — connection string directe utilisable avec `pg` pour scripts d'admin

## Structure

```
intio-app/
├── src/
│   ├── app/                    # App Router : pages
│   │   ├── agenda/             # Calendrier, RDV
│   │   ├── auth/               # Callbacks auth Supabase
│   │   ├── clients/            # Liste & fiche client
│   │   ├── login/, signup/
│   │   ├── messagerie/         # Chat thérapeute-client
│   │   ├── protocoles/         # Bibliothèque protocoles + détail
│   │   ├── visio/              # Salle visio
│   │   ├── layout.tsx, page.tsx (dashboard)
│   ├── components/             # Components React (par feature)
│   │   ├── agenda/, clients/, protocoles/, visio/, layout/
│   ├── lib/
│   │   ├── data.ts             # Server actions / fetchers Supabase
│   │   ├── actions.ts          # Server actions mutations
│   │   ├── mock-data.ts        # Données de démo (4 clients, 4 protocoles)
│   │   ├── protocol-details.ts # Détails riches des protocoles (4 protocoles présentés en détail)
│   │   ├── types.ts            # Tous les types TS partagés
│   │   ├── supabase/           # Clients SSR/browser
│   │   ├── tokens.ts           # Couleurs + design tokens
│   │   └── pdf-export.ts       # Export PDF jspdf
├── supabase/
│   ├── migrations/             # 12 migrations 0001-0012
│   ├── seed.sql                # Seed initial
│   ├── seed_protocols.sql      # 190 protocoles NLP (Big Book of NLP, IDs 100-475)
│   ├── seed_protocols_hypnose_spirituelle.sql  # 15 protocoles GS Formation (IDs 500-514)
│   ├── seed_protocols_hammond.sql              # 100 protocoles Hammond ASCH (IDs 600-700)
│   └── data/hammond/           # JSON sources Hammond (Phase 2 d'extraction)
├── scripts/
│   └── run-hammond-seed.mjs    # Exécute le seed Hammond via pg + .env.local
└── public/
```

## Modèle de données protocoles

Table `public.protocols` (cf `migrations/0002_protocols.sql` à `0004_protocols_motifs.sql`) :

```sql
id int primary key,
name text, category text, practice text,
description text, duration text,
level text check (level in ('Débutant', 'Intermédiaire', 'Avancé')),
tags text[], color text,
sessions int, objectives text[],
source text, motifs text[],
created_at timestamptz
```

**Plages d'IDs réservées :**
- `100-475` : Big Book of NLP (`source = 'The Big Book of NLP'`)
- `500-514` : Hypnose Spirituelle GS Formation
- `600-700` : Hammond 1990 ASCH (100 protocoles : dentaire, chirurgie, douleur, anxiété, phobies, sport)

**Motifs canoniques** (à utiliser dans `motifs text[]`) :
- `Anxiété & stress`, `Estime & confiance en soi`, `Phobies & peurs`,
- `Trauma & deuil`, `Sommeil & insomnie`, `Burn-out & fatigue`,
- `Addictions`, `Procrastination & motivation`, `Nettoyage post-séance`

**Couleurs par catégorie** (`lib/tokens.ts` + seeds) :
- `#7C5CBF` purple — Hypnose / États
- `#C8A030` gold — Croyances / Anxiété
- `#2E8A7B` teal — Communication / Chirurgie
- `#B85450` red — Peurs / Douleur
- `#5B8FB9` blue — Croyances / Dentaire
- `#E08550` orange — Phobies

## Modèle Protocol côté front

Deux types dans `lib/types.ts` :
- `Protocol` (ligne 166) — vue liste, mappe 1:1 la table `protocols`
- `ProtocolDetail` (ligne 248) — vue riche d'un protocole (programs/séances/steps, outils, stats, croyances). Actuellement seulement 4 protocoles ont leur détail dans `lib/protocol-details.ts`

## Workflows fréquents

### Ajouter des protocoles à la bibliothèque

1. Créer/éditer un fichier `supabase/seed_protocols_<source>.sql` qui suit le pattern existant (`insert ... on conflict (id) do update set ...`)
2. Choisir une plage d'IDs libre (pas de chevauchement)
3. Exécuter via : `node scripts/run-hammond-seed.mjs` (script à dupliquer/adapter)
4. Le script charge `.env.local`, se connecte à `SUPABASE_DB_URL` via `pg`, exécute le SQL, vérifie le count

### Lancer le dev server

```bash
cd C:\Users\laure\Desktop\INTIO\intio-app
npm run dev
```

### Vérifier le build TypeScript

```bash
npx tsc --noEmit
```

## Conventions du projet

- **TypeScript strict** — pas de `any`, types explicites sur les exports
- **Server Components par défaut** (App Router) — `'use client'` uniquement quand nécessaire
- **Server Actions** dans `lib/actions.ts`
- **Fetchers Supabase** dans `lib/data.ts`
- **Composants** organisés par feature dans `components/<feature>/`
- **Tokens design** centralisés dans `lib/tokens.ts`
- Pas de `console.log` en production
- Apostrophes françaises échappées avec `’` ou `'` selon contexte SQL/TS
- En SQL, les apostrophes dans les strings sont doublées : `'l''avion'`

## Compte client de démo

App testée avec :
- Therapist : Varinka Robert (initiales VR)
- 4 clients de démo : Camille Dupont, Marc Lefèvre, Sophie Bernard, Julien Moreau

## Sources & références utiles

- **Big Book of NLP** (Shlomo Vaknin, 2008) — 190 protocoles NLP, source du seed initial
- **Hammond 1990** — Handbook of Hypnotic Suggestions and Metaphors (ASCH/Norton), traduction française Satas 2004 — 231 protocoles inventoriés, 100 intégrés (Phase 2 dans `supabase/data/hammond/`)
- **Hypnose Spirituelle GS Formation** — 15 protocoles vies antérieures / énergétique

## Sessions précédentes — fil rouge

- Bibliothèque de protocoles enrichie progressivement par sources externes (NLP → Spirituel → Hammond)
- Auth Supabase + magic links opérationnels
- Migrations 0001-0012 jouées
- Profile psychométrique (4 axes : émotionnel, cognitif, somatique, comportemental) avec matching de protocoles via `topProtocols` (cf `mock-data.ts`)
