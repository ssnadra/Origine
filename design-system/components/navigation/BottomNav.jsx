import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function BottomNav({ items = [], value, onChange, style }) {
  return <nav style={{ display: 'grid', gridTemplateColumns: 'repeat(' + items.length + ', 1fr)', height: 'var(--bottomnav-h)', borderTop: '1px solid var(--border-subtle)', background: 'var(--surface-page)', ...style }}>
    {items.map(it => { const on = it.id === value; return <button key={it.id} type="button" onClick={() => onChange && onChange(it.id)} aria-current={on ? 'page' : undefined}
      style={{ display: 'grid', placeItems: 'center', alignContent: 'center', gap: 4, border: 0, background: 'none', cursor: 'pointer', color: on ? 'var(--ink)' : 'var(--ink-3)', font: '500 12px/1 var(--font-sans)', boxShadow: on ? 'inset 0 2px 0 var(--aubergine)' : 'none' }}>
      <Icon name={it.icon} size={22} />{it.label}</button>; })}
  </nav>;
}
