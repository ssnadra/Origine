import React, { useState, useRef, useEffect, useLayoutEffect } from 'react';
import { PersonNode } from './PersonNode.jsx';
import { Stepper } from '../forms/Stepper.jsx';
import { Checkbox } from '../forms/Checkbox.jsx';
import { IconButton } from '../core/IconButton.jsx';
import { Button } from '../core/Button.jsx';
import { Dialog } from '../feedback/Dialog.jsx';

const NW = 176, NH = 68, GX = 20, CG = 28, RG = 56, PX = 32, PT = 88, PB = 32;
const ZOOM_KEY = 'origine-zoom-degrees';

function buildGraph(people) {
  const par = {}, kids = {}, sp = {};
  const ids = Object.keys(people);
  ids.forEach(id => { const p = people[id]; par[id] = [p.father, p.mother].filter(x => x && people[x]); kids[id] = kids[id] || []; });
  ids.forEach(id => {
    const p = people[id];
    par[id].forEach(q => { kids[q] = kids[q] || []; if (!kids[q].includes(id)) kids[q].push(id); });
    (p.children || []).forEach(c => { if (!people[c]) return; if (!kids[id].includes(c)) kids[id].push(c); if (!par[c].includes(id)) par[c].push(id); });
    [].concat(p.spouse || [], p.spouses || []).forEach(s => { if (!people[s]) return; (sp[id] = sp[id] || new Set()).add(s); (sp[s] = sp[s] || new Set()).add(id); });
  });
  // co-parents of the same child are drawn as a couple (layout only; not a degree link)
  const co = {};
  ids.forEach(id => { const ps = par[id]; if (ps.length === 2) { (co[ps[0]] = co[ps[0]] || new Set()).add(ps[1]); (co[ps[1]] = co[ps[1]] || new Set()).add(ps[0]); } });
  return { par: id => par[id] || [], kids: id => kids[id] || [], sp: id => [...(sp[id] || [])], partners: id => [...new Set([...(sp[id] || []), ...(co[id] || [])])] };
}

function reach(G, focus, degree) {
  const dist = { [focus]: 0 }, gen = { [focus]: 0 }, order = [focus], q = [focus];
  while (q.length) {
    const id = q.shift(); if (dist[id] >= degree) continue;
    [[G.par(id), -1], [G.sp(id), 0], [G.kids(id), 1]].forEach(([list, dg]) => list.forEach(n => {
      if (n in dist) return; dist[n] = dist[id] + 1; gen[n] = gen[id] + dg; order.push(n); q.push(n);
    }));
  }
  return { dist, gen, order };
}

function layout(G, R) {
  const inS = id => id in R.dist;
  const unitOf = {}, rows = {};
  R.order.forEach(id => {
    if (unitOf[id]) return;
    const g = R.gen[id];
    const s = G.partners(id).find(x => inS(x) && R.gen[x] === g && !unitOf[x]);
    const u = { ids: s ? [id, s] : [id], g, x: 0 };
    u.w = u.ids.length * NW + (u.ids.length - 1) * CG;
    u.ids.forEach(i => { unitOf[i] = u; });
    (rows[g] = rows[g] || []).push(u);
  });
  const gens = Object.keys(rows).map(Number).sort((a, b) => a - b);
  gens.forEach(g => { let x = 0; rows[g].forEach(u => { u.x = x; x += u.w + GX; }); });
  const cx = id => { const u = unitOf[id]; return u.x + u.ids.indexOf(id) * (NW + CG) + NW / 2; };
  const avg = a => a.length ? a.reduce((t, v) => t + v, 0) / a.length : undefined;
  const place = (row, want) => {
    row.forEach(u => { const w = want(u); u._d = w === undefined ? u.x + u.w / 2 : w; });
    row.sort((a, b) => a._d - b._d);
    let cur = -Infinity; row.forEach(u => { u.x = Math.max(u._d - u.w / 2, cur); cur = u.x + u.w + GX; });
    const sh = avg(row.map(u => u._d - (u.x + u.w / 2))) || 0; row.forEach(u => { u.x += sh; });
  };
  const down = u => {
    if (u.ids.length === 2) { const a = avg(G.par(u.ids[0]).filter(inS).map(cx)), b = avg(G.par(u.ids[1]).filter(inS).map(cx)); if (a !== undefined && b !== undefined && a > b) u.ids.reverse(); }
    return avg(u.ids.flatMap(i => G.par(i).filter(inS)).map(cx));
  };
  const up = u => avg(u.ids.flatMap(i => G.kids(i).filter(inS)).map(cx));
  for (let it = 0; it < 4; it++) {
    gens.slice(1).forEach(g => place(rows[g], down));
    gens.slice(0, -1).reverse().forEach(g => place(rows[g], up));
  }
  gens.slice(1).forEach(g => place(rows[g], down));
  const all = gens.flatMap(g => rows[g]);
  const minX = Math.min(...all.map(u => u.x)), maxX = Math.max(...all.map(u => u.x + u.w));
  const pos = {};
  R.order.forEach(id => { pos[id] = { x: cx(id) - NW / 2 - minX + PX, y: (R.gen[id] - gens[0]) * (NH + RG) + PT }; });
  const lines = [];
  all.forEach(u => { if (u.ids.length === 2) { const a = pos[u.ids[0]], b = pos[u.ids[1]]; lines.push({ k: 'c' + u.ids.join('-'), d: 'M' + (a.x + NW) + ' ' + (a.y + NH / 2) + ' H' + b.x }); } });
  R.order.forEach(c => {
    const ps = G.par(c).filter(inS); if (!ps.length) return;
    const P = ps.map(p => pos[p]);
    const sx = avg(P.map(p => p.x + NW / 2));
    const sy = ps.length === 2 && unitOf[ps[0]] === unitOf[ps[1]] ? P[0].y + NH / 2 : Math.max(...P.map(p => p.y)) + NH;
    const ex = pos[c].x + NW / 2, ey = pos[c].y;
    lines.push({ k: ps.join('+') + '>' + c, d: 'M' + sx + ' ' + sy + ' V' + (ey - RG / 2) + ' H' + ex + ' V' + ey });
  });
  return { pos, lines, w: maxX - minX + PX * 2, h: gens.length * (NH + RG) - RG + PT + PB };
}

