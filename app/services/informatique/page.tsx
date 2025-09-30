"use client"
import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Monitor, Smartphone, Cloud } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function InformatiquePage() {
  const [language, setLanguage] = useState<"fr" | "en">("fr")
  const t = translations[language]

  const services = [
    {
      title: language === "fr" ? "Développement Web" : "Web Development",
      description:
        language === "fr"
          ? "Sites web modernes, responsives et optimisés pour tous les appareils"
          : "Modern, responsive websites optimized for all devices",
      icon: Monitor,
      features: [
        language === "fr" ? "Sites vitrine" : "Showcase websites",
        language === "fr" ? "E-commerce" : "E-commerce",
        language === "fr" ? "Applications web" : "Web applications",
        language === "fr" ? "CMS personnalisés" : "Custom CMS",
      ],
    },
    {
      title: language === "fr" ? "Applications Mobiles" : "Mobile Applications",
      description:
        language === "fr"
          ? "Applications natives et hybrides pour iOS et Android"
          : "Native and hybrid applications for iOS and Android",
      icon: Smartphone,
      features: [
        language === "fr" ? "Apps natives" : "Native apps",
        language === "fr" ? "Apps hybrides" : "Hybrid apps",
        language === "fr" ? "UI/UX Design" : "UI/UX Design",
        language === "fr" ? "Maintenance" : "Maintenance",
      ],
    },
    {
      title: language === "fr" ? "Solutions Cloud" : "Cloud Solutions",
      description:
        language === "fr"
          ? "Infrastructure cloud sécurisée et solutions de sauvegarde"
          : "Secure cloud infrastructure and backup solutions",
      icon: Cloud,
      features: [
        language === "fr" ? "Migration cloud" : "Cloud migration",
        language === "fr" ? "Hébergement" : "Hosting",
        language === "fr" ? "Sauvegarde" : "Backup",
        language === "fr" ? "Monitoring" : "Monitoring",
      ],
    },
  ]

  const portfolio = [
    {
      title: language === "fr" ? "Plateforme E-commerce" : "E-commerce Platform",
      category: language === "fr" ? "E-commerce" : "E-commerce",
      image: "/portfolio-ecommerce-platform.jpg",
      description:
        language === "fr"
          ? "Plateforme de vente en ligne complète avec paiement sécurisé"
          : "Complete online sales platform with secure payment",
      tech: ["React", "Node.js", "MongoDB"],
    },
    {
      title: language === "fr" ? "Application Mobile Banking" : "Mobile Banking App",
      category: language === "fr" ? "Mobile" : "Mobile",
      image: "/portfolio-banking-app.jpg",
      description:
        language === "fr"
          ? "Application bancaire sécurisée avec authentification biométrique"
          : "Secure banking application with biometric authentication",
      tech: ["React Native", "Firebase", "Blockchain"],
    },
    {
      title: language === "fr" ? "Système de Gestion" : "Management System",
      category: language === "fr" ? "Web App" : "Web App",
      image: "/portfolio-management-system.jpg",
      description:
        language === "fr" ? "ERP personnalisé pour la gestion d'entreprise" : "Custom ERP for business management",
      tech: ["Vue.js", "Laravel", "MySQL"],
    },
    {
      title: language === "fr" ? "Site Corporate" : "Corporate Website",
      category: language === "fr" ? "Website" : "Website",
      image: "/portfolio-corporate-website.jpg",
      description:
        language === "fr" ? "Site web institutionnel avec CMS personnalisé" : "Institutional website with custom CMS",
      tech: ["Next.js", "Strapi", "PostgreSQL"],
    },
    {
      title: language === "fr" ? "App de Livraison" : "Delivery App",
      category: language === "fr" ? "Mobile" : "Mobile",
      image: "/portfolio-delivery-app.jpg",
      description:
        language === "fr"
          ? "Application de livraison avec géolocalisation en temps réel"
          : "Delivery app with real-time geolocation",
      tech: ["Flutter", "Google Maps", "Firebase"],
    },
    {
      title: language === "fr" ? "Dashboard Analytics" : "Analytics Dashboard",
      category: language === "fr" ? "Web App" : "Web App",
      image: "/portfolio-analytics-dashboard.jpg",
      description:
        language === "fr"
          ? "Tableau de bord analytique avec visualisation de données"
          : "Analytics dashboard with data visualization",
      tech: ["React", "D3.js", "Python"],
    },
  ]

  const technologies = [
    { name: "React", category: "Frontend" },
    { name: "Vue.js", category: "Frontend" },
    { name: "Angular", category: "Frontend" },
    { name: "Node.js", category: "Backend" },
    { name: "Python", category: "Backend" },
    { name: "Laravel", category: "Backend" },
    { name: "React Native", category: "Mobile" },
    { name: "Flutter", category: "Mobile" },
    { name: "MongoDB", category: "Database" },
    { name: "PostgreSQL", category: "Database" },
    { name: "AWS", category: "Cloud" },
    { name: "Docker", category: "DevOps" },
  ]

  const stats = [
    { number: "150+", label: language === "fr" ? "Apps Développées" : "Apps Developed" },
    { number: "80+", label: language === "fr" ? "Clients Satisfaits" : "Satisfied Clients" },
    { number: "7", label: language === "fr" ? "Années d'Expertise" : "Years of Expertise" },
    { number: "99%", label: language === "fr" ? "Uptime Garanti" : "Guaranteed Uptime" },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header language={language} setLanguage={setLanguage} translations={translations} />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-cyan-50 via-blue-50 to-teal-50 dark:from-cyan-950/20 dark:via-blue-950/20 dark:to-teal-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-cyan-500/10 text-cyan-700 border-cyan-500/20">
              {language === "fr" ? "Solutions Informatiques" : "IT Solutions"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.services.it.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {language === "fr"
                ? "Développement d'applications modernes et solutions cloud pour propulser votre entreprise vers le futur"
                : "Modern application development and cloud solutions to propel your business into the future"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg bg-cyan-600 hover:bg-cyan-700">
                {language === "fr" ? "Démarrer un Projet" : "Start a Project"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button variant="outline" size="lg" asChild className="px-8 py-6 text-lg bg-transparent">
                <Link href="#portfolio">{language === "fr" ? "Voir nos Projets" : "View Our Projects"}</Link>
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
                <div className="text-4xl font-bold text-cyan-600 mb-2">{stat.number}</div>
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
              {language === "fr" ? "Nos Solutions Informatiques" : "Our IT Solutions"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Des technologies de pointe pour répondre à tous vos besoins digitaux"
                : "Cutting-edge technologies to meet all your digital needs"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300">
                <CardHeader>
                  <div className="w-12 h-12 bg-cyan-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-cyan-600" />
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

      {/* Technologies */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Technologies Maîtrisées" : "Mastered Technologies"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Nous utilisons les dernières technologies pour créer des solutions performantes"
                : "We use the latest technologies to create high-performance solutions"}
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="text-center p-4 bg-card rounded-lg border hover:shadow-md transition-shadow">
                <div className="text-lg font-semibold text-foreground mb-1">{tech.name}</div>
                <Badge variant="secondary" className="text-xs">
                  {tech.category}
                </Badge>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio */}
      <section id="portfolio" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Projets Réalisés" : "Completed Projects"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez nos dernières réalisations en développement web et mobile"
                : "Discover our latest achievements in web and mobile development"}
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:mx-auto mb-8">
              <TabsTrigger value="all">{language === "fr" ? "Tout" : "All"}</TabsTrigger>
              <TabsTrigger value="web">{language === "fr" ? "Web" : "Web"}</TabsTrigger>
              <TabsTrigger value="mobile">{language === "fr" ? "Mobile" : "Mobile"}</TabsTrigger>
              <TabsTrigger value="cloud">{language === "fr" ? "Cloud" : "Cloud"}</TabsTrigger>
            </TabsList>

            <TabsContent value="all">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {portfolio.map((project, index) => (
                  <Card key={index} className="group hover:shadow-lg transition-all duration-300 overflow-hidden">
                    <div className="relative h-48 overflow-hidden">
                      <Image
                        src={project.image || "/placeholder.svg"}
                        alt={project.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute top-4 left-4">
                        <Badge className="bg-blue-500/90 text-white">{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Transformez votre Vision en Réalité" : "Transform Your Vision into Reality"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Discutons de votre projet et créons ensemble la solution digitale parfaite"
              : "Let's discuss your project and create the perfect digital solution together"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-6 text-lg bg-cyan-600 hover:bg-cyan-700">
              <Link href="/contact">{language === "fr" ? "Démarrer un Projet" : "Start a Project"}</Link>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-6 text-lg bg-transparent">
              {language === "fr" ? "Consultation Gratuite" : "Free Consultation"}
            </Button>
          </div>
        </div>
      </section>

      <Footer language={language} translations={translations} />
      <FloatingActionButtons />
    </div>
  )
}
