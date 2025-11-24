"use client";

import { useState, useEffect } from "react";

interface PromoFloatingCardProps {
  alwaysVisible?: boolean;
  inline?: boolean;
}

export function PromoFloatingCard({
  alwaysVisible = false,
  inline = false,
}: PromoFloatingCardProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [hasScrolledPastHero, setHasScrolledPastHero] = useState(false);

  // NEW: State for mobile toggle
  const [isMobileExpanded, setIsMobileExpanded] = useState(false);

  // If alwaysVisible, show it after a short delay for slide-in effect
  useEffect(() => {
    if (alwaysVisible) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 300);
      return () => clearTimeout(timer);
    }
  }, [alwaysVisible]);

  // Detect when user scrolls past hero section (only if not alwaysVisible)
  useEffect(() => {
    if (alwaysVisible) {
      return;
    }

    const handleScroll = () => {
      // Hero section is h-screen, so check if scroll is past viewport height
      const scrollPosition = window.scrollY || window.pageYOffset;
      const viewportHeight = window.innerHeight;

      if (scrollPosition > viewportHeight * 0.8) {
        // User has scrolled past 80% of hero section
        if (!hasScrolledPastHero) {
          setHasScrolledPastHero(true);
          setIsVisible(true);
        }
      } else {
        // User scrolled back to top
        if (hasScrolledPastHero) {
          setHasScrolledPastHero(false);
          setIsVisible(false);
          setIsMobileExpanded(false); // Auto-close mobile card on scroll up
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    // Check initial scroll position
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, [hasScrolledPastHero, alwaysVisible]);

  // Removed dismiss functionality - card always shows

  // MODIFIED: Removed 'hidden lg:block' to allow mobile rendering.
  // Added pointer-events-none to container so the empty space doesn't block clicks.
  const containerClasses = inline
    ? "relative w-full flex justify-center z-40 mb-8"
    : "fixed bottom-6 right-4 md:right-6 z-40 flex flex-col items-end pointer-events-none";

  // MODIFIED: Logic to handle Mobile vs Desktop states separately
  // Mobile: Controlled by isMobileExpanded
  // Desktop (lg): Controlled by isVisible/alwaysVisible (Original Logic)
  const cardClasses = inline
    ? `relative max-w-2xl w-full rounded-xl overflow-hidden transition-all duration-500 ease-out ${
        alwaysVisible || isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 -translate-y-4 pointer-events-none"
      }`
    : `relative max-w-sm w-80 rounded-2xl overflow-hidden backdrop-blur-xl shadow-2xl transition-all duration-700 ease-out 
       /* MOBILE STATE */
       ${
         isMobileExpanded
           ? "opacity-100 translate-y-0 scale-100 pointer-events-auto block mb-0"
           : "opacity-0 translate-y-4 scale-95 pointer-events-none hidden"
       }
       /* DESKTOP STATE (Overrides Mobile) */
       lg:block lg:mb-0
       ${
         alwaysVisible || isVisible
           ? "lg:opacity-100 lg:translate-x-0 lg:translate-y-0 lg:scale-100 lg:pointer-events-auto"
           : "lg:opacity-0 lg:translate-x-[120%] lg:translate-y-0 lg:scale-95 lg:pointer-events-none"
       }`;

  // Inline version - clean and minimal
  if (inline) {
    return (
      <div className={containerClasses}>
        <div
          className={cardClasses}
          style={{
            background: "rgba(18, 20, 24, 0.6)",
            backdropFilter: "blur(12px)",
            WebkitBackdropFilter: "blur(12px)",
            border: "1px solid rgba(214, 185, 140, 0.15)",
          }}
        >
          <div className="relative px-6 py-4 md:px-8 md:py-5">
            {/* Content - Centered and clean */}
            <div className="text-center space-y-3">
              {/* Badge */}
              <div className="flex items-center justify-center gap-2">
                <span className="text-sm">✨</span>
                <span
                  className="text-xs font-medium uppercase tracking-[0.15em] text-[#d6b98c]"
                  style={{
                    fontFamily:
                      'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                    letterSpacing: "0.15em",
                  }}
                >
                  Limited Offer
                </span>
              </div>

              {/* Title */}
              <h3
                className="text-xl md:text-2xl font-medium text-primary leading-tight"
                style={{
                  fontFamily: "Satoshi, system-ui, sans-serif",
                  fontWeight: 500,
                }}
              >
                Introductory Package
              </h3>

              {/* Description */}
              <p
                className="text-sm md:text-base text-foreground/70 leading-relaxed max-w-md mx-auto"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Complimentary sundowner for every 3 nights booked
              </p>

              {/* Valid until - subtle */}
              <p
                className="text-xs text-foreground/50 pt-2"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Valid until February 20
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Fixed version - original design
  return (
    <div className={containerClasses}>
      {/* ------------------------------------------------------------------ */}
      {/* NEW: Mobile "Bubble" Trigger                                       */}
      {/* Hidden on LG (Desktop), Visible when card is NOT expanded on Mobile */}
      {/* ------------------------------------------------------------------ */}
      <button
        onClick={() => setIsMobileExpanded(true)}
        className={`lg:hidden group relative h-14 w-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-2xl pointer-events-auto ${
          !isMobileExpanded ? "scale-100 opacity-100" : "scale-0 opacity-0"
        }`}
        style={{
          background:
            "linear-gradient(135deg, rgba(26, 26, 26, 0.95) 0%, rgba(20, 20, 20, 1) 100%)",
          border: "1px solid rgba(214, 185, 140, 0.3)",
          boxShadow:
            "0 10px 25px rgba(0,0,0,0.5), 0 0 15px rgba(214, 185, 140, 0.2)",
        }}
      >
        {/* Glowing Rings */}
        <div className="absolute inset-0 rounded-full border border-[#d6b98c] animate-ping opacity-30 duration-1000" />
        <div className="absolute inset-0 rounded-full bg-[#d6b98c]/10 animate-pulse" />
        <span className="text-xl relative z-10">✨</span>
      </button>

      {/* ------------------------------------------------------------------ */}
      {/* Main Card                                                          */}
      {/* ------------------------------------------------------------------ */}
      <div
        className={cardClasses}
        style={{
          background:
            "linear-gradient(135deg, rgba(26, 26, 26, 0.85) 0%, rgba(20, 20, 20, 0.9) 100%)",
          border: "1px solid rgba(214, 185, 140, 0.3)",
          boxShadow:
            "0 20px 40px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(214, 185, 140, 0.1), 0 0 60px rgba(214, 185, 140, 0.15)",
        }}
      >
        {/* NEW: Mobile Close Button (Hidden on Desktop) */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsMobileExpanded(false);
          }}
          className="lg:hidden absolute top-3 right-3 p-1.5 rounded-full bg-white/5 text-white/60 hover:text-white hover:bg-white/10 transition-colors z-20 pointer-events-auto"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>

        {/* Animated gradient border effect */}
        <div
          className="absolute inset-0 rounded-2xl opacity-50"
          style={{
            background:
              "linear-gradient(135deg, rgba(214, 185, 140, 0.4) 0%, rgba(242, 227, 195, 0.2) 50%, rgba(214, 185, 140, 0.4) 100%)",
            backgroundSize: "200% 200%",
            animation: "shimmer 3s ease-in-out infinite",
          }}
        />

        {/* Content */}
        <div className="relative px-5 py-4 md:px-6 md:py-5">
          {/* Badge */}
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center gap-1.5">
              <span className="text-lg animate-pulse">✨</span>
              <span
                className="text-xs font-semibold uppercase tracking-wider text-[#d6b98c]"
                style={{
                  fontFamily:
                    'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                }}
              >
                Limited Offer
              </span>
            </div>
          </div>

          {/* Title */}
          <h3
            className="text-base md:text-lg font-semibold text-primary mb-2 leading-tight"
            style={{
              fontFamily: "Satoshi, system-ui, sans-serif",
              fontWeight: 600,
            }}
          >
            Introductory Package
          </h3>

          {/* Description */}
          <p
            className="text-xs md:text-sm text-foreground/80 leading-relaxed mb-3"
            style={{
              fontFamily:
                'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            }}
          >
            Complimentary sundowner for every 3 nights booked
          </p>

          {/* Valid until */}
          <div className="flex items-center gap-2 pt-2 border-t border-accent/20">
            <span className="text-[10px] md:text-xs text-foreground/60 uppercase tracking-wide">
              Valid until February 20
            </span>
          </div>
        </div>

        {/* Bottom accent line */}
        <div
          className="h-1 bg-gradient-to-r from-transparent via-[#d6b98c] to-transparent opacity-60"
          style={{
            background:
              "linear-gradient(90deg, transparent 0%, rgba(214, 185, 140, 0.6) 50%, transparent 100%)",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
      `}</style>
    </div>
  );
}
