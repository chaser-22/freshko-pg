"use client";

import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const nav = [
  ["Usluge", "#usluge"],
  ["Rezultati", "#rezultati"],
  ["Proces", "#proces"],
  ["FAQ", "#faq"],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [compact, setCompact] = useState(false);

  useEffect(() => {
    const onScroll = () => setCompact(window.scrollY > 36);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    return () => document.documentElement.classList.remove("menu-open");
  }, [open]);

  return (
    <>
      <header className={`site-header ${compact ? "is-compact" : ""}`}>
        <a className="brand" href="#top" aria-label="Freshko početna">
          <span>F</span>
          <strong>FRESHKO</strong>
        </a>
        <nav className="desktop-nav" aria-label="Glavna navigacija">
          {nav.map(([label, href]) => <a href={href} key={href}>{label}</a>)}
        </nav>
        <div className="header-actions">
          <a className="book-pill" href="#zakazi">ZAKAŽI <ArrowUpRight size={16} /></a>
          <button className="menu-button" aria-label={open ? "Zatvori meni" : "Otvori meni"} onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>
      <div className="mobile-menu" data-open={open ? "true" : "false"} aria-hidden={!open}>
        <div className="mobile-menu-inner">
          <p>FRESHKO / PODGORICA</p>
          <nav>
            {nav.map(([label, href]) => (
              <a href={href} key={href} onClick={() => setOpen(false)}>{label}</a>
            ))}
          </nav>
          <a className="mobile-book" href="#zakazi" onClick={() => setOpen(false)}>POŠALJI UPIT <ArrowUpRight size={18} /></a>
        </div>
      </div>
    </>
  );
}
