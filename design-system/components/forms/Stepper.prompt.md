Minus / number / plus control for a small bounded count, e.g. degrees of separation in the family chart.

```jsx
<Stepper label="Degrees" value={deg} min={1} max={6} onChange={setDeg} decLabel="Show fewer relatives" incLabel="Show more relatives" />
```

48px hit targets; buttons disable at min/max. The value is announced politely to screen readers.
