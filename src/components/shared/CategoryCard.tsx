import Link from "next/link";

interface CategoryCardProps {
  name: string;
  count: string;
  description: string;
  href: string;
  colorClass: string;
  borderColorClass: string;
  ctaLabel: string;
  children?: React.ReactNode;
}

export function CategoryCard({
  name, count, description, href, colorClass, borderColorClass, ctaLabel, children,
}: CategoryCardProps) {
  return (
    <Link
      href={href}
      className={`group bg-muted border ${borderColorClass} rounded-xl overflow-hidden glow-hover transition-all duration-300 block`}
    >
      <div className="h-36 bg-background flex items-center justify-center relative overflow-hidden dot-grid">
        {children}
      </div>
      <div className="p-5">
        <div className={`${colorClass} font-bold text-lg mb-1`}>{name}</div>
        <div className="text-white/40 text-xs mb-3">{count}</div>
        <p className="text-white/50 text-sm leading-relaxed mb-4">{description}</p>
        <div className={`${colorClass} text-sm font-semibold group-hover:translate-x-1 transition-transform`}>
          {ctaLabel} →
        </div>
      </div>
    </Link>
  );
}
