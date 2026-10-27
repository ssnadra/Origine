import React from 'react';
export function Switch({ label, description, checked, onChange, disabled, style }) {
  return <label style={{ display: 'flex', gap: 16, alignItems: 'center', justifyContent: 'space-between', minHeight: 'var(--tap-min)', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
    <span style={{ display: 'grid', gap: 2 }}><span style={{ font: '400 16px/1.35 var(--font-sans)' }}>{label}</span>{description && <span style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--ink-3)' }}>{description}</span>}</span>
    <input type="checkbox" role="switch" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
    <span style={{ width: 44, height: 26, flex: 'none', borderRadius: 999, padding: 3, background: checked ? 'var(--ink)' : 'var(--rule-strong)', transition: 'background var(--dur-2) var(--ease-out)' }}>
      <i style={{ display: 'block', width: 20, height: 20, borderRadius: '50%', background: 'var(--card)', boxShadow: 'var(--shadow-1)', transform: checked ? 'translateX(18px)' : 'none', transition: 'transform var(--dur-2) var(--ease-out)' }} />
    </span>
  </label>;
}
