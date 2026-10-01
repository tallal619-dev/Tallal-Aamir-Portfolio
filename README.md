# Muhammad Tallal Aamir Portfolio

Premium personal portfolio for Muhammad Tallal Aamir, built with Next.js, React, Tailwind CSS, GSAP, Three.js, and React Bits-inspired motion components.

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Deploy

Import this repository into Netlify as a Next.js project. Netlify should auto-detect the framework; use `npm run build` as the build command if prompted.

## Content and assets

- Shared content and portfolio modes: `src/data/portfolio.ts`.
- Additional projects from the 2026 resumes: `src/data/resume-projects.ts`.
- Live-project previews: `public/assets/work/`. These are compressed captures of the public websites, taken September 30, 2026. Live sites can change after delivery.
- Case-study previews in `public/assets/case-studies/interfaces/` are designed interface recreations with illustrative products and sample records, not client screenshots or verified business metrics. Each preview carries this disclosure in the portfolio.
- Edit `scripts/generate-case-previews.mjs` and run `node scripts/generate-case-previews.mjs` to regenerate the 15 SVG previews. They use project-specific layouts and fixed light palettes, independent of the portfolio's dark theme. Case-study dialogs include a full-size preview link.
- Resume downloads use the supplied 2026 PDFs. Older download filenames also serve the updated senior resumes.
- Fiverr's public profile was checked September 30, 2026: 5.0 overall, 30 reviews, Level 1. Update the snapshot date along with future rating changes.
- The contact form prepares an email draft; visitors send it through their own email application. WhatsApp and direct email remain available.
