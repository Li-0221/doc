export interface ResumeSkill {
  title: string
  items: string[]
}

export interface ResumeExperienceSection {
  title: string
  bullets: string[]
}

export interface ResumeExperience {
  company: string
  role: string
  period: string
  sections: ResumeExperienceSection[]
}

export const resume = {
  name: '李立',
  title: '高级前端工程师 / 全栈交付与前端工程化',
  phone: '15827057426',
  email: 'miciili-02@outlook.com',
  summary: '5 年以上 Web 研发经历，主要使用 React/Next.js、Vue/Nuxt 和 TypeScript 开发交易与运营系统，并直接承担 FastAPI、NestJS 服务端开发。在 TripGuru 主要负责 Supplier、OTA、Bytecompute 三条业务的前端交付，承担约 5 人跨业务前端团队的任务分配、方案与代码评审；2026 年多数研发任务使用 Codex 和 Antigravity 完成，由本人负责方案判断、代码审查与验收。',
  skills: [
    {
      title: '前端',
      items: ['TypeScript', 'React / Next.js', 'Vue 3 / Nuxt', 'Vite / SSR', 'TanStack Router / Query / Table', 'Pinia', '复杂表单与权限路由', '响应式页面与地图交互'],
    },
    {
      title: '服务端与数据',
      items: ['Python / FastAPI', 'Pydantic', 'SQLAlchemy / Alembic', 'PostgreSQL', 'NestJS / Prisma', 'MySQL', '业务 API 与数据校验', '鉴权与集成测试'],
    },
    {
      title: '工程化与质量',
      items: ['pnpm Monorepo', '共享包', 'GitLab CI', 'Docker', 'GitOps / Helm', 'Nginx', 'Vitest / Playwright', 'Sentry'],
    },
    {
      title: 'AI Agent 研发',
      items: ['Codex', 'Antigravity', '跨仓检索与需求拆解', '代码审查', '自动化测试与运行验证'],
    },
  ] satisfies ResumeSkill[],
  experience: [
    {
      company: 'TripGuru',
      role: '前端工程师',
      period: '2025.07 - 2026.10',
      sections: [
        {
          title: 'Supplier 平台 | 主要前端开发',
          bullets: [
            '主要负责 React 运营后台与 Next.js Booking 前端，贯通产品/票型、排期库存、代理商 Marketplace、订单和消费者结账；处理零占座票型、接送信息及所选日期价格的跨端一致性问题。',
            '直接开发 FastAPI 业务接口与数据规则，包括协议范围商品目录、Session 原子批量更新和公开预订促销码；为预订字段重名建立前后端一致校验，以事务锁保护并发写入，并补充集成及 OpenAPI 契约测试。',
            '落地地图选点与站点排序的接送路线编辑器、运营表格列偏好；借助 React Profiler 定位排期日历拖拽重绘，用 requestAnimationFrame 优化交互。',
          ],
        },
        {
          title: 'OTA 平台 | 主要前端开发',
          bullets: [
            '主要负责 OTA Booking 与 OTA Admin 前端，完成酒店、Tour、Activity 的搜索详情、日历价格、动态旅客表单、购物车、优惠码、结账及订单确认，并覆盖库存冲突、支付失败等异常路径。',
            '调整 Booking 首页 SSR 请求时机与懒加载，减少非关键请求占用首屏；在运营后台合并并发 Token 刷新，完善多角色权限路由、登录恢复与 Sentry 监控。',
            '参与 OTA 运营后台从分散子系统向统一工作台演进，开发商品与酒店配置、订单处理和代理商操作流程。',
          ],
        },
        {
          title: 'Bytecompute | 主要前端开发',
          bullets: [
            '入职首年主要负责 Bytecompute Website 与 Admin 的从零建设，同期承担 Booking 预订系统重构，协同 UI、后端团队统一设计、接口与代码规范。',
            '推进 TypeScript 使用规范、Git 协作流程和 Docker/CI/CD 配置，让网站、管理后台与预订项目采用一致的开发和发布流程。',
          ],
        },
        {
          title: '跨业务前端团队与工程化',
          bullets: [
            '在约 5 人、分属不同业务线的前端团队中负责任务分配、技术方案和代码评审；Supplier、OTA、Bytecompute 的主要前端开发由本人承担。',
            '担任 TripGuru 官网及关联产品的前端主要负责人，负责相关前端开发与交付。',
            '建设 Nuxt Starter 与共享 npm 包，沉淀页面骨架、认证、表格搜索、图片上传及结账字段工具；维护公共前端 CI，支持私有包认证、质量检查与浏览器测试分片。',
            '参与 Supplier 多环境 GitOps 配置和静态资源发布保护，降低版本交错时的资源加载风险；以 Codex、Antigravity 完成多数开发任务，并负责生成代码审查、类型检查、测试和运行验收。',
          ],
        },
      ],
    },
    {
      company: '善思开悟',
      role: '前端与全栈开发',
      period: '2025.03 - 2025.05',
      sections: [
        {
          title: '',
          bullets: [
            '开发 AI 聊天平台的 Vue 3 前端与 FastAPI 服务端，对接模型流式 API，以 SSE 返回消息并适配移动端、平板和桌面端。',
            '处理 Markdown、代码、公式和流程图渲染；编写前后端 Dockerfile 与 Compose 部署配置，参与模型训练微调平台的前端开发。',
          ],
        },
      ],
    },
    {
      company: '越栈科技',
      role: '前端与全栈开发',
      period: '2023.04 - 2024.12',
      sections: [
        {
          title: '',
          bullets: [
            '参与聊天记录分析平台，完成大文件分片上传、WebSocket 处理状态、聊天内容切割打印与大量本地数据缓存。',
            '在远控平台集成 xterm Web 终端与 CodeMirror 在线编辑，封装 WebSocket 连接、心跳和重连逻辑。',
            '搭建 NestJS 项目模板，整合 JWT/RBAC、参数校验、文件处理和 Swagger 文档；在案件信息采集系统中开发 Vue 3 页面及 NestJS/Prisma 接口。',
            '开发 Nuxt/Nest 内容站点，处理 SSR 与 SEO、内容管理、短信验证、会员权限及支付流程。',
          ],
        },
      ],
    },
    {
      company: '数喆数据',
      role: '前端开发',
      period: '2021.02 - 2023.03',
      sections: [
        {
          title: '',
          bullets: [
            '参与全国第三次土壤普查项目，使用 OpenLayers 实现样点展示、矢量图形编辑、点位操作与路径规划。',
            '为样点数据包实现分片上传和断点续传，并用 ECharts 展示地理数据与统计结果。',
            '开发内部人事、培训与官网移动端，搭建 Vite/Vue 3 前端模板，推动 ESLint、Prettier 与 GitLab 协作规范。',
          ],
        },
      ],
    },
  ] satisfies ResumeExperience[],
  education: {
    school: '武汉商学院',
    degree: '软件工程 · 本科',
    period: '2017.09 - 2021.06',
  },
}
