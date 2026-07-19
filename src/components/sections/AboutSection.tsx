import Image from "next/image";
import { BadgeCheck } from "lucide-react";
import { CharacterVisual } from "@/components/shared/CharacterVisual";
import { Container } from "@/components/shared/Container";

const benefits = [
  "Fast Delivery with Smooth and Reliable Performance",
  "Real & High-Quality Engagement to Build Strong Social Proof",
  "Safe, Secure & High Retention for Long-Term Growth",
];

export function AboutSection() {
  return (
    <section id="about" className="overflow-hidden bg-[#fff9f3] py-16 sm:py-20 lg:py-24 xl:py-[100px]">
      <Container>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-6 xl:flex xl:justify-between xl:gap-0">
          <div className="w-full max-w-[650px] xl:w-[650px] xl:shrink-0">
            <p className="flex items-center gap-2.5 text-[15px] font-medium text-foreground">
              <Image
                src="/assets/custom-star.png"
                alt=""
                width={22}
                height={22}
                className="size-[22px] shrink-0 object-contain"
              />
              About SMM PANEL
            </p>

            <h2 className="mt-5 font-outfit text-4xl font-semibold tracking-[-0.025em] text-foreground sm:mt-6 sm:text-[44px] xl:text-5xl">
              Who We Are
            </h2>

            <p className="mt-5 max-w-[650px] text-[15px] leading-[1.55] text-body-text sm:mt-7 sm:text-[17px]">
              At SMM PANEL, we believe social media growth is more than just likes and followers. We provide fast,
              reliable, and affordable SMM services that help creators, businesses, agencies, and resellers build a
              stronger online presence across every major platform.
            </p>

            <ul className="mt-7 space-y-4 sm:mt-8 sm:space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-start gap-3 text-[15px] text-body-text sm:items-center sm:text-[17px]">
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
              <Image
                src="/assets/custom-arrow.png"
                alt=""
                width={18}
                height={18}
                className="size-[18px] object-contain"
              />
            </a>
          </div>

          <div className="relative mx-auto hidden h-[500px] w-full max-w-[648px] lg:block xl:mx-0 xl:ml-auto xl:h-[588px] xl:w-[648px] xl:shrink-0">
            <CharacterVisual className="absolute left-[10%] top-0 w-[124%] origin-center scale-[0.96] sm:left-[13%] sm:scale-[1.02] lg:left-[16%] lg:scale-100 xl:left-[21%] xl:scale-[1.09]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
