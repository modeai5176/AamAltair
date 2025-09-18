import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { ContactInfo } from "@/components/contact-info"
import { Card, CardContent } from "@/components/ui/card"
import { ProfessionalBookingSystem } from "@/components/professional-booking-system"
import { FAQSection } from "@/components/faq-section"
import { NatureCTA } from "@/components/nature-cta"

export default function ContactPage() {
  return (
    <main className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">
            Contact & Book
          </h1>
          <p className="text-xl text-foreground/80 text-pretty">
            Ready to experience Aam Altair? Get in touch with us to plan your perfect retreat or ask any questions about
            your stay.
          </p>
        </div>
      </section>

      <div className="max-w-6xl mx-auto px-6 pb-20">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <ContactInfo />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
        
        {/* Ready to Book Section - Full Width */}
        <div className="mt-12">
          <div className="max-w-2xl mx-auto">
            <Card className="bg-accent/5 border-accent/20">
              <CardContent className="p-6 text-center space-y-4">
                <h3 className="font-serif text-lg font-semibold text-primary">Ready to Book?</h3>
                <p className="text-sm text-foreground/80">Skip the form and book directly through our booking system</p>
                <ProfessionalBookingSystem />
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <FAQSection />

      <NatureCTA />
      <Footer />
    </main>
  )
}
