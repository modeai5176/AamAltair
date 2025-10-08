"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Smartphone } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
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

const addOns = [
  {
    id: "pickup",
    name: "Station Pickup Service",
    price: 20,
    description: "From Kibwezi or Makindu SGR",
  },
  {
    id: "meals",
    name: "All Meals Package",
    price: 45,
    description: "Breakfast, lunch & dinner daily",
  },
  {
    id: "safari",
    name: "Tsavo Safari Experience",
    price: 120,
    description: "Full day guided safari",
  },
  {
    id: "cultural",
    name: "Cultural Village Visit",
    price: 35,
    description: "Meet local artisans & craftspeople",
  },
];

export function ProfessionalBookingSystem() {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    property: "",
    checkIn: "",
    checkOut: "",
    guests: 2,
    addOns: [] as string[],
    contactMethod: "",
    board: "" as "bb" | "hb" | "",
    additionalAdult: { bb: false, hb: false },
    personalInfo: {
      name: "",
      email: "",
      phone: "",
      country: "",
      specialRequests: "",
    },
  });

  const PRICES = {
    domestead: { bb: 13000, hb: 18000 },
    andromeda: { bb: 10000, hb: 16000 },
    hercules: { bb: 13000, hb: 18000 },
    additional: { bb: 2500, hb: 5000 },
  } as const;

  const calculateTotal = () => {
    const propertyKey = (bookingData.property || "") as keyof typeof PRICES;
    const boardKey = (bookingData.board || "bb") as "bb" | "hb";
    const basePerNight =
      propertyKey &&
      PRICES[propertyKey as "domestead" | "andromeda" | "hercules"]
        ? PRICES[propertyKey as "domestead" | "andromeda" | "hercules"][
            boardKey
          ]
        : 0;
    const nights =
      bookingData.checkIn && bookingData.checkOut
        ? Math.ceil(
            (new Date(bookingData.checkOut).getTime() -
              new Date(bookingData.checkIn).getTime()) /
              (1000 * 60 * 60 * 24)
          )
        : 1;
    const additionalAdults = Math.max(0, (bookingData.guests || 0) - 2);
    const additionalPerNight =
      additionalAdults *
      ((bookingData.additionalAdult?.bb ? PRICES.additional.bb : 0) +
        (bookingData.additionalAdult?.hb ? PRICES.additional.hb : 0));
    const addOnTotal = bookingData.addOns.reduce((total, addOnId) => {
      const addOn = addOns.find((a) => a.id === addOnId);
      return total + (addOn ? addOn.price : 0);
    }, 0);
    return basePerNight * nights + additionalPerNight * nights + addOnTotal;
  };

  const handleAddOnToggle = (addOnId: string) => {
    setBookingData((prev) => ({
      ...prev,
      addOns: prev.addOns.includes(addOnId)
        ? prev.addOns.filter((id) => id !== addOnId)
        : [...prev.addOns, addOnId],
    }));
  };

  const getPropertyLabel = (code: string) => {
    if (code === "domestead") return "The Domestead";
    if (code === "hercules") return "Hercules";
    if (code === "andromeda") return "Andromeda";
    return code || "Unknown";
  };

  const handleSubmit = () => {
    const total = calculateTotal();
    const message = `Booking Request for Aam Altair:
    
Property: ${getPropertyLabel(bookingData.property)}
Check-in: ${bookingData.checkIn}
Check-out: ${bookingData.checkOut}
Guests: ${bookingData.guests}
Board: ${bookingData.board === "hb" ? "Half Board" : "Bed & Breakfast"}
Add-ons: ${
      bookingData.addOns
        .map((id) => addOns.find((a) => a.id === id)?.name)
        .join(", ") || "None"
    }
Total: KSh ${total}

Contact Information:
Name: ${bookingData.personalInfo.name}
Email: ${bookingData.personalInfo.email}
Phone: ${bookingData.personalInfo.phone}
Country: ${bookingData.personalInfo.country}

Special Requests: ${bookingData.personalInfo.specialRequests || "None"}`;

    if (bookingData.contactMethod === "whatsapp") {
      window.open(
        `https://wa.me/254700000000?text=${encodeURIComponent(message)}`,
        "_blank"
      );
    } else if (bookingData.contactMethod === "email") {
      window.open(
        `mailto:bookings@aamaltair.com?subject=Booking Request&body=${encodeURIComponent(
          message
        )}`,
        "_blank"
      );
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          size="lg"
          className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
          style={{
            fontFamily:
              'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            fontWeight: 400,
            letterSpacing: "0.01em",
            lineHeight: 1.45,
          }}
        >
          Book Your Stay
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-serif">
            Book Your Stay at Aam Altair
          </DialogTitle>
        </DialogHeader>

        {step === 1 && (
          <div className="space-y-10 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
              {/* Property Selection */}
              <Card
                className={`cursor-pointer transition-all rounded-lg ${
                  bookingData.property === "domestead"
                    ? "ring-2 ring-primary border-primary"
                    : "border-border"
                }`}
                onClick={() =>
                  setBookingData((prev) => ({ ...prev, property: "domestead" }))
                }
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-xl font-bold text-primary">
                        The Domestead
                      </h3>
                      <Badge className="bg-accent/20 text-accent border-accent text-xs px-2 py-1">
                        Popular
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Luxury dome with river views
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      KSh 180
                      <span className="text-sm font-normal text-muted-foreground">
                        /night
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Hercules */}
              <Card
                className={`cursor-pointer transition-all rounded-lg ${
                  bookingData.property === "hercules"
                    ? "ring-2 ring-primary border-primary"
                    : "border-border"
                }`}
                onClick={() =>
                  setBookingData((prev) => ({ ...prev, property: "hercules" }))
                }
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl font-bold text-primary">
                      Hercules
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Intimate dome by the water
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      KSh 150
                      <span className="text-sm font-normal text-muted-foreground">
                        /night
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Andromeda */}
              <Card
                className={`cursor-pointer transition-all rounded-lg ${
                  bookingData.property === "andromeda"
                    ? "ring-2 ring-primary border-primary"
                    : "border-border"
                }`}
                onClick={() =>
                  setBookingData((prev) => ({ ...prev, property: "andromeda" }))
                }
              >
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <h3 className="font-serif text-xl font-bold text-primary">
                      Andromeda
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      Intimate dome by the water
                    </p>
                    <div className="text-2xl font-bold text-primary">
                      KSh 170
                      <span className="text-sm font-normal text-muted-foreground">
                        /night
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Board Selection and Pricing */}
            {bookingData.property && (
              <div className="mt-4">
                <h4 className="text-lg font-semibold mb-3">
                  Your Stay, Your Way
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  <Card
                    className={`cursor-pointer transition-all rounded-lg ${
                      bookingData.board === "bb"
                        ? "ring-2 ring-primary border-primary"
                        : "border-border"
                    }`}
                    onClick={() =>
                      setBookingData((prev) => ({ ...prev, board: "bb" }))
                    }
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <h5 className="font-serif text-lg font-semibold text-primary">
                          Bed & Breakfast
                        </h5>
                        <div className="text-2xl font-bold text-primary">
                          KSh{" "}
                          {bookingData.property === "andromeda" ? 10000 : 13000}
                          <span className="text-sm font-normal text-muted-foreground">
                            {" "}
                            /night (2 pax)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card
                    className={`cursor-pointer transition-all rounded-lg ${
                      bookingData.board === "hb"
                        ? "ring-2 ring-primary border-primary"
                        : "border-border"
                    }`}
                    onClick={() =>
                      setBookingData((prev) => ({ ...prev, board: "hb" }))
                    }
                  >
                    <CardContent className="p-4">
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <h5 className="font-serif text-lg font-semibold text-primary">
                            Half Board
                          </h5>
                          {bookingData.property === "andromeda" && (
                            <Badge className="bg-accent/20 text-accent border-accent text-xs px-2 py-0.5">
                              Intro offer
                            </Badge>
                          )}
                        </div>
                        <div className="text-2xl font-bold text-primary">
                          KSh{" "}
                          {bookingData.property === "andromeda" ? 16000 : 18000}
                          <span className="text-sm font-normal text-muted-foreground">
                            {" "}
                            /night (2 pax)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-lg border-border">
                    <CardContent className="p-6">
                      <div className="space-y-2">
                        <h5 className="font-serif text-lg font-semibold text-primary">
                          Additional Adult
                        </h5>
                        <div className="text-sm text-muted-foreground">
                          Applied per extra adult (above 2 guests)
                        </div>
                        <div className="space-y-3 pt-2">
                          <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-sm">B&B</span>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-primary">
                                KSh 2,500
                              </span>
                              <Checkbox
                                id="addl-bb"
                                checked={bookingData.additionalAdult.bb}
                                onCheckedChange={() =>
                                  setBookingData((prev) => ({
                                    ...prev,
                                    additionalAdult: {
                                      ...prev.additionalAdult,
                                      bb: !prev.additionalAdult.bb,
                                    },
                                  }))
                                }
                              />
                            </div>
                          </label>
                          <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-sm">Half Board</span>
                            <div className="flex items-center gap-3">
                              <span className="text-lg font-semibold text-primary">
                                KSh 5,000
                              </span>
                              <Checkbox
                                id="addl-hb"
                                checked={bookingData.additionalAdult.hb}
                                onCheckedChange={() =>
                                  setBookingData((prev) => ({
                                    ...prev,
                                    additionalAdult: {
                                      ...prev.additionalAdult,
                                      hb: !prev.additionalAdult.hb,
                                    },
                                  }))
                                }
                              />
                            </div>
                          </label>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            )}

            {/* Date Selection */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Label htmlFor="checkin">Check-in Date</Label>
                <Input
                  id="checkin"
                  type="date"
                  value={bookingData.checkIn}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      checkIn: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout">Check-out Date</Label>
                <Input
                  id="checkout"
                  type="date"
                  value={bookingData.checkOut}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      checkOut: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests">Guests</Label>
                <Select
                  value={bookingData.guests.toString()}
                  onValueChange={(value) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guests: Number.parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 Guest</SelectItem>
                    <SelectItem value="2">2 Guests</SelectItem>
                    <SelectItem value="3">3 Guests</SelectItem>
                    <SelectItem value="4">4 Guests</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <Button
              onClick={() => setStep(2)}
              disabled={
                !bookingData.property ||
                !bookingData.checkIn ||
                !bookingData.checkOut ||
                !bookingData.board ||
                (Math.max(0, (bookingData.guests || 0) - 2) > 0 &&
                  !bookingData.additionalAdult.bb &&
                  !bookingData.additionalAdult.hb)
              }
              className="w-full"
              style={{
                fontFamily:
                  'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              Continue to Add-ons
            </Button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium">
              Enhance Your Experience
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {addOns.map((addOn) => (
                <Card key={addOn.id} className="cursor-pointer">
                  <CardContent className="p-4">
                    <div className="flex items-start space-x-3">
                      <Checkbox
                        id={addOn.id}
                        checked={bookingData.addOns.includes(addOn.id)}
                        onCheckedChange={() => handleAddOnToggle(addOn.id)}
                      />
                      <div className="flex-1">
                        <div className="flex justify-between items-start">
                          <Label
                            htmlFor={addOn.id}
                            className="font-medium cursor-pointer"
                          >
                            {addOn.name}
                          </Label>
                          <span className="font-semibold text-primary">
                            KSh {addOn.price * 100}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground mt-1">
                          {addOn.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(1)}>
                Back
              </Button>
              <Button onClick={() => setStep(3)}>Continue to Contact</Button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium">
              Contact Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={bookingData.personalInfo.name}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      personalInfo: {
                        ...prev.personalInfo,
                        name: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  value={bookingData.personalInfo.email}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      personalInfo: {
                        ...prev.personalInfo,
                        email: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone Number</Label>
                <Input
                  id="phone"
                  value={bookingData.personalInfo.phone}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      personalInfo: {
                        ...prev.personalInfo,
                        phone: e.target.value,
                      },
                    }))
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="country">Country</Label>
                <Input
                  id="country"
                  value={bookingData.personalInfo.country}
                  onChange={(e) =>
                    setBookingData((prev) => ({
                      ...prev,
                      personalInfo: {
                        ...prev.personalInfo,
                        country: e.target.value,
                      },
                    }))
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="requests">Special Requests (Optional)</Label>
              <Textarea
                id="requests"
                placeholder="Any dietary requirements, accessibility needs, or special occasions..."
                value={bookingData.personalInfo.specialRequests}
                onChange={(e) =>
                  setBookingData((prev) => ({
                    ...prev,
                    personalInfo: {
                      ...prev.personalInfo,
                      specialRequests: e.target.value,
                    },
                  }))
                }
              />
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(2)}>
                Back
              </Button>
              <Button onClick={() => setStep(4)}>Review Booking</Button>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <h3 className="text-xl font-serif font-medium">
              Review Your Booking
            </h3>

            <Card>
              <CardContent className="p-6 space-y-4">
                <div className="flex justify-between">
                  <span>Property:</span>
                  <span className="font-medium">
                    {getPropertyLabel(bookingData.property)}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Dates:</span>
                  <span className="font-medium">
                    {bookingData.checkIn} to {bookingData.checkOut}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span>Guests:</span>
                  <span className="font-medium">{bookingData.guests}</span>
                </div>
                {bookingData.addOns.length > 0 && (
                  <div className="flex justify-between">
                    <span>Add-ons:</span>
                    <div className="text-right">
                      {bookingData.addOns.map((id) => {
                        const addOn = addOns.find((a) => a.id === id);
                        return (
                          <div key={id} className="text-sm">
                            {addOn?.name} (+KSh {addOn ? addOn.price * 100 : 0})
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )}
                <div className="border-t pt-4">
                  <div className="flex justify-between text-lg font-semibold">
                    <span>Total:</span>
                    <span className="text-primary">KSh {calculateTotal()}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="space-y-4">
              <h4 className="font-medium">
                How would you like to complete your booking?
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card
                  className={`cursor-pointer transition-all ${
                    bookingData.contactMethod === "whatsapp"
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      contactMethod: "whatsapp",
                    }))
                  }
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <Smartphone className="w-8 h-8 text-green-600 mx-auto" />
                    <h5 className="font-medium">WhatsApp</h5>
                    <p className="text-sm text-muted-foreground">
                      Quick response, instant confirmation
                    </p>
                  </CardContent>
                </Card>
                <Card
                  className={`cursor-pointer transition-all ${
                    bookingData.contactMethod === "email"
                      ? "ring-2 ring-primary"
                      : ""
                  }`}
                  onClick={() =>
                    setBookingData((prev) => ({
                      ...prev,
                      contactMethod: "email",
                    }))
                  }
                >
                  <CardContent className="p-4 text-center space-y-2">
                    <Mail className="w-8 h-8 text-blue-600 mx-auto" />
                    <h5 className="font-medium">Email</h5>
                    <p className="text-sm text-muted-foreground">
                      Detailed confirmation, payment options
                    </p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="flex justify-between">
              <Button variant="outline" onClick={() => setStep(3)}>
                Back
              </Button>
              <Button
                onClick={handleSubmit}
                disabled={!bookingData.contactMethod}
                className="bg-primary text-primary-foreground hover:bg-accent"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                Complete Booking
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}
