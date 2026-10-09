import { ImageResponse } from "next/og";

export const alt = "GymUp — Menos tela travada. Mais quilos na barra.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#0B0E14",
        color: "#ffffff",
        fontFamily: "system-ui, sans-serif",
        padding: "60px",
        position: "relative",
      }}
    >
      {/* Glow de fundo neon */}
      <div
        style={{
          position: "absolute",
          width: "700px",
          height: "350px",
          background:
            "radial-gradient(circle, rgba(0, 230, 118, 0.28) 0%, rgba(139, 92, 246, 0.15) 45%, transparent 70%)",
          borderRadius: "50%",
          filter: "blur(50px)",
        }}
      />

      {/* Badge Superior */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "8px 24px",
          backgroundColor: "#151A22",
          border: "1px solid #242C3D",
          borderRadius: "9999px",
          fontSize: "20px",
          color: "#00E676",
          marginBottom: "28px",
          fontWeight: "700",
          letterSpacing: "1px",
        }}
      >
        ⚡ LOCAL-FIRST (SQLITE) • GOOGLE GEMINI 3.8 • 60 FPS
      </div>

      {/* Logo / Brand */}
      <div
        style={{
          fontSize: "76px",
          fontWeight: "900",
          textAlign: "center",
          lineHeight: 1,
          marginBottom: "20px",
          display: "flex",
          gap: "8px",
        }}
      >
        <span style={{ color: "#ffffff" }}>Gym</span>
        <span style={{ color: "#00E676" }}>Up</span>
      </div>

      {/* Headline */}
      <div
        style={{
          fontSize: "44px",
          fontWeight: "800",
          color: "#FFFFFF",
          textAlign: "center",
          lineHeight: 1.2,
          marginBottom: "16px",
        }}
      >
        Menos tela travada. Mais quilos na barra.
      </div>

      {/* Subtitle */}
      <div
        style={{
          fontSize: "24px",
          color: "#9CB0C9",
          textAlign: "center",
          maxWidth: "860px",
          lineHeight: 1.4,
        }}
      >
        O aplicativo de musculação que nunca te deixa esperando no subsolo da
        academia. 0ms de latência e IA adaptativa.
      </div>
    </div>,
    {
      ...size,
    },
  );
}
