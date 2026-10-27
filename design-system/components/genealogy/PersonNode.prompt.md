A person's card in the family chart: photo (only if one is set), serif name and key dates; renders a dashed empty card with a centred + when person is null.

```jsx
<PersonNode person={margaret} selected />
<PersonNode person={null} addLabel="Add mother" onAdd={add} />
```

md 200px wide, sm 168px.
No initials fallback in the tree: without src the card is text only. addLabel is the accessible label for the + card (no visible text).
