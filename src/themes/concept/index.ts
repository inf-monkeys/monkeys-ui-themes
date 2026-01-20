import { registerTheme } from '../../registry';
import { ConceptDesignLandingPage, CONCEPT_CONFIG, CONCEPT_DEFAULT_QUICK_ACTIONS } from './components/LandingPage';

// 注册 Concept Design 主题
registerTheme(
  'concept',
  {
    'landing-page': ConceptDesignLandingPage,
  },
  {
    name: 'Concept Design Theme',
    description: '概念设计主题 - 设计工作台',
    version: '1.0.0',
  }
);

// 导出组件
export { ConceptDesignLandingPage };

// 导出类型
export type { ConceptDesignLandingPageProps, QuickActionData } from './components/LandingPage';

// 导出配置
export { CONCEPT_CONFIG, CONCEPT_DEFAULT_QUICK_ACTIONS };
