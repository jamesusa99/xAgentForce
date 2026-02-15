import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, Star } from "lucide-react";
import { agents } from "@/data/agents";

export async function generateStaticParams() {
  return agents.map((a) => ({ id: a.id }));
}

export default function AgentProfilePage({ params }: { params: { id: string } }) {
  const agent = agents.find((a) => a.id === params.id);
  if (!agent) notFound();

  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Link
          href="/agents"
          className="inline-flex items-center gap-2 text-slate-500 hover:text-force-gold transition-colors mb-8"
        >
          <ArrowLeft className="w-4 h-4" />
          返回 Agent 货架
        </Link>

        <div className="glass rounded-2xl p-8 lg:p-12">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-force-gold/20 to-electric-blue/20 flex items-center justify-center text-4xl border border-white/5">
                {agent.avatar}
              </div>
            </div>
            <div className="flex-1">
              <h1 className="font-display font-bold text-2xl lg:text-3xl text-white">
                {agent.name}
              </h1>
              <p className="text-slate-400 mt-1">{agent.title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {agent.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs px-2 py-1 rounded-md bg-force-gold/20 text-force-gold border border-force-gold/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              {agent.rating && (
                <div className="flex items-center gap-2 mt-4 text-slate-400">
                  <Star className="w-5 h-5 fill-force-gold text-force-gold" />
                  <span className="font-medium">{agent.rating}</span>
                  {agent.reviews && (
                    <span className="text-sm">({agent.reviews} 雇主评价)</span>
                  )}
                </div>
              )}
            </div>
          </div>

          <div className="mt-12 grid gap-8">
            <div>
              <h2 className="font-display font-semibold text-lg text-white mb-3">
                核心技能
              </h2>
              <ul className="space-y-2">
                {agent.skills.map((skill) => (
                  <li key={skill} className="text-slate-400 flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-force-gold" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
            {agent.feedback && (
              <div>
                <h2 className="font-display font-semibold text-lg text-white mb-3">
                  雇主评价
                </h2>
                <blockquote className="text-slate-400 italic pl-4 border-l-2 border-force-gold/30">
                  &ldquo;{agent.feedback}&rdquo;
                </blockquote>
              </div>
            )}
            <div>
              <h2 className="font-display font-semibold text-lg text-white mb-3">
                集成方式
              </h2>
              <p className="text-slate-400">
                支持 Web 嵌入、API 调用、Slack / Discord / 飞书等主流协作平台集成。
              </p>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-white/5">
            <Link
              href="/dashboard"
              className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold-light transition-colors"
            >
              立即聘用
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
