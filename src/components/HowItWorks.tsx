"use client";

import React from "react";
import { Users, BookOpen, Sparkles } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Alegi grupa",
      subtitle: "Grupa Mică (3-4 ani), Mijlocie (4-5 ani) sau Mare (5-6 ani)",
      description: "EduZori adaptează automat nivelul de dificultate al obiectivelor și fișelor la particularitățile de vârstă.",
      icon: Users,
      color: "bg-coral-light border-coral text-coral",
    },
    {
      step: "02",
      title: "Alegi tema",
      subtitle: "ex: Toamna — Fructele de toamnă",
      description: "Introduci tema săptămânală sau subtema, iar AI-ul pedagogic creează o poveste integrată pentru toată ziua.",
      icon: BookOpen,
      color: "bg-sage-light border-sage text-sage",
    },
    {
      step: "03",
      title: "Primești ziua pregătită",
      subtitle: "ADE, ALA1, ALA2, ADP, Fișă, Condică",
      description: "Descarci tot pachetul în format DOCX / PDF sau îl editezi direct pe platformă în câteva clipe.",
      icon: Sparkles,
      color: "bg-sunYellow-light border-sunYellow text-charcoal",
    },
  ];

  return (
    <section id="cum-functioneaza" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sunYellow text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
            SIMPLU ȘI RAPID
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            Cum funcționează EduZori în 3 pași?
          </h2>
          <p className="mt-3 text-lg text-charcoal-muted font-body">
            Fără instalări complicate. Ai nevoie doar de 1 minut și o ceașcă de cafea caldă.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((s, idx) => {
            const IconComponent = s.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-paper relative hover:shadow-floating transition-all hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl font-heading font-extrabold text-taupe/40">{s.step}</span>
                  <div className={`w-12 h-12 rounded-2xl border-2 flex items-center justify-center ${s.color}`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                </div>

                <h3 className="text-2xl font-heading font-extrabold text-charcoal mb-1">{s.title}</h3>
                <p className="text-xs font-semibold text-coral mb-3">{s.subtitle}</p>
                <p className="text-sm text-charcoal-muted font-body leading-relaxed">{s.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
