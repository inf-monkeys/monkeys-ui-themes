export { D as DefaultLandingPage, L as DefaultLandingPageProps } from '../../LandingPage-qjItLoG7.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

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

export { DefaultToolboxPanel };
