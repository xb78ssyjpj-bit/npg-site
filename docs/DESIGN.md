---
name: Nuages Production Group
description: A cyanotype schematic — technical drawing rendered as a photographic blue print, suspended in a drifting cloud field
colors:
  azure: "#00A0FF"
  azure-pale: "#7FCFFF"
  azure-deep: "#0E4E7A"
  ink: "#071522"
  ink-abyss: "#03080F"
  prussian: "#0A2942"
  prussian-raised: "#10344F"
  paper: "#EAF4FB"
  paper-plate: "#DCE9F2"
  paper-dim: "#A8C4D8"
  slate: "#8BA6BD"
  state-error: "#FF6B5A"
  state-success: "#5BD6A0"
typography:
  display:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.75rem, 7vw, 5.5rem)"
    fontWeight: 700
    fontStretch: "125%"
    lineHeight: 0.96
    letterSpacing: "-0.03em"
  headline:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.75rem, 3.6vw, 3rem)"
    fontWeight: 600
    fontStretch: "112%"
    lineHeight: 1.04
    letterSpacing: "-0.02em"
  subhead:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.3rem, 2.4vw, 1.9rem)"
    fontWeight: 600
    fontStretch: "108%"
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  displaySmall:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(2.25rem, 5.5vw, 4.25rem)"
    fontWeight: 700
    fontStretch: "125%"
    lineHeight: 0.98
    letterSpacing: "-0.03em"
  creditName:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.15rem, 2vw, 1.5rem)"
    fontWeight: 600
    fontStretch: "104%"
    lineHeight: 1.15
    letterSpacing: "-0.015em"
  markLarge:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.6rem, 3vw, 2.2rem)"
    fontWeight: 700
    fontStretch: "128%"
    letterSpacing: "0.02em"
  title:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.6vw, 1.3rem)"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.6
  lede:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "clamp(1.05rem, 1.4vw, 1.25rem)"
    fontWeight: 400
    lineHeight: 1.5
  annotation:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.7rem"
    fontWeight: 500
    fontStretch: "88%"
    letterSpacing: "0.16em"
  mark:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "1.5rem"
    fontWeight: 700
    fontStretch: "128%"
    letterSpacing: "0.02em"
  control:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 600
    fontStretch: "96%"
    letterSpacing: "0.14em"
  detail:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.55
  caption:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.55
  micro:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.625rem"
    fontWeight: 600
    fontStretch: "88%"
    letterSpacing: "0.16em"
  wordmark:
    fontFamily: "Anybody, Archivo, Helvetica Neue, Arial, sans-serif"
    fontSize: "0.5rem"
    fontWeight: 500
    fontStretch: "88%"
    letterSpacing: "0.32em"
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
---

# Design System: Nuages Production Group

## Overview

**Creative North Star: "The Cyanotype Schematic"**

The world is the **cyanotype** — the photographic blue print. It is the one material that belongs to both halves of what NPG is: it is a *photographic process* (they make images) and it is the ancestor of the *engineering blueprint* (they solve technical problems). Its colour is, by chemistry, the brand's azure. Its characteristic chemical mottle is the same blue noise texture already sitting inside the logo. Nothing here is borrowed decoration; every part of it is already true about the subject.

So the site is a technical drawing, exposed as a blue print, suspended in a drifting field of cloud — *nuages*. Pale linework and annotation float on deep Prussian ink.

The **audience is not technical**. That constrains the whole system: the world may be drawn from engineering, but nothing on the page may require engineering literacy to read. An earlier signal-path diagram failed exactly this test and was cut.

This **replaces** the previous "Technical Register" world — a light page, navy anchors, Archivo Light, hairline rows. That direction was retired at the client's instruction: it had no memorable idea, its row lists left half the page empty, and its light-weight display type read as a category default rather than as NPG.

Key characteristics:
- **Dark-dominant**, because a cyanotype *is* dark. One pale plate section provides the counter-beat.
- **Showing beats explaining** — the comparison carries the argument, so the page needs no process diagram and no wall of prose.
- **Drifting noise is the ground**, not an overlay effect: an authored, animated field, frozen under `prefers-reduced-motion`.
- **One typeface** across display, body, and annotation, using a real width axis.
- Linework, nodes, traces, and annotation instead of cards.

