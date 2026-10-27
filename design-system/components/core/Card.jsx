import React, { useState } from 'react';
export function Card({ variant = 'outlined', padding = 20, selected, onClick, children, style }) {
  const [h, setH] = useState(false);
  const bg = variant === 'sunken' ? 'var(--surface-sunken)' : 'var(--surface-card)';
  const sh = variant === 'raised' ? 'var(--shadow-2)' : onClick && h ? 'var(--shadow-1)' : 'none';
  return <div onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} role={onClick ? 'button' : undefined} tabIndex={onClick ? 0 : undefined}
    style={{ background: bg, border: variant === 'sunken' ? '1px solid transparent' : '1px solid ' + (selected ? 'var(--ink)' : onClick && h ? 'var(--border-strong)' : 'var(--border-subtle)'), borderRadius: 'var(--radius-lg)', padding,
      boxShadow: sh, cursor: onClick ? 'pointer' : 'default', transition: 'border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out)', ...style }}>{children}</div>;
}
