"use client";

import { useState } from "react";
import { Sparkles, Scissors, Heart, BookOpen, Search } from "lucide-react";

interface HeroProps {
  onSearch: (filters: { level: string; category: string; type: string; query: string }) => void;
}

export default function Hero({ onSearch }: HeroProps) {
  const [level, setLevel] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("");
  const [query, setQuery] = useState("");

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSearch({ level, category, type, query });
  };

  return (
    <div className="bg-[#FAF6EE] border-b border-[#EADFC9] py-12 px-4 sm:px-6 md:px-8 relative overflow-hidden">
      
      {/* Decorative SVGs for playful atmosphere */}
      <div className="absolute top-8 left-10 text-[#E06D53]/10 pointer-events-none hidden md:block">
        <Heart className="h-16 w-16 rotate-12" />
      </div>
      <div className="absolute bottom-6 right-12 text-[#88A88E]/10 pointer-events-none hidden md:block">
        <Scissors className="h-20 w-20 -rotate-12" />
      </div>

      <div className="max-w-4xl mx-auto text-center relative z-10">
        
        {/* Badges container */}
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="bg-white border border-[#EADFC9] text-[#2D3748] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
            <span>✨</span> 100% gata de printat
          </span>
          <span className="bg-[#FAF6EE] border border-[#88A88E] text-[#88A88E] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
            <span>🎨</span> Ilustrații originale
          </span>
          <span className="bg-[#FAF6EE] border border-[#7CA5B8] text-[#7CA5B8] px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-sm flex items-center gap-1.5">
            <span>📚</span> Conform programei
          </span>
        </div>

        {/* Title */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-[#2D3748] leading-tight mb-4">
          Resurse didactice create cu suflet, <br />
          <span className="text-[#E06D53]">gata de adus în clasă.</span>
        </h1>
        
        <p className="text-[#8A8373] text-base md:text-lg max-w-2xl mx-auto mb-8">
          Materiale premium realizate de cadre didactice din România pentru preșcolari și elevi din învățământul primar. Descarcă, printează și bucură-te de lecție!
        </p>

        {/* Search Panel with Selectors */}
        <form 
          onSubmit={handleSearchSubmit} 
          className="bg-white p-4 rounded-3xl shadow-md border border-[#EADFC9] flex flex-col md:flex-row gap-3 items-stretch md:items-center max-w-3xl mx-auto"
        >
          {/* Nivel Dropdown */}
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[10px] uppercase tracking-wider text-[#8A8373] font-bold text-left mb-1 pl-1">
              Nivel / Clasă
            </label>
            <select
              value={level}
              onChange={(e) => setLevel(e.target.value)}
              className="w-full bg-[#FFFDF9] border-none text-[#2D3748] focus:ring-0 text-sm font-medium py-1.5 cursor-pointer"
            >
              <option value="">Toate clasele</option>
              <option value="Grădiniță">Grădiniță</option>
              <option value="Clasa Pregătitoare">Clasa Pregătitoare</option>
              <option value="Clasa I">Clasa I</option>
              <option value="Clasa a II-a">Clasa a II-a</option>
              <option value="Clasa a III-a">Clasa a III-a</option>
              <option value="Clasa a IV-a">Clasa a IV-a</option>
            </select>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-[#EADFC9]"></div>

          {/* Disciplină / Categorie */}
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[10px] uppercase tracking-wider text-[#8A8373] font-bold text-left mb-1 pl-1">
              Disciplină
            </label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full bg-[#FFFDF9] border-none text-[#2D3748] focus:ring-0 text-sm font-medium py-1.5 cursor-pointer"
            >
              <option value="">Toate disciplinele</option>
              <option value="DLC">Limbă & Comunicare (DLC / CLR)</option>
              <option value="MEM">Matematică & Științe (DȘ / MEM)</option>
              <option value="DOS">Om & Societate (DOS)</option>
              <option value="AVAP">Arte & Abilități (DEC / AVAP)</option>
              <option value="DP">Dezvoltare Personală (DP)</option>
            </select>
          </div>

          <div className="hidden md:block h-8 w-[1px] bg-[#EADFC9]"></div>

          {/* Tip Resursă */}
          <div className="flex-1 min-w-[140px]">
            <label className="block text-[10px] uppercase tracking-wider text-[#8A8373] font-bold text-left mb-1 pl-1">
              Tip Resursă
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full bg-[#FFFDF9] border-none text-[#2D3748] focus:ring-0 text-sm font-medium py-1.5 cursor-pointer"
            >
              <option value="">Toate tipurile</option>
              <option value="Fișă de lucru">Fișă de lucru</option>
              <option value="Planificare">Planificare</option>
              <option value="Planșe / Flashcards">Planșe / Flashcards</option>
              <option value="Ghid didactic">Ghid didactic</option>
              <option value="Joc educațional">Joc educațional</option>
            </select>
          </div>

          {/* Action button */}
          <button
            type="submit"
            className="bg-[#E06D53] hover:bg-[#D97736] text-white px-5 py-3 rounded-2xl text-sm font-semibold shadow-sm transition-all flex items-center justify-center gap-2 active:scale-95 whitespace-nowrap"
          >
            <Search className="h-4 w-4" />
            <span>Filtrează</span>
          </button>
        </form>

      </div>
    </div>
  );
}
