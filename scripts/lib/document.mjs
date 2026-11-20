// Shared helpers for the resume and cover-letter PDFs: data, letterhead, fonts, and Chromium rendering.
// Requires: pnpm exec playwright install chromium
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

export const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "../..");
export const resume = JSON.parse(await fs.readFile(path.join(root, "src/data/resume.json"), "utf8"));

export const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
/** Escapes text and turns spaced hyphens in ranges ("Jun 2022 - Present") into en dashes. */
export const dashes = (value) => escapeHtml(value).replace(/ - /g, " – ");
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

// Static Inter files: Google's variable Inter breaks text extraction in PDF parsers.
const fontDir = path.join(root, "node_modules/@fontsource/inter/files");
const fontFaces = (
  await Promise.all(
    [400, 500, 600, 700].map(async (weight) => {
      const data = await fs.readFile(path.join(fontDir, `inter-latin-${weight}-normal.woff2`), "base64");
      return `@font-face { font-family: "Inter"; font-weight: ${weight}; font-style: normal; src: url(data:font/woff2;base64,${data}) format("woff2"); }`;
    })
  )
).join("\n");

export const baseCss = `
  ${fontFaces}
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: Inter, "Helvetica Neue", Arial, sans-serif; color: #262626;
    /* Alternates, kerning, and ligatures break text extraction in some ATS parsers. */
    font-variant-ligatures: none; font-kerning: none; font-feature-settings: "calt" 0, "liga" 0, "kern" 0; }
  a { color: inherit; text-decoration: none; }
  header { padding-bottom: 7pt; border-bottom: 1.4pt solid #0f172a; }
  h1 { font-size: 20pt; font-weight: 700; letter-spacing: -0.02em; color: #0a0a0a; line-height: 1.1; }
  .headline { margin-top: 1pt; font-size: 10pt; font-weight: 500; color: #0369a1; }
  .place, .contact { font-size: 8pt; line-height: 1.35; color: #525252; }
  .place { margin-top: 4pt; }
  .place span + span::before, .contact span + span::before { content: "·"; margin: 0 5pt; color: #a3a3a3; }
  .contact a { color: #0a0a0a; font-weight: 500; }
`;

/** Name, headline, location, and contact links shared by both documents. */
export function letterhead() {
  const { profile } = resume;
  const place = [`${escapeHtml(profile.location)} (UTC+3)`, escapeHtml(profile.availability)];
  const contact = [
    `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>`,
    `<a href="${escapeHtml(profile.website)}">${escapeHtml(bare(profile.website))}</a>`,
    `<a href="${escapeHtml(profile.linkedin)}">${escapeHtml(bare(profile.linkedin))}</a>`,
    `<a href="${escapeHtml(profile.github)}">${escapeHtml(bare(profile.github))}</a>`
  ];
  return `<header>
    <h1>${escapeHtml(profile.name)}</h1>
    <p class="headline">${dashes(resume.headline)}</p>
    <p class="place">${place.map((item) => `<span>${item}</span>`).join("")}</p>
    <p class="contact">${contact.map((item) => `<span>${item}</span>`).join("")}</p>
  </header>`;
}

export function htmlDocument({ title, css, body }) {
  return `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(title)}</title>
<meta name="author" content="${escapeHtml(resume.profile.name)}" />
<style>${baseCss}${css}</style>
</head>
<body>${body}</body>
</html>`;
}

/**
 * Prints HTML to a one-page US Letter PDF and warns if the content overflows the page.
 * `margins` must match the @page margins in the document CSS (inches).
 */
export async function renderPdf({ html, output, label, margins }) {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "load" });
    await page.evaluate(() => document.fonts.ready);
    if (!(await page.evaluate(() => document.fonts.check('9pt "Inter"')))) {
      console.warn("Inter did not load; falling back to system sans-serif.");
    }
    await page.setViewportSize({ width: Math.round((8.5 - margins.x * 2) * 96), height: 1000 });
    await page.emulateMedia({ media: "print" });
    const available = (11 - margins.y * 2) * 96;
    const overflow = await page.evaluate((limit) => Math.ceil(document.body.scrollHeight - limit), available);
    if (overflow > 0) console.warn(`${label} overflows one page by ~${overflow}px; trim content.`);
    await fs.mkdir(path.dirname(output), { recursive: true });
    await page.pdf({ path: output, format: "Letter", printBackground: true, preferCSSPageSize: true, tagged: true });
  } finally {
    await browser.close();
  }
  console.log(`Generated ${path.relative(root, output)}`);
}
