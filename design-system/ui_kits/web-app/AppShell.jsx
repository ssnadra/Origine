const { SideNav, TopBar, BottomNav, IconButton, AvatarStack, Toast } = window.OrigineDesignSystem_f2a82e;

const NAV = [
  { id: 'tree', label: 'Tree', icon: 'git-fork' },
  { id: 'people', label: 'People', icon: 'users' },
  { id: 'map', label: 'Map', icon: 'map' },
  { id: 'stories', label: 'Stories', icon: 'images' },
  { id: 'activity', label: 'Activity', icon: 'bell' },
];

function useWide() {
  const [w, setW] = React.useState(window.innerWidth >= 900);
  React.useEffect(() => { const r = () => setW(window.innerWidth >= 900); window.addEventListener('resize', r); return () => window.removeEventListener('resize', r); }, []);
  return w;
}

function AppShell({ route, onRoute, title, back, onBack, actions, toast, onSignOut, children }) {
  const wide = useWide();
  const D = window.ORIGINE_DATA;
  const active = { person: 'people', edit: 'people', photo: 'stories' }[route] || route;
  const editors = <AvatarStack people={D.editors} max={3} size={28} />;
  const left = back ? <IconButton icon="arrow-left" label="Back" onClick={onBack} style={{ marginLeft: -12 }} /> : null;
  return <div style={{ display: 'flex', height: '100vh', background: 'var(--surface-page)' }}>
    {wide && <SideNav items={NAV.map(n => n.id === 'activity' ? { ...n, badge: 2 } : n)} value={active} onChange={onRoute}
      header={<span style={{ font: '400 26px/1 var(--font-serif)', letterSpacing: '-0.01em' }}>Origine</span>}
      footer={<div style={{ display: 'grid', gap: 8 }}><span style={{ font: '500 11px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>The Hale family</span><AvatarStack people={D.editors} max={4} size={28} label="4 relatives" /><button type="button" onClick={onSignOut} style={{ justifySelf: 'start', border: 0, background: 'none', padding: '8px 0', font: '500 14px/1 var(--font-sans)', color: 'var(--ink-3)', cursor: 'pointer' }}>Sign out</button></div>} />}
    <div style={{ flex: 1, minWidth: 0, display: 'flex', flexDirection: 'column' }}>
      <TopBar title={wide && !back ? title : (back ? title : 'Origine')} left={left}
        right={<>{actions}{!wide && editors}{wide && <IconButton icon="search" label="Search" />}</>} />
      <main style={{ flex: 1, overflow: 'auto', position: 'relative' }}>{children}</main>
      {!wide && <BottomNav items={NAV.filter(n => n.id !== 'activity').concat([{ id: 'activity', label: 'Activity', icon: 'bell' }])} value={active} onChange={onRoute} />}
    </div>
    {toast && <div style={{ position: 'fixed', left: 0, right: 0, bottom: wide ? 24 : 80, display: 'flex', justifyContent: 'center', padding: '0 16px', zIndex: 60 }}><Toast {...toast} /></div>}
  </div>;
}
window.AppShell = AppShell;
