"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Check, Sparkles, Star } from "lucide-react";
import confetti from "canvas-confetti";

export default function PricingTiers() {
  const [isAnnual, setIsAnnual] = useState(true);

  const handleSelectTier = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.8 },
      colors: ["#FF8F7E", "#A8C5A1", "#FFD776"],
    });
  };

  return (
    <section id="preturi" className="py-20 bg-cream-soft border-t border-softBorder relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
            ABONAMENTE SIMPLE ȘI CORTE
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            Alege planul potrivit pentru grupa ta
          </h2>
          <p className="mt-3 text-lg text-charcoal-muted font-body">
            Fără costuri ascunse. Poți anula oricând cu 1 singur click.
          </p>

          {/* Annual Toggle */}
          <div className="mt-8 inline-flex items-center gap-3 bg-white p-1.5 rounded-full border border-softBorder shadow-sm">
            <button
              onClick={() => setIsAnnual(false)}
              className={`px-5 py-2 rounded-full font-heading font-bold text-xs transition-all ${
                !isAnnual ? "bg-coral text-white shadow-sm" : "text-charcoal hover:text-coral"
              }`}
            >
              Plată Lunară
            </button>
            <button
              onClick={() => setIsAnnual(true)}
              className={`px-5 py-2 rounded-full font-heading font-bold text-xs transition-all flex items-center gap-1.5 ${
                isAnnual ? "bg-coral text-white shadow-sm" : "text-charcoal hover:text-coral"
              }`}
            >
              <span>Plată Anuală</span>
              <span className="bg-sunYellow text-charcoal px-2 py-0.5 rounded-full text-[10px] font-extrabold">
                -25% REDUCERE
              </span>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto items-stretch">
          {/* Gratuit */}
          <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-paper flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 font-bold text-xs rounded-lg mb-3">
                GRATUIT (DEMO)
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">Explorator</h3>
              <p className="text-xs text-charcoal-muted mt-1 font-medium">Ideal pentru a testa generatorul EduZori.</p>

              <div className="my-6">
                <span className="text-4xl font-heading font-extrabold text-charcoal">0 lei</span>
                <span className="text-xs text-taupe font-medium"> / permanent</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs font-medium text-charcoal">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>3 generări de pachete zilnice pe lună</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Acces la resursele SEO gratuite</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Export PDF de bază</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/dashboard/generator"
                onClick={handleSelectTier}
                className="w-full block text-center py-3.5 rounded-2xl bg-cream-soft hover:bg-cream text-charcoal font-heading font-bold text-sm border border-softBorder transition-all"
              >
                Începe Gratuit
              </Link>
            </div>
          </div>

          {/* Standard - Popular Choice */}
          <div className="bg-white rounded-4xl p-8 border-4 border-coral shadow-floating flex flex-col justify-between relative ring-4 ring-coral/20">
            <div className="absolute -top-4 right-8 bg-coral text-white font-heading font-extrabold text-xs px-4 py-1.5 rounded-full shadow-sm flex items-center gap-1">
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>CEL MAI POPULAR</span>
            </div>

            <div>
              <span className="inline-block px-3 py-1 bg-coral-light text-coral font-bold text-xs rounded-lg mb-3">
                STANDARD
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">Educatoare Organizată</h3>
              <p className="text-xs text-charcoal-muted mt-1 font-medium">Pentru activitatea zilnică integrată de la grupă.</p>

              <div className="my-6">
                <span className="text-4xl font-heading font-extrabold text-charcoal">
                  {isAnnual ? "29 lei" : "39 lei"}
                </span>
                <span className="text-xs text-taupe font-medium"> / lună</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs font-medium text-charcoal">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral" />
                  <span>Generări nelimitate de pachete zilnice</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral" />
                  <span>Toate cele 5 centre ALA1 + ADE + ALA2 + ADP</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral" />
                  <span>Sincronizare automatizată cu Condica</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-coral" />
                  <span>Export complet DOCX & PDF editabil</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/dashboard/generator"
                onClick={handleSelectTier}
                className="w-full block text-center py-3.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-extrabold text-sm shadow-paper transition-all"
              >
                Alege Planul Standard
              </Link>
            </div>
          </div>

          {/* Premium */}
          <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-paper flex flex-col justify-between">
            <div>
              <span className="inline-block px-3 py-1 bg-sunYellow-light text-charcoal font-bold text-xs rounded-lg mb-3">
                PREMIUM
              </span>
              <h3 className="text-2xl font-heading font-extrabold text-charcoal">Educatoare Inspirată</h3>
              <p className="text-xs text-charcoal-muted mt-1 font-medium">Kit complet cu asistență AI dedicată și ilustrații.</p>

              <div className="my-6">
                <span className="text-4xl font-heading font-extrabold text-charcoal">
                  {isAnnual ? "49 lei" : "59 lei"}
                </span>
                <span className="text-xs text-taupe font-medium"> / lună</span>
              </div>

              <ul className="space-y-3 pt-2 text-xs font-medium text-charcoal">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Tot ce este inclus în Standard</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Fișe de lucru ilustrate personalizate</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Pachete speciale SEL & Mascote EduZori</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-sage" />
                  <span>Suport tehnic & pedagogic prioritar</span>
                </li>
              </ul>
            </div>

            <div className="pt-8">
              <Link
                href="/dashboard/generator"
                onClick={handleSelectTier}
                className="w-full block text-center py-3.5 rounded-2xl bg-sage hover:bg-sage-hover text-white font-heading font-bold text-sm shadow-sm transition-all"
              >
                Alege Planul Premium
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
