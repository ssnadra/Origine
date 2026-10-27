import React, { useState, useId } from 'react';
import { Icon } from '../core/Icon.jsx';
export function Select({ label, hint, options = [], value, onChange, placeholder, style }) {
  const [f, setF] = useState(false); const id = useId();
  return <label htmlFor={id} style={{ display: 'grid', gap: 6, ...style }}>
    {label && <span style={{ font: '500 14px/1.2 var(--font-sans)', color: 'var(--ink-2)' }}>{label}</span>}
    <span style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
      <select id={id} value={value} onChange={e => onChange && onChange(e.target.value)} onFocus={() => setF(true)} onBlur={() => setF(false)}
        style={{ appearance: 'none', width: '100%', height: 'var(--control-h)', padding: '0 40px 0 14px', font: '400 16px/1 var(--font-sans)', color: 'var(--text-primary)', background: 'var(--surface-card)', border: '1px solid ' + (f ? 'var(--ink)' : 'var(--border-strong)'), borderRadius: 'var(--radius-md)', boxShadow: f ? 'var(--focus-ring)' : 'none', outline: 0, cursor: 'pointer' }}>
        {placeholder && <option value="" disabled>{placeholder}</option>}
        {options.map(o => { const v = typeof o === 'string' ? o : o.value; const l = typeof o === 'string' ? o : o.label; return <option key={v} value={v}>{l}</option>; })}
      </select>
      <Icon name="chevron-down" size={18} color="var(--ink-3)" style={{ position: 'absolute', right: 14, pointerEvents: 'none' }} />
    </span>
    {hint && <span style={{ font: '400 13px/1.35 var(--font-sans)', color: 'var(--ink-3)' }}>{hint}</span>}
  </label>;
}
