"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"

const navItems = [
  { name: "Home", href: "/" },
  { name: "Stays", href: "/stays" },
  { name: "About", href: "/about" },
  { name: "Experiences", href: "/experiences" },
  { name: "Gallery", href: "/gallery" },
  { name: "Contact", href: "/contact" },
]

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-elevated/90 backdrop-blur-md border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Left Section - Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center">
              <div className="relative w-32 h-32">
                <Image
                  src="/aamaltair_logo.png"
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
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-accent font-medium px-8 py-3 rounded-full text-base"
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              <Link href="/contact#booking">Book Now</Link>
            </Button>
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

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-card border-t border-border">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-foreground hover:text-primary hover:bg-muted rounded-md transition-colors duration-200"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-3 py-2">
                <Button
                  asChild
                  className="w-full bg-primary text-primary-foreground hover:bg-accent font-medium py-3 rounded-full"
                  style={{
                    fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    fontWeight: 400,
                    letterSpacing: "0.01em",
                    lineHeight: 1.45,
                  }}
                >
                  <Link href="/contact#booking">Book Now</Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
