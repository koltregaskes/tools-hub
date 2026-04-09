# Tools Hub by Elusion Works

A public-facing tools page for the Elusion Works tool stack, built in the same broad spirit as the Games Hub.

This repo is the GitHub Pages version of the hub, so it stays static and public-safe while the separate local launcher hub remains the machine-side app that actually opens tools on Windows.

## Public vs Private

- This repo is public-facing only.
- Any private launcher or manager console belongs in a separate local-only `local-hub/` workspace.
- Do not commit machine-local launchers, evidence captures, or planning notes here.
- Keep this repo safe for GitHub Pages and public browsing.

## Included Tools

- Canvas Planner
- MJ Calendar
- Signal Stack
- Trailer Creator
- Strudel Studio
- SyncPad

## Structure

- `index.html` - full landing page structure
- `styles.css` - shared visual system and layout
- `app.js` - reveal-motion script
- `assets/` - poster art for each featured tool

## Notes

- This repo does not run local `.cmd` launchers
- It is designed for GitHub Pages and public browsing
- It is now installable as a lightweight PWA for quick access on desktop or Android
- Private tools can be featured here safely as long as the page only exposes repo, docs, or release links
- The visual direction intentionally follows the feel of the Games Hub while staying tools-only
- The hub should feel like a premium launch surface, not a scratchpad

## Future Releases

- Music Video Generator
- Comic Book Generator
- Comic Book Video Generator
- Creative Canvas Editor

## Local-Only Files

- `.autolab/` is used for internal AutoResearch and should remain untracked
- `.env*` files are local-only
- `.local/` and `*.local.md` are for planning notes and are ignored

## Contributor Notes

- Treat this as a showcase surface, not an operations dashboard.
- If a change only helps local management, it belongs in the private hub instead.
- Keep the public/private boundary obvious in both docs and code.
