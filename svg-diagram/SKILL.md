---
name: svg-diagram
description: Create polished, manually positioned SVG architecture and system diagrams with clear zones, straight primary flows, restrained styling, and render verification. Use when a diagram must be presentation-ready, fit a page, show technology boundaries, or avoid poor automatic layout from Mermaid or similar tools.
disable-model-invocation: true
---

# SVG Diagram

Create architecture and system diagrams as deliberate visual compositions, not as auto-laid-out graphs.

## Use this approach

Use this skill when the diagram needs to be readable in a few seconds, fit an A4/A3 landscape page, show technology boundaries, or look suitable for an engineering blog/design review. Use it explicitly when the user invokes `svg-diagram`.

Prefer manually authored SVG when the diagram has several branches, system zones, or supporting flows. Mermaid may be kept as an optional editable source, but the SVG is the presentation artifact.

## Design rules

1. Identify one primary path and place it left-to-right. Keep the main path visually dominant.
2. Put external actors, source files, or input systems at the left. Put the final consumer or output at the right.
3. Group components into two or three purposeful zones with light fills and dashed borders. Use zone labels, not nested boxes everywhere.
4. Put supporting stores, templates, callbacks, and cloud dependencies above or below the primary path. Route them with short orthogonal connectors.
5. Keep connectors straight where possible. Do not allow long auto-routed loops, unexplained vertical drops, or crossing lines.
6. Use at most one connector between a pair of components. Collapse repeated actions into one short label.
7. Use arrowheads in both directions only for a real exchange whose result changes the caller's next action. Give it one combined label such as `submits / receives results`.
8. Use short labels: `reads`, `starts`, `builds`, `releases`, `persists`, `uses`, `publishes`.
9. Put technology on the second line of a component. Keep it specific but short, for example `FastAPI + Uvicorn`, `Python worker`, or `Azure OpenAI`.
10. Do not include frontend implementation details unless the user explicitly asks for them. A generic interface may be omitted entirely when the requested view is backend or processing architecture.

## Visual language

Use a white background, dark gray text, thin dark connectors, and restrained colors:

- Pale yellow: local processing or transformation zone.
- Pale green: external/cloud services.
- Pale blue: local runtime components or final output.
- Pale gray: files, stores, templates, or source artifacts.
- Dark dashed borders: system-zone boundaries.

Use Arial or another widely available sans-serif font. Use modest corner radii, no gradients, and no heavy shadows. Keep title and zone labels visually stronger than edge labels.

## SVG construction

Create the SVG directly with explicit dimensions and coordinates. A good default is a landscape `viewBox` around `0 0 1700 900`; scale it for A3/A4 output without changing coordinates.

Include:

- `<title>` and `<desc>` for accessibility.
- A reusable arrow marker in `<defs>`.
- CSS classes for titles, subtitles, labels, edges, zones, stores, and output.
- Explicit rectangles, text positions, and connector paths.
- Enough whitespace around the primary path and between zones.

Keep the visual artifact separate from any Mermaid source:

- `architecture-diagram.svg`: authoritative rendered diagram.
- `architecture-diagram.mmd`: optional simplified editable source.
- `architecture-diagram.md`: short wrapper that displays the SVG.

Do not force Mermaid to reproduce a manually designed layout. Its automatic routing is a fallback for simple diagrams only.

## Verification loop

After editing the SVG:

1. Render it to PNG with `rsvg-convert` when available.
2. Inspect the rendered PNG visually.
3. Fix overlaps, clipped text, awkward connector routes, weak contrast, excessive text, or unbalanced whitespace.
4. Repeat until the primary path can be followed immediately.

Use `apply_patch` for SVG and Markdown edits. Do not add a runtime dependency to the application just to render the diagram.

## Final quality checklist

- [ ] One primary flow is obvious from left to right.
- [ ] Actors, local processing, external services, stores, and outputs have clear ownership.
- [ ] No frontend implementation details appear unless requested.
- [ ] No crossed connectors or tall auto-layout tower effect.
- [ ] Labels are short and readable at page size.
- [ ] Technology names are visible where they clarify the architecture.
- [ ] Supporting flows do not compete with the primary path.
- [ ] SVG renders successfully and has been visually inspected.
