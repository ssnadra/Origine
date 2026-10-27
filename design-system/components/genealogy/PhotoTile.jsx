import React, { useState } from 'react';
import { Icon } from '../core/Icon.jsx';
export function PhotoTile({ src, caption, meta, aspect = '1 / 1', people, onClick, style }) {
  const [h, setH] = useState(false);
  return <figure onClick={onClick} onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)} style={{ margin: 0, display: 'grid', gap: 8, cursor: onClick ? 'pointer' : 'default', ...style }}>
    <div style={{ position: 'relative', aspectRatio: aspect, borderRadius: 'var(--radius-sm)', overflow: 'hidden', background: src ? 'center/cover url(' + src + ')' : 'repeating-linear-gradient(135deg,var(--placeholder-stripe-a) 0 10px,var(--placeholder-stripe-b) 10px 20px)', outline: h && onClick ? '2px solid var(--ink)' : 'none', outlineOffset: 2 }}>
      {!src && <Icon name="image" size={22} color="var(--ink-4)" style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-50%)' }} />}
      {people ? <span style={{ position: 'absolute', left: 8, bottom: 8, display: 'inline-flex', alignItems: 'center', gap: 4, padding: '4px 7px', borderRadius: 'var(--radius-sm)', background: 'rgba(250,247,242,.92)', font: '500 12px/1 var(--font-sans)', color: 'var(--ink-2)' }}><Icon name="user-round" size={12} />{people}</span> : null}
    </div>
    {(caption || meta) && <figcaption style={{ display: 'grid', gap: 2 }}>{caption && <span style={{ font: '400 14px/1.35 var(--font-sans)', color: 'var(--ink)' }}>{caption}</span>}{meta && <span style={{ font: '400 12px/1.3 var(--font-sans)', color: 'var(--ink-3)' }}>{meta}</span>}</figcaption>}
  </figure>;
}
