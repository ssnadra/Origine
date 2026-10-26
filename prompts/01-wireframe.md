Build a complete set of low-fidelity wireframes for Origine, a private family-tree website. This is the structure pass: grey boxes, real labels, no visual styling. A second pass will apply my design system afterwards, so the goal here is to get every screen, state and flow right.

The spec below is long because the decisions are already made. Follow it as written. Where it leaves something open, choose the simplest option and list what you chose in a "Decisions I made" note at the end. If something in the spec seems contradictory or unworkable on a 390px screen, draw the closest workable version and list it in an "Issues" note rather than silently changing it.

# What Origine is

One extended family, about 200–800 people in the tree and 30–100 of them signed in as members, uses the site to build the family tree together, share old photos and scanned documents, and find each other. Members range from teenagers to people in their eighties, and many are not comfortable with technology. Nobody wants to administer it: there are no approval queues, every change is attributed to whoever made it, and any change can be undone.

The interface is in English and Romanian. Names contain Romanian diacritics (ă, â, î, ș, ț).

# Principles that apply to every screen

- Mobile-first. Design the 390px layout first, then the 1280px layout. Both widths use the same page layouts with responsive sizing; desktop does not get different page structures, side-by-side panes or extra features, except where this spec says so.
- Every tappable thing is at least 48px in both dimensions.
- Plain language. No genealogy terms (no "spouse of sibling", "consanguinity", "pedigree", "GEDCOM"). The one exception is the word "degrees" on the tree and map steppers, which is intentional.
- One family, one tree. Every person is connected to at least one other person. The interface never allows an action that would leave someone unconnected.
- Collaboration is visible: screens show who added or changed things and who has an account.
- No moderation. Nothing waits for approval. Changes apply immediately, are attributed, and can be undone by any member for 30 days.

# What to deliver

- Static wireframe frames, greyscale, using real labels and realistic sample content (no lorem ipsum).
- Every screen at 390px. At 1280px draw: Tree, Map, Photos grid, Photo view, Person page, Edit person, Activity, Settings, Members list, Sign in.
- Group frames into the sections listed under "Frames" below. Number each frame with the ID given (A1, B3, …) and title it.
- Draw arrows between frames within a journey to show the order.
- Beside any frame whose behaviour can't be shown in a still image (timings, gestures, what cancels what), add a short annotation with the rule. The rules are in this spec; copy them rather than paraphrasing loosely.
- Duplicate four frames in Romanian to check that longer labels fit: the default Tree, the Add a relative dialog, the Person page (About tab), and the first Onboarding screen. Translate the labels properly.
- End with three notes: "Components needed" (every distinct component you drew, so it can be matched against the design system), "Decisions I made", and "Issues".

# Sample data

Invent one fictional Romanian family and reuse it on every frame so the screens tell a consistent story: about 40 people across five generations, with at least two family names, births from roughly 1890 to 2020, and places in Romania plus a few abroad (for example Italy, Germany, Canada). Include these cases, because screens depend on them:

- The signed-in member, a woman in her thirties, with parents, one sibling, a partner and one child.
- A person with a former partner and a current partner.
- A person with three parents recorded (two birth parents and an adoptive or step-parent who was added as a parent).
- Two siblings who are connected as siblings but have no parents recorded.
- A person with no photo, an approximate birth year ("about 1890") and no known death date.
- Several living people without accounts, one of whom has a pending invitation.
- A married woman whose birth surname differs from her current surname.

# Navigation

Four destinations: **Tree**, **Map**, **Photos**, **Activity**.

- 390px: a bottom tab bar with those four tabs. Activity shows a count badge when there are "For you" items.
- 1280px: a left rail with the same four, and **Settings** pinned at the bottom of the rail.
- On phones, Settings is not in the tab bar. It is a button in the header of the member's own Person page.
- Search is an icon button at the top right of the Tree screen. It opens People (search).
- Person page, Edit person, People search, Photo view, Upload, Settings and Members list are detail pages. Each has a Back button at the top left.

# Tree

