import React from 'react';
import { Icon } from '../core/Icon.jsx';
const I = { neutral: 'info', success: 'check-circle-2', warning: 'alert-triangle', danger: 'alert-circle' };
export function Toast({ tone = 'neutral', message, actionLabel, onAction, onClose, style }) {
  return <div role="status" style={{ display: 'flex', alignItems: 'center', gap: 12, minHeight: 52, padding: '8px 8px 8px 16px', background: 'var(--ink)', color: 'var(--paper)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-2)', font: '400 15px/1.35 var(--font-sans)', maxWidth: 440, ...style }}>
    <Icon name={I[tone] || I.neutral} size={18} color={tone === 'success' ? '#b9cba6' : tone === 'warning' ? '#e6c77d' : tone === 'danger' ? '#f0a497' : 'var(--ink-4)'} />
    <span style={{ flex: 1 }}>{message}</span>
    {actionLabel && <button type="button" onClick={onAction} style={{ border: 0, background: 'none', color: 'var(--paper)', font: '600 14px/1 var(--font-sans)', textDecoration: 'underline', textUnderlineOffset: 3, padding: '10px 8px', cursor: 'pointer' }}>{actionLabel}</button>}
    {onClose && <button type="button" aria-label="Dismiss" onClick={onClose} style={{ border: 0, background: 'none', color: 'var(--ink-4)', padding: 8, cursor: 'pointer', display: 'grid' }}><Icon name="x" size={16} /></button>}
  </div>;
}
