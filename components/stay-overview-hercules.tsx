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
                Named after the legendary hero, Heracles, we curated a truly
                serene environment and the most private outdoor deck to truly
                enjoy the stillness and connect to your inner calm. Hercules is
                perfect for any group of people who want to spend time
                connecting with themselves and with nature
              </p>

              <p className="text-foreground/80 leading-relaxed">
                and still be able to retreat into a haven of comfort and luxury
                at the end of the day. Whether it is to rest after a wonderful
                day spent in Tsavo, or to grill your favourite BBQ out in front
                of the river with your favourite drinks, we have memories
                waiting to be made just for you!
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
                      1 King sized bed
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
                      1 King Sized Bed
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
                      One extra bed on request
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
                    <span>Ensuite bathroom</span>
                  </div>
                  <div className="flex items-start gap-2 justify-start">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0 mt-1" />
                    <span>Riverfront deck</span>
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
