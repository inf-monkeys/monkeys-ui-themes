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

export { DefaultLandingPage as D, type LandingPageProps as L };
