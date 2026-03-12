'use client'

import Link from 'next/link'
import { useI18n } from '../../../contexts/I18nContext'
import { LanguageToggle } from '../../../components/LanguageToggle'

export default function OpenclawServicePage() {
  const { t } = useI18n()

  const processSteps = t.openclaw.processSteps
  const features = t.openclaw.featureItems

  return (
    <main className="min-h-screen bg-slate-50 pt-24 pb-16 px-6 md:px-8">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-50/95 backdrop-blur border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-8 h-8 bg-slate-900 flex items-center justify-center">
              <span className="font-mono text-white text-sm font-bold">FA</span>
            </div>
            <span className="font-mono text-lg text-slate-900 tracking-tight group-hover:text-slate-700 transition-colors">FreeAI Audit</span>
          </Link>
          <div className="flex items-center gap-4">
            <LanguageToggle />
            <Link
              href="/audit-form"
              className="font-mono text-xs px-4 py-2 bg-slate-900 text-white hover:bg-slate-800 transition-colors tracking-wider"
            >
              {t.nav.freeAudit}
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 md:py-24 px-6 md:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="h-px w-12 bg-cyan-500" />
            <span className="font-mono text-xs text-cyan-600 tracking-[0.2em]">{t.openclaw.eyebrow}</span>
            <div className="h-px w-12 bg-cyan-500" />
          </div>

          <h1 className="font-mono text-3xl md:text-5xl text-slate-900 leading-tight mb-6">
            {t.openclaw.headline}
          </h1>

          <p className="font-mono text-sm text-slate-600 max-w-2xl mx-auto mb-10">
            {t.openclaw.subheadline}
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/audit-form"
              className="font-mono text-sm px-8 py-3 bg-cyan-500 text-white hover:bg-cyan-600 transition-all tracking-wider"
            >
              {t.openclaw.getStarted}
            </Link>
            <a
              href="#process"
              className="font-mono text-sm px-8 py-3 border border-slate-300 text-slate-700 hover:border-slate-900 transition-all tracking-wider"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-mono text-2xl text-slate-900 mb-2">{t.openclaw.features}</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature: string, index: number) => (
              <div
                key={index}
                className="bg-slate-50 border border-slate-200 p-6 text-center hover:border-cyan-500 transition-colors"
              >
                <div className="w-12 h-12 bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4">
                  {index === 0 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  )}
                  {index === 1 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                    </svg>
                  )}
                  {index === 2 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  )}
                  {index === 3 && (
                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  )}
                </div>
                <p className="font-mono text-sm text-slate-700">{feature}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-mono text-2xl text-slate-900 mb-2">{t.openclaw.process}</h2>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {processSteps.map((step: { step: string; title: string; desc: string }, index: number) => (
              <div key={index} className="relative">
                <div className="bg-white border border-slate-200 p-6 h-full">
                  <div className="font-mono text-5xl text-slate-100 absolute top-4 right-4 -z-10">
                    {step.step}
                  </div>
                  <div className="font-mono text-xs text-cyan-600 mb-3">
                    {t.process.step} {step.step}
                  </div>
                  <h3 className="font-mono text-sm text-slate-900 mb-2">{step.title}</h3>
                  <p className="font-mono text-xs text-slate-600">{step.desc}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 border-t-2 border-dashed border-slate-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-mono text-2xl text-slate-900 mb-2">{t.openclaw.pricing}</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Basic */}
            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="text-center mb-6">
                <h3 className="font-mono text-lg text-slate-900 mb-2">{t.openclaw.basic}</h3>
                <div className="font-mono text-3xl text-slate-900 mb-2">¥299</div>
                <p className="font-mono text-xs text-slate-500">{t.openclaw.basicDesc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Standard environment setup</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Remote installation</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Basic configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Email support (7 days)</span>
                </li>
              </ul>
              <Link
                href="/audit-form"
                className="block w-full font-mono text-sm px-6 py-3 bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all text-center tracking-wider"
              >
                {t.openclaw.getStarted}
              </Link>
            </div>

            {/* Professional */}
            <div className="bg-cyan-500 border-2 border-cyan-600 p-8 relative scale-105">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="font-mono text-xs px-3 py-1 bg-white text-cyan-600 tracking-wider">
                  MOST POPULAR
                </span>
              </div>
              <div className="text-center mb-6">
                <h3 className="font-mono text-lg text-white mb-2">{t.openclaw.pro}</h3>
                <div className="font-mono text-3xl text-white mb-2">¥599</div>
                <p className="font-mono text-xs text-cyan-100">{t.openclaw.proDesc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-white">Everything in Basic</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-white">Custom configuration</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-white">1-hour training session</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-white mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-white">Priority support (30 days)</span>
                </li>
              </ul>
              <Link
                href="/audit-form"
                className="block w-full font-mono text-sm px-6 py-3 bg-white text-cyan-600 hover:bg-cyan-50 transition-all text-center tracking-wider"
              >
                {t.openclaw.getStarted}
              </Link>
            </div>

            {/* Enterprise */}
            <div className="bg-slate-50 border border-slate-200 p-8">
              <div className="text-center mb-6">
                <h3 className="font-mono text-lg text-slate-900 mb-2">{t.openclaw.enterprise}</h3>
                <div className="font-mono text-3xl text-slate-900 mb-2">¥1,499</div>
                <p className="font-mono text-xs text-slate-500">{t.openclaw.enterpriseDesc}</p>
              </div>
              <ul className="space-y-3 mb-8">
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Everything in Professional</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Full deployment</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Team training (up to 5 people)</span>
                </li>
                <li className="flex items-start gap-3">
                  <svg className="w-4 h-4 text-green-500 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="font-mono text-sm text-slate-600">Ongoing support (90 days)</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="block w-full font-mono text-sm px-6 py-3 bg-slate-200 text-slate-700 hover:bg-slate-300 transition-all text-center tracking-wider"
              >
                {t.openclaw.getStarted}
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-slate-900 border border-slate-800 p-8 md:p-12">
            <h2 className="font-mono text-xl text-white mb-4">Ready to Get Started?</h2>
            <p className="font-mono text-sm text-slate-400 mb-6">
              Submit your requirements and we will set up your AI work environment within 48 hours.
            </p>
            <Link
              href="/audit-form"
              className="inline-block font-mono text-sm px-8 py-3 bg-amber-500 text-white hover:bg-amber-600 transition-all tracking-wider"
            >
              Start Free Audit
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto py-8 px-4 border-t border-slate-200">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 flex items-center justify-center">
              <span className="font-mono text-white text-xs font-bold">FA</span>
            </div>
            <span className="font-mono text-sm text-slate-600">FreeAI Audit</span>
          </div>
          <div className="font-mono text-xs text-slate-400">
            {t.footer.copyright}
          </div>
        </div>
      </footer>
    </main>
  )
}
