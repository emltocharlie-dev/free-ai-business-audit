'use client'

import Link from 'next/link'
import { useI18n } from '../../contexts/I18nContext'
import { LanguageToggle } from '../../components/LanguageToggle'
import { Card } from '../../components/Card'

export default function AuditForm() {
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
              返回首页
            </Link>
            <Link
              href="/audit-form"
              className="font-mono text-xs px-4 py-2 bg-cyan-500 text-white hover:bg-cyan-600 transition-colors tracking-wider"
            >
              开始审计
            </Link>
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto pt-24">
        {/* Page Title */}
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-12 bg-amber-500" />
            <span className="font-mono text-xs text-amber-600 tracking-[0.2em]">{t.auditForm.eyebrow}</span>
            <div className="h-px w-12 bg-amber-500" />
          </div>

          <h1 className="font-mono text-3xl md:text-4xl text-slate-900 mb-3">
            {t.auditForm.headline}
          </h1>
          <p className="font-mono text-sm text-slate-600 max-w-md mx-auto">
            {t.auditForm.subheadline}
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white border border-slate-200 shadow-sm overflow-hidden">
          {/* Tally Embed */}
          <iframe
            src={t.auditForm.formUrl}
            width="100%"
            height="850"
            frameBorder="0"
            title="AI Business Audit Application Form"
            className="w-full"
          />
        </div>

        {/* Info Cards */}
        <div className="mt-10 grid md:grid-cols-3 gap-4">
          <Card variant="elevated" className="p-4 text-center">
            <div className="w-8 h-8 bg-amber-500 text-white flex items-center justify-center mx-auto mb-2 rounded-sm">
              <span className="font-mono text-sm">✓</span>
            </div>
            <div className="font-mono text-xs text-slate-500">{t.auditForm.infoCards.free}</div>
          </Card>
          <Card variant="elevated" className="p-4 text-center">
            <div className="w-8 h-8 bg-cyan-500 text-white flex items-center justify-center mx-auto mb-2 rounded-sm">
              <span className="font-mono text-sm">🔒</span>
            </div>
            <div className="font-mono text-xs text-slate-500">{t.auditForm.infoCards.noDataSelling}</div>
          </Card>
          <Card variant="elevated" className="p-4 text-center">
            <div className="w-8 h-8 bg-orange-500 text-white flex items-center justify-center mx-auto mb-2 rounded-sm">
              <span className="font-mono text-sm">⚡</span>
            </div>
            <div className="font-mono text-xs text-slate-500">{t.auditForm.infoCards.delivery}</div>
          </Card>
        </div>

        {/* Back link */}
        <div className="mt-8 text-center">
          <Link
            href="/"
            className="font-mono text-xs text-slate-400 hover:text-slate-600 transition-colors"
          >
            {t.nav.backToHomeShort}
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-16 py-8 px-4 border-t border-slate-200">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
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