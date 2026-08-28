"use client";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import CategoriesGrid from "@/components/CategoriesGrid";
import ResourceCard from "@/components/ResourceCard";
import ResourceDetailModal from "@/components/ResourceDetailModal";
import { mockResources, Resource } from "@/data/resources";
import { ArrowRight, Sparkles, FilterX } from "lucide-react";

function HomeContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  // Search/Filter states
  const [filteredResources, setFilteredResources] = useState<Resource[]>(mockResources);
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [selectedPreviewResource, setSelectedPreviewResource] = useState<Resource | null>(null);
  
  // Active Filter descriptions
  const [activeCategory, setActiveCategory] = useState<string>("");
  const [activeLevel, setActiveLevel] = useState<string>("");
  const [activeType, setActiveType] = useState<string>("");
  const [activeSearch, setActiveSearch] = useState<string>("");
  const [onlyFree, setOnlyFree] = useState<boolean>(false);

  // Load initially saved state
  useEffect(() => {
    const saved = localStorage.getItem("educa_saved_ids");
    if (saved) {
      setSavedIds(JSON.parse(saved));
    } else {
      setSavedIds(["res-1", "res-4"]); // default mock saves
    }
  }, []);

  // Sync state back to localStorage
  const handleSaveToggle = (id: string) => {
    const updated = savedIds.includes(id)
      ? savedIds.filter((item) => item !== id)
      : [...savedIds, id];
    setSavedIds(updated);
    localStorage.setItem("educa_saved_ids", JSON.stringify(updated));
  };

  // Read URL search params
  useEffect(() => {
    const levelParam = searchParams.get("level");
    const searchParam = searchParams.get("search");
    const freeParam = searchParams.get("free");

    if (levelParam) {
      if (levelParam === "Pregatitoare") {
        setActiveLevel("Clasa Pregătitoare");
      } else if (levelParam === "Grădiniță") {
        setActiveLevel("Grădiniță");
      } else if (levelParam === "Primar") {
        // Just filter generally or let them choose specific Clasa I-IV
        setActiveLevel("");
      }
    }

    if (searchParam) {
      setActiveSearch(searchParam);
    }

    if (freeParam === "true") {
      setOnlyFree(true);
    } else {
      setOnlyFree(false);
    }
  }, [searchParams]);

  // Apply filters
  useEffect(() => {
    let result = mockResources;

    if (activeLevel) {
      result = result.filter((res) => res.level === activeLevel);
    }

    if (activeCategory) {
      result = result.filter(
        (res) => res.category === activeCategory || res.tags.includes(activeCategory)
      );
    }

    if (activeType) {
      result = result.filter((res) => res.type === activeType);
    }

    if (activeSearch) {
      const query = activeSearch.toLowerCase();
      result = result.filter(
        (res) =>
          res.title.toLowerCase().includes(query) ||
          res.description.toLowerCase().includes(query) ||
          res.tags.some((t) => t.toLowerCase().includes(query))
      );
    }

    if (onlyFree) {
      result = result.filter((res) => res.isFree);
    }

    setFilteredResources(result);
  }, [activeLevel, activeCategory, activeType, activeSearch, onlyFree]);

  const handleHeroSearch = (filters: { level: string; category: string; type: string; query: string }) => {
    setActiveLevel(filters.level);
    setActiveCategory(filters.category);
    setActiveType(filters.type);
    setActiveSearch(filters.query);
  };

  const clearAllFilters = () => {
    setActiveLevel("");
    setActiveCategory("");
    setActiveType("");
    setActiveSearch("");
    setOnlyFree(false);
    router.push("/");
  };

  return (
    <div>
      {/* Hero section */}
      <Hero onSearch={handleHeroSearch} />

      {/* Curriculum Categories */}
      <CategoriesGrid onSelectCategory={(cat) => setActiveCategory(cat)} />

      {/* Main Content Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-4">
        
        {/* Header & Filter states */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6 border-b border-[#EADFC9]/50 pb-4">
          <div>
            <h2 className="text-xl font-bold text-[#2D3748] flex items-center gap-1.5">
              <span>📚</span> Materiale educaționale
            </h2>
            <p className="text-xs text-[#8A8373] mt-0.5">
              Rezultate găsite: {filteredResources.length} materiale active
            </p>
          </div>

          {/* Reset Filters / Active filter indicators */}
          {(activeLevel || activeCategory || activeType || activeSearch || onlyFree) && (
            <button
              onClick={clearAllFilters}
              className="text-xs bg-[#E06D53]/10 text-[#E06D53] border border-[#E06D53]/20 hover:bg-[#E06D53] hover:text-white px-3.5 py-1.5 rounded-full font-semibold transition-all flex items-center gap-1.5 w-fit"
            >
              <FilterX className="h-3.5 w-3.5" />
              Resetare filtre active
            </button>
          )}
        </div>

        {/* Resources Grid */}
        {filteredResources.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((res) => (
              <ResourceCard
                key={res.id}
                resource={res}
                isSaved={savedIds.includes(res.id)}
                onSaveToggle={handleSaveToggle}
                onSelectPreview={(r) => setSelectedPreviewResource(r)}
              />
            ))}
          </div>
        ) : (
          <div className="bg-[#FAF6EE] border border-[#EADFC9] rounded-3xl p-12 text-center max-w-lg mx-auto my-10">
            <div className="bg-white p-4 rounded-full w-14 h-14 flex items-center justify-center mx-auto mb-4 border border-[#EADFC9]">
              🔍
            </div>
            <h3 className="font-bold text-[#2D3748] text-lg">Niciun rezultat găsit</h3>
            <p className="text-xs text-[#8A8373] mt-2">
              Nu am găsit materiale potrivite criteriilor tale de filtrare. Încearcă să schimbi termenul sau nivelul dorit.
            </p>
            <button
              onClick={clearAllFilters}
              className="mt-5 bg-[#E06D53] text-white px-5 py-2.5 rounded-2xl text-xs font-semibold hover:bg-[#D97736] transition-transform active:scale-95"
            >
              Resetează căutările
            </button>
          </div>
        )}
      </div>

      {/* Details Preview Modal */}
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

export default function Home() {
  return (
    <Suspense fallback={<div className="p-8 text-center text-[#8A8373] text-sm">Se încarcă...</div>}>
      <HomeContent />
    </Suspense>
  );
}
