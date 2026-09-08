---
name: tetrapak-frontend
description: >-
  Design, build, review, or refactor Tetra Pak web apps, product interfaces,
  digital campaigns, and responsive websites using the supplied Tetra Pak UX,
  color, layout, component, imagery, motion, and anti-slop rules. Use when a
  task mentions Tetra Pak, its brand system, bright-blue box/frame elements, or
  asks for a simple, purposeful, non-generic enterprise UI. Supports an
  end-to-end, single-invocation frontend build from a product brief.
---

# Tetra Pak web design

Use this skill for Tetra Pak applications and web experiences. Treat these
instructions as a self-contained build and review workflow; a consuming
application does not need to carry a separate guidelines Markdown file.
Treat the supplied guidance, local assets, and inspected visual examples as a
design system, not a mood board.
The result should feel clear, useful, recognizably Tetra Pak, and specific to the
user's task.
Use Montserrat font. Prefer a locally available or self-hosted Montserrat asset;
do not add a remote font import in the offline workflow.

This skill is offline-first. Do not browse, search, or open public Tetra Pak
websites for guidelines, examples, or validation during an ordinary invocation.
The local skill files, project files, supplied screenshots, and supplied brand
assets are the default source of truth. Live website inspection is allowed only
when the user explicitly asks for it, or supplies a URL and specifically asks
for analysis of that URL. Offline guidance is a frozen approximation: do not
call it current, official, or pixel-perfect without explicit validation against
an approved source.

## Source of truth and asset constraints

Use this priority order when sources disagree:

1. Approved Tetra Pak guidance, tokens, logos, and assets supplied locally to
   the project.
2. This skill, its bundled source kit, and its supplied visual examples.
3. The consuming application's existing design tokens and accessibility rules.
4. Explicitly requested live references, only when the user authorizes them.

Do not describe inferred values as official. If an approved asset, token, or
interaction rule is unavailable, label the result as an approximation and keep
the decision easy to replace later.

When official Tetra Pak icon assets are unavailable, use a small custom inline
SVG icon set implemented as React components. Do not default to Lucide, Material
Icons, Font Awesome, Heroicons, an icon font, or another library-based icon set
unless the user explicitly authorizes that dependency. Custom SVG icons should
use `currentColor`, a consistent outline construction, rounded line caps and
joins, and approximately 1.8px stroke width. Keep icons purposeful and provide
accessible labels on icon-only controls. Every custom icon must use the shared
24x24 viewBox, keep its visual center at 12,12, and be checked at its actual
16px, 18px, and 24px render sizes on both light and dark surfaces. Check for
clipped strokes, uneven padding, off-center circles, mismatched stroke widths,
and misaligned sub-elements before shipping. Prefer a single coherent path or
carefully aligned sibling paths; do not combine unrelated coordinate systems or
use transforms that shift only part of an icon. If an icon is not visually
correct at the target size, fix its geometry rather than compensating with CSS.

## One-command workflow

Invoke it as:

```text
$tetrapak-frontend Build this React frontend: <product brief>
```

When this skill is invoked for a frontend request, execute the complete workflow
from the user's single prompt. Do not make the user separately provide a design
guide, choose a component library, or manually wire the visual system unless a
missing credential, approved asset, or genuinely ambiguous product requirement
prevents progress.

Aim for the highest-fidelity result that the available sources and assets support,
but never claim "perfect", "official", or "pixel-perfect" alignment unless the
relevant approved source has actually been inspected and the result has been
validated against it. Report confidence and concrete gaps instead.

The invocation should result in:

1. A short task and information-hierarchy model.
2. Inspection of the authoritative local reference material that is available.
3. A page-level visual and responsive plan.
4. Working React implementation in the consuming application.
5. Reusable local components in a normal `src/components/ui/` tree.
6. Custom inline SVG icons for missing icons, with no icon-library dependency.
7. Build, interaction, accessibility, desktop, mobile, and reduced-motion checks.
8. A concise handoff naming verified behaviors, approximations, and remaining
   asset/source limitations.

Use the current task's requested product, content, routes, and information
architecture. Do not reproduce a previous demo or gallery page merely because
it is available in the workspace.

