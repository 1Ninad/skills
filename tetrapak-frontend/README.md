# Shareable frontend skill bundle

This folder is the portable distribution for the frontend skill. It contains:

- `SKILL.md`: agent instructions for creating and reviewing high-fidelity React frontends.
- `assets/react-source/components/ui/`: split, reusable React source files and inline SVG icons.
- `assets/react-source/styles.css`: neutral design-system CSS for the reusable components.
- `assets/brand/`: supplied Tetra Pak logo lockups for horizontal and circular placements.
- `scripts/vendor-ui.sh`: one command to vendor all or selected components into an existing React app.
- `references/component-dependencies.md`: the local dependency map used by the vendoring command.

The current sample component-gallery application is deliberately not included.
There is no `src/main.jsx`, sample data, demo page, or runtime package dependency
in this bundle. Vendored components become normal source code in the consuming
application.

## Use from a React application

From this bundle, run:

```bash
bash scripts/vendor-ui.sh /path/to/your-react-app button data-table search-filter
```

Component names are the lowercase filenames without `.jsx`, for example:
`button`, `data-table`, and `search-filter`. With no component names, the
command copies every reusable component.

Then import directly from the app source:

```jsx
import { Button } from "@/components/ui/button";
import "@/ui-components.css";
```

The app owns page composition, content, routing, and product-specific styling.
The vendored UI source has no dependency on this bundle after copying.

The skill is offline-first. Use the bundled guidance, local source, screenshots,
and brand assets without searching public websites. Live reference inspection is
only part of a task when the user explicitly requests it.
