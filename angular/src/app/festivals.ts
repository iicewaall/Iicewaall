// World festivals, worked out for any year so the greetings never run out.
// - Fixed dates and simple rules (Christmas, Easter, Thanksgiving …) are calculated directly.
// - Islamic and Jewish dates come from the browser's built-in calendars (Intl, Umm al-Qura / Hebrew).
// - Hindu, Buddhist and Chinese dates follow the moon: new / full moon times (Meeus, ch. 49) plus the
//   traditional rule for each festival. Banners span a few days, so a day of regional difference is covered.
export interface Festival { from: string; to: string; icon: string; greet: string; }

const DAY = 864e5, rad = Math.PI / 180;
const iso = (t: number) => new Date(t).toISOString().slice(0, 10);
const utc = (y: number, m: number, d: number) => Date.UTC(y, m - 1, d);
const add = (d: string, n: number) => iso(Date.parse(d) + n * DAY);

// Julian day of the new (k integer) or full (k + .5) moon of lunation k
function moonJD(k: number): number {
  const full = k % 1 !== 0, T = k / 1236.85, E = 1 - 0.002516 * T, s = Math.sin;
  const M = (2.5534 + 29.1053567 * k) * rad, Mp = (201.5643 + 385.81693528 * k) * rad;
  const F = (160.7108 + 390.67050284 * k) * rad, O = (124.7746 - 1.56375588 * k) * rad;
  return 2451550.09766 + 29.530588861 * k + 0.00015437 * T * T
    + (full ? -0.40614 : -0.4072) * s(Mp) + (full ? 0.17302 : 0.17241) * E * s(M) + (full ? 0.01614 : 0.01608) * s(2 * Mp)
    + (full ? 0.01043 : 0.01039) * s(2 * F) + (full ? 0.00734 : 0.00739) * E * s(Mp - M) - (full ? 0.00515 : 0.00514) * E * s(Mp + M)
    + (full ? 0.00209 : 0.00208) * E * E * s(2 * M) - 0.00111 * s(Mp - 2 * F) - 0.00057 * s(Mp + 2 * F) + 0.00056 * E * s(2 * Mp + M)
    - 0.00042 * s(3 * Mp) + 0.00042 * E * s(M + 2 * F) + 0.00038 * E * s(M - 2 * F) - 0.00024 * E * s(2 * Mp - M) - 0.00017 * s(O);
}
// First new / full moon on or after a date, as a local date at the given UTC offset (hours)
function moonAfter(full: boolean, from: string, tz: number): string {
  for (let k = Math.floor((+from.slice(0, 4) - 2000) * 12.3685) - 2; ; k++) {
    const d = iso((moonJD(k + (full ? 0.5 : 0)) - 2440587.5) * DAY + tz * 36e5);
    if (d >= from) return d;
  }
}
const IST = 5.5, CST = 8;

// Western Easter Sunday (anonymous Gregorian algorithm)
function easter(y: number): string {
  const a = y % 19, b = Math.floor(y / 100), c = y % 100, d = Math.floor(b / 4), e = b % 4, f = Math.floor((b + 8) / 25);
  const g = Math.floor((b - f + 1) / 3), h = (19 * a + b - d - g + 15) % 30, i = Math.floor(c / 4), k = c % 4;
  const l = (32 + 2 * e + 2 * i - h - k) % 7, m = Math.floor((a + 11 * h + 22 * l) / 451), mo = Math.floor((h + l - 7 * m + 114) / 31);
  return iso(utc(y, mo, ((h + l - 7 * m + 114) % 31) + 1));
}

// Days of year y matching a date in another calendar (browser Intl); empty if the browser lacks it
function inCalendar(y: number, ca: string, month: Intl.DateTimeFormatOptions['month'], test: (m: string, d: string) => boolean): string[] {
  try {
    const f = new Intl.DateTimeFormat('en-u-ca-' + ca, { timeZone: 'UTC', month, day: 'numeric' }), out: string[] = [];
    for (let t = utc(y, 1, 1); t < utc(y + 1, 1, 1); t += DAY) {
      const p = Object.fromEntries(f.formatToParts(t).map((x) => [x.type, x.value]));
      if (test(p['month'], p['day'])) out.push(iso(t));
    }
    return out;
  } catch { return []; }
}

