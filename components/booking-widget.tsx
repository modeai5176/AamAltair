"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Calendar, Users, MessageCircle, Mail } from "lucide-react"

export function BookingWidget() {
  const [formData, setFormData] = useState({
    checkIn: "",
    checkOut: "",
    adults: 2,
    children: 0,
    addOns: [] as string[],
    preferences: "",
    agreeToRules: false,
  })

  const addOns = [
    { id: "pickup", name: "Pickup from Kibwezi SGR", price: "$20" },
    { id: "chef", name: "Private Chef", price: "Quote" },
    { id: "sundowner", name: "Sundowner Picnic", price: "KSh 5,000 pp" },
    { id: "tasting", name: "Mango Tasting", price: "KSh 3,000 pp" },
  ]

  const handleAddOnChange = (addOnId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      addOns: checked ? [...prev.addOns, addOnId] : prev.addOns.filter((id) => id !== addOnId),
    }))
  }

  return (
    <section className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-6">
        <div className="space-y-8">
          <div className="text-center space-y-2">
            <p className="text-sm font-medium text-accent tracking-wide uppercase">Booking</p>
            <h2 className="text-2xl md:text-3xl font-serif font-medium text-primary">Reserve Your Stay</h2>
          </div>

          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-primary">Book The Domestead</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Date Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="checkin" className="text-sm font-medium text-foreground">
                    Check-in Date
                  </Label>
                  <div className="relative">
                    <Input
                      id="checkin"
                      type="date"
                      value={formData.checkIn}
                      onChange={(e) => setFormData((prev) => ({ ...prev, checkIn: e.target.value }))}
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="checkout" className="text-sm font-medium text-foreground">
                    Check-out Date
                  </Label>
                  <div className="relative">
                    <Input
                      id="checkout"
                      type="date"
                      value={formData.checkOut}
                      onChange={(e) => setFormData((prev) => ({ ...prev, checkOut: e.target.value }))}
                      className="pl-10"
                    />
                    <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Guest Selection */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="adults" className="text-sm font-medium text-foreground">
                    Adults
                  </Label>
                  <div className="relative">
                    <Input
                      id="adults"
                      type="number"
                      min="1"
                      max="6"
                      value={formData.adults}
                      onChange={(e) => setFormData((prev) => ({ ...prev, adults: Number.parseInt(e.target.value) }))}
                      className="pl-10"
                    />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="children" className="text-sm font-medium text-foreground">
                    Children
                  </Label>
                  <div className="relative">
                    <Input
                      id="children"
                      type="number"
                      min="0"
                      max="4"
                      value={formData.children}
                      onChange={(e) => setFormData((prev) => ({ ...prev, children: Number.parseInt(e.target.value) }))}
                      className="pl-10"
                    />
                    <Users className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  </div>
                </div>
              </div>

              {/* Add-ons */}
              <div className="space-y-4">
                <Label className="text-sm font-medium text-foreground">Add-on Experiences</Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {addOns.map((addOn) => (
                    <div key={addOn.id} className="flex items-center space-x-3">
                      <Checkbox
                        id={addOn.id}
                        checked={formData.addOns.includes(addOn.id)}
                        onCheckedChange={(checked) => handleAddOnChange(addOn.id, checked as boolean)}
                      />
                      <Label htmlFor={addOn.id} className="text-sm text-foreground flex-1 cursor-pointer">
                        {addOn.name}
                      </Label>
                      <span className="text-sm text-accent font-medium">{addOn.price}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Preferences */}
              <div className="space-y-2">
                <Label htmlFor="preferences" className="text-sm font-medium text-foreground">
                  Special Requests or Dietary Requirements
                </Label>
                <Textarea
                  id="preferences"
                  placeholder="Let us know about any allergies, celebrations, or special requests..."
                  value={formData.preferences}
                  onChange={(e) => setFormData((prev) => ({ ...prev, preferences: e.target.value }))}
                  className="min-h-[100px]"
                />
              </div>

              {/* Agreement */}
              <div className="flex items-start space-x-3">
                <Checkbox
                  id="agree"
                  checked={formData.agreeToRules}
                  onCheckedChange={(checked) => setFormData((prev) => ({ ...prev, agreeToRules: checked as boolean }))}
                />
                <Label htmlFor="agree" className="text-sm text-foreground leading-relaxed cursor-pointer">
                  I agree to the house rules and cancellation policy. I understand that this is a booking request and
                  final confirmation will be provided via email or WhatsApp.
                </Label>
              </div>

              {/* Booking Actions */}
              <div className="space-y-4 pt-4 border-t border-border">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-accent py-3 rounded-full text-lg"
                  disabled={!formData.agreeToRules}
                  style={{
                    fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    lineHeight: 1.45,
                  }}
                >
                  Continue to Request
                </Button>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 py-3 rounded-full bg-transparent"
                    style={{
                      fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                      lineHeight: 1.45,
                    }}
                  >
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Inquiry
                  </Button>
                  <Button
                    variant="outline"
                    className="border-accent text-accent hover:bg-accent/10 py-3 rounded-full bg-transparent"
                    style={{
                      fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      fontWeight: 400,
                      letterSpacing: "0.01em",
                      lineHeight: 1.45,
                    }}
                  >
                    <Mail className="mr-2 h-4 w-4" />
                    Email Request
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
