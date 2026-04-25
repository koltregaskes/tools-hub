# StackScout Design Direction

## Product identity

**Name:** StackScout  
**Purpose:** Public destination for curated builder tools, services, APIs, MCPs, and CLIs  
**Tone:** Editorial, sharp, credible, product-intelligence-first

This should feel closer to a scout desk or field report than a generic app gallery.

## Visual direction

StackScout should feel related to the wider public hub family without becoming visually interchangeable.

### Chosen aesthetic

- dark editorial shell
- acid green / ice blue / ember accents
- high-contrast newsroom typography with a field-report edge
- restrained motion
- strong hierarchy, not dense widget clutter
- a launch-surface tone closer to a signal desk than a directory grid

### Fonts

- display: `Fraunces`
- body/UI: `Archivo`
- metadata: `IBM Plex Mono`

### Color system

```css
:root {
  --bg: #07100b;
  --bg-deep: #030705;
  --text: #f4f6ef;
  --muted: rgba(223, 232, 226, 0.72);
  --acid: #9eff79;
  --ice: #8ce7ff;
  --ember: #ff9967;
  --violet: #c7b6ff;
}
```

### Current shell notes

- the top chrome should read like an issue header, not a SaaS navbar
- `Home` should feel like an editorial front page with a lead signal and quick routes into the catalog
- `Catalog` should feel like a scout desk with shareable filter state, not a plain card dump
- tool pages should feel like public dossiers with verdict, metadata, links, and recent movement

## Layout principles

- `Home` should open with a strong thesis, not a dump of cards.
- `Catalog` should be instantly searchable and filterable.
- `Tool Detail` pages should feel like dossiers.
- `Updates` should read like a public stream, not a fake dashboard.
- `Method` should explain the badge system and freshness discipline clearly.

## Editorial rules

- Use badges, not fake decimal scores.
- Show dates visibly.
- Prefer official sources.
- Keep the lab subset clearly labelled.
- Avoid pretending the site is “live telemetry.”

## Public/private split

- StackScout is public-safe.
- The private tools hub is the publishing console and operator surface.
- Shared source contracts can overlap.
- Private notes, blockers, manager messages, local paths, and internal review evidence must never leak into the public site.
