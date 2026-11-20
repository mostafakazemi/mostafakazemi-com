import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";
import { siteConfig } from "@/data/portfolio";

export const ogSize = { width: 1200, height: 630 };

type OgCardProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
};

export async function renderOgCard({ eyebrow, title, subtitle }: OgCardProps) {
  const photo = await readFile(path.join(process.cwd(), "public/profile-640.jpg"));
  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 64,
          padding: "72px 80px",
          background: "#0a0a0a",
          color: "#fafafa",
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.04) 1px, transparent 1px)",
          backgroundSize: "48px 48px"
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", flex: 1 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, fontSize: 22, color: "#7dd3fc", letterSpacing: 2, textTransform: "uppercase" }}>
            <div style={{ width: 12, height: 12, borderRadius: 999, background: "#10b981" }} />
            {eyebrow}
          </div>
          <div style={{ marginTop: 28, fontSize: title.length > 40 ? 52 : 64, fontWeight: 700, lineHeight: 1.08 }}>
            {title}
          </div>
          <div style={{ marginTop: 24, fontSize: 28, lineHeight: 1.35, color: "#a3a3a3" }}>{subtitle}</div>
          <div style={{ marginTop: "auto", paddingTop: 40, display: "flex", fontSize: 22, color: "#737373" }}>
            {siteConfig.domain.replace("https://", "")}
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={photoSrc}
          width={340}
          height={340}
          alt=""
          style={{ borderRadius: 16, border: "1px solid #262626", objectFit: "cover" }}
        />
      </div>
    ),
    ogSize
  );
}

export function ogImage(url: string, alt: string) {
  return { url, ...ogSize, type: "image/png", alt };
}
