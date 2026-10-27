const DS_O = window.OrigineDesignSystem_f2a82e;

function PeopleScreen({ onOpen }) {
  const { Input, PersonRow, Tag } = DS_O;
  const D = window.ORIGINE_DATA;
  const [q, setQ] = React.useState(''); const [sn, setSn] = React.useState(null);
  const list = Object.values(D.people).filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && (!sn || p.name.includes(sn))).sort((a, b) => (a.born || '').localeCompare(b.born || ''));
  return <div style={{ maxWidth: 720, padding: 'var(--space-6) var(--gutter)', display: 'grid', gap: 16 }}>
    <h1 style={{ margin: 0, font: '400 36px/1.08 var(--font-serif)', letterSpacing: '-0.02em' }}>People</h1>
    <Input icon="search" placeholder="Search by name" value={q} onChange={e => setQ(e.target.value)} />
    <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>{['Hale', "O'Connell", 'Byrne'].map(n => <Tag key={n} selected={sn === n} onClick={() => setSn(sn === n ? null : n)}>{n}</Tag>)}</div>
    <div>{list.map(p => <PersonRow key={p.id} person={p} relation={p.birthplace} onClick={() => onOpen(p.id)} />)}</div>
    {!list.length && <p style={{ color: 'var(--ink-3)' }}>Nobody matches “{q}”.</p>}
  </div>;
}

