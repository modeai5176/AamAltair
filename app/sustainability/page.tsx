import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { SustainabilityHero } from "@/components/sustainability-hero"
import { SustainabilityStory } from "@/components/sustainability-story"
import { SustainabilityImpact } from "@/components/sustainability-impact"
import { SustainabilityCTA } from "@/components/sustainability-cta"
import { NatureCTA } from "@/components/nature-cta"

export default function SustainabilityPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <SustainabilityHero />
      <SustainabilityStory />
      <SustainabilityImpact />
      <SustainabilityCTA />
      <NatureCTA />
      <Footer />
    </main>
  )
}
