import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ExperienceCard } from "@/components/experience-card";
import { NatureCTA } from "@/components/nature-cta";

const experiences = [
  {
    iconName: "Sunrise",
    title: "Sunrise Meditation",
    description: "Gentle riverside practice to begin the day.",
    longDescription:
      "Start your morning with a peaceful meditation session by the River Galana. As the sun rises over the mango orchard, find your center in this tranquil riverside setting. Our guided meditation focuses on breathing techniques and mindfulness practices that connect you with the natural rhythms of the land.",
    duration: "40 min",
    bestTime: "Best in dry season",
    schedule: "Start 6:00 AM",
    price: "Included",
    bookingRequired: true,
    image: "/sunrise.webp",
  },
  {
    iconName: "TreePine",
    title: "Guided Mango & Orchard Tour",
    description: "Explore 150 acres and rare varietals.",
    longDescription:
      "Discover the secrets of our 150-acre mango orchard with our knowledgeable guides. Learn about the different mango varieties we cultivate, sustainable farming practices, and the history of the land. This immersive tour includes tastings of seasonal fruits and insights into our partnership with nature.",
    duration: "1.5 hrs",
    bestTime: "Year-round",
    schedule: "7:30–9:00 AM",
    price: "Included",
    bookingRequired: true,
    image: "/mango-orchard-kenya-landscape.webp",
  },
  {
    iconName: "Wine",
    title: "Sundowner Picnic",
    description: "River lights, fine snacks, and your drink of choice.",
    longDescription:
      "Experience the magic of African sunsets with our carefully curated sundowner picnic. Enjoy artisanal snacks, local delicacies, and your choice of wine or beer as you watch the sun set over the River Galana. This intimate experience captures the essence of safari luxury in our peaceful orchard setting.",
    duration: "1.5 hrs",
    bestTime: "Dry season",
    schedule: "5:30–7:00 PM",
    price: "5,000 pp",
    bookingRequired: true,
    image: "/sundowner.webp",
  },
  {
    iconName: "Apple",
    title: "Mango Tasting",
    description: "Seasonal flight of cultivars from the farm.",
    longDescription:
      "Embark on a sensory journey through our heritage mango varieties. This guided tasting experience showcases the unique flavors, textures, and stories behind each cultivar grown on our farm. Learn about the terroir that makes our mangoes special and discover your personal favorites.",
    duration: "45 min",
    bestTime: "Seasonal",
    schedule: "Flexible timing",
    price: "3,000 pp",
    bookingRequired: true,
    image: "/mango-orchard.webp",
  },
  // Duplicated cards (you can update contents later)
  {
    iconName: "Sunrise",
    title: "Waterfall Island Hike & Tour",
    description: "Available only in dry season",
    longDescription:
      "Available only in dry season, costs Ksh 1500 per person (includes small picnic meal)",
    duration: "40 min",
    bestTime: "Best in dry season",
    schedule: "Start 6:00 AM",
    price: "1500 pp",
    bookingRequired: true,
    image: "/rivergalana.webp",
  },
  {
    iconName: "TreePine",
    title: "Indigenous African Silk Farm Tour",
    description: "Gonometa Silkworm Farm",
    longDescription:
      "Explore Kenya’s first cruelty-free silk farm, where silk from the African Gonometa moth is sustainably cultivated.",
    duration: "1.5 hrs",
    bestTime: "Year-round",
    schedule: "7:30–9:00 AM",
    price: "Included",
    bookingRequired: true,
    image: "/mango-orchard-kenya-landscape.webp",
  },
  {
    iconName: "Wine",
    title: "Tsavo West / Tsavo East Game Drive",
    description: "Plentiful game drives - guides available.",
    longDescription:
      "There are plentiful (Self drive) game drive through the park - Guides available - Tsavo East 1hour 35min away, Tsavo West 40min away ",
    duration: "1.5 hrs",
    bestTime: "Dry season",
    schedule: "5:30–7:00 PM",
    price: "Contact for pricing",
    bookingRequired: true,
    image: "/river-galana-kenya-nature.webp",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">
              Slow Mornings. Golden Evenings.
            </h1>
            <p className="text-xl text-foreground/80 max-w-3xl mx-auto text-pretty">
              Immerse yourself in carefully curated experiences that celebrate
              the natural rhythms of our mango orchard and the gentle flow of
              the River Galana.
            </p>
          </div>

          {/* Experiences Grid: 3 columns on lg; items-stretch keeps equal card heights */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg: gap-8 items-stretch">
            {experiences.map((experience, idx) => (
              <div
                key={idx}
                /* Center the last single card when total % 3 === 1 */
                className={
                  experiences.length % 3 === 1 && idx === experiences.length - 1
                    ? "lg:col-start-2"
                    : ""
                }
              >
                {/* Ensure each grid item can stretch and match heights */}
                <ExperienceCard experience={experience} />
              </div>
            ))}
          </div>

          {/* Additional Info */}
          <div className="mt-16 p-8 bg-card rounded-2xl border border-border text-center">
            <h3 className="text-xl font-serif font-medium text-primary mb-4">
              Booking Your Experiences
            </h3>
            <p className="text-foreground/80 mb-6 max-w-2xl mx-auto">
              All experiences require advance booking and are subject to weather
              conditions and seasonal availability. We recommend booking
              experiences when you reserve your stay to ensure availability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <div className="text-sm text-muted-foreground">
                <strong className="text-accent">Included experiences:</strong>{" "}
                Sunrise Meditation, Orchard Tour
              </div>
              <div className="text-sm text-muted-foreground">
                <strong className="text-accent">Premium experiences:</strong>{" "}
                Sundowner Picnic, Mango Tasting
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
