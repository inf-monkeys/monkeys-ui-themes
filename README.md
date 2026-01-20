# @inf-monkeys/monkeys-ui-themes

Monkeys UI 主题组件库 - 用于 OEM 定制的独立 UI 组件包

## 概述

这是一个为 Monkeys 平台设计的主题组件库，将 OEM 定制的 UI 组件从主项目中分离出来，实现：

- **组件隔离**: 各 OEM 主题组件独立维护
- **动态加载**: 根据 themeId 自动解析对应组件
- **业务分离**: 纯 UI 组件，业务逻辑由主项目注入
- **易于扩展**: 新增主题只需添加组件并注册，无需修改主项目

## 安装

```bash
# 通过 Git URL 安装（推荐）
npm install git+https://github.com/inf-monkeys/monkeys-ui-themes.git

# 或
yarn add git+https://github.com/inf-monkeys/monkeys-ui-themes.git
```

## 快速开始

### 在主项目中使用

```tsx
// 确保导入整个包以执行主题注册
import * as uiThemes from '@inf-monkeys/monkeys-ui-themes';

const { DynamicComponent } = uiThemes;

function LandingPageWrapper({ themeId }) {
  return (
    <DynamicComponent
      themeId={themeId}
      name="landing-page"
      // 注入业务逻辑
      isAuthenticated={isLoggedIn}
      user={currentUser}
      onEnterWorkbench={() => navigate('/workspace')}
      onLogin={() => navigate('/login')}
      onCardClick={(title) => handleNavigation(title)}
    />
  );
}
```

### 手动解析组件

```tsx
import { resolveComponent } from '@inf-monkeys/monkeys-ui-themes';

const LandingPage = resolveComponent('bsd', 'landing-page');

if (LandingPage) {
  return <LandingPage {...props} />;
}
```

### 注册自定义主题

```tsx
import { registerTheme } from '@inf-monkeys/monkeys-ui-themes';
import { MyCustomLandingPage } from './MyCustomLandingPage';

registerTheme('my-theme', {
  'landing-page': MyCustomLandingPage,
}, {
  name: 'My Custom Theme',
  description: 'A custom theme for my application',
  version: '1.0.0',
});
```

## 内置主题

| 主题 ID | 名称 | 描述 |
|---------|------|------|
| `default` | Default Theme | 默认主题，提供基础落地页组件 |
| `bsd` | BSD Theme | 波司登品牌定制主题 |
| `artist` | Artist Theme | 艺术家工作室主题 |
| `concept-design` | Concept Design Theme | 概念设计主题 |

## 组件列表

| 组件名 | 描述 | 支持主题 |
|--------|------|----------|
| `landing-page` | 落地页组件 | default, bsd, artist, concept-design |
| `toolbox-panel` | 工具箱面板 | bsd |

## Landing Page Props

各主题的 Landing Page 组件支持以下通用 props：

```typescript
interface LandingPageProps {
  // 认证状态
  isAuthenticated?: boolean;
  user?: { name?: string; photo?: string } | null;

  // 回调函数
  onEnterWorkbench?: () => void;
  onLogin?: () => void;
  onCardClick?: (title: string) => void;
  onQuickActionClick?: (name: string) => void;

  // 自定义样式
  className?: string;
  style?: React.CSSProperties;

  // 主题特定配置（可选）
  featureCards?: FeatureCardData[];      // BSD
  quickActions?: QuickActionData[];       // Artist, Concept
  i18n?: { ... };                         // BSD
  backgroundComponent?: React.ReactNode;  // Artist
}
```

## 开发指南

### 环境准备

```bash
# 安装依赖
npm install

# 开发模式（监听变化自动重新构建）
npm run dev

# 构建生产版本
npm run build

# 类型检查
npm run typecheck

# 代码检查
npm run lint
```

### 目录结构

```
src/
├── index.ts                    # 主入口，导出所有公共 API
├── registry/                   # 组件注册表核心
│   └── index.ts               # registerTheme, resolveComponent
├── components/                 # 通用组件
│   └── DynamicComponent.tsx   # 动态组件解析器
└── themes/                     # 各主题组件
    ├── default/               # 默认主题
    │   ├── index.ts          # 主题注册入口
    │   └── components/
    │       └── LandingPage.tsx
    ├── bsd/                   # BSD 主题
    │   ├── index.ts
    │   └── components/
    │       ├── LandingPage.tsx
    │       └── ToolboxPanel.tsx
    ├── artist/                # Artist 主题
    │   ├── index.ts
    │   └── components/
    │       └── LandingPage.tsx
    └── concept/               # Concept Design 主题
        ├── index.ts
        └── components/
            └── LandingPage.tsx
```

### 新增主题

1. 在 `src/themes/` 下创建新的主题目录
2. 创建组件文件和 `index.ts` 入口
3. 在入口中使用 `registerTheme` 注册主题
4. 在 `src/index.ts` 中导入新主题的入口文件
5. 更新 `tsup.config.ts` 添加新的构建入口

示例：

```typescript
// src/themes/my-theme/index.ts
import { registerTheme } from '../../registry';
import { MyLandingPage } from './components/LandingPage';

registerTheme('my-theme', {
  'landing-page': MyLandingPage,
}, {
  name: 'My Theme',
  version: '1.0.0',
});

export { MyLandingPage };
```

### 注意事项

- **sideEffects**: `package.json` 中设置 `"sideEffects": true` 以防止 tree-shaking 移除主题注册代码
- **导入方式**: 在主项目中使用 `import * as uiThemes` 确保所有主题注册代码被执行
- **Vite 配置**: 在主项目的 `vite.config.ts` 中将此包添加到 `optimizeDeps.include`

## 发布

```bash
# 构建
npm run build

# 提交代码（dist 目录已提交到 Git）
git add -A
git commit -m "feat: update components"
git push
```

主项目通过 Git URL 引用，更新后重新安装即可获取最新版本：

```bash
npm install @inf-monkeys/monkeys-ui-themes@git+https://github.com/inf-monkeys/monkeys-ui-themes.git
```

## License

MIT
