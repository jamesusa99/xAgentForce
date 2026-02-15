# xAgentForce.com

**数字劳务派遣** 平台网站 · 雇佣你的全能数字员工

## 设计定位

- **视觉**：极客黑 (Deep Space Black) + 科技金 (Force Gold) / 电网蓝 (Electric Blue)
- **风格**：Bento Grid + Glassmorphism
- **字体**：Inter（正文）、Montserrat（标题）

## 技术栈

- **Next.js 14** (App Router)
- **Tailwind CSS**
- **Framer Motion**
- **Lucide React**（图标）

## 页面结构

| 页面 | 路径 | 说明 |
|------|------|------|
| 首页 | `/` | Hero + Agent 货架 + 派遣流程 + 信任背书 + 履职评价 + 定价 + CTA |
| Agent 货架 | `/agents` | 分类筛选、Bento 卡片展示 |
| Agent 档案 | `/agents/[id]` | 技能、雇主评价、集成方式 |
| 派遣流程 | `/how-it-works` | Select → Deploy → Scale |
| 定价 | `/pricing` | 按岗位订阅 |
| Agent Hub | `/agent-hub` | 企业级技术架构 |
| 控制台 | `/dashboard` | 管理在职 Agent（占位） |

## 开发

```bash
npm install
npm run dev
```

访问 http://localhost:3000

## 构建

```bash
npm run build
npm start
```
