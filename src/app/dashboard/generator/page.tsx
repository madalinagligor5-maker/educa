"use client";

import React, { useState } from "react";
import { sampleGeneratedDay, FullDayPackage } from "@/data/demoWeek";
import { exportDayPlanToDocx } from "@/lib/exportDocx";
import { exportDayPlanToPdf } from "@/lib/exportPdf";
import {
  Sparkles,
  Download,
  FileText,
  CheckCircle2,
  Edit3,
  BookOpen,
  Palette,
  Microscope,
  Boxes,
  Users,
  Smile,
  Heart,
  Calendar,
  Save,
  RefreshCw,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";
import confetti from "canvas-confetti";

export default function FullDayGeneratorPage() {
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [isGenerating, setIsGenerating] = useState<boolean>(false);

  // Form Step 1 Inputs
  const [gradeLevel, setGradeLevel] = useState<string>("Grupa Mare (5-6 ani)");
  const [theme, setTheme] = useState<string>("Când, cum și de ce se întâmplă?");
  const [subtheme, setSubtheme] = useState<string>("Bogațiile Toamnei - Fructe dulci și zemoase");
  const [focusDomain, setFocusDomain] = useState<string>("DLC - Domeniul Limbă și Comunicare");

  // Generated Package State (Editable)
  const [pkg, setPkg] = useState<FullDayPackage>(sampleGeneratedDay);
  const [activePackageTab, setActivePackageTab] = useState<"adp" | "ade" | "ala1" | "ala2" | "worksheet" | "condica">("adp");

  const handleStartGeneration = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setPkg({
        ...sampleGeneratedDay,
        gradeLevel: gradeLevel,
        theme: theme,
        subtheme: subtheme,
        adePlan: {
          ...sampleGeneratedDay.adePlan,
          domain: focusDomain,
        },
      });
      setStep(3);
      confetti({
        particleCount: 50,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#FF8F7E", "#A8C5A1", "#FFD776", "#DCCBFA"],
      });
    }, 1500);
  };

  const handleExportDocx = async () => {
    await exportDayPlanToDocx(pkg);
    confetti({ particleCount: 25, spread: 40, origin: { y: 0.8 } });
  };

  const handleExportPdf = () => {
    exportDayPlanToPdf(pkg);
    confetti({ particleCount: 25, spread: 40, origin: { y: 0.8 } });
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Top Header & Wizard Progress */}
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-light rounded-full text-xs font-bold text-coral mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>AI Pedagogy Engine OMEN 4694/2019</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
            „Generează Toată Ziua”
          </h1>
          <p className="text-xs text-charcoal-muted font-body">
            Pachet complet integrat: ADP (Dimineața) + ADE (Proiect didactic) + ALA1 (5 Centre) + ALA2 + Fișă + Condică.
          </p>
        </div>

        {/* Wizard Step Indicator */}
        <div className="flex items-center gap-2">
          <div className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold ${step === 1 ? "bg-coral text-white" : "bg-cream-soft text-charcoal"}`}>
            1. Parametri
          </div>
          <span className="text-taupe font-bold text-xs">→</span>
          <div className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold ${step === 2 || isGenerating ? "bg-sunYellow text-charcoal" : step === 3 ? "bg-cream-soft text-charcoal" : "bg-gray-100 text-gray-400"}`}>
            2. Generare AI
          </div>
          <span className="text-taupe font-bold text-xs">→</span>
          <div className={`px-4 py-2 rounded-2xl text-xs font-heading font-bold ${step === 3 ? "bg-sage text-white" : "bg-gray-100 text-gray-400"}`}>
            3. Editează & Exportă
          </div>
        </div>
      </div>

      {/* STEP 1: Input Parameters */}
      {step === 1 && (
        <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6 max-w-3xl mx-auto">
          <div className="border-b border-softBorder pb-4">
            <h2 className="text-xl font-heading font-extrabold text-charcoal">Pasul 1: Selectează detaliile zilei</h2>
            <p className="text-xs text-taupe">Introduce datele pentru adaptarea automată a obiectivelor și fișelor de lucru.</p>
          </div>

          <div className="space-y-4">
            {/* Grade Level Selection */}
            <div>
              <label className="block text-xs font-heading font-extrabold text-charcoal mb-2">Grupa de copii</label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {["Grupa Mică (3-4 ani)", "Grupa Mijlocie (4-5 ani)", "Grupa Mare (5-6 ani)"].map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setGradeLevel(lvl)}
                    className={`p-3.5 rounded-2xl border-2 font-heading font-bold text-xs transition-all text-center ${
                      gradeLevel === lvl
                        ? "bg-coral-light border-coral text-coral shadow-sm"
                        : "bg-cream-soft border-softBorder text-charcoal hover:border-coral/50"
                    }`}
                  >
                    {lvl}
                  </button>
                ))}
              </div>
            </div>

            {/* Annual Theme */}
            <div>
              <label className="block text-xs font-heading font-extrabold text-charcoal mb-1">Tema Anuală de Studiu</label>
              <input
                type="text"
                value={theme}
                onChange={(e) => setTheme(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body text-charcoal focus:outline-none focus:border-coral"
                placeholder="ex: Când, cum și de ce se întâmplă?"
              />
            </div>

            {/* Subtheme */}
            <div>
              <label className="block text-xs font-heading font-extrabold text-charcoal mb-1">Subtema Săptămânii</label>
              <input
                type="text"
                value={subtheme}
                onChange={(e) => setSubtheme(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body text-charcoal focus:outline-none focus:border-coral"
                placeholder="ex: Bogațiile Toamnei - Fructe dulci și zemoase"
              />
            </div>

            {/* Primary Domain Focus */}
            <div>
              <label className="block text-xs font-heading font-extrabold text-charcoal mb-2">Domeniul Experiențial Principal (ADE)</label>
              <select
                value={focusDomain}
                onChange={(e) => setFocusDomain(e.target.value)}
                className="w-full px-4 py-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body text-charcoal focus:outline-none focus:border-coral"
              >
                <option value="DLC - Domeniul Limbă și Comunicare">DLC — Limbă și Comunicare (Lectură/Convorbire)</option>
                <option value="DȘ - Domeniul Științe (Matematică)">DȘ — Matematică (Forme/Joc Didactic)</option>
                <option value="DOS - Domeniul Om și Societate">DOS — Activitate Practică / Om și Societate</option>
                <option value="DEC - Domeniul Estetic și Creativ">DEC — Arte Plastice / Muzică</option>
                <option value="DPM - Domeniul Psihomotric">DPM — Educație Fizică / Psihomotricitate</option>
              </select>
            </div>
          </div>

          <div className="pt-4 border-t border-softBorder flex items-center justify-between">
            <span className="text-xs text-sage font-bold flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-sage" /> Sincronizare automată cu Condica
            </span>
            <button
              onClick={handleStartGeneration}
              className="px-8 py-3.5 bg-coral hover:bg-coral-hover text-white rounded-3xl font-heading font-extrabold text-sm shadow-paper transition-all flex items-center gap-2 transform hover:-translate-y-0.5"
            >
              <Sparkles className="w-4 h-4" />
              <span>Generează Pachetul Integrat</span>
            </button>
          </div>
        </div>
      )}

      {/* STEP 2: Loading State Animation */}
      {isGenerating && (
        <div className="bg-white rounded-4xl p-16 border-2 border-softBorder shadow-floating text-center space-y-6 max-w-xl mx-auto my-12">
          <div className="w-20 h-20 rounded-full bg-coral-light border-4 border-coral flex items-center justify-center text-coral text-3xl mx-auto animate-spin">
            <Sparkles className="w-10 h-10" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl font-heading font-extrabold text-charcoal">
              Se generează pachetul complet...
            </h3>
            <p className="text-xs text-charcoal-muted font-body">
              Se formulează obiectivele operaționale pe cele 3 categorii, se configurează cele 5 centre ALA1 și se sincronizează Condica Educatoarei.
            </p>
          </div>
        </div>
      )}

      {/* STEP 3: Generated Package View & Rich Inline Editor */}
      {step === 3 && !isGenerating && (
        <div className="space-y-6">
          {/* Action Toolbar */}
          <div className="bg-white p-4 rounded-3xl border border-softBorder shadow-sm flex flex-wrap items-center justify-between gap-4">
            <button
              onClick={() => setStep(1)}
              className="px-4 py-2 rounded-2xl bg-cream-soft hover:bg-cream text-charcoal text-xs font-heading font-bold border border-softBorder flex items-center gap-1.5"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Modifică parametrii</span>
            </button>

            <div className="flex flex-wrap items-center gap-3">
              <span className="text-xs font-bold text-sage flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4 text-sage" /> Sincronizat în Condică
              </span>

              <button
                onClick={handleExportDocx}
                className="px-5 py-2.5 rounded-2xl bg-white border-2 border-sage hover:bg-sage-light text-charcoal font-heading font-extrabold text-xs shadow-sm transition-all flex items-center gap-1.5"
              >
                <Download className="w-4 h-4 text-sage" />
                <span>Exportă DOCX</span>
              </button>

              <button
                onClick={handleExportPdf}
                className="px-5 py-2.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-extrabold text-xs shadow-paper transition-all flex items-center gap-1.5"
              >
                <FileText className="w-4 h-4" />
                <span>Exportă PDF</span>
              </button>
            </div>
          </div>

          {/* Module Selection Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-softBorder pb-2">
            {[
              { id: "adp", label: "1. ADP (Întâlnirea de Dimineață & SEL)", color: "coral" },
              { id: "ade", label: `2. ADE (${pkg.adePlan.domain.split(" ")[0]})`, color: "sage" },
              { id: "ala1", label: "3. ALA1 (5 Centre de Interes)", color: "sunYellow" },
              { id: "ala2", label: "4. ALA2 (Jocuri & Mișcare)", color: "taupe" },
              { id: "worksheet", label: "5. Fișă de Lucru Printabilă", color: "powderPink" },
              { id: "condica", label: "6. Condica Educatoarei", color: "lavender" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActivePackageTab(tab.id as any)}
                className={`px-4 py-2.5 rounded-2xl font-heading font-bold text-xs transition-all ${
                  activePackageTab === tab.id
                    ? "bg-charcoal text-white shadow-sm scale-102"
                    : "bg-white text-charcoal border border-softBorder hover:bg-cream-soft"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* TAB 1: ADP */}
          {activePackageTab === "adp" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-coral uppercase tracking-wider">SECȚIUNEA ADP</span>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal">Activități de Dezvoltare Personală</h3>
                </div>
                <span className="px-3 py-1 bg-coral-light text-coral font-bold text-xs rounded-full">Dimineața</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-2">
                  <h4 className="font-heading font-bold text-sm text-coral flex items-center gap-2">
                    <span>☀️ Salutul & Mesajul Zilei</span>
                  </h4>
                  <textarea
                    value={pkg.adpMorningMeeting.greeting}
                    onChange={(e) =>
                      setPkg({
                        ...pkg,
                        adpMorningMeeting: { ...pkg.adpMorningMeeting, greeting: e.target.value },
                      })
                    }
                    rows={3}
                    className="w-full p-3 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none focus:border-coral"
                  />
                </div>

                <div className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-2">
                  <h4 className="font-heading font-bold text-sm text-sage flex items-center gap-2">
                    <span>❤️ Socio-Emoțional (SEL - Ursulețul Mimo)</span>
                  </h4>
                  <textarea
                    value={pkg.adpMorningMeeting.selActivity}
                    onChange={(e) =>
                      setPkg({
                        ...pkg,
                        adpMorningMeeting: { ...pkg.adpMorningMeeting, selActivity: e.target.value },
                      })
                    }
                    rows={3}
                    className="w-full p-3 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none focus:border-sage"
                  />
                </div>
              </div>

              {/* Transitions */}
              <div className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-3">
                <h4 className="font-heading font-bold text-sm text-charcoal">Tranziții & Cântecele de spălat pe mâini / masă</h4>
                <div className="space-y-2">
                  {pkg.adpTransitions.map((tr, trIdx) => (
                    <input
                      key={trIdx}
                      type="text"
                      value={tr}
                      onChange={(e) => {
                        const newTr = [...pkg.adpTransitions];
                        newTr[trIdx] = e.target.value;
                        setPkg({ ...pkg, adpTransitions: newTr });
                      }}
                      className="w-full p-2.5 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none"
                    />
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: ADE */}
          {activePackageTab === "ade" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4">
                <span className="text-xs font-bold text-sage uppercase tracking-wider">SECȚIUNEA ADE</span>
                <h3 className="text-2xl font-heading font-extrabold text-charcoal">
                  Proiect Didactic: {pkg.adePlan.title}
                </h3>
                <p className="text-xs font-semibold text-taupe">{pkg.adePlan.domain} • {pkg.adePlan.realizationMeans}</p>
              </div>

              {/* Operational Objectives */}
              <div className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-3">
                <h4 className="font-heading font-bold text-sm text-charcoal">Obiective Operaționale (Conform OMEN 4694/2019)</h4>
                <div className="space-y-2">
                  {pkg.adePlan.objectives.cognitive.map((obj, oIdx) => (
                    <div key={oIdx} className="flex items-center gap-2">
                      <span className="text-xs font-bold text-coral">Cognitiv:</span>
                      <input
                        type="text"
                        value={obj}
                        onChange={(e) => {
                          const newCognitive = [...pkg.adePlan.objectives.cognitive];
                          newCognitive[oIdx] = e.target.value;
                          setPkg({
                            ...pkg,
                            adePlan: {
                              ...pkg.adePlan,
                              objectives: { ...pkg.adePlan.objectives, cognitive: newCognitive },
                            },
                          });
                        }}
                        className="w-full p-2 rounded-xl border border-softBorder text-xs font-body bg-white"
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Methodological Steps Table */}
              <div className="space-y-3">
                <h4 className="font-heading font-bold text-sm text-charcoal">Desfășurarea Activității pe Etape</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left border-collapse">
                    <thead>
                      <tr className="bg-cream-soft text-charcoal font-heading font-bold border-b border-softBorder">
                        <th className="p-3">Etapă</th>
                        <th className="p-3">Activitatea Educatoarei</th>
                        <th className="p-3">Activitatea Copiilor</th>
                        <th className="p-3">Evaluare</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-softBorder">
                      {pkg.adePlan.stepsTable.map((stepItem, sIdx) => (
                        <tr key={sIdx}>
                          <td className="p-3 font-bold text-coral">{stepItem.step}</td>
                          <td className="p-3">{stepItem.teacherActivity}</td>
                          <td className="p-3">{stepItem.childrenActivity}</td>
                          <td className="p-3 font-semibold text-sage">{stepItem.evaluation}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: ALA1 */}
          {activePackageTab === "ala1" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4">
                <span className="text-xs font-bold text-sunYellow uppercase tracking-wider">SECȚIUNEA ALA1</span>
                <h3 className="text-2xl font-heading font-extrabold text-charcoal">Cele 5 Centre de Interes Liber-Alese</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {pkg.ala1Centers.map((center, cIdx) => (
                  <div key={cIdx} className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-2">
                    <div className="flex items-center justify-between">
                      <h4 className="font-heading font-bold text-base text-charcoal flex items-center gap-2">
                        <span>Centrul {center.center}</span>
                      </h4>
                      <span className="text-[10px] bg-white text-taupe font-bold px-2 py-0.5 rounded-full border border-softBorder">
                        ALA1
                      </span>
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-taupe">Sarcină de lucru:</label>
                      <textarea
                        value={center.task}
                        onChange={(e) => {
                          const newCenters = [...pkg.ala1Centers];
                          newCenters[cIdx].task = e.target.value;
                          setPkg({ ...pkg, ala1Centers: newCenters });
                        }}
                        rows={2}
                        className="w-full p-2.5 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="block text-[11px] font-bold text-taupe">Materiale puse la dispoziție:</label>
                      <input
                        type="text"
                        value={center.materials}
                        onChange={(e) => {
                          const newCenters = [...pkg.ala1Centers];
                          newCenters[cIdx].materials = e.target.value;
                          setPkg({ ...pkg, ala1Centers: newCenters });
                        }}
                        className="w-full p-2 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: ALA2 */}
          {activePackageTab === "ala2" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4">
                <span className="text-xs font-bold text-taupe uppercase tracking-wider">SECȚIUNEA ALA2</span>
                <h3 className="text-2xl font-heading font-extrabold text-charcoal">Jocuri Recreative & De Mișcare</h3>
              </div>

              <div className="space-y-4">
                {pkg.ala2Games.map((game, gIdx) => (
                  <div key={gIdx} className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-2">
                    <h4 className="font-heading font-bold text-base text-charcoal">{game.title}</h4>
                    <p className="text-xs font-semibold text-coral">{game.type}</p>
                    <textarea
                      value={game.description}
                      onChange={(e) => {
                        const newGames = [...pkg.ala2Games];
                        newGames[gIdx].description = e.target.value;
                        setPkg({ ...pkg, ala2Games: newGames });
                      }}
                      rows={2}
                      className="w-full p-2.5 rounded-xl border border-softBorder text-xs font-body text-charcoal bg-white focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 5: Worksheet */}
          {activePackageTab === "worksheet" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4 flex items-center justify-between">
                <div>
                  <span className="text-xs font-bold text-powderPink uppercase tracking-wider">SECȚIUNEA FIȘĂ</span>
                  <h3 className="text-2xl font-heading font-extrabold text-charcoal">{pkg.worksheetData.title}</h3>
                </div>
                <button
                  onClick={handleExportPdf}
                  className="px-4 py-2 bg-coral text-white rounded-2xl font-heading font-bold text-xs shadow-sm flex items-center gap-1.5"
                >
                  <Download className="w-4 h-4" /> Descarcă Fișa PDF
                </button>
              </div>

              <div className="p-5 bg-cream-soft rounded-3xl border border-softBorder space-y-3">
                <label className="block text-xs font-bold text-charcoal">Cerință dedicată pentru copii:</label>
                <textarea
                  value={pkg.worksheetData.instructions}
                  onChange={(e) =>
                    setPkg({
                      ...pkg,
                      worksheetData: { ...pkg.worksheetData, instructions: e.target.value },
                    })
                  }
                  rows={3}
                  className="w-full p-3 rounded-2xl border border-softBorder text-xs font-body text-charcoal bg-white"
                />
              </div>
            </div>
          )}

          {/* TAB 6: Condică Sync */}
          {activePackageTab === "condica" && (
            <div className="bg-white rounded-4xl p-8 border-2 border-softBorder shadow-floating space-y-6">
              <div className="border-b border-softBorder pb-4">
                <span className="text-xs font-bold text-lavender uppercase tracking-wider">SECȚIUNEA CONDICĂ</span>
                <h3 className="text-2xl font-heading font-extrabold text-charcoal">Sincronizare Automată în Condică</h3>
              </div>

              <div className="p-6 bg-cream-soft rounded-3xl border border-softBorder space-y-4">
                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1">Interval Orar:</label>
                  <input
                    type="text"
                    value={pkg.condicaSummary.interval}
                    onChange={(e) =>
                      setPkg({
                        ...pkg,
                        condicaSummary: { ...pkg.condicaSummary, interval: e.target.value },
                      })
                    }
                    className="w-full p-2.5 rounded-xl border border-softBorder text-xs font-body bg-white"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-charcoal mb-1">Sumar Activități Transcris:</label>
                  <textarea
                    value={pkg.condicaSummary.activitySummary}
                    onChange={(e) =>
                      setPkg({
                        ...pkg,
                        condicaSummary: { ...pkg.condicaSummary, activitySummary: e.target.value },
                      })
                    }
                    rows={4}
                    className="w-full p-3 rounded-2xl border border-softBorder text-xs font-body bg-white"
                  />
                </div>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
