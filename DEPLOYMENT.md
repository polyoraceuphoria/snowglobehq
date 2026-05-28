# SnowGlobe Deployment

## GitHub

Recommended repository:

```bash
git remote add origin git@github.com:polyoraceuphoria/snowglobe.git
git branch -M main
git push -u origin main
```

HTTPS alternative:

```bash
git remote add origin https://github.com/polyoraceuphoria/snowglobe.git
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

## Cloudflare Access

Before inviting Snow Angels, create a Cloudflare Access application for:

```txt
snowglobe.snowdigitalgroup.com/*
```

Allow only approved Snow Digital Group users and trusted collaborators.

## Direct Upload Option

If Wrangler is authenticated later:

```bash
npm run build
npx wrangler pages deploy dist --project-name snowglobe
```
