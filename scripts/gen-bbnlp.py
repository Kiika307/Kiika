#!/usr/bin/env python3
"""Generate BBNLP detail fiches as TypeScript files from JSON data."""
import json
from collections import defaultdict

with open('/tmp/bbnlp.json', encoding='utf-8') as f:
    data = json.load(f)

tools_by_cat = {
    'Objectifs & motivation': [
        ('Critères SMART', 'Cadre', '🎯', "Objectif structuré."),
        ('Cadre objectif EP/ED/ECO', 'Modèle', '🗺', "État présent / désiré / optimal."),
        ('Vérification écologique', 'Sécurité', '♻', "Compatibilité globale."),
    ],
    'États & ancrage': [
        ('Ancrage VAK', 'PNL', '📍', "Multimodal."),
        ('Calibration externe', 'Observation', '👁', "Micro-changements."),
        ('Sous-modalités', 'Modulation', '🎚', "Brillance, taille, distance."),
    ],
    'Communication & rapport': [
        ('Synchronisation', 'Posture', '🔄', "Posture, rythme, langage."),
        ('Méta-modèle', 'Linguistique', '🔍', "Questionnement précis."),
        ('Pacing & leading', 'Technique', '🤝', "Suivre puis guider."),
    ],
    'Peurs & phobies': [
        ('Double dissociation', 'PNL', '🎬', "Cinéma sécurisé."),
        ('Désensibilisation', 'Hypnose', '🌸', "Progressive."),
        ('Échelle SUDS', 'Évaluation', '📏', "Mesure 0-10."),
    ],
    'Croyances': [
        ('Méta-modèle', 'Linguistique', '🔍', "Questionnement."),
        ('Sous-modalités', 'PNL', '🎚', "Modulation."),
        ('Pont sur le futur', 'Vérification', '🌉', "Application."),
    ],
    'Recadrage': [
        ('Recadrage de sens', 'Linguistique', '💭', "Changement de signification."),
        ('Recadrage de contexte', 'Linguistique', '🔄', "Changement de cadre."),
        ('Intention positive', 'PNL', '💡', "Sous-jacente."),
    ],
    'Confiance & identité': [
        ('Niveaux logiques Dilts', 'Modèle', '🔺', "6 niveaux."),
        ("Cercle d'excellence", 'PNL', '🔵', "Ressources empilées."),
        ('Ancrage identitaire', 'PNL', '📍', "Permanent."),
    ],
    'Parts internes': [
        ('Signaling idéomoteur', 'Communication', '🤲', "OUI/NON."),
        ('Recadrage 6 étapes', 'PNL', '🔄', "Avec partie."),
        ('Vérification écologique', 'Sécurité', '♻', "Autres parties."),
    ],
    'Apprentissage & modélisation': [
        ('Modèle TOTE', 'Référence', '🔁', "Test-Operate-Test-Exit."),
        ('Capture VAKOG', 'Technique', '🎬', "Séquentielle."),
        ('Transfert contextuel', 'Application', '📦', "Autres domaines."),
    ],
    'Alignement & transitions': [
        ('Niveaux logiques', 'Modèle', '🔺', "Alignement."),
        ('Ligne du temps', 'PNL', '⏰', "Passé/présent/futur."),
        ('Vérification écologique', 'Sécurité', '♻', "Système global."),
    ],
    'Langage & hypnose': [
        ('Patterns Milton', 'Linguistique', '💬', "Vague et permissif."),
        ('Pacing & leading', 'Technique', '🤝', "Suivre puis guider."),
        ('Suggestions post-hypnotiques', 'PNL', '🎯', "Activation différée."),
    ],
    'Meta-Programs': [
        ('Cartographie MP', 'Diagnostic', '📋', "Profil PNL."),
        ('Adaptation', 'Application', '🎯', "Communication ajustée."),
    ],
}

def steps_for(p):
    name = p['name']
    desc = p['description']
    return [
        ('Cadrage', f"Identifier précisément la situation/objectif visé. {desc}"),
        ('Calibration initiale', "Établir l'état présent (EP) du client : sensations, pensées, comportements observables."),
        ('Mise en œuvre', f"Application structurée de la technique « {name} » selon le protocole BBNLP."),
        ('Test & ajustement', "Vérification du changement par calibration. Ajustement si nécessaire."),
        ('Pont sur le futur', "Visualisation d'une situation future où le changement sera mobilisé. Ancrage."),
    ]

