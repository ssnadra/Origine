import React, { useState } from 'react';
import { Avatar } from '../core/Avatar.jsx';
import { Icon } from '../core/Icon.jsx';
import { lifespan } from './PersonNode.jsx';
export function PersonRow({ person, relation, onClick, trailing, style }) {
  const [h, setH] = useState(false);
  return <div role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ display: 'flex', alignItems: 'center', gap: 14, minHeight: 64, padding: '8px 12px', margin: '0 -12px', borderRadius: 'var(--radius-md)', background: onClick && h ? 'var(--vellum)' : 'transparent', cursor: onClick ? 'pointer' : 'default', ...style }}>
    <Avatar name={person.name} src={person.src} size={44} />
    <span style={{ flex: 1, minWidth: 0, display: 'grid', gap: 2 }}>
      <span style={{ font: '400 18px/1.2 var(--font-serif)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{person.name}</span>
      <span style={{ font: '400 14px/1.3 var(--font-sans)', color: 'var(--ink-3)' }}>{[relation, lifespan(person)].filter(Boolean).join(' · ')}</span>
    </span>
    {trailing ?? (onClick ? <Icon name="chevron-right" size={18} color="var(--ink-4)" /> : null)}
  </div>;
}
