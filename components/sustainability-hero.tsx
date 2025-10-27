import Image from "next/image";

export function SustainabilityHero() {
  return (
    <section className="relative h-screen flex items-center pt-header">
      <div className="absolute inset-0 z-0">
        <Image
          src="/mango-orchard-kenya-landscape.webp"
          alt="Sustainable mango orchard"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-overlay" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center w-full">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Our Commitment
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary text-balance">
              Partnership with Nature
            </h1>
          </div>

          <p className="text-xl md:text-2xl text-foreground/90 leading-relaxed text-pretty max-w-3xl mx-auto">
            At Aam Altair, sustainability isn't just a practice—it's the
            foundation of everything we do. From renewable energy to local
            craftsmanship, we're committed to creating a positive impact on our
            environment and community.
          </p>
        </div>
      </div>
    </section>
  );
}
