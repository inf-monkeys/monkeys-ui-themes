'use client';

import React from 'react';

// ==================== 类型定义 ====================

export interface QuickActionData {
  name: string;
  cardUrl: string;
}

export interface ConceptDesignLandingPageProps {
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

// ==================== 默认配置 ====================

export const CONCEPT_CONFIG = {
  backgroundUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/bg.jpg',
  titleUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/title.svg',
  titleTailUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/title_tail.svg',
  othersUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/others.svg',
  entryActionsBaseUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/entry-actions',
  quickActionsBaseUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/concept-design/quick-actions',
};

export const CONCEPT_DEFAULT_QUICK_ACTIONS: QuickActionData[] = [
  {
    name: '设计工作台',
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/设计工作台/card.svg`,
  },
  {
    name: '创新方法识别',
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/创新方法识别/card.svg`,
  },
  {
    name: '灵感激发',
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/灵感激发/card.svg`,
  },
  {
    name: '逻辑关系发现',
    cardUrl: `${CONCEPT_CONFIG.quickActionsBaseUrl}/逻辑关系发现/card.svg`,
  },
];

// ==================== 子组件 ====================

interface QuickActionCardProps {
  cardUrl: string;
  onClick?: () => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ cardUrl, onClick }) => {
  return (
    <div
      onClick={onClick}
      style={{
        cursor: 'pointer',
        transition: 'transform 0.3s, opacity 0.3s',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'scale(1.02)';
        e.currentTarget.style.opacity = '0.9';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'scale(1)';
        e.currentTarget.style.opacity = '1';
      }}
    >
      <img src={cardUrl} alt="" style={{ height: 'auto', width: '100%' }} />
    </div>
  );
};

// ==================== 主组件 ====================

export function ConceptDesignLandingPage({
  isAuthenticated = false,
  quickActions = CONCEPT_DEFAULT_QUICK_ACTIONS,
  onEnterWorkbench,
  onLogin,
  onQuickActionClick,
  className = '',
  style = {},
}: ConceptDesignLandingPageProps) {
  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };

  return (
    <div
      className={className}
      style={{
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        height: '100%',
        minHeight: '100vh',
        padding: '40px 80px',
        backgroundImage: `url('${CONCEPT_CONFIG.backgroundUrl}')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top center',
        backgroundSize: 'cover',
        position: 'relative',
        ...style,
      }}
    >
      {/* 标题区域 */}
      <div
        style={{
          marginTop: '100px',
          display: 'flex',
          height: '180px',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <img src={CONCEPT_CONFIG.titleUrl} alt="" style={{ height: '100%' }} />
        <img src={CONCEPT_CONFIG.titleTailUrl} alt="" style={{ height: '100%' }} />
      </div>

      {/* 弹性占位 */}
      <div style={{ flex: 1 }} />

      {/* 入口操作区域 */}
      <div
        style={{
          marginBottom: '60px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <div style={{ display: 'flex', gap: '18px' }}>
          <div
            onClick={handleToWorkbench}
            style={{
              cursor: 'pointer',
              background: 'linear-gradient(to bottom, #444444, #000000)',
              padding: '24px 20px',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ display: 'flex', height: '26px', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <img
                src={`${CONCEPT_CONFIG.entryActionsBaseUrl}/%E4%BB%8E%E8%AE%BE%E8%AE%A1%E6%A8%A1%E6%9D%BF%E5%87%BA%E5%8F%91.svg`}
                alt="从设计模板出发"
              />
              <img src={`${CONCEPT_CONFIG.entryActionsBaseUrl}/plus.svg`} alt="+" />
            </div>
          </div>

          <div
            onClick={handleToWorkbench}
            style={{
              cursor: 'pointer',
              background: '#ffffff',
              padding: '24px 20px',
              transition: 'transform 0.3s',
            }}
            onMouseEnter={(e) => { e.currentTarget.style.transform = 'scale(1.02)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.transform = 'scale(1)'; }}
          >
            <div style={{ display: 'flex', height: '26px', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
              <img
                src={`${CONCEPT_CONFIG.entryActionsBaseUrl}/%E8%AE%BE%E8%AE%A1%E8%B5%84%E4%BA%A7.svg`}
                alt="设计资产"
              />
              <img src={`${CONCEPT_CONFIG.entryActionsBaseUrl}/right.svg`} alt="→" />
            </div>
          </div>
        </div>
      </div>

      {/* 快速操作区域 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
        <img src={CONCEPT_CONFIG.othersUrl} alt="" style={{ width: '96px' }} />

        <div style={{ display: 'flex', gap: '22px' }}>
          {quickActions.map((action) => (
            <QuickActionCard
              key={action.name}
              cardUrl={action.cardUrl}
              onClick={() => onQuickActionClick?.(action.name)}
            />
          ))}
        </div>
      </div>

      {/* 装饰线条 */}
      <div
        style={{
          position: 'fixed',
          bottom: '390px',
          left: 0,
          height: '1.5px',
          width: '100%',
          background: '#ACACAC',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: 0,
          left: '80px',
          height: '492px',
          width: '1.5px',
          background: '#ACACAC',
          boxShadow: '2px 0 4px rgba(0,0,0,0.1)',
          zIndex: 1,
        }}
      />
    </div>
  );
}

export default ConceptDesignLandingPage;
