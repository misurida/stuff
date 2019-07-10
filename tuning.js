const tuning = [{
    type: "structure",
    short: "S1",
    mincat: 1,
    name: "Structure (métal)",
    material: "structure1",
    p: 100
},{
    type: "structure",
    short: "S2",
    mincat: 1,
    name: "Structure (plastique)",
    material: "structure2",
    p: 80
},{
    type: "structure",
    short: "S3",
    mincat: 1,
    name: "Structure (bois)",
    material: "structure3",
    p: 50
},{
    name: "Patin",
    short: "X",
    mincat: 1,
    type: "structure",
    material: "hardmat",
    p: 15
},{
    name: "Roues",
    short: "W",
    mincat: 2,
    type: "structure",
    material: "hardmat_steel",
    p: 20
},{
    name: "Sellerie",
    short: "S",
    mincat: 3,
    material: "softmat",
    type: "structure",
    p: 10
},{
    name: "Moteur",
    short: "E",
    mincat: 5,
    material: null,
    type: "structure",
    p: 10
},{
    name: "Phares",
    short: "L",
    mincat: 5,
    material: null,
    type: "structure",
    p: 5
},{
    name: "Vitres teintées",
    short: "G",
    mincat: 5,
    material: "color",
    type: "structure",
    p: 5
},{
    name: "Volant / Guidon",
    short: "O",
    mincat: 5,
    material: "hardmat",
    type: "structure",
    p: 2
},{
    name: "Carrosserie",
    short: "B",
    mincat: 5,
    material: "hardmat_steel",
    type: "structure",
    p: 30
},{
    name: "Pot d'échapement",
    short: "Y",
    mincat: 5,
    material: null,
    type: "structure",
    p: 10
},{
    name: "Jantes",
    short: "R",
    mincat: 5,
    material: "hardmat_precious",
    type: "structure",
    p: 10
},{
    name: "Intérieur",
    short: "I",
    mincat: 6,
    material: "any",
    type: "structure",
    p: 20
},{
    name: "Portes",
    short: "D",
    mincat: 6,
    material: null,
    type: "structure",
    p: 10
},{
    name: "Pare-buffle",
    short: "Z",
    mincat: 7,
    material: "hardmat",
    type: "structure",
    p: 5
},{
    name: "Chenilles",
    short: "T",
    mincat: 5,
    material: null,
    type: "structure",
    p: 25
},{
    name: "Submersible",
    short: "U",
    mincat: 9,
    material: null,
    type: "structure",
    p: 10
},{
    name: "Coussin d'air",
    short: "A",
    mincat: 9,
    material: null,
    type: "structure",
    p: 20
},{
    name: "Bras mécanique",
    short: "M",
    mincat: 11,
    material: null,
    type: "structure",
    p: 50
},{
    name: "Turbines",
    short: "P",
    mincat: 12,
    material: null,
    type: "structure",
    p: 25
},{
    name: "Carrosserie blindée",
    short: null,
    mincat: 13,
    material: "reinforced_steel",
    type: "structure",
    p: 10
},{
    name: "Vitres blindée",
    short: null,
    mincat: 13,
    material: "reinforced_glass",
    type: "structure",
    p: 10
},{
    name: "Fond blindée",
    short: null,
    mincat: 13,
    material: "reinforced_steel",
    type: "structure",
    p: 10
},{
    name: "Grille d'habitacle",
    short: null,
    mincat: 13,
    material: "hardmat_steel",
    type: "structure",
    p: 5
},{
    name: "Poutres de renfort",
    short: null,
    mincat: 13,
    material: "hardmat_steel",
    type: "structure",
    p: 5
},{
    name: "Harpon",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Mitrailleuse",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Lance-missile",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Lance-flamme",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Lance à eau",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Emetteur de décharge IEM",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 20
},{
    name: "Canon",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Lance-grenades",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Fumigènes défensives",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Lames circulaires",
    short: null,
    mincat: null,
    material: null,
    type: "weapon",
    p: 10
},{
    name: "Brouilleur de communications",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Radio satellite",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Treuil",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Parachute",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Siège éjectable",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Equipement médical",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Electro-aimant",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Equipement de sécurité",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Caméras",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Gyrophare",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Electronique (son)",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Electronique (embarqué)",
    short: null,
    mincat: null,
    material: null,
    type: "tools",
    p: 5
},{
    name: "Bas de caisse",
    short: null,
    mincat: 6,
    material: null,
    type: "style",
    p: 5
},{
    name: "Néons",
    short: null,
    mincat: null,
    material: null,
    type: "style",
    p: 5
},{
    name: "Ailerons",
    short: null,
    mincat: null,
    material: null,
    type: "style",
    p: 5
},{
    name: "Aérations",
    short: null,
    mincat: null,
    material: null,
    type: "style",
    p: 5
},{
    name: "Suspensions",
    short: null,
    mincat: 2,
    material: null,
    type: "style",
    p: 5
},{
    name: "Spoiler",
    short: null,
    mincat: 2,
    material: null,
    type: "style",
    p: 5
},{
    name: "Nitro",
    short: null,
    mincat: 6,
    material: null,
    type: "tools",
    p: 5
}];