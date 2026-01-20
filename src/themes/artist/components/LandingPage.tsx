'use client';

import React, { useState } from 'react';

// ==================== 类型定义 ====================

export interface QuickActionData {
  name: string;
  iconUrl: string;
  titleUrl: string;
  subtitleUrl: string;
}

export interface UserInfo {
  name?: string;
  photo?: string;
}

export interface ArtistLandingPageProps {
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

// ==================== 默认配置 ====================

export const ARTIST_CONFIG = {
  iconUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/icon.svg',
  titleUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/title%E8%89%BA%E6%9C%AF%E5%AE%B6.svg',
  sloganUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/icons/artist/home.svg',
  quickActionsBaseUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/artist/quick-actions',
};

export const ARTIST_DEFAULT_QUICK_ACTIONS: QuickActionData[] = [
  {
    name: '意图表达',
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/意图表达/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/意图表达/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/意图表达/subtitle.svg`,
  },
  {
    name: '一键生成',
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/一键生成/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/一键生成/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/一键生成/subtitle.svg`,
  },
  {
    name: '智能修改',
    iconUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/智能修改/icon.svg`,
    titleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/智能修改/title.svg`,
    subtitleUrl: `${ARTIST_CONFIG.quickActionsBaseUrl}/智能修改/subtitle.svg`,
  },
];

// ==================== 子组件 ====================

// 箭头图标
const ArrowUpRightIcon: React.FC<{ size?: number; color?: string }> = ({ size = 40, color = '#ffffff80' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2">
    <path d="M7 17L17 7" />
    <path d="M7 7h10v10" />
  </svg>
);

// 快速操作卡片
interface QuickActionCardProps {
  name: string;
  iconUrl: string;
  titleUrl: string;
  subtitleUrl: string;
  onClick?: () => void;
}

const QuickActionCard: React.FC<QuickActionCardProps> = ({ name, iconUrl, titleUrl, subtitleUrl, onClick }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'relative',
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        overflow: 'hidden',
        borderRadius: '1rem',
        padding: '26px 20px',
        cursor: 'pointer',
        background: isHovered
          ? 'linear-gradient(135deg, rgba(77, 143, 157, 0.3) 0%, rgba(65, 104, 135, 0.3) 100%)'
          : 'linear-gradient(135deg, rgba(0, 0, 0, 0.6) 0%, rgba(30, 30, 30, 0.6) 100%)',
        backdropFilter: 'blur(10px)',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        transition: 'all 0.3s ease',
        minHeight: '350px',
      }}
    >
      {/* 箭头 */}
      <div
        style={{
          position: 'absolute',
          right: '12px',
          top: '12px',
          width: '40px',
          height: '40px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          borderRadius: '50%',
          background: isHovered ? '#000' : 'transparent',
          transition: 'background 0.3s',
        }}
      >
        <ArrowUpRightIcon size={40} color="#ffffff80" />
      </div>

      {/* 图标 */}
      <img
        src={iconUrl}
        alt={name}
        style={{
          position: 'absolute',
          right: '20%',
          bottom: '30%',
          width: '120px',
          height: '120px',
          objectFit: 'contain',
          opacity: 0.8,
          filter: isHovered ? 'hue-rotate(180deg)' : 'none',
          transition: 'filter 0.3s',
        }}
      />

      {/* 文本 */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px', zIndex: 10 }}>
        <img
          src={titleUrl}
          alt={name}
          style={{
            height: '24px',
            objectFit: 'contain',
            objectPosition: 'left',
            filter: isHovered ? 'brightness(0.7)' : 'none',
            transition: 'filter 0.3s',
          }}
        />
        <img
          src={subtitleUrl}
          alt=""
          style={{
            height: '16px',
            objectFit: 'contain',
            objectPosition: 'left',
            filter: isHovered ? 'invert(1)' : 'none',
            transition: 'filter 0.3s',
          }}
        />
      </div>
    </div>
  );
};

// ==================== 主组件 ====================

