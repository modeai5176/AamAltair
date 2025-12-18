"use client";

import Image from "next/image";
import { Leaf, Sprout } from "lucide-react";

export function FarmHero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden pt-header">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/Gallery/tree_view.avif"
          alt="Aam Altair Farm - Tree View"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
        <div className="max-w-4xl mx-auto text-center space-y-4 sm:space-y-6">
          {/* Icon */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="w-12 h-12 sm:w-16 sm:h-16 bg-accent/20 rounded-full flex items-center justify-center">
              <Leaf className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
            </div>
          </div>

          {/* Eyebrow */}
          <div className="flex justify-center mb-3 sm:mb-4">
            <div className="inline-flex items-center px-3 py-1.5 sm:px-4 sm:py-2 rounded-full border border-accent/60 bg-transparent">
              <span
                className="text-accent font-medium text-xs sm:text-sm leading-5"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Farm Fresh • Direct from Source
              </span>
            </div>
          </div>

          {/* Main Heading */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-medium text-primary leading-tight mb-4 sm:mb-6 px-4 sm:px-0"
            style={{
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: "1.12",
              textShadow: "0 1px 24px rgba(0,0,0,0.35)",
            }}
          >
            Farm Fresh Produce
          </h1>

          {/* Subheading */}
          <p
            className="text-base sm:text-lg md:text-xl text-foreground/90 mb-6 sm:mb-8 max-w-2xl mx-auto px-4 sm:px-0"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              lineHeight: "1.5",
            }}
          >
            Grown with care in our 150-acre orchard. Fresh, organic vegetables
            and fruits delivered directly from our farm to your table.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4 text-xs sm:text-sm text-accent/80 px-4 sm:px-0">
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sprout className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Organic & Sustainable</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sprout className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Farm to Table</span>
            </div>
            <div className="flex items-center gap-1.5 sm:gap-2">
              <Sprout className="w-3 h-3 sm:w-4 sm:h-4" />
              <span>Seasonal Availability</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

