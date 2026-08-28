"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Sparkles, BookOpen, FolderHeart, Search } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [searchQuery, setSearchQuery] = useState("");

  const navigation = [
    { name: "Grădiniță", href: "/?level=Grădiniță" },
    { name: "Clasa Pregătitoare", href: "/?level=Pregatitoare" },
    { name: "Clasele I-IV", href: "/?level=Primar" },
    { name: "Pachete Tematice", href: "/pachete" },
    { name: "Noutăți", href: "/noutati" },
  ];

  const quickFilters = ["Grupa Mare", "CLR", "MEM", "Toamnă", "Crăciun"];

  return (
    <nav className="w-full bg-[#FAF6EE] border-b border-[#EADFC9] sticky top-0 z-50 px-4 py-3 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        
        {/* Left Side: Logo */}
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="bg-[#E06D53] text-white p-2 rounded-2xl shadow-sm group-hover:scale-105 transition-transform">
              <Sparkles className="h-6 w-6" />
            </div>
            <div>
              <span className="font-bold text-xl text-[#2D3748] tracking-tight block">Educa</span>
              <span className="text-xs text-[#E06D53] font-medium -mt-1 block">Atelier Didactic</span>
            </div>
          </Link>
        </div>

        {/* Middle: Quick Search & Navigation */}
        <div className="flex-1 max-w-lg mx-0 md:mx-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Caută fișe de lucru, planificări..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white border border-[#EADFC9] rounded-2xl py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#E06D53] focus:border-transparent placeholder-[#8A8373] text-[#2D3748]"
            />
            <Search className="absolute right-3 top-2.5 h-4.5 w-4.5 text-[#8A8373]" />
          </div>
        </div>

        {/* Right Side: Links & CTAs */}
        <div className="flex items-center gap-3 justify-between md:justify-end">
          <Link
            href="/sertar"
            className={`flex items-center gap-1.5 px-4 py-2 rounded-2xl text-sm font-medium transition-colors ${
              pathname === "/sertar"
                ? "bg-[#EADFC9] text-[#2D3748]"
                : "text-[#2D3748] hover:bg-[#EADFC9]/50"
            }`}
          >
            <FolderHeart className="h-4.5 w-4.5 text-[#E06D53]" />
            <span>Sertarul Meu</span>
          </Link>

          <Link
            href="/?free=true"
            className="bg-[#E06D53] hover:bg-[#D97736] text-white px-4 py-2 rounded-2xl text-sm font-medium shadow-sm transition-transform active:scale-95 flex items-center gap-1"
          >
            <BookOpen className="h-4 w-4" />
            <span>Descarcă Pachet Gratuit</span>
          </Link>
        </div>
      </div>

      {/* Instant Visual Pill Filters Row */}
      <div className="max-w-7xl mx-auto flex items-center gap-2 mt-2 pt-2 border-t border-[#EADFC9]/40 overflow-x-auto no-scrollbar">
        <span className="text-xs text-[#8A8373] font-medium whitespace-nowrap">Sugestii rapide:</span>
        <div className="flex gap-1.5">
          {quickFilters.map((filter) => (
            <Link
              key={filter}
              href={`/?search=${filter}`}
              className="bg-[#FFFDF9] hover:bg-[#EADFC9]/45 border border-[#EADFC9] text-[#2D3748] text-xs px-3 py-1 rounded-full font-medium transition-colors whitespace-nowrap"
            >
              #{filter}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
}
