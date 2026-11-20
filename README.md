# mostafakazemi-com

Personal portfolio website for Mostafa Kazemi, Senior Frontend Engineer.

## Tech Stack

- Next.js 16 (App Router, static export)
- React 19
- TypeScript
- Tailwind CSS
- Playwright (Chromium) for PDFs and screenshots
- ESLint
- pnpm

## Local Development

Install dependencies and the Chromium build used for PDFs and screenshots:

```bash
pnpm install
pnpm exec playwright install chromium
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Build

Create a production build. `prebuild` regenerates the case-study registry and `public/resume.pdf` first:

```bash
pnpm build
```

The site is a static export written to `out/`.

## Lint

```bash
pnpm lint
```

## Deploy

Pushing to `main` runs `.github/workflows/deploy.yml`, which installs Chromium, lints, builds, and publishes `out/` to GitHub Pages. The custom domain `mostafakazemi.com` is configured in the repository's GitHub Pages settings.

## Content

| What | Source | Output |
| --- | --- | --- |
| Portfolio sections | `src/data/portfolio.ts` | Home page |
| Case studies | `src/data/case-studies/*.ts` | `/case-studies/<slug>` |
| Resume | `src/data/resume.json` | `/resume` page and `public/resume.pdf` |
| Cover letter | `src/data/cover-letter.txt` | `private/` (ignored by Git, never deployed) |
| Screenshots | `scripts/capture-screenshots.mjs` | `public/screenshots/*.webp` |

## Documents

The resume and cover letter share one letterhead and renderer (`scripts/lib/document.mjs`). Both are one-page US Letter PDFs with real, single-column text so applicant tracking systems can parse them. The generator warns if content overflows the page.

```bash
# Resume -> public/resume.pdf (also runs on every build)
pnpm generate:resume

# Generic cover letter -> private/mostafa-kazemi-cover-letter.pdf
pnpm generate:cover-letter

# Tailored cover letter -> private/cover-letters/mostafa-kazemi-cover-letter-acme.pdf
pnpm generate:cover-letter --company "Acme" --role "Staff Frontend Engineer"
```

The cover letter text supports `{{role}}`, `{{atCompany}}` (" at Acme" or nothing), and `{{company}}` ("Acme" or "your team").

## Screenshots

```bash
pnpm capture:screenshots              # all targets
pnpm capture:screenshots store-offerie   # specific ids
```
