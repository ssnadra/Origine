import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function Checkbox({ label, description, checked, onChange, disabled, style }) {
  return <label style={{ display: 'flex', gap: 12, alignItems: 'flex-start', minHeight: 'var(--tap-min)', padding: '12px 0', cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1, ...style }}>
    <input type="checkbox" checked={!!checked} disabled={disabled} onChange={e => onChange && onChange(e.target.checked)} style={{ position: 'absolute', opacity: 0, width: 1, height: 1 }} />
    <span style={{ width: 22, height: 22, flex: 'none', borderRadius: 'var(--radius-sm)', display: 'grid', placeItems: 'center', border: '1.5px solid ' + (checked ? 'var(--ink)' : 'var(--rule-strong)'), background: checked ? 'var(--ink)' : 'var(--surface-card)', transition: 'background var(--dur-1)' }}>{checked && <Icon name="check" size={16} color="var(--paper)" />}</span>
    <span style={{ display: 'grid', gap: 2 }}><span style={{ font: '400 16px/22px var(--font-sans)', color: 'var(--text-primary)' }}>{label}</span>{description && <span style={{ font: '400 14px/1.4 var(--font-sans)', color: 'var(--ink-3)' }}>{description}</span>}</span>
  </label>;
}
