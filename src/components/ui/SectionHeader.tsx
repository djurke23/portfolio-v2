import React from "react";

interface SectionHeaderProps {
  number?: string;
  category?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export default function SectionHeader({
  number,
  category,
  title,
  description,
  align = "left",
  className = "",
}: SectionHeaderProps) {
  return (
    <div
      className={`space-y-4 mb-14 sm:mb-20 ${
        align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-3xl"
      } ${className}`}
    >
      <div
        className={`flex items-center gap-3 text-xs font-mono uppercase tracking-widest text-emerald-400 font-semibold ${
          align === "center" ? "justify-center" : ""
        }`}
      >
        {number && (
          <span className="text-neutral-500 font-normal">[{number}]</span>
        )}
        {category && <span>{category}</span>}
      </div>

      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white leading-[1.15]">
        {title}
      </h2>

      {description && (
        <p className="text-base sm:text-lg text-neutral-400 leading-relaxed font-light">
          {description}
        </p>
      )}
    </div>
  );
}
