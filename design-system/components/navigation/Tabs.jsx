import React from 'react';
export function Tabs({ items = [], value, onChange, style }) {
  return <div role="tablist" style={{ display: 'flex', gap: 4, borderBottom: '1px solid var(--border-subtle)', overflowX: 'auto', scrollbarWidth: 'none', ...style }}>
    {items.map(it => { const on = it.id === value; return <button key={it.id} role="tab" aria-selected={on} type="button" onClick={() => onChange && onChange(it.id)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 6, height: 'var(--tap-min)', padding: '0 12px', border: 0, background: 'none', cursor: 'pointer', whiteSpace: 'nowrap', font: '500 15px/1 var(--font-sans)', color: on ? 'var(--ink)' : 'var(--ink-3)', boxShadow: on ? 'inset 0 -2px 0 var(--aubergine)' : 'none', transition: 'color var(--dur-1)' }}>
      {it.label}{it.count != null && <span style={{ font: '500 12px/1 var(--font-sans)', color: 'var(--ink-3)', background: 'var(--vellum)', padding: '3px 6px', borderRadius: 'var(--radius-xs)' }}>{it.count}</span>}
    </button>; })}
  </div>;
}
