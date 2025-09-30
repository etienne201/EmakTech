// Google Analytics and tracking utilities
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export const GA_TRACKING_ID = process.env.NEXT_PUBLIC_GA_ID

// Track page views
export const pageview = (url: string) => {
  if (typeof window !== "undefined" && window.gtag && GA_TRACKING_ID) {
    try {
      window.gtag("config", GA_TRACKING_ID, {
        page_path: url,
      })
    } catch (error) {
      console.warn("Erreur lors du tracking de page:", error)
    }
  }
}

// Track events
export const event = ({
  action,
  category,
  label,
  value,
}: {
  action: string
  category: string
  label?: string
  value?: number
}) => {
  if (typeof window !== "undefined" && window.gtag) {
    try {
      window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
      })
    } catch (error) {
      console.warn("Erreur lors du tracking d'événement:", error)
    }
  }
}

// Track contact form submissions
export const trackContactForm = (service: string) => {
  event({
    action: "contact_form_submit",
    category: "engagement",
    label: service,
  })
}

// Track phone calls
export const trackPhoneCall = () => {
  event({
    action: "phone_call",
    category: "contact",
    label: "header_phone",
  })
}

// Track WhatsApp clicks
export const trackWhatsApp = () => {
  event({
    action: "whatsapp_click",
    category: "contact",
    label: "floating_button",
  })
}
