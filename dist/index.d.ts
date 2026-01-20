export { B as BaseComponentProps, j as CarouselItem, C as ComponentRegistry, L as LandingPageProps, Q as QuickAction, S as ScenePanelProps, T as ThemeConfig, i as ToolDefinition, f as ToolboxPanelProps, W as WindowProps, e as clearRegistry, g as getRegisteredComponents, c as getRegisteredThemes, d as getThemeConfig, h as hasCustomComponent, a as registerComponent, r as registerTheme, b as resolveComponent } from './index-DHnxocjK.js';
import React from 'react';

interface DynamicComponentProps {
    /** 当前主题 ID */
    themeId: string;
    /** 组件名称 */
    name: string;
    /** 组件未找到时显示的内容 */
    fallback?: React.ReactNode;
    /** 传递给目标组件的 props */
    [key: string]: any;
}
/**
 * 动态组件 - 根据主题 ID 自动解析并渲染对应组件
 *
 * @example
 * ```tsx
 * <DynamicComponent
 *   themeId="bsd"
 *   name="landing-page"
 *   onNavigate={handleNavigate}
 * />
 * ```
 */
declare function DynamicComponent({ themeId, name, fallback, ...props }: DynamicComponentProps): React.ReactElement | null;

export { DynamicComponent, type DynamicComponentProps };
