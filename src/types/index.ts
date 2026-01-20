import type { ComponentType } from 'react';

// 组件 Props 类型定义
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
}

// 组件注册表类型
export type ComponentRegistry = Record<string, ComponentType<any>>;

// 主题配置
export interface ThemeConfig {
  id: string;
  name: string;
  description?: string;
  version?: string;
}

// Landing Page 组件 Props
export interface LandingPageProps extends BaseComponentProps {
  onNavigate?: (path: string) => void;
}

// Window 组件 Props
export interface WindowProps extends BaseComponentProps {
  title?: string;
  visible?: boolean;
  onClose?: () => void;
}

// Toolbox Panel 组件 Props
export interface ToolboxPanelProps extends BaseComponentProps {
  tools?: ToolDefinition[];
  onToolSelect?: (toolId: string) => void;
}

// 工具定义
export interface ToolDefinition {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  category?: string;
}

// Scene Panel 组件 Props
export interface ScenePanelProps extends BaseComponentProps {
  sceneName: string;
  onBack?: () => void;
  onSubmit?: (data: any) => void;
}

// 轮播数据
export interface CarouselItem {
  id: string | number;
  title: string;
  subtitle?: string;
  image?: string;
  link?: string;
}

// 快速操作
export interface QuickAction {
  id: string;
  title: string;
  icon?: string;
  onClick?: () => void;
}
