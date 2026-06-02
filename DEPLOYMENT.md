# SnowGlobe Deployment

## GitHub

Recommended repository:

```bash
git remote add origin git@github.com:polyoraceuphoria/snowglobehq.git
git branch -M main
git push -u origin main
```

HTTPS alternative:

```bash
git remote add origin https://github.com/polyoraceuphoria/snowglobehq.git
git branch -M main
git push -u origin main
```

Create the GitHub repository as private before pushing.

## Cloudflare Pages

Recommended settings:

```txt
Project name: snowglobe
Build command: npm run build
Build output directory: dist
Custom domain: snowglobe.snowdigitalgroup.com
```

## GitHub Pages Staging

Temporary public-safe staging is handled by GitHub Actions:

```txt
Workflow: .github/workflows/pages.yml
URL: https://polyoraceuphoria.github.io/snowglobehq/
Build command: VITE_BASE_PATH=/snowglobehq/ npm run build
Output directory: dist
```

In GitHub, set:

```txt
Settings -> Pages -> Build and deployment -> Source: GitHub Actions
```

## Subdomain DNS

After `snowdigitalgroup.com` DNS is managed in Cloudflare, connect:

```txt
snowglobe.snowdigitalgroup.com -> snowglobe Pages project
```

If DNS remains in Squarespace temporarily, add a CNAME for `snowglobe` pointing to the active Pages hostname. Keep the app public-safe until Cloudflare Access is active.

## Cloudflare Access

Before inviting Snow Angels, create a Cloudflare Access application for:

```txt
snowglobe.snowdigitalgroup.com/*
```

Allow only approved Snow Digital Group users and trusted collaborators.

The frontend Snow Angel code gate is only a staging convenience and should not replace Cloudflare Access.

## Direct Upload Option

If Wrangler is authenticated later:

```bash
npm run build
npx wrangler pages deploy dist --project-name snowglobe
```
