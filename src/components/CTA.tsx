'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function CTA() {
  const { t } = useLanguage()

  return (
    <section className="py-24 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-4xl mx-auto text-center"
      >
        <div className="glass-strong rounded-3xl p-12 lg:p-16 border border-force-gold/20">
          <h2 className="font-display font-bold text-3xl sm:text-4xl mb-4">
            {t('cta.title')}
          </h2>
          <p className="text-white/70 mb-8 max-w-xl mx-auto">
            {t('cta.subtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/agents"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
            >
              {t('cta.browseAgents')}
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl glass hover:border-force-gold/30 transition-colors"
            >
              {t('cta.viewPricing')}
            </Link>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
