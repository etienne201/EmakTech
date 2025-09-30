import type React from "react"
// Performance optimization utilities

// Lazy load images
export const lazyLoadImage = (src: string, placeholder = "/placeholder.svg") => {
  return {
    src: placeholder,
    "data-src": src,
    loading: "lazy" as const,
    onLoad: (e: React.SyntheticEvent<HTMLImageElement>) => {
      const img = e.currentTarget
      if (img.dataset.src) {
        img.src = img.dataset.src
        img.removeAttribute("data-src")
      }
    },
  }
}

// Preload critical resources
export const preloadCriticalResources = () => {
  if (typeof window !== "undefined") {
    try {
      // Preload fonts
      const fontLink = document.createElement("link")
      fontLink.rel = "preload"
      fontLink.href = "/fonts/geist-sans.woff2"
      fontLink.as = "font"
      fontLink.type = "font/woff2"
      fontLink.crossOrigin = "anonymous"
      document.head.appendChild(fontLink)

      // Preload critical images
      const logoLink = document.createElement("link")
      logoLink.rel = "preload"
      logoLink.href = "/logo.png"
      logoLink.as = "image"
      document.head.appendChild(logoLink)
    } catch (error) {
      console.warn("Erreur lors du preload des ressources:", error)
    }
  }
}

// Optimize bundle size with dynamic imports
export const dynamicImport = {
  ContactForm: () => import("@/components/contact-form"),
  ServiceCard: () => import("@/components/service-card"),
  TestimonialSlider: () => import("@/components/testimonial-slider"),
}
