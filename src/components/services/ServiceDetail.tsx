import Image from "next/image";
import type { PlatformService } from "@/types/content";
import { GradientButton } from "@/components/shared/GradientButton";

type ServiceDetailProps = {
  service: PlatformService;
};

export function ServiceDetail({ service }: ServiceDetailProps) {
  return (
    <article className="mt-8 grid w-full overflow-hidden rounded-[18px] border border-black/10 bg-white p-5 shadow-[0_3px_12px_rgba(32,23,18,0.04)] sm:p-8 lg:grid-cols-[450px_1fr] lg:items-center lg:gap-16">
      <div className="relative h-[330px] overflow-hidden rounded-[16px] bg-gradient-to-b from-[#d16a2b] via-[#b93425] to-[#3a062c] sm:h-[415px]">
        <Image
          src={service.image}
          alt=""
          fill
          sizes="(max-width: 1024px) 90vw, 450px"
          className="object-contain object-bottom"
        />
      </div>

      <div className="max-w-[600px] py-8 lg:py-4">
        <h3 className="font-outfit text-2xl font-semibold text-foreground">{service.title}</h3>
        <p className="mt-5 text-base leading-6 text-body-text">{service.description}</p>
        <GradientButton href="#contact" className="mt-8 rounded-lg px-5">
          View {service.name} Services
          <span aria-hidden="true" className="text-lg">›</span>
        </GradientButton>
      </div>
    </article>
  );
}
