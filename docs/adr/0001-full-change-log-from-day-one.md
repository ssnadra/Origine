# Record every change in a full log from day one

V1 shows very little history: who added or last changed something, the toast Undo, and restoring removed People and photos. Even so, every edit writes a Change recording who made it, when, and the value before and after. The full change history with 30-day undo is deferred, not cancelled. History can't be recreated after the fact, so storing only "created by / last changed by" and a removed marker would lose the family's first months of edits for good. The cost is one extra table and one extra write per edit.

## Considered Options

- **Just enough for V1:** attribution columns on each record plus a removed marker. Less to build now, but a later history feature would start empty.
