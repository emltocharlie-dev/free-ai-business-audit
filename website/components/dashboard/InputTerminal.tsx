"use client";

import React from "react";
import { useI18n } from "../../contexts/I18nContext";

interface InputTerminalProps {
  inputs?: {
    businessType?: string;
    revenue?: string;
    teamSize?: string;
    painPoints?: string[];
  };
}

export function InputTerminal({ inputs }: InputTerminalProps) {
  const { t } = useI18n();
  
  const defaultInputs = {
    businessType: t.dashboard.input.businessTypeValue,
    revenue: t.dashboard.input.revenueValue,
    teamSize: t.dashboard.input.teamSizeValue,
    painPoints: t.dashboard.input.painPointsList,
  };

  const displayInputs = inputs || defaultInputs;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-cyan-500/30 bg-slate-900/60 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-cyan-500/20 bg-cyan-500/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="ml-4 font-mono text-xs text-cyan-400">{t.dashboard.input.terminal}</span>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-60px)] overflow-hidden p-4">
        <div className="space-y-4">
          {/* Business Type */}
          <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-950/50 p-4 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-cyan-600">01_</span>
              <div>
                <p className="font-mono text-xs text-slate-500">{t.dashboard.input.businessType}</p>
                <p className="mt-1 font-mono text-sm text-cyan-300">{displayInputs.businessType}</p>
              </div>
            </div>
          </div>

          {/* Revenue */}
          <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-950/50 p-4 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-cyan-600">02_</span>
              <div>
                <p className="font-mono text-xs text-slate-500">{t.dashboard.input.revenue}</p>
                <p className="mt-1 font-mono text-sm text-cyan-300">{displayInputs.revenue}</p>
              </div>
            </div>
          </div>

          {/* Team Size */}
          <div className="group relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-950/50 p-4 transition-all hover:border-cyan-400/40 hover:shadow-lg hover:shadow-cyan-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-cyan-500/0 via-cyan-500/50 to-cyan-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-cyan-600">03_</span>
              <div>
                <p className="font-mono text-xs text-slate-500">{t.dashboard.input.teamSize}</p>
                <p className="mt-1 font-mono text-sm text-cyan-300">{displayInputs.teamSize}</p>
              </div>
            </div>
          </div>

          {/* Pain Points - Scrolling */}
          <div className="relative overflow-hidden rounded-lg border border-cyan-500/20 bg-slate-950/50 p-4">
            <div className="flex items-start gap-3">
              <span className="font-mono text-xs text-cyan-600">04_</span>
              <div className="flex-1">
                <p className="font-mono text-xs text-slate-500">{t.dashboard.input.painPoints}</p>
                <div className="mt-2 h-24 overflow-hidden">
                  <div className="animate-data-scroll flex flex-col gap-2">
                    {displayInputs.painPoints?.map((point, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-2 font-mono text-sm text-emerald-400"
                      >
                        <span className="text-emerald-600">▶</span>
                        <span>{point}</span>
                      </div>
                    ))}
                    {/* Duplicate for seamless loop */}
                    {displayInputs.painPoints?.map((point, index) => (
                      <div
                        key={`dup-${index}`}
                        className="flex items-center gap-2 font-mono text-sm text-emerald-400"
                      >
                        <span className="text-emerald-600">▶</span>
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scrolling log at bottom */}
        <div className="mt-6 overflow-hidden rounded-lg border border-cyan-500/10 bg-slate-950/80 p-3">
          <div className="h-16 overflow-hidden">
            <div className="animate-data-scroll font-mono text-xs">
              <p className="text-slate-600">{t.dashboard.input.logs.init}</p>
              <p className="text-slate-600">{t.dashboard.input.logs.parse}</p>
              <p className="text-cyan-600">{t.dashboard.input.logs.detect}</p>
              <p className="text-emerald-600">{t.dashboard.input.logs.ready}</p>
              {/* Duplicate for scroll */}
              <p className="text-slate-600">{t.dashboard.input.logs.init}</p>
              <p className="text-slate-600">{t.dashboard.input.logs.parse}</p>
              <p className="text-cyan-600">{t.dashboard.input.logs.detect}</p>
              <p className="text-emerald-600">{t.dashboard.input.logs.ready}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
    </div>
  );
}