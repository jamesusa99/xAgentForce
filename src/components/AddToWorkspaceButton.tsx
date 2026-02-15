'use client'

import { Plus, Check } from 'lucide-react'
import { useWorkspace } from '@/context/WorkspaceContext'
import type { Agent } from '@/data/agents'
import Link from 'next/link'

interface AddToWorkspaceButtonProps {
  agent: Agent
  variant?: 'card' | 'profile'
}

export function AddToWorkspaceButton({ agent, variant = 'card' }: AddToWorkspaceButtonProps) {
  const { addToWorkspace, isInWorkspace } = useWorkspace()
  const inWorkspace = isInWorkspace(agent.id)

  if (variant === 'profile') {
    return (
      <div className="flex gap-3">
        <button
          onClick={() => addToWorkspace(agent)}
          disabled={inWorkspace}
          className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${
            inWorkspace
              ? 'bg-force-gold/30 text-force-gold border border-force-gold/50 cursor-default'
              : 'bg-force-gold/20 text-force-gold hover:bg-force-gold/30 border border-force-gold/40'
          }`}
        >
          {inWorkspace ? <Check className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
          {inWorkspace ? '已加入工作区' : 'Add to Workspace'}
        </button>
        <Link
          href="/workspace"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
        >
          立即聘用
        </Link>
      </div>
    )
  }

  return null
}
