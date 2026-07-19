import Image from "next/image";
import { CharacterVisual } from "@/components/shared/CharacterVisual";
import { GoogleReviewBadge } from "./GoogleReviewBadge";

export function HeroVisual() {
  return (
    <div className="relative mx-auto h-[500px] w-full max-w-[648px] sm:h-[588px] lg:h-[588px] xl:mx-0 xl:ml-auto xl:w-[648px]">
      <div className="absolute left-[2%] top-[10%] z-20 size-9 sm:-left-[2%] sm:top-[12%] sm:size-10 lg:-left-[13.3%] lg:top-[3.5%]">
        <Image
          src="/assets/social/instagram.webp"
          alt=""
          fill
          sizes="40px"
          className="object-contain opacity-30 drop-shadow-sm"
        />
      </div>

      <CharacterVisual
        className="absolute left-[16%] top-0 w-[124%] origin-center scale-[1.09] xl:left-[21%]"
        preload
      />

      <div className="absolute left-[-1%] top-[17%] z-30 translate-x-5 scale-[0.82] sm:left-[5%] sm:top-[18%] sm:scale-100 xl:left-[5.5%]">
        <GoogleReviewBadge />
      </div>

    </div>
  );
}
