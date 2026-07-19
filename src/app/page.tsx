import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromotionSection } from "@/components/sections/PromotionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { ProcessSection } from "@/components/sections/ProcessSection";
import { SiteFooter } from "@/components/layout/SiteFooter";

export default function Home() {
  return (
    <div className="relative mx-auto w-full max-w-[var(--page-width)] overflow-x-clip bg-[#fff9f3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[1250px] md:h-[1100px] lg:h-[950px] xl:h-[892px]"
      >
        <Image
          src="/assets/banner-navbar-bg.png"
          alt=""
          fill
          preload
          sizes="100vw"
          className="object-cover object-top"
        />
      </div>
      <SiteHeader />
      <HeroSection />
      <PromotionSection />
      <AboutSection />
      <ServicesSection />
      <ProcessSection />
      <SiteFooter />
    </div>
  );
}
