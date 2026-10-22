import { ImageResponse } from "next/og";

export const runtime = "nodejs";
export const alt = "Luka Đurić — Full-Stack Developer & Product Craftsman";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          backgroundColor: "#070709",
          padding: "64px 72px",
          fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Subtle Ambient Glow Backgrounds */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.22) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "-150px",
            left: "-100px",
            width: "550px",
            height: "550px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(6, 182, 212, 0.12) 0%, transparent 70%)",
            filter: "blur(50px)",
          }}
        />

        {/* Top Header Bar */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              padding: "8px 16px",
              borderRadius: "9999px",
              backgroundColor: "rgba(16, 185, 129, 0.1)",
              border: "1px solid rgba(16, 185, 129, 0.25)",
              color: "#34d399",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <div
              style={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#10b981",
              }}
            />
            <span>Available for Full-Stack Opportunities</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: "15px",
              fontWeight: 500,
              letterSpacing: "0.04em",
            }}
          >
            Belgrade, Serbia • Remote
          </div>
        </div>

        {/* Main Hero Card Typography */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <div
            style={{
              fontSize: "16px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              color: "#64748b",
              textTransform: "uppercase",
            }}
          >
            Full-Stack Developer • Product Craftsman
          </div>

          <h1
            style={{
              fontSize: "76px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.04em",
              lineHeight: 1.02,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            Luka Đurić
          </h1>

          <p
            style={{
              fontSize: "26px",
              fontWeight: 300,
              color: "#cbd5e1",
              lineHeight: 1.35,
              maxWidth: "920px",
              margin: 0,
            }}
          >
            Architecting modern web applications, mobile platforms, and resilient systems from idea to production.
          </p>
        </div>

        {/* Bottom Technology Pills & Domain */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            paddingTop: "24px",
            borderTop: "1px solid rgba(255, 255, 255, 0.08)",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            {["Next.js", "TypeScript", "React Native", "Go", "Supabase", "PostgreSQL", "Tailwind CSS"].map(
              (tech) => (
                <div
                  key={tech}
                  style={{
                    padding: "6px 14px",
                    borderRadius: "8px",
                    backgroundColor: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.12)",
                    color: "#e2e8f0",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                >
                  {tech}
                </div>
              )
            )}
          </div>

          <div
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#10b981",
              letterSpacing: "0.02em",
            }}
          >
            lukadjuric.dev
          </div>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
