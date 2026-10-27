import React from 'react';
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
export function Icon({ name, size = 20, color = 'currentColor', label, style }) {
  const m = 'url(' + CDN + name + '.svg) center/contain no-repeat';
  return <span role={label ? 'img' : undefined} aria-label={label} aria-hidden={label ? undefined : true}
    style={{ display: 'inline-block', flex: 'none', width: size, height: size, backgroundColor: color, WebkitMask: m, mask: m, ...style }} />;
}
