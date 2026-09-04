import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const resume = JSON.parse(await fs.readFile(path.join(root, "src/data/resume.json"), "utf8"));
const source = await fs.readFile(path.join(root, "src/data/general-cover-letter.txt"), "utf8");
const output = path.join(root, "public/cover-letter/general/mostafa-kazemi-general-senior-frontend-cover-letter.pdf");
const page = { width: 612, height: 792, left: 56, right: 56, top: 50, bottom: 50 };
const contentWidth = page.width - page.left - page.right;
const commands = [];
let y = page.top;
const clean = (value) => String(value).replaceAll("–", "-").replaceAll("—", "-").replace(/[^\x09\x0A\x0D\x20-\x7E]/g, "");
const esc = (value) => clean(value).replace(/\\/g, "\\\\").replace(/\(/g, "\\(").replace(/\)/g, "\\)");
const estimate = (value, size) => clean(value).length * size * 0.47;
function wrap(value, size, maxWidth = contentWidth) {
  const words = clean(value).split(/\s+/).filter(Boolean), lines = []; let line = "";
  for (const word of words) { const next = line ? `${line} ${word}` : word; if (!line || estimate(next, size) <= maxWidth) line = next; else { lines.push(line); line = word; } }
  if (line) lines.push(line); return lines;
}
function text(value, { size = 10, bold = false, align = "left" } = {}) {
  let x = page.left; if (align === "center") x += (contentWidth - estimate(value, size)) / 2;
  commands.push("BT", `/${bold ? "F2" : "F1"} ${size} Tf`, `${x.toFixed(2)} ${(page.height - y).toFixed(2)} Td`, `(${esc(value)}) Tj`, "ET");
}
function paragraph(value, { size = 10.2, lineHeight = 15, after = 11, bold = false } = {}) {
  for (const line of wrap(value, size)) { text(line, { size, bold }); y += lineHeight; } y += after;
}

text(resume.profile.name, { size: 18, bold: true, align: "center" }); y += 19;
text(resume.profile.title, { size: 10.5, align: "center" }); y += 14;
text(`${resume.profile.location} | ${resume.profile.availability}`, { size: 8, align: "center" }); y += 11;
text(`${resume.profile.email} | ${resume.profile.phone}`, { size: 8, align: "center" }); y += 11;
text("mostafakazemi.com | linkedin.com/in/mostafakazemi | github.com/mostafakazemi", { size: 8, align: "center" }); y += 14;
commands.push("0.6 w", `${page.left} ${page.height - y} m`, `${page.left + contentWidth} ${page.height - y} l`, "S"); y += 22;

for (const block of source.trim().split(/\n\s*\n/)) {
  const isGreeting = block === "Dear Hiring Team," || block === "Sincerely," || block === resume.profile.name;
  paragraph(block, { size: 10.2, lineHeight: 15, after: isGreeting ? 10 : 12 });
}

const objects = [null]; const add = (value) => { objects.push(value); return objects.length - 1; };
const regular = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>"), bold = add("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
const stream = Buffer.from(`${commands.join("\n")}\n`, "latin1"), content = add({ stream }), pageId = add(null), pages = add(null);
objects[pageId] = `<< /Type /Page /Parent ${pages} 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${regular} 0 R /F2 ${bold} 0 R >> >> /Contents ${content} 0 R >>`;
objects[pages] = `<< /Type /Pages /Count 1 /Kids [${pageId} 0 R] >>`; const catalog = add(`<< /Type /Catalog /Pages ${pages} 0 R >>`);
const chunks = [Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "latin1")], offsets = [0]; let offset = chunks[0].length;
for (let id = 1; id < objects.length; id++) { offsets[id] = offset; const value = objects[id]; const body = value?.stream ? Buffer.concat([Buffer.from(`<< /Length ${value.stream.length} >>\nstream\n`, "latin1"), value.stream, Buffer.from("endstream", "latin1")]) : Buffer.from(String(value), "latin1"); const obj = Buffer.concat([Buffer.from(`${id} 0 obj\n`, "latin1"), body, Buffer.from("\nendobj\n", "latin1")]); chunks.push(obj); offset += obj.length; }
const xrefOffset = offset, xref = ["xref", `0 ${objects.length}`, "0000000000 65535 f "];
for (let id = 1; id < objects.length; id++) xref.push(`${String(offsets[id]).padStart(10, "0")} 00000 n `);
chunks.push(Buffer.from(`${xref.join("\n")}\ntrailer\n<< /Size ${objects.length} /Root ${catalog} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`, "latin1"));
await fs.mkdir(path.dirname(output), { recursive: true }); await fs.writeFile(output, Buffer.concat(chunks));
await fs.copyFile(output, path.join(root, "public/cover-letter.pdf"));
console.log(`Generated ${path.relative(root, output)}`);
