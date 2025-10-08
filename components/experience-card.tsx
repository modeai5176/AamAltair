"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Clock,
  Calendar,
  BookOpen,
  Sunrise,
  TreePine,
  Wine,
  Apple,
} from "lucide-react";

interface Experience {
  iconName: string;
  title: string;
  description: string;
  longDescription: string;
  duration: string;
  bestTime: string;
  schedule: string;
  price: string;
  bookingRequired: boolean;
  image: string;
}

interface ExperienceCardProps {
  experience: Experience;
}

// Icon mapping object
const iconMap = {
  Sunrise,
  TreePine,
  Wine,
  Apple,
};

export function ExperienceCard({ experience }: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const IconComponent = iconMap[experience.iconName as keyof typeof iconMap];

  return (
    <Card className="overflow-hidden bg-card border-border">
      <div className="relative">
        <div className="aspect-[16/10] relative overflow-hidden">
          <Image
            src={experience.image || "/placeholder.svg"}
            alt={experience.title}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />

          {/* Icon Overlay */}
          <div className="absolute top-4 left-4">
            <div className="w-12 h-12 rounded-full bg-background/20 backdrop-blur-sm flex items-center justify-center">
              <IconComponent className="w-6 h-6 text-primary" />
            </div>
          </div>

          {/* Price Badge */}
          <div className="absolute top-4 right-4">
            <Badge
              className={`${
                experience.price === "Included"
                  ? "bg-accent/20 text-accent border-accent"
                  : "bg-primary/20 text-primary border-primary"
              }`}
            >
              {experience.price}
            </Badge>
          </div>
        </div>
      </div>

      <CardContent className="p-6 space-y-4">
        {/* Header */}
        <div className="space-y-2">
          <h3 className="text-xl font-serif font-medium text-primary">
            {experience.title}
          </h3>
          <p className="text-foreground/80 text-pretty">
            {experience.description}
          </p>
        </div>

        {/* Meta Information */}
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="flex items-center space-x-2">
            <Clock className="w-4 h-4 text-accent" />
            <span className="text-foreground/80">{experience.duration}</span>
          </div>
          <div className="flex items-center space-x-2">
            <Calendar className="w-4 h-4 text-accent" />
            <span className="text-foreground/80">{experience.bestTime}</span>
          </div>
          <div className="flex items-center space-x-2">
            <BookOpen className="w-4 h-4 text-accent" />
            <span className="text-foreground/80">{experience.schedule}</span>
          </div>
          <div className="flex items-center space-x-2">
            {/* Changed Dollarsign to KSh */}
            <span className="text-[0.75rem] font-medium text-accent leading-none">
              KSh
            </span>
            <span className="text-foreground/80">{experience.price}</span>
          </div>
        </div>

        {/* Expanded Description */}
        {isExpanded && (
          <div className="pt-4 border-t border-border">
            <p className="text-sm text-foreground/80 leading-relaxed">
              {experience.longDescription}
            </p>
          </div>
        )}

        {/* Actions */}
        {/* Center the Learn More button and comment out the Add to Booking button as requested */}
        <div className="flex gap-4 pt-4 justify-center">
          {/* Increased vertical padding so the Learn More button is a bit taller */}
          <Button
            variant="outline"
            size="lg"
            onClick={() => setIsExpanded(!isExpanded)}
            className="border-accent/50 text-accent hover:bg-accent/10 rounded-full py-4 px-15"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            {isExpanded ? "Show Less" : "Learn More"}
          </Button>

          {/* Add to Booking button commented out per request - kept here in case we re-enable later */}
          {/**
          <Button 
            size="sm" 
            className="bg-primary text-primary-foreground hover:bg-accent rounded-full flex-1"
            style={{
              fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
              fontWeight: 400,
              letterSpacing: "0.01em",
              lineHeight: 1.45,
            }}
          >
            Add to Booking
          </Button>
          */}
        </div>
      </CardContent>
    </Card>
  );
}
