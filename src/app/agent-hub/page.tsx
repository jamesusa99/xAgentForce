export const metadata = {
  title: "Agent Hub | xAgentForce",
  description: "底层技术架构，面向高端企业级客户",
};

export default function AgentHubPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-3xl lg:text-4xl text-white">
          Agent Hub
        </h1>
        <p className="mt-4 text-slate-400">
          基于 AgentForceHub.ai 的底层技术架构，为高端企业客户提供可定制、可私有化部署的 Agent 解决方案。
        </p>
        <div className="mt-12 glass rounded-2xl p-8">
          <h2 className="font-display font-semibold text-xl text-white mb-4">
            技术能力
          </h2>
          <ul className="space-y-3 text-slate-400">
            <li>• 多模态 Agent 训练与调优</li>
            <li>• 企业级工作流编排</li>
            <li>• 私有化部署与数据隔离</li>
            <li>• SLA 保障与专属支持</li>
          </ul>
          <p className="mt-6 text-slate-500 text-sm">
            如需了解更多技术细节或商务合作，请联系我们。
          </p>
        </div>
      </div>
    </div>
  );
}