export function ArtistLandingPage({
  isAuthenticated = false,
  user,
  quickActions = ARTIST_DEFAULT_QUICK_ACTIONS,
  onEnterWorkbench,
  onLogin,
  onQuickActionClick,
  className = '',
  style = {},
  backgroundComponent,
}: ArtistLandingPageProps) {
  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };

  const handleUserClick = () => {
    onEnterWorkbench?.();
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        ...style,
      }}
    >
      {/* 动态背景 */}
      {backgroundComponent || (
        <div
          style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            zIndex: 0,
            background: 'linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)',
          }}
        />
      )}

      {/* 顶部导航栏 */}
      <header
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          zIndex: 20,
          padding: '30px',
          boxSizing: 'border-box',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            paddingBottom: '30px',
            borderBottom: '1px solid rgba(255, 255, 255, 0.2)',
          }}
        >
          {/* Logo */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginLeft: '16px' }}>
            <img src={ARTIST_CONFIG.iconUrl} alt="logo" style={{ width: '46px', height: '46px' }} />
            <img src={ARTIST_CONFIG.titleUrl} alt="艺术家" style={{ height: '36px' }} />
          </div>

          {/* 用户头像/登录 */}
          <div style={{ marginRight: '16px' }}>
            {isAuthenticated && user ? (
              <div onClick={handleUserClick} style={{ cursor: 'pointer' }}>
                <img
                  src={user.photo || ''}
                  alt={user.name || ''}
                  title={user.name}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    objectFit: 'cover',
                  }}
                />
              </div>
            ) : (
              <button
                onClick={onLogin}
                style={{
                  padding: '8px 24px',
                  borderRadius: '20px',
                  border: '1px solid rgba(255, 255, 255, 0.3)',
                  background: 'rgba(255, 255, 255, 0.1)',
                  color: '#fff',
                  cursor: 'pointer',
                  fontSize: '14px',
                  transition: 'all 0.3s',
                }}
              >
                登录
              </button>
            )}
          </div>
        </div>
      </header>

      {/* 主内容区 */}
      <div
        style={{
          position: 'fixed',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          width: '100%',
          height: '100vh',
        }}
      >
        {/* Slogan 区域 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            paddingTop: '140px',
          }}
        >
          <img
            src={ARTIST_CONFIG.sloganUrl}
            alt="slogan"
            style={{ maxWidth: '80%', height: 'auto' }}
          />

          {/* 进入按钮 */}
          <div
            onClick={handleToWorkbench}
            style={{
              marginTop: '40px',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '16px 32px',
              background: 'rgba(0, 0, 0, 0.6)',
              borderRadius: '12px',
              cursor: 'pointer',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              transition: 'all 0.3s',
              color: '#fff',
              fontSize: '18px',
            }}
          >
            <svg width="24" height="23" viewBox="0 0 24 23" fill="#fff">
              <path d="M20.414621,7.7390924L20.145603,8.3532591C19.948801,8.802886,19.323929,8.802886,19.12702,8.3532591L18.858112,7.7390924C18.378654,6.6439967,17.515091,5.7721038,16.43749,5.2951164L15.60873,4.928297C15.160691,4.729948,15.160691,4.0809946,15.60873,3.8826451L16.39113,3.5363247C17.496439,3.0470688,18.375492,2.1429076,18.846657,1.0106162L19.122875,0.34691912C19.315418,-0.11563972,19.957314,-0.11563972,20.149748,0.34691912L20.425968,1.0106162C20.89724,2.1429076,21.776295,3.0470688,22.881603,3.5363247L23.663895,3.8826451C24.112041,4.0809946,24.112041,4.729948,23.663895,4.928297L22.835239,5.2951164C21.757639,5.7721038,20.894073,6.6439967,20.414621,7.7390924ZM10.909091,1.0857151C4.8841639,1.0857151,0,5.9466209,0,11.942858C0,13.791286,0.46411648,15.531795,1.2827022,17.055267L0,22.799999L5.7721863,21.523418C7.3029823,22.338139,9.0518188,22.799999,10.909091,22.799999C16.933966,22.799999,21.818182,17.939041,21.818182,11.942858C21.818182,11.505858,21.792221,11.074504,21.7416,10.650207L19.574947,10.906218C19.615528,11.24572,19.636366,11.591631,19.636366,11.942858C19.636366,16.73987,15.729055,20.628574,10.909091,20.628574C9.4532728,20.628574,8.0536156,20.275171,6.801033,19.608541L6.0880923,19.229088L2.8736296,19.940012L3.5879564,16.74085L3.2067165,16.031332C2.5368986,14.784716,2.1818182,13.391744,2.1818182,11.942858C2.1818182,7.1458678,6.089149,3.2571435,10.909091,3.2571435C11.663892,3.2571435,12.394691,3.3522527,13.09091,3.5305159L13.63451,1.4275739C12.762219,1.2042099,11.8488,1.0857151,10.909091,1.0857151ZM7.6363645,11.942858L5.4545455,11.942858C5.4545455,14.94095,7.8966331,17.371428,10.909091,17.371428C13.921529,17.371428,16.363638,14.94095,16.363638,11.942858L14.18182,11.942858C14.18182,13.741777,12.71662,15.200002,10.909091,15.200002C9.1015635,15.200002,7.6363645,13.741777,7.6363645,11.942858Z" />
            </svg>
            进入设计项目
            <div
              style={{
                width: '40px',
                height: '40px',
                borderRadius: '8px',
                background: '#000',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2">
                <path d="M5 12h14" />
                <path d="m12 5 7 7-7 7" />
              </svg>
            </div>
          </div>
        </div>

        {/* 快速操作区域 */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            justifyContent: 'space-between',
            gap: '30px',
            padding: '30px',
            marginTop: 'auto',
          }}
        >
          {quickActions.map((action, index) => (
            <QuickActionCard
              key={action.name}
              name={action.name}
              iconUrl={action.iconUrl}
              titleUrl={action.titleUrl}
              subtitleUrl={action.subtitleUrl}
              onClick={() => onQuickActionClick?.(action.name)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ArtistLandingPage;
