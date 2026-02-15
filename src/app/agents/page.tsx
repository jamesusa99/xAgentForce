import { AgentMarketplace } from "@/components/AgentMarketplace";

export const metadata = {
  title: "Agent 货架 | xAgentForce",
  description: "在数字人才库中筛选垂直领域 Agent，即插即用",
};

export default function AgentsPage() {
  return (
    <div className="pt-24">
      <AgentMarketplace />
    </div>
  );
}
