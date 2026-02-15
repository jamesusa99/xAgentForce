'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { ArrowRight, Star, Plus, Check } from 'lucide-react'
import type { Agent } from '@/data/agents'
import { useWorkspace } from '@/context/WorkspaceContext'

interface AgentCardProps {
  agent: Agent
  index?: number
  size?: 'default' | 'large'
}

export function AgentCard({ agent, index = 0, size = 'default' }: AgentCardProps) {
  const isLarge = size === 'large'
  const { addToWorkspace, isInWorkspace } = useWorkspace()
  const inWorkspace = isInWorkspace(agent.id)

  const handleAddToWorkspace = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    addToWorkspace(agent)
  }

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className={`group ${isLarge ? 'md:col-span-2 md:row-span-2' : ''}`}
    >
      <Link href={`/agents/${agent.id}`} className="block h-full relative">
        <div className="glass rounded-2xl p-6 border border-white/10 hover:border-force-gold/30 transition-all duration-300 h-full flex flex-col">
          <div className="flex items-start gap-4 mb-4">
            <div
              className={`flex-shrink-0 rounded-xl bg-gradient-to-br from-force-gold/20 to-electric-blue/20 flex items-center justify-center ${
                isLarge ? 'w-16 h-16 text-3xl' : 'w-12 h-12 text-2xl'
              }`}
            >
              {agent.avatar}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-display font-semibold text-lg truncate">{agent.name}</h3>
              <p className="text-sm text-force-gold">{agent.title}</p>
            </div>
          </div>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {agent.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-xs bg-force-gold/20 text-force-gold border border-force-gold/30"
              >
                {tag}
              </span>
            ))}
          </div>

          <ul className="space-y-1.5 mb-6 flex-1">
            {agent.skills.slice(0, 3).map((skill) => (
              <li key={skill} className="text-sm text-white/70 flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-force-gold" />
                {skill}
              </li>
            ))}
          </ul>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 pt-4 border-t border-white/10">
            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <Star className="w-4 h-4 fill-force-gold text-force-gold" />
                <span className="text-sm font-medium">{agent.rating}</span>
              </div>
              <span className="text-xs text-white/50">({agent.reviews} 评价)</span>
            </div>
            <div className="flex items-center justify-between sm:justify-end gap-2">
              <button
                onClick={handleAddToWorkspace}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors shrink-0 ${
                  inWorkspace
                    ? 'bg-force-gold/30 text-force-gold border border-force-gold/50'
                    : 'bg-force-gold/20 text-force-gold hover:bg-force-gold/30 border border-force-gold/30'
                }`}
                title={inWorkspace ? '已在工作区' : '加入工作区'}
              >
                {inWorkspace ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                {inWorkspace ? '已加入' : 'Add to Workspace'}
              </button>
              <span className="flex items-center gap-1 text-force-gold font-semibold">
                ${agent.price}/月
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  )
}
