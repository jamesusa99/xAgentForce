export type AgentCategory = '电商' | '市场' | '财务' | '技术' | '法务' | '创意'

export interface Agent {
  id: string
  name: string
  title: string
  category: AgentCategory
  avatar: string
  tags: string[]
  skills: string[]
  price: number
  rating: number
  reviews: number
  featured?: boolean
  /** For @mention collaboration in workspace, e.g. @数据专家 */
  mentionName?: string
}

export const categories: AgentCategory[] = ['电商', '市场', '财务', '技术', '法务', '创意']

export const agents: Agent[] = [
  {
    id: '1',
    name: 'Ella',
    title: '电商运营专家',
    category: '电商',
    avatar: '🛒',
    tags: ['BingoAI 认证', 'Top Performer', '7x24 在线'],
    skills: ['熟练掌握 TikTok 算法', '多平台店铺管理', '转化率优化'],
    price: 499,
    rating: 4.9,
    reviews: 128,
    featured: true,
    mentionName: '电商专家',
  },
  {
    id: '2',
    name: 'Marcus',
    title: '私域流量分析师',
    category: '市场',
    avatar: '📊',
    tags: ['BingoAI 认证', '7x24 在线'],
    skills: ['微信生态运营', '社群裂变策略', '用户分层建模'],
    price: 399,
    rating: 4.8,
    reviews: 86,
    featured: true,
    mentionName: '私域专家',
  },
  {
    id: '3',
    name: 'Sofia',
    title: '法务合规审计',
    category: '法务',
    avatar: '⚖️',
    tags: ['Top Performer', 'BingoAI 认证'],
    skills: ['合同智能审核', '合规风险评估', '多语言法律文档'],
    price: 599,
    rating: 4.95,
    reviews: 64,
    featured: true,
    mentionName: '法务专家',
  },
  {
    id: '4',
    name: 'Leo',
    title: '多语言 SEO 专员',
    category: '市场',
    avatar: '🔍',
    tags: ['7x24 在线', 'BingoAI 认证'],
    skills: ['支持多语言 SEO', '关键词策略', '技术 SEO 优化'],
    price: 299,
    rating: 4.7,
    reviews: 92,
    mentionName: 'SEO专家',
  },
  {
    id: '5',
    name: 'Nina',
    title: '创意内容策划',
    category: '创意',
    avatar: '✨',
    tags: ['Top Performer'],
    skills: ['品牌叙事', '跨平台内容矩阵', 'AI 辅助创意'],
    price: 449,
    rating: 4.85,
    reviews: 71,
    mentionName: '文案专家',
  },
  {
    id: '6',
    name: 'Victor',
    title: '财务数据分析师',
    category: '财务',
    avatar: '📈',
    tags: ['BingoAI 认证', '7x24 在线'],
    skills: ['财务报表分析', '现金流预测', '成本优化建模'],
    price: 549,
    rating: 4.9,
    reviews: 45,
    mentionName: '数据专家',
  },
  {
    id: '7',
    name: 'Ada',
    title: '技术架构顾问',
    category: '技术',
    avatar: '⚙️',
    tags: ['Top Performer', 'BingoAI 认证'],
    skills: ['系统架构设计', 'API 集成', 'DevOps 自动化'],
    price: 699,
    rating: 4.92,
    reviews: 38,
    mentionName: '技术专家',
  },
  {
    id: '8',
    name: 'Luna',
    title: '电商直播运营',
    category: '电商',
    avatar: '📺',
    tags: ['7x24 在线'],
    skills: ['直播脚本生成', '实时互动优化', '带货话术库'],
    price: 349,
    rating: 4.75,
    reviews: 112,
    mentionName: '直播专家',
  },
]
