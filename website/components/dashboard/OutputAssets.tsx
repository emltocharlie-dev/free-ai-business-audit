"use client";

import React from "react";
import { useI18n } from "../../contexts/I18nContext";

interface OutputAssetsProps {
  progress?: number;
  results?: {
    score?: number;
    recommendations?: number;
    opportunities?: number;
  };
}

export function OutputAssets({ progress = 75, results }: OutputAssetsProps) {
  const { t } = useI18n();
  
  const defaultResults = {
    score: 87,
    recommendations: 12,
    opportunities: 5,
  };

  const displayResults = results || defaultResults;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-2xl border border-emerald-500/30 bg-slate-900/60 backdrop-blur-xl">
      {/* Header */}
      <div className="flex items-center gap-2 border-b border-emerald-500/20 bg-emerald-500/5 px-4 py-3">
        <div className="flex gap-1.5">
          <span className="h-3 w-3 rounded-full bg-red-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-yellow-500/80"></span>
          <span className="h-3 w-3 rounded-full bg-green-500/80"></span>
        </div>
        <span className="ml-4 font-mono text-xs text-emerald-400">{t.dashboard.output.terminal}</span>
      </div>

      {/* Content */}
      <div className="h-[calc(100%-60px)] overflow-hidden p-4">
        {/* Progress Bar */}
        <div className="mb-6 rounded-lg border border-emerald-500/20 bg-slate-950/50 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="font-mono text-xs text-slate-500">{t.dashboard.output.progress}</span>
            <span className="font-mono text-xs text-emerald-400">{progress}%</span>
          </div>
          <div className="relative h-3 overflow-hidden rounded-full bg-slate-800">
            <div
              className="absolute left-0 top-0 h-full rounded-full bg-gradient-to-r from-emerald-500 via-cyan-500 to-emerald-500 transition-all duration-1000 ease-out"
              style={{ width: `${progress}%` }}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 animate-shimmer bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
            </div>
          </div>
          <div className="mt-2 flex justify-between font-mono text-xs">
            <span className="text-slate-600">{t.dashboard.output.progressLabels.collect}</span>
            <span className="text-cyan-600">{t.dashboard.output.progressLabels.analyzing}</span>
            <span className="text-slate-600">{t.dashboard.output.progressLabels.generate}</span>
          </div>
        </div>

        {/* Result Cards */}
        <div className="space-y-3">
          {/* Audit Score */}
          <div className="group relative overflow-hidden rounded-lg border border-emerald-500/20 bg-slate-950/50 p-4 transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10">
                  <svg className="h-5 w-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-mono text-xs text-slate-500">{t.dashboard.output.auditScore}</p>
                  <p className="font-mono text-lg font-bold text-emerald-400">{displayResults.score}/100</p>
                </div>
              </div>
              <div className="text-right">
                <span className="font-mono text-xs text-emerald-600">{t.dashboard.output.excellent}</span>
              </div>
            </div>
          </div>

          {/* Recommendations */}
          <div className="group relative overflow-hidden rounded-lg border border-emerald-500/20 bg-slate-950/50 p-4 transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-cyan-500/10">
                <svg className="h-5 w-5 text-cyan-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs text-slate-500">{t.dashboard.output.recommendations}</p>
                <p className="font-mono text-lg font-bold text-cyan-400">{displayResults.recommendations} {t.dashboard.output.recommendationsUnit}</p>
              </div>
            </div>
          </div>

          {/* Opportunities */}
          <div className="group relative overflow-hidden rounded-lg border border-emerald-500/20 bg-slate-950/50 p-4 transition-all hover:border-emerald-400/40 hover:shadow-lg hover:shadow-emerald-500/10">
            <div className="absolute left-0 top-0 h-full w-0.5 bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 opacity-0 transition-opacity group-hover:opacity-100"></div>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/10">
                <svg className="h-5 w-5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <p className="font-mono text-xs text-slate-500">{t.dashboard.output.opportunities}</p>
                <p className="font-mono text-lg font-bold text-violet-400">{displayResults.opportunities} {t.dashboard.output.opportunitiesUnit}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Status log at bottom */}
        <div className="mt-6 overflow-hidden rounded-lg border border-emerald-500/10 bg-slate-950/80 p-3">
          <div className="h-16 overflow-hidden">
            <div className="animate-data-scroll font-mono text-xs">
              <p className="text-emerald-600">{t.dashboard.output.logs.ok}</p>
              <p className="text-cyan-600">{t.dashboard.output.logs.gen}</p>
              <p className="text-violet-600">{t.dashboard.output.logs.opt}</p>
              <p className="text-slate-600">{t.dashboard.output.logs.wait}</p>
              {/* Duplicate for scroll */}
              <p className="text-emerald-600">{t.dashboard.output.logs.ok}</p>
              <p className="text-cyan-600">{t.dashboard.output.logs.gen}</p>
              <p className="text-violet-600">{t.dashboard.output.logs.opt}</p>
              <p className="text-slate-600">{t.dashboard.output.logs.wait}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom glow */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent"></div>
    </div>
  );
}