## How the chart is drawn

- Ancestors above, descendants below, each generation on its own row.
- Partners sit side by side, joined by a short solid line. A former partner sits on the person's other side, joined by a dashed line.
- Children hang from the line between their parents. Adoptive parent links are drawn exactly like birth links. Step-parents are not shown as parents unless someone has explicitly added them as a parent.
- A third or fourth parent sits beside the first two.
- Siblings with no recorded parents sit side by side under a shared bracket.
- Lines never cross a card.

## Person cards

Two sizes:

- **Full card**, used when the view shows 1–3 degrees: photo if the person has one (otherwise no image area at all, not a placeholder), full name, years.
- **Compact card**, used at 4 degrees and above: full name and years only.

Zooming does not switch card size; only the degrees setting does.

On both: names wrap to two lines rather than truncating. Years read "1931–2004", "1988–" for the living, "about 1890–" when approximate and unknown. A small muted check mark beside the name means this person has an account. People who have passed away look the same as living people. The selected card has a strong outline. Cards are at least 48px tall.

## Controls on the Tree screen

- Top left: a degrees stepper, "− 2 +", with the current number between the buttons and the word "degrees". On phones show small visible "fewer" and "more" labels; on desktop these are hover labels reading "Show fewer relatives" and "Show more relatives". Default is 2. Minimum is 1. There is no maximum.
- "Degrees" counts links from the selected person: each parent, child or partner link is 1. At 2 degrees a person sees their parents, partner, children and siblings (1 or 2 away), plus grandparents, grandchildren, parents-in-law and children's partners.
- Top right: search icon, then a pencil icon that turns on edit mode.
- Bottom right: a persistent "View profile" button for the selected person.
- A re-centre pill appears near the stepper only when the selected card is not centred.
- A small "Me" pointer appears at the edge of the screen, beside the member's nearest visible relative, only when the member's own card is not in view. Tapping it returns to the starting view: the member selected, 2 degrees, centred.

## Behaviour (annotate these)

- On first open the member's own card is selected at 2 degrees.
- Tapping any card selects it. The outline moves and the set of visible relatives redraws around the new person immediately.
- After 0.3 seconds with no input, the chart glides for about 0.8 seconds to centre the selected card. Any touch, scroll or key press during the glide cancels it, leaves the view where it is, and shows the re-centre pill.
- Tapping the already-selected card opens that person's page. (A quick double-tap on any card therefore opens their page.)
- Drag pans. Pinch or scroll zooms. Ctrl/⌘ + scroll changes the degrees number; this is a hidden shortcut and gets no on-screen hint.
- There is no press-and-hold action.

## Edit mode

- Turning on the pencil shows a bar across the top: "Editing the tree" with a "Done" button.
- Every card gains a small "+" button at its corner. Tapping it starts Add a relative for that person.
- Dashed empty "+" cards appear for missing parents only, up to two per visible person. Tapping one starts Add a relative with Parent preselected.
- Tapping a card's body opens a menu: **Edit details**, **Same person as…** (merge), **Change family connections**, **Remove from tree**. Admins also see **Make admin** / **Remove admin** on cards of people with accounts.
- "Remove from tree" and removing a connection are blocked when they would leave anyone unconnected. Show the blocked state with a plain explanation naming who would be cut off.

# Adding and connecting people

## Add a relative (dialog)

Fields, in order:

1. Relationship to the starting person: Mother, Father, Partner, Child, Brother, Sister. (Choosing one pre-fills gender; choosing Partner shows a Current / Former choice.)
2. First name and family name, with a button beside them: "Connect to someone already in the tree". This opens name search and connects the existing person instead of creating a new one.
3. Birth year, with an "about" checkbox. Optional.
4. Gender: Woman / Man / Not stated.

After saving: the person appears in the tree, connected, and a toast reads "Added [name]" with **Undo** and **Add details** (opens Edit person).

## Rules to show