export function festivalsFor(y: number): Festival[] {
  const F = (from: string, to: string, icon: string, greet: string): Festival => ({ from, to, icon, greet });
  const md = (m: number, d: number) => iso(utc(y, m, d));
  const list: Festival[] = [
    F(md(1, 13), md(1, 15), '🪁', 'Happy Makar Sankranti, Pongal & Lohri!'),
    F(md(4, 13), md(4, 15), '💦', 'Happy Songkran!'),
    F(md(5, 17), md(5, 17), '🇳🇴', 'Happy Norwegian Constitution Day!'),
    F(md(6, 5), md(6, 5), '🇩🇰', 'Happy Danish Constitution Day!'),
    F(md(6, 23), md(6, 24), '🔥', 'Happy Midsummer!'),
    F(md(10, 31), md(10, 31), '🎃', 'Happy Halloween!'),
    F(md(12, 13), md(12, 13), '🕯️', 'Happy St. Lucia Day!'),
    F(md(12, 20), md(12, 26), '🎄', 'Merry Christmas!'),
    F(md(12, 31), iso(utc(y + 1, 1, 2)), '🎆', 'Happy New Year!'),
  ];
  const e = easter(y);
  list.push(F(add(e, -2), add(e, 1), '🐣', 'Happy Easter!'));
  const nov1 = new Date(utc(y, 11, 1)).getUTCDay(), tg = md(11, 1 + ((4 - nov1 + 7) % 7) + 21);
  list.push(F(tg, tg, '🦃', 'Happy Thanksgiving!'));

  // Chinese New Year: second new moon after the winter solstice (Beijing time)
  const cny = moonAfter(false, add(moonAfter(false, iso(utc(y - 1, 12, 22)), CST), 1), CST);
  list.push(F(cny, add(cny, 2), '🧧', 'Happy Chinese New Year!'));

  // Hindu / Buddhist lunar months start at the new moon while the sun is in a sidereal sign
  const holi = moonAfter(true, moonAfter(false, md(2, 13), IST), IST);              // Phalguna full moon
  list.push(F(add(holi, -1), add(holi, 1), '🎨', 'Happy Holi!'));
  const vesak = moonAfter(true, moonAfter(false, md(4, 14), IST), IST);             // Vaishakha full moon
  list.push(F(add(vesak, -1), vesak, '🪷', 'Happy Vesak!'));
  const ashvin = moonAfter(false, md(9, 17), IST);                                    // Ashvina new moon (sun in Kanya)
  list.push(F(add(ashvin, 1), add(ashvin, 10), '🪔', 'Happy Navratri & Dussehra!'));
  const diwali = moonAfter(false, add(ashvin, 1), IST);                               // Kartika new moon
  list.push(F(add(diwali, -2), add(diwali, 1), '🪔', 'Happy Diwali!'));
  const gurpurab = moonAfter(true, diwali, IST);                                      // Kartik Purnima
  list.push(F(add(gurpurab, -1), gurpurab, '🙏', 'Happy Guru Nanak Jayanti!'));

  // Islamic (Umm al-Qura) and Hebrew calendar dates; a lunar date can fall twice in one solar year
  const runs = (days: string[], icon: string, greet: string, before = 0, after = 0) => {
    days.forEach((d, i) => { if (i === 0 || add(days[i - 1], 1) !== d) {
      let j = i; while (j + 1 < days.length && add(days[j], 1) === days[j + 1]) j++;
      list.push(F(add(d, -before), add(days[j], after), icon, greet));
    } });
  };
  runs(inCalendar(y, 'islamic-umalqura', 'numeric', (m, d) => m === '9' && +d <= 3), '🌙', 'Ramadan Mubarak!');
  runs(inCalendar(y, 'islamic-umalqura', 'numeric', (m, d) => m === '10' && +d <= 3), '🌙', 'Eid Mubarak!');
  runs(inCalendar(y, 'islamic-umalqura', 'numeric', (m, d) => m === '12' && +d >= 10 && +d <= 12), '🐑', 'Eid al-Adha Mubarak!');
  runs(inCalendar(y, 'hebrew', 'long', (m, d) => m === 'Kislev' && d === '25'), '🕎', 'Happy Hanukkah!', 1, 7);
  return list;
}

// Festivals celebrated on a given date (YYYY-MM-DD)
export function festivalsOn(day: string): Festival[] {
  const y = +day.slice(0, 4);
  return [y - 1, y].flatMap(festivalsFor).filter((f) => f.from <= day && day <= f.to);
}
