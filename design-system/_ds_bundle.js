/* @ds-bundle: {"format":4,"namespace":"OrigineDesignSystem_f2a82e","components":[{"name":"Avatar","sourcePath":"components/core/Avatar.jsx"},{"name":"AvatarStack","sourcePath":"components/core/AvatarStack.jsx"},{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Icon","sourcePath":"components/core/Icon.jsx"},{"name":"IconButton","sourcePath":"components/core/IconButton.jsx"},{"name":"Tag","sourcePath":"components/core/Tag.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Stepper","sourcePath":"components/forms/Stepper.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"ActivityItem","sourcePath":"components/genealogy/ActivityItem.jsx"},{"name":"EventRow","sourcePath":"components/genealogy/EventRow.jsx"},{"name":"FamilyChart","sourcePath":"components/genealogy/FamilyChart.jsx"},{"name":"PersonNode","sourcePath":"components/genealogy/PersonNode.jsx"},{"name":"PersonRow","sourcePath":"components/genealogy/PersonRow.jsx"},{"name":"PhotoTile","sourcePath":"components/genealogy/PhotoTile.jsx"},{"name":"BottomNav","sourcePath":"components/navigation/BottomNav.jsx"},{"name":"SideNav","sourcePath":"components/navigation/SideNav.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"TopBar","sourcePath":"components/navigation/TopBar.jsx"}],"sourceHashes":{"components/core/Avatar.jsx":"65bc08c0c9a8","components/core/AvatarStack.jsx":"29f6fa0512f7","components/core/Badge.jsx":"3a0d974a8021","components/core/Button.jsx":"f9d1545f70fe","components/core/Card.jsx":"58ef9b9f2fb0","components/core/Icon.jsx":"528f5ff9d97f","components/core/IconButton.jsx":"7d1695c480bd","components/core/Tag.jsx":"e0574a5cfc81","components/feedback/Dialog.jsx":"819878da63b2","components/feedback/Toast.jsx":"13ef16913551","components/feedback/Tooltip.jsx":"fd668a35c23e","components/forms/Checkbox.jsx":"ea915dd34607","components/forms/Input.jsx":"96c3e48d13eb","components/forms/Radio.jsx":"66db416ab4cf","components/forms/Select.jsx":"0bc765b367be","components/forms/Stepper.jsx":"0a855ef59cad","components/forms/Switch.jsx":"01aeae2c0c0e","components/genealogy/ActivityItem.jsx":"afc1124f00b6","components/genealogy/EventRow.jsx":"a98e318ee020","components/genealogy/FamilyChart.jsx":"50eab0ebce4d","components/genealogy/PersonNode.jsx":"7be4adaabe23","components/genealogy/PersonRow.jsx":"9ceff0b68723","components/genealogy/PhotoTile.jsx":"e7b86cb67e47","components/navigation/BottomNav.jsx":"e583014d909a","components/navigation/SideNav.jsx":"6f589c2565b8","components/navigation/Tabs.jsx":"4a5b1e88fe0f","components/navigation/TopBar.jsx":"8d78dc12b197","ui_kits/web-app/AppShell.jsx":"c6da9bf393f5","ui_kits/web-app/AuthScreens.jsx":"020a0773705e","ui_kits/web-app/EditScreens.jsx":"48e101dd4be1","ui_kits/web-app/PersonScreen.jsx":"2c99c8c332ee","ui_kits/web-app/Screens.jsx":"89f123741b33","ui_kits/web-app/TreeScreen.jsx":"783d81893b55","ui_kits/web-app/data.js":"07c0904580d6"},"inlinedExternals":[],"unexposedExports":[{"name":"lifespan","sourcePath":"components/genealogy/PersonNode.jsx"}]} */

(() => {

const __ds_ns = (window.OrigineDesignSystem_f2a82e = window.OrigineDesignSystem_f2a82e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Avatar.jsx
try { (() => {
function initials(n) {
  return (n || '?').split(/\s+/).filter(Boolean).map(w => w[0]).slice(0, 2).join('').toUpperCase();
}
function Avatar({
  name,
  src,
  focus = 'center',
  size = 40,
  ring,
  style
}) {
  const pad = ring ? Math.max(2, Math.round(size / 22)) : 0;
  return /*#__PURE__*/React.createElement("span", {
    title: name,
    style: {
      width: size,
      height: size,
      flex: 'none',
      borderRadius: '50%',
      display: 'inline-grid',
      padding: pad,
      background: ring ? 'var(--rule-strong)' : 'none',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: '100%',
      height: '100%',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      overflow: 'hidden',
      background: src ? 'var(--vellum) ' + focus + '/cover url(' + src + ')' : 'var(--vellum)',
      color: 'var(--ink-2)',
      font: '500 ' + Math.round(size * 0.36) + 'px/1 var(--font-sans)',
      boxShadow: ring ? '0 0 0 2px var(--paper)' : 'inset 0 0 0 1px var(--rule)'
    }
  }, src ? null : initials(name)));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/core/AvatarStack.jsx
try { (() => {
function AvatarStack({
  people = [],
  max = 3,
  size = 32,
  label,
  style
}) {
  const shown = people.slice(0, max);
  const extra = people.length - shown.length;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex'
    }
  }, shown.map((p, i) => /*#__PURE__*/React.createElement("span", {
    key: i,
    style: {
      marginLeft: i ? -size * 0.28 : 0,
      borderRadius: '50%',
      boxShadow: '0 0 0 2px var(--paper)',
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: p.name,
    src: p.src,
    size: size
  }))), extra > 0 && /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: -size * 0.28,
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      background: 'var(--parchment)',
      color: 'var(--ink-2)',
      font: '600 ' + Math.round(size * 0.34) + 'px/1 var(--font-sans)',
      boxShadow: '0 0 0 2px var(--paper)'
    }
  }, "+", extra)), label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, label));
}
Object.assign(__ds_scope, { AvatarStack });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/AvatarStack.jsx", error: String((e && e.message) || e) }); }

// components/core/Badge.jsx
try { (() => {
const T = {
  neutral: ['var(--vellum)', 'var(--ink-2)'],
  accent: ['var(--aubergine-tint)', 'var(--aubergine)'],
  success: ['var(--success-tint)', 'var(--success)'],
  warning: ['var(--warning-tint)', 'var(--warning)'],
  danger: ['var(--danger-tint)', 'var(--danger)'],
  info: ['var(--info-tint)', 'var(--info)']
};
function Badge({
  tone = 'neutral',
  children,
  style
}) {
  const [bg, fg] = T[tone] || T.neutral;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      height: 22,
      padding: '0 8px',
      borderRadius: 'var(--radius-sm)',
      background: bg,
      color: fg,
      font: '600 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
const {
  useState
} = React;
function Card({
  variant = 'outlined',
  padding = 20,
  selected,
  onClick,
  children,
  style
}) {
  const [h, setH] = useState(false);
  const bg = variant === 'sunken' ? 'var(--surface-sunken)' : 'var(--surface-card)';
  const sh = variant === 'raised' ? 'var(--shadow-2)' : onClick && h ? 'var(--shadow-1)' : 'none';
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    style: {
      background: bg,
      border: variant === 'sunken' ? '1px solid transparent' : '1px solid ' + (selected ? 'var(--ink)' : onClick && h ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-lg)',
      padding,
      boxShadow: sh,
      cursor: onClick ? 'pointer' : 'default',
      transition: 'border-color var(--dur-1) var(--ease-out), box-shadow var(--dur-2) var(--ease-out)',
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/Icon.jsx
try { (() => {
const CDN = 'https://unpkg.com/lucide-static@0.460.0/icons/';
function Icon({
  name,
  size = 20,
  color = 'currentColor',
  label,
  style
}) {
  const m = 'url(' + CDN + name + '.svg) center/contain no-repeat';
  return /*#__PURE__*/React.createElement("span", {
    role: label ? 'img' : undefined,
    "aria-label": label,
    "aria-hidden": label ? undefined : true,
    style: {
      display: 'inline-block',
      flex: 'none',
      width: size,
      height: size,
      backgroundColor: color,
      WebkitMask: m,
      mask: m,
      ...style
    }
  });
}
Object.assign(__ds_scope, { Icon });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Icon.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
const {
  useState
} = React;
const V = {
  primary: {
    bg: 'var(--action-primary)',
    hov: 'var(--action-primary-hover)',
    fg: 'var(--text-on-inverse)',
    bd: 'var(--action-primary)'
  },
  accent: {
    bg: 'var(--action-accent)',
    hov: 'var(--action-accent-hover)',
    fg: '#fff',
    bd: 'var(--action-accent)'
  },
  secondary: {
    bg: 'var(--surface-card)',
    hov: 'var(--vellum)',
    fg: 'var(--text-primary)',
    bd: 'var(--border-strong)'
  },
  ghost: {
    bg: 'transparent',
    hov: 'var(--vellum)',
    fg: 'var(--text-primary)',
    bd: 'transparent'
  },
  danger: {
    bg: 'transparent',
    hov: 'var(--danger-tint)',
    fg: 'var(--danger)',
    bd: 'var(--border-strong)'
  }
};
function Button({
  variant = 'primary',
  size = 'md',
  icon,
  iconRight,
  full,
  disabled,
  type = 'button',
  onClick,
  children,
  style
}) {
  const [h, setH] = useState(false);
  const [p, setP] = useState(false);
  const v = V[variant] || V.primary;
  const sm = size === 'sm';
  return /*#__PURE__*/React.createElement("button", {
    type: type,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => {
      setH(false);
      setP(false);
    },
    onMouseDown: () => setP(true),
    onMouseUp: () => setP(false),
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      height: sm ? 'var(--control-h-sm)' : 'var(--control-h)',
      padding: sm ? '0 14px' : '0 20px',
      width: full ? '100%' : undefined,
      font: (sm ? '500 14px' : '500 15px') + '/1 var(--font-sans)',
      borderRadius: 'var(--radius-md)',
      border: '1px solid ' + v.bd,
      background: h && !disabled ? v.hov : v.bg,
      color: v.fg,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      transform: p && !disabled ? 'translateY(1px)' : 'none',
      transition: 'background var(--dur-1) var(--ease-out), transform var(--dur-1)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: sm ? 16 : 18
  }), children, iconRight && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: iconRight,
    size: sm ? 16 : 18
  }));
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/IconButton.jsx
try { (() => {
const {
  useState
} = React;
function IconButton({
  icon,
  label,
  variant = 'ghost',
  size = 'md',
  badge,
  onClick,
  disabled,
  style
}) {
  const [h, setH] = useState(false);
  const d = size === 'sm' ? 36 : 48;
  const bg = variant === 'primary' ? h ? 'var(--action-primary-hover)' : 'var(--action-primary)' : variant === 'secondary' ? h ? 'var(--vellum)' : 'var(--surface-card)' : h ? 'var(--vellum)' : 'transparent';
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    onClick: onClick,
    disabled: disabled,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      position: 'relative',
      width: d,
      height: d,
      flex: 'none',
      display: 'inline-grid',
      placeItems: 'center',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      border: variant === 'secondary' ? '1px solid var(--border-strong)' : '1px solid transparent',
      background: bg,
      color: variant === 'primary' ? 'var(--text-on-inverse)' : 'var(--text-primary)',
      opacity: disabled ? 0.45 : 1,
      transition: 'background var(--dur-1) var(--ease-out)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: size === 'sm' ? 18 : 20
  }), badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: size === 'sm' ? 4 : 8,
      right: size === 'sm' ? 4 : 8,
      minWidth: 16,
      height: 16,
      padding: '0 4px',
      borderRadius: 999,
      background: 'var(--aubergine)',
      color: '#fff',
      font: '600 10px/16px var(--font-sans)',
      textAlign: 'center',
      boxShadow: '0 0 0 2px var(--paper)'
    }
  }, badge) : null);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/core/Tag.jsx
try { (() => {
const {
  useState
} = React;
function Tag({
  icon,
  selected,
  onClick,
  onRemove,
  children,
  style
}) {
  const [h, setH] = useState(false);
  const clickable = !!onClick;
  return /*#__PURE__*/React.createElement("span", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    role: clickable ? 'button' : undefined,
    "aria-pressed": clickable ? !!selected : undefined,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 8,
      minHeight: 36,
      padding: '0 12px',
      borderRadius: 'var(--radius-full)',
      cursor: clickable ? 'pointer' : 'default',
      background: selected ? 'var(--ink)' : h && clickable ? 'var(--parchment)' : 'var(--vellum)',
      color: selected ? 'var(--paper)' : 'var(--ink-2)',
      font: '500 14px/1 var(--font-sans)',
      transition: 'background var(--dur-1) var(--ease-out)',
      whiteSpace: 'nowrap',
      ...style
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 16
  }), children, onRemove && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Remove",
    onClick: e => {
      e.stopPropagation();
      onRemove();
    },
    style: {
      border: 0,
      background: 'none',
      padding: 0,
      margin: '0 -4px 0 0',
      color: 'inherit',
      cursor: 'pointer',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 14
  })));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
const {
  useEffect,
  useState
} = React;
function Dialog({
  open,
  title,
  description,
  children,
  actions,
  onClose,
  sheet,
  width = 480
}) {
  const [narrow, setNarrow] = useState(typeof window !== 'undefined' && window.innerWidth < 600);
  useEffect(() => {
    const r = () => setNarrow(window.innerWidth < 600);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  useEffect(() => {
    if (!open) return;
    const k = e => e.key === 'Escape' && onClose && onClose();
    window.addEventListener('keydown', k);
    return () => window.removeEventListener('keydown', k);
  }, [open, onClose]);
  if (!open) return null;
  const asSheet = sheet ?? narrow;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 50,
      background: 'var(--scrim)',
      display: 'flex',
      alignItems: asSheet ? 'flex-end' : 'center',
      justifyContent: 'center',
      padding: asSheet ? 0 : 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    "aria-label": title,
    onClick: e => e.stopPropagation(),
    style: {
      width: asSheet ? '100%' : width,
      maxWidth: '100%',
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-page)',
      borderRadius: asSheet ? 'var(--radius-xl) var(--radius-xl) 0 0' : 'var(--radius-lg)',
      boxShadow: 'var(--shadow-3)',
      padding: asSheet ? '12px 20px 28px' : 28,
      display: 'grid',
      gap: 20
    }
  }, asSheet && /*#__PURE__*/React.createElement("i", {
    style: {
      justifySelf: 'center',
      width: 40,
      height: 4,
      borderRadius: 4,
      background: 'var(--rule-strong)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 26px/1.15 var(--font-serif)',
      letterSpacing: '-0.01em'
    }
  }, title), description && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-3)',
      fontSize: 15
    }
  }, description)), onClose && /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "x",
    label: "Close",
    size: "sm",
    onClick: onClose,
    style: {
      margin: '-4px -8px 0 0'
    }
  })), children, actions && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      flexDirection: asSheet ? 'column-reverse' : 'row'
    }
  }, actions)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
