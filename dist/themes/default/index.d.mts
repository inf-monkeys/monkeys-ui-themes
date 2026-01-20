import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface LandingPageProps {
    className?: string;
    style?: React.CSSProperties;
    children?: React.ReactNode;
    onNavigate?: (path: string) => void;
}
/**
 * Default Landing Page - 默认主题的 Landing Page
 */
declare function DefaultLandingPage({ className, style, children }: LandingPageProps): react_jsx_runtime.JSX.Element;

interface ToolDefinition {
    id: string;
    title: string;
    description?: string;
}
interface ToolboxPanelProps {
    className?: string;
    style?: React.CSSProperties;
    tools?: ToolDefinition[];
    onToolSelect?: (toolId: string) => void;
}
/**
 * Default Toolbox Panel - 默认主题的工具箱面板
 */
declare function DefaultToolboxPanel({ className, style, tools, onToolSelect, }: ToolboxPanelProps): react_jsx_runtime.JSX.Element;

export { DefaultLandingPage, DefaultToolboxPanel };
