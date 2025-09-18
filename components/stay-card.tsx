"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface StayCardProps {
  title: string
  description: string
  images: string[]
  badges: string[]
  features: string[]
  href: string
  featured?: boolean
  comingSoon?: boolean
}

export function StayCard({
  title,
  description,
  images,
  badges,
  features,
  href,
  featured = false,
  comingSoon = false,
}: StayCardProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <Card className="overflow-hidden bg-card border-border">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
        {/* Image Gallery */}
        <div className="relative">
          <div className="aspect-[4/3] relative overflow-hidden">
            <Image
              src={images[currentImageIndex] || "/placeholder.svg"}
              alt={`${title} - Image ${currentImageIndex + 1}`}
              fill
              className="object-cover transition-transform duration-500 hover:scale-105"
            />

            {/* Image Navigation */}
            {images.length > 1 && (
              <>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute left-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
                  onClick={prevImage}
                >
                  <ChevronLeft className="h-5 w-5" />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute right-4 top-1/2 -translate-y-1/2 bg-background/20 backdrop-blur-sm hover:bg-background/40 text-primary"
                  onClick={nextImage}
                >
                  <ChevronRight className="h-5 w-5" />
                </Button>

                {/* Image Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
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
              </>
            )}

            {/* Featured Badge */}
            {featured && (
              <div className="absolute top-4 left-4">
                <Badge className="bg-accent/20 text-accent border-accent">Featured</Badge>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <CardContent className="p-8 lg:p-12 flex flex-col justify-between">
          <div className="space-y-6">
            {/* Header */}
            <div className="space-y-4">
              <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">{title}</h2>

              {/* Badges */}
              <div className="flex flex-wrap gap-2">
                {badges.map((badge) => (
                  <Badge key={badge} variant="outline" className="border-accent/50 text-accent">
                    {badge}
                  </Badge>
                ))}
              </div>

              <p className="text-foreground/80 leading-relaxed text-pretty">{description}</p>
            </div>

            {/* Features */}
            <div className="space-y-3">
              <h3 className="font-serif text-lg font-semibold text-primary">Features & Amenities</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {features.map((feature) => (
                  <div key={feature} className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                    <span className="text-sm text-foreground/80">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-8">
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent font-semibold px-6 py-3 rounded-full flex-1"
              disabled={comingSoon}
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              <Link href={href}>
                {comingSoon ? "Coming Soon" : "View Details"}
                {!comingSoon && <ArrowRight className="ml-2 h-4 w-4" />}
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10 font-semibold px-6 py-3 rounded-full flex-1 bg-transparent"
              disabled={comingSoon}
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              {comingSoon ? "Notify Me" : `Book ${title}`}
            </Button>
          </div>
        </CardContent>
      </div>
    </Card>
  )
}
