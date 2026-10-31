"use client";

import React, { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import Image from "next/image";
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

function getServerSnapshot(): boolean {
  return true;
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

  // Lock scroll when visible
  useEffect(() => {
    if (!isVisible) return;

    document.documentElement.style.overflow = "hidden";
    document.body.style.overflow = "hidden";
    if (window.__lenis) {
      window.__lenis.stop();
    }

    const startTime = performance.now();
    const duration = 1350;

    const interval = setInterval(() => {
      const elapsed = performance.now() - startTime;
      const t = Math.min(1, elapsed / duration);
      const eased = t < 0.5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2;
      const currentVal = Math.round(eased * 100);

      setProgress(currentVal);

      if (t >= 1) {
        clearInterval(interval);
        setTimeout(handleFinish, 220);
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

  // Listen for replay requests
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
          key="preloader"
          initial={{ y: 0 }}
          exit={{ y: "-100%" }}
          transition={{
            duration: 0.85,
            ease: [0.76, 0, 0.24, 1],
          }}
          onClick={handleFinish}
          className="fixed inset-0 z-[100000] bg-[#070709] text-white flex flex-col justify-between p-6 sm:p-12 select-none overflow-hidden cursor-pointer"
          title={isSr ? "Klikni za preskok" : "Click to skip"}
        >
          {/* Background Micro Grid */}
          <div className="absolute inset-0 bg-dot-pattern opacity-30 pointer-events-none" />

          {/* Ambient center glow */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.08)_0%,transparent_70%)] pointer-events-none" />

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

          {/* CENTER DISPLAY */}
          <div className="relative z-10 flex flex-col items-center justify-center my-auto space-y-7">
            {/* Avatar badge */}
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-2xl p-1 bg-gradient-to-b from-white/10 to-white/5 border border-emerald-500/30 shadow-[0_0_35px_rgba(16,185,129,0.22)] flex items-center justify-center overflow-hidden"
            >
              <Image
                src="/icon.png"
                alt="Luka Đurić"
                width={96}
                height={96}
                priority
                className="w-full h-full object-cover rounded-xl"
              />
            </motion.div>

            {/* Percentage Display */}
            <div className="text-center space-y-2">
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-6xl sm:text-8xl md:text-9xl font-black font-mono tracking-tight text-white tabular-nums">
                  {progress < 10 ? `0${progress}` : progress}
                </span>
                <span className="text-2xl sm:text-4xl font-mono text-emerald-400 font-bold">
                  %
                </span>
              </div>

              {/* Progress Line */}
              <div className="w-56 sm:w-72 h-1 bg-white/10 rounded-full overflow-hidden mx-auto">
                <motion.div
                  className="h-full bg-gradient-to-r from-emerald-500 via-teal-300 to-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.8)]"
                  style={{ width: `${progress}%` }}
                />
              </div>
            </div>

            {/* Telemetry subtitle */}
            <p className="text-xs font-mono text-neutral-400 tracking-widest uppercase">
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
