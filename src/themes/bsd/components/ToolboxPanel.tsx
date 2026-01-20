import React from 'react';

// 工具定义类型
export interface ToolDefinition {
  id: string;
  title: string;
  description?: string;
  icon?: string;
  category?: string;
}

// 工具箱面板 Props
export interface ToolboxPanelProps {
  className?: string;
  style?: React.CSSProperties;
  tools?: ToolDefinition[];
  onToolSelect?: (toolId: string) => void;
}

// BSD 工具箱封面 URL 前缀
const BSD_TOOLBOX_COVER_PREFIX =
  'https://bsd-ai-oss-prd.oss-cn-wulanchabu.aliyuncs.com/new-ai/%E5%B7%A5%E5%85%B7%E7%AE%B1/';

// BSD 默认工具定义
const BSD_DEFAULT_TOOLS: ToolDefinition[] = [
  { id: 'inspiration', title: '灵感生成', category: 'text', description: '根据文字描述生成设计灵感' },
  { id: 'free-fission', title: '自由裂变', category: 'image', description: '图片多样化裂变生成' },
  { id: 'style-fusion', title: '风格融合', category: 'image', description: '多风格智能融合' },
  { id: 'local-edit', title: '局部修改', category: 'image', description: '局部区域精准修改' },
  { id: 'line-to-garment', title: '线稿成衣', category: 'image', description: '线稿快速转化成衣' },
  { id: 'garment-on-model', title: '成衣上身', category: 'image', description: '服装虚拟试穿' },
  { id: 'light-effect', title: '光影大片', category: 'image', description: '专业光影效果' },
  { id: 'atmosphere', title: '氛围图生成', category: 'image', description: '氛围场景生成' },
  { id: 'smart-outfit', title: '智能穿搭', category: 'image', description: '智能搭配推荐' },
  { id: 'runway', title: '秀场款生成', category: 'image', description: '秀场风格生成' },
];

/**
 * BSD Toolbox Panel - 波司登品牌定制工具箱面板
 */
export function BsdToolboxPanel({
  className,
  style,
  tools = BSD_DEFAULT_TOOLS,
  onToolSelect,
}: ToolboxPanelProps) {
  return (
    <div
      className={className}
      style={{
        padding: 24,
        background: 'linear-gradient(180deg, #1a1a2e 0%, #0f0f1a 100%)',
        borderRadius: 20,
        ...style,
      }}
    >
      <h2 style={{ color: '#fff', marginBottom: 24 }}>AI 工具箱</h2>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))',
          gap: 16,
        }}
      >
        {tools.map((tool) => (
          <div
            key={tool.id}
            onClick={() => onToolSelect?.(tool.id)}
            style={{
              padding: 16,
              borderRadius: 12,
              background: 'rgba(255,255,255,0.05)',
              cursor: 'pointer',
              transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(40, 82, 173, 0.3)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'rgba(255,255,255,0.05)';
            }}
          >
            {/* Tool Cover Image */}
            <div
              style={{
                width: '100%',
                aspectRatio: '1',
                borderRadius: 8,
                marginBottom: 12,
                background: `url(${BSD_TOOLBOX_COVER_PREFIX}${tool.id}.png) center/cover`,
                backgroundColor: 'rgba(40, 82, 173, 0.2)',
              }}
            />
            <h4 style={{ color: '#fff', margin: 0 }}>{tool.title}</h4>
            {tool.description && (
              <p style={{ color: 'rgba(255,255,255,0.6)', margin: '4px 0 0', fontSize: 12 }}>
                {tool.description}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default BsdToolboxPanel;
