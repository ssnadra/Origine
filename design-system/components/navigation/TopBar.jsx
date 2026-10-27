import React from 'react';
export function TopBar({ title, left, right, style }) {
  return <header style={{ display: 'flex', alignItems: 'center', gap: 8, height: 'var(--topbar-h)', padding: '0 12px 0 20px', borderBottom: '1px solid var(--border-subtle)', background: 'var(--surface-page)', ...style }}>
    {left}
    <span style={{ flex: 1, minWidth: 0, font: '400 22px/1 var(--font-serif)', letterSpacing: '-0.01em', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{title ?? 'Origine'}</span>
    {right && <span style={{ display: 'flex', alignItems: 'center', gap: 4 }}>{right}</span>}
  </header>;
}
