"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Star, ChevronRight } from "lucide-react";
import type { Agent } from "@/data/agents";
import { cn } from "@/lib/utils";

interface AgentCardProps {
  agent: Agent;
  index?: number;
}

export function AgentCard({ agent, index = 0 }: AgentCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
    >
      <Link href={`/agents/${agent.id}`}>
        <div className="group glass rounded-2xl p-6 h-full glass-hover flex flex-col cursor-pointer overflow-hidden">
          {/* Header */}
          <div className="flex items-start justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-force-gold/20 to-electric-blue/20 flex items-center justify-center text-2xl border border-white/5">
                {agent.avatar}
              </div>
              <div>
                <h3 className="font-display font-semibold text-white group-hover:text-force-gold transition-colors">
                  {agent.name}
                </h3>
                <p className="text-sm text-slate-500">{agent.title}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-force-gold group-hover:translate-x-1 transition-all flex-shrink-0" />
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mt-4">
            {agent.tags.map((tag) => (
              <span
                key={tag}
                className={cn(
                  "text-xs px-2 py-1 rounded-md",
                  tag.includes("BingoAI")
                    ? "bg-force-gold/20 text-force-gold border border-force-gold/30"
                    : "bg-white/5 text-slate-400 border border-white/5"
                )}
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Skills */}
          <ul className="mt-4 space-y-2 flex-1">
            {agent.skills.slice(0, 3).map((skill) => (
              <li key={skill} className="text-sm text-slate-400 flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-force-gold/60" />
                {skill}
              </li>
            ))}
          </ul>

          {/* Footer: Rating & CTA */}
          <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between">
            {agent.rating && (
              <div className="flex items-center gap-1.5 text-slate-500">
                <Star className="w-4 h-4 fill-force-gold text-force-gold" />
                <span className="text-sm font-medium text-slate-400">{agent.rating}</span>
                {agent.reviews && (
                  <span className="text-xs text-slate-600">({agent.reviews} 评价)</span>
                )}
              </div>
            )}
            <span className="text-sm font-medium text-force-gold group-hover:underline">
              查看简历 →
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}
