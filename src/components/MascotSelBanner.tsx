"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";

interface Mascot {
  id: string;
  name: string;
  role: string;
  emotion: string;
  colorBg: string;
  textColor: string;
  emoji: string;
  quote: string;
}

export const mascotsList: Mascot[] = [
  {
    id: "mimo",
    name: "Ursulețul Mimo",
    role: "Prietenul Empatic",
    emotion: "Bucurie & Warmth",
    colorBg: "bg-sunYellow-light border-sunYellow",
    textColor: "text-charcoal",
    emoji: "🐻",
    quote: "Astăzi învățăm să împărțim bucuria cu cei din jur!",
  },
  {
    id: "viki",
    name: "Vulpița Viki",
    role: "Exploratorul Curios",
    emotion: "Încredere & Curaj",
    colorBg: "bg-coral-light border-coral",
    textColor: "text-charcoal",
    emoji: "🦊",
    quote: "Fiecare problemă are cel puțin o soluție creativă!",
  },
  {
    id: "ipi",
    name: "Iepurașul Ipi",
    role: "Maestrul Calmului",
    emotion: "Liniște & Echilibru",
    colorBg: "bg-sage-light border-sage",
    textColor: "text-charcoal",
    emoji: "🐰",
    quote: "Inhalăm miros de floare, suflăm în lumânare... și ne liništim!",
  },
  {
    id: "aris",
    name: "Ariciul Aris",
    role: "Artistul Grupei",
    emotion: "Creativitate & Magie",
    colorBg: "bg-lavender-light border-lavender",
    textColor: "text-charcoal",
    emoji: "🦔",
    quote: "Micuțele noastre mâini creează mari opere de artă!",
  },
];

export default function MascotSelBanner() {
  const [activeMascot, setActiveMascot] = useState<Mascot>(mascotsList[0]);

  const handleMascotClick = (mascot: Mascot) => {
    setActiveMascot(mascot);
    confetti({
      particleCount: 25,
      spread: 50,
      origin: { y: 0.8 },
      colors: ["#FF8F7E", "#A8C5A1", "#FFD776", "#DCCBFA"],
    });
  };

  return (
    <section className="py-16 bg-cream-soft relative overflow-hidden border-y border-softBorder">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-powderPink text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
            COLȚUL SOCIO-EMOȚIONAL (SEL)
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            „Prietenii tăi în fiecare zi!”
          </h2>
          <p className="mt-3 text-lg text-charcoal-muted font-body">
            EduZori integrează personajele noastre simpatice în întâlnirea de dimineață, fișele de lucru și tranzițiile zilnice pentru a dezvolta inteligența emoțională a copiilor.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Mascot Selector List */}
          <div className="lg:col-span-5 space-y-4">
            {mascotsList.map((m) => {
              const isSelected = activeMascot.id === m.id;
              return (
                <motion.div
                  key={m.id}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handleMascotClick(m)}
                  className={`cursor-pointer p-4 rounded-3xl border-2 transition-all flex items-center gap-4 ${
                    isSelected
                      ? `${m.colorBg} shadow-paper ring-2 ring-coral`
                      : "bg-white border-softBorder hover:border-sage"
                  }`}
                >
                  <div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center text-3xl shadow-sm border border-softBorder">
                    {m.emoji}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-bold text-lg text-charcoal">{m.name}</h3>
                    <p className="text-xs font-medium text-taupe">{m.role} • <span className="text-coral font-semibold">{m.emotion}</span></p>
                  </div>
                  {isSelected && (
                    <span className="text-coral text-xl font-bold">✨</span>
                  )}
                </motion.div>
              );
            })}
          </div>

          {/* Active Mascot Display Card */}
          <div className="lg:col-span-7">
            <motion.div
              key={activeMascot.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating relative"
            >
              <div className="absolute -top-5 -right-5 bg-sunYellow text-charcoal font-heading font-extrabold px-4 py-2 rounded-full text-xs shadow-md transform rotate-3">
                Mascotă EduZori 🌟
              </div>

              <div className="flex flex-col sm:flex-row items-center gap-6">
                <div className="w-32 h-32 rounded-3xl bg-cream-soft border-4 border-sage flex items-center justify-center text-6xl shadow-inner shrink-0">
                  {activeMascot.emoji}
                </div>

                <div className="space-y-3 text-center sm:text-left">
                  <span className="inline-block px-3 py-1 bg-lavender text-charcoal text-xs font-semibold rounded-full">
                    {activeMascot.role}
                  </span>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                    {activeMascot.name}
                  </h3>
                  <p className="text-charcoal-muted italic font-medium bg-cream p-4 rounded-2xl border border-softBorder text-sm">
                    „{activeMascot.quote}”
                  </p>
                  <div className="flex flex-wrap gap-2 justify-center sm:justify-start pt-2">
                    <span className="text-xs font-semibold bg-sage-light text-charcoal px-3 py-1 rounded-lg">
                      🟢 Încorporat în ADP
                    </span>
                    <span className="text-xs font-semibold bg-powderPink-light text-charcoal px-3 py-1 rounded-lg">
                      🌸 Rutine de Autoreglare
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