- **Possible duplicate**: if first name and family name match an existing person and the birth years are close, the dialog shows "Is this the same person?" with that person's card and two choices: "Yes, connect them" and "No, add as new".
- **Siblings**: people who share a parent are siblings automatically. Two people can also be connected as siblings with no parents recorded.
- **Parent added to someone with siblings**: a follow-up asks "Is [parent] also the parent of [sibling]?" with Yes / No / Not sure, once per sibling. "No" records them as half-siblings.

## Same person as… (merge)

Pick the other record from search, then a comparison screen shows both side by side with a choice per differing field, then confirm. The merge is attributed and undoable like any change.

## Change family connections

A list of the person's parents, partners, children and siblings. Each row has Remove. Partner rows also have a Current / Former switch. An "Add a relative" button sits at the bottom.

# Person page

## Header (always visible above the tabs)

Portrait or initials, full name, years, and one of:

- **Invite** button, if the person is living and has no account.
- "Invited by Elena · expires in 9 days" with **Send again** and **Cancel invite**, if an invitation is pending.
- Nothing extra, if they have an account or have passed away.

An **Edit** button. On the member's own page, also a **Settings** button.

## Tabs

1. **About**: the field groups below, showing only what this viewer is allowed to see. Hidden groups show a single line such as "Contact details are shared with close family only".
2. **Photos**: grid of photos and documents this person is tagged or mentioned in.
3. **Family**: parents, siblings, partners and children as rows that open each person, plus "Show in tree", which opens Tree with this person selected.
4. **How you're related**: one sentence at the top ("Ana is your grandmother's brother's daughter"), then the chain as a vertical stack of person cards from the viewer down to this person, with the connection named between each pair ("daughter of", "brother of"). Below, a "Show on tree" button opens Tree with that path highlighted. This tab is absent on the member's own page.

## Field groups

- **Basics** (always visible to all members): full name, birth surname, nickname, birth year, passed away.
- **Life**: full birth date and place, full death date and place, short biography, and any number of custom fields where the editor types both the title and the detail (for example "Occupation" / "Doctor").
- **Contact**: phone, email, street address.
- **Location**: current city. This is what places the person on the map.

Dates everywhere accept an exact date, a year only, "about" a year, or unknown. Anyone born more than 110 years ago with no death date is treated as having passed away.

# Edit person

- Fields grouped as above, each group under its own heading.
- A switch labelled "Passed away". Turning it on reveals the death date and place fields.
- The Contact group is editable only by the person themselves. For everyone else it is read-only with a note saying so.
- **Privacy** appears only when a member edits their own page: for each of Life, Contact and Location, a choice of "Everyone in the family", "Close family (within 3 steps of me)", or "Only me".
- When editing a living person without an account, show a note instead of privacy controls: "[Name] can change who sees this once they join."
- **Recent changes** at the bottom: rows showing who changed what (old value → new value) and when, each with Undo.

# Permissions and privacy rules (show these in the relevant frames)

- Any member can edit any person's Basics, Life and Location, upload photos, tag, and add or change connections.
- People who have passed away: everything is visible to all members.
- Living people without accounts: Basics are visible to all members; everything else is visible only to members within 3 steps of that person.
- A member can always see, and undo, anything they added themselves.
- Map pins are optional and always placed at city level, even when a street address is recorded.
- Any member can undo any change for 30 days. If the same field has been changed again since, the confirmation reads "This was changed again by [name]. Restore the earlier value anyway?"
- Removed people, photos and comments can be restored for 30 days.
- Turning on "Passed away" for someone who has an account does not affect their account. They get a "For you" item: "Elena marked you as passed away" with Undo.
- **Suspended members** can see everything they could before but cannot edit, upload, comment or invite. Those controls are hidden, and a one-line banner at the top of every screen reads "Your account is view-only. Contact a family admin."

# Joining and signing in

## Inviting (the inviter's side)

Tapping Invite on a person's page opens a sheet with a ready-written message in the inviter's language, the invitation link, and **Share** and **Copy** buttons, so it can go by WhatsApp, SMS or email. The link works once and expires after 14 days. Only one invitation per person can be active.

