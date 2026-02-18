'use client'

import { motion } from 'framer-motion'
import { Search, Zap, TrendingUp } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const icons = [Search, Zap, TrendingUp]

export function HowItWorks() {
  const { t } = useLanguage()
  const steps = [
    { title: t('howItWorks.steps.0.title'), subtitle: t('howItWorks.steps.0.subtitle'), description: t('howItWorks.steps.0.description') },
    { title: t('howItWorks.steps.1.title'), subtitle: t('howItWorks.steps.1.subtitle'), description: t('howItWorks.steps.1.description') },
    { title: t('howItWorks.steps.2.title'), subtitle: t('howItWorks.steps.2.subtitle'), description: t('howItWorks.steps.2.description') },
  ]

  return (
    <section className="py-24 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl mb-4">
            {t('howItWorks.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('howItWorks.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {steps.map((step, index) => {
            const StepIcon = icons[index]
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass rounded-2xl p-8 h-full flex flex-col items-center text-center group hover:border-force-gold/30 transition-colors">
                  <div className="w-16 h-16 rounded-2xl bg-force-gold/20 flex items-center justify-center mb-6 group-hover:bg-force-gold/30 transition-colors">
                    <StepIcon className="w-8 h-8 text-force-gold" />
                  </div>
                  <span className="text-force-gold text-sm font-medium mb-2">
                    Step {index + 1}
                  </span>
                  <h3 className="font-display font-bold text-2xl mb-2">
                    {step.title}
                    <span className="text-white/60 font-normal ml-2">({step.subtitle})</span>
                  </h3>
                  <p className="text-white/70">{step.description}</p>
                </div>

                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-6 lg:-right-8 transform -translate-y-1/2">
                    <div className="w-12 h-0.5 bg-gradient-to-r from-force-gold/50 to-transparent" />
                  </div>
                )}
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
