"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import {
  Train,
  Car,
  MapPin,
  Shield,
  Wifi,
  Check,
  ExternalLink,
  Clock,
  Navigation,
} from "lucide-react";

// Icon mapping object
const iconMap = {
  Train,
  Car,
  MapPin,
  Shield,
  Wifi,
  Check,
  ExternalLink,
  Clock,
  Navigation,
};

const journeyData = {
  train: {
    origins: [
      {
        label: "From Nairobi",
        station_primary: {
          name: "Kibwezi SGR",
          rail_time: "3.5h",
          pickup_time: "1h",
        },
        station_alt: {
          name: "Makindu SGR",
          rail_time: "4h",
          pickup_time: "1.5h",
        },
      },
      {
        label: "From Mombasa",
        station_primary: {
          name: "Kibwezi SGR",
          rail_time: "2h",
          pickup_time: "1h",
        },
      },
      {
        label: "From Nairobi (Makindu)",
        station_primary: {
          name: "Makindu SGR",
          rail_time: "4h",
          pickup_time: "1.5h",
        },
      },
    ],
    cta: { label: "Add pickup", price: "$20/ride" },
  },
  drive: {
    route: { origin: "Nairobi", destination: "Aam Altair", time: "~6h" },
    notes: ["Off-road capable vehicle recommended", "Fuel up at Kibwezi"],
  },
};

const safetyNotes = [
  {
    iconName: "Shield",
    title: "Security",
    description:
      "Solar electric fence deters resident game. Secure on-site parking available.",
  },
  {
    iconName: "Wifi",
    title: "Connectivity",
    description:
      "Wi-Fi available at main house. Patchy mobile reception in some areas.",
  },
  {
    iconName: "MapPin",
    title: "Location",
    description:
      "GPS coordinates provided upon booking confirmation for accurate navigation.",
  },
];

