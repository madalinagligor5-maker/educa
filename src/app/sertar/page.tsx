"use client";

import { useState, useEffect } from "react";
import { mockResources, Resource } from "@/data/resources";
import { FolderHeart, Folder, ArrowLeft, Heart } from "lucide-react";
import Link from "next/link";

export default function SertarPage() {
  const [savedIds, setSavedIds] = useState<string[]>([]);
  const [savedResources, setSavedResources] = useState<Resource[]>([]);

  useEffect(() => {
    const defaultIds = ["res-1", "res-3"];
    setSavedIds(defaultIds);
    setSavedResources(mockResources.filter((res) => defaultIds.includes(res.id)));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-8">
      <div className="mb-6">
        <Link href="/dashboard" className="inline-flex items-center gap-1.5 text-xs font-bold text-taupe hover:text-coral transition-colors uppercase tracking-wider">
          <ArrowLeft className="h-4 w-4" />
          Înapoi la Dashboard
        </Link>
      </div>

      <div className="bg-white border-2 border-softBorder rounded-4xl p-8 shadow-paper">
        <div className="flex items-center gap-2 mb-4">
          <FolderHeart className="h-6 w-6 text-coral" />
          <h1 className="text-2xl font-heading font-extrabold text-charcoal">Sertarul Meu cu Materiale</h1>
        </div>

        <p className="text-xs text-taupe mb-6">
          Materialele tale salvate pentru activitățile de la grupă.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {savedResources.map((res) => (
            <div key={res.id} className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-2">
              <span className="text-[10px] font-bold bg-white text-coral px-2.5 py-0.5 rounded-md border border-softBorder">
                {res.subLevel}
              </span>
              <h3 className="font-heading font-bold text-base text-charcoal">{res.title}</h3>
              <p className="text-xs text-charcoal-muted line-clamp-2">{res.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
