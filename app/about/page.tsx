import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { NatureCTA } from "@/components/nature-cta";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Heart, Users, Leaf, Award, MapPin, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { TimelineImage } from "@/components/timeline-image";

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
    year: "2008",
    title: "The Seed is Planted",
    description:
      "A seed is planted in the minds of a certain Mr Bhupendra & Mr Mukesh Patel. They come from a long lineage of farmers, where father and forefather toiled & lived off the land. The soil beckons and the call is too irresistible. Both friends long to return to the land, and thus the story begins.",
    images: ["/experience/2008.webp"],
  },
  {
    year: "2011",
    title: "The Quiet Farm",
    description:
      "Mr Mukesh and Mr Bhupendra Patel buy a quiet little farm in Kibwezi. There is no electricity, network or running water, and the land is overrun by weeds. There is only one old house, beautiful red soil, open skies stretching far beyond the horizon, and a kind of peace that's hard to find.",
    images: [
      "/experience/2011 11.webp",
      "/experience/2011 2.webp",
      "/experience/2011 3.webp",
    ],
  },
  {
    year: "2012",
    title: "The Vision Takes Shape",
    description:
      "A goal of 6400 mangoes is set, but the vision seems bigger than reality. Unsuccessful attempts are made to bring electricity to the farm. Exasperated, the 2 farmers turn to renewable energy. Their first attempt is hydroelectric but the water wheel never quite works as expected. Despite the difficulties there is a magic in working the soil.",
    images: ["/experience/2012 1.webp"],
  },
  {
    year: "2015",
    title: "Life's Constant Change",
    description:
      "Life reminds us that change is the only constant. In a flash Bhupendra Bhai passes away and returns to the to the soil he so loved. Yet, the vision they shared still lives on, now bigger than both of them. A vision rooted in the land, in the sunlight, in every corner of the farm they have built together.",
    images: ["/experience/2015.webp"],
  },
  {
    year: "2016",
    title: "Renewable Energy Focus",
    description:
      "Mukesh intensifies his focus on renewable energy, installing his first solar powered electric system. The hot Kibwezi sun becomes a major asset. Encouraged, he also adds wind turbines to harness the powerful breeze of the river. He lays down these systems by hand, learning, testing, building. This is no longer just a farm; it is a passion project, and he pours into it.",
    images: ["/experience/2016.webp"],
  },
  {
    year: "2017",
    title: "The Water Tank",
    description:
      "Renewable energy becomes one of the CSFs in running this farm; the river runs nearby but getting water to the crops using fuel proves too expensive. Thus the water tank is erected—using the natural terrain and gravity to water the entire farm. To this day the tank is the farm's most recognizable landmark, visible from kilometers out.",
    images: ["/experience/2017.webp"],
  },
  {
    year: "2018",
    title: "Nature's Power",
    description:
      "In an instant, nature once again leaves us humbled by her power. Heavy rains become devastating floods, sweeping away our home, drowning the fields in sand and water, and killing hundreds of mature mango trees and other crops. Only the water tank withstands the brunt of the floods, acting as refuge to all who would have otherwise been trapped.",
    images: ["/experience/2018 1.webp", "/experience/2018 2.webp"],
  },
  {
    year: "2020",
    title: "Building Stronger",
    description:
      'Undeterred, Mukesh decides to build exactly where the old house stood. "Just stronger this time," he says. A new house is built straight into the bedrock, with all the determination to stand strong against all odds. Starting from the ground up - quite literally, he builds bit by bit to where it stands today. Quite different from the initial farmhouse that nature claimed, but with a story of its own to tell.',
    images: ["/experience/2020 1.webp"],
  },
  {
    year: "2022",
    title: "Bambhaji Dham",
    description:
      "The house is christened 'Bambhaji Dham' as it hosts the first celebrations in the family, a testament to starting again. Inspired by the architecture of earthen manyattas, dome houses are erected to welcome friends and family to our home; with a vision of offering them to the community someday.",
    images: ["/experience/2022 1.webp", "/experience/2022 2.webp"],
  },
  {
    year: "2025",
    title: "The Dream Realized",
    description:
      "What began as a vision to share this way of life has become reality. We now open the Domestead to guests, inviting them to experience Tsavo's quiet tranquility. With 6,000 mango trees flourishing, our dream is taking root and we now hold space for the community to join in partnership with nature.",
    images: ["/experience/2025 1.webp", "/experience/2025 2.webp"],
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
                Aam Altair: The Big Dipper
              </h1>
              <p className="text-xl text-foreground/80 mb-8 text-pretty leading-relaxed">
                Nestled in the tranquil hills of Tsavo, where ancient baobab
                trees rise and the River Galana sings through the valley. Move
                at nature’s pace, wake to golden light and birdsong, wander
                through orchards, and end your day under the stars. Every dome
                is a cozy sanctuary — crafted by local hands, powered by sun and
                wind, and surrounded by the wild beauty of the land. Come find
                your balance where luxury meets simplicity and nature leads the
                way.
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
              Ours is a story of passion, resilience, and hope. What began as a
              humble dream—with hard work, a clear vision, and a love for the
              land—has grown into our own little piece of heaven. Now, we’re
              opening our gates to share it with you.
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
                  <TimelineImage
                    images={item.images}
                    alt={`${item.title} - ${item.year}`}
                    year={item.year}
                  />
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
