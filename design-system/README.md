# Origine Design System

Files exported from https://claude.ai/design/p/f2a82e76-5a72-467a-a008-cc5d513ae2a5?via=share on 10/26/26. The Design System below should serve as a starting point, not a definitive guide/set of rules.

Origine is a responsive, mobile-first website for viewing and building one family's tree together. Extended branches of the family sign in, browse a pedigree chart, open a person's page, add relatives, and upload photos, documents and stories. Priorities from the brief:

- **Simple for non-technical relatives.** Few destinations, large touch targets, plain words.
- **Collaborative.** Everyone can see who else is contributing (avatar stacks, activity feed, invitations).
- **Low maintenance.** A component-based app that needs little administration once configured.
- **Uncluttered.** Existing tools (Ancestry, Gramps Web) try to do too much. Origine keeps four core views: Tree, People, Map, Stories, plus Activity.

## Sources

No code, Figma or brand assets were provided. The system was designed from scratch using:

- Brief from the project owner (above).
- Gramps Web feature list: https://www.grampsweb.org/features/ (pedigree/fan charts, in-chart editing with + buttons, timeline, map, photo tagging, revision history, privacy levels). Origine keeps the pedigree chart, in-chart "Add" slots, person page, map and timeline, and drops DNA, reports, tasks, blog editor and query languages.
- Ancestry.com: collaborator avatars (referenced by the owner, not fetched).
- Refero Styles: https://styles.refero.design/ — warm-editorial references (ElevenLabs "warm cream editorial", Perplexity "scholar's parchment", Slite, pampam.city "old explorer's notebook").
- Dribbble: https://dribbble.com/search/family-tree-ux (search page didn't render for the agent; not used directly).

Three directions were explored in `directions/` (A Archive Paper, B Living Branches, C Atlas). **A was confirmed by the owner**, with B's 48px touch targets folded in. Per-branch family-line colours were tried and removed at the owner's request (they added clutter); surnames are shown as plain text chips instead.

Sample photos in `assets/sample-photos/` are the owner's own family snapshots (four digital photos, 21 March 2008), downscaled to 1400px.

**No logo exists.** The wordmark is the word "Origine" set in Literata 400. Do not draw a mark.

## Index

- `styles.css`: entry point (imports only)
- `tokens/`: `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`, `base.css`
- `assets/sample-photos/`: owner-supplied family photos used in the UI kit and cards
- `assets/fonts/`: Literata (roman 300–600 + italic 300–500, variable), Hanken Grotesk (variable 400–600), latin subsets, from Google Fonts
- `guidelines/`: foundation specimen cards (Colors, Type, Spacing, Brand)
- `components/`: React primitives, each with `.jsx`, `.d.ts`, `.prompt.md`, plus one card per folder
- `ui_kits/web-app/`: interactive recreation of the app (see its README)
- `directions/`: the three original direction explorations
- `thumbnail.html`, `SKILL.md`

### Components

