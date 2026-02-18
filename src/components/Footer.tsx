'use client'

import Link from 'next/link'
import { Zap } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

export function Footer() {
  const { t } = useLanguage()

  const footerLinks = [
    {
      category: t('footer.product'),
      links: [
        { href: '/agents', label: t('footer.agentMarketplace') },
        { href: '/pricing', label: t('footer.pricing') },
        { href: '/hub', label: t('footer.agentHub') },
      ],
    },
    {
      category: t('footer.resources'),
      links: [
        { href: '/dashboard', label: t('footer.dashboard') },
        { href: '/agents', label: t('footer.agentProfiles') },
        { href: '#', label: t('footer.helpCenter') },
      ],
    },
    {
      category: t('footer.company'),
      links: [
        { href: '#', label: t('footer.about') },
        { href: '#', label: t('footer.contact') },
        { href: '#', label: t('footer.privacy') },
      ],
    },
  ]

  return (
    <footer className="border-t border-white/10 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2">
              <Zap className="w-6 h-6 text-force-gold" />
              <span className="font-display font-bold text-xl">
                xAgent<span className="text-force-gold">Force</span>
              </span>
            </Link>
            <p className="mt-4 text-sm text-white/60">{t('footer.tagline')}</p>
          </div>
          {footerLinks.map(({ category, links }) => (
            <div key={category}>
              <h4 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
                {category}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/70 hover:text-force-gold transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} xAgentForce. {t('footer.copyright')}
          </p>
          <p className="text-xs text-white/40">{t('footer.partners')}</p>
        </div>
      </div>
    </footer>
  )
}
