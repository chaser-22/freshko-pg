import { NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  if (!body || typeof body !== "object") return NextResponse.json({ error: "Invalid body" }, { status: 400 });

  const { name, phone, email, service, location, message, company } = body as Record<string, string>;
  if (company) return NextResponse.json({ ok: true });
  if (!name?.trim() || !phone?.trim() || !service?.trim() || !message?.trim()) {
    return NextResponse.json({ error: "Nedostaju obavezna polja" }, { status: 400 });
  }
  if (email && !emailPattern.test(email)) return NextResponse.json({ error: "Neispravan email" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.BOOKING_TO_EMAIL;
  const from = process.env.BOOKING_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info("Freshko booking request", { name, phone, email, service, location, message });
    return NextResponse.json({ ok: true, delivered: false });
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { authorization: `Bearer ${apiKey}`, "content-type": "application/json" },
    body: JSON.stringify({
      from,
      to: [to],
      subject: `Freshko upit — ${service}`,
      reply_to: email || undefined,
      text: `Ime: ${name}\nTelefon: ${phone}\nEmail: ${email || "—"}\nLokacija: ${location || "—"}\nUsluga: ${service}\n\n${message}`,
    }),
  });

  if (!response.ok) return NextResponse.json({ error: "Email delivery failed" }, { status: 502 });
  return NextResponse.json({ ok: true, delivered: true });
}
