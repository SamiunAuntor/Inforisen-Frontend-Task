import { BadgeCheck } from "lucide-react";
import { CharacterVisual } from "@/components/shared/CharacterVisual";
import { Container } from "@/components/shared/Container";

const benefits = [
  "Fast Delivery with Smooth and Reliable Performance",
  "Real & High-Quality Engagement to Build Strong Social Proof",
  "Safe, Secure & High Retention for Long-Term Growth",
];

function ButtonMark() {
  return (
    <span aria-hidden="true" className="flex items-center gap-1">
      <span className="grid grid-cols-2 gap-0.5">
        {Array.from({ length: 6 }, (_, index) => (
          <span key={index} className="size-0.5 rounded-full bg-current" />
        ))}
      </span>
      <span className="text-base leading-none">›</span>
    </span>
  );
}

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[#fff9f3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-6 xl:flex xl:justify-between xl:gap-0">
          <div className="w-full max-w-[610px] xl:w-[610px] xl:shrink-0">
            <p className="flex items-center gap-2 text-sm font-medium text-foreground">
              <span aria-hidden="true" className="relative inline-flex size-4 items-center justify-center">
                <span className="absolute h-4 w-0.5 rounded-full bg-gradient-to-b from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
                <span className="absolute h-0.5 w-4 rounded-full bg-gradient-to-r from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
              </span>
              About SMM PANEL
            </p>

            <h2 className="mt-6 font-outfit text-4xl font-semibold tracking-[-0.025em] text-foreground sm:text-[40px]">
              Who We Are
            </h2>

            <p className="mt-7 max-w-[590px] text-base leading-6 text-body-text">
              At SMM PANEL, we believe social media growth is more than just likes and followers. We provide fast,
              reliable, and affordable SMM services that help creators, businesses, agencies, and resellers build a
              stronger online presence across every major platform.
            </p>

            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-base text-body-text">
                  <BadgeCheck aria-hidden="true" size={19} strokeWidth={1.8} className="shrink-0 text-[#21bd69]" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>

            <a
              href="#services"
              className="mt-9 inline-flex h-12 items-center justify-center gap-3 rounded-lg bg-gradient-to-r from-[#f5bb31] via-[#dc505c] to-[#35125c] px-5 text-sm font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Learn More About Us
              <ButtonMark />
            </a>
          </div>

          <div className="relative mx-auto h-[440px] w-full max-w-[648px] sm:h-[500px] lg:h-[520px] xl:mx-0 xl:w-[648px] xl:shrink-0">
            <CharacterVisual className="absolute left-[4%] top-[-4%] w-[124%] lg:left-[26px] lg:top-[-21px] lg:w-[804px]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
