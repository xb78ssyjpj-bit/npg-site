---
name: Nuages Production Group
description: Manchester live-recording and content-shoot specialists — a precise, blue-ink technical register drawn from the brand mark
colors:
  azure: "#00A0FF"
  azure-deep: "#0072B8"
  azure-tint: "#E6F5FF"
  ink: "#071B2B"
  ink-deep: "#04121D"
  ink-raised: "#0E2A3F"
  slate: "#5A7183"
  slate-light: "#8FA3B3"
  paper: "#FFFFFF"
  paper-tint: "#F2F6FA"
  paper-tint-2: "#E7EEF4"
  state-error: "#B3261E"
  state-success: "#1F6B3B"
typography:
  display:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.5rem, 6.5vw, 5.75rem)"
    fontWeight: 300
    lineHeight: 1.02
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.9rem, 4vw, 3.4rem)"
    fontWeight: 300
    lineHeight: 1.06
    letterSpacing: "-0.015em"
  subhead:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.35rem, 2.4vw, 1.9rem)"
    fontWeight: 400
    lineHeight: 1.15
  title:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 1.8vw, 1.45rem)"
    fontWeight: 500
    lineHeight: 1.25
  body:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.65
  lede:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.5vw, 1.3rem)"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.14em"
spacing:
  s1: "0.5rem"
  s2: "0.75rem"
  s3: "1rem"
  s4: "1.5rem"
  s5: "2rem"
  s6: "3rem"
  s7: "4.5rem"
  s8: "7rem"
  s9: "10rem"
components:
  button-primary:
    backgroundColor: "{colors.azure}"
    textColor: "{colors.ink-deep}"
    padding: "1.05em 2em"
  button-primary-hover:
    backgroundColor: "{colors.paper}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    padding: "1em 2em"
---

# Design System: Nuages Production Group

## Overview

**Creative North Star: "The Technical Register"**

NPG is presented the way serious touring-production companies present themselves: quiet, precise, and engineered, with the work and the credits doing the persuading rather than any costume. The system is drawn directly from the brand mark — the logo is pure black with a single bright azure (`#00A0FF`), and that azure is the only accent the site uses. Deep navy ink anchors the page at the top and bottom; the body of the site is light, open, and disciplined, built from navy tinted down to a few percent rather than neutral greys, so even the pale surfaces stay in the brand's colour family.

Structure carries the weight: a strict grid, hairline rules, generous vertical space, one typeface used across four widths and weights, and numerals set as real tabular data. Persuasion comes from a credit list and plainly-stated capability, which is how this category earns trust.

This replaces an earlier near-black-and-safety-orange "road case" world. That direction was retired deliberately: the orange existed nowhere in the brand, and the flight-case metaphor read as costume rather than identity.

Key Characteristics:
- Light-dominant page, anchored by two deep-navy bands (masthead/hero and footer) — never relentlessly dark
- Exactly one accent, `#00A0FF`, taken from the logo and used as a marker, never as a field
- One typeface (Archivo, variable width + weight) doing display, body, and label duty — cohesion by restraint
- Hairline rules and a visible grid instead of cards, borders, textures, or containers
- Large headlines set **light-weight**, not bold — scale supplies the emphasis

## Colors

Palette strategy: Restrained. A near-neutral light page, two deep navy anchors, and a single saturated azure marker. The light ground is correct for the scene: this site is read in daylight, on a phone or a laptop, by an artist or a manager deciding whether to send a brief — not in the room where the work happens.

### Primary
- **Azure** (`#00A0FF`): sampled directly from the logo's wordmark. Used for the rule above section labels, the active nav marker, the primary button fill, focus rings, and inline link underlines on dark grounds. Never a background field, never a large area.
- **Azure Deep** (`#0072B8`): the same accent stepped down for small text and links **on light grounds only**, where the bright azure fails contrast (`#00A0FF` on white is 2.8:1 and is never used for text there).
- **Azure Tint** (`#E6F5FF`): the one permitted azure surface — a very pale wash behind a highlighted table row or a note.

### Neutral
- **Ink** (`#071B2B`): the primary deep-navy ground for the hero and dark bands.
- **Ink Deep** (`#04121D`): the footer and the deepest step.
- **Ink Raised** (`#0E2A3F`): a raised panel or input on a dark ground.
- **Slate** (`#5A7183`): secondary text on light (5.1:1 on white).
- **Slate Light** (`#8FA3B3`): secondary text on dark (6.7:1 on Ink).
- **Paper** (`#FFFFFF`) / **Paper Tint** (`#F2F6FA`) / **Paper Tint 2** (`#E7EEF4`): the light surfaces. The tints are navy mixed down to a few percent, never a neutral grey — this is what keeps the pale sections in the family.

