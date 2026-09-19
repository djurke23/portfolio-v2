"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { siteConfig } from "@/data/site";
import { useLanguage } from "@/context/LanguageContext";
import LanguageSwitcher from "@/components/ui/LanguageSwitcher";
import { FileText, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";
  const { dict } = useLanguage();

  const navItems = [
    { label: dict.nav.work, href: "#work" },
    { label: dict.nav.expertise, href: "#discipline" },
    { label: dict.nav.stack, href: "#stack" },
    { label: dict.nav.experience, href: "#experience" },
    { label: dict.nav.about, href: "#about" },
    { label: dict.nav.faq, href: "#faq" },
    { label: dict.nav.contact, href: "#contact" },
  ];

  const resolveHref = (href: string) => {
    if (isHome) return href;
    return `/${href}`;
  };

  const handleNavClick = (e?: React.MouseEvent<HTMLAnchorElement>, targetHref?: string) => {
    setMobileMenuOpen(false);
    if (e && isHome && targetHref?.startsWith("#")) {
      const el = document.querySelector(targetHref);
      if (el) {
        e.preventDefault();
        if (window.__lenis) {
          window.__lenis.scrollTo(el as HTMLElement);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scrolling when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  // Handle escape key to close menu
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-40 flex justify-center px-4 sm:px-6 pt-4 sm:pt-6 pointer-events-none">
      <nav
        aria-label="Main Navigation"
        className={`pointer-events-auto flex items-center justify-between w-full max-w-6xl transition-all duration-300 rounded-full px-4 sm:px-5 py-3 ${
          scrolled
            ? "glass-nav shadow-2xl shadow-black/60 py-2.5"
            : "bg-neutral-950/40 backdrop-blur-md border border-white/5 py-3.5"
        }`}
      >
        {/* Brand / Name */}
        <Link
          href="/"
          className="group flex items-center gap-2.5 sm:gap-3 text-sm font-medium tracking-tight text-white hover:text-emerald-400 transition-colors"
          data-cursor="HOME"
        >
          <span className="font-semibold tracking-wide text-xs sm:text-sm uppercase font-mono">
            {siteConfig.name}
          </span>
          <span className="hidden md:inline-flex items-center gap-1.5 px-2.5 py-0.5 text-[11px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>{dict.nav.available}</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center gap-0.5 text-[13px] text-neutral-400 font-medium">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={resolveHref(item.href)}
              onClick={(e) => handleNavClick(e, item.href)}
              className="px-2.5 py-1.5 rounded-full hover:text-white hover:bg-white/5 transition-all"
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className="hidden sm:flex items-center gap-2 sm:gap-2.5">
          <LanguageSwitcher variant="desktop" />
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
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium rounded-full bg-white/5 hover:bg-white/10 text-neutral-200 hover:text-white border border-white/10 transition-all hover:scale-105 active:scale-95"
            data-cursor="CV"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-400" />
            <span>{dict.nav.cv}</span>
            <ArrowUpRight className="w-3 h-3 text-neutral-400" />
          </a>
        </div>

        {/* Animated Mobile Hamburger Button */}
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label={mobileMenuOpen ? dict.nav.closeMenu : dict.nav.openMenu}
          aria-expanded={mobileMenuOpen}
          className="lg:hidden relative w-9 h-9 flex flex-col items-center justify-center gap-1.5 rounded-full bg-white/5 hover:bg-white/10 text-neutral-300 hover:text-white transition-colors focus:outline-none"
        >
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: 45, y: 6 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-4 h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={mobileMenuOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
            className="w-4 h-0.5 bg-current rounded-full"
          />
          <motion.span
            animate={
              mobileMenuOpen
                ? { rotate: -45, y: -6 }
                : { rotate: 0, y: 0 }
            }
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="w-4 h-0.5 bg-current rounded-full"
          />
        </button>
      </nav>

      {/* Animated Mobile Overlay & Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md z-40 pointer-events-auto lg:hidden"
              aria-hidden="true"
            />

            {/* Menu Panel */}
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label="Navigation Menu"
              data-lenis-prevent="true"
              initial={{ opacity: 0, y: -16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
              className="fixed inset-x-4 top-4 z-50 lg:hidden flex flex-col bg-neutral-950/95 backdrop-blur-2xl border border-white/10 rounded-3xl p-6 shadow-2xl pointer-events-auto max-h-[92vh] overflow-y-auto"
            >
              {/* Header inside drawer */}
              <div className="flex items-center justify-between pb-5 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs tracking-wider uppercase font-semibold text-white">
                    {siteConfig.name}
                  </span>
                  <span className="inline-flex items-center gap-1 px-2 py-0.5 text-[10px] font-mono rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{dict.nav.available}</span>
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 text-neutral-400 hover:text-white"
                  aria-label={dict.nav.closeMenu}
                >
                  <span className="text-lg leading-none">&times;</span>
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="pt-4">
                <LanguageSwitcher variant="mobile" />
              </div>

              {/* Staggered Navigation links */}
              <div className="flex flex-col gap-1.5 py-5">
                {navItems.map((item, index) => (
                  <motion.a
                    key={item.href}
                    href={resolveHref(item.href)}
                    onClick={(e) => handleNavClick(e, item.href)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index + 0.05, duration: 0.22 }}
                    className="py-2.5 px-3 rounded-xl text-lg font-medium tracking-tight text-neutral-300 hover:text-white hover:bg-white/5 transition-all flex items-center justify-between group"
                  >
                    <span>{item.label}</span>
                    <ArrowUpRight className="w-4 h-4 text-neutral-600 group-hover:text-emerald-400 transition-colors" />
                  </motion.a>
                ))}
              </div>

              {/* Actions Footer inside drawer */}
              <motion.div
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35, duration: 0.25 }}
                className="pt-5 border-t border-white/10 flex flex-col gap-3 mt-auto"
              >
                <a
                  href={siteConfig.cvPath}
                  download
                  onClick={() => setMobileMenuOpen(false)}
                  className="flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-neutral-950 font-semibold text-sm hover:bg-neutral-200 transition-colors shadow-lg active:scale-98"
                >
                  <FileText className="w-4 h-4 text-emerald-600" />
                  <span>{dict.nav.downloadCv}</span>
                  <ArrowUpRight className="w-4 h-4 text-neutral-700" />
                </a>

                <div className="flex items-center justify-center gap-6 pt-2 text-neutral-400">
                  <a
                    href={siteConfig.socials.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white text-xs font-mono py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={siteConfig.socials.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-white text-xs font-mono py-1 px-2 rounded-lg hover:bg-white/5 transition-colors"
                  >
                    <LinkedinIcon className="w-4 h-4" />
                    <span>LinkedIn</span>
                  </a>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
