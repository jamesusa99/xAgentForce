"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { agents } from "@/data/agents";

const feedbackAgents = agents.filter((a) => a.feedback).slice(0, 3);

export function AgentFeedback() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-deep-space-50/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white">
            Agent 履职评价
          </h2>
          <p className="mt-4 text-slate-400 max-w-2xl mx-auto">
            客户口碑是订阅制服务长期留存的关键 · 每一位 Agent 都经过真实雇主验证
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {feedbackAgents.map((agent, i) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass rounded-2xl p-6 glass-hover"
            >
              <Quote className="w-10 h-10 text-force-gold/30 mb-4" />
              <p className="text-slate-300 italic mb-4">&ldquo;{agent.feedback}&rdquo;</p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-force-gold/20 flex items-center justify-center text-lg">
                  {agent.avatar}
                </div>
                <div>
                  <div className="font-medium text-white">{agent.name}</div>
                  <div className="flex items-center gap-1 text-sm text-slate-500">
                    <Star className="w-4 h-4 fill-force-gold text-force-gold" />
                    {agent.rating} · {agent.reviews} 评价
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