### Named Rules
**The Marker Rule.** Azure marks; it never fills. It appears as a rule, an underline, a small square, a focus ring, or one button — and it never occupies more than a few percent of any viewport. If a whole band or a whole set of items has gone azure, the rule is already broken.

**The Two-Anchor Rule.** A page carries at most two deep-navy bands: the hero at the top and the footer at the bottom (a third is permitted only for a single full-width call-to-action). Everything between them is light. The earlier all-dark page is the failure state this rule exists to prevent.

**The Tinted-Neutral Rule.** Light surfaces are navy at 2–8%, never `#F5F5F5` or any pure grey.

## Typography

**Everything is Archivo** (variable, width 62–125, weight 300–700), with fallbacks `Helvetica Neue, Arial, sans-serif`. One family is the cohesion mechanism: width, weight, case, and tracking do all the work that a second and third typeface used to do. The previous system ran a stencil face, a mono, and a handwriting script simultaneously; all three are gone.

**Character:** a broad, engineered American grotesk with excellent tabular numerals — it reads as signage and specification rather than as fashion, which is exactly the register this category speaks in.

### Hierarchy
- **Display** (`wdth 112`, weight **300**, `clamp(2.5rem, 6.5vw, 5.75rem)`, tracking `-0.02em`): the hero statement only. Set light, never bold.
- **Headline** (`wdth 108`, weight 300, `clamp(1.9rem, 4vw, 3.4rem)`): section openers.
- **Subhead** (weight 400, `clamp(1.35rem, 2.4vw, 1.9rem)`): the one step between headline and title — discipline headings, which must out-rank a title without reading as a section opener.
- **Mark** (weight 300, `wdth 112`, `clamp(1.6rem, 3vw, 2.2rem)`): the footer wordmark only. It sits one step above Subhead deliberately — it is the brand signature closing the page, not a section heading, and collapsing the two flattens that hierarchy.
- **Title** (weight 500, `clamp(1.15rem, 1.8vw, 1.45rem)`): item-level headings.
- **Lede** (weight 400, `clamp(1.05rem, 1.5vw, 1.3rem)`, measure ≤ 58ch): one intro paragraph per section.
- **Body** (weight 400, `1rem`, line-height 1.65, measure 62–68ch).
- **Label** (`wdth 100`, weight 500, `0.75rem`, tracking `0.14em`, uppercase): eyebrows, table headers, meta. Always preceded by a short azure rule when used as a section eyebrow.
- **Data** (weight 400, `font-variant-numeric: tabular-nums`): years, counts, spec figures. Tabular figures are mandatory anywhere numerals column up.

### Named Rules
**The Light-Display Rule.** Display and headline sizes are set at weight 300. Emphasis comes from size and space. A bold headline at display size is a category default this system rejects.

**The One-Family Rule.** No second typeface is added for "technical" or "personality" reasons. If something needs to read as data, use tabular numerals and tracking, not a monospace costume.

## Layout

A 12-column grid inside a 1240px container with 24px gutters (16px under 640px). Sections are separated by vertical space and hairline rules, not by boxes: the system has no card component and does not draw containers around content.

Page rhythm alternates deliberately — a dark hero, then a long light passage of alternating white and tinted bands, then a dark footer. Content sits on the grid asymmetrically (a section label in a narrow left column, content in a wide right column) rather than centred, which is what gives the page its engineered feel. Section headings carry more space above than below.

Editorial lists — credits, capability, crew — are **rows with hairline separators**, aligned to the grid and reading left-to-right as label → subject → detail → year. On narrow screens rows restack to a single column and keep their hairlines; nothing becomes a card.

## Elevation & Depth

The system is flat by intention. There is no shadow ramp, no elevation scale, and no raised surfaces. Depth is expressed as **tonal layering** — white against tinted navy against deep navy — and as hairline rules that define planes. The one permitted shadow is a soft ambient shadow beneath the sticky masthead once the page has scrolled, so the header separates from content in motion; it is a functional cue, not decoration.

### Named Rules
**The No-Shadow Rule.** If a surface needs separating, change its tone or draw a hairline. Do not lift it.

