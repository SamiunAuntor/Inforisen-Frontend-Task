import Image from "next/image";
import type { PromotionService } from "@/types/content";

type PromotionCardProps = {
  service: PromotionService;
};

export function PromotionCard({ service }: PromotionCardProps) {
  return (
    <article className="flex h-[310px] w-[244px] shrink-0 snap-start flex-col items-center rounded-2xl border border-black/10 bg-white px-4 pb-4 pt-5 text-center shadow-[0_4px_14px_rgba(35,25,20,0.1)] min-[375px]:w-[260px] sm:h-[320px] sm:w-[300px] sm:px-5 sm:pb-5 sm:pt-6 xl:h-auto xl:w-[min(405px,calc((100vw-176px)/4.5))] xl:aspect-[356/405] xl:px-6 xl:pb-7 xl:pt-10">
      <Image
        src={service.image}
        alt=""
        width={44}
        height={44}
        className="size-11 rounded-xl object-cover xl:size-12"
      />
      <h3 className="mt-3 min-h-5 text-sm font-semibold text-foreground xl:mt-5 xl:text-base">
        {service.name}
      </h3>

      <div className="mt-4 flex items-center justify-center gap-1.5 xl:mt-5 xl:gap-2">
        <div className="flex gap-0.5" aria-label={`${service.rating} out of 5 stars`}>
          {Array.from({ length: 5 }, (_, index) => (
            <Image
              key={index}
              src={index < service.rating ? "/assets/solid-star.png" : "/assets/empty-star.png"}
              alt=""
              width={20}
              height={20}
              className="size-4 xl:size-5"
            />
          ))}
        </div>
        <span className="text-[10px] text-body-text xl:text-xs">({service.reviews})</span>
      </div>

      <p className="mt-3 text-sm font-bold text-foreground xl:text-base">{service.price}</p>
      <div className="mt-4 flex min-h-[52px] w-full items-center justify-center rounded-lg bg-[#e1f5e9] px-3 py-2 xl:min-h-[66px] xl:px-5">
        <p className="text-[10px] leading-[1.35] text-body-text xl:text-xs">({service.description})</p>
      </div>

      <a
        href="#contact"
        className="mt-auto flex h-10 w-full items-center justify-center rounded-full bg-gradient-to-r from-[#f6bd32] via-[#d64a57] to-[#34115d] text-[10px] font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary xl:h-[50px] xl:text-xs"
        aria-label={`Buy ${service.name} promotion service`}
      >
        Buy now
      </a>
    </article>
  );
}
