import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { ContactForm } from "@/components/contact-form";
import { ContactInfo } from "@/components/contact-info";
import { Card, CardContent } from "@/components/ui/card";
import { ProfessionalBookingSystem } from "@/components/professional-booking-system";
import { LocationMap } from "@/components/location-map";
import { FAQSection } from "@/components/faq-section";
import { NatureCTA } from "@/components/nature-cta";

export default function ContactPage() {
  return (
    <main className="min-h-screen pb-8 lg:pb-0">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-26 pb-14 md:pt-40 md:pb-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-medium text-primary mb-6 text-balance">
            Contact & Book
          </h1>
          <p className="text-xl text-foreground/80 text-pretty">
            Ready to experience Aam Altair? Get in touch with us to plan your
            perfect retreat or ask any questions about your stay.
          </p>
        </div>
      </section>

      {/* Ready to Book Section - mobile spacing fix */}
      <div className="mt-4 mb-8 lg:mt-2 lg:mb-0">
        <div className="max-w-2xl mx-auto px-4">
          <Card className="bg-accent/5 border-accent/20">
            <CardContent className="p-4 lg:p-4 text-center space-y-4">
              <h3 className="font-serif text-lg font-semibold text-primary">
                Ready to Book?
              </h3>
              <p className="text-sm text-foreground/80">
                Skip the form and book directly through our booking system
              </p>
              <ProfessionalBookingSystem />
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Added mt-8 to create a bit of gap between the Ready to Book card and the ContactInfo section */}
      <div className="max-w-6xl mx-auto px-4 pb-20 lg:pb-20 mt-8">
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="flex-1">
            <ContactInfo />
          </div>
          <div className="flex-1">
            <ContactForm />
          </div>
        </div>
      </div>

      {/* Location Map Section */}
      <LocationMap />

      {/* FAQ Section */}
      <FAQSection />

      <Footer />
    </main>
  );
}
