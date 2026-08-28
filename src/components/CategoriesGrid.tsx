"use client";

import { Palette, BookOpen, BrainCircuit, Users, Compass, Trees, Award } from "lucide-react";

interface CategoryItem {
  id: string;
  name: string;
  subName: string;
  description: string;
  color: string; // Tailwind class
  textColor: string;
  icon: any;
}

interface CategoriesGridProps {
  onSelectCategory: (category: string) => void;
}

export default function CategoriesGrid({ onSelectCategory }: CategoriesGridProps) {
  const categories: CategoryItem[] = [
    {
      id: "DLC",
      name: "Comunicare & Limbaj",
      subName: "DLC / CLR",
      description: "Dezvoltarea vorbirii, fișe de lectură, abecedare interactive.",
      color: "bg-[#7CA5B8]/15 hover:bg-[#7CA5B8]/25 border-[#7CA5B8]/30",
      textColor: "text-[#7CA5B8]",
      icon: BookOpen,
    },
    {
      id: "MEM",
      name: "Matematică & Științe",
      subName: "DȘ / MEM",
      description: "Cifre, adunări interactive, experimente cu apă și plante.",
      color: "bg-[#88A88E]/15 hover:bg-[#88A88E]/25 border-[#88A88E]/30",
      textColor: "text-[#88A88E]",
      icon: BrainCircuit,
    },
    {
      id: "AVAP",
      name: "Arte & Abilități",
      subName: "DEC / AVAP",
      description: "Origami, șabloane de colorat, decorațiuni tematice.",
      color: "bg-[#F9D678]/20 hover:bg-[#F9D678]/35 border-[#F9D678]/40",
      textColor: "text-[#D97736]",
      icon: Palette,
    },
    {
      id: "DOS",
      name: "Om & Societate",
      subName: "DOS / DP",
      description: "Educație civică, reguli de grup și dezvoltare personală.",
      color: "bg-[#E06D53]/10 hover:bg-[#E06D53]/20 border-[#E06D53]/20",
      textColor: "text-[#E06D53]",
      icon: Users,
    },
    {
      id: "Special",
      name: "Săptămâna Verde & Altfel",
      subName: "Proiecte Speciale",
      description: "Fișe de observare, activități ecologice și scenarii.",
      color: "bg-emerald-50 hover:bg-emerald-100 border-emerald-200",
      textColor: "text-emerald-700",
      icon: Trees,
    },
  ];

  return (
    <div className="py-10 px-4 sm:px-6 md:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-2xl font-bold text-[#2D3748]">Explorează după domenii curriculare</h2>
        <p className="text-sm text-[#8A8373] mt-1">
          Alege domeniul dorit pentru a descoperi materialele potrivite programei tale
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <button
              key={category.id}
              onClick={() => onSelectCategory(category.id)}
              className={`p-5 rounded-3xl border text-left transition-all hover:scale-[1.02] flex flex-col justify-between h-48 shadow-sm hover:shadow-md ${category.color}`}
            >
              <div>
                <div className={`p-3 rounded-2xl bg-white w-fit shadow-xs mb-3 ${category.textColor}`}>
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-bold text-sm text-[#2D3748]">{category.name}</h3>
                <span className="text-[11px] font-bold tracking-wider uppercase opacity-85 block mt-0.5">
                  {category.subName}
                </span>
              </div>
              <p className="text-xs text-[#2D3748]/75 leading-relaxed mt-2 line-clamp-2">
                {category.description}
              </p>
            </button>
          );
        })}
      </div>
    </div>
  );
}
