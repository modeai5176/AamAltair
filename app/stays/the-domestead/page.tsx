import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StayDetailHero } from "@/components/stay-detail-hero";
import { StayOverview } from "@/components/stay-overview";
import { StayAmenities } from "@/components/stay-amenities";
import { StayInclusions } from "@/components/stay-inclusions";
import { StayRules } from "@/components/stay-rules";
import { BookingWidget } from "@/components/booking-widget";
import { RelatedExperiences } from "@/components/related-experiences";
import Link from "next/link";

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
      {/* Pricing - critical section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <div>
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Rates
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary">
                Luxe Packages
              </h2>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-primary">
                Bed & Breakfast
              </h3>
              <p className="mt-3 text-4xl font-semibold text-primary">
                KSh 13,000
              </p>
              <p className="text-sm text-foreground/70">
                per night • 2 pax sharing
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Daily
                  light breakfast
                </li>
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" /> Tea &
                  coffee setup
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border-2 border-accent bg-background p-6 shadow-md relative">
              <span className="absolute -top-3 right-4 rounded-full bg-accent px-3 py-1 text-xs font-medium text-background">
                Most popular
              </span>
              <h3 className="text-lg font-serif font-semibold text-primary">
                Half Board
              </h3>
              <p className="mt-3 text-4xl font-semibold text-primary">
                KSh 18,000
              </p>
              <p className="text-sm text-foreground/70">
                per night • 2 pax sharing
              </p>
              <ul className="mt-6 space-y-2 text-sm text-foreground/90">
                <li className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-accent" />{" "}
                  Breakfast + dinner
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-border bg-background p-6 shadow-sm">
              <h3 className="text-lg font-serif font-semibold text-primary">
                Additional Adult
              </h3>
              <div className="mt-4 space-y-4">
                <div>
                  <p className="text-sm font-medium text-primary">
                    Bed & Breakfast
                  </p>
                  <p className="text-2xl font-semibold text-primary">
                    KSh 2,500
                  </p>
                </div>
                <div>
                  <p className="text-sm font-medium text-primary">Half Board</p>
                  <p className="text-2xl font-semibold text-primary">
                    KSh 5,000
                  </p>
                </div>
              </div>
              <p className="mt-4 text-xs text-foreground/60">
                Rates subject to availability and season. Taxes included where
                applicable.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-medium text-background hover:opacity-90 transition"
            >
              Book now
            </Link>
          </div>
        </div>
      </section>
      <StayRules />
      <BookingWidget />
      <RelatedExperiences />
      <Footer />
    </main>
  );
}
