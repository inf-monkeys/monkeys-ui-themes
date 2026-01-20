# monkeys-ui-themes

Monkeys UI 主题组件库 - 用于 OEM 客户定制化组件管理。

## 安装

```bash
# npm
npm install @inf-monkeys/ui-themes

# yarn
yarn add @inf-monkeys/ui-themes

# 或通过 Git URL
yarn add git+https://github.com/inf-monkeys/monkeys-ui-themes.git
```

## 使用

### 基本使用

```tsx
import { DynamicComponent } from '@inf-monkeys/ui-themes';

function App() {
  const themeId = 'bsd'; // 从配置或环境变量获取

  return (
    <DynamicComponent
      themeId={themeId}
      name="landing-page"
      onNavigate={(path) => router.push(path)}
    />
  );
}
```

### 手动解析组件

```tsx
import { resolveComponent } from '@inf-monkeys/ui-themes';

const LandingPage = resolveComponent('bsd', 'landing-page');

if (LandingPage) {
  return <LandingPage />;
}
```

### 注册自定义主题

```tsx
import { registerTheme } from '@inf-monkeys/ui-themes';
import { MyCustomLandingPage } from './MyCustomLandingPage';

registerTheme('my-theme', {
  'landing-page': MyCustomLandingPage,
}, {
  name: 'My Custom Theme',
  description: 'A custom theme for my application',
});
```

## 内置主题

| 主题 ID | 名称 | 描述 |
|---------|------|------|
| `default` | Default Theme | 默认主题，提供基础组件 |
| `bsd` | BSD Theme | 波司登品牌定制主题 |
| `artist` | Artist Theme | 艺术家工作室主题 |
| `concept` | Concept Design Theme | 概念设计主题 |

## 组件列表

| 组件名 | 描述 | 支持主题 |
|--------|------|----------|
| `landing-page` | 落地页 | default, bsd, artist, concept |
| `toolbox-panel` | 工具箱面板 | default, bsd |
| `window` | 窗口组件 | (计划中) |

## 开发

```bash
# 安装依赖
yarn install

# 开发模式（监听变化）
yarn dev

# 构建
yarn build

# 类型检查
yarn typecheck
```

## 目录结构

```
src/
├── index.ts              # 主入口
├── registry/             # 组件注册表核心
│   └── index.ts
├── components/           # 通用组件
│   └── DynamicComponent.tsx
├── types/                # 类型定义
│   └── index.ts
└── themes/               # 各主题组件
    ├── default/
    ├── bsd/
    ├── artist/
    └── concept/
```

## License

MIT
