# SnowGlobe

SnowGlobe is the private internal HQ for Snow Digital Group Snow Angels.

It is a static Vite + React + TypeScript app designed as an API-docs-style operating portal for internal standards, playbooks, resources, status, and changelog notes.

## Local Development

```bash
npm install
npm run dev
```

## Validation And Build

```bash
npm run validate
npm run build
npm run preview
```

## Deployment

Recommended Cloudflare Pages settings:

- Project name: `snowglobe`
- Build command: `npm run build`
- Output directory: `dist`
- Custom domain: `snowglobe.snowdigitalgroup.com`

Staging:

- GitHub Pages URL: `https://polyoraceuphoria.github.io/snowglobehq/`
- Workflow: `.github/workflows/pages.yml`
- CI/CD notes: `docs/CI_CD_PIPELINE.md`

## Access Control

SnowGlobe includes a soft staging code gate for public-safe development previews. This gate is only for casual staging access and is not a security boundary because static frontend code is visible to the browser.

Protect the full subdomain with Cloudflare Access before inviting approved Snow Angels or adding real internal data.

Recommended Access application:

- Application domain: `snowglobe.snowdigitalgroup.com`
- Path: `/*`
- Policy: allow approved Snow Digital Group users only

Current staging code:

- Snow Angel access code: `welovesnow999`

## Content Editing

Primary static content lives in:

```txt
src/content/site.json
```

Run `npm run validate` after editing content. The validator checks required page fields, emergency language, changelog dates, and prohibited public/private claims.

## Safety Notes

Do not commit secrets, private family data, addresses, phone numbers, pediatrician details, schedules, private documents, or production credentials.
