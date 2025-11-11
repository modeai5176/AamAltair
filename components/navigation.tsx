"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

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
  const dropdownRef = useRef<HTMLDivElement>(null);
  const scrollPositionRef = useRef<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown when clicking outside (mobile only)
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // Only handle on mobile viewports
      if (window.innerWidth > 768) return;
      
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        isMobileMenuOpen
      ) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      // Small delay to avoid immediate close on open
      setTimeout(() => {
        document.addEventListener("mousedown", handleClickOutside);
        document.addEventListener("touchstart", handleClickOutside);
      }, 10);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
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
                  quality={90}
                  sizes="128px"
                  loading="eager"
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

          {/* Right Section - CTA Button (Desktop) / Mobile Dropdown Trigger */}
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

          {/* Mobile Dropdown Trigger - Extreme Right */}
          <div className="lg:hidden relative z-50" ref={dropdownRef}>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setIsMobileMenuOpen(!isMobileMenuOpen);
              }}
              className="flex items-center justify-center p-2 text-accent hover:text-primary transition-all duration-200"
              aria-label="Toggle menu"
              aria-expanded={isMobileMenuOpen}
            >
              <ChevronDown
                size={20}
                className={`text-accent transition-transform duration-300 ${
                  isMobileMenuOpen ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div
                className="absolute top-full right-0 mt-2 w-64 max-w-[calc(100vw-3rem)] rounded-[12px] overflow-hidden z-[60]"
                style={{
                  backgroundColor: "rgba(0, 0, 0, 0.9)",
                  backdropFilter: "blur(6px)",
                  WebkitBackdropFilter: "blur(6px)",
                  boxShadow: "0 8px 16px rgba(0, 0, 0, 0.4)",
                  border: "1px solid rgba(200, 179, 122, 0.2)",
                  animation: "dropdownFadeIn 0.25s ease-out",
                }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="py-2">
                  {navItems.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block px-4 py-3 text-base font-medium text-[#f5e6cc] hover:text-primary hover:bg-accent/10 transition-all duration-200 active:bg-accent/20"
                      style={{
                        fontFamily:
                          'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                      }}
                    >
                      {item.name}
                    </Link>
                  ))}
                  
                  {/* Book Now Button */}
                  <div className="px-4 pt-2 pb-3 mt-2 border-t border-accent/20">
                    <Link
                      href="/contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      <Button
                        className="w-full bg-primary text-primary-foreground hover:brightness-110 active:brightness-95 font-medium py-3 rounded-full text-base transition-all duration-200"
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
            )}
          </div>

        </div>
      </div>
    </nav>
  );
}
