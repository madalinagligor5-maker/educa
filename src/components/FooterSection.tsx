"use client";

import React from "react";
import Link from "next/link";
import EduZoriLogo from "./EduZoriLogo";
import { Heart, ShieldCheck, Sparkles, Smile, Scale, Mail, Phone, MapPin } from "lucide-react";

export default function FooterSection() {
  const brandValues = [
    { title: "Empatie", icon: Heart, color: "text-coral" },
    { title: "Încredere", icon: ShieldCheck, color: "text-sage" },
    { title: "Creativitate", icon: Sparkles, color: "text-sunYellow" },
    { title: "Bucurie", icon: Smile, color: "text-powderPink" },
    { title: "Echilibru", icon: Scale, color: "text-lavender" },
  ];

  return (
    <footer id="despre-noi" className="bg-charcoal text-cream-soft pt-16 pb-12 border-t border-taupe/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Brand Values Ribbon */}
        <div className="grid grid-cols-2 sm:grid-cols-5 gap-4 pb-12 mb-12 border-b border-taupe/20 text-center">
          {brandValues.map((v, idx) => {
            const IconComp = v.icon;
            return (
              <div key={idx} className="flex flex-col items-center gap-2 p-3 bg-white/5 rounded-2xl">
                <IconComp className={`w-6 h-6 ${v.color}`} />
                <span className="font-heading font-bold text-sm text-cream">{v.title}</span>
              </div>
            );
          })}
        </div>

        {/* Footer Main Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-taupe/20">
          <div className="md:col-span-5 space-y-4">
            <EduZoriLogo showSlogan={true} size="md" />
            <p className="text-sm font-body text-taupe max-w-sm leading-relaxed pt-2">
              EduZori este platforma dedicată educatoarelor organizate și inspirate din România. Reducem birocrația didactică conform Curriculumului OMEN 4694/2019 pentru ca tu să te bucuri de fiecare moment alături de copii.
            </p>
          </div>

          {/* Useful Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="font-heading font-extrabold text-cream text-lg">Navigare Rapidă</h4>
            <ul className="space-y-2 text-sm text-taupe font-medium">
              <li><Link href="/" className="hover:text-coral transition-colors">Acasă</Link></li>
              <li><a href="#cum-functioneaza" className="hover:text-coral transition-colors">Cum funcționează</a></li>
              <li><a href="#functionalitati" className="hover:text-coral transition-colors">Matricea Curriculară</a></li>
              <li><Link href="/resurse" className="hover:text-coral transition-colors">Resurse Gratuite</Link></li>
              <li><a href="#preturi" className="hover:text-coral transition-colors">Planuri & Prețuri</a></li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="font-heading font-extrabold text-cream text-lg">Contact & Suport</h4>
            <ul className="space-y-2.5 text-sm text-taupe font-medium">
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-coral shrink-0" />
                <span>contact@eduzori.ro</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-sage shrink-0" />
                <span>+40 700 000 000</span>
              </li>
              <li className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-sunYellow shrink-0" />
                <span>București / Cluj-Napoca, România</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-taupe font-medium">
          <p>© {new Date().getFullYear()} EduZori (eduzori.ro). Toate drepturile rezervate.</p>
          <p className="flex items-center gap-1">
            Creat cu <Heart className="w-3.5 h-3.5 text-coral fill-current" /> pentru educatoarele din România.
          </p>
        </div>
      </div>
    </footer>
  );
}
