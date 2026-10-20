import { Component, HostListener, signal } from '@angular/core';
import { applications, highlights, nav, products, quality, WHATSAPP } from './data';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
})
export class App {
  protected readonly nav = nav;
  protected readonly highlights = highlights;
  protected readonly products = products;
  protected readonly applications = applications;
  protected readonly quality = quality;
  protected readonly year = new Date().getFullYear();

  protected readonly menuOpen = signal(false);
  protected readonly active = signal('#top');
  protected readonly note = signal('');

  // Highlight the nav link of the section on screen
  @HostListener('window:scroll')
  onScroll() {
    let cur = '#top';
    for (const { href } of nav) {
      const el = document.querySelector(href);
      if (el && el.getBoundingClientRect().top <= 120) cur = href;
    }
    this.active.set(cur);
  }

  // Quote form: opens WhatsApp with the enquiry filled in
  submit(e: Event) {
    e.preventDefault();
    if (!WHATSAPP) {
      this.note.set('Thank you! Our contact number will be added here shortly.');
      return;
    }
    const f = new FormData(e.target as HTMLFormElement);
    const body = `IICE WAALL enquiry\nName: ${f.get('name')}\nCompany: ${f.get('company')}\nPhone: ${f.get('phone')}\nProduct: ${f.get('product')}\n\n${f.get('message')}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(body)}`, '_blank', 'noopener');
    this.note.set('WhatsApp will open with your enquiry. Just tap Send.');
  }
}
