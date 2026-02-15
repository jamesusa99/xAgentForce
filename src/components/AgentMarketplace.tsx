"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { AgentCard } from "./AgentCard";
import { agents, categories, type AgentCategory } from "@/data/agents";
import { cn } from "@/lib/utils";

export function AgentMarketplace() {
  const [activeCategory, setActiveCategory] = useState<AgentCategory | "全部">("全部");

  const filteredAgents =
    activeCategory === "全部" ? agents : agents.filter((a) => a.category === activeCategory);

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Agent 货架
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            数字人才库 · 在垂直领域挑选符合业务场景的 Agent，即插即用
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar: Categories */}
          <aside className="lg:w-48 flex-shrink-0">
            <nav className="flex lg:flex-col gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide">
              {["全部", ...categories].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat as AgentCategory | "全部")}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-medium whitespace-nowrap transition-colors",
                    activeCategory === cat
                      ? "bg-force-gold/20 text-force-gold border border-force-gold/30"
                      : "text-slate-500 hover:text-slate-300 hover:bg-white/5"
                  )}
                >
                  {cat}
                </button>
              ))}
            </nav>
          </aside>

          {/* Bento Grid */}
          <div className="flex-1 min-w-0">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredAgents.map((agent, i) => (
                <AgentCard key={agent.id} agent={agent} index={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
