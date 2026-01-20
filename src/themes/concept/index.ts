import { registerTheme } from '../../registry';

// Concept Design 主题 - 概念设计
// TODO: 从 ui/src/components/landing/concept-design/ 迁移组件

registerTheme(
  'concept',
  {
    // 'landing-page': ConceptDesignLandingPage,
    // 'quick-action': QuickAction,
  },
  {
    name: 'Concept Design Theme',
    description: '概念设计主题 - 设计工作台',
  }
);

// 导出配置
export const CONCEPT_CONFIG = {
  brandName: '设计工作台',
};
