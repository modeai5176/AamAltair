import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { MessageCircle, Mail, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <div className="space-y-8 h-full flex flex-col">
      <div className="space-y-4">
        <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">Get in Touch</h2>
        <p className="text-foreground/80 leading-relaxed">
          We're here to help you plan the perfect retreat experience. Whether you have questions about our
          accommodations, need help with travel arrangements, or want to discuss special requests, we're just a message
          away.
        </p>
      </div>

      {/* Contact Methods */}
      <div className="space-y-4">
        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-primary">WhatsApp</h3>
                <p className="text-sm text-foreground/80">Fastest response for booking inquiries</p>
                <p className="text-sm text-accent font-medium">+254 700 000 000</p>
              </div>
              <Button
                className="bg-primary text-primary-foreground hover:bg-accent rounded-full"
                asChild
                style={{
                  fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                <a href="https://wa.me/254700000000" target="_blank" rel="noopener noreferrer">
                  Message
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-primary">Email</h3>
                <p className="text-sm text-foreground/80">Detailed inquiries and booking requests</p>
                <p className="text-sm text-accent font-medium">hello@aamaltair.com</p>
              </div>
              <Button
                variant="outline"
                className="border-accent text-accent hover:bg-accent/10 rounded-full bg-transparent"
                asChild
                style={{
                  fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                <a href="mailto:hello@aamaltair.com">Email</a>
              </Button>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-card border-border">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="font-serif text-lg font-semibold text-primary">Phone</h3>
                <p className="text-sm text-foreground/80">Limited reception - WhatsApp preferred</p>
                <p className="text-sm text-accent font-medium">+254 700 000 000</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>


    </div>
  )
}
