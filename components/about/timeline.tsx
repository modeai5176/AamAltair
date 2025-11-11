"use client";

import { Calendar } from "lucide-react";
import { TimelineImage } from "@/components/timeline-image";

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
  images: string[];
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative w-full py-8 md:py-12">
      {/* Timeline Items */}
      <div className="relative">
        {items.map((item, index) => {
          const isEven = index % 2 === 0;
          const isLast = index === items.length - 1;

          return (
            <div
              key={index}
              className="relative mb-28 md:mb-36 last:mb-0 group"
            >
              {/* Desktop: Connecting Line Segment (from center of current marker to center of next) */}
              {!isLast && (
                <div className="hidden md:block absolute left-1/2 top-1/2 w-0.5 h-[calc(100%+8rem)] -translate-x-1/2 bg-gradient-to-b from-accent/40 via-accent/60 to-accent/40 z-0" />
              )}

              {/* Container for desktop layout */}
              <div className="relative flex flex-col md:flex-row items-start md:items-center min-h-[10rem] md:min-h-[12rem]">
                {/* Desktop: Left Side - Images for Even items, Text for Odd items */}
                <div className="hidden md:block w-[calc(50%-2.5rem)] pr-8 mb-0 flex items-center">
                  {isEven ? (
                    /* Even items: Images on left */
                    <div className="text-right w-full">
                      <TimelineImage
                        images={item.images}
                        alt={`${item.title} - ${item.year}`}
                        year={item.year}
                      />
                    </div>
                  ) : (
                    /* Odd items: Text on left */
                    <div className="text-right w-full">
                      <div className="bg-gray-900/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 md:p-7 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-3">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/80 leading-relaxed mb-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                {/* Milestone Marker - Desktop: Centered on line */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 items-center justify-center">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center">
                    {/* Outer glow ring */}
                    <div className="absolute inset-0 rounded-full bg-accent/20 blur-md group-hover:bg-accent/30 transition-colors duration-300" />
                    
                    {/* Main circle */}
                    <div className="relative w-full h-full rounded-full bg-gradient-to-br from-accent/90 to-accent/70 border-2 border-accent/50 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                      {/* Year */}
                      <span className="relative text-lg md:text-xl font-serif font-medium text-accent-foreground">
                        {item.year}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Desktop: Right Side - Text for Even items, Images for Odd items / Mobile: All content */}
                <div className="w-full md:w-[calc(50%-2.5rem)] md:ml-auto md:pl-8 md:flex md:items-center">
                  {/* Mobile: Milestone Marker */}
                  <div className="md:hidden relative w-full flex justify-center mb-6">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      {/* Connecting line down - only show if not last item */}
                      {!isLast && (
                        <div className="absolute left-1/2 top-full w-0.5 h-6 -translate-x-1/2 bg-accent/40" />
                      )}
                      
                      {/* Outer glow ring */}
                      <div className="absolute inset-0 rounded-full bg-accent/20 blur-md group-hover:bg-accent/30 transition-colors duration-300" />
                      
                      {/* Main circle */}
                      <div className="relative w-full h-full rounded-full bg-gradient-to-br from-accent/90 to-accent/70 border-2 border-accent/50 flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all duration-300">
                        {/* Year */}
                        <span className="relative text-lg font-serif font-medium text-accent-foreground">
                          {item.year}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Mobile: Show content after marker */}
                  <div className="md:hidden bg-gray-900/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300">
                    {/* Title */}
                    <h3 className="text-2xl font-serif font-medium text-primary mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-foreground/80 leading-relaxed mb-6">
                      {item.description}
                    </p>

                    {/* Image Container */}
                    <div className="mt-6">
                      <TimelineImage
                        images={item.images}
                        alt={`${item.title} - ${item.year}`}
                        year={item.year}
                      />
                    </div>
                  </div>

                  {/* Desktop: Even items - Text on right */}
                  {isEven && (
                    <div className="hidden md:block text-left w-full">
                      <div className="bg-gray-900/80 backdrop-blur-sm border border-accent/20 rounded-2xl p-5 md:p-7 shadow-lg hover:shadow-xl hover:border-accent/40 transition-all duration-300">
                        {/* Title */}
                        <h3 className="text-2xl md:text-3xl font-serif font-medium text-primary mb-3">
                          {item.title}
                        </h3>

                        {/* Description */}
                        <p className="text-foreground/80 leading-relaxed mb-0">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  )}

                  {/* Desktop: Odd items - Images on right */}
                  {!isEven && (
                    <div className="hidden md:block text-left w-full">
                      <TimelineImage
                        images={item.images}
                        alt={`${item.title} - ${item.year}`}
                        year={item.year}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

