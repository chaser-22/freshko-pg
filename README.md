# Freshko — premium website

Production-oriented Next.js website for Freshko, adapted from the interaction architecture and editorial pacing of the White Velvet project while using Freshko's own visual identity.

## Brand direction

- Freshko black + yellow identity with warm neutral supporting tones
- Bold Syne display typography and restrained mono utility labels
- Premium full-screen loader, editorial hero and subtle motion
- Real Freshko service imagery and before/after results
- Published Freshko pricing integrated into an accessible pricing section
- Mobile-first navigation and responsive layout
- Reduced-motion accessibility support
- Automated production build and visual screenshot QA

## Source material

The media, phone number, service details and published prices used by the website were taken from Freshko Instagram material supplied directly for this project. The site no longer depends on White Velvet imagery.

## Booking email

The booking endpoint validates requests and supports Resend without an SDK. Set:

```env
RESEND_API_KEY=...
BOOKING_FROM_EMAIL=Freshko <booking@your-verified-domain.me>
BOOKING_TO_EMAIL=...
```

Without these variables, requests validate successfully and are logged server-side for development.

## Run

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```
