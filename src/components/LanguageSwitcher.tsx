'use client'

import { useLanguage } from '@/context/LanguageContext'
import { Globe } from 'lucide-react'

export function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage()

  return (
    <div className="flex items-center gap-1 p-1 rounded-lg bg-white/5 border border-white/10">
      <button
        onClick={() => setLocale('en')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          locale === 'en'
            ? 'bg-force-gold/30 text-force-gold'
            : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        EN
      </button>
      <button
        onClick={() => setLocale('zh')}
        className={`px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
          locale === 'zh'
            ? 'bg-force-gold/30 text-force-gold'
            : 'text-white/70 hover:text-white hover:bg-white/5'
        }`}
      >
        中文
      </button>
    </div>
  )
}
