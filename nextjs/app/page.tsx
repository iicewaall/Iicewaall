import Header from "@/components/Header";
import QuoteForm from "@/components/QuoteForm";
import { applications, highlights, products, quality } from "@/lib/data";

const base = process.env.NEXT_PUBLIC_BASE_PATH || "";
const a = (f: string) => `${base}/assets/${f}`;

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <section className="hero" aria-label="Premium marine proteins from pure Nordic waters">
          <img
            className="hero-img"
            src={a("hero.webp")}
            srcSet={`${a("hero-900.webp")} 900w, ${a("hero.webp")} 1672w`}
            sizes="100vw"
            width={1672}
            height={791}
            alt="IICE WAALL marine protein drums – Anchovy, Herring, Tuna, Salmon Protein and Marine Collagen Peptides – on ice in front of Nordic fjords"
            fetchPriority="high"
          />
          <div className="hero-cta wrap">
            <a href="#products" className="btn btn-primary">View Products <span aria-hidden="true">→</span></a>
            <a href="#contact" className="btn btn-ghost">Request a Quote</a>
          </div>
        </section>

        <section className="strip" aria-label="Highlights">
          <div className="wrap strip-inner">
            {highlights.map((h) => (
              <div key={h.title}><b>{h.title}</b><span>{h.sub}</span></div>
            ))}
          </div>
        </section>

        <section className="section" id="products">
          <div className="wrap">
            <p className="eyebrow">Our Range</p>
            <h2>Premium Marine Proteins</h2>
            <p className="lead">Five marine ingredients, each processed from carefully sourced Nordic catch and packed in sealed 50 kg drums.</p>
            <div className="grid products">
              {products.map((p) => (
                <article className="card product" key={p.name}>
                  <img src={a(p.img)} alt={`IICE WAALL ${p.name}, 50 kg drum, made in ${p.country}`} loading="lazy" width={290} height={340} />
                  <div>
                    <h3>{p.name}</h3>
                    <p className="origin">{p.flag} Made in {p.country} · 50 kg</p>
                    <p>{p.text}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="section alt" id="applications">
          <div className="wrap">
            <p className="eyebrow">Applications</p>
            <h2>Where Our Proteins Work</h2>
            <div className="grid apps">
              {applications.map((x) => (
                <div className="card app" key={x.title}>
                  <span className="ico" aria-hidden="true">{x.icon}</span>
                  <h3>{x.title}</h3>
                  <p>{x.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section" id="quality">
          <div className="wrap split">
            <div>
              <p className="eyebrow">Quality</p>
              <h2>Pure Nordic Quality, Batch After Batch</h2>
              <p className="lead">From cold Nordic waters to a sealed drum, every step is controlled to keep our proteins fresh, clean and consistent.</p>
            </div>
            <ul className="checks">
              {quality.map(([b, t]) => <li key={b}><b>{b}</b> {t}</li>)}
            </ul>
          </div>
        </section>

        <section className="section alt" id="about">
          <div className="wrap split">
            <img className="about-logo" src={a("logo.webp")} alt="IICE WAALL logo" loading="lazy" width={900} height={590} />
            <div>
              <p className="eyebrow">About Us</p>
              <h2>IICE WAALL</h2>
              <p className="lead">IICE WAALL brings premium marine proteins from the pure waters of Norway and Denmark to feed, pet food and nutrition manufacturers. We focus on clean sourcing, reliable bulk supply and consistent quality, so our partners can build better products.</p>
            </div>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="wrap">
            <p className="eyebrow">Contact</p>
            <h2>Get a Quote</h2>
            <p className="lead">Tell us which product and how much you need. We will reply with price, specs and delivery details.</p>
            <QuoteForm />
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="wrap footer-inner">
          <img src={a("logo-sm.png")} alt="IICE WAALL" width={110} height={74} loading="lazy" />
          <p>© {new Date().getFullYear()} IICE WAALL · Premium Marine Proteins from Pure Nordic Waters</p>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </>
  );
}
