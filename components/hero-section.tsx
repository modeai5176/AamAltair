"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { useEffect, useRef, useState } from "react"

export function HeroSection() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isVideoReady, setIsVideoReady] = useState(false)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    let playAttempted = false

    const attemptPlay = async () => {
      if (playAttempted) return
      playAttempted = true

      try {
        await video.play()
        setIsVideoReady(true)
      } catch (error) {
        console.log('Autoplay failed, video will play on user interaction:', error)
        // Reset the flag so we can try again
        playAttempted = false
      }
    }

    const handleCanPlay = () => {
      attemptPlay()
    }

    const handleLoadedData = () => {
      attemptPlay()
    }

    const handleError = (e: Event) => {
      console.error('Video error:', e)
      setIsVideoReady(true) // Show content even if video fails
    }

    // Add event listeners
    video.addEventListener('canplay', handleCanPlay)
    video.addEventListener('loadeddata', handleLoadedData)
    video.addEventListener('error', handleError)

    // Set video properties for better playback
    video.muted = true // Ensure muted for autoplay
    video.loop = true
    video.playsInline = true

    // Force load the video
    video.load()

    // Try to play after a short delay
    const timeoutId = setTimeout(() => {
      attemptPlay()
    }, 100)

    return () => {
      clearTimeout(timeoutId)
      video.removeEventListener('canplay', handleCanPlay)
      video.removeEventListener('loadeddata', handleLoadedData)
      video.removeEventListener('error', handleError)
    }
  }, [])

  // Global click handler to trigger video playback
  useEffect(() => {
    const handleUserInteraction = async () => {
      const video = videoRef.current
      if (!video || isVideoReady) return

      try {
        await video.play()
        setIsVideoReady(true)
      } catch (error) {
        console.log('Video play failed on user interaction:', error)
      }
    }

    // Add click and touch listeners
    document.addEventListener('click', handleUserInteraction, { once: true })
    document.addEventListener('touchstart', handleUserInteraction, { once: true })

    return () => {
      document.removeEventListener('click', handleUserInteraction)
      document.removeEventListener('touchstart', handleUserInteraction)
    }
  }, [isVideoReady])

  return (
    <section className="relative h-screen flex items-end justify-center overflow-hidden pt-header pb-20">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 bg-background">
        <video 
          ref={videoRef}
          autoPlay
          loop 
          playsInline 
          muted
          preload="auto"
          className="w-full h-full object-cover"
          webkit-playsinline="true"
          x5-playsinline="true"
          controls={false}
          disablePictureInPicture
          style={{ 
            opacity: isVideoReady ? 1 : 0,
            transition: 'opacity 0.5s ease-in-out'
          }}
        >
          <source
            src="/hero.mp4"
            type="video/mp4"
          />
          <source
            src="/hero.webm"
            type="video/webm"
          />
        </video>

        {/* Loading state */}
        {!isVideoReady && (
          <div className="absolute inset-0 bg-gradient-to-br from-background via-background/80 to-background flex items-center justify-center">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-accent mx-auto mb-4"></div>
              <p className="text-foreground/60 text-sm">Loading video...</p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Eyebrow Chip */}
          <div className="flex justify-center mb-4">
            <div className="inline-flex items-center px-4 py-2 rounded-full border border-accent/60 bg-transparent">
              <span className="text-accent font-medium text-sm leading-5" style={{ fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif' }}>
                Tsavo, Kenya • Riverfront Domes
              </span>
            </div>
          </div>

          {/* Subtext */}
          <p className="text-foreground/90 text-lg leading-7 mb-8" style={{ 
            fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            fontSize: '17px',
            lineHeight: '28px'
          }}>
            Wake to mango orchards, starlit skies, and the Galana at your deck.
          </p>

          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-serif font-medium text-primary leading-tight mb-6" style={{
            fontFamily: 'Satoshi, system-ui, sans-serif',
            fontWeight: 500,
            letterSpacing: '-0.01em',
            lineHeight: '1.12',
            color: '#E8DAB8',
            textShadow: '0 1px 24px rgba(0,0,0,0.35)'
          }}>
            Riverfront Domes. Pure Stillness.
          </h1>

          {/* Micro-line */}
          <p className="text-accent/80 text-sm mb-10" style={{ 
            fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
            fontSize: '13px',
            lineHeight: '20px'
          }}>
            Solar-powered • Farm-to-table • Private decks
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-accent px-8 py-4 rounded-full"
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              Book Now
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-accent text-accent hover:bg-accent/10 px-8 py-4 rounded-full"
              style={{
                fontFamily: 'Inter, -apple-system, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
                fontWeight: 400,
                letterSpacing: "0.01em",
                lineHeight: 1.45,
              }}
            >
              Explore Stays
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
