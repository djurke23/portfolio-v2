"use client";

import React, { useState, useEffect } from "react";
import { Clock } from "lucide-react";

interface LiveBelgradeTimeProps {
  showIcon?: boolean;
  className?: string;
  label?: string;
}

export default function LiveBelgradeTime({
  showIcon = true,
  className = "",
  label,
}: LiveBelgradeTimeProps) {
  const [timeString, setTimeString] = useState<string>("");
  const [tzCode, setTzCode] = useState<string>("CET");

  useEffect(() => {
    const updateTime = () => {
      try {
        const now = new Date();
        const formatted = new Intl.DateTimeFormat("sr-RS", {
          timeZone: "Europe/Belgrade",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          hour12: false,
        }).format(now);
        setTimeString(formatted);

        // Dynamically detect CET / CEST
        const tzPart = new Intl.DateTimeFormat("en-US", {
          timeZone: "Europe/Belgrade",
          timeZoneName: "short",
        }).formatToParts(now).find((p) => p.type === "timeZoneName")?.value;

        if (tzPart) {
          setTzCode(tzPart);
        }
      } catch {
        const d = new Date();
        setTimeString(d.toTimeString().slice(0, 8));
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-mono text-neutral-300 ${className}`}
      title="Current local time in Belgrade, Serbia"
    >
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
      </span>

      {showIcon && <Clock className="w-3.5 h-3.5 text-neutral-400" />}

      {label && <span className="text-neutral-400">{label}</span>}

      <span className="font-semibold text-white tracking-wider tabular-nums min-w-[62px] inline-block">
        {timeString || "--:--:--"}
      </span>
      <span className="text-[10px] text-emerald-400/80 font-bold uppercase tracking-wider">
        {tzCode}
      </span>
    </div>
  );
}
