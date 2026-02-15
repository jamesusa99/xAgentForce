import Link from "next/link";
import { LayoutDashboard, Users } from "lucide-react";

export const metadata = {
  title: "控制台 | xAgentForce",
  description: "管理你的数字团队，查看工作日志和产出结果",
};

export default function DashboardPage() {
  return (
    <div className="pt-24 pb-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="font-display font-bold text-3xl lg:text-4xl text-white flex items-center gap-2">
          <LayoutDashboard className="w-8 h-8 text-force-gold" />
          控制台
        </h1>
        <p className="mt-4 text-slate-400">
          管理所有「在职」Agent，查看工作日志和产出结果。
        </p>
        <div className="mt-12 glass rounded-2xl p-12 text-center">
          <Users className="w-16 h-16 text-slate-600 mx-auto mb-4" />
          <h2 className="font-display font-semibold text-xl text-white mb-2">
            尚未聘用任何 Agent
          </h2>
          <p className="text-slate-500 mb-6">
            前往 Agent 货架挑选数字员工，组建你的团队
          </p>
          <Link
            href="/agents"
            className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold-light transition-colors"
          >
            浏览 Agent 货架
          </Link>
        </div>
      </div>
    </div>
  );
}
