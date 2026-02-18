'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Zap, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { useWorkspace } from '@/context/WorkspaceContext'
import { useLanguage } from '@/context/LanguageContext'
import { LanguageSwitcher } from './LanguageSwitcher'

export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const { workspaceAgents } = useWorkspace()
  const { t } = useLanguage()

  const navLinks = [
    { href: '/agents', label: t('nav.agents') },
    { href: '/workspace', label: t('nav.workspace') },
    { href: '/pricing', label: t('nav.pricing') },
    { href: '/hub', label: t('nav.hub') },
    { href: '/dashboard', label: t('nav.dashboard') },
  ]

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 glass border-b border-white/10"
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link href="/" className="flex items-center gap-2 group">
            <div className="p-1.5 rounded-lg bg-force-gold/20 group-hover:bg-force-gold/30 transition-colors">
              <Zap className="w-6 h-6 text-force-gold" strokeWidth={2.5} />
            </div>
            <span className="font-display font-bold text-xl tracking-tight">
              xAgent<span className="text-force-gold">Force</span>
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-sm font-medium text-white/80 hover:text-force-gold transition-colors ${
                  link.href === '/workspace' ? 'flex items-center gap-1.5' : ''
                }`}
              >
                {link.label}
                {link.href === '/workspace' && workspaceAgents.length > 0 && (
                  <span className="flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full bg-force-gold text-deep-space text-xs font-bold">
                    {workspaceAgents.length}
                  </span>
                )}
              </Link>
            ))}
            <LanguageSwitcher />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/dashboard"
              className="text-sm font-medium text-white/80 hover:text-force-gold transition-colors"
            >
              {t('nav.login')}
            </Link>
            <Link
              href="/agents"
              className="px-4 py-2 rounded-lg bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
            >
              {t('nav.hireNow')}
            </Link>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <LanguageSwitcher />
            <button
              className="p-2 text-white/80"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden py-4 border-t border-white/10"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="flex items-center gap-2 text-white/80 hover:text-force-gold transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                  {link.href === '/workspace' && workspaceAgents.length > 0 && (
                    <span className="px-2 py-0.5 rounded-full bg-force-gold text-deep-space text-xs font-bold">
                      {workspaceAgents.length}
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/agents"
                className="px-4 py-2 rounded-lg bg-force-gold text-deep-space font-semibold text-center"
                onClick={() => setMobileOpen(false)}
              >
                {t('nav.hireNow')}
              </Link>
            </div>
          </motion.div>
        )}
      </nav>
    </motion.header>
  )
}
