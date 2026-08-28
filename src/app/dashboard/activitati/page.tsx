"use client";

import React from "react";
import { Palette, Sparkles } from "lucide-react";

export default function ActivitatiPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sunYellow-light rounded-full text-xs font-bold text-charcoal mb-2">
          <Palette className="w-3.5 h-3.5 text-coral" />
          <span>Banca de Idei și Activități Integrare</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
          Banca de Activități Didactice
        </h1>
        <p className="text-xs text-charcoal-muted font-body">
          Sute de jocuri didactice, poezii, ghicitori și activități practice clasificate pe domenii.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-3xl border-2 border-softBorder shadow-paper text-center">
          <span className="text-3xl mb-2 block">🎨</span>
          <h3 className="font-heading font-bold text-base text-charcoal">Domeniul Estetic & Creativ</h3>
          <p className="text-xs text-taupe mt-1">Tehnici de pictură, colaj și dactilopictură.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border-2 border-softBorder shadow-paper text-center">
          <span className="text-3xl mb-2 block">🔢</span>
          <h3 className="font-heading font-bold text-base text-charcoal">Domeniul Științe</h3>
          <p className="text-xs text-taupe mt-1">Jocuri logico-matematice și experimente.</p>
        </div>
        <div className="bg-white p-6 rounded-3xl border-2 border-softBorder shadow-paper text-center">
          <span className="text-3xl mb-2 block">🗣️</span>
          <h3 className="font-heading font-bold text-base text-charcoal">Limbă și Comunicare</h3>
          <p className="text-xs text-taupe mt-1">Convorbiri, povești create și teatru de păpuși.</p>
        </div>
      </div>
    </div>
  );
}
