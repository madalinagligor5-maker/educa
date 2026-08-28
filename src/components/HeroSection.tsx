"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle2, AlertCircle, Clock, Sparkles, ArrowRight, Download, Eye, FileText } from "lucide-react";
import { mockWeekDays, DayStatus, sampleGeneratedDay } from "@/data/demoWeek";
import confetti from "canvas-confetti";

export default function HeroSection() {
  const [weekDays, setWeekDays] = useState<DayStatus[]>(mockWeekDays);
  const [selectedDay, setSelectedDay] = useState<DayStatus>(mockWeekDays[0]);
  const [showDemoModal, setShowDemoModal] = useState<boolean>(false);

  const handlePrepareDay = (dayId: string) => {
    setWeekDays((prev) =>
      prev.map((d) =>
        d.id === dayId
          ? { ...d, status: "Pregătită", statusColor: "green" }
          : d
      )
    );

    const updatedDay = weekDays.find((d) => d.id === dayId);
    if (updatedDay) {
      setSelectedDay({ ...updatedDay, status: "Pregătită", statusColor: "green" });
    }

    confetti({
      particleCount: 40,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FF8F7E", "#A8C5A1", "#FFD776"],
    });

    setShowDemoModal(true);
  };

  return (
    <section className="relative pt-12 pb-20 overflow-hidden bg-gradient-to-b from-cream to-cream-soft">
      {/* Background Decorative Blobs */}
      <div className="absolute top-10 left-5 w-72 h-72 bg-powderPink-light rounded-full blur-3xl opacity-60 pointer-events-none" />
      <div className="absolute bottom-10 right-5 w-80 h-80 bg-sage-light rounded-full blur-3xl opacity-60 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto space-y-6">
          {/* Top Pill Tag */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-softBorder shadow-sm text-xs font-semibold text-charcoal"
          >
            <span className="w-2.5 h-2.5 rounded-full bg-coral animate-ping" />
            <span className="text-coral font-bold">EduZori v2.0</span>
            <span className="text-taupe">• Platforma educatoarei organizate și inspirate</span>
          </motion.div>

          {/* Main Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl sm:text-5xl lg:text-6xl font-heading font-extrabold text-charcoal tracking-tight leading-tight"
          >
            „Tu ai grijă de copii. <br className="hidden sm:block" />
            <span className="text-coral underline decoration-sunYellow decoration-4 underline-offset-4">
              Noi avem grijă de pregătire.
            </span>”
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg sm:text-xl font-body text-charcoal-muted max-w-2xl mx-auto leading-relaxed"
          >
            Planificări, proiecte didactice, activități și materiale pentru grădiniță, organizate într-un singur loc conform Curriculum OMEN 4694/2019.
          </motion.p>

          {/* Call to Actions */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2"
          >
            <Link
              href="/dashboard/generator"
              className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-coral hover:bg-coral-hover text-white font-heading font-extrabold text-lg shadow-paper hover:shadow-floating transition-all flex items-center justify-center gap-3 transform hover:-translate-y-0.5"
            >
              <span>Începe gratuit azi</span>
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href="#cum-functioneaza"
              className="w-full sm:w-auto px-8 py-4 rounded-3xl bg-white hover:bg-cream text-charcoal border-2 border-softBorder font-heading font-bold text-lg transition-all flex items-center justify-center gap-2"
            >
              <span>Vezi cum funcționează</span>
            </a>
          </motion.div>

          {/* Guarantees */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs font-semibold text-taupe">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sage" /> Fără card bancar necesar
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sage" /> Sincronizare cu Condica
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-sage" /> Export DOCX & PDF
            </span>
          </div>
        </div>

        {/* Interactive App Mockup Preview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="mt-14 max-w-5xl mx-auto bg-white rounded-4xl p-6 sm:p-8 border-4 border-white shadow-floating relative"
        >
          {/* Mockup Top Header */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-softBorder">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 rounded-full bg-coral" />
              <div className="w-3 h-3 rounded-full bg-sunYellow" />
              <div className="w-3 h-3 rounded-full bg-sage" />
              <span className="ml-2 text-xs font-bold text-taupe tracking-wider uppercase font-heading">
                EduZori Dashboard • Săptămâna curentă (Grupa Mare)
              </span>
            </div>
            <div className="bg-sage-light px-3 py-1 rounded-full text-xs font-bold text-charcoal flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-sage" />
              <span>Tema: Bogațiile Toamnei</span>
            </div>
          </div>

          {/* Interactive Weekly Days Tracker */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3 mb-6">
            {weekDays.map((day) => {
              const isSelected = selectedDay.id === day.id;
              return (
                <div
                  key={day.id}
                  onClick={() => setSelectedDay(day)}
                  className={`cursor-pointer p-4 rounded-3xl border-2 transition-all ${
                    isSelected
                      ? "bg-cream-soft border-coral shadow-sm scale-102"
                      : "bg-white border-softBorder hover:border-sage"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-heading font-extrabold text-sm text-charcoal">{day.dayName}</span>
                    {day.status === "Pregătită" && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sage-light text-charcoal flex items-center gap-1">
                        🟢 Pregătită
                      </span>
                    )}
                    {day.status === "De pregătit" && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-sunYellow-light text-charcoal flex items-center gap-1">
                        🟡 De pregătit
                      </span>
                    )}
                    {day.status === "Neîncepută" && (
                      <span className="text-xs font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-500">
                        ⚪ Neîncepută
                      </span>
                    )}
                  </div>
                  <p className="text-[11px] font-medium text-taupe">{day.dateFormatted}</p>
                  <p className="text-xs font-bold text-charcoal mt-2 line-clamp-1">{day.adeDomain.split(" ")[0]}</p>
                </div>
              );
            })}
          </div>

          {/* Selected Day Details Preview Panel */}
          <div className="bg-cream-soft rounded-3xl p-6 border border-softBorder flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <span className="text-xs font-bold text-coral bg-coral-light px-2.5 py-0.5 rounded-md">
                  {selectedDay.dayName} — {selectedDay.dateFormatted}
                </span>
                <span className="text-xs font-semibold text-taupe">{selectedDay.subtheme}</span>
              </div>
              <h4 className="font-heading font-bold text-lg text-charcoal">
                {selectedDay.adeTitle}
              </h4>
              <p className="text-xs font-medium text-charcoal-muted">
                Pachet generat: ADP (Întâlnirea de dimineață) + ADE ({selectedDay.adeDomain}) + 5 Centre ALA1 + ALA2 + Fișă de lucru + Condică.
              </p>
            </div>

            <div className="shrink-0 flex items-center gap-3">
              {selectedDay.status === "Pregătită" ? (
                <button
                  onClick={() => setShowDemoModal(true)}
                  className="px-5 py-2.5 rounded-2xl bg-sage text-white font-heading font-bold text-xs shadow-sm hover:bg-sage-hover transition-all flex items-center gap-1.5"
                >
                  <Eye className="w-4 h-4" />
                  <span>Vezi pachetul pregătit</span>
                </button>
              ) : (
                <button
                  onClick={() => handlePrepareDay(selectedDay.id)}
                  className="px-5 py-2.5 rounded-2xl bg-coral text-white font-heading font-extrabold text-xs shadow-sm hover:bg-coral-hover transition-all flex items-center gap-1.5 animate-bounce"
                >
                  <Sparkles className="w-4 h-4" />
                  <span>Pregătește ziua în 10 sec</span>
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Demo Package Modal */}
      <AnimatePresence>
        {showDemoModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-charcoal/40 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-white rounded-4xl p-6 sm:p-8 max-w-3xl w-full max-h-[85vh] overflow-y-auto border-4 border-sage shadow-floating relative"
            >
              <button
                onClick={() => setShowDemoModal(false)}
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-cream-soft flex items-center justify-center text-charcoal font-bold text-lg hover:bg-powderPink transition-colors"
              >
                ✕
              </button>

              <div className="flex items-center gap-2 mb-4">
                <span className="px-3 py-1 rounded-full bg-sage-light text-charcoal font-bold text-xs">
                  🟢 ZI PREGĂTITĂ CU EDUZORI
                </span>
                <span className="text-xs font-semibold text-taupe">{sampleGeneratedDay.date}</span>
              </div>

              <h3 className="text-2xl font-heading font-extrabold text-charcoal mb-2">
                {sampleGeneratedDay.adePlan.title}
              </h3>
              <p className="text-xs text-taupe font-medium mb-6">
                Tema: {sampleGeneratedDay.theme} • Subtema: {sampleGeneratedDay.subtheme}
              </p>

              {/* Sample Package Sections */}
              <div className="space-y-4">
                <div className="p-4 bg-cream-soft rounded-2xl border border-softBorder">
                  <h4 className="font-heading font-bold text-sm text-coral mb-1">
                    1. ADP — Întâlnirea de Dimineață & SEL
                  </h4>
                  <p className="text-xs text-charcoal">{sampleGeneratedDay.adpMorningMeeting.greeting}</p>
                </div>

                <div className="p-4 bg-cream-soft rounded-2xl border border-softBorder">
                  <h4 className="font-heading font-bold text-sm text-sage mb-1">
                    2. ADE — {sampleGeneratedDay.adePlan.domain}
                  </h4>
                  <p className="text-xs text-charcoal mb-2"><strong>Mijloc de realizare:</strong> {sampleGeneratedDay.adePlan.realizationMeans}</p>
                  <p className="text-xs text-charcoal font-semibold">Obiective operaționale:</p>
                  <ul className="list-disc list-inside text-xs text-charcoal-muted">
                    {sampleGeneratedDay.adePlan.objectives.cognitive.map((o, idx) => (
                      <li key={idx}>{o}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 bg-cream-soft rounded-2xl border border-softBorder">
                  <h4 className="font-heading font-bold text-sm text-taupe mb-1">
                    3. ALA1 — Cele 5 Centre de Interes
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-charcoal">
                    {sampleGeneratedDay.ala1Centers.map((c, idx) => (
                      <div key={idx} className="bg-white p-2 rounded-xl border border-softBorder">
                        <strong>Centrul {c.center}:</strong> {c.task}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-softBorder">
                <span className="text-xs font-semibold text-sage flex items-center gap-1">
                  <CheckCircle2 className="w-4 h-4 text-sage" /> Sincronizat automat în Condica Educatoarei
                </span>
                <Link
                  href="/dashboard/generator"
                  className="px-6 py-3 bg-coral hover:bg-coral-hover text-white rounded-2xl font-heading font-bold text-sm shadow-sm transition-all"
                >
                  Generează pachetul tău acum
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
