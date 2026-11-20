// Renders src/data/resume.json to public/resume.pdf with headless Chromium.
// Single-column, real-text layout so applicant tracking systems can parse it.
// Requires: pnpm exec playwright install chromium
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resume = JSON.parse(await fs.readFile(path.join(root, "src/data/resume.json"), "utf8"));
const variant = resume.variants.general;
const { profile } = resume;

const escapeHtml = (value) =>
  String(value).replace(/[&<>"']/g, (char) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[char]);
// Typographic dash for date ranges.
const dates = (value) => escapeHtml(value).replace(/ - /g, " – ");
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
const bare = (url) => url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "");

const place = [`${escapeHtml(profile.location)} (UTC+3)`, escapeHtml(profile.availability)];
const contact = [
  `<a href="mailto:${escapeHtml(profile.email)}">${escapeHtml(profile.email)}</a>`,
  `<a href="${escapeHtml(profile.website)}">${escapeHtml(bare(profile.website))}</a>`,
  `<a href="${escapeHtml(profile.linkedin)}">${escapeHtml(bare(profile.linkedin))}</a>`,
  `<a href="${escapeHtml(profile.github)}">${escapeHtml(bare(profile.github))}</a>`
];

const experience = variant.experience
  .map(
    (role) => `
    <article class="role">
      <div class="role-head">
        <h3>${escapeHtml(role.title)} <span class="at">·</span> ${escapeHtml(role.company)}${role.location ? `<span class="where">, ${escapeHtml(role.location)}</span>` : ""}</h3>
        <span class="dates">${dates(role.period)}</span>
      </div>
      ${role.type || role.context ? `<p class="meta">${[role.type, role.context].filter(Boolean).map(dates).join(" · ")}</p>` : ""}
      <ul>${role.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      <p class="tech"><span>Stack:</span> ${role.technologies.map(escapeHtml).join(", ")}</p>
    </article>`
  )
  .join("");

const skills = [
  ...resume.skills.map((group) => [group.title, group.items.join(", ")]),
  ["AI-assisted development", resume.aiAssistedDevelopment.tools.join(", ")]
]
  .map(([title, items]) => `<dt>${escapeHtml(title)}</dt><dd>${escapeHtml(items)}</dd>`)
  .join("");

const education = resume.education
  .map(
    (item) => `
    <div class="role-head">
      <h3>${escapeHtml(item.degree)} <span class="at">·</span> ${escapeHtml(item.school)}<span class="where">, ${escapeHtml(item.country)}</span></h3>
      <span class="dates">${escapeHtml(item.graduated)}</span>
    </div>`
  )
  .join("");

const html = `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8" />
<title>${escapeHtml(profile.name)} – ${escapeHtml(profile.title)} Resume</title>
<meta name="author" content="${escapeHtml(profile.name)}" />
<style>
  ${fontFaces}
  @page { size: Letter; margin: 0.4in 0.55in; }
  * { box-sizing: border-box; margin: 0; padding: 0; }
  html { background: #fff; -webkit-print-color-adjust: exact; print-color-adjust: exact; }
  body { font-family: Inter, "Helvetica Neue", Arial, sans-serif; font-size: 8.5pt; line-height: 1.35; color: #262626;
    /* Alternates and ligatures break text extraction in some ATS parsers. */
    font-variant-ligatures: none; font-kerning: none; font-feature-settings: "calt" 0, "liga" 0, "kern" 0; }
  a { color: inherit; text-decoration: none; }
  header { padding-bottom: 7pt; border-bottom: 1.4pt solid #0f172a; }
  h1 { font-size: 20pt; font-weight: 700; letter-spacing: -0.02em; color: #0a0a0a; line-height: 1.1; }
  .headline { margin-top: 1pt; font-size: 10pt; font-weight: 500; color: #0369a1; }
  .place, .contact { font-size: 8pt; color: #525252; }
  .place { margin-top: 4pt; }
  .place span + span::before, .contact span + span::before { content: "·"; margin: 0 5pt; color: #a3a3a3; }
  .contact a { color: #0a0a0a; font-weight: 500; }
  section { margin-top: 8pt; }
  h2 { font-size: 8pt; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: #0369a1; padding-bottom: 3pt; border-bottom: 0.6pt solid #d4d4d4; margin-bottom: 5pt; }
  .summary { color: #404040; }
  .role { break-inside: avoid; }
  .role + .role { margin-top: 7pt; }
  .role-head { display: flex; justify-content: space-between; align-items: baseline; gap: 12pt; }
  h3 { font-size: 9.2pt; font-weight: 600; color: #0a0a0a; }
  .at { color: #a3a3a3; font-weight: 400; margin: 0 1pt; }
  .where { font-weight: 400; color: #525252; }
  .dates { font-size: 8.1pt; font-weight: 500; color: #525252; white-space: nowrap; font-variant-numeric: tabular-nums; }
  .meta { font-size: 7.9pt; color: #737373; }
  ul { margin-top: 2pt; padding-left: 10pt; }
  li { margin-top: 1pt; padding-left: 1pt; }
  li::marker { color: #0369a1; }
  .tech { margin-top: 2pt; font-size: 7.8pt; color: #737373; }
  .tech span { font-weight: 600; color: #525252; }
  dl { display: grid; grid-template-columns: 112pt 1fr; gap: 1.5pt 10pt; }
  dt { font-weight: 600; color: #0a0a0a; }
  dd { color: #404040; }
</style>
</head>
<body>
  <header>
    <h1>${escapeHtml(profile.name)}</h1>
    <p class="headline">${dates(variant.title)}</p>
    <p class="place">${place.map((item) => `<span>${item}</span>`).join("")}</p>
    <p class="contact">${contact.map((item) => `<span>${item}</span>`).join("")}</p>
  </header>
  <section><h2>Summary</h2><p class="summary">${escapeHtml(variant.summary)}</p></section>
  <section><h2>Experience</h2>${experience}</section>
  <section><h2>Skills</h2><dl>${skills}</dl></section>
  <section><h2>Education</h2>${education}</section>
</body>
</html>`;

const output = path.join(root, "public/resume.pdf");
const browser = await chromium.launch();
try {
  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: "networkidle" });
  await page.evaluate(() => document.fonts.ready);
  const usedFont = await page.evaluate(() => document.fonts.check('9pt "Inter"'));
  if (!usedFont) console.warn("Inter did not load; falling back to system sans-serif.");
  // Warn when the content no longer fits on one Letter page (11in minus 0.8in of vertical margins).
  await page.setViewportSize({ width: Math.round((8.5 - 1.1) * 96), height: 1000 });
  await page.emulateMedia({ media: "print" });
  const overflow = await page.evaluate(() => Math.ceil(document.body.scrollHeight - 10.2 * 96));
  if (overflow > 0) console.warn(`Resume overflows one page by ~${overflow}px; trim content.`);
  await fs.mkdir(path.dirname(output), { recursive: true });
  await page.pdf({ path: output, format: "Letter", printBackground: true, preferCSSPageSize: true, tagged: true, outline: false });
  if (process.env.RESUME_HTML) await fs.writeFile(process.env.RESUME_HTML, html);
} finally {
  await browser.close();
}
console.log(`Generated ${path.relative(root, output)}`);
