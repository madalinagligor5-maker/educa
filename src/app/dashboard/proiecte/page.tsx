"use client";

import React from "react";
import { BookOpen, Sparkles, Plus } from "lucide-react";
import Link from "next/link";

export default function ProiectePage() {
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <div className="bg-white p-6 rounded-4xl border-2 border-softBorder shadow-paper flex items-center justify-between">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-coral-light rounded-full text-xs font-bold text-coral mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Proiectare Didactică Anuală & Tematică</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-heading font-extrabold text-charcoal">
            Proiectele Mele Didactice
          </h1>
          <p className="text-xs text-charcoal-muted font-body">
            Gruparea tuturor proiectelor pe teme anuale și subteme.
          </p>
        </div>

        <Link
          href="/dashboard/generator"
          className="px-5 py-3 bg-coral text-white rounded-2xl font-heading font-bold text-xs shadow-sm flex items-center gap-1.5"
        >
          <Plus className="w-4 h-4" /> Proiect Nou
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-3xl border-2 border-softBorder shadow-paper">
          <span className="text-xs font-bold text-coral bg-coral-light px-2.5 py-0.5 rounded-md">Proiect Tematic</span>
          <h3 className="font-heading font-extrabold text-lg text-charcoal mt-2">Bogațiile Toamnei (4 Săptămâni)</h3>
          <p className="text-xs text-taupe mt-1">Subteme: Fructe, Legume, Flori de toamnă, Pădurea în haine ruginii.</p>
          <div className="mt-4 pt-3 border-t border-softBorder flex items-center justify-between text-xs font-bold text-sage">
            <span>4/4 zile pregătite</span>
            <Link href="/dashboard/generator" className="underline">Deschide</Link>
          </div>
        </div>

        <div className="bg-white p-6 rounded-3xl border-2 border-softBorder shadow-paper">
          <span className="text-xs font-bold text-sage bg-sage-light px-2.5 py-0.5 rounded-md">Proiect Tematic</span>
          <h3 className="font-heading font-extrabold text-lg text-charcoal mt-2">Cine sunt/suntem? (3 Săptămâni)</h3>
          <p className="text-xs text-taupe mt-1">Subteme: Corpul uman, Familia mea, Grădinița mea dragă.</p>
          <div className="mt-4 pt-3 border-t border-softBorder flex items-center justify-between text-xs font-bold text-sage">
            <span>3/3 zile pregătite</span>
            <Link href="/dashboard/generator" className="underline">Deschide</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
