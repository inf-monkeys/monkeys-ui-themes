import { registerTheme } from '../../registry';
import { BsdLandingPage, BSD_CONFIG, BSD_DEFAULT_FEATURE_CARDS } from './components/LandingPage';
import { BsdToolboxPanel } from './components/ToolboxPanel';

// 注册 BSD 主题
registerTheme(
  'bsd',
  {
    'landing-page': BsdLandingPage,
    'toolbox-panel': BsdToolboxPanel,
  },
  {
    name: 'BSD Theme',
    description: '波司登品牌定制主题 - 服装设计 AI 平台',
    version: '1.0.0',
  }
);

// 导出组件供直接使用
export { BsdLandingPage, BsdToolboxPanel };

// 导出类型
export type { BsdLandingPageProps, FeatureCardData, UserInfo } from './components/LandingPage';

// 导出配置常量
export { BSD_CONFIG, BSD_DEFAULT_FEATURE_CARDS };
