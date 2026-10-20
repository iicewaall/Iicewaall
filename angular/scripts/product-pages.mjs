// Gives every product its own URL (/product/<slug>/) on GitHub Pages by copying
// the built index.html into a folder per product. The app reads the slug from the URL.
import { copyFileSync, mkdirSync, readFileSync } from "node:fs";

const data = readFileSync(new URL("../src/app/data.ts", import.meta.url), "utf8");
const slugs = [...data.matchAll(/slug: "([a-z-]+)"/g)].map((m) => m[1]);
const dist = new URL("../dist/", import.meta.url);

for (const slug of slugs) {
  const dir = new URL(`product/${slug}/`, dist);
  mkdirSync(dir, { recursive: true });
  copyFileSync(new URL("index.html", dist), new URL("index.html", dir));
}
console.log(`product pages: ${slugs.join(", ")}`);
