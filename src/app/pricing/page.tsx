import { PricingSection } from "@/components/PricingSection";

export const metadata = {
  title: "定价 | xAgentForce",
  description: "按岗位订阅，灵活扩展，无隐藏费用",
};

export default function PricingPage() {
  return (
    <div className="pt-24">
      <PricingSection />
    </div>
  );
}
