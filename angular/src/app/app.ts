import { Component, OnDestroy, OnInit, signal } from '@angular/core';
import { applications, highlights, markets, products, projects, quality } from './data';
import { DEFAULT_LANG, Lang, LANGS, T } from './i18n';

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
  protected readonly markets = markets;

  // Language: Danish by default; the visitor's choice is remembered in this browser
  protected readonly langs = LANGS;
  protected readonly lang = signal<Lang>(App.savedLang());
  private static savedLang(): Lang {
    try { const v = localStorage.getItem('lang'); if (LANGS.some((l) => l.code === v)) return v as Lang; } catch {}
    return DEFAULT_LANG;
  }
  protected t(s?: string): string {
    const l = this.lang();
    if (!s) return '';
    if (l === 'en') return s;
    const r = T[s];
    return r ? r[l === 'da' ? 0 : 1] : s;
  }
  protected setLang(l: Lang) {
    this.lang.set(l);
    try { localStorage.setItem('lang', l); } catch {}
    this.applyLang();
  }
  private applyLang() {
    document.documentElement.lang = LANGS.find((x) => x.code === this.lang())!.html;
    if (this.page) document.title = `${this.t(this.page.name)} – IICE WAALL`;
  }


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
    this.applyLang();
    if (this.page) { window.scrollTo(0, 0); return; }
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.timer = setInterval(() => { if (!this.paused && !document.hidden) this.go(this.slide() + 1); }, 5000);
    }
  }

  ngOnDestroy() { clearInterval(this.timer); }

  go(i: number) { this.slide.set((i + this.slides.length) % this.slides.length); }


}
