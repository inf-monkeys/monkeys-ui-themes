import React from 'react';

export interface LandingPageProps {
  className?: string;
  style?: React.CSSProperties;
  children?: React.ReactNode;
  onNavigate?: (path: string) => void;
}

/**
 * Default Landing Page - 默认主题的 Landing Page
 */
export function DefaultLandingPage({ className, style, children }: LandingPageProps) {
  return (
    <div
      className={className}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        ...style,
      }}
    >
      {children || <span>Welcome to Monkeys</span>}
    </div>
  );
}

export default DefaultLandingPage;
