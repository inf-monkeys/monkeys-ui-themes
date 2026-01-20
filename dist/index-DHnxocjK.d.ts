import { ComponentType } from 'react';

interface BaseComponentProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
}
type ComponentRegistry = Record<string, ComponentType<any>>;
interface ThemeConfig {
    id: string;
    name: string;
    description?: string;
    version?: string;
}
interface LandingPageProps extends BaseComponentProps {
    onNavigate?: (path: string) => void;
}
interface WindowProps extends BaseComponentProps {
    title?: string;
    visible?: boolean;
    onClose?: () => void;
}
interface ToolboxPanelProps extends BaseComponentProps {
    tools?: ToolDefinition[];
    onToolSelect?: (toolId: string) => void;
}
interface ToolDefinition {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    category?: string;
}
interface ScenePanelProps extends BaseComponentProps {
    sceneName: string;
    onBack?: () => void;
    onSubmit?: (data: any) => void;
}
interface CarouselItem {
    id: string | number;
    title: string;
    subtitle?: string;
    image?: string;
    link?: string;
}
interface QuickAction {
    id: string;
    title: string;
    icon?: string;
    onClick?: () => void;
}

/**
 * 注册主题组件
 * @param themeId 主题 ID (如 'bsd', 'artist', 'concept')
 * @param components 组件注册表
 * @param config 主题配置（可选）
 */
declare function registerTheme(themeId: string, components: ComponentRegistry, config?: Omit<ThemeConfig, 'id'>): void;
/**
 * 注册单个组件到指定主题
 * @param themeId 主题 ID
 * @param componentName 组件名称
 * @param component 组件
 */
declare function registerComponent(themeId: string, componentName: string, component: ComponentType<any>): void;
/**
 * 解析组件 - 优先使用主题特定组件，fallback 到 default
 * @param themeId 主题 ID
 * @param componentName 组件名称
 * @returns 组件或 null
 */
declare function resolveComponent<P = any>(themeId: string, componentName: string): ComponentType<P> | null;
/**
 * 检查主题是否有特定组件的定制版本
 * @param themeId 主题 ID
 * @param componentName 组件名称
 */
declare function hasCustomComponent(themeId: string, componentName: string): boolean;
/**
 * 获取主题的所有已注册组件名称
 * @param themeId 主题 ID
 */
declare function getRegisteredComponents(themeId: string): string[];
/**
 * 获取所有已注册的主题 ID
 */
declare function getRegisteredThemes(): string[];
/**
 * 获取主题配置
 * @param themeId 主题 ID
 */
declare function getThemeConfig(themeId: string): ThemeConfig | null;
/**
 * 清除所有注册（主要用于测试）
 */
declare function clearRegistry(): void;

export { type BaseComponentProps as B, type ComponentRegistry as C, type LandingPageProps as L, type QuickAction as Q, type ScenePanelProps as S, type ThemeConfig as T, type WindowProps as W, registerComponent as a, resolveComponent as b, getRegisteredThemes as c, getThemeConfig as d, clearRegistry as e, type ToolboxPanelProps as f, getRegisteredComponents as g, hasCustomComponent as h, type ToolDefinition as i, type CarouselItem as j, registerTheme as r };
