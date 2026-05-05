# ET Data Solutions — v2 (Glass / SaaS)

React port of the v2 design — calm, trustworthy SaaS aesthetic with glass surfaces, soft gradients, and gentle motion.

## Stack

- Next.js 14 (App Router)
- React 18
- TypeScript
- Plain CSS in `app/globals.css` (no Tailwind, no UI library)
- Inline SVG icons (no `lucide-react`, no other icon dep)
- Fonts: Fraunces (display, with optical sizing) + Geist (body) via Google Fonts

## Structure

```
app/
  layout.tsx        Root HTML, font links, body
  page.tsx          Composes all sections
  globals.css       Entire design system in one file
components/
  Navbar.tsx        Floating pill navbar
  Hero.tsx          Hero with glass dashboard card + 4 stats
  TrustStrip.tsx    Region trust strip
  About.tsx         4-step process grid
  Services.tsx      4 service cards with pointer-tracked glow
  Testimonials.tsx  1 featured + 2 mini testimonials
  Contact.tsx       Glass contact card with meta links
  Footer.tsx        Brand + nav columns + bottom bar
  Reveal.tsx        IntersectionObserver wrapper
  useReveal.ts      Reveal-on-scroll hook
  Icons.tsx         Inline SVG icon set
```

## Run locally

```bash
npm install
npm run dev          # http://localhost:3000
npm run build        # production build
npm start            # production server
```

## Deploy to Vercel

Push to a Git repo and import in Vercel. Zero configuration required — it's a stock Next.js 14 app.
