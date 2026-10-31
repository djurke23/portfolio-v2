"use client";

import React, { useState, useEffect, useMemo } from "react";

const goCode = `package core

import (
  "context"
  "github.com/luka/system"
)

// zero-downtime mindset from Pink TV
type HunterService struct {
  db    *system.Postgres
  cache *system.EdgeCache
  live  *system.BroadcastReliability
}

func (s *HunterService) Register(
  ctx context.Context,
  hunter *Hunter,
) (*Registration, error) {
  if len(s.cache.BetaSlots) >= 100 {
    return nil, ErrBetaClosed
  }
  // like live transmission — no rollback on air
  tx, _ := s.db.Begin(ctx)
  defer tx.Rollback()
  return s.commitHunter(ctx, tx, hunter)
}`;

const tsCode = `import { NativeModules, Platform } from 'react-native';
import { supabase } from '@carflo/cloud';

// zero-drop offline sync engine for iOS
export class CarFloBridge {
  private static queue: ExpenseRecord[] = [];

  // 120Hz native bridge pipeline
  static async syncTelemetry(vehicleId: string) {
    const records = await this.drainQueue();
    // zero-downtime mindset from Pink TV live feed
    return supabase.rpc('sync_vehicle_telemetry', {
      vehicle_id: vehicleId,
      records: records,
      client_time: Date.now(),
    });
  }
}`;

function highlightSyntax(raw: string) {
  const lines = raw.split("\n");

  return lines.map((line, lineIdx) => {
    // Comment line
    const commentIdx = line.indexOf("//");
    if (commentIdx !== -1) {
      const before = line.slice(0, commentIdx);
      const comment = line.slice(commentIdx);
      return (
        <span key={lineIdx}>
          {highlightLineTokens(before)}
          <span className="text-neutral-500 italic">{comment}</span>
          {lineIdx < lines.length - 1 ? "\n" : ""}
        </span>
      );
    }

    return (
      <span key={lineIdx}>
        {highlightLineTokens(line)}
        {lineIdx < lines.length - 1 ? "\n" : ""}
      </span>
    );
  });
}

function highlightLineTokens(line: string) {
  if (!line) return "";

  const tokenRegex = /("(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|\b(?:package|import|type|struct|func|return|if|defer|nil|export|class|private|static|async|await|const|let)\b|\*[a-zA-Z0-9_.]+|\b(?:Context|Hunter|Registration|error|Postgres|EdgeCache|BroadcastReliability|ExpenseRecord|string|int|bool)\b|[^\s"'a-zA-Z0-9_*]+|\s+|[a-zA-Z0-9_]+)/g;

  const matches = line.match(tokenRegex);
  if (!matches) return line;

  return matches.map((token, i) => {
    if (token.startsWith('"') || token.startsWith("'")) {
      return (
        <span key={i} className="text-emerald-300">
          {token}
        </span>
      );
    }
    if (
      /^(package|import|type|struct|func|return|if|defer|nil|export|class|private|static|async|await|const|let)$/.test(
        token
      )
    ) {
      return (
        <span key={i} className="text-purple-400 font-medium">
          {token}
        </span>
      );
    }
    if (
      token.startsWith("*") ||
      /^(Context|Hunter|Registration|error|Postgres|EdgeCache|BroadcastReliability|ExpenseRecord|string|int|bool)$/.test(
        token
      )
    ) {
      return (
        <span key={i} className="text-cyan-300">
          {token}
        </span>
      );
    }
    return (
      <span key={i} className="text-neutral-200">
        {token}
      </span>
    );
  });
}

function CodeEditorView({ code }: { code: string }) {
  const [charCount, setCharCount] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setCharCount(current);
      if (current >= code.length) {
        clearInterval(interval);
      }
    }, 13);

    return () => clearInterval(interval);
  }, [code]);

  const displayed = useMemo(() => code.slice(0, charCount), [code, charCount]);
  const highlighted = useMemo(() => highlightSyntax(displayed), [displayed]);

  return (
    <pre className="px-5 sm:px-6 pt-4 pb-7 text-[12px] sm:text-[13px] leading-6 font-mono text-white/80 overflow-x-auto whitespace-pre-wrap selection:bg-emerald-500/30 min-h-[360px]">
      <code>{highlighted}</code>
      <span className="inline-block w-2.5 h-4 bg-white animate-pulse ml-0.5 align-middle select-none shadow-[0_0_8px_#fff]">
        &#x2588;
      </span>
    </pre>
  );
}

export default function CodeWindow() {
  const [active, setActive] = useState<"go" | "ts">("go");
  const [time, setTime] = useState("3:09:02 AM");

  // Live Belgrade production time
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(
        now.toLocaleTimeString("en-US", {
          timeZone: "Europe/Belgrade",
          hour: "numeric",
          minute: "2-digit",
          second: "2-digit",
          hour12: true,
        })
      );
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full max-w-[560px] rounded-[24px] bg-[#111111] border border-white/10 overflow-hidden shadow-[0_20px_70px_rgba(0,0,0,0.85)] font-mono select-none">
      {/* Header Bar */}
      <div className="flex items-center justify-between px-5 sm:px-6 py-3.5 border-b border-white/[0.06] bg-[#161616]">
        {/* macOS Traffic Lights */}
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56] border border-black/20 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E] border border-black/20 shadow-sm" />
          <div className="w-3 h-3 rounded-full bg-[#27CA3F] border border-black/20 shadow-sm" />
        </div>

        {/* Tab Switcher Pills */}
        <div className="flex items-center bg-black/60 rounded-full p-1 border border-white/10 shadow-inner">
          <button
            type="button"
            onClick={() => setActive("go")}
            className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
              active === "go"
                ? "bg-white text-neutral-950 font-bold shadow-md"
                : "text-white/40 hover:text-white"
            }`}
          >
            service.go
          </button>
          <button
            type="button"
            onClick={() => setActive("ts")}
            className={`px-3.5 py-1 rounded-full text-xs font-mono transition-all duration-200 cursor-pointer ${
              active === "ts"
                ? "bg-white text-neutral-950 font-bold shadow-md"
                : "text-white/40 hover:text-white"
            }`}
          >
            CarFloBridge.ts
          </button>
        </div>
      </div>

      {/* Subheader Live Production Indicator */}
      <div className="px-5 sm:px-6 py-2.5 flex items-center gap-2 border-b border-white/[0.04] bg-black/20">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span className="font-mono text-[10px] tracking-[0.14em] text-white/40 uppercase truncate">
          LIVE — PRODUCTION EDGE • BELGRADE • {time} • ZERO-DOWNTIME: ON
        </span>
      </div>

      {/* Code Body with key for instant reset on tab switch */}
      <CodeEditorView
        key={active}
        code={active === "go" ? goCode : tsCode}
      />

      {/* Atmospheric Soft Blue Corner Glow */}
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-blue-600/15 blur-[65px] rounded-full pointer-events-none" />
    </div>
  );
}
