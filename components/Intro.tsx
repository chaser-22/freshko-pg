"use client";

import { useEffect, useState } from "react";

export default function Intro() {
  const [visible, setVisible] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVisible(false);
      return;
    }

    document.documentElement.classList.add("intro-lock");
    const started = performance.now();
    let raf = 0;

    const tick = (now: number) => {
      const elapsed = now - started;
      const next = Math.min(100, Math.round((elapsed / 1900) * 100));
      setProgress(next);
      if (elapsed < 1900) {
        raf = requestAnimationFrame(tick);
      } else {
        window.setTimeout(() => {
          document.documentElement.classList.remove("intro-lock");
          document.documentElement.classList.add("intro-complete");
          setVisible(false);
        }, 430);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      document.documentElement.classList.remove("intro-lock");
    };
  }, []);

  if (!visible) return null;

  return (
    <div className={`intro ${progress >= 100 ? "is-done" : ""}`} aria-hidden="true">
      <div className="intro-noise" />
      <div className="intro-orbit intro-orbit-a" />
      <div className="intro-orbit intro-orbit-b" />
      <div className="intro-lockup">
        <div className="intro-mark">F</div>
        <div className="intro-word">FRESHKO</div>
        <div className="intro-progress">
          <span style={{ transform: `scaleX(${progress / 100})` }} />
        </div>
        <div className="intro-meta">{String(progress).padStart(2, "0")}% / PODGORICA</div>
      </div>
    </div>
  );
}
