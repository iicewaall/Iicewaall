import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { applications, highlights, products, projects, quality } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly highlights = highlights;
  protected readonly products = products;
  protected readonly applications = applications;
  protected readonly quality = quality;
  protected readonly projects = projects;


  // Hero slider: advances every 5 s, pauses on hover/focus and for reduced motion
  protected readonly slides = [
    { src: 'slide-4', alt: 'Research and quality reference: aquaculture feed trials at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-5', alt: 'Research and quality reference: feed processing technology at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-6', alt: 'Research and quality reference: fish growth and feed performance tanks at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-7', alt: 'Research and quality reference: Nofima marine ingredients expertise, Norway (photo: Nofima)' },
    { src: 'slide-8', alt: 'Modern industrial and office building' },
    { src: 'slide-9', alt: 'Scientists working in a modern laboratory' },
    { src: 'slide-10', alt: 'Industrial building with trees' },
    { src: 'slide-11', alt: 'Single-storey commercial building entrance' },
    { src: 'slide-12', alt: 'Glass-roofed atrium of a modern office building' },
    { src: 'slide-13', alt: 'Modern office building in snow' },
    { src: 'slide-14', alt: 'Aerial view of a glass-domed building with green roofs' },
  ];
  protected readonly slide = signal(0);

  // Product page: /product/<slug>/ shows one product instead of the home page.
  // Each such folder holds a copy of index.html (see scripts/product-pages.mjs).
  protected readonly page = (() => {
    const m = location.pathname.match(/\/product\/([a-z-]+)\/?$/);
    return m ? products.find((p) => p.slug === m[1]) ?? null : null;
  })();
  protected details(p: (typeof products)[number]): { title: string; items: string[][] }[] { return ('details' in p && p.details) || []; }
  protected paused = false;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    if (this.page) { document.title = `${this.page.name} – IICE WAALL`; window.scrollTo(0, 0); return; }
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.timer = setInterval(() => { if (!this.paused && !document.hidden) this.go(this.slide() + 1); }, 5000);
    }
  }

  ngOnDestroy() { clearInterval(this.timer); }

  go(i: number) { this.slide.set((i + this.slides.length) % this.slides.length); }


}
