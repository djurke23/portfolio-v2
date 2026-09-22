"use client";

import React from "react";
import { useTheme } from "@/context/ThemeContext";
import { useSound } from "@/context/SoundContext";
import { useLanguage } from "@/context/LanguageContext";
import { useToast } from "@/context/ToastContext";
import { Sun, Moon } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggleTheme } = useTheme();
  const { playToggle } = useSound();
  const { language } = useLanguage();
  const { showToast } = useToast();
  const isSr = language === "sr";

  const handleToggle = () => {
    playToggle();
    toggleTheme();
    const nextTheme = theme === "dark" ? "light" : "dark";
    if (nextTheme === "light") {
      showToast(
        isSr ? "Svetla tema aktivirana" : "Light theme activated",
        "info"
      );
    } else {
      showToast(
        isSr ? "Tamna tema aktivirana" : "Dark theme activated",
        "info"
      );
    }
  };

  const label =
    theme === "dark"
      ? isSr
        ? "Prebaci na svetlu temu"
        : "Switch to light theme"
      : isSr
      ? "Prebaci na tamnu temu"
      : "Switch to dark theme";

  return (
    <button
      type="button"
      onClick={handleToggle}
      aria-label={label}
      title={label}
      className={`relative p-2 rounded-full transition-all active:scale-90 text-neutral-400 hover:text-white hover:bg-white/5 focus:outline-none ${className}`}
      data-cursor="THEME"
    >
      <AnimatePresence mode="wait" initial={false}>
        {theme === "dark" ? (
          <motion.div
            key="sun"
            initial={{ rotate: -45, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: 45, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Sun className="w-4 h-4 text-amber-400 hover:text-amber-300 transition-colors" />
          </motion.div>
        ) : (
          <motion.div
            key="moon"
            initial={{ rotate: 45, scale: 0.7, opacity: 0 }}
            animate={{ rotate: 0, scale: 1, opacity: 1 }}
            exit={{ rotate: -45, scale: 0.7, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="flex items-center justify-center"
          >
            <Moon className="w-4 h-4 text-indigo-500 hover:text-indigo-600 transition-colors" />
          </motion.div>
        )}
      </AnimatePresence>
    </button>
  );
}
