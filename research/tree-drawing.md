# How to draw the family tree (research for #4)

**Question:** What is the best way to draw Origine's tree on a 390px phone: an existing library, or a layout we build ourselves?

**Requirements** come from `prompts/01-wireframe.md` → Tree:
- Layout rules: (R1) generations on rows; (R2) partners side by side, with a former partner on the person's *other* side and a dashed line; (R3) children hang from the line between their parents; (R4) a third or fourth parent sits beside the first two; (R5) siblings with no recorded parents share a bracket; (R6) lines never cross a card.
- Behaviour: (B1) redraw around a newly selected person by *degrees* (links away from that person); (B2) a ~0.8 s glide to centre that any touch, scroll or key press cancels; (B3) pinch-zoom and drag-pan; (B4) two card sizes (full at 1–3 degrees, compact at 4+).

All facts below come from the projects' own repos, docs, npm registry entries and source code. **Accessed 2026-10-26** unless a different date is shown. "Open issues" counts issues only, not pull requests (GitHub search `is:issue is:open`).

---

## Plain-language primer

Drawing a tree has two separate jobs. It helps to keep them apart:

1. **Layout**: deciding *where* each card goes (its x and y position) and what path each connecting line follows. It is pure maths: people and relationships go in, coordinates come out.
2. **Rendering and viewport**: actually putting cards and lines on screen (in React, as HTML or SVG elements), and letting the user pan, pinch and zoom. The *viewport* is the movable "camera" over the drawing.

Some terms used below:
- **Graph**: a set of things (nodes) joined by connections (edges). A family tree is a graph.
- **DAG (directed acyclic graph)**: a graph whose edges have a direction (parent → child) and never loop back. Family trees are almost DAGs.
- **Layered or Sugiyama layout**: the standard method for drawing DAGs in rows (layers). It assigns each node a row, reorders each row so that fewer lines cross, then spaces the nodes out. ELK, d3-dag and dagre all use it.
- **Union or family node**: a common trick. You add an invisible node that represents "this couple". Both partners connect to it, and the children hang from it. This is how you make R3 work in a generic graph library.

Some libraries do both jobs (family-chart, dTree). Some do only layout (elkjs, d3-dag, relatives-tree). React Flow does only rendering and viewport. This matters because **no library computes "degrees from the selected person" (B1)**. In every option, we write that ourselves: a short breadth-first search (walking outward one link at a time) over our own data, which picks the people to show before layout runs.

---

## Candidates at a glance