- **core/**: Icon, Button, IconButton, Badge, Tag, Avatar, AvatarStack, Card
- **forms/**: Input, Select, Checkbox, Radio, Switch, Stepper
- **feedback/**: Dialog, Toast, Tooltip
- **navigation/**: TopBar, Tabs, BottomNav, SideNav
- **genealogy/**: FamilyChart, PersonNode, PersonRow, EventRow, ActivityItem, PhotoTile

Intentional additions beyond a standard set: **Icon** (wraps the Lucide CDN set), **Avatar** and **AvatarStack** (people and collaborator presence), **BottomNav / SideNav / TopBar** (app shell), and the **genealogy/** family (the product's core objects).

## Product rules

- **One tree.** Every person must be linked to at least one relative already in the tree; people are only ever added *as someone's* father, mother, spouse, child or sibling. There is one family chart, viewed from whichever person is in focus.
- **Focus + degrees.** The chart shows ancestors, siblings, spouses and descendants of the focused person up to N degrees of separation (parent, child and spouse links each count 1). Tapping a person refocuses. A +N pill marks people with relatives just outside the view.
- **Zoom is opt-in.** Pinch or Ctrl/⌘+scroll on the chart changes degrees only after a confirm dialog ("Use zoom to change the view?"); declining leaves normal browser zoom alone.
- **Tree cards are minimal.** A photo only if one has been set; otherwise name and key dates. Empty parent slots are dashed cards with a centred +, no text.

## Content fundamentals

- **Voice:** a careful family archivist. Warm, plain and specific. Never cute, never technical.
- **Person:** address the reader as "you"; refer to relatives by first name ("Add Margaret's father"). The product never says "I" or "we" except in system emails ("We sent Ruth an invitation").
- **Casing:** sentence case everywhere: buttons, titles, tabs ("Add a relative", "Stories & photos"). Eyebrow labels are uppercase via CSS only.
- **Words to use:** relative, family, tree, line (for a branch), story, photo, place, born, died, married. **Avoid:** genealogy jargon (GEDCOM, citation, repository, proband), "record", "entity", "user", "node".
- **Dates:** natural and tolerant. "1921 – 2009", "c. 1930", "Born 1952", "– Living". Uncertainty is normal: "Approximate is fine".
- **Empty states** invite rather than scold: "No photos of Thomas yet. If you have one, add it and tag who is in it."
- **Confirmations** are short and offer Undo: "Thomas Hale added to the tree · Undo".
- **Attribution** is always visible: "Ruth Byrne Hale added 4 photos to Margaret Ellen Hale · 2 days ago".
- **No emoji.** No exclamation marks in UI copy.

## Visual foundations

- **Mood:** a well-kept family album or museum collection page. Warm paper, ink-black type, one aubergine accent.
- **Colour:** neutrals carry 90%+ of the UI: Paper `#FAF7F2` page, Vellum `#F2EDE4` sunken areas, Card `#FFFDF9` raised surfaces, Rule `#E4DDD1` hairlines. Ink `#1F1B16` for text and primary buttons. Aubergine `#5E2750` is the only brand accent: links, focus rings, the active-tab underline, event years, the accent button (used sparingly, e.g. Invite). Never pure white page backgrounds, never pure grey.
- **No per-branch colour coding.** People are distinguished by name, photo and position in the tree, not colour. Avatars are neutral (vellum initials or a photo).
- **Type:** Literata (a screen-first serif with a tall x-height and sturdy strokes, chosen for legibility; never lighter than 400) for people's names, page titles, quotes and story headings; italic for quoted memories and emphasis. Hanken Grotesk for all UI, body and metadata. Display 56/400, H1 40/400, H2 30/400, H3 22/400, body 16/1.55, small 14, caption 12. Headlines tracked −0.015em. Inputs never below 16px.
- **Spacing:** 4px base (`--space-1`…`--space-24`). Page gutter 20px mobile. Generous vertical rhythm (24–48px between sections).
- **Corners:** small and restrained: 4px badges/photos, 6px buttons/inputs, 10px cards and tree nodes, 16px top corners of mobile sheets. Pills only for chips; circles only for avatars.
- **Borders vs shadows:** hairline 1px rules do the separating. Shadows exist only for floating layers: shadow-1 on hover, shadow-2 for raised panels/toasts, shadow-3 for dialogs.
- **Backgrounds:** flat paper. No gradients, textures or full-bleed hero images. The only pattern is the diagonal stripe used as an image placeholder.
- **Imagery:** family photos shown as-is, in plain rectangles like album prints, with a caption and date below. No filters, no overlays, no rounded photo corners beyond 4px. Material ranges from faded black-and-white scans to bright, saturated 2000s digital snapshots (see the sample snow-day photos); the quiet paper-and-ink frame is neutral enough that neither fights the UI. Never tint or crop faces to fit a colour scheme; use `object-fit: contain` in the photo viewer.
- **Photo tags:** white 44px rings on faces (dashed when the person isn't named yet) with a paper-coloured name label below; unnamed faces show an ink "Who is this?" label.
- **Cards:** Card white, 1px Rule border, 10px radius, no shadow at rest. Interactive cards darken their border to Rule-strong on hover and pick up shadow-1. Selected = Ink border.
- **Hover:** neutral controls fill with Vellum; primary darkens Ink → `#3A332B`; accent darkens to `#461A3B`. Links switch from aubergine to ink.
- **Press:** 1px downward nudge on buttons. No scale.
- **Focus:** 3px aubergine ring at 28% (`--focus-ring`); inputs also turn their border Ink.
- **Motion:** short and functional. 120ms hover/press, 180ms menus/tooltips/tabs, 280ms sheets and dialogs. `cubic-bezier(.2,.7,.2,1)` ease-out. Fades and small slides only; no bounce, no parallax.
- **Map pins:** 32px aubergine circles with a white 2px border, showing the number of living relatives at that place; past-only places (shown on request) use parchment; the selected pin is ink. Ink tooltips with the place name.
- **Transparency & blur:** only the dialog scrim (Ink at 36%) and the photo people-count pill and tag labels (Paper at 92–94%). No glass/blur effects.
- **Layout:** mobile: 60px TopBar, content, 64px BottomNav (Tree, People, Map, Stories, Activity). ≥900px: 232px SideNav replaces BottomNav. Reading width 640px; content max 1120px. Dialogs become bottom sheets under 600px. The family chart is the single tree view: it fills the content area, pans in both directions, and shows everyone within N degrees of the focused person (−/+ stepper, 1–6, default 2).
- **Touch:** every control is at least 48px tall (`--tap-min`); 36px `sm` size is reserved for dense desktop toolbars.

## Iconography

- **Set:** [Lucide](https://lucide.dev), loaded from CDN (`https://unpkg.com/lucide-static@0.460.0/icons/<name>.svg`) and rendered through the `Icon` component as a CSS mask so icons take `currentColor`. 2px stroke, rounded caps, outline only. No icon font, no PNG icons.
- **Substitution flag:** there was no existing icon set; Lucide was chosen because its stroke weight matches Hanken Grotesk and it covers genealogy needs (`git-fork` for tree, `baby`, `heart`, `ship`, `flower-2`, `map-pin`, `images`, `users`).
- **Sizes:** 18px in buttons, 20px standalone, 22px in BottomNav, 13–16px in chips and timeline dots.
- **Colour:** Ink or Ink-3. Aubergine only on the active SideNav item.
- **Rules:** icons accompany labels; icon-only buttons always have an aria-label and (on desktop) a Tooltip. No emoji, no unicode glyphs as icons (the → arrow in place names like "Cobh → Boston" is text, not an icon).
