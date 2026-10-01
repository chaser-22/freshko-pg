"use client";

import { ArrowLeft, ArrowRight, Check, Loader2 } from "lucide-react";
import { CSSProperties, FormEvent, useEffect, useMemo, useRef, useState } from "react";
import { bookingServices, brand } from "@/lib/content";

const labels = ["Usluga", "Detalji", "Termin", "Kontakt", "Gotovo"];

type BookingData = {
  service: string;
  details: string;
  location: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  email: string;
  message: string;
  company: string;
};

const initial: BookingData = {
  service: "",
  details: "",
  location: "",
  date: "",
  time: "",
  name: "",
  phone: "",
  email: "",
  message: "",
  company: "",
};

export default function Booking() {
  const [step, setStep] = useState(0);
  const [data, setData] = useState<BookingData>(initial);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [today, setToday] = useState("");
  const [transitioning, setTransitioning] = useState(false);
  const [direction, setDirection] = useState<"forward" | "backward">("forward");
  const timer = useRef<number | null>(null);
  const reducedMotion = useRef(false);

  useEffect(() => {
    const now = new Date();
    const local = new Date(now.getTime() - now.getTimezoneOffset() * 60_000);
    setToday(local.toISOString().slice(0, 10));

    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => { reducedMotion.current = media.matches; };
    sync();
    media.addEventListener("change", sync);

    return () => {
      media.removeEventListener("change", sync);
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  const update = <K extends keyof BookingData>(key: K, value: BookingData[K]) => {
    setData((current) => ({ ...current, [key]: value }));
  };

  const canContinue = useMemo(() => {
    if (step === 0) return Boolean(data.service);
    if (step === 1) return Boolean(data.details.trim() && data.location.trim());
    if (step === 2) return Boolean(data.date && data.time);
    if (step === 3) return Boolean(data.name.trim() && data.phone.trim());
    return true;
  }, [data, step]);

  function go(next: number, nextDirection: "forward" | "backward") {
    if (transitioning || next === step) return;
    setDirection(nextDirection);

    if (reducedMotion.current) {
      setStep(next);
      return;
    }

    setTransitioning(true);
    if (timer.current !== null) window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setStep(next);
      setTransitioning(false);
      timer.current = null;
    }, 180);
  }

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (!canContinue) return;

    setStatus("loading");
    const combinedMessage = [
      data.details,
      data.message ? `Napomena: ${data.message}` : "",
      data.date ? `Željeni termin: ${data.date} · ${data.time}` : "",
    ].filter(Boolean).join("\n");

    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          service: data.service,
          name: data.name,
          phone: data.phone,
          email: data.email,
          location: data.location,
          message: combinedMessage,
          date: data.date,
          time: data.time,
          details: data.details,
          company: data.company,
        }),
      });

      if (!response.ok) throw new Error("Failed");
      setStatus("success");
      go(4, "forward");
    } catch {
      setStatus("error");
    }
  }

  const progress = step === labels.length - 1 ? 100 : (step / (labels.length - 2)) * 100;

  return (
    <section className="booking section-pad" id="zakazi">
      <div className="section-kicker section-kicker-clean" data-reveal><p>REZERVACIJA</p></div>

      <div className="booking-wizard-shell">
        <aside className="booking-wizard-intro" data-reveal>
          <p className="eyebrow">BRZO I JEDNOSTAVNO</p>
          <h2>Zakažite za par minuta.</h2>
          <p>Odaberite uslugu, opišite šta čistimo i pošaljite željeni termin. Freshko potvrđuje detalje direktno sa vama.</p>

          <div className="booking-assurances">
            <div><Check size={16} /><span>Dolazak na adresu</span></div>
            <div><Check size={16} /><span>Jasna procjena prije rada</span></div>
            <div><Check size={16} /><span>Brza potvrda termina</span></div>
          </div>

          <a className="booking-direct" href={brand.phoneHref}>
            <span>Radije biste pozvali?</span>
            <strong>{brand.phone} · {brand.contactName}</strong>
          </a>
        </aside>

        <form className="booking-wizard-card" onSubmit={submit} data-reveal noValidate aria-busy={transitioning || status === "loading"}>
          <div
            className="booking-wizard-progress"
            style={{ "--booking-progress": `${Math.min(progress, 100)}%` } as CSSProperties}
            aria-label={step < 4 ? `${labels[step]} — korak ${step + 1} od 4` : "Upit poslat"}
          >
            <div className="booking-progress-track"><span /></div>
            <div className="booking-progress-labels">
              {labels.slice(0, 4).map((label, index) => (
                <span key={label} className={index <= step ? "active" : ""}>{label}</span>
              ))}
            </div>
          </div>

          <div className="booking-wizard-stage" aria-live="polite">
            <div className={`booking-wizard-panel direction-${direction} ${transitioning ? "is-exiting" : "is-entered"}`} key={step}>
              {step === 0 && (
                <>
                  <p className="booking-step-label">ŠTA ČISTIMO?</p>
                  <h3>Izaberite uslugu.</h3>
                  <div className="booking-choice-grid">
                    {bookingServices.map((service) => (
                      <button
                        type="button"
                        className={data.service === service ? "booking-choice selected" : "booking-choice"}
                        key={service}
                        onClick={() => update("service", service)}
                        aria-pressed={data.service === service}
                      >
                        <span>{service}</span>
                        <span className="booking-choice-mark">{data.service === service ? <Check size={17} /> : <ArrowRight size={15} />}</span>
                      </button>
                    ))}
                  </div>
                </>
              )}

              {step === 1 && (
                <>
                  <p className="booking-step-label">DETALJI</p>
                  <h3>Recite nam malo više.</h3>
                  <label className="booking-field">
                    <span>Šta tačno treba očistiti?</span>
                    <textarea value={data.details} onChange={(e) => update("details", e.target.value)} rows={4} placeholder="Npr. velika ugaona garnitura, dvije stolice, fleke od kafe..." />
                  </label>
                  <label className="booking-field">
                    <span>Lokacija / naselje</span>
                    <input value={data.location} onChange={(e) => update("location", e.target.value)} placeholder="Podgorica, naselje..." autoComplete="street-address" />
                  </label>
                  <label className="booking-field">
                    <span>Dodatna napomena <em>opciono</em></span>
                    <input value={data.message} onChange={(e) => update("message", e.target.value)} placeholder="Sprat, parking, kućni ljubimci..." />
                  </label>
                </>
              )}

              {step === 2 && (
                <>
                  <p className="booking-step-label">ŽELJENI TERMIN</p>
                  <h3>Kada vam odgovara?</h3>
                  <p className="booking-step-note">Termin postaje konačan tek nakon Freshko potvrde.</p>
                  <div className="booking-field-grid">
                    <label className="booking-field">
                      <span>Datum</span>
                      <input type="date" min={today || undefined} value={data.date} onChange={(e) => update("date", e.target.value)} />
                    </label>
                    <label className="booking-field">
                      <span>Vrijeme</span>
                      <select value={data.time} onChange={(e) => update("time", e.target.value)}>
                        <option value="">Izaberite</option>
                        <option>08:00–11:00</option>
                        <option>11:00–14:00</option>
                        <option>14:00–17:00</option>
                        <option>17:00–20:00</option>
                        <option>Fleksibilno</option>
                      </select>
                    </label>
                  </div>
                </>
              )}

              {step === 3 && (
                <>
                  <p className="booking-step-label">KONTAKT</p>
                  <h3>Kako da vam se javimo?</h3>
                  <div className="booking-field-grid">
                    <label className="booking-field">
                      <span>Ime i prezime</span>
                      <input value={data.name} onChange={(e) => update("name", e.target.value)} autoComplete="name" />
                    </label>
                    <label className="booking-field">
                      <span>Telefon</span>
                      <input value={data.phone} onChange={(e) => update("phone", e.target.value)} autoComplete="tel" inputMode="tel" />
                    </label>
                  </div>
                  <label className="booking-field">
                    <span>Email <em>opciono</em></span>
                    <input type="email" value={data.email} onChange={(e) => update("email", e.target.value)} autoComplete="email" />
                  </label>
                  <label className="hp" aria-hidden="true">Company<input tabIndex={-1} value={data.company} onChange={(e) => update("company", e.target.value)} autoComplete="off" /></label>

                  <div className="booking-review">
                    <div><span>Usluga</span><strong>{data.service}</strong></div>
                    <div><span>Termin</span><strong>{data.date} · {data.time}</strong></div>
                    <div><span>Lokacija</span><strong>{data.location}</strong></div>
                  </div>
                </>
              )}

              {step === 4 && status === "success" && (
                <div className="booking-success" role="status">
                  <div className="booking-success-icon"><Check size={28} /></div>
                  <p className="booking-step-label">UPIT JE POSLAT</p>
                  <h3>Hvala{data.name ? `, ${data.name.split(" ")[0]}` : ""}.</h3>
                  <p>Freshko je primio vaš upit. Javićemo vam se da potvrdimo termin i detalje.</p>
                  <div className="booking-review">
                    <div><span>Usluga</span><strong>{data.service}</strong></div>
                    <div><span>Termin</span><strong>{data.date} · {data.time}</strong></div>
                    <div><span>Telefon</span><strong>{data.phone}</strong></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {step < 4 && (
            <div className="booking-wizard-controls">
              <button type="button" className="booking-back" disabled={step === 0 || transitioning || status === "loading"} onClick={() => go(step - 1, "backward")}>
                <ArrowLeft size={16} /> Nazad
              </button>

              {step < 3 ? (
                <button type="button" className="booking-next" disabled={!canContinue || transitioning} onClick={() => go(step + 1, "forward")}>
                  Nastavi <ArrowRight size={16} />
                </button>
              ) : (
                <button type="submit" className="booking-next" disabled={!canContinue || transitioning || status === "loading"}>
                  {status === "loading" ? <><Loader2 className="spin" size={16} /> Šaljemo…</> : <>Pošalji upit <ArrowRight size={16} /></>}
                </button>
              )}
            </div>
          )}

          {status === "error" && <p className="booking-error" role="alert">Upit nije poslat. Pokušajte ponovo ili pozovite {brand.phone}.</p>}
        </form>
      </div>
    </section>
  );
}
