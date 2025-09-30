// Image utilities for better error handling and optimization

export interface ImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
  priority?: boolean
  quality?: number
}

// Base64 placeholder for blur effect
const BLUR_DATA_URL = "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAABAAEDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAv/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAX/xAAUEQEAAAAAAAAAAAAAAAAAAAAA/9oADAMBAAIRAxEAPwCdABmX/9k="

// Default placeholder image
const DEFAULT_PLACEHOLDER = "/placeholder.svg"

// List of known working images
const KNOWN_IMAGES = [
  "/logo.png",
  "/modern-ecommerce-website.png",
  "/brand-identity-design-logo.jpg",
  "/international-shipping-containers.jpg",
  "/product-packaging-design.png",
  "/restaurant-branding-design.jpg",
  "/team-ceo-professional.jpg",
  "/team-project-manager.jpg",
  "/team-sales-manager.jpg",
  "/team-technical-director.jpg",
]

/**
 * Get optimized image props with fallback handling
 */
export function getOptimizedImageProps(
  src: string,
  alt: string,
  options: Partial<ImageProps> = {}
): ImageProps {
  const {
    width = 800,
    height = 600,
    className = "",
    priority = false,
    quality = 75,
  } = options

  // Check if image is known to exist
  const isValidImage = KNOWN_IMAGES.includes(src) || src.startsWith("http")
  
  return {
    src: isValidImage ? src : DEFAULT_PLACEHOLDER,
    alt: alt || "Image",
    width,
    height,
    className,
    priority,
    quality,
  }
}

/**
 * Get image with blur placeholder
 */
export function getImageWithBlur(
  src: string,
  alt: string,
  options: Partial<ImageProps> = {}
) {
  const imageProps = getOptimizedImageProps(src, alt, options)
  
  return {
    ...imageProps,
    placeholder: "blur" as const,
    blurDataURL: BLUR_DATA_URL,
  }
}

/**
 * Check if an image exists
 */
export async function checkImageExists(src: string): Promise<boolean> {
  if (!src || typeof src !== "string") {
    return false
  }

  if (src.startsWith("http")) {
    try {
      const response = await fetch(src, { 
        method: "HEAD",
        signal: AbortSignal.timeout(5000) // 5 second timeout
      })
      return response.ok
    } catch (error) {
      console.warn("Erreur lors de la vérification de l'image:", error)
      return false
    }
  }
  
  // For local images, check if they're in our known list
  return KNOWN_IMAGES.includes(src)
}

/**
 * Get fallback image props
 */
export function getFallbackImageProps(alt: string = "Image"): ImageProps {
  return {
    src: DEFAULT_PLACEHOLDER,
    alt: `Placeholder: ${alt}`,
    width: 400,
    height: 300,
    className: "opacity-50",
  }
}

/**
 * Image error handler
 */
export function handleImageError(
  event: React.SyntheticEvent<HTMLImageElement, Event>
) {
  const img = event.currentTarget
  if (img.src !== DEFAULT_PLACEHOLDER) {
    img.src = DEFAULT_PLACEHOLDER
    img.alt = "Image non disponible"
  }
}

/**
 * Preload critical images
 */
export function preloadCriticalImages() {
  if (typeof window === "undefined") return

  const criticalImages = [
    "/logo.png",
    "/modern-ecommerce-website.png",
  ]

  criticalImages.forEach((src) => {
    try {
      const link = document.createElement("link")
      link.rel = "preload"
      link.href = src
      link.as = "image"
      document.head.appendChild(link)
    } catch (error) {
      console.warn("Erreur lors du preload des ressources:", error)
    }
  })
}
