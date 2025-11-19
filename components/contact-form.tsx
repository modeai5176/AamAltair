"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Send } from "lucide-react";

const calculateNights = (checkIn: string, checkOut: string) => {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(checkIn);
  const end = new Date(checkOut);
  const diff = end.getTime() - start.getTime();
  return diff > 0 ? Math.round(diff / (1000 * 60 * 60 * 24)) : 0;
};

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    checkIn: "",
    checkOut: "",
    guests: "",
    message: "",
    newsletter: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const nights = calculateNights(formData.checkIn, formData.checkOut);
  const isBookingInquiry = formData.inquiryType === "booking";
  const isSundownerComplimentary =
    isBookingInquiry && nights > 0 && nights % 3 === 0;
  const complimentaryAddOns = isSundownerComplimentary ? ["sundowner"] : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          domeName: "General Inquiry",
          checkIn: formData.checkIn,
          checkOut: formData.checkOut,
          guests: formData.guests,
          addOns: complimentaryAddOns,
          preferences: formData.message,
          agreeToRules: true,
        }),
      });

      if (response.ok) {
        // Reset form after successful submission
        setFormData({
          name: "",
          email: "",
          phone: "",
          inquiryType: "",
          checkIn: "",
          checkOut: "",
          guests: "",
          message: "",
          newsletter: false,
        });
        alert(
          "Thank you for your inquiry! We'll get back to you within 24 hours."
        );
      } else {
        alert(
          "There was an error submitting your inquiry. Please try again or contact us directly."
        );
      }
    } catch (error) {
      console.error("Error submitting contact form:", error);
      alert(
        "There was an error submitting your inquiry. Please try again or contact us directly."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-card border-border h-full flex flex-col">
      <CardHeader>
        <CardTitle className="font-serif text-xl text-primary">
          Send us a Message
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 flex flex-col">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 flex-1 flex flex-col"
        >
          {/* Personal Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="name"
                className="text-sm font-medium text-foreground"
              >
                Full Name *
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, name: e.target.value }))
                }
                placeholder="Your full name"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="email"
                className="text-sm font-medium text-foreground"
              >
                Email Address *
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, email: e.target.value }))
                }
                placeholder="your@email.com"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label
                htmlFor="phone"
                className="text-sm font-medium text-foreground"
              >
                Phone Number
              </Label>
              <Input
                id="phone"
                type="tel"
                value={formData.phone}
                onChange={(e) =>
                  setFormData((prev) => ({ ...prev, phone: e.target.value }))
                }
                placeholder="+254 700 000 000"
              />
            </div>
            <div className="space-y-2">
              <Label
                htmlFor="inquiry-type"
                className="text-sm font-medium text-foreground"
              >
                Inquiry Type *
              </Label>
              <Select
                value={formData.inquiryType}
                onValueChange={(value) =>
                  setFormData((prev) => ({ ...prev, inquiryType: value }))
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select inquiry type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="booking">Booking Inquiry</SelectItem>
                  <SelectItem value="general">General Information</SelectItem>
                  <SelectItem value="experiences">
                    Experiences & Activities
                  </SelectItem>
                  <SelectItem value="travel">Travel & Directions</SelectItem>
                  <SelectItem value="special">Special Requests</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Booking Details (conditional) */}
          {isBookingInquiry && (
            <div className="space-y-4 p-4 bg-accent/5 rounded-lg border border-accent/20">
              <h3 className="font-serif text-lg font-semibold text-primary">
                Booking Details
              </h3>
              {isSundownerComplimentary && (
                <p className="text-sm text-accent font-medium">
                  Complimentary sundowner picnic added for your {nights}-night
                  stay.
                </p>
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label
                    htmlFor="checkin"
                    className="text-sm font-medium text-foreground"
                  >
                    Check-in Date
                  </Label>
                  <Input
                    id="checkin"
                    type="date"
                    value={formData.checkIn}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        checkIn: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="checkout"
                    className="text-sm font-medium text-foreground"
                  >
                    Check-out Date
                  </Label>
                  <Input
                    id="checkout"
                    type="date"
                    value={formData.checkOut}
                    onChange={(e) =>
                      setFormData((prev) => ({
                        ...prev,
                        checkOut: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="space-y-2">
                  <Label
                    htmlFor="guests"
                    className="text-sm font-medium text-foreground"
                  >
                    Number of Guests
                  </Label>
                  <Select
                    value={formData.guests}
                    onValueChange={(value) =>
                      setFormData((prev) => ({ ...prev, guests: value }))
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Guests" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">1 Guest</SelectItem>
                      <SelectItem value="2">2 Guests</SelectItem>
                      <SelectItem value="3">3 Guests</SelectItem>
                      <SelectItem value="4">4 Guests</SelectItem>
                      <SelectItem value="5">5 Guests</SelectItem>
                      <SelectItem value="6">6 Guests</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}

          {/* Message */}
          <div className="space-y-2 flex-1">
            <Label
              htmlFor="message"
              className="text-sm font-medium text-foreground"
            >
              Message *
            </Label>
            <Textarea
              id="message"
              required
              value={formData.message}
              onChange={(e) =>
                setFormData((prev) => ({ ...prev, message: e.target.value }))
              }
              placeholder="Tell us about your inquiry, special requests, dietary requirements, or any questions you have..."
              className="min-h-[120px] flex-1"
            />
          </div>

          {/* Newsletter */}
          <div className="flex items-start space-x-3">
            <Checkbox
              id="newsletter"
              checked={formData.newsletter}
              onCheckedChange={(checked) =>
                setFormData((prev) => ({
                  ...prev,
                  newsletter: checked as boolean,
                }))
              }
            />
            <Label
              htmlFor="newsletter"
              className="text-sm text-foreground leading-relaxed cursor-pointer"
            >
              I'd like to receive updates about Aam Altair, including seasonal
              experiences, sustainability initiatives, and special offers.
            </Label>
          </div>

          {/* Submit */}
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-primary text-primary-foreground hover:bg-accent font-semibold py-3 rounded-full text-lg"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            {isSubmitting ? (
              "Sending..."
            ) : (
              <>
                Send Message
                <Send className="ml-2 h-4 w-4" />
              </>
            )}
          </Button>

          <p className="text-xs text-muted-foreground text-center">
            We typically respond within 24 hours. For urgent inquiries, please
            use WhatsApp.
          </p>
        </form>
      </CardContent>
    </Card>
  );
}
