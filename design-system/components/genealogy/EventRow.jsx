import React from 'react';
import { Icon } from '../core/Icon.jsx';
export function EventRow({ year, title, place, detail, icon = 'circle', last, style }) {
  return <div style={{ display: 'grid', gridTemplateColumns: '52px 28px minmax(0,1fr)', columnGap: 8, ...style }}>
    <span style={{ font: '500 14px/24px var(--font-sans)', color: 'var(--aubergine)', textAlign: 'right' }}>{year}</span>
    <span style={{ position: 'relative', display: 'flex', justifyContent: 'center' }}>
      {!last && <i style={{ position: 'absolute', top: 28, bottom: 0, width: 1, background: 'var(--rule)' }} />}
      <span style={{ width: 24, height: 24, borderRadius: '50%', background: 'var(--vellum)', display: 'grid', placeItems: 'center', color: 'var(--ink-2)' }}><Icon name={icon} size={13} /></span>
    </span>
    <span style={{ display: 'grid', gap: 2, paddingBottom: last ? 0 : 20 }}>
      <span style={{ font: '500 16px/24px var(--font-sans)' }}>{title}</span>
      {place && <span style={{ font: '400 14px/1.35 var(--font-sans)', color: 'var(--ink-3)' }}>{place}</span>}
      {detail && <span style={{ font: '400 15px/1.5 var(--font-sans)', color: 'var(--ink-2)', marginTop: 4 }}>{detail}</span>}
    </span>
  </div>;
}
