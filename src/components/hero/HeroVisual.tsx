import Image from "next/image";
import { CharacterVisual } from "@/components/shared/CharacterVisual";
import { GoogleReviewBadge } from "./GoogleReviewBadge";

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[648px] sm:h-[588px] lg:h-[588px] xl:mx-0 xl:w-[648px] xl:shrink-0">
      <div className="absolute left-[2%] top-[10%] z-20 size-9 sm:-left-[2%] sm:top-[12%] sm:size-10 lg:-left-[13.3%] lg:top-[3.5%]">
        <Image
          src="/assets/hero/skill-icons_instagram.png"
          alt=""
          fill
          sizes="40px"
          className="object-contain drop-shadow-sm"
        />
      </div>

      <CharacterVisual className="absolute left-[16%] top-0 w-[124%]" preload />

      <div className="absolute left-[2%] top-[20%] z-30 scale-[0.82] sm:left-[10.5%] sm:top-[21%] sm:scale-100">
        <GoogleReviewBadge />
      </div>

    </div>
  );
}
