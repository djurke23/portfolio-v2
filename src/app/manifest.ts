import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luka Đurić — Full-Stack Developer",
    short_name: "Luka Đurić",
    description:
      "Personal portfolio and engineering case studies of Luka Đurić, Full-Stack Developer & Product Craftsman.",
    start_url: "/",
    display: "standalone",
    background_color: "#070709",
    theme_color: "#070709",
    icons: [
      {
        src: "/icon.png?v=5",
        sizes: "512x512",
        type: "image/png",
      },
      {
        src: "/icon.svg?v=5",
        sizes: "any",
        type: "image/svg+xml",
      },
      {
        src: "/favicon.ico?v=5",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
