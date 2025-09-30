"use client"
import { useState } from "react"
import type React from "react"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { Phone, Mail, MapPin, Clock, Send, MessageCircle, Building } from "lucide-react"

export default function ContactPage() {
  const { language } = useLanguage()
  const [selectedServices, setSelectedServices] = useState<string[]>([])
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    message: "",
    budget: "",
    timeline: "",
  })

  const t = translations[language]

  const services = [
    { key: "printing", title: t.services.printing.title },
    { key: "it", title: t.services.it.title },
    { key: "prestations", title: t.services.business.title },
    { key: "importExport", title: t.services.trade.title },
  ]

  const contactMethods = [
    {
      icon: Phone,
      title: language === "fr" ? "Téléphone" : "Phone",
      primary: "679 75 18 83",
      secondary: "693 35 11 53",
      description: language === "fr" ? "Appelez-nous directement" : "Call us directly",
      action: () => (window.location.href = "tel:679751883"),
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      primary: "679 75 18 83",
      secondary: language === "fr" ? "Réponse rapide" : "Quick response",
      description: language === "fr" ? "Messagerie instantanée" : "Instant messaging",
      action: () => window.open("https://wa.me/237679751883", "_blank"),
    },
    {
      icon: Mail,
      title: "Email",
      primary: "emaktech237@gmail.com",
      secondary: language === "fr" ? "Réponse sous 24h" : "Response within 24h",
      description: language === "fr" ? "Envoyez-nous un email" : "Send us an email",
      action: () => (window.location.href = "mailto:emaktech237@gmail.com"),
    },
  ]

  const officeHours = [
    {
      days: language === "fr" ? "Lundi - Vendredi" : "Monday - Friday",
      hours: "8:00 - 18:00",
      type: language === "fr" ? "Heures d'ouverture" : "Business hours",
    },
    {
      days: language === "fr" ? "Samedi" : "Saturday",
      hours: "9:00 - 15:00",
      type: language === "fr" ? "Demi-journée" : "Half day",
    },
    {
      days: language === "fr" ? "Dimanche" : "Sunday",
      hours: language === "fr" ? "Fermé" : "Closed",
      type: language === "fr" ? "Repos" : "Rest day",
    },
    {
      days: language === "fr" ? "Urgences" : "Emergencies",
      hours: "24/7",
      type: language === "fr" ? "Support d'urgence" : "Emergency support",
    },
  ]

  const faqs = [
    {
      question: language === "fr" ? "Quels sont vos délais de livraison ?" : "What are your delivery times?",
      answer:
        language === "fr"
          ? "Les délais varient selon le service : 24-48h pour l'impression, 2-8 semaines pour le développement web, et 1-4 semaines pour l'import-export selon la destination."
          : "Delivery times vary by service: 24-48h for printing, 2-8 weeks for web development, and 1-4 weeks for import-export depending on destination.",
    },
    {
      question: language === "fr" ? "Proposez-vous des devis gratuits ?" : "Do you offer free quotes?",
      answer:
        language === "fr"
          ? "Oui, nous proposons des devis gratuits et personnalisés pour tous nos services. Contactez-nous avec les détails de votre projet."
          : "Yes, we offer free and personalized quotes for all our services. Contact us with your project details.",
    },
    {
      question:
        language === "fr"
          ? "Travaillez-vous avec des clients internationaux ?"
          : "Do you work with international clients?",
      answer:
        language === "fr"
          ? "Absolument ! Nous avons une expertise particulière dans le commerce international et travaillons avec des clients dans plus de 25 pays."
          : "We have particular expertise in international trade and work with clients in over 25 countries.",
    },
    {
      question: language === "fr" ? "Quels modes de paiement acceptez-vous ?" : "What payment methods do you accept?",
      answer:
        language === "fr"
          ? "Nous acceptons les virements bancaires, Mobile Money, Western Union, et les paiements en espèces pour les clients locaux."
          : "We accept bank transfers, Mobile Money, Western Union, and cash payments for local clients.",
    },
  ]

  const handleServiceToggle = (service: string) => {
    setSelectedServices((prev) => (prev.includes(service) ? prev.filter((s) => s !== service) : [...prev, service]))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { ...formData, services: selectedServices })
    // Here you would implement the form submission logic
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/10 text-primary border-primary/20">
              {language === "fr" ? "Contactez-nous" : "Contact Us"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.contact.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {language === "fr"
                ? "Prêt à démarrer votre projet ? Contactez-nous dès aujourd'hui pour une consultation personnalisée"
                : "Ready to start your project? Contact us today for a personalized consultation"}
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {contactMethods.map((method, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
                onClick={method.action}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary group-hover:text-white transition-colors">
                    <method.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{method.title}</h3>
                  <p className="text-lg font-medium text-primary mb-1">{method.primary}</p>
                  <p className="text-sm text-muted-foreground mb-3">{method.secondary}</p>
                  <p className="text-sm text-muted-foreground">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">{t.contact.form}</CardTitle>
                <CardDescription>
                  {language === "fr"
                    ? "Remplissez ce formulaire et nous vous répondrons dans les plus brefs délais"
                    : "Fill out this form and we will get back to you as soon as possible"}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="name">{t.contact.name} *</Label>
                      <Input
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">{t.contact.email} *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">{language === "fr" ? "Téléphone" : "Phone"}</Label>
                      <Input
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="company">{language === "fr" ? "Entreprise" : "Company"}</Label>
                      <Input
                        id="company"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label>{t.contact.services}</Label>
                    <div className="grid grid-cols-2 gap-3 mt-2">
                      {services.map((service) => (
                        <div key={service.key} className="flex items-center space-x-2">
                          <Checkbox
                            id={service.key}
                            checked={selectedServices.includes(service.key)}
                            onCheckedChange={() => handleServiceToggle(service.key)}
                          />
                          <Label htmlFor={service.key} className="text-sm">
                            {service.title}
                          </Label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="budget">{language === "fr" ? "Budget estimé" : "Estimated budget"}</Label>
                      <Input
                        id="budget"
                        placeholder={language === "fr" ? "Ex: 500 000 FCFA" : "Ex: $1000"}
                        value={formData.budget}
                        onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                      />
                    </div>
                    <div>
                      <Label htmlFor="timeline">{language === "fr" ? "Délai souhaité" : "Desired timeline"}</Label>
                      <Input
                        id="timeline"
                        placeholder={language === "fr" ? "Ex: 2 semaines" : "Ex: 2 weeks"}
                        value={formData.timeline}
                        onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                      />
                    </div>
                  </div>

                  <div>
                    <Label htmlFor="message">{t.contact.message} *</Label>
                    <Textarea
                      id="message"
                      rows={4}
                      placeholder={
                        language === "fr" ? "Décrivez votre projet en détail..." : "Describe your project in detail..."
                      }
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full" size="lg">
                    <Send className="w-4 h-4 mr-2" />
                    {t.contact.send}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Info & Map */}
            <div className="space-y-8">
              {/* Office Info */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Building className="w-6 h-6 text-primary" />
                    {language === "fr" ? "Nos Bureaux" : "Our Offices"}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-muted-foreground mt-1" />
                    <div>
                      <p className="font-medium">E. E TECH</p>
                      <p className="text-muted-foreground">Terminus Saint Michel</p>
                      <p className="text-muted-foreground">Douala, Cameroun</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                    <div>
                      <p className="font-medium">679 75 18 83</p>
                      <p className="text-sm text-muted-foreground">693 35 11 53</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-muted-foreground" />
                    <p className="font-medium">emaktech237@gmail.com</p>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-primary" />
                    {language === "fr" ? "Horaires d'Ouverture" : "Opening Hours"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {officeHours.map((schedule, index) => (
                      <div
                        key={index}
                        className="flex justify-between items-center py-2 border-b border-border/50 last:border-0"
                      >
                        <div>
                          <p className="font-medium">{schedule.days}</p>
                          <p className="text-sm text-muted-foreground">{schedule.type}</p>
                        </div>
                        <Badge variant={schedule.hours === "24/7" ? "default" : "secondary"}>{schedule.hours}</Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Map */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <MapPin className="w-6 h-6 text-primary" />
                    {language === "fr" ? "Localisation" : "Location"}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3979.8234567890123!2d9.7678901234567!3d4.0612345678901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sTerminus%20Saint%20Michel%2C%20Douala%2C%20Cameroun!5e0!3m2!1sfr!2scm!4v1234567890123!5m2!1sfr!2scm"
                      width="100%"
                      height="100%"
                      className="border-0"
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="E. E TECH Location - Terminus Saint Michel, Douala"
                    />
                  </div>
                  <div className="mt-4 text-center">
                    <Button variant="outline" asChild>
                      <a
                        href="https://maps.google.com/?q=Terminus+Saint+Michel,+Douala,+Cameroun"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <MapPin className="w-4 h-4 mr-2" />
                        {language === "fr" ? "Ouvrir dans Google Maps" : "Open in Google Maps"}
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Questions Fréquentes" : "Frequently Asked Questions"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Trouvez rapidement les réponses aux questions les plus courantes"
                : "Quickly find answers to the most common questions"}
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <Card key={index}>
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-3">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary/10 to-secondary/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Besoin d'une Réponse Immédiate ?" : "Need an Immediate Response?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Appelez-nous directement ou envoyez-nous un message WhatsApp pour une réponse rapide"
              : "Call us directly or send us a WhatsApp message for a quick response"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="px-8 py-6 text-lg" onClick={() => (window.location.href = "tel:679751883")}>
              <Phone className="w-5 h-5 mr-2" />
              {language === "fr" ? "Appeler Maintenant" : "Call Now"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg bg-green-500 text-white hover:bg-green-600 border-green-500"
              onClick={() => window.open("https://wa.me/237679751883", "_blank")}
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
