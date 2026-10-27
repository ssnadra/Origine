const DS_P = window.OrigineDesignSystem_f2a82e;

function PersonScreen({ id, onOpen, onEdit, onPhoto }) {
  const { Avatar, Tabs, EventRow, PhotoTile, PersonRow, Button, Badge, AvatarStack } = DS_P;
  const D = window.ORIGINE_DATA; const p = D.people[id];
  const [tab, setTab] = React.useState('about');
  const pics = D.photos.filter(x => x.tags.some(t => t.id === id));
  const ev = D.events[id] || [{ year: p.born || '?', title: 'Born', place: p.birthplace, icon: 'baby' }].concat(p.died && p.died !== '?' ? [{ year: p.died, title: 'Died', icon: 'flower-2' }] : []);
  const rel = [[p.father, 'Father'], [p.mother, 'Mother'], [p.spouse, 'Spouse']].concat((p.children || []).map(c => [c, 'Child'])).filter(([x]) => x && D.people[x]);
  const fact = (k, v) => v ? <div key={k} style={{ display: 'flex', justifyContent: 'space-between', gap: 16, padding: '14px 0', borderBottom: '1px solid var(--rule)', fontSize: 15 }}><span style={{ color: 'var(--ink-3)' }}>{k}</span><span style={{ textAlign: 'right' }}>{v}</span></div> : null;
  return <div style={{ maxWidth: 880, padding: 'var(--space-6) var(--gutter) var(--space-12)', display: 'grid', gap: 24 }}>
    <header style={{ display: 'flex', gap: 20, alignItems: 'flex-end', flexWrap: 'wrap' }}>
      <div style={{ width: 120, aspectRatio: '4 / 5', borderRadius: 'var(--radius-sm)', background: p.src ? 'center/cover url(' + p.src + ')' : 'repeating-linear-gradient(135deg,var(--placeholder-stripe-a) 0 10px,var(--placeholder-stripe-b) 10px 20px)', display: 'grid', placeItems: 'end start', padding: 8, fontSize: 12, color: 'var(--ink-3)' }}>{p.src ? '' : 'Portrait'}</div>
      <div style={{ display: 'grid', gap: 8, flex: 1, minWidth: 220 }}>
        <div style={{ display: 'flex', gap: 6 }}>{p.living && <Badge>Living</Badge>}{id === 'm' && <Badge tone="warning">Needs a source</Badge>}</div>
        <h1 style={{ margin: 0, font: '400 clamp(32px,6vw,48px)/1.04 var(--font-serif)', letterSpacing: '-0.02em', textWrap: 'balance' }}>{p.name}</h1>
        <span style={{ fontSize: 16, color: 'var(--ink-3)' }}>{p.living ? 'Born ' + p.born : (p.born || '?') + ' – ' + (p.died || '?')}{p.birthplace ? ' · ' + p.birthplace : ''}</span>
      </div>
      <div style={{ display: 'flex', gap: 8 }}><Button variant="secondary" icon="pencil" size="sm" onClick={onEdit}>Edit</Button><Button variant="secondary" icon="upload" size="sm">Add photo</Button></div>
    </header>
    <Tabs items={[{ id: 'about', label: 'About' }, { id: 'timeline', label: 'Timeline', count: ev.length }, { id: 'photos', label: 'Photos', count: pics.length }, { id: 'family', label: 'Family', count: rel.length }]} value={tab} onChange={setTab} />
    {tab === 'about' && <div style={{ display: 'grid', gap: 28 }}>
      <div>{fact('Born', [p.born, p.birthplace].filter(Boolean).join(', '))}{fact('Died', p.deathplace ? p.died + ', ' + p.deathplace : (p.died !== '?' ? p.died : null))}{fact('Occupation', p.occupation)}{fact('Spouse', p.spouse && D.people[p.spouse].name)}</div>
      {id === 'm' && <blockquote style={{ margin: 0, padding: 0, display: 'grid', gap: 10 }}>
        <p style={{ margin: 0, font: 'italic 400 24px/1.35 var(--font-serif)', color: 'var(--ink)', textWrap: 'pretty' }}>“Mam wrote every Sunday for twenty years. She kept the letters in a biscuit tin under the stairs.”</p>
        <footer style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 14, color: 'var(--ink-3)' }}><AvatarStack people={[D.editors[0]]} size={24} />Ruth Byrne Hale, her daughter</footer>
      </blockquote>}
    </div>}
    {tab === 'timeline' && <div style={{ display: 'grid' }}>{ev.map((e, i) => <EventRow key={i} {...e} last={i === ev.length - 1} />)}</div>}
    {tab === 'photos' && (pics.length ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))', gap: 16 }}>{pics.map(ph => <PhotoTile key={ph.id} src={ph.src} caption={ph.caption} meta={ph.meta} people={ph.tags.length} aspect="1 / 1" onClick={() => onPhoto(ph.id)} />)}</div>
      : <p style={{ color: 'var(--ink-3)', margin: 0 }}>No photos of {p.name.split(' ')[0]} yet. If you have one, add it and tag who is in it.</p>)}
    {tab === 'family' && <div>{rel.map(([x, r]) => <PersonRow key={x + r} person={D.people[x]} relation={r} onClick={() => onOpen(x)} />)}</div>}
  </div>;
}
window.PersonScreen = PersonScreen;
