import React from 'react';
import { Avatar } from '../core/Avatar.jsx';
export function ActivityItem({ who, action, target, time, preview, onClick, style }) {
  return <div onClick={onClick} style={{ display: 'flex', gap: 12, padding: '14px 0', borderBottom: '1px solid var(--border-subtle)', cursor: onClick ? 'pointer' : 'default', ...style }}>
    <Avatar name={who.name} src={who.src} size={36} />
    <div style={{ flex: 1, minWidth: 0, display: 'grid', gap: 8 }}>
      <p style={{ margin: 0, font: '400 15px/1.45 var(--font-sans)', color: 'var(--ink-2)', textWrap: 'pretty' }}><strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{who.name}</strong> {action} {target && <span style={{ fontFamily: 'var(--font-serif)', fontSize: 17, color: 'var(--ink)' }}>{target}</span>}</p>
      {preview}
      <span style={{ font: '400 13px/1 var(--font-sans)', color: 'var(--ink-3)' }}>{time}</span>
    </div>
  </div>;
}
