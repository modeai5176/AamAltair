import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StayDetailHero } from "@/components/stay-detail-hero";
import { StayOverview } from "@/components/stay-overview-andromeda";
import { StayAmenities } from "@/components/stay-amenities-andromeda";
import { StayInclusions } from "@/components/stay-inclusions-andromeda";
import { StayRules } from "@/components/stay-rules-andromeda";
import { BookingWidget } from "@/components/booking-widget";
import { RelatedExperiences } from "@/components/related-experiences";

export default function AndromedaPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <StayDetailHero
        title="Andromeda"
        images={[
          "/second-luxury-property-kenya-retreat.jpg",
          "/night-sky-milky-way-kenya.jpg",
          "/river-galana-kenya-nature.jpg",
          "/mango-orchard-kenya-landscape.jpg",
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
  );
}