export function GettingHereSection() {
  const [activeTab, setActiveTab] = useState<"train" | "drive">("train");
  const [selectedOrigin, setSelectedOrigin] = useState(0);
  const [pickupEnabled, setPickupEnabled] = useState(false);

  const TrainIcon = iconMap.Train;
  const CarIcon = iconMap.Car;
  const CheckIcon = iconMap.Check;
  const ExternalLinkIcon = iconMap.ExternalLink;
  const ClockIcon = iconMap.Clock;
  const NavigationIcon = iconMap.Navigation;

  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-serif font-medium text-primary mb-6">
            Getting Here
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto text-pretty">
            Close to the wild, reachable by road or rail. Your journey to Aam
            Altair is part of the adventure.
          </p>
        </div>

        {/* Tab Selector */}
        <div className="flex justify-center mb-8">
          <div className="bg-card/50 backdrop-blur-sm border border-border rounded-full p-1">
            <button
              onClick={() => setActiveTab("train")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "train"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <TrainIcon className="w-4 h-4 inline mr-2" />
              Train (SGR)
            </button>
            <button
              onClick={() => setActiveTab("drive")}
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-200 ${
                activeTab === "drive"
                  ? "bg-primary text-primary-foreground shadow-sm"
                  : "text-foreground hover:text-primary"
              }`}
            >
              <CarIcon className="w-4 h-4 inline mr-2" />
              Drive
            </button>
          </div>
        </div>

        {/* Journey Cards */}
        {activeTab === "train" && (
          <div className="space-y-6">
            {/* Origin Pills */}
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              {journeyData.train.origins.map((origin, index) => (
                <button
                  key={index}
                  onClick={() => setSelectedOrigin(index)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedOrigin === index
                      ? "bg-accent text-accent-foreground"
                      : "bg-card border border-border text-foreground hover:bg-accent/10"
                  }`}
                >
                  {origin.label}
                </button>
              ))}
            </div>

            {/* Train Journey Card */}
            {journeyData.train.origins[selectedOrigin] && (
              <Card className="bg-card border-border hover:border-accent/40 transition-all duration-300 group">
                <CardContent className="p-8">
                  {/* Changes Are Made here for Mobile View */}
                  <div className="flex flex-col md:flex-row items-start justify-between mb-6">
                    <div className="flex-1 w-full md:w-auto">
                      {/* Big Route Line */}
                      <div className="flex items-center justify-between md:justify-start mb-6">
                        <div className="flex items-center space-x-2 flex-wrap">
                          <span className="text-lg font-medium text-primary">
                            {
                              journeyData.train.origins[
                                selectedOrigin
                              ].label.split(" ")[1]
                            }
                          </span>
                          <span className="text-foreground/60">→</span>
                          <span className="text-lg font-medium text-primary">
                            {
                              journeyData.train.origins[selectedOrigin]
                                .station_primary.name
                            }
                          </span>
                          {/* Time next to station names on desktop */}
                          <Badge className="hidden md:inline-flex bg-accent/20 text-accent border-accent ml-3">
                            {
                              journeyData.train.origins[selectedOrigin]
                                .station_primary.rail_time
                            }
                          </Badge>
                          {/* Mobile: time and rate together below station names */}
                          <div className="w-full md:hidden flex items-center gap-3 mt-2 justify-between">
                            <Badge className="bg-accent/20 text-accent border-accent">
                              {
                                journeyData.train.origins[selectedOrigin]
                                  .station_primary.rail_time
                              }
                            </Badge>
                            <div className="text-accent text-base font-medium ml-auto">
                              {journeyData.train.cta.price}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Stepper */}
                      <div className="space-y-4">
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-accent">
                              1
                            </span>
                          </div>
                          <span className="text-foreground">
                            Book SGR to{" "}
                            {
                              journeyData.train.origins[selectedOrigin]
                                .station_primary.name
                            }
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-accent">
                              2
                            </span>
                          </div>
                          <span className="text-foreground">
                            Arrive → Pickup{" "}
                            {
                              journeyData.train.origins[selectedOrigin]
                                .station_primary.pickup_time
                            }{" "}
                            to Aam Altair
                          </span>
                        </div>

                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-accent">
                              3
                            </span>
                          </div>
                          <span className="text-foreground">Check-in 2 PM</span>
                        </div>
                      </div>
                      {/* Mobile: only the toggle below the steps */}
                      <div className="md:hidden mt-6">
                        <div className="flex items-center space-x-3">
                          <span className="text-sm font-medium">
                            Add pickup
                          </span>
                          <Switch
                            checked={pickupEnabled}
                            onCheckedChange={setPickupEnabled}
                            className="data-[state=checked]:bg-accent"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Desktop: Rate on the right */}
                    <div className="hidden md:flex flex-col items-end space-y-3 mt-6 md:mt-0 ml-0 md:ml-6">
                      <div className="text-right">
                        <div className="text-lg font-medium text-accent">
                          {journeyData.train.cta.price}
                        </div>
                        <div className="text-xs text-muted-foreground">
                          per ride
                        </div>
                      </div>
                      <div className="flex items-center space-x-3">
                        <span className="text-sm font-medium">Add pickup</span>
                        <Switch
                          checked={pickupEnabled}
                          onCheckedChange={setPickupEnabled}
                          className="data-[state=checked]:bg-accent"
                        />
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>
        )}

        {activeTab === "drive" && (
          <Card className="bg-card border-border hover:border-accent/40 transition-all duration-300 group">
            <CardContent className="p-8">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  {/* Big Route Line */}
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="flex items-center space-x-2">
                      <span className="text-lg font-medium text-primary">
                        {journeyData.drive.route.origin}
                      </span>
                      <span className="text-foreground/60">→</span>
                      <span className="text-lg font-medium text-primary">
                        {journeyData.drive.route.destination}
                      </span>
                    </div>
                    <Badge className="bg-accent/20 text-accent border-accent">
                      {journeyData.drive.route.time}
                    </Badge>
                  </div>

                  {/* Notes Chips */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {journeyData.drive.notes.map((note, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {note}
                      </Badge>
                    ))}
                  </div>

                  {/* Actions */}
                  <div className="flex flex-col md:flex-row gap-3">
                    <Button
                      variant="outline"
                      className="border-accent text-accent hover:bg-accent/10 rounded-full h-9 px-4 text-sm md:h-auto md:px-6 md:text-base"
                      style={{
                        fontFamily:
                          'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                        lineHeight: 1.45,
                      }}
                    >
                      <NavigationIcon className="w-3.5 h-3.5 mr-1.5 md:w-4 md:h-4 md:mr-2" />
                      Open route in Maps
                    </Button>
                    <Button
                      variant="outline"
                      className="border-border text-foreground hover:bg-accent/10 rounded-full h-9 px-4 text-sm md:h-auto md:px-6 md:text-base"
                      style={{
                        fontFamily:
                          'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                        fontWeight: 400,
                        letterSpacing: "0.01em",
                        lineHeight: 1.45,
                      }}
                    >
                      <ExternalLinkIcon className="w-3.5 h-3.5 mr-1.5 md:w-4 md:h-4 md:mr-2" />
                      Copy itinerary
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Safety & Notes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {safetyNotes.map((note) => {
            const IconComponent =
              iconMap[note.iconName as keyof typeof iconMap];
            return (
              <Card key={note.title} className="bg-card border-border">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <IconComponent className="w-6 h-6 text-accent" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="font-serif text-lg font-medium text-primary">
                      {note.title}
                    </h3>
                    <p className="text-sm text-foreground/80 leading-relaxed">
                      {note.description}
                    </p>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
