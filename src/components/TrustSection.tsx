'use client'

import { motion } from 'framer-motion'
import { Users, Clock, TrendingDown, Shield } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const icons = [Users, Clock, TrendingDown]
const values = ['12,000+', '2.4M', '68%']

export function TrustSection() {
  const { t } = useLanguage()

  const stats = [
    { icon: icons[0], value: values[0], labelKey: 'trust.stats.0.label' },
    { icon: icons[1], value: values[1], labelKey: 'trust.stats.1.label' },
    { icon: icons[2], value: values[2], labelKey: 'trust.stats.2.label' },
  ]

  const partners = [
    { name: 'UESTC', descKey: 'trust.partnerDesc.UESTC' },
    { name: 'IEEE', descKey: 'trust.partnerDesc.IEEE' },
    { name: 'BingoAI', descKey: 'trust.partnerDesc.BingoAI' },
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
            {t('trust.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('trust.subtitle')}
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 + index * 0.1 }}
              className="glass rounded-2xl p-8 text-center hover:border-force-gold/20 transition-colors"
            >
              <stat.icon className="w-10 h-10 text-force-gold mx-auto mb-4" />
              <div className="font-display font-bold text-4xl lg:text-5xl text-force-gold mb-2">
                {stat.value}
              </div>
              <p className="text-white/70">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass rounded-2xl p-8 lg:p-12"
        >
          <div className="flex items-center gap-2 mb-8">
            <Shield className="w-5 h-5 text-force-gold" />
            <h3 className="font-display font-semibold text-lg">{t('trust.partners')}</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {partners.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="font-display font-bold text-xl text-white mb-1">
                  {partner.name}
                </div>
                <p className="text-sm text-white/60">{t(partner.descKey)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
