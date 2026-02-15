import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { WorkspaceProvider } from '@/context/WorkspaceContext'
import { WorkspaceTray } from '@/components/WorkspaceTray'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const montserrat = Montserrat({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-montserrat',
})

export const metadata: Metadata = {
  title: 'xAgentForce | 雇佣你的全能数字员工',
  description: '告别复杂的工具调试。在我们的数字人才库中筛选垂直领域 Agent，即插即用，按需订阅。',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN" className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <WorkspaceProvider>
          <Header />
          {children}
          <WorkspaceTray />
        </WorkspaceProvider>
      </body>
    </html>
  )
}
