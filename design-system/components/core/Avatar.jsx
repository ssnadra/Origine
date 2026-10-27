import React from 'react';
function initials(n) { return (n || '?').split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase(); }
export function Avatar({ name, src, focus = 'center', size = 40, ring, style }) {
  const pad = ring ? Math.max(2, Math.round(size / 22)) : 0;
  return <span title={name} style={{ width: size, height: size, flex: 'none', borderRadius: '50%', display: 'inline-grid', padding: pad, background: ring ? 'var(--rule-strong)' : 'none', ...style }}>
    <span style={{ width: '100%', height: '100%', borderRadius: '50%', display: 'grid', placeItems: 'center', overflow: 'hidden', background: src ? 'var(--vellum) ' + focus + '/cover url(' + src + ')' : 'var(--vellum)',
      color: 'var(--ink-2)', font: '500 ' + Math.round(size * 0.36) + 'px/1 var(--font-sans)', boxShadow: ring ? '0 0 0 2px var(--paper)' : 'inset 0 0 0 1px var(--rule)' }}>{src ? null : initials(name)}</span>
  </span>;
}
