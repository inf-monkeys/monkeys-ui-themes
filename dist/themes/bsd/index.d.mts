import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface FeatureCardData {
    title: string;
    subtitle: string;
    imageUrl: string;
    isToolbox?: boolean;
}
interface UserInfo {
    name?: string;
    photo?: string;
}
interface BsdLandingPageProps {
    /** 是否已认证 */
    isAuthenticated?: boolean;
    /** 用户信息 */
    user?: UserInfo | null;
    /** 功能卡片数据（可覆盖默认值） */
    featureCards?: FeatureCardData[];
    /** 点击进入工作台 */
    onEnterWorkbench?: () => void;
    /** 点击登录 */
    onLogin?: () => void;
    /** 点击卡片 */
    onCardClick?: (title: string) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
    /** 国际化文本 */
    i18n?: {
        enterWorkspace?: string;
        designAgent?: string;
        tags?: string[];
    };
}
declare const BSD_CONFIG: {
    logo: string;
    backgroundImage: string;
    sloganImage: string;
    primaryColor: string;
    borderRadius: number;
    icons: {
        news: string;
        agent: string;
        arrowDefault: string;
        arrowHover: string;
    };
};
declare const BSD_DEFAULT_FEATURE_CARDS: FeatureCardData[];
declare function BsdLandingPage({ isAuthenticated, user, featureCards, onEnterWorkbench, onLogin, onCardClick, className, style, i18n, }: BsdLandingPageProps): react_jsx_runtime.JSX.Element;

interface ToolDefinition {
    id: string;
    title: string;
    description?: string;
    icon?: string;
    category?: string;
}
interface ToolboxPanelProps {
    className?: string;
    style?: React.CSSProperties;
    tools?: ToolDefinition[];
    onToolSelect?: (toolId: string) => void;
}
/**
 * BSD Toolbox Panel - 波司登品牌定制工具箱面板
 */
declare function BsdToolboxPanel({ className, style, tools, onToolSelect, }: ToolboxPanelProps): react_jsx_runtime.JSX.Element;

export { BSD_CONFIG, BSD_DEFAULT_FEATURE_CARDS, BsdLandingPage, type BsdLandingPageProps, BsdToolboxPanel, type FeatureCardData, type UserInfo };