### Inspect local references before styling

When local screenshots, design files, assets, or existing components are
available, inspect the relevant ones before styling. Examine headers, navigation
states, content widths, grids, cards, forms, buttons, menus, footer, responsive
behavior, and visible interaction states. Use image inspection and local DOM or
computed-style inspection when available. Infer rules from repeated visual
relationships, not from one isolated component. Do not spend time searching the
web for missing examples during the normal workflow.

### Do not use the sample application as a template

The component-gallery application from the originating workspace is not part of
this skill and must never be copied into a consuming app. Do not copy its
`main.jsx`, demo data, page structure, section order, marketing copy, placeholder
brand mark, or gallery composition. Use only abstract, validated principles from
this skill and the supplied local references. Build the requested application's own
information architecture and content model.

### Local source, not a runtime package

The bundled component list is not an exhaustive design-system boundary. For
every requested UI pattern that is missing from both the source kit and the
consuming app, build a reusable local component under `src/components/ui/`, one
component per file, and import it directly. Never treat a missing primitive as
permission to omit the pattern or substitute a browser/OS-default-looking
control. Unless the user explicitly requests native behavior, implement the
visible presentation yourself and use native elements only as the semantic and
interaction foundation where appropriate. Match the supplied references and
existing tokens. Preserve keyboard behavior, focus management, validation,
responsive behavior, and screen-reader support underneath the custom
presentation. Keep app-specific composition and business logic outside the
primitive. Do not add a custom UI package or icon-library dependency unless the
user explicitly asks for one. If an existing local component is close, extend
it without breaking its current consumers.

### Portable source kit when this skill is distributed

When this skill bundle includes `assets/react-source/`, use that directory as
the starting source kit for a new React application. It contains the split
`components/ui/*.jsx` primitives, neutral component CSS, and custom inline SVG
icons. Vendor only the requested files into the consuming app; after they are
copied, they are ordinary application source and the app has no runtime
dependency on this skill or on a private component package.

Prefer the bundled command when it is available:

```bash
bash scripts/vendor-ui.sh /path/to/react-app button data-table search-filter
```

The command copies transitive local component dependencies and writes the
component stylesheet to `src/ui-components.css`. Import that stylesheet once
from the app entry point. With no component names, it vendors the complete
source kit. Read `references/component-dependencies.md` when selecting or
auditing a partial set.

The source kit is a starting point, not a replacement for the workflow above:
inspect the target reference, choose the right composition mode, adapt tokens
to the consuming app, and build the app's own page composition. Never copy the
bundle's sample gallery because no sample gallery is included in the bundle.

## Start with the job

Before writing UI code, write down:
- Who is using this screen and what they are trying to finish.
- Where and when they use it. Consider desktop, mobile, plant floor, field work, sales, service, or marketing contexts.
- The single most important action or decision on the screen.
- The content that must be visible now and the content that can be revealed later.
- Whether the experience is mainly functional, mainly aspirational, or deliberately balanced between the two.

Do not begin with a generic dashboard, a hero section, or a card grid. Start with the user's task and the information hierarchy.

## Core UX principles

### Simple and smart
Make the shortest correct path obvious. 
Always check if any element (text / object / image / control) is necessary & not already present in app (ensure anti-redundant) for the user to complete their task.
Remove irrelevant or rarely used information from the first view, but do not flatten a complex task into a toy interface. 
Use familiar patterns, clear labels, constraints that prevent common mistakes, immediate feedback, and visible progress.
Consistency matters. Reuse the same navigation, control order, spacing logic, labels, icon meanings, and states across the product. Every action label should say what will happen, such as "Download report" or "Save changes".

### Mobile-first and responsive
Design for the smallest screen first, then scale up.

### Enterprise-ready
The product should feel professional, clean, purposeful, and trustworthy.

### Contextual with purpose
Design for the actual setting. 
A service engineer checking equipment needs dense, easy to navigate & use, scannable controls and resilient states. 
The purpose determines the objective; the context determines how the user reaches it.

## Frontend engineering conventions

