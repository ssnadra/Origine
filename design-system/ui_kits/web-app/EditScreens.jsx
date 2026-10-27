const DS_E = window.OrigineDesignSystem_f2a82e;

function PhotoScreen({ photoId, onOpen, notify }) {
  const { Button, Input, PersonRow, Avatar, IconButton } = DS_E;
  const D = window.ORIGINE_DATA;
  const ph = D.photos.find(p => p.id === photoId) || D.photos[0];
  const [, force] = React.useState(0);
  const [tagging, setTagging] = React.useState(false);
  const [pending, setPending] = React.useState(null); // {x,y} or index of unnamed tag
  const [q, setQ] = React.useState('');
  const place = e => {
    if (!tagging) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPending({ x: (e.clientX - r.left) / r.width * 100, y: (e.clientY - r.top) / r.height * 100 });
  };
  const assign = id => {
    if (pending.i != null) ph.tags[pending.i].id = id; else ph.tags.push({ id, x: pending.x, y: pending.y });
    setPending(null); setTagging(false); setQ(''); force(x => x + 1);
    notify({ tone: 'success', message: D.people[id].name.split(' ')[0] + ' tagged in this photo' });
  };
  const remove = i => { ph.tags.splice(i, 1); force(x => x + 1); };
  const named = ph.tags.map((t, i) => ({ ...t, i })).filter(t => t.id);
  const unnamed = ph.tags.map((t, i) => ({ ...t, i })).filter(t => !t.id);
  const matches = Object.values(D.people).filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && !named.some(t => t.id === p.id)).slice(0, 5);
  return <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))', gap: 28, padding: 'var(--space-6) var(--gutter) var(--space-12)', maxWidth: 1200, alignItems: 'start' }}>
    <div style={{ display: 'grid', gap: 12 }}>
      <div style={{ display: 'flex', justifyContent: 'center', background: 'var(--vellum)', borderRadius: 'var(--radius-sm)' }}>
      <div onClick={place} style={{ position: 'relative', display: 'inline-block', maxWidth: '100%', cursor: tagging ? 'crosshair' : 'default', outline: tagging ? '2px solid var(--aubergine)' : 'none', outlineOffset: 3 }}>
        <img src={ph.src} alt={ph.caption} style={{ display: 'block', maxWidth: '100%', maxHeight: '72vh', width: 'auto', height: 'auto' }} />
        {ph.tags.map((t, i) => <button key={i} type="button" onClick={e => { e.stopPropagation(); t.id ? onOpen(t.id) : setPending({ i, x: t.x, y: t.y }); }}
          style={{ position: 'absolute', left: t.x + '%', top: t.y + '%', transform: 'translate(-50%,-50%)', border: 0, background: 'none', padding: 0, cursor: 'pointer', display: 'grid', justifyItems: 'center', gap: 6 }}>
          <span style={{ width: 44, height: 44, borderRadius: '50%', border: '2px ' + (t.id ? 'solid' : 'dashed') + ' #fff', boxShadow: '0 0 0 1px rgba(31,27,22,.35)' }} />
          <span style={{ padding: '4px 8px', borderRadius: 'var(--radius-sm)', background: t.id ? 'rgba(250,247,242,.94)' : 'var(--ink)', color: t.id ? 'var(--ink)' : 'var(--paper)', font: '500 12px/1 var(--font-sans)', whiteSpace: 'nowrap' }}>{t.id ? D.people[t.id].name.split(' ')[0] : 'Who is this?'}</span>
        </button>)}
        {pending && pending.i == null && <span style={{ position: 'absolute', left: pending.x + '%', top: pending.y + '%', transform: 'translate(-50%,-50%)', width: 44, height: 44, borderRadius: '50%', border: '2px solid var(--aubergine)', boxShadow: '0 0 0 3px rgba(250,247,242,.8)' }} />}
      </div></div>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>
        <Button variant={tagging ? 'primary' : 'secondary'} icon="scan-face" onClick={() => { setTagging(!tagging); setPending(null); }}>{tagging ? 'Tap a face to tag' : 'Tag someone'}</Button>
        {tagging && <Button variant="ghost" onClick={() => { setTagging(false); setPending(null); }}>Cancel</Button>}
      </div>
    </div>
    <div style={{ display: 'grid', gap: 24 }}>
      {pending ? <div style={{ display: 'grid', gap: 12 }}>
        <h2 style={{ margin: 0, font: '400 26px/1.15 var(--font-serif)' }}>Who is this?</h2>
        <Input icon="search" placeholder="Search the family" value={q} onChange={e => setQ(e.target.value)} autoFocus />
        <div>{matches.map(p => <PersonRow key={p.id} person={p} onClick={() => assign(p.id)} trailing={<span />} />)}</div>
        <Button variant="ghost" onClick={() => setPending(null)}>Not now</Button>
      </div> : <>
        <div style={{ display: 'grid', gap: 6 }}>
          <h1 style={{ margin: 0, font: '400 clamp(28px,5vw,36px)/1.1 var(--font-serif)', letterSpacing: '-0.02em' }}>{ph.caption}</h1>
          <span style={{ fontSize: 15, color: 'var(--ink-3)' }}>{ph.meta} · {ph.place}</span>
          <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>Added by {ph.addedBy}</span>
        </div>
        <div style={{ display: 'grid', gap: 4 }}>
          <span style={{ font: '500 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)', paddingBottom: 6 }}>In this photo</span>
          {named.map(t => <PersonRow key={t.i} person={D.people[t.id]} onClick={() => onOpen(t.id)} trailing={<IconButton icon="x" label="Remove tag" size="sm" onClick={e => { e.stopPropagation(); remove(t.i); }} />} />)}
          {unnamed.map(t => <div key={t.i} style={{ display: 'flex', alignItems: 'center', gap: 14, minHeight: 64 }}>
            <Avatar name="?" size={44} /><span style={{ flex: 1, color: 'var(--ink-2)' }}>Someone we haven't named</span>
            <Button size="sm" variant="secondary" onClick={() => setPending({ i: t.i, x: t.x, y: t.y })}>Name</Button></div>)}
          {!ph.tags.length && <p style={{ margin: 0, color: 'var(--ink-3)' }}>Nobody tagged yet.</p>}
        </div>
      </>}
    </div>
  </div>;
}

