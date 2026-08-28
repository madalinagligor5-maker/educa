"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockResources, Resource } from "@/data/resources";
import { Download, FileText, Filter, ArrowRight, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

export default function FreeResourcesSection() {
  const [selectedSubLevel, setSelectedSubLevel] = useState<string>("Toate");
  const [selectedCategory, setSelectedCategory] = useState<string>("Toate");

  const filteredResources = mockResources.filter((res) => {
    const matchesLevel =
      selectedSubLevel === "Toate" || res.subLevel === selectedSubLevel || res.subLevel === "Toate Grupele";
    const matchesCategory =
      selectedCategory === "Toate" || res.category === selectedCategory;
    return matchesLevel && matchesCategory;
  });

  const handleDownload = (title: string) => {
    confetti({
      particleCount: 30,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#FF8F7E", "#A8C5A1", "#FFD776"],
    });
    alert(`Descărcare inițiată pentru: "${title}". Fișierul PDF este pregătit!`);
  };

  return (
    <section className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full bg-sunYellow text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
              RESURSE GRATUITE PENTRU EDUCATOARE
            </span>
            <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
              Fișe de lucru și planșe de descărcat
            </h2>
            <p className="mt-2 text-base text-charcoal-muted font-body">
              Materiale educaționale gata de tipărit pentru activitatea zilnică la grupă.
            </p>
          </div>

          <Link
            href="/resurse"
            className="inline-flex items-center gap-2 text-coral font-heading font-bold text-sm hover:underline"
          >
            <span>Vezi toate resursele (250+)</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center gap-3 mb-8 bg-white p-4 rounded-3xl border border-softBorder shadow-sm">
          <div className="flex items-center gap-1.5 text-xs font-bold text-taupe pr-2 border-r border-softBorder">
            <Filter className="w-4 h-4 text-coral" />
            <span>Filtrează:</span>
          </div>

          {/* Group Level Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {["Toate", "Grupa Mică", "Grupa Mijlocie", "Grupa Mare"].map((lvl) => (
              <button
                key={lvl}
                onClick={() => setSelectedSubLevel(lvl)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedSubLevel === lvl
                    ? "bg-coral text-white shadow-sm"
                    : "bg-cream-soft text-charcoal hover:bg-cream"
                }`}
              >
                {lvl}
              </button>
            ))}
          </div>

          <div className="hidden sm:block h-5 w-px bg-softBorder mx-2" />

          {/* Category Filter */}
          <div className="flex flex-wrap items-center gap-2">
            {["Toate", "DLC", "DȘ", "DEC", "SEL", "ADP"].map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all ${
                  selectedCategory === cat
                    ? "bg-sage text-white shadow-sm"
                    : "bg-cream-soft text-charcoal hover:bg-cream"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.map((res) => (
            <div
              key={res.id}
              className="bg-white rounded-3xl p-6 border-2 border-softBorder shadow-paper hover:shadow-floating transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="px-3 py-1 bg-powderPink-light text-charcoal font-bold text-[11px] rounded-lg">
                    {res.subLevel}
                  </span>
                  <span className="text-[11px] font-semibold text-taupe flex items-center gap-1">
                    <FileText className="w-3.5 h-3.5 text-sage" />
                    {res.format}
                  </span>
                </div>

                <h3 className="font-heading font-extrabold text-lg text-charcoal mb-2 line-clamp-2">
                  {res.title}
                </h3>
                <p className="text-xs text-charcoal-muted font-body line-clamp-3 mb-4 leading-relaxed">
                  {res.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mb-4">
                  {res.tags.map((t, idx) => (
                    <span key={idx} className="text-[10px] bg-cream-soft text-taupe font-medium px-2 py-0.5 rounded-md">
                      #{t}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-softBorder flex items-center justify-between">
                <span className="text-xs font-bold text-sage">
                  {res.isFree ? "Gratuit" : "Premium"} • {res.downloadsCount} descărcări
                </span>

                <button
                  onClick={() => handleDownload(res.title)}
                  className="px-4 py-2 bg-coral hover:bg-coral-hover text-white rounded-xl font-heading font-bold text-xs shadow-sm transition-all flex items-center gap-1.5"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Descarcă PDF</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
