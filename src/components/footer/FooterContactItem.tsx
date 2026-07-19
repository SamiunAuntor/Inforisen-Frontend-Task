import type { LucideIcon } from "lucide-react";

type FooterContactItemProps = {
  icon: LucideIcon;
  children: React.ReactNode;
  href?: string;
};

export function FooterContactItem({ icon: Icon, children, href }: FooterContactItemProps) {
  const content = (
    <>
      <span className="grid size-8 shrink-0 place-items-center rounded-md bg-white/10 text-[#ed842d]">
        <Icon aria-hidden="true" size={15} strokeWidth={2.25} />
      </span>
      <span>{children}</span>
    </>
  );

  return href ? (
    <a
      href={href}
      className="flex items-center gap-3 text-sm leading-5 text-white/75 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f47b20]"
    >
      {content}
    </a>
  ) : (
    <div className="flex items-start gap-3 text-sm leading-5 text-white/75">{content}</div>
  );
}
