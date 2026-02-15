import { HowItWorks } from "@/components/HowItWorks";
import Link from "next/link";

export const metadata = {
  title: "派遣流程 | xAgentForce",
  description: "三步降低决策门槛，快速组建你的数字团队",
};

export default function HowItWorksPage() {
  return (
    <div className="pt-24">
      <HowItWorks />
      <div className="text-center pb-24">
        <Link
          href="/agents"
          className="inline-flex items-center justify-center px-8 py-4 rounded-xl bg-force-gold text-deep-space font-semibold hover:bg-force-gold-light transition-colors"
        >
          开始筛选 Agent
        </Link>
      </div>
    </div>
  );
}
