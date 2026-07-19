import { Container } from "@/components/shared/Container";
import { ServiceTabs } from "@/components/services/ServiceTabs";

export function ServicesSection() {
  return (
    <section id="services" className="bg-[#fff9f3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="mx-auto max-w-[960px] text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium text-foreground">
            <span aria-hidden="true" className="relative inline-flex size-4 items-center justify-center">
              <span className="absolute h-4 w-0.5 rounded-full bg-gradient-to-b from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
              <span className="absolute h-0.5 w-4 rounded-full bg-gradient-to-r from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
            </span>
            our services
          </p>
          <h2 className="mt-6 font-outfit text-3xl font-semibold tracking-[-0.02em] text-foreground sm:text-[40px]">
            Powerful SMM Services for Fast Growth
          </h2>
          <p className="mx-auto mt-6 max-w-[920px] text-sm leading-6 text-body-text sm:text-base">
            Explore our comprehensive range of social media marketing services designed to help you grow your presence across all
            <br className="hidden lg:block" /> major platforms. From Facebook to TikTok, we&apos;ve got you covered.
          </p>
        </div>

        <ServiceTabs />
      </Container>
    </section>
  );
}
