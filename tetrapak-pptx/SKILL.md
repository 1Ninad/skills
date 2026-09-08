---
name: tetrapak-pptx
description: "Use this skill any time the user wants to create, edit, or fill a PowerPoint deck using Tetra Pak's official corporate template. Triggers include: any mention of a Tetra Pak presentation, deck, slides, internship presentation, or any request to make a .pptx file 'in the company template' / 'in our branding' / 'official format'. Also use this when the user references their Tetra Pak template, the blue/cyan corporate slides, or asks to update an existing Tetra Pak deck. This skill bundles the actual approved Tetra Pak template file and knows its 30 layouts, theme colors, and fonts — always prefer this over building a generic deck from scratch when the context is Tetra Pak."
---
 
# Tetra Pak PPTX Skill

Builds and edits PowerPoint decks using this skill's bundled Tetra Pak template (`assets/template.pptx`). This is the base file for every output — never invent colors, fonts, or layouts outside what's documented here.

This skill is designed to be used as a local, reusable PowerPoint template pack. Keep the original template untouched and always start from a duplicate in your working folder.

---

## Workflow

1. Copy `assets/template.pptx` to a working file such as `working.pptx` in your project.
2. Pick layouts for each content section using the **Layout Map** below.
3. Edit the duplicate in a PowerPoint-safe workflow: unpack the deck if needed, duplicate or reorder slides, update placeholders, then repack or save the file.
4. Run the content QA + visual QA pass before delivering the deck.

```bash
cp assets/template.pptx working.pptx
# optional: if you are unpacking a PPTX for XML-level editing
python /mnt/skills/public/pptx/scripts/office/unpack.py working.pptx unpacked/
```

If the skill is installed in a different folder, adjust the local paths to match that location; the important rule is to preserve the original template and work from a copy.
 
---
 
## Brand Constants
 
Never override these. If a request implies a different color or font, follow the template anyway and mention the conflict to the user rather than silently deviating.
 
| Token | Hex | Use |
|-------|-----|-----|
| Primary (dk1/dk2/accent1) | `023F88` | Headlines, dark backgrounds, primary brand blue |
| Bright accent (accent2) | `00BDF2` | Title slide background, dividers, highlights |
| Gray (accent3) | `777777` | Secondary text, captions |
| Orange (accent4) | `F58220` | Callouts, warnings, emphasis — use sparingly |
| Green (accent5) | `8DC63F` | Positive stats, growth, success states |
| Dark gray (accent6) | `4A4A4A` | Body text on light backgrounds |
| Light (lt1/lt2) | `FFFFFF` | Light backgrounds, text on dark |
 
**Font: Arial throughout** (both major and minor font in the theme). Do not introduce another font family — Arial is the only safe-list, on-brand choice here.
 
The Tetra Pak logo and "PROTECTS WHAT'S GOOD" mottostamp are already placed in the master/layouts via the `pic` placeholders — don't manually re-add a logo image; let the layout supply it.
 
---
 
## Layout Map
 
The template ships 30 slide layouts (`ppt/slideLayouts/slideLayout1.xml` through `30.xml`). Pick by purpose, not by number — numbers don't match content type 1:1. Use `python /mnt/skills/public/pptx/scripts/thumbnail.py working.pptx` to see them visually before deciding.
 
