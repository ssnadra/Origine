import React from 'react';
import { Avatar } from './Avatar.jsx';
export function AvatarStack({ people = [], max = 3, size = 32, label, style }) {
  const shown = people.slice(0, max); const extra = people.length - shown.length;
  return <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
    <span style={{ display: 'inline-flex' }}>
      {shown.map((p, i) => <span key={i} style={{ marginLeft: i ? -size * 0.28 : 0, borderRadius: '50%', boxShadow: '0 0 0 2px var(--paper)', display: 'inline-flex' }}><Avatar name={p.name} src={p.src} size={size} /></span>)}
      {extra > 0 && <span style={{ marginLeft: -size * 0.28, width: size, height: size, borderRadius: '50%', display: 'grid', placeItems: 'center', background: 'var(--parchment)', color: 'var(--ink-2)', font: '600 ' + Math.round(size * 0.34) + 'px/1 var(--font-sans)', boxShadow: '0 0 0 2px var(--paper)' }}>+{extra}</span>}
    </span>
    {label && <span style={{ font: '400 14px/1.3 var(--font-sans)', color: 'var(--ink-3)' }}>{label}</span>}
  </span>;
}
