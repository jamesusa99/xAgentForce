'use client'

import Link from 'next/link'
import { ArrowLeft, Star, Check } from 'lucide-react'
import type { Agent } from '@/data/agents'
import { AddToWorkspaceButton } from './AddToWorkspaceButton'
import { useLanguage } from '@/context/LanguageContext'

interface AgentProfileContentProps {
  agent: Agent
}

export function AgentProfileContent({ agent }: AgentProfileContentProps) {
  const { t, tAgentTitle, tAgentTag, tAgentSkill, locale } = useLanguage()
  const perMonth = locale === 'zh' ? '/月' : '/mo'

  return (
    <main className="pt-16 min-h-screen">
      <div className="max-w-4xl mx-auto px-4 py-16">
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-white/70 hover:text-force-gold mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          {t('profile.backToMarket')}
        </Link>

        <div className="glass rounded-3xl p-8 lg:p-12 mb-8">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-force-gold/20 to-electric-blue/20 flex items-center justify-center text-5xl">
                {agent.avatar}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-3xl mb-2">{agent.name}</h1>
              <p className="text-force-gold text-lg mb-4">{tAgentTitle(agent.title)}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full text-sm bg-force-gold/20 text-force-gold border border-force-gold/30"
                  >
                    {tAgentTag(tag)}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-force-gold text-force-gold" />
                  <span className="font-semibold">{agent.rating}</span>
                </div>
                <span className="text-white/50">
                  ({agent.reviews} {t('profile.employerReviews')})
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg mb-4">
              {t('profile.coreSkills')}
            </h2>
            <ul className="space-y-3">
              {agent.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-force-gold flex-shrink-0" />
                  {tAgentSkill(skill)}
                </li>
              ))}
            </ul>
          </div>

          <div className="glass rounded-2xl p-6">
            <h2 className="font-display font-semibold text-lg mb-4">
              {t('profile.integrations')}
            </h2>
            <ul className="space-y-3 text-white/80">
              {[0, 1, 2, 3].map((i) => (
                <li key={i}>• {t(`profile.integrationsList.${i}`)}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="glass rounded-2xl p-6 mb-8">
          <h2 className="font-display font-semibold text-lg mb-4">
            {t('profile.training')}
          </h2>
          <p className="text-white/70 leading-relaxed">{t('profile.trainingDesc')}</p>
        </div>

        <div className="glass rounded-2xl p-8 border-2 border-force-gold/30">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div>
              <div className="font-display font-bold text-3xl text-force-gold mb-1">
                ${agent.price}
                {perMonth}
              </div>
              <p className="text-white/60">{t('profile.subscribeNote')}</p>
            </div>
            <AddToWorkspaceButton agent={agent} variant="profile" />
          </div>
        </div>
      </div>
    </main>
  )
}
