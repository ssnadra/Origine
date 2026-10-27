import React, { useState } from 'react';
import { Icon } from './Icon.jsx';
const V = {
  primary: { bg: 'var(--action-primary)', hov: 'var(--action-primary-hover)', fg: 'var(--text-on-inverse)', bd: 'var(--action-primary)' },
  accent: { bg: 'var(--action-accent)', hov: 'var(--action-accent-hover)', fg: '#fff', bd: 'var(--action-accent)' },
  secondary: { bg: 'var(--surface-card)', hov: 'var(--vellum)', fg: 'var(--text-primary)', bd: 'var(--border-strong)' },
  ghost: { bg: 'transparent', hov: 'var(--vellum)', fg: 'var(--text-primary)', bd: 'transparent' },
  danger: { bg: 'transparent', hov: 'var(--danger-tint)', fg: 'var(--danger)', bd: 'var(--border-strong)' },
};
export function Button({ variant = 'primary', size = 'md', icon, iconRight, full, disabled, type = 'button', onClick, children, style }) {
  const [h, setH] = useState(false); const [p, setP] = useState(false);
  const v = V[variant] || V.primary; const sm = size === 'sm';
  return <button type={type} disabled={disabled} onClick={onClick}
    onMouseEnter={() => setH(true)} onMouseLeave={() => { setH(false); setP(false); }} onMouseDown={() => setP(true)} onMouseUp={() => setP(false)}
    style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, height: sm ? 'var(--control-h-sm)' : 'var(--control-h)', padding: sm ? '0 14px' : '0 20px', width: full ? '100%' : undefined,
      font: (sm ? '500 14px' : '500 15px') + '/1 var(--font-sans)', borderRadius: 'var(--radius-md)', border: '1px solid ' + v.bd,
      background: h && !disabled ? v.hov : v.bg, color: v.fg, cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.45 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none', transition: 'background var(--dur-1) var(--ease-out), transform var(--dur-1)', whiteSpace: 'nowrap', ...style }}>
    {icon && <Icon name={icon} size={sm ? 16 : 18} />}{children}{iconRight && <Icon name={iconRight} size={sm ? 16 : 18} />}
  </button>;
}
