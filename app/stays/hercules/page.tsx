import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StayDetailHero } from "@/components/stay-detail-hero";
import { StayOverview } from "@/components/stay-overview-hercules";
import { StayAmenities } from "@/components/stay-amenities-hercules";
import { StayInclusions } from "@/components/stay-inclusions-hercules";
import { StayRules } from "@/components/stay-rules-hercules";
import { BookingWidget } from "@/components/booking-widget";
import { RelatedExperiences } from "@/components/related-experiences";

export default function HeraclesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <StayDetailHero
        title="Hercules"
        images={[
          "/second-luxury-property-kenya-retreat.jpg",
          "/mango-orchard-kenya-landscape.jpg",
          "/riverfront-deck-sunset-kenya.jpg",
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
