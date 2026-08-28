"use client";

import React, { useState } from "react";
import { ClipboardList, Download, FileText, Filter, Calendar, CheckCircle2, Sparkles } from "lucide-react";
import confetti from "canvas-confetti";

interface CondicaRow {
  id: string;
  date: string;
  gradeLevel: string;
  theme: string;
  subtheme: string;
  interval: string;
  activitiesSummary: string;
  observations: string;
  status: "Exportată" | "În lucru";
}

const mockCondicaEntries: CondicaRow[] = [
  {
    id: "c-1",
    date: "Luni, 12 Oct 2026",
    gradeLevel: "Grupa Mare",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Fructe de toamnă",
    interval: "08:00 - 12:30",
    activitiesSummary: "ADP: Întâlnirea de dimineață 'Coșul Toamnei', Rutine, Tranziții. ADE: DLC - Lectură după imagini 'Coșul Toamnei'. ALA1: B ('Răsfoim albume'), A ('Modelăm mere'), Ș ('Sortăm semințe'), C ('Camionul'), JR ('De-a gospodinele'). ALA2: Joc de mișcare 'Culegătorii iscusiți'.",
    observations: "Obiective atinse 95%. Climat socio-afectiv optim.",
    status: "Exportată",
  },
  {
    id: "c-2",
    date: "Marți, 13 Oct 2026",
    gradeLevel: "Grupa Mare",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Fructe de toamnă",
    interval: "08:00 - 12:30",
    activitiesSummary: "ADP: Întâlnirea de dimineață 'Forme de fructe'. ADE: DȘ - Joc didactic 'Formăm perechi de mere și pere'. ALA1: B, A, Ș, C, JR. ALA2: Joc recreativ 'Sări peste obstacol'.",
    observations: "Dezvoltare optimă a motricității fine.",
    status: "Exportată",
  },
  {
    id: "c-3",
    date: "Miercuri, 14 Oct 2026",
    gradeLevel: "Grupa Mare",
    theme: "Când, cum și de ce se întâmplă?",
    subtheme: "Fructe de toamnă",
    interval: "08:00 - 12:30",
    activitiesSummary: "ADP: Întâlnirea de dimineață 'Mărul roșu'. ADE: DEC - Pictură 'Mere roșii și parfumate'. ALA1: B, A, Ș, C, JR. ALA2: Dansul fructelor.",
    observations: "Creativitate ridicată la centrul Artă.",
    status: "În lucru",
  },
];

export default function CondicaPage() {
  const [entries, setEntries] = useState<CondicaRow[]>(mockCondicaEntries);
  const [selectedMonth, setSelectedMonth] = useState<string>("Octombrie 2026");

  const handleExportOfficialCondica = () => {
    confetti({
      particleCount: 35,
      spread: 60,
      origin: { y: 0.7 },
      colors: ["#FF8F7E", "#A8C5A1", "#FFD776"],
    });
    alert(`Condica de Evidență Didactică pentru luna ${selectedMonth} a fost exportată oficial în format DOCX & PDF!`);
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Header */}
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-lavender-light rounded-full text-xs font-bold text-charcoal mb-2">
            <ClipboardList className="w-3.5 h-3.5 text-coral" />
            <span>Evidență Didactică Conform OMEN 4694/2019</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
            Condica Educatoarei
          </h1>
          <p className="text-xs text-charcoal-muted font-body">
            Sincronizare automată din proiectările zilnice. Gata de printat pentru dosarul grupei.
          </p>
        </div>

        <button
          onClick={handleExportOfficialCondica}
          className="px-6 py-3.5 rounded-3xl bg-sage hover:bg-sage-hover text-white font-heading font-extrabold text-xs shadow-paper transition-all flex items-center gap-2 shrink-0 transform hover:-translate-y-0.5"
        >
          <Download className="w-4 h-4" />
          <span>Exportă Condica Oficială (DOCX/PDF)</span>
        </button>
      </div>

      {/* Register Table Controls */}
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-floating space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-softBorder">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-coral" />
            <span className="text-xs font-bold text-charcoal">Luna selectată:</span>
            <select
              value={selectedMonth}
              onChange={(e) => setSelectedMonth(e.target.value)}
              className="px-3 py-1.5 rounded-xl bg-cream-soft border border-softBorder text-xs font-bold text-charcoal"
            >
              <option value="Octombrie 2026">Octombrie 2026</option>
              <option value="Noiembrie 2026">Noiembrie 2026</option>
              <option value="Decembrie 2026">Decembrie 2026</option>
            </select>
          </div>

          <div className="text-xs font-semibold text-taupe">
            Total înregistrări: <strong className="text-charcoal">{entries.length} zile</strong>
          </div>
        </div>

        {/* Digital Table */}
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-cream-soft text-charcoal font-heading font-bold border-b border-softBorder">
                <th className="p-3">Data</th>
                <th className="p-3">Grupa</th>
                <th className="p-3">Tema & Subtema</th>
                <th className="p-3">Interval</th>
                <th className="p-3">Activități Desfășurate (ADP, ADE, ALA1, ALA2)</th>
                <th className="p-3">Observații Metodice</th>
                <th className="p-3">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-softBorder">
              {entries.map((row) => (
                <tr key={row.id} className="hover:bg-cream-soft/50 transition-colors">
                  <td className="p-3 font-bold text-coral whitespace-nowrap">{row.date}</td>
                  <td className="p-3 font-semibold text-charcoal">{row.gradeLevel}</td>
                  <td className="p-3">
                    <p className="font-bold text-charcoal">{row.theme}</p>
                    <p className="text-[11px] text-taupe">{row.subtheme}</p>
                  </td>
                  <td className="p-3 font-medium text-taupe whitespace-nowrap">{row.interval}</td>
                  <td className="p-3 font-body text-charcoal leading-relaxed max-w-xs">{row.activitiesSummary}</td>
                  <td className="p-3 italic text-charcoal-muted max-w-xs">{row.observations}</td>
                  <td className="p-3">
                    {row.status === "Exportată" ? (
                      <span className="px-2.5 py-1 rounded-full bg-sage-light text-charcoal font-bold text-[10px]">
                        🟢 Exportată
                      </span>
                    ) : (
                      <span className="px-2.5 py-1 rounded-full bg-sunYellow-light text-charcoal font-bold text-[10px]">
                        🟡 În lucru
                      </span>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
