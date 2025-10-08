import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import SpotlightCard from "@/components/SpotlightCard"; // Temporarily disabled: spotlight effect removed

const amenities = [
  "Stargazing deck with reclining loungers",
  "Yoga mats & meditation cushions",
  "Herbal tea & infusion bar",
  "Luxury towels & linens",
  "Hammock net by the river",
  "Outdoor self-catering kitchen",
  "Optional private chef (light, seasonal menus)",
  "Solar & wind power",
  "Eco-friendly organic toiletries",
  "Filtered drinking water",
  "In-room fan & mosquito net",
];

export function StayAmenities() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Amenities
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">
              Everything You Need
            </h2>
          </div>

          {/* Spotlight disabled: reverting to standard cards matching design */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {amenities.map((amenity) => (
              <Card key={amenity} className="bg-neutral-950 border-neutral-800">
                <CardContent className="p-4 text-center">
                  <span className="text-sm text-foreground">{amenity}</span>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Farm-to-Table Section */}
          <div className="mt-12 space-y-6">
            <h3 className="text-xl font-serif font-medium text-primary">
              Farm-to-Table, Wellness-Forward
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Designed for unhurried days and clear nights—start with a slow
                  breakfast, pick herbs and seasonal fruit from the orchard, and
                  prepare simple, nourishing meals in the outdoor kitchen.
                  Evenings are for herbal infusions, starry skies, and stories
                  by the river.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Prefer to be hosted? An optional private chef can prepare
                  lighter, wellness-focused menus—grilled vegetables, fresh
                  salads, chapati, and seasonal fruit—letting you linger longer
                  under the night sky.
                </p>
              </div>
              <div className="space-y-3">
                <Badge className="bg-accent/20 text-accent border-accent">
                  Fresh Daily
                </Badge>
                <div className="text-sm text-foreground space-y-1">
                  <div>• Orchard mangoes (in season)</div>
                  <div>• Seasonal vegetables & herbs</div>
                  <div>• Lemongrass, mint & hibiscus infusions</div>
                  <div>• Local honey & condiments</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
