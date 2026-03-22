import { Hero } from "@/components/option-2/sections/Hero";
import { Services } from "@/components/option-2/sections/Services";
import { Showcase } from "@/components/option-2/sections/Showcase";
import { WhyItera } from "@/components/option-2/sections/WhyItera";
import { Process } from "@/components/option-2/sections/Process";
import { About } from "@/components/option-2/sections/About";
import { CTABanner } from "@/components/option-2/sections/CTABanner";

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
