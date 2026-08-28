"use client";

import React, { useState } from "react";
import Link from "next/link";
import { mockWeekDays, DayStatus } from "@/data/demoWeek";
import { Sparkles, Calendar, ClipboardList, Printer, ArrowRight, CheckCircle2, AlertCircle, Clock } from "lucide-react";

export default function DashboardOverviewPage() {
  const [days, setDays] = useState<DayStatus[]>(mockWeekDays);

  const readyCount = days.filter((d) => d.status === "Pregătită").length;
  const progressPercent = Math.round((readyCount / days.length) * 100);

  return (
    <div className="space-y-8 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <div className="bg-gradient-to-r from-coral-light via-cream-soft to-sage-light p-6 sm:p-8 rounded-4xl border-2 border-softBorder shadow-paper flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div className="space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white rounded-full text-xs font-bold text-coral shadow-sm">
            <span>🌷 EduZori Dashboard</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-heading font-extrabold text-charcoal">
            „Bună, Maria! 🌷 Iată ce ai pregătit pentru săptămâna aceasta.”
          </h1>
          <p className="text-sm font-body text-charcoal-muted max-w-xl">
            Săptămâna curentă: <strong>12 - 16 Octombrie 2026</strong> • Tema: <em>„Bogațiile Toamnei — Fructe dulci și zemoase”</em>
          </p>
        </div>

        <Link
          href="/dashboard/generator"
          className="px-6 py-3.5 rounded-3xl bg-coral hover:bg-coral-hover text-white font-heading font-extrabold text-sm shadow-paper hover:shadow-floating transition-all flex items-center gap-2 shrink-0 transform hover:-translate-y-0.5"
        >
          <Sparkles className="w-4 h-4" />
          <span>Generează toți pașii zilei</span>
        </Link>
      </div>

      {/* Readiness Progress Bar */}
      <div className="bg-white p-6 rounded-3xl border border-softBorder shadow-sm space-y-3">
        <div className="flex items-center justify-between text-xs font-heading font-extrabold text-charcoal">
          <span>Progres pregătire săptămână: {readyCount} / {days.length} zile gata</span>
          <span className="text-sage">{progressPercent}% finalizat</span>
        </div>
        <div className="w-full bg-cream-soft h-3 rounded-full overflow-hidden border border-softBorder">
          <div
            className="bg-sage h-full transition-all duration-500 rounded-full"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Daily Readiness Trackers Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-heading font-extrabold text-charcoal">
            Planul Săptămânal pe Zile
          </h2>
          <span className="text-xs font-medium text-taupe">Orar oficial presincronizat</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          {days.map((day) => (
            <div
              key={day.id}
              className={`p-5 rounded-3xl border-2 transition-all flex flex-col justify-between space-y-4 ${
                day.status === "Pregătită"
                  ? "bg-white border-sage/40 shadow-sm"
                  : day.status === "De pregătit"
                  ? "bg-white border-sunYellow shadow-sm ring-2 ring-sunYellow/20"
                  : "bg-white border-softBorder"
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-heading font-extrabold text-base text-charcoal">{day.dayName}</span>
                  {day.status === "Pregătită" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sage-light text-charcoal">
                      🟢 Pregătită
                    </span>
                  )}
                  {day.status === "De pregătit" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-sunYellow-light text-charcoal">
                      🟡 De pregătit
                    </span>
                  )}
                  {day.status === "Neîncepută" && (
                    <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-gray-100 text-gray-400">
                      ⚪ Neîncepută
                    </span>
                  )}
                </div>

                <p className="text-xs text-taupe font-medium">{day.dateFormatted}</p>
                <p className="text-xs font-bold text-coral pt-1">{day.adeDomain.split(" ")[0]}</p>
                <p className="text-xs text-charcoal font-medium line-clamp-2 leading-snug">{day.adeTitle}</p>
              </div>

              <div className="pt-2 border-t border-softBorder">
                {day.status === "Pregătită" ? (
                  <Link
                    href="/dashboard/generator"
                    className="w-full text-center block py-2 rounded-xl bg-sage-light text-charcoal font-heading font-bold text-xs hover:bg-sage transition-colors"
                  >
                    Vezi pachetul
                  </Link>
                ) : (
                  <Link
                    href="/dashboard/generator"
                    className="w-full text-center block py-2 rounded-xl bg-coral text-white font-heading font-bold text-xs hover:bg-coral-hover transition-colors shadow-sm"
                  >
                    Pregătește ziua
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Action Modules */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
        <Link
          href="/dashboard/generator"
          className="bg-white p-6 rounded-3xl border-2 border-softBorder hover:border-coral transition-all shadow-paper hover:shadow-floating group"
        >
          <div className="w-12 h-12 rounded-2xl bg-coral-light text-coral flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Sparkles className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
            Generează Toată Ziua (AI)
          </h3>
          <p className="text-xs text-charcoal-muted font-body leading-relaxed mb-4">
            Creează proiect didactic ADE, 5 centre ALA1, jocuri ALA2, tranziții, rutine și fișă de lucru.
          </p>
          <span className="text-xs font-bold text-coral flex items-center gap-1">
            Accesează Generatorul <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/dashboard/condica"
          className="bg-white p-6 rounded-3xl border-2 border-softBorder hover:border-sage transition-all shadow-paper hover:shadow-floating group"
        >
          <div className="w-12 h-12 rounded-2xl bg-sage-light text-sage flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <ClipboardList className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
            Condica Educatoarei
          </h3>
          <p className="text-xs text-charcoal-muted font-body leading-relaxed mb-4">
            Evidența activităților zilnice presincronizată cu generările tale, gata de descărcat în DOCX/PDF.
          </p>
          <span className="text-xs font-bold text-sage flex items-center gap-1">
            Deschide Condica <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>

        <Link
          href="/resurse"
          className="bg-white p-6 rounded-3xl border-2 border-softBorder hover:border-sunYellow transition-all shadow-paper hover:shadow-floating group"
        >
          <div className="w-12 h-12 rounded-2xl bg-sunYellow-light text-charcoal flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
            <Printer className="w-6 h-6" />
          </div>
          <h3 className="font-heading font-bold text-lg text-charcoal mb-1">
            Bibliotecă de Fișe
          </h3>
          <p className="text-xs text-charcoal-muted font-body leading-relaxed mb-4">
            Peste 250 de fișe grafomotrice, planșe de colorat și materiale didactice printabile.
          </p>
          <span className="text-xs font-bold text-charcoal flex items-center gap-1">
            Exlorează Fișele <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </Link>
      </div>
    </div>
  );
}
