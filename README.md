# 个人网站项目

这是一个使用 Next.js 和 Tailwind CSS 构建的现代化个人网站项目。

## 功能特点

- 🎨 现代化的UI设计
- 🌈 动态渐变背景效果
- 📱 完全响应式设计
- ⚡ 优化的性能
- 🎭 平滑的页面过渡动画

## 页面结构

- 首页：个人简介和欢迎信息
- 关于：详细的个人信息、技能和经历
- 作品集：展示个人项目作品
- 联系：联系方式和留言表单

## 技术栈

- Next.js 15.2.1
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- Heroicons

## 开始使用

1. 克隆项目：
```bash
git clone [你的仓库地址]
```

2. 安装依赖：
```bash
npm install
```

3. 运行开发服务器：
```bash
npm run dev
```

4. 打开浏览器访问：`http://localhost:3000`

## 项目结构

```
src/
├── app/                 # 路由和页面组件
│   ├── page.tsx        # 首页
│   ├── about/          # 关于页面
│   ├── portfolio/      # 作品集页面
│   └── contact/        # 联系页面
├── components/         # 可复用组件
│   ├── layout/        # 布局相关组件
│   └── ui/            # UI 组件
└── styles/            # 全局样式
```

## 自定义配置

1. 个人信息：
   - 编辑 `src/app/page.tsx` 中的个人简介
   - 更新 `src/app/about/page.tsx` 中的技能和经历
   - 修改 `src/app/portfolio/page.tsx` 中的项目展示

2. 样式定制：
   - 主题颜色在 Tailwind 配置中定义
   - 背景效果可在 `src/components/ui/AnimatedBackground.tsx` 中调整

## 构建部署

构建生产版本：
```bash
npm run build
```

## 注意事项

- 确保 Node.js 版本 >= 18.17.0
- 所有客户端组件都已标记 'use client'
- 图片资源需放在 public 目录下

## 许可证

MIT
