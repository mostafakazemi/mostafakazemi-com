import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resume = JSON.parse(await fs.readFile(path.join(root, "src/data/resume.json"), "utf8"));
const page = { width: 612, height: 792, left: 42, right: 42, top: 35, bottom: 34 };
const width = page.width - page.left - page.right;

function clean(value) {
  return String(value).replaceAll("–", "-").replaceAll("—", "-").replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
}
function escapePdf(value) { return clean(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)"); }
function estimate(value, size) { return clean(value).length * size * 0.47; }
function wrap(value, size, maxWidth) {
  const words = clean(value).split(/\s+/).filter(Boolean); const lines = []; let line = "";
  for (const word of words) { const next = line ? `${line} ${word}` : word; if (!line || estimate(next, size) <= maxWidth) line = next; else { lines.push(line); line = word; } }
  if (line) lines.push(line); return lines;
}

function makeDocument(variantKey) {
  const variant = resume.variants[variantKey];
  const state = { pages: [], commands: [], y: page.top };
  const addPage = () => { state.commands = []; state.pages.push(state.commands); state.y = page.top; };
  const ensure = (height) => { if (state.y + height > page.height - page.bottom) addPage(); };
  const text = (value, { x = page.left, y = state.y, size = 8.8, bold = false, align = "left", boxWidth = width } = {}) => {
    let tx = x; if (align === "center") tx += (boxWidth - estimate(value, size)) / 2; if (align === "right") tx += boxWidth - estimate(value, size);
    state.commands.push("BT", `/${bold ? "F2" : "F1"} ${size} Tf`, `${tx.toFixed(2)} ${(page.height - y).toFixed(2)} Td`, `(${escapePdf(value)}) Tj`, "ET");
  };
  const paragraph = (value, { size = 8.8, lineHeight = 11, after = 3.2, indent = 0, bold = false, align = "left" } = {}) => {
    const lines = wrap(value, size, width - indent); ensure(lines.length * lineHeight + after);
    lines.forEach((line) => { text(line, { x: page.left + indent, size, bold, align, boxWidth: width - indent }); state.y += lineHeight; }); state.y += after;
  };
  const heading = (value) => {
    ensure(28); state.y += 4; text(value.toUpperCase(), { size: 9, bold: true }); state.y += 9;
    const py = page.height - state.y; state.commands.push("0.55 w", `${page.left} ${py} m`, `${page.left + width} ${py} l`, "S"); state.y += 12;
  };
  const bullet = (value) => {
    const size = 8.65, lineHeight = 10.6, indent = 11; const lines = wrap(value, size, width - indent); ensure(lines.length * lineHeight + 2);
    text("-", { x: page.left + 1, size: 8.8, bold: true });
    lines.forEach((line) => { text(line, { x: page.left + indent, size }); state.y += lineHeight; }); state.y += 1.7;
  };

  addPage();
  text(resume.profile.name, { size: 19, bold: true, align: "center" }); state.y += 18;
  text(variant.title, { size: 10, align: "center" }); state.y += 12;
  paragraph(`${resume.profile.location} | ${resume.profile.availability} | ${resume.profile.email} | ${resume.profile.phone}`, { size: 7.5, lineHeight: 9, after: 0, align: "center" });
  text("mostafakazemi.com | linkedin.com/in/mostafakazemi | github.com/mostafakazemi", { size: 7.5, align: "center" }); state.y += 12;

  heading("Summary"); paragraph(variant.summary, { size: 8.9, lineHeight: 11, after: 1 });
  heading("Experience");
  for (const role of variant.experience) {
    ensure(32);
    text(`${role.title} - ${role.company}${role.location ? ` (${role.location})` : ""}`, { size: 9.1, bold: true });
    text([role.period, role.type].filter(Boolean).join(" | "), { size: 8.1, align: "right" }); state.y += 11;
    paragraph(`Technologies: ${role.technologies.join(", ")}`, { size: 7.9, lineHeight: 9.6, after: 2.5 });
    role.highlights.forEach(bullet); state.y += 2.5;
  }
  heading("Skills");
  for (const group of resume.skills[variantKey]) paragraph(`${group.title}: ${group.items.join(", ")}`, { size: 8.45, lineHeight: 10.4, after: 1.4 });
  heading("Education");
  const education = resume.education[0];
  text(`${education.degree} - ${education.school}, ${education.country}`, { size: 8.8, bold: true });
  text(`Graduated ${education.graduated}`, { size: 8.2, align: "right" });
  return state.pages;
}

function buildPdf(pages) {
  const objects = [null]; const add = (value) => { objects.push(value); return objects.length - 1; };
  const fontRegular = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const fontBold = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const pageIds = [], contentIds = [];
  for (const commands of pages) { const stream = Buffer.from(`${commands.join("\n")}\n`, "latin1"); contentIds.push(add({ stream })); pageIds.push(add(null)); }
  const pagesId = add(null);
  pageIds.forEach((id, index) => { objects[id] = `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${fontRegular} 0 R /F2 ${fontBold} 0 R >> >> /Contents ${contentIds[index]} 0 R >>`; });
  objects[pagesId] = `<< /Type /Pages /Count ${pageIds.length} /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] >>`;
  const catalog = add(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`);
  const chunks = [Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "latin1")], offsets = [0]; let offset = chunks[0].length;
  for (let id = 1; id < objects.length; id++) { offsets[id] = offset; const value = objects[id]; const body = value?.stream ? Buffer.concat([Buffer.from(`<< /Length ${value.stream.length} >>\nstream\n`, "latin1"), value.stream, Buffer.from("endstream", "latin1")]) : Buffer.from(String(value), "latin1"); const obj = Buffer.concat([Buffer.from(`${id} 0 obj\n`, "latin1"), body, Buffer.from("\nendobj\n", "latin1")]); chunks.push(obj); offset += obj.length; }
  const xrefOffset = offset; const xref = ["xref", `0 ${objects.length}`, "0000000000 65535 f "];
  for (let id = 1; id < objects.length; id++) xref.push(`${String(offsets[id]).padStart(10, "0")} 00000 n `);
  chunks.push(Buffer.from(`${xref.join("\n")}\ntrailer\n<< /Size ${objects.length} /Root ${catalog} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`, "latin1"));
  return Buffer.concat(chunks);
}

const outputs = {
  vue: path.join(root, "public/resume/vue/mostafa-kazemi-senior-frontend-vue.pdf"),
  react: path.join(root, "public/resume/react/mostafa-kazemi-senior-frontend-react.pdf")
};
for (const [key, output] of Object.entries(outputs)) { await fs.mkdir(path.dirname(output), { recursive: true }); await fs.writeFile(output, buildPdf(makeDocument(key))); console.log(`Generated ${path.relative(root, output)}`); }
await fs.copyFile(outputs.react, path.join(root, "public/resume.pdf"));
