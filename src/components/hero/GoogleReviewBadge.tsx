import Image from "next/image";

export function GoogleReviewBadge() {
  return (
    <div className="flex h-[74px] w-[178px] items-center gap-2.5 rounded-[15px] bg-white px-4 shadow-[0_6px_14px_rgba(30,20,15,0.2)]">
      <Image
        src="/assets/hero/google.png"
        alt="Google"
        width={36}
        height={36}
        className="size-9 shrink-0 object-contain"
      />
      <div className="min-w-0">
        <div className="flex items-center gap-px" aria-label="4.9 out of 5 stars">
          {[0, 1, 2, 3].map((star) => (
            <Image
              key={star}
              src="/assets/hero/star.png"
              alt=""
              width={16}
              height={16}
              className="size-4 object-contain"
            />
          ))}
          <Image
            src="/assets/hero/half-star.png"
            alt=""
            width={16}
            height={16}
            className="size-4 object-contain"
          />
        </div>
        <p className="mt-1 whitespace-nowrap text-[14px] font-medium leading-none tracking-[-0.01em] text-[#111]">
          <span className="text-[#f2ad2f]">4.9</span>{" "}
          <span className="font-semibold">Reviews</span>
        </p>
      </div>
    </div>
  );
}
