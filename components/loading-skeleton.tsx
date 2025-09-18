"use client"

import { cn } from "@/lib/utils"

interface SkeletonProps {
  className?: string
  variant?: "default" | "text" | "image" | "button"
}

export function Skeleton({ className, variant = "default" }: SkeletonProps) {
  const baseClasses = "animate-pulse bg-muted"
  
  const variants = {
    default: "rounded-md",
    text: "rounded h-4",
    image: "rounded-lg aspect-video",
    button: "rounded-full h-10 w-24",
  }

  return (
    <div
      className={cn(
        baseClasses,
        variants[variant],
        className
      )}
    />
  )
}

export function CardSkeleton() {
  return (
    <div className="space-y-4 p-6">
      <Skeleton variant="image" className="h-48" />
      <div className="space-y-2">
        <Skeleton variant="text" className="h-6 w-3/4" />
        <Skeleton variant="text" className="h-4 w-full" />
        <Skeleton variant="text" className="h-4 w-2/3" />
      </div>
      <div className="flex space-x-2">
        <Skeleton variant="button" />
        <Skeleton variant="button" />
      </div>
    </div>
  )
}

export function GallerySkeleton() {
  return (
    <div className="space-y-6">
      <div className="text-center space-y-2">
        <Skeleton variant="text" className="h-8 w-64 mx-auto" />
        <Skeleton variant="text" className="h-4 w-96 mx-auto" />
      </div>
      <div className="relative">
        <Skeleton variant="image" className="h-96 w-full" />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <Skeleton variant="button" className="h-12 w-12 rounded-full" />
          <Skeleton variant="button" className="h-12 w-12 rounded-full" />
        </div>
      </div>
    </div>
  )
}
