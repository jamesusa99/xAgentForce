import type { Metadata } from 'next'
import { Inter, Montserrat } from 'next/font/google'
import './globals.css'
import { Header } from '@/components/Header'
import { WorkspaceProvider } from '@/context/WorkspaceContext'
import { WorkspaceTray } from '@/components/WorkspaceTray'
import { LanguageProvider } from '@/context/LanguageContext'

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
  title: 'xAgentForce | Hire Your All-in-One Digital Workforce',
  description:
    'Skip the complex tool setup. Browse our digital talent pool, pick vertical Agents, plug & play, subscribe on demand.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning className={`${inter.variable} ${montserrat.variable}`}>
      <body className="font-sans">
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('xagentforce-locale');if(s==='zh')document.documentElement.lang='zh-CN';}catch(e){}})()`,
          }}
        />
        <LanguageProvider>
          <WorkspaceProvider>
            <Header />
            {children}
            <WorkspaceTray />
          </WorkspaceProvider>
        </LanguageProvider>
      </body>
    </html>
  )
}
