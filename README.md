# Educa - Atelier Didactic

O aplicație web modernă, caldă și prietenoasă dedicată educatorilor și învățătorilor din România pentru accesul rapid la fișe de lucru printabile, planificări anuale, ghiduri și jocuri didactice.

## Specificații Vizuale
- **Fundal principal:** Crem cald (`#FFFDF9`, `#FAF6EE`)
- **Accent Primar:** Teracotă / Portocaliu cald (`#E06D53`, `#D97736`)
- **Accente Secundare:** Verde salvie (`#88A88E`), Albastru senin prăfuit (`#7CA5B8`), Galben pastel (`#F9D678`)
- **Tipografie:** Elemente rotunjite (`rounded-2xl`, `rounded-full`, `rounded-3xl`), umbre organice subtile (`shadow-sm`, `hover:shadow-md`) și iconițe Lucide React.

## Tehnologii Utilizate
- Next.js 14+ (App Router) cu TypeScript
- Tailwind CSS cu `@tailwindcss/forms` plugin
- Lucide React pentru setul de pictograme vesele

---

## Ghid de Pornire Locală

### 1. Instalare dependențe
```bash
npm install
```

### 2. Rularea serverului de dezvoltare
```bash
npm run dev
```
Deschideți [http://localhost:3000](http://localhost:3000) în browser pentru a vizualiza aplicația.

---

## Configurare Git & Publicare pe GitHub

Pentru a trimite codul către repository-ul dumneavoastră GitHub (`madalinagligor5-maker/educa`), deschideți terminalul în rădăcina proiectului și rulați următoarele comenzi:

```bash
git init
git add .
git commit -m "feat: initial commit with Educa teacher resource platform scaffold"
git branch -M main
git remote add origin https://github.com/madalinagligor5-maker/educa.git
git push -u origin main
```
