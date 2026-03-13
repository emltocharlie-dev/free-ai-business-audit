'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { LanguageToggle } from '../../components/LanguageToggle'
import { Button } from '../../components/Button'
import { Card } from '../../components/Card'
import { Icon } from '../../components/Icon'

interface ServiceItem {
  icon: string
  title: string
  description: string
  metricLabel: string
  category: 'personal' | 'enterprise'
  price: string
}

export default function ServicesPage() {
  const { t } = useI18n()

  const services: ServiceItem[] = [
    // Personal Services
    {
      icon: 'automation',
      title: t.services.items[0].title,
      description: t.services.items[0].description,
      metricLabel: t.services.items[0].metricLabel,
      category: 'personal',
      price: '¥299',
    },
    {
      icon: 'assistant',
      title: t.services.items[1].title,
      description: t.services.items[1].description,
      metricLabel: t.services.items[1].metricLabel,
      category: 'personal',
      price: '¥499',
    },
    {
      icon: 'library',
      title: t.services.items[2].title,
      description: t.services.items[2].description,
      metricLabel: t.services.items[2].metricLabel,
      category: 'personal',
      price: '¥999',
    },
    {
      icon: 'robot',
      title: t.services.items[3].title,
      description: t.services.items[3].description,
      metricLabel: t.services.items[3].metricLabel,
      category: 'personal',
      price: '¥1,999',
    },
    // Enterprise Services
    {
      icon: 'audit',
      title: t.services.items[4].title,
      description: t.services.items[4].description,
      metricLabel: t.services.items[4].metricLabel,
      category: 'enterprise',
      price: t.pricing.l0Price,
    },
    {
      icon: 'advisor',
      title: t.services.items[5].title,
      description: t.services.items[5].description,
      metricLabel: t.services.items[5].metricLabel,
      category: 'enterprise',
      price: t.pricing.l1Price,
    },
    {
      icon: 'solution',
      title: t.services.items[6].title,
      description: t.services.items[6].description,
      metricLabel: t.services.items[6].metricLabel,
      category: 'enterprise',
      price: t.pricing.l1Price,
    },
    {
      icon: 'expert',
      title: t.services.items[7].title,
      description: t.services.items[7].description,
      metricLabel: t.services.items[7].metricLabel,
      category: 'enterprise',
      price: t.pricing.l2Price,
    },
    {
      icon: 'tech',
      title: t.services.items[8].title,
      description: t.services.items[8].description,
      metricLabel: t.services.items[8].metricLabel,
      category: 'enterprise',
      price: t.pricing.l2Price,
    },
    {
      icon: 'outsource',
      title: t.services.items[9].title,
      description: t.services.items[9].description,
      metricLabel: t.services.items[9].metricLabel,
      category: 'enterprise',
      price: t.pricing.l2Price,
    },
    {
      icon: 'managed',
      title: t.services.items[10].title,
      description: t.services.items[10].description,
      metricLabel: t.services.items[10].metricLabel,
      category: 'enterprise',
      price: t.pricing.l2Price,
    },
  ]

  const personalServices = services.filter((s) => s.category === 'personal')
  const enterpriseServices = services.filter((s) => s.category === 'enterprise')

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

      {/* Page Header */}
      <div className="max-w-7xl mx-auto mb-16">
        <div className="flex items-center justify-center gap-4 mb-4">
          <div className="h-px w-12 bg-amber-500" />
          <span className="font-mono text-xs text-amber-600 tracking-[0.2em]">{t.services.sectionTitle}</span>
          <div className="h-px w-12 bg-amber-500" />
        </div>
        <h1 className="font-mono text-3xl md:text-4xl text-slate-900 text-center mb-4">
          {t.services.headline}
        </h1>
        <p className="font-mono text-sm text-slate-600 text-center max-w-xl mx-auto">
          {t.hero.subheadline}
        </p>
      </div>

      {/* Personal Services Section */}
      <div className="max-w-7xl mx-auto mb-20">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="font-mono text-sm text-slate-500 tracking-wider">{t.servicesPage.personalServices}</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {personalServices.map((service, index) => (
            <Card
              key={index}
              variant="bordered"
              accent="amber"
              interactive
              className="group transition-all duration-300 hover:border-amber-500"
            >
              <div className="p-6 md:p-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors min-h-[44px] min-w-[44px]">
                    <Icon name={service.icon} size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-mono text-lg text-slate-900 mb-1">{service.title}</h3>
                    <p className="font-mono text-xs text-slate-500 tracking-wider">{t.services.service} 0{index + 1}</p>
                  </div>
                  <div className="text-right">
                    <div className="font-mono text-sm text-amber-600 font-bold">{service.price}</div>
                  </div>
                </div>

                <p className="font-mono text-sm text-slate-600 leading-relaxed mb-6">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                  <span className="font-mono text-xs text-slate-500">{service.metricLabel}</span>
                  <Button
                    href="/audit-form"
                    variant="outline"
                    size="sm"
                    className="min-h-[44px] min-w-[44px]"
                  >
                    {t.servicesPage.learnMore}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Enterprise Services Section */}
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center gap-4 mb-8">
          <div className="h-px flex-1 bg-slate-200" />
          <span className="font-mono text-sm text-slate-500 tracking-wider">{t.servicesPage.enterpriseServices}</span>
          <div className="h-px flex-1 bg-slate-200" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {enterpriseServices.map((service, index) => (
            <Card
              key={index}
              variant="bordered"
              accent="cyan"
              interactive
              className="group transition-all duration-300 hover:border-cyan-500"
            >
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors min-h-[40px] min-w-[40px]">
                    <Icon name={service.icon} size={20} />
                  </div>
                  <h3 className="font-mono text-sm text-slate-900 font-bold">{service.title}</h3>
                </div>

                <p className="font-mono text-xs text-slate-600 leading-relaxed mb-4">
                  {service.description}
                </p>

                <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                  <span className="font-mono text-xs text-cyan-600 font-bold">{service.price}</span>
                  <Button
                    href="/audit-form"
                    variant="outline"
                    size="sm"
                    className="min-h-[36px] min-w-[44px]"
                  >
                    {t.nav.freeAudit}
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-3xl mx-auto mt-20 text-center">
        <div className="bg-slate-900 border border-slate-800 p-8 md:p-12">
          <h2 className="font-mono text-xl md:text-2xl text-white mb-4">
            {t.cta.headline}
          </h2>
          <p className="font-mono text-sm text-slate-400 mb-6">
            {t.cta.subheadline}
          </p>
          <Button
            href="/audit-form"
            variant="primary"
            className="bg-amber-500 hover:bg-amber-600 border-amber-500"
          >
            {t.cta.button}
          </Button>
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