## Colors

Strategy: **Committed.** Blue owns the surface. This is not neutrals-plus-an-accent — the ground itself is the brand colour, darkened, and the azure is what light does inside it.

The scene forces dark: the subject is rooms, stages, and load-ins, and the page's central object is a luminous signal tracing through a cloud. A pale ground would make the trace invisible and the concept mute.

### Ground
- **Ink Abyss** (`#03080F`) — the deepest step. Page ends and the field's far depth.
- **Ink** (`#071522`) — the primary ground.
- **Prussian** (`#0A2942`) — the cloud body; the mid-depth the noise field resolves toward.
- **Prussian Raised** (`#10344F`) — inputs, an active node's fill, a raised annotation panel.

### Signal
- **Azure** (`#00A0FF`) — the trace, the live pulse, the primary button, the focus ring. On dark it may run as a *line and a field*; this world's azure is light, and light is allowed to be bright.
- **Azure Pale** (`#7FCFFF`) — azure as text on dark grounds, and the trace's hot core.
- **Azure Deep** (`#0E4E7A`) — the dormant trace, unlit branches, hairlines on dark.

### Print
- **Paper** (`#EAF4FB`) — primary text on dark. Never pure white; a cyanotype's highlight is paper, and paper is slightly blue here.
- **Paper Plate** (`#DCE9F2`) — the ground of the one pale section.
- **Paper Dim** (`#A8C4D8`) — secondary text on dark (≈9.5:1 on Ink).
- **Slate** (`#8BA6BD`) — annotation and tertiary text on dark. Its value is set by The Ceiling Rule below, not by taste: it is the dimmest tone that still clears 4.5:1 against the brightest patch the cloud field can produce (4.66:1).

### Named rules
**The Exposure Rule.** Azure is *light in a dark room*. It may glow, bloom, and diffuse — that is what the material does — but it never becomes a flat filled panel with text on top. If azure is acting as a background swatch rather than as light, the rule is broken.

**The One-Plate Rule.** Exactly one section in the page runs pale (`paper-plate`), and it is the credit list, set as a contact sheet. A second pale section breaks the print.

**The Ceiling Rule.** The cloud field's palette tops out at `#0F3A5C`, and every text tone is chosen against *that* value rather than against the flat `--ink` ground. The field drifts, so any text can end up over its brightest patch; designing against the flat ground is how a moving background quietly fails contrast. Raising the ceiling means re-deriving `--slate`.

**The Blue-Neutral Rule.** There are no greys and no pure blacks or whites anywhere. Every neutral is blue-shifted. `#FFFFFF`, `#000000`, and any `#RRGGBB` with equal channels are out.

## Typography

**Everything is Anybody** (variable: `wdth` 50–150, `wght` 100–900), fallbacks `Archivo, Helvetica Neue, Arial, sans-serif`. One family is the cohesion mechanism — the previous build's incoherence came not from font *count* but from a single weight doing every job. Here the width axis does the work a second and third face would otherwise do: expanded and heavy for display, condensed and tracked for drawing-office annotation, normal for reading.

**Character:** an engineered, technical grotesk with an unusually wide width range — it reads as signage, instrument panel, and drawing-office lettering rather than as a UI default.

