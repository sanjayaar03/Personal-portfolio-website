# Digital Sanjaya

Complete local Next.js / TypeScript / Tailwind portfolio. Not deployed.

## Run
Install Node.js 20.9 or later and pnpm. Run pnpm install, copy .env.example to .env.local, then pnpm dev. Open http://localhost:3000. Production: pnpm build then pnpm start. Checks: pnpm lint and pnpm typecheck.

## Edit
- content/site.ts: name, email, optional phone and social links, service copy, FAQs, booking configuration. Empty social links are omitted.
- content/articles.ts: article titles, summaries, categories, reading-time labels, and body sections. Add a unique slug to create a new article route automatically.
- app/page.tsx and app/about/page.tsx: homepage and introduction copy. Replace the clearly marked background placeholder.
- Portraits: put your photo in public/portrait.jpg and set site.portrait to /portrait.jpg. The shared portrait component supplies dimensions and alt text. No photo is presented as you.
- app/globals.css: colors, spacing, responsive styling.

## Before launch
Set NEXT_PUBLIC_SITE_URL to your actual HTTPS production origin (without a trailing slash), then rebuild. The local default is localhost, not an invented business domain. Canonicals, robots and sitemap use this setting. Set NEXT_PUBLIC_BOOKING_URL to a real absolute booking URL and rebuild to connect all consultation CTAs; otherwise they lead to the consultation request form. A request never implies a confirmed appointment.

## Contact delivery
The server endpoint forwards validated enquiries to https://formsubmit.co/ajax/sanjayaar03%40gmail.com. No API key is required. The recipient is fixed server-side; visitors cannot change the destination. Reply-To uses the visitor’s email and the subject is New consultation request — Digital Sanjaya.

FormSubmit requires recipient activation. Submit one test, then open the activation email sent to sanjayaar03@gmail.com and activate the form. Check Spam as well as Inbox. Repeat the test after activation and confirm it arrives. Activate again for a new production origin if FormSubmit requests it. A positive provider response confirms acceptance for processing, not inbox placement. Do not claim verified email delivery until the owner confirms receipt.

The endpoint retains server validation, body limits, same-origin checks, a honeypot, minimum completion time, and a basic in-memory rate limiter. The AJAX integration uses our existing spam checks instead of a third-party CAPTCHA. In production, use trusted proxy headers and durable rate limiting. No enquiry data is placed in browser storage. FormSubmit processes submissions; review its privacy policy and retention before launch.

## Structure
Shared header/footer, CTA, service and article cards, FAQ, portrait, and form components live in components/. App Router pages include three service routes, three article routes, searchable category filters, sitemap, robots, and a helpful 404. No analytics or tracking scripts are included.
