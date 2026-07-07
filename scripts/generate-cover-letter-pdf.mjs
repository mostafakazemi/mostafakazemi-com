import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const rootDir = path.resolve(__dirname, "..");
const dataPath = path.join(rootDir, "src/data/resume.json");
const outputPath = path.join(rootDir, "resume/cover-letter.pdf");

const resume = JSON.parse(await fs.readFile(dataPath, "utf8"));

function displayUrl(url) {
  return url.replace("https://www.", "").replace("https://", "").replace(/\/$/, "");
}

const page = {
  width: 612,
  height: 792,
  marginX: 56,
  marginTop: 54,
  marginBottom: 54
};
const contentWidth = page.width - page.marginX * 2;

const fonts = {
  regular: "F1",
  bold: "F2"
};

const state = {
  pages: [],
  commands: [],
  y: page.marginTop
};

function normalizeText(value) {
  return String(value)
    .replaceAll("Turkiye", "Turkey")
    .replaceAll("Türkiye", "Turkey")
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

function estimateWidth(text, size) {
  return normalizeText(text).length * size * 0.46;
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

function ensureSpace(height) {
  if (state.y + height > page.height - page.marginBottom) {
    addPage();
  }
}

function writeText(text, options = {}) {
  const {
    x = page.marginX,
    size = 10,
    font = fonts.regular,
    align = "left",
    width = contentWidth
  } = options;
  const textX =
    align === "center"
      ? x + (width - estimateWidth(text, size)) / 2
      : align === "right"
        ? x + width - estimateWidth(text, size)
        : x;

  state.commands.push("BT");
  state.commands.push(`/${font} ${size} Tf`);
  state.commands.push(`${textX} ${page.height - state.y} Td`);
  state.commands.push(`(${pdfEscape(text)}) Tj`);
  state.commands.push("ET");
}

function paragraph(text, options = {}) {
  const {
    size = 10.2,
    font = fonts.regular,
    lineHeight = 15.2,
    spaceAfter = 10,
    align = "left"
  } = options;
  const lines = wrapText(text, size, contentWidth);
  ensureSpace(lines.length * lineHeight + spaceAfter);

  for (const line of lines) {
    writeText(line, {
      size,
      font,
      align
    });
    state.y += lineHeight;
  }

  state.y += spaceAfter;
}

function drawLine(y, width = 0.6) {
  const pdfY = page.height - y;
  state.commands.push(`${width} w`);
  state.commands.push(`${page.marginX} ${pdfY} m`);
  state.commands.push(`${page.marginX + contentWidth} ${pdfY} l`);
  state.commands.push("S");
}

function addHeader() {
  writeText(resume.profile.name, {
    size: 18,
    font: fonts.bold,
    align: "center"
  });
  state.y += 19;
  writeText(resume.profile.title, {
    size: 10.5,
    align: "center"
  });
  state.y += 15;
  paragraph(
    [
      resume.profile.location,
      resume.profile.remote,
      resume.profile.email,
      resume.profile.phone
    ].join(" | "),
    {
      size: 8,
      lineHeight: 10,
      spaceAfter: 1,
      align: "center"
    }
  );
  paragraph(
    [
      displayUrl(resume.profile.website),
      displayUrl(resume.profile.linkedin),
      displayUrl(resume.profile.github)
    ].join(" | "),
    {
      size: 8,
      lineHeight: 10,
      spaceAfter: 16,
      align: "center"
    }
  );
  drawLine(state.y);
  state.y += 26;
}

const letterParagraphs = [
  "Dear Hiring Team,",
  "I am writing to express my interest in Senior Frontend Engineer opportunities. I bring 6+ years of frontend engineering experience across React, Next.js, Vue, Nuxt.js, TypeScript, browser extensions, reusable component systems, and production frontend architecture for remote product teams.",
  "At Sazito, I owned React and Next.js frontend delivery for e-commerce workflows across a platform supporting 6,000+ stores, 5M+ users, and roughly 10 trillion rial in monthly transaction volume. My focus included scalable UI foundations, reusable TypeScript components, Redux and REST API flows, performance-sensitive storefront experiences, and maintainable frontend architecture.",
  "At Jack Westin, I contributed to Vue, Nuxt.js, Vue 3, TypeScript, and browser-extension products for a US-based remote edtech team. That experience included frontend systems for a Chrome extension listed with 40,000+ users, Shadow DOM isolation, cross-context messaging, Storybook component workflows, Cypress testing, and reusable UI patterns.",
  "I am strongest in teams that need a frontend engineer who can move from ambiguous product requirements to reliable implementation, collaborate well across product, design, backend, and QA, and keep codebases easier to scale over time. I care about practical architecture, clear communication, readable code, testing discipline, and UI performance.",
  "I would welcome the opportunity to discuss how my frontend architecture, product engineering, and remote collaboration experience can support your team.",
  "Sincerely,",
  resume.profile.name
];

function buildContent() {
  addPage();
  addHeader();

  for (const [index, text] of letterParagraphs.entries()) {
    if (index === 0 || index >= letterParagraphs.length - 2) {
      paragraph(text, {
        size: 10.5,
        lineHeight: 15,
        spaceAfter: index === letterParagraphs.length - 1 ? 0 : 12
      });
    } else {
      paragraph(text);
    }
  }
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
  const regularFontId = addObject(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica /Encoding /WinAnsiEncoding >>"
  );
  const boldFontId = addObject(
    "<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold /Encoding /WinAnsiEncoding >>"
  );
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
      `<< /Type /Page /Parent ${pagesId} 0 R /MediaBox [0 0 ${page.width} ${page.height}] /Resources << /Font << /F1 ${regularFontId} 0 R /F2 ${boldFontId} 0 R >> >> /Contents ${contentId} 0 R >>`
    );
    pageIds.push(pageId);
  }

  const infoId = addObject(
    `<< /Title ${pdfString(`${resume.profile.name} Cover Letter`)} /Author ${pdfString(resume.profile.name)} /Subject ${pdfString("Senior Frontend Engineer Cover Letter")} /Keywords ${pdfString("Mostafa Kazemi, Cover Letter, Senior Frontend Engineer, React, Next.js, Vue, Nuxt.js, TypeScript")} /Creator ${pdfString("mostafakazemi.com")} /Producer ${pdfString("mostafakazemi.com Cover Letter Generator")} /CreationDate ${pdfString(pdfDate())} >>`
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
