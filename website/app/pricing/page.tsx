'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { LanguageToggle } from '../../components/LanguageToggle'

export default function PricingPage() {
  const { t } = useI18n()

  const plans = [
    {
      name: t.pricing.l0Title,
      price: t.pricing.l0Price,
      description: t.pricing.l0Description,
      features: t.pricing.l0Features,
      cta: t.pricing.l0Cta,
      href: '/audit-form',
      popular: false,
      color: 'slate',
    },
    {
      name: t.pricing.l1Title,
      price: t.pricing.l1Price,
      description: t.pricing.l1Description,
      features: t.pricing.l1Features,
      cta: t.pricing.l1Cta,
      href: '/audit-form',
      popular: true,
      color: 'amber',
    },
    {
      name: t.pricing.l2Title,
      price: t.pricing.l2Price,
      description: t.pricing.l2Description,
      features: t.pricing.l2Features,
      cta: t.pricing.l2Cta,
      href: '/contact',
      popular: false,
      color: 'cyan',
    },
  ]

  const faqItems = t.pricing.faqItems

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

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-amber-500" />
          <span className="font-mono text-xs text-amber-600 tracking-[0.2em]">{t.pricing.eyebrow}</span>
          <div className="h-px w-12 bg-amber-500" />
        </div>
        <h1 className="font-mono text-3xl md:text-4xl text-slate-900 text-center mb-4">
          {t.pricing.headline}
        </h1>
        <p className="font-mono text-sm text-slate-600 text-center max-w-xl mx-auto">
          {t.pricing.subheadline}
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="grid md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white border-2 p-8 transition-all duration-300 ${
                plan.popular
                  ? 'border-amber-500 shadow-lg scale-105'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <span className="font-mono text-xs px-3 py-1 bg-amber-500 text-white tracking-wider">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="font-mono text-lg text-slate-900 mb-2">{plan.name}</h3>
                <div className="font-mono text-3xl text-slate-900 mb-2">{plan.price}</div>
                <p className="font-mono text-xs text-slate-500">{plan.description}</p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature: string, i: number) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="square" strokeLinejoin="miter" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="font-mono text-sm text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href={plan.href}
                className={`block w-full font-mono text-sm px-6 py-3 text-center transition-all tracking-wider ${
                  plan.popular
                    ? 'bg-amber-500 text-white hover:bg-amber-600'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                {plan.cta}
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Service Tier Explanation */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12">
          <h2 className="font-mono text-xl text-white mb-6 text-center">
            L0 / L1 / L2 Service Levels
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="font-mono text-4xl text-slate-500 mb-2">L0</div>
              <div className="font-mono text-sm text-slate-300 mb-2">Free Audit</div>
              <p className="font-mono text-xs text-slate-400">
                Entry-level AI assessment. Perfect for understanding your current state and identifying opportunities.
              </p>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl text-amber-500 mb-2">L1</div>
              <div className="font-mono text-sm text-slate-300 mb-2">Professional</div>
              <p className="font-mono text-xs text-slate-400">
                Implementation-ready plan with detailed roadmap, ROI analysis, and expert consultation.
              </p>
            </div>
            <div className="text-center">
              <div className="font-mono text-4xl text-cyan-500 mb-2">L2</div>
              <div className="font-mono text-sm text-slate-300 mb-2">Enterprise</div>
              <p className="font-mono text-xs text-slate-400">
                Full AI transformation with custom solutions, on-site support, and ongoing partnership.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto mb-20">
        <div className="text-center mb-8">
          <h2 className="font-mono text-2xl text-slate-900 mb-2">{t.pricing.faq}</h2>
        </div>
        <div className="space-y-4">
          {faqItems.map((item: { q: string; a: string }, index: number) => (
            <div key={index} className="bg-white border border-slate-200 p-6">
              <h3 className="font-mono text-sm text-slate-900 mb-3">{item.q}</h3>
              <p className="font-mono text-xs text-slate-600 leading-relaxed">{item.a}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto text-center">
        <div className="border-t border-slate-200 pt-12">
          <h2 className="font-mono text-xl text-slate-900 mb-4">
            {t.cta.headline}
          </h2>
          <p className="font-mono text-sm text-slate-600 mb-6">
            {t.cta.subheadline}
          </p>
          <Link
            href="/audit-form"
            className="inline-block font-mono text-sm px-8 py-3 bg-amber-500 text-white hover:bg-amber-600 transition-all tracking-wider"
          >
            {t.cta.button}
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-7xl mx-auto mt-20 py-8 px-4 border-t border-slate-200">
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
