import { Card, CardContent } from "@/components/ui/card"

const impactStats = [
  {
    number: "0",
    unit: "tons CO₂",
    description: "Carbon emissions from energy use",
    period: "annually",
  },
  {
    number: "25+",
    unit: "families",
    description: "Supported through direct employment",
    period: "ongoing",
  },
  {
    number: "40%",
    unit: "less water",
    description: "Used compared to traditional irrigation",
    period: "per season",
  },
  {
    number: "150",
    unit: "acres",
    description: "Maintained as organic farmland",
    period: "certified",
  },
]

export function SustainabilityImpact() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-6">Measuring Our Impact</h2>
          <p className="text-lg text-foreground/80 max-w-3xl mx-auto text-pretty">
            Transparency is key to accountability. Here's how our sustainability initiatives translate into measurable
            positive impact on our environment and community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactStats.map((stat) => (
            <Card key={stat.description} className="bg-background border-border text-center">
              <CardContent className="p-8 space-y-4">
                <div className="space-y-1">
                  <div className="text-4xl md:text-5xl font-serif font-medium text-primary">{stat.number}</div>
                  <div className="text-lg font-medium text-accent">{stat.unit}</div>
                </div>
                <div className="space-y-1">
                  <p className="text-sm text-foreground/80 leading-relaxed">{stat.description}</p>
                  <p className="text-xs text-muted-foreground">{stat.period}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Future Goals */}
        <div className="mt-16 p-8 bg-accent/5 rounded-2xl border border-accent/20">
          <div className="text-center space-y-6">
            <h3 className="text-2xl font-serif font-medium text-primary">Our 2025 Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm">
              <div className="space-y-2">
                <div className="font-semibold text-primary">Carbon Negative</div>
                <p className="text-foreground/80">
                  Achieve carbon negative status through expanded tree planting and soil carbon sequestration
                </p>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-primary">Zero Waste</div>
                <p className="text-foreground/80">
                  Implement comprehensive composting and recycling to achieve zero waste to landfill
                </p>
              </div>
              <div className="space-y-2">
                <div className="font-semibold text-primary">Community Growth</div>
                <p className="text-foreground/80">Expand our skills training programs to support 50+ local families</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
