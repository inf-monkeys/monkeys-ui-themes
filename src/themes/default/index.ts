import { registerTheme } from '../../registry';
import { DefaultLandingPage } from './components/LandingPage';
import { DefaultToolboxPanel } from './components/ToolboxPanel';

// 注册 default 主题
registerTheme(
  'default',
  {
    'landing-page': DefaultLandingPage,
    'toolbox-panel': DefaultToolboxPanel,
  },
  {
    name: 'Default Theme',
    description: 'Monkeys default theme with basic components',
  }
);

// 导出组件供直接使用
export { DefaultLandingPage, DefaultToolboxPanel };

// 导出类型
export type { LandingPageProps as DefaultLandingPageProps } from './components/LandingPage';
