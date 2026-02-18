'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function FeedbackSection() {
  const { t } = useLanguage()

  const testimonials = [
    {
      agent: t('feedback.testimonials.0.agent'),
      quote: t('feedback.testimonials.0.quote'),
      author: t('feedback.testimonials.0.author'),
      rating: 5,
    },
    {
      agent: t('feedback.testimonials.1.agent'),
      quote: t('feedback.testimonials.1.quote'),
      author: t('feedback.testimonials.1.author'),
      rating: 5,
    },
    {
      agent: t('feedback.testimonials.2.agent'),
      quote: t('feedback.testimonials.2.quote'),
      author: t('feedback.testimonials.2.author'),
      rating: 5,
    },
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
            {t('feedback.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('feedback.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <motion.article
              key={item.agent}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-2xl p-6 lg:p-8 flex flex-col"
            >
              <Quote className="w-10 h-10 text-force-gold/50 mb-4" />
              <p className="text-white/90 mb-4 flex-1 leading-relaxed">
                「{item.quote}」
              </p>
              <div className="flex items-center gap-1 mb-3">
                {Array.from({ length: item.rating }).map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 fill-force-gold text-force-gold"
                  />
                ))}
              </div>
              <div>
                <span className="text-force-gold text-sm font-medium">
                  {item.agent}
                </span>
                <p className="text-sm text-white/50">{item.author}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