export function FamilyChart({ people: source = {}, focusId, defaultFocusId, onFocus, degree, defaultDegree = 2, onDegreeChange, minDegree = 1, maxDegree = 6, onAdd, height = 520, style }) {
  const [fLocal, setFLocal] = useState(defaultFocusId || Object.keys(source)[0]);
  const [dLocal, setDLocal] = useState(defaultDegree);
  const focus = source[focusId ?? fLocal] ? (focusId ?? fLocal) : Object.keys(source)[0];
  // empty + slots for the focused person's missing parents
  const people = { ...source };
  if (onAdd && people[focus]) {
    const f = { ...people[focus] }; people[focus] = f;
    const realF = f.father && source[f.father], realM = f.mother && source[f.mother];
    if (!realF) { f.father = '__add:father'; people[f.father] = { id: f.father, add: 'father', spouse: realM ? f.mother : undefined }; }
    if (!realM) { f.mother = '__add:mother'; people[f.mother] = { id: f.mother, add: 'mother', spouse: f.father }; }
  }
  const deg = degree ?? dLocal;
  const setFocus = id => { setFLocal(id); onFocus && onFocus(id); };
  const setDeg = n => { const v = Math.max(minDegree, Math.min(maxDegree, n)); setDLocal(v); onDegreeChange && onDegreeChange(v); };
  const [mode, setMode] = useState(() => { try { return localStorage.getItem(ZOOM_KEY) === 'on' ? 'on' : 'ask'; } catch (e) { return 'ask'; } });
  const [asking, setAsking] = useState(false);
  const [remember, setRemember] = useState(true);

  const G = buildGraph(people);
  const R = reach(G, focus, deg);
  const L = layout(G, R);
  const beyond = id => people[id].add ? 0 : [...G.par(id), ...G.sp(id), ...G.kids(id)].filter(n => !(n in R.dist) && !people[n].add).length;

  const scroller = useRef(null), canvas = useRef(null), first = useRef(true);
  const live = useRef({}); live.current = { deg, mode, asking, setDeg, ask: () => setAsking(true) };
  const centre = smooth => {
    const el = scroller.current, cv = canvas.current, n = L.pos[focus]; if (!el || !cv || !n) return;
    el.scrollTo({ left: cv.offsetLeft + n.x + NW / 2 - el.clientWidth / 2, top: cv.offsetTop + n.y + NH / 2 - el.clientHeight / 2 + PT / 3, behavior: smooth ? 'smooth' : 'auto' });
  };
  useLayoutEffect(() => { centre(!first.current); first.current = false; }, [focus, deg]);

  useEffect(() => {
    const el = scroller.current; if (!el) return;
    let acc = 0, last = 0, pinch = null;
    const step = dir => { const s = live.current, now = Date.now(); if (now - last < 350) return; last = now; s.setDeg(s.deg + dir); };
    const gate = e => { const s = live.current; if (s.mode === 'off') return false; e.preventDefault(); if (s.mode === 'ask') { if (!s.asking) s.ask(); return false; } return true; };
    const wheel = e => { if (!e.ctrlKey && !e.metaKey) return; if (!gate(e)) return; acc += e.deltaY; if (acc > 40) { acc = 0; step(1); } else if (acc < -40) { acc = 0; step(-1); } };
    const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const ts = e => { if (e.touches.length === 2) pinch = dist(e.touches); };
    const tm = e => { if (e.touches.length !== 2 || !pinch) return; if (!gate(e)) return; const r = dist(e.touches) / pinch; if (r < 0.75) { pinch = dist(e.touches); step(1); } else if (r > 1.33) { pinch = dist(e.touches); step(-1); } };
    const te = () => { pinch = null; };
    const gs = e => { if (live.current.mode !== 'off') e.preventDefault(); };
    el.addEventListener('wheel', wheel, { passive: false });
    el.addEventListener('touchstart', ts, { passive: true });
    el.addEventListener('touchmove', tm, { passive: false });
    el.addEventListener('touchend', te);
    el.addEventListener('gesturestart', gs);
    el.addEventListener('gesturechange', gs);
    return () => { el.removeEventListener('wheel', wheel); el.removeEventListener('touchstart', ts); el.removeEventListener('touchmove', tm); el.removeEventListener('touchend', te); el.removeEventListener('gesturestart', gs); el.removeEventListener('gesturechange', gs); };
  }, []);

  const accept = () => { setMode('on'); setAsking(false); if (remember) { try { localStorage.setItem(ZOOM_KEY, 'on'); } catch (e) {} } };
  const decline = () => { setMode('off'); setAsking(false); };
  const fname = (source[focus] && source[focus].name.split(' ')[0]) || 'this person';

  return <div style={{ position: 'relative', height, border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', background: 'var(--surface-page)', overflow: 'hidden', ...style }}>
    <div ref={scroller} style={{ position: 'absolute', inset: 0, overflow: 'auto', touchAction: mode === 'off' ? 'auto' : 'pan-x pan-y' }}>
      <div style={{ position: 'relative', minWidth: '100%', minHeight: '100%', display: 'grid', placeItems: 'center' }}>
        <div ref={canvas} style={{ position: 'relative', width: L.w, height: L.h }}>
          <svg width={L.w} height={L.h} style={{ position: 'absolute', inset: 0, overflow: 'visible' }} aria-hidden="true">
            {L.lines.map(l => <path key={l.k} d={l.d} fill="none" stroke="var(--rule-strong)" strokeWidth="1.5" style={{ transition: 'd var(--dur-3) var(--ease-out)' }} />)}
          </svg>
          {R.order.map(id => { const p = L.pos[id], more = beyond(id); return <div key={id} style={{ position: 'absolute', left: p.x, top: p.y, width: NW, height: NH, transition: 'left var(--dur-3) var(--ease-out), top var(--dur-3) var(--ease-out)' }}>
            {people[id].add
              ? <PersonNode person={null} addLabel={'Add ' + ((source[focus] && source[focus].name.split(' ')[0]) || '') + '\u2019s ' + people[id].add} onAdd={() => onAdd(focus, people[id].add)} style={{ width: NW, height: NH }} />
              : <PersonNode person={people[id]} size="sm" selected={id === focus} onClick={() => setFocus(id)} style={{ width: NW, height: NH }} />}
            {more > 0 && <span title={more + ' more ' + (more === 1 ? 'relative' : 'relatives') + ' beyond this view'} style={{ position: 'absolute', right: -6, top: -8, minWidth: 22, height: 20, padding: '0 6px', borderRadius: 999, background: 'var(--parchment)', color: 'var(--ink-2)', font: '600 11px/20px var(--font-sans)', textAlign: 'center', boxShadow: '0 0 0 2px var(--paper)' }}>+{more}</span>}
          </div>; })}
        </div>
      </div>
    </div>
    <div style={{ position: 'absolute', left: 12, top: 12, display: 'flex', alignItems: 'center', gap: 8, padding: '4px 4px 4px 14px', background: 'var(--surface-card)', border: '1px solid var(--border-subtle)', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-1)' }}>
      <Stepper label="Degrees" value={deg} min={minDegree} max={maxDegree} onChange={setDeg} decLabel="Show fewer relatives" incLabel="Show more relatives" />
      <IconButton icon="locate-fixed" label={'Re-centre on ' + fname} onClick={() => centre(true)} />
    </div>
    <Dialog open={asking} title="Use zoom to change the view?" description={'Pinching or zooming on the tree changes how many degrees of separation are shown around ' + fname + '. Zoom out to see more relatives, zoom in to see fewer.'} onClose={decline}
      actions={<><Button variant="ghost" onClick={decline}>Keep zoom off</Button><Button onClick={accept}>Use zoom</Button></>}>
      <Checkbox label="Don't ask again on this device" checked={remember} onChange={setRemember} />
    </Dialog>
  </div>;
}
