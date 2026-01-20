import { registerTheme } from '../../registry';

// Artist 主题 - 艺术家工作室
// TODO: 从 ui/src/components/landing/artist/ 迁移组件

registerTheme(
  'artist',
  {
    // 'landing-page': ArtistLandingPage,
    // 'head-bar': HeadBar,
    // 'quick-action': QuickAction,
    // 'dynamic-background': DynamicBackground,
  },
  {
    name: 'Artist Theme',
    description: '艺术家工作室主题',
  }
);

// 导出配置
export const ARTIST_CONFIG = {
  brandName: '艺术家工作室',
};
