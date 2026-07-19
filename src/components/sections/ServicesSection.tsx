import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ServiceTabs } from "@/components/services/ServiceTabs";

export function ServicesSection() {
  return (
    <section
      id="services"
      className="bg-[#fff9f3] pb-20 pt-10 sm:pb-24 sm:pt-12 lg:pb-[100px] lg:pt-[50px]"
    >
      <Container>
        <div className="mx-auto max-w-[960px] text-center">
          <p className="flex items-center justify-center gap-2.5 text-sm font-medium text-foreground">
            <Image
              src="/assets/custom-star.png"
              alt=""
              width={22}
              height={22}
              className="size-[22px] shrink-0 object-contain"
            />
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
