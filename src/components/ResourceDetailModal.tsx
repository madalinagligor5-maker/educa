"use client";

import { Resource } from "@/data/resources";
import { X, CheckCircle, Download, FileText, Sparkles, FolderHeart } from "lucide-react";

interface ResourceDetailModalProps {
  resource: Resource | null;
  isOpen: boolean;
  onClose: () => void;
  isSaved: boolean;
  onSaveToggle: (id: string) => void;
}

export default function ResourceDetailModal({
  resource,
  isOpen,
  onClose,
  isSaved,
  onSaveToggle,
}: ResourceDetailModalProps) {
  if (!isOpen || !resource) return null;

  const handleDownload = () => {
    alert(`Se începe descărcarea materialului: "${resource.title}" în format ${resource.format}.`);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/50 backdrop-blur-xs flex items-center justify-center p-4">
      <div 
        className="bg-[#FFFDF9] w-full max-w-3xl rounded-3xl border border-[#EADFC9] shadow-xl overflow-hidden flex flex-col md:flex-row relative animate-in fade-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 z-10 bg-white/80 hover:bg-white text-[#2D3748] p-1.5 rounded-full border border-[#EADFC9] shadow-xs transition-colors"
          aria-label="Închide fereastra"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Left Side: Mock Preview Gallery */}
        <div className="w-full md:w-5/12 bg-[#FAF6EE] p-6 flex flex-col items-center justify-center border-b md:border-b-0 md:border-r border-[#EADFC9]">
          <div className="w-full aspect-[3/4] bg-white border border-[#EADFC9] rounded-2xl shadow-xs flex flex-col items-center justify-center p-6 relative group overflow-hidden">
            
            {/* Playful Document Page Design */}
            <div className="w-16 h-20 bg-[#E06D53]/10 rounded-lg flex items-center justify-center text-[#E06D53] mb-4">
              <FileText className="h-10 w-10" />
            </div>
            
            <span className="text-xs font-bold text-[#8A8373] tracking-wide uppercase">Previzualizare Pagină</span>
            <span className="text-[10px] text-[#8A8373] mt-1">1 din {resource.pageCount}</span>

            {/* Simulated worksheets elements on page */}
            <div className="w-full space-y-2 mt-4">
              <div className="h-2 w-3/4 bg-[#FAF6EE] rounded-sm mx-auto"></div>
              <div className="h-2 w-5/6 bg-[#FAF6EE] rounded-sm mx-auto"></div>
              <div className="h-12 w-full border border-[#EADFC9] border-dashed rounded-lg flex items-center justify-center text-[10px] text-[#8A8373] italic">
                Ilustrație Color
              </div>
            </div>

            <div className="absolute inset-0 bg-[#2D3748]/5 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
              <span className="bg-white text-[#2D3748] px-3.5 py-1.5 rounded-full text-xs font-bold shadow-xs">
                Mărește Imaginea 🔍
              </span>
            </div>
          </div>
          
          <p className="text-[11px] text-[#8A8373] mt-3 text-center italic">
            *Materialul descărcat va avea o rezoluție excelentă, gata de printat pe format A4.
          </p>
        </div>

        {/* Right Side: Details & Materials Included */}
        <div className="w-full md:w-7/12 p-6 md:p-8 flex flex-col justify-between">
          <div>
            {/* Top metadata tags */}
            <div className="flex flex-wrap items-center gap-1.5 mb-3">
              <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-[#FAF6EE] text-[#8A8373] border border-[#EADFC9]">
                {resource.level}
              </span>
              <span className="text-[10px] font-bold tracking-wide uppercase px-2.5 py-0.5 rounded-md bg-[#7CA5B8]/15 text-[#3D6B80] border border-[#7CA5B8]/30">
                {resource.category}
              </span>
              {resource.isFree && (
                <span className="bg-[#88A88E] text-white text-[9px] font-bold tracking-wider uppercase px-2 py-0.5 rounded-md">
                  Gratuit
                </span>
              )}
            </div>

            <h2 className="text-xl sm:text-2xl font-bold text-[#2D3748] mb-2 leading-snug">
              {resource.title}
            </h2>
            
            <p className="text-sm text-[#8A8373] mb-6 leading-relaxed">
              {resource.description}
            </p>

            {/* List of included elements */}
            <div className="mb-6">
              <h4 className="text-xs font-extrabold uppercase tracking-wider text-[#2D3748] mb-3 flex items-center gap-1.5">
                <Sparkles className="h-4 w-4 text-[#E06D53]" />
                Ce conține acest pachet:
              </h4>
              <ul className="space-y-2">
                {resource.includedItems.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-[#2D3748]">
                    <CheckCircle className="h-4.5 w-4.5 text-[#88A88E] shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Row */}
          <div className="flex items-center gap-3 pt-4 border-t border-[#EADFC9]/50">
            <button
              onClick={() => onSaveToggle(resource.id)}
              className={`p-3 rounded-2xl border transition-colors ${
                isSaved
                  ? "bg-[#E06D53] border-[#E06D53] text-white"
                  : "bg-white border-[#EADFC9] text-[#8A8373] hover:text-[#E06D53]"
              }`}
              title={isSaved ? "Salvat în sertar" : "Salvează resursă"}
            >
              <FolderHeart className="h-5 w-5" />
            </button>

            <button
              onClick={handleDownload}
              className="flex-1 bg-[#88A88E] hover:bg-[#729277] text-white py-3 rounded-2xl text-sm font-semibold shadow-md flex items-center justify-center gap-2 transition-all active:scale-[0.98]"
            >
              <Download className="h-5 w-5" />
              <span>Descarcă ({resource.format})</span>
            </button>
          </div>

        </div>

      </div>
    </div>
  );
}
