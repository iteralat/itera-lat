"use client";

import { AnimatedCounter } from "../ui/AnimatedCounter";

const stats = [
  { target: 12, suffix: "+", label: "Productos digitales entregados" },
  { target: 99, suffix: "%", label: "Uptime en producción" },
  { target: 6, suffix: "+", label: "Industrias alcanzadas" },
];

export function Stats() {
  return (
    <section className="py-20 md:py-24 bg-background relative">
      {/* Top separator */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />

      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {stats.map((stat) => (
            <AnimatedCounter key={stat.label} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
}
