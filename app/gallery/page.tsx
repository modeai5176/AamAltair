import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { GalleryGrid } from "@/components/gallery-grid"
import { NatureCTA } from "@/components/nature-cta"

export default function GalleryPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">Gallery</h1>
          <p className="text-xl text-foreground/80 text-pretty">
            Discover the beauty of Aam Altair through our collection of moments captured in the heart of Tsavo, Kenya.
          </p>
        </div>
      </section>

      <GalleryGrid />
      <NatureCTA />
      <Footer />
    </main>
  )
}
