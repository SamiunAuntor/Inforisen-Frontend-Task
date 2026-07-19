import { Container } from "@/components/shared/Container";
import { LoginForm } from "@/components/forms/LoginForm";
import { HeroVisual } from "@/components/hero/HeroVisual";

export function HeroSection() {
  return (
    <main id="home" className="relative z-20">
      <Container>
        <div className="grid items-center gap-10 pb-16 pt-14 md:pb-20 md:pt-20 lg:grid-cols-2 lg:gap-6 lg:pb-24 lg:pt-16 xl:grid-cols-[528px_648px] xl:justify-between xl:gap-x-0 xl:pt-[100px]">
          <div className="w-full max-w-[528px] xl:w-[528px] xl:shrink-0">
            <h1 className="max-w-[528px] font-sans text-[clamp(2.35rem,4vw,3rem)] font-bold leading-[1.08] tracking-[-0.025em] text-foreground">
              Grow Faster with SMM PANEL Across Every Social Platform
            </h1>
            <p className="mt-7 max-w-[528px] text-[15px] leading-[1.45] text-body-text sm:text-base">
              SMM PANEL helps you grow on Instagram, TikTok, YouTube, Facebook, X,
              Spotify, Telegram, Discord, Twitch, and more with fast delivery,
              affordable pricing, and reliable SMM services.
            </p>
            <LoginForm />
          </div>

          <HeroVisual />
        </div>
      </Container>
    </main>
  );
}
