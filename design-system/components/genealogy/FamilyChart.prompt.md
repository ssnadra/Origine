The one family tree view: every relative within N degrees of separation of the focused person (ancestors, siblings, spouses, descendants), laid out in generation rows.

```jsx
<FamilyChart people={peopleById} focusId={focus} onFocus={setFocus} degree={deg} onDegreeChange={setDeg} height="64vh" />
```

- people is a map of id → { name, born, died, living, src, father, mother, spouse, children }. Children/parents/spouses are linked both ways automatically.
- Degrees count parent, child and spouse links (siblings and grandparents are 2). The −/+ stepper (1–6) sits top-left with a Re-centre button.
- Tapping a person makes them the focus; the chart glides to the new layout and scrolls them to centre.
- Pinch (touch) or Ctrl/⌘+scroll (trackpad pinch) also changes degrees, but only after a confirm dialog. "Don't ask again" is stored in localStorage (`origine-zoom-degrees`). Declining leaves normal browser zoom alone for the session.
- With onAdd, the focused person's missing parents appear as dashed + cards in the row above; onAdd(focusId, 'father' | 'mother') fires on tap.
- Cards show a photo only when one is set; otherwise just name and key dates.
- A small +N pill on a node means N relatives sit just beyond the current view.
- Every person must be linked to someone already in the tree; there is one tree, viewed from different focuses.
