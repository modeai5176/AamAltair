"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Stays", href: "/stays" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
];

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open and store scroll position
  useEffect(() => {
    if (isMobileMenuOpen) {
      // Store current scroll position
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
    } else {
      // Restore scroll position
      const scrollY = document.body.style.top;
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      window.scrollTo(0, parseInt(scrollY || "0") * -1);
    }

    return () => {
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-elevated/90 backdrop-blur-md border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/aamaltair_logo.webp"
                  alt="Aam Altair Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          {/* Center Section - Navigation Capsule */}
          <div className="hidden lg:flex">
            <div className="bg-card/80 backdrop-blur-sm border border-border rounded-full px-6 py-3 shadow-sm">
              <div className="flex items-center space-x-1">
                {navItems.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-full transition-all duration-200"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Right Section - CTA Button */}
          <div className="hidden lg:block">
            <Link href="/contact">
              <Button
                className="bg-primary text-primary-foreground hover:bg-accent font-medium px-8 py-3 rounded-full text-base"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                  fontWeight: 400,
                  letterSpacing: "0.01em",
                  lineHeight: 1.45,
                }}
              >
                Book Now
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="p-3 text-foreground hover:text-primary hover:bg-accent/10 rounded-full transition-all duration-200"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50">
            {/* Dark Overlay */}
            <div
              className={`absolute inset-0 bg-black/60 transition-opacity duration-300 ease-in-out ${
                isMobileMenuOpen ? "opacity-100" : "opacity-0"
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Menu Panel */}
            <div
              className={`absolute right-0 top-0 h-full w-4/5 border-l border-accent-2/50 shadow-2xl transform transition-transform duration-300 ease-in-out ${
                isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
              }`}
              style={{
                background: "#0d0e10",
              }}
            >
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-accent-2/30">
                  <h2 className="text-xl font-semibold text-foreground">
                    Menu
                  </h2>
                  <button
                    className="p-2 text-foreground hover:text-primary hover:bg-accent/10 rounded-full transition-all duration-200"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Items */}
                <div className="flex-1 px-6 py-4 space-y-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block px-4 py-3 text-lg font-medium text-foreground hover:text-primary hover:bg-accent/10 rounded-lg transition-all duration-200"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}

                  {/* Book Now Button - Centered below Contact */}
                  <div className="pt-4">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:bg-accent font-medium py-3 rounded-full text-base"
                        style={{
                          fontFamily:
                            'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                          fontWeight: 400,
                          letterSpacing: "0.01em",
                          lineHeight: 1.45,
                        }}
                      >
                        Book Now
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
