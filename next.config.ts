import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  async redirects() {
    return [
      { source: "/plataformas", destination: "/proyectos", permanent: true },
      { source: "/plataformas/:slug", destination: "/proyectos/:slug", permanent: true },
      { source: "/webs", destination: "/proyectos", permanent: true },
    ];
  },
};

export default nextConfig;
