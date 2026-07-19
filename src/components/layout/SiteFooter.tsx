import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";
import { Container } from "@/components/shared/Container";
import { FooterContactItem } from "@/components/footer/FooterContactItem";
import { FooterLinkGroup } from "@/components/footer/FooterLinkGroup";
import { footerLinkGroups, footerSocialLinks } from "@/data/footer";

export function SiteFooter() {
  return (
    <footer id="contact" className="relative min-h-[512px] overflow-hidden bg-black text-white">
      <Image
        src="/assets/footer-bg.png"
        alt=""
        fill
        sizes="100vw"
        className="pointer-events-none object-cover object-bottom"
      />

      <Container className="relative z-10 py-16 md:py-20 xl:pt-[86px] xl:pb-[80px]">
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-[1.65fr_0.85fr_0.95fr_1.05fr] xl:gap-20">
          <div>
            <a
              href="#home"
              className="inline-block text-[32px] font-semibold leading-none tracking-[-0.03em] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f47b20]"
            >
              SMM Panel
            </a>
            <p className="mt-5 max-w-[330px] text-sm leading-[1.55] text-white/70">
              SMM PANEL is a leading and reliable social media marketing platform committed to
              providing fast, effective, and premium growth solutions across all popular social
              networks.
            </p>

            <h2 className="mt-7 text-xl font-semibold">Follow Us</h2>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Social media links">
              {footerSocialLinks.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    aria-label={social.label}
                    className="grid size-10 place-items-center rounded-lg border border-[#f47b20]/25 bg-white/10 transition duration-200 hover:-translate-y-0.5 hover:border-[#f47b20]/70 hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f47b20]"
                  >
                    <Image src={social.icon} alt="" width={22} height={22} />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {footerLinkGroups.map((group) => (
            <FooterLinkGroup key={group.title} {...group} />
          ))}

          <div>
            <h2 className="text-xl font-semibold">Contact Info</h2>
            <address className="mt-5 space-y-4 not-italic">
              <FooterContactItem icon={Mail} href="mailto:info@smmpanel.com">
                info@smmpanel.com
              </FooterContactItem>
              <FooterContactItem icon={Phone} href="tel:+8801400715037">
                +880 1400715037
              </FooterContactItem>
              <FooterContactItem icon={MapPin}>
                4093 Overlook Drive,
                <br />
                Richmond, IN 47374
              </FooterContactItem>
            </address>
          </div>
        </div>

        <div className="mt-10 flex min-h-[70px] items-center justify-center rounded-[20px] border border-white/25 bg-white/[0.07] px-5 py-4 text-center text-sm leading-6 text-white/90 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_12px_35px_rgba(0,0,0,0.2)] backdrop-blur-[10px] xl:mt-10">
          © 2026 HQ Promo. We are not affiliated with any social media platforms mentioned on this
          website. We only provide social media marketing services.
        </div>
      </Container>
    </footer>
  );
}
