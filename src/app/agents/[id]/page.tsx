import { notFound } from 'next/navigation'
import { agents } from '@/data/agents'
import { Footer } from '@/components/Footer'
import { AgentProfileContent } from '@/components/AgentProfileContent'

export async function generateStaticParams() {
  return agents.map((agent) => ({ id: agent.id }))
}

export async function generateMetadata({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id)
  if (!agent) return { title: 'Agent Not Found' }
  return {
    title: `${agent.name} - ${agent.title} | xAgentForce`,
    description: agent.skills.join(' · '),
  }
}

export default function AgentProfilePage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id)
  if (!agent) notFound()

  return (
    <>
      <AgentProfileContent agent={agent} />
      <Footer />
    </>
  )
}
