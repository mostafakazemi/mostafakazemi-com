// Captures product screenshots into public/screenshots as WebP.
// Usage: pnpm capture:screenshots [id ...]   (no ids = capture everything)
// Requires: pnpm exec playwright install chromium
import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "playwright";
import sharp from "sharp";

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(rootDir, "public/screenshots");

const desktop = { viewport: { width: 1280, height: 800 }, deviceScaleFactor: 1.5, outWidth: 1600 };
const mobile = { viewport: { width: 390, height: 844 }, deviceScaleFactor: 2, outWidth: 780, isMobile: true, hasTouch: true };

const cwsImage = (id) => `https://lh3.googleusercontent.com/${id}=s1280-w1280-h800`;

const stores = [
  ["davidjones", "https://davidjonesonline.ir/"],
  ["modopod", "https://modopod.net/"],
  ["license-market", "https://license-market.ir/"],
  ["offerie", "https://offerie.ir/"],
  ["mobofun", "https://mobofun.ir/"]
];

const targets = [
  { id: "sazito-home", url: "https://sazito.com/", ...desktop },
  // Official Chrome Web Store listing screenshots (the extension only renders on AAMC pages).
  ...[
    "l3c9uzFZLjiUOi_ea4KWmq2GCp1sq7CtsPbpqdpRkG1PyF436e7NWv9Vbq2lWYkbcjh47ick99giA2pnXz6C1Cruyw",
    "hTKH5pkrQv0l1YRh5LBtRV1OOYfFyK_twa2haeM5DEXiqOLYB8Dz_5FLwS3Sp_qajDNG0bcRLXx-C8mavXQ888yy",
    "x9U1uQKyLNIRO0bYZ93Tqnq1gLRydzKrUIusV9yzDRRtbwNTq01nrUrkQ3l7m6leesKD9k5tZz88aOjg4esd9j9LFQ",
    "EHImT6SqCfqC2Ik5xDFNwfblDyndptguGA8fw27dCNuIM3DaL14zqWPverdbkzFgPuUpA-vpEcn3xRFN_DeTHRfb2g"
  ].map((imageId, index) => ({
    id: `jw-extension-${index + 1}`,
    url: cwsImage(imageId),
    viewport: { width: 1280, height: 800 },
    deviceScaleFactor: 1,
    outWidth: 1280
  })),
  ...stores.flatMap(([id, url]) => [
    { id: `store-${id}`, url, ...desktop },
    { id: `store-${id}-mobile`, url, ...mobile }
  ])
];

async function capture(browser, target) {
  const context = await browser.newContext({
    viewport: target.viewport,
    deviceScaleFactor: target.deviceScaleFactor,
    isMobile: target.isMobile ?? false,
    hasTouch: target.hasTouch ?? false,
    locale: "en-US",
    reducedMotion: "reduce"
  });
  const page = await context.newPage();

  try {
    await page.goto(target.url, { waitUntil: "load", timeout: 60_000 });
    await page.waitForLoadState("networkidle", { timeout: 15_000 }).catch(() => {});
    // Trigger lazy-loaded media near the fold, then return to the top.
    await page.evaluate(() => window.scrollTo(0, window.innerHeight));
    await page.waitForTimeout(800);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.keyboard.press("Escape").catch(() => {});
    // Close promo pop-ups (Sazito storefront modals label their close button "بستن پیام").
    for (const close of await page.locator('[aria-label="بستن پیام"], [aria-label="Close"], [class*="icon-close"]').all()) {
      if (await close.isVisible().catch(() => false)) await close.click({ timeout: 2000 }).catch(() => {});
    }
    await page.waitForTimeout(1500);

    const png = await page.screenshot({ type: "png" });
    const file = path.join(outDir, `${target.id}.webp`);
    await sharp(png).resize({ width: target.outWidth }).webp({ quality: 80 }).toFile(file);
    const { size } = await fs.stat(file);
    console.log(`✓ ${target.id} (${Math.round(size / 1024)} KB)`);
  } catch (error) {
    console.error(`✗ ${target.id}: ${error.message.split("\n")[0]}`);
    process.exitCode = 1;
  } finally {
    await context.close();
  }
}

const only = new Set(process.argv.slice(2));
const selected = only.size ? targets.filter((target) => only.has(target.id)) : targets;

await fs.mkdir(outDir, { recursive: true });
const browser = await chromium.launch();
for (const target of selected) {
  await capture(browser, target);
}
await browser.close();
