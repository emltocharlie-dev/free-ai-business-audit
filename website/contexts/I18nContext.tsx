'use client'

import React, { createContext, useContext, useState, useEffect, useCallback, ReactNode } from 'react'
import { en, zh, Translations } from '../translations'

type Language = 'en' | 'zh'
type TranslationSet = { en: Translations; zh: Translations }

const translations: TranslationSet = { en, zh }

interface I18nContextType {
  language: Language
  t: Translations
  setLanguage: (lang: Language) => void
  toggleLanguage: () => void
}

const I18nContext = createContext<I18nContextType | undefined>(undefined)

const STORAGE_KEY = 'freeai-language'

export function I18nProvider({ children }: { children: ReactNode }) {
  const [language, setLanguageState] = useState<Language>('en')
  const [mounted, setMounted] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    const savedLang = localStorage.getItem(STORAGE_KEY) as Language | null
    if (savedLang && (savedLang === 'en' || savedLang === 'zh')) {
      setLanguageState(savedLang)
    }
    setMounted(true)
  }, [])

  const setLanguage = useCallback((lang: Language) => {
    setLanguageState(lang)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, lang)
      // Update html lang attribute
      document.documentElement.lang = lang === 'zh' ? 'zh-CN' : 'en'
    }
  }, [])

  const toggleLanguage = useCallback(() => {
    setLanguage(language === 'en' ? 'zh' : 'en')
  }, [language, setLanguage])

  const value: I18nContextType = {
    language,
    t: translations[language],
    setLanguage,
    toggleLanguage,
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <I18nContext.Provider value={value}>
        {children}
      </I18nContext.Provider>
    )
  }

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  )
}

export function useI18n() {
  const context = useContext(I18nContext)
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider')
  }
  return context
}

export type { Language, Translations }