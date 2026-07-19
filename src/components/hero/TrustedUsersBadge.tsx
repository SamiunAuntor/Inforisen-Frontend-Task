import Image from "next/image";

const avatars = [1, 2, 3, 4];

export function TrustedUsersBadge() {
  return (
    <div className="h-[76px] w-44 rounded-xl border border-white/70 bg-white/70 px-5 py-3 shadow-[0_8px_20px_rgba(24,16,12,0.22)] backdrop-blur-md">
      <div className="flex -space-x-2">
        {avatars.map((avatar) => (
          <Image
            key={avatar}
            src={`/assets/avatars/trusted-avatar-${avatar}.webp`}
            alt=""
            width={24}
            height={24}
            className="size-6 rounded-full border-2 border-white object-cover"
          />
        ))}
      </div>
      <p className="mt-2 whitespace-nowrap text-[13px] font-semibold">Trusted by 68K users</p>
    </div>
  );
}