| Purpose | Layout file | Layout name | Key placeholders |
|---|---|---|---|
| Opening title slide | slideLayout1.xml | 1_Title Slide | `ctrTitle`, `subTitle`, `body idx=12` (presenter), `body idx=13` (date), `pic idx=11` |
| Alt title slide | slideLayout2.xml | 1b_Title Slide | same as above |
| Section content, single block | slideLayout3.xml | 2a_Standard - headline and text | `title`, `idx=1` (body) |
| Two headlines + text | slideLayout4.xml | 2b_Standard - 2 rows headlines and text | two `title`/body pairs |
| Headline + subtitle + text | slideLayout5.xml | 2c_Standard - 1 row headline, sub title and text | `title`, `subTitle`, body |
| 2 rows headline + subtitle + text | slideLayout6.xml | 2d_Standard | stacked variant of above |
| Headline + subtitle + picture | slideLayout7.xml | 2e_Standard - ...and picture | `title`, `subTitle`, `pic` |
| Headline + subtitle + text + picture | slideLayout8.xml | 2f_Standard | text block + `pic` |
| Headline only (section break, light) | slideLayout9.xml | 3a_Standard - headline | `title` only |
| Two-column content | slideLayout13.xml | 4a_Standard - 1 row headline and two columns | `title`, `idx=1` (left), `idx=2` (right) |
| Two-column + subtitle | slideLayout14.xml | 4b_Standard | adds `subTitle` |
| Two-column + subtitle, 2-row headline | slideLayout15.xml | 4c_Standard | stacked headline variant |
| Two-column with picture | slideLayout16.xml | 4d_Standard - ...two columns with picture | one column replaced by `pic` |
| Headline + subtitle + picture (wide) | slideLayout17.xml | 5_a_Standard | full picture variant |
| Blank with mottostamp | slideLayout18.xml | 6_Standard - blank with mottostamp | minimal, logo only — use for custom diagrams/charts |
| Takeaway / key message, dark blue | slideLayout19.xml | 7a_take away slide dark blue | high-impact single statement |
| Takeaway, bright blue | slideLayout20.xml | 7b_take away slide bright blue | same, lighter bg |
| Takeaway, bright blue + picture | slideLayout21.xml | 7c_take away slide bright blue with picture | adds `pic` |
| End slide with boilerplate | slideLayout22.xml | 9a_end slide with boiler plate | closing slide, legal/standard text |
| End slide, 2-liner logo | slideLayout23.xml | 9b_end slide with 2-liner logo | simpler closing |
| Blank canvas | slideLayout24.xml | Blank | no placeholders — last resort only |
| Section divider 1/2/3 | slideLayout25-27.xml | 97/98/99_Divider | `subTitle`, `pic` — use between major sections |
| Agenda variants | slideLayout28-30.xml | 100/101/102_agenda | `title`, two `body` blocks (idx 13/14), date |
 
**Selection guide:**
- Opening of any deck → layout 1 or 2
- Between major sections → a divider (25-27)
- Plain explanation, one idea → 2a (3)
- Comparing two things, before/after, pros/cons → two-column (13-16)
- One big takeaway message the audience must remember → takeaway slide (19-21)
- Custom chart, diagram, or screenshot that doesn't fit any placeholder shape → blank with mottostamp (18), not the fully blank one (24), so the logo stays
- Closing slide → 22 or 23
- Table of contents / overview → agenda (28-30)
---
 
## Placeholder Types Reference
 
Every layout placeholder is a standard PowerPoint type. When editing `slideN.xml`, match content to type:
 
- `ctrTitle` / `title` → slide headline, bold, keep short (one line ideally, the template doesn't show a subtitle truncation buffer for 2-line titles on every layout — check visual QA)
- `subTitle` → secondary line under the headline
- `idx="1"`, `idx="2"` (untyped `ph`) → body content blocks, support bullets/paragraphs
- `body idx="12"/"13"` on title slide → presenter name / date, keep to the original short format ("Presented by: X", "Month Year")
- `pic` → image placeholder; if no image is supplied for that slide, either remove the placeholder or leave the layout's default (logo/mottostamp) — never leave a visibly empty picture frame
- `sldNum`, `dt` → auto-populated, don't hand-edit
---
 
## Common Pitfalls (Tetra Pak-specific)
 
- **Don't replace the logo or mottostamp.** It's part of the brand layouts — if a slide looks "logo-less," you likely picked the fully blank layout (24) instead of layout 18.
- **Don't introduce off-brand colors** like the generic palettes in the general pptx skill's "Design Ideas" section — that list is for decks without a template. Here, the 6 theme accents above are the entire palette.
- **Title slide presenter/date fields** are real placeholders (`body idx=12`, `idx=13`), not free text — update them, don't delete them, even for internal working decks.
- **Content slides carry a hidden `dt` (date) footer placeholder** (bottom-right, small gray text, default value "Initials/YYYY-MM-DD" or a classification tag). It's part of the template's own master, present even on the original blank slides. Leave it as-is unless the user asks for a footer date — don't try to remove it as a "bug." In real PowerPoint this is normally set via Insert > Header & Footer; the LibreOffice QA preview sometimes wraps it awkwardly, that's a preview quirk, not a defect in the output file.
- **Keep Arial everywhere.** Don't pair it with a "header personality font" the way the general skill suggests for untemplated decks.
- When content has fewer items than a layout's slots (e.g., 2-column layout but only one point to make), use the single-block layout (3) instead of leaving a column empty.
---
 
## Output

Always run a final content + visual QA pass before presenting the file. Save the final deck in your project output folder or share the file directly with the user; do not overwrite the original template in this skill directory.
 