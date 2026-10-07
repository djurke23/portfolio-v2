"use client";

import React from "react";
import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed top-0 left-0 right-0 h-[2.5px] z-[999] pointer-events-none">
      <motion.div
        style={{ scaleX: scrollYProgress }}
        className="h-full w-full origin-left bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 shadow-[0_0_12px_rgba(16,185,129,0.85)] will-change-transform"
      />
    </div>
  );
}
