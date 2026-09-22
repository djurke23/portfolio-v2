import React from "react";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
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

        {/* 2. Impact Statistics & Track Record */}
        <StatsBanner />

        {/* 3. Core Proposition / Manifesto */}
        <ValueProposition />

        {/* 4. Flagship Selected Work (Tier 1) */}
        <FeaturedProjects />

        {/* 5. Secondary Project Matrix & Archive */}
        <ProjectMatrix />

        {/* 6. Bespoke Services & Deliverables */}
        <ServicesSection />

        {/* 7. Engineering + Design + Motion Differentiator */}
        <EngineeringDesign />

        {/* 8. Technology Matrix */}
        <TechStackSection />

        {/* 9. Work Experience Timeline */}
        <ExperienceSection />

        {/* 10. Education & Academic Background */}
        <AboutSection />

        {/* 11. Studio Setup & Hardware Gear */}
        <GearSection />

        {/* 12. Client Endorsements & Reviews */}
        <TestimonialsSection />

        {/* 13. Frequently Asked Questions (Technical & Business) */}
        <FAQSection />

        {/* 14. Contact & Inquiries */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}
