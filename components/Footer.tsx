import { ArrowUpRight } from "lucide-react";
import { brand, instagramUrl } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-cta" data-reveal>
        <p>FRESHKO / PODGORICA</p>
        <h2>Vraćamo <em>svježinu.</em></h2>
        <a href="#zakazi">Zakaži čišćenje <ArrowUpRight size={20} /></a>
      </div>
      <div className="footer-grid">
        <div><span>Lokacija</span><p>Podgorica · dolazak na adresu</p></div>
        <div><span>Kontakt</span><a href={brand.phoneHref}>{brand.phone} · {brand.contactName}</a></div>
        <div><span>Instagram</span><a href={instagramUrl} target="_blank" rel="noreferrer">@freshko.pg ↗</a></div>
        <div><span>Navigacija</span><a href="#cjenovnik">Cjenovnik</a><a href="#rezultati">Rezultati</a></div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FRESHKO</span>
        <div><a href="/privatnost">Privatnost</a><a href="/kolacici">Kolačići</a></div>
      </div>
    </footer>
  );
}
