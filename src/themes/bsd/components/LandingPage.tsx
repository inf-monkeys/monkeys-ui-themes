'use client';

import React from 'react';

// ==================== 类型定义 ====================

export interface CarouselItem {
  id: number;
  title: string;
  subtitle: string;
  image: string;
}

export interface FeatureCardData {
  title: string;
  subtitle: string;
  imageUrl: string;
  isToolbox?: boolean;
}

export interface UserInfo {
  name?: string;
  photo?: string;
}

export interface BsdLandingPageProps {
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

// ==================== 默认配置 ====================

export const BSD_CONFIG = {
  logo: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/bsd.ai.svg',
  backgroundImage: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/background.svg',
  sloganImage: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E5%B1%B1%E5%B7%9D%E5%88%B0%E6%9E%81%E5%9C%B0.svg',
  primaryColor: 'rgba(40, 82, 173, 1)',
  borderRadius: 20,
  icons: {
    news: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E5%89%8D%E6%B2%BF%E8%B5%84%E8%AE%AF.svg',
    agent: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E8%AE%BE%E8%AE%A1%E6%99%BA%E8%83%BD%E4%BD%93.png',
    arrowDefault: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E7%AE%AD%E5%A4%B42.svg',
    arrowHover: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/%E7%AE%AD%E5%A4%B41.svg',
  },
};

export const BSD_DEFAULT_FEATURE_CARDS: FeatureCardData[] = [
  {
    title: '灵感生成',
    subtitle: '由提示词生成设计稿',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard1.png',
  },
  {
    title: '自由裂变',
    subtitle: '由参考图片和提示词生成设计稿',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard2.png',
  },
  {
    title: '风格融合',
    subtitle: '融合多类型参考图片生成设计图',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard3.png',
  },
  {
    title: '局部修改',
    subtitle: '划定选区，选取内设计修改',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard4.png',
  },
  {
    title: '线稿成衣',
    subtitle: '参考线稿图生成设计稿',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard5.png',
  },
  {
    title: '更多AI工具',
    subtitle: '访问你的设计工具箱',
    imageUrl: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/newhomecard6.png',
    isToolbox: true,
  },
];

// ==================== 子组件 ====================

interface FeatureCardProps {
  title: string;
  subtitle: string;
  imageUrl: string;
  onClick: () => void;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, subtitle, imageUrl, onClick }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      onClick={onClick}
      style={{
        flex: '1 1 0',
        minWidth: 'clamp(12rem, 15vw, 28rem)',
        aspectRatio: '273 / 366',
        borderRadius: 'clamp(15px, 1.5vw, 20px)',
        background: 'linear-gradient(168deg, rgba(23, 23, 23, 0) 35%, rgba(39, 77, 189, 0.715) 72%, #2D62FF 87%)',
        border: '1px solid rgba(18, 220, 255, 0.6)',
        backdropFilter: 'blur(32px)',
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        transition: 'transform 0.3s',
        transform: isHovered ? 'scale(1.05)' : 'scale(1)',
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ position: 'relative', height: '100%', width: '100%' }}>
        {/* 黑色遮罩层 - hover时消失 */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background: 'rgba(0, 0, 0, 0.3)',
            zIndex: 1,
            transition: 'all 0.3s',
            opacity: isHovered ? 0 : 1,
          }}
        />

        {/* 图片区域 - hover时更亮 */}
        <img
          src={imageUrl}
          alt={title}
          style={{
            position: 'absolute',
            mixBlendMode: 'screen',
            opacity: isHovered ? 0.9 : 0.6,
            width: '85%',
            height: '85%',
            objectFit: 'cover',
            objectPosition: 'left top',
            right: 0,
            bottom: 0,
            zIndex: 2,
            transition: 'all 0.3s',
          }}
        />

        {/* 文字区域 */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            bottom: 'clamp(1.5rem, 25%, 10rem)',
            padding: '0 clamp(0.5rem, 20%, 1rem)',
            zIndex: 3,
          }}
        >
          <h3
            style={{
              fontSize: 'clamp(1rem, 2vw, 1.5rem)',
              fontWeight: 600,
              textAlign: 'left',
              background: 'linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              margin: 0,
              marginBottom: 'clamp(0.25rem, 0.5vh, 0.5rem)',
            }}
          >
            {title}
          </h3>
          <p
            style={{
              fontSize: 'clamp(0.75rem, 1.2vw, 1rem)',
              textAlign: 'left',
              background: 'linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              opacity: 0.8,
              margin: 0,
            }}
          >
            {subtitle}
          </p>
        </div>
      </div>
    </div>
  );
};

