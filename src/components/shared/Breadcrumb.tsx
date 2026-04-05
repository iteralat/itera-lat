import Link from "next/link";
import { JsonLd } from "./JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
  currentColor?: string;
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://itera.lat";

export function Breadcrumb({ items, current, currentColor = "text-primary" }: BreadcrumbProps) {
  const ldItems = [
    ...items.map((item, i) => ({
      "@type": "ListItem" as const,
      position: i + 1,
      name: item.label,
      item: `${siteUrl}${item.href}`,
    })),
    { "@type": "ListItem" as const, position: items.length + 1, name: current },
  ];

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: ldItems,
        }}
      />
      <nav className="flex items-center gap-2 text-sm text-white/30">
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-2">
            {i > 0 && <span>/</span>}
            <Link href={item.href} className="hover:text-white/60 transition-colors">
              {item.label}
            </Link>
          </span>
        ))}
        <span>/</span>
        <span className={currentColor}>{current}</span>
      </nav>
    </>
  );
}