The supplied engineering references are from 2021. Keep their durable practices,
but do not force a dated tool choice onto a consuming project. Respect the
project's existing framework, package manager, build tool, JavaScript or
TypeScript choice, styling system, test runner, and component conventions.
Do not migrate a project to Create React App or add Redux, Axios, SCSS,
Framer Motion, D3, Recharts, Cypress, Storybook, or another library solely
because a reference names it. Add a dependency only when the task needs it and
the project does not already provide a suitable capability.

### App structure and components

- Start from the project's existing template or scaffold. Do not eject or
  replace the bundler/configuration unless a concrete requirement demands it.
- Organize application code by feature where practical. A useful default is
  route-level pages, shared components, low-level services for API/logging, and
  feature-local subcomponents. Keep a reusable component in a shared location
  only when it is genuinely reused.
- Keep one primary component per file. For complex components, separate
  presentation from stateful orchestration when that makes the code easier to
  test and reuse; do not create ceremony for a small component.
- Prefer function components and hooks. Use TypeScript or PropTypes according
  to the consuming project's convention; do not introduce a second type system
  just for this skill.
- Use language features supported by the project, but favor readable, DRY,
  maintainable code over compressed or clever syntax.
- Keep tests, stories, and component-specific styles close to their source when
  the project uses them. Use the project's scoped styling convention (CSS
  Modules, component styles, or an equivalent) and shared tokens for colors,
  typography, spacing, and breakpoints.
- Use modifier classes or data attributes for static visual states. Use inline
  styles only for values that are genuinely computed at runtime, such as a
  user-selected image URL or a measured position.

### State, routing, and data

- Start with component state. Use context for small, local shared state and a
  dedicated global store only when state is cross-cutting or complex. If Redux
  is already used, prefer Redux Toolkit slices and its established async
  pattern rather than hand-written store boilerplate.
- Use the app's router or framework routing for screens that need deep links,
  browser history, or bookmarks. Keep URL state and domain/application state
  separate unless the user experience clearly benefits from synchronizing
  them.
- Choose REST, OData, GraphQL, or another API protocol based on the backend
  contract and task. Reuse the project's existing HTTP client; do not add
  Axios merely for ordinary requests. For live bidirectional updates, use the
  project's approved push transport only when the feature needs it.
- Model loading, empty, error, retry, cancellation, and success states as part
  of the real interaction path. Never leave a request failure as a blank area
  or an unhandled console error.

### Localization and translation files

When the product supports more than one language, keep user-facing strings out
of JSX and JavaScript. Use the project's existing localization system; for a
React app without one, `react-i18next` is an appropriate default.

- Keep one locale folder per language under the project's established public or
  source locale root, for example `locales/en/` and `locales/it/`.
- Use `global.json` for strings shared across products or applications,
  `common.json` for application-wide strings such as headers, footers, and
  modals, and one page file for route/page-specific strings. Small apps may use
  `global.json` plus one app file.
- Use UTF-8 JSON. Name keys in kebab-case, group them by component or logical
  context, leave truly generic terms such as yes/no at the root, and address
  nested keys with dot notation such as
  `page-settings:display-mode.label`.
- Keep the same key structure across locales. Translate visible labels,
  helper/error text, empty states, action names, and accessible names; do not
  concatenate translated fragments in code when a complete localized sentence
  is needed.

### Testing, quality, and failure handling

- Run the repository's configured formatter and linters. Use ESLint and
  Prettier, plus Stylelint for CSS, when they are already part of the project;
  do not add tooling only to satisfy this skill.
- Test logic and user-visible behavior, especially keyboard interaction,
  validation, loading/error states, and permission-sensitive actions. Keep
  component tests near the source when that matches the repository. Structure
  tests as arrange, act, assert, and prefer stable accessible queries over
  implementation details.
- Test the important end-to-end journeys in the project's established browser
  test tool, coordinating with backend owners when the flow crosses services.
  Use Storybook for manual component states and documentation when the project
  has or benefits from Storybook; it is not a required dependency for every app.
- Add an app or route error boundary for render-time failures and show a useful
  recovery state without taking down unrelated UI. Handle event-handler and
  asynchronous failures explicitly; error boundaries do not catch those by
  themselves.

