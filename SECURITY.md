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

## Staging Code Gate

SnowGlobe includes a simple Snow Angel code gate for staging previews. The current staging code is `welovesnow999`.

This is not real authentication. Static frontend code can be inspected by users and must not protect secrets, private family data, customer data, care details, or production-only documents.

## V1 Auth Boundary

The local code gate is informational and useful for casual staging. Cloudflare Access is still the required production security gate.

## Emergency Content Boundary

Emergency guidance in SnowGlobe is operational. It must not delay urgent care. Immediate danger should route to emergency services first.
