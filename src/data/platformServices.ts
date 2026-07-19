import type { PlatformService } from "@/types/content";

const defaultImage = "/assets/services/facebook-service-image.webp";

const platforms = [
  ["facebook", "Facebook", "/assets/social/facebook.webp"],
  ["instagram", "Instagram", "/assets/social/instagram.webp"],
  ["x", "X (Twitter)", "/assets/social/x.webp"],
  ["youtube", "YouTube", "/assets/social/youtube.webp"],
  ["tiktok", "TikTok", "/assets/social/tiktok.webp"],
  ["linkedin", "LinkedIn", "/assets/social/linkedin.webp"],
  ["telegram", "Telegram", "/assets/social/telegram.webp"],
  ["discord", "Discord", "/assets/social/discord.webp"],
  ["spotify", "Spotify", "/assets/social/spotify.webp"],
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
    fallbackIcon: "☁",
    title: "SoundCloud SMM Panel",
    description:
      "Reach more listeners and strengthen your music profile with reliable SoundCloud promotion services for plays, followers, likes, and engagement.",
    image: defaultImage,
  },
  {
    id: "snapchat",
    name: "Snapchat",
    icon: "/assets/social/snapchat.webp",
    title: "Snapchat SMM Panel",
    description:
      "Grow your Snapchat audience with dependable promotion services designed to increase reach, engagement, and social credibility.",
    image: defaultImage,
  },
  {
    id: "website-traffic",
    name: "Website Traffic",
    fallbackIcon: "↗",
    title: "Website Traffic Services",
    description:
      "Bring more visitors to your website with targeted traffic services built to improve visibility, reach, and online growth.",
    image: defaultImage,
  },
];
