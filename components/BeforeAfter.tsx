"use client";

import Image from "next/image";
import { comparisonWork } from "@/lib/content";
import { CSSProperties, FormEvent, useRef } from "react";

export default function BeforeAfter() {
  return (
    <div className="compare-grid">
      {comparisonWork.map((item) => <Comparison key={item.title} item={item} />)}
    </div>
  );
}

function Comparison({ item }: { item: (typeof comparisonWork)[number] }) {
  const stageRef = useRef<HTMLDivElement>(null);

  const onInput = (event: FormEvent<HTMLInputElement>) => {
    const value = Number(event.currentTarget.value);
    stageRef.current?.style.setProperty("--compare", `${value}%`);
  };

  return (
    <article className="compare-card" data-reveal>
      <div className="compare-top"><span>{item.title}</span><small>PRIJE / POSLIJE</small></div>
      <div
        className="compare-stage"
        ref={stageRef}
        style={{ "--compare": "54%" } as CSSProperties}
        aria-label={`Freshko rezultat za ${item.title}: prije i poslije čišćenja`}
      >
        <Image
          className="compare-source"
          src={item.image}
          alt={`${item.title} prije čišćenja`}
          fill
          quality={95}
          sizes="(max-width: 980px) 100vw, 48vw"
          style={{ objectPosition: item.beforePosition }}
        />
        <div className="compare-after">
          <Image
            className="compare-source"
            src={item.image}
            alt={`${item.title} poslije čišćenja`}
            fill
            quality={95}
            sizes="(max-width: 980px) 100vw, 48vw"
            style={{ objectPosition: item.afterPosition }}
          />
        </div>
        <span className="compare-label before-label">PRIJE</span>
        <span className="compare-label after-label">POSLIJE</span>
        <div className="compare-line"><span>↔</span></div>
        <input type="range" min="0" max="100" defaultValue="54" onInput={onInput} aria-label={`Uporedi rezultat za ${item.title}`} />
      </div>
    </article>
  );
}
