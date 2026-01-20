import React from 'react';

export interface ToolDefinition {
  id: string;
  title: string;
  description?: string;
}

export interface ToolboxPanelProps {
  className?: string;
  style?: React.CSSProperties;
  tools?: ToolDefinition[];
  onToolSelect?: (toolId: string) => void;
}

/**
 * Default Toolbox Panel - 默认主题的工具箱面板
 */
export function DefaultToolboxPanel({
  className,
  style,
  tools = [],
  onToolSelect,
}: ToolboxPanelProps) {
  return (
    <div className={className} style={style}>
      <h3>Toolbox</h3>
      <div style={{ display: 'grid', gap: '8px' }}>
        {tools.map((tool) => (
          <button
            key={tool.id}
            onClick={() => onToolSelect?.(tool.id)}
            style={{
              padding: '12px',
              textAlign: 'left',
              border: '1px solid #e0e0e0',
              borderRadius: '8px',
              cursor: 'pointer',
            }}
          >
            <strong>{tool.title}</strong>
            {tool.description && <p style={{ margin: '4px 0 0', opacity: 0.7 }}>{tool.description}</p>}
          </button>
        ))}
      </div>
    </div>
  );
}

export default DefaultToolboxPanel;
