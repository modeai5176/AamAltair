import { Check, Plus } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const included = [
  "Luxury accommodation",
  "Daily breakfast",
  "Guided Orchard Walk",
  "Wi-Fi at main house",
  "Solar power",
  "Organic toiletries",
  "Parking",
];

const addOns = [
  { name: "Private Chef", price: "Quote on request" },
  { name: "Bush Breakfasts", price: "KSh 2,500 pp" },
  { name: "Celebration Packages", price: "Quote on request" },
  { name: "Pickup from SGR", price: "KES 4,000 / trip (2–4 pax)" },
  { name: "Sundowner Picnic", price: "KSh 3,500 pp" },
  { name: "Mango Tasting", price: "KSh 3,000 pp" },
];

export function StayInclusions() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* What's Included */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Included
              </p>
              <h2 className="text-2xl font-serif font-medium text-primary">
                What's Included
              </h2>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {included.map((item) => (
                    <div key={item} className="flex items-center space-x-3">
                      <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent" />
                      </div>
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Add-Ons */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Optional
              </p>
              <h2 className="text-2xl font-serif font-medium text-primary">
                Add-On Experiences
              </h2>
            </div>

            <Card className="bg-card border-border">
              <CardContent className="p-6">
                <div className="space-y-4">
                  {addOns.map((addon) => (
                    <div
                      key={addon.name}
                      className="flex items-center justify-between"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                          <Plus className="w-3 h-3 text-accent" />
                        </div>
                        <span className="text-foreground">{addon.name}</span>
                      </div>
                      <span className="text-sm text-accent font-medium text-right mr-2 sm:text-right sm:mr-0">
                        {addon.price}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
