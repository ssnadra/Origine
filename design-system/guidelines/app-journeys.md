# Origine · App journeys & functional decisions

Starting point for wireframes. Reflects the UI kit in `ui_kits/web-app/` as of 7 Oct 2026.

## Principles
- Mobile-first, responsive. 48px minimum touch targets. Plain language, no genealogy jargon.
- One family, one tree. Every person must be linked to at least one existing relative.
- Collaboration is visible: who added what, who else is here.
- Low admin: no moderation queues; edits are attributed and undoable.

## Navigation
- Mobile: top bar (wordmark, collaborators, search) + bottom nav.
- Desktop (≥900px): left side nav replaces bottom nav.
- Destinations: Tree, People, Map, Stories, Activity. Person, Edit and Photo are detail views with a Back button.

## Journeys

### 1. Join by invitation
Invite email → Sign in (email magic link, no password) → "Check your email" → Onboarding:
1. Find yourself in the tree (pick from suggested people, or "I'm not in the tree yet")
2. Add a profile photo (skippable)
3. Choose a first task: explore tree / add photos / fill in details → lands on that view
Decision: no self sign-up. Only existing members can invite.

### 2. Returning sign-in
Email → magic link → last-visited view. Sign out from side nav (desktop) or Activity (mobile).

### 3. Explore the tree
- One chart, centred on a focused person. Shows ancestors, siblings, spouses and descendants within N degrees (parent, child or spouse link = 1). Default 2, range 1–6.
- −/+ stepper top-left; Re-centre button beside it.
- Tap a person → they become the focus; chart re-lays out and centres on them.
- Pinch / Ctrl-⌘+scroll changes degrees, but only after a confirm dialog ("Use zoom to change the view?", with "Don't ask again"). Declining keeps normal browser zoom.
- "+N" pill = relatives just outside the current view.
- Cards: photo only if one is set, else name + key dates.
- Focused-person card below the chart: Add a relative, View profile.

### 4. Add a relative
From Tree: "Add a relative" or a dashed "+" card for a missing parent → dialog: relationship (Father, Mother, Spouse/partner, Child, Sibling), name, birth year (approximate OK) → added and linked → toast with Undo.
Decision: people can only be created relative to someone already in the tree.

### 5. View a person
Portrait, name, dates, badges (Living, Needs a source) → tabs: About (facts, quoted memory), Timeline (life events), Photos (tagged photos), Family (parents, spouse, children → tap to open).

### 6. Edit a person
Grouped fields (Name, Birth, Death, About), "Still living" switch, visibility (Everyone in the tree / Close family only), Save/Cancel → toast with Undo. "Recent changes" list shows who changed what, with Undo on the latest.
Decision: no approval workflow; history plus undo replaces moderation.

### 7. Photos & tagging
Stories grid → open a photo → caption, date, place, uploader, "In this photo" list.
Tag: "Tag someone" → tap a face → search relatives → assign. Unknown faces show "Who is this?" for anyone to name. Tags can be removed; tapping a tag opens that person.

### 8. Map
- Full-screen map. By default pins only places linked to at least one living relative; the number on a pin = living relatives there.
- Nearby pins merge; tap to zoom in and split them.
- Menu button (top-right) opens a right-hand Places panel: list of places, "Include past places" switch. Selecting a place zooms to it.

### 9. Activity & inviting
Feed of contributions (photos added, records added, stories written, people joining) with previews. "Invite a relative" → email + permission (Can add and edit / Can only view).

### 10. People
Search by name, filter by surname chips, list sorted by birth year → opens Person.

## Open questions for wireframing
- Does zoom change degrees (as built) or change the focused person?
- Story authoring flow (currently read-only).
- Photo upload flow (multi-select, bulk tagging, dates/places).
- Privacy for living people beyond the per-person setting; who can invite whom.
- Merging duplicates and disputed facts (sources, conflicting dates).
- Notifications (email digest vs in-app only).
