"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { FileText, Menu, X, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on hash click or resize
  const handleNavClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl transition-all duration-300 rounded-full px-5 py-3 ${
          scrolled
            ? "glass-nav shadow-2xl shadow-black/60 py-2.5"
            : "bg-neutral-950/40 backdrop-blur-md border border-white/5 py-3.5"
        }`}
      >
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-3 text-sm font-medium tracking-tight text-white hover:text-emerald-400 transition-colors"
          data-cursor="HOME"
        >
          <span className="font-semibold tracking-wide text-xs sm:text-sm uppercase font-mono">
            {siteConfig.name}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-1 text-[13px] text-neutral-400 font-medium">
          {siteConfig.navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="px-3 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href={siteConfig.socials.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            data-cursor="GITHUB"
          >
            <GithubIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="p-2 rounded-full text-neutral-400 hover:text-white hover:bg-white/5 transition-colors"
            data-cursor="LINKEDIN"
          >
            <LinkedinIcon className="w-4 h-4" />
          </a>
          <a
            href={siteConfig.cvPath}
            download
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-mono font-medium rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
            data-cursor="CV"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>CV</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? "Close menu" : "Open navigation menu"}
          className="lg:hidden p-2 rounded-full text-neutral-300 hover:text-white hover:bg-white/5 transition-colors"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex flex-col bg-neutral-950/95 backdrop-blur-2xl px-6 py-8 pointer-events-auto">
          <div className="flex items-center justify-between pb-6 border-b border-white/10">
            <span className="font-mono text-sm tracking-wider uppercase font-semibold text-white">
              {siteConfig.name}
            </span>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="p-2 rounded-full text-neutral-400 hover:text-white"
              aria-label="Close menu"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="flex flex-col gap-4 py-8 text-xl font-medium tracking-tight">
            {siteConfig.navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={handleNavClick}
                className="py-2 text-neutral-300 hover:text-emerald-400 transition-colors"
              >
                {item.label}
              </a>
            ))}
          </div>

          <div className="mt-auto pt-6 border-t border-white/10 flex flex-col gap-4">
            <a
              href={siteConfig.cvPath}
              download
              className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-neutral-950 font-medium text-sm hover:bg-neutral-200 transition-colors"
            >
              <FileText className="w-4 h-4" />
              <span>Download CV (PDF)</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <div className="flex items-center justify-center gap-6 pt-2 text-neutral-400">
              <a
                href={siteConfig.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white text-sm"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <a
                href={siteConfig.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-white text-sm"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
