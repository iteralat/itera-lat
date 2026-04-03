import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
  current: string;
  currentColor?: string;
}

export function Breadcrumb({ items, current, currentColor = "text-primary" }: BreadcrumbProps) {
  return (
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
  );
}
