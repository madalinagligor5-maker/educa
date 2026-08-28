"use client";

import React from "react";
import { Calendar as CalendarIcon, Sparkles } from "lucide-react";

export default function CalendarPage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-sage-light rounded-full text-xs font-bold text-charcoal mb-2">
          <CalendarIcon className="w-3.5 h-3.5 text-sage" />
          <span>Planificare Săptămânală Integrată</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
          Calendarul Didactic EduZori
        </h1>
        <p className="text-xs text-charcoal-muted font-body">
          Vizualizează și organizează temele anuale, vacanțele școlare și activitățile pe săptămâni.
        </p>
      </div>

      <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating text-center py-16">
        <CalendarIcon className="w-12 h-12 text-sage mx-auto mb-3" />
        <h3 className="text-xl font-heading font-extrabold text-charcoal mb-2">
          Calendarul Semestrului I este Sincronizat
        </h3>
        <p className="text-xs text-charcoal-muted max-w-md mx-auto">
          Toate săptămânile tematice din anul școlar 2026-2027 sunt presincronizate cu programa OMEN 4694/2019.
        </p>
      </div>
    </div>
  );
}
