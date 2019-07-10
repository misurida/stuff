const tuning = [{
    type: "structure",
    short: "S1",
    mincat: 1,
    name: "Structure (métal)",
    material: "structure1"
},{
    type: "structure",
    short: "S2",
    mincat: 1,
    name: "Structure (plastique)",
    material: "structure2"
},{
    type: "structure",
    short: "S3",
    mincat: 1,
    name: "Structure (bois)",
    material: "structure3"
},{
    name: "Patin",
    short: "X",
    mincat: 1,
    type: "structure",
    material: "hardmat"
},{
    name: "Roues",
    short: "W",
    mincat: 2,
    type: "structure",
    material: "hardmat_steel"
},{
    name: "Sellerie",
    short: "S",
    mincat: 3,
    material: "softmat",
    type: "structure"
},{
    name: "Moteur",
    short: "E",
    mincat: 5,
    material: null,
    type: "structure"
},{
    name: "Phares",
    short: "L",
    mincat: 5,
    material: null,
    type: "structure"
},{
    name: "Vitres teintées",
    short: "G",
    mincat: 5,
    material: "color",
    type: "structure"
},{
    name: "Volant / Guidon",
    short: "O",
    mincat: 5,
    material: "hardmat",
    type: "structure"
},{
    name: "Carrosserie",
    short: "B",
    mincat: 5,
    material: "hardmat_steel",
    type: "structure"
},{
    name: "Pot d'échapement",
    short: "Y",
    mincat: 5,
    material: null,
    type: "structure"
},{
    name: "Jantes",
    short: "R",
    mincat: 5,
    material: "hardmat_precious",
    type: "structure"
},{
    name: "Intérieur",
    short: "I",
    mincat: 6,
    material: "any",
    type: "structure"
},{
    name: "Portes",
    short: "D",
    mincat: 6,
    material: null,
    type: "structure"
},{
    name: "Pare-buffle",
    short: "Z",
    mincat: 7,
    material: "hardmat",
    type: "structure"
},{
    name: "Chenilles",
    short: "T",
    mincat: 5,
    material: null,
    type: "structure"
},{
    name: "Submersible",
    short: "U",
    mincat: 9,
    material: null,
    type: "structure"
},{
    name: "Coussin d'air",
    short: "A",
    mincat: 9,
    material: null,
    type: "structure"
},{
    name: "Bras mécanique",
    short: "M",
    mincat: 11,
    material: null,
    type: "structure"
},{
    name: "Turbines",
    short: "P",
    mincat: 12,
    material: null,
    type: "structure"
},{
    name: "Carrosserie blindée",
    short: null,
    mincat: 13,
    material: "reinforced_steel",
    type: "structure"
},{
    name: "Vitres blindée",
    short: null,
    mincat: 13,
    material: "reinforced_glass",
    type: "structure"
},{
    name: "Fond blindée",
    short: null,
    mincat: 13,
    material: "reinforced_steel",
    type: "structure"
},{
    name: "Grille d'habitacle",
    short: null,
    mincat: 13,
    material: "hardmat_steel",
    type: "structure"
},{
    name: "Poutres de renfort",
    short: null,
    mincat: 13,
    material: "hardmat_steel",
    type: "structure"
},{
    name: "Harpon",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Mitrailleuse",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Lance-missile",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Lance-flamme",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Lance à eau",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Emetteur de décharge IEM",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Canon",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Lance-grenades",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Fumigènes défensives",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Lames circulaires",
    short: null,
    mincat: null,
    material: null,
    type: "weapon"
},{
    name: "Brouilleur de communications",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Radio satellite",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Treuil",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Parachute",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Siège éjectable",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Equipement médical",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Electro-aimant",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Equipement de sécurité",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Caméras",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Gyrophare",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Electronique (son)",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Electronique (embarqué)",
    short: null,
    mincat: null,
    material: null,
    type: "tools"
},{
    name: "Bas de caisse",
    short: null,
    mincat: 6,
    material: null,
    type: "style"
},{
    name: "Néons",
    short: null,
    mincat: null,
    material: null,
    type: "style"
},{
    name: "Ailerons",
    short: null,
    mincat: null,
    material: null,
    type: "style"
},,{
    name: "Aérations",
    short: null,
    mincat: null,
    material: null,
    type: "style"
},{
    name: "Suspensions",
    short: null,
    mincat: 2,
    material: null,
    type: "style"
},{
    name: "Spoiler",
    short: null,
    mincat: 2,
    material: null,
    type: "style"
},{
    name: "Nitro",
    short: null,
    mincat: 6,
    material: null,
    type: "tools"
}];