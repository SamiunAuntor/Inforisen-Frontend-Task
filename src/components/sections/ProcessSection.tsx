import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { ProcessCard } from "@/components/process/ProcessCard";
import { processSteps } from "@/data/processSteps";

export function ProcessSection() {
  return (
    <section className="bg-[#fff9f3] py-16 sm:py-20 lg:py-24 xl:py-[100px]">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="flex items-center justify-center gap-2.5 text-sm font-medium uppercase text-foreground">
            <Image
              src="/assets/custom-star.png"
              alt=""
              width={22}
              height={22}
              className="size-[22px] shrink-0 object-contain"
            />
            Working Process
          </p>
          <h2 className="mt-5 font-outfit text-[28px] font-semibold leading-tight tracking-[-0.02em] text-foreground sm:mt-6 sm:text-[36px] lg:text-[40px]">
            Easy Steps to Social Media
            <br /> Growth By HQ PROMO
          </h2>
        </div>

        <div className="relative mx-auto mt-10 grid w-full max-w-[1320px] grid-cols-1 gap-4 sm:mt-12 sm:grid-cols-2 xl:grid-cols-4 min-[1384px]:grid-cols-[repeat(4,318px)]">
          <div aria-hidden="true" className="absolute inset-x-0 top-[40px] hidden h-px bg-[#77736f] xl:block" />
          {processSteps.map((item) => (
            <ProcessCard key={item.step} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
