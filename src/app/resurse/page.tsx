import React from "react";
import HeaderNavbar from "@/components/HeaderNavbar";
import FreeResourcesSection from "@/components/FreeResourcesSection";
import FooterSection from "@/components/FooterSection";

export default function PublicResursePage() {
  return (
    <main className="min-h-screen bg-cream selection:bg-powderPink selection:text-charcoal">
      <HeaderNavbar />
      <div className="py-12">
        <FreeResourcesSection />
      </div>
      <FooterSection />
    </main>
  );
}
