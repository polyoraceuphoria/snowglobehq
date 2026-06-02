# SnowGlobeHQ - CI/CD Pipeline

This repository is the private/internal SnowGlobeHQ portal for Snow Digital Group Snow Angels.

## Purpose

SnowGlobeHQ runs the work:

- Internal API-docs-style HQ.
- Snow Angel standards.
- Operating playbooks.
- Handoffs, status, changelog, and future job machines.

It should iterate faster than the public Snow Digital marketing site, but remain public-safe until Cloudflare Access protects the final subdomain.

## GitHub Actions

### CI

Workflow:

- `.github/workflows/ci.yml`

Runs on:

- Pull requests.
- Pushes to `main`.
- Manual dispatch.

Checks:

- `npm ci`
- `npm run validate`
- `npm run build`
- Confirms core static artifacts exist.

### GitHub Pages Staging

Workflow:

- `.github/workflows/pages.yml`

Runs on:

- Pushes to `main`.
- Manual dispatch.

Builds with:

```bash
VITE_BASE_PATH=/snowglobehq/ npm run build
```

Publishes:

```txt
https://polyoraceuphoria.github.io/snowglobehq/
```

The workflow copies `dist/index.html` to `dist/404.html` so API-docs-style routes can refresh without hard 404s.

## Cloudflare Production Path

Recommended final setup:

```txt
Project: snowglobe
Repository: polyoraceuphoria/snowglobehq
Production branch: main
Build command: npm run build
Build output directory: dist
Root directory: /
Custom domain: snowglobe.snowdigitalgroup.com
Access: Cloudflare Access required
```

## Access Model

Current staging:

- Soft Snow Angel code gate: `welovesnow999`
- Public-safe content only.
- No secrets or real private data.

Final protected HQ:

- Cloudflare Access protects `snowglobe.snowdigitalgroup.com/*`.
- Approved Snow Angels only.
- The frontend code gate remains a UX layer, not a security boundary.

## Release Cadence

Use this cadence:

- SnowGlobeHQ: fast, internal, iterative, operational.
- Snow Digital public site: slower, public, polished, trust-first.

Do not place Upwork-private notes, family/private data, credentials, or customer files in this static frontend repo.
