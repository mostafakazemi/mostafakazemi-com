import type { Metadata } from "next";
import "./globals.css";

const title = "Mostafa Kazemi - Senior Frontend Engineer";
const description =
  "Mostafa Kazemi is a Senior Frontend Engineer specializing in React, Next.js, Vue, Nuxt.js, TypeScript, Browser Extensions, Frontend Architecture, and reusable UI systems.";
const domain = "https://mostafakazemi.com";
const profileImage = "/profile-og.jpg";
const alternateNames = [
  "Mostafa Kazeminejad",
  "Mostafa Kazemi Nejad",
  "مصطفی کاظمی",
  "مصطفی کاظمی نژاد"
];
const keywords = [
  "Mostafa Kazemi",
  "Mostafa Kazeminejad",
  "Mostafa Kazemi Nejad",
  "مصطفی کاظمی",
  "مصطفی کاظمی نژاد",
  "Senior Frontend Engineer",
  "Frontend Engineer",
  "React Developer",
  "Next.js Developer",
  "Vue.js Developer",
  "Nuxt.js Developer",
  "TypeScript Developer"
];

const personStructuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mostafa Kazemi",
  alternateName: alternateNames,
  jobTitle: "Senior Frontend Engineer",
  url: domain,
  image: `${domain}${profileImage}`,
  email: "mailto:mostafa.kazeminejhad@gmail.com",
  sameAs: [
    "https://github.com/mostafakazemi",
    "https://www.linkedin.com/in/mostafakazemi/",
    "https://t.me/mesikd"
  ],
  knowsAbout: [
    "React",
    "Next.js",
    "Vue.js",
    "Nuxt.js",
    "TypeScript",
    "Browser Extensions",
    "Frontend Architecture",
    "Reusable UI Systems"
  ]
};

export const metadata: Metadata = {
  metadataBase: new URL(domain),
  title,
  description,
  applicationName: "Mostafa Kazemi Portfolio",
  authors: [{ name: "Mostafa Kazemi", url: domain }],
  creator: "Mostafa Kazemi",
  publisher: "Mostafa Kazemi",
  keywords,
  category: "technology",
  alternates: {
    canonical: domain
  },
  icons: {
    icon: [
      { url: "/favicon.png", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" }
    ],
    shortcut: [{ url: "/favicon.png", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }]
  },
  openGraph: {
    title,
    description,
    url: domain,
    siteName: "Mostafa Kazemi",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: profileImage,
        width: 1200,
        height: 1200,
        alt: "Mostafa Kazemi portrait"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    images: [profileImage]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
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
    <html lang="en" className="dark" data-scroll-behavior="smooth" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personStructuredData).replace(/</g, "\\u003c")
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
