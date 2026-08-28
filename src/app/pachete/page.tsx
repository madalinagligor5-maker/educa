import Link from "next/link";
import { ArrowLeft, Sparkles, Star } from "lucide-react";

export default function PachetePage() {
  return (
    <div className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 text-center">
      <div className="mb-6 text-left">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A8373] hover:text-[#E06D53] transition-colors uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4" />
          Înapoi la catalog
        </Link>
      </div>

      <div className="bg-[#FAF6EE] border border-[#EADFC9] rounded-3xl p-12 shadow-sm">
        <div className="bg-[#E06D53]/10 text-[#E06D53] p-4 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-6">
          <Sparkles className="h-8 w-8" />
        </div>
        
        <h1 className="text-3xl font-extrabold text-[#2D3748] mb-4">Pachete Tematice Premium</h1>
        <p className="text-[#8A8373] text-sm max-w-lg mx-auto mb-8 leading-relaxed">
          Pachete complete gata structurate pe teme lunare sau evenimente majore din calendarul școlar (Săptămâna Climatului, Halloween, Serbarea Abecedarului, Paște). Economisește ore întregi de planificare!
        </p>

        {/* Mock Feature Highlights */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-md mx-auto text-left mb-8">
          <div className="bg-white p-4 rounded-2xl border border-[#EADFC9] shadow-xs flex items-start gap-2.5">
            <Star className="h-5 w-5 text-[#F9D678] fill-[#F9D678] shrink-0" />
            <div>
              <h4 className="font-bold text-xs text-[#2D3748]">Planificare integrată</h4>
              <p className="text-[11px] text-[#8A8373] mt-0.5">Fiecare pachet include un ghid de integrare transcurriculară.</p>
            </div>
          </div>

          <div className="bg-white p-4 rounded-2xl border border-[#EADFC9] shadow-xs flex items-start gap-2.5">
            <Star className="h-5 w-5 text-[#F9D678] fill-[#F9D678] shrink-0" />
            <div>
              <h4 className="font-bold text-xs text-[#2D3748]">Grafică originală premium</h4>
              <p className="text-[11px] text-[#8A8373] mt-0.5">Ilustrații de înaltă rezoluție, atractive pentru copii.</p>
            </div>
          </div>
        </div>

        <button className="bg-[#E06D53] hover:bg-[#D97736] text-white px-6 py-3 rounded-2xl text-xs font-semibold shadow-md transition-transform active:scale-95">
          Abonează-te pentru a debloca pachetele premium
        </button>
      </div>
    </div>
  );
}
