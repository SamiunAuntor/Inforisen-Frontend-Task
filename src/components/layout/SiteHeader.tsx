import { LockKeyhole } from "lucide-react";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/shared/Container";
import { GradientButton } from "@/components/shared/GradientButton";
import { MobileMenu } from "./MobileMenu";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 pt-3 sm:pt-5 xl:pt-7">
      <Container>
        <div className="relative flex min-h-[68px] items-center justify-between rounded-2xl bg-white px-4 shadow-[0_8px_30px_rgba(68,36,20,0.04)] sm:min-h-20 sm:px-7">
          <a
            href="#home"
            className="shrink-0 rounded-md font-outfit text-[22px] font-semibold tracking-[-0.03em] text-foreground focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary sm:text-[28px]"
            aria-label="SMM Panel home"
          >
            SMM Panel
          </a>

          <nav className="hidden lg:block" aria-label="Primary navigation">
            <ul className="flex items-center gap-8 xl:gap-10">
              {navigation.map((item, index) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={`rounded-sm py-2 text-sm font-medium transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary ${index === 0 ? "text-primary" : "text-foreground"}`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="hidden lg:block">
            <GradientButton href="#sign-in">
              <LockKeyhole aria-hidden="true" size={15} />
              Sign In
            </GradientButton>
          </div>

          <MobileMenu />
        </div>
      </Container>
    </header>
  );
}
