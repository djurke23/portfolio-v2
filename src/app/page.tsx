import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import ValueProposition from "@/components/sections/ValueProposition";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProjectMatrix from "@/components/sections/ProjectMatrix";
import EngineeringDesign from "@/components/sections/EngineeringDesign";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-emerald-500/30 selection:text-white">
      {/* Sticky Global Navigation */}
      <Navbar />

      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section */}
        <HeroSection />

        {/* 2. Core Proposition / Manifesto */}
        <ValueProposition />

        {/* 3. Flagship Selected Work (Tier 1) */}
        <FeaturedProjects />

        {/* 4. Secondary Project Matrix & Archive */}
        <ProjectMatrix />

        {/* 5. Engineering + Design + Motion Differentiator */}
        <EngineeringDesign />

        {/* 6. Technology Matrix */}
        <TechStackSection />

        {/* 7. Work Experience Timeline */}
        <ExperienceSection />

        {/* 8. Education & Academic Background */}
        <AboutSection />

        {/* 9. Frequently Asked Questions */}
        <FAQSection />

        {/* 10. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
