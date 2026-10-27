import React, { useState } from 'react';
import { Icon } from './Icon.jsx';
export function Tag({ icon, selected, onClick, onRemove, children, style }) {
  const [h, setH] = useState(false);
  const clickable = !!onClick;
  return <span onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} role={clickable ? 'button' : undefined} aria-pressed={clickable ? !!selected : undefined}
    style={{ display: 'inline-flex', alignItems: 'center', gap: 8, minHeight: 36, padding: '0 12px', borderRadius: 'var(--radius-full)', cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--ink)' : h && clickable ? 'var(--parchment)' : 'var(--vellum)', color: selected ? 'var(--paper)' : 'var(--ink-2)',
      font: '500 14px/1 var(--font-sans)', transition: 'background var(--dur-1) var(--ease-out)', whiteSpace: 'nowrap', ...style }}>
    {icon && <Icon name={icon} size={16} />}{children}
    {onRemove && <button type="button" aria-label="Remove" onClick={e => { e.stopPropagation(); onRemove(); }} style={{ border: 0, background: 'none', padding: 0, margin: '0 -4px 0 0', color: 'inherit', cursor: 'pointer', display: 'grid' }}><Icon name="x" size={14} /></button>}
  </span>;
}
