"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingActionButtons } from "@/components/floating-action-buttons"
import { translations } from "@/lib/translations"
import { useLanguage } from "@/lib/language-context"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CheckCircle, ArrowRight, Printer, Palette, FileImage } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function ImprimeriePage() {
  const { language } = useLanguage()
  const t = translations[language]

  const services = [
    {
      title: language === "fr" ? "Infographie Professionnelle" : "Professional Infographics",
      description:
        language === "fr"
          ? "Création de visuels percutants pour tous vos supports de communication"
          : "Creation of impactful visuals for all your communication materials",
      icon: Palette,
      features: [
        language === "fr" ? "Design de logos" : "Logo design",
        language === "fr" ? "Identité visuelle" : "Visual identity",
        language === "fr" ? "Supports publicitaires" : "Advertising materials",
        language === "fr" ? "Infographies" : "Infographics",
      ],
    },
    {
      title: language === "fr" ? "Sérigraphie Haute Qualité" : "High Quality Screen Printing",
      description:
        language === "fr"
          ? "Impression sérigraphique pour textiles, objets promotionnels et signalétique"
          : "Screen printing for textiles, promotional items and signage",
      icon: Printer,
      features: [
        language === "fr" ? "T-shirts personnalisés" : "Custom t-shirts",
        language === "fr" ? "Objets promotionnels" : "Promotional items",
        language === "fr" ? "Panneaux publicitaires" : "Advertising panels",
        language === "fr" ? "Marquage textile" : "Textile marking",
      ],
    },
    {
      title: language === "fr" ? "Impression Grand Format" : "Large Format Printing",
      description:
        language === "fr"
          ? "Solutions d'impression pour tous vos besoins en grand format"
          : "Printing solutions for all your large format needs",
      icon: FileImage,
      features: [
        language === "fr" ? "Bâches publicitaires" : "Advertising banners",
        language === "fr" ? "Roll-up et kakémonos" : "Roll-ups and banners",
        language === "fr" ? "Affiches grand format" : "Large format posters",
        language === "fr" ? "Habillage véhicules" : "Vehicle wrapping",
      ],
    },
  ]

  const portfolio = [
    {
      title: language === "fr" ? "Identité Visuelle Restaurant" : "Restaurant Visual Identity",
      category: language === "fr" ? "Branding" : "Branding",
      image: "/portfolio-restaurant-branding.jpg",
      description:
        language === "fr"
          ? "Création complète d'identité visuelle pour une chaîne de restaurants"
          : "Complete visual identity creation for a restaurant chain",
    },
    {
      title: language === "fr" ? "Campagne Publicitaire" : "Advertising Campaign",
      category: language === "fr" ? "Publicité" : "Advertising",
      image: "/portfolio-advertising-campaign.jpg",
      description:
        language === "fr"
          ? "Conception et impression de supports pour campagne nationale"
          : "Design and printing of materials for national campaign",
    },
    {
      title: language === "fr" ? "Packaging Produit" : "Product Packaging",
      category: language === "fr" ? "Packaging" : "Packaging",
      image: "/portfolio-product-packaging.jpg",
      description:
        language === "fr"
          ? "Design et production d'emballages pour produits cosmétiques"
          : "Design and production of packaging for cosmetic products",
    },
    {
      title: language === "fr" ? "Signalétique Entreprise" : "Corporate Signage",
      category: language === "fr" ? "Signalétique" : "Signage",
      image: "/portfolio-corporate-signage.jpg",
      description:
        language === "fr"
          ? "Système de signalétique complète pour complexe d'entreprises"
          : "Complete signage system for business complex",
    },
    {
      title: language === "fr" ? "Supports Événementiels" : "Event Materials",
      category: language === "fr" ? "Événementiel" : "Events",
      image: "/portfolio-event-materials.jpg",
      description:
        language === "fr"
          ? "Conception et impression pour salon professionnel international"
          : "Design and printing for international trade show",
    },
    {
      title: language === "fr" ? "Collection Textile" : "Textile Collection",
      category: language === "fr" ? "Textile" : "Textile",
      image: "/portfolio-textile-collection.jpg",
      description:
        language === "fr"
          ? "Sérigraphie sur collection de vêtements de sport"
          : "Screen printing on sports clothing collection",
    },
  ]

  const stats = [
    { number: "200+", label: language === "fr" ? "Projets Imprimés" : "Printed Projects" },
    { number: "50+", label: language === "fr" ? "Clients Réguliers" : "Regular Clients" },
    { number: "5", label: language === "fr" ? "Années d'Expertise" : "Years of Expertise" },
    { number: "24h", label: language === "fr" ? "Délai Express" : "Express Delivery" },
  ]

  const process = [
    {
      step: "01",
      title: language === "fr" ? "Consultation" : "Consultation",
      description:
        language === "fr"
          ? "Analyse de vos besoins et définition du projet"
          : "Analysis of your needs and project definition",
    },
    {
      step: "02",
      title: language === "fr" ? "Conception" : "Design",
      description:
        language === "fr"
          ? "Création des maquettes et validation des designs"
          : "Creation of mockups and design validation",
    },
    {
      step: "03",
      title: language === "fr" ? "Production" : "Production",
      description:
        language === "fr"
          ? "Impression et fabrication avec contrôle qualité"
          : "Printing and manufacturing with quality control",
    },
    {
      step: "04",
      title: language === "fr" ? "Livraison" : "Delivery",
      description: language === "fr" ? "Livraison dans les délais convenus" : "Delivery within agreed timeframes",
    },
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 bg-gradient-to-br from-magenta-50 via-yellow-50 to-cyan-50 dark:from-magenta-950/20 dark:via-yellow-950/20 dark:to-cyan-950/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-magenta-500/10 text-magenta-700 border-magenta-500/20">
              {language === "fr" ? "Services d'Imprimerie" : "Printing Services"}
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">{t.services.printing.title}</h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-pretty max-w-3xl mx-auto">
              {language === "fr"
                ? "De l'infographie à l'impression, nous donnons vie à vos idées avec créativité et expertise technique"
                : "From infographics to printing, we bring your ideas to life with creativity and technical expertise"}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="px-8 py-6 text-lg bg-magenta-600 hover:bg-magenta-700">
                {language === "fr" ? "Demander un Devis" : "Request Quote"}
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                asChild
                className="px-8 py-6 text-lg bg-transparent border-cyan-500 text-cyan-600 hover:bg-cyan-50"
              >
                <Link href="#portfolio">{language === "fr" ? "Voir nos Réalisations" : "View Our Work"}</Link>
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
              {language === "fr" ? "Nos Services d'Imprimerie" : "Our Printing Services"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une gamme complète de services pour tous vos besoins d'impression et de design"
                : "A complete range of services for all your printing and design needs"}
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 border-l-4 border-l-magenta-500"
              >
                <CardHeader>
                  <div className="w-12 h-12 bg-yellow-500/10 rounded-lg flex items-center justify-center mb-4">
                    <service.icon className="w-6 h-6 text-yellow-600" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm">
                        <CheckCircle className="w-4 h-4 text-cyan-500 mr-2" />
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

      {/* Process */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              {language === "fr" ? "Notre Processus" : "Our Process"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Une méthode éprouvée pour garantir la qualité et respecter les délais"
                : "A proven method to guarantee quality and meet deadlines"}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-magenta-500 to-cyan-500 text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
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
              {language === "fr" ? "Portfolio" : "Portfolio"}
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              {language === "fr"
                ? "Découvrez quelques-unes de nos réalisations les plus marquantes"
                : "Discover some of our most remarkable achievements"}
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full grid-cols-4 lg:w-fit lg:mx-auto mb-8">
              <TabsTrigger value="all">{language === "fr" ? "Tout" : "All"}</TabsTrigger>
              <TabsTrigger value="branding">{language === "fr" ? "Branding" : "Branding"}</TabsTrigger>
              <TabsTrigger value="print">{language === "fr" ? "Impression" : "Print"}</TabsTrigger>
              <TabsTrigger value="signage">{language === "fr" ? "Signalétique" : "Signage"}</TabsTrigger>
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
                        <Badge className="bg-magenta-500/90 text-white">{project.category}</Badge>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                      <p className="text-muted-foreground">{project.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-magenta-500/10 to-cyan-500/10">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            {language === "fr" ? "Prêt à Concrétiser votre Projet ?" : "Ready to Bring Your Project to Life?"}
          </h2>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            {language === "fr"
              ? "Contactez-nous pour discuter de votre projet d'impression et obtenir un devis personnalisé"
              : "Contact us to discuss your printing project and get a personalized quote"}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" asChild className="px-8 py-6 text-lg bg-magenta-600 hover:bg-magenta-700">
              <Link href="/contact">{language === "fr" ? "Demander un Devis" : "Request Quote"}</Link>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="px-8 py-6 text-lg bg-transparent border-cyan-500 text-cyan-600 hover:bg-cyan-50"
            >
              <a href="tel:+237679751883">{language === "fr" ? "Appeler Maintenant" : "Call Now"}</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingActionButtons />
    </div>
  )
}
