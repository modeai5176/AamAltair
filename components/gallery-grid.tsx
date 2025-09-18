"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

const galleryImages = [
  {
    src: "/luxury-dome-accommodation-riverfront-kenya.jpg",
    alt: "The Domestead luxury dome accommodation",
    category: "Interiors",
  },
  {
    src: "/dome-accommodation-with-river-view-kenya-luxury-re.jpg",
    alt: "River view from The Domestead",
    category: "River",
  },
  {
    src: "/luxury-dome-interior-kenya-retreat.jpg",
    alt: "Interior design of The Domestead",
    category: "Interiors",
  },
  {
    src: "/riverfront-deck-sunset-kenya.jpg",
    alt: "Sunset from the riverfront deck",
    category: "Day",
  },
  {
    src: "/mango-orchard-kenya-landscape.jpg",
    alt: "Mango orchard landscape",
    category: "Orchard",
  },
  {
    src: "/night-sky-milky-way-kenya.jpg",
    alt: "Milky Way over Aam Altair",
    category: "Night Sky",
  },
  {
    src: "/river-galana-kenya-nature.jpg",
    alt: "River Galana flowing through the property",
    category: "River",
  },
  {
    src: "/outdoor-kitchen-kenya-retreat.jpg",
    alt: "Outdoor kitchen and dining area",
    category: "Interiors",
  },
]

const categories = ["All", "Day", "Night Sky", "River", "Orchard", "Interiors"]

export function GalleryGrid() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [lightboxImage, setLightboxImage] = useState<number | null>(null)

  const filteredImages =
    selectedCategory === "All" ? galleryImages : galleryImages.filter((img) => img.category === selectedCategory)

  const openLightbox = (index: number) => {
    const actualIndex = galleryImages.findIndex((img) => img.src === filteredImages[index].src)
    setLightboxImage(actualIndex)
  }

  const closeLightbox = () => setLightboxImage(null)

  const nextImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage + 1) % galleryImages.length)
    }
  }

  const prevImage = () => {
    if (lightboxImage !== null) {
      setLightboxImage((lightboxImage - 1 + galleryImages.length) % galleryImages.length)
    }
  }

  return (
    <section className="pb-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`rounded-full ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground hover:bg-accent"
                  : "border-accent/50 text-accent hover:bg-accent/10"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Masonry Grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredImages.map((image, index) => (
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
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Badge className="bg-accent/20 text-accent border-accent">{image.category}</Badge>
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
                  />
                </div>

                {/* Image Info */}
                <div className="absolute bottom-4 left-4 right-4 text-center">
                  <div className="bg-background/20 backdrop-blur-sm rounded-lg p-4">
                    <p className="text-primary font-medium">{galleryImages[lightboxImage].alt}</p>
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
  )
}
