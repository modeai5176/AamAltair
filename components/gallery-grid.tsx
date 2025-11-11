"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const galleryImages = [
  // Carousel Images
  {
    src: "/carousel/Dome2.avif",
    alt: "Beautiful dome accommodation at Aam Altair",
    category: "Interiors",
  },
  {
    src: "/carousel/Indoor.avif",
    alt: "Cozy indoor living space",
    category: "Interiors",
  },
  {
    src: "/carousel/InteriorBest.avif",
    alt: "Luxurious interior details",
    category: "Interiors",
  },
  {
    src: "/carousel/OutdoorDay2.avif",
    alt: "Sunny outdoor living area",
    category: "Day",
  },
  {
    src: "/carousel/OutdoorChillingArea2.avif",
    alt: "Relaxing outdoor chilling area",
    category: "Day",
  },
  {
    src: "/carousel/OutdoorChillingArea3.avif",
    alt: "Peaceful outdoor space for relaxation",
    category: "Day",
  },
  {
    src: "/carousel/pan.avif",
    alt: "Panoramic view of the property",
    category: "River",
  },
  {
    src: "/carousel/side.avif",
    alt: "Side view of the accommodation",
    category: "Interiors",
  },
  {
    src: "/carousel/top.avif",
    alt: "Aerial top view of the property",
    category: "River",
  },
  // Other existing images
  {
    src: "/luxury-dome-accommodation-riverfront-kenya.avif",
    alt: "The Domestead luxury dome accommodation",
    category: "Interiors",
  },
  {
    src: "/dome-accommodation-with-river-view-kenya-luxury-re.avif",
    alt: "River view from The Domestead",
    category: "River",
  },
  {
    src: "/luxury-dome-interior-kenya-retreat.avif",
    alt: "Interior design of The Domestead",
    category: "Interiors",
  },
  {
    src: "/riverfront-deck-sunset-kenya.avif",
    alt: "Sunset from the riverfront deck",
    category: "Day",
  },
  {
    src: "/mango-orchard-kenya-landscape.avif",
    alt: "Mango orchard landscape",
    category: "Orchard",
  },
  {
    src: "/night-sky-milky-way-kenya.avif",
    alt: "Milky Way over Aam Altair",
    category: "Night Sky",
  },
  {
    src: "/river-galana-kenya-nature.avif",
    alt: "River Galana flowing through the property",
    category: "River",
  },
  {
    src: "/outdoor-kitchen-kenya-retreat.avif",
    alt: "Outdoor kitchen and dining area",
    category: "Interiors",
  },
];

export function GalleryGrid() {
  const [lightboxImage, setLightboxImage] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxImage(index);
  };

  const closeLightbox = () => setLightboxImage(null);

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % galleryImages.length);
    }
  };

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage(
        (lightboxImage - 1 + galleryImages.length) % galleryImages.length
      );
    }
  };

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {galleryImages.map((image, index) => (
            <div
              key={image.src}
              className="break-inside-avoid cursor-pointer group"
              onClick={() => openLightbox(index)}
            >
              <div className="relative overflow-hidden rounded-2xl">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={600}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                  quality={85}
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-accent/20 text-accent border-accent">
                    {image.category}
                  </Badge>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        <Dialog open={lightboxImage !== null} onOpenChange={closeLightbox}>
          <DialogContent className="max-w-7xl w-full h-full max-h-screen p-0 bg-background/95 backdrop-blur-sm">
            {lightboxImage !== null && (
              <div className="relative w-full h-full flex items-center justify-center">
                {/* Close Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 z-50 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
                  onClick={closeLightbox}
                >
                  <X className="h-6 w-6" />
                </Button>

                {/* Navigation */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 z-50 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-8 w-8" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 z-50 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-8 w-8" />
                </Button>

                {/* Image */}
                <div className="relative max-w-full max-h-full p-8">
                  <Image
                    src={galleryImages[lightboxImage].src || "/placeholder.svg"}
                    alt={galleryImages[lightboxImage].alt}
                    width={1200}
                    height={800}
                    className="max-w-full max-h-full object-contain"
                    quality={90}
                    priority={false}
                    loading="eager"
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-primary font-medium">
                      {galleryImages[lightboxImage].alt}
                    </p>
                    <Badge className="bg-accent/20 text-accent border-accent mt-2">
                      {galleryImages[lightboxImage].category}
                    </Badge>
                  </div>
                </div>

                {/* Image Counter */}
                <div className="absolute top-4 left-4 bg-background/20 backdrop-blur-sm rounded-lg px-3 py-1">
                  <span className="text-sm text-primary">
                    {lightboxImage + 1} / {galleryImages.length}
                  </span>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
