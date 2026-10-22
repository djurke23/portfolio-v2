"use client";

import React, { useState, useEffect, useMemo, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { useSound } from "@/context/SoundContext";
import { siteConfig } from "@/data/site";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";
import { useTheme } from "@/context/ThemeContext";
import {
  Search,
  FileText,
  Mail,
  Languages,
  ExternalLink,
  ArrowRight,
  Sparkles,
  Layers,
  Wrench,
  MessageSquare,
  HelpCircle,
  Briefcase,
  User,
  Monitor,
  Compass,
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

const srProjectSubtitles: Record<string, string> = {
  carflo: "Digitalni dnevnik troškova i servisiranja vozila za iOS",
  fluffyflowers: "E-commerce cvećara i radionica sa online porudžbinama",
  "rev-and-chill": "Sistem za prijavu i moderaciju vozila za auto skupove",
  bgdcars: "Prezentacija i sajt za studio za auto detailing i zaštitu vozila",
  "inno-build": "Korporativni sajt za građevinsku i inženjersku kompaniju",
  "monster-gym": "Web prezentacija za moderni fitnes i trening centar",
  "dental-plus": "Web sajt za stomatološku ordinaciju sa zakazivanjem",
  "finance-tracker": "UI/UX koncept mobilne aplikacije za lične finansije",
  "habit-tracker": "Dizajn sistem i koncept za praćenje dnevnih navika",
  "portfolio-v1": "Prethodna verzija ličnog portfolija (arhiva)",
};

export default function CommandPalette() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);

  const { language, setLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();
  const { copyEmail, showToast } = useToast();
  const { playClick, playOpen, playToggle, playSuccess } = useSound();
  const isSr = language === "sr";

  const openPalette = useCallback(() => {
    playOpen();
    setQuery("");
    setSelectedIndex(0);
    setOpen(true);
  }, [playOpen]);

  const closePalette = useCallback(() => {
    playToggle();
    setOpen(false);
  }, [playToggle]);

  // Toggle Command Palette on Cmd+K / Ctrl+K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (open) {
          closePalette();
        } else {
          openPalette();
        }
      } else if (e.key === "Escape" && open) {
        closePalette();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [open, openPalette, closePalette]);

  // Listen for programmatic open requests from Navbar & mobile menu
  useEffect(() => {
    const handleOpenEvent = () => {
      openPalette();
    };

    window.addEventListener("open-command-palette", handleOpenEvent);
    return () => window.removeEventListener("open-command-palette", handleOpenEvent);
  }, [openPalette]);

  // Focus input when opened
  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50);
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const scrollToAnchor = useCallback(
    (anchor: string) => {
      setOpen(false);
      const el = document.querySelector(anchor);
      if (el) {
        if (window.__lenis) {
          window.__lenis.scrollTo(el as HTMLElement);
        } else {
          el.scrollIntoView({ behavior: "smooth" });
        }
      } else {
        router.push(`/${anchor}`);
      }
    },
    [router]
  );

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
        title: isSr ? "Prebaci jezik na engleski (EN)" : "Switch Language to Serbian (SR)",
        subtitle: isSr ? "Trenutno je aktivan srpski jezik" : "Currently viewing in English",
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
              ? "Aktiviraj svetlu paletu"
              : "Clean light titanium paper mode"
            : isSr
            ? "Aktiviraj tamnu noćnu paletu"
            : "Cyber dark workstation mode",
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

      // Navigation Links
      {
        id: "nav-work",
        group: "navigation",
        title: isSr ? "Izdvojeni Radovi" : "Featured Projects",
        subtitle: isSr ? "Sekcija sa vodećim studijama slučaja" : "Flagship engineering case studies",
        icon: <Sparkles className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#work"),
      },
      {
        id: "nav-services",
        group: "navigation",
        title: isSr ? "Usluge i Isporuka" : "Services & Capabilities",
        subtitle: isSr ? "Full-stack, mobilne aplikacije i dizajn" : "Full-stack, mobile apps & UI systems",
        icon: <Wrench className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#services"),
      },
      {
        id: "nav-discipline",
        group: "navigation",
        title: isSr ? "Inženjering i Dizajn" : "Engineering & Design Craft",
        subtitle: isSr ? "Pristup arhitekturi, kodu i pokretu" : "Architecture, code discipline & motion",
        icon: <Compass className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#discipline"),
      },
      {
        id: "nav-stack",
        group: "navigation",
        title: isSr ? "Tehnološki Stack" : "Technology Stack",
        subtitle: isSr ? "Next.js, TypeScript, React Native, Go..." : "Next.js, TypeScript, React Native, Go...",
        icon: <Layers className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#stack"),
      },
      {
        id: "nav-experience",
        group: "navigation",
        title: isSr ? "Radno Iskustvo" : "Work Experience",
        subtitle: isSr ? "Istorijat angažmana i broadcast robotika" : "Career history & broadcast robotics",
        icon: <Briefcase className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#experience"),
      },
      {
        id: "nav-about",
        group: "navigation",
        title: isSr ? "O Meni i Obrazovanje" : "About & Education",
        subtitle: isSr ? "Biografija, profesionalni pristup i akademija" : "Biography, philosophy & academy",
        icon: <User className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#about"),
      },
      {
        id: "nav-gear",
        group: "navigation",
        title: isSr ? "Radno Okruženje & Oprema" : "Studio Setup & Gear",
        subtitle: isSr ? "Radna stanica, periferije i audio oprema" : "Workstation, displays & studio audio",
        icon: <Monitor className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#gear"),
      },
      {
        id: "nav-testimonials",
        group: "navigation",
        title: isSr ? "Recenzije Klijenata" : "Client Endorsements",
        subtitle: isSr ? "Preporuke klijenata i poslovni uticaj" : "Client recommendations & impact",
        icon: <MessageSquare className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#testimonials"),
      },
      {
        id: "nav-faq",
        group: "navigation",
        title: isSr ? "Česta Pitanja (FAQ)" : "Frequently Asked Questions",
        subtitle: isSr ? "Odgovori na tehnička i procesna pitanja" : "Technical and collaboration answers",
        icon: <HelpCircle className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#faq"),
      },
      {
        id: "nav-contact",
        group: "navigation",
        title: isSr ? "Kontakt i Upiti" : "Contact & Inquiries",
        subtitle: isSr ? "Započnite novi projekat ili pošaljite poruku" : "Start a project or send a message",
        icon: <Mail className="w-4 h-4 text-neutral-400" />,
        onSelect: () => scrollToAnchor("#contact"),
      },
    ];

    // Projects with localized subtitles
    projects.forEach((proj) => {
      const localizedSubtitle = isSr
        ? srProjectSubtitles[proj.id] || proj.tagline
        : proj.tagline;

      items.push({
        id: `proj-${proj.id}`,
        group: "projects",
        title: proj.title,
        subtitle: localizedSubtitle,
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
  }, [isSr, language, copyEmail, setLanguage, showToast, playSuccess, playToggle, theme, toggleTheme, scrollToAnchor]);

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
                aria-label={isSr ? "Zatvori pretragu" : "Close search"}
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
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↑↓</kbd>{" "}
                  {isSr ? "navigacija" : "navigate"}
                </span>
                <span className="flex items-center gap-1">
                  <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">↵</kbd>{" "}
                  {isSr ? "izaberi" : "select"}
                </span>
              </div>
              <span className="flex items-center gap-1">
                <kbd className="px-1 py-0.5 rounded bg-white/5 border border-white/10 text-[10px]">ESC</kbd>{" "}
                {isSr ? "zatvori" : "close"}
              </span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
