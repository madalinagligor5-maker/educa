"use client";

import React from "react";
import { FolderArchive, FileText, Download } from "lucide-react";

export default function BibliotecaPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-light rounded-full text-xs font-bold text-charcoal mb-2">
          <FolderArchive className="w-3.5 h-3.5 text-sage" />
          <span>Arhivă Personală & Dosarul Grupei</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
          Biblioteca de Documente Descarcate
        </h1>
        <p className="text-xs text-charcoal-muted font-body">
          Toate proiectele didactice și condicele generate sunt salvate în siguranță în contul tău.
        </p>
      </div>

      <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-4">
        <h3 className="font-heading font-extrabold text-lg text-charcoal">Documente Salvate Recent</h3>
        <div className="space-y-3">
          <div className="p-4 bg-cream-soft rounded-2xl border border-softBorder flex items-center justify-between">
            <div className="flex items-center gap-3">
              <FileText className="w-6 h-6 text-coral" />
              <div>
                <h4 className="font-heading font-bold text-sm text-charcoal">Proiect Didactic Integrat - Bogațiile Toamnei</h4>
                <p className="text-[11px] text-taupe">Generat pe 12 Octombrie 2026 • Format DOCX & PDF</p>
              </div>
            </div>
            <button className="px-3.5 py-1.5 bg-sage text-white font-bold text-xs rounded-xl flex items-center gap-1">
              <Download className="w-3.5 h-3.5" /> Re-descarcă
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
