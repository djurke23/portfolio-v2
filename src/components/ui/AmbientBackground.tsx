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
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY + window.scrollY);
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {/* Background Subtle Grid Texture */}
      <div className="absolute inset-0 bg-dot-pattern opacity-40 mask-radial" />

      {/* Ambient Moving Radial Glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full bg-emerald-500/[0.04] blur-[120px] pointer-events-none"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />

      {/* Static Atmospheric Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-[480px] bg-gradient-to-b from-white/[0.03] to-transparent pointer-events-none blur-3xl" />
      <div className="absolute top-1/4 right-0 w-[450px] h-[450px] rounded-full bg-cyan-500/[0.02] blur-[140px] pointer-events-none" />
      <div className="absolute top-2/3 left-0 w-[500px] h-[500px] rounded-full bg-emerald-500/[0.02] blur-[160px] pointer-events-none" />
    </div>
  );
}
