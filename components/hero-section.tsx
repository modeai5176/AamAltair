"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pt-header pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-background">
        <video
          autoPlay
          loop
          playsInline
          muted
          preload="auto"
          className="w-full h-full object-cover"
          webkit-playsinline="true"
          x5-playsinline="true"
          controls={false}
          disablePictureInPicture
        >
          <source src="/hero.mp4" type="video/mp4" />
          <source src="/hero.webm" type="video/webm" />
        </video>

        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Chip */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent/60 bg-transparent">
              <span
                className="text-accent font-medium text-sm leading-5"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Tsavo, Kenya • Riverfront Domes
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p
            className="text-foreground/90 text-lg leading-7 mb-8"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontSize: "17px",
              lineHeight: "28px",
            }}
          >
            Wake to mango orchards, starlit skies, and the Galana at your deck.
          </p>

          {/* Main Headline */}
          <h1
            className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight mb-6"
            style={{
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontWeight: 500,
              letterSpacing: "-0.01em",
              lineHeight: "1.12",
              color: "#E8DAB8",
              textShadow: "0 1px 24px rgba(0,0,0,0.35)",
            }}
          >
            Riverfront Domes. Pure Stillness.
          </h1>

          {/* Micro-line */}
          <p
            className="text-accent/80 text-sm mb-10"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontSize: "13px",
              lineHeight: "20px",
            }}
          >
            Solar-powered • Farm-to-table • Private decks
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            {/* Make this CTA navigate to /contact when clicked */}
            <Link href="/contact">
              <Button
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            {/* Make this CTA navigate to /stays when clicked */}
            <Link href="/stays">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-full"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                Explore Stays
              </Button>
            </Link>
          </div>
          {/* Removed extra closing div to fix JSX mismatch */}
        </div>
      </div>
    </section>
  );
}
