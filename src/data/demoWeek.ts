export interface DayStatus {
  id: string;
  dayName: "Luni" | "Marți" | "Miercuri" | "Joi" | "Vineri";
  dateFormatted: string;
  status: "Pregătită" | "De pregătit" | "Neîncepută";
  statusColor: "green" | "yellow" | "gray";
  theme: string;
  subtheme: string;
  adeDomain: string;
  adeTitle: string;
}

export const mockWeekDays: DayStatus[] = [
  {
    id: "day-1",
    dayName: "Luni",
    dateFormatted: "12 Octombrie",
    status: "Pregătită",
    statusColor: "green",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
    adeDomain: "DLC (Domeniul Limbă și Comunicare)",
    adeTitle: "Convorbire: 'Coșul Toamnei plin cu bunătăți'",
  },
  {
    id: "day-2",
    dayName: "Marți",
    dateFormatted: "13 Octombrie",
    status: "Pregătită",
    statusColor: "green",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
    adeDomain: "DȘ (Domeniul Științe - Matematică)",
    adeTitle: "Joc didactic: 'Formăm perechi de mere și pere'",
  },
  {
    id: "day-3",
    dayName: "Miercuri",
    dateFormatted: "14 Octombrie",
    status: "De pregătit",
    statusColor: "yellow",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
    adeDomain: "DEC (Domeniul Estetic și Creativ)",
    adeTitle: "Pictură: 'Mere roșii și parfumate'",
  },
  {
    id: "day-4",
    dayName: "Joi",
    dateFormatted: "15 Octombrie",
    status: "Neîncepută",
    statusColor: "gray",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
    adeDomain: "DOS (Domeniul Om și Societate)",
    adeTitle: "Activitate practică: 'Salată din fructe de toamnă'",
  },
  {
    id: "day-5",
    dayName: "Vineri",
    dateFormatted: "16 Octombrie",
    status: "Neîncepută",
    statusColor: "gray",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
    adeDomain: "DPM (Domeniul Psihomotric)",
    adeTitle: "Joc de mișcare: 'Culegătorii iscusiți de fructe'",
  },
];

export interface FullDayPackage {
  gradeLevel: string;
  theme: string;
  subtheme: string;
  date: string;
  adpMorningMeeting: {
    greeting: string;
    presence: string;
    calendar: string;
    newsOfDay: string;
    selActivity: string;
  };
  adePlan: {
    title: string;
    domain: string;
    type: string;
    realizationMeans: string;
    objectives: {
      cognitive: string[];
      psychomotor: string[];
      socioAffective: string[];
    };
    materials: string[];
    stepsTable: Array<{
      step: string;
      teacherActivity: string;
      childrenActivity: string;
      evaluation: string;
    }>;
  };
  ala1Centers: Array<{
    center: "Bibliotecă" | "Artă" | "Știință" | "Construcții" | "Joc de Rol";
    icon: string;
    task: string;
    materials: string;
  }>;
  ala2Games: Array<{
    title: string;
    type: string;
    description: string;
  }>;
  adpTransitions: string[];
  worksheetData: {
    title: string;
    instructions: string;
    tasks: string[];
    performanceDescriptors: {
      sufficient: string;
      good: string;
      veryGood: string;
    };
  };
  condicaSummary: {
    interval: string;
    activitySummary: string;
    observations: string;
  };
}

