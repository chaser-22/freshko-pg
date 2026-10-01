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
      <Header />

      <main id="main">
        <section className="hero hero-photo-led" id="top">
          <Image
            className="hero-cover"
            src="/media/freshko/generated/upholstery.png"
            alt="Premium editorial vizual dubinskog čišćenja namještaja za Freshko"
            fill
            priority
            quality={95}
            sizes="100vw"
          />
          <div className="hero-content">
            <div className="hero-copy">
              <p className="hero-overline">FRESHKO · DUBINSKO ČIŠĆENJE · PODGORICA</p>
              <h1>Vraćamo <em>svježinu</em> vašem domu.</h1>
              <p className="hero-lead">Profesionalno dubinsko čišćenje namještaja, dušeka i tepiha uz dolazak na kućnu adresu.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#zakazi">Zakaži čišćenje <ArrowUpRight size={18} /></a>
                <a className="secondary-action" href="#rezultati">Stvarni rezultati <ArrowDownRight size={18} /></a>
              </div>
            </div>

            <div className="hero-facts">
              <a href={brand.phoneHref}><span>Kontakt</span><strong>{brand.phone} · {brand.contactName}</strong></a>
              <div><span>Lokacija</span><strong>Podgorica · dolazak na adresu</strong></div>
              <a href={instagramUrl} target="_blank" rel="noreferrer"><span>Instagram</span><strong>@freshko.pg ↗</strong></a>
            </div>
          </div>
        </section>

        <section className="manifesto section-pad" id="proces">
          <div className="section-kicker section-kicker-clean" data-reveal><p>FRESHKO PRISTUP</p></div>
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

        <section className="photo-story section-pad" aria-label="Freshko premium fotografija">
          <div className="photo-story-heading" data-reveal>
            <p className="eyebrow">PREMIUM VIZUELNI IDENTITET</p>
            <h2>Dom poslije Freshko tretmana treba da izgleda kao mjesto u koje se ponovo zaljubite.</h2>
          </div>
          <div className="photo-story-grid">
            <figure className="story-large" data-reveal>
              <Image src="/media/freshko/generated/armchair.png" alt="Premium Freshko vizual čistog žutog naslonjača" fill quality={95} sizes="(max-width: 900px) 100vw, 58vw" />
              <figcaption><strong>Namještaj</strong></figcaption>
            </figure>
            <div className="story-stack">
              <figure data-reveal>
                <Image src="/media/freshko/generated/mattress.png" alt="Premium Freshko vizual dubinskog čišćenja dušeka" fill quality={95} sizes="(max-width: 900px) 100vw, 36vw" />
                <figcaption><strong>Dušeci</strong></figcaption>
              </figure>
              <figure data-reveal>
                <Image src="/media/freshko/generated/carpet.png" alt="Premium Freshko vizual dubinskog čišćenja tepiha" fill quality={95} sizes="(max-width: 900px) 100vw, 36vw" />
                <figcaption><strong>Tepisi</strong></figcaption>
              </figure>
            </div>
          </div>
          <p className="photo-story-note">Editorial fotografije predstavljaju vizuelni pravac brenda; stvarne Freshko rezultate pogledajte u sekciji „Prije / Poslije“.</p>
        </section>

        <section className="services section-pad services-photo-led" id="usluge">
          <div className="section-kicker section-kicker-clean" data-reveal><p>USLUGE</p></div>
          <div className="services-heading" data-reveal>
            <p className="eyebrow">TRI GLAVNE USLUGE</p>
            <h2>Dubinski tretman, premium osjećaj.</h2>
          </div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.id} data-reveal>
                <div className="service-media">
                  <Image
                    src={service.image}
                    alt={`${service.title} — Freshko editorial vizual`}
                    fill
                    quality={95}
                    priority={index === 0}
                    sizes="(max-width: 620px) 100vw, (max-width: 980px) 90vw, 55vw"
                    style={{ objectPosition: service.mediaPosition }}
                  />
                  <span className="media-chip">{service.eyebrow}</span>
                </div>
                <div className="service-copy">
                  <p>{service.eyebrow}</p>
                  <h3>{service.title}</h3>
                  <strong>{service.short}</strong>
                  <span>{service.body}</span>
                  <a className="service-cta" href="#zakazi">Pošalji upit <ArrowUpRight size={16} /></a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="results section-pad" id="rezultati">
          <div className="section-kicker section-kicker-clean" data-reveal><p>STVARNI REZULTATI</p></div>
          <div className="results-intro" data-reveal>
            <p className="eyebrow">FRESHKO / PRIJE I POSLIJE</p>
            <h2>Ovdje fotografija nije ilustracija.</h2>
            <p>Povucite klizač i pogledajte stvarne Freshko transformacije sa objavljenih radova.</p>
          </div>
          <BeforeAfter />
        </section>

        <section className="pricing section-pad" id="cjenovnik">
          <div className="section-kicker section-kicker-clean" data-reveal><p>CJENOVNIK</p></div>
          <div className="pricing-grid">
            <div className="pricing-poster" data-reveal>
              <Image
                src="/media/freshko/hq/pricing.png"
                alt="Freshko objavljeni cjenovnik za namještaj i dušeke"
                fill
                quality={95}
                loading="eager"
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

        <section className="promise section-pad">
          <div className="section-kicker section-kicker-clean" data-reveal><p>STANDARD</p></div>
          <div className="promise-card" data-reveal>
            <div><p className="eyebrow">FRESHKO STANDARD</p><h2>Bez komplikovanja.<br />Samo dobar proces.</h2></div>
            <ol>
              <li><div><strong>Dogovor</strong><p>Predmet, lokacija i termin definišemo prije dolaska.</p></div></li>
              <li><div><strong>Tretman</strong><p>Pristup prilagođen površini i stanju materijala.</p></div></li>
              <li><div><strong>Finalna provjera</strong><p>Provjera rezultata i jasne instrukcije nakon čišćenja.</p></div></li>
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
