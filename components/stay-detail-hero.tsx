"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface StayDetailHeroProps {
  title: string;
  images: string[];
}

export function StayDetailHero({ title, images }: StayDetailHeroProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section className="relative pt-header">
      {/* Image Slider */}
      <div className="relative h-[70vh] overflow-hidden">
        <Image
          src={images[currentImageIndex] || "/placeholder.svg"}
          alt={`${title} - Image ${currentImageIndex + 1}`}
          fill
          className="object-cover"
          priority
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

        {/* Navigation */}
        {images.length > 1 && (
          <>
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
              onClick={prevImage}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
              onClick={nextImage}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </>
        )}

        {/* Title Overlay */}
        <div className="absolute bottom-8 left-8 right-8">
          <div className="max-w-4xl">
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-4 text-balance">
              {title}
            </h1>
            <p className="text-lg text-foreground/90 max-w-2xl">
              Riverfront luxury dome accommodation in the heart of Tsavo, Kenya
            </p>
          </div>
        </div>

        {/* Image Indicators */}
        <div className="absolute bottom-8 right-8 flex space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index === currentImageIndex ? "bg-primary" : "bg-white/50"
              }`}
              onClick={() => setCurrentImageIndex(index)}
            />
          ))}
        </div>
      </div>

      {/* Sticky CTA */}
      <div className="sticky top-20 z-40 bg-card/90 backdrop-blur-sm border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h2 className="font-serif text-xl font-semibold text-primary">
              {title}
            </h2>
            <p className="text-sm text-muted-foreground">
              Starting from KSh 15,000 per night
            </p>
          </div>
          <Button
            className="bg-primary text-primary-foreground hover:bg-accent px-6 py-2 rounded-full"
            onClick={() => {
              const bookingSection = document.getElementById("booking-widget");
              if (bookingSection) {
                bookingSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            Book {title}
          </Button>
        </div>
      </div>
    </section>
  );
}