### Security and visual assets

- Treat authentication, authorization, CORS, and token validation as server-
  enforced concerns. On the client, never expose secrets and never treat a
  hidden control as permission enforcement.
- If the app renders user-controlled HTML, sanitize it with the project's
  approved sanitizer before insertion. Do not add an HTML sanitizer for plain
  text rendering, and do not use raw HTML as a shortcut for normal UI.
- Prefer SVG for interface icons and diagrams, using the icon rules above; use
  PNG or another raster format when the supplied asset is inherently raster or
  requires it. Optimize large images and provide meaningful alternative text
  when an image carries information.
- Use a charting library only when a chart materially improves the task. Keep
  the data legible, label axes and series, provide a non-visual alternative
  where needed, and do not add a chart library merely because the reference
  lists one.

## Choose the composition mode

Use the aspirational and functional ends as a continuum, not two unrelated themes.

| Mode | Use it for | Visual decisions |
| --- | --- | --- |
| Functional | Product flows, service tools, forms, equipment UIs, operational data | Narrower layout, tighter gutters, neutral surfaces, restrained imagery, high scanability, clear states, task-first controls |
| Balanced | Tetra Pak sites, account areas, solution finders, content-led applications | White space and photography establish the brand; blue and neutral UI structure the task |
| Aspirational | Campaigns, sustainability stories, launch screens, editorial communication | Larger imagery, stronger brand recognition, more white space, larger type, bold bright-blue fields, fewer competing controls |

When the screen mixes purposes, let the task area stay functional and let the storytelling area carry the aspirational treatment. 
Do not make the whole product look like a campaign page.

## Brand color system

Use these tokens unless an existing product token system already defines the same
values.

```css
:root {
  --tp-corporate-blue: #023F88;
  --tp-bright-blue: #00BDF2;
  --tp-white: #FFFFFF;
  --tp-black: #000000;
  --tp-dark-grey: #4A4A4A;
  --tp-medium-grey: #777777;
  --tp-light-grey: #E5E5E5;
  --tp-subtle-grey: #F6F6F6;
  --tp-pink: #F067A6;
  --tp-green: #8DC63F;
  --tp-orange: #F58220;
  --tp-subtle-blue: #B9E5FB;
  --tp-yellow: #FFDD00;
  --tp-red: #FF0000;
  --tp-logo-sky-blue: #75BEE9;
}
```

Color rules:

- Keep the overall expression blue. Bright blue should be the first color the eye meets, supported by corporate blue.
- Use corporate blue for anchors, headers, navigation emphasis, primary actions, dark surfaces, and high-confidence text on light surfaces.
- Use bright blue for the signature visual feature, active emphasis, hover treatment, key campaign fields, and the approved box or frame element.
- Use white for copy on blue and for clean backgrounds. Use neutral colors for body copy, form surfaces, dividers, disabled states, and illustrations.
- Add secondary colors one at a time and sparingly. One secondary color may highlight a statistic, quote, icon, or small area of interest.
- Multiple secondary colors are acceptable for charts, graphs, and illustrations when the complete composition still reads as blue-first.
- Never use secondary colors as a semantic taxonomy by default, such as green meaning sustainability. Use labels, icons, and accessible state patterns too.
- Never let a secondary color dominate a page, cover, or advertisement. Do not use a secondary color as a full-page background.
- Keep neutral shades limited within one view and maintain strong text contrast.
- Reserve red for genuine error or destructive meaning, not decoration.

Supporting blue rules:

- Use subtle blue (`#B9E5FB`) as a pale supporting surface for selected or
  positive states, quiet information panels, or state icons. It is not a
  replacement for corporate blue in text or for bright blue in primary actions.
- Use logo sky blue (`#75BEE9`) only when it belongs to a supplied logo or brand
  asset. Do not substitute it for the bright-blue interactive state.
- On pale-blue surfaces, use corporate-blue or dark neutral text. On dark or
  bright-blue surfaces, use white or the contrast relationship shown by the
  supplied button examples. Validate contrast for every text/state pairing.

