import type { ProcessStep } from "@/types/content";
import { ProcessIcon } from "./ProcessIcon";

type ProcessCardProps = {
  item: ProcessStep;
};

export function ProcessCard({ item }: ProcessCardProps) {
  return (
    <article className="relative pt-[98px]">
      <div className="absolute left-1/2 top-[35px] z-10 h-16 w-px -translate-x-1/2" style={{ backgroundColor: item.accent }} />
      <div
        className="absolute left-1/2 top-[7px] z-20 flex h-10 w-[84px] -translate-x-1/2 -rotate-[28deg] items-center justify-center rounded-full text-xs font-medium text-white shadow-sm"
        style={{ backgroundColor: item.accent }}
      >
        {item.step}
      </div>

      <div className={`relative flex h-[295px] flex-col items-center overflow-hidden rounded-[20px] border border-black/10 px-7 pb-7 pt-[160px] text-center ${item.featured ? "bg-[linear-gradient(180deg,#171412_0%,#54240c_54%,#d06c28_100%)] text-white" : "bg-white text-foreground"}`}>
        <div className={`absolute -top-[145px] left-1/2 h-[285px] w-full -translate-x-1/2 rounded-[50%] ${item.featured ? "bg-black/40" : "bg-[#c6c6c6]/20"}`} />
        <div
          className={`absolute top-8 z-10 flex size-16 items-center justify-center [clip-path:polygon(50%_0,93%_25%,93%_75%,50%_100%,7%_75%,7%_25%)] ${item.featured ? "bg-gradient-to-br from-[#f3b933] via-[#db4b5a] to-[#35125d] text-white" : "bg-white text-[#9c244a] shadow-[0_6px_18px_rgba(35,24,20,0.06)]"}`}
        >
          <ProcessIcon icon={item.icon} />
        </div>

        <h3 className="relative z-10 text-lg font-medium leading-6">{item.title}</h3>
        <p className={`relative z-10 mt-4 text-sm leading-5 ${item.featured ? "text-white/95" : "text-body-text"}`}>
          {item.description}
        </p>
      </div>
    </article>
  );
}
