export interface DailyGenerationInput {
  gradeLevel: "Grupa Mică (3-4 ani)" | "Grupa Mijlocie (4-5 ani)" | "Grupa Mare (5-6 ani)";
  theme: string;
  subtheme: string;
  date?: string;
  focusDomain?: "DLC" | "DȘ" | "DOS" | "DEC" | "DPM";
}

export const SYSTEM_PROMPT_CURRICULUM_2019 = `
Ești un Expert Pedagogic Master în Educație Timpurie și Curriculumul pentru Educație Timpurie din România (OMEN nr. 4694 / 02.08.2019).
Generarea ta trebuie să respecte cu strictețe următoarele reguli pedagogice:

1. NOMENCLATURĂ ȘI STRUCTURĂ OFICIALĂ:
   - ADP: Activități de Dezvoltare Personală (Întâlnirea de dimineață, Rutine, Tranziții, Activități opționale/recuperatorii).
   - ADE: Activități pe Domenii Experiențiale (DLC - Domeniul Limbă și Comunicare, DȘ - Domeniul Științe, DOS - Domeniul Om și Societate, DEC - Domeniul Estetic și Creativ, DPM - Domeniul Psihomotric).
   - ALA1: Activități Liber-Alese în centre de interes (Bibliotecă, Artă, Știință, Construcții, Joc de rol, Nisip și apă).
   - ALA2: Jocuri și activități recreative / de mișcare / de relaxare.

2. FORMULARE OBIECTIVE OPERAȚIONAL-BEHAVIORALE:
   - Fiecare obiectiv operațional trebuie să înceapă obligatoriu cu structura: "să [verb de acțiune măsurabil]", ex: "să identifice cel puțin 2 caracteristici...", "să denumească corect...", "să realizeze un colaj respectând etapa de lipire...".
   - Obiectivele trebuie divizate în: Cognitive, Psihomotorii și Socio-Afective.

3. CONSISTENȚĂ TEMATICĂ ABSOLUTĂ:
   - Toate segmentele zilei (Întâlnirea de dimineață, ADE, cele 5 centre ALA1, jocul ALA2 și fișa de lucru) trebuie legate unitar de Tema și Subtema alese.

4. TON ȘI STIL:
   - Cald, empatic, încurajator, structurat impecabil pentru o educatoare pregătită și inspirată.
`;

export function buildFullDayPrompt(input: DailyGenerationInput): string {
  return `
Cerință de generare pachet complet "O ZI LA GRĂDINIȚĂ":
- Grupa: ${input.gradeLevel}
- Tema Anuală de Studiu: ${input.theme}
- Subtema săptămânii: ${input.subtheme}

Te rog să generezi un pachet pedagogic integrat structurat în format JSON cu următoarele secțiuni:

1. adpMorningMeeting:
   - Salutul (mesaj cald adaptat temei)
   - Prezența & Calendarul Naturii
   - Noutatea zilei & Mesajul zilei
   - Activitate Socio-Emoțională (SEL) dedicată

2. adePlan:
   - Titlu activitate & Domeniu Experiențial
   - Tipul activității (Predare / Consolidare / Evaluare)
   - Mijloc de realizare (Joc didactic / Lectură după imagini / Povestire / Convorbire / Colaj etc.)
   - Obiective Operaționale (Cognitive, Psihomotorii, Socio-Afective)
   - Strategii didactice (Metode, Materiale, Forme de organizare)
   - Tabel Desfășurarea Activității (Etape: Captaarea atenției, Anunțarea temei, Dirijarea învățării, Obținerea performanței, Încheierea activității | Activitatea educatoarei | Activitatea copiilor | Evaluare)

3. ala1Centers:
   - Bibliotecă (Sarcina specifică & Materiale)
   - Artă (Sarcina specifică & Materiale)
   - Știință (Sarcina specifică & Materiale)
   - Construcții (Sarcina specifică & Materiale)
   - Joc de Rol (Sarcina specifică & Materiale)

4. ala2Games:
   - Joc de mișcare (Titlu, Reguli, Desfășurare)
   - Joc distractiv / recreativ

5. adpTransitions:
   - 3 rime sau cântecele scurte de tranziție pentru strângerea jucăriilor și trecerea la masă/activități.

6. worksheetData:
   - Titlul fișei, Cerința clară pentru copii, Sarcină practică și Descriptori de performanță.
`;
}
