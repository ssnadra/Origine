import React from 'react';
export function Radio({ label, description, name, value, checked, onChange, disabled, style }) {
  return <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', minHeight: 'var(--tap-min)', padding: '12px 0', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
    <input type="radio" name={name} value={value} checked={!!checked} disabled={disabled} onChange={() => onChange && onChange(value)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
    <span style={{ width: 22, height: 22, flex: 'none', borderRadius: '50%', display: 'grid', placeItems: 'center', border: '1.5px solid ' + (checked ? 'var(--ink)' : 'var(--rule-strong)'), background: 'var(--surface-card)' }}>{checked && <i style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--ink)' }} />}</span>
    <span style={{ display: 'grid', gap: 2 }}><span style={{ font: '400 16px/22px var(--font-sans)' }}>{label}</span>{description && <span style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--ink-3)' }}>{description}</span>}</span>
  </label>;
}
