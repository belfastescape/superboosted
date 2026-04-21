# Superboosted

Marketing site for Superboosted — websites for small Kiwi businesses.

Built with Next.js 14 (App Router), TypeScript, and Tailwind CSS. Designed to deploy to Vercel.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Deploy to Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset will auto-detect as **Next.js**. Nothing else to change.
4. Set environment variables (see `.env.example`):
   - `CONTACT_EMAIL` — where lead notifications should go.
   - `RESEND_API_KEY` (optional) — to enable real email delivery.
5. After the first deploy, add your custom domain (`superboosted.design`) in **Settings → Domains**. Vercel will handle SSL automatically.

## Wire up the contact form

Out of the box, form submissions are logged to Vercel's runtime logs (Project → Logs). You'll see each new lead there. That's enough for the first week.

Once you're ready for email delivery:

1. Create an account at [resend.com](https://resend.com) (free tier is plenty for this stage).
2. Add your domain and verify DNS.
3. `npm i resend`
4. Uncomment the email block in `app/api/contact/route.ts`.
5. Set `RESEND_API_KEY` and `CONTACT_EMAIL` in Vercel env.

## Editing content

Everything is plain React in `/components/*.tsx`. Copy lives in-component as arrays — edit the words directly, no CMS required. This site is your agency site; edit freely.

Brand colours live in `tailwind.config.ts` (`ink`, `accent`). Change them there and they propagate.

## Next steps

- Replace the three placeholder template gradients in `components/Demos.tsx` with real screenshots once you've built client templates.
- Add real case studies and testimonials as you land founding customers.
- Consider adding Vercel Analytics (`npm i @vercel/analytics`) and Vercel Speed Insights once you have traffic.

## Structure

```
app/
  layout.tsx          Root layout, metadata, fonts
  page.tsx            Home page: stitches the sections together
  globals.css         Tailwind base + a few globals
  api/contact/route.ts   POST handler for the contact form
components/
  Nav.tsx             Sticky top nav
  Hero.tsx            Above-the-fold headline + CTAs
  WhyUs.tsx           Four differentiators
  HowItWorks.tsx      Four-step process
  WhatYouGet.tsx      Feature grid
  Demos.tsx           Three template cards
  Pricing.tsx         Essential and Complete plans
  FAQ.tsx             Collapsible Q&A
  Contact.tsx         Intake form
  Footer.tsx
```
