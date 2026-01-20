// @monkeys/ui-themes - Monkeys UI Theme Components Library
// =========================================================

// 导出注册表核心功能
export {
  registerTheme,
  registerComponent,
  resolveComponent,
  hasCustomComponent,
  getRegisteredComponents,
  getRegisteredThemes,
  getThemeConfig,
  clearRegistry,
} from './registry';

// 导出动态组件
export { DynamicComponent } from './components/DynamicComponent';
export type { DynamicComponentProps } from './components/DynamicComponent';

// 导出类型
export type {
  BaseComponentProps,
  ComponentRegistry,
  ThemeConfig,
  LandingPageProps,
  WindowProps,
  ToolboxPanelProps,
  ToolDefinition,
  ScenePanelProps,
  CarouselItem,
  QuickAction,
} from './types';

// 自动注册所有内置主题
import './themes/default';
import './themes/bsd';
import './themes/artist';
import './themes/concept';

// 导出主题组件供直接使用
export { BsdLandingPage, BsdToolboxPanel, BSD_CONFIG, BSD_DEFAULT_FEATURE_CARDS } from './themes/bsd';
export type { BsdLandingPageProps, FeatureCardData, UserInfo } from './themes/bsd';

export { ArtistLandingPage, ARTIST_CONFIG, ARTIST_DEFAULT_QUICK_ACTIONS } from './themes/artist';
export type { ArtistLandingPageProps, QuickActionData } from './themes/artist';

export { ConceptDesignLandingPage, CONCEPT_CONFIG, CONCEPT_DEFAULT_QUICK_ACTIONS } from './themes/concept';
export type { ConceptDesignLandingPageProps } from './themes/concept';

export { DefaultLandingPage } from './themes/default';
export type { DefaultLandingPageProps } from './themes/default';
