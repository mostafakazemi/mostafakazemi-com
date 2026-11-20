export type Screenshot = {
  src: string;
  alt: string;
  width: number;
  height: number;
  /** Hostname shown in the browser frame. */
  host?: string;
  href?: string;
};

const desktop = { width: 1600, height: 1000 };
const mobile = { width: 780, height: 1688 };
const store = { width: 1280, height: 800 };

export const extensionScreenshots: Screenshot[] = [
  { src: "/screenshots/jw-extension-1.webp", alt: "Jack Westin tutor solutions shown beside an AAMC practice question", ...store },
  { src: "/screenshots/jw-extension-2.webp", alt: "Extension side panel with written and video solutions", ...store },
  { src: "/screenshots/jw-extension-3.webp", alt: "Extension feature overview", ...store },
  { src: "/screenshots/jw-extension-4.webp", alt: "Jack Westin MCAT instructors featured in the extension", ...store }
].map((shot) => ({ ...shot, host: "Chrome Web Store listing" }));

export const sazitoHomeScreenshot: Screenshot = {
  src: "/screenshots/sazito-home.webp",
  alt: "Sazito marketing site home page",
  host: "sazito.com",
  href: "https://sazito.com/",
  ...desktop
};

export type StoreShowcase = { name: string; host: string; href: string; desktop: Screenshot; mobile: Screenshot };

export const sazitoStores: StoreShowcase[] = [
  ["davidjones", "David Jones", "davidjonesonline.ir"],
  ["modopod", "ModoPod", "modopod.net"],
  ["license-market", "License Market", "license-market.ir"],
  ["offerie", "Offerie", "offerie.ir"],
  ["mobofun", "Mobofun", "mobofun.ir"]
].map(([id, name, host]) => ({
  name,
  host,
  href: `https://${host}/`,
  desktop: { src: `/screenshots/store-${id}.webp`, alt: `${name} storefront on Sazito, desktop`, host, href: `https://${host}/`, ...desktop },
  mobile: { src: `/screenshots/store-${id}-mobile.webp`, alt: `${name} storefront on Sazito, mobile`, host, href: `https://${host}/`, ...mobile }
}));
