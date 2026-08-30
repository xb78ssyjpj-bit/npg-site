# Prototypes

Working homepage directions. Not the site — these exist to be judged and argued with.

## signal-path

The comparison drag (concept 4) is the centrepiece, wrapped in the Nuages cloud field
(concept 3). The interactive signal path (concept 1) **was built and then cut** — the
client judged it convoluted for a predominantly non-technical clientele. Its content
survives as a plain five-item capability list.

The hero's eye-catcher is an **open decision**; what is there now is a holding
composition.

The visual world is documented in [`../docs/DESIGN.md`](../docs/DESIGN.md) — a cyanotype
schematic, chosen because the cyanotype is simultaneously a photographic process and the
ancestor of the engineering blueprint, and its chemistry is already the brand's azure.

```bash
python3 -m http.server 8081 --directory prototypes/signal-path
```

### What is real and what is placeholder

| Real | Placeholder |
| --- | --- |
| All copy, services and capabilities | The phone side of the hero comparison (simulated) |
| The logo — the actual master artwork, recoloured for a dark ground | — |
| The NPG side of the hero — real footage, song4 @ 141s | — |
| The three named collaborators | Any implied imagery |
| Contact details | — |

The hero comparison runs real footage: a 12-second cut from `song4.mkv` at 141s, the one
sustained shot in that take with the singer centred and no cross-dissolve. The phone side
is that same cut degraded to stand in for a phone recording, and the page says so. A real
phone recording of the same performance replaces it when one exists.

Re-cut with ffmpeg from the 4K masters; the source files are not in the repo.

### Open decisions

- `docs/PRODUCT.md` still leads with the two content disciplines and marks dry hire,
  live event AV and system design as "mention once, don't feature". The build follows the
  client's newer direction (technical partner first, content as one branch), so the doc
  and the build now disagree. **PRODUCT.md needs updating to match.**
- No mobile nav: below 760px the anchor links are hidden and only the mark and the primary
  action remain. Fine for a one-scroll page; a multi-page site needs a real menu.
