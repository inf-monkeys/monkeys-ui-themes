import * as react_jsx_runtime from 'react/jsx-runtime';
import React from 'react';

interface QuickActionData {
    name: string;
    iconUrl: string;
    titleUrl: string;
    subtitleUrl: string;
}
interface UserInfo {
    name?: string;
    photo?: string;
}
interface ArtistLandingPageProps {
    /** 是否已认证 */
    isAuthenticated?: boolean;
    /** 用户信息 */
    user?: UserInfo | null;
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
    /** 动态背景组件（可选，由主项目注入） */
    backgroundComponent?: React.ReactNode;
}
declare const ARTIST_CONFIG: {
    iconUrl: string;
    titleUrl: string;
    sloganUrl: string;
    quickActionsBaseUrl: string;
};
declare const ARTIST_DEFAULT_QUICK_ACTIONS: QuickActionData[];
declare function ArtistLandingPage({ isAuthenticated, user, quickActions, onEnterWorkbench, onLogin, onQuickActionClick, className, style, backgroundComponent, }: ArtistLandingPageProps): react_jsx_runtime.JSX.Element;

export { ARTIST_CONFIG, ARTIST_DEFAULT_QUICK_ACTIONS, ArtistLandingPage, type ArtistLandingPageProps, type QuickActionData };
