import Link from "next/link";
import Image from "next/image";
import { Instagram, Mail, MessageCircle } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/aamaltair_logo.webp"
                  alt="Aam Altair Logo"
                  fill
                  className="object-contain"
                  loading="lazy"
                  quality={90}
                  sizes="128px"
                />
              </div>
            </div>
            <p className="text-sm text-muted-foreground">
              Partnership with Nature.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-primary">
              Quick Links
            </h3>
            <div className="space-y-2">
              <Link
                href="/stays"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                Stays
              </Link>
              <Link
                href="/experiences"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                Experiences
              </Link>
              <Link
                href="/gallery"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                Gallery
              </Link>
              <Link
                href="/about"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm text-foreground hover:text-primary transition-colors block"
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="font-serif text-lg font-medium text-primary">
              Contact
            </h3>
            <div className="space-y-2">
              <p className="text-sm text-foreground">Tsavo, Kenya</p>
              <p className="text-sm text-foreground">
                River Galana, 150-acre orchard
              </p>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://wa.me/254716862882"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <MessageCircle size={20} />
                </a>
                <a
                  href="mailto:theaamaltair@gmail.com"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                </a>
                <a
                  href="https://instagram.com/aamaltair"
                  className="text-accent hover:text-primary transition-colors"
                >
                  <Instagram size={20} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © 2024 Aam Altair. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground mt-2">
            Powered by{" "}
            <a
              href="https://www.mode-ai.co"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary hover:text-accent transition-colors"
            >
              ModeAI
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
