"use client";

import { Plus } from "lucide-react";
import { useState } from "react";
import { faqs } from "@/lib/content";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <section className="faq section-pad" id="faq">
      <div className="section-kicker" data-reveal><span>06</span><p>ČESTA PITANJA</p></div>
      <div className="faq-grid">
        <div data-reveal>
          <p className="eyebrow">PRIJE NEGO ŠTO DOĐEMO</p>
          <h2>Jasno prije početka.</h2>
        </div>
        <div className="faq-list" data-reveal>
          {faqs.map((item, index) => {
            const isOpen = open === index;
            return (
              <div className="faq-item" data-open={isOpen ? "true" : "false"} key={item.q}>
                <button onClick={() => setOpen(isOpen ? null : index)} aria-expanded={isOpen}>
                  <strong>{item.q}</strong><Plus size={18} />
                </button>
                <div className="faq-answer"><div><p>{item.a}</p></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