const I = {
  neutral: 'info',
  success: 'check-circle-2',
  warning: 'alert-triangle',
  danger: 'alert-circle'
};
function Toast({
  tone = 'neutral',
  message,
  actionLabel,
  onAction,
  onClose,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      minHeight: 52,
      padding: '8px 8px 8px 16px',
      background: 'var(--ink)',
      color: 'var(--paper)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-2)',
      font: '400 15px/1.35 var(--font-sans)',
      maxWidth: 440,
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: I[tone] || I.neutral,
    size: 18,
    color: tone === 'success' ? '#b9cba6' : tone === 'warning' ? '#e6c77d' : tone === 'danger' ? '#f0a497' : 'var(--ink-4)'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, message), actionLabel && /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAction,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--paper)',
      font: '600 14px/1 var(--font-sans)',
      textDecoration: 'underline',
      textUnderlineOffset: 3,
      padding: '10px 8px',
      cursor: 'pointer'
    }
  }, actionLabel), onClose && /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'none',
      color: 'var(--ink-4)',
      padding: 8,
      cursor: 'pointer',
      display: 'grid'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "x",
    size: 16
  })));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
const {
  useState
} = React;
function Tooltip({
  content,
  side = 'top',
  children
}) {
  const [o, setO] = useState(false);
  const pos = side === 'bottom' ? {
    top: 'calc(100% + 8px)'
  } : {
    bottom: 'calc(100% + 8px)'
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex'
    },
    onMouseEnter: () => setO(true),
    onMouseLeave: () => setO(false),
    onFocus: () => setO(true),
    onBlur: () => setO(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: 'absolute',
      left: '50%',
      ...pos,
      transform: 'translateX(-50%) translateY(' + (o ? 0 : side === 'bottom' ? -4 : 4) + 'px)',
      opacity: o ? 1 : 0,
      pointerEvents: 'none',
      transition: 'opacity var(--dur-2) var(--ease-out), transform var(--dur-2) var(--ease-out)',
      background: 'var(--ink)',
      color: 'var(--paper)',
      font: '500 13px/1.3 var(--font-sans)',
      padding: '7px 10px',
      borderRadius: 'var(--radius-sm)',
      whiteSpace: 'nowrap',
      zIndex: 40
    }
  }, content));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function Checkbox({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minHeight: 'var(--tap-min)',
      padding: '12px 0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      display: 'grid',
      placeItems: 'center',
      border: '1.5px solid ' + (checked ? 'var(--ink)' : 'var(--rule-strong)'),
      background: checked ? 'var(--ink)' : 'var(--surface-card)',
      transition: 'background var(--dur-1)'
    }
  }, checked && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "check",
    size: 16,
    color: "var(--paper)"
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/22px var(--font-sans)',
      color: 'var(--text-primary)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const {
  useState,
  useId
} = React;
function Input({
  label,
  hint,
  error,
  icon,
  multiline,
  rows = 4,
  style,
  ...rest
}) {
  const [f, setF] = useState(false);
  const id = useId();
  const bd = error ? 'var(--danger)' : f ? 'var(--ink)' : 'var(--border-strong)';
  const field = {
    width: '100%',
    border: 0,
    outline: 0,
    background: 'transparent',
    font: '400 16px/1.4 var(--font-sans)',
    color: 'var(--text-primary)',
    padding: multiline ? '12px 0' : 0,
    resize: 'vertical',
    minHeight: multiline ? rows * 22 + 24 : undefined
  };
  const Tag = multiline ? 'textarea' : 'input';
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: multiline ? 'flex-start' : 'center',
      gap: 10,
      minHeight: 'var(--control-h)',
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: '1px solid ' + bd,
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      transition: 'border-color var(--dur-1), box-shadow var(--dur-1)',
      color: 'var(--ink-3)'
    }
  }, icon && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }), /*#__PURE__*/React.createElement(Tag, _extends({
    id: id,
    rows: multiline ? rows : undefined,
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: field
  }, rest))), (error || hint) && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.35 var(--font-sans)',
      color: error ? 'var(--danger)' : 'var(--ink-3)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function Radio({
  label,
  description,
  name,
  value,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'flex-start',
      minHeight: 'var(--tap-min)',
      padding: '12px 0',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", {
    type: "radio",
    name: name,
    value: value,
    checked: !!checked,
    disabled: disabled,
    onChange: () => onChange && onChange(value),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      flex: 'none',
      borderRadius: '50%',
      display: 'grid',
      placeItems: 'center',
      border: '1.5px solid ' + (checked ? 'var(--ink)' : 'var(--rule-strong)'),
      background: 'var(--surface-card)'
    }
  }, checked && /*#__PURE__*/React.createElement("i", {
    style: {
      width: 10,
      height: 10,
      borderRadius: '50%',
      background: 'var(--ink)'
    }
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/22px var(--font-sans)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, description)));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
const {
  useState,
  useId
} = React;
function Select({
  label,
  hint,
  options = [],
  value,
  onChange,
  placeholder,
  style
}) {
  const [f, setF] = useState(false);
  const id = useId();
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: id,
    style: {
      display: 'grid',
      gap: 6,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", {
    id: id,
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    onFocus: () => setF(true),
    onBlur: () => setF(false),
    style: {
      appearance: 'none',
      width: '100%',
      height: 'var(--control-h)',
      padding: '0 40px 0 14px',
      font: '400 16px/1 var(--font-sans)',
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid ' + (f ? 'var(--ink)' : 'var(--border-strong)'),
      borderRadius: 'var(--radius-md)',
      boxShadow: f ? 'var(--focus-ring)' : 'none',
      outline: 0,
      cursor: 'pointer'
    }
  }, placeholder && /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, placeholder), options.map(o => {
    const v = typeof o === 'string' ? o : o.value;
    const l = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })), /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-down",
    size: 18,
    color: "var(--ink-3)",
    style: {
      position: 'absolute',
      right: 14,
      pointerEvents: 'none'
    }
  })), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.35 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Stepper.jsx
