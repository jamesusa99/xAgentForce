'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { AgentCard } from './AgentCard'
import { agents, categories, type AgentCategory } from '@/data/agents'
import { useLanguage } from '@/context/LanguageContext'

export function AgentMarketplace() {
  const [activeCategory, setActiveCategory] = useState<AgentCategory | 'all'>('all')
  const { t, tCategory } = useLanguage()

  const filteredAgents =
    activeCategory === 'all' ? agents : agents.filter((a) => a.category === activeCategory)

  const featuredAgents = agents.filter((a) => a.featured)
  const otherAgents = filteredAgents.filter((a) => !a.featured)

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
            {t('marketplace.title')}
          </h2>
          <p className="text-white/70 max-w-2xl mx-auto">
            {t('marketplace.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12">
          <motion.aside
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-56 flex-shrink-0"
          >
            <div className="glass rounded-2xl p-4 sticky top-24">
              <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-white/60 mb-4">
                {t('marketplace.category')}
              </h3>
              <nav className="space-y-1">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    activeCategory === 'all'
                      ? 'bg-force-gold/20 text-force-gold'
                      : 'text-white/70 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {t('marketplace.all')}
                </button>
                {categories.map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`w-full text-left px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                      activeCategory === cat
                        ? 'bg-force-gold/20 text-force-gold'
                        : 'text-white/70 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {tCategory(cat)}
                  </button>
                ))}
              </nav>
            </div>
          </motion.aside>

          <div className="flex-1 min-w-0">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6"
            >
              {activeCategory === 'all' ? (
                <>
                  {featuredAgents[0] && (
                    <AgentCard agent={featuredAgents[0]} index={0} size="large" />
                  )}
                  {featuredAgents.slice(1, 3).map((agent, i) => (
                    <AgentCard key={agent.id} agent={agent} index={i + 1} />
                  ))}
                  {otherAgents.map((agent, i) => (
                    <AgentCard key={agent.id} agent={agent} index={i + 4} />
                  ))}
                </>
              ) : (
                filteredAgents.map((agent, i) => (
                  <AgentCard key={agent.id} agent={agent} index={i} />
                ))
              )}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
