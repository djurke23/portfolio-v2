import React from "react";
import HeroSection from "@/components/sections/HeroSection";
import Marquee from "@/components/ui/Marquee";
import StatsBanner from "@/components/sections/StatsBanner";
import ValueProposition from "@/components/sections/ValueProposition";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import ProjectMatrix from "@/components/sections/ProjectMatrix";
import ServicesSection from "@/components/sections/ServicesSection";
import EngineeringDesign from "@/components/sections/EngineeringDesign";
import TechStackSection from "@/components/sections/TechStackSection";
import ExperienceSection from "@/components/sections/ExperienceSection";
import AboutSection from "@/components/sections/AboutSection";
import GearSection from "@/components/sections/GearSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#070709] text-white selection:bg-emerald-500/30 selection:text-white">
      {/* Main Content Flow */}
      <main className="relative z-10">
        {/* 1. Hero Section (Immediate above-the-fold render) */}
        <HeroSection />

        {/* Infinite Tech Marquee Loop */}
        <Marquee />

        {/* 2. Impact Statistics & Track Record (Immediate) */}
        <StatsBanner />

        {/* 3. Core Proposition / Manifesto */}
        <ValueProposition />

        {/* 4. Flagship Selected Work (Tier 1) */}
        <div className="section-deferred">
          <FeaturedProjects />
        </div>

        {/* 5. Secondary Project Matrix & Archive */}
        <div className="section-deferred">
          <ProjectMatrix />
        </div>

        {/* 6. Bespoke Services & Deliverables */}
        <div className="section-deferred">
          <ServicesSection />
        </div>

        {/* 7. Engineering + Design + Motion Differentiator */}
        <div className="section-deferred">
          <EngineeringDesign />
        </div>

        {/* 8. Technology Matrix */}
        <div className="section-deferred">
          <TechStackSection />
        </div>

        {/* 9. Work Experience Timeline */}
        <div className="section-deferred">
          <ExperienceSection />
        </div>

        {/* 10. Education & Academic Background */}
        <div className="section-deferred">
          <AboutSection />
        </div>

        {/* 11. Studio Setup & Hardware Gear */}
        <div className="section-deferred">
          <GearSection />
        </div>

        {/* 12. Client Endorsements & Reviews */}
        <div className="section-deferred">
          <TestimonialsSection />
        </div>

        {/* 13. Frequently Asked Questions (Technical & Business) */}
        <div className="section-deferred">
          <FAQSection />
        </div>

        {/* 14. Contact & Inquiries */}
        <div className="section-deferred">
          <ContactSection />
        </div>
      </main>
    </div>
  );
}