try { (() => {
const {
  useState
} = React;
function StepBtn({
  icon,
  label,
  disabled,
  onClick,
  side
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    "aria-label": label,
    title: label,
    disabled: disabled,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      width: 48,
      height: 46,
      display: 'grid',
      placeItems: 'center',
      border: 0,
      background: h && !disabled ? 'var(--vellum)' : 'transparent',
      color: 'var(--ink)',
      opacity: disabled ? 0.3 : 1,
      cursor: disabled ? 'not-allowed' : 'pointer',
      borderRadius: side === 'l' ? 'var(--radius-md) 0 0 var(--radius-md)' : '0 var(--radius-md) var(--radius-md) 0',
      transition: 'background var(--dur-1) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 18
  }));
}
function Stepper({
  value = 0,
  min = 0,
  max = 99,
  step = 1,
  onChange,
  label,
  decLabel,
  incLabel,
  style
}) {
  const set = v => onChange && onChange(Math.max(min, Math.min(max, v)));
  return /*#__PURE__*/React.createElement("div", {
    role: "group",
    "aria-label": label,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/1.2 var(--font-sans)',
      color: 'var(--ink-2)'
    }
  }, label), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-md)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement(StepBtn, {
    side: "l",
    icon: "minus",
    label: decLabel || 'Decrease',
    disabled: value <= min,
    onClick: () => set(value - step)
  }), /*#__PURE__*/React.createElement("output", {
    "aria-live": "polite",
    style: {
      minWidth: 40,
      textAlign: 'center',
      font: '600 17px/1 var(--font-sans)',
      color: 'var(--ink)',
      borderLeft: '1px solid var(--rule)',
      borderRight: '1px solid var(--rule)',
      padding: '14px 0'
    }
  }, value), /*#__PURE__*/React.createElement(StepBtn, {
    side: "r",
    icon: "plus",
    label: incLabel || 'Increase',
    disabled: value >= max,
    onClick: () => set(value + step)
  })));
}
Object.assign(__ds_scope, { Stepper });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Stepper.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function Switch({
  label,
  description,
  checked,
  onChange,
  disabled,
  style
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: 'var(--tap-min)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 16px/1.35 var(--font-sans)'
    }
  }, label), description && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.4 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, description)), /*#__PURE__*/React.createElement("input", {
    type: "checkbox",
    role: "switch",
    checked: !!checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 1,
      height: 1
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 26,
      flex: 'none',
      borderRadius: 999,
      padding: 3,
      background: checked ? 'var(--ink)' : 'var(--rule-strong)',
      transition: 'background var(--dur-2) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("i", {
    style: {
      display: 'block',
      width: 20,
      height: 20,
      borderRadius: '50%',
      background: 'var(--card)',
      boxShadow: 'var(--shadow-1)',
      transform: checked ? 'translateX(18px)' : 'none',
      transition: 'transform var(--dur-2) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/ActivityItem.jsx
try { (() => {
function ActivityItem({
  who,
  action,
  target,
  time,
  preview,
  onClick,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick,
    style: {
      display: 'flex',
      gap: 12,
      padding: '14px 0',
      borderBottom: '1px solid var(--border-subtle)',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: who.name,
    src: who.src,
    size: 36
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: '400 15px/1.45 var(--font-sans)',
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, who.name), " ", action, " ", target && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-serif)',
      fontSize: 17,
      color: 'var(--ink)'
    }
  }, target)), preview, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, time)));
}
Object.assign(__ds_scope, { ActivityItem });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/ActivityItem.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/EventRow.jsx
try { (() => {
function EventRow({
  year,
  title,
  place,
  detail,
  icon = 'circle',
  last,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '52px 28px minmax(0,1fr)',
      columnGap: 8,
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 14px/24px var(--font-sans)',
      color: 'var(--aubergine)',
      textAlign: 'right'
    }
  }, year), /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'flex',
      justifyContent: 'center'
    }
  }, !last && /*#__PURE__*/React.createElement("i", {
    style: {
      position: 'absolute',
      top: 28,
      bottom: 0,
      width: 1,
      background: 'var(--rule)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 24,
      borderRadius: '50%',
      background: 'var(--vellum)',
      display: 'grid',
      placeItems: 'center',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: icon,
    size: 13
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      paddingBottom: last ? 0 : 20
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/24px var(--font-sans)'
    }
  }, title), place && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.35 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, place), detail && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 15px/1.5 var(--font-sans)',
      color: 'var(--ink-2)',
      marginTop: 4
    }
  }, detail)));
}
Object.assign(__ds_scope, { EventRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/EventRow.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/PersonNode.jsx
try { (() => {
const {
  useState
} = React;
function lifespan(p) {
  if (!p) return '';
  if (p.living) return (p.born || '') + ' – Living';
  return (p.born || '?') + ' – ' + (p.died || '?');
}
function PersonNode({
  person,
  selected,
  size = 'md',
  onClick,
  addLabel,
  onAdd,
  style
}) {
  const [h, setH] = useState(false);
  const sm = size === 'sm';
  const w = sm ? 168 : 200;
  if (!person) return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onAdd,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-label": addLabel || 'Add person',
    title: addLabel || 'Add person',
    style: {
      width: w,
      minHeight: sm ? 56 : 68,
      display: 'grid',
      placeItems: 'center',
      padding: 0,
      border: '1px dashed ' + (h ? 'var(--ink-3)' : 'var(--rule-strong)'),
      borderRadius: 'var(--radius-lg)',
      background: h ? 'var(--vellum)' : 'transparent',
      color: h ? 'var(--ink-2)' : 'var(--ink-3)',
      cursor: 'pointer',
      transition: 'background var(--dur-1), border-color var(--dur-1)',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "plus",
    size: 22
  }));
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-pressed": !!selected,
    style: {
      width: w,
      minHeight: sm ? 56 : 68,
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      padding: sm ? '8px 12px' : '10px 14px',
      textAlign: 'left',
      cursor: 'pointer',
      background: 'var(--surface-card)',
      border: '1px solid ' + (selected ? 'var(--ink)' : h ? 'var(--border-strong)' : 'var(--border-subtle)'),
      borderRadius: 'var(--radius-lg)',
      boxShadow: selected ? '0 0 0 1px var(--ink)' : h ? 'var(--shadow-1)' : 'none',
      transition: 'border-color var(--dur-1), box-shadow var(--dur-2)',
      ...style
    }
  }, person.src && /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: person.name,
    src: person.src,
    size: sm ? 36 : 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 ' + (sm ? 15 : 17) + 'px/1.15 var(--font-serif)',
      color: 'var(--ink)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: '-webkit-box',
      WebkitLineClamp: 2,
      WebkitBoxOrient: 'vertical'
    }
  }, person.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 13px/1.2 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, lifespan(person))));
}
Object.assign(__ds_scope, { lifespan, PersonNode });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/PersonNode.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/FamilyChart.jsx
try { (() => {
const {
  useState,
  useRef,
  useEffect,
  useLayoutEffect
} = React;
const NW = 176,
  NH = 68,
  GX = 20,
  CG = 28,
  RG = 56,
  PX = 32,
  PT = 88,
  PB = 32;
const ZOOM_KEY = 'origine-zoom-degrees';
function buildGraph(people) {
  const par = {},
    kids = {},
    sp = {};
  const ids = Object.keys(people);
  ids.forEach(id => {
    const p = people[id];
    par[id] = [p.father, p.mother].filter(x => x && people[x]);
    kids[id] = kids[id] || [];
  });
  ids.forEach(id => {
    const p = people[id];
    par[id].forEach(q => {
      kids[q] = kids[q] || [];
      if (!kids[q].includes(id)) kids[q].push(id);
    });
    (p.children || []).forEach(c => {
      if (!people[c]) return;
      if (!kids[id].includes(c)) kids[id].push(c);
      if (!par[c].includes(id)) par[c].push(id);
    });
    [].concat(p.spouse || [], p.spouses || []).forEach(s => {
      if (!people[s]) return;
      (sp[id] = sp[id] || new Set()).add(s);
      (sp[s] = sp[s] || new Set()).add(id);
    });
  });
  // co-parents of the same child are drawn as a couple (layout only; not a degree link)
  const co = {};
  ids.forEach(id => {
    const ps = par[id];
    if (ps.length === 2) {
      (co[ps[0]] = co[ps[0]] || new Set()).add(ps[1]);
      (co[ps[1]] = co[ps[1]] || new Set()).add(ps[0]);
    }
  });
  return {
    par: id => par[id] || [],
    kids: id => kids[id] || [],
    sp: id => [...(sp[id] || [])],
    partners: id => [...new Set([...(sp[id] || []), ...(co[id] || [])])]
  };
}
function reach(G, focus, degree) {
  const dist = {
      [focus]: 0
    },
    gen = {
      [focus]: 0
    },
    order = [focus],
    q = [focus];
  while (q.length) {
    const id = q.shift();
    if (dist[id] >= degree) continue;
    [[G.par(id), -1], [G.sp(id), 0], [G.kids(id), 1]].forEach(([list, dg]) => list.forEach(n => {
      if (n in dist) return;
      dist[n] = dist[id] + 1;
      gen[n] = gen[id] + dg;
      order.push(n);
      q.push(n);
    }));
  }
  return {
    dist,
    gen,
    order
  };
}
function layout(G, R) {
  const inS = id => id in R.dist;
  const unitOf = {},
    rows = {};
  R.order.forEach(id => {
    if (unitOf[id]) return;
    const g = R.gen[id];
    const s = G.partners(id).find(x => inS(x) && R.gen[x] === g && !unitOf[x]);
    const u = {
      ids: s ? [id, s] : [id],
      g,
      x: 0
    };
    u.w = u.ids.length * NW + (u.ids.length - 1) * CG;
    u.ids.forEach(i => {
      unitOf[i] = u;
    });
    (rows[g] = rows[g] || []).push(u);
  });
  const gens = Object.keys(rows).map(Number).sort((a, b) => a - b);
  gens.forEach(g => {
    let x = 0;
    rows[g].forEach(u => {
      u.x = x;
      x += u.w + GX;
    });
  });
  const cx = id => {
    const u = unitOf[id];
    return u.x + u.ids.indexOf(id) * (NW + CG) + NW / 2;
  };
  const avg = a => a.length ? a.reduce((t, v) => t + v, 0) / a.length : undefined;
  const place = (row, want) => {
    row.forEach(u => {
      const w = want(u);
      u._d = w === undefined ? u.x + u.w / 2 : w;
    });
    row.sort((a, b) => a._d - b._d);
    let cur = -Infinity;
    row.forEach(u => {
      u.x = Math.max(u._d - u.w / 2, cur);
      cur = u.x + u.w + GX;
    });
    const sh = avg(row.map(u => u._d - (u.x + u.w / 2))) || 0;
    row.forEach(u => {
      u.x += sh;
    });
  };
  const down = u => {
    if (u.ids.length === 2) {
      const a = avg(G.par(u.ids[0]).filter(inS).map(cx)),
        b = avg(G.par(u.ids[1]).filter(inS).map(cx));
      if (a !== undefined && b !== undefined && a > b) u.ids.reverse();
    }
    return avg(u.ids.flatMap(i => G.par(i).filter(inS)).map(cx));
  };
  const up = u => avg(u.ids.flatMap(i => G.kids(i).filter(inS)).map(cx));
  for (let it = 0; it < 4; it++) {
    gens.slice(1).forEach(g => place(rows[g], down));
    gens.slice(0, -1).reverse().forEach(g => place(rows[g], up));
  }
  gens.slice(1).forEach(g => place(rows[g], down));
  const all = gens.flatMap(g => rows[g]);
  const minX = Math.min(...all.map(u => u.x)),
    maxX = Math.max(...all.map(u => u.x + u.w));
  const pos = {};
  R.order.forEach(id => {
    pos[id] = {
      x: cx(id) - NW / 2 - minX + PX,
      y: (R.gen[id] - gens[0]) * (NH + RG) + PT
    };
  });
  const lines = [];
  all.forEach(u => {
    if (u.ids.length === 2) {
      const a = pos[u.ids[0]],
        b = pos[u.ids[1]];
      lines.push({
        k: 'c' + u.ids.join('-'),
        d: 'M' + (a.x + NW) + ' ' + (a.y + NH / 2) + ' H' + b.x
      });
    }
  });
  R.order.forEach(c => {
    const ps = G.par(c).filter(inS);
    if (!ps.length) return;
    const P = ps.map(p => pos[p]);
    const sx = avg(P.map(p => p.x + NW / 2));
    const sy = ps.length === 2 && unitOf[ps[0]] === unitOf[ps[1]] ? P[0].y + NH / 2 : Math.max(...P.map(p => p.y)) + NH;
    const ex = pos[c].x + NW / 2,
      ey = pos[c].y;
    lines.push({
      k: ps.join('+') + '>' + c,
      d: 'M' + sx + ' ' + sy + ' V' + (ey - RG / 2) + ' H' + ex + ' V' + ey
    });
  });
  return {
    pos,
    lines,
    w: maxX - minX + PX * 2,
    h: gens.length * (NH + RG) - RG + PT + PB
  };
}
function FamilyChart({
  people: source = {},
  focusId,
  defaultFocusId,
  onFocus,
  degree,
  defaultDegree = 2,
  onDegreeChange,
  minDegree = 1,
  maxDegree = 6,
  onAdd,
  height = 520,
  style
}) {
  const [fLocal, setFLocal] = useState(defaultFocusId || Object.keys(source)[0]);
  const [dLocal, setDLocal] = useState(defaultDegree);
  const focus = source[focusId ?? fLocal] ? focusId ?? fLocal : Object.keys(source)[0];
  // empty + slots for the focused person's missing parents
  const people = {
    ...source
  };
  if (onAdd && people[focus]) {
    const f = {
      ...people[focus]
    };
    people[focus] = f;
    const realF = f.father && source[f.father],
      realM = f.mother && source[f.mother];
    if (!realF) {
      f.father = '__add:father';
      people[f.father] = {
        id: f.father,
        add: 'father',
        spouse: realM ? f.mother : undefined
      };
    }
    if (!realM) {
      f.mother = '__add:mother';
      people[f.mother] = {
        id: f.mother,
        add: 'mother',
        spouse: f.father
      };
    }
  }
  const deg = degree ?? dLocal;
  const setFocus = id => {
    setFLocal(id);
    onFocus && onFocus(id);
  };
  const setDeg = n => {
    const v = Math.max(minDegree, Math.min(maxDegree, n));
    setDLocal(v);
    onDegreeChange && onDegreeChange(v);
  };
  const [mode, setMode] = useState(() => {
    try {
      return localStorage.getItem(ZOOM_KEY) === 'on' ? 'on' : 'ask';
    } catch (e) {
      return 'ask';
    }
  });
  const [asking, setAsking] = useState(false);
  const [remember, setRemember] = useState(true);
  const G = buildGraph(people);
  const R = reach(G, focus, deg);
  const L = layout(G, R);
  const beyond = id => people[id].add ? 0 : [...G.par(id), ...G.sp(id), ...G.kids(id)].filter(n => !(n in R.dist) && !people[n].add).length;
  const scroller = useRef(null),
    canvas = useRef(null),
    first = useRef(true);
  const live = useRef({});
  live.current = {
    deg,
    mode,
    asking,
    setDeg,
    ask: () => setAsking(true)
  };
  const centre = smooth => {
    const el = scroller.current,
      cv = canvas.current,
      n = L.pos[focus];
    if (!el || !cv || !n) return;
    el.scrollTo({
      left: cv.offsetLeft + n.x + NW / 2 - el.clientWidth / 2,
      top: cv.offsetTop + n.y + NH / 2 - el.clientHeight / 2 + PT / 3,
      behavior: smooth ? 'smooth' : 'auto'
    });
  };
  useLayoutEffect(() => {
    centre(!first.current);
    first.current = false;
  }, [focus, deg]);
  useEffect(() => {
    const el = scroller.current;
    if (!el) return;
    let acc = 0,
      last = 0,
      pinch = null;
    const step = dir => {
      const s = live.current,
        now = Date.now();
      if (now - last < 350) return;
      last = now;
      s.setDeg(s.deg + dir);
    };
    const gate = e => {
      const s = live.current;
      if (s.mode === 'off') return false;
      e.preventDefault();
      if (s.mode === 'ask') {
        if (!s.asking) s.ask();
        return false;
      }
      return true;
    };
    const wheel = e => {
      if (!e.ctrlKey && !e.metaKey) return;
      if (!gate(e)) return;
      acc += e.deltaY;
      if (acc > 40) {
        acc = 0;
        step(1);
      } else if (acc < -40) {
        acc = 0;
        step(-1);
      }
    };
    const dist = t => Math.hypot(t[0].clientX - t[1].clientX, t[0].clientY - t[1].clientY);
    const ts = e => {
      if (e.touches.length === 2) pinch = dist(e.touches);
    };
    const tm = e => {
      if (e.touches.length !== 2 || !pinch) return;
      if (!gate(e)) return;
      const r = dist(e.touches) / pinch;
      if (r < 0.75) {
        pinch = dist(e.touches);
        step(1);
      } else if (r > 1.33) {
        pinch = dist(e.touches);
        step(-1);
      }
    };
    const te = () => {
      pinch = null;
    };
    const gs = e => {
      if (live.current.mode !== 'off') e.preventDefault();
    };
    el.addEventListener('wheel', wheel, {
      passive: false
    });
    el.addEventListener('touchstart', ts, {
      passive: true
    });
    el.addEventListener('touchmove', tm, {
      passive: false
    });
    el.addEventListener('touchend', te);
    el.addEventListener('gesturestart', gs);
    el.addEventListener('gesturechange', gs);
    return () => {
      el.removeEventListener('wheel', wheel);
      el.removeEventListener('touchstart', ts);
      el.removeEventListener('touchmove', tm);
      el.removeEventListener('touchend', te);
      el.removeEventListener('gesturestart', gs);
      el.removeEventListener('gesturechange', gs);
    };
  }, []);
  const accept = () => {
    setMode('on');
    setAsking(false);
    if (remember) {
      try {
        localStorage.setItem(ZOOM_KEY, 'on');
      } catch (e) {}
    }
  };
  const decline = () => {
    setMode('off');
    setAsking(false);
  };
  const fname = source[focus] && source[focus].name.split(' ')[0] || 'this person';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height,
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      background: 'var(--surface-page)',
      overflow: 'hidden',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: scroller,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'auto',
      touchAction: mode === 'off' ? 'auto' : 'pan-x pan-y'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      minWidth: '100%',
      minHeight: '100%',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: canvas,
    style: {
      position: 'relative',
      width: L.w,
      height: L.h
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: L.w,
    height: L.h,
    style: {
      position: 'absolute',
      inset: 0,
      overflow: 'visible'
    },
    "aria-hidden": "true"
  }, L.lines.map(l => /*#__PURE__*/React.createElement("path", {
    key: l.k,
    d: l.d,
    fill: "none",
    stroke: "var(--rule-strong)",
    strokeWidth: "1.5",
    style: {
      transition: 'd var(--dur-3) var(--ease-out)'
    }
  }))), R.order.map(id => {
    const p = L.pos[id],
      more = beyond(id);
    return /*#__PURE__*/React.createElement("div", {
      key: id,
      style: {
        position: 'absolute',
        left: p.x,
        top: p.y,
        width: NW,
        height: NH,
        transition: 'left var(--dur-3) var(--ease-out), top var(--dur-3) var(--ease-out)'
      }
    }, people[id].add ? /*#__PURE__*/React.createElement(__ds_scope.PersonNode, {
      person: null,
      addLabel: 'Add ' + (source[focus] && source[focus].name.split(' ')[0] || '') + '\u2019s ' + people[id].add,
      onAdd: () => onAdd(focus, people[id].add),
      style: {
        width: NW,
        height: NH
      }
    }) : /*#__PURE__*/React.createElement(__ds_scope.PersonNode, {
      person: people[id],
      size: "sm",
      selected: id === focus,
      onClick: () => setFocus(id),
      style: {
        width: NW,
        height: NH
      }
    }), more > 0 && /*#__PURE__*/React.createElement("span", {
      title: more + ' more ' + (more === 1 ? 'relative' : 'relatives') + ' beyond this view',
      style: {
        position: 'absolute',
        right: -6,
        top: -8,
        minWidth: 22,
        height: 20,
        padding: '0 6px',
        borderRadius: 999,
        background: 'var(--parchment)',
        color: 'var(--ink-2)',
        font: '600 11px/20px var(--font-sans)',
        textAlign: 'center',
        boxShadow: '0 0 0 2px var(--paper)'
      }
    }, "+", more));
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 12,
      top: 12,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '4px 4px 4px 14px',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-subtle)',
      borderRadius: 'var(--radius-lg)',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Stepper, {
    label: "Degrees",
    value: deg,
    min: minDegree,
    max: maxDegree,
    onChange: setDeg,
    decLabel: "Show fewer relatives",
    incLabel: "Show more relatives"
  }), /*#__PURE__*/React.createElement(__ds_scope.IconButton, {
    icon: "locate-fixed",
    label: 'Re-centre on ' + fname,
    onClick: () => centre(true)
  })), /*#__PURE__*/React.createElement(__ds_scope.Dialog, {
    open: asking,
    title: "Use zoom to change the view?",
    description: 'Pinching or zooming on the tree changes how many degrees of separation are shown around ' + fname + '. Zoom out to see more relatives, zoom in to see fewer.',
    onClose: decline,
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(__ds_scope.Button, {
      variant: "ghost",
      onClick: decline
    }, "Keep zoom off"), /*#__PURE__*/React.createElement(__ds_scope.Button, {
      onClick: accept
    }, "Use zoom"))
  }, /*#__PURE__*/React.createElement(__ds_scope.Checkbox, {
    label: "Don't ask again on this device",
    checked: remember,
    onChange: setRemember
  })));
}
Object.assign(__ds_scope, { FamilyChart });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/FamilyChart.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/PersonRow.jsx
try { (() => {
const {
  useState
} = React;
function PersonRow({
  person,
  relation,
  onClick,
  trailing,
  style
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("div", {
    role: onClick ? 'button' : undefined,
    tabIndex: onClick ? 0 : undefined,
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minHeight: 64,
      padding: '8px 12px',
      margin: '0 -12px',
      borderRadius: 'var(--radius-md)',
      background: onClick && h ? 'var(--vellum)' : 'transparent',
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: person.name,
    src: person.src,
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 18px/1.2 var(--font-serif)',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, person.name), /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.3 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, [relation, __ds_scope.lifespan(person)].filter(Boolean).join(' · '))), trailing ?? (onClick ? /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "chevron-right",
    size: 18,
    color: "var(--ink-4)"
  }) : null));
}
Object.assign(__ds_scope, { PersonRow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/PersonRow.jsx", error: String((e && e.message) || e) }); }

// components/genealogy/PhotoTile.jsx
try { (() => {
const {
  useState
} = React;
function PhotoTile({
  src,
  caption,
  meta,
  aspect = '1 / 1',
  people,
  onClick,
  style
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("figure", {
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      margin: 0,
      display: 'grid',
      gap: 8,
      cursor: onClick ? 'pointer' : 'default',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      aspectRatio: aspect,
      borderRadius: 'var(--radius-sm)',
      overflow: 'hidden',
      background: src ? 'center/cover url(' + src + ')' : 'repeating-linear-gradient(135deg,var(--placeholder-stripe-a) 0 10px,var(--placeholder-stripe-b) 10px 20px)',
      outline: h && onClick ? '2px solid var(--ink)' : 'none',
      outlineOffset: 2
    }
  }, !src && /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "image",
    size: 22,
    color: "var(--ink-4)",
    style: {
      position: 'absolute',
      left: '50%',
      top: '50%',
      transform: 'translate(-50%,-50%)'
    }
  }), people ? /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 8,
      bottom: 8,
      display: 'inline-flex',
      alignItems: 'center',
      gap: 4,
      padding: '4px 7px',
      borderRadius: 'var(--radius-sm)',
      background: 'rgba(250,247,242,.92)',
      font: '500 12px/1 var(--font-sans)',
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: "user-round",
    size: 12
  }), people) : null), (caption || meta) && /*#__PURE__*/React.createElement("figcaption", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, caption && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 14px/1.35 var(--font-sans)',
      color: 'var(--ink)'
    }
  }, caption), meta && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 12px/1.3 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, meta)));
}
Object.assign(__ds_scope, { PhotoTile });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/genealogy/PhotoTile.jsx", error: String((e && e.message) || e) }); }

