import React from "react";
import dynamic from "next/dynamic";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsBanner from "@/components/sections/StatsBanner";
import Footer from "@/components/layout/Footer";

// Dynamically split below-the-fold sections into separate chunks
const ValueProposition = dynamic(() => import("@/components/sections/ValueProposition"));
const FeaturedProjects = dynamic(() => import("@/components/sections/FeaturedProjects"));
const ProjectMatrix = dynamic(() => import("@/components/sections/ProjectMatrix"));
const ServicesSection = dynamic(() => import("@/components/sections/ServicesSection"));
const EngineeringDesign = dynamic(() => import("@/components/sections/EngineeringDesign"));
const TechStackSection = dynamic(() => import("@/components/sections/TechStackSection"));
const ExperienceSection = dynamic(() => import("@/components/sections/ExperienceSection"));
const AboutSection = dynamic(() => import("@/components/sections/AboutSection"));
const GearSection = dynamic(() => import("@/components/sections/GearSection"));
const TestimonialsSection = dynamic(() => import("@/components/sections/TestimonialsSection"));
const FAQSection = dynamic(() => import("@/components/sections/FAQSection"));
const ContactSection = dynamic(() => import("@/components/sections/ContactSection"));

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
