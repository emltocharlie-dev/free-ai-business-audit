'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { LanguageToggle } from '../../components/LanguageToggle'

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
            <div
              key={index}
              className="group bg-white border border-slate-200 p-6 md:p-8 hover:border-amber-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-slate-50 border border-slate-200 flex items-center justify-center text-amber-500 group-hover:bg-amber-500 group-hover:text-white transition-colors">
                  {service.icon === 'automation' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                      <path d="M12 2L2 7l10 5 10-5-10-5z" />
                      <path d="M2 17l10 5 10-5" />
                      <path d="M2 12l10 5 10-5" />
                    </svg>
                  )}
                  {service.icon === 'assistant' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 16v-4" />
                      <path d="M12 8h.01" />
                    </svg>
                  )}
                  {service.icon === 'library' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                      <path d="M8 7h8" />
                      <path d="M8 11h6" />
                    </svg>
                  )}
                  {service.icon === 'robot' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                      <rect x="3" y="11" width="18" height="10" rx="2" />
                      <circle cx="12" cy="5" r="2" />
                      <path d="M12 7v4" />
                      <line x1="8" y1="16" x2="8" y2="16" />
                      <line x1="16" y1="16" x2="16" y2="16" />
                    </svg>
                  )}
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
                <Link
                  href="/audit-form"
                  className="font-mono text-xs px-4 py-2 border border-slate-200 hover:border-amber-500 hover:text-amber-600 transition-colors"
                >
                  {t.servicesPage.learnMore}
                </Link>
              </div>
            </div>
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
            <div
              key={index}
              className="group bg-white border border-slate-200 p-6 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-slate-50 border border-slate-200 flex items-center justify-center text-cyan-500 group-hover:bg-cyan-500 group-hover:text-white transition-colors">
                  {service.icon === 'audit' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M9 11l3 3L22 4" />
                      <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                    </svg>
                  )}
                  {service.icon === 'advisor' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
                      <path d="M12 17h.01" />
                    </svg>
                  )}
                  {service.icon === 'solution' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                      <line x1="9" y1="9" x2="15" y2="15" />
                      <line x1="15" y1="9" x2="9" y2="15" />
                    </svg>
                  )}
                  {service.icon === 'expert' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  )}
                  {service.icon === 'tech' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <polyline points="16 18 22 12 16 6" />
                      <polyline points="8 6 2 12 8 18" />
                    </svg>
                  )}
                  {service.icon === 'outsource' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                    </svg>
                  )}
                  {service.icon === 'managed' && (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-mono text-sm text-slate-900 font-bold">{service.title}</h3>
              </div>

              <p className="font-mono text-xs text-slate-600 leading-relaxed mb-4 line-clamp-2">
                {service.description}
              </p>

              <div className="flex items-center justify-between pt-3 border-t border-slate-100">
                <span className="font-mono text-xs text-cyan-600 font-bold">{service.price}</span>
                <Link
                  href="/pricing"
                  className="font-mono text-xs px-3 py-1.5 border border-slate-200 hover:border-cyan-500 hover:text-cyan-600 transition-colors"
                >
                  {t.servicesPage.learnMore}
                </Link>
              </div>
            </div>
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
