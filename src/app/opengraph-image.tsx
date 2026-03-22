import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "ÍTERA — Soluciones digitales";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "linear-gradient(135deg, #0a0a0a 0%, #171717 50%, #0a0a0a 100%)",
          fontFamily: "sans-serif",
        }}
      >
        {/* Glow effect */}
        <div
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255, 60, 0, 0.15) 0%, transparent 70%)",
            filter: "blur(60px)",
          }}
        />

        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 20,
            position: "relative",
          }}
        >
          <div
            style={{
              fontSize: 72,
              fontWeight: 700,
              color: "#ffffff",
              letterSpacing: "0.05em",
            }}
          >
            ÍTERA
          </div>
          <div
            style={{
              fontSize: 24,
              color: "rgba(255, 255, 255, 0.5)",
              maxWidth: 500,
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            Soluciones digitales que evolucionan con vos
          </div>
          <div
            style={{
              marginTop: 16,
              fontSize: 14,
              color: "rgba(255, 60, 0, 0.8)",
              letterSpacing: "0.1em",
              textTransform: "uppercase" as const,
            }}
          >
            itera.lat
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
