'use client'

import { useI18n } from '../contexts/I18nContext'

export function LanguageToggle() {
  const { language, toggleLanguage, t } = useI18n()

  return (
    <button
      onClick={toggleLanguage}
      className="font-mono text-xs px-3 py-1.5 border border-slate-200 hover:border-slate-400 hover:bg-slate-100 transition-all tracking-wider flex items-center gap-1.5"
      aria-label={`Switch to ${language === 'en' ? 'Chinese' : 'English'}`}
    >
      <svg 
        className="w-3.5 h-3.5 text-slate-500" 
        fill="none" 
        viewBox="0 0 24 24" 
        stroke="currentColor"
      >
        <path 
          strokeLinecap="round" 
          strokeLinejoin="round" 
          strokeWidth={1.5} 
          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" 
        />
      </svg>
      <span className={language === 'en' ? 'text-slate-900 font-medium' : 'text-slate-500'}>
        {t.lang.en}
      </span>
      <span className="text-slate-300">/</span>
      <span className={language === 'zh' ? 'text-slate-900 font-medium' : 'text-slate-500'}>
        {t.lang.zh}
      </span>
    </button>
  )
}