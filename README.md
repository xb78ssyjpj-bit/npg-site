# npg-site

Website for **Nuages Production Group** (NPG) — a Manchester production outfit making
live recordings and content shoots for up-and-coming artists.

## Repo layout

```
docs/      Business + brand reference. Source of truth. Read before building.
legacy/    The first site build, preserved verbatim. Reference only, not maintained.
```

The new site is not started yet — stack undecided.

## Start here

- [`docs/PRODUCT.md`](docs/PRODUCT.md) — mission, audience, positioning, what is and
  isn't in scope, and what must not be invented (pricing, packages, extra clients, stats).
- [`docs/DESIGN.md`](docs/DESIGN.md) — brand palette and the legacy design system.
- [`legacy/`](legacy/) — the old site, running as it did on 2026-07-28.

## Viewing the legacy site

```bash
python3 -m http.server 8080 --directory legacy
```

Then open http://localhost:8080. Serve it over HTTP rather than `file://`.
