// Renders src/data/cover-letter.txt to a private PDF under private/ (ignored by Git, never deployed).
//
//   pnpm generate:cover-letter                                  -> private/mostafa-kazemi-cover-letter.pdf
//   pnpm generate:cover-letter --company "Acme" --role "Staff Frontend Engineer"
//                                                               -> private/cover-letters/mostafa-kazemi-cover-letter-acme.pdf
//
// Placeholders in the text: {{role}}, {{atCompany}} (" at Acme" or nothing), {{company}} ("Acme" or "your team").
import fs from "node:fs/promises";
import path from "node:path";
import { parseArgs } from "node:util";
import { escapeHtml, htmlDocument, letterhead, renderPdf, resume, root } from "./lib/document.mjs";

const { values } = parseArgs({
  options: {
    company: { type: "string" },
    role: { type: "string", default: resume.profile.title },
    out: { type: "string" }
  }
});

const company = values.company?.trim();
const slug = company?.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
const output = values.out
  ? path.resolve(values.out)
  : path.join(root, "private", company ? `cover-letters/mostafa-kazemi-cover-letter-${slug}.pdf` : "mostafa-kazemi-cover-letter.pdf");

const tokens = { role: values.role, atCompany: company ? ` at ${company}` : "", company: company ?? "your team" };
const source = (await fs.readFile(path.join(root, "src/data/cover-letter.txt"), "utf8")).replace(/\{\{(\w+)\}\}/g, (match, key) => {
  if (!(key in tokens)) throw new Error(`Unknown placeholder ${match} in cover-letter.txt`);
  return tokens[key];
});

const [greeting, ...rest] = source.trim().split(/\n\s*\n/);
const closing = rest.pop();
const date = new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
const margins = { x: 0.85, y: 0.6 };

const css = `
  @page { size: Letter; margin: ${margins.y}in ${margins.x}in; }
  body { font-size: 10pt; line-height: 1.55; }
  .date { margin-top: 18pt; color: #525252; }
  .letter { margin-top: 14pt; }
  .letter p + p { margin-top: 9pt; }
  .closing { margin-top: 14pt; white-space: pre-line; }
`;

const html = htmlDocument({
  title: `${resume.profile.name} – Cover Letter${company ? ` for ${company}` : ""}`,
  css,
  body: `
  ${letterhead()}
  <p class="date">${escapeHtml(date)}</p>
  <div class="letter">
    <p>${escapeHtml(greeting)}</p>
    ${rest.map((paragraph) => `<p>${escapeHtml(paragraph.replace(/\s*\n\s*/g, " "))}</p>`).join("\n")}
  </div>
  <p class="closing">${escapeHtml(closing)}</p>`
});

await renderPdf({ html, output, label: "Cover letter", margins });
