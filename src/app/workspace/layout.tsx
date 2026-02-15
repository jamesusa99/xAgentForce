import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'xWorkSpace | xAgentForce',
  description: '数字工作区 - 管理在职 Agent，分发任务，审核产出，结算交付。',
}

export default function WorkspaceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
