import React from 'react';
import type { LandingPageProps, CarouselItem } from '../../types';

// BSD 轮播数据 - 从原 bsd.tsx 迁移
const BSD_CAROUSEL_DATA: CarouselItem[] = [
  { id: 1, title: '设计智能体', subtitle: '核心诉求高度解析' },
  { id: 2, title: '灵感生成', subtitle: '创意灵感快速生成' },
  { id: 3, title: '自由裂变', subtitle: '设计方案多样裂变' },
  { id: 4, title: '风格融合', subtitle: '多风格智能融合' },
  { id: 5, title: '线稿成衣', subtitle: '线稿快速转化成衣' },
  { id: 6, title: '智能穿搭', subtitle: '智能搭配推荐' },
];

// BSD 品牌配置
const BSD_CONFIG = {
  logo: 'https://inf-monkeys.oss-cn-beijing.aliyuncs.com/monkeys-assets/bsd/bsd.ai.svg',
  primaryColor: 'rgba(40, 82, 173, 1)',
  backgroundColor: 'linear-gradient(0deg, rgba(40, 82, 173, 0.08), rgba(40, 82, 173, 0.08)), #171717',
};

/**
 * BSD Landing Page - 波司登品牌定制 Landing Page
 */
export function BsdLandingPage({ className, style, onNavigate }: LandingPageProps) {
  return (
    <div
      className={className}
      style={{
        minHeight: '100vh',
        background: BSD_CONFIG.backgroundColor,
        color: '#fff',
        ...style,
      }}
    >
      {/* Header */}
      <header style={{ padding: '20px 40px', display: 'flex', alignItems: 'center' }}>
        <img src={BSD_CONFIG.logo} alt="BSD Logo" style={{ height: 32 }} />
      </header>

      {/* Main Content */}
      <main style={{ padding: '40px', maxWidth: 1200, margin: '0 auto' }}>
        <h1 style={{ fontSize: 48, marginBottom: 24 }}>BSD AI 设计平台</h1>
        <p style={{ fontSize: 18, opacity: 0.8, marginBottom: 48 }}>
          智能设计，创意无限
        </p>

        {/* Carousel Placeholder */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 16,
          }}
        >
          {BSD_CAROUSEL_DATA.map((item) => (
            <div
              key={item.id}
              style={{
                padding: 24,
                borderRadius: 12,
                background: 'rgba(255,255,255,0.05)',
                cursor: 'pointer',
              }}
              onClick={() => onNavigate?.(`/tool/${item.id}`)}
            >
              <h3 style={{ margin: 0 }}>{item.title}</h3>
              <p style={{ margin: '8px 0 0', opacity: 0.7 }}>{item.subtitle}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default BsdLandingPage;
