import React, { useState } from 'react';
import { Avatar } from '../core/Avatar.jsx';
import { Icon } from '../core/Icon.jsx';
export function lifespan(p) { if (!p) return ''; if (p.living) return (p.born || '') + ' – Living'; return (p.born || '?') + ' – ' + (p.died || '?'); }
export function PersonNode({ person, selected, size = 'md', onClick, addLabel, onAdd, style }) {
  const [h, setH] = useState(false);
  const sm = size === 'sm'; const w = sm ? 168 : 200;
  if (!person) return <button type="button" onClick={onAdd} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-label={addLabel || 'Add person'} title={addLabel || 'Add person'}
    style={{ width: w, minHeight: sm ? 56 : 68, display: 'grid', placeItems: 'center', padding: 0, border: '1px dashed ' + (h ? 'var(--ink-3)' : 'var(--rule-strong)'), borderRadius: 'var(--radius-lg)', background: h ? 'var(--vellum)' : 'transparent', color: h ? 'var(--ink-2)' : 'var(--ink-3)', cursor: 'pointer', transition: 'background var(--dur-1), border-color var(--dur-1)', ...style }}>
    <Icon name="plus" size={22} /></button>;
  return <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-pressed={!!selected}
    style={{ width: w, minHeight: sm ? 56 : 68, display: 'flex', alignItems: 'center', gap: 10, padding: sm ? '8px 12px' : '10px 14px', textAlign: 'left', cursor: 'pointer',
      background: 'var(--surface-card)', border: '1px solid ' + (selected ? 'var(--ink)' : h ? 'var(--border-strong)' : 'var(--border-subtle)'), borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? '0 0 0 1px var(--ink)' : h ? 'var(--shadow-1)' : 'none', transition: 'border-color var(--dur-1), box-shadow var(--dur-2)', ...style }}>
    {person.src && <Avatar name={person.name} src={person.src} size={sm ? 36 : 44} />}
    <span style={{ display: 'grid', gap: 2, minWidth: 0 }}>
      <span style={{ font: '400 ' + (sm ? 15 : 17) + 'px/1.15 var(--font-serif)', color: 'var(--ink)', overflow: 'hidden', textOverflow: 'ellipsis', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>{person.name}</span>
      <span style={{ font: '400 13px/1.2 var(--font-sans)', color: 'var(--ink-3)' }}>{lifespan(person)}</span>
    </span>
  </button>;
}
