// Renders src/data/resume.json to public/resume.pdf (published with the site).
// Single-column, real-text layout so applicant tracking systems can parse it.
import path from "node:path";
import { dashes, escapeHtml, htmlDocument, letterhead, renderPdf, resume, root } from "./lib/document.mjs";

const margins = { x: 0.55, y: 0.4 };

const experience = resume.experience
  .map(
    (role) => `
    <article class="role">
      <div class="role-head">
        <h3>${escapeHtml(role.title)} <span class="at">·</span> ${escapeHtml(role.company)}${role.location ? `<span class="where">, ${escapeHtml(role.location)}</span>` : ""}</h3>
        <span class="dates">${dashes(role.period)}</span>
      </div>
      ${role.type || role.context ? `<p class="meta">${[role.type, role.context].filter(Boolean).map(dashes).join(" · ")}</p>` : ""}
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

const css = `
  @page { size: Letter; margin: ${margins.y}in ${margins.x}in; }
  body { font-size: 8.5pt; line-height: 1.35; }
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
`;

const html = htmlDocument({
  title: `${resume.profile.name} – ${resume.profile.title} Resume`,
  css,
  body: `
  ${letterhead()}
  <section><h2>Summary</h2><p class="summary">${escapeHtml(resume.summary)}</p></section>
  <section><h2>Experience</h2>${experience}</section>
  <section><h2>Skills</h2><dl>${skills}</dl></section>
  <section><h2>Education</h2>${education}</section>`
});

await renderPdf({ html, output: path.join(root, "public/resume.pdf"), label: "Resume", margins });
