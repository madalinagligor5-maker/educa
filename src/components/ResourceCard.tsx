"use client";

import { Resource } from "@/data/resources";
import { FolderHeart, Download, BookOpen, Eye, HelpCircle } from "lucide-react";

interface ResourceCardProps {
  resource: Resource;
  isSaved: boolean;
  onSaveToggle: (id: string) => void;
  onSelectPreview: (resource: Resource) => void;
}

export default function ResourceCard({
  resource,
  isSaved,
  onSaveToggle,
  onSelectPreview,
}: ResourceCardProps) {
  // Pastel badge styling based on category
  const getCategoryStyles = (category: string) => {
    switch (category) {
      case "DLC":
      case "CLR":
        return "bg-[#7CA5B8]/15 text-[#3D6B80] border-[#7CA5B8]/30";
      case "DȘ":
      case "MEM":
        return "bg-[#88A88E]/15 text-[#3E6346] border-[#88A88E]/30";
      case "AVAP":
      case "DEC":
        return "bg-[#F9D678]/25 text-[#A67E1B] border-[#F9D678]/40";
      case "DOS":
      case "DP":
        return "bg-[#E06D53]/10 text-[#A8452D] border-[#E06D53]/25";
      default:
        return "bg-slate-100 text-slate-700 border-slate-200";
    }
  };

  // Safe download trigger
  const handleDownload = (e: React.MouseEvent) => {
    e.stopPropagation();
    alert(`Se descarcă pachetul: "${resource.title}" (${resource.format})`);
  };

  return (
    <div className="bg-white rounded-3xl border border-[#EADFC9] overflow-hidden hover:shadow-md transition-all group flex flex-col justify-between h-full relative">
      
      {/* Upper Section with Card Cover / Graphic Placeholder */}
      <div className="relative h-44 bg-[#FAF6EE] flex items-center justify-center p-6 border-b border-[#EADFC9]/50 overflow-hidden">
        {/* Playful abstract icon representing the tool */}
        <div className="text-[#FAF6EE] bg-[#E06D53]/10 p-6 rounded-full group-hover:scale-110 transition-transform duration-300">
          <BookOpen className="h-12 w-12 text-[#E06D53]" />
        </div>

        {/* Multi-page preview badge */}
        <span className="absolute top-3 left-3 bg-[#2D3748] text-white text-[10px] font-bold px-2 py-1 rounded-lg shadow-sm">
          {resource.pageCount} {resource.pageCount === 1 ? "pagină" : "pagini"}
        </span>

        {/* Format Pill (PDF Printabil) */}
        <span className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-xs border border-[#EADFC9] text-[#2D3748] text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-xs">
          {resource.format}
        </span>

        {/* Like/Bookmark Icon */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onSaveToggle(resource.id);
          }}
          className={`absolute top-3 right-3 p-2 rounded-xl transition-all shadow-xs ${
            isSaved 
              ? "bg-[#E06D53] text-white hover:bg-[#D97736]" 
              : "bg-white text-[#8A8373] hover:text-[#E06D53]"
          }`}
          aria-label="Salvează resursă"
        >
          <FolderHeart className="h-4.5 w-4.5" />
        </button>
      </div>

      {/* Card Details content */}
      <div className="p-5 flex-1 flex flex-col justify-between gap-4">
        <div>
          {/* Tag & Levels info */}
          <div className="flex flex-wrap items-center gap-1.5 mb-2">
            <span className="text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-md bg-[#FAF6EE] text-[#8A8373] border border-[#EADFC9]">
              {resource.level}
            </span>
            <span className={`text-[10px] font-bold tracking-wide uppercase px-2 py-0.5 rounded-md border ${getCategoryStyles(resource.category)}`}>
              {resource.category}
            </span>
            {resource.isFree && (
              <span className="bg-[#88A88E] text-white text-[9px] font-bold tracking-wider uppercase px-1.5 py-0.5 rounded-md">
                GRATUIT
              </span>
            )}
          </div>

          <h3 className="font-bold text-[#2D3748] text-base group-hover:text-[#E06D53] transition-colors leading-snug line-clamp-2">
            {resource.title}
          </h3>
          <p className="text-xs text-[#8A8373] mt-2 line-clamp-3 leading-relaxed">
            {resource.description}
          </p>
        </div>

        {/* Action Buttons footer */}
        <div className="grid grid-cols-2 gap-2 mt-2">
          <button
            onClick={() => onSelectPreview(resource)}
            className="flex items-center justify-center gap-1.5 border border-[#EADFC9] hover:bg-[#FAF6EE] text-[#2D3748] py-2 rounded-2xl text-xs font-semibold transition-all active:scale-95"
          >
            <Eye className="h-4.5 w-4.5 text-[#8A8373]" />
            <span>Vizualizează</span>
          </button>
          
          <button
            onClick={handleDownload}
            className="flex items-center justify-center gap-1.5 bg-[#88A88E] hover:bg-[#729277] text-white py-2 rounded-2xl text-xs font-semibold shadow-xs transition-all active:scale-95"
          >
            <Download className="h-4 w-4" />
            <span>Descarcă</span>
          </button>
        </div>
      </div>

    </div>
  );
}
