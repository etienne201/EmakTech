"use client"

import { createContext, useContext, useState, useEffect, type ReactNode } from "react"

type Language = "fr" | "en"

interface LanguageContextType {
  language: Language
  setLanguage: (language: Language) => void
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

interface LanguageProviderProps {
  children: ReactNode
}

export function LanguageProvider({ children }: LanguageProviderProps) {
  const [language, setLanguage] = useState<Language>("fr")
  const [isLoaded, setIsLoaded] = useState(false)

  // Load language from localStorage on mount
  useEffect(() => {
    if (typeof window !== "undefined") {
      try {
        const savedLanguage = localStorage.getItem("eeteck-language") as Language
        if (savedLanguage && (savedLanguage === "fr" || savedLanguage === "en")) {
          setLanguage(savedLanguage)
        }
      } catch (error) {
        console.warn("Erreur lors du chargement de la langue:", error)
        // Fallback to default language
        setLanguage("fr")
      } finally {
        setIsLoaded(true)
      }
    }
  }, [])

  // Save language to localStorage when changed
  useEffect(() => {
    if (isLoaded && typeof window !== "undefined") {
      try {
        localStorage.setItem("eeteck-language", language)
      } catch (error) {
        console.warn("Erreur lors de la sauvegarde de la langue:", error)
      }
    }
  }, [language, isLoaded])

  const handleSetLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage)
  }

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
