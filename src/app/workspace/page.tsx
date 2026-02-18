'use client'

import { useState, useMemo } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import {
  Plus,
  X,
  Send,
  Check,
  RotateCcw,
  ShoppingCart,
  Circle,
  Loader2,
  CheckCircle2,
} from 'lucide-react'
import { useWorkspace } from '@/context/WorkspaceContext'
import { useLanguage } from '@/context/LanguageContext'
import { agents } from '@/data/agents'
import { Footer } from '@/components/Footer'

// Mock output for demo - in real app this would come from API
const MOCK_OUTPUTS: Record<string, string> = {
  '分析': '📊 **数据分析报告**\n\n根据您提供的数据，关键发现如下：\n- 转化率提升空间：约 23%\n- 主要流失节点：购物车环节\n- 建议：优化结账流程，增加信任标识',
  '电商': '🛒 **电商运营建议**\n\n- TikTok 算法近期偏好：短视频 + 真人出镜\n- 建议发布频率：每日 2-3 条\n- 黄金时段：18:00-22:00',
  '文案': '✨ **小红书文案草稿**\n\n标题：这款产品让我省下了 3 小时...\n\n正文：姐妹们！最近发现的宝藏...（完整文案已生成）',
  'default': '✅ **任务已完成**\n\n我已根据您的需求完成分析/创作。请查阅上方内容，如需修改请点击 [Revise]。',
}

function getMockOutput(task: string, agentTitle: string): string {
  if (task.includes('分析') || task.includes('数据')) return MOCK_OUTPUTS['分析']
  if (task.includes('电商') || task.includes('TikTok')) return MOCK_OUTPUTS['电商']
  if (task.includes('文案') || task.includes('小红书')) return MOCK_OUTPUTS['文案']
  return MOCK_OUTPUTS['default']
}

