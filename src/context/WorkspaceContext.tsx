'use client'

import {
  createContext,
  useContext,
  useState,
  useCallback,
  ReactNode,
} from 'react'
import type { Agent } from '@/data/agents'

export type AgentStatus = 'idle' | 'processing' | 'completed'

export interface WorkspaceAgent extends Agent {
  status: AgentStatus
}

export type TaskOutputStatus = 'pending' | 'accepted' | 'revised'

export interface TaskOutput {
  id: string
  agentId: string
  agentName: string
  taskContent: string
  output: string
  status: TaskOutputStatus
  createdAt: Date
}

interface WorkspaceContextType {
  workspaceAgents: WorkspaceAgent[]
  addToWorkspace: (agent: Agent) => void
  removeFromWorkspace: (agentId: string) => void
  isInWorkspace: (agentId: string) => boolean
  setAgentStatus: (agentId: string, status: AgentStatus) => void
  taskOutputs: TaskOutput[]
  addTaskOutput: (output: Omit<TaskOutput, 'id' | 'createdAt'>) => void
  acceptOutput: (outputId: string) => void
  reviseOutput: (outputId: string) => void
  clearWorkspace: () => void
}

const WorkspaceContext = createContext<WorkspaceContextType | null>(null)

export function WorkspaceProvider({ children }: { children: ReactNode }) {
  const [workspaceAgents, setWorkspaceAgents] = useState<WorkspaceAgent[]>([])
  const [taskOutputs, setTaskOutputs] = useState<TaskOutput[]>([])

  const addToWorkspace = useCallback((agent: Agent) => {
    setWorkspaceAgents((prev) => {
      if (prev.some((a) => a.id === agent.id)) return prev
      return [...prev, { ...agent, status: 'idle' as AgentStatus }]
    })
  }, [])

  const removeFromWorkspace = useCallback((agentId: string) => {
    setWorkspaceAgents((prev) => prev.filter((a) => a.id !== agentId))
    setTaskOutputs((prev) => prev.filter((o) => o.agentId !== agentId))
  }, [])

  const isInWorkspace = useCallback(
    (agentId: string) => workspaceAgents.some((a) => a.id === agentId),
    [workspaceAgents]
  )

  const setAgentStatus = useCallback((agentId: string, status: AgentStatus) => {
    setWorkspaceAgents((prev) =>
      prev.map((a) => (a.id === agentId ? { ...a, status } : a))
    )
  }, [])

  const addTaskOutput = useCallback(
    (output: Omit<TaskOutput, 'id' | 'createdAt'>) => {
      const newOutput: TaskOutput = {
        ...output,
        id: `out-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
        createdAt: new Date(),
      }
      setTaskOutputs((prev) => [...prev, newOutput])
      setAgentStatus(output.agentId, 'completed')
    },
    [setAgentStatus]
  )

  const acceptOutput = useCallback((outputId: string) => {
    setTaskOutputs((prev) =>
      prev.map((o) => (o.id === outputId ? { ...o, status: 'accepted' as TaskOutputStatus } : o))
    )
  }, [])

  const reviseOutput = useCallback((outputId: string) => {
    setTaskOutputs((prev) =>
      prev.map((o) => (o.id === outputId ? { ...o, status: 'revised' as TaskOutputStatus } : o))
    )
  }, [])

  const clearWorkspace = useCallback(() => {
    setWorkspaceAgents([])
    setTaskOutputs([])
  }, [])

  return (
    <WorkspaceContext.Provider
      value={{
        workspaceAgents,
        addToWorkspace,
        removeFromWorkspace,
        isInWorkspace,
        setAgentStatus,
        taskOutputs,
        addTaskOutput,
        acceptOutput,
        reviseOutput,
        clearWorkspace,
      }}
    >
      {children}
    </WorkspaceContext.Provider>
  )
}

export function useWorkspace() {
  const ctx = useContext(WorkspaceContext)
  if (!ctx) throw new Error('useWorkspace must be used within WorkspaceProvider')
  return ctx
}