## Shapes

Square. Corner radius is `0` throughout — buttons, inputs, image slots, and tables. The only curved elements permitted are genuinely circular: the focus ring's dot marker and any circular avatar. Rules are `1px` hairlines at 10–14% ink on light, 12–16% white on dark. A 3px azure rule marks section eyebrows and the active nav item.

## Components

### Buttons
- **Shape:** square, no radius, generous horizontal padding.
- **Primary:** azure fill, ink-deep text, weight 500, tracking `0.06em`. On hover it inverts to paper fill with ink text. No shadow, no lift, no scale.
- **Ghost:** transparent with a 1px ink hairline; hover fills ink and reverses the text. On dark grounds the hairline and text are white.

### Navigation
- **Style:** a light masthead — white, with the logo at its natural white background so no plate or chip is needed behind it. Links are label-scale uppercase, tracked, in slate; the active page is ink with a 3px azure rule beneath it. A single primary button sits at the right end.
- **Mobile:** collapses below 860px to a full-height ink panel with large, generously-spaced links.

### Row List (signature component)
- The system's primary content structure, replacing all card grids. A grid row with a hairline top border: a tracked label or index in a narrow column, the subject as a title, supporting detail, and a right-aligned year or tag in tabular numerals. Rows have no fill at rest; hover moves the row 4px right and turns the index azure.

### Media Slot
- A 16:9 square-cornered area for photography and video stills, filled with a flat paper-tint-2 ground, a hairline, and a centred label. Until NPG supplies real media it displays a plainly-worded pending state — it is never dressed up to imply an image exists.

### Inputs / Fields
- **Style:** square, white ground, 1px ink hairline, generous padding; label above in label-scale uppercase tracked slate.
- **Focus:** the hairline becomes 2px azure and a 3px azure ring sits outside it.
- **Error:** hairline and helper text switch to `--state-error`.
- **Success:** the form status line switches to `--state-success`.

## Do's and Don'ts

### Do:
- **Do** keep azure as a marker — a rule, an underline, a small square, one button (see The Marker Rule).
- **Do** set display and headline type at weight 300; let scale and space carry emphasis.
- **Do** build light surfaces from navy tinted to 2–8%, never a neutral grey.
- **Do** present services, credits, and crew as hairline-separated rows on the grid.
- **Do** use tabular numerals wherever figures column up.
- **Do** place the logo on white so it needs no plate, chip, or background patch behind it.
- **Do** lead with the mission — NPG takes on the technical and production challenges so up-and-coming artists can put out quality content — and only then with the two disciplines. Mention touring dry hire and live event AV exactly once, as on-request.
- **Do** keep "bespoke setup, built with the artist, so it feels personal to them" visible as the core differentiator; it is the claim a packaged competitor cannot copy.

### Don't:
- **Don't** reintroduce the retired road-case world: safety orange, stencil display type, monospace labels, handwriting script, hazard stripes, laminate chips, paper texture, corner armour, or rivets. All of it was removed deliberately.
- **Don't** add a second or third typeface. Width, weight, case, and tracking cover every need (The One-Family Rule).
- **Don't** use `#00A0FF` for small text on a light ground — it fails contrast at 2.8:1. Use `--azure-deep`.
- **Don't** wrap content in cards, panels, or bordered boxes, and don't add box-shadows to create hierarchy.
- **Don't** fill the hero with texture — no tiled grid or line-field overlay, no gradient wash, no pattern. It is a plain ink field reserved for a real photograph; substituting decoration for the missing image is the failure this rule exists to prevent.
- **Don't** let the page run dark beyond the hero and footer (The Two-Anchor Rule).
- **Don't** frame NPG as full-service or one-stop, and don't mention the crew's freelance AVL work — both were retired at the client's instruction.
- **Don't** call the audience "small artists" in public copy (it's the internal shorthand); write "up-and-coming" or "artists who are still building". And don't present the offer as fixed packages or tiers — the setup is bespoke per artist.
- **Don't** support the "why quality content matters" argument with invented statistics, platform/algorithm claims, or figures about what labels and promoters do. Reasoning only, unless the client supplies a real source.
- **Don't** fabricate client names, testimonials, press, or metrics beyond Silver Chamber Ensemble, Manchester Troubadors, Gone Tomorrow, and the Tiny Desk–style grassroots origin story confirmed in PRODUCT.md. Don't invent crew names — role titles only until supplied.