function MapScreen() {
  const { Card, Badge, IconButton, Switch } = DS_O;
  const D = window.ORIGINE_DATA;
  const [sel, setSel] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [all, setAll] = React.useState(false);
  const el = React.useRef(null); const map = React.useRef(null); const layer = React.useRef(null);
  const living = p => p.people.filter(id => D.people[id] && D.people[id].living).length;
  const shown = D.places.filter(p => all || living(p) > 0);
  const pl = D.places.find(x => x.id === sel);
  const frame = (animate = true) => {
    if (!map.current) return;
    if (pl) map.current.setView([pl.lat, pl.lon], 11, { animate });
    else if (shown.length) map.current.fitBounds(shown.map(p => [p.lat, p.lon]), { paddingTopLeft: [60, 80], paddingBottomRight: [60, 60], maxZoom: 9, animate });
  };
  const draw = React.useRef(() => {});
  draw.current = () => {
    if (!map.current) return;
    layer.current.clearLayers();
    // cluster pins closer than 44px at the current zoom
    const groups = [];
    shown.forEach(p => {
      const pt = map.current.latLngToLayerPoint([p.lat, p.lon]);
      const g = groups.find(g => g.pt.distanceTo(pt) < 44);
      if (g) g.items.push(p); else groups.push({ pt, items: [p] });
    });
    groups.forEach(g => {
      const items = g.items; const one = items.length === 1;
      const n = items.reduce((t, p) => t + living(p), 0);
      const total = items.reduce((t, p) => t + p.people.length, 0);
      const on = items.some(p => p.id === sel);
      const lat = items.reduce((t, p) => t + p.lat, 0) / items.length, lon = items.reduce((t, p) => t + p.lon, 0) / items.length;
      const sz = one ? 32 : 40;
      const html = '<span style="display:grid;place-items:center;width:' + sz + 'px;height:' + sz + 'px;border-radius:50%;border:2px solid #fffdf9;' + (one ? '' : 'outline:2px solid ' + (n ? 'var(--aubergine)' : 'var(--rule-strong)') + ';outline-offset:2px;') + 'box-shadow:0 1px 2px rgba(31,27,22,.25),0 4px 10px rgba(31,27,22,.2);font:600 13px/1 \'Hanken Grotesk\',sans-serif;color:' + (n ? '#fff' : 'var(--ink-2)') + ';background:' + (on ? 'var(--ink)' : n ? 'var(--aubergine)' : 'var(--parchment)') + '">' + (n || total) + '</span>';
      const label = one ? items[0].name + ' · ' + (n ? n + ' living' : total + ' people') : items.length + ' places · ' + items.map(p => p.name.split(',')[0]).join(', ');
      L.marker([lat, lon], { icon: L.divIcon({ className: '', html, iconSize: [sz, sz], iconAnchor: [sz / 2, sz / 2] }), title: label })
        .bindTooltip(label, { direction: 'top', offset: [0, -sz / 2] })
        .on('click', () => one ? setSel(items[0].id) : map.current.flyToBounds(items.map(p => [p.lat, p.lon]), { padding: [80, 80], maxZoom: 11, duration: 0.6 }))
        .addTo(layer.current);
    });
  };
  React.useEffect(() => {
    if (!window.L || !el.current) return;
    map.current = L.map(el.current, { zoomControl: false, attributionControl: true });
    L.control.zoom({ position: 'bottomright' }).addTo(map.current);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16, attribution: 'Tiles &copy; Esri' }).addTo(map.current);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', { maxZoom: 16 }).addTo(map.current);
    layer.current = L.layerGroup().addTo(map.current);
    map.current.on('zoomend', () => draw.current());
    let w = el.current.offsetWidth;
    const ro = new ResizeObserver(() => { const nw = el.current && el.current.offsetWidth; if (!nw || nw === w) return; w = nw; map.current.invalidateSize({ pan: false }); frameRef.current(false); draw.current(); });
    ro.observe(el.current);
    return () => { ro.disconnect(); map.current.remove(); };
  }, []);
  React.useEffect(() => { frame(); draw.current(); }, [sel, all]);
  const frameRef = React.useRef(frame); frameRef.current = frame;
  return <div style={{ position: 'absolute', inset: 0, display: 'flex', overflow: 'hidden' }}>
    <div style={{ position: 'relative', flex: 1, minWidth: 0 }}>
      <div ref={el} aria-label="Map of family places" style={{ position: 'absolute', inset: 0, background: 'var(--vellum)', zIndex: 0 }} />
      {pl && <div style={{ position: 'absolute', left: 16, top: 16, zIndex: 500, display: 'flex', alignItems: 'center', gap: 8, padding: '8px 8px 8px 14px', background: 'var(--surface-card)', border: '1px solid var(--rule)', borderRadius: 'var(--radius-md)', boxShadow: 'var(--shadow-1)' }}>
        <span style={{ display: 'grid', gap: 2 }}><span style={{ font: '400 17px/1.2 var(--font-serif)' }}>{pl.name}</span><span style={{ fontSize: 13, color: 'var(--ink-3)' }}>{pl.people.map(id => D.people[id].name.split(' ')[0]).join(', ')}</span></span>
        <IconButton icon="x" label="Show all places" size="sm" onClick={() => setSel(null)} />
      </div>}
      {!open && <IconButton icon="menu" label="Show places" variant="secondary" onClick={() => setOpen(true)} style={{ position: 'absolute', right: 16, top: 16, zIndex: 500, boxShadow: 'var(--shadow-1)' }} />}
    </div>
    <aside aria-hidden={!open} style={{ width: open ? 'min(360px, 100%)' : 0, flex: 'none', overflow: 'hidden', borderLeft: open ? '1px solid var(--rule)' : '0', background: 'var(--surface-page)', transition: 'width var(--dur-3) var(--ease-out)', position: window.innerWidth < 600 ? 'absolute' : 'relative', right: 0, top: 0, bottom: 0, zIndex: 600 }}>
      <div style={{ width: 'min(360px, 100vw)', height: '100%', overflow: 'auto', padding: '16px 20px 24px', display: 'grid', gap: 12, alignContent: 'start' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <h1 style={{ flex: 1, margin: 0, font: '400 28px/1.1 var(--font-serif)', letterSpacing: '-0.015em' }}>Places</h1>
          <IconButton icon="x" label="Hide places" onClick={() => setOpen(false)} style={{ marginRight: -12 }} />
        </div>
        <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 15 }}>Places where living relatives were born, live or settled.</p>
        <Switch label="Include past places" description="Show places with no living relatives" checked={all} onChange={v => { setAll(v); if (!v && pl && !living(pl)) setSel(null); }} />
        {shown.map(x => { const n = living(x); return <Card key={x.id} padding={16} selected={x.id === sel} onClick={() => { setSel(x.id); if (window.innerWidth < 600) setOpen(false); }} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div style={{ display: 'grid', gap: 2 }}><span style={{ font: '400 18px/1.2 var(--font-serif)' }}>{x.name}</span><span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{x.years} · {x.people.length} people</span></div>
          <Badge tone={n ? 'accent' : 'neutral'}>{n ? n + ' living' : 'Past'}</Badge>
        </Card>; })}
      </div>
    </aside>
  </div>;
}

