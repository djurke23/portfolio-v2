"use client";

import React, { useState, useEffect, useMemo, useRef } from "react";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useSound } from "@/context/SoundContext";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  Search,
  Command,
  FileText,
  Mail,
  Languages,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  MessageSquare,
  X,
  Sun,
  Moon,
} from "lucide-react";

interface PaletteItem {
  id: string;
  group: "actions" | "navigation" | "projects";
  title: string;
  subtitle?: string;
  icon: React.ReactNode;
  onSelect: () => void;
}

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { dict, language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { copyEmail, showToast } = useToast();
  const { playClick, playOpen, playToggle, playSuccess } = useSound();
  const isSr = language === "sr";

  // Toggle Command Palette on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setOpen((prev) => {
          if (!prev) playOpen();
          else playToggle();
          return !prev;
        });
      } else if (e.key === "Escape" && open) {
        e.preventDefault();
        playToggle();
        setOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, playOpen, playToggle]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setSelectedIndex(0);
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  const scrollToAnchor = (anchor: string) => {
    setOpen(false);
    const el = document.querySelector(anchor);
    if (el) {
      if (window.__lenis) {
        window.__lenis.scrollTo(el as HTMLElement);
      } else {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const allItems: PaletteItem[] = useMemo(() => {
    const items: PaletteItem[] = [
      // Quick Actions
      {
        id: "copy-email",
        group: "actions",
        title: isSr ? "Kopiraj Email Adresu" : "Copy Email Address",
        subtitle: siteConfig.email,
        icon: <Mail className="w-4 h-4 text-emerald-400" />,
        onSelect: () => {
          playSuccess();
          copyEmail(
            siteConfig.email,
            isSr ? "Email kopiran u clipboard!" : "Email copied to clipboard!"
          );
          setOpen(false);
        },
      },
      {
        id: "download-cv",
        group: "actions",
        title: isSr ? "Preuzmi Zvanični CV (PDF)" : "Download Official CV (PDF)",
        subtitle: "Luka_Djuric_CV.pdf",
        icon: <FileText className="w-4 h-4 text-emerald-400" />,
        onSelect: () => {
          const a = document.createElement("a");
          a.href = siteConfig.cvPath;
          a.download = "Luka_Djuric_CV.pdf";
          a.click();
          showToast(isSr ? "Preuzimanje CV-ja..." : "Downloading CV...", "info");
          setOpen(false);
        },
      },
      {
        id: "switch-language",
        group: "actions",
        title: isSr ? "Prebaci jezik na English" : "Switch language to Serbian",
        subtitle: isSr ? "Currently viewing in Serbian" : "Trenutno na engleskom",
        icon: <Languages className="w-4 h-4 text-emerald-400" />,
        onSelect: () => {
          const nextLang = language === "en" ? "sr" : "en";
          setLanguage(nextLang);
          showToast(
            nextLang === "sr" ? "Jezik promenjen: Srpski" : "Language switched: English",
            "success"
          );
          setOpen(false);
        },
      },
      {
        id: "toggle-theme",
        group: "actions",
        title:
          theme === "dark"
            ? isSr
              ? "Prebaci na svetlu temu"
              : "Switch to Light Theme"
            : isSr
            ? "Prebaci na tamnu temu"
            : "Switch to Dark Theme",
        subtitle:
          theme === "dark"
            ? isSr
              ? "Aktiviraj svetlu titanium paletu"
              : "Clean titanium paper mode"
            : isSr
            ? "Aktiviraj noćnu radnu paletu"
            : "Original cyber workstation mode",
        icon:
          theme === "dark" ? (
            <Sun className="w-4 h-4 text-amber-400" />
          ) : (
            <Moon className="w-4 h-4 text-indigo-400" />
          ),
        onSelect: () => {
          playToggle();
          toggleTheme();
          const nextTheme = theme === "dark" ? "light" : "dark";
          showToast(
            nextTheme === "light"
              ? isSr
                ? "Svetla tema aktivirana"
                : "Light theme activated"
              : isSr
              ? "Tamna tema aktivirana"
              : "Dark theme activated",
            "info"
          );
          setOpen(false);
        },
      },

      // Navigation
      {
        id: "nav-work",
        group: "navigation",
        title: isSr ? "Izdvojeni Radovi" : "Featured Projects",
        subtitle: "#work",
        icon: <Sparkles className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#work"),
      },
      {
        id: "nav-services",
        group: "navigation",
        title: isSr ? "Usluge i Isporuka" : "Services & Capabilities",
        subtitle: "#services",
        icon: <Wrench className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#services"),
      },
      {
        id: "nav-stack",
        group: "navigation",
        title: isSr ? "Tehnološki Stack" : "Technology Stack",
        subtitle: "#stack",
        icon: <Layers className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#stack"),
      },
      {
        id: "nav-gear",
        group: "navigation",
        title: isSr ? "Radno Okruženje & Oprema" : "Studio Setup & Gear",
        subtitle: "#gear",
        icon: <Layers className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#gear"),
      },
      {
        id: "nav-testimonials",
        group: "navigation",
        title: isSr ? "Recenzije Klijenata" : "Client Endorsements",
        subtitle: "#testimonials",
        icon: <MessageSquare className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#testimonials"),
      },
      {
        id: "nav-contact",
        group: "navigation",
        title: isSr ? "Kontakt i Upiti" : "Contact & Inquiries",
        subtitle: "#contact",
        icon: <Mail className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#contact"),
      },
    ];

    // Projects
    projects.forEach((proj) => {
      items.push({
        id: `proj-${proj.id}`,
        group: "projects",
        title: proj.title,
        subtitle: proj.tagline,
        icon: <ExternalLink className="w-4 h-4 text-emerald-400" />,
        onSelect: () => {
          if (proj.liveUrl) {
            window.open(proj.liveUrl, "_blank", "noopener,noreferrer");
          } else if (proj.appStoreUrl) {
            window.open(proj.appStoreUrl, "_blank", "noopener,noreferrer");
          } else if (proj.figmaUrl) {
            window.open(proj.figmaUrl, "_blank", "noopener,noreferrer");
          } else {
            scrollToAnchor("#work");
          }
          setOpen(false);
        },
      });
    });

    return items;
  }, [isSr, language, copyEmail, setLanguage, showToast]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return allItems;
    const lower = query.toLowerCase();
    return allItems.filter(
      (item) =>
        item.title.toLowerCase().includes(lower) ||
        item.subtitle?.toLowerCase().includes(lower)
    );
  }, [allItems, query]);

  // Handle keyboard navigation inside list
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      playClick();
      setSelectedIndex((prev) => (prev + 1) % Math.max(1, filteredItems.length));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      playClick();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % Math.max(1, filteredItems.length));
    } else if (e.key === "Enter" && filteredItems[selectedIndex]) {
      e.preventDefault();
      playClick();
      filteredItems[selectedIndex].onSelect();
    }
  };

  return (
    <>
      {/* Floating Trigger Pill in bottom left */}
      <button
        type="button"
        onClick={() => {
          playOpen();
          setOpen(true);
        }}
        className="fixed bottom-6 left-6 z-40 hidden sm:inline-flex items-center gap-2 px-3.5 py-2 rounded-full glass-card border border-white/10 hover:border-emerald-500/40 text-neutral-400 hover:text-white transition-all shadow-xl hover:scale-105 active:scale-95 group text-xs font-mono"
        title="Open Command Palette (⌘K)"
      >
        <Command className="w-3.5 h-3.5 text-emerald-400 group-hover:rotate-12 transition-transform" />
        <span>{isSr ? "Pretraga" : "Quick Search"}</span>
        <kbd className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-neutral-300 font-sans border border-white/10">
          ⌘K
        </kbd>
      </button>

      {/* Modal Dialog */}
      <AnimatePresence>
        {open && (
          <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 sm:pt-28 px-4">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/80 backdrop-blur-md"
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.96, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="w-full max-w-xl rounded-3xl bg-neutral-950 border border-white/15 shadow-2xl shadow-black/90 overflow-hidden relative z-10 flex flex-col max-h-[70vh]"
            >
              {/* Search Bar Input */}
              <div className="flex items-center gap-3 px-5 py-4 border-b border-white/10">
                <Search className="w-5 h-5 text-neutral-500 shrink-0" />
                <input
                  ref={inputRef}
                  type="text"
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                  onKeyDown={handleKeyDown}
                  placeholder={
                    isSr
                      ? "Pretražite projekte, sekcije, komande..."
                      : "Search projects, sections, quick actions..."
                  }
                  className="w-full bg-transparent text-sm text-white placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="p-1 rounded-lg text-neutral-500 hover:text-white transition-colors"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Items List */}
              <div
                ref={listRef}
                className="overflow-y-auto p-2 space-y-1 divide-y divide-white/5 scrollbar-thin scrollbar-thumb-white/10"
              >
                {filteredItems.length === 0 ? (
                  <div className="py-12 text-center text-sm text-neutral-500 font-light">
                    {isSr ? "Nema rezultata za pretragu." : "No matching results found."}
                  </div>
                ) : (
                  filteredItems.map((item, idx) => {
                    const isSelected = selectedIndex === idx;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={item.onSelect}
                        onMouseEnter={() => setSelectedIndex(idx)}
                        className={`w-full flex items-center justify-between p-3 rounded-2xl text-left transition-all ${
                          isSelected
                            ? "bg-emerald-500/10 border border-emerald-500/30 text-white"
                            : "text-neutral-300 hover:bg-white/5 border border-transparent"
                        }`}
                      >
                        <div className="flex items-center gap-3 min-w-0 pr-2">
                          <div
                            className={`w-8 h-8 rounded-xl flex items-center justify-center shrink-0 ${
                              isSelected
                                ? "bg-emerald-500/20 text-emerald-400"
                                : "bg-white/5 text-neutral-400"
                            }`}
                          >
                            {item.icon}
                          </div>
                          <div className="truncate">
                            <div className="text-sm font-semibold truncate">
                              {item.title}
                            </div>
                            {item.subtitle && (
                              <div className="text-xs text-neutral-500 truncate font-light">
                                {item.subtitle}
                              </div>
                            )}
                          </div>
                        </div>

                        <ArrowRight
                          className={`w-4 h-4 shrink-0 transition-transform ${
                            isSelected
                              ? "text-emerald-400 translate-x-0.5"
                              : "text-neutral-600"
                          }`}
                        />
                      </button>
                    );
                  })
                )}
              </div>

              {/* Keyboard Help Footer */}
              <div className="px-5 py-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-neutral-500 bg-neutral-950/80">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↑↓</kbd> navigacija
                  </span>
                  <span className="flex items-center gap-1">
                    <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↵</kbd> izaberi
                  </span>
                </div>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">ESC</kbd> zatvori
                </span>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
