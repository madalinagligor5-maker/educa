"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, Palette, Microscope, Boxes, Users, Smile, Compass, Clock, FileCheck } from "lucide-react";

interface CategoryTab {
  id: string;
  title: string;
  subtitle: string;
  color: string;
  badge: string;
  details: {
    heading: string;
    description: string;
    items: string[];
    subCategories?: Array<{ title: string; desc: string; icon: any }>;
  };
}

export const curricularCategories: CategoryTab[] = [
  {
    id: "ade",
    title: "ADE — Activități pe Domenii Experiențiale",
    subtitle: "DLC, DȘ, DOS, DEC, DPM",
    color: "bg-coral-light border-coral text-coral",
    badge: "Proiectare Didactică Oficială",
    details: {
      heading: "Proiecte didactice complete pe cele 5 domenii curriculare",
      description: "EduZori generează proiectul didactic integral pentru activitatea pe domenii experiențiale, redactat conform rigorilor metodice din învățământul preșcolar din România.",
      items: [
        "Scop, mijloc de realizare și tipul activității (predare, consolidare, evaluare)",
        "Obiective operaționale măsurabile (Cognitive, Psihomotorii, Socio-Afective)",
        "Strategii didactice: metode, procedee, mijloace și forme de organizare",
        "Tabel metodic pe 5 etape clare cu activitatea educatoarei, activitatea copiilor și evaluare",
      ],
    },
  },
  {
    id: "ala1",
    title: "ALA1 — Centre de Interes",
    subtitle: "Bibliotecă, Artă, Știință, Construcții, Joc de Rol",
    color: "bg-sage-light border-sage text-sage",
    badge: "5 Centre Liber-Alese",
    details: {
      heading: "Organizarea celor 5 centre de interes pentru grupa ta",
      description: "Planifică simultan sarcinile și materialele pentru fiecare centru de interes, corelate 100% cu tema săptămânală.",
      items: [
        "Bibliotecă: citire de imagini, grafomotricitate, formulare propoziții",
        "Artă: desen, pictură, modelaj, colaj, abilități practice",
        "Știință: experimente senzoriale, clasificări, numărare, explorare",
        "Construcții: manipulare cuburi, forme spațiale, cooperare",
        "Joc de Rol: dramatizări, transpunerea în meserii și roluri sociale",
      ],
      subCategories: [
        { title: "Bibliotecă", desc: "Citire de imagini & grafomotricitate", icon: BookOpen },
        { title: "Artă", desc: "Pictură, modelaj, colaj creativ", icon: Palette },
        { title: "Știință", desc: "Experimente & clasificări logice", icon: Microscope },
        { title: "Construcții", desc: "Manipulare spațială și cuburi", icon: Boxes },
        { title: "Joc de Rol", desc: "Dramatizare & empatie socială", icon: Users },
      ],
    },
  },
  {
    id: "ala2",
    title: "ALA2 — Jocuri Recreative & Mișcare",
    subtitle: "Jocuri de mișcare, sportive, distractiv-recreative",
    color: "bg-sunYellow-light border-sunYellow text-charcoal",
    badge: "Energizare & Relaxare",
    details: {
      heading: "Activități recreative și de dezvoltare motrică",
      description: "Jocuri dinamice cu reguli clare, destinate atât spațiului din grupă cât și curții de joacă.",
      items: [
        "Jocuri de mișcare cu reguli clare și stimularea spiritului de echipă",
        "Jocuri distractiv-recreative pentru tranziția stărilor de spirit",
        "Momente de relaxare, gimnastică ritmică și deconectare după masă",
      ],
    },
  },
  {
    id: "adp",
    title: "ADP — Dezvoltare Personală",
    subtitle: "Întâlnirea de Dimineață, Tranziții, Rutine",
    color: "bg-powderPink-light border-powderPink text-charcoal",
    badge: "Rutine Zilnice",
    details: {
      heading: "Startul perfect al fiecărei zile la grupă",
      description: "Toate momentele cheie de dezvoltare personală sunt integrate în scenariul zilnic.",
      items: [
        "Întâlnirea de dimineață: Salutul, Prezența, Calendarul Naturii, Noutatea Zilei",
        "Tranziții: Versuri scurte, cântecele și rime potrivite fiecărui moment",
        "Rutine: Spălatul pe mâini, servirea mesei, pregătirea de somn",
        "Activități Socio-Emoționale (SEL) pentru autoreglare",
      ],
    },
  },
  {
    id: "condica",
    title: "Condica Educatoarei",
    subtitle: "Evidență zilnică și export oficial 1-click",
    color: "bg-lavender-light border-lavender text-charcoal",
    badge: "Sincronizare Automată",
    details: {
      heading: "Condica de evidență didactică este gata de tipărit",
      description: "Nu mai completezi de două ori! Proiectarea zilei se transcrie automat în formatul oficial al Condicii Educatoarei.",
      items: [
        "Intervale orare pre-completate conform normativului OMEN 4694/2019",
        "Rezumat sintetic al tuturor activităților desfășurate (ADP, ADE, ALA1, ALA2)",
        "Rubrică de observații și aprecieri privind evoluția copiilor",
        "Export 1-click în format PDF sau DOCX pregătit pentru dosar",
      ],
    },
  },
];

