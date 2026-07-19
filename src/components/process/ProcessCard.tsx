import Image from "next/image";
import type { ProcessStep } from "@/types/content";

type ProcessCardProps = {
  item: ProcessStep;
};

export function ProcessCard({ item }: ProcessCardProps) {
  return (
    <article className="relative pt-[98px] transition-transform duration-300 motion-reduce:transition-none motion-reduce:hover:transform-none supports-[hover:hover]:hover:-translate-y-1">
      <div className="absolute left-1/2 top-[35px] z-10 h-16 w-px -translate-x-1/2" style={{ backgroundColor: item.accent }} />
      <div
        className="absolute left-1/2 top-[7px] z-20 flex h-10 w-[84px] -translate-x-1/2 -rotate-[28deg] items-center justify-center rounded-full text-xs font-medium text-white shadow-sm"
        style={{ backgroundColor: item.accent }}
      >
        {item.step}
      </div>

      <div
        className={`relative flex min-h-[360px] flex-col items-center overflow-hidden rounded-[20px] px-8 pb-8 pt-[208px] text-center sm:h-[387px] sm:min-h-0 sm:px-9 ${item.featured ? "border border-transparent bg-[linear-gradient(180deg,#151312_0%,#2b1609_38%,#70330f_68%,#ca6727_100%)] text-white" : "border border-[#dfe0e4] bg-white text-foreground"}`}
      >
        <div
          className={`pointer-events-none absolute left-1/2 top-[-175px] z-10 h-[360px] w-[520px] -translate-x-1/2 rounded-[50%] ${item.featured ? "bg-[rgba(8,8,8,0.42)]" : "bg-[#f3f3f4]"}`}
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
        <p className={`relative z-20 mt-5 font-geist text-sm leading-[1.4] ${item.featured ? "text-white/90" : "text-body-text"}`}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
