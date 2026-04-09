# Tools Hub Agent Guide

## Purpose

`tools-hub` is the public-facing showcase repo for the tool slate.

It is not the private launcher or manager console.

## What Belongs Here

- public-safe copy
- showcase layout and styling
- repo links, release links, and docs links
- static assets and metadata suitable for GitHub Pages

## What Must Stay Out

- local launchers
- machine-local evidence paths
- internal planning notes
- private ops data
- anything that only makes sense inside a local manager hub

## Working Rules

- Preserve the public/private split.
- Prefer small, reviewable changes.
- Update public docs when public-facing behavior changes.

## Safety Checks

- Confirm `.gitignore` still excludes local-only hub and note files.
- Do not add secrets or `.env` values.
- Treat the repo as safe for public browsing and GitHub Pages.
