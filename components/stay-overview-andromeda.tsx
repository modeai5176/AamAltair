import { Badge } from "@/components/ui/badge";
// Hercules Page StayOverview
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
                Andromeda domestead, named after the nearest neighbouring galaxy
                to our Milky Way, is our most compact unit available. Designed
                for a small group, we want you to experience all the coziness
                our domes offer but without sacrificing that authentic luxury
                feel.
              </p>

              <p className="text-foreground/80 leading-relaxed">
                Boasting its own outdoor riverfront deck and an indoor mezzanine
                deck for your stargazing pleasure, Andromeda really delivers on
                the full Aam Altair experience. Nothing beats the river flowing
                right underneath your private deck, yet allowing you to
                experience your ultimate rejuvenation and tranquility within.
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
                    <span className="text-sm text-foreground">
                      2 King sized beds
                    </span>
                  </div>
                  <div className="flex items-center space-x-3 justify-start">
                    <Badge
                      variant="outline"
                      className="border-accent/50 text-accent"
                    >
                      Upstairs
                    </Badge>
                    <span className="text-sm text-foreground">
                      4 pax (extra bed on request)
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
                      1 shared bathroom
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
                    <span>Riverfront deck</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Private outdoor area</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Kitchenette + coffee bar</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Farm to table meals</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Powered by all-clean energy</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Mezzanine floor</span>
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
