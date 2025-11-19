"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TimelineImageProps {
  images: string[];
  alt: string;
  year: string;
}

export function TimelineImage({ images, alt, year }: TimelineImageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-advance slideshow for multiple images
  useEffect(() => {
    if (images.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  // Single image - no slideshow needed
  if (images.length === 1) {
    return (
      <div className="aspect-[16/9] relative rounded-[12px] overflow-hidden shadow-lg w-full">
        <Image
          src={images[0]}
          alt={alt}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority={false}
          loading="lazy"
          quality={85}
        />
      </div>
    );
  }

  // Multiple images - show slideshow
  return (
    <div className="aspect-[16/9] relative rounded-[12px] overflow-hidden shadow-lg group w-full">
      <div
        className="flex h-full w-full transition-transform duration-500 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {images.map((image, index) => (
          <div
            key={`${image}-${index}`}
            className="relative h-full w-full flex-shrink-0"
          >
            <Image
              src={image}
              alt={`${alt} - Image ${index + 1}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 66vw"
              priority={false}
              loading={index === 0 ? "eager" : "lazy"}
              quality={85}
            />
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <div className="absolute inset-0 flex items-center justify-between px-2 opacity-30 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-300">
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur-sm"
          onClick={goToPrevious}
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
        <Button
          variant="ghost"
          size="icon"
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background/90 backdrop-blur-sm"
          onClick={goToNext}
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Indicator Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 rounded-full transition-all duration-300 ${
              index === currentIndex
                ? "w-8 bg-accent"
                : "w-2 bg-background/60 hover:bg-background/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Image Counter */}
      <div className="absolute top-4 right-4 bg-background/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}