### Hierarchy
- **Display** (`wdth 125`, weight 700, `clamp(2.75rem, 7vw, 5.5rem)`, tracking `-0.03em`): the hero line only. Set **wide and heavy** — the field behind it is busy, and light type would dissolve into the cloud. This deliberately inverts the retired system's Light-Display rule.
- **Headline** (`wdth 112`, weight 600): section openers.
- **Subhead** (`wdth 108`, weight 600, `clamp(1.3rem, 2.4vw, 1.9rem)`): the panel's claim line — the one step between headline and title.
- **Display Small** (`clamp(2.25rem, 5.5vw, 4.25rem)`): the closing statement, one step under the hero so the page ends firmly without competing with its opening.
- **Title** (`wdth 100`, weight 600): node names and item headings. **Credit Name** (`wdth 104`, `clamp(1.15rem, 2vw, 1.5rem)`) is its counterpart on the pale plate, set larger because the credits are the section's whole content.
- **Mark Large** (`wdth 128`, weight 700, `clamp(1.6rem, 3vw, 2.2rem)`): the footer sign-off only. It sits a step above the masthead Mark deliberately — it closes the page rather than labelling it.
- **Lede** (weight 400, measure ≤ 56ch): one intro paragraph per section.
- **Body** (weight 400, line-height 1.6, measure 62–70ch).
- **Annotation** (`wdth 88`, weight 500, `0.7rem`, tracking `0.16em`, uppercase): node indices, channel labels, schematic callouts, meta. This is the drawing-office register and it is the *only* place tracked uppercase appears.
- **Mark** (`wdth 128`, weight 700, `1.5rem`): the redrawn NPG monogram in the masthead and footer. The **Wordmark** beneath it (`wdth 88`, weight 500, `0.5rem`, tracking `0.32em`) is the only text permitted below annotation scale, and only as part of the lockup.
- **Control** (`wdth 96`, weight 600, `0.75rem`, tracking `0.14em`, uppercase): button and nav labels.
- **Detail** (`0.9375rem`) / **Caption** (`0.875rem`): supporting text below body scale — contact values, branch notes, figure captions.
- **Micro** (`wdth 88`, weight 600, `0.625rem`, tracking `0.16em`, uppercase): title-block rows, node indices, status chips. Annotation on a drawing; never prose.
- **Data** (`font-variant-numeric: tabular-nums`): mandatory anywhere figures column up.

### Named rules
**The Heavy-Display Rule.** Display type is wide and heavy. It has to hold its own against a moving field; scale alone will not do it here.

**The One-Family Rule.** No second face is added. A monospace for "technical feel" is specifically refused — the technical register comes from width, tracking, case, and tabular figures, which is how real drawing-office lettering achieves it.

**The Annotation-Scarcity Rule.** Tracked uppercase belongs to the schematic. It is not a generic section eyebrow — a kicker over every section is grammar nobody chose.

## Layout

A 12-column grid in a 1280px container, 24px gutters (16px under 640px). The page's structural device is the **trace**: a continuous 1px azure-deep line that enters at the masthead and runs the full length of the document, moving between columns, passing through nodes, and branching. Sections do not sit in boxes; they hang off the trace.

Scroll pacing runs: **dense luminous hero → the spine, wide and interactive → a hard black comparison band → the pale plate → a quiet close.** Density and value alternate deliberately; a dense passage earns a quiet one.

## The Comparison (signature component)

The page's centrepiece and its whole argument. A split frame showing one scene twice — as a phone at the back of a room renders it, and as it should look — with a draggable handle between them. It replaces an earlier interactive signal-path diagram that was cut for being convoluted for a **non-technical audience**, which is the standing constraint here: the primary visitor is an artist, not an engineer, and any device that needs explaining before it persuades is the wrong device.

- **Rest state:** split at 50%, both tags legible, the difference obvious without interaction.
- **Interaction:** drag anywhere on the frame, not only the handle; a real `<input type="range">` underneath carries keyboard and screen-reader support.
- **Honesty:** until NPG supplies one real pairing, both panels are **drawn**, and the page says so in plain words directly beneath. It is never dressed to imply footage exists.

## Capability list

Five plainly-named things NPG takes on, with one sentence each: live recording, film, live events, touring racks, system design. Hairline rule above each, no fills, no icons, no boxes. Its job is to make the non-content work visible as real capability, which is what carries the "technical partner, content included but not limited to" positioning now that the branching diagram is gone.

## The Cloud Field

