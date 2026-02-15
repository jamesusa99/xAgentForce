'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'
import { X, LayoutGrid, ChevronUp } from 'lucide-react'
import { useWorkspace } from '@/context/WorkspaceContext'

export function WorkspaceTray() {
  const { workspaceAgents, removeFromWorkspace } = useWorkspace()
  const [expanded, setExpanded] = useState(true)
  const pathname = usePathname()

  if (workspaceAgents.length === 0 || pathname === '/workspace') return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 100, opacity: 0 }}
        className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-sm z-40"
      >
        <div className="glass-strong rounded-2xl shadow-2xl overflow-hidden">
          <button
            onClick={() => setExpanded(!expanded)}
            className="w-full flex items-center justify-between p-4 hover:bg-white/5 transition-colors"
          >
            <div className="flex items-center gap-2">
              <LayoutGrid className="w-5 h-5 text-force-gold" />
              <span className="font-display font-semibold">工作区托盘</span>
              <span className="px-2 py-0.5 rounded-full text-xs bg-force-gold/30 text-force-gold">
                {workspaceAgents.length} 名 Agent
              </span>
            </div>
            <ChevronUp
              className={`w-5 h-5 text-white/60 transition-transform ${expanded ? '' : 'rotate-180'}`}
            />
          </button>

          <AnimatePresence>
            {expanded && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                className="border-t border-white/10"
              >
                <div className="p-4 flex flex-wrap gap-3">
                  {workspaceAgents.map((agent) => (
                    <div
                      key={agent.id}
                      className="relative group flex items-center gap-2 px-3 py-2 rounded-xl bg-white/5 border border-white/10"
                    >
                      <span className="text-2xl">{agent.avatar}</span>
                      <div>
                        <p className="text-sm font-medium">{agent.name}</p>
                        <p className="text-xs text-white/50">{agent.title}</p>
                      </div>
                      <button
                        onClick={() => removeFromWorkspace(agent.id)}
                        className="absolute -top-1 -right-1 p-1 rounded-full bg-red-500/80 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        aria-label="移出工作区"
                      >
                        <X className="w-3 h-3" />
                      </button>
                    </div>
                  ))}
                </div>
                <div className="p-4 pt-0">
                  <Link
                    href="/workspace"
                    className="block w-full py-3 rounded-xl bg-force-gold text-deep-space font-semibold text-center hover:bg-force-gold/90 transition-colors"
                  >
                    进入 xWorkSpace
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </AnimatePresence>
  )
}