// components/navigation/BottomNav.jsx
try { (() => {
function BottomNav({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(' + items.length + ', 1fr)',
      height: 'var(--bottomnav-h)',
      borderTop: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)',
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      "aria-current": on ? 'page' : undefined,
      style: {
        display: 'grid',
        placeItems: 'center',
        alignContent: 'center',
        gap: 4,
        border: 0,
        background: 'none',
        cursor: 'pointer',
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        font: '500 12px/1 var(--font-sans)',
        boxShadow: on ? 'inset 0 2px 0 var(--aubergine)' : 'none'
      }
    }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
      name: it.icon,
      size: 22
    }), it.label);
  }));
}
Object.assign(__ds_scope, { BottomNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/BottomNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/SideNav.jsx
try { (() => {
const {
  useState
} = React;
function Item({
  it,
  on,
  onClick
}) {
  const [h, setH] = useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    "aria-current": on ? 'page' : undefined,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 12,
      height: 44,
      padding: '0 12px',
      border: 0,
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textAlign: 'left',
      width: '100%',
      background: on ? 'var(--vellum)' : h ? 'rgba(31,27,22,.04)' : 'transparent',
      color: on ? 'var(--ink)' : 'var(--ink-2)',
      font: (on ? '600' : '500') + ' 15px/1 var(--font-sans)'
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Icon, {
    name: it.icon,
    size: 20,
    color: on ? 'var(--aubergine)' : 'currentColor'
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1
    }
  }, it.label), it.badge ? /*#__PURE__*/React.createElement("span", {
    style: {
      font: '600 12px/1 var(--font-sans)',
      color: 'var(--aubergine)'
    }
  }, it.badge) : null);
}
function SideNav({
  items = [],
  value,
  onChange,
  header,
  footer,
  style
}) {
  return /*#__PURE__*/React.createElement("nav", {
    style: {
      width: 'var(--rail-w)',
      display: 'flex',
      flexDirection: 'column',
      gap: 4,
      padding: '20px 12px',
      borderRight: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)',
      ...style
    }
  }, header && /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '0 12px 20px'
    }
  }, header), items.map(it => /*#__PURE__*/React.createElement(Item, {
    key: it.id,
    it: it,
    on: it.id === value,
    onClick: () => onChange && onChange(it.id)
  })), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 'auto',
      padding: '12px'
    }
  }, footer));
}
Object.assign(__ds_scope, { SideNav });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/SideNav.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function Tabs({
  items = [],
  value,
  onChange,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-subtle)',
      overflowX: 'auto',
      scrollbarWidth: 'none',
      ...style
    }
  }, items.map(it => {
    const on = it.id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: it.id,
      role: "tab",
      "aria-selected": on,
      type: "button",
      onClick: () => onChange && onChange(it.id),
      style: {
        display: 'inline-flex',
        alignItems: 'center',
        gap: 6,
        height: 'var(--tap-min)',
        padding: '0 12px',
        border: 0,
        background: 'none',
        cursor: 'pointer',
        whiteSpace: 'nowrap',
        font: '500 15px/1 var(--font-sans)',
        color: on ? 'var(--ink)' : 'var(--ink-3)',
        boxShadow: on ? 'inset 0 -2px 0 var(--aubergine)' : 'none',
        transition: 'color var(--dur-1)'
      }
    }, it.label, it.count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 12px/1 var(--font-sans)',
        color: 'var(--ink-3)',
        background: 'var(--vellum)',
        padding: '3px 6px',
        borderRadius: 'var(--radius-xs)'
      }
    }, it.count));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/navigation/TopBar.jsx
