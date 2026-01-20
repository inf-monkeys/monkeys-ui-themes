'use client';

import React from 'react';
import { resolveComponent } from '../../registry';

export interface DynamicComponentProps {
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
export function DynamicComponent({
  themeId,
  name,
  fallback = null,
  ...props
}: DynamicComponentProps): React.ReactElement | null {
  const Component = resolveComponent(themeId, name);

  if (!Component) {
    if (process.env.NODE_ENV === 'development') {
      console.warn(
        `[monkeys-ui-themes] Component "${name}" not found for theme "${themeId}"`
      );
    }
    return fallback as React.ReactElement | null;
  }

  return <Component {...props} />;
}

export default DynamicComponent;
