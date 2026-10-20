# IICE WAALL – Premium Marine Proteins

The IICE WAALL website, built with Next.js 15 (React) as a static site in `nextjs/`.

- Text and products: `nextjs/lib/data.ts`. Set `WHATSAPP` there to turn on the quote form.
- Images: `nextjs/public/assets/`

## Run locally

```bash
cd nextjs && npm install && npm run dev    # http://localhost:3000
```

## Deploy

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes it to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
