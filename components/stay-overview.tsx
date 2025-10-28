import { Badge } from "@/components/ui/badge";

export function StayOverview() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          {/* Overview */}
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Overview
              </p>
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">
                A Sanctuary by the River
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-foreground/80 leading-relaxed">
                Named after the ladle-like element of Ursa Major, Big Dipper
                offers the perfect blend of comfort, space and luxury. Sleeping
                up to 5 pax, so whether it is a romantic getaway or a family
                vacation, Big Dipper will provide the peaceful escape you
                desire. We designed this space with you in mind, where you can
                truly recharge and reconnect amidst the beauty of untouched
                nature, while retreating to a space for your utmost comfort and
                tranquility.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Wake up to the gentle sounds of flowing water and the sight of
                our 150-acre mango orchard stretching to the horizon. The Big
                Dipper combines modern comfort with sustainable living, powered
                entirely by solar and wind energy while maintaining the highest
                standards of luxury and comfort.
              </p>
            </div>
          </div>

          {/* Sleeps & Spaces */}
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium text-primary text-center md:text-left">
              Sleeps & Spaces
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-center md:text-left">
                  Sleeping Arrangements
                </h4>
                <div className="space-y-2 text-center md:text-left w-fit mx-auto md:w-auto md:mx-0">
                  <div className="flex items-center space-x-3 justify-start">
                    <Badge
                      variant="outline"
                      className="border-accent/50 text-accent"
                    >
                      Downstairs
                    </Badge>
                    <span className="text-sm text-foreground">1 King bed</span>
                  </div>
                  <div className="flex items-center space-x-3 justify-start">
                    <Badge
                      variant="outline"
                      className="border-accent/50 text-accent"
                    >
                      Upstairs
                    </Badge>
                    <span className="text-sm text-foreground">
                      1 Japanese King
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 justify-start">
                    <Badge
                      variant="outline"
                      className="border-accent/50 text-accent"
                    >
                      Optional
                    </Badge>
                    <span className="text-sm text-foreground">
                      +1 guests on request
                    </span>
                  </div>
                </div>
              </div>

              <div className="space-y-4">
                <h4 className="font-semibold text-primary text-center md:text-left">
                  Living Spaces
                </h4>
                <div className="space-y-2 text-sm text-foreground text-center md:text-left w-fit mx-auto md:w-auto md:mx-0">
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Ensuite bathrooms</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Living area</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Kitchenette</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Outdoor kitchen & deck</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