Do not invent gradients, neon palettes, glassmorphism, or a new accent system to make the page feel "modern/designer". The brand already has a strong visual signature.

For operational interfaces, use semantic status treatments consistently: the blue family may represent healthy or operational states, orange may represent attention or review, and red is reserved for genuine error or destructive meaning. 
Always pair status color with a text label, icon, or explicit action; never make color the only signal. 
Do not apply this mapping mechanically to marketing illustrations, charts, or unrelated decorative content.

## Layout, spacing, and type

- Use a real grid. In functional UI, use a narrower, denser structure. In aspirational UI, enlarge the gutters and let imagery and white space breathe.
- Use spacing values that are multiples of 8 where the product system allows it. If the existing app has a spacing scale, map to it instead of introducing a second scale.
- As a practical starting scale, use body text at 14px or larger, page titles around 54px on desktop, section headings around 28px, and labels or metadata around 10–12px. Treat these as responsive defaults, not immutable values; adjust for the user's task, content length, and viewport.
- Give every section one clear visual anchor. Avoid equal-weight cards competing for attention.
- Use a 4px border radius for standard interface surfaces, cards, fields, and
  buttons. Treat this as 4px, not a typographic point value. Do not use pill-
  shaped controls unless the control meaning requires it.
- Keep extensive body text at 14px or larger. Aim for 40 to 60 characters,
  including spaces, per line on mobile and 60 to 100 characters, including
  spaces, on desktop. If a paragraph is hard to scan, shorten it or change the
  measure before shrinking the type.
- Use Montserrat with the available weights 400, 500, 600, and 700. Use 400 for
  regular copy, 500 for quiet emphasis, 600 for controls and navigation, and
  700 for headings or strong labels. Do not combine several display fonts or
  use novelty typography.
- Core colors in text are corporate blue, bright blue, and white. Prefer
  corporate blue for headlines and subheadings on light backgrounds, bright
  blue for restrained emphasis or an approved signature treatment, and white
  on blue surfaces when contrast permits.
- Neutral text colors may be used freely according to contrast: black is the
  strongest neutral, dark grey (`#4A4A4A`) is the default body text, medium grey
  (`#777777`) suits metadata and secondary copy, and lighter greys are reserved
  for dark surfaces, borders, or genuinely disabled content rather than
  essential copy on white.
- Keep headings concise. A heading should orient the user or make a claim, not repeat the paragraph below it.
- Use a divider when it clarifies separation between sibling content groups, table rows, tabs, or navigation levels. Avoid dividers inside a single content group when whitespace already provides enough separation.

## Imagery and visual composition

### Logo selection and placement

Use the approved logo asset supplied by the user or consuming project. Do not
recreate the Tetra Pak logo as text, a hand-drawn SVG, or a placeholder mark.
Use the horizontal two-line lockup (`two_liner_logo.png`) in headers, footers,
and other rectangular or wide spaces. Use the circular motto stamp
(`logo_motto_stamp.png`) in round or square spaces, compact identity moments,
or compositions where the circular badge is appropriate. Choose by available
aspect ratio and hierarchy, not by personal preference. Preserve the asset's
aspect ratio, clear space, and colors; never crop, stretch, recolor, or place a
logo over a busy image. If the supplied asset is unavailable in the consuming
project, leave a clearly documented asset gap instead of inventing a mark.

Treat photography as content with a job. Use people, food, production, nature, equipment, packaging, or supply-chain scenes that explain the story or task. 
Crop with intent, protect the subject, and leave usable negative space for copy when
copy must sit over the image.

The supplied examples repeatedly use a clean white or subtle-grey field, strong blue blocks, bright documentary photography, and simple line or icon diagrams.
They favor a few large, legible decisions over decorative detail. Reproduce that logic, not the exact placeholder copy.

For image-plus-copy blocks:

- Prefer side-by-side image and copy on desktop, then stack deliberately on mobile. Keep the reading order logical.
- Use a solid bright-blue panel when the copy needs a strong brand anchor.
- Use a translucent or white copy panel only when it preserves image readability and does not become a generic glass card.
- Do not place the Tetra Pak logo directly on a busy image in static communication. Place it on the bright-blue area when the composition calls for the logo.
- Do not cover the subject's face, product detail, or a critical diagram with copy, a frame, or a hover layer.

