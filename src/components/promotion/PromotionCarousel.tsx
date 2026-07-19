"use client";

import { useRef, useState } from "react";
import { promotionServices } from "@/data/promotionServices";
import { PromotionCard } from "./PromotionCard";

const pageCount = 4;

export function PromotionCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [activePage, setActivePage] = useState(0);

  const goToPage = (page: number) => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    track.scrollTo({
      left: page === pageCount - 1 ? maxScroll : (maxScroll * page) / (pageCount - 1),
      behavior: "smooth",
    });
    setActivePage(page);
  };

  const syncActivePage = () => {
    const track = trackRef.current;
    if (!track) return;

    const maxScroll = track.scrollWidth - track.clientWidth;
    const progress = maxScroll > 0 ? track.scrollLeft / maxScroll : 0;
    setActivePage(Math.round(progress * (pageCount - 1)));
  };

  return (
    <div className="mt-10 sm:mt-12 xl:mt-14">
      <div
        ref={trackRef}
        className="mx-4 snap-x snap-mandatory overflow-x-auto pb-4 [scrollbar-width:none] md:mx-6 xl:mx-12 [&::-webkit-scrollbar]:hidden"
        onScroll={syncActivePage}
      >
        <div className="flex w-max min-w-full justify-center gap-5">
          {promotionServices.map((service) => (
            <PromotionCard key={service.name} service={service} />
          ))}
        </div>
      </div>

      <div className="mt-7 flex items-center justify-center gap-1.5" aria-label="Promotion carousel pages">
        {Array.from({ length: pageCount }, (_, page) => (
          <button
            key={page}
            type="button"
            className={`h-2.5 rounded-full transition-all focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary ${activePage === page ? "w-9 bg-gradient-to-r from-[#f4ad29] via-[#da4c5d] to-[#40135e]" : "w-6 bg-[#d5d4d2] hover:bg-[#bbb9b6]"}`}
            aria-label={`Go to promotion slide ${page + 1}`}
            aria-current={activePage === page ? "true" : undefined}
            onClick={() => goToPage(page)}
          />
        ))}
      </div>
    </div>
  );
}
