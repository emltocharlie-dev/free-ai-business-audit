'use client'

import Link from 'next/link'
import { useI18n } from '../../../contexts/I18nContext'
import { LanguageToggle } from '../../../components/LanguageToggle'
import { Button } from '../../../components/Button'
import { Card } from '../../../components/Card'
import { Icon } from '../../../components/Icon'

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
            <Button
              href="/audit-form"
              variant="dark"
              size="sm"
            >
              {t.nav.freeAudit}
            </Button>
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
            <Button
              href="/audit-form"
              variant="primary"
              className="bg-cyan-500 hover:bg-cyan-600 border-cyan-500"
            >
              {t.openclaw.getStarted}
            </Button>
            <Button
              href="#process"
              variant="outline"
            >
              Learn More
            </Button>
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
              <Card key={index} variant="bordered" accent="cyan" interactive>
                <div className="text-center p-4">
                  <div className="w-12 h-12 bg-cyan-100 text-cyan-600 flex items-center justify-center mx-auto mb-4 min-h-[48px] min-w-[48px]">
                    {index === 0 && <Icon name="rocket" size={24} />}
                    {index === 1 && <Icon name="globe" size={24} />}
                    {index === 2 && <Icon name="zap" size={24} />}
                    {index === 3 && <Icon name="shield" size={24} />}
                  </div>
                  <p className="font-mono text-sm text-slate-700">{feature}</p>
                </div>
              </Card>
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
              <Card key={index} variant="default" interactive className="relative h-full">
                <div className="p-6">
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
              </Card>
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
            <Card variant="default" interactive>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-mono text-lg text-slate-900 mb-2">{t.openclaw.basic}</h3>
                  <div className="font-mono text-3xl text-slate-900 mb-2">¥299</div>
                  <p className="font-mono text-xs text-slate-500">{t.openclaw.basicDesc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Standard environment setup</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Remote installation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Basic configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Email support (7 days)</span>
                  </li>
                </ul>
                <Button
                  href="/audit-form"
                  variant="secondary"
                  fullWidth
                >
                  {t.openclaw.getStarted}
                </Button>
              </div>
            </Card>

            {/* Professional */}
            <Card variant="bordered" accent="cyan" interactive className="relative scale-105 border-2 border-cyan-600 bg-cyan-500">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="font-mono text-xs px-3 py-1 bg-white text-cyan-600 tracking-wider">
                  MOST POPULAR
                </span>
              </div>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-mono text-lg text-white mb-2">{t.openclaw.pro}</h3>
                  <div className="font-mono text-3xl text-white mb-2">¥599</div>
                  <p className="font-mono text-xs text-cyan-100">{t.openclaw.proDesc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-white mt-0.5" size={16} />
                    <span className="font-mono text-sm text-white">Everything in Basic</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-white mt-0.5" size={16} />
                    <span className="font-mono text-sm text-white">Custom configuration</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-white mt-0.5" size={16} />
                    <span className="font-mono text-sm text-white">1-hour training session</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-white mt-0.5" size={16} />
                    <span className="font-mono text-sm text-white">Priority support (30 days)</span>
                  </li>
                </ul>
                <Button
                  href="/audit-form"
                  variant="primary"
                  fullWidth
                  className="bg-white text-cyan-600 hover:bg-cyan-50 border-white"
                >
                  {t.openclaw.getStarted}
                </Button>
              </div>
            </Card>

            {/* Enterprise */}
            <Card variant="default" interactive>
              <div className="p-8">
                <div className="text-center mb-6">
                  <h3 className="font-mono text-lg text-slate-900 mb-2">{t.openclaw.enterprise}</h3>
                  <div className="font-mono text-3xl text-slate-900 mb-2">¥1,499</div>
                  <p className="font-mono text-xs text-slate-500">{t.openclaw.enterpriseDesc}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Everything in Professional</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Full deployment</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Team training (up to 5 people)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Icon name="check" className="w-4 h-4 text-green-500 mt-0.5" size={16} />
                    <span className="font-mono text-sm text-slate-600">Ongoing support (90 days)</span>
                  </li>
                </ul>
                <Button
                  href="/contact"
                  variant="secondary"
                  fullWidth
                >
                  {t.openclaw.getStarted}
                </Button>
              </div>
            </Card>
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
            <Button
              href="/audit-form"
              variant="primary"
              className="bg-amber-500 hover:bg-amber-600 border-amber-500"
            >
              Start Free Audit
            </Button>
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
