"use client";

import React, { useState } from "react";
import { Settings, Save, CheckCircle2 } from "lucide-react";
import confetti from "canvas-confetti";

export default function SetariPage() {
  const [name, setName] = useState("Maria Popescu");
  const [kindergarten, setKindergarten] = useState("Grădinița cu Program Prelungit Nr. 1");
  const [county, setCounty] = useState("Cluj");
  const [grade, setGrade] = useState("Grupa Mare (5-6 ani)");
  const [saved, setSaved] = useState(false);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    setSaved(true);
    confetti({ particleCount: 25, spread: 50, origin: { y: 0.7 } });
    setTimeout(() => setSaved(false), 3000);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-cream-soft rounded-full text-xs font-bold text-charcoal mb-2">
          <Settings className="w-3.5 h-3.5 text-coral" />
          <span>Configurare Profil & Grădiniță</span>
        </div>
        <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
          Setări Cont Educatoare
        </h1>
        <p className="text-xs text-charcoal-muted font-body">
          Datele tale vor fi completate automat pe antetele proiectelor didactice și ale condicii.
        </p>
      </div>

      <form onSubmit={handleSave} className="bg-white p-8 rounded-4xl border-2 border-softBorder shadow-floating space-y-4">
        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">Nume și Prenume Cadru Didactic</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body"
          />
        </div>

        <div>
          <label className="block text-xs font-bold text-charcoal mb-1">Denumire Grădiniță</label>
          <input
            type="text"
            value={kindergarten}
            onChange={(e) => setKindergarten(e.target.value)}
            className="w-full p-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-bold text-charcoal mb-1">Județ</label>
            <input
              type="text"
              value={county}
              onChange={(e) => setCounty(e.target.value)}
              className="w-full p-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-charcoal mb-1">Grupa Predată</label>
            <select
              value={grade}
              onChange={(e) => setGrade(e.target.value)}
              className="w-full p-3 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body"
            >
              <option value="Grupa Mică (3-4 ani)">Grupa Mică (3-4 ani)</option>
              <option value="Grupa Mijlocie (4-5 ani)">Grupa Mijlocie (4-5 ani)</option>
              <option value="Grupa Mare (5-6 ani)">Grupa Mare (5-6 ani)</option>
            </select>
          </div>
        </div>

        <div className="pt-4 flex items-center justify-between">
          {saved ? (
            <span className="text-xs font-bold text-sage flex items-center gap-1">
              <CheckCircle2 className="w-4 h-4 text-sage" /> Modificările au fost salvate cu succes!
            </span>
          ) : <span />}

          <button
            type="submit"
            className="px-6 py-3 bg-coral hover:bg-coral-hover text-white rounded-2xl font-heading font-bold text-xs shadow-paper transition-all flex items-center gap-1.5"
          >
            <Save className="w-4 h-4" /> Salvează Datele
          </button>
        </div>
      </form>
    </div>
  );
}
