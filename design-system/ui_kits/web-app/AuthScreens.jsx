const DS_A = window.OrigineDesignSystem_f2a82e;

function AuthFrame({ children, step, steps, onBack }) {
  const { IconButton } = DS_A;
  return <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', background: 'var(--surface-page)' }}>
    <header style={{ display: 'flex', alignItems: 'center', gap: 8, height: 'var(--topbar-h)', padding: '0 12px 0 20px' }}>
      {onBack && <IconButton icon="arrow-left" label="Back" onClick={onBack} style={{ marginLeft: -12 }} />}
      <span style={{ flex: 1, font: '400 22px/1 var(--font-serif)', letterSpacing: '-0.01em' }}>Origine</span>
      {steps && <span style={{ font: '500 13px/1 var(--font-sans)', color: 'var(--ink-3)' }}>Step {step} of {steps}</span>}
    </header>
    {steps && <div style={{ height: 2, background: 'var(--rule)' }}><div style={{ height: 2, width: (step / steps * 100) + '%', background: 'var(--aubergine)', transition: 'width var(--dur-3) var(--ease-out)' }} /></div>}
    <main style={{ flex: 1, display: 'flex', justifyContent: 'center', padding: 'clamp(32px,8vh,96px) var(--gutter) 40px' }}>
      <div style={{ width: '100%', maxWidth: 440, display: 'grid', gap: 28, alignContent: 'start' }}>{children}</div>
    </main>
  </div>;
}

function SignInScreen({ onSignedIn }) {
  const { Input, Button } = DS_A;
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const h1 = { margin: 0, font: '400 clamp(34px,7vw,44px)/1.06 var(--font-serif)', letterSpacing: '-0.02em', textWrap: 'balance' };
  if (sent) return <AuthFrame onBack={() => setSent(false)}>
    <div style={{ display: 'grid', gap: 12 }}><h1 style={h1}>Check your email</h1>
      <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 17 }}>We sent a sign-in link to <strong style={{ fontWeight: 600, color: 'var(--ink)' }}>{email || 'ella.byrne@example.com'}</strong>. Open it on this device to continue.</p></div>
    <Button full icon="mail-open" onClick={onSignedIn}>Open the link (demo)</Button>
    <p style={{ margin: 0, fontSize: 14, color: 'var(--ink-3)' }}>Nothing arrived? Check your spam folder, or <a href="#" onClick={e => e.preventDefault()}>send it again</a>.</p>
  </AuthFrame>;
  return <AuthFrame>
    <div style={{ display: 'grid', gap: 12 }}>
      <span style={{ font: '500 12px/1 var(--font-sans)', letterSpacing: '.12em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>The Hale family tree</span>
      <h1 style={h1}>Welcome back</h1>
      <p style={{ margin: 0, color: 'var(--ink-2)', fontSize: 17 }}>Enter your email and we'll send you a link to sign in. No password to remember.</p>
    </div>
    <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: 'grid', gap: 16 }}>
      <Input label="Email" type="email" placeholder="name@example.com" value={email} onChange={e => setEmail(e.target.value)} autoComplete="email" />
      <Button type="submit" full>Email me a sign-in link</Button>
    </form>
    <p style={{ margin: 0, paddingTop: 20, borderTop: '1px solid var(--rule)', fontSize: 14, color: 'var(--ink-3)' }}>New here? Ask a relative who's already in the tree to invite you.</p>
  </AuthFrame>;
}

