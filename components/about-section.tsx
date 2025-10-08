import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";

export function AboutSection() {
  const amenities = [
    "King-size bed",
    "Riverfront deck",
    "Farm-to-table",
    "Solar & wind energy",
  ];

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Stays Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
            Featured Stays
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover our unique accommodations, each offering a distinct experience in the heart of nature
          </p>
        </div>

        {/* Three-tile strip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <Link
            href="/stays/the-domestead"
            className="group relative overflow-hidden rounded-2xl bg-card h-64 cursor-pointer"
            aria-label="View The Domestead"
          >
            <Image
              src="/luxury-dome-accommodation-riverfront-kenya.jpg"
              alt="The Domestead"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              priority
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-accent/20 text-accent border-accent mb-2">
                Featured
              </Badge>
              <h3 className="text-xl font-serif font-medium text-primary">
                The Domestead
              </h3>
            </div>
          </Link>

          <Link
            href="/stays/hercules"
            className="group relative overflow-hidden rounded-2xl bg-card h-64 cursor-pointer"
            aria-label="View Hercules"
          >
            <Image
              src="/second-luxury-property-kenya-retreat.jpg"
              alt="Hercules"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-accent/20 text-accent border-accent mb-2">
                Featured
              </Badge>
              <h3 className="text-xl font-serif font-medium text-primary">
                Hercules
              </h3>
            </div>
          </Link>

          <Link
            href="/stays/andromeda"
            className="group relative overflow-hidden rounded-2xl bg-card h-64 cursor-pointer"
            aria-label="View Andromeda"
          >
            <Image
              src="/outdoor-kitchen-kenya-retreat.jpg"
              alt="Andromeda"
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              quality={85}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <div className="absolute bottom-6 left-6">
              <Badge className="bg-accent/20 text-accent border-accent mb-2">
                Featured
              </Badge>
              <h3 className="text-xl font-serif font-medium text-primary">
                Andromeda
              </h3>
            </div>
          </Link>
        </div>

        {/* Mobile: Partnership with Nature heading before photo */}
        <div className="lg:hidden mb-8 mt-12">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">
              Partnership with Nature
            </p>
            <h2 className="text-3xl font-serif font-medium text-primary text-balance">
              Aam Altair: The Domestead
            </h2>
          </div>
        </div>

        {/* About Editorial Split */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <Link href="/about" aria-label="Read the full Aam Altair story">
              <div className="aspect-[4/3] relative overflow-hidden rounded-2xl">
                <Image
                  src="/carousel/Dome2.webp"
                  alt="Aam Altair: The Domestead"
                  fill
                  className="object-cover"
                  priority
                  quality={85}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </Link>
          </div>

          {/* Content - Hidden on mobile, shown on desktop */}
          <div className="hidden lg:block space-y-6">
            <div className="space-y-2">
              <p className="text-sm font-medium text-accent tracking-wide uppercase">
                Partnership with Nature
              </p>
              <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary text-balance">
                Aam Altair: The Domestead
              </h2>
            </div>

            <p className="text-lg text-foreground/90 leading-relaxed text-pretty">
              Nestled by Emily den Boesterd deep in the unique islands of
              Chyogoon Valley, Woodland Retreat offers the perfect blend of
              rustic charm and modern comfort. Our mission is to provide a
              peaceful escape where you can truly recharge and reconnect amidst
              the beauty of untouched nature. Enjoy the vibrant city life just
              steps away, while retreating to a space designed for your utmost
              comfort and tranquility.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Direct to About Page*/}
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-accent hover:text-primary hover:bg-accent/10 p-0 h-auto font-medium"
              >
                Read the full story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>

          {/* Mobile: Content below image */}
          <div className="lg:hidden space-y-6 mt-8">
            <p className="text-lg text-foreground/90 leading-relaxed text-pretty">
              Nestled by Emily den Boesterd deep in the unique islands of
              Chyogoon Valley, Woodland Retreat offers the perfect blend of
              rustic charm and modern comfort. Our mission is to provide a
              peaceful escape where you can truly recharge and reconnect amidst
              the beauty of untouched nature. Enjoy the vibrant city life just
              steps away, while retreating to a space designed for your utmost
              comfort and tranquility.
            </p>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-3">
              {amenities.map((amenity) => (
                <div key={amenity} className="flex items-center space-x-2">
                  <div className="w-2 h-2 rounded-full bg-accent" />
                  <span className="text-sm text-foreground">{amenity}</span>
                </div>
              ))}
            </div>

            {/* Direct to About Page*/}
            <Link href="/about">
              <Button
                variant="ghost"
                className="text-accent hover:text-primary hover:bg-accent/10 p-0 h-auto font-medium"
              >
                Read the full story
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
