import Link from "next/link";
import { ArrowLeft, BookOpen, Calendar, ChevronRight } from "lucide-react";

export default function NoutatiPage() {
  const newsItems = [
    {
      id: 1,
      title: "Resurse noi adăugate pentru Săptămâna Verde 2026",
      date: "28 August 2026",
      category: "Noutăți Catalog",
      description: "Am lansat 5 fișe noi de monitorizare ecologică și un ghid complet de experimente simple cu apă.",
    },
    {
      id: 2,
      title: "Modificări în structura modulelor: Ghid explicativ",
      date: "15 August 2026",
      category: "Articole Utile",
      description: "Cum afectează noua structură a anului școlar calendarul evaluărilor sumative și planificările calendaristice.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12">
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A8373] hover:text-[#E06D53] transition-colors uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4" />
          Înapoi la catalog
        </Link>
      </div>

      <div className="flex items-center gap-3 mb-8 border-b border-[#EADFC9]/50 pb-4">
        <div className="bg-[#88A88E]/10 p-2.5 rounded-2xl text-[#88A88E]">
          <BookOpen className="h-6 w-6" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-[#2D3748]">Noutăți & Articole Pedagogice</h1>
          <p className="text-xs text-[#8A8373] mt-0.5">Cele mai recente resurse, ghiduri metodice și actualizări legislative</p>
        </div>
      </div>

      <div className="space-y-6">
        {newsItems.map((item) => (
          <article key={item.id} className="bg-white border border-[#EADFC9] rounded-3xl p-6 hover:shadow-md transition-shadow relative">
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#FAF6EE] text-[#88A88E] border border-[#EADFC9]">
                {item.category}
              </span>
              <span className="text-[10px] text-[#8A8373] flex items-center gap-1">
                <Calendar className="h-3.5 w-3.5" />
                {item.date}
              </span>
            </div>
            
            <h3 className="text-lg font-bold text-[#2D3748] hover:text-[#E06D53] transition-colors cursor-pointer mb-2">
              {item.title}
            </h3>
            
            <p className="text-xs text-[#8A8373] leading-relaxed mb-4">
              {item.description}
            </p>

            <button className="inline-flex items-center gap-1 text-xs font-bold text-[#E06D53] hover:text-[#D97736] transition-colors">
              Citește tot articolul
              <ChevronRight className="h-3.5 w-3.5" />
            </button>
          </article>
        ))}
      </div>
    </div>
  );
}
