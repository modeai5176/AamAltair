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
                The Domestead offers an unparalleled retreat experience where
                luxury meets nature. Nestled along the banks of the River
                Galana, this unique dome accommodation provides a perfect
                sanctuary for those seeking to disconnect from the modern world
                and reconnect with the natural rhythms of life.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Wake up to the gentle sounds of flowing water and the sight of
                our 150-acre mango orchard stretching to the horizon. The
                Domestead combines modern comfort with sustainable living,
                powered entirely by solar and wind energy while maintaining the
                highest standards of luxury and comfort.
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
                      +2 guests on request
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
