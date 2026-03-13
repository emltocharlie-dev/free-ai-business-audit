'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { LanguageToggle } from '../../components/LanguageToggle'
import { Card } from '../../components/Card'
import { Button } from '../../components/Button'

export default function ContactPage() {
  const { t } = useI18n()

  return (
    <main className="min-h-screen bg-slate-50 py-12 px-4">
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
              href="/"
              className="font-mono text-xs px-4 py-2 border border-slate-300 text-slate-600 hover:text-slate-900 hover:border-slate-400 transition-colors tracking-wider"
            >
              {t.nav.backToHome}
            </Link>
            <Button href="/audit-form" variant="primary" size="sm">
              {t.nav.freeAudit}
            </Button>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto pt-24">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="font-mono text-xs text-amber-600 tracking-[0.2em]">{t.contact.eyebrow}</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>

          <h1 className="font-mono text-3xl md:text-4xl text-slate-900 mb-3">{t.contact.headline}</h1>
          <p className="font-mono text-sm text-slate-600 max-w-md mx-auto">{t.contact.subheadline}</p>
        </div>

        <div className="grid gap-4">
          <Card variant="elevated" className="p-6">
            <div className="font-mono text-sm text-slate-900 font-bold mb-3">{t.contact.contactInfo}</div>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <div className="font-mono text-xs text-slate-500">{t.contact.responseTime}</div>
                <div className="font-mono text-sm text-slate-900">{t.contact.responseTimeValue}</div>
              </div>
              <div className="space-y-1">
                <div className="font-mono text-xs text-slate-500">{t.contact.businessHours}</div>
                <div className="font-mono text-sm text-slate-900">{t.contact.businessHoursValue}</div>
              </div>
            </div>
          </Card>

          <Card variant="bordered" accent="cyan" className="p-6">
            <div className="font-mono text-sm text-slate-900 font-bold mb-2">{t.contact.send}</div>
            <p className="font-mono text-xs text-slate-600 leading-relaxed mb-4">
              为了确保我们能快速理解你的业务与现状，请优先提交审计表单（3 分钟）。我们会在 24 小时内回复。
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button href="/audit-form" variant="primary" size="md" className="justify-center">
                {t.nav.freeAudit}
              </Button>
              <Button href="/services" variant="outline" size="md" className="justify-center">
                {t.nav.services}
              </Button>
            </div>
          </Card>
        </div>

        <div className="mt-8 text-center">
          <Link href="/" className="font-mono text-xs text-slate-400 hover:text-slate-600 transition-colors">
            {t.nav.backToHomeShort}
          </Link>
        </div>
      </div>

      <footer className="mt-16 py-8 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-6 h-6 bg-slate-900 flex items-center justify-center">
              <span className="font-mono text-white text-xs font-bold">FA</span>
            </div>
            <span className="font-mono text-sm text-slate-600">FreeAI Audit</span>
          </div>
          <div className="font-mono text-xs text-slate-400">{t.footer.copyright}</div>
        </div>
      </footer>
    </main>
  )
}
