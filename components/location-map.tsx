"use client";

import { MapPin, Navigation } from "lucide-react";

export function LocationMap() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-serif font-medium text-primary mb-6">
            Find Us
          </h2>
          <p className="text-xl text-foreground/80 max-w-2xl mx-auto">
            Located in the heart of Tsavo, Kenya, along the beautiful River
            Galana.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Map Container */}
          <div className="order-2 lg:order-1">
            <div className="aspect-[4/3] relative rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.5!2d37.5!3d-2.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMsKwMzAnMDAuMCJTIDM3wrAzMCcwMC4wIkU!5e0!3m2!1sen!2ske!4v1234567890123!5m2!1sen!2ske"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
                title="Aam Altair Location - Tsavo, Kenya"
              />
            </div>
          </div>

          {/* Location Details */}
          <div className="order-1 lg:order-2 space-y-8">
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-primary mb-2">
                    River Galana, Tsavo East
                  </h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Nestled along Kenya's second-longest river, our 150-acre
                    property sits in the heart of one of Africa's most
                    biodiverse ecosystems. The Galana River provides life to our
                    orchards and creates a natural corridor for wildlife.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                  <Navigation className="w-6 h-6 text-accent-foreground" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-medium text-primary mb-2">
                    Getting Here
                  </h3>
                  <div className="space-y-2 text-foreground/80">
                    <p>
                      <strong>From Nairobi:</strong> 4-5 hours drive via Mombasa
                      Road
                    </p>
                    <p>
                      <strong>From Mombasa:</strong> 2-3 hours drive
                    </p>
                    <p>
                      <strong>Nearest Airport:</strong> Mombasa International
                      Airport
                    </p>
                    <p>
                      <strong>Coordinates:</strong> 2°30'S, 37°30'E
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="pt-6 border-t border-border">
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://maps.google.com/?q=Tsavo+East+National+Park,+Kenya"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/90 transition-colors font-medium"
                >
                  <Navigation className="w-4 h-4 mr-2" />
                  Open in Google Maps
                </a>
                <a
                  href="tel:+254700000000"
                  className="inline-flex items-center justify-center px-6 py-3 border border-accent text-accent rounded-lg hover:bg-accent/10 transition-colors font-medium"
                >
                  <MapPin className="w-4 h-4 mr-2" />
                  Get Directions
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
