#!/usr/bin/env python3
"""Generate KIIKA Hammond fiches: SQL seed + TS detail file from JSON sources."""
import json
import os
import re

SOURCE_DIR = r"C:\Users\laure\Desktop\Cours\Hammond\Fiches détaillées"
SQL_OUT = "supabase/seed_protocols_kiika_hammond.sql"
TS_OUT = "src/lib/protocol-details-kiika-hammond.ts"

# Order matches ID assignment 600-727
FILES = [
    "kiika_cercle1_lot1_inductions.json",
    "kiika_cercle1_lot2_approfondissements_lieux.json",
    "kiika_cercle1_lot3_ancrages_dissociations.json",
    "kiika_cercle1_lot4_retours_clotures.json",
    "kiika_cercle2_lot1_anxiete.json",
    "kiika_cercle2_lot2_sommeil.json",
    "kiika_cercle2_lot3_douleur.json",
    "kiika_cercle3_lot1_pathologies_chroniques.json",
    "kiika_cercle3_lot2_somatique_specialise.json",
    "kiika_cercle3_lot3_neuro_pneumo_uro.json",
    "kiika_cercle3_lot4_cloture.json",
    "kiika_cercle4_lot1_deuil.json",
    "kiika_cercle4_lot2_emotions_difficiles.json",
    "kiika_cercle4_lot3_relationnel_transitions.json",
    "kiika_cercle5_lot1_performance_sportive.json",
    "kiika_cercle5_lot2_performance_pro.json",
]

# Color by category prefix
COLOR_BY_CAT = {
    "Fondations / Induction": "#7C5CBF",
    "Fondations / Lieu ressource": "#2E8A7B",
    "Fondations / Approfondissement": "#7C5CBF",
    "Fondations / Dissociation": "#5B8FB9",
    "Fondations / Ancrage": "#C8A030",
    "Fondations / Retour": "#E08550",
    "Fondations / Post-hypnotique": "#C8A030",
    "Fondations / Clôture": "#E08550",
    # Anxiété
    "Anxiété / Rumination": "#7C5CBF",
    "Anxiété / Tolérance à l'incertitude": "#7C5CBF",
    "Anxiété / Phobie sociale": "#B85450",
    "Anxiété / Hypervigilance": "#B85450",
    "Anxiété / Phobie spécifique": "#B85450",
    "Anxiété / Régulation de base": "#2E8A7B",
    "Anxiété / Performance": "#C8A030",
    "Anxiété / Somatisation": "#5B8FB9",
    "Anxiété / Existentiel": "#7C5CBF",
    "Anxiété / Sollicitude": "#2E8A7B",
    "Anxiété / Anticipation": "#C8A030",
    "Anxiété / Médical": "#5B8FB9",
    "Anxiété / Attachement": "#7C5CBF",
    "Anxiété / Transport": "#B85450",
    "Anxiété / Crise aiguë": "#B85450",
}
DEFAULT_COLOR = "#7C5CBF"

# Motifs canoniques mapping by category prefix
def motifs_for(category, tags):
    cat = category.lower()
    motifs = []
    if "induction" in cat or "approfondissement" in cat or "lieu" in cat:
        motifs.append("Anxiété & stress")
    if "dissociation" in cat or "ancrage" in cat:
        motifs.append("Anxiété & stress")
    if "retour" in cat or "post-hypnotique" in cat or "clôture" in cat or "clôture" in cat:
        motifs.append("Anxiété & stress")
    if "anxi" in cat:
        motifs.append("Anxiété & stress")
        if "phobie" in cat:
            motifs.append("Phobies & peurs")
        if "performance" in cat:
            motifs.append("Performance & examens")
    if "sommeil" in cat:
        motifs.append("Sommeil & insomnie")
    if "douleur" in cat:
        motifs.append("Douleurs & psychosomatique")
    if "médical" in cat or "medical" in cat:
        motifs.append("Douleurs & psychosomatique")
        if "addiction" in cat:
            motifs.append("Addictions")
    if "performance" in cat:
        motifs.append("Performance & examens")
        if "burn-out" in cat or "burn" in cat:
            motifs.append("Burn-out & fatigue")
        if "procrastination" in cat or "motivation" in cat:
            motifs.append("Procrastination & motivation")
        if "confiance" in cat or "perfectionnisme" in cat:
            motifs.append("Estime & confiance en soi")
        if "blocage" in cat or "crise" in cat or "pression" in cat:
            motifs.append("Anxiété & stress")
        if "reconversion" in cat or "transition" in cat:
            motifs.append("Quête de sens & spiritualité")
    if "émotion" in cat or "motion" in cat:
        if "deuil" in cat or "perte" in cat:
            motifs.append("Trauma & deuil")
        if "estime" in cat or "imposture" in cat or "compétence" in cat:
            motifs.append("Estime & confiance en soi")
        if "relationnel" in cat or "blessure" in cat or "conflit" in cat or "ressentiment" in cat or "jalousie" in cat or "solitude" in cat:
            motifs.append("Conflits & communication")
        if "trauma" in cat or "enfance" in cat:
            motifs.append("Trauma & deuil")
        if "sens" in cat or "existentiel" in cat:
            motifs.append("Quête de sens & spiritualité")
        if "anxiété" in cat or "anxiete" in cat or "surcharge" in cat or "contrôle" in cat or "controle" in cat:
            motifs.append("Anxiété & stress")
        if "dépressif" in cat or "depressif" in cat or "motivation" in cat:
            motifs.append("Burn-out & fatigue")
        if not [m for m in motifs if m]:
            motifs.append("Estime & confiance en soi")
    return list(set(motifs)) or ["Anxiété & stress"]

