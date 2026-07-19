import type { PlatformService } from "@/types/content";

const defaultImage = "/assets/services/facebook-service-image.webp";

const platforms = [
  ["facebook", "Facebook", "/assets/services/facebook.png"],
  ["instagram", "Instagram", "/assets/services/instagram.png"],
  ["x", "X (Twitter)", "/assets/services/x.png"],
  ["youtube", "YouTube", "/assets/services/youtube.png"],
  ["tiktok", "TikTok", "/assets/services/tiktok.png"],
  ["linkedin", "LinkedIn", "/assets/services/linkedin.png"],
  ["telegram", "Telegram", "/assets/services/telegram.png"],
  ["discord", "Discord", "/assets/services/discord.png"],
  ["spotify", "Spotify", "/assets/services/spotify.png"],
] as const;

export const platformServices: PlatformService[] = [
  ...platforms.map(([id, name, icon]) => ({
    id,
    name,
    icon,
    title: `${name} SMM Panel`,
    description:
      id === "facebook"
        ? "Facebook is still the biggest social media platform in Bangladesh with millions of active users. Our Facebook SMM Panel helps you increase page likes, post engagement, and video views quickly. It is perfect for businesses, shops, and creators. You can grow your audience fast, get real attention, and improve your online presence with simple and effective services."
        : `Grow your ${name} presence with fast, reliable, and affordable SMM services. Build stronger engagement, reach more people, and improve your social proof with straightforward services designed for creators, businesses, and agencies.`,
    image: defaultImage,
  })),
  {
    id: "soundcloud",
    name: "SoundCloud",
    icon: "/assets/services/cloudflare.png",
    title: "SoundCloud SMM Panel",
    description:
      "Reach more listeners and strengthen your music profile with reliable SoundCloud promotion services for plays, followers, likes, and engagement.",
    image: defaultImage,
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "/assets/services/snapchat.png",
    title: "Snapchat SMM Panel",
    description:
      "Grow your Snapchat audience with dependable promotion services designed to increase reach, engagement, and social credibility.",
    image: defaultImage,
  },
  {
    id: "website-traffic",
    name: "Website Traffic",
    icon: "/assets/services/growth.png",
    title: "Website Traffic Services",
    description:
      "Bring more visitors to your website with targeted traffic services built to improve visibility, reach, and online growth.",
    image: defaultImage,
  },
];
