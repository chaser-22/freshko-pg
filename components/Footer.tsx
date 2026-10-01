import { ArrowUpRight } from "lucide-react";
import { instagramUrl } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="footer" id="kontakt">
      <div className="footer-cta" data-reveal>
        <p>FRESHKO / PODGORICA</p>
        <h2>Da opet izgleda <em>svježe.</em></h2>
        <a href="#zakazi">Zakaži čišćenje <ArrowUpRight size={20} /></a>
      </div>
      <div className="footer-grid">
        <div><span>Lokacija</span><p>Podgorica i okolina</p></div>
        <div><span>Kontakt</span><a href="#zakazi">Pošalji upit</a></div>
        <div><span>Instagram</span><a href={instagramUrl} target="_blank" rel="noreferrer">@freshko.pg ↗</a></div>
        <div><span>Navigacija</span><a href="#usluge">Usluge</a><a href="#rezultati">Rezultati</a></div>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} FRESHKO</span>
        <div><a href="/privatnost">Privatnost</a><a href="/kolacici">Kolačići</a></div>
      </div>
    </footer>
  );
}
