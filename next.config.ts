import type { NextConfig } from "next";

const securityHeaders = [
  { key: "X-DNS-Prefetch-Control", value: "on" },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
];

const nextConfig: NextConfig = {
  output: "standalone",
  async headers() {
    return [
      { source: "/(.*)", headers: securityHeaders },
      {
        source: "/images/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
      {
        source: "/fonts/:path*",
        headers: [
          { key: "Cache-Control", value: "public, max-age=31536000, immutable" },
        ],
      },
    ];
  },
  async redirects() {
    return [
      // Legacy routes
      { source: "/plataformas", destination: "/productos", permanent: true },
      { source: "/plataformas/:slug", destination: "/productos/:slug", permanent: true },
      { source: "/webs", destination: "/productos/sitios-web", permanent: true },
      { source: "/proyectos", destination: "/productos", permanent: true },
      { source: "/proyectos/:slug", destination: "/productos/:slug", permanent: true },
      // Product slug migrations (old flat → new categorized)
      { source: "/productos/iteralex", destination: "/productos/saas/iteralex", permanent: true },
      { source: "/productos/itera-estudio", destination: "/productos/saas/itera-estudio", permanent: true },
      { source: "/productos/iteradesk", destination: "/productos/soluciones/iteradesk", permanent: true },
      { source: "/productos/iteralink", destination: "/productos/soluciones/iteralink", permanent: true },
      { source: "/productos/iterashop", destination: "/productos/soluciones/iterashop", permanent: true },
    ];
  },
};

export default nextConfig;
