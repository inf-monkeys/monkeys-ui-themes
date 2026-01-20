import type { ComponentType } from 'react';
import type { ComponentRegistry, ThemeConfig } from '../types';

// 存储所有主题的组件注册表
const registries: Record<string, ComponentRegistry> = {};

// 存储主题配置
const themeConfigs: Record<string, ThemeConfig> = {};

/**
 * 注册主题组件
 * @param themeId 主题 ID (如 'bsd', 'artist', 'concept')
 * @param components 组件注册表
 * @param config 主题配置（可选）
 */
export function registerTheme(
  themeId: string,
  components: ComponentRegistry,
  config?: Omit<ThemeConfig, 'id'>
): void {
  registries[themeId] = { ...registries[themeId], ...components };

  if (config) {
    themeConfigs[themeId] = { id: themeId, ...config };
  }
}

/**
 * 注册单个组件到指定主题
 * @param themeId 主题 ID
 * @param componentName 组件名称
 * @param component 组件
 */
export function registerComponent(
  themeId: string,
  componentName: string,
  component: ComponentType<any>
): void {
  if (!registries[themeId]) {
    registries[themeId] = {};
  }
  registries[themeId][componentName] = component;
}

/**
 * 解析组件 - 优先使用主题特定组件，fallback 到 default
 * @param themeId 主题 ID
 * @param componentName 组件名称
 * @returns 组件或 null
 */
export function resolveComponent<P = any>(
  themeId: string,
  componentName: string
): ComponentType<P> | null {
  // 1. 先尝试获取主题特定组件
  const themeComponent = registries[themeId]?.[componentName];
  if (themeComponent) {
    return themeComponent as ComponentType<P>;
  }

  // 2. Fallback 到 default 主题
  const defaultComponent = registries['default']?.[componentName];
  if (defaultComponent) {
    return defaultComponent as ComponentType<P>;
  }

  // 3. 未找到
  return null;
}

/**
 * 检查主题是否有特定组件的定制版本
 * @param themeId 主题 ID
 * @param componentName 组件名称
 */
export function hasCustomComponent(themeId: string, componentName: string): boolean {
  return !!registries[themeId]?.[componentName];
}

/**
 * 获取主题的所有已注册组件名称
 * @param themeId 主题 ID
 */
export function getRegisteredComponents(themeId: string): string[] {
  return Object.keys(registries[themeId] || {});
}

/**
 * 获取所有已注册的主题 ID
 */
export function getRegisteredThemes(): string[] {
  return Object.keys(registries);
}

/**
 * 获取主题配置
 * @param themeId 主题 ID
 */
export function getThemeConfig(themeId: string): ThemeConfig | null {
  return themeConfigs[themeId] || null;
}

/**
 * 清除所有注册（主要用于测试）
 */
export function clearRegistry(): void {
  Object.keys(registries).forEach((key) => delete registries[key]);
  Object.keys(themeConfigs).forEach((key) => delete themeConfigs[key]);
}
