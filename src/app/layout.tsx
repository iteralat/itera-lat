import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { JsonLd } from "@/components/shared/JsonLd";
import { GoogleAnalytics } from "@/components/shared/GoogleAnalytics";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itera.lat";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "ÍTERA | Soluciones digitales que evolucionan con vos",
    template: "%s | ÍTERA",
  },
  description:
    "Estudio de desarrollo web en la Patagonia, Argentina. Sitios web, plataformas a medida y soluciones con inteligencia artificial.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
    siteName: "ÍTERA",
    locale: "es_AR",
    url: siteUrl,
    title: "ÍTERA | Soluciones digitales que evolucionan con vos",
    description:
      "Estudio de desarrollo web en la Patagonia, Argentina. Sitios web, plataformas a medida y soluciones con inteligencia artificial.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ÍTERA — Soluciones digitales",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ÍTERA | Soluciones digitales que evolucionan con vos",
    description:
      "Estudio de desarrollo web en la Patagonia, Argentina. Sitios web, plataformas a medida y soluciones con inteligencia artificial.",
    images: ["/og-image.png"],
  },
  alternates: {
    canonical: siteUrl,
  },
};

const organizationLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ÍTERA",
  url: siteUrl,
  logo: `${siteUrl}/images/logo-itera.png`,
  description:
    "Estudio de desarrollo web en la Patagonia, Argentina. Sitios web, plataformas a medida y soluciones con inteligencia artificial.",
  address: {
    "@type": "PostalAddress",
    addressRegion: "Patagonia",
    addressCountry: "AR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    email: "hola@itera.lat",
    contactType: "sales",
  },
};

const websiteLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "ÍTERA",
  url: siteUrl,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${poppins.variable} font-sans antialiased selection:bg-primary selection:text-white`}>
        <GoogleAnalytics />
        <JsonLd data={organizationLd} />
        <JsonLd data={websiteLd} />
        <div className="min-h-screen bg-background text-foreground selection:bg-primary selection:text-white">
          <Header />
          <main>
            {children}
          </main>
          <Footer />
          <ScrollToTop />
        </div>
      </body>
    </html>
  );
}
