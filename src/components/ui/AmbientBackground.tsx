"use client";

import React, { useEffect } from "react";
import { useMotionValue, useSpring, motion } from "framer-motion";

export default function AmbientBackground() {
  const mouseX = useMotionValue(-500);
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 40, stiffness: 200 };
  const smoothX = useSpring(mouseX, springConfig);
  const smoothY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Only track mouse on devices with fine pointer (mouse) and no reduced motion preference
    const mediaQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!mediaQuery.matches || reducedMotionQuery.matches) {
      return;
    }

    const handleMouseMove = (e: MouseEvent) => {
      // Container is fixed inset-0, so use viewport client coordinates directly
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 mask-radial" />

      {/* Ambient Moving Radial Glow (Desktop only with mouse tracking) */}
      <div className="hidden md:block">
        <motion.div
          className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none will-change-transform"
          style={{
            x: smoothX,
            y: smoothY,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      </div>

      {/* Static Atmospheric Gradients (Desktop soft blur) */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none blur-3xl" />
      <div className="hidden md:block absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/[0.02] blur-[140px] pointer-events-none" />
      <div className="hidden md:block absolute top-2/3 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.02] blur-[160px] pointer-events-none" />

      {/* Mobile-optimized atmospheric gradient without expensive blur filters */}
      <div className="md:hidden absolute top-0 inset-x-0 h-[360px] bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(16,185,129,0.06),transparent)] pointer-events-none" />
    </div>
  );
}