## The bright-blue element
Use one signature element per composition. The box and the frame are alternatives. Never put both on the same page or screen.

### Bright-blue box

Use the box to structure copy and product imagery. It has a slight fade where the
blue meets a photograph. The fade belongs at that boundary, not over the whole
box and not over empty UI. Avoid placing text in the fade area.

Construct the box from the layout grid. For static communication, it should
usually begin at the bottom-right corner and grow along grid lines. Other corners
are allowed when the composition requires them.

Do not apply the fade to a small label or name bar. Do not alter the approved fade
construction, recolor it, or use it when there is no image behind it.

### Bright-blue frame

Use the frame to highlight a photograph, statistic, message, or screen. It is a
solid bright-blue line with a stable rectangular or square shape. Placement may
respond to the image, but the shape and line treatment should remain consistent.

For responsive implementation, calculate thickness from the widest side of the
format:

- A-like formats: widest side / 45.
- Square formats: widest side / 30.
- Tall or wide formats: widest side / 50.
- Large inner frames sit about 1.5 times the line thickness from the edge.
- Outer frames use about 1.5 times the inner-frame thickness and sit at the edge.

In CSS, use `clamp()` around a proportional value so the frame stays visible but
does not become heavy on small screens. Keep the line solid. Never make it dotted,
excessively thick, hairline-thin, a different color, or an invented shape.

Do not combine the frame with the bright-blue box. Do not pair the frame with the
Tetra Pak logo in a static page. The guide allows that pairing only in motion,
film, or inside brochures.

## Components and interaction rules

### Navigation and breadcrumbs

Use a clean white header with clear top-level navigation and a restrained active
underline or equivalent indicator. On deep content pages, use breadcrumbs as a
secondary orientation aid, not as a replacement for main navigation. Start at the
second level and end at the current page. Do not show a redundant breadcrumb on
the top level.

The supplied breadcrumb example uses a light-grey band, dark text, and simple
chevron separators. Keep the trail compact and keyboard accessible. Link the
ancestor levels, render the current page as the final non-link item, and keep
each separator optically centered with the text. Do not turn breadcrumbs into
large pills or repeat the current page as both a link and a heading.

### Buttons

Button text must describe the result of the action. Use an icon only when it adds
meaning, and keep icon and label aligned.

- Primary: the strongest action. Usually one per screen or task step.
- Secondary: an outlined, lower-emphasis action.
- Transparent: a quiet action or text-like link when the surrounding context is
  already clear.
- Disabled: visually muted and unavailable, with an explanation when the reason
  is not obvious.

Use the approved theme relationships shown in the supplied button example:

- Light theme: active is corporate-blue with white text; hover is bright-blue
  with white text; inactive/disabled is light grey with muted grey text.
- Dark corporate-blue theme: active is white with corporate-blue text; hover is
  bright-blue with white text; inactive/disabled uses a muted blue surface and
  muted blue text.
- Bright-blue theme: active is white with corporate-blue text; hover is
  corporate-blue with white text; inactive/disabled is pale blue with muted
  blue text.

Keep button height and label/icon alignment consistent across a component set,
and make the visible state change understandable without color alone.

Do not make every action a primary button. Do not use rounded gradient buttons,
floating action buttons, or arbitrary button colors.

### Cards and content sections

Cards are surfaces that contain content and actions, not decoration. Put the
title, supporting copy, image, metadata, and action in a clear scan order so the
card is easy to scan for relevant and actionable information. Card padding
follows the grid and uses multiples of 8px: smaller values suit functional
design, while larger values suit aspirational design. Use white or light-grey
card backgrounds. Add an optional restrained shadow only when elevation helps
separate the card from its background; `0 4px 16px rgba(0, 0, 0, .10)` is a
useful soft-shadow example, not a reason to shadow every card. Keep the standard
4px radius unless a supplied component reference establishes another value.

For content-heavy pages, prefer a few larger editorial sections over a wall of
small cards. If several cards exist, vary their importance through size, spacing,
and content hierarchy, not random colors.