export default function CurricularMatrix() {
  const [activeTab, setActiveTab] = useState<string>(curricularCategories[0].id);

  const selectedCategory = curricularCategories.find((c) => c.id === activeTab) || curricularCategories[0];

  return (
    <section id="functionalitati" className="py-20 bg-cream relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block px-4 py-1.5 rounded-full bg-sage-light text-charcoal font-semibold text-xs tracking-wider uppercase mb-3 shadow-sm">
            CURRICULUM PREȘCOLAR OMEN 4694/2019
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            Matricea Curriculară Integrată EduZori
          </h2>
          <p className="mt-3 text-lg text-charcoal-muted font-body">
            Fiecare element este organizat impecabil, cu legături logice între domenii, centre de interes și fișe de lucru.
          </p>
        </div>

        {/* Tab Selection Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {curricularCategories.map((cat) => {
            const isActive = cat.id === activeTab;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`px-5 py-3 rounded-2xl font-heading font-bold text-sm transition-all flex items-center gap-2 ${
                  isActive
                    ? "bg-coral text-white shadow-paper ring-2 ring-coral scale-105"
                    : "bg-white text-charcoal border border-softBorder hover:bg-cream-soft"
                }`}
              >
                <span>{cat.title.split(" — ")[0]}</span>
              </button>
            );
          })}
        </div>

        {/* Active Content Display Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.25 }}
            className="bg-white rounded-4xl p-8 sm:p-10 border-2 border-softBorder shadow-floating"
          >
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-6 pb-6 border-b border-softBorder">
              <div>
                <span className="inline-block px-3 py-1 bg-cream-soft text-charcoal font-semibold text-xs rounded-lg mb-2">
                  {selectedCategory.badge}
                </span>
                <h3 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
                  {selectedCategory.title}
                </h3>
                <p className="text-sm font-medium text-taupe">{selectedCategory.subtitle}</p>
              </div>

              <div className="flex items-center gap-2 bg-sage-light px-4 py-2 rounded-2xl">
                <FileCheck className="w-5 h-5 text-sage" />
                <span className="text-xs font-bold text-charcoal">Conform Programă OMEN 4694/2019</span>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 space-y-4">
                <h4 className="font-heading font-bold text-xl text-charcoal">
                  {selectedCategory.details.heading}
                </h4>
                <p className="text-charcoal-muted leading-relaxed font-body">
                  {selectedCategory.details.description}
                </p>

                <ul className="space-y-3 pt-2">
                  {selectedCategory.details.items.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-sm font-medium text-charcoal">
                      <span className="w-5 h-5 rounded-full bg-coral-light text-coral flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                        ✓
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Sub-categories grid if available (ALA1) */}
              <div className="lg:col-span-5">
                {selectedCategory.details.subCategories ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {selectedCategory.details.subCategories.map((sub, sIdx) => {
                      const IconComp = sub.icon;
                      return (
                        <div key={sIdx} className="bg-cream-soft p-4 rounded-2xl border border-softBorder flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center text-coral shadow-sm shrink-0">
                            <IconComp className="w-5 h-5" />
                          </div>
                          <div>
                            <h5 className="font-heading font-bold text-sm text-charcoal">{sub.title}</h5>
                            <p className="text-[11px] text-charcoal-muted font-medium">{sub.desc}</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="bg-cream-soft p-6 rounded-3xl border border-softBorder text-center flex flex-col items-center justify-center h-full">
                    <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center text-3xl shadow-sm mb-3">
                      💡
                    </div>
                    <h5 className="font-heading font-bold text-lg text-charcoal mb-2">
                      Gata de export în 1 minut
                    </h5>
                    <p className="text-xs text-charcoal-muted">
                      Poți vizualiza, edita direct și descărca fișierul DOCX sau PDF direct pe laptop sau telefon.
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
