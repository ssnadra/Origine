import React from 'react';
const T = { neutral: ['var(--vellum)', 'var(--ink-2)'], accent: ['var(--aubergine-tint)', 'var(--aubergine)'], success: ['var(--success-tint)', 'var(--success)'], warning: ['var(--warning-tint)', 'var(--warning)'], danger: ['var(--danger-tint)', 'var(--danger)'], info: ['var(--info-tint)', 'var(--info)'] };
export function Badge({ tone = 'neutral', children, style }) {
  const [bg, fg] = T[tone] || T.neutral;
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, height: 22, padding: '0 8px', borderRadius: 'var(--radius-sm)', background: bg, color: fg, font: '600 12px/1 var(--font-sans)', whiteSpace: 'nowrap', ...style }}>{children}</span>;
}
