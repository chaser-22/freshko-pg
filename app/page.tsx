import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Droplets, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import SmoothMotion from "@/components/SmoothMotion";
import BeforeAfter from "@/components/BeforeAfter";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { brand, instagramUrl, priceGroups, services } from "@/lib/content";
import type { CSSProperties } from "react";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  areaServed: brand.area,
  address: { "@type": "PostalAddress", addressLocality: brand.city },
  telephone: brand.phone,
  sameAs: [instagramUrl],
};

export default function Home() {
  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Preskoči na sadržaj</a>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <Intro />
      <SmoothMotion />
      <div className="pointer-glow" aria-hidden="true" />
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />
      <Header />

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-grid">
            <div className="hero-copy">
              <p className="hero-overline">DUBINSKO ČIŠĆENJE · PODGORICA</p>
              <h1>Vraćamo <em>svježinu</em> vašem domu.</h1>
              <p className="hero-lead">Dubinsko čišćenje namještaja, dušeka i tepiha u Podgorici, uz dolazak na kućnu adresu.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#zakazi">Zakaži čišćenje <ArrowUpRight size={18} /></a>
                <a className="secondary-action" href="#rezultati">Pogledaj rezultate <ArrowDownRight size={18} /></a>
              </div>
              <div className="hero-contact">
                <a href={brand.phoneHref}>{brand.phone} · {brand.contactName}</a>
                <span>DM · @freshko.pg</span>
              </div>
            </div>
            <div className="hero-art">
              <div className="hero-poster">
                <Image
                  src="/media/freshko/brand-poster.webp"
                  alt="Freshko oprema za dubinsko čišćenje"
                  fill
                  priority
                  sizes="(max-width: 980px) 88vw, 42vw"
                />
              </div>
              <div className="hero-badge" aria-hidden="true"><strong>F</strong><small>PG / FRESH</small></div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>NAMJEŠTAJ / DUŠECI / TEPISI</span>
            <span>DOLAZAK NA KUĆNU ADRESU</span>
          </div>
        </section>

        <section className="manifesto section-pad" id="proces">
          <div className="section-kicker" data-reveal><span>01</span><p>FRESHKO PRISTUP</p></div>
          <div className="manifesto-grid">
            <h2 data-reveal>Čisto, svježe<br /><em>i bez brige.</em></h2>
            <div className="manifesto-copy" data-reveal>
              <p>Svaka površina traži drugačiji pristup. Zato prvo gledamo materijal i stanje, zatim biramo tretman, pa tek onda radimo.</p>
              <div className="mini-proof">
                <span><Droplets size={17} /> Dubinsko čišćenje</span>
                <span><Sparkles size={17} /> Vidljiva razlika</span>
                <span><CheckCircle2 size={17} /> Dolazak na adresu</span>
              </div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="usluge">
          <div className="section-kicker" data-reveal><span>02</span><p>USLUGE</p></div>
          <div className="services-heading" data-reveal>
            <p className="eyebrow">FRESHKO / DUBINSKO ČIŠĆENJE</p>
            <h2>Za dom. Za auto. Za osjećaj svježine.</h2>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-row" key={service.id} data-reveal>
                <div className="service-number">{service.number}</div>
                <div
                  className="service-media"
                  role="img"
                  aria-label={`${service.title} — primjer Freshko rada`}
                  style={{ "--media-position": service.mediaPosition } as CSSProperties}
                >
                  <span className="media-chip">{service.eyebrow}</span>
                </div>
                <div className="service-copy">
                  <p>{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <strong>{service.short}</strong>
                  <span>{service.body}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing section-pad" id="cjenovnik">
          <div className="section-kicker" data-reveal><span>03</span><p>CJENOVNIK</p></div>
          <div className="pricing-grid">
            <div className="pricing-poster" data-reveal>
              <Image
                src="/media/freshko/pricing-poster.webp"
                alt="Freshko objavljeni cjenovnik za namještaj i dušeke"
                fill
                sizes="(max-width: 980px) 100vw, 42vw"
              />
            </div>
            <div className="pricing-copy" data-reveal>
              <p className="eyebrow">OBJAVLJENE CIJENE</p>
              <h2>Jasno prije nego što počnemo.</h2>
              <p className="pricing-lead">Cijene ispod preuzete su iz Freshko objavljenog cjenovnika. Za tepih cijena zavisi od veličine i materijala.</p>
              <div className="price-groups">
                {priceGroups.map((group) => (
                  <div className="price-group" key={group.title}>
                    <h3>{group.title}</h3>
                    <div>
                      {group.items.map(([label, price]) => (
                        <p key={label}><span>{label}</span><strong>{price}</strong></p>
                      ))}
                    </div>
                  </div>
                ))}
                <div className="price-group price-group-note">
                  <h3>Tepih</h3>
                  <p>Cijena zavisi od veličine i materijala. Kontaktirajte nas za procjenu.</p>
                </div>
              </div>
              <a className="price-cta" href={brand.phoneHref}>Pozovite {brand.phone} <ArrowUpRight size={17} /></a>
            </div>
          </div>
        </section>

        <section className="results section-pad" id="rezultati">
          <div className="section-kicker" data-reveal><span>04</span><p>REZULTATI</p></div>
          <div className="results-intro" data-reveal>
            <p className="eyebrow">PRIJE / POSLIJE</p>
            <h2>Razlika treba da se vidi.</h2>
            <p>Povucite klizač i uporedite stvarne Freshko rezultate na namještaju i tepihu.</p>
          </div>
          <BeforeAfter />
        </section>

        <section className="promise section-pad">
          <div className="section-kicker" data-reveal><span>05</span><p>STANDARD</p></div>
          <div className="promise-card" data-reveal>
            <div><p className="eyebrow">FRESHKO STANDARD</p><h2>Bez komplikovanja.<br />Samo dobar proces.</h2></div>
            <ol>
              <li><span>01</span><div><strong>Dogovor</strong><p>Predmet, lokacija i termin definišemo prije dolaska.</p></div></li>
              <li><span>02</span><div><strong>Tretman</strong><p>Pristup prilagođen površini i stanju materijala.</p></div></li>
              <li><span>03</span><div><strong>Finalna provjera</strong><p>Provjera rezultata i jasne instrukcije nakon čišćenja.</p></div></li>
            </ol>
          </div>
        </section>

        <Booking />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}
