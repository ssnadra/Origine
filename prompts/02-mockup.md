Turn the approved Origine wireframes in this project into high-fidelity mockups using the [DESIGN SYSTEM NAME] design system.

The wireframes are the source of truth for structure, content, labels and behaviour. This pass changes how the screens look, not what they contain. If applying the design system forces a structural change (a label that no longer fits, a component that can't hold the content), make the smallest change that works and list it in the "Changes from the wireframes" note at the end.

# Using the design system

- Start by listing the design system's tokens and components. Build every screen only from those.
- Do not invent colours, type styles, spacing values, radii, shadows or icons. If a token doesn't exist for something, use the nearest existing one.
- Match each item in the wireframes' "Components needed" note to a design system component. Where no component exists, do not style a one-off on the screen. Instead, design the missing component once, from existing tokens only, place it in a separate "Proposed components" section with its states, and use that everywhere. I expect gaps for at least: the tree person card (full and compact), tree connector lines, the dashed "add parent" card, the degrees stepper, the re-centre pill and "Me" pointer, map pins and clusters, the photo tag marker and "Who is this?" marker, the "For you" item, and the change-log row.
- Use the same component for the same job on every screen. The degrees stepper on Tree and in the Map panel is one component. The person row in Family, search results, the city people list and the Members list is one component with variants.

# Who this is for

One extended family, from teenagers to people in their eighties, many of them uncomfortable with technology and using a phone. The site should feel calm, warm and trustworthy, closer to a family album than a data tool. Clarity wins over decoration every time: if a choice makes a screen prettier but harder to read or tap, don't make it.

# Requirements that carry over

- Every tappable element is at least 48px in both dimensions.
- Body text is at least 16px. Text contrast is at least 4.5:1 against its background; large text, icons and control borders at least 3:1.
- Nothing is conveyed by colour alone. The selected tree card, a member's check mark, muted map pins for the deceased, former-partner lines and disabled controls each need a second cue (outline weight, icon, line style, label).
- Names wrap to two lines and never truncate. Romanian diacritics (ă, â, î, ș, ț) must render in every font weight used.
- Tree cards for people who have passed away look the same as cards for the living.
- A person with no photo gets no image area on the tree card. On the Person page header they get initials.

# Scope

- 390px: every wireframe frame, sections A through K.
- 1280px: Tree (B1, B3, B5), Map (F1, F3), Photos (E1, E5), Person page (D1, D10) and Activity (G1). Layouts match the phone layouts with responsive sizing; the left rail replaces the bottom tab bar and carries Settings at the bottom.
- Light theme only.
- Keep the wireframes' frame IDs and section grouping so the two sets can be compared side by side.
- Keep the same sample family and the same content on every screen.

# States to style

For each interactive component show default, pressed, focused (visible keyboard focus ring) and disabled. In addition:

- Tree card: default, selected, has-account, in edit mode with "+", on a highlighted path.
- Buttons: primary, secondary, destructive, and the persistent "View profile" button over the tree.
- Toast with Undo.
- Banners: view-only account, offline.
- Empty, loading and failed-to-load states for Tree, Map, Photos and Activity. Loading states use skeleton shapes that match the final layout.
- Form fields: empty, filled, error with message, read-only with explanation (another person's Contact details).

# Motion notes

These can't be drawn, so annotate them beside the relevant frames, using the design system's motion tokens if it has them:

- Tree: after a card is selected and 0.3 seconds pass with no input, the chart glides for about 0.8 seconds to centre it, easing in and out. Any input cancels the glide.
- Sheets and dialogs slide or fade in quickly (under 250ms).
- Respect the device's reduced-motion setting: the tree jumps to centre instead of gliding.

# Deliver

- The mockups, grouped and numbered as in the wireframes.
- A "Proposed components" section with each new component and its states.
- A "Changes from the wireframes" note.
- A "Design system gaps" note listing any token or component the system should gain, so I can add it before coding.
