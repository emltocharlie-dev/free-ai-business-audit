"use client";

import React from "react";

interface DataOverlayProps {
  visible?: boolean;
}

export function DataOverlay({ visible = true }: DataOverlayProps) {
  if (!visible) return null;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(rgba(6, 182, 212, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(6, 182, 212, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}
      ></div>

      {/* Diagonal data streams */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Stream 1 */}
        <div className="data-stream absolute -left-32 top-0 h-32 w-px animate-data-stream bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
        {/* Stream 2 */}
        <div className="data-stream absolute left-1/4 top-0 h-32 w-px animate-data-stream bg-gradient-to-b from-transparent via-emerald-500/30 to-transparent" style={{ animationDelay: '0.5s' }}></div>
        {/* Stream 3 */}
        <div className="data-stream absolute right-1/3 top-0 h-32 w-px animate-data-stream bg-gradient-to-b from-transparent via-violet-500/30 to-transparent" style={{ animationDelay: '1s' }}></div>
        {/* Stream 4 */}
        <div className="data-stream absolute right-12 top-0 h-32 w-px animate-data-stream bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent" style={{ animationDelay: '1.5s' }}></div>
      </div>

      {/* Floating data characters */}
      <div className="absolute inset-0 overflow-hidden font-mono text-xs">
        <div className="absolute left-8 top-8 animate-float text-cyan-500/20">01011001</div>
        <div className="absolute right-12 top-16 animate-float text-emerald-500/20" style={{ animationDelay: '0.3s' }}>AUDIT</div>
        <div className="absolute left-1/4 top-1/3 animate-float text-violet-500/20" style={{ animationDelay: '0.6s' }}>AI_PROCESS</div>
        <div className="absolute right-1/4 bottom-1/4 animate-float text-cyan-500/20" style={{ animationDelay: '0.9s' }}>0x7F3A</div>
        <div className="absolute left-12 bottom-20 animate-float text-emerald-500/20" style={{ animationDelay: '1.2s' }}>DATA_FLOW</div>
      </div>

      {/* Corner decorations */}
      <div className="absolute left-4 top-4 h-8 w-8 border-l-2 border-t-2 border-cyan-500/20"></div>
      <div className="absolute right-4 top-4 h-8 w-8 border-r-2 border-t-2 border-cyan-500/20"></div>
      <div className="absolute left-4 bottom-4 h-8 w-8 border-b-2 border-l-2 border-cyan-500/20"></div>
      <div className="absolute right-4 bottom-4 h-8 w-8 border-b-2 border-r-2 border-cyan-500/20"></div>

      {/* Scanning line effect */}
      <div className="absolute inset-x-0 h-px animate-scan bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent"></div>
    </div>
  );
}
