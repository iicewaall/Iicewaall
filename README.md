# IICE WAALL – Premium Marine Proteins

The IICE WAALL website, built with Angular 20 in `angular/`.

- Text and products: `angular/src/app/data.ts`. Set `WHATSAPP` there to turn on the quote form.
- Page layout: `angular/src/app/app.html`. Styles: `angular/src/styles.css`.
- Images: `angular/public/assets/`

## Run locally

```bash
cd angular && npm install && npm start    # http://localhost:4200
```

## Deploy

`.github/workflows/deploy.yml` builds the site on every push to `main` and publishes it to GitHub Pages.
One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
