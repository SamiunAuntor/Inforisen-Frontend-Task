import { SiteHeader } from "@/components/layout/SiteHeader";

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main id="home" className="min-h-[calc(100vh-108px)]" />
    </>
  );
}
