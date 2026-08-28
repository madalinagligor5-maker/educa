"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import EduZoriLogo from "@/components/EduZoriLogo";
import {
  Home,
  Calendar,
  BookOpen,
  Palette,
  Printer,
  FolderArchive,
  ClipboardList,
  Bot,
  Heart,
  Settings,
  Menu,
  X,
  UserCheck,
  Bell,
  Search,
} from "lucide-react";

const navigationModules = [
  { name: "Acasă", href: "/dashboard", icon: Home },
  { name: "Calendar", href: "/dashboard/calendar", icon: Calendar },
  { name: "Proiecte", href: "/dashboard/proiecte", icon: BookOpen },
  { name: "Activități", href: "/dashboard/activitati", icon: Palette },
  { name: "Fișe", href: "/dashboard/fise", icon: Printer },
  { name: "Bibliotecă", href: "/dashboard/biblioteca", icon: FolderArchive },
  { name: "Condică", href: "/dashboard/condica", icon: ClipboardList },
  { name: "AI Generator", href: "/dashboard/generator", icon: Bot, badge: "PRO" },
  { name: "Socio-emoțional", href: "/dashboard/sel", icon: Heart },
  { name: "Setări", href: "/dashboard/setari", icon: Settings },
];

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-cream flex flex-col md:flex-row">
      {/* Desktop Sidebar Navigation */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-softBorder p-5 justify-between shrink-0 shadow-sm">
        <div className="space-y-6">
          {/* Logo Header */}
          <div className="px-2 pt-1">
            <EduZoriLogo showSlogan={false} size="sm" />
          </div>

          {/* Teacher Profile Quick Card */}
          <div className="bg-cream-soft p-3.5 rounded-2xl border border-softBorder flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-powderPink border-2 border-white flex items-center justify-center font-heading font-extrabold text-charcoal shadow-sm">
              M
            </div>
            <div className="overflow-hidden">
              <h4 className="font-heading font-bold text-sm text-charcoal truncate">Maria Popescu</h4>
              <p className="text-[11px] text-taupe font-medium truncate">Grupa Mare • G.P.P. Nr. 1</p>
            </div>
          </div>

          {/* 10 Dedicated Module Links */}
          <nav className="space-y-1">
            {navigationModules.map((item) => {
              const IconComp = item.icon;
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`flex items-center justify-between px-3.5 py-2.5 rounded-2xl font-heading font-bold text-xs transition-all ${
                    isActive
                      ? "bg-coral text-white shadow-sm"
                      : "text-charcoal hover:bg-cream-soft hover:text-coral"
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <IconComp className={`w-4 h-4 ${isActive ? "text-white" : "text-taupe"}`} />
                    <span>{item.name}</span>
                  </div>
                  {item.badge && (
                    <span className={`text-[9px] px-1.5 py-0.5 rounded-md font-extrabold ${
                      isActive ? "bg-white text-coral" : "bg-sunYellow text-charcoal"
                    }`}>
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Footer Support Banner */}
        <div className="pt-4 border-t border-softBorder">
          <div className="bg-sage-light p-3 rounded-2xl text-center space-y-1">
            <span className="text-xs font-bold text-charcoal">Curriculum OMEN 4694/2019</span>
            <p className="text-[10px] text-taupe">Versiune 2026 complet funcțională</p>
          </div>
        </div>
      </aside>

      {/* Mobile Top Bar */}
      <div className="md:hidden bg-white border-b border-softBorder px-4 py-3 flex items-center justify-between sticky top-0 z-30">
        <EduZoriLogo showSlogan={false} size="sm" />
        <button
          onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          className="p-2 rounded-xl bg-cream-soft border border-softBorder text-charcoal"
        >
          {mobileSidebarOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileSidebarOpen && (
        <div className="md:hidden bg-white border-b border-softBorder px-4 py-4 space-y-2 shadow-lg z-20 animate-in slide-in-from-top">
          {navigationModules.map((item) => {
            const IconComp = item.icon;
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMobileSidebarOpen(false)}
                className={`flex items-center justify-between px-4 py-3 rounded-xl font-heading font-bold text-sm ${
                  isActive ? "bg-coral text-white" : "text-charcoal hover:bg-cream-soft"
                }`}
              >
                <div className="flex items-center gap-3">
                  <IconComp className="w-5 h-5" />
                  <span>{item.name}</span>
                </div>
                {item.badge && (
                  <span className="text-xs px-2 py-0.5 rounded-md bg-sunYellow text-charcoal font-bold">
                    {item.badge}
                  </span>
                )}
              </Link>
            );
          })}
        </div>
      )}

      {/* Main Content Workspace */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top Header Bar inside Dashboard */}
        <header className="bg-white border-b border-softBorder px-6 py-4 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3 max-w-md w-full">
            <div className="relative w-full">
              <Search className="w-4 h-4 text-taupe absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Caută în planificări, proiecte didactice sau fișe..."
                className="w-full pl-10 pr-4 py-2 rounded-2xl bg-cream-soft border border-softBorder text-xs font-body text-charcoal focus:outline-none focus:border-coral transition-colors"
              />
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button className="p-2 rounded-2xl bg-cream-soft border border-softBorder text-charcoal hover:bg-cream relative">
              <Bell className="w-4 h-4 text-taupe" />
              <span className="w-2 h-2 rounded-full bg-coral absolute top-1.5 right-1.5" />
            </button>
            <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-2xl bg-sage-light border border-sage/20 text-xs font-bold text-charcoal">
              <span>Grupa Mare</span>
            </div>
          </div>
        </header>

        {/* Page Children Container */}
        <main className="flex-1 p-6 md:p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
