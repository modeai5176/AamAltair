import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
// import SpotlightCard from "@/components/SpotlightCard"; // Temporarily disabled: spotlight effect removed

const amenities = [
  "Spices & seasonings",
  "Premium tea & coffee",
  "Luxury towels & linens",
  "Private riverfront deck",
  "Self-catering kitchen",
  "Optional private chef",
  "Solar & wind power",
  "Organic toiletries",
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
              Farm-to-Table Experience
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="md:col-span-2 space-y-4">
                <p className="text-foreground/80 leading-relaxed">
                  Experience the ultimate farm-to-table lifestyle at The Big
                  Dipper. Our 150-acre mango orchard provides fresh, organic
                  produce that you can literally hand-pick for your meals. Walk
                  through the orchard in the morning, select your ingredients,
                  and prepare them in your fully equipped outdoor kitchen.
                </p>
                <p className="text-foreground/80 leading-relaxed">
                  Whether you choose to cook for yourself or opt for our private
                  chef service, every meal becomes a celebration of the land's
                  abundance and the connection between nature and nourishment.
                </p>
              </div>
              <div className="space-y-3">
                <Badge className="bg-accent/20 text-accent border-accent">
                  Fresh Daily
                </Badge>
                <div className="text-sm text-foreground space-y-1">
                  <div>• Organic mangoes</div>
                  <div>• Seasonal vegetables</div>
                  <div>• Fresh herbs</div>
                  <div>• Local honey</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