try { (() => {
function TopBar({
  title,
  left,
  right,
  style
}) {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--topbar-h)',
      padding: '0 12px 0 20px',
      borderBottom: '1px solid var(--border-subtle)',
      background: 'var(--surface-page)',
      ...style
    }
  }, left, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      minWidth: 0,
      font: '400 22px/1 var(--font-serif)',
      letterSpacing: '-0.01em',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      whiteSpace: 'nowrap'
    }
  }, title ?? 'Origine'), right && /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 4
    }
  }, right));
}
Object.assign(__ds_scope, { TopBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/TopBar.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/AppShell.jsx
try { (() => {
const {
  SideNav,
  TopBar,
  BottomNav,
  IconButton,
  AvatarStack,
  Toast
} = window.OrigineDesignSystem_f2a82e;
const NAV = [{
  id: 'tree',
  label: 'Tree',
  icon: 'git-fork'
}, {
  id: 'people',
  label: 'People',
  icon: 'users'
}, {
  id: 'map',
  label: 'Map',
  icon: 'map'
}, {
  id: 'stories',
  label: 'Stories',
  icon: 'images'
}, {
  id: 'activity',
  label: 'Activity',
  icon: 'bell'
}];
function useWide() {
  const [w, setW] = React.useState(window.innerWidth >= 900);
  React.useEffect(() => {
    const r = () => setW(window.innerWidth >= 900);
    window.addEventListener('resize', r);
    return () => window.removeEventListener('resize', r);
  }, []);
  return w;
}
function AppShell({
  route,
  onRoute,
  title,
  back,
  onBack,
  actions,
  toast,
  onSignOut,
  children
}) {
  const wide = useWide();
  const D = window.ORIGINE_DATA;
  const active = {
    person: 'people',
    edit: 'people',
    photo: 'stories'
  }[route] || route;
  const editors = /*#__PURE__*/React.createElement(AvatarStack, {
    people: D.editors,
    max: 3,
    size: 28
  });
  const left = back ? /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Back",
    onClick: onBack,
    style: {
      marginLeft: -12
    }
  }) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      height: '100vh',
      background: 'var(--surface-page)'
    }
  }, wide && /*#__PURE__*/React.createElement(SideNav, {
    items: NAV.map(n => n.id === 'activity' ? {
      ...n,
      badge: 2
    } : n),
    value: active,
    onChange: onRoute,
    header: /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 26px/1 var(--font-serif)',
        letterSpacing: '-0.01em'
      }
    }, "Origine"),
    footer: /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 8
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '500 11px/1 var(--font-sans)',
        letterSpacing: '.12em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)'
      }
    }, "The Hale family"), /*#__PURE__*/React.createElement(AvatarStack, {
      people: D.editors,
      max: 4,
      size: 28,
      label: "4 relatives"
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: onSignOut,
      style: {
        justifySelf: 'start',
        border: 0,
        background: 'none',
        padding: '8px 0',
        font: '500 14px/1 var(--font-sans)',
        color: 'var(--ink-3)',
        cursor: 'pointer'
      }
    }, "Sign out"))
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0,
      display: 'flex',
      flexDirection: 'column'
    }
  }, /*#__PURE__*/React.createElement(TopBar, {
    title: wide && !back ? title : back ? title : 'Origine',
    left: left,
    right: /*#__PURE__*/React.createElement(React.Fragment, null, actions, !wide && editors, wide && /*#__PURE__*/React.createElement(IconButton, {
      icon: "search",
      label: "Search"
    }))
  }), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      overflow: 'auto',
      position: 'relative'
    }
  }, children), !wide && /*#__PURE__*/React.createElement(BottomNav, {
    items: NAV.filter(n => n.id !== 'activity').concat([{
      id: 'activity',
      label: 'Activity',
      icon: 'bell'
    }]),
    value: active,
    onChange: onRoute
  })), toast && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'fixed',
      left: 0,
      right: 0,
      bottom: wide ? 24 : 80,
      display: 'flex',
      justifyContent: 'center',
      padding: '0 16px',
      zIndex: 60
    }
  }, /*#__PURE__*/React.createElement(Toast, toast)));
}
window.AppShell = AppShell;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/AppShell.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/AuthScreens.jsx
try { (() => {
const DS_A = window.OrigineDesignSystem_f2a82e;
function AuthFrame({
  children,
  step,
  steps,
  onBack
}) {
  const {
    IconButton
  } = DS_A;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: 'var(--topbar-h)',
      padding: '0 12px 0 20px'
    }
  }, onBack && /*#__PURE__*/React.createElement(IconButton, {
    icon: "arrow-left",
    label: "Back",
    onClick: onBack,
    style: {
      marginLeft: -12
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      font: '400 22px/1 var(--font-serif)',
      letterSpacing: '-0.01em'
    }
  }, "Origine"), steps && /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 13px/1 var(--font-sans)',
      color: 'var(--ink-3)'
    }
  }, "Step ", step, " of ", steps)), steps && /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      background: 'var(--rule)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 2,
      width: step / steps * 100 + '%',
      background: 'var(--aubergine)',
      transition: 'width var(--dur-3) var(--ease-out)'
    }
  })), /*#__PURE__*/React.createElement("main", {
    style: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      padding: 'clamp(32px,8vh,96px) var(--gutter) 40px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: '100%',
      maxWidth: 440,
      display: 'grid',
      gap: 28,
      alignContent: 'start'
    }
  }, children)));
}
function SignInScreen({
  onSignedIn
}) {
  const {
    Input,
    Button
  } = DS_A;
  const [email, setEmail] = React.useState('');
  const [sent, setSent] = React.useState(false);
  const h1 = {
    margin: 0,
    font: '400 clamp(34px,7vw,44px)/1.06 var(--font-serif)',
    letterSpacing: '-0.02em',
    textWrap: 'balance'
  };
  if (sent) return /*#__PURE__*/React.createElement(AuthFrame, {
    onBack: () => setSent(false)
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: h1
  }, "Check your email"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)',
      fontSize: 17
    }
  }, "We sent a sign-in link to ", /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, email || 'ella.byrne@example.com'), ". Open it on this device to continue.")), /*#__PURE__*/React.createElement(Button, {
    full: true,
    icon: "mail-open",
    onClick: onSignedIn
  }, "Open the link (demo)"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, "Nothing arrived? Check your spam folder, or ", /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => e.preventDefault()
  }, "send it again"), "."));
  return /*#__PURE__*/React.createElement(AuthFrame, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "The Hale family tree"), /*#__PURE__*/React.createElement("h1", {
    style: h1
  }, "Welcome back"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)',
      fontSize: 17
    }
  }, "Enter your email and we'll send you a link to sign in. No password to remember.")), /*#__PURE__*/React.createElement("form", {
    onSubmit: e => {
      e.preventDefault();
      setSent(true);
    },
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "name@example.com",
    value: email,
    onChange: e => setEmail(e.target.value),
    autoComplete: "email"
  }), /*#__PURE__*/React.createElement(Button, {
    type: "submit",
    full: true
  }, "Email me a sign-in link")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      paddingTop: 20,
      borderTop: '1px solid var(--rule)',
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, "New here? Ask a relative who's already in the tree to invite you."));
}
function OnboardingScreen({
  onDone
}) {
  const {
    PersonRow,
    Button,
    Card,
    Avatar,
    Icon
  } = DS_A;
  const D = window.ORIGINE_DATA;
  const [step, setStep] = React.useState(1);
  const [me, setMe] = React.useState(null);
  const [photo, setPhoto] = React.useState(false);
  const [goal, setGoal] = React.useState('tree');
  const h1 = {
    margin: 0,
    font: '400 clamp(30px,6vw,38px)/1.1 var(--font-serif)',
    letterSpacing: '-0.02em',
    textWrap: 'balance'
  };
  const sub = {
    margin: 0,
    color: 'var(--ink-2)',
    fontSize: 17
  };
  const back = step > 1 ? () => setStep(step - 1) : undefined;
  if (step === 1) return /*#__PURE__*/React.createElement(AuthFrame, {
    step: 1,
    steps: 3,
    onBack: back
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: h1
  }, "Ruth invited you to the Hale family tree"), /*#__PURE__*/React.createElement("p", {
    style: sub
  }, "Are you already in it? Pick yourself so your photos and stories link to the right place.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, ['e', 'c', 'j'].map(id => /*#__PURE__*/React.createElement(Card, {
    key: id,
    padding: "4px 16px",
    selected: me === id,
    onClick: () => setMe(id)
  }, /*#__PURE__*/React.createElement(PersonRow, {
    person: D.people[id],
    relation: id === 'j' ? "Margaret's son" : "Ruth's granddaughter",
    trailing: me === id ? /*#__PURE__*/React.createElement(Icon, {
      name: "check",
      size: 20
    }) : /*#__PURE__*/React.createElement("span", null),
    style: {
      margin: 0
    }
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "user-plus",
    onClick: () => setMe('new'),
    style: {
      justifyContent: 'flex-start',
      paddingLeft: 16,
      background: me === 'new' ? 'var(--vellum)' : undefined
    }
  }, "I'm not in the tree yet")), /*#__PURE__*/React.createElement(Button, {
    full: true,
    disabled: !me,
    onClick: () => setStep(2)
  }, "Continue"));
  if (step === 2) {
    const p = D.people[me] || {
      name: 'You'
    };
    return /*#__PURE__*/React.createElement(AuthFrame, {
      step: 2,
      steps: 3,
      onBack: back
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("h1", {
      style: h1
    }, "Add a photo of yourself"), /*#__PURE__*/React.createElement("p", {
      style: sub
    }, "It helps relatives recognise you. You can change it any time.")), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        alignItems: 'center',
        gap: 20
      }
    }, /*#__PURE__*/React.createElement(Avatar, {
      name: p.name,
      src: photo ? '../../assets/sample-photos/125_0974.jpg' : undefined,
      focus: "28% 30%",
      size: 96,
      ring: true
    }), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 4
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 22px/1.2 var(--font-serif)'
      }
    }, p.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--ink-3)'
      }
    }, p.born ? 'Born ' + p.born : 'New to the tree'))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(Button, {
      full: true,
      variant: photo ? 'secondary' : 'primary',
      icon: "camera",
      onClick: () => setPhoto(true)
    }, photo ? 'Choose a different photo' : 'Choose a photo'), /*#__PURE__*/React.createElement(Button, {
      full: true,
      variant: photo ? 'primary' : 'ghost',
      onClick: () => setStep(3)
    }, photo ? 'Continue' : 'Skip for now')));
  }
  const opts = [['tree', 'git-fork', 'Explore the family tree', 'See who came before you.'], ['stories', 'images', 'Add family photos', 'Upload pictures and tag who is in them.'], ['people', 'pencil', 'Fill in what you know', 'Names, dates and places for your side of the family.']];
  return /*#__PURE__*/React.createElement(AuthFrame, {
    step: 3,
    steps: 3,
    onBack: back
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: h1
  }, "What would you like to do first?"), /*#__PURE__*/React.createElement("p", {
    style: sub
  }, "You can do all of these later.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 10
    }
  }, opts.map(([id, ic, t, d]) => /*#__PURE__*/React.createElement(Card, {
    key: id,
    padding: 16,
    selected: goal === id,
    onClick: () => setGoal(id),
    style: {
      display: 'flex',
      gap: 14,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      flex: 'none',
      borderRadius: 'var(--radius-md)',
      background: 'var(--vellum)',
      display: 'grid',
      placeItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: ic,
    size: 20
  })), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2,
      flex: 1
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 16px/1.3 var(--font-sans)'
    }
  }, t), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, d)), goal === id && /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 20
  })))), /*#__PURE__*/React.createElement(Button, {
    full: true,
    onClick: () => onDone(goal)
  }, "Get started"));
}
Object.assign(window, {
  SignInScreen,
  OnboardingScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/AuthScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/EditScreens.jsx
try { (() => {
const DS_E = window.OrigineDesignSystem_f2a82e;
function PhotoScreen({
  photoId,
  onOpen,
  notify
}) {
  const {
    Button,
    Input,
    PersonRow,
    Avatar,
    IconButton
  } = DS_E;
  const D = window.ORIGINE_DATA;
  const ph = D.photos.find(p => p.id === photoId) || D.photos[0];
  const [, force] = React.useState(0);
  const [tagging, setTagging] = React.useState(false);
  const [pending, setPending] = React.useState(null); // {x,y} or index of unnamed tag
  const [q, setQ] = React.useState('');
  const place = e => {
    if (!tagging) return;
    const r = e.currentTarget.getBoundingClientRect();
    setPending({
      x: (e.clientX - r.left) / r.width * 100,
      y: (e.clientY - r.top) / r.height * 100
    });
  };
  const assign = id => {
    if (pending.i != null) ph.tags[pending.i].id = id;else ph.tags.push({
      id,
      x: pending.x,
      y: pending.y
    });
    setPending(null);
    setTagging(false);
    setQ('');
    force(x => x + 1);
    notify({
      tone: 'success',
      message: D.people[id].name.split(' ')[0] + ' tagged in this photo'
    });
  };
  const remove = i => {
    ph.tags.splice(i, 1);
    force(x => x + 1);
  };
  const named = ph.tags.map((t, i) => ({
    ...t,
    i
  })).filter(t => t.id);
  const unnamed = ph.tags.map((t, i) => ({
    ...t,
    i
  })).filter(t => !t.id);
  const matches = Object.values(D.people).filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && !named.some(t => t.id === p.id)).slice(0, 5);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit,minmax(min(100%,340px),1fr))',
      gap: 28,
      padding: 'var(--space-6) var(--gutter) var(--space-12)',
      maxWidth: 1200,
      alignItems: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      background: 'var(--vellum)',
      borderRadius: 'var(--radius-sm)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: place,
    style: {
      position: 'relative',
      display: 'inline-block',
      maxWidth: '100%',
      cursor: tagging ? 'crosshair' : 'default',
      outline: tagging ? '2px solid var(--aubergine)' : 'none',
      outlineOffset: 3
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: ph.src,
    alt: ph.caption,
    style: {
      display: 'block',
      maxWidth: '100%',
      maxHeight: '72vh',
      width: 'auto',
      height: 'auto'
    }
  }), ph.tags.map((t, i) => /*#__PURE__*/React.createElement("button", {
    key: i,
    type: "button",
    onClick: e => {
      e.stopPropagation();
      t.id ? onOpen(t.id) : setPending({
        i,
        x: t.x,
        y: t.y
      });
    },
    style: {
      position: 'absolute',
      left: t.x + '%',
      top: t.y + '%',
      transform: 'translate(-50%,-50%)',
      border: 0,
      background: 'none',
      padding: 0,
      cursor: 'pointer',
      display: 'grid',
      justifyItems: 'center',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '2px ' + (t.id ? 'solid' : 'dashed') + ' #fff',
      boxShadow: '0 0 0 1px rgba(31,27,22,.35)'
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      padding: '4px 8px',
      borderRadius: 'var(--radius-sm)',
      background: t.id ? 'rgba(250,247,242,.94)' : 'var(--ink)',
      color: t.id ? 'var(--ink)' : 'var(--paper)',
      font: '500 12px/1 var(--font-sans)',
      whiteSpace: 'nowrap'
    }
  }, t.id ? D.people[t.id].name.split(' ')[0] : 'Who is this?'))), pending && pending.i == null && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: pending.x + '%',
      top: pending.y + '%',
      transform: 'translate(-50%,-50%)',
      width: 44,
      height: 44,
      borderRadius: '50%',
      border: '2px solid var(--aubergine)',
      boxShadow: '0 0 0 3px rgba(250,247,242,.8)'
    }
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: tagging ? 'primary' : 'secondary',
    icon: "scan-face",
    onClick: () => {
      setTagging(!tagging);
      setPending(null);
    }
  }, tagging ? 'Tap a face to tag' : 'Tag someone'), tagging && /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => {
      setTagging(false);
      setPending(null);
    }
  }, "Cancel"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 24
    }
  }, pending ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 26px/1.15 var(--font-serif)'
    }
  }, "Who is this?"), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search the family",
    value: q,
    onChange: e => setQ(e.target.value),
    autoFocus: true
  }), /*#__PURE__*/React.createElement("div", null, matches.map(p => /*#__PURE__*/React.createElement(PersonRow, {
    key: p.id,
    person: p,
    onClick: () => assign(p.id),
    trailing: /*#__PURE__*/React.createElement("span", null)
  }))), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => setPending(null)
  }, "Not now")) : /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 6
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 clamp(28px,5vw,36px)/1.1 var(--font-serif)',
      letterSpacing: '-0.02em'
    }
  }, ph.caption), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 15,
      color: 'var(--ink-3)'
    }
  }, ph.meta, " \xB7 ", ph.place), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, "Added by ", ph.addedBy)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)',
      paddingBottom: 6
    }
  }, "In this photo"), named.map(t => /*#__PURE__*/React.createElement(PersonRow, {
    key: t.i,
    person: D.people[t.id],
    onClick: () => onOpen(t.id),
    trailing: /*#__PURE__*/React.createElement(IconButton, {
      icon: "x",
      label: "Remove tag",
      size: "sm",
      onClick: e => {
        e.stopPropagation();
        remove(t.i);
      }
    })
  })), unnamed.map(t => /*#__PURE__*/React.createElement("div", {
    key: t.i,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      minHeight: 64
    }
  }, /*#__PURE__*/React.createElement(Avatar, {
    name: "?",
    size: 44
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--ink-2)'
    }
  }, "Someone we haven't named"), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    variant: "secondary",
    onClick: () => setPending({
      i: t.i,
      x: t.x,
      y: t.y
    })
  }, "Name"))), !ph.tags.length && /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-3)'
    }
  }, "Nobody tagged yet.")))));
}
function EditPersonScreen({
  id,
  onDone,
  notify
}) {
  const {
    Input,
    Switch,
    Radio,
    Button,
    Select
  } = DS_E;
  const D = window.ORIGINE_DATA;
  const p = D.people[id];
  const [f, setF] = React.useState({
    name: p.name,
    born: p.born || '',
    birthplace: p.birthplace || '',
    living: !!p.living,
    died: p.died && p.died !== '?' ? p.died : '',
    deathplace: p.deathplace || '',
    occupation: p.occupation || '',
    privacy: p.living ? 'family' : 'everyone'
  });
  const set = k => e => setF({
    ...f,
    [k]: e && e.target ? e.target.value : e
  });
  const save = () => {
    const before = {
      ...p
    };
    Object.assign(p, {
      name: f.name,
      born: f.born,
      birthplace: f.birthplace,
      living: f.living,
      died: f.living ? undefined : f.died,
      deathplace: f.deathplace,
      occupation: f.occupation
    });
    onDone();
    notify({
      tone: 'success',
      message: 'Changes saved',
      actionLabel: 'Undo',
      onAction: () => Object.assign(p, before)
    });
  };
  const hist = D.history[id] || [];
  const sec = t => /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, t);
  const pair = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit,minmax(180px,1fr))',
    gap: 16
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      padding: 'var(--space-6) var(--gutter) var(--space-12)',
      display: 'grid',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 clamp(30px,5vw,38px)/1.1 var(--font-serif)',
      letterSpacing: '-0.02em'
    }
  }, "Edit ", p.name.split(' ')[0]), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, sec('Name'), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    value: f.name,
    onChange: set('name'),
    hint: "Use the name they were known by. Add maiden names in brackets."
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, sec('Birth'), /*#__PURE__*/React.createElement("div", {
    style: pair
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Year or date",
    value: f.born,
    onChange: set('born'),
    placeholder: "e.g. 1921 or c. 1920"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Place",
    icon: "map-pin",
    value: f.birthplace,
    onChange: set('birthplace'),
    placeholder: "Town, country"
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, sec('Death'), /*#__PURE__*/React.createElement(Switch, {
    label: "Still living",
    description: "Living people are only shown to signed-in family.",
    checked: f.living,
    onChange: set('living')
  }), !f.living && /*#__PURE__*/React.createElement("div", {
    style: pair
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Year or date",
    value: f.died,
    onChange: set('died')
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Place",
    icon: "map-pin",
    value: f.deathplace,
    onChange: set('deathplace')
  }))), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, sec('About'), /*#__PURE__*/React.createElement(Input, {
    label: "Occupation",
    value: f.occupation,
    onChange: set('occupation')
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 0
    }
  }, sec('Who can see this person'), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8
    }
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "priv",
    value: "everyone",
    label: "Everyone in the family tree",
    checked: f.privacy === 'everyone',
    onChange: set('privacy')
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "priv",
    value: "family",
    label: "Close family only",
    description: "Parents, children, siblings and their partners",
    checked: f.privacy === 'family',
    onChange: set('privacy')
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      justifyContent: 'flex-end',
      flexWrap: 'wrap',
      paddingTop: 20,
      borderTop: '1px solid var(--rule)'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: onDone
  }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
    onClick: save
  }, "Save changes")), hist.length > 0 && /*#__PURE__*/React.createElement("section", {
    style: {
      display: 'grid',
      gap: 4
    }
  }, sec('Recent changes'), hist.map((h, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: 'flex',
      gap: 12,
      alignItems: 'baseline',
      padding: '12px 0',
      borderBottom: '1px solid var(--rule)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 1,
      color: 'var(--ink-2)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      fontWeight: 600,
      color: 'var(--ink)'
    }
  }, h.who), " ", h.change, /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, h.time)), i === 0 && /*#__PURE__*/React.createElement("a", {
    href: "#",
    onClick: e => {
      e.preventDefault();
      notify({
        message: 'Change undone'
      });
    },
    style: {
      fontSize: 14
    }
  }, "Undo")))));
}
Object.assign(window, {
  PhotoScreen,
  EditPersonScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/EditScreens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/PersonScreen.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS_P = window.OrigineDesignSystem_f2a82e;
function PersonScreen({
  id,
  onOpen,
  onEdit,
  onPhoto
}) {
  const {
    Avatar,
    Tabs,
    EventRow,
    PhotoTile,
    PersonRow,
    Button,
    Badge,
    AvatarStack
  } = DS_P;
  const D = window.ORIGINE_DATA;
  const p = D.people[id];
  const [tab, setTab] = React.useState('about');
  const pics = D.photos.filter(x => x.tags.some(t => t.id === id));
  const ev = D.events[id] || [{
    year: p.born || '?',
    title: 'Born',
    place: p.birthplace,
    icon: 'baby'
  }].concat(p.died && p.died !== '?' ? [{
    year: p.died,
    title: 'Died',
    icon: 'flower-2'
  }] : []);
  const rel = [[p.father, 'Father'], [p.mother, 'Mother'], [p.spouse, 'Spouse']].concat((p.children || []).map(c => [c, 'Child'])).filter(([x]) => x && D.people[x]);
  const fact = (k, v) => v ? /*#__PURE__*/React.createElement("div", {
    key: k,
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: 16,
      padding: '14px 0',
      borderBottom: '1px solid var(--rule)',
      fontSize: 15
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-3)'
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      textAlign: 'right'
    }
  }, v)) : null;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 880,
      padding: 'var(--space-6) var(--gutter) var(--space-12)',
      display: 'grid',
      gap: 24
    }
  }, /*#__PURE__*/React.createElement("header", {
    style: {
      display: 'flex',
      gap: 20,
      alignItems: 'flex-end',
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 120,
      aspectRatio: '4 / 5',
      borderRadius: 'var(--radius-sm)',
      background: p.src ? 'center/cover url(' + p.src + ')' : 'repeating-linear-gradient(135deg,var(--placeholder-stripe-a) 0 10px,var(--placeholder-stripe-b) 10px 20px)',
      display: 'grid',
      placeItems: 'end start',
      padding: 8,
      fontSize: 12,
      color: 'var(--ink-3)'
    }
  }, p.src ? '' : 'Portrait'), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8,
      flex: 1,
      minWidth: 220
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6
    }
  }, p.living && /*#__PURE__*/React.createElement(Badge, null, "Living"), id === 'm' && /*#__PURE__*/React.createElement(Badge, {
    tone: "warning"
  }, "Needs a source")), /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 clamp(32px,6vw,48px)/1.04 var(--font-serif)',
      letterSpacing: '-0.02em',
      textWrap: 'balance'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 16,
      color: 'var(--ink-3)'
    }
  }, p.living ? 'Born ' + p.born : (p.born || '?') + ' – ' + (p.died || '?'), p.birthplace ? ' · ' + p.birthplace : '')), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "pencil",
    size: "sm",
    onClick: onEdit
  }, "Edit"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "upload",
    size: "sm"
  }, "Add photo"))), /*#__PURE__*/React.createElement(Tabs, {
    items: [{
      id: 'about',
      label: 'About'
    }, {
      id: 'timeline',
      label: 'Timeline',
      count: ev.length
    }, {
      id: 'photos',
      label: 'Photos',
      count: pics.length
    }, {
      id: 'family',
      label: 'Family',
      count: rel.length
    }],
    value: tab,
    onChange: setTab
  }), tab === 'about' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, fact('Born', [p.born, p.birthplace].filter(Boolean).join(', ')), fact('Died', p.deathplace ? p.died + ', ' + p.deathplace : p.died !== '?' ? p.died : null), fact('Occupation', p.occupation), fact('Spouse', p.spouse && D.people[p.spouse].name)), id === 'm' && /*#__PURE__*/React.createElement("blockquote", {
    style: {
      margin: 0,
      padding: 0,
      display: 'grid',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      font: 'italic 400 24px/1.35 var(--font-serif)',
      color: 'var(--ink)',
      textWrap: 'pretty'
    }
  }, "\u201CMam wrote every Sunday for twenty years. She kept the letters in a biscuit tin under the stairs.\u201D"), /*#__PURE__*/React.createElement("footer", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, /*#__PURE__*/React.createElement(AvatarStack, {
    people: [D.editors[0]],
    size: 24
  }), "Ruth Byrne Hale, her daughter"))), tab === 'timeline' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid'
    }
  }, ev.map((e, i) => /*#__PURE__*/React.createElement(EventRow, _extends({
    key: i
  }, e, {
    last: i === ev.length - 1
  })))), tab === 'photos' && (pics.length ? /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill,minmax(150px,1fr))',
      gap: 16
    }
  }, pics.map(ph => /*#__PURE__*/React.createElement(PhotoTile, {
    key: ph.id,
    src: ph.src,
    caption: ph.caption,
    meta: ph.meta,
    people: ph.tags.length,
    aspect: "1 / 1",
    onClick: () => onPhoto(ph.id)
  }))) : /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)',
      margin: 0
    }
  }, "No photos of ", p.name.split(' ')[0], " yet. If you have one, add it and tag who is in it.")), tab === 'family' && /*#__PURE__*/React.createElement("div", null, rel.map(([x, r]) => /*#__PURE__*/React.createElement(PersonRow, {
    key: x + r,
    person: D.people[x],
    relation: r,
    onClick: () => onOpen(x)
  }))));
}
window.PersonScreen = PersonScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/PersonScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/Screens.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const DS_O = window.OrigineDesignSystem_f2a82e;
function PeopleScreen({
  onOpen
}) {
  const {
    Input,
    PersonRow,
    Tag
  } = DS_O;
  const D = window.ORIGINE_DATA;
  const [q, setQ] = React.useState('');
  const [sn, setSn] = React.useState(null);
  const list = Object.values(D.people).filter(p => p.name.toLowerCase().includes(q.toLowerCase()) && (!sn || p.name.includes(sn))).sort((a, b) => (a.born || '').localeCompare(b.born || ''));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 720,
      padding: 'var(--space-6) var(--gutter)',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 36px/1.08 var(--font-serif)',
      letterSpacing: '-0.02em'
    }
  }, "People"), /*#__PURE__*/React.createElement(Input, {
    icon: "search",
    placeholder: "Search by name",
    value: q,
    onChange: e => setQ(e.target.value)
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Hale', "O'Connell", 'Byrne'].map(n => /*#__PURE__*/React.createElement(Tag, {
    key: n,
    selected: sn === n,
    onClick: () => setSn(sn === n ? null : n)
  }, n))), /*#__PURE__*/React.createElement("div", null, list.map(p => /*#__PURE__*/React.createElement(PersonRow, {
    key: p.id,
    person: p,
    relation: p.birthplace,
    onClick: () => onOpen(p.id)
  }))), !list.length && /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-3)'
    }
  }, "Nobody matches \u201C", q, "\u201D."));
}
function MapScreen() {
  const {
    Card,
    Badge,
    IconButton,
    Switch
  } = DS_O;
  const D = window.ORIGINE_DATA;
  const [sel, setSel] = React.useState(null);
  const [open, setOpen] = React.useState(false);
  const [all, setAll] = React.useState(false);
  const el = React.useRef(null);
  const map = React.useRef(null);
  const layer = React.useRef(null);
  const living = p => p.people.filter(id => D.people[id] && D.people[id].living).length;
  const shown = D.places.filter(p => all || living(p) > 0);
  const pl = D.places.find(x => x.id === sel);
  const frame = (animate = true) => {
    if (!map.current) return;
    if (pl) map.current.setView([pl.lat, pl.lon], 11, {
      animate
    });else if (shown.length) map.current.fitBounds(shown.map(p => [p.lat, p.lon]), {
      paddingTopLeft: [60, 80],
      paddingBottomRight: [60, 60],
      maxZoom: 9,
      animate
    });
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
      if (g) g.items.push(p);else groups.push({
        pt,
        items: [p]
      });
    });
    groups.forEach(g => {
      const items = g.items;
      const one = items.length === 1;
      const n = items.reduce((t, p) => t + living(p), 0);
      const total = items.reduce((t, p) => t + p.people.length, 0);
      const on = items.some(p => p.id === sel);
      const lat = items.reduce((t, p) => t + p.lat, 0) / items.length,
        lon = items.reduce((t, p) => t + p.lon, 0) / items.length;
      const sz = one ? 32 : 40;
      const html = '<span style="display:grid;place-items:center;width:' + sz + 'px;height:' + sz + 'px;border-radius:50%;border:2px solid #fffdf9;' + (one ? '' : 'outline:2px solid ' + (n ? 'var(--aubergine)' : 'var(--rule-strong)') + ';outline-offset:2px;') + 'box-shadow:0 1px 2px rgba(31,27,22,.25),0 4px 10px rgba(31,27,22,.2);font:600 13px/1 \'Hanken Grotesk\',sans-serif;color:' + (n ? '#fff' : 'var(--ink-2)') + ';background:' + (on ? 'var(--ink)' : n ? 'var(--aubergine)' : 'var(--parchment)') + '">' + (n || total) + '</span>';
      const label = one ? items[0].name + ' · ' + (n ? n + ' living' : total + ' people') : items.length + ' places · ' + items.map(p => p.name.split(',')[0]).join(', ');
      L.marker([lat, lon], {
        icon: L.divIcon({
          className: '',
          html,
          iconSize: [sz, sz],
          iconAnchor: [sz / 2, sz / 2]
        }),
        title: label
      }).bindTooltip(label, {
        direction: 'top',
        offset: [0, -sz / 2]
      }).on('click', () => one ? setSel(items[0].id) : map.current.flyToBounds(items.map(p => [p.lat, p.lon]), {
        padding: [80, 80],
        maxZoom: 11,
        duration: 0.6
      })).addTo(layer.current);
    });
  };
  React.useEffect(() => {
    if (!window.L || !el.current) return;
    map.current = L.map(el.current, {
      zoomControl: false,
      attributionControl: true
    });
    L.control.zoom({
      position: 'bottomright'
    }).addTo(map.current);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16,
      attribution: 'Tiles &copy; Esri'
    }).addTo(map.current);
    L.tileLayer('https://server.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Light_Gray_Reference/MapServer/tile/{z}/{y}/{x}', {
      maxZoom: 16
    }).addTo(map.current);
    layer.current = L.layerGroup().addTo(map.current);
    map.current.on('zoomend', () => draw.current());
    let w = el.current.offsetWidth;
    const ro = new ResizeObserver(() => {
      const nw = el.current && el.current.offsetWidth;
      if (!nw || nw === w) return;
      w = nw;
      map.current.invalidateSize({
        pan: false
      });
      frameRef.current(false);
      draw.current();
    });
    ro.observe(el.current);
    return () => {
      ro.disconnect();
      map.current.remove();
    };
  }, []);
  React.useEffect(() => {
    frame();
    draw.current();
  }, [sel, all]);
  const frameRef = React.useRef(frame);
  frameRef.current = frame;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      inset: 0,
      display: 'flex',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    ref: el,
    "aria-label": "Map of family places",
    style: {
      position: 'absolute',
      inset: 0,
      background: 'var(--vellum)',
      zIndex: 0
    }
  }), pl && /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'absolute',
      left: 16,
      top: 16,
      zIndex: 500,
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      padding: '8px 8px 8px 14px',
      background: 'var(--surface-card)',
      border: '1px solid var(--rule)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-1)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 17px/1.2 var(--font-serif)'
    }
  }, pl.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: 'var(--ink-3)'
    }
  }, pl.people.map(id => D.people[id].name.split(' ')[0]).join(', '))), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Show all places",
    size: "sm",
    onClick: () => setSel(null)
  })), !open && /*#__PURE__*/React.createElement(IconButton, {
    icon: "menu",
    label: "Show places",
    variant: "secondary",
    onClick: () => setOpen(true),
    style: {
      position: 'absolute',
      right: 16,
      top: 16,
      zIndex: 500,
      boxShadow: 'var(--shadow-1)'
    }
  })), /*#__PURE__*/React.createElement("aside", {
    "aria-hidden": !open,
    style: {
      width: open ? 'min(360px, 100%)' : 0,
      flex: 'none',
      overflow: 'hidden',
      borderLeft: open ? '1px solid var(--rule)' : '0',
      background: 'var(--surface-page)',
      transition: 'width var(--dur-3) var(--ease-out)',
      position: window.innerWidth < 600 ? 'absolute' : 'relative',
      right: 0,
      top: 0,
      bottom: 0,
      zIndex: 600
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 'min(360px, 100vw)',
      height: '100%',
      overflow: 'auto',
      padding: '16px 20px 24px',
      display: 'grid',
      gap: 12,
      alignContent: 'start'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      flex: 1,
      margin: 0,
      font: '400 28px/1.1 var(--font-serif)',
      letterSpacing: '-0.015em'
    }
  }, "Places"), /*#__PURE__*/React.createElement(IconButton, {
    icon: "x",
    label: "Hide places",
    onClick: () => setOpen(false),
    style: {
      marginRight: -12
    }
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)',
      fontSize: 15
    }
  }, "Places where living relatives were born, live or settled."), /*#__PURE__*/React.createElement(Switch, {
    label: "Include past places",
    description: "Show places with no living relatives",
    checked: all,
    onChange: v => {
      setAll(v);
      if (!v && pl && !living(pl)) setSel(null);
    }
  }), shown.map(x => {
    const n = living(x);
    return /*#__PURE__*/React.createElement(Card, {
      key: x.id,
      padding: 16,
      selected: x.id === sel,
      onClick: () => {
        setSel(x.id);
        if (window.innerWidth < 600) setOpen(false);
      },
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        gap: 12
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gap: 2
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        font: '400 18px/1.2 var(--font-serif)'
      }
    }, x.name), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 14,
        color: 'var(--ink-3)'
      }
    }, x.years, " \xB7 ", x.people.length, " people")), /*#__PURE__*/React.createElement(Badge, {
      tone: n ? 'accent' : 'neutral'
    }, n ? n + ' living' : 'Past'));
  }))));
}
function StoriesScreen({
  onPhoto
}) {
  const {
    PhotoTile,
    Button,
    Card,
    AvatarStack
  } = DS_O;
  const D = window.ORIGINE_DATA;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1040,
      padding: 'var(--space-6) var(--gutter) var(--space-12)',
      display: 'grid',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-end',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 36px/1.08 var(--font-serif)',
      letterSpacing: '-0.02em'
    }
  }, "Stories & photos"), /*#__PURE__*/React.createElement(Button, {
    icon: "upload"
  }, "Upload")), /*#__PURE__*/React.createElement(Card, {
    padding: 24,
    style: {
      display: 'grid',
      gap: 12,
      maxWidth: 640
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "Story"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: 0,
      font: '400 28px/1.15 var(--font-serif)',
      letterSpacing: '-0.01em'
    }
  }, "The crossing, April 1947"), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--ink-2)',
      textWrap: 'pretty'
    }
  }, "Margaret and Nora left Cobh with one trunk between them. Ruth pieced this together from the letters in the biscuit tin."), /*#__PURE__*/React.createElement(AvatarStack, {
    people: [D.editors[0]],
    size: 24,
    label: "Ruth Byrne Hale \xB7 6 min read"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '500 12px/1 var(--font-sans)',
      letterSpacing: '.12em',
      textTransform: 'uppercase',
      color: 'var(--ink-3)'
    }
  }, "Snow day \xB7 March 2008"), /*#__PURE__*/React.createElement("div", {
    style: {
      columns: '3 200px',
      columnGap: 16
    }
  }, D.photos.map(ph => /*#__PURE__*/React.createElement(PhotoTile, {
    key: ph.id,
    src: ph.src,
    caption: ph.caption,
    meta: ph.meta,
    people: ph.tags.length || undefined,
    aspect: ph.aspect,
    onClick: () => onPhoto(ph.id),
    style: {
      breakInside: 'avoid',
      marginBottom: 20
    }
  })))));
}
function ActivityScreen({
  notify,
  onPhoto,
  onSignOut
}) {
  const {
    ActivityItem,
    PhotoTile,
    Button,
    Dialog,
    Input,
    Radio,
    AvatarStack
  } = DS_O;
  const D = window.ORIGINE_DATA;
  const [inv, setInv] = React.useState(false);
  const [role, setRole] = React.useState('add');
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 640,
      padding: 'var(--space-6) var(--gutter)',
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 12,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      margin: 0,
      font: '400 36px/1.08 var(--font-serif)',
      letterSpacing: '-0.02em'
    }
  }, "Activity"), /*#__PURE__*/React.createElement(Button, {
    variant: "accent",
    icon: "user-plus",
    onClick: () => setInv(true)
  }, "Invite a relative")), /*#__PURE__*/React.createElement(AvatarStack, {
    people: D.editors,
    max: 4,
    label: "4 relatives are building this tree"
  }), /*#__PURE__*/React.createElement("div", null, D.activity.map((a, i) => /*#__PURE__*/React.createElement(ActivityItem, _extends({
    key: i
  }, a, {
    preview: a.photos ? /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 8,
        maxWidth: 360
      }
    }, D.photos.slice(0, 3).map(p => /*#__PURE__*/React.createElement(PhotoTile, {
      key: p.id,
      src: p.src,
      aspect: "1 / 1",
      onClick: () => onPhoto(p.id)
    }))) : a.quote ? /*#__PURE__*/React.createElement("p", {
      style: {
        margin: 0,
        font: 'italic 400 18px/1.4 var(--font-serif)',
        color: 'var(--ink)'
      }
    }, "\u201C", a.quote, "\u201D") : null
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      paddingTop: 24
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    icon: "log-out",
    onClick: onSignOut
  }, "Sign out")), /*#__PURE__*/React.createElement(Dialog, {
    open: inv,
    title: "Invite a relative",
    description: "They'll get an email with a link to join the Hale family tree.",
    onClose: () => setInv(false),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setInv(false)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: () => {
        setInv(false);
        notify({
          tone: 'success',
          message: 'Invitation sent'
        });
      }
    }, "Send invitation"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Their email",
    type: "email",
    placeholder: "name@example.com"
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "role",
    value: "add",
    label: "Can add and edit",
    description: "Recommended for close family",
    checked: role === 'add',
    onChange: setRole
  }), /*#__PURE__*/React.createElement(Radio, {
    name: "role",
    value: "view",
    label: "Can only view",
    checked: role === 'view',
    onChange: setRole
  }))));
}
Object.assign(window, {
  PeopleScreen,
  MapScreen,
  StoriesScreen,
  ActivityScreen
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/Screens.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/TreeScreen.jsx
try { (() => {
const DS_T = window.OrigineDesignSystem_f2a82e;
const REL_OPTS = ['Father', 'Mother', 'Spouse or partner', 'Child', 'Brother or sister'];
function TreeScreen({
  rootId,
  onOpen,
  notify
}) {
  const {
    FamilyChart,
    Card,
    Avatar,
    Button,
    Dialog,
    Input,
    Select
  } = DS_T;
  const D = window.ORIGINE_DATA;
  const [, force] = React.useState(0);
  const [focus, setFocus] = React.useState(() => localStorage.getItem('origine-focus') || rootId);
  const [deg, setDeg] = React.useState(2);
  const [adding, setAdding] = React.useState(null);
  const [name, setName] = React.useState('');
  const [born, setBorn] = React.useState('');
  React.useEffect(() => {
    localStorage.setItem('origine-focus', focus);
  }, [focus]);
  const p = D.people[focus] || D.people[rootId];
  const first = p.name.split(' ')[0];
  const opts = REL_OPTS.filter(o => !(o === 'Father' && p.father) && !(o === 'Mother' && p.mother) && !(o === 'Brother or sister' && !p.father && !p.mother));
  const open = rel => {
    setAdding(rel || opts[0]);
    setName('');
    setBorn('');
  };
  const save = () => {
    const id = 'n' + Date.now();
    const rel = adding;
    const touched = [p, p.spouse && D.people[p.spouse]].filter(Boolean).map(x => [x, {
      father: x.father,
      mother: x.mother,
      spouse: x.spouse,
      children: x.children && x.children.slice()
    }]);
    const np = {
      id,
      name: name || 'Unknown ' + rel.toLowerCase(),
      born: born || undefined,
      died: '?'
    };
    if (rel === 'Father') {
      p.father = id;
      np.children = [p.id];
      if (p.mother) np.spouse = p.mother;
    }
    if (rel === 'Mother') {
      p.mother = id;
      np.children = [p.id];
      if (p.father) np.spouse = p.father;
    }
    if (rel === 'Spouse or partner') {
      np.spouse = p.id;
      if (!p.spouse) p.spouse = id;
    }
    if (rel === 'Child') {
      p.children = (p.children || []).concat(id);
      if (p.spouse && D.people[p.spouse]) {
        const s = D.people[p.spouse];
        s.children = (s.children || []).concat(id);
      }
      np.died = undefined;
      np.living = !!born && +born > 1940;
    }
    if (rel === 'Brother or sister') {
      np.father = p.father;
      np.mother = p.mother;
    }
    D.people[id] = np;
    setAdding(null);
    force(x => x + 1);
    notify({
      tone: 'success',
      message: np.name + ' added as ' + first + '\u2019s ' + rel.toLowerCase(),
      actionLabel: 'Undo',
      onAction: () => {
        touched.forEach(([x, b]) => Object.assign(x, b));
        delete D.people[id];
        force(x => x + 1);
      }
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16,
      padding: 'var(--space-5) var(--gutter) var(--space-8)',
      maxWidth: 1400
    }
  }, /*#__PURE__*/React.createElement(FamilyChart, {
    people: D.people,
    focusId: p.id,
    onFocus: setFocus,
    degree: deg,
    onDegreeChange: setDeg,
    onAdd: (fid, role) => open(role === 'father' ? 'Father' : 'Mother'),
    height: "min(64vh, 680px)"
  }), /*#__PURE__*/React.createElement(Card, {
    padding: 16,
    style: {
      display: 'flex',
      gap: 16,
      alignItems: 'center',
      flexWrap: 'wrap'
    }
  }, p.src && /*#__PURE__*/React.createElement(Avatar, {
    name: p.name,
    src: p.src,
    size: 56
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 200,
      display: 'grid',
      gap: 2
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      font: '400 22px/1.15 var(--font-serif)'
    }
  }, p.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: 'var(--ink-3)'
    }
  }, [p.living ? p.born + ' – Living' : (p.born || '?') + ' – ' + (p.died || '?'), p.birthplace].filter(Boolean).join(' · '))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    icon: "user-plus",
    onClick: () => open()
  }, "Add a relative"), /*#__PURE__*/React.createElement(Button, {
    iconRight: "arrow-right",
    onClick: () => onOpen(p.id)
  }, "View profile"))), /*#__PURE__*/React.createElement(Dialog, {
    open: !!adding,
    title: 'Add a relative of ' + first,
    description: "Everyone in Origine is linked to someone already in the tree. Fill in what you know; others can add more later.",
    onClose: () => setAdding(null),
    actions: /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement(Button, {
      variant: "ghost",
      onClick: () => setAdding(null)
    }, "Cancel"), /*#__PURE__*/React.createElement(Button, {
      onClick: save
    }, "Add to tree"))
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Select, {
    label: 'Relationship to ' + first,
    options: opts,
    value: adding || opts[0],
    onChange: setAdding
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "e.g. Michael Hale",
    value: name,
    onChange: e => setName(e.target.value)
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Birth year",
    placeholder: "Approximate is fine",
    value: born,
    onChange: e => setBorn(e.target.value)
  }))));
}
window.TreeScreen = TreeScreen;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/TreeScreen.jsx", error: String((e && e.message) || e) }); }

