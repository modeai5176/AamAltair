import { ProfessionalBookingSystem } from "@/components/professional-booking-system"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail } from "lucide-react"

export function BookingCTA() {
  return (
    <section className="py-20 md:py-32 bg-card">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary text-balance">
              Ready to Reconnect with Nature?
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty">
              Book your stay at Aam Altair and experience the perfect blend of luxury and nature in the heart of Tsavo,
              Kenya.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <ProfessionalBookingSystem />

            <div className="flex gap-3">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 font-semibold px-6 py-4 rounded-full bg-transparent"
                style={{
                  fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                WhatsApp
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent hover:bg-accent/10 font-semibold px-6 py-4 rounded-full bg-transparent"
                style={{
                  fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                <Mail className="mr-2 h-5 w-5" />
                Email
              </Button>
            </div>
          </div>

          <p className="text-sm text-muted-foreground">
            Free cancellation up to 7 days • Secure booking • Local support
          </p>
        </div>
      </div>
    </section>
  )
}
