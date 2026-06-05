import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataPath = path.join(rootDir, "src/data/resume.json");
const outputPath = path.join(rootDir, "public/resume.pdf");

const resume = JSON.parse(await fs.readFile(dataPath, "utf8"));

function displayUrl(url) {
  return url.replace("https://www.", "").replace("https://", "").replace(/\/$/, "");
}

const page = {
  width: 612,
  height: 792,
  marginX: 40,
  marginTop: 34,
  marginBottom: 34
};
const contentWidth = page.width - page.marginX * 2;

const fonts = {
  regular: "F1",
  bold: "F2",
  italic: "F3"
};

const state = {
  pages: [],
  commands: [],
  y: page.marginTop
};

function normalizeText(value) {
  return String(value)
    .replaceAll("Türkiye", "Turkey")
    .replaceAll("Turkiye", "Turkey")
    .replaceAll("–", "-")
    .replace(/[^\x09\x0A\x0D\x20-\x7E\xA0-\xFF]/g, "");
}

function pdfEscape(value) {
  return normalizeText(value)
    .replace(/\\/g, "\\\\")
    .replace(/\(/g, "\\(")
    .replace(/\)/g, "\\)");
}

function addPage() {
  state.commands = [];
  state.pages.push(state.commands);
  state.y = page.marginTop;
}

function ensureSpace(height) {
  if (state.y + height > page.height - page.marginBottom) {
    addPage();
  }
}

function writeText(text, options = {}) {
  const {
    x = page.marginX,
    y = state.y,
    size = 10,
    font = fonts.regular,
    leading = size + 4
  } = options;

  state.commands.push("BT");
  state.commands.push(`/${font} ${size} Tf`);
  state.commands.push(`${leading} TL`);
  state.commands.push(`${x} ${page.height - y} Td`);
  state.commands.push(`(${pdfEscape(text)}) Tj`);
  state.commands.push("ET");
}

function estimateWidth(text, size) {
  return normalizeText(text).length * size * 0.48;
}

function wrapText(text, size, maxWidth) {
  const words = normalizeText(text).split(/\s+/).filter(Boolean);
  const lines = [];
  let line = "";

  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (estimateWidth(next, size) <= maxWidth || !line) {
      line = next;
    } else {
      lines.push(line);
      line = word;
    }
  }

  if (line) {
    lines.push(line);
  }

  return lines;
}

function paragraph(text, options = {}) {
  const {
    size = 8.2,
    font = fonts.regular,
    indent = 0,
    lineHeight = 9.4,
    spaceAfter = 1.2
  } = options;
  const lines = wrapText(text, size, contentWidth - indent);

  ensureSpace(lines.length * lineHeight + spaceAfter);

  for (const line of lines) {
    writeText(line, {
      x: page.marginX + indent,
      size,
      font,
      leading: lineHeight
    });
    state.y += lineHeight;
  }

  state.y += spaceAfter;
}

function heading(text) {
  ensureSpace(18);
  state.y += 4.2;
  writeText(text.toUpperCase(), {
    size: 8.8,
    font: fonts.bold
  });
  state.y += 10.5;
}

function bullet(text) {
  paragraph(`- ${text}`, {
    indent: 8,
    lineHeight: 9.2,
    spaceAfter: 0.5
  });
}

function labelValue(label, value) {
  paragraph(`${label}: ${value}`, {
    size: 8,
    lineHeight: 9.2,
    spaceAfter: 0.4
  });
}

function addHeader() {
  writeText(resume.profile.name, {
    size: 19,
    font: fonts.bold
  });
  state.y += 21;
  writeText(resume.profile.title, {
    size: 10.5,
    font: fonts.bold
  });
  state.y += 13.5;
  paragraph(
    [
      resume.profile.location,
      resume.profile.remote,
      resume.profile.email,
      resume.profile.phone,
      displayUrl(resume.profile.website),
      displayUrl(resume.profile.github),
      displayUrl(resume.profile.linkedin)
    ].join(" | "),
    {
      size: 7.4,
      lineHeight: 8.8,
      spaceAfter: 1.5
    }
  );
}

function addSummary() {
  heading("Summary");
  for (const item of resume.summary) {
    paragraph(item);
  }
}

function addAchievements() {
  heading("Selected Achievements");
  for (const item of resume.achievements) {
    bullet(item);
  }
}

function addSkills() {
  heading("Skills");
  for (const group of resume.skills) {
    labelValue(group.title, group.items.join(", "));
  }
  state.y += 4;
}

