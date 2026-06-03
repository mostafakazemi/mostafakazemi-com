import { ImageResponse } from "next/og";

export const alt = "Mostafa Kazemi - Senior Frontend Engineer";
export const dynamic = "force-static";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "linear-gradient(135deg, #020617 0%, #0f172a 52%, #075985 100%)",
          color: "#f8fafc",
          display: "flex",
          fontFamily: "Inter, Arial, sans-serif",
          height: "100%",
          justifyContent: "center",
          padding: 72,
          width: "100%"
        }}
      >
        <div
          style={{
            border: "1px solid rgba(226, 232, 240, 0.18)",
            borderRadius: 32,
            display: "flex",
            flexDirection: "column",
            gap: 28,
            padding: 56,
            width: "100%"
          }}
        >
          <div
            style={{
              color: "#7dd3fc",
              fontSize: 28,
              fontWeight: 700,
              letterSpacing: 4,
              textTransform: "uppercase"
            }}
          >
            Senior Frontend Engineer
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 18
            }}
          >
            <div style={{ fontSize: 86, fontWeight: 800, letterSpacing: -3 }}>
              Mostafa Kazemi
            </div>
            <div style={{ color: "#cbd5e1", fontSize: 34, lineHeight: 1.35 }}>
              React, Next.js, Vue, Nuxt.js, TypeScript, Browser Extensions,
              Frontend Architecture, and reusable UI systems.
            </div>
          </div>
          <div style={{ color: "#bae6fd", fontSize: 26 }}>
            mostafakazemi.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
