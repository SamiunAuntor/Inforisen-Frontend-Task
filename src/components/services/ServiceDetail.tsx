import Image from "next/image";
import type { PlatformService } from "@/types/content";
import { GradientButton } from "@/components/shared/GradientButton";

type ServiceDetailProps = {
  service: PlatformService;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article className="mt-6 grid w-full overflow-hidden rounded-[20px] border border-[#d9d9d9] bg-white p-4 shadow-[0_3px_12px_rgba(32,23,18,0.04)] sm:mt-8 sm:p-6 md:p-8 lg:grid-cols-[minmax(340px,450px)_minmax(0,1fr)] lg:items-center lg:gap-10 xl:gap-16">
      <div className="relative h-[280px] overflow-hidden rounded-[16px] border border-[#d7a72c] bg-gradient-to-b from-[#ce6c2c] via-[#a93432] to-[#39072f] min-[430px]:h-[330px] sm:rounded-[20px] md:h-[415px] lg:h-[380px] xl:h-[415px]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 450px"
          className="origin-top scale-[1.25] object-contain object-top min-[430px]:scale-[1.35] lg:scale-[1.42] xl:scale-[1.48]"
        />
      </div>

      <div className="max-w-[600px] py-6 sm:py-8 lg:py-4">
        <h3 className="font-outfit text-2xl font-semibold tracking-[-0.015em] text-foreground">{service.title}</h3>
        <p className="mt-5 max-w-[590px] text-base leading-[1.5] text-body-text">{service.description}</p>
        <GradientButton href="#contact" className="mt-8 min-h-12 rounded-lg px-5">
          View {service.name} Services
          <Image src="/assets/custom-arrow.png" alt="" width={18} height={18} className="size-[18px] object-contain" />
        </GradientButton>
      </div>
    </article>
  );
}
