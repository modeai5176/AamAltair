import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sunrise, Wine, Apple } from "lucide-react";

// Icon mapping object
const iconMap = {
  Sunrise,
  Wine,
  Apple,
};

const experiences = [
  {
    iconName: "Sunrise",
    title: "Sunrise Meditation",
    description:
      "Start your day with gentle riverside meditation as the sun rises over the mango orchard.",
    duration: "40 min",
    price: "Included",
    season: "dry season",
  },
  {
    iconName: "Wine",
    title: "Sundowner Picnic",
    description:
      "Watch the sunset with curated snacks and your choice of wine or beer by the river.",
    duration: "1.5 hrs",
    price: "KSh 5,000 pp",
    season: "dry season",
  },
  {
    iconName: "Apple",
    title: "Mango Tasting",
    description:
      "Discover the unique flavors of our heritage mango varieties in a guided tasting.",
    duration: "45 min",
    price: "KSh 3,000 pp",
    season: "seasonal",
  },
];

export function RelatedExperiences() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Enhance Your Stay
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">
              Related Experiences
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {experiences.map((experience) => {
              const IconComponent =
                iconMap[experience.iconName as keyof typeof iconMap];
              return (
                <Card
                  key={experience.title}
                  className="bg-background border-border"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                        <IconComponent className="w-6 h-6 text-accent" />
                      </div>
                      <Badge
                        variant="outline"
                        className="text-xs border-accent/50 text-accent"
                      >
                        {experience.season}
                      </Badge>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-primary">
                        {experience.title}
                      </h3>
                      <p className="text-sm text-foreground/80 text-pretty">
                        {experience.description}
                      </p>
                    </div>

                    <div className="space-y-2 text-xs text-muted-foreground">
                      <div className="flex justify-between">
                        <span>Duration</span>
                        <span>{experience.duration}</span>
                      </div>
                      <div className="flex justify-between font-medium text-accent">
                        <span>Price</span>
                        <span>{experience.price}</span>
                      </div>
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full border-accent/50 text-accent hover:bg-accent/10 rounded-full bg-transparent"
                    >
                      Add to Booking
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
