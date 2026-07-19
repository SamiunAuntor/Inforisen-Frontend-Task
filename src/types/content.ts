export type PromotionService = {
  name: string;
  price: string;
  description: string;
  image: string;
  reviews: string;
  rating: number;
};

export type PlatformService = {
  id: string;
  name: string;
  icon?: string;
  fallbackIcon?: string;
  title: string;
  description: string;
  image: string;
};

export type ProcessStep = {
  step: string;
  title: string;
  description: string;
  icon: "signup" | "funds" | "service" | "order";
  accent: string;
  featured?: boolean;
};
