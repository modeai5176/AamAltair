import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { FarmHero } from "@/components/farm-hero";
import { FarmProducts } from "@/components/farm-products";
import { FarmStory } from "@/components/farm-story";
import { NatureCTA } from "@/components/nature-cta";

export default function FarmPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <FarmHero />
      <FarmStory />
      <FarmProducts />
      <NatureCTA />
      <Footer />
    </main>
  );
}

