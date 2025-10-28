"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const galleryImages = [
  {
    src: "/carousel/Dome2.webp",
    alt: "Luxury dome accommodation with river view",
  },
  {
    src: "/carousel/Indoor.webp",
    alt: "Interior of luxury dome retreat",
  },
  {
    src: "/carousel/Interior4.webp",
    alt: "Elegant interior design of the dome",
  },
  {
    src: "/carousel/side.webp",
    alt: "River Side View",
  },
  {
    src: "/carousel/pan.webp",
    alt: "Panorama View",
  },
  {
    src: "/carousel/top.webp",
    alt: "Top View of the Dome",
  },
  {
    src: "/carousel/InteriorBest.webp",
    alt: "Premium interior view of the accommodation",
  },
  {
    src: "/carousel/OutdoorChillingArea2.webp",
    alt: "Outdoor relaxation area with stunning views",
  },
  {
    src: "/carousel/OutdoorChillingArea3.webp",
    alt: "Peaceful outdoor chilling area",
  },
  {
    src: "/carousel/OutdoorDay2.webp",
    alt: "Beautiful outdoor day view of the retreat",
  },
];

export function GalleryStrip() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [loadedImages, setLoadedImages] = useState<Set<number>>(new Set());

  useEffect(() => {
    // Preload first 3 images
    const preloadImages = galleryImages.slice(0, 3);
    preloadImages.forEach((image, index) => {
      const img = new window.Image();
      img.onload = () => {
        setLoadedImages((prev) => new Set([...prev, index]));
      };
      img.src = image.src;
    });
  }, []);

  useEffect(() => {
    if (loadedImages.size >= 3) {
      setImagesLoaded(true);
    }
  }, [loadedImages]);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + galleryImages.length) % galleryImages.length
    );
  };

  return (
    <section className="py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary mb-4">
            A Visual Journey
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Discover the beauty that awaits you at Aam Altair through our
            gallery of moments.
          </p>
        </div>

        <div className="relative">
          {/* Loading Skeleton */}
          {!imagesLoaded && (
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[16/9] bg-gradient-to-r from-muted via-muted/50 to-muted animate-pulse">
                <div className="flex items-center justify-center h-full">
                  <div className="text-center">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
                    <p className="text-foreground/60 text-sm">
                      Loading gallery...
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Main Gallery */}
          <div
            className={`relative overflow-hidden rounded-2xl transition-opacity duration-500 ${
              imagesLoaded ? "opacity-100" : "opacity-0 absolute inset-0"
            }`}
          >
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0">
                  <div className="aspect-[16/9] relative bg-muted">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      className="object-cover"
                      priority={index <= 2}
                      quality={85}
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                      placeholder="blur"
                      blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWGRkqGx0f/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=="
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Arrows */}
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
              onClick={prevSlide}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
              onClick={nextSlide}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  index === currentIndex
                    ? "bg-accent"
                    : "bg-muted-foreground/30"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
