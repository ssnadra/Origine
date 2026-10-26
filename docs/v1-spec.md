# Origine V1 spec

> **Status: draft.** This spec is the destination of the map [Origine V1: from wireframe to build-ready spec](https://github.com/ssnadra/Origine/issues/1). Items marked **(proposed)** are a best guess based on the research and charting so far. Each one names the open ticket that will confirm or change it. Treat proposed items as guidance, not as settled, until that ticket closes and this file is updated.
>
> Vocabulary follows `GLOSSARY.md`. Screen behaviour, labels and frame IDs come from `prompts/01-wireframe.md`, which is the full product. V1 is a deliberate subset of it.

## Problem Statement

My extended family is spread across Romania and abroad, and what we know about our history is scattered. Old photos sit in different homes, and dates and places live in people's heads. Nobody can easily see how they are related to a cousin's branch. There is no private place where the family can build the tree together, see who added what, and fix mistakes without anyone acting as gatekeeper. Many relatives are uncomfortable with technology and will use only a phone, so anything we use has to be simple, readable and forgiving.

## Solution

Origine V1 is a private, mobile-first website that holds one Family site: a single shared tree and the Members who can sign in to it.

- **Invite-only.** A Member sends an Invitation link to a living relative. The relative confirms who they are and joins. Nothing about the family is visible to anyone who isn't signed in.
- **Build the tree together.** Any Member can add relatives, edit details, and fix connections. Every change applies immediately and records who made it. A mistaken addition can be undone straight away, and removed People and photos can be restored for 30 days.
- **See the tree on a phone.** The tree centres on the selected Person and shows relatives up to a chosen number of degrees away. Tapping a card moves the focus there.
- **Share photos.** Members upload photos in batches and list the People in each one. Each Person's page shows their photos.
- **Two languages.** The interface is in English and Romanian. Names with Romanian diacritics (ă, â, î, ș, ț) work everywhere.

## User Stories

### Joining and signing in

1. As a Member, I want to send an Invitation to a living relative without an account, so that they can join the Family site.
2. As a Member, I want the Invitation to come with a ready-written message in my language and Share and Copy buttons, so that I can send it by WhatsApp, SMS or email without typing anything.
3. As a Member, I want to see on a Person's page that an Invitation is pending, who sent it and when it expires, so that we don't invite the same person twice.
4. As a Member, I want to send a pending Invitation again or cancel it, so that I can recover when a link is lost or sent to the wrong person.
5. As an invited relative, I want the sign-in screen to say who invited me, so that I trust the link.
6. As an invited relative, I want to sign in by typing only my email and tapping a link in the email I receive, so that I don't have to create or remember a password.
7. As an invited relative, I want to be asked "Are you [name], born [year]?", so that I am matched to the right Person in the tree.
8. As an invited relative who isn't the Person named, I want to give my real name and birth year, so that the inviter can fix the mistake and send me the right link.
9. As an inviter, I want to be told when the relative I invited says they are someone else, so that I can invite them correctly. **(proposed: without the For you strip, this may be an email or a notice on the Person page; settled by [Decide which V1 screens and flows to build](https://github.com/ssnadra/Origine/issues/6))**
10. As a new Member, I want to check and correct the details already recorded about me during onboarding, so that my own page is right from day one.
11. As a new Member, I want a one-screen explanation of how the tree works (tap to select, tap again to open), so that I can use it without help.
12. As a new Member, I want onboarding to end on the tree with myself selected, so that I start from where I am in the family.
13. As someone holding an expired link, I want a clear message and a way to ask for a new one, so that I'm not stuck.
14. As someone holding a link that was already used, I want a clear message, so that I understand why it doesn't work.
15. As a returning Member, I want to stay signed in on my phone for 180 days, so that I rarely have to sign in again.
16. As a returning Member, I want to sign in with just my email, so that signing in is easy at any age.
17. As a family, we want the sign-in screen to respond the same way to every email, so that strangers can't find out who is in the family.
18. As a Member, I want to switch the language between English and Română, including on the sign-in screen, so that I can use the site in the language I'm comfortable with.
19. As a Member, I want to sign out, so that I can use a shared device safely.

### Viewing the tree

20. As a Member, I want the tree to open with my own card selected at 2 degrees, so that I immediately see my close family.
21. As a Member, I want to tap any card to select that Person and see the tree redraw around them, so that I can explore other branches.
22. As a Member, I want the tree to glide to centre the selected card after a short pause, so that I don't lose my place.
23. As a Member, I want any touch during the glide to stop it, so that the screen never fights me.
24. As a Member, I want a re-centre pill when the selected card is off-centre, so that I can get back with one tap.
25. As a Member, I want a "Me" pointer when my own card is off screen, so that I can always return to my starting view.
26. As a Member, I want to tap the selected card again to open that Person's page, so that browsing and reading feel like one motion.
27. As a Member, I want a persistent "View profile" button for the selected Person, so that opening a page doesn't depend on knowing the tap-again rule.
28. As a Member, I want a degrees stepper ("− 2 +") to show fewer or more relatives, so that I control how much of the tree I see.
29. As a Member, I want cards with a photo, full name and years at 1–3 degrees, and compact cards at 4 degrees and above, so that the tree stays readable on a small screen.
30. As a Member, I want names to wrap to two lines rather than being cut off, so that long Romanian names are readable.
31. As a Member, I want years shown as "1931–2004", "1988–" or "about 1890–", so that I can read lifespans at a glance.
32. As a Member, I want a small check mark beside the names of People who have an account, so that I can see who is on the site.
33. As a Member, I want partners side by side, a former partner on the other side with a dashed line, and children hanging from the line between their parents, so that the family shape is clear.
34. As a Member, I want a third or fourth parent (for example an adoptive parent) shown beside the first two, so that blended families are represented truthfully.
35. As a Member, I want siblings with no recorded parents grouped under a shared bracket, so that they still look like siblings.
36. As a Member, I want to drag to pan and pinch to zoom, so that I can move around a large tree.
37. As a Member, I want loading and failed-to-load states for the tree, so that I know what is happening on a slow connection.
38. As a Member on a desktop, I want the same tree with a left rail instead of a bottom tab bar, so that the site works on a big screen too.

### Adding and connecting People

39. As a Member, I want to switch on edit mode with a pencil button, so that I can change the tree without changing it by accident while browsing.
40. As a Member in edit mode, I want a "+" on every card to add a relative of that Person, so that the tree grows from wherever I am.
41. As a Member in edit mode, I want dashed empty cards where a parent is missing, so that I can see gaps and fill them.
42. As a Member, I want to add a relative by choosing a relationship (Mother, Father, Partner, Child, Brother, Sister), a name, an optional birth year and a gender, so that adding someone takes seconds.
43. As a Member adding a Partner, I want to choose Current or Former, so that past relationships are recorded correctly.
44. As a Member, I want to mark a birth year as "about", so that I can record what I know without pretending to be precise.
45. As a Member, I want to connect a relative who is already in the tree instead of creating a new Person, so that we don't create duplicates.
46. As a Member, I want to be warned "Is this the same person?" when the name and birth year match someone already in the tree, so that I don't create a duplicate by mistake.
47. As a Member adding a parent to someone with siblings, I want to be asked whether that parent is also the siblings' parent (Yes / No / Not sure), so that full and half siblings are recorded correctly.
48. As a Member, I want a toast "Added [name]" with Undo and Add details, so that I can reverse a mistake or keep going.
49. As a Member, I want to see and change a Person's family connections in one list, so that I can fix wrong links.
50. As a Member, I want to switch a partner between Current and Former, so that the tree reflects how life has changed.
51. As a Member, I want to be stopped, with a plain explanation naming who would be cut off, if removing a Person or a connection would leave anyone unconnected, so that the tree never breaks into pieces.
52. As a Member, I want to remove a Person from the tree and have them restorable for 30 days, so that mistakes aren't permanent.

### Person pages and editing

53. As a Member, I want a Person page with a header (photo or initials, name, years) and About, Photos and Family tabs, so that everything about a relative is in one place.
54. As a Member, I want the About tab to show basics, life details and contact details, so that I can learn about a relative and get in touch.
55. As a Member, I want the Family tab to list parents, siblings, partners and children, each opening their own page, plus "Show in tree", so that I can move through the family by page or by tree.
56. As a Member, I want the Photos tab to show every photo the Person is in, so that I can see their life in pictures.
57. As a Member, I want to edit any Person's basics (full name, birth surname, nickname, birth year, passed away), life details (birth and death date and place, biography, custom fields) and current city, so that everyone can contribute what they know.
58. As a Member, I want to record a married woman's birth surname alongside her current surname, so that she can be found under both.
59. As a Member, I want to add custom fields where I type both the title and the detail (for example "Occupation" / "Doctor"), so that I can record facts the form didn't anticipate.
60. As a Member, I want to enter dates as an exact date, a year, "about" a year, or unknown, so that I record only what's known.
61. As a Member, I want a "Passed away" switch that reveals the death date and place, so that the form stays short for living people.
62. As a Member, I want anyone born more than 110 years ago with no death date treated as passed away, so that old ancestors aren't shown as living.
63. As a Member, I want to fill in phone, email and address for a relative who hasn't joined yet, so that the family can reach them.
64. As a Member, I want to be the only one who can edit my contact details once I've joined, so that my contact information stays in my control.
65. As a Member, I want my own page to have a Settings button, so that I can find settings on a phone.
66. As a Member, I want to see who added or last changed something, so that I know whom to ask about it.
67. As a Member using large text on my phone, I want Person pages to stay readable without anything overlapping, so that older relatives can use the site.

### Photos

68. As a Member, I want to see all photos in one grid, newest first, so that I can see what's new.
69. As a Member, I want to upload several photos at once, straight from my phone's photo library, including iPhone photos, so that sharing an album is quick.
70. As a Member, I want to give a batch of photos one caption, date (exact, year, or "about") and place, so that I don't repeat myself.
71. As a Member, I want to list the People in each photo, so that photos show up on their pages.
72. As a Member, I want to open a photo full-screen with its caption, date, place, the People in it and "Added by [name]", so that I know its story.
73. As a Member, I want to edit any photo's caption, date, place and People, so that the family can correct and complete them.
74. As a Member, I want to set a photo as a Person's profile photo, so that their card shows their face.
75. As a Member, I want to download a photo's original, so that I can keep or print it.
76. As a Member, I want to remove a photo and have it restorable for 30 days, so that removals aren't permanent.
77. As a Member, I want photos to load quickly on my phone, so that browsing isn't slow or expensive on mobile data.
78. As a Member, I want an empty-grid state that invites me to upload, so that I know what to do first.

### Founding and running the Family site

79. As the founder, I want to start the Family site with only myself in the tree and be prompted to add a parent, so that I can begin building straight away.
80. As the founder and only Admin, I want my changes treated like everyone else's (attributed and undoable), so that the site stays fair.
81. As the founder, I want the family's data backed up off-site and exportable, so that we never lose our history. **(proposed: approach still in the map's fog)**
82. As a Member offline, I want an offline banner rather than broken screens, so that I know why things aren't loading.

## Implementation Decisions

### Already settled (during charting, recorded on the map)

- **One Family site per deployment.** There is no concept of multiple families, and no cap on the tree's size.
- **Invite-only.** Any Member can send Invitations. An Invitation is single-use, expires after 14 days, and only one can be active per Person. The founder is the only Admin, and V1 has no admin tools.
- **Attribution everywhere.** Every change records which Member made it and when.
- **Undo in V1** is limited to two things. The toast Undo reverses an addition straight after it happens. Removed People and photos can be restored for 30 days. The full change history and per-field undo are deferred.
- **No privacy levels in V1.** Every Member sees every field, including contact details. A living Person without an account has contact details that any Member can edit. Once that Person becomes a Member, only they can edit their contact details.
- **"Never leave anyone unconnected"** is enforced by the family module on every removal of a Person or a link, not only in the interface.
- **Two languages from the start.** All interface text goes through a translation layer (English and Romanian). Names, search and sorting handle Romanian diacritics.
- **Design system.** Screens are built from the Origine Design System's tokens and components, exported into `design-system/` at the repo root ([Add the design system to the repo](https://github.com/ssnadra/Origine/issues/2)). How the app reads those files is decided with the stack.

### Modules

**Family module.** This is the deep core and the main test seam. It owns every rule about People and how they're linked, and hides how they're stored. Its interface is expressed in domain terms (rules settled by [Define the V1 data model](https://github.com/ssnadra/Origine/issues/5); exact function signatures are settled during the build):

- `addRelative(from, relationship, details, by)` returns the new Person, or a possible-duplicate warning.
- `connect(a, b, relationship, by)` and `disconnect(link, by)`. The second refuses, naming who would be cut off, if the removal would leave anyone unconnected.
- `answerSharedParent(parent, sibling, yes | no | notSure, by)` resolves the "Is [parent] also the parent of…?" question.
- `setPartnerStatus(link, current | former, by)`
- `updatePerson(person, changes, by)` enforces the contact-details rule.
- `removePerson(person, by)` and `restore(item, by)`
- `undo(change, by)` is limited to the toast Undo in V1.
- `neighbourhood(selected, degrees)` returns the People and links within N links of the selected Person. It counts parent, child and partner links as 1 each, so siblings are 2 away.
- `siblingsOf(person)` derives siblings from shared parents, explicit sibling links, and half-sibling answers.
- `findPeople(name)` matches current and birth surnames and ignores diacritics. It backs "Connect to someone already in the tree" and duplicate detection.

**Domain rules held in the family module** (settled by [Define the V1 data model](https://github.com/ssnadra/Origine/issues/5); terms in `GLOSSARY.md`):

- **Person fields:**
  - Basics: given names and family name (both required), birth surname and nickname (optional), birth date, passed away. Gender is Woman, Man or Not stated, pre-filled from the relationship chosen when adding.
  - Life: birth place, death date and place, biography, and up to 30 custom fields as ordered title/detail pairs.
  - Contact: one phone, one email, one street address. Phones are checked with libphonenumber and stored in international form (`+40…`). A number starting with `0` is read as Romanian; foreign numbers need their `+` country code. See `docs/learn/libphonenumber.md`.
  - Location: current city.
  - Places are free text, with suggestions from places already used in the tree.
  - Text limits: names 100 characters each, nickname 50, place 150, biography 5,000, custom field title 50 and detail 500, photo caption 500.
- **Dates:** there is one birth date and one death date. Every date is exact, year only, "about" a year, or unknown. Inputs expect an exact date but accept a year alone. A birth year (at least "about") is required to create a Person, so unnamed or undated ancestors aren't added in V1. A birth date in the future, or a death date before the birth date, is refused. A parent fewer than 12 years older than their child, or born after them, gets a warning but is allowed.
- **Passed away** is true when it is set explicitly, or when the Person was born more than 110 years ago (counting "about" years) and has no death date. Everyone else is living. Setting it on a Member doesn't affect their account, but it cancels a pending Invitation.
- **Links** are one of three kinds. There is no couple or family record: the layout groups each child under the parents they share.
  - **Parent:** at most 4 per Person, with no birth/adoptive kind.
  - **Partner:** current or former. Former means separated or divorced; a partner who has died stays current. A Person may have more than one current partner. A current partnership where one partner has passed away is drawn muted.
  - **Sibling:** used only when no shared parent is recorded. Adding a Brother or Sister to someone who has parents gives the new Person those parents instead. The answers to "Is [parent] also the parent of [sibling]?" work like this:
    - **Yes:** adds the parent link and drops the Sibling link.
    - **No:** keeps the Sibling link, recording half-siblings.
    - **Not sure:** keeps the Sibling link and adds nothing.
  - **Refused links:**
    - a link to oneself;
    - the same link twice;
    - two People who would be both parent-and-child and partners;
    - a 5th parent;
    - any loop of parents.
- **Connected:** the tree must always be one piece. Any removal of a Person or a link that would split it is refused, naming the People who would be cut off (up to 3 names, then "and N others").
- **Degrees:** parent, child and partner links count 1 each. Siblings are 2 away, whether they share a parent or are joined by a Sibling link.
- **Possible duplicate:** the given names and family name match (or the family name matches the other Person's birth surname), ignoring case and diacritics, and birth years are within 5, or within 10 when either is "about".
- **Changes:** every write produces a Change recording who made it, when, which Person, link or photo it touched, and the value before and after. This is a full log from day one ([ADR 0001](adr/0001-full-change-log-from-day-one.md)).
  - **Toast Undo:** only the Member who made the addition can use it, and only while the toast shows. It reverses the new Person and their link, or just the link for "Connect to someone already in the tree". It is refused if anything has attached to the new Person since. The Change is marked undone, not erased.
  - **Remove:** a Person and their links go out together as one Change, and the Person also drops out of photo People lists. A Person who has an account can't be removed. Removing a Person cancels their pending Invitation, and restoring them doesn't bring it back.
  - **Restore:** possible within 30 days. It is refused if the Person would be unconnected, naming who must be restored first. After 30 days the restore option disappears, but removed People and photos are hidden for good, never erased.

**Accounts and Invitations:** an account belongs to exactly one Person, and a Person has at most one account. The link between them is made only by accepting an Invitation, or at setup for the founder. The account holds the sign-in email (separate from the contact email, which it pre-fills during onboarding when blank), the language choice and the Admin flag. Account settings aren't tree data and don't write Changes. A Member can't change their sign-in email in V1. An Invitation records the Person, the sender, when it was sent, when it expires and its state. The invitee's email is learned only when they accept.

**Photos:** a Photo records the original file, a caption, a date, a place, the ordered list of People in it, and who uploaded it and when. A batch isn't stored: the batch sheet copies its details onto each photo. A **profile photo** is a square crop of a Photo the Person is listed in. When that Photo is removed, the Person falls back to initials until it's restored.

**Access module (sign-in and Invitations):**

- `createInvitation(person, by)` returns a link plus a ready-written message in the inviter's language. It refuses for Members, for People who have passed away, and when an Invitation is already pending.
- `resendInvitation` and `cancelInvitation`
- `requestSignIn(email)` always answers "Check your email", whether or not the email belongs to a Member.
- `acceptInvitation(link)` handles the Yes and No paths of "Are you [name], born [year]?"
- Sessions last 180 days.
- Invitation states: pending, accepted, expired, used, cancelled.

**Photo module:**

- `upload(files, batchDetails, by)`
- `updatePhoto`, `setPeopleInPhoto`, `setProfilePhoto(person, photo, by)`, `removePhoto`, `restorePhoto`
- `photosOf(person)` and `allPhotos(newestFirst)`
- Originals are kept for download. Phones are served resized copies. iPhone HEIC is accepted. (Proposed handling is in the stack section below; the details are still in the map's fog.)

**Tree layout.** This is a pure function and the second test seam: `layoutTree(neighbourhood, selected, cardSize) → { cards: [{ id, x, y }], lines: [{ path, solid | dashed | bracket }] }`. It is written ourselves, row by row, one generation per row. Partners sit side by side, with a former partner on the opposite side. Children hang from the line between their parents. Third and fourth parents sit beside the first two. Siblings with no parents sit under a bracket. Lines never cross a card. Card size depends on degrees: full at 1–3, compact at 4 and above. Zooming never changes card size. d3-dag is the fallback engine behind the same interface. This is the research recommendation ([Compare ways to draw the family tree](https://github.com/ssnadra/Origine/issues/4)), still to be confirmed by [Prototype the tree on a phone](https://github.com/ssnadra/Origine/issues/8).

**Tree viewport.** This draws layout output as design-system cards inside a pan/zoom surface (proposed: React Flow, or plain d3-zoom if lighter). After 0.3 seconds with no input, it glides for about 0.8 seconds to centre the selected card. Any touch, scroll or key press cancels the glide and shows the re-centre pill. Tapping the selected card opens the Person page. Ctrl/⌘ + scroll changes degrees. There is no press-and-hold action. Card dragging and double-tap zoom are turned off.

**Screens.** These follow `prompts/01-wireframe.md` frame IDs, trimmed to V1 (proposed, settled by [Decide which V1 screens and flows to build](https://github.com/ssnadra/Origine/issues/6)):

| Section | In V1 | Trimmed or dropped |
|---|---|---|
| **A. Joining and signing in** | A1–A7, A9–A11 | A8 (privacy choices) dropped. A7 also covers contact details. |
| **B. Tree** | B1–B6, B8–B10 | B6 menu has only Edit details, Change family connections, Remove from tree. B7 (path highlight) dropped. |
| **C. Adding and connecting** | C1–C5, C7, C8 | C6 (merge) dropped. |
| **D. Person** | D1–D3, D5–D10, D13 | Tabs are About, Photos, Family only. D4 dropped. D11 without privacy controls. D12 dropped. |
| **E. Photos** | E1, E3, E4, E5 | Filter chips reduced to none (or All only). E5 shows a "People in this photo" list instead of tags, plus "Use as profile photo". E2 and E6–E9 dropped. |
| **F, G, H** | none | Map, Activity, People search dropped. Name search survives only inside C3. |
| **I. Settings** | I1 | Language and Sign out only. |
| **J. Cross-cutting** | J2 (offline) | J1 and J3 dropped. |
| **K. Romanian** | K1–K4 | Translated equivalents of B1, C1, D1, A6. |

Navigation in V1 has two tabs, **Tree** and **Photos**. Map and Activity are out of scope.

### Stack and hosting (proposed, settled by [Choose the stack](https://github.com/ssnadra/Origine/issues/7))

The research recommendation ([Compare stacks and hosting for V1](https://github.com/ssnadra/Origine/issues/3)) is to run everything on Cloudflare:

- **App:** React Router (full-stack React) on Workers.
- **Database:** D1 (SQLite) through Drizzle.
- **Photos:** R2 for storage, and Cloudflare Images for resized copies, including from HEIC.
- **Sign-in:** Better Auth email sign-in links with sign-up disabled and 180-day sessions.
- **Email:** Resend.
- **Domain:** the Namecheap domain's nameservers move to Cloudflare.

Expected cost is $0–5 a month. The runner-up is Next.js on Vercel with Supabase, which is rejected mainly because the free project pauses after a quiet week and has no backups. Two things must be checked before this is settled: that sign-in responses don't reveal who is a Member, and whether iPhone browsers already convert HEIC to JPEG on upload. The final choice gets an ADR in `docs/adr/` and `docs/learn/` notes.

### Still in the fog (to become tickets on the map)

- Photo pipeline details: resizing, thumbnails, storage limits.
- How the two-language text is organised in code.
- Sign-in email deliverability.
- Off-site backups and data export.
- Deploy, domain, CI.
- How undo and restore are built on the change records.

## Testing Decisions

- **What makes a good test:** it exercises behaviour through a module's public interface and asserts what a Member would observe: who is connected, what the tree shows, what was refused and why. It never asserts internal tables, private helpers or call order. Tests read like the rules in this spec, for example "removing Ana's only link to the tree is refused and names Ana."
- **Seam 1: the family module (with the access and photo modules alongside it).** These are integration tests against a real, throwaway database, seeded with the sample family from `prompts/01-wireframe.md`: five generations, a former and a current partner, three parents, parentless siblings, an "about 1890" ancestor, a married woman with a different birth surname, and a pending Invitation. This is where most tests live:
  - linking rules and the "never unconnected" refusal
  - sibling derivation and the half-sibling answer
  - `neighbourhood` at each degree
  - duplicate warnings, including diacritic-insensitive name matching
  - the contact-details editing rule
  - the 110-year passed-away rule
  - Invitation states, and the identical "Check your email" response
  - attribution on every change
  - toast undo, and restore within 30 days
- **Seam 2: `layoutTree`.** These are pure unit tests with no screen. For each layout rule, feed a neighbourhood and assert relative positions and line styles:
  - partners on one row, with the former partner opposite the current partner
  - children below their parents' line
  - third parent beside the first two
  - bracket over parentless siblings
  - no line passing through a card's box
  - card size by degrees
- **Everything else** gets a small set of end-to-end checks on a 390px viewport: sign in from an Invitation through onboarding, add a relative from the tree, and upload a photo and see it on a Person page. Glide timing and gesture cancellation are checked by hand on a real phone during [Prototype the tree on a phone](https://github.com/ssnadra/Origine/issues/8). They are not unit-tested.
- **Prior art:** none. The repo has no application code yet. The [tdd](../.agents/skills/tdd/SKILL.md) skill is the working method, test first at these two seams.

## Out of Scope

Deferred beyond V1 (they may return as a later effort):

- Map
- Activity and the For you strip
- Merging duplicates ("Same person as…")
- Comments
- Face-tagging on photos and "Who is this?" markers
- Scanned documents and "People mentioned"
- People search as its own screen
- "How you're related" and path highlighting
- Privacy levels and privacy defaults
- Admin tools: Members list, suspending and reinstating Members, undoing a Member's changes, Make/Remove admin, Admins removing People who have accounts
- The full change history: Recently edited, Recent changes on Edit person, per-field undo, "changed again" confirmations
- Leave the family site
- Notifications to the person marked as passed away
- More than one Family site
- Desktop-only features (desktop gets the same pages through responsive layout)

## Further Notes

- **How this spec firms up.** As each open ticket on the map closes, update the matching **(proposed)** section here and remove the marker. When no proposed markers remain, slice the build into GitHub issues that link back to the relevant sections of this file. That is the last step of the map.
- **Open tickets this spec depends on:**
  - [Add the design system to the repo](https://github.com/ssnadra/Origine/issues/2)
  - [Decide which V1 screens and flows to build](https://github.com/ssnadra/Origine/issues/6)
  - [Choose the stack](https://github.com/ssnadra/Origine/issues/7)
  - [Prototype the tree on a phone](https://github.com/ssnadra/Origine/issues/8)
- **Audience.** Teenagers to people in their eighties, many uncomfortable with technology. Every tap target is at least 48px, body text at least 16px, and plain language throughout. No genealogy jargon except "degrees".
