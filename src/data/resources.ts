export interface Resource {
  id: string;
  title: string;
  description: string;
  level: "Grădiniță" | "Clasa Pregătitoare" | "Clasa I" | "Clasa a II-a" | "Clasa a III-a" | "Clasa a IV-a";
  subLevel?: "Grupa Mică" | "Grupa Mijlocie" | "Grupa Mare" | "Toate";
  category: "DLC" | "DȘ" | "DOS" | "DEC" | "DPM" | "CLR" | "MEM" | "AVAP" | "DP" | "Altele";
  categoryLabel: string;
  type: "Fișă de lucru" | "Planificare" | "Planșe / Flashcards" | "Ghid didactic" | "Joc educațional";
  format: string; // e.g. "PDF Printabil, A4"
  pageCount: number;
  tags: string[]; // e.g. ["Toamnă", "Crăciun", "Abecedar", "Cifre"]
  imageUrls: string[]; // mock image descriptions or inline SVG placeholders
  isFree: boolean;
  includedItems: string[];
}

export const mockResources: Resource[] = [
  {
    id: "res-1",
    title: "Culorile Toamnei - Fișă de Lucru Grafomotrică",
    description: "O fișă de lucru captivantă destinată preșcolarilor pentru exersarea motricității fine. Copiii vor urmări traseul frunzelor de toamnă folosind culori calde.",
    level: "Grădiniță",
    subLevel: "Grupa Mare",
    category: "DLC",
    categoryLabel: "Domeniul Limbă și Comunicare",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 3,
    tags: ["Toamnă", "Grupa Mare", "DLC", "Grafomotricitate"],
    imageUrls: ["/assets/placeholder-fall-1.jpg", "/assets/placeholder-fall-2.jpg"],
    isFree: true,
    includedItems: ["3 Fișe grafomotrice cu grade diferite de dificultate", "Instrucțiuni scurte pentru educatori", "Recomandări de activități senzoriale conexe"]
  },
  {
    id: "res-2",
    title: "Detectivul de Cifre: Adunări vesele în intervalul 0-10",
    description: "Activitate interactivă de matematică și explorarea mediului (MEM) pentru clasa pregătitoare sau clasa I. Include exerciții vizuale cu fructe și legume.",
    level: "Clasa Pregătitoare",
    category: "MEM",
    categoryLabel: "Matematică și Explorarea Mediului",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 5,
    tags: ["MEM", "Cifre", "Matematică", "Numărătoare"],
    imageUrls: ["/assets/placeholder-math-1.jpg"],
    isFree: true,
    includedItems: ["4 Fișe de lucru color", "Barem de corectare rapidă pentru cadre didactice", "Diplomă de 'Detectiv de Cifre' printabilă"]
  },
  {
    id: "res-3",
    title: "Pachet Tematic: Vine Crăciunul! Activități integrate",
    description: "Un pachet complet de resurse educaționale pentru sărbătorile de iarnă, ideal pentru decorarea clasei, fișe de lectură și colinde ilustrate.",
    level: "Clasa I",
    category: "AVAP",
    categoryLabel: "Arte Vizuale și Abilități Practice",
    type: "Joc educațional",
    format: "PDF Printabil, A4",
    pageCount: 12,
    tags: ["Crăciun", "AVAP", "Iarnă", "Colinde", "Activitate integrată"],
    imageUrls: ["/assets/placeholder-christmas-1.jpg", "/assets/placeholder-christmas-2.jpg"],
    isFree: false,
    includedItems: ["Șabloane de tăiat și lipit (decorațiuni brad)", "Caiet de activități de 8 pagini", "Scrisoare către Moș Crăciun (șablon ghidat)", "Ghid pedagogic pentru cadrele didactice"]
  },
  {
    id: "res-4",
    title: "Sunetul și litera 'A' - Fișă de lectură și scriere",
    description: "Resursă didactică conform programei școlare pentru Comunicare în Limba Română (CLR). Exerciții de identificare a sunetului inițial și trasare a literei.",
    level: "Clasa Pregătitoare",
    category: "CLR",
    categoryLabel: "Comunicare în Limba Română",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 2,
    tags: ["CLR", "Sunetul A", "Abecedar", "Scriere"],
    imageUrls: ["/assets/placeholder-letter-a.jpg"],
    isFree: true,
    includedItems: ["Fișă de trasare litera A mare și a mic de tipar", "Activitate de colorat cu elemente care încep cu sunetul A", "Ghid de evaluare formativă"]
  },
  {
    id: "res-5",
    title: "Planificarea Anuală Integrată - Clasa a II-a (Model)",
    description: "Proiectarea didactică anuală completă pentru clasa a II-a, structurată pe module de învățare, respectând programa Ministerului Educației.",
    level: "Clasa a II-a",
    category: "Altele",
    categoryLabel: "Planificări Anuale",
    type: "Planificare",
    format: "DOCX / PDF Editabil",
    pageCount: 24,
    tags: ["Planificare", "Clasa a II-a", "Documente Școlare"],
    imageUrls: ["/assets/placeholder-planning.jpg"],
    isFree: false,
    includedItems: ["Tabel planificare pe module", "Sugestii de activități transcurriculare", "Bibliografie selectivă și resurse suport"]
  },
  {
    id: "res-6",
    title: "Școala Altfel: Exploratorii Naturii în Săptămâna Verde",
    description: "Ghid practic cu fișe de observație în natură, reguli de comportament ecologic și experimente simple cu plante și apă pentru învățământul primar.",
    level: "Clasa a III-a",
    category: "DOS",
    categoryLabel: "Domeniul Om și Societate / Științe",
    type: "Ghid didactic",
    format: "PDF Printabil, A4",
    pageCount: 8,
    tags: ["Săptămâna Verde", "Școala Altfel", "Natură", "Științe"],
    imageUrls: ["/assets/placeholder-green.jpg"],
    isFree: true,
    includedItems: ["Ghidul profesorului cu 5 activități de teren", "Fișă de observație a copacilor pentru elevi", "Chestionar ecologic de autoevaluare"]
  }
];

export const initialSavedIds = ["res-1", "res-4"];
