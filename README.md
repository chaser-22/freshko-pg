# Freshko — premium website

A production-oriented Next.js website for Freshko, adapted from the interaction architecture and editorial pacing of the White Velvet project while using a distinct Freshko visual system.

## Visual direction

- Deep forest green + electric lime + warm mineral off-white
- Bold Syne display typography, restrained mono utility labels
- Premium full-screen loader and kinetic hero art
- Smooth scrolling, GSAP reveal choreography, pointer-reactive ambient light
- Editorial service rows, interactive before/after comparison, premium booking flow
- Mobile-first navigation and responsive layout
- Reduced-motion accessibility support

## Content

Business-specific facts that could not be verified from the Instagram profile are deliberately not invented. Contact details and pricing should be added after confirmation. The visible location is Podgorica / surrounding area and the social link points to `@freshko.pg`.

The current service/result imagery references the existing `chaser-22/white-velvet` repository as a visual source. Replace those URLs in `lib/content.ts` with Freshko-owned originals when available.

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