// ui_kits/web-app/data.js
try { (() => {
// Sample family data for the Origine UI kit. Names are placeholders.
window.ORIGINE_DATA = (() => {
  const PH = '../../assets/sample-photos/';
  const P = {
    m: {
      id: 'm',
      name: 'Margaret Ellen Hale',
      born: '1921',
      died: '2009',
      birthplace: 'Cork, Ireland',
      deathplace: 'Boston, Massachusetts',
      occupation: 'Schoolteacher',
      father: 't',
      mother: 'b',
      spouse: 'p',
      children: ['r', 'j']
    },
    t: {
      id: 't',
      name: 'Thomas Hale',
      born: '1890',
      died: '1962',
      birthplace: 'Cork, Ireland',
      father: 'w',
      mother: null,
      children: ['m', 'n']
    },
    b: {
      id: 'b',
      name: "Bridget O'Connell",
      born: '1894',
      died: '1971',
      birthplace: 'Kinsale, Ireland',
      father: 'd',
      mother: 'k',
      children: ['m', 'n']
    },
    w: {
      id: 'w',
      name: 'William Hale',
      born: '1858',
      died: '1931',
      birthplace: 'Cork, Ireland'
    },
    d: {
      id: 'd',
      name: "Daniel O'Connell",
      born: '1861',
      died: '1920',
      birthplace: 'Kinsale, Ireland'
    },
    k: {
      id: 'k',
      name: 'Kathleen Ryan',
      born: '1866',
      died: '1944',
      birthplace: 'Bandon, Ireland'
    },
    n: {
      id: 'n',
      name: 'Nora Hale',
      born: '1924',
      died: '1998',
      birthplace: 'Cork, Ireland'
    },
    p: {
      id: 'p',
      name: 'Patrick Byrne',
      born: '1919',
      died: '1990',
      birthplace: 'Galway, Ireland',
      spouse: 'm',
      children: ['r', 'j']
    },
    r: {
      id: 'r',
      name: 'Ruth Byrne Hale',
      born: '1952',
      living: true,
      birthplace: 'Boston, Massachusetts',
      father: 'p',
      mother: 'm',
      children: ['mi']
    },
    j: {
      id: 'j',
      name: 'James Byrne',
      born: '1955',
      living: true,
      birthplace: 'Boston, Massachusetts',
      lives: 'Galway, Ireland',
      father: 'p',
      mother: 'm'
    },
    mi: {
      id: 'mi',
      name: 'Michael Byrne',
      born: '1974',
      living: true,
      birthplace: 'Boston, Massachusetts',
      mother: 'r',
      children: ['e', 'c'],
      src: PH + '125_0978.jpg'
    },
    e: {
      id: 'e',
      name: 'Ella Byrne',
      born: '2000',
      living: true,
      birthplace: 'Boston, Massachusetts',
      lives: 'Cork, Ireland',
      father: 'mi'
    },
    c: {
      id: 'c',
      name: 'Clare Byrne',
      born: '2001',
      living: true,
      birthplace: 'Boston, Massachusetts',
      father: 'mi'
    }
  };
  const events = {
    m: [{
      year: '1921',
      title: 'Born',
      place: 'Cork, Ireland',
      icon: 'baby'
    }, {
      year: '1939',
      title: 'Finished school at St. Angela\u2019s',
      place: 'Cork',
      icon: 'graduation-cap'
    }, {
      year: '1947',
      title: 'Emigrated to Boston with Nora',
      place: 'Cobh \u2192 Boston',
      icon: 'ship',
      detail: 'Sailed in April on the SS America. Their cousin Eileen met them at the dock.'
    }, {
      year: '1949',
      title: 'Married Patrick Byrne',
      place: 'St. Brendan\u2019s, Dorchester',
      icon: 'heart'
    }, {
      year: '1952',
      title: 'Daughter Ruth born',
      place: 'Boston',
      icon: 'baby'
    }, {
      year: '2009',
      title: 'Died',
      place: 'Boston, Massachusetts',
      icon: 'flower-2'
    }]
  };
  // people: ids born, living or settled there
  const places = [{
    id: 'cork',
    name: 'Cork, Ireland',
    years: '1858 \u2013 today',
    lat: 51.8985,
    lon: -8.4756,
    people: ['w', 't', 'm', 'n', 'e']
  }, {
    id: 'kinsale',
    name: 'Kinsale, Ireland',
    years: '1861 \u2013 1920',
    lat: 51.7059,
    lon: -8.5222,
    people: ['b', 'd']
  }, {
    id: 'bandon',
    name: 'Bandon, Ireland',
    years: '1866 \u2013 1944',
    lat: 51.7461,
    lon: -8.7425,
    people: ['k']
  }, {
    id: 'galway',
    name: 'Galway, Ireland',
    years: '1919 \u2013 today',
    lat: 53.2707,
    lon: -9.0568,
    people: ['p', 'j']
  }, {
    id: 'boston',
    name: 'Boston, Massachusetts',
    years: '1947 \u2013 today',
    lat: 42.3601,
    lon: -71.0589,
    people: ['m', 'n', 'p', 'r', 'mi', 'c']
  }];
  const editors = [{
    name: 'Ruth Byrne Hale'
  }, {
    name: "Siobhan O'Connell"
  }, {
    name: 'James Byrne'
  }, {
    name: 'Liam Hale'
  }];
  // tags: x/y are % of the image; id null = face found but not yet named
  const photos = [{
    id: 'ph1',
    src: PH + '125_0987.jpg',
    caption: 'Snow day with Grandad',
    meta: '21 March 2008',
    place: 'Boston, Massachusetts',
    aspect: '3 / 4',
    addedBy: 'Michael Byrne',
    tags: [{
      id: null,
      x: 28,
      y: 25
    }, {
      id: 'e',
      x: 14,
      y: 33
    }, {
      id: 'c',
      x: 77,
      y: 37
    }]
  }, {
    id: 'ph2',
    src: PH + '125_0978.jpg',
    caption: 'Michael and Ella with the snowwoman',
    meta: '21 March 2008',
    place: 'Boston, Massachusetts',
    aspect: '4 / 3',
    addedBy: 'Michael Byrne',
    tags: [{
      id: 'mi',
      x: 28,
      y: 24
    }, {
      id: 'e',
      x: 43,
      y: 41
    }]
  }, {
    id: 'ph3',
    src: PH + '125_0974.jpg',
    caption: 'Ella and Clare',
    meta: '21 March 2008',
    place: 'Boston, Massachusetts',
    aspect: '3 / 4',
    addedBy: 'Michael Byrne',
    tags: [{
      id: 'e',
      x: 26,
      y: 31
    }, {
      id: 'c',
      x: 58,
      y: 36
    }]
  }, {
    id: 'ph4',
    src: PH + '125_0977.jpg',
    caption: 'The snowwoman',
    meta: '21 March 2008',
    place: 'Boston, Massachusetts',
    aspect: '3 / 4',
    addedBy: 'Michael Byrne',
    tags: []
  }];
  const activity = [{
    who: {
      name: 'Michael Byrne',
      src: PH + '125_0978.jpg'
    },
    action: 'added 4 photos to',
    target: 'Snow day, March 2008',
    time: '2 days ago',
    photos: true
  }, {
    who: editors[1],
    action: 'added a birth record for',
    target: "Daniel O'Connell",
    time: 'Last week'
  }, {
    who: editors[2],
    action: 'wrote a story about',
    target: 'Patrick Byrne',
    time: '3 weeks ago',
    quote: 'Dad never talked about Galway much, but he kept a photo of the harbour above his workbench.'
  }, {
    who: editors[0],
    action: 'joined the tree and linked herself to',
    target: 'Margaret Ellen Hale',
    time: 'March 2026'
  }];
  const history = {
    m: [{
      who: 'Ruth Byrne Hale',
      change: 'changed birth place from \u201cCork\u201d to \u201cCork, Ireland\u201d',
      time: '2 days ago'
    }, {
      who: "Siobhan O'Connell",
      change: 'added occupation \u201cSchoolteacher\u201d',
      time: 'Last week'
    }, {
      who: 'Ruth Byrne Hale',
      change: 'created this person',
      time: 'March 2026'
    }]
  };
  function tree(id, depth = 0, max = 3) {
    const p = P[id];
    if (!p) return null;
    const node = {
      ...p
    };
    if (depth < max - 1) {
      node.father = tree(p.father, depth + 1, max);
      node.mother = tree(p.mother, depth + 1, max);
    }
    return node;
  }
  return {
    people: P,
    events,
    places,
    editors,
    activity,
    photos,
    history,
    tree
  };
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/web-app/data.js", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.AvatarStack = __ds_scope.AvatarStack;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Icon = __ds_scope.Icon;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Stepper = __ds_scope.Stepper;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.ActivityItem = __ds_scope.ActivityItem;

__ds_ns.EventRow = __ds_scope.EventRow;

__ds_ns.FamilyChart = __ds_scope.FamilyChart;

__ds_ns.PersonNode = __ds_scope.PersonNode;

__ds_ns.PersonRow = __ds_scope.PersonRow;

__ds_ns.PhotoTile = __ds_scope.PhotoTile;

__ds_ns.BottomNav = __ds_scope.BottomNav;

__ds_ns.SideNav = __ds_scope.SideNav;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.TopBar = __ds_scope.TopBar;

})();
