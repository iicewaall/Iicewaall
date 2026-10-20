import { Component, HostListener, OnDestroy, OnInit, signal } from '@angular/core';
import { applications, highlights, nav, products, projects, quality } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App implements OnInit, OnDestroy {
  protected readonly nav = nav;
  protected readonly highlights = highlights;
  protected readonly products = products;
  protected readonly applications = applications;
  protected readonly quality = quality;
  protected readonly projects = projects;

  protected readonly menuOpen = signal(false);
  protected readonly active = signal(nav[0].href);

  // Hero slider: advances every 5 s, pauses on hover/focus and for reduced motion
  protected readonly slides = [
    { src: 'slide-4', alt: 'Research and quality reference: aquaculture feed trials at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-5', alt: 'Research and quality reference: feed processing technology at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-6', alt: 'Research and quality reference: fish growth and feed performance tanks at Nofima, Norway (photo: Nofima)' },
    { src: 'slide-7', alt: 'Research and quality reference: Nofima marine ingredients expertise, Norway (photo: Nofima)' },
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

  // Highlight the nav link of the section on screen
  @HostListener('window:scroll')
  onScroll() {
    if (this.page) return;
    let cur = nav[0].href;
    for (const { href } of nav) {
      const id = href.split('#')[1];
      const el = id && document.getElementById(id);
      if (el && el.getBoundingClientRect().top <= 120) cur = href;
    }
    this.active.set(cur);
  }

}
