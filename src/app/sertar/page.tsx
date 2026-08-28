"use client";

import { useState, useEffect } from "react";
import { mockResources, Resource } from "@/data/resources";
import ResourceCard from "@/components/ResourceCard";
import ResourceDetailModal from "@/components/ResourceDetailModal";
import { FolderHeart, Folder, ArrowLeft, Heart, Award } from "lucide-react";
import Link from "next/link";

export default function SertarPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedResources, setSavedResources] = useState<Resource[]>([]);
  const [selectedPreviewResource, setSelectedPreviewResource] = useState<Resource | null>(null);
  
  // Filter saved resources by grade
  const [activeFolder, setActiveFolder] = useState<string>("all");

  // Load from localstorage
  useEffect(() => {
    const saved = localStorage.getItem("educa_saved_ids");
    if (saved) {
      const parsedIds = JSON.parse(saved) as string[];
      setSavedIds(parsedIds);
      setSavedResources(mockResources.filter((res) => parsedIds.includes(res.id)));
    } else {
      // Default fallback
      const defaultIds = ["res-1", "res-4"];
      setSavedIds(defaultIds);
      setSavedResources(mockResources.filter((res) => defaultIds.includes(res.id)));
    }
  }, []);

  const handleSaveToggle = (id: string) => {
    const updated = savedIds.includes(id)
      ? savedIds.filter((item) => item !== id)
      : [...savedIds, id];
    
    setSavedIds(updated);
    setSavedResources(mockResources.filter((res) => updated.includes(res.id)));
    localStorage.setItem("educa_saved_ids", JSON.stringify(updated));
  };

  const getFilteredResources = () => {
    if (activeFolder === "all") return savedResources;
    return savedResources.filter(res => {
      if (activeFolder === "gradinita") return res.level === "Grădiniță";
      if (activeFolder === "pregatitoare") return res.level === "Clasa Pregătitoare";
      if (activeFolder === "primar") return res.level !== "Grădiniță" && res.level !== "Clasa Pregătitoare";
      return true;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      
      {/* Back button header */}
      <div className="mb-6">
        <Link href="/" className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8A8373] hover:text-[#E06D53] transition-colors uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4" />
          Înapoi la catalog
        </Link>
      </div>

      <div className="flex flex-col md:flex-row gap-8 items-start">
        
        {/* Left Side: Folder Navigation Panel */}
        <div className="w-full md:w-3/12 bg-[#FAF6EE] border border-[#EADFC9] rounded-3xl p-5 shrink-0">
          <div className="flex items-center gap-2 mb-4 pb-3 border-b border-[#EADFC9]">
            <FolderHeart className="h-5 w-5 text-[#E06D53]" />
            <h2 className="font-extrabold text-sm text-[#2D3748] uppercase tracking-wide">Sertarul Meu</h2>
          </div>

          <p className="text-[11px] text-[#8A8373] mb-4 leading-relaxed">
            Aici găsești fișele salvate de tine din catalogul principal, organizate pe categorii școlare.
          </p>

          <div className="space-y-1">
            <button
              onClick={() => setActiveFolder("all")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeFolder === "all"
                  ? "bg-white border border-[#EADFC9] text-[#2D3748]"
                  : "text-[#8A8373] hover:bg-white/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-[#FAF6EE] fill-[#8A8373]" />
                Toate fișele salvate
              </span>
              <span className="bg-[#EADFC9]/50 text-[#2D3748] px-2 py-0.5 rounded-md text-[10px]">
                {savedResources.length}
              </span>
            </button>

            <button
              onClick={() => setActiveFolder("gradinita")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeFolder === "gradinita"
                  ? "bg-white border border-[#EADFC9] text-[#2D3748]"
                  : "text-[#8A8373] hover:bg-white/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-[#FAF6EE] fill-[#FAF6EE] border border-[#88A88E] bg-[#88A88E] rounded-xs" />
                Dosar Grădiniță
              </span>
              <span className="bg-[#EADFC9]/50 text-[#2D3748] px-2 py-0.5 rounded-md text-[10px]">
                {savedResources.filter(r => r.level === "Grădiniță").length}
              </span>
            </button>

            <button
              onClick={() => setActiveFolder("pregatitoare")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeFolder === "pregatitoare"
                  ? "bg-white border border-[#EADFC9] text-[#2D3748]"
                  : "text-[#8A8373] hover:bg-white/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-[#FAF6EE] fill-[#FAF6EE] border border-[#7CA5B8] bg-[#7CA5B8] rounded-xs" />
                Clasa Pregătitoare
              </span>
              <span className="bg-[#EADFC9]/50 text-[#2D3748] px-2 py-0.5 rounded-md text-[10px]">
                {savedResources.filter(r => r.level === "Clasa Pregătitoare").length}
              </span>
            </button>

            <button
              onClick={() => setActiveFolder("primar")}
              className={`w-full flex items-center justify-between p-2.5 rounded-xl text-xs font-semibold transition-all ${
                activeFolder === "primar"
                  ? "bg-white border border-[#EADFC9] text-[#2D3748]"
                  : "text-[#8A8373] hover:bg-white/40"
              }`}
            >
              <span className="flex items-center gap-2">
                <Folder className="h-4 w-4 text-[#FAF6EE] fill-[#FAF6EE] border border-[#F9D678] bg-[#F9D678] rounded-xs" />
                Dosar Clasele I-IV
              </span>
              <span className="bg-[#EADFC9]/50 text-[#2D3748] px-2 py-0.5 rounded-md text-[10px]">
                {savedResources.filter(r => r.level !== "Grădiniță" && r.level !== "Clasa Pregătitoare").length}
              </span>
            </button>
          </div>
        </div>

        {/* Right Side: Saved Items Grid */}
        <div className="w-full md:w-9/12">
          
          <div className="mb-6 flex items-center gap-2">
            <Heart className="h-5 w-5 text-[#E06D53] fill-[#E06D53]" />
            <h1 className="text-xl font-bold text-[#2D3748]">
              Materiale active în dosar ({getFilteredResources().length})
            </h1>
          </div>

          {getFilteredResources().length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {getFilteredResources().map((res) => (
                <ResourceCard
                  key={res.id}
                  resource={res}
                  isSaved={true}
                  onSaveToggle={handleSaveToggle}
                  onSelectPreview={(r) => setSelectedPreviewResource(r)}
                />
              ))}
            </div>
          ) : (
            <div className="bg-white border border-[#EADFC9] rounded-3xl p-12 text-center max-w-md mx-auto my-6">
              <div className="bg-[#FAF6EE] p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-[#EADFC9]">
                📂
              </div>
              <h3 className="font-bold text-[#2D3748] text-base">Sertar gol</h3>
              <p className="text-xs text-[#8A8373] mt-2">
                Nu ai nicio resursă în această categorie. Mergi în catalogul principal și salvează din inimi materiale utile clasei tale!
              </p>
              <Link
                href="/"
                className="mt-6 inline-block bg-[#E06D53] hover:bg-[#D97736] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold shadow-xs transition-transform active:scale-95"
              >
                Caută materiale didactice
              </Link>
            </div>
          )}

        </div>

      </div>

      {/* Details modal */}
      <ResourceDetailModal
        resource={selectedPreviewResource}
        isOpen={selectedPreviewResource !== null}
        onClose={() => setSelectedPreviewResource(null)}
        isSaved={selectedPreviewResource ? savedIds.includes(selectedPreviewResource.id) : false}
        onSaveToggle={handleSaveToggle}
      />

    </div>
  );
}