# Niveau mapping
NIVEAU_MAP = {
    "débutant": "Débutant",
    "débutant": "Débutant",
    "intermédiaire": "Intermédiaire",
    "intermédiaire": "Intermédiaire",
    "avancé": "Avancé",
    "avancé": "Avancé",
}

def ts_str(s):
    """Convert string to TypeScript-safe string literal."""
    return json.dumps(s, ensure_ascii=False)

def sql_str(s):
    """Convert string to SQL-safe string (single quotes doubled)."""
    return s.replace("'", "''")

def sql_array(items):
    """Convert list to SQL ARRAY[...] syntax."""
    return "ARRAY[" + ", ".join("'" + sql_str(s) + "'" for s in items) + "]"

# Load all protocols
all_protocols = []
for fname in FILES:
    path = os.path.join(SOURCE_DIR, fname)
    d = json.load(open(path, encoding='utf-8'))
    for p in d['protocoles']:
        all_protocols.append(p)

print(f"Loaded {len(all_protocols)} protocols")

# Generate SQL seed
sql_lines = [
    "-- Seed protocoles KIIKA Hammond (fiches détaillées Varinka Robert)",
    "-- IDs : 600-792 (193 protocoles) — Cercles 1+2+3+4+5",
    "-- Source : KIIKA v3 — fiches détaillées par lot (Noyau / Anxiété-Sommeil-Douleur / Médical-Somatique / Émotionnel-Relationnel / Performance)",
    "",
    "INSERT INTO public.protocols (id, name, category, practice, description, duration, level, tags, color, sessions, objectives, source, motifs)",
    "VALUES",
]
seed_rows = []
for idx, p in enumerate(all_protocols):
    db_id = 600 + idx
    name = p['titre']
    category = "KIIKA — " + p['categorie'].split(" / ", 1)[-1] if " / " in p['categorie'] else "KIIKA — " + p['categorie']
    description = p['description_courte']
    duration = f"{p['duree_seance_estimee_min']} min"
    niveau_raw = p.get('niveau_expertise_requis', 'intermédiaire').lower()
    niveau = NIVEAU_MAP.get(niveau_raw, "Intermédiaire")
    tags = p.get('tags', [])[:7]
    color = COLOR_BY_CAT.get(p['categorie'], DEFAULT_COLOR)
    sessions = 1
    # Objectives = leviers + mots_valeurs
    leviers = p.get('structure_technique', {}).get('leviers', [])
    objectives = leviers[:5] if leviers else ["Travail thérapeutique structuré"]
    motifs = motifs_for(p['categorie'], tags)

    row = f"""  ({db_id},
   '{sql_str(name)}',
   '{sql_str(category)}',
   'Hypnose Ericksonienne',
   '{sql_str(description)}',
   '{sql_str(duration)}',
   '{niveau}',
   {sql_array(tags)},
   '{color}',
   {sessions},
   {sql_array(objectives)},
   'KIIKA — Fiches détaillées (Varinka Robert) — {sql_str(p['id'])}',
   {sql_array(motifs)}
  )"""
    seed_rows.append(row)

sql_lines.append(",\n".join(seed_rows))
sql_lines.append("""ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  category = EXCLUDED.category,
  practice = EXCLUDED.practice,
  description = EXCLUDED.description,
  duration = EXCLUDED.duration,
  level = EXCLUDED.level,
  tags = EXCLUDED.tags,
  color = EXCLUDED.color,
  sessions = EXCLUDED.sessions,
  objectives = EXCLUDED.objectives,
  source = EXCLUDED.source,
  motifs = EXCLUDED.motifs;""")

with open(SQL_OUT, 'w', encoding='utf-8') as f:
    f.write("\n".join(sql_lines))
print(f"Wrote {SQL_OUT} ({len(seed_rows)} rows)")

# Generate TS detail file
ts_lines = [
    'import type { ProtocolDetail } from "./types";',
    '',
    '/**',
    ' * Fiches détaillées KIIKA Hammond (IDs 600-792) — remplacent les anciens Hammond.',
    ' * Source : Varinka Robert — fiches KIIKA v3 (Cercles 1+2+3+4+5).',
    ' * 193 protocoles avec scripts complets, structure technique, dimensions KIIKA.',
    ' */',
    '',
]

