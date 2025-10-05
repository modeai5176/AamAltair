"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function NatureCTA() {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="max-w-4xl mx-auto text-center">
        <div className="space-y-6">
          <h2 className="text-3xl md:text-4xl font-serif font-medium text-primary">
            Ready to Reconnect with Nature?
          </h2>
          <p className="text-lg text-foreground/80 max-w-2xl mx-auto">
            Book your stay at Aam Altair and experience the perfect blend of
            luxury and nature in the heart of Tsavo, Kenya.
          </p>
          <div className="flex justify-center">
            <Link href="/contact">
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
                Book Now
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
