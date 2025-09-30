"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, ArrowRight, Lightbulb, HeadphonesIcon, BookOpen } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function PrestationsPage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const services = [
    {
      title: language === "fr" ? "Conseil Stratégique" : "Strategic Consulting",
      description:
        language === "fr"
          ? "Accompagnement personnalisé pour optimiser vos processus et stratégies"
          : "Personalized support to optimize your processes and strategies",
      icon: Lightbulb,
      features: [
        language === "fr" ? "Audit organisationnel" : "Organizational audit",
        language === "fr" ? "Stratégie digitale" : "Digital strategy",
        language === "fr" ? "Optimisation processus" : "Process optimization",
        language === "fr" ? "Plan de transformation" : "Transformation plan",
      ],
    },
    {
      title: language === "fr" ? "Formation Professionnelle" : "Professional Training",
      description:
        language === "fr"
          ? "Programmes de formation adaptés à vos équipes et vos besoins"
          : "Training programs adapted to your teams and needs",
      icon: BookOpen,
      features: [
        language === "fr" ? "Formation sur mesure" : "Custom training",
        language === "fr" ? "Certification" : "Certification",
        language === "fr" ? "E-learning" : "E-learning",
        language === "fr" ? "Suivi personnalisé" : "Personal follow-up",
      ],
    },
    {
      title: language === "fr" ? "Support Technique 24/7" : "24/7 Technical Support",
      description:
        language === "fr"
          ? "Assistance technique continue pour garantir la continuité de vos activités"
          : "Continuous technical assistance to ensure business continuity",
      icon: HeadphonesIcon,
      features: [
        language === "fr" ? "Support 24/7" : "24/7 support",
        language === "fr" ? "Intervention rapide" : "Quick intervention",
        language === "fr" ? "Maintenance préventive" : "Preventive maintenance",
        language === "fr" ? "Monitoring continu" : "Continuous monitoring",
      ],
    },
  ]

  const clientTypes = [
    {
      title: language === "fr" ? "PME & Startups" : "SMEs & Startups",
      description:
        language === "fr"
          ? "Solutions adaptées aux entreprises en croissance"
          : "Solutions adapted to growing businesses",
      image: "/clients-sme-startups.jpg",
      services: [
        language === "fr" ? "Conseil en création d'entreprise" : "Business creation consulting",
        language === "fr" ? "Stratégie de croissance" : "Growth strategy",
        language === "fr" ? "Digitalisation" : "Digitalization",
      ],
    },
    {
      title: language === "fr" ? "Grandes Entreprises" : "Large Enterprises",
      description:
        language === "fr"
          ? "Accompagnement pour les transformations d'envergure"
          : "Support for large-scale transformations",
      image: "/clients-large-enterprises.jpg",
      services: [
        language === "fr" ? "Transformation digitale" : "Digital transformation",
        language === "fr" ? "Gestion du changement" : "Change management",
        language === "fr" ? "Optimisation des coûts" : "Cost optimization",
      ],
    },
    {
      title: language === "fr" ? "Secteur Public" : "Public Sector",
      description:
        language === "fr"
          ? "Services spécialisés pour les administrations publiques"
          : "Specialized services for public administrations",
      image: "/clients-public-sector.jpg",
      services: [
        language === "fr" ? "Modernisation des services" : "Service modernization",
        language === "fr" ? "E-gouvernement" : "E-government",
        language === "fr" ? "Formation des agents" : "Staff training",
      ],
    },
  ]

  const testimonials = [
    {
      name: "Marie KOUAM",
      company: "Directrice, TechStart Cameroun",
      text:
        language === "fr"
          ? "E. E TECH nous a accompagnés dans notre transformation digitale. Leur expertise et leur approche personnalisée ont été déterminantes."
          : "E. E TECH supported us in our digital transformation. Their expertise and personalized approach were decisive.",
      image: "/testimonial-marie-kouam.jpg",
    },
    {
      name: "Jean MBALLA",
      company: "CEO, InnovCorp",
      text:
        language === "fr"
          ? "Le support technique 24/7 de E. E TECH nous permet de nous concentrer sur notre cœur de métier en toute sérénité."
          : "E. E TECH's 24/7 technical support allows us to focus on our core business with peace of mind.",
      image: "/testimonial-jean-mballa.jpg",
    },
    {
      name: "Sarah NKOMO",
      company: "Responsable IT, GovTech",
      text:
        language === "fr"
          ? "Leurs formations ont considérablement amélioré les compétences de nos équipes. Un investissement très rentable."
          : "Their training has significantly improved our teams' skills. A very profitable investment.",
      image: "/testimonial-sarah-nkomo.jpg",
    },
  ]

  const stats = [
    { number: "300+", label: language === "fr" ? "Clients Accompagnés" : "Clients Supported" },
    { number: "50+", label: language === "fr" ? "Formations Dispensées" : "Trainings Delivered" },
    { number: "8", label: language === "fr" ? "Années d'Expérience" : "Years of Experience" },
    { number: "98%", label: language === "fr" ? "Satisfaction Client" : "Client Satisfaction" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-magenta-50 via-pink-50 to-purple-50 dark:from-magenta-950/20 dark:via-pink-950/20 dark:to-purple-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-magenta-500/10 text-magenta-700 border-magenta-500/20">
              {language === "fr" ? "Prestations de Services" : "Service Provisions"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
              {t.services.business.title}
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {language === "fr"
                ? "Accompagnement personnalisé et expertise métier pour propulser votre entreprise vers l'excellence"
                : "Personalized support and business expertise to propel your company towards excellence"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg bg-magenta-600 hover:bg-magenta-700">
                {language === "fr" ? "Découvrir nos Services" : "Discover Our Services"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-lg bg-transparent">
                <Link href="#testimonials">{language === "fr" ? "Témoignages Clients" : "Client Testimonials"}</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-magenta-600 mb-2">{stat.number}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Prestations" : "Our Services"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des services sur mesure pour répondre aux défis spécifiques de votre entreprise"
                : "Tailor-made services to meet your company's specific challenges"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-magenta-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-magenta-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Nos Clients" : "Our Clients"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Nous accompagnons des entreprises de toutes tailles et de tous secteurs"
                : "We support companies of all sizes and from all sectors"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {clientTypes.map((client, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={client.image || "/placeholder.svg"}
                    alt={client.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{client.title}</h3>
                  <p className="text-muted-foreground mb-4">{client.description}</p>
                  <ul className="space-y-1">
                    {client.services.map((service, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-3 h-3 text-green-500 mr-2" />
                        {service}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Témoignages" : "Testimonials"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Ce que nos clients disent de nos prestations"
                : "What our clients say about our services"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="relative">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative w-12 h-12 overflow-hidden rounded-full">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.company}</p>
                    </div>
                  </div>
                  <p className="text-muted-foreground italic">"{testimonial.text}"</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-magenta-500/10 to-purple-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Prêt à Faire Évoluer votre Entreprise ?" : "Ready to Evolve Your Business?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous pour une consultation personnalisée et découvrez comment nous pouvons vous accompagner"
              : "Contact us for a personalized consultation and discover how we can support you"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-6 text-lg bg-magenta-600 hover:bg-magenta-700">
              <Link href="/contact">{language === "fr" ? "Consultation Gratuite" : "Free Consultation"}</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
              {language === "fr" ? "Nos Références" : "Our References"}
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} translations={translations} />
      <FloatingActionButtons />
    </div>
  )
}
