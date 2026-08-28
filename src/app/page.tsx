import React from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import HeroSection from "@/components/HeroSection";
import MascotSelBanner from "@/components/MascotSelBanner";
import PainPointsSection from "@/components/PainPointsSection";
import HowItWorks from "@/components/HowItWorks";
import CurricularMatrix from "@/components/CurricularMatrix";
import FreeResourcesSection from "@/components/FreeResourcesSection";
import PricingTiers from "@/components/PricingTiers";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-powderPink selection:text-charcoal">
      {/* Sticky Header */}
      <HeaderNavbar />

      {/* Hero Section with Interactive App Mockup */}
      <HeroSection />

      {/* Mascot & SEL Showcase Banner */}
      <MascotSelBanner />

      {/* Pain Points & EduZori Solution */}
      <PainPointsSection />

      {/* How It Works (3-Step Process) */}
      <HowItWorks />

      {/* Curricular Matrix Interactive Cards */}
      <CurricularMatrix />

      {/* Free SEO Printable Resources Hub Preview */}
      <FreeResourcesSection />

      {/* Subscription Pricing Tiers */}
      <PricingTiers />

      {/* Footer & Brand Values */}
      <FooterSection />
    </main>
  );
}
