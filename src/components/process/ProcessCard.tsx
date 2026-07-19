import Image from "next/image";
import type { ProcessStep } from "@/types/content";

type ProcessCardProps = {
  item: ProcessStep;
};

export function ProcessCard({ item }: ProcessCardProps) {
  return (
    <article className="relative mx-auto w-full max-w-[318px] pt-[94px] transition-transform duration-300 sm:pt-[104px] motion-reduce:transition-none motion-reduce:hover:transform-none supports-[hover:hover]:hover:-translate-y-1">
      <div className="absolute left-1/2 top-[36px] z-10 h-[59px] w-px -translate-x-1/2 sm:top-[40px] sm:h-[65px]" style={{ backgroundColor: item.accent }} />
      <div
        className="absolute left-1/2 top-[6px] z-20 flex h-11 w-[104px] -translate-x-1/2 -rotate-[28deg] items-center justify-center rounded-full text-xs font-medium tracking-[0.01em] text-white shadow-[0_2px_4px_rgba(0,0,0,0.12)] sm:top-[7px] sm:h-[50px] sm:w-[116px] sm:text-sm"
        style={{ backgroundColor: item.accent }}
      >
        {item.step}
      </div>

      <div
        className={`relative mx-auto flex min-h-[360px] w-full max-w-[318px] flex-col items-center overflow-hidden rounded-[20px] px-8 pb-8 pt-[208px] text-center sm:h-[387px] sm:min-h-0 sm:px-9 ${item.featured ? "border border-transparent bg-[linear-gradient(180deg,#151311_0%,#17100b_35%,#4e260f_65%,#b85b24_100%)] text-white" : "border border-[#dfe0e4] bg-white text-foreground"}`}
      >
        <svg
          aria-hidden="true"
          viewBox="0 0 318 202"
          preserveAspectRatio="none"
          className="pointer-events-none absolute inset-x-0 top-0 z-10 h-[202px] w-full"
        >
          <path
            d="M0 0H318V58C276 137 224 190 159 190C94 190 42 137 0 58V0Z"
            fill={item.featured ? "rgba(8,8,8,0.42)" : "#f3f3f4"}
          />
        </svg>
        <Image
          src={item.icon}
          alt=""
          width={84}
          height={84}
          className="absolute top-10 z-20 size-[84px] object-contain"
        />

        <h3 className="relative z-20 text-xl font-medium leading-[1.5]">{item.title}</h3>
        <p className={`relative z-20 mt-5 max-w-[240px] font-geist text-sm leading-[1.4] ${item.featured ? "text-white/90" : "text-body-text"}`}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
