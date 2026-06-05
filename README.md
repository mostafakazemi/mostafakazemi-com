# mostafakazemi-com

Personal portfolio website for Mostafa Kazemi, Senior Frontend Engineer.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- App Router
- Tailwind CSS
- ESLint
- pnpm

## Local Development

Install dependencies:

```bash
pnpm install
```

Start the development server:

```bash
pnpm dev
```

Open `http://localhost:3000`.

## Build

Create a production build. This also regenerates `public/resume.pdf` from `src/data/resume.json` before the Next.js build runs:

```bash
pnpm build
```

Generate the resume PDF only:

```bash
pnpm generate:resume
```

## Lint

Run ESLint:

```bash
pnpm lint
```

## Deploy To Vercel

1. Push this repository to GitHub.
2. Import the GitHub repository into Vercel.
3. Use `pnpm build` as the build command.
4. Deploy the project.

The project is configured for static export, so the production output is written to `out/`.

## Deploy To GitHub Pages

1. Run `pnpm build`.
2. Publish the generated `out/` directory with GitHub Pages.
3. Use the included GitHub Actions workflow if you want automated deployment from GitHub.

## Custom Domain

After deployment, add `mostafakazemi.com` in:

`Vercel Project Settings -> Domains`

Then configure the DNS records exactly as Vercel instructs. DNS requirements can vary by registrar, so Vercel should be treated as the source of truth for the final records.

## Content

Portfolio content is centralized in `src/data/portfolio.ts`. Resume content is centralized in `src/data/resume.json` and powers both `/resume` and `public/resume.pdf`.
