import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { NatureCTA } from "@/components/nature-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Award, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Family Heritage",
    description:
      "Three generations of sustainable farming and hospitality, rooted in respect for the land and community.",
  },
  {
    icon: Leaf,
    title: "Environmental Stewardship",
    description:
      "100% renewable energy, water conservation, and regenerative farming practices that give back to nature.",
  },
  {
    icon: Users,
    title: "Community Partnership",
    description:
      "Creating opportunities for local artisans, supporting women's cooperatives, and preserving traditional crafts.",
  },
  {
    icon: Award,
    title: "Authentic Experiences",
    description:
      "Genuine connections with nature, culture, and community through thoughtfully curated activities.",
  },
];

const timeline = [
  {
    year: "1970s",
    title: "The Beginning",
    description:
      "Our family established the mango orchard along the River Galana, learning sustainable farming from the land itself.",
  },
  {
    year: "1990s",
    title: "Growing Roots",
    description:
      "Expanded to 150 acres, pioneering solar irrigation and building relationships with local communities.",
  },
  {
    year: "2010s",
    title: "Sustainable Vision",
    description:
      "Transitioned to 100% renewable energy and began partnering with women's weaving cooperatives.",
  },
  {
    year: "2020s",
    title: "Sharing the Dream",
    description:
      "Opened The Domestead to share our sustainable lifestyle with conscious travelers from around the world.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative pt-header pb-10 md:h-screen md:flex md:items-center">
        <div className="max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">
                Aam Altair: The Domestead
              </h1>
              <p className="text-xl text-foreground/80 mb-8 text-pretty leading-relaxed">
                Nestled by Emily den Boesterd deep in the unique islands of
                Chyogoon Valley, Woodland Retreat offers the perfect blend of
                rustic charm and modern comfort. Our mission is to provide a
                peaceful escape where you can truly recharge and reconnect
                amidst the beauty of untouched nature. Enjoy the vibrant city
                life just steps away, while retreating to a space designed for
                your utmost comfort and tranquility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/contact">
                  <Button className="bg-accent hover:bg-accent/90 text-accent-foreground font-sans font-normal tracking-wide leading-relaxed">
                    Experience Our Story
                  </Button>
                </Link>
                {/* <Link href="/sustainability">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent font-sans font-normal tracking-wide leading-relaxed"
                  >
                    Our Sustainability
                  </Button>
                </Link> */}
              </div>
            </div>
            <div className="order-1 md:order-2 aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/carousel/Dome2.webp"
                alt="Aam Altair: The Domestead - luxury dome accommodation"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
              Our Values
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              The principles that guide everything we do, from farming to
              hospitality.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="text-center bg-card border-border">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
                      <IconComponent className="w-8 h-8 text-accent-foreground" />
                    </div>
                    <h3 className="text-xl font-serif font-medium text-primary mb-4">
                      {value.title}
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16 md:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
              Our Journey
            </h2>
            <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
              Five decades of growth, learning, and commitment to sustainable
              living.
            </p>
          </div>

          <div className="space-y-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="flex flex-col md:flex-row gap-8 items-center"
              >
                <div className="md:w-1/3">
                  <div className="flex items-center gap-4 mb-4">
                    <Calendar className="w-6 h-6 text-accent" />
                    <span className="text-2xl font-serif font-medium text-accent">
                      {item.year}
                    </span>
                  </div>
                  <h3 className="text-2xl font-serif font-medium text-primary mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="md:w-2/3">
                  <div className="aspect-[16/9] relative rounded-xl overflow-hidden">
                    <Image
                      src="/rivergalana.webp"
                      alt={`${item.title} - ${item.year}`}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
                Where We Are
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <MapPin className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-medium text-primary mb-2">
                      River Galana, Tsavo East
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Located along Kenya's second-longest river, our 150-acre
                      property sits in the heart of one of Africa's most
                      biodiverse ecosystems. The Galana River provides life to
                      our orchards and creates a natural corridor for wildlife.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Users className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-medium text-primary mb-2">
                      Community Connection
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      We work closely with nearby villages, supporting local
                      artisans, farmers, and women's cooperatives. Our guests
                      experience authentic Kenyan culture through these
                      meaningful partnerships.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Leaf className="w-6 h-6 text-accent mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-serif font-medium text-primary mb-2">
                      Conservation Impact
                    </h3>
                    <p className="text-foreground/80 leading-relaxed">
                      Our sustainable practices help preserve the delicate
                      balance of the Tsavo ecosystem. From renewable energy to
                      water conservation, every choice supports the environment
                      we call home.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden">
              <Image
                src="/rivergalana.webp"
                alt="River Galana flowing through our property"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <NatureCTA />
      <Footer />
    </main>
  );
}
