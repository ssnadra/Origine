import React, { useState } from 'react';
export function Tooltip({ content, side = 'top', children }) {
  const [o, setO] = useState(false);
  const pos = side === 'bottom' ? { top: 'calc(100% + 8px)' } : { bottom: 'calc(100% + 8px)' };
  return <span style={{ position: 'relative', display: 'inline-flex' }} onMouseEnter={() => setO(true)} onMouseLeave={() => setO(false)} onFocus={() => setO(true)} onBlur={() => setO(false)}>
    {children}
    <span role="tooltip" style={{ position: 'absolute', left: '50%', ...pos, transform: 'translateX(-50%) translateY(' + (o ? 0 : side === 'bottom' ? -4 : 4) + 'px)', opacity: o ? 1 : 0, pointerEvents: 'none', transition: 'opacity var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out)', background: 'var(--ink)', color: 'var(--paper)', font: '500 13px/1.3 var(--font-sans)', padding: '7px 10px', borderRadius: 'var(--radius-sm)', whiteSpace: 'nowrap', zIndex: 40 }}>{content}</span>
  </span>;
}
