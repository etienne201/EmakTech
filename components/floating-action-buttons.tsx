"use client"

import { useState, useEffect } from "react"
import { Phone, MessageCircle, ChevronUp, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { ServiceSelectionModal } from "@/components/service-selection-modal"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

export function FloatingActionButtons() {
  const { language } = useLanguage()
  const t = translations[language]
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [modalOpen, setModalOpen] = useState(false)
  const [modalType, setModalType] = useState<"email" | "whatsapp">("email")

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleCall = () => {
    try {
      if (typeof window !== "undefined") {
        window.location.href = "tel:+237679751883"
      }
    } catch (error) {
      console.warn("Erreur lors de l'appel:", error)
    }
  }

  const handleWhatsApp = () => {
    setModalType("whatsapp")
    setModalOpen(true)
  }

  const handleEmail = () => {
    setModalType("email")
    setModalOpen(true)
  }

  const scrollToTop = () => {
    try {
      if (typeof window !== "undefined" && window.scrollTo) {
        window.scrollTo({ top: 0, behavior: "smooth" })
      }
    } catch (error) {
      console.warn("Erreur lors du scroll:", error)
    }
  }

  return (
    <TooltipProvider>
      <div className="fixed bottom-6 left-6 z-50 flex flex-col gap-3">
        {/* Main Action Buttons */}
        <div className="flex flex-col gap-3">
          {/* Phone Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleCall}
                size="lg"
                className="w-14 h-14 rounded-full bg-secondary hover:bg-secondary/90 text-secondary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Appeler E. E TECH"
              >
                <Phone className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{language === "fr" ? "Appeler: 679 75 18 83" : "Call: 679 75 18 83"}</p>
            </TooltipContent>
          </Tooltip>

          {/* WhatsApp Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleWhatsApp}
                size="lg"
                className="w-14 h-14 rounded-full bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="WhatsApp E. E TECH"
              >
                <MessageCircle className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{language === "fr" ? "WhatsApp: Choisir un service" : "WhatsApp: Choose a service"}</p>
            </TooltipContent>
          </Tooltip>

          {/* Email Button */}
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={handleEmail}
                size="lg"
                className="w-14 h-14 rounded-full bg-accent hover:bg-accent/90 text-accent-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Email E. E TECH"
              >
                <Mail className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{language === "fr" ? "Email: Formulaire de contact" : "Email: Contact form"}</p>
            </TooltipContent>
          </Tooltip>
        </div>

        {/* Scroll to Top Button */}
        {showScrollTop && (
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={scrollToTop}
                size="lg"
                variant="outline"
                className="w-14 h-14 rounded-full bg-background/90 backdrop-blur-sm border-2 border-primary hover:bg-primary hover:text-primary-foreground shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
                aria-label="Retour en haut"
              >
                <ChevronUp className="w-6 h-6" />
              </Button>
            </TooltipTrigger>
            <TooltipContent side="right">
              <p>{language === "fr" ? "Retour en haut" : "Back to top"}</p>
            </TooltipContent>
          </Tooltip>
        )}
      </div>

      {/* Mobile-friendly contact info overlay */}
      <div className="fixed bottom-6 right-6 z-40 md:hidden">
        <div className="bg-card/95 backdrop-blur-sm rounded-lg p-3 shadow-lg border border-primary/20 text-xs">
          <div className="text-center">
            <p className="font-semibold text-foreground">E. E TECH</p>
            <p className="text-muted-foreground">679 75 18 83</p>
          </div>
        </div>
      </div>

      {/* === Modal === */}
      <ServiceSelectionModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        type={modalType}
      />
    </TooltipProvider>
  )
}
