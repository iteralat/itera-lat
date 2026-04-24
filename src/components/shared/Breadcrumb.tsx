import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
      <nav
        aria-label="Breadcrumb"
        className="flex items-center gap-1.5 text-sm md:text-base font-medium"
      >
        {items.map((item, i) => (
          <span key={item.href} className="flex items-center gap-1.5">
            {i > 0 && (
              <ChevronRight size={14} className="text-white/30 shrink-0" aria-hidden="true" />
            )}
            <Link
              href={item.href}
              className="text-white/65 hover:text-white transition-colors"
            >
              {item.label}
            </Link>
          </span>
        ))}
        <ChevronRight size={14} className="text-white/30 shrink-0" aria-hidden="true" />
        <span className={`${currentColor} font-semibold`}>{current}</span>
      </nav>
    </>
  );
}
