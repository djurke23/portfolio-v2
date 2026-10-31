"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/context/LanguageContext";
import { useSound } from "@/context/SoundContext";

const STORAGE_KEY = "portfolio_intro_seen";

let replayListeners: Array<() => void> = [];

function subscribeIntro(callback: () => void) {
  replayListeners.push(callback);
  window.addEventListener("storage", callback);
  return () => {
    replayListeners = replayListeners.filter((cb) => cb !== callback);
    window.removeEventListener("storage", callback);
  };
}

function getClientSnapshot(): boolean {
  try {
    if (typeof window !== "undefined" && window.location.search.includes("loader=1")) {
      return false;
    }
    return sessionStorage.getItem(STORAGE_KEY) === "true";
  } catch {
    return false;
  }
}

// Render in initial SSR HTML so preloader is visible on frame 0 with zero flash of site
function getServerSnapshot(): boolean {
  return false;
}

export default function LoadingScreen() {
  const hasSeenIntro = useSyncExternalStore(
    subscribeIntro,
    getClientSnapshot,
    getServerSnapshot
  );

  const [dismissed, setDismissed] = useState(false);
  const [replaying, setReplaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const { language } = useLanguage();
  const { playOpen } = useSound();
  const isSr = language === "sr";

  const isVisible = (!hasSeenIntro && !dismissed) || replaying;

  const handleFinish = useCallback(() => {
    setDismissed(true);
    setReplaying(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "true");
    } catch {
      // Ignore storage errors
    }
    document.documentElement.style.overflow = "";
    document.body.style.overflow = "";
    if (window.__lenis) {
      window.__lenis.start();
    }
    playOpen();
  }, [playOpen]);

  // Lock scroll when visible and drive progress
  useEffect(() => {
    if (!isVisible) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const startTime = performance.now();
    const duration = 1250;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (t >= 1) {
        clearInterval(interval);
        setTimeout(handleFinish, 180);
      }
    }, 20);

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearInterval(interval);
        setProgress(100);
        handleFinish();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      clearInterval(interval);
      window.removeEventListener("keydown", handleKeyDown);
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
      if (window.__lenis) window.__lenis.start();
    };
  }, [isVisible, handleFinish]);

  // Listen for manual replay requests
  useEffect(() => {
    const handleReplayEvent = () => {
      setProgress(0);
      setDismissed(false);
      setReplaying(true);
    };

    window.addEventListener("replay-loading-screen", handleReplayEvent);
    return () => {
      window.removeEventListener("replay-loading-screen", handleReplayEvent);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  const getStatusText = () => {
    if (progress < 30) return isSr ? "UČITAVANJE JEZGRA..." : "INITIALIZING CORE...";
    if (progress < 65) return isSr ? "SINHRONIZACIJA SISTEMA..." : "SYNCING WORKSPACE...";
    if (progress < 95) return isSr ? "PRIPREMA INTERFEJSA..." : "MOUNTING INTERFACE...";
    return isSr ? "SISTEM SPREMAN" : "SYSTEM ONLINE";
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          id="app-preloader-root"
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100000] bg-[#070709] text-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden cursor-pointer"
          title={isSr ? "Klikni za preskok" : "Click to skip"}
        >
          {/* Background Micro Grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.09)_0%,transparent_70%)] pointer-events-none" />

          {/* TOP BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-400">
            <div className="flex items-center gap-2.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="font-semibold text-neutral-200 tracking-wider uppercase">
                Luka Đurić
              </span>
              <span className="text-neutral-600 hidden sm:inline">•</span>
              <span className="text-neutral-500 hidden sm:inline">Portfolio 2026</span>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-emerald-400/90 tracking-widest font-bold">
              <span>{getStatusText()}</span>
            </div>
          </div>

          {/* CENTER DISPLAY (Clean & Minimalist: Telemetry + Numbers + Progress Bar) */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-8">
            {/* Status Eyebrow */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs font-mono text-emerald-400">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span className="tracking-widest uppercase font-semibold">
                {isSr ? "POKRETANJE SISTEMA" : "SYSTEM BOOT SEQUENCE"}
              </span>
            </div>

            {/* Percentage Display */}
            <div className="text-center space-y-3">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-7xl sm:text-9xl md:text-[11rem] leading-none font-black font-mono tracking-tighter text-white tabular-nums">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="text-3xl sm:text-5xl font-mono text-emerald-400 font-bold">
                  %
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-60 sm:w-80 h-1.5 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.9)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Telemetry subtitle */}
            <p className="text-xs sm:text-sm font-mono text-neutral-400 tracking-widest uppercase">
              {isSr ? "Inženjer Softvera & Kreativac" : "Full-Stack Developer & Product Craftsman"}
            </p>
          </div>

          {/* BOTTOM BAR */}
          <div className="relative z-10 flex items-center justify-between text-xs font-mono text-neutral-500 pt-4 border-t border-white/5">
            <div className="flex items-center gap-2">
              <span className="text-emerald-500 font-bold">[01]</span>
              <span>BEOGRAD, SRBIJA // 44.7866° N</span>
            </div>

            <div className="flex items-center gap-2 text-neutral-400 text-[11px]">
              <span className="hidden sm:inline">
                {isSr ? "Klikni bilo gde ili pritisni ESC za preskok" : "Click anywhere or ESC to skip"}
              </span>
              <span className="sm:hidden">
                {isSr ? "Klikni za preskok" : "Tap to skip"}
              </span>
              <kbd className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10 text-[10px] text-neutral-300">
                ESC
              </kbd>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
