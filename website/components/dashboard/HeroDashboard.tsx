"use client";

import React from "react";
import Link from "next/link";
import { useI18n } from "../../contexts/I18nContext";
import { InputTerminal } from "./InputTerminal";
import { CoreProcessor } from "./CoreProcessor";
import { OutputAssets } from "./OutputAssets";
import { DataOverlay } from "./DataOverlay";

interface HeroDashboardProps {
  overlayVisible?: boolean;
}

export function HeroDashboard({ overlayVisible = true }: HeroDashboardProps) {
  const { t } = useI18n();
  
  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-gradient-to-b from-slate-950 via-[#0A0B0F] to-slate-950">
      {/* Data overlay layer */}
      <DataOverlay visible={overlayVisible} />

      {/* Main content */}
      {/* flex 容器 */}
      <div className="relative z-10 flex min-h-screen flex-col">
        {/* flex 容器 */}
      <div className="relative z-10 flex min-h-screen flex-col border-t border-cyan-500/30">
        {/* CTA section（标题 + 描述） + CTA 按钮 */}
        <div className="px-6 py-16 pt-28">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="bg-gradient-to-r from-cyan-400 via-emerald-400 to-cyan-400 bg-clip-text text-2xl font-bold text-transparent md:text-3xl">
              {t.dashboard.heroCta.headline}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              {t.dashboard.heroCta.description}
            </p>
            <div className="mt-8 flex justify-center">
              <Link
                href="/audit-form"
                className="rounded-xl bg-gradient-to-r from-cyan-500 to-emerald-500 px-8 py-3 font-semibold text-slate-950 transition hover:from-cyan-400 hover:to-emerald-400"
              >
                {t.dashboard.heroCta.button}
              </Link>
            </div>
          </div>
        </div>

        {/* Hero section - 三栏布局 */}
        <section className="flex flex-1 items-end px-6 pb-12">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 lg:grid-cols-3 lg:items-end">
            {/* Left panel - Input Terminal */}
            <div className="h-96 lg:h-[500px]">
              <InputTerminal />
            </div>

            {/* Center - Core Processor */}
            <div className="h-96 lg:h-[500px] flex items-end justify-center">
              <CoreProcessor />
            </div>

            {/* Right panel - Output Assets */}
            <div className="h-96 lg:h-[500px]">
              <OutputAssets />
            </div>
          </div>
        </section>
      </div>
      </div>
    </div>
  );
}