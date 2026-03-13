# Deploy FreeAI to Cloudflare Pages (switch from Vercel)

This repo’s website lives in `website/` and uses **Next.js static export** (`output: 'export'` in `website/next.config.js`). That means Cloudflare Pages can serve the generated `website/out/` folder.

## 1) Cloudflare Pages project settings

Create a new **Cloudflare Pages** project connected to this GitHub repo.

**Build configuration**
- **Root directory:** `website`
- **Build command:** `npm run build`
- **Build output directory:** `out`

Notes:
- `npm run build` runs `next build` (static export) and produces `website/out/`.

## 2) Environment variables

If you have any env vars used by the site, set them in Cloudflare Pages → Settings → Environment variables.

(From repo: `website/.env.example` exists; mirror required vars there.)

## 3) Domains / cutover

### Option A: Keep using the current Vercel subdomain *temporarily*
You can validate Cloudflare deployment on its default `*.pages.dev` domain first.

### Option B: Cut over production domain
Point your production domain’s DNS to Cloudflare Pages per Cloudflare’s instructions.

## 4) Verification checklist after first deploy

- Home loads: `/`
- Pricing loads: `/pricing`
- Audit form loads: `/audit-form` (iframe visible)
- Services pages: `/services` and `/services/openclaw`
- Mobile nav opens/closes; Audit Form link goes to `/audit-form`
- `npm run build` passes in CI log

## 5) Decommission Vercel

After Cloudflare is confirmed stable:
- Remove/ignore Vercel project
- Optional: delete `website/.vercel` and `website/vercel.json` if you want to keep the repo clean