// 用户图标 SVG
const UserIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

// Sparkles 图标 SVG
const SparklesIcon: React.FC<{ size?: number }> = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
    <path d="M5 3v4" />
    <path d="M19 17v4" />
    <path d="M3 5h4" />
    <path d="M17 19h4" />
  </svg>
);

// ==================== 主组件 ====================

export function BsdLandingPage({
  isAuthenticated = false,
  user,
  featureCards = BSD_DEFAULT_FEATURE_CARDS,
  onEnterWorkbench,
  onLogin,
  onCardClick,
  className = '',
  style = {},
  i18n = {},
}: BsdLandingPageProps) {
  const {
    enterWorkspace = '前沿资讯',
    designAgent = '设计智能体',
    tags = [],
  } = i18n;

  const handleToWorkbench = () => {
    if (isAuthenticated) {
      onEnterWorkbench?.();
    } else {
      onLogin?.();
    }
  };

  const handleCardClick = (title: string, isToolbox?: boolean) => {
    if (!isAuthenticated) {
      onLogin?.();
      return;
    }
    if (isToolbox) {
      // BSD 约定：landing 最后一张“更多AI工具”应进入工作台并打开 AI 工具箱
      // 优先使用 onCardClick 以便业务方设置当前页面；若未提供，则回退为进入工作台
      if (onCardClick) {
        onCardClick('AI工具箱');
        return;
      }
      onEnterWorkbench?.();
    } else {
      onCardClick?.(title);
    }
  };

  const buttonBaseStyle: React.CSSProperties = {
    height: 'clamp(4rem, 5vh, 5rem)',
    width: 'clamp(16rem, 18vw, 18.3rem)',
    padding: '0 clamp(1rem, 1.5vw, 1.5rem)',
    fontSize: 'clamp(1.25rem, 1.5vw, 1.5rem)',
    fontWeight: 500,
    borderRadius: 'clamp(12px, 1vw, 15px)',
    background: 'linear-gradient(0deg, rgba(40, 82,173, 0.08), rgba(40, 82, 173,0.08)), #171717',
    boxShadow: 'inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25)',
    border: '1.5px solid rgba(255, 255, 255, 0.1)',
    cursor: 'pointer',
    transition: 'all 0.2s',
  };

  const handleButtonHover = (e: React.MouseEvent<HTMLButtonElement>, isHover: boolean) => {
    if (isHover) {
      e.currentTarget.style.background = '#03072D';
      e.currentTarget.style.border = '1.5px solid rgba(144, 166, 231, 0.8)';
      e.currentTarget.style.boxShadow = 'inset 11px -12px 13.7px 0px rgba(144, 166, 231,0.5), 0 0 20px rgba(144, 166, 231, 0.6)';
      e.currentTarget.style.transform = 'scale(1.05)';
    } else {
      e.currentTarget.style.background = 'linear-gradient(0deg, rgba(40, 82,173, 0.08), rgba(40, 82, 173,0.08)), #171717';
      e.currentTarget.style.border = '1.5px solid rgba(255, 255, 255, 0.1)';
      e.currentTarget.style.boxShadow = 'inset 4px 4px 8.7px 0px rgba(255, 255, 255, 0.25)';
      e.currentTarget.style.transform = 'scale(1)';
    }
  };

  return (
    <div
      className={className}
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        overflow: 'hidden',
        backgroundColor: '#000',
        ...style,
      }}
    >
      {/* 顶部导航栏 */}
      <header
        style={{
          position: 'relative',
          zIndex: 30,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          borderBottom: '1px solid rgba(255, 255, 255, 0.1)',
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          backdropFilter: 'blur(4px)',
          padding: 'clamp(1rem, 2vh, 2.5rem) clamp(1rem, 2vw, 4rem)',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img src={BSD_CONFIG.logo} alt="BSD AI" style={{ height: 'clamp(4rem, 6vh, 6.25rem)', width: 'auto' }} />
        </div>

        {/* 用户头像 */}
        {isAuthenticated && user ? (
          <div
            style={{
              width: 'clamp(2.5rem, 4vw, 3rem)',
              height: 'clamp(2.5rem, 4vw, 3rem)',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #60a5fa, #a855f7)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'hidden',
            }}
          >
            {user.photo ? (
              <img src={user.photo} alt={user.name || ''} style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%' }} />
            ) : (
              <UserIcon size={20} />
            )}
          </div>
        ) : (
          <div
            style={{
              width: 'clamp(2.5rem, 4vw, 3rem)',
              height: 'clamp(2.5rem, 4vw, 3rem)',
              borderRadius: '50%',
              background: 'linear-gradient(to bottom right, #4ade80, #3b82f6)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <SparklesIcon size={20} />
          </div>
        )}
      </header>

      {/* 页面背景 */}
      <div
        style={{
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
          top: 'clamp(4.5rem, 8vh, 7.5rem)',
          backgroundImage: `url('${BSD_CONFIG.backgroundImage}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center top',
          backgroundRepeat: 'no-repeat',
        }}
      />

      {/* 主要内容区 */}
      <div
        style={{
          position: 'relative',
          zIndex: 10,
          display: 'flex',
          minHeight: 'calc(100vh - 4.5rem)',
          flexDirection: 'column',
          alignItems: 'center',
          padding: '0 1rem 2rem',
        }}
      >
        {/* 标题和按钮区域 */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            marginTop: 'clamp(2rem, 4vh, 3.75rem)',
          }}
        >
          {/* Slogan 图片 */}
          <div style={{ marginBottom: 'clamp(1.5rem, 3vh, 2rem)' }}>
            <img
              src={BSD_CONFIG.sloganImage}
              alt="从山川到极地的风格指南"
              style={{ height: 'auto', width: '100%', maxWidth: 'clamp(30rem, 60vw, 80rem)', padding: '0 1rem' }}
            />
          </div>

          {/* 标签区域 */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
              marginBottom: 'clamp(2rem, 3vh, 3rem)',
              gap: 'clamp(0.75rem, 1.5vw, 1.5rem)',
            }}
          >
            {tags.map((tag, index) => (
              <React.Fragment key={tag}>
                <span style={{ fontSize: 'clamp(1rem, 1.5vw, 1.25rem)' }}>{tag}</span>
                {index < tags.length - 1 && <span style={{ color: 'rgba(255,255,255,0.6)' }}>|</span>}
              </React.Fragment>
            ))}
          </div>

          {/* 按钮组 */}
          <div style={{ display: 'flex', flexDirection: 'row', gap: 'clamp(1.5rem, 3vw, 5rem)', flexWrap: 'wrap', justifyContent: 'center' }}>
            <button
              onClick={handleToWorkbench}
              style={buttonBaseStyle}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 0.8vw, 0.8rem)' }}>
                  <img src={BSD_CONFIG.icons.news} alt="" style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} />
                  {enterWorkspace}
                </span>
                <img src={BSD_CONFIG.icons.arrowDefault} alt="" style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} />
              </span>
            </button>

            <button
              onClick={handleToWorkbench}
              style={buttonBaseStyle}
              onMouseEnter={(e) => handleButtonHover(e, true)}
              onMouseLeave={(e) => handleButtonHover(e, false)}
            >
              <span
                style={{
                  display: 'flex',
                  width: '100%',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  background: 'linear-gradient(270deg, #9AB3FF 0%, rgba(180, 169, 245, 0) 100%), #FFFFFF',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                <span style={{ display: 'flex', alignItems: 'center', gap: 'clamp(0.5rem, 0.8vw, 0.8rem)' }}>
                  <img src={BSD_CONFIG.icons.agent} alt="" style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} />
                  {designAgent}
                </span>
                <img src={BSD_CONFIG.icons.arrowDefault} alt="" style={{ width: 'clamp(1rem, 1.5vw, 1.5rem)', height: 'clamp(1rem, 1.5vw, 1.5rem)' }} />
              </span>
            </button>
          </div>

          {/* 功能卡片区域 */}
          <div
            style={{
              display: 'flex',
              width: '100%',
              alignItems: 'flex-end',
              justifyContent: 'center',
              padding: '0 1rem',
              marginTop: 'clamp(4rem, 8vh, 8rem)',
              gap: 'clamp(0.5rem, 0.8vw, 1rem)',
              maxWidth: 'clamp(60rem, 90vw, 110rem)',
            }}
          >
            {featureCards.map((card) => (
              <FeatureCard
                key={card.title}
                title={card.title}
                subtitle={card.subtitle}
                imageUrl={card.imageUrl}
                onClick={() => handleCardClick(card.title, card.isToolbox)}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BsdLandingPage;
