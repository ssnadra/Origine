# Origine web app · UI kit

Interactive, responsive recreation of the Origine app with sample data (names are placeholders) and the owner's own snow-day photos from March 2008.

- `index.html`: app entry and router; position persists in localStorage. A fresh load starts at sign-in.
- `data.js`: sample people, events, places, photos (with face-tag positions), collaborators, edit history
- `AppShell.jsx`: TopBar + BottomNav (mobile) or SideNav (≥900px), toast slot, sign out
- `AuthScreens.jsx`: **Sign in** (email magic link, no password) and **Onboarding** (3 steps: find yourself in the tree, add your photo, choose what to do first)
- `TreeScreen.jsx`: the single FamilyChart (focus + degrees stepper, pinch/zoom with confirm, + slots for missing parents), focused-person card with Add a relative / View profile, add dialog with Undo
- `PersonScreen.jsx`: portrait, facts, quote, tabs (About, Timeline, Photos, Family)
- `EditScreens.jsx`: **Photo tagging** (tap "Tag someone", tap a face, pick a relative; name unknown faces; remove tags) and **Edit person** (grouped fields, living switch, privacy, recent changes with Undo)
- `Screens.jsx`: People (search + surname filters), Map (full-screen Leaflet + CARTO Voyager tiles (OpenStreetMap data); by default pins every place with at least one living relative, numbered by living count; menu button top-right opens a right-hand Places panel with an "Include past places" switch; selecting a pin or place zooms to it), Stories (story card + photo grid), Activity (feed, Invite dialog, sign out)

Try: sign in → onboarding → Stories → open "Snow day with Grandad" → name the unknown face. Or Tree → tap a relative to refocus → use −/+ (or pinch, after confirming) to change degrees → View profile → Edit.