export default function WorkspacePage() {
  const { t, tAgentTitle } = useLanguage()
  const {
    workspaceAgents,
    removeFromWorkspace,
    setAgentStatus,
    taskOutputs,
    addTaskOutput,
    acceptOutput,
    reviseOutput,
  } = useWorkspace()

  const statusLabels = {
    idle: { label: t('statusLabels.idle'), color: 'text-white/60', dot: 'bg-white/40' },
    processing: { label: t('statusLabels.processing'), color: 'text-force-gold', dot: 'bg-force-gold animate-pulse' },
    completed: { label: t('statusLabels.completed'), color: 'text-green-400', dot: 'bg-green-400' },
  }

  const [taskInput, setTaskInput] = useState('')
  const [selectedAgentId, setSelectedAgentId] = useState<string | null>(null)
  const [showCheckout, setShowCheckout] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const mentionNames = useMemo(() => {
    return agents
      .filter((a) => a.mentionName && workspaceAgents.some((w) => w.id === a.id))
      .map((a) => ({ name: a.mentionName!, agentId: a.id, agentName: a.name }))
  }, [workspaceAgents])

  const acceptedOutputs = taskOutputs.filter((o) => o.status === 'accepted')
  const progressPercent =
    taskOutputs.length > 0
      ? Math.round((acceptedOutputs.length / taskOutputs.length) * 100)
      : 0

  const handleSubmitTask = async () => {
    if (!taskInput.trim() || !selectedAgentId) return
    const agent = workspaceAgents.find((a) => a.id === selectedAgentId)
    if (!agent) return

    setIsSubmitting(true)
    setAgentStatus(selectedAgentId, 'processing')

    // Simulate processing delay
    await new Promise((r) => setTimeout(r, 1500))

    const output = getMockOutput(taskInput, agent.title)
    addTaskOutput({
      agentId: selectedAgentId,
      agentName: agent.name,
      taskContent: taskInput,
      output,
      status: 'pending',
    })

    setTaskInput('')
    setSelectedAgentId(null)
    setIsSubmitting(false)
  }

  const handleRevise = (outputId: string) => {
    reviseOutput(outputId)
    // Could open edit modal - for now just mark as revised
  }

  if (workspaceAgents.length === 0) {
    return (
      <main className="pt-16 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 py-24 text-center">
          <div className="glass rounded-3xl p-12 mb-8">
            <h1 className="font-display font-bold text-3xl mb-4">xWorkSpace</h1>
            <p className="text-white/70 mb-8">
              {t('workspace.emptyDesc')}
            </p>
            <Link
              href="/agents"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 transition-colors"
            >
              <Plus className="w-5 h-5" />
              {t('workspace.goToMarketplace')}
            </Link>
          </div>
        </div>
        <Footer />
      </main>
    )
  }

  return (
    <main className="pt-16 min-h-screen bg-deep-space">
      {/* Progress bar */}
      <div className="sticky top-16 z-30 bg-deep-space/95 backdrop-blur border-b border-white/10">
        <div className="max-w-[1800px] mx-auto px-4 py-3">
          <div className="flex items-center justify-between gap-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-sm font-medium text-white/70">{t('workspacePage.progressLabel')}</span>
                <span className="text-sm text-force-gold font-semibold">{progressPercent}%</span>
              </div>
              <div className="h-2 rounded-full bg-white/10 overflow-hidden">
                <motion.div
                  className="h-full bg-force-gold rounded-full"
                  initial={{ width: 0 }}
                  animate={{ width: `${progressPercent}%` }}
                  transition={{ duration: 0.5 }}
                />
              </div>
            </div>
            <button
              onClick={() => setShowCheckout(true)}
              disabled={acceptedOutputs.length === 0}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all ${
                acceptedOutputs.length > 0
                  ? 'bg-force-gold text-deep-space hover:bg-force-gold/90 shadow-lg shadow-force-gold/20'
                  : 'bg-white/10 text-white/40 cursor-not-allowed'
              }`}
            >
              <ShoppingCart className="w-5 h-5" />
              {t('workspacePage.checkoutDelivery')}
              {acceptedOutputs.length > 0 && (
                <span className="px-2 py-0.5 rounded-full bg-deep-space/50 text-xs">
                  {acceptedOutputs.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* 3-column layout */}
      <div className="max-w-[1800px] mx-auto px-4 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 min-h-[calc(100vh-220px)]">
          {/* Left: Agent list */}
          <div className="lg:col-span-3">
            <div className="glass rounded-2xl p-4 h-full">
              <h2 className="font-display font-semibold mb-4 flex items-center gap-2">
                <Circle className="w-2 h-2 fill-force-gold text-force-gold" />
                {t('workspacePage.agentsList')}
              </h2>
              <div className="space-y-2">
                {workspaceAgents.map((agent) => {
                  const status = statusLabels[agent.status]
                  return (
                    <div
                      key={agent.id}
                      className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${
                        selectedAgentId === agent.id ? 'bg-force-gold/20 border border-force-gold/40' : 'bg-white/5 hover:bg-white/10'
                      }`}
                    >
                      <span className="text-2xl">{agent.avatar}</span>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium truncate">{agent.name}</p>
                        <p className={`text-xs ${status.color} flex items-center gap-1`}>
                          <span className={`w-1.5 h-1.5 rounded-full ${status.dot}`} />
                          {status.label}
                        </p>
                      </div>
                      <button
                        onClick={() => removeFromWorkspace(agent.id)}
                        className="p-1 rounded-lg text-white/40 hover:text-red-400 hover:bg-red-500/20"
                        aria-label={t('workspacePage.remove')}
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )
                })}
              </div>
              <Link
                href="/agents"
                className="mt-4 flex items-center justify-center gap-2 py-3 rounded-xl border-2 border-dashed border-white/20 text-white/60 hover:border-force-gold/40 hover:text-force-gold transition-colors"
              >
                <Plus className="w-4 h-4" />
                {t('workspacePage.hireMore')}
              </Link>
            </div>
          </div>

          {/* Center: Task input */}
          <div className="lg:col-span-5">
            <div className="glass rounded-2xl p-6 h-full flex flex-col">
              <h2 className="font-display font-semibold mb-4">{t('workspacePage.taskArea')}</h2>
              <p className="text-sm text-white/60 mb-4">
                {t('workspacePage.taskHint')}
              </p>

              {/* @mention chips */}
              {mentionNames.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {mentionNames.map(({ name, agentId, agentName }) => (
                    <button
                      key={agentId}
                      onClick={() => {
                        setSelectedAgentId(agentId)
                        setTaskInput((prev) => {
                          const mention = `@${name} `
                          return prev.includes(mention) ? prev : prev + mention
                        })
                      }}
                      className={`px-3 py-1.5 rounded-lg text-sm transition-colors ${
                        selectedAgentId === agentId
                          ? 'bg-force-gold/30 text-force-gold border border-force-gold/50'
                          : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/10'
                      }`}
                    >
                      @{name}
                    </button>
                  ))}
                </div>
              )}

              <textarea
                value={taskInput}
                onChange={(e) => setTaskInput(e.target.value)}
                placeholder={t('workspacePage.taskPlaceholder')}
                className="flex-1 min-h-[120px] w-full px-4 py-3 rounded-xl bg-white/5 border border-white/10 text-white placeholder-white/40 focus:outline-none focus:border-force-gold/50 resize-none"
                rows={4}
              />

              <div className="flex items-center gap-3 mt-4">
                <select
                  value={selectedAgentId || ''}
                  onChange={(e) => setSelectedAgentId(e.target.value || null)}
                  className="px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-white focus:outline-none focus:border-force-gold/50"
                >
                  <option value="">{t('workspacePage.selectAgent')}</option>
                  {workspaceAgents.map((a) => (
                    <option key={a.id} value={a.id}>
                      {a.name} - {tAgentTitle(a.title)}
                    </option>
                  ))}
                </select>
                <button
                  onClick={handleSubmitTask}
                  disabled={!taskInput.trim() || !selectedAgentId || isSubmitting}
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <Loader2 className="w-5 h-5 animate-spin" />
                  ) : (
                    <Send className="w-5 h-5" />
                  )}
                  {t('workspacePage.dispatchTask')}
                </button>
              </div>
            </div>
          </div>

          {/* Right: Output area */}
          <div className="lg:col-span-4">
            <div className="glass rounded-2xl p-6 h-full flex flex-col overflow-hidden">
              <h2 className="font-display font-semibold mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-force-gold" />
                {t('workspacePage.outputArea')}
              </h2>
              <div className="flex-1 overflow-y-auto space-y-4 pr-2">
                {taskOutputs.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-48 text-white/40">
                    <p>{t('workspacePage.outputEmpty')}</p>
                    <p className="text-sm mt-1">{t('workspacePage.outputHint')}</p>
                  </div>
                ) : (
                  taskOutputs.map((output) => (
                    <motion.div
                      key={output.id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="p-4 rounded-xl bg-white/5 border border-white/10"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-lg">
                          {workspaceAgents.find((a) => a.id === output.agentId)?.avatar || '🤖'}
                        </span>
                        <span className="font-medium">{output.agentName}</span>
                        <span className="text-xs text-white/50">· {output.taskContent.slice(0, 30)}...</span>
                      </div>
                      <div className="text-sm text-white/80 whitespace-pre-wrap mb-4 font-mono">
                        {output.output}
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => acceptOutput(output.id)}
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                            output.status === 'accepted'
                              ? 'bg-green-500/30 text-green-400 border border-green-500/50'
                              : 'bg-white/10 hover:bg-green-500/20 text-white/80'
                          }`}
                        >
                          <Check className="w-4 h-4" />
                          {t('workspacePage.accept')}
                        </button>
                        <button
                          onClick={() => handleRevise(output.id)}
                          className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-white/10 hover:bg-amber-500/20 text-white/80 transition-colors"
                        >
                          <RotateCcw className="w-4 h-4" />
                          {t('workspacePage.revise')}
                        </button>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Checkout button - bottom right */}
      {acceptedOutputs.length > 0 && (
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed bottom-6 right-6 z-50 md:bottom-8 md:right-8"
        >
          <button
            onClick={() => setShowCheckout(true)}
            className="flex items-center gap-2 px-6 py-4 rounded-2xl bg-force-gold text-deep-space font-bold shadow-xl shadow-force-gold/30 hover:bg-force-gold/90 transition-all hover:scale-105"
          >
            <ShoppingCart className="w-6 h-6" />
            {t('workspacePage.checkoutDelivery')}
            <span className="px-2 py-0.5 rounded-full bg-deep-space/30 text-sm">
              {acceptedOutputs.length} {t('workspacePage.items')}
            </span>
          </button>
        </motion.div>
      )}

      {/* Checkout Modal */}
      {showCheckout && (
        <CheckoutModal
          acceptedOutputs={acceptedOutputs}
          workspaceAgents={workspaceAgents}
          onClose={() => setShowCheckout(false)}
          t={t}
          tAgentTitle={tAgentTitle}
        />
      )}

      <Footer />
    </main>
  )
}

function CheckoutModal({
  acceptedOutputs,
  workspaceAgents,
  onClose,
  t,
  tAgentTitle,
}: {
  acceptedOutputs: { agentId: string; agentName: string; output: string; taskContent: string }[]
  workspaceAgents: { id: string; name: string; title: string; price: number; avatar: string }[]
  onClose: () => void
  t: (path: string) => string
  tAgentTitle: (key: string) => string
}) {
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  const summary = useMemo(() => {
    const byAgent = new Map<string, { count: number; agent: typeof workspaceAgents[0] }>()
    for (const o of acceptedOutputs) {
      const agent = workspaceAgents.find((a) => a.id === o.agentId)
      if (agent) {
        const prev = byAgent.get(o.agentId)
        byAgent.set(o.agentId, {
          count: (prev?.count || 0) + 1,
          agent,
        })
      }
    }
    return Array.from(byAgent.values())
  }, [acceptedOutputs, workspaceAgents])

  const totalPrice = summary.reduce((sum, s) => sum + s.agent.price * 0.1 * s.count, 0) || 0

  const handleConfirmCheckout = () => {
    setCheckoutComplete(true)
    // In real app: generate delivery package, send email
  }

  if (checkoutComplete) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-strong rounded-3xl p-12 max-w-md text-center"
        >
          <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mx-auto mb-6">
            <Check className="w-8 h-8 text-green-400" />
          </div>
          <h2 className="font-display font-bold text-2xl mb-2">{t('workspacePage.deliveryComplete')}</h2>
          <p className="text-white/70 mb-6">
            {t('workspacePage.deliveryDesc')}
          </p>
          <button
            onClick={onClose}
            className="px-8 py-3 rounded-xl bg-force-gold text-deep-space font-semibold"
          >
            {t('workspacePage.close')}
          </button>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto">
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="glass-strong rounded-3xl p-8 max-w-lg w-full my-8"
      >
        <h2 className="font-display font-bold text-2xl mb-2">{t('workspacePage.checkoutTitle')}</h2>
        <p className="text-white/60 text-sm mb-6">{t('workspacePage.checkoutSubtitle')}</p>

        <div className="space-y-4 mb-8">
          {summary.map(({ agent, count }) => (
            <div
              key={agent.id}
              className="flex items-center justify-between p-4 rounded-xl bg-white/5"
            >
              <div className="flex items-center gap-3">
                <span className="text-2xl">{agent.avatar}</span>
                <div>
                  <p className="font-medium">{tAgentTitle(agent.title)}</p>
                  <p className="text-sm text-white/50">{count} {t('workspacePage.tasksConfirmed')}</p>
                </div>
              </div>
              <span className="font-semibold text-force-gold">
                ${((agent.price * 0.1) * count).toFixed(0)}
              </span>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between py-4 border-t border-white/10 mb-6">
          <span className="font-semibold">{t('workspacePage.total')}</span>
          <span className="font-display font-bold text-xl text-force-gold">
            ${totalPrice.toFixed(0)}
          </span>
        </div>

        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-3 rounded-xl border border-white/20 text-white/80 hover:bg-white/5"
          >
            {t('workspacePage.backToEdit')}
          </button>
          <button
            onClick={handleConfirmCheckout}
            className="flex-1 py-3 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold/90"
          >
            {t('workspacePage.confirmDelivery')}
          </button>
        </div>
      </motion.div>
    </div>
  )
}
