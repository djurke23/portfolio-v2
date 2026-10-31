import React from "react";

const items = [
  "VERCEL • EDGE FUNCTIONS",
  "SUPABASE • POSTGRESQL",
  "APP STORE • IOS • REVENUECAT",
  "REACT 19 • NEXT.JS 16",
  "CLOUDFLARE D1 • R2",
  "PINK MEDIA GROUP • LIVE BROADCAST • ZERO-DOWNTIME",
  "SANITY CMS • TAILWIND V4",
  "GO • HIGH-THROUGHPUT APIS",
  "ZERO-DOWNTIME • 120 FPS",
];

export default function Marquee() {
  return (
    <div className="marquee-container w-full border-y border-white/[0.08] bg-[#080808] overflow-hidden py-3.5 relative select-none">
      {/* Edge Fades */}
      <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#080808] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#080808] to-transparent z-10 pointer-events-none" />

      <div className="animate-marquee">
        {/* Quadrupled items to guarantee a seamless loop on any screen resolution */}
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-6 sm:gap-8 px-6 sm:px-8 font-mono text-[11px] sm:text-xs tracking-[0.2em] uppercase text-white/40 hover:text-white/80 transition-colors cursor-default whitespace-nowrap"
          >
            <span>{item}</span>
            <span className="text-white/10 select-none">—</span>
          </span>
        ))}
      </div>
    </div>
  );
}