for idx, p in enumerate(all_protocols):
    db_id = 600 + idx
    name = p['titre']
    category = p['categorie']
    description = p['description_courte']
    duration_min = p.get('duree_seance_estimee_min', 30)
    color = COLOR_BY_CAT.get(category, DEFAULT_COLOR)

    # Steps from script phases
    script = p.get('script', {})
    steps = []
    for phase_key, phase_text in script.items():
        # Convert phase_accueil → "Accueil", phase_respiration → "Respiration"
        label = phase_key.replace('phase_', '').replace('_', ' ').title()
        steps.append((label, phase_text))
    if not steps:
        steps.append(("Travail thérapeutique", description))

    # Outils from leviers + mots_valeurs_kiika
    structure = p.get('structure_technique', {})
    leviers = structure.get('leviers', [])
    mots_valeurs = structure.get('mots_valeurs_kiika', [])
    type_tech = structure.get('type', 'Technique')

    outils = []
    for lev in leviers[:3]:
        outils.append((lev, "Levier", "🎯", type_tech))
    for mot in mots_valeurs[:2]:
        outils.append((mot, "Valeur KIIKA", "✨", "Mot-clé thérapeutique"))
    if not outils:
        outils.append(("Approche structurée", "Méthode", "📋", "Protocole KIIKA v3"))

    # Stats from kiika_dimensions
    dims = p.get('kiika_dimensions', {})
    stats = []
    if dims:
        # Niveau global
        stats.append((str(duration_min) + ' min', "Durée séance", "estimation", color))
        for axis, val in list(dims.items())[:3]:
            stats.append((str(val) + '/3', "Dim. " + axis.title(), "KIIKA v3", "#C8A030"))
    else:
        stats.append((str(duration_min) + ' min', "Durée", "estimation", color))
        stats.append(("KIIKA", "Format", "v3", "#C8A030"))

    # Croyances limitantes (placeholder structuré)
    cat_short = category.split(" / ", 1)[-1].lower() if " / " in category else category.lower()
    croyances = [
        f"Je ne peux pas mobiliser cette approche sur moi-même",
        f"Le travail sur {cat_short} ne fonctionne pas pour moi",
    ]

    # Indications / contre-indications
    indications = p.get('indications', [])[:5] or ["Travail thérapeutique structuré"]
    contraind = p.get('contre_indications', [])[:5] or ["Pathologie psychiatrique sévère non stabilisée"]

    # Build TypeScript
    steps_ts = ",\n      ".join([
        f"{{ label: {ts_str(label)}, detail: {ts_str(detail)} }}"
        for (label, detail) in steps
    ])
    outils_ts = ",\n    ".join([
        f"{{ name: {ts_str(n)}, type: {ts_str(t)}, icon: {ts_str(i)}, desc: {ts_str(d)} }}"
        for (n, t, i, d) in outils
    ])
    stats_ts = ",\n    ".join([
        f"{{ val: {ts_str(v)}, label: {ts_str(l)}, sub: {ts_str(s)}, color: {ts_str(c)} }}"
        for (v, l, s, c) in stats
    ])
    indications_ts = ", ".join(ts_str(i) for i in indications)
    contraind_ts = ", ".join(ts_str(c) for c in contraind)
    croyances_ts = ", ".join(ts_str(c) for c in croyances)

    ts_lines.append(f"""const k_{db_id}: ProtocolDetail = {{
  protocolId: {db_id},
  efficacite: "KIIKA",
  efficaciteSub: {ts_str(category)},
  description: {ts_str(description)},
  indications: [{indications_ts}],
  contraindications: [{contraind_ts}],
  programs: [{{
    id: "principal",
    title: {ts_str(name)},
    icon: "◑",
    duration: {ts_str(str(duration_min) + ' min')},
    color: {ts_str(color)},
    recommended: true,
    description: {ts_str("Protocole KIIKA v3 — " + name)},
    seances: [{{
      num: 1,
      title: "Phases du protocole",
      steps: [
      {steps_ts}
      ],
    }}],
  }}],
  outils: [
    {outils_ts}
  ],
  stats: [
    {stats_ts}
  ],
  croyances: [{croyances_ts}],
}};
""")

# Export aggregator
ts_lines.append("export const kiikaHammondDetails: Record<number, ProtocolDetail> = {")
for idx in range(len(all_protocols)):
    db_id = 600 + idx
    ts_lines.append(f"  {db_id}: k_{db_id},")
ts_lines.append("};")

with open(TS_OUT, 'w', encoding='utf-8') as f:
    f.write("\n".join(ts_lines))
print(f"Wrote {TS_OUT} ({len(all_protocols)} fiches)")
