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
The form posts directly from the visitor’s browser to https://formsubmit.co/sanjayaar03@gmail.com using FormSubmit’s native HTML form flow. It no longer depends on Vercel making an outbound email-service request. The recipient is fixed in components/contact-form.tsx. The email field supplies Reply-To, the subject is New consultation request — Digital Sanjaya, and all enquiry fields are included.

With JavaScript enabled, /api/contact performs server validation and local rate limiting before the browser submits to FormSubmit. That endpoint returns validated:true only; it does not send an email or claim success. Native browser validation and FormSubmit’s provider-side checks apply to the final submission. The server precheck is not a security boundary for a public FormSubmit endpoint. Without JavaScript, native form submission remains available.

FormSubmit’s default CAPTCHA remains enabled. The visitor completes verification on FormSubmit, and the provider shows the result. No fake thank-you page or query-string success message is used. FormSubmit may require recipient activation for the production domain; use the activation email for that domain. Check the inbox and Spam for activation and test messages. Inbox delivery cannot be confirmed without recipient verification.

Deploy this updated source to Vercel before testing the public site. In Vercel set NEXT_PUBLIC_SITE_URL=https://www.sanjayranpal.com.np and redeploy. Merely changing the local source does not update the live site.

## Structure
Shared header/footer, CTA, service and article cards, FAQ, portrait, and form components live in components/. App Router pages include three service routes, three article routes, searchable category filters, sitemap, robots, and a helpful 404. No analytics or tracking scripts are included.

### Live delivery troubleshooting
If the live contact form still calls the old email relay and shows the old delivery error, the latest source has not been redeployed. The corrected form uses the FormSubmit native action. Check the rendered form action in the browser after deployment.
