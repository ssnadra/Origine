import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';
function Item({ it, on, onClick }) {
  const [h, setH] = useState(false);
  return <button type="button" onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} aria-current={on ? 'page' : undefined}
    style={{ display: 'flex', alignItems: 'center', gap: 12, height: 44, padding: '0 12px', border: 0, borderRadius: 'var(--radius-md)', cursor: 'pointer', textAlign: 'left', width: '100%',
      background: on ? 'var(--vellum)' : h ? 'rgba(31,27,22,.04)' : 'transparent', color: on ? 'var(--ink)' : 'var(--ink-2)', font: (on ? '600' : '500') + ' 15px/1 var(--font-sans)' }}>
    <Icon name={it.icon} size={20} color={on ? 'var(--aubergine)' : 'currentColor'} /><span style={{ flex: 1 }}>{it.label}</span>
    {it.badge ? <span style={{ font: '600 12px/1 var(--font-sans)', color: 'var(--aubergine)' }}>{it.badge}</span> : null}
  </button>;
}
export function SideNav({ items = [], value, onChange, header, footer, style }) {
  return <nav style={{ width: 'var(--rail-w)', display: 'flex', flexDirection: 'column', gap: 4, padding: '20px 12px', borderRight: '1px solid var(--border-subtle)', background: 'var(--surface-page)', ...style }}>
    {header && <div style={{ padding: '0 12px 20px' }}>{header}</div>}
    {items.map(it => <Item key={it.id} it={it} on={it.id === value} onClick={() => onChange && onChange(it.id)} />)}
    {footer && <div style={{ marginTop: 'auto', padding: '12px' }}>{footer}</div>}
  </nav>;
}
