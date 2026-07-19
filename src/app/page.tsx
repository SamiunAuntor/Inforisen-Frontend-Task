import { SiteHeader } from "@/components/layout/SiteHeader";
import { HeroSection } from "@/components/sections/HeroSection";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[#fff9f3]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0"
      >
        <span className="absolute -left-[15%] -top-[22rem] h-[38rem] w-[70%] rotate-[-8deg] rounded-[50%] bg-[#e7a087]/35 blur-[105px]" />
        <span className="absolute -right-[13rem] -top-[34rem] h-[56rem] w-[52rem] -rotate-45 rounded-[42%] bg-[#f05a30]/60 blur-[115px] sm:-right-[8rem] lg:right-[-2rem]" />
        <span className="absolute left-[34%] top-[8rem] h-[30rem] w-[46rem] rounded-full bg-white/90 blur-[95px]" />
        <span className="absolute right-[10%] top-[12rem] h-[25rem] w-[28rem] rounded-full bg-[#fff1e7]/75 blur-[80px]" />
      </div>
      <div aria-hidden="true" className="pointer-events-none absolute right-[3%] top-40 z-10 hidden h-32 w-56 lg:block">
        <span className="absolute right-8 top-0 h-px w-36 -rotate-45 bg-gradient-to-r from-transparent via-white to-white" />
        <span className="absolute right-0 top-10 h-px w-36 -rotate-45 bg-gradient-to-r from-transparent via-white to-white" />
        <span className="absolute right-[130px] top-[74px] size-2 rounded-full bg-[#df6e76] shadow-[0_0_12px_4px_rgba(223,110,118,0.45)]" />
        <span className="absolute right-[77px] top-[110px] size-2 rounded-full bg-[#df6e76] shadow-[0_0_12px_4px_rgba(223,110,118,0.45)]" />
      </div>
      <SiteHeader />
      <HeroSection />
    </div>
  );
}
