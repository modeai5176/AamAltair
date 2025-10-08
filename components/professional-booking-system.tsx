"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Smartphone, Calendar } from "lucide-react";
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
  
  // Get today's date in YYYY-MM-DD format, ensuring it's always today
  const getToday = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = String(now.getMonth() + 1).padStart(2, '0');
    const day = String(now.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Get tomorrow's date (one day after today)
  const getTomorrow = () => {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);
    const year = tomorrow.getFullYear();
    const month = String(tomorrow.getMonth() + 1).padStart(2, '0');
    const day = String(tomorrow.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const today = getToday();
  const tomorrow = getTomorrow();
  
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

  // Validate dates on component mount and when today changes
  useEffect(() => {
    const currentToday = getToday();
    const currentTomorrow = getTomorrow();
    setBookingData((prev) => {
      let updated = { ...prev };
      
      // If check-in is in the past, reset to today
      if (prev.checkIn && prev.checkIn < currentToday) {
        updated.checkIn = currentToday;
      }
      
      // If check-out is before check-in or tomorrow, reset
      const minCheckout = updated.checkIn || currentTomorrow;
      if (prev.checkOut && prev.checkOut < minCheckout) {
        updated.checkOut = minCheckout;
      }
      
      return updated;
    });
  }, []);

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
      <DialogContent 
        className="max-w-[800px] w-[95vw] lg:w-[80vw] h-[72vh] lg:h-auto max-h-[72vh] lg:max-h-none overflow-hidden lg:overflow-y-auto p-0 rounded-2xl bg-background border-2 border-border shadow-2xl my-4 lg:my-0"
        style={{ 
          width: '95vw', 
          maxWidth: '800px',
          minWidth: '320px'
        }}
      >
        <div className="flex flex-col h-full lg:h-auto">
          <div className="p-4 pb-2 flex-shrink-0">
            <div className="text-center mb-6">
              <h2 className="text-xl font-serif">
            Book Your Stay at Aam Altair
              </h2>
            </div>
          </div>
          <div className="flex-1 lg:flex-none overflow-y-auto lg:overflow-visible px-4 pb-4 min-h-0" style={{ maxHeight: 'calc(72vh - 120px)', WebkitOverflowScrolling: 'touch' }}>

        {step === 1 && (
          <div className="space-y-3 lg:space-y-4 ">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
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
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <div className="flex justify-between items-start">
                      <h3 className="font-serif text-lg font-bold text-primary">
                        The Domestead
                      </h3>
                      <Badge className="bg-accent/20 text-accent border-accent text-xs px-2 py-0.5">
                        Popular
                      </Badge>
                    </div>
                    <p className="text-xs text-muted-foreground">
                      Luxury dome with river views
                    </p>
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
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      Hercules
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Intimate dome by the water
                    </p>
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
                <CardContent className="p-4">
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-bold text-primary">
                      Andromeda
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Intimate dome by the water
                    </p>
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
                    <CardContent className="p-3">
                      <div className="space-y-1">
                        <h5 className="font-serif text-sm font-semibold text-primary">
                          Bed & Breakfast
                        </h5>
                        <div className="text-lg font-bold text-primary">
                          KSh{" "}
                          {bookingData.property === "andromeda" ? 10000 : 13000}
                          <span className="text-xs font-normal text-muted-foreground">
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
                    <CardContent className="p-3">
                      <div className="space-y-1">
                        <div className="flex items-center justify-between">
                          <h5 className="font-serif text-sm font-semibold text-primary">
                            Half Board
                          </h5>
                          {bookingData.property === "andromeda" && (
                            <Badge className="bg-accent/20 text-accent border-accent text-xs px-1.5 py-0.5">
                              Intro offer
                            </Badge>
                          )}
                        </div>
                        <div className="text-lg font-bold text-primary">
                          KSh{" "}
                          {bookingData.property === "andromeda" ? 16000 : 18000}
                          <span className="text-xs font-normal text-muted-foreground">
                            {" "}
                            /night (2 pax)
                          </span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="rounded-lg border-border">
                    <CardContent className="p-3">
                      <div className="space-y-1">
                        <h5 className="font-serif text-sm font-semibold text-primary">
                          Additional Adult
                        </h5>
                        <div className="text-xs text-muted-foreground">
                          Applied per extra adult (above 2 guests)
                        </div>
                        <div className="space-y-2 pt-1">
                          <label className="flex items-center justify-between cursor-pointer">
                            <span className="text-xs">B&B</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-primary">
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
                            <span className="text-xs">Half Board</span>
                            <div className="flex items-center gap-2">
                              <span className="text-sm font-semibold text-primary">
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
            <div className="flex justify-center">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-2xl">
              <div className="space-y-2">
                <Label htmlFor="checkin" className="text-sm font-medium">Check-in Date</Label>
                <div className="relative">
                <Input
                  id="checkin"
                  type="date"
                  value={bookingData.checkIn}
                    min={today}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      if (selectedDate && selectedDate < today) {
                        // Reset to today if past date is selected
                        setBookingData((prev) => ({
                          ...prev,
                          checkIn: today,
                          checkOut: "", // Clear check-out when check-in changes
                        }));
                      } else {
                        // Calculate next day for check-out
                        const nextDay = selectedDate ? new Date(selectedDate) : null;
                        if (nextDay) {
                          nextDay.setDate(nextDay.getDate() + 1);
                          const nextDayString = nextDay.toISOString().split('T')[0];
                          setBookingData((prev) => ({
                            ...prev,
                            checkIn: selectedDate,
                            checkOut: nextDayString, // Auto-set check-out to next day
                          }));
                        } else {
                    setBookingData((prev) => ({
                      ...prev,
                            checkIn: selectedDate,
                            checkOut: "", // Clear check-out if no check-in
                          }));
                        }
                      }
                    }}
                    className="border-2 border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-background hover:border-accent/70 transition-colors pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => (document.getElementById('checkin') as HTMLInputElement)?.showPicker()}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-accent hover:text-accent/80 transition-colors cursor-pointer"
                  >
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="checkout" className="text-sm font-medium">
                    Check-out Date
                  </Label>
                <div className="relative">
                <Input
                  id="checkout"
                  type="date"
                  value={bookingData.checkOut}
                    min={bookingData.checkIn ? (() => {
                      const checkInDate = new Date(bookingData.checkIn);
                      checkInDate.setDate(checkInDate.getDate() + 1);
                      return checkInDate.toISOString().split('T')[0];
                    })() : tomorrow}
                    disabled={!bookingData.checkIn}
                    onChange={(e) => {
                      const selectedDate = e.target.value;
                      if (!bookingData.checkIn) return; // Don't allow changes if no check-in
                      
                      const checkInDate = new Date(bookingData.checkIn);
                      const minCheckout = new Date(checkInDate);
                      minCheckout.setDate(minCheckout.getDate() + 1);
                      const minCheckoutString = minCheckout.toISOString().split('T')[0];
                      
                      if (selectedDate && selectedDate < minCheckoutString) {
                        // Reset to minimum date if before check-in + 1 day
                        setBookingData((prev) => ({
                          ...prev,
                          checkOut: minCheckoutString,
                        }));
                      } else {
                    setBookingData((prev) => ({
                      ...prev,
                          checkOut: selectedDate,
                        }));
                      }
                    }}
                    className={`border-2 focus:ring-2 transition-colors pr-10 ${
                      !bookingData.checkIn 
                        ? 'border-muted/50 bg-muted/20 text-muted-foreground cursor-not-allowed' 
                        : 'border-accent/50 focus:border-accent focus:ring-accent/20 bg-background hover:border-accent/70'
                    }`}
                  />
                  <button
                    type="button"
                    onClick={() => bookingData.checkIn && (document.getElementById('checkout') as HTMLInputElement)?.showPicker()}
                    disabled={!bookingData.checkIn}
                    className={`absolute right-3 top-1/2 transform -translate-y-1/2 h-4 w-4 transition-colors ${
                      !bookingData.checkIn 
                        ? 'text-muted-foreground cursor-not-allowed' 
                        : 'text-accent hover:text-accent/80 cursor-pointer'
                    }`}
                  >
                    <Calendar className="h-4 w-4" />
                  </button>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="guests" className="text-sm font-medium">Guests</Label>
                <Select
                  value={bookingData.guests.toString()}
                  onValueChange={(value) =>
                    setBookingData((prev) => ({
                      ...prev,
                      guests: Number.parseInt(value),
                    }))
                  }
                >
                  <SelectTrigger className="border-2 border-accent/50 focus:border-accent focus:ring-2 focus:ring-accent/20 bg-background hover:border-accent/70 transition-colors">
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
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
