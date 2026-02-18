'use client'

import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from 'react'
import type { Locale } from '@/lib/translations'
import { translations } from '@/lib/translations'

const STORAGE_KEY = 'xagentforce-locale'

interface LanguageContextType {
  locale: Locale
  setLocale: (locale: Locale) => void
  t: (path: string) => string
  tCategory: (key: string) => string
  tAgentTitle: (key: string) => string
  tAgentTag: (key: string) => string
  tAgentSkill: (key: string) => string
}

const LanguageContext = createContext<LanguageContextType | null>(null)

function getStoredLocale(): Locale {
  if (typeof window === 'undefined') return 'en'
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null
  return stored === 'zh' || stored === 'en' ? stored : 'en'
}

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>('en')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setLocaleState(getStoredLocale())
    setMounted(true)
  }, [])

  const setLocale = (newLocale: Locale) => {
    setLocaleState(newLocale)
    if (typeof window !== 'undefined') {
      localStorage.setItem(STORAGE_KEY, newLocale)
      document.documentElement.lang = newLocale === 'zh' ? 'zh-CN' : 'en'
    }
  }

  const t = (path: string): string => {
    const keys = path.split('.')
    let value: unknown = translations[locale]
    for (const key of keys) {
      value = (value as Record<string, unknown>)?.[key]
    }
    if (typeof value === 'string') return value
    if (typeof value === 'number') return String(value)
    return path
  }

  const tCategory = (key: string) => {
    return (translations[locale].categories as Record<string, string>)[key] ?? key
  }

  const tAgentTitle = (key: string) => {
    return (translations[locale].agentTitles as Record<string, string>)[key] ?? key
  }

  const tAgentTag = (key: string) => {
    return (translations[locale].agentTags as Record<string, string>)[key] ?? key
  }

  const tAgentSkill = (key: string) => {
    return (translations[locale].agentSkills as Record<string, string>)?.[key] ?? key
  }

  useEffect(() => {
    if (mounted) {
      document.documentElement.lang = locale === 'zh' ? 'zh-CN' : 'en'
    }
  }, [locale, mounted])

  return (
    <LanguageContext.Provider
      value={{
        locale,
        setLocale,
        t,
        tCategory,
        tAgentTitle,
        tAgentTag,
        tAgentSkill,
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within LanguageProvider')
  return ctx
}
