import { Container } from "@/components/shared/Container";
import { PromotionCarousel } from "@/components/promotion/PromotionCarousel";

export function PromotionSection() {
  return (
    <section id="promotion" className="overflow-hidden bg-[#fff9f3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <h2 className="font-outfit text-3xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px] xl:text-5xl">
            Promotion Services for
            <br />
            Every Stage of Your Growth
          </h2>
          <p className="mx-auto mt-7 max-w-[1220px] text-sm leading-6 text-body-text sm:text-base xl:text-xl xl:leading-8">
            Supporting artists, creators, businesses, and brands with professional promotion across social
            <br className="hidden xl:block" /> media, music,
            <br className="hidden xl:block" /> radio, digital publications, and marketing channels.
          </p>
        </div>
      </Container>

      <PromotionCarousel />
    </section>
  );
}
