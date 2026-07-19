import Image from "next/image";

export function GoogleReviewBadge() {
  return (
    <div className="flex h-[74px] w-[178px] items-center gap-2.5 rounded-xl bg-white px-4 shadow-[0_5px_12px_rgba(30,20,15,0.2)]">
      <Image src="/assets/hero/google.png" alt="Google" width={36} height={36} className="size-8 shrink-0 object-contain" />
      <div>
        <div className="flex gap-px text-[12px] leading-none text-[#f7ba35]" aria-label="5 out of 5 stars">
          <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
        </div>
        <p className="mt-1 whitespace-nowrap text-xs font-medium text-body-text">4.9 Reviews</p>
      </div>
    </div>
  );
}