## Accepting (the invitee's side)

1. Opening the link shows the sign-in screen with a line naming who invited them.
2. They enter an email and tap the arrow button.
3. "Check your email" screen.
4. The emailed link opens onboarding.

## Onboarding

A progress indicator across four screens. Screens 2–4 have "Skip for now".

1. "Are you Maria Serbu, born 1961?" with **Yes** and **No**.
2. "Check your details": the Basics, Life and Contact fields already recorded, editable, plus adding a photo.
3. "Who can see your details": the three privacy choices for Life, Contact and Location.
4. "How the tree works": one screen with a small illustration and two lines: tap a person to select them; tap again to open their page.

It ends on the Tree with the new member selected.

## If they answer "No"

A screen asks for their name and birth year, then shows: "Thanks. We've told [inviter], and they'll send you a new link." The original link is used up and they get no access to the tree. The inviter gets a "For you" item: either "Mihai says he isn't Andrei. Invite Mihai?" (when a matching person exists) or "Mihai Popescu, born 1975, isn't in the tree yet. Add him?".

## Returning sign-in

One screen: language switch at the top right, an email field, and an arrow button to submit. Members stay signed in on a device for 180 days. An email that doesn't belong to a member gets the same "Check your email" screen, so the site never reveals who is a member. Nothing about the family is visible before signing in.

Also draw: "This link has expired" (with a way to request a new one) and "This invitation has already been used".

# Photos

## Grid

One grid, newest first, mixing photos and scanned documents. Filter chips across the top: All, Photos, Documents, Needs names. A "Filter by person" control. An upload button. Documents carry a small "Document" badge. Items with unnamed faces carry a "Who is this?" marker.

## Upload

Pick several files at once. Then one sheet for the batch: caption, date (exact, year only, or "about"), place, photo or document, and "Tag people now" / "Later".

## Photo view

- The image, with a toggle to show or hide tags.
- Caption, date, place, "Added by [name]".
- Tagging is manual. Tap "Tag someone", tap a spot on the image, then choose a person from search or choose "I don't know who this is". Unknown spots show "Who is this?" and any member can fill them in.
- Tapping a tag shows the person's name with three actions: open their page, "Not them?" (change or remove the tag), and "Use as profile photo".
- Documents have no face tags. They have a "People mentioned" list instead.
- Any member can edit the caption, date, place and tags, download the original, or remove the item.
- **Comments**: one flat list under the details, with no replies or reactions. Authors can edit or delete their own comment. Any member can hide any comment; a hidden comment collapses to "Hidden by [name]" with Undo.

# Map

- Two modes, switched with a toggle: **Where we live now** (default; current city of living relatives) and **Birthplaces** (birth cities).
- An **Include deceased** switch, off by default. When on, their pins appear muted.
- Nearby pins merge into one cluster showing a count. Tapping a cluster zooms in and splits it.
- Tapping a pin for a single city opens a list of the people there: a bottom sheet at 390px, a right-hand panel at 1280px. Tapping a name opens their page.
- A menu button at the top right opens the map panel containing: the mode toggle, the Include deceased switch, a family-name filter, a "degrees from me" stepper (the same control as on the Tree), and a list of places grouped by country then city with counts. Choosing a place zooms to it.

# Activity

- **For you** strip pinned at the top, holding personal items with an action each. Examples: "Elena edited your profile · View changes", "Mihai says he isn't Andrei · Invite Mihai?", "Ioana commented on a photo you're in".
- Below it, one chronological feed. Filter chips: All, Photos, People, New members. A search field that finds activity by member or person name.
- Event types: person added, profile edited, photos added, people tagged, comment added, people merged, new member joined.
- Bursts by one member are grouped into a single expandable row ("Elena added 12 photos", "Mihai updated 5 people").
- Every row opens the thing that changed.

# People (search)

Opened from the search icon on Tree. A search field and a family-name filter that matches both current and birth surnames. Each result shows full name and birth year only. Tapping a result opens that person's page.

# Settings

