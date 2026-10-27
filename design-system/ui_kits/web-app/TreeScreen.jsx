const DS_T = window.OrigineDesignSystem_f2a82e;

const REL_OPTS = ['Father', 'Mother', 'Spouse or partner', 'Child', 'Brother or sister'];

function TreeScreen({ rootId, onOpen, notify }) {
  const { FamilyChart, Card, Avatar, Button, Dialog, Input, Select } = DS_T;
  const D = window.ORIGINE_DATA;
  const [, force] = React.useState(0);
  const [focus, setFocus] = React.useState(() => localStorage.getItem('origine-focus') || rootId);
  const [deg, setDeg] = React.useState(2);
  const [adding, setAdding] = React.useState(null);
  const [name, setName] = React.useState('');
  const [born, setBorn] = React.useState('');
  React.useEffect(() => { localStorage.setItem('origine-focus', focus); }, [focus]);
  const p = D.people[focus] || D.people[rootId];
  const first = p.name.split(' ')[0];
  const opts = REL_OPTS.filter(o => !(o === 'Father' && p.father) && !(o === 'Mother' && p.mother) && !(o === 'Brother or sister' && !p.father && !p.mother));
  const open = rel => { setAdding(rel || opts[0]); setName(''); setBorn(''); };
  const save = () => {
    const id = 'n' + Date.now(); const rel = adding;
    const touched = [p, p.spouse && D.people[p.spouse]].filter(Boolean).map(x => [x, { father: x.father, mother: x.mother, spouse: x.spouse, children: x.children && x.children.slice() }]);
    const np = { id, name: name || 'Unknown ' + rel.toLowerCase(), born: born || undefined, died: '?' };
    if (rel === 'Father') { p.father = id; np.children = [p.id]; if (p.mother) np.spouse = p.mother; }
    if (rel === 'Mother') { p.mother = id; np.children = [p.id]; if (p.father) np.spouse = p.father; }
    if (rel === 'Spouse or partner') { np.spouse = p.id; if (!p.spouse) p.spouse = id; }
    if (rel === 'Child') { p.children = (p.children || []).concat(id); if (p.spouse && D.people[p.spouse]) { const s = D.people[p.spouse]; s.children = (s.children || []).concat(id); } np.died = undefined; np.living = !!born && +born > 1940; }
    if (rel === 'Brother or sister') { np.father = p.father; np.mother = p.mother; }
    D.people[id] = np; setAdding(null); force(x => x + 1);
    notify({ tone: 'success', message: np.name + ' added as ' + first + '\u2019s ' + rel.toLowerCase(), actionLabel: 'Undo', onAction: () => { touched.forEach(([x, b]) => Object.assign(x, b)); delete D.people[id]; force(x => x + 1); } });
  };
  return <div style={{ display: 'grid', gap: 16, padding: 'var(--space-5) var(--gutter) var(--space-8)', maxWidth: 1400 }}>
    <FamilyChart people={D.people} focusId={p.id} onFocus={setFocus} degree={deg} onDegreeChange={setDeg} onAdd={(fid, role) => open(role === 'father' ? 'Father' : 'Mother')} height="min(64vh, 680px)" />
    <Card padding={16} style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
      {p.src && <Avatar name={p.name} src={p.src} size={56} />}
      <div style={{ flex: 1, minWidth: 200, display: 'grid', gap: 2 }}>
        <span style={{ font: '400 22px/1.15 var(--font-serif)' }}>{p.name}</span>
        <span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{[p.living ? p.born + ' – Living' : (p.born || '?') + ' – ' + (p.died || '?'), p.birthplace].filter(Boolean).join(' · ')}</span>
      </div>
      <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
        <Button variant="secondary" icon="user-plus" onClick={() => open()}>Add a relative</Button>
        <Button iconRight="arrow-right" onClick={() => onOpen(p.id)}>View profile</Button>
      </div>
    </Card>
    <Dialog open={!!adding} title={'Add a relative of ' + first} description="Everyone in Origine is linked to someone already in the tree. Fill in what you know; others can add more later."
      onClose={() => setAdding(null)} actions={<><Button variant="ghost" onClick={() => setAdding(null)}>Cancel</Button><Button onClick={save}>Add to tree</Button></>}>
      <div style={{ display: 'grid', gap: 16 }}>
        <Select label={'Relationship to ' + first} options={opts} value={adding || opts[0]} onChange={setAdding} />
        <Input label="Full name" placeholder="e.g. Michael Hale" value={name} onChange={e => setName(e.target.value)} />
        <Input label="Birth year" placeholder="Approximate is fine" value={born} onChange={e => setBorn(e.target.value)} />
      </div>
    </Dialog>
  </div>;
}
window.TreeScreen = TreeScreen;