function StoriesScreen({ onPhoto }) {
  const { PhotoTile, Button, Card, AvatarStack } = DS_O;
  const D = window.ORIGINE_DATA;
  return <div style={{ maxWidth: 1040, padding: 'var(--space-6) var(--gutter) var(--space-12)', display: 'grid', gap: 28 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', gap: 16, flexWrap: 'wrap' }}>
      <h1 style={{ margin: 0, font: '400 36px/1.08 var(--font-serif)', letterSpacing: '-0.02em' }}>Stories &amp; photos</h1>
      <Button icon="upload">Upload</Button>
    </div>
    <Card padding={24} style={{ display: 'grid', gap: 12, maxWidth: 640 }}>
      <span style={{ font: '500 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Story</span>
      <h2 style={{ margin: 0, font: '400 28px/1.15 var(--font-serif)', letterSpacing: '-0.01em' }}>The crossing, April 1947</h2>
      <p style={{ margin: 0, color: 'var(--ink-2)', textWrap: 'pretty' }}>Margaret and Nora left Cobh with one trunk between them. Ruth pieced this together from the letters in the biscuit tin.</p>
      <AvatarStack people={[D.editors[0]]} size={24} label="Ruth Byrne Hale · 6 min read" />
    </Card>
    <div style={{ display: 'grid', gap: 12 }}><span style={{ font: '500 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>Snow day · March 2008</span>
    <div style={{ columns: '3 200px', columnGap: 16 }}>{D.photos.map(ph => <PhotoTile key={ph.id} src={ph.src} caption={ph.caption} meta={ph.meta} people={ph.tags.length || undefined} aspect={ph.aspect} onClick={() => onPhoto(ph.id)} style={{ breakInside: 'avoid', marginBottom: 20 }} />)}</div></div>
  </div>;
}

function ActivityScreen({ notify, onPhoto, onSignOut }) {
  const { ActivityItem, PhotoTile, Button, Dialog, Input, Radio, AvatarStack } = DS_O;
  const D = window.ORIGINE_DATA;
  const [inv, setInv] = React.useState(false); const [role, setRole] = React.useState('add');
  return <div style={{ maxWidth: 640, padding: 'var(--space-6) var(--gutter)', display: 'grid', gap: 16 }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12, flexWrap: 'wrap' }}>
      <h1 style={{ margin: 0, font: '400 36px/1.08 var(--font-serif)', letterSpacing: '-0.02em' }}>Activity</h1>
      <Button variant="accent" icon="user-plus" onClick={() => setInv(true)}>Invite a relative</Button>
    </div>
    <AvatarStack people={D.editors} max={4} label="4 relatives are building this tree" />
    <div>{D.activity.map((a, i) => <ActivityItem key={i} {...a}
      preview={a.photos ? <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, maxWidth: 360 }}>{D.photos.slice(0, 3).map(p => <PhotoTile key={p.id} src={p.src} aspect="1 / 1" onClick={() => onPhoto(p.id)} />)}</div>
        : a.quote ? <p style={{ margin: 0, font: 'italic 400 18px/1.4 var(--font-serif)', color: 'var(--ink)' }}>“{a.quote}”</p> : null} />)}</div>
    <div style={{ paddingTop: 24 }}><Button variant="ghost" icon="log-out" onClick={onSignOut}>Sign out</Button></div>
    <Dialog open={inv} title="Invite a relative" description="They'll get an email with a link to join the Hale family tree." onClose={() => setInv(false)}
      actions={<><Button variant="ghost" onClick={() => setInv(false)}>Cancel</Button><Button onClick={() => { setInv(false); notify({ tone: 'success', message: 'Invitation sent' }); }}>Send invitation</Button></>}>
      <div style={{ display: 'grid', gap: 8 }}>
        <Input label="Their email" type="email" placeholder="name@example.com" />
        <Radio name="role" value="add" label="Can add and edit" description="Recommended for close family" checked={role === 'add'} onChange={setRole} />
        <Radio name="role" value="view" label="Can only view" checked={role === 'view'} onChange={setRole} />
      </div>
    </Dialog>
  </div>;
}
Object.assign(window, { PeopleScreen, MapScreen, StoriesScreen, ActivityScreen });
