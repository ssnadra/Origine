import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';
function StepBtn({ icon, label, disabled, onClick, side }) {
  const [h, setH] = useState(false);
  return <button type="button" aria-label={label} title={label} disabled={disabled} onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
    style={{ width: 48, height: 46, display: 'grid', placeItems: 'center', border: 0, background: h && !disabled ? 'var(--vellum)' : 'transparent', color: 'var(--ink)', opacity: disabled ? 0.3 : 1, cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: side === 'l' ? 'var(--radius-md) 0 0 var(--radius-md)' : '0 var(--radius-md) var(--radius-md) 0', transition: 'background var(--dur-1) var(--ease-out)' }}>
    <Icon name={icon} size={18} />
  </button>;
}
export function Stepper({ value = 0, min = 0, max = 99, step = 1, onChange, label, decLabel, incLabel, style }) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return <div role="group" aria-label={label} style={{ display: 'inline-flex', alignItems: 'center', gap: 10, ...style }}>
    {label && <span style={{ font: '500 14px/1.2 var(--font-sans)', color: 'var(--ink-2)' }}>{label}</span>}
    <span style={{ display: 'inline-flex', alignItems: 'center', border: '1px solid var(--border-strong)', borderRadius: 'var(--radius-md)', background: 'var(--surface-card)' }}>
      <StepBtn side="l" icon="minus" label={decLabel || 'Decrease'} disabled={value <= min} onClick={() => set(value - step)} />
      <output aria-live="polite" style={{ minWidth: 40, textAlign: 'center', font: '600 17px/1 var(--font-sans)', color: 'var(--ink)', borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)', padding: '14px 0' }}>{value}</output>
      <StepBtn side="r" icon="plus" label={incLabel || 'Increase'} disabled={value >= max} onClick={() => set(value + step)} />
    </span>
  </div>;
}
