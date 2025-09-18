import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function SustainabilityCTA() {
  return (
    <section className="py-20 md:py-32">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary text-balance">
              Visit & Support Our Mission
            </h2>
            <p className="text-lg text-foreground/80 max-w-2xl mx-auto text-pretty">
              When you stay at Aam Altair, you're not just enjoying a luxury retreat—you're supporting sustainable
              tourism, local communities, and environmental conservation. Your visit makes a direct positive impact.
            </p>
          </div>

          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              Book Your Sustainable Stay
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>

            <p className="text-sm text-muted-foreground">
              Every booking contributes to our sustainability initiatives and community programs
            </p>
          </div>

          {/* Certifications */}
          <div className="pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">Committed to:</p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-accent">
              <span>• UN Sustainable Development Goals</span>
              <span>• Organic Farming Certification</span>
              <span>• Fair Trade Practices</span>
              <span>• Carbon Neutral Operations</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
