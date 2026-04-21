# StackScout

`tools-hub` builds **StackScout**, the public-facing tools destination for curated builder tools, services, APIs, MCPs, and CLIs.

This repo remains the GitHub Pages implementation base, but the visible product is no longer a simple internal "Tools Hub" brochure. The private operational console stays separate in `W:\Repos\_local\surfaces\tools-hub-local`.

## Public vs private

- This repo is public-facing only.
- The local launcher, manager inbox, review evidence, session state, and leak-check operations belong in `tools-hub-local`.
- Public content must stay safe for GitHub Pages and public browsing.
- Do not rely on `.gitignore` alone to protect private data. Public output is generated from an allowlisted shared source layer.

## Shared source layer

StackScout uses a shared source layer inside this repo:

- `content/stackscout/site-source.json`
- `content/stackscout/tools-source.json`
- `content/stackscout/updates-source.json`

These source files drive:

- public manifests in `data/`
- generated static pages across the public site
- a private preview export written to `W:\Repos\_local\surfaces\tools-hub-local\data\stackscout-publishing.json`

## Build

```bash
npm run build:site
```

This regenerates:

- `index.html`
- `catalog/`
- `categories/`
- `updates/`
- `radar/`
- `collections/`
- `method/`
- `tools/<slug>/`
- `data/*.json`
- `sitemap.xml`

## Checks

```bash
npm run check
```

## Refresh

```bash
npm run refresh:site
```

This runs the site build, runs checks, and writes private refresh status to `W:\Repos\_local\surfaces\tools-hub-local\data\stackscout-refresh-status.json`.

For unattended Windows refreshes without visible terminal focus theft, use the local-only launcher at `W:\Repos\_My Tools\LOCAL-ONLY\stackscout-refresh\run-stackscout-refresh.cmd`.

## Site structure

- `Home`
- `Catalog`
- `Tool Detail`
- `Categories`
- `Updates`
- `Radar`
- `Collections`
- `Method`

## Notes

- StackScout is curated ecosystem first.
- Our own tools are a clearly labelled `StackScout Lab` subset, not the whole point of the site.
- Public verdicts use editorial badges, not fake numeric scoring.
- Update items should prefer official release notes, changelogs, docs, blogs, and first-party repositories.

## Local-only and ignored

- `.autolab/` is internal AutoResearch support and remains untracked.
- `.env*` files are local-only except `.env.example`.
- `.local/` and `*.local.md` are working notes and remain ignored.
