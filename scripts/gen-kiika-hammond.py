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
    "kiika_cercle6_lot1_pediatrie.json",
    "kiika_cercle6_lot2_perinatalite_sexologie.json",
    "kiika_cercle6_lot3_addictions.json",
    "kiika_cercle7_lot1_trauma_complexe.json",
    "kiika_cercle7_lot2_oncologie_palliatifs.json",
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
    if "pédiatrie" in cat or "pediatrie" in cat or "adolescent" in cat:
        if "sommeil" in cat:
            motifs.append("Sommeil & insomnie")
        if "anxi" in cat or "phobie" in cat:
            motifs.append("Anxiété & stress")
        if "estime" in cat or "mal-être" in cat or "corps" in cat:
            motifs.append("Estime & confiance en soi")
        if "examens" in cat:
            motifs.append("Performance & examens")
        if "harcèlement" in cat or "harcelement" in cat:
            motifs.append("Trauma & deuil")
        if "alimentation" in cat:
            motifs.append("Perte de poids & TCA")
        if not motifs:
            motifs.append("Anxiété & stress")
    if "périnatalité" in cat or "perinatalite" in cat or "sexologie" in cat:
        motifs.append("Couple & sexualité")
        if "post-partum" in cat or "grossesse" in cat or "accouchement" in cat or "pma" in cat or "conception" in cat:
            motifs.append("Trauma & deuil")
    if "addictions" in cat or "addiction" in cat:
        motifs.append("Addictions")
        if "alimentaire" in cat:
            motifs.append("Perte de poids & TCA")
    if "trauma" in cat or "espt" in cat or "flashback" in cat:
        motifs.append("Trauma & deuil")
        motifs.append("Anxiété & stress")
    if "troubles complexes" in cat:
        motifs.append("Anxiété & stress")
        if "dépression" in cat or "depression" in cat or "bipolarité" in cat or "bipolarite" in cat:
            motifs.append("Burn-out & fatigue")
        if "phobie sociale" in cat:
            motifs.append("Phobies & peurs")
        if "borderline" in cat or "tdi" in cat or "schizophrénie" in cat or "schizophrenie" in cat or "suicide" in cat:
            motifs.append("Trauma & deuil")
        if "toc" in cat:
            motifs.append("Anxiété & stress")
    if "oncologie" in cat or "soins palliatifs" in cat or "palliatifs" in cat or "neurodégénératif" in cat or "neurodegeneratif" in cat or "soins intensifs" in cat or "annonce" in cat:
        motifs.append("Douleurs & psychosomatique")
        motifs.append("Trauma & deuil")
        if "spiritualité" in cat or "spiritualite" in cat:
            motifs.append("Quête de sens & spiritualité")
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

# Load all protocols, tracking the cercle for ID assignment
all_protocols: list[tuple[int, dict]] = []  # (db_id, protocol)
next_id_for_cercle = {1: 600, 2: None, 3: None, 4: None, 5: None, 6: 1000, 7: 1040}

cur_id = next_id_for_cercle[1]
for fname in FILES:
    # Determine cercle from filename
    cercle = int(fname.split('cercle')[1].split('_')[0])
    if next_id_for_cercle.get(cercle) is not None:
        cur_id = next_id_for_cercle[cercle]
        # Lock-in: subsequent files of same cercle continue from here
        next_id_for_cercle[cercle] = None
    path = os.path.join(SOURCE_DIR, fname)
    d = json.load(open(path, encoding='utf-8'))
    for p in d['protocoles']:
        all_protocols.append((cur_id, p))
        cur_id += 1

print(f"Loaded {len(all_protocols)} protocols")
print(f"ID range: {all_protocols[0][0]} - {all_protocols[-1][0]}")

# Generate SQL seed
sql_lines = [
    "-- Seed protocoles KIIKA Hammond (fiches détaillées Varinka Robert)",
    "-- IDs : 600-792 + 1000-1069 (263 protocoles) — Cercles 1+2+3+4+5+6+7",
    "-- Source : KIIKA v3 — fiches détaillées par lot (Noyau / Anxiété-Sommeil-Douleur / Médical-Somatique / Émotionnel-Relationnel / Performance / Pédiatrie-Périnatalité-Addictions / Trauma-Oncologie-Palliatifs)",
    "",
    "INSERT INTO public.protocols (id, name, category, practice, description, duration, level, tags, color, sessions, objectives, source, motifs)",
    "VALUES",
]
seed_rows = []
for db_id, p in all_protocols:
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
    ' * Fiches détaillées KIIKA Hammond (IDs 600-792 + 1000-1069) — remplacent les anciens Hammond.',
    ' * Source : Varinka Robert — fiches KIIKA v3 (Cercles 1+2+3+4+5+6+7).',
    ' * 263 protocoles avec scripts complets, structure technique, dimensions KIIKA.',
    ' */',
    '',
]

for db_id, p in all_protocols:
    name = p['titre']
    category = p['categorie']
    description = p['description_courte']
    duration_min = p.get('duree_seance_estimee_min', 30)
    color = COLOR_BY_CAT.get(category, DEFAULT_COLOR)

    # Steps from script phases.
    # Cercle 1 fiches use `script:` (phase_accueil / phase_respiration / ...).
    # Cercle 2-7 fiches use `script_specifique:` (phase_reconnaissance /
    # phase_permission / ...). Both schemas are valid; merge them.
    script_phases = {}
    for key in ('script', 'script_specifique'):
        block = p.get(key) or {}
        if isinstance(block, dict):
            for k, v in block.items():
                if isinstance(v, str) and v.strip():
                    script_phases[k] = v

    # Optional: prepend the seance structure (high-level phase outline that
    # references K-BASE-xxx induction bricks) when present.
    structure_seance = p.get('structure_seance') or []
    if isinstance(structure_seance, list) and structure_seance:
        outline_text = "\n• ".join(s for s in structure_seance if isinstance(s, str))
        if outline_text:
            # Only prepend when we already have script phases (otherwise the
            # outline becomes the only step which is less useful).
            if script_phases:
                script_phases = {
                    "phase_structure_de_seance": "• " + outline_text,
                    **script_phases,
                }

    steps = []
    for phase_key, phase_text in script_phases.items():
        # Convert phase_accueil → "Accueil", phase_souffle_regulateur → "Souffle Régulateur"
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
for db_id, _ in all_protocols:
    ts_lines.append(f"  {db_id}: k_{db_id},")
ts_lines.append("};")

with open(TS_OUT, 'w', encoding='utf-8') as f:
    f.write("\n".join(ts_lines))
print(f"Wrote {TS_OUT} ({len(all_protocols)} fiches)")
