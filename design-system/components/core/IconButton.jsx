import React, { useState } from 'react';
import { Icon } from './Icon.jsx';
export function IconButton({ icon, label, variant = 'ghost', size = 'md', badge, onClick, disabled, style }) {
  const [h, setH] = useState(false);
  const d = size === 'sm' ? 36 : 48;
  const bg = variant === 'primary' ? (h ? 'var(--action-primary-hover)' : 'var(--action-primary)') : variant === 'secondary' ? (h ? 'var(--vellum)' : 'var(--surface-card)') : (h ? 'var(--vellum)' : 'transparent');
  return <button type="button" aria-label={label} title={label} onClick={onClick} disabled={disabled}
    onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ position: 'relative', width: d, height: d, flex: 'none', display: 'inline-grid', placeItems: 'center', borderRadius: 'var(--radius-md)', cursor: 'pointer',
      border: variant === 'secondary' ? '1px solid var(--border-strong)' : '1px solid transparent', background: bg,
      color: variant === 'primary' ? 'var(--text-on-inverse)' : 'var(--text-primary)', opacity: disabled ? 0.45 : 1, transition: 'background var(--dur-1) var(--ease-out)', ...style }}>
    <Icon name={icon} size={size === 'sm' ? 18 : 20} />
    {badge ? <span style={{ position: 'absolute', top: size === 'sm' ? 4 : 8, right: size === 'sm' ? 4 : 8, minWidth: 16, height: 16, padding: '0 4px', borderRadius: 999, background: 'var(--aubergine)', color: '#fff', font: '600 10px/16px var(--font-sans)', textAlign: 'center', boxShadow: '0 0 0 2px var(--paper)' }}>{badge}</span> : null}
  </button>;
}
