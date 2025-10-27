import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Zap, Droplets, Hammer, Users, Leaf, Heart } from "lucide-react";
import Image from "next/image";

// Icon mapping object
const iconMap = {
  Zap,
  Droplets,
  Hammer,
  Users,
  Leaf,
  Heart,
};

const initiatives = [
  {
    iconName: "Zap",
    title: "100% Renewable Energy",
    description:
      "Our entire operation runs on solar and wind power, ensuring zero carbon emissions from our energy consumption.",
    stat: "100%",
    detail: "Solar & wind powered",
  },
  {
    iconName: "Droplets",
    title: "Sustainable Water Management",
    description:
      "Our irrigation system uses 95% solar-powered pumps and gravity-fed distribution to minimize environmental impact.",
    stat: "95%",
    detail: "Solar irrigation",
  },
  {
    iconName: "Hammer",
    title: "Local Craftsmanship",
    description:
      "All furniture and décor are crafted by Kenyan artisans on-site, supporting local skills and reducing transportation emissions.",
    stat: "100%",
    detail: "Local artisans",
  },
  {
    iconName: "Users",
    title: "Community Empowerment",
    description:
      "We prioritize local hiring and skills development, with special focus on supporting single mothers in our community.",
    stat: "80%",
    detail: "Local employment",
  },
  {
    iconName: "Leaf",
    title: "Organic Farming",
    description:
      "Our 150-acre mango orchard follows organic principles, maintaining soil health and biodiversity.",
    stat: "150",
    detail: "Acres organic",
  },
  {
    iconName: "Heart",
    title: "Women's Cooperative",
    description:
      "Carpets and textiles are woven by local women's cooperatives, providing sustainable income and preserving traditional crafts.",
    stat: "25+",
    detail: "Women supported",
  },
];

export function SustainabilityStory() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Introduction */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6 text-balance">
            Building a Sustainable Future
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed text-pretty">
            Our commitment to sustainability extends beyond environmental
            protection to encompass social responsibility and economic
            empowerment. Every aspect of Aam Altair is designed to create
            positive impact while preserving the natural beauty that makes this
            place special.
          </p>
        </div>

        {/* Initiatives Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {initiatives.map((initiative) => {
            const IconComponent =
              iconMap[initiative.iconName as keyof typeof iconMap];
            return (
              <Card
                key={initiative.title}
                className="bg-card border-border hover:border-accent/50 transition-colors duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-serif font-medium text-primary">
                        {initiative.stat}
                      </div>
                      <div className="text-xs text-accent">
                        {initiative.detail}
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-primary">
                      {initiative.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed text-pretty">
                      {initiative.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Photo Essays */}
        <div className="space-y-16">
          {/* Energy Setup */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-accent/20 text-accent border-accent">
                  Energy Independence
                </Badge>
                <h3 className="text-2xl font-serif font-medium text-primary">
                  Harnessing Nature's Power
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Our solar panel array and wind turbines generate all the
                electricity needed for The Domestead and our operations. Battery
                storage ensures consistent power even during cloudy days, while
                smart energy management systems optimize consumption throughout
                the day.
              </p>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div>
                  <div className="font-semibold text-primary">
                    Solar Capacity
                  </div>
                  <div className="text-foreground/80">15kW system</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">Wind Power</div>
                  <div className="text-foreground/80">5kW turbine</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    Battery Storage
                  </div>
                  <div className="text-foreground/80">48kWh capacity</div>
                </div>
                <div>
                  <div className="font-semibold text-primary">
                    Grid Independence
                  </div>
                  <div className="text-foreground/80">100% off-grid</div>
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?key=solar"
                  alt="Solar panels and wind turbine at Aam Altair"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>

          {/* Artisan Workshops */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative lg:order-1">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src="/placeholder.svg?key=artisan"
                  alt="Local artisans crafting furniture"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="space-y-6 lg:order-2">
              <div className="space-y-2">
                <Badge className="bg-accent/20 text-accent border-accent">
                  Local Craftsmanship
                </Badge>
                <h3 className="text-2xl font-serif font-medium text-primary">
                  Preserving Traditional Skills
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Every piece of furniture in The Domestead tells a story of local
                craftsmanship. Our on-site workshop employs skilled artisans
                from nearby villages, creating beautiful, functional pieces
                while preserving traditional woodworking techniques passed down
                through generations.
              </p>
              <div className="space-y-3">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    Sustainable hardwood sourcing
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    Traditional joinery techniques
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    Skills training programs
                  </span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">
                    Fair wage employment
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Irrigation System */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="space-y-2">
                <Badge className="bg-accent/20 text-accent border-accent">
                  Water Conservation
                </Badge>
                <h3 className="text-2xl font-serif font-medium text-primary">
                  Smart Irrigation Systems
                </h3>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Our innovative irrigation system combines solar-powered pumps
                with gravity-fed distribution to efficiently water our 150-acre
                mango orchard. Smart sensors monitor soil moisture levels,
                ensuring optimal water usage while maintaining the health of our
                trees and minimizing waste.
              </p>
              <div className="bg-accent/5 p-4 rounded-lg border border-accent/20">
                <div className="text-sm text-foreground/80">
                  <strong className="text-primary">Water Efficiency:</strong>{" "}
                  Our system uses 40% less water than traditional irrigation
                  methods while maintaining superior crop health and yield.
                </div>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src="/mango-orchard-kenya-landscape.webp"
                  alt="Irrigation system in mango orchard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
