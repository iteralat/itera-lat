import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto",
  description: "Contactanos por WhatsApp o email. Te respondemos en menos de 24 horas con una propuesta concreta para tu proyecto.",
};

export default function ContactoLayout({ children }: { children: React.ReactNode }) {
  return children;
}
