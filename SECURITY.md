# SnowGlobe Security

SnowGlobe V1 is a static internal portal. It is intended to be protected outside the app by Cloudflare Access.

## Required Before Sharing

- Protect `snowglobe.snowdigitalgroup.com/*` with Cloudflare Access.
- Invite only approved Snow Angels and trusted collaborators.
- Keep the GitHub repository private.
- Confirm the production build contains no secrets or real private family data.

## Do Not Commit

- API keys
- `.env` files
- Access tokens
- Passwords
- Private addresses
- Real phone numbers
- Pediatrician details
- Schedules
- Private child or family documents
- Customer data

## Frontend Environment Variables

Do not put secrets in frontend environment variables. Vite exposes client-side variables after bundling when they are intended for browser use.

## V1 Auth Boundary

SnowGlobe does not implement app-level login in V1. The visible internal-use notice is informational only. Cloudflare Access is the security gate.

## Emergency Content Boundary

Emergency guidance in SnowGlobe is operational. It must not delay urgent care. Immediate danger should route to emergency services first.