| Candidate | What it is | Licence | Latest release | Open issues | Last commit | TypeScript | React fit |
|---|---|---|---|---|---|---|---|
| [family-chart](https://github.com/donatso/family-chart) | Family-tree layout plus D3 renderer | MIT ([LICENSE.txt](https://github.com/donatso/family-chart/blob/master/LICENSE.txt)). The npm 0.9.0 metadata says ISC; both are permissive | 0.9.0, 2025-10-21 ([npm](https://www.npmjs.com/package/family-chart?activeTab=versions)) | 68 | 2026-04-08 (README and licence only) | Yes, written in TS | Imperative D3 chart mounted into a `<div>` ([React example](https://codepen.io/donatso/pen/mdNgeQN?editors=0010)) |
| [dTree](https://github.com/ErikGartner/dTree) (`d3-dtree`) | Family-tree layout plus D3 renderer | MIT | 2.4.1, 2020-04-24 ([releases](https://github.com/ErikGartner/dTree/releases)) | 47 | 2024-05-14 (README) | No types | Poor: needs D3 **v4** and lodash ([README](https://github.com/ErikGartner/dTree#requirements)) |
| [elkjs](https://github.com/kieler/elkjs) | General graph layout only (Eclipse ELK compiled to JS) | EPL-2.0 ([LICENSE.md](https://github.com/kieler/elkjs/blob/master/LICENSE.md)); npm says "EPL-2.0 OR GPL-3.0-or-later" | 0.12.0, 2026-07-17 ([releases](https://github.com/kieler/elkjs/releases)) | 91 | 2026-10-19 | Typings shipped | Layout only. README notes bundling problems with React and webpack (#127, #141, #142) |
| [d3-dag](https://github.com/erikbrinkman/d3-dag) | DAG layout only (Sugiyama, Zherebko, Grid) | MIT | v1.2.2, 2026-07-05 ([releases](https://github.com/erikbrinkman/d3-dag/releases)) | 3 | 2026-10-01 | "TypeScript-first" ([README](https://github.com/erikbrinkman/d3-dag#why-d3-dag)) | Layout only. README shows use with React Flow |
| [React Flow](https://github.com/xyflow/xyflow) (`@xyflow/react`) | React renderer and viewport for node graphs. No layout | MIT | 12.12.0, 2026-09-24 ([releases](https://github.com/xyflow/xyflow/releases)) | 93 | 2026-10-26 | Yes | Native React. Peer dependency `react >=17` |
| [relatives-tree](https://github.com/SanichKotikov/relatives-tree) + [react-family-tree](https://github.com/SanichKotikov/react-family-tree) | Family-tree layout (~3 kB) plus a thin React wrapper | MIT | 3.2.2, 2025-03-16 / 3.2.0, 2022-07-18 ([npm](https://www.npmjs.com/package/relatives-tree)) | 5 / 6 | 2025-03-23 / 2024-07-11 | Yes | Wrapper renders your React component per node, but has no pan or zoom |

Pan and zoom helpers that would pair with a custom layout:

| Helper | Licence | Latest release | Open issues | Notes |
|---|---|---|---|---|
| [d3-zoom](https://github.com/d3/d3-zoom) | ISC | 3.0.0, 2021-06-10 | 17 | Stable and finished. Used inside both React Flow and family-chart |
| [react-zoom-pan-pinch](https://github.com/BetterTyped/react-zoom-pan-pinch) | MIT | 4.2.0, 2026-09-03 | 17 | React component wrapper, TS |

Also noted, not shortlisted: [BALKAN FamilyTreeJS](https://balkan.app/FamilyTreeJS/Pricing) is commercial ($599 one-off for one site, and the trial is "for evaluation purposes only"), which breaks the ~$10/month budget. [dagre](https://github.com/dagrejs/dagre) (MIT, 3.1.3, 2026-10-24, 171 open issues) is the simple layered layout React Flow suggests first. d3-dag offers a dagre-compatible API with more layout options, so dagre is covered by the d3-dag row.

---

## Rule-by-rule: what each handles out of the box

✔ = built in · ◐ = possible with configuration or modelling work · ✘ = not supported, or would need to change the library

| Rule | family-chart | dTree | elkjs | d3-dag | relatives-tree | React Flow |
|---|---|---|---|---|---|---|
| R1 generations on rows | ✔ | ✔ | ✔ layered | ✔ layered. `group`/`rank` constraints can pin rows | ✔ | n/a (no layout) |
| R2 partners side by side | ✔, but side is chosen by gender | ✔ via `marriages` | ◐ needs union nodes plus ordering constraints | ◐ same | ✔ couple in the middle | n/a |
| R2 former partner on the *other* side, dashed | ✘ all spouses go to one side | ✘ | ◐ | ◐ | ◐ has a `divorced` relation type and puts extra spouses left/right of the couple | dashed edge styling ✔ |
| R3 children from the line between parents | ✔ | ✔ | ◐ via union node | ◐ via union node | ✔ | n/a |
| R4 third or fourth parent | ✘ docs: "Supports one or two parents" | ✘ tree is built from marriages | ◐ (a graph allows it) | ◐ | ✘ couple is fixed at 2 nodes | n/a |
| R5 parentless siblings under a bracket | ✘ | ✘ | ✘ (custom drawing) | ✘ | ◐ has an explicit `siblings` field, but no bracket | n/a |
| R6 lines never cross a card | ✔ for its own shapes | ✔ for its own shapes | ✔ edge routing is a core feature | ◐ long edges are routed through dummy points between layers | ✔ for its own shapes | n/a |
| B1 redraw around selected person | ◐ `updateMainId` plus ancestry/progeny *depth*, not link-count degrees | ✘ draws a fixed root | ◐ our code | ◐ our code | ◐ `rootId` | ◐ our code |
| B2 glide that any touch cancels | ◐ d3-zoom transition (default 2000 ms) | ◐ `zoomToNode(…, duration)` | n/a | n/a | ✘ | ◐ `setCenter(x, y, {duration})` |
| B3 pinch-zoom and pan | ✔ d3-zoom | ✔ D3 zoom | n/a | n/a | ✘ | ✔ `zoomOnPinch`, `panOnDrag` |
| B4 two card sizes | ✔ custom HTML/SVG cards | ◐ fixed `nodeWidth` | ✔ any sizes | ✔ any sizes | ◐ one fixed grid size per render (fine, since size is set per view) | ✔ |

### Evidence for the table

**family-chart.** Data format: `gender` is required ("M"/"F"), and `parents` "Supports one or two parents" ([docs/data-format.md](https://github.com/donatso/family-chart/blob/master/docs/data-format.md)). The layout runs `d3.tree` twice from the main person, once for ancestors and once for descendants, then merges the two ([src/layout/calculate-tree.ts](https://github.com/donatso/family-chart/blob/master/src/layout/calculate-tree.ts), `calculateTreePositions` / `mergeSides`). Spouse placement is `const side = d.data.data.gender === "M" ? -1 : 1; // female on right`, and every spouse is placed on that one side (`setupSpouses`, same file). There is no "former" flag. The Chart API offers `setAncestryDepth`, `setProgenyDepth`, `setShowSiblingsOfMain`, `updateMainId` and `setTransitionTime` (default 2000 ms) ([src/core/chart.ts](https://github.com/donatso/family-chart/blob/master/src/core/chart.ts)). Zoom uses `d3.zoom()`, and centring uses `cardToMiddle` with a D3 transition ([src/handlers/view-handlers.ts](https://github.com/donatso/family-chart/blob/master/src/handlers/view-handlers.ts)). A paid "Premium" version advertises "Kinship Engine • Tree Filtering" ([README](https://github.com/donatso/family-chart#readme)).

**dTree.** Input is a nested `marriages: [{spouse, children}]` structure that starts from one root person ([README](https://github.com/ErikGartner/dTree#usage)). Requirements: "D3 v4.x, lodash v4.x". Zoom API: `zoomToNode(nodeId, zoom, duration)`. The last code release was 2020, and later commits only touch the README.

**elkjs.** "elkjs is not a diagramming framework itself - it computes positions" ([README](https://github.com/kieler/elkjs#readme)). Its flagship is the layered (Sugiyama) algorithm. Rows can be forced with `elk.partitioning.partition`, which "requires Layout Partitioning to be active" ([ELK reference](https://eclipse.dev/elk/reference/options/org-eclipse-elk-partitioning-partition.html)). React Flow calls it "the most configurable option available, but it's also the most complicated" ([React Flow layouting](https://reactflow.dev/learn/layouting/layouting)). The npm package is about 8 MB unpacked (`npm view elkjs dist.unpackedSize` = 8,046,232 bytes), and d3-dag describes elkjs as "~500KB transpiled Java".

**d3-dag.** "Lightweight, TypeScript-first DAG layout" with a dagre-compatible API and a React Flow quick start ([README](https://github.com/erikbrinkman/d3-dag#readme)). Simplex layering supports `rank` and `group` constraints ("which nodes should be on the same layer") ([src/sugiyama/layering/simplex.ts](https://github.com/erikbrinkman/d3-dag/blob/main/src/sugiyama/layering/simplex.ts)). Its README benchmark uses a "genealogy (184 nodes)" graph: 5 ms (fast) or 49 ms (medium).

**relatives-tree.** Node data has `parents`, `children`, `siblings` and `spouses`, with relation types `blood | married | divorced | adopted | half` ([src/types.ts](https://github.com/SanichKotikov/relatives-tree/blob/master/src/types.ts)). `NODES_IN_COUPLE = 2` ([src/constants.ts](https://github.com/SanichKotikov/relatives-tree/blob/master/src/constants.ts)). Other spouses are split into `left` and `right` of the central couple ([src/utils/getSpouseNodesFunc.ts](https://github.com/SanichKotikov/relatives-tree/blob/master/src/utils/getSpouseNodesFunc.ts)). Positions come in half-node grid units at one fixed width and height ([react-family-tree README](https://github.com/SanichKotikov/react-family-tree#usage)).

**React Flow.** "We have not implemented our own layouting solution yet". It points to dagre, d3-hierarchy, d3-force and elkjs ([layouting guide](https://reactflow.dev/learn/layouting/layouting)). Viewport props: `panOnDrag` (default `true`; "Mouse button arrays do not disable touch panning"), `zoomOnPinch` (`true`), `zoomOnScroll` (`true`), `zoomOnDoubleClick` (`true`, which we would turn off because double-tap opens a page), `minZoom` 0.5, `maxZoom` 2, and `onMoveStart` ([ReactFlow props](https://reactflow.dev/api-reference/react-flow)). `setCenter(x, y, {zoom, duration})`: "Passing in a `duration` will animate the viewport" ([ReactFlowInstance](https://reactflow.dev/api-reference/types/react-flow-instance)). Internally it uses d3-zoom ([XYPanZoom.ts](https://github.com/xyflow/xyflow/blob/main/packages/system/src/xypanzoom/XYPanZoom.ts)).

**d3-zoom and the cancellable glide (B2).** d3-zoom supports "pinch with touch" ([d3js.org/d3-zoom](https://d3js.org/d3-zoom)). In its source, `wheeled`, `mousedowned` and `touchstarted` each call `interrupt(this)`, which stops any running zoom transition ([src/zoom.js](https://github.com/d3/d3-zoom/blob/main/src/zoom.js)). So "any touch or scroll cancels the glide" is the library's default behaviour wherever d3-zoom drives the animation (family-chart, React Flow, or using it directly). Two pieces are still ours to write: cancelling on a **key press**, and showing the re-centre pill afterwards. One caveat: d3-zoom's default touch detection fails in Chrome's mobile emulator, so test on a real phone.

---

## Assessment

- **family-chart** gets furthest without custom code: rows, couples, children from the couple line, pinch and pan, and animated centring. But it fails three Origine rules (R2 former partner on the other side, R4 3–4 parents, R5 bracket), and it requires every person to have gender M/F, which Origine doesn't otherwise need. Fixing those means changing its layout core (`calculate-tree.ts`), and at that point we own a fork of someone else's algorithm. It also renders through D3, outside React, so our React cards, two-language text and 48px tap rules would sit inside an imperative component. It is maintained by a single author. The last code release was a year ago, with 68 open issues and a paid tier for the filtering features.
- **dTree** is effectively unmaintained (no release since 2020, D3 v4). Rule it out.
- **relatives-tree** is small, typed and closer to Origine's model than family-chart (it has `divorced` and explicit `siblings`, with spouses on left and right). But the couple is fixed at two (R4 fails), there is no bracket (R5), it has no viewport, and it is a small single-author project.
- **elkjs / d3-dag** give a strong generic engine for rows and line routing, but every family rule (R2–R5) has to be modelled with union nodes and ordering constraints, and getting "former partner on the opposite side" or "parents adjacent" out of a generic crossing-minimiser is fiddly. elkjs is heavy (about 8 MB unpacked) and has known bundling problems. Of the two, d3-dag is the better fit: TS-first, MIT, actively released, 3 open issues.
- **Scale matters.** At the default 2 degrees, the visible set is the selected person's parents, partner, children, siblings, grandparents, grandchildren, parents-in-law and children's partners: usually 10–30 cards, not 800. The layout only ever runs on that small neighbourhood. A hand-written layout for a few generations around one person is much simpler than a general graph layout.

## Recommendation

**Build our own layout as a plain TypeScript function. Draw it with React. Use React Flow for the viewport (or d3-zoom directly if React Flow feels too heavy).**

- `layoutTree(people, selectedId, degrees, cardSize) → { cards: [{id, x, y}], lines: [{path, dashed}] }`. This is a pure function: data in, coordinates out, no screen involved. That makes it easy to unit-test each rule with the sample family (R1–R6) before any UI exists.
- **Why custom:** Origine's rules (former partner on the opposite side, 3–4 parents, sibling bracket) are exactly the cases the family-specific libraries get wrong, and the generic engines only reach them after a lot of configuration. The neighbourhood is small, so a direct row-by-row algorithm is realistic for a beginner-led project and fully under our control.
- **Why React Flow for drawing:** it gives native React nodes (our card components), custom SVG edges (solid, dashed, bracket), pinch and pan on touch, and an animated `setCenter`. It is MIT-licensed, very actively maintained, and its d3-zoom core already cancels the glide on touch and scroll. We turn off `nodesDraggable` and `zoomOnDoubleClick`. The lighter alternative is to render our own SVG inside a d3-zoom or `react-zoom-pan-pinch` wrapper.
- **Fallback:** if the custom layout proves hard, use **d3-dag** (with union nodes and `group`/`rank` row constraints) as the engine inside the same `layoutTree` function. Callers don't change.
- **Not recommended:** family-chart. It is the quickest demo, but it would need forking to meet R2/R4/R5 and adds a gender requirement. dTree is unmaintained. elkjs is too heavy and complex for this size of problem.

**Suggested next step:** a small `prototype` ticket that lays out the sample family's trickiest cases (former + current partner, three parents, parentless siblings) at 1–3 degrees on a 390px screen, checks the cancellable glide on a real phone, and confirms or overturns this recommendation. The final call is made after that.
