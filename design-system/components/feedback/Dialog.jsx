import React, { useEffect, useState } from 'react';
import { IconButton } from '../core/IconButton.jsx';
export function Dialog({ open, title, description, children, actions, onClose, sheet, width = 480 }) {
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 600);
  useEffect(() => { const r = () => setNarrow(window.innerWidth < 600); window.addEventListener('resize', r); return () => window.removeEventListener('resize', r); }, []);
  useEffect(() => { if (!open) return; const k = e => e.key === 'Escape' && onClose && onClose(); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k); }, [open, onClose]);
  if (!open) return null;
  const asSheet = sheet ?? narrow;
  return <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 50, background: 'var(--scrim)', display: 'flex', alignItems: asSheet ? 'flex-end' : 'center', justifyContent: 'center', padding: asSheet ? 0 : 24 }}>
    <div role="dialog" aria-modal="true" aria-label={title} onClick={e => e.stopPropagation()} style={{ width: asSheet ? '100%' : width, maxWidth: '100%', maxHeight: '90vh', overflow: 'auto', background: 'var(--surface-page)', borderRadius: asSheet ? 'var(--radius-xl) var(--radius-xl) 0 0' : 'var(--radius-lg)', boxShadow: 'var(--shadow-3)', padding: asSheet ? '12px 20px 28px' : 28, display: 'grid', gap: 20 }}>
      {asSheet && <i style={{ justifySelf: 'center', width: 40, height: 4, borderRadius: 4, background: 'var(--rule-strong)' }} />}
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        <div style={{ flex: 1, display: 'grid', gap: 6 }}><h2 style={{ margin: 0, font: '400 26px/1.15 var(--font-serif)', letterSpacing: '-0.01em' }}>{title}</h2>{description && <p style={{ margin: 0, color: 'var(--ink-3)', fontSize: 15 }}>{description}</p>}</div>
        {onClose && <IconButton icon="x" label="Close" size="sm" onClick={onClose} style={{ margin: '-4px -8px 0 0' }} />}
      </div>
      {children}
      {actions && <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap', flexDirection: asSheet ? 'column-reverse' : 'row' }}>{actions}</div>}
    </div>
  </div>;
}
