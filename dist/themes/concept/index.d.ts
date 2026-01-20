import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface QuickActionData {
    name: string;
    cardUrl: string;
}
interface ConceptDesignLandingPageProps {
    /** 是否已认证 */
    isAuthenticated?: boolean;
    /** 快速操作数据（可覆盖默认值） */
    quickActions?: QuickActionData[];
    /** 点击进入工作台 */
    onEnterWorkbench?: () => void;
    /** 点击登录 */
    onLogin?: () => void;
    /** 点击快速操作 */
    onQuickActionClick?: (name: string) => void;
    /** 自定义类名 */
    className?: string;
    /** 自定义样式 */
    style?: React.CSSProperties;
}
declare const CONCEPT_CONFIG: {
    backgroundUrl: string;
    titleUrl: string;
    titleTailUrl: string;
    othersUrl: string;
    entryActionsBaseUrl: string;
    quickActionsBaseUrl: string;
};
declare const CONCEPT_DEFAULT_QUICK_ACTIONS: QuickActionData[];
declare function ConceptDesignLandingPage({ isAuthenticated, quickActions, onEnterWorkbench, onLogin, onQuickActionClick, className, style, }: ConceptDesignLandingPageProps): react_jsx_runtime.JSX.Element;

export { CONCEPT_CONFIG, CONCEPT_DEFAULT_QUICK_ACTIONS, ConceptDesignLandingPage, type ConceptDesignLandingPageProps, type QuickActionData };
