export interface Resource {
  id: string;
  title: string;
  description: string;
  level: "Grădiniță";
  subLevel: "Grupa Mică" | "Grupa Mijlocie" | "Grupa Mare" | "Toate Grupele";
  category: "DLC" | "DȘ" | "DOS" | "DEC" | "DPM" | "ALA1" | "ALA2" | "ADP" | "SEL";
  categoryLabel: string;
  type: "Fișă de lucru" | "Planificare" | "Planșe / Flashcards" | "Ghid didactic" | "Joc educațional";
  format: string; // e.g. "PDF Printabil, A4"
  pageCount: number;
  tags: string[];
  imageUrls: string[];
  isFree: boolean;
  downloadsCount: number;
  includedItems: string[];
}

export const mockResources: Resource[] = [
  {
    id: "res-1",
    title: "Culorile Toamnei - Fișă Grafomotrică Integrată",
    description: "Fișă de lucru captivantă destinată preșcolarilor pentru exersarea motricității fine. Copiii vor urmări traseul frunzelor de toamnă folosind culori calde și linii ondulate.",
    level: "Grădiniță",
    subLevel: "Grupa Mare",
    category: "DLC",
    categoryLabel: "Domeniul Limbă și Comunicare",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 3,
    tags: ["Toamnă", "Grupa Mare", "DLC", "Grafomotricitate", "Fructe"],
    imageUrls: ["/assets/resources/res-1.jpg"],
    isFree: true,
    downloadsCount: 1420,
    includedItems: ["3 Fișe grafomotrice cu grade diferite de dificultate", "Instrucțiuni scurte pentru educatori", "Recomandări de activități senzoriale conexe"]
  },
  {
    id: "res-2",
    title: "Forme Geometrici în Lumea Fructelor (DȘ - Matematică)",
    description: "Set de fise logico-matematice pentru recunoașterea și clasificarea cercului, pătratului și triunghiului prin asociere cu fructele de toamnă.",
    level: "Grădiniță",
    subLevel: "Grupa Mijlocie",
    category: "DȘ",
    categoryLabel: "Domeniul Științe (Matematică)",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 4,
    tags: ["DȘ", "Matematică", "Forme geometrice", "Toamnă"],
    imageUrls: ["/assets/resources/res-2.jpg"],
    isFree: true,
    downloadsCount: 980,
    includedItems: ["4 Fișe de lucru color", "Barem de evaluare formativă", "Joc secundar de sortare la centru"]
  },
  {
    id: "res-3",
    title: "Pachet Tematic SEL: Prietenul meu, Ursulețul Mimo",
    description: "Pachet integrat de dezvoltare socio-emoțională. Conține roata emoțiilor, fișe de recunoaștere a stărilor psihice și scenarii de joc de rol.",
    level: "Grădiniță",
    subLevel: "Toate Grupele",
    category: "SEL",
    categoryLabel: "Socio-Emoțional (ADP)",
    type: "Joc educațional",
    format: "PDF Printabil, A4",
    pageCount: 10,
    tags: ["SEL", "Socio-emoțional", "Empatie", "Rutine", "Mascote"],
    imageUrls: ["/assets/resources/res-3.jpg"],
    isFree: true,
    downloadsCount: 2310,
    includedItems: ["Roata Emoțiilor decupabilă", "6 Planșe A4 cu mascotele EduZori", "Scenarii de convorbire pentru Întâlnirea de Dimineață"]
  },
  {
    id: "res-4",
    title: "Planificarea Săptămânală: 'Cămara Toamnei' (OMEN 4694/2019)",
    description: "Model complet de proiectare didactică săptămânală integrată pentru Grupa Mare. Include obiective operaționale, ALA1, ALA2, ADE și ADP.",
    level: "Grădiniță",
    subLevel: "Grupa Mare",
    category: "ADP",
    categoryLabel: "Planificare Curriculară",
    type: "Planificare",
    format: "DOCX / PDF Editabil",
    pageCount: 6,
    tags: ["Planificare", "Curriculum 2019", "Grupa Mare", "Toamnă"],
    imageUrls: ["/assets/resources/res-4.jpg"],
    isFree: false,
    downloadsCount: 840,
    includedItems: ["Document DOCX complet editabil", "Anexă cu tranziții și cântecele", "Condica educatoarei presincronizată"]
  },
  {
    id: "res-5",
    title: "Kit Centre de Interes ALA1: 'Orășelul Meseriilor'",
    description: "Set de sarcini și jetoane speciale pentru toate cele 5 centre de interes (Bibliotecă, Artă, Știință, Construcții, Joc de Rol).",
    level: "Grădiniță",
    subLevel: "Grupa Mijlocie",
    category: "ALA1",
    categoryLabel: "Activități Liber-Alese (ALA1)",
    type: "Ghid didactic",
    format: "PDF Printabil, A4",
    pageCount: 12,
    tags: ["ALA1", "Meserii", "Centre de interes", "Joc de rol"],
    imageUrls: ["/assets/resources/res-5.jpg"],
    isFree: true,
    downloadsCount: 1650,
    includedItems: ["Fișe sarcini pentru cele 5 centre", "Jetoane vizuale de identificare centru", "Ghid de observare a comportamentului"]
  },
  {
    id: "res-6",
    title: "Pictăm Mărul Uriaș - Proiect DEC (Arte Plastice)",
    description: "Proiect de activitate didactică pe domeniul estetic și creativ. Tehnica dactilopicturii și a amprentării cu buretele pentru preșcolari mici.",
    level: "Grădiniță",
    subLevel: "Grupa Mică",
    category: "DEC",
    categoryLabel: "Domeniul Estetic și Creativ",
    type: "Fișă de lucru",
    format: "PDF Printabil, A4",
    pageCount: 2,
    tags: ["DEC", "Pictură", "Grupa Mică", "Dactilopictură"],
    imageUrls: ["/assets/resources/res-6.jpg"],
    isFree: true,
    downloadsCount: 1190,
    includedItems: ["Șablon contur măr mare", "Proiect didactic desfășurat pe etape", "Criterii de apreciere a lucrărilor"]
  }
];

export const initialSavedIds = ["res-1", "res-3"];
