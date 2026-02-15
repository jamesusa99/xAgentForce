export type AgentCategory = "电商" | "市场" | "财务" | "技术" | "法务" | "创意";

export interface Agent {
  id: string;
  name: string;
  title: string;
  category: AgentCategory;
  avatar: string; // emoji or icon identifier
  tags: string[];
  skills: string[];
  rating?: number;
  reviews?: number;
  feedback?: string;
}

export const categories: AgentCategory[] = ["电商", "市场", "财务", "技术", "法务", "创意"];

export const agents: Agent[] = [
  {
    id: "1",
    name: "TikTok 电商 Agent",
    title: "电商运营专家",
    category: "电商",
    avatar: "🛒",
    tags: ["BingoAI 认证", "Top Performer", "7x24 在线"],
    skills: ["熟练掌握 TikTok 算法", "多平台广告投放", "转化率优化"],
    rating: 4.9,
    reviews: 128,
    feedback: "这个电商 Agent 帮我提升了 30% 的转化率",
  },
  {
    id: "2",
    name: "SEO 大师 Agent",
    title: "多语言 SEO 专家",
    category: "市场",
    avatar: "🔍",
    tags: ["BingoAI 认证", "7x24 在线"],
    skills: ["支持多语言 SEO", "关键词策略", "内容优化"],
    rating: 4.8,
    reviews: 96,
    feedback: "自然流量增长了 45%，ROI 超预期",
  },
  {
    id: "3",
    name: "合规审计 Agent",
    title: "法务合规专家",
    category: "法务",
    avatar: "⚖️",
    tags: ["BingoAI 认证", "Top Performer"],
    skills: ["GDPR/数据合规", "合同审查", "风险评估"],
    rating: 4.9,
    reviews: 72,
    feedback: "审计效率提升 3 倍，零遗漏",
  },
  {
    id: "4",
    name: "私域流量 Agent",
    title: "私域流量分析师",
    category: "市场",
    avatar: "📊",
    tags: ["7x24 在线"],
    skills: ["社群运营", "用户分层", "复购率分析"],
    rating: 4.7,
    reviews: 84,
    feedback: "私域转化率提升 25%",
  },
  {
    id: "5",
    name: "财务分析 Agent",
    title: "财务数据分析师",
    category: "财务",
    avatar: "📈",
    tags: ["BingoAI 认证", "Top Performer", "7x24 在线"],
    skills: ["财务报表分析", "预算规划", "现金流预测"],
    rating: 4.8,
    reviews: 56,
    feedback: "自动化报表节省 80% 人工时间",
  },
  {
    id: "6",
    name: "创意策划 Agent",
    title: "创意内容策划",
    category: "创意",
    avatar: "✨",
    tags: ["Top Performer"],
    skills: ["品牌文案", "视觉策划", "Campaign 设计"],
    rating: 4.6,
    reviews: 43,
    feedback: "内容产出速度翻倍",
  },
  {
    id: "7",
    name: "DevOps Agent",
    title: "基础设施工程师",
    category: "技术",
    avatar: "⚙️",
    tags: ["BingoAI 认证", "7x24 在线"],
    skills: ["CI/CD 自动化", "云资源管理", "监控告警"],
    rating: 4.9,
    reviews: 38,
    feedback: "部署时间从小时级降至分钟级",
  },
  {
    id: "8",
    name: "跨境营销 Agent",
    title: "跨境电商运营",
    category: "电商",
    avatar: "🌍",
    tags: ["BingoAI 认证"],
    skills: ["多国市场策略", "本地化运营", "跨境物流"],
    rating: 4.7,
    reviews: 61,
  },
];
