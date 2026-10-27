Modal for short tasks (add a relative, invite); becomes a bottom sheet under 600px.

```jsx
<Dialog open title="Add a parent" onClose={close} actions={<Button>Save</Button>}>…</Dialog>
```

Escape and scrim click close. Actions stack full-width on mobile.
