import { registerTheme } from '../../registry';
import { BsdLandingPage } from './components/LandingPage';
import { BsdToolboxPanel } from './components/ToolboxPanel';

// 注册 BSD 主题
registerTheme(
  'bsd',
  {
    'landing-page': BsdLandingPage,
    'toolbox-panel': BsdToolboxPanel,
    // TODO: 迁移更多 BSD 组件
    // 'inspiration-panel': InspirationGenerationPanel,
    // 'free-fission-panel': FreeFissionPanel,
    // 'style-fusion-panel': StyleFusionPanel,
    // ...
  },
  {
    name: 'BSD Theme',
    description: '波司登品牌定制主题 - 服装设计 AI 平台',
    version: '1.0.0',
  }
);

// 导出组件供直接使用
export { BsdLandingPage, BsdToolboxPanel };

// 导出配置常量
export const BSD_CONFIG = {
  primaryColor: 'rgba(40, 82, 173, 1)',
  borderRadius: 20,
  logoUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/bsd.ai.svg',
};
