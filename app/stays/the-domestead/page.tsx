import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { StayDetailHero } from "@/components/stay-detail-hero"
import { StayOverview } from "@/components/stay-overview"
import { StayAmenities } from "@/components/stay-amenities"
import { StayInclusions } from "@/components/stay-inclusions"
import { StayRules } from "@/components/stay-rules"
import { BookingWidget } from "@/components/booking-widget"
import { RelatedExperiences } from "@/components/related-experiences"

export default function TheDomesteadPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <StayDetailHero
        title="The Domestead"
        images={[
          "/luxury-dome-accommodation-riverfront-kenya.jpg",
          "/dome-accommodation-with-river-view-kenya-luxury-re.jpg",
          "/luxury-dome-interior-kenya-retreat.jpg",
          "/riverfront-deck-sunset-kenya.jpg",
          "/outdoor-kitchen-kenya-retreat.jpg",
        ]}
      />
      <StayOverview />
      <StayAmenities />
      <StayInclusions />
      <StayRules />
      <BookingWidget />
      <RelatedExperiences />
      <Footer />
    </main>
  )
}
