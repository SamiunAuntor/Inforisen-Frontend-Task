import Image from "next/image";
import type { ProcessStep } from "@/types/content";

type ProcessCardProps = {
  item: ProcessStep;
};

export function ProcessCard({ item }: ProcessCardProps) {
  return (
    <article className="relative mx-auto w-full max-w-[318px] pt-[88px] transition-transform duration-300 sm:pt-[98px] motion-reduce:transition-none motion-reduce:hover:transform-none supports-[hover:hover]:hover:-translate-y-1">
      <div className="absolute left-1/2 top-[31px] z-10 h-14 w-px -translate-x-1/2 sm:top-[35px] sm:h-16" style={{ backgroundColor: item.accent }} />
      <div
        className="absolute left-1/2 top-[5px] z-20 flex h-9 w-[76px] -translate-x-1/2 -rotate-[28deg] items-center justify-center rounded-full text-[11px] font-medium text-white shadow-sm sm:top-[7px] sm:h-10 sm:w-[84px] sm:text-xs"
        style={{ backgroundColor: item.accent }}
      >
        {item.step}
      </div>

      <div
        className={`relative mx-auto flex min-h-[360px] w-full max-w-[318px] flex-col items-center overflow-hidden rounded-[20px] px-8 pb-8 pt-[208px] text-center sm:h-[387px] sm:min-h-0 sm:px-9 ${item.featured ? "border border-transparent bg-[linear-gradient(180deg,#151311_0%,#17100b_35%,#4e260f_65%,#b85b24_100%)] text-white" : "border border-[#dfe0e4] bg-white text-foreground"}`}
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-[-94px] z-10 h-[284px] w-[647px] -translate-x-1/2 rounded-[50%] ${item.featured ? "bg-[rgba(8,8,8,0.42)]" : "bg-[#f3f3f4]"}`}
          aria-hidden="true"
        />
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
