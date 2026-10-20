# IICE WAALL – Premium Marine Proteins

The IICE WAALL website, built twice from the same content:

| Folder | Framework | Live at |
|---|---|---|
| `nextjs/` | Next.js 15 (React, static export) | `/` (main site) |
| `angular/` | Angular 20 | `/angular/` |

Images live in `nextjs/public/assets/`; the Angular build copies them from there.
Text and products are in `nextjs/lib/data.ts` and `angular/src/app/data.ts`. Keep the two files in step.
Set `WHATSAPP` in both files to turn on the quote form.

## Run locally

```bash
cd nextjs && npm install && npm run dev      # http://localhost:3000
cd angular && npm install && npm start       # http://localhost:4200
```

## Deploy

`.github/workflows/deploy.yml` builds both sites on every push to `main` and publishes them to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
