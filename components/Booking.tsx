"use client";

import { ArrowRight, Check, Loader2 } from "lucide-react";
import { FormEvent, useState } from "react";
import { bookingServices, brand } from "@/lib/content";

type State = "idle" | "sending" | "success" | "error";

export default function Booking() {
  const [state, setState] = useState<State>("idle");

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const formElement = event.currentTarget;
    setState("sending");
    const form = new FormData(formElement);
    const body = Object.fromEntries(form.entries());
    try {
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(body),
      });
      if (!response.ok) throw new Error("Failed");
      setState("success");
      formElement.reset();
    } catch {
      setState("error");
    }
  }

  return (
    <section className="booking section-pad" id="zakazi">
      <div className="section-kicker" data-reveal><span>06</span><p>UPIT ZA TERMIN</p></div>
      <div className="booking-grid">
        <div className="booking-copy" data-reveal>
          <p className="eyebrow">REZERVACIJE</p>
          <h2>Recite nam šta treba osvježiti.</h2>
          <p>Pošaljite osnovne informacije i potvrdićemo termin i detalje. Možete se javiti i direktno telefonom ili preko Instagrama.</p>
          <a className="booking-phone" href={brand.phoneHref}>{brand.phone} · {brand.contactName}</a>
          <div className="booking-points">
            <span><Check size={15} /> Dolazak na kućnu adresu</span>
            <span><Check size={15} /> Jasne cijene za namještaj i dušeke</span>
            <span><Check size={15} /> DM za rezervacije</span>
          </div>
        </div>
        <form className="booking-form" onSubmit={submit} data-reveal>
          <label>
            <span>Usluga</span>
            <select name="service" required defaultValue="">
              <option value="" disabled>Izaberite uslugu</option>
              {bookingServices.map((service) => <option key={service}>{service}</option>)}
            </select>
          </label>
          <div className="form-row">
            <label><span>Ime i prezime</span><input name="name" autoComplete="name" required /></label>
            <label><span>Telefon</span><input name="phone" autoComplete="tel" required /></label>
          </div>
          <label><span>Email</span><input name="email" type="email" autoComplete="email" /></label>
          <label><span>Lokacija / naselje</span><input name="location" autoComplete="street-address" /></label>
          <label><span>Opišite šta treba očistiti</span><textarea name="message" rows={5} placeholder="Npr. ugaona garnitura, dvije stolice, tepih..." required /></label>
          <input className="hp" name="company" tabIndex={-1} autoComplete="off" aria-hidden="true" />
          <button className="submit-button" disabled={state === "sending" || state === "success"}>
            {state === "sending" ? <><Loader2 className="spin" size={17} /> ŠALJEMO</> : state === "success" ? <><Check size={17} /> UPIT JE POSLAT</> : <>POŠALJI UPIT <ArrowRight size={17} /></>}
          </button>
          {state === "error" && <p className="form-status">Nešto nije prošlo. Pozovite {brand.phone} ili pošaljite DM na @freshko.pg.</p>}
        </form>
      </div>
    </section>
  );
}
