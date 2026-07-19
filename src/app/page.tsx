import Image from "next/image";
import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";
import { PromotionSection } from "@/components/sections/PromotionSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";

export default function Home() {
  return (
    <div className="mx-auto w-full max-w-[var(--page-width)] overflow-hidden bg-[#fff9f3]">
      <div className="relative overflow-hidden bg-[#fff9f3]">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0">
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
      </div>
      <PromotionSection />
      <AboutSection />
      <ServicesSection />
    </div>
  );
}
