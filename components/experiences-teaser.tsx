import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sunrise, TreePine, Wine, Apple } from "lucide-react"

// Icon mapping object
const iconMap = {
  Sunrise,
  TreePine,
  Wine,
  Apple,
}

const experiences = [
  {
    iconName: "Sunrise",
    title: "Sunrise Meditation",
    description: "Gentle riverside practice to begin the day.",
    duration: "40 min",
    season: "dry season",
    time: "6:00 AM",
    price: "Included",
  },
  {
    iconName: "TreePine",
    title: "Guided Mango & Orchard Tour",
    description: "Explore 150 acres and rare varietals.",
    duration: "1.5 hrs",
    season: "year-round",
    time: "7:30–9:00 AM",
    price: "Included",
  },
  {
    iconName: "Wine",
    title: "Sundowner Picnic",
    description: "River light, curated snacks, and a bottle of your choice.",
    duration: "1.5 hrs",
    season: "dry season",
    time: "5:30–7:00 PM",
    price: "KSh 5,000 pp",
  },
  {
    iconName: "Apple",
    title: "Mango Tasting",
    description: "Seasonal flight of cultivars from the farm.",
    duration: "45 min",
    season: "seasonal",
    time: "flexible",
    price: "KSh 3,000 pp",
  },
]

export function ExperiencesTeaser() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4 text-balance">
            Slow Mornings. Golden Evenings.
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty">
            Immerse yourself in the rhythm of nature with carefully curated experiences that celebrate the beauty of our
            mango orchard and riverside setting.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {experiences.map((experience) => {
            const IconComponent = iconMap[experience.iconName as keyof typeof iconMap]
            return (
              <Card
                key={experience.title}
                className="bg-background border-border hover:border-accent/50 transition-colors duration-300"
              >
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <Badge variant="outline" className="text-xs border-accent/50 text-accent">
                      {experience.season}
                    </Badge>
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-semibold text-primary">{experience.title}</h3>
                    <p className="text-sm text-foreground/80 text-pretty">{experience.description}</p>
                  </div>

                  <div className="space-y-1 text-xs text-muted-foreground">
                    <div className="flex justify-between">
                      <span>Duration</span>
                      <span>{experience.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Time</span>
                      <span>{experience.time}</span>
                    </div>
                    <div className="flex justify-between font-medium text-accent">
                      <span>Price</span>
                      <span>{experience.price}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent/10 font-semibold px-8 py-3 rounded-full bg-transparent"
            style={{
              fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            See all Experiences
          </Button>
        </div>
      </div>
    </section>
  )
}
