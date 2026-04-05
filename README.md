# Tools Hub

A public-facing tools page built in the same broad spirit as the Games Hub, but focused entirely on the tool stack.

This repo is the GitHub Pages version of the hub, so it stays static and public-safe while the separate local launcher hub remains the machine-side app that actually opens tools on Windows.

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
