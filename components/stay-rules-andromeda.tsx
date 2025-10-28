import { Card, CardContent } from "@/components/ui/card";
import {
  Clock,
  Calendar,
  Volume2,
  Waves,
  Wifi,
  ShoppingCart,
} from "lucide-react";

// Icon mapping object
const iconMap = {
  Clock,
  Calendar,
  Volume2,
  Waves,
  Wifi,
  ShoppingCart,
};

const rules = [
  {
    iconName: "Clock",
    title: "Check-in/out",
    description: "Check-in 2 PM • Check-out 11 AM",
  },
  {
    iconName: "Calendar",
    title: "Cancellation",
    description: "Free cancellation up to 7 days before arrival",
  },
  {
    iconName: "Volume2",
    title: "Dark-sky & quiet hours",
    description: "After 9 PM keep lights dim & noise low for stargazing",
  },
  {
    iconName: "Waves",
    title: "River safety",
    description:
      "No swimming • Children supervised at all times • Slippery when wet",
  },
  {
    iconName: "Wifi",
    title: "Connectivity",
    description: "Wi‑Fi at main house • Mobile reception varies by network",
  },
  {
    iconName: "ShoppingCart",
    title: "Supplies",
    description: "Nearest town Kibwezi (~40 min) • Stock up en route",
  },
];

export function StayRules() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Important Info
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">
              House Rules & Notes
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {rules.map((rule) => {
              const IconComponent =
                iconMap[rule.iconName as keyof typeof iconMap];
              return (
                <Card key={rule.title} className="bg-background border-border">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                      <IconComponent className="w-6 h-6 text-accent" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-serif text-lg font-semibold text-primary">
                        {rule.title}
                      </h3>
                      <p className="text-sm text-foreground/80 leading-relaxed">
                        {rule.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>

          <div className="mt-8 p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-primary">
                Pet Policy
              </h3>
              <p className="text-sm text-foreground/80">
                We allow pets on the property however any animals will remain
                the responsibility of the guests at all times.
              </p>
            </div>
          </div>

          <div className="mt-4 p-6 bg-accent/5 rounded-2xl border border-accent/20">
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-primary">
                Sustainability
              </h3>
              <p className="text-sm text-foreground/80">
                We operate on solar & wind power—help us conserve energy and
                water. Kindly separate recyclables in the bins provided and
                avoid single-use plastics when possible.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
