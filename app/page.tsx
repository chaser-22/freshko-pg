import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CheckCircle2, Droplets, Sparkles } from "lucide-react";
import Header from "@/components/Header";
import Intro from "@/components/Intro";
import SmoothMotion from "@/components/SmoothMotion";
import BeforeAfter from "@/components/BeforeAfter";
import Booking from "@/components/Booking";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import { brand, instagramUrl, services } from "@/lib/content";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: brand.name,
  areaServed: brand.area,
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
              <h1>Čistoća koja izgleda <em>svježe.</em></h1>
              <p className="hero-lead">Freshko vraća tekstilu, namještaju i enterijerima uredan izgled kroz pažljiv proces, profesionalan pristup i detalj koji se vidi.</p>
              <div className="hero-actions">
                <a className="primary-action" href="#zakazi">Zakaži čišćenje <ArrowUpRight size={18} /></a>
                <a className="secondary-action" href="#rezultati">Pogledaj rezultate <ArrowDownRight size={18} /></a>
              </div>
            </div>
            <div className="hero-art" aria-hidden="true">
              <div className="hero-disc disc-one"><span>FRESH</span></div>
              <div className="hero-disc disc-two"><span>DEEP</span></div>
              <div className="hero-badge"><strong>F</strong><small>PG / 01</small></div>
            </div>
          </div>
          <div className="hero-bottom">
            <span>DOM / AUTO / TEXTIL</span>
            <span>PRECIZNO. PAŽLJIVO. SVJEŽE.</span>
          </div>
        </section>

        <section className="manifesto section-pad" id="proces">
          <div className="section-kicker" data-reveal><span>01</span><p>FRESHKO PRISTUP</p></div>
          <div className="manifesto-grid">
            <h2 data-reveal>Ne čistimo samo površinu.<br /><em>Vraćamo osjećaj urednosti.</em></h2>
            <div className="manifesto-copy" data-reveal>
              <p>Svaki materijal traži drugačiji tretman. Zato prvo gledamo šta čistimo, zatim biramo pristup, a tek onda radimo.</p>
              <div className="mini-proof"><span><Droplets size={17} /> Prilagođen tretman</span><span><Sparkles size={17} /> Fokus na detalju</span><span><CheckCircle2 size={17} /> Jasna procjena</span></div>
            </div>
          </div>
        </section>

        <section className="services section-pad" id="usluge">
          <div className="section-kicker" data-reveal><span>02</span><p>USLUGE</p></div>
          <div className="services-heading" data-reveal><p className="eyebrow">PRAVA METODA ZA SVAKU POVRŠINU</p><h2>Dubinski, ali sa mjerom.</h2></div>
          <div className="service-list">
            {services.map((service, index) => (
              <article className="service-row" key={service.id} data-reveal>
                <div className="service-number">{service.number}</div>
                <div className="service-media">
                  <Image src={service.image} alt={`${service.title} — Freshko`} fill priority={index === 0} sizes="(max-width: 900px) 100vw, 45vw" />
                  <span className="media-chip">{service.eyebrow}</span>
                </div>
                <div className="service-copy"><p>{service.eyebrow}</p><h3>{service.title}</h3><strong>{service.short}</strong><span>{service.body}</span></div>
              </article>
            ))}
          </div>
        </section>

        <section className="results section-pad" id="rezultati">
          <div className="section-kicker" data-reveal><span>03</span><p>REZULTATI</p></div>
          <div className="results-intro" data-reveal><p className="eyebrow">PRIJE / POSLIJE</p><h2>Razlika treba da se vidi.</h2><p>Povucite klizač i uporedite rezultat tretmana na stvarnim primjerima iz referentnog projekta.</p></div>
          <BeforeAfter />
        </section>

        <section className="promise section-pad">
          <div className="section-kicker" data-reveal><span>04</span><p>STANDARD</p></div>
          <div className="promise-card" data-reveal>
            <div><p className="eyebrow">FRESHKO STANDARD</p><h2>Bez velikih riječi.<br />Samo dobar proces.</h2></div>
            <ol>
              <li><span>01</span><div><strong>Procjena</strong><p>Materijal, stanje i obim rada prije početka.</p></div></li>
              <li><span>02</span><div><strong>Tretman</strong><p>Metod prilagođen površini, ne obrnuto.</p></div></li>
              <li><span>03</span><div><strong>Finalna provjera</strong><p>Detalji, ujednačenost i jasne instrukcije za sušenje.</p></div></li>
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
