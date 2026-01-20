import { registerTheme } from '../../registry';
import { ArtistLandingPage, ARTIST_CONFIG, ARTIST_DEFAULT_QUICK_ACTIONS } from './components/LandingPage';

// 注册 Artist 主题
registerTheme(
  'artist',
  {
    'landing-page': ArtistLandingPage,
  },
  {
    name: 'Artist Theme',
    description: 'Artist Theme Components for Monkeys UI',
    version: '1.0.0',
  }
);

// 导出组件
export { ArtistLandingPage };

// 导出类型
export type { ArtistLandingPageProps, QuickActionData } from './components/LandingPage';

// 导出配置
export { ARTIST_CONFIG, ARTIST_DEFAULT_QUICK_ACTIONS };
