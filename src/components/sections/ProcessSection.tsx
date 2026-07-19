import { Container } from "@/components/shared/Container";
import { ProcessCard } from "@/components/process/ProcessCard";
import { processSteps } from "@/data/processSteps";

export function ProcessSection() {
  return (
    <section className="bg-[#fff9f3] py-20 sm:py-24 lg:py-[100px]">
      <Container>
        <div className="mx-auto max-w-[760px] text-center">
          <p className="flex items-center justify-center gap-2 text-sm font-medium uppercase text-foreground">
            <span aria-hidden="true" className="relative inline-flex size-4 items-center justify-center">
              <span className="absolute h-4 w-0.5 rounded-full bg-gradient-to-b from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
              <span className="absolute h-0.5 w-4 rounded-full bg-gradient-to-r from-[#f5b52e] via-[#e2535e] to-[#41145f]" />
            </span>
            Working Process
          </p>
          <h2 className="mt-6 font-outfit text-3xl font-semibold leading-tight tracking-[-0.02em] text-foreground sm:text-[40px]">
            Easy Steps to Social Media
            <br /> Growth By HQ PROMO
          </h2>
        </div>

        <div className="relative mt-12 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div aria-hidden="true" className="absolute inset-x-0 top-[35px] hidden h-px bg-black/45 xl:block" />
          {processSteps.map((item) => (
            <ProcessCard key={item.step} item={item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