function EditPersonScreen({ id, onDone, notify }) {
  const { Input, Switch, Radio, Button, Select } = DS_E;
  const D = window.ORIGINE_DATA; const p = D.people[id];
  const [f, setF] = React.useState({ name: p.name, born: p.born || '', birthplace: p.birthplace || '', living: !!p.living, died: p.died && p.died !== '?' ? p.died : '', deathplace: p.deathplace || '', occupation: p.occupation || '', privacy: p.living ? 'family' : 'everyone' });
  const set = k => e => setF({ ...f, [k]: e && e.target ? e.target.value : e });
  const save = () => { const before = { ...p }; Object.assign(p, { name: f.name, born: f.born, birthplace: f.birthplace, living: f.living, died: f.living ? undefined : f.died, deathplace: f.deathplace, occupation: f.occupation });
    onDone(); notify({ tone: 'success', message: 'Changes saved', actionLabel: 'Undo', onAction: () => Object.assign(p, before) }); };
  const hist = D.history[id] || [];
  const sec = t => <span style={{ font: '500 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>{t}</span>;
  const pair = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))', gap: 16 };
  return <div style={{ maxWidth: 640, padding: 'var(--space-6) var(--gutter) var(--space-12)', display: 'grid', gap: 28 }}>
    <h1 style={{ margin: 0, font: '400 clamp(30px,5vw,38px)/1.1 var(--font-serif)', letterSpacing: '-0.02em' }}>Edit {p.name.split(' ')[0]}</h1>
    <section style={{ display: 'grid', gap: 16 }}>{sec('Name')}<Input label="Full name" value={f.name} onChange={set('name')} hint="Use the name they were known by. Add maiden names in brackets." /></section>
    <section style={{ display: 'grid', gap: 16 }}>{sec('Birth')}<div style={pair}><Input label="Year or date" value={f.born} onChange={set('born')} placeholder="e.g. 1921 or c. 1920" /><Input label="Place" icon="map-pin" value={f.birthplace} onChange={set('birthplace')} placeholder="Town, country" /></div></section>
    <section style={{ display: 'grid', gap: 12 }}>{sec('Death')}<Switch label="Still living" description="Living people are only shown to signed-in family." checked={f.living} onChange={set('living')} />
      {!f.living && <div style={pair}><Input label="Year or date" value={f.died} onChange={set('died')} /><Input label="Place" icon="map-pin" value={f.deathplace} onChange={set('deathplace')} /></div>}</section>
    <section style={{ display: 'grid', gap: 16 }}>{sec('About')}<Input label="Occupation" value={f.occupation} onChange={set('occupation')} /></section>
    <section style={{ display: 'grid', gap: 0 }}>{sec('Who can see this person')}<div style={{ height: 8 }} />
      <Radio name="priv" value="everyone" label="Everyone in the family tree" checked={f.privacy === 'everyone'} onChange={set('privacy')} />
      <Radio name="priv" value="family" label="Close family only" description="Parents, children, siblings and their partners" checked={f.privacy === 'family'} onChange={set('privacy')} /></section>
    <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end', flexWrap: 'wrap', paddingTop: 20, borderTop: '1px solid var(--rule)' }}>
      <Button variant="ghost" onClick={onDone}>Cancel</Button><Button onClick={save}>Save changes</Button></div>
    {hist.length > 0 && <section style={{ display: 'grid', gap: 4 }}>{sec('Recent changes')}
      {hist.map((h, i) => <div key={i} style={{ display: 'flex', gap: 12, alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid var(--rule)', fontSize: 15 }}>
        <span style={{ flex: 1, color: 'var(--ink-2)' }}><strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{h.who}</strong> {h.change}<br /><span style={{ fontSize: 13, color: 'var(--ink-3)' }}>{h.time}</span></span>
        {i === 0 && <a href="#" onClick={e => { e.preventDefault(); notify({ message: 'Change undone' }); }} style={{ fontSize: 14 }}>Undo</a>}
      </div>)}</section>}
  </div>;
}
Object.assign(window, { PhotoScreen, EditPersonScreen });
