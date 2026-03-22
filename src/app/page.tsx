import dynamic from "next/dynamic";
import { Hero } from "@/components/option-2/sections/Hero";

const Services = dynamic(() => import("@/components/option-2/sections/Services").then(m => m.Services));
const Showcase = dynamic(() => import("@/components/option-2/sections/Showcase").then(m => m.Showcase));
const WhyItera = dynamic(() => import("@/components/option-2/sections/WhyItera").then(m => m.WhyItera));
const Process = dynamic(() => import("@/components/option-2/sections/Process").then(m => m.Process));
const About = dynamic(() => import("@/components/option-2/sections/About").then(m => m.About));
const CTABanner = dynamic(() => import("@/components/option-2/sections/CTABanner").then(m => m.CTABanner));

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <Showcase />
      <WhyItera />
      <Process />
      <About />
      <CTABanner />
    </>
  );
}
