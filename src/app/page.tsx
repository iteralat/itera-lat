import dynamic from "next/dynamic";
import { Hero } from "@/components/option-2/sections/Hero";

const Showcase = dynamic(() => import("@/components/option-2/sections/Showcase").then(m => m.Showcase));
const WhyItera = dynamic(() => import("@/components/option-2/sections/WhyItera").then(m => m.WhyItera));
const CTABanner = dynamic(() => import("@/components/option-2/sections/CTABanner").then(m => m.CTABanner));

export default function Home() {
  return (
    <>
      <Hero />
      <Showcase />
      <WhyItera />
      <CTABanner />
    </>
  );
}
