import Image from "next/image";
import { Leaf, Sprout, Droplets, Sun } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "Organic Farming",
    description:
      "100% organic practices, no pesticides or harmful chemicals. We work in harmony with nature.",
  },
  {
    icon: Droplets,
    title: "Sustainable Water",
    description:
      "Solar-powered irrigation from the River Galana ensures sustainable water management.",
  },
  {
    icon: Sun,
    title: "Solar Powered",
    description:
      "Our entire farm operation runs on renewable solar energy, reducing our carbon footprint.",
  },
  {
    icon: Sprout,
    title: "Seasonal Harvest",
    description:
      "Fresh produce harvested at peak ripeness, ensuring maximum flavor and nutrition.",
  },
];

export function FarmStory() {
  return (
    <section className="py-12 sm:py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          {/* Content */}
          <div className="space-y-4 sm:space-y-6 order-2 lg:order-1">
            <div className="space-y-2">
              <p className="text-xs sm:text-sm font-medium text-accent tracking-wide uppercase">
                Our Farm Story
              </p>
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-medium text-primary">
                Three Generations of Sustainable Farming
              </h2>
            </div>

            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              For over five decades, our family has cultivated this 150-acre
              paradise along the River Galana. What started as a mango orchard
              has grown into a diverse, sustainable farm producing fresh
              vegetables, fruits, and herbs. We believe in farming that gives
              back to the land, using organic methods and renewable energy to
              create produce that's not just fresh, but truly nourishing.
            </p>

            <p className="text-base sm:text-lg text-foreground/90 leading-relaxed">
              Every harvest is a celebration of our partnership with nature. We
              invite you to experience the difference that comes from produce
              grown with care, patience, and respect for the earth.
            </p>
          </div>

          {/* Image */}
          <div className="relative aspect-[4/3] rounded-xl sm:rounded-2xl overflow-hidden order-1 lg:order-2">
            <Image
              src="/Gallery/tree_view.avif"
              alt="Aam Altair Farm - Tree View"
              fill
              className="object-cover"
              quality={90}
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mt-12 sm:mt-16">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <div
                key={index}
                className="p-4 sm:p-6 bg-background rounded-xl border border-border"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-accent/20 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                  <IconComponent className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
                </div>
                <h3 className="text-base sm:text-lg font-serif font-medium text-primary mb-2">
                  {feature.title}
                </h3>
                <p className="text-xs sm:text-sm text-foreground/80 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