function addExperience() {
  heading("Experience");
  for (const role of resume.experience) {
    ensureSpace(56);
    writeText(`${role.title} - ${role.company}${role.location ? ` (${role.location})` : ""}`, {
      size: 9.4,
      font: fonts.bold
    });
    state.y += 11.5;
    writeText([role.period, role.type].filter(Boolean).join(" | "), {
      size: 7.7,
      font: fonts.italic
    });
    state.y += 9.6;
    for (const item of role.highlights) {
      bullet(item);
    }
    paragraph(`Technologies: ${role.technologies.join(", ")}`, {
      size: 7.7,
      lineHeight: 8.8,
      spaceAfter: 0.5
    });
    state.y += 1.8;
  }
}

function addEducation() {
  heading("Education");
  for (const item of resume.education) {
    paragraph(item.degree, {
      spaceAfter: 0.2
    });
    paragraph([item.school, item.country, item.graduated].filter(Boolean).join(", "), {
      spaceAfter: 1
    });
  }
}

function buildContent() {
  addPage();
  addHeader();
  addSummary();
  addAchievements();
  addSkills();
  addExperience();
  addEducation();
}

function streamForCommands(commands) {
  return Buffer.from(`${commands.join("\n")}\n`, "latin1");
}

function pdfDate(date = new Date()) {
  const pad = (value) => String(value).padStart(2, "0");
  return `D:${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(date.getUTCDate())}${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(date.getUTCSeconds())}Z`;
}

function pdfString(value) {
  return `(${pdfEscape(value)})`;
}

function createPdf() {
  buildContent();

  const objects = [];
  const addObject = (content) => {
    objects.push(Buffer.isBuffer(content) ? content : Buffer.from(content, "latin1"));
    return objects.length;
  };

  const catalogId = addObject("placeholder");
  const pagesId = addObject("placeholder");
  const regularFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>");
  const boldFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>");
  const italicFontId = addObject("<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Oblique >>");
  const pageIds = [];

  for (const commands of state.pages) {
    const stream = streamForCommands(commands);
    const contentId = addObject(
      Buffer.concat([
        Buffer.from(`<< /Length ${stream.length} >>\nstream\n`, "latin1"),
        stream,
        Buffer.from("endstream", "latin1")
      ])
    );
    const pageId = addObject(
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R /F3 ${italicFontId} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  }

  const infoId = addObject(
    `<< /Title ${pdfString(`${resume.profile.name} Resume`)} /Author ${pdfString(resume.profile.name)} /Subject ${pdfString("Senior Frontend Engineer Resume")} /Keywords ${pdfString("Mostafa Kazemi, Senior Frontend Engineer, React, Next.js, Vue, Nuxt.js, TypeScript")} /Creator ${pdfString("mostafakazemi.com")} /Producer ${pdfString("mostafakazemi.com Resume Generator")} /CreationDate ${pdfString(pdfDate())} >>`
  );

  objects[catalogId - 1] = Buffer.from(`<< /Type /Catalog /Pages ${pagesId} 0 R >>`, "latin1");
  objects[pagesId - 1] = Buffer.from(
    `<< /Type /Pages /Kids [${pageIds.map((id) => `${id} 0 R`).join(" ")}] /Count ${pageIds.length} >>`,
    "latin1"
  );

  const chunks = [Buffer.from("%PDF-1.4\n%\xE2\xE3\xCF\xD3\n", "binary")];
  const offsets = [0];

  for (let index = 0; index < objects.length; index += 1) {
    offsets.push(Buffer.concat(chunks).length);
    chunks.push(Buffer.from(`${index + 1} 0 obj\n`, "latin1"));
    chunks.push(objects[index]);
    chunks.push(Buffer.from("\nendobj\n", "latin1"));
  }

  const xrefOffset = Buffer.concat(chunks).length;
  chunks.push(Buffer.from(`xref\n0 ${objects.length + 1}\n`, "latin1"));
  chunks.push(Buffer.from("0000000000 65535 f \n", "latin1"));
  for (let index = 1; index < offsets.length; index += 1) {
    chunks.push(Buffer.from(`${String(offsets[index]).padStart(10, "0")} 00000 n \n`, "latin1"));
  }
  chunks.push(
    Buffer.from(
      `trailer\n<< /Size ${objects.length + 1} /Root ${catalogId} 0 R /Info ${infoId} 0 R >>\nstartxref\n${xrefOffset}\n%%EOF\n`,
      "latin1"
    )
  );

  return Buffer.concat(chunks);
}

await fs.mkdir(path.dirname(outputPath), { recursive: true });
await fs.writeFile(outputPath, createPdf());
console.log(`Generated ${path.relative(rootDir, outputPath)}`);
