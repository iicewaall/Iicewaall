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
  private static readonly TITLE = 'IICE WAALL – Premium Marine Proteins from Nordic Waters';
  private static readonly DESC = 'IICE WAALL premium marine proteins: Antarctic krill, salmon, tuna, herring and anchovy protein and marine collagen peptides from pure Nordic waters, packed in 50 kg drums.';
  private applyLang() {
    document.documentElement.lang = LANGS.find((x) => x.code === this.lang())!.html;
    document.title = this.page ? `${this.t(this.page.name)} – IICE WAALL` : this.t(App.TITLE);
    document.querySelector('meta[name="description"]')?.setAttribute('content', this.t(App.DESC));
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
  // Bulk offers: price per kg × tons × 1,000 kg, then a fixed discount
  protected readonly offers = [
    { tons: 10, off: 1000, title: 'Special offer: $1,000 off on orders of 10 tons or more', drums: '(200 drums of 50 kg)' },
    { tons: 15, off: 1500, title: 'Special offer: $1,500 off on orders of 15 tons or more', drums: '(300 drums of 50 kg)' },
  ];
  protected usd(n: number): string { return '$ ' + n.toLocaleString('en-US', { maximumFractionDigits: 0 }); }
  protected tonsPrice(p: (typeof products)[number], tons: number): number { return Math.round(parseFloat(p.price) * tons * 1000); }
  // Offer countdown: 45 days from launch, ends 5 Dec 2026 at midnight Copenhagen time; the box hides after that
  private static readonly OFFER_END = Date.parse('2026-12-05T23:59:59+01:00');
  protected readonly now = signal(Date.now());
  protected offerLeft(): { d: number; h: number; m: number; s: number } | null {
    const ms = App.OFFER_END - this.now();
    if (ms <= 0) return null;
    const t = Math.floor(ms / 1000);
    return { d: Math.floor(t / 86400), h: Math.floor(t / 3600) % 24, m: Math.floor(t / 60) % 60, s: t % 60 };
  }
  protected pad(n: number): string { return n.toString().padStart(2, '0'); }
  protected details(p: (typeof products)[number]): { title: string; items: string[][] }[] { return ('details' in p && p.details) || []; }
  protected paused = false;
  private timer?: ReturnType<typeof setInterval>;

  ngOnInit() {
    this.applyLang();
    if (this.page) { window.scrollTo(0, 0); this.timer = setInterval(() => this.now.set(Date.now()), 1000); return; }
    if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
      this.timer = setInterval(() => { if (!this.paused && !document.hidden) this.go(this.slide() + 1); }, 5000);
    }
  }

  ngOnDestroy() { clearInterval(this.timer); }

  go(i: number) { this.slide.set((i + this.slides.length) % this.slides.length); }


}
