# 诗光词影 - AI 赋能诗词鉴赏平台

## 项目概述

"诗光词影"是一个基于 AI 技术的智能诗词鉴赏与学习平台，旨在通过人工智能为诗词爱好者、学生、教师及研究者提供深度、互动、个性化的诗词解读与创作体验。

## 技术架构

### 前端技术栈

- **框架**: Next.js 15.5.5 (App Router)
- **样式**: CSS Modules + 全局样式
- **状态管理**: React Hooks (useState)
- **开发语言**: JavaScript

### 项目结构

```
frontend/
├── app/
│   ├── layout.js          # 根布局组件
│   ├── page.js            # 首页
│   ├── globals.css        # 全局样式
│   ├── home.module.css    # 首页样式
│   ├── poetry/            # 诗词鉴赏页面
│   │   ├── page.js
│   │   └── page.module.css
│   ├── learning-records/  # 学习记录页面
│   │   └── page.js
│   └── user/              # 用户个人中心
│       └── page.js
├── next.config.js         # Next.js配置
└── package.json           # 项目依赖
```

## 核心功能

### 1. 智能鉴赏

- 多维度解读诗词背景、意象、手法和情感
- RAG 问答系统，支持针对任意诗词的自由提问
- 对比鉴赏功能

### 2. 个性化学习

- AI 根据用户目标生成学习计划
- 基于艾宾浩斯遗忘曲线的智能背诵计划
- 学习进度跟踪和能力评估

### 3. 创作工坊

- AI 辅助诗词创作
- 格律检查和押韵建议
- 作品分享与社区互动

## 快速开始

### 环境要求

- Node.js 18.0 或更高版本
- npm 或 yarn 包管理器

### 安装依赖

```bash
cd frontend
npm install
```

### 开发模式

```bash
npm run dev
```

访问 http://localhost:3001 查看应用

### 构建生产版本

```bash
npm run build
npm start
```

## 页面功能说明

### 首页 (/)

- 平台介绍和功能展示
- 导航到各个功能模块
- 响应式设计，支持移动端

### 诗词鉴赏 (/poetry)

- 加载诗词内容
- 智能问答功能
- 诗词展示和交互

### 学习记录 (/learning-records)

- 用户学习历史记录
- 学习进度展示

### 用户中心 (/user)

- 个人学习数据
- 个性化推荐

## 已解决的问题

### 1. 缺少根布局文件

**问题**: Next.js App Router 要求每个页面必须有根布局文件
**解决方案**: 创建了 `app/layout.js` 文件，包含导航栏和页脚

### 2. 缺少首页

**问题**: 没有根路径页面
**解决方案**: 创建了 `app/page.js` 作为首页，展示平台功能

### 3. 客户端组件问题

**问题**: 使用 React Hooks 的组件需要标记为客户端组件
**解决方案**: 在 `poetry/page.js` 顶部添加 `'use client'` 指令

### 4. 样式系统

**问题**: 缺少全局样式和响应式设计
**解决方案**:

- 创建了 `globals.css` 全局样式
- 为首页创建了 `home.module.css` 模块样式
- 实现了响应式导航和布局

## 开发规范

### 代码风格

- 使用函数式组件和 React Hooks
- 采用 CSS Modules 进行样式管理
- 遵循 Next.js App Router 最佳实践

### 组件结构

- 每个页面都有对应的 CSS 模块文件
- 使用语义化的 HTML 结构
- 实现响应式设计

## 下一步开发计划

1. **后端 API 集成**

   - 连接诗词数据库
   - 实现 AI 问答接口
   - 用户认证系统

2. **功能增强**

   - 完善学习记录功能
   - 添加用户个人中心
   - 实现创作工坊

3. **性能优化**
   - 代码分割和懒加载
   - 图片优化
   - SEO 优化

## 贡献指南

1. Fork 项目
2. 创建功能分支
3. 提交更改
4. 发起 Pull Request

## 许可证

本项目采用 MIT 许可证 - 查看 [LICENSE](LICENSE) 文件了解详情

## Supabase 配置

### 步骤 1：创建 Supabase 项目

- 访问 `https://supabase.com` 创建项目
- 在 Project Settings → API 中获取：
  - `Project URL`
  - `anon public key`

### 步骤 2：配置环境变量

在 `frontend/.env.local` 中设置（新建文件）：

```
NEXT_PUBLIC_SUPABASE_URL=你的Project_URL
NEXT_PUBLIC_SUPABASE_ANON_KEY=你的Anon_Public_Key
```

> 你也可以参考 `frontend/.env.local.example`。

### 步骤 3：安装依赖并启动

```
cd frontend
npm install
npm run dev
```

### 步骤 4：快速测试连接（可选）

在项目根目录运行测试脚本（会读取根 `.env` 或 `frontend/.env.local`）：

```
node test-supabase.js
```

脚本将尝试读取 `poems` 表以验证连接（请在 Supabase 中创建相应表或导入 `data/schema.sql`）。