Rows: Language (English / Română), Privacy defaults (the three privacy choices), Recently edited, Leave the family site, Sign out. Admins also see Members.

- **Recently edited**: every change in the last 30 days. Each row: who, what changed (old → new), which person, when, and Undo.
- **Leave the family site**: a confirmation explaining that their page stays in the tree and becomes unclaimed.
- **Members** (admins only): a searchable list of every living person in the tree. Each row: name, status (Not invited, Invited, Member, Admin, View-only), invited by, last active, and a "…" menu with **Suspend** / **Reinstate** and **Undo this member's changes**. The undo option opens a dialog asking for a time range (last 24 hours, last 7 days, everything), states how many changes will be reversed, and asks for confirmation.

# Frames

Draw all of these at 390px. Draw the ones marked ◆ at 1280px as well.

**A. Joining and signing in**
- A1 Sign in ◆
- A2 Sign in, opened from an invitation
- A3 Check your email
- A4 Link expired
- A5 Invitation already used
- A6 Onboarding 1: Are you…?
- A7 Onboarding 2: Check your details
- A8 Onboarding 3: Who can see your details
- A9 Onboarding 4: How the tree works
- A10 "No": enter your name and birth year
- A11 "No": we've told your relative

**B. Tree**
- B1 Tree, default: member selected, 2 degrees, full cards ◆
- B2 Tree, 1 degree
- B3 Tree, 6 degrees, compact cards ◆
- B4 Another person selected, view off-centre: re-centre pill and "Me" pointer visible
- B5 Edit mode: bar, "+" on cards, dashed parent cards ◆
- B6 Edit mode: card menu open
- B7 Path highlighted (arrived from "Show on tree")
- B8 Tree loading
- B9 Tree failed to load
- B10 First run: only the founder in the tree, with a prompt to add a parent

**C. Adding and connecting**
- C1 Add a relative dialog
- C2 Add a relative: possible duplicate found
- C3 Connect to someone already in the tree (search)
- C4 "Also the parent of…?" follow-up
- C5 Added: toast with Undo and Add details
- C6 Same person as…: comparison
- C7 Change family connections
- C8 Remove blocked: explanation

**D. Person**
- D1 Person page, About ◆
- D2 Person page, Photos
- D3 Person page, Family
- D4 Person page, How you're related
- D5 Own page (Settings button, no fourth tab)
- D6 Living person without an account (Invite button, limited fields, viewer is not close family)
- D7 Person with a pending invitation
- D8 Person with no photo and unknown dates
- D9 Invite sheet
- D10 Edit person ◆
- D11 Edit own page (privacy controls shown)
- D12 Undo confirmation when the field has changed again
- D13 Person page at large text size

**E. Photos**
- E1 Photos grid ◆
- E2 Grid filtered to "Needs names"
- E3 Grid, empty
- E4 Upload: batch details sheet
- E5 Photo view, tags shown ◆
- E6 Photo view: tagging in progress (spot placed, choosing a person)
- E7 Photo view: tag tapped (open / Not them? / Use as profile photo)
- E8 Document view with People mentioned
- E9 Comments, including one hidden comment

**F. Map**
- F1 Where we live now ◆
- F2 Birthplaces with Include deceased on
- F3 People list for one city ◆
- F4 Map panel open
- F5 Map, empty (nobody has set a city yet)

**G. Activity**
- G1 Activity with For you strip ◆
- G2 A grouped row expanded
- G3 Activity, empty

**H. People**
- H1 Search with results
- H2 Search, no results

**I. Settings and admin**
- I1 Settings (member) ◆
- I2 Settings (admin)
- I3 Recently edited
- I4 Members list ◆
- I5 Member "…" menu
- I6 Undo this member's changes dialog
- I7 Leave the family site confirmation

**J. Cross-cutting states**
- J1 View-only (suspended) banner, shown on Tree
- J2 Offline banner, shown on Photos
- J3 "For you": marked as passed away, with Undo

**K. Romanian duplicates**
- K1 = B1, K2 = C1, K3 = D1, K4 = A6
