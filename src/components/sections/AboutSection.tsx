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
    <section id="about" className="overflow-hidden bg-[#fff9f3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-6 xl:flex xl:justify-between xl:gap-0">
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

            <h2 className="mt-6 font-outfit text-[40px] font-semibold tracking-[-0.025em] text-foreground sm:text-[44px] xl:text-5xl">
              Who We Are
            </h2>

            <p className="mt-7 max-w-[650px] text-[17px] leading-[1.55] text-body-text">
              At SMM PANEL, we believe social media growth is more than just likes and followers. We provide fast,
              reliable, and affordable SMM services that help creators, businesses, agencies, and resellers build a
              stronger online presence across every major platform.
            </p>

            <ul className="mt-8 space-y-5">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3 text-[17px] text-body-text">
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

          <div className="relative mx-auto h-[500px] w-full max-w-[648px] sm:h-[588px] lg:h-[588px] xl:mx-0 xl:ml-auto xl:w-[648px] xl:shrink-0">
            <CharacterVisual className="absolute left-[16%] top-0 w-[124%] origin-center scale-[1.09] xl:left-[21%]" />
          </div>
        </div>
      </Container>
    </section>
  );
}