An animated **domain-warped** fBm noise field on `<canvas>`, tinted between `ink` and `prussian`. Feeding the noise through itself twice is what makes it billow rather than read as a moving gradient. Drift rate is `0.058` (raised from `0.021` at the client's request) — fast enough to be alive, slow enough not to pull attention off the copy. It is rendered at quarter resolution into an offscreen buffer and scaled up — the softness is the point, and it keeps the cost near zero. Capped at 30fps, paused when off-screen or when the tab is hidden, frozen (one static frame) under `prefers-reduced-motion`.

It is a **material, not a backdrop effect**: it may darken toward the page edges and bloom behind the trace, but it never runs beneath body copy at a density that costs contrast.

## Elevation & Depth

Depth is **atmospheric**, not architectural. Things recede by getting bluer, softer, and lower-contrast — the way a light does in fog. There is no shadow ramp and no card lift.

The one permitted shadow is a broad azure bloom behind a live trace or an active node: large blur, no offset, low alpha. This is the single exception to the general ban on zero-offset halos, and it exists because the world is literally about light diffusing through cloud.

## Shapes

Square. Radius `0` everywhere except genuinely circular things: node dots, the pulse, focus dots. Rules are 1px in `azure-deep` or paper at 12–16% alpha. Corners on the schematic are drawn as right angles with a small chamfer, as a drawing would.

## Components

### Buttons
- Square, generous horizontal padding, annotation-scale tracked uppercase.
- **Primary:** azure fill, `ink-abyss` text, weight 600. Hover raises to `azure-pale` and widens the bloom. No lift, no scale.
- **Ghost:** transparent, 1px `azure-deep` rule, paper text. Hover lifts the rule to azure and the text to `azure-pale`.

### Credit plate (the one pale section)
The credit list, set as a cyanotype contact sheet: `paper-plate` ground, ink linework, entries as rows with hairline separators reading name → discipline → year. This is the section the client explicitly asked to keep. The monogram is **redrawn in type** across the site (client's decision), so it takes any colour and the black master artwork is not used in the build. Should that master ever be placed, this plate is the only ground it is legal on — everywhere else is dark.

### Media slot
16:9, `prussian` ground, 1px `azure-deep` rule, centred annotation-scale label. Where NPG has no media it says so plainly. It is never dressed up to imply an image exists.

### Inputs
Square, `prussian-raised` ground, 1px `azure-deep` rule, paper text. Focus takes the rule to 2px azure plus a 3px azure ring outside it. Error switches rule and helper to `state-error`.

## Do's and Don'ts

### Do
- **Do** let the comparison carry the argument. If a paragraph restates what the visitor can already see, cut the paragraph.
- **Do** keep the five capabilities plainly named — they are the whole "not only content" claim now.
- **Do** set display type wide and heavy so it holds against the field.
- **Do** blue-shift every neutral.
- **Do** name the three non-content capabilities as real work: touring racks and dry hire, live event audio and camera, and system design for others to run.
- **Do** keep "bespoke setup, built with the artist" central; it is the claim a packaged competitor cannot copy.
- **Do** keep tabular numerals wherever figures column up.

### Don't
- **Don't** reintroduce the retired world: light-dominant pages, Archivo Light display, the two-anchor rule, hairline row lists as the primary structure.
- **Don't** reintroduce a process diagram, signal chain, node graph or flowchart as page structure. It was tried and cut: the audience is non-technical and it read as convoluted.
- **Don't** reintroduce the world retired before that: safety orange, stencil type, hazard stripes, road-case metaphors.
- **Don't** add a second typeface, and specifically **don't** add a monospace to signal "technical".
- **Don't** turn azure into a flat filled panel with text on it (The Exposure Rule).
- **Don't** run a second pale section (The One-Plate Rule).
- **Don't** place the black master logo artwork on any dark ground. The site uses the redrawn type monogram; the master is legal only on the pale plate.
- **Don't** use cards, nested containers, or a same-size icon-heading-text grid as page structure.
- **Don't** number sections unless the sequence carries information. The signal path's stages **are** a sequence, so they are numbered; nothing else is.
- **Don't** support the "why this matters" argument with invented statistics, platform or algorithm claims, or figures about what labels and promoters do. Reasoning only, unless the client supplies a real source.
- **Don't** fabricate clients, testimonials, press, or metrics beyond Silver Chamber Ensemble, Manchester Troubadors, Gone Tomorrow, and the Tiny Desk–style grassroots origin confirmed in PRODUCT.md. Don't invent crew names.
- **Don't** call the audience "small artists" in public copy, and don't present the offer as fixed packages or tiers.
