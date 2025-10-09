import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { StayCard } from "@/components/stay-card";
import { NatureCTA } from "@/components/nature-cta";

export default function StaysPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">
              Your Retreats in Tsavo
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-pretty">
              Choose from our carefully curated accommodations, each designed to
              offer a unique connection with the natural beauty of the River
              Galana and our mango orchard.
            </p>
          </div>

          {/* Stays Grid */}
          <div className="space-y-16">
            {/* The Domestead */}
            <StayCard
              title="The Domestead"
              description="Nestled by the River Galana, The Domestead offers a perfect blend of luxury and nature. Wake up to the sound of flowing water and the sight of mango trees stretching to the horizon."
              images={[
                "/luxury-dome-accommodation-riverfront-kenya.jpg",
                "/dome-accommodation-with-river-view-kenya-luxury-re.jpg",
                "/luxury-dome-interior-kenya-retreat.jpg",
              ]}
              badges={["Sleeps 4 (+2)", "Riverfront", "Self-catering or Chef"]}
              features={[
                "Downstairs: 1 King bed",
                "Upstairs: 1 Japanese King",
                "Optional +2 on request",
                "Ensuite bathrooms",
                "Living area & Kitchenette",
                "Outdoor kitchen & deck",
                "Private riverfront deck",
              ]}
              href="/stays/the-domestead"
              href="/stays/the-domestead"
              featured
            />

            {/* Second Property */}
            <StayCard
              title="Hercules"
              description="Named after the legendary Heracles, Hercules offers a serene riverside escape where nature meets comfort. Unwind on a private deck, reconnect with your inner calm, and end your day in quiet luxury."
              images={[
                "/second-luxury-property-kenya-retreat.jpg",
                "/mango-orchard-kenya-landscape.jpg",
                "/riverfront-deck-sunset-kenya.jpg",
              ]}
              badges={[
                "Mezzanine floor",
                "Riverfront deck",
                "Farm to table meals",
              ]}
              features={[
                "2 King sized beds",
                "Capacity 5 pax",
                "1 shared bathroom",
                "Riverfront deck",
                "Private outdoor area",
                "Kitchenette + coffee bar",
                "Farm to table meals",
                "Mezzanine floor for your stargazing experience",
              ]}
              href="/stays/hercules"
              href="/stays/hercules"
              featured
            />

            {/* Third Property */}
            <StayCard
              title="Andromeda"
              description="Named after the legendary Heracles, Hercules offers a serene riverside escape where nature meets comfort. Unwind on a private deck, reconnect with your inner calm, and end your day in quiet luxury."
              images={[
                "/second-luxury-property-kenya-retreat.jpg",
                "/outdoor-kitchen-kenya-retreat.jpg",
                "/nature-experiences-mango-orchard-kenya.jpg",
              ]}
              badges={[
                "Mezzanine floor",
                "Riverfront deck",
                "Farm to table meals",
              ]}
              features={[
                "2 King sized beds",
                "1 shared bathroom",
                "4 pax capacity",
                "Riverfront deck",
                "Private outdoor area",
                "Kitchenette + coffee bar",
                "Farm to table meals",
                "Mezzanine floor for your stargazing experience",
              ]}
              href="/stays/andromeda"
              href="/stays/andromeda"
              featured
            />
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-card rounded-2xl border border-border">
            <div className="text-center space-y-4">
              <h3 className="text-xl font-serif font-medium text-primary">
                What Makes Our Stays Special
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-sm text-foreground/80">
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Family-run hospitality</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Secluded private entries</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Secure on-site parking</span>
                </div>
                <div className="flex items-center justify-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span>Solar electric fence protection</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <NatureCTA />
      <Footer />
    </main>
  );
}
