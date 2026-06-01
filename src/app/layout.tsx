import type { Metadata } from "next";
import "./globals.css";

const title = "Mostafa Kazemi - Senior Frontend Engineer";
const description =
  "Senior Frontend Engineer specializing in React, Next.js, Vue, Nuxt.js, TypeScript, Browser Extensions, Frontend Architecture, and reusable UI systems.";
const domain = "https://mostafakazemi.com";

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title,
  description,
  alternates: {
    canonical: domain
  },
  openGraph: {
    title,
    description,
    url: domain,
    siteName: "Mostafa Kazemi",
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title,
    description
  },
  robots: {
    index: true,
    follow: true
  }
};

const themeScript = `
  (function () {
    try {
      var storedTheme = localStorage.getItem("theme");
      if (storedTheme === "light") {
        document.documentElement.classList.remove("dark");
      } else {
        document.documentElement.classList.add("dark");
      }
    } catch (_) {
      document.documentElement.classList.add("dark");
    }
  })();
`;

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