function OnboardingScreen({ onDone }) {
  const { PersonRow, Button, Card, Avatar, Icon } = DS_A;
  const D = window.ORIGINE_DATA;
  const [step, setStep] = React.useState(1);
  const [me, setMe] = React.useState(null);
  const [photo, setPhoto] = React.useState(false);
  const [goal, setGoal] = React.useState('tree');
  const h1 = { margin: 0, font: '400 clamp(30px,6vw,38px)/1.1 var(--font-serif)', letterSpacing: '-0.02em', textWrap: 'balance' };
  const sub = { margin: 0, color: 'var(--ink-2)', fontSize: 17 };
  const back = step > 1 ? () => setStep(step - 1) : undefined;
  if (step === 1) return <AuthFrame step={1} steps={3} onBack={back}>
    <div style={{ display: 'grid', gap: 10 }}><h1 style={h1}>Ruth invited you to the Hale family tree</h1><p style={sub}>Are you already in it? Pick yourself so your photos and stories link to the right place.</p></div>
    <div style={{ display: 'grid', gap: 8 }}>{['e', 'c', 'j'].map(id => <Card key={id} padding="4px 16px" selected={me === id} onClick={() => setMe(id)}>
      <PersonRow person={D.people[id]} relation={id === 'j' ? "Margaret's son" : "Ruth's granddaughter"} trailing={me === id ? <Icon name="check" size={20} /> : <span />} style={{ margin: 0 }} />
    </Card>)}
      <Button variant="ghost" icon="user-plus" onClick={() => setMe('new')} style={{ justifyContent: 'flex-start', paddingLeft: 16, background: me === 'new' ? 'var(--vellum)' : undefined }}>I'm not in the tree yet</Button></div>
    <Button full disabled={!me} onClick={() => setStep(2)}>Continue</Button>
  </AuthFrame>;
  if (step === 2) { const p = D.people[me] || { name: 'You' };
    return <AuthFrame step={2} steps={3} onBack={back}>
      <div style={{ display: 'grid', gap: 10 }}><h1 style={h1}>Add a photo of yourself</h1><p style={sub}>It helps relatives recognise you. You can change it any time.</p></div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
        <Avatar name={p.name} src={photo ? '../../assets/sample-photos/125_0974.jpg' : undefined} focus="28% 30%" size={96} ring />
        <div style={{ display: 'grid', gap: 4 }}><span style={{ font: '400 22px/1.2 var(--font-serif)' }}>{p.name}</span><span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{p.born ? 'Born ' + p.born : 'New to the tree'}</span></div>
      </div>
      <div style={{ display: 'grid', gap: 10 }}>
        <Button full variant={photo ? 'secondary' : 'primary'} icon="camera" onClick={() => setPhoto(true)}>{photo ? 'Choose a different photo' : 'Choose a photo'}</Button>
        <Button full variant={photo ? 'primary' : 'ghost'} onClick={() => setStep(3)}>{photo ? 'Continue' : 'Skip for now'}</Button>
      </div>
    </AuthFrame>; }
  const opts = [['tree', 'git-fork', 'Explore the family tree', 'See who came before you.'], ['stories', 'images', 'Add family photos', 'Upload pictures and tag who is in them.'], ['people', 'pencil', 'Fill in what you know', 'Names, dates and places for your side of the family.']];
  return <AuthFrame step={3} steps={3} onBack={back}>
    <div style={{ display: 'grid', gap: 10 }}><h1 style={h1}>What would you like to do first?</h1><p style={sub}>You can do all of these later.</p></div>
    <div style={{ display: 'grid', gap: 10 }}>{opts.map(([id, ic, t, d]) => <Card key={id} padding={16} selected={goal === id} onClick={() => setGoal(id)} style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
      <span style={{ width: 44, height: 44, flex: 'none', borderRadius: 'var(--radius-md)', background: 'var(--vellum)', display: 'grid', placeItems: 'center' }}><Icon name={ic} size={20} /></span>
      <span style={{ display: 'grid', gap: 2, flex: 1 }}><span style={{ font: '500 16px/1.3 var(--font-sans)' }}>{t}</span><span style={{ fontSize: 14, color: 'var(--ink-3)' }}>{d}</span></span>
      {goal === id && <Icon name="check" size={20} />}
    </Card>)}</div>
    <Button full onClick={() => onDone(goal)}>Get started</Button>
  </AuthFrame>;
}
Object.assign(window, { SignInScreen, OnboardingScreen });
