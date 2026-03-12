"use client";

import React from "react";

export function CoreProcessor() {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      {/* Outer glow */}
      <div className="absolute h-64 w-64 rounded-full bg-cyan-500/10 blur-3xl"></div>
      <div className="absolute h-48 w-48 rounded-full bg-emerald-500/10 blur-2xl"></div>

      {/* Main processor container */}
      <div className="relative h-56 w-56 lg:h-64 lg:w-64">
        {/* Central Sphere */}
        <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 transform-gpu animate-float">
          {/* Sphere with 3D effect */}
          <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-br from-cyan-400 via-emerald-500 to-cyan-600 shadow-[0_0_60px_rgba(6,182,212,0.5)]">
            {/* Sphere surface details */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-transparent via-white/20 to-transparent"></div>
            <div className="absolute inset-2 rounded-full border border-white/10"></div>
            <div className="absolute inset-4 rounded-full border border-white/5"></div>

            {/* Rotating inner core */}
            <div className="absolute inset-6 animate-spin rounded-full border-2 border-cyan-300/30 border-t-cyan-300"></div>
            <div className="absolute inset-8 animate-spin rounded-full border-2 border-emerald-300/30 border-b-emerald-300" style={{ animationDirection: 'reverse', animationDuration: '3s' }}></div>

            {/* Core glow */}
            <div className="absolute left-1/2 top-1/2 h-16 w-16 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/30 blur-xl"></div>
          </div>
        </div>

        {/* Orbit Ring 1 - Horizontal */}
        <div
          className="absolute left-1/2 top-1/2 h-44 w-44 -translate-x-1/2 -translate-y-1/2 transform-gpu"
          style={{ transformStyle: 'preserve-3d' }}
        >
          <div className="absolute inset-0 animate-spin rounded-full border border-cyan-500/20" style={{ animationDuration: '8s' }}>
            <div className="absolute -left-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(6,182,212,0.8)]"></div>
          </div>
        </div>

        {/* Orbit Ring 2 - Angled */}
        <div
          className="absolute left-1/2 top-1/2 h-52 w-52 -translate-x-1/2 -translate-y-1/2 transform-gpu"
          style={{ transform: 'rotateX(60deg) rotateY(20deg)' }}
        >
          <div className="animate-spin-reverse rounded-full border border-emerald-500/20">
            <div className="absolute -right-1 top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(16,185,129,0.8)]"></div>
          </div>
        </div>

        {/* Orbit Ring 3 - Vertical */}
        <div
          className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 transform-gpu"
          style={{ transform: 'rotateY(70deg)' }}
        >
          <div className="animate-spin rounded-full border border-violet-500/20" style={{ animationDuration: '12s' }}>
            <div className="absolute -top-1 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-violet-400 shadow-[0_0_10px_rgba(139,92,246,0.8)]"></div>
          </div>
        </div>

        {/* Particle effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="particle particle-1 absolute h-1 w-1 animate-particle-float rounded-full bg-cyan-400"></div>
          <div className="particle particle-2 absolute h-1 w-1 animate-particle-float rounded-full bg-emerald-400" style={{ animationDelay: '0.5s' }}></div>
          <div className="particle particle-3 absolute h-1 w-1 animate-particle-float rounded-full bg-violet-400" style={{ animationDelay: '1s' }}></div>
        </div>

        {/* Processing text */}
        <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 text-center">
          <div className="animate-pulse font-mono text-xs text-cyan-400">PROCESSING</div>
          <div className="mt-1 flex justify-center gap-1">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" style={{ animationDelay: '0ms' }}></span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" style={{ animationDelay: '150ms' }}></span>
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-violet-400" style={{ animationDelay: '300ms' }}></span>
          </div>
        </div>
      </div>

      {/* Background grid lines */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px'
        }}></div>
      </div>
    </div>
  );
}
