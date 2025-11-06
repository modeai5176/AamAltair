import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperiencesTeaser } from "@/components/experiences-teaser";
import { GalleryStrip } from "@/components/gallery-strip";
import { GettingHereSection } from "@/components/getting-here-section";
import { NatureCTA } from "@/components/nature-cta";

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ExperiencesTeaser />
      <GalleryStrip />
      <GettingHereSection />
      <NatureCTA />
      <Footer />
    </main>
  );
}
