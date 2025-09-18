"use client"

import { useEffect } from "react"

// Performance rating helper function
const getPerformanceRating = (metricName: string, value: number): string => {
  switch (metricName) {
    case "LCP":
      return value < 2.5 ? "good" : value < 4 ? "needs improvement" : "poor"
    case "FID":
    case "INP":
      return value < 100 ? "good" : value < 300 ? "needs improvement" : "poor"
    case "CLS":
      return value < 0.1 ? "good" : value < 0.25 ? "needs improvement" : "poor"
    case "FCP":
      return value < 1.8 ? "good" : value < 3 ? "needs improvement" : "poor"
    case "TTFB":
      return value < 800 ? "good" : value < 1800 ? "needs improvement" : "poor"
    default:
      return "unknown"
  }
}

export function PerformanceMonitor() {
  useEffect(() => {
    if (typeof window === "undefined") return

    // Web Vitals monitoring
    const reportWebVitals = (metric: {
      name: string
      value: number
      id: string
      delta: number
      entries: PerformanceEntry[]
    }) => {
      // Send to analytics service
      if (typeof window !== "undefined" && (window as any).gtag) {
        (window as any).gtag("event", metric.name, {
          event_category: "Web Vitals",
          event_label: metric.id,
          value: Math.round(metric.name === "CLS" ? metric.value * 1000 : metric.value),
          non_interaction: true,
        })
      }

      // Log to console for development
      if (process.env.NODE_ENV === "development") {
        const rating = getPerformanceRating(metric.name, metric.value)
        console.log(`Web Vital - ${metric.name}:`, {
          value: metric.value,
          delta: metric.delta,
          id: metric.id,
          rating: rating
        })
      }
    }

    // Load Web Vitals library
    import("web-vitals").then(({ getCLS, getFID, getFCP, getLCP, getTTFB, onINP }) => {
      // Core Web Vitals
      getCLS(reportWebVitals)
      getFID(reportWebVitals)
      getFCP(reportWebVitals)
      getLCP(reportWebVitals)
      getTTFB(reportWebVitals)
      
      // Additional metrics
      onINP(reportWebVitals)
    }).catch((error) => {
      console.warn("Failed to load web-vitals:", error)
      // Fallback to basic performance monitoring
      const measurePerformance = () => {
        if (typeof window !== "undefined" && window.performance) {
          const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming
          if (navigation) {
            const metrics = {
              domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
              loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
              totalTime: navigation.loadEventEnd - navigation.fetchStart,
              firstPaint: 0,
              firstContentfulPaint: 0,
            }

            // Try to get paint metrics
            const paintEntries = performance.getEntriesByType("paint")
            paintEntries.forEach((entry) => {
              if (entry.name === "first-paint") {
                metrics.firstPaint = entry.startTime
              } else if (entry.name === "first-contentful-paint") {
                metrics.firstContentfulPaint = entry.startTime
              }
            })

            console.log("Performance metrics:", metrics)
            reportWebVitals({ name: "custom", value: metrics.totalTime, id: "total-time" })
          }
        }
      }

      // Measure performance after page load
      if (document.readyState === "complete") {
        measurePerformance()
      } else {
        window.addEventListener("load", measurePerformance)
      }
    })

    // Performance observer for additional metrics
    if ("PerformanceObserver" in window) {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "navigation") {
            const navEntry = entry as PerformanceNavigationTiming
            console.log("Navigation timing:", {
              domContentLoaded: navEntry.domContentLoadedEventEnd - navEntry.domContentLoadedEventStart,
              loadComplete: navEntry.loadEventEnd - navEntry.loadEventStart,
              totalTime: navEntry.loadEventEnd - navEntry.fetchStart,
            })
          }
        }
      })

      observer.observe({ entryTypes: ["navigation", "paint", "largest-contentful-paint"] })
    }
  }, [])

  return null
}
