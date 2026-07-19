export type FooterLink = {
  label: string;
  href: string;
};

export type FooterLinkGroup = {
  title: string;
  links: FooterLink[];
};

export const footerLinkGroups: FooterLinkGroup[] = [
  {
    title: "Quick Links",
    links: [
      { label: "Home", href: "#home" },
      { label: "About Us", href: "#about" },
      { label: "Services", href: "#services" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "Terms Of Services", href: "#terms" },
      { label: "Privacy Policy", href: "#privacy" },
      { label: "Refund Policy", href: "#refund" },
      { label: "FAQs", href: "#faq" },
      { label: "Contact Us", href: "#contact" },
    ],
  },
];

export const footerSocialLinks = [
  { label: "Facebook", href: "#facebook", icon: "/assets/social/facebook.webp" },
  { label: "Instagram", href: "#instagram", icon: "/assets/social/instagram.webp" },
  { label: "X", href: "#x", icon: "/assets/social/x.webp" },
  { label: "LinkedIn", href: "#linkedin", icon: "/assets/social/linkedin.webp" },
  { label: "YouTube", href: "#youtube", icon: "/assets/social/youtube.webp" },
] as const;
