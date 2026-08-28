"use client";

import React from "react";
import { XCircle, CheckCircle2, Clock, Heart, Coffee } from "lucide-react";

export default function PainPointsSection() {
  return (
    <section className="py-20 bg-cream-soft border-t border-softBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-powderPink text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
            Timpul tău este prețios
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            „Cât timp pierzi după ce pleacă cei mici?”
          </h2>
          <p className="mt-3 text-lg text-charcoal-muted font-body">
            Fără dosare uitate pe masă, fără căutări interminabile pe 10 grupuri de Facebook.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch max-w-5xl mx-auto">
          {/* Before: Traditional Chaotic Method */}
          <div className="bg-white rounded-4xl p-8 border-2 border-red-100 shadow-paper relative flex flex-col justify-between">
            <div className="absolute -top-4 left-6 bg-red-100 text-red-700 font-heading font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <XCircle className="w-3.5 h-3.5" />
              <span>CUM ERA ÎNAINTE</span>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                Seara haotică a educatoarei obosite
              </h3>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-charcoal-muted">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Căutare pe Google și WhatsApp pentru idei de activități nevalidate pedagogic.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal-muted">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Scriere manuală pe hârtie a proiectelor didactice și re-tastare pe laptop.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal-muted">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Formularea greoaie a obiectivelor operaționale conforme programei 2019.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal-muted">
                  <span className="text-red-500 font-bold mt-0.5">✕</span>
                  <span>Peste 2-3 ore pierdute zilnic după terminarea programului la grădiniță.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-gray-100 flex items-center gap-2 text-xs font-bold text-red-600">
              <Clock className="w-4 h-4" />
              <span>Total timp pierdut: ~15 ore pe săptămână</span>
            </div>
          </div>

          {/* After: The EduZori Unified Workflow */}
          <div className="bg-white rounded-4xl p-8 border-2 border-sage shadow-floating relative flex flex-col justify-between ring-2 ring-sage/30">
            <div className="absolute -top-4 left-6 bg-sage text-white font-heading font-bold text-xs px-3 py-1 rounded-full flex items-center gap-1">
              <CheckCircle2 className="w-3.5 h-3.5" />
              <span>CUM ESTE CU EDUZORI</span>
            </div>

            <div className="space-y-4 pt-2">
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                Seara liniștită a educatoarei inspirate
              </h3>

              <ul className="space-y-3.5">
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="text-sage font-bold mt-0.5">✓</span>
                  <span>Generarea integrată a întregului pachet al zilei (ADP, ADE, ALA1, ALA2, Fișă, Condică) în doar 10 secunde.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="text-sage font-bold mt-0.5">✓</span>
                  <span>Strict conform Curriculumului OMEN 4694/2019 cu obiective măsurabile pre-calculate.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="text-sage font-bold mt-0.5">✓</span>
                  <span>Sincronizare automată cu Condica Educatoarei și export 1-click în DOCX și PDF.</span>
                </li>
                <li className="flex items-start gap-3 text-sm text-charcoal">
                  <span className="text-sage font-bold mt-0.5">✓</span>
                  <span>Colțul Socio-Emoțional (SEL) inclus pentru o atmosferă caldă la grupă.</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 pt-4 border-t border-sage-light flex items-center justify-between text-xs font-bold text-sage">
              <span className="flex items-center gap-1.5">
                <Coffee className="w-4 h-4 text-coral" /> Timp necesar: sub 5 minute pe zi
              </span>
              <span className="bg-sunYellow text-charcoal px-2.5 py-1 rounded-lg">
                Economisești 12+ ore / săpt.
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
