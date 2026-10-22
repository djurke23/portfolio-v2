import { ImageResponse } from "next/og";
import { getProjectById, projects } from "@/data/projects";

export const runtime = "nodejs";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export async function generateStaticParams() {
  return projects
    .filter((p) => p.caseStudy)
    .map((p) => ({
      id: p.id,
    }));
}

export default async function Image({
  params,
}: {
  params: Promise<{ id: string }> | { id: string };
}) {
  const resolvedParams = await params;
  const project = getProjectById(resolvedParams.id);

  const title = project?.title || "Engineering Case Study";
  const category = project?.categoryLabel || "Technical Case Study";
  const tagline = project?.tagline || "In-depth software engineering and architectural breakdown.";
  const technologies = project?.technologies.slice(0, 6) || ["Next.js", "TypeScript", "Tailwind CSS"];

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
        {/* Glow */}
        <div
          style={{
            position: "absolute",
            top: "-100px",
            right: "-100px",
            width: "600px",
            height: "600px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(16, 185, 129, 0.25) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
        />

        {/* Top Header */}
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
              backgroundColor: "rgba(16, 185, 129, 0.12)",
              border: "1px solid rgba(16, 185, 129, 0.3)",
              color: "#34d399",
              fontSize: "15px",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            <span>[ Case Study • {category} ]</span>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              color: "#94a3b8",
              fontSize: "16px",
              fontWeight: 600,
              letterSpacing: "0.04em",
            }}
          >
            Luka Đurić Portfolio
          </div>
        </div>

        {/* Main Title & Tagline */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "18px",
            marginTop: "16px",
            marginBottom: "16px",
          }}
        >
          <h1
            style={{
              fontSize: "68px",
              fontWeight: 900,
              color: "#ffffff",
              letterSpacing: "-0.03em",
              lineHeight: 1.05,
              margin: 0,
            }}
          >
            {title}
          </h1>

          <p
            style={{
              fontSize: "25px",
              fontWeight: 300,
              color: "#cbd5e1",
              lineHeight: 1.35,
              maxWidth: "960px",
              margin: 0,
            }}
          >
            {tagline}
          </p>
        </div>

        {/* Bottom Technologies & Brand */}
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
            {technologies.map((tech) => (
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
            ))}
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
