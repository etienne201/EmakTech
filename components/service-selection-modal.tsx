"use client"

import { useState } from "react"
import { useLanguage } from "@/lib/language-context"
import { translations } from "@/lib/translations"

// === Typages ===
type ServiceKey = "imprimerie" | "informatique" | "prestations" | "import-export"

interface ServiceSelectionModalProps {
  isOpen: boolean
  onClose: () => void
  type: "email" | "whatsapp"
}

interface FormData {
  name: string
  email: string
  phone: string
  service: ServiceKey | ""
  domain: string
  message: string
}

// === Services & Domains ===
const getServices = (t: typeof translations.fr | typeof translations.en) => [
  { value: "imprimerie" as ServiceKey, label: t.services.printing.title },
  { value: "informatique" as ServiceKey, label: t.services.it.title },
  { value: "prestations" as ServiceKey, label: t.services.business.title },
  { value: "import-export" as ServiceKey, label: t.services.trade.title },
]

const getDomains = (t: typeof translations.fr | typeof translations.en): Record<ServiceKey, { value: string; label: string }[]> => ({
  imprimerie: [
    { value: "infographie", label: t.services.printing.infography },
    { value: "serigraphie", label: t.services.printing.screenPrinting },
    { value: "designGraphique", label: t.services.printing.graphicDesign },
  ],
  informatique: [
    { value: "web", label: t.services.it.webDev },
    { value: "mobile", label: t.services.it.mobileDev },
    { value: "webDesign", label: t.services.it.webDesign },
    { value: "qa", label: t.services.it.qa },
    { value: "cloud", label: t.services.it.cloud },
  ],
  prestations: [
    { value: "consulting", label: "Conseil en entreprise" },
    { value: "formation", label: "Formation professionnelle" },
    { value: "audit", label: "Audit & Expertise" },
    { value: "gestion", label: "Gestion de projet" },
  ],
  "import-export": [
    { value: "sourcing", label: "Sourcing produits" },
    { value: "logistique", label: "Logistique internationale" },
    { value: "douane", label: "Procédures douanières" },
    { value: "distribution", label: "Distribution" },
  ],
})

// === Composant principal ===
export function ServiceSelectionModal({ isOpen, onClose, type }: ServiceSelectionModalProps) {
  const { language } = useLanguage()
  const t = translations[language]

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    domain: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")

  const services = getServices(t)
  const domains = getDomains(t)

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData(prev => ({
      ...prev,
      [field]: value,
      ...(field === "service" ? { domain: "" } : {}),
    }))
  }

  const resetForm = () => setFormData({ name: "", email: "", phone: "", service: "", domain: "", message: "" })

  const buildWhatsappMessage = (data: FormData) => {
    return `🎯 *DEMANDE DE SERVICE - E.E TECK*

👤 Nom: *${data.name}*
📧 Email: ${data.email}
📱 Téléphone: ${data.phone}

📌 Service demandé: *${data.service}*
🔹 Domaine: ${data.domain}

💬 Message:
${data.message || "—"}`.trim()
  }

  const onSubmit = async () => {
    setIsSubmitting(true)
    setSubmitStatus("idle")

    try {
      if (type === "whatsapp") {
        const message = buildWhatsappMessage(formData)
        const encoded = encodeURIComponent(message)
        const whatsappUrl = `https://wa.me/237679751883?text=${encoded}`
        
        // Vérifier si window.open est disponible
        if (typeof window !== "undefined" && window.open) {
          window.open(whatsappUrl, "_blank")
        } else {
          throw new Error("Impossible d'ouvrir WhatsApp")
        }
      } else {
        // Simulation d'envoi d'email
        await new Promise(resolve => setTimeout(resolve, 1200))
      }

      setSubmitStatus("success")
      resetForm()
    } catch (err) {
      console.error("Erreur lors de la soumission:", err)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-2xl shadow-xl p-6 w-full max-w-lg">
        <h2 className="text-xl font-semibold mb-4">{t.modal.title}</h2>

        <div className="space-y-3">
          <input
            type="text"
            placeholder={t.form.name}
            value={formData.name}
            onChange={e => handleInputChange("name", e.target.value)}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="email"
            placeholder={t.form.email}
            value={formData.email}
            onChange={e => handleInputChange("email", e.target.value)}
            className="w-full border rounded-lg p-2"
          />
          <input
            type="tel"
            placeholder={t.form.phone}
            value={formData.phone}
            onChange={e => handleInputChange("phone", e.target.value)}
            className="w-full border rounded-lg p-2"
          />

          {/* Select Service */}
          <select
            value={formData.service}
            onChange={e => handleInputChange("service", e.target.value)}
            className="w-full border rounded-lg p-2"
            aria-label={t.form.selectService}
          >
            <option value="">{t.form.selectService}</option>
            {services.map(s => (
              <option key={s.value} value={s.value}>
                {s.label}
              </option>
            ))}
          </select>

          {/* Select Domain */}
          {formData.service && (
            <select
              value={formData.domain}
              onChange={e => handleInputChange("domain", e.target.value)}
              className="w-full border rounded-lg p-2"
              aria-label={t.form.selectDomain}
            >
              <option value="">{t.form.selectDomain}</option>
              {(domains[formData.service as ServiceKey] || []).map(d => (
                <option key={d.value} value={d.value}>
                  {d.label}
                </option>
              ))}
            </select>
          )}

          <textarea
            placeholder={t.form.message}
            value={formData.message}
            onChange={e => handleInputChange("message", e.target.value)}
            className="w-full border rounded-lg p-2 h-28"
          />
        </div>

        <div className="mt-5 flex justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
          >
            {t.form.cancel}
          </button>
          <button
            onClick={onSubmit}
            disabled={isSubmitting}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
          >
            {isSubmitting ? t.form.sending : t.form.submit}
          </button>
        </div>

        {submitStatus === "success" && (
          <p className="text-green-600 mt-3">{t.form.success}</p>
        )}
        {submitStatus === "error" && (
          <p className="text-red-600 mt-3">{t.form.error}</p>
        )}
      </div>
    </div>
  )
}
