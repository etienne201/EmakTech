"use client"

import Image from "next/image"
import { useState } from "react"
import { getOptimizedImageProps, getImageWithBlur, handleImageError } from "@/lib/image-utils"
import { cn } from "@/lib/utils"

interface OptimizedImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
  withBlur?: boolean
  fallbackSrc?: string
}

export function OptimizedImage({
  src,
  alt,
  width = 800,
  height = 600,
  className = "",
  priority = false,
  quality = 75,
  withBlur = false,
  fallbackSrc,
}: OptimizedImageProps) {
  const [hasError, setHasError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  const handleError = (event: React.SyntheticEvent<HTMLImageElement, Event>) => {
    console.warn("Erreur de chargement d'image:", event.currentTarget.src)
    setHasError(true)
    handleImageError(event)
  }

  const handleLoad = () => {
    setIsLoading(false)
  }

  // Get image props based on configuration
  const imageProps = withBlur
    ? getImageWithBlur(src, alt, { width, height, className, priority, quality })
    : getOptimizedImageProps(src, alt, { width, height, className, priority, quality })

  // Use fallback if error occurred
  const finalSrc = hasError && fallbackSrc ? fallbackSrc : imageProps.src

  return (
    <div className={cn("relative overflow-hidden", className)}>
      {isLoading && (
        <div className="absolute inset-0 bg-muted animate-pulse flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
        </div>
      )}
      
      <Image
        {...imageProps}
        src={finalSrc}
        onError={handleError}
        onLoad={handleLoad}
        className={cn(
          "transition-opacity duration-300",
          isLoading ? "opacity-0" : "opacity-100",
          className
        )}
      />
      
      {hasError && (
        <div className="absolute inset-0 bg-muted flex items-center justify-center">
          <div className="text-center text-muted-foreground">
            <div className="w-12 h-12 mx-auto mb-2 bg-muted-foreground/20 rounded-full flex items-center justify-center">
              📷
            </div>
            <p className="text-sm">Image non disponible</p>
          </div>
        </div>
      )}
    </div>
  )
}
