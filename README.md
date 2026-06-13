# David Flynn-Coutts Portfolio

Personal portfolio site for [flynncoutts.com](https://flynncoutts.com), also available at [david.flynncoutts.com](https://david.flynncoutts.com).

The site is a single-page, editorial portfolio for Senior Product Manager roles. It leads with a sharp hero, quantified experience, two shipped projects, and a contact form.

## Tech Stack

- Next.js 15 App Router
- React 19
- TypeScript
- Tailwind CSS 4
- Resend for the contact form
- Vercel Speed Insights

## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

```bash
npm run dev      # Start local development server
npm run build    # Create production build
npm run start    # Start production server after build
npm run lint     # Run ESLint
```

## Environment

The contact form sends email through Resend. Local development and production need:

```bash
RESEND_API_KEY=...
```

The server action is in `app/actions/contact.ts`. It sends from `contact@flynncoutts.com` to `d.coutts@gmail.com` and uses the submitted email as `replyTo`.

## Content Map

Most homepage content is hardcoded in React components:

- `components/hero.tsx` - hero headline, lead copy, portrait, outcome ledger
- `components/experience.tsx` - work experience and metrics
- `components/portfolio.tsx` - Stayright and Halve project copy, links, images
- `components/contact.tsx` - contact section and form UI copy
- `components/footer.tsx` - footer links and copyright
- `components/navigation.tsx` - masthead and page index links

Site metadata, canonical domain, Open Graph copy, and fonts live in `app/layout.tsx`.

The sitemap and robots entries use `https://flynncoutts.com`:

- `app/sitemap.ts`
- `app/robots.ts`

## Assets

Static files live in `public/`.

Current key assets:

- `public/7819-0750.jpg` - portrait used in the hero
- `public/stayright.png` - Stayright project screenshot
- `public/parity.png` - Halve project screenshot
- `public/DavidFlynnCoutts_Resume.pdf` - downloadable CV

The portfolio component expects the project screenshots at `/stayright.png` and `/parity.png`.

## Blog

The blog route exists, but there are no public posts at the moment.

Posts are defined in `data/blog-posts.ts`. When that array is empty:

- `/blog` shows the empty state
- individual posts are unavailable
- blog URLs are omitted from the sitemap

Add posts by adding `BlogPost` entries to `data/blog-posts.ts`.

## Deployment

The site is intended to deploy on Vercel from the GitHub repository:

```text
https://github.com/bandicoutts/portfolio-website
```

Before pushing meaningful changes, run:

```bash
npm run lint
npm run build
```

Pushing to `main` updates the production deployment through the connected Vercel project.

## Notes For Future Edits

- The current design is light, editorial, and typography-led.
- Keep copy direct, specific, and proof-led.
- Use `Stayright` with a lowercase `r`.
- The correct public domain is `flynncoutts.com`; `david.flynncoutts.com` is also valid.
- Avoid reintroducing old template assumptions such as placeholder projects, Typeform, education blocks, or a dark-mode toggle unless the site actually adds them again.