export const sampleGeneratedDay: FullDayPackage = {
  gradeLevel: "Grupa Mare (5-6 ani)",
  theme: "Când, cum și de ce se întâmplă?",
  subtheme: "Bogațiile Toamnei - Fructe dulci și zemoase",
  date: "Luni, 12 Octombrie 2026",
  adpMorningMeeting: {
    greeting: "Bună dimineața, mici exploratori ai toamnei! Astăzi ne zâmbește soarele cald de toamnă și ne primește cu miros de fructe copt!",
    presence: "Copiii își așază jetoanele personalizate cu fructul preferat la panoul de prezență. Se contorizează fetele și băieții.",
    calendar: "Stabilirea zilei din săptămână, a lunii (octombrie), a anotimpului (toamna) și selectarea simbolului meteo corespunzător.",
    newsOfDay: "O scrisoare misterioasă de la Ursulețul Mimo, care a adus la grupă un coș plin cu mere, pere și struguri pârguți.",
    selActivity: "'Roata Stărilor mele de toamnă' - Fiecare copil exprimă cum se simte astăzi raportându-se la mascotele EduZori.",
  },
  adePlan: {
    title: "Coșul Toamnei plin cu bunătăți",
    domain: "DLC - Domeniul Limbă și Comunicare",
    type: "Consolidare de cunoștințe și dezvoltare a limbajului",
    realizationMeans: "Lectură după imagini & Convorbire didactică",
    objectives: {
      cognitive: [
        "să denumească corect cel puțin 3 fructe de toamnă reprezentate în imagini;",
        "să formuleze propoziții simple și dezvoltate corecte din punct de vedere gramatical;",
        "să descrie forma, culoarea și gustul fructelor analizate."
      ],
      psychomotor: [
        "să mânuiască corespunzător jetoanele și planșele ilustrate în timpul activității."
      ],
      socioAffective: [
        "să manifeste spirit de cooperare și să își aștepte rândul la răspuns."
      ]
    },
    materials: ["Coș cu fructe naturale", "Planșe didactice A3", "Jetoane cu fructe", "Ursulețul Mimo (mascotă pluş)"],
    stepsTable: [
      {
        step: "1. Captarea atenției",
        teacherActivity: "Prezintă coșul acoperit cu o maramă de toamnă și le citește copiilor ghicitoarea trimisă de Ursulețul Mimo.",
        childrenActivity: "Ascultă cu interes ghicitoarea și descoperă fructele ascunse sub șervet.",
        evaluation: "Aprecierea verbală a interesului manifestat."
      },
      {
        step: "2. Anunțarea temei",
        teacherActivity: "Comunică pe înțelesul copiilor tema activității: observarea și descrierea fructelor de toamnă.",
        childrenActivity: "Rețin tema și sunt pregătiți pentru explorare.",
        evaluation: "Observarea capacității de concentrare."
      },
      {
        step: "3. Dirijarea învățării",
        teacherActivity: "Guidează analiza fiecărei planșe adresând întrebări țintite: 'Ce fruct este acesta?', 'Ce culoare are marul?', 'Unde crește parul?'",
        childrenActivity: "Răspund în propoziții complete, identifică detaliile specifice fiecărui fruct și le compară.",
        evaluation: "Corectitudinea formulării propozițiilor și precizia vocabularului."
      },
      {
        step: "4. Obținerea performanței",
        teacherActivity: "Propune jocul 'Ghicește fructul legat la ochi' (prin pipăit și miros).",
        childrenActivity: "Participă activ, recunosc fructul după miros și formă și îi spun denumirea.",
        evaluation: "Măsurarea gradului de atingere a obiectivelor."
      },
      {
        step: "5. Încheierea activității",
        teacherActivity: "Face aprecieri generale și individuale, oferind copiilor stimulente cu ecusoane EduZori (Ursuțul Mimo).",
        childrenActivity: "Primește ecusonul și mulțumește.",
        evaluation: "Autoevaluare și stimulare afectivă."
      }
    ]
  },
  ala1Centers: [
    {
      center: "Bibliotecă",
      icon: "BookOpen",
      task: "Răsfoim albume cu livezi de toamnă și trasăm linii de contur peste fructele preferate.",
      materials: "Albume tematice, fișe contur, carioci colorate."
    },
    {
      center: "Artă",
      icon: "Palette",
      task: "Modelăm mere și pere din plastilină parfumată și le așezăm în lădițe din carton.",
      materials: "Plastilină roșie/galbenă/verde, planșete, lădițe miniaturale."
    },
    {
      center: "Știință",
      icon: "Microscope",
      task: "Sortăm sâmburii și semințele de fructe după mărime și formă folosind lupe.",
      materials: "Semințe de măr, pară, prună, tăvițe, lupe."
    },
    {
      center: "Construcții",
      icon: "Boxes",
      task: "Construim din cuburi de lemn 'Camionul care transportă fructele la piață'.",
      materials: "Cuburi de lemn, mașinuțe, lăzi miniaturale."
    },
    {
      center: "Joc de Rol",
      icon: "Users",
      task: "'De-a gospodinele': Pregătim compoturi și gem de fructe fanteziste.",
      materials: "Borcane din plastic, șorțulețe, fructe din meci plastic."
    }
  ],
  ala2Games: [
    {
      title: "Joc de mișcare: 'Culegătorii iscusiți'",
      type: "Joc de mișcare și îndemânare",
      description: "Copiii sunt împărțiți în două echipe și trebuie să transporte mere pe o lingură de lemn ocolind jaloanele."
    },
    {
      title: "Joc liniștitor: 'Prinse în horă, fructele se odihnesc'",
      type: "Joc de relaxare și autocontrol",
      description: "Copiii se prind de mâini, execută mișcări ușoare de respirație și simulează căderea frunzelor de toamnă."
    }
  ],
  adpTransitions: [
    "Cântecel: 'Mărul roșu și gustos, / Se rostogolește jos! / Ne spălăm pe mâini acum, / La măsuțe să pornim!'",
    "Rimă de tranziție: 'Strângem centrele cu drag, / Ursulețul e în prag! / Unu, doi, trei, patru, cinci, / Să fim harnici și cumsecade aici!'",
    "Gimnastică de înviorare: 'Bate vântul frunzele, / Învârte moriștile, / Noi la măsuțe ne așezăm / Și la masă mâncăm!'"
  ],
  worksheetData: {
    title: "Fișă de Lucru Integrată: Povestea Merelor Colorate",
    instructions: "Colorează merele mari cu roșu și merele mici cu galben. Unește cu o linie fructul cu umbra lui corespunzătoare.",
    tasks: [
      "Identificarea marimilor (mare / mic)",
      "Exercitii de trasare linii drepte verticale",
      "Numărarea fructelor din fiecare mulțime"
    ],
    performanceDescriptors: {
      sufficient: "Identifică cel puțin un măr mare și trasează o linie de unire.",
      good: "Identifică corect dimensiunile și unește 2 din 3 fructe cu umbra lor.",
      veryGood: "Completează toate cerințele impecabil, colorând în interiorul conturului."
    }
  },
  condicaSummary: {
    interval: "08:00 - 12:30",
    activitySummary: "ADP: Întâlnirea de dimineață 'Coșul Toamnei', Rutine, Tranziții. ADE: DLC - Lectură după imagini 'Coșul Toamnei'. ALA1: B ('Răsfoim albume'), A ('Modelăm mere'), Ș ('Sortăm semințe'), C ('Camionul cu fructe'), JR ('De-a gospodinele'). ALA2: Joc de mișcare 'Culegătorii iscusiți'.",
    observations: "Toți copiii au participat cu entuziasm. Obiectivele au fost atinse în proporție de 95%."
  }
};
