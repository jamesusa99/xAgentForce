'use client'

import Link from 'next/link'
import { Check, Zap } from 'lucide-react'
import { Footer } from '@/components/Footer'
import { useLanguage } from '@/context/LanguageContext'

export function PricingContent() {
  const { t } = useLanguage()

  const plans = [
    {
      key: '0',
      price: 99,
      popular: false,
    },
    {
      key: '1',
      price: 499,
      popular: true,
    },
    {
      key: '2',
      price: null,
      popular: false,
    },
  ]

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-16">
          <h1 className="font-display font-bold text-4xl lg:text-5xl mb-4">
            {t('pricing.title')}
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('pricing.subtitle')}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.key}
              className={`glass rounded-2xl p-8 flex flex-col ${
                plan.popular ? 'border-2 border-force-gold/50' : ''
              }`}
            >
              {plan.popular && (
                <span className="self-start px-3 py-1 rounded-full text-xs font-medium bg-force-gold/20 text-force-gold mb-4">
                  {t('pricing.recommended')}
                </span>
              )}
              <h2 className="font-display font-bold text-xl mb-2">
                {t(`pricing.plans.${plan.key}.name`)}
              </h2>
              <p className="text-white/60 text-sm mb-6">
                {t(`pricing.plans.${plan.key}.desc`)}
              </p>
              <div className="mb-6">
                {plan.price ? (
                  <>
                    <span className="font-display font-bold text-4xl text-force-gold">
                      ${plan.price}
                    </span>
                    <span className="text-white/60">{t('pricing.perMonth')}</span>
                  </>
                ) : (
                  <span className="font-display font-bold text-2xl text-force-gold">
                    {t('pricing.contactForQuote')}
                  </span>
                )}
              </div>
              <ul className="space-y-3 mb-8 flex-1">
                {[0, 1, 2, 3].map((i) => (
                  <li key={i} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-force-gold flex-shrink-0" />
                    <span className="text-white/80">
                      {t(`pricing.plans.${plan.key}.features.${i}`)}
                    </span>
                  </li>
                ))}
              </ul>
              <Link
                href={plan.price ? '/agents' : '#'}
                className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl font-semibold transition-colors ${
                  plan.popular
                    ? 'bg-force-gold text-deep-space hover:bg-force-gold/90'
                    : 'glass hover:border-force-gold/30'
                }`}
              >
                <Zap className="w-4 h-4" />
                {t(`pricing.plans.${plan.key}.cta`)}
              </Link>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </main>
  )
}
