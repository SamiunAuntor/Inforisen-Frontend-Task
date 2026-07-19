import type { FooterLinkGroup as FooterLinkGroupData } from "@/data/footer";

type FooterLinkGroupProps = FooterLinkGroupData;

export function FooterLinkGroup({ title, links }: FooterLinkGroupProps) {
  return (
    <nav aria-label={title}>
      <h2 className="text-base font-semibold text-white">{title}</h2>
      <ul className="mt-5 space-y-4">
        {links.map((link) => (
          <li key={link.label}>
            <a
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-[#f47b20] focus-visible:text-[#f47b20] focus-visible:outline-none"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
