import Image from "next/image";
import { TrustedUsersBadge } from "@/components/hero/TrustedUsersBadge";

type CharacterVisualProps = {
  className?: string;
  preload?: boolean;
};

export function CharacterVisual({
  className = "",
  preload = false,
}: CharacterVisualProps) {
  return (
    <div className={`relative aspect-[514/472] w-full ${className}`}>
      <div className="absolute bottom-[19%] left-[12.6%] right-[32.7%] top-[12.5%] overflow-hidden rounded-[9%] bg-gradient-to-b from-[#9b3c20] via-[#5b251a] to-[#050505] shadow-[0_16px_40px_rgba(73,31,19,0.15)]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_8%,rgba(255,153,89,0.16),transparent_32%)]" />
      </div>

      <div className="absolute -top-[3%] bottom-[19%] left-[9.5%] right-[32.7%] z-10 overflow-hidden">
        <Image
          src="/assets/hero/hero-person.webp"
          alt="Young social media creator"
          fill
          preload={preload}
          sizes="(max-width: 640px) 58vw, 380px"
          className="object-cover object-top"
        />
      </div>

      <div className="absolute bottom-[15.5%] left-[22.8%] z-30 origin-bottom-left scale-[0.72] sm:scale-[0.82] lg:scale-100">
        <TrustedUsersBadge />
      </div>

      <div className="absolute bottom-[10%] right-[22%] z-40 h-[52%] w-[32%] rotate-[30deg]">
        <Image
          src="/assets/hero/rocket.webp"
          alt=""
          fill
          sizes="140px"
          className="object-contain"
        />
      </div>
    </div>
  );
}
