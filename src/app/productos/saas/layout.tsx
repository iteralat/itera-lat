import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SaaS",
  description:
    "Productos de software por suscripción. Siempre actualizados, con soporte incluido y escalables. IteraLex, Itera Estudio y más.",
  alternates: { canonical: "/productos/saas" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return children;
}
