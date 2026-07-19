import type { ProcessStep } from "@/types/content";

export const processSteps: ProcessStep[] = [
  {
    step: "STEP 01",
    title: "SIGN UP FOR FREE",
    description:
      "Sign up for your account, fill in the required information, and get instant access to powerful social media growth services.",
    icon: "signup",
    accent: "#dc7a35",
    featured: true,
  },
  {
    step: "STEP 02",
    title: "Add Funds",
    description:
      "Securely add funds to your account using your preferred payment method and keep your balance ready for instant orders.",
    icon: "funds",
    accent: "#bd3435",
  },
  {
    step: "STEP 03",
    title: "Select Service",
    description:
      "Browse our wide range of social media services, choose the platform and package that fits your goals, then proceed with confidence.",
    icon: "service",
    accent: "#842044",
  },
  {
    step: "STEP 04",
    title: "Place your order",
    description:
      "Enter your target link, confirm your order, and watch your social media growth begin with fast, reliable delivery.",
    icon: "order",
    accent: "#35125c",
  },
];
