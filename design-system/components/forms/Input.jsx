import React, { useState, useId } from 'react';
import { Icon } from '../core/Icon.jsx';
export function Input({ label, hint, error, icon, multiline, rows = 4, style, ...rest }) {
  const [f, setF] = useState(false); const id = useId();
  const bd = error ? 'var(--danger)' : f ? 'var(--ink)' : 'var(--border-strong)';
  const field = { width: '100%', border: 0, outline: 0, background: 'transparent', font: '400 16px/1.4 var(--font-sans)', color: 'var(--text-primary)', padding: multiline ? '12px 0' : 0, resize: 'vertical', minHeight: multiline ? rows * 22 + 24 : undefined };
  const Tag = multiline ? 'textarea' : 'input';
  return <label htmlFor={id} style={{ display: 'grid', gap: 6, ...style }}>
    {label && <span style={{ font: '500 14px/1.2 var(--font-sans)', color: 'var(--ink-2)' }}>{label}</span>}
    <span style={{ display: 'flex', alignItems: multiline ? 'flex-start' : 'center', gap: 10, minHeight: 'var(--control-h)', padding: '0 14px', background: 'var(--surface-card)', border: '1px solid ' + bd, borderRadius: 'var(--radius-md)', boxShadow: f ? 'var(--focus-ring)' : 'none', transition: 'border-color var(--dur-1), box-shadow var(--dur-1)', color: 'var(--ink-3)' }}>
      {icon && <Icon name={icon} size={18} />}
      <Tag id={id} rows={multiline ? rows : undefined} onFocus={() => setF(true)} onBlur={() => setF(false)} style={field} {...rest} />
    </span>
    {(error || hint) && <span style={{ font: '400 13px/1.35 var(--font-sans)', color: error ? 'var(--danger)' : 'var(--ink-3)' }}>{error || hint}</span>}
  </label>;
}