def stats_for(p):
    return [
        (p['level'][:8], 'Niveau', 'BBNLP', '#7C5CBF'),
        ('5', 'Étapes', 'protocole structuré', '#C8A030'),
    ]

def croyances_for(p):
    return [
        f"Je ne peux pas mobiliser « {p['name']} » sur moi",
        "Les techniques PNL sont théoriques",
    ]

def gen_fiche(p):
    cat = p['category']
    tools = tools_by_cat.get(cat, [])
    tools_code = ',\n    '.join([
        f'{{ name: {json.dumps(t[0], ensure_ascii=False)}, type: {json.dumps(t[1], ensure_ascii=False)}, icon: {json.dumps(t[2], ensure_ascii=False)}, desc: {json.dumps(t[3], ensure_ascii=False)} }}'
        for t in tools
    ])
    steps = steps_for(p)
    steps_code = ',\n      '.join([
        f'{{ label: {json.dumps(s[0], ensure_ascii=False)}, detail: {json.dumps(s[1], ensure_ascii=False)} }}'
        for s in steps
    ])
    stats = stats_for(p)
    stats_code = ',\n    '.join([
        f'{{ val: {json.dumps(s[0], ensure_ascii=False)}, label: {json.dumps(s[1], ensure_ascii=False)}, sub: {json.dumps(s[2], ensure_ascii=False)}, color: {json.dumps(s[3], ensure_ascii=False)} }}'
        for s in stats
    ])
    croy = croyances_for(p)
    croy_code = ', '.join([json.dumps(c, ensure_ascii=False) for c in croy])
    desc = json.dumps(p['description'], ensure_ascii=False)
    name_lit = json.dumps(p['name'], ensure_ascii=False)
    color = p['color']
    level = p['level']
    return f"""const p_{p['id']}: ProtocolDetail = {{
  protocolId: {p['id']}, efficacite: "BBNLP", efficaciteSub: {json.dumps(cat, ensure_ascii=False)},
  description: {desc},
  indications: ["Pratique PNL niveau {level}", {json.dumps('Travail structuré sur ' + cat.lower(), ensure_ascii=False)}],
  contraindications: ["Crise psychiatrique aiguë", "Manque de coopération du client"],
  programs: [{{
    id: "principal", title: {name_lit}, icon: "◑",
    duration: "45-60 min", color: "{color}", recommended: true,
    description: "Protocole BBNLP — " + {name_lit} + ".",
    seances: [{{ num: 1, title: "Étapes du protocole", steps: [
      {steps_code}
    ] }}],
  }}],
  outils: [
    {tools_code}
  ],
  stats: [
    {stats_code}
  ],
  croyances: [{croy_code}],
}};"""

cats = defaultdict(list)
for p in data:
    cats[p['category']].append(p)

batches = [
    ('1', ['Objectifs & motivation', 'États & ancrage', 'Communication & rapport']),
    ('2', ['Peurs & phobies', 'Croyances', 'Recadrage']),
    ('3', ['Confiance & identité', 'Parts internes', 'Apprentissage & modélisation']),
    ('4', ['Alignement & transitions', 'Langage & hypnose', 'Meta-Programs']),
]
for batch_num, cat_list in batches:
    code = ['import type { ProtocolDetail } from "./types";', '']
    code.append('/** Big Book of NLP — ' + ', '.join(cat_list) + ' */')
    code.append('')
    ids = []
    for cat in cat_list:
        for p in cats[cat]:
            code.append(gen_fiche(p))
            code.append('')
            ids.append(p['id'])
    code.append(f'export const bbnlp{batch_num}Details: Record<number, ProtocolDetail> = {{')
    code.extend([f'  {i}: p_{i},' for i in ids])
    code.append('};')
    out = '\n'.join(code)
    fname = f'src/lib/protocol-details-bbnlp-{batch_num}.ts'
    with open(fname, 'w', encoding='utf-8') as f:
        f.write(out)
    print(f'bbnlp_{batch_num}.ts: {len(ids)} fiches, {len(out)} chars, {out.count(chr(10))} lines')
