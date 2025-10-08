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
    title: "Quiet Hours",
    description: "No loud music after 10 PM • Respect nature's peace",
  },
  {
    iconName: "Waves",
    title: "River Safety",
    description: "No swimming in the river • Enjoy from the deck",
  },
  {
    iconName: "Wifi",
    title: "Connectivity",
    description: "Wi-Fi at main house • Patchy phone reception",
  },
  {
    iconName: "ShoppingCart",
    title: "Supplies",
    description: "Nearest supermarket 40 min (Kibwezi)",
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
                Pets are welcome but must be kept on leash at all times. Please
                note that we have 2 friendly resident dogs on the property. Let
                us know about your pets when booking.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
