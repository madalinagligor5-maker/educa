"use client";

import React, { useState } from "react";
import Link from "next/link";
import EduZoriLogo from "./EduZoriLogo";
import { Menu, X, Sparkles, UserCheck } from "lucide-react";

export default function HeaderNavbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-cream/90 backdrop-blur-md border-b border-softBorder transition-all">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <EduZoriLogo showSlogan={false} size="md" />

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-7">
          <Link href="/" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors">
            Acasă
          </Link>
          <a href="#cum-functioneaza" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors">
            Cum funcționează
          </a>
          <a href="#functionalitati" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors">
            Funcționalități
          </a>
          <Link href="/resurse" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors flex items-center gap-1">
            <span>Resurse Gratuite</span>
            <span className="text-[10px] bg-sunYellow text-charcoal font-bold px-1.5 py-0.5 rounded-full">NOU</span>
          </Link>
          <a href="#preturi" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors">
            Prețuri
          </a>
          <a href="#despre-noi" className="text-sm font-semibold text-charcoal hover:text-coral transition-colors">
            Despre noi
          </a>
        </nav>

        {/* Desktop Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Link
            href="/dashboard"
            className="px-5 py-2.5 rounded-2xl bg-white hover:bg-cream border border-softBorder text-charcoal font-heading font-bold text-sm transition-all flex items-center gap-1.5 shadow-sm"
          >
            <UserCheck className="w-4 h-4 text-sage" />
            <span>Intră în cont</span>
          </Link>

          <Link
            href="/dashboard/generator"
            className="px-6 py-2.5 rounded-2xl bg-coral hover:bg-coral-hover text-white font-heading font-extrabold text-sm shadow-paper hover:shadow-floating transition-all flex items-center gap-1.5 transform hover:-translate-y-0.5"
          >
            <Sparkles className="w-4 h-4" />
            <span>Începe gratuit</span>
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 rounded-xl bg-white border border-softBorder text-charcoal hover:bg-cream"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-softBorder px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in slide-in-from-top">
          <nav className="flex flex-col gap-3 font-semibold text-charcoal">
            <Link href="/" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-softBorder">
              Acasă
            </Link>
            <a href="#cum-functioneaza" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-softBorder">
              Cum funcționează
            </a>
            <a href="#functionalitati" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-softBorder">
              Funcționalități
            </a>
            <Link href="/resurse" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-softBorder">
              Resurse Gratuite
            </Link>
            <a href="#preturi" onClick={() => setMobileMenuOpen(false)} className="py-2 border-b border-softBorder">
              Prețuri
            </a>
            <a href="#despre-noi" onClick={() => setMobileMenuOpen(false)} className="py-2">
              Despre noi
            </a>
          </nav>

          <div className="flex flex-col gap-2 pt-2">
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-2xl bg-white border border-softBorder text-charcoal font-heading font-bold text-sm"
            >
              Intră în cont
            </Link>
            <Link
              href="/dashboard/generator"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-3 rounded-2xl bg-coral text-white font-heading font-extrabold text-sm shadow-paper"
            >
              Începe gratuit
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
