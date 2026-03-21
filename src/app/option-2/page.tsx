import { Metadata } from "next";
import { Hero } from "@/components/option-2/sections/Hero";
import { Services } from "@/components/option-2/sections/Services";
import { Stats } from "@/components/option-2/sections/Stats";
import { Showcase } from "@/components/option-2/sections/Showcase";
import { WhyItera } from "@/components/option-2/sections/WhyItera";
import { Process } from "@/components/option-2/sections/Process";
import { CTABanner } from "@/components/option-2/sections/CTABanner";

export const metadata: Metadata = {
  title: "ÍTERA | Soluciones digitales que evolucionan con vos.",
  description:
    "Estudio de tecnología digital. Desarrollo web de alta performance, plataformas SaaS y herramientas con IA desde la Patagonia Argentina.",
};

export default function Option2Page() {
  return (
    <>
      <Hero />
      <Services />
      <Stats />
      <Showcase />
      <WhyItera />
      <Process />
      <CTABanner />
    </>
  );
}
