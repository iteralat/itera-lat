"use client";

import Link from "next/link";
import React from "react";

interface GlowButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "outline";
  className?: string;
  onClick?: () => void;
  external?: boolean;
}

export function GlowButton({
  children,
  href,
  variant = "primary",
  className = "",
  onClick,
  external,
}: GlowButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 px-8 py-3 font-semibold rounded-xl transition-all duration-300 group hover:scale-105";

  const variants = {
    primary: [
      "bg-primary text-white",
      "hover:bg-primary-soft",
      "shadow-[0_0_25px_rgba(255,60,0,0.35),0_0_70px_rgba(255,60,0,0.15)]",
      "hover:shadow-[0_0_35px_rgba(255,60,0,0.5),0_0_90px_rgba(255,60,0,0.2)]",
    ].join(" "),
    outline: [
      "bg-elevated border border-border text-white",
      "hover:border-primary/30 hover:bg-muted",
      "shadow-[0_0_15px_rgba(255,255,255,0.03)]",
      "hover:shadow-[0_0_25px_rgba(255,60,0,0.12)]",
    ].join(" "),
  };

  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={classes}>
          {children}
        </a>
      );
    }
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