### Forms and controls

- Put checkboxes and radio buttons before their labels.
- Use checkboxes for independent multiple selections or a standalone boolean.
- Use radio buttons for one choice from a short list. Use a select for many
  options or when vertical space matters.
- Give text fields widths that match the expected input. Use visible labels,
  helpful examples, validation messages, and clear focus states.
- Preserve native semantics and keyboard behavior. Never rely on color alone for
  selected, invalid, disabled, or completed states.
- Use modals only for critical information or a focused decision that blocks the
  current flow. Include a header, concise body, action, and a reliable close
  path. Prefer an inline panel when the user does not need to leave the flow.
- Make dropdowns, stepper controls, and filters readable at a glance. Show the
  current value and the consequence of changing it.

The supplied form example uses compact labels, simple borders, dark text, and
generous enough control height for touch. Use a native select when native
behavior is appropriate. If the design requires a custom listbox to visually
match a designed filter or menu, preserve keyboard navigation, focus
management, Escape handling, selection semantics, and screen-reader support.
Do not use an unstyled operating-system popup when the surrounding filter system
uses designed menus. The same rule applies to any missing common pattern: build
the missing visual and interaction layer locally while retaining the native
semantics underneath where appropriate.

## Motion

Motion should be simple, fluid, and useful. Use it to reveal structure, guide
attention, or confirm an action.

- Bright-blue box motion may fade or slide in from a side or from the top or
  bottom of the element.
- Bright-blue frame motion may complete around the outer perimeter or draw an
  inner frame around content.
- Keep motion directional and short. Avoid bounce, elastic overshoot, parallax
  overload, spinning loaders for local state, or unrelated page choreography.
- Respect `prefers-reduced-motion` and provide the same information without motion.
- Do not change the construction, color, shape, thickness, or fade treatment of
  the bright-blue element during animation.

## Anti-AI-slop rules

Before shipping, remove anything that makes the page look like an untuned
template or generic AI output:

- No gratuitous gradients, glassmorphism, rainbow accents, glowing shadows, or
  decorative blobs.
- No invented stats, testimonials, logos, product claims, or lorem ipsum in the
  final UI.
- No repeated section headings, duplicate descriptions, or three cards that say
  the same thing with different nouns.
- No arbitrary bento grid just to fill space. Use a grid only when the content
  relationships justify it.
- No excessive rounded containers, pill buttons, icon clouds, or emoji as a
  substitute for content.
- No fake interactivity. Loading, empty, error, success, hover, focus, disabled,
  and permission states must behave and read as real states.
- No copy that says "seamless", "innovative", "next-generation", or similar
  claims without evidence. Prefer a concrete action, outcome, or fact.
- No repeated use of "Discover", "Explore", or "Learn more" when a specific
  label would tell the user more.
- No visual trick should compete with the primary task. If removing an element
  does not reduce comprehension, remove it.
- Keep frontend simple, clean, minimalist, professional, enterprise-ready & not like marketing-page.
- Do not add decorative status dots, badges, pills, icons, or indicators (e.g. commonly status dot at top). Every visual element must convey information that would otherwise be missing & inlcude such element only when necessary or really helping to improve something.

## Build and review workflow

1. Inspect the provided source material, screenshots, existing app, and assets.
   Read the text and visually inspect images. Infer rules from repeated visual
   relationships, not isolated decoration.
2. Write a short task model and choose the composition mode.
3. Define the page hierarchy, responsive behavior, component states, and content
   model before styling.
4. Implement the real interaction path with semantic HTML, accessible labels,
   keyboard behavior, focus states, responsive layout, and realistic content.
5. Apply the color system and one bright-blue signature element only where it
   supports the composition.
6. Render at desktop and mobile widths. Inspect the result visually, including
   image crops, line lengths, contrast, spacing, hierarchy, and accidental
   redundancy.
7. Test the main task with keyboard navigation and reduced motion. Check loading,
   empty, error, disabled, and success states where relevant.
8. Remove anything that is decorative, duplicated, ungrounded, or inconsistent
   with the Tetra Pak rules. Then run the app's available tests and lint checks.
