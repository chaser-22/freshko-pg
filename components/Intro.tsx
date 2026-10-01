"use client";

import gsap from "gsap";
import { useEffect, useRef, useState } from "react";

export default function Intro() {
  const rootRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<SVGCircleElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const root = rootRef.current;
    const ring = ringRef.current;
    const percent = percentRef.current;
    if (!root || !ring || !percent) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduce) {
      document.documentElement.classList.add("intro-complete");
      setVisible(false);
      return;
    }

    let alive = true;
    let raf = 0;
    let displayed = 0;
    let last = performance.now();
    const started = performance.now();
    const minDuration = 2400;
    const safety = 4800;

    document.documentElement.classList.add("intro-lock", "freshko-intro-pending");

    const setProgress = (value: number) => {
      const safe = Math.max(0, Math.min(100, value));
      ring.style.strokeDasharray = `${safe} ${100 - safe}`;
      percent.textContent = `${Math.round(safe).toString().padStart(2, "0")}%`;
    };

    gsap.fromTo(".freshko-loader-seal", {
      opacity: 0,
      scale: .82,
      rotate: -8,
      filter: "blur(10px)",
    }, {
      opacity: 1,
      scale: 1,
      rotate: 0,
      filter: "blur(0px)",
      duration: 1,
      ease: "power3.out",
    });

    gsap.fromTo(".freshko-loader-word", {
      opacity: 0,
      y: 18,
      letterSpacing: ".38em",
      filter: "blur(10px)",
    }, {
      opacity: 1,
      y: 0,
      letterSpacing: ".24em",
      filter: "blur(0px)",
      duration: 1.15,
      delay: .18,
      ease: "power3.out",
    });

    const finish = () => {
      if (!alive) return;
      cancelAnimationFrame(raf);
      setProgress(100);

      const tl = gsap.timeline({
        onComplete: () => {
          if (!alive) return;
          document.documentElement.classList.remove("intro-lock", "freshko-intro-pending");
          document.documentElement.classList.add("intro-complete");
          setVisible(false);
        },
      });

      tl.to(".freshko-loader-core", {
        opacity: 0,
        y: -10,
        scale: 1.025,
        filter: "blur(7px)",
        duration: .55,
        ease: "power2.inOut",
      })
      .to(root, {
        autoAlpha: 0,
        duration: .62,
        ease: "power2.inOut",
      }, .08)
      .fromTo(".site-header", {
        y: -18,
        opacity: 0,
        filter: "blur(7px)",
      }, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: .75,
        ease: "power3.out",
      }, .22)
      .fromTo(".hero-copy > *", {
        y: 24,
        opacity: 0,
        filter: "blur(8px)",
      }, {
        y: 0,
        opacity: 1,
        filter: "blur(0px)",
        duration: .82,
        stagger: .09,
        ease: "power3.out",
      }, .32);
    };

    const tick = (now: number) => {
      if (!alive) return;
      const elapsed = now - started;
      const dt = Math.min((now - last) / 1000, .08);
      last = now;
      const ready = document.readyState === "complete" && (!document.fonts || document.fonts.status === "loaded");
      const timeRatio = Math.min(elapsed / minDuration, 1);
      const eased = timeRatio * timeRatio * (3 - 2 * timeRatio);
      const target = ready && elapsed >= minDuration ? 100 : Math.min(94, 7 + eased * 84);
      displayed += (target - displayed) * (1 - Math.exp(-dt * 4.1));
      setProgress(displayed);

      if ((ready && elapsed >= minDuration && displayed > 99.3) || elapsed > safety) {
        finish();
        return;
      }
      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      gsap.killTweensOf(".freshko-loader-seal, .freshko-loader-word, .freshko-loader-core, .site-header, .hero-copy > *");
      document.documentElement.classList.remove("intro-lock", "freshko-intro-pending");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className="freshko-loader" ref={rootRef} role="progressbar" aria-label="Freshko se učitava" aria-valuemin={0} aria-valuemax={100}>
      <div className="freshko-loader-noise" />
      <div className="freshko-loader-glow glow-a" />
      <div className="freshko-loader-glow glow-b" />
      <div className="freshko-loader-sheen" />
      <div className="freshko-loader-core">
        <div className="freshko-loader-emblem">
          <svg viewBox="0 0 120 120" aria-hidden="true">
            <circle className="freshko-loader-track" cx="60" cy="60" r="54" pathLength="100" />
            <circle ref={ringRef} className="freshko-loader-ring" cx="60" cy="60" r="54" pathLength="100" />
          </svg>
          <div className="freshko-loader-seal">F</div>
          <span ref={percentRef} className="freshko-loader-percent">00%</span>
        </div>
        <strong className="freshko-loader-word">FRESHKO</strong>
        <span className="freshko-loader-sub">DUBINSKO ČIŠĆENJE · PODGORICA</span>
      </div>
    </div>
  );
}